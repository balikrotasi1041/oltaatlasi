const PRIMARY_HOST = "oltaatlasi.com";
const PERMANENT_REDIRECT_HOSTS = new Set([
  "www.oltaatlasi.com",
  "balik-rotasi.balikrotasi1041.workers.dev",
]);
const ADMIN_PREFIX = "/admin";
const encoder = new TextEncoder();

const isAdminPath = (pathname) => pathname === ADMIN_PREFIX || pathname.startsWith(`${ADMIN_PREFIX}/`);

const withSecurityHeaders = (response, extraHeaders = {}) => {
  const secured = new Response(response.body, response);
  secured.headers.set("X-Content-Type-Options", "nosniff");
  secured.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  secured.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  for (const [key, value] of Object.entries(extraHeaders)) secured.headers.set(key, value);
  return secured;
};

const jsonResponse = (payload, status = 200) => withSecurityHeaders(
  new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  }),
  { "Cache-Control": "private, no-store" },
);

const timingSafeEqual = (left, right) => {
  const a = encoder.encode(String(left));
  const b = encoder.encode(String(right));
  const length = Math.max(a.length, b.length, 1);
  let difference = a.length ^ b.length;
  for (let index = 0; index < length; index += 1) {
    difference |= (a[index] || 0) ^ (b[index] || 0);
  }
  return difference === 0;
};

const readBasicCredentials = (request) => {
  const header = request.headers.get("Authorization") || "";
  if (!header.startsWith("Basic ")) return null;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(":");
    if (separator < 0) return null;
    return { username: decoded.slice(0, separator), password: decoded.slice(separator + 1) };
  } catch {
    return null;
  }
};

const adminAuthConfigured = (env) => Boolean(env.ADMIN_USERNAME && env.ADMIN_PASSWORD);
const adminAuthorized = (request, env) => {
  const credentials = readBasicCredentials(request);
  if (!credentials) return false;
  return timingSafeEqual(credentials.username, env.ADMIN_USERNAME) && timingSafeEqual(credentials.password, env.ADMIN_PASSWORD);
};

const unauthorizedResponse = () => withSecurityHeaders(
  new Response("Yönetim paneli için kimlik doğrulaması gerekiyor.", {
    status: 401,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "WWW-Authenticate": 'Basic realm="Olta Atlasi Yonetim", charset="UTF-8"',
    },
  }),
  { "Cache-Control": "private, no-store" },
);

const adminNotConfiguredResponse = () => withSecurityHeaders(
  new Response("Yönetim paneli güvenlik sırları henüz yapılandırılmadı.", {
    status: 503,
    headers: { "content-type": "text/plain; charset=utf-8" },
  }),
  { "Cache-Control": "private, no-store" },
);

const base64Url = (value) => {
  const bytes = typeof value === "string" ? encoder.encode(value) : value;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};

const pemToBytes = (pem) => {
  const normalized = String(pem).replace(/\\n/g, "\n");
  const body = normalized
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s+/g, "");
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
};

const getServiceAccount = (env) => {
  if (env.GSC_SERVICE_ACCOUNT_JSON) {
    const parsed = JSON.parse(env.GSC_SERVICE_ACCOUNT_JSON);
    return { email: parsed.client_email, privateKey: parsed.private_key };
  }
  return { email: env.GSC_SERVICE_ACCOUNT_EMAIL, privateKey: env.GSC_PRIVATE_KEY };
};

const createGoogleJwt = async ({ email, privateKey }) => {
  if (!email || !privateKey) throw new Error("Search Console servis hesabı bilgileri eksik.");
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToBytes(privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, encoder.encode(unsigned));
  return `${unsigned}.${base64Url(new Uint8Array(signature))}`;
};

const getGoogleAccessToken = async (env) => {
  const assertion = await createGoogleJwt(getServiceAccount(env));
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error_description || payload.error || "Google erişim belirteci alınamadı.");
  }
  return payload.access_token;
};

const isoDate = (date) => date.toISOString().slice(0, 10);
const searchConsoleQuery = async ({ accessToken, siteUrl, body }) => {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) {
    const message = payload?.error?.message || "Search Console sorgusu başarısız oldu.";
    throw new Error(message);
  }
  return payload.rows || [];
};

const handleSearchConsole = async (request, env) => {
  if (request.method !== "GET") return jsonResponse({ error: "Yalnızca GET desteklenir." }, 405);
  try {
    const requestUrl = new URL(request.url);
    const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "28", 10);
    const days = [7, 28, 90].includes(requestedDays) ? requestedDays : 28;
    const end = new Date();
    end.setUTCDate(end.getUTCDate() - 2);
    const start = new Date(end);
    start.setUTCDate(start.getUTCDate() - (days - 1));
    const startDate = isoDate(start);
    const endDate = isoDate(end);
    const siteUrl = env.GSC_SITE_URL || "https://oltaatlasi.com/";
    const accessToken = await getGoogleAccessToken(env);
    const common = { startDate, endDate, searchType: "web", dataState: "all" };
    const [summaryRows, dailyRows, queryRows, pageRows] = await Promise.all([
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, rowLimit: 1 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["date"], rowLimit: 1000 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["query"], rowLimit: 10 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["page"], rowLimit: 10 } }),
    ]);
    const summary = summaryRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const mapRows = (rows, keyName) => rows.map((row) => ({
      [keyName]: row.keys?.[0] || "",
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: row.ctr || 0,
      position: row.position || 0,
    }));
    return jsonResponse({
      connected: true,
      siteUrl,
      range: { days, startDate, endDate },
      totals: {
        clicks: summary.clicks || 0,
        impressions: summary.impressions || 0,
        ctr: summary.ctr || 0,
        position: summary.position || 0,
      },
      daily: mapRows(dailyRows, "date"),
      queries: mapRows(queryRows, "query"),
      pages: mapRows(pageRows, "page"),
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    return jsonResponse({ connected: false, error: error instanceof Error ? error.message : "Bilinmeyen Search Console hatası." }, 502);
  }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (PERMANENT_REDIRECT_HOSTS.has(url.hostname)) {
      url.protocol = "https:";
      url.hostname = PRIMARY_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    if (isAdminPath(url.pathname)) {
      if (!adminAuthConfigured(env)) return adminNotConfiguredResponse();
      if (!adminAuthorized(request, env)) return unauthorizedResponse();
      if (url.pathname === "/admin/api/search-console") return handleSearchConsole(request, env);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse, isAdminPath(url.pathname) ? { "Cache-Control": "private, no-store" } : {});
  },
};
