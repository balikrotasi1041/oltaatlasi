const PRIMARY_HOST = "oltaatlasi.com";
const PERMANENT_REDIRECT_HOSTS = new Set(["www.oltaatlasi.com", "balik-rotasi.balikrotasi1041.workers.dev"]);
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
const jsonResponse = (payload, status = 200) => withSecurityHeaders(new Response(JSON.stringify(payload), { status, headers: { "content-type": "application/json; charset=utf-8" } }), { "Cache-Control": "private, no-store" });

const timingSafeEqual = (left, right) => {
  const a = encoder.encode(String(left));
  const b = encoder.encode(String(right));
  const length = Math.max(a.length, b.length, 1);
  let difference = a.length ^ b.length;
  for (let index = 0; index < length; index += 1) difference |= (a[index] || 0) ^ (b[index] || 0);
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
  } catch { return null; }
};
const adminAuthConfigured = (env) => Boolean(env.ADMIN_USERNAME && env.ADMIN_PASSWORD);
const adminAuthorized = (request, env) => {
  const credentials = readBasicCredentials(request);
  return Boolean(credentials) && timingSafeEqual(credentials.username, env.ADMIN_USERNAME) && timingSafeEqual(credentials.password, env.ADMIN_PASSWORD);
};
const unauthorizedResponse = () => withSecurityHeaders(new Response("Yönetim paneli için kimlik doğrulaması gerekiyor.", { status: 401, headers: { "content-type": "text/plain; charset=utf-8", "WWW-Authenticate": 'Basic realm="Olta Atlasi Yonetim", charset="UTF-8"' } }), { "Cache-Control": "private, no-store" });
const adminNotConfiguredResponse = () => withSecurityHeaders(new Response("Yönetim paneli güvenlik sırları henüz yapılandırılmadı.", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } }), { "Cache-Control": "private, no-store" });

const base64Url = (value) => {
  const bytes = typeof value === "string" ? encoder.encode(value) : value;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
const pemToBytes = (pem) => {
  const normalized = String(pem).replace(/\\n/g, "\n");
  const body = normalized.replace(/-----BEGIN PRIVATE KEY-----/g, "").replace(/-----END PRIVATE KEY-----/g, "").replace(/\s+/g, "");
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
  if (!email || !privateKey) throw new Error("Google servis hesabı bilgileri eksik.");
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({ iss: email, scope: ["https://www.googleapis.com/auth/webmasters.readonly", "https://www.googleapis.com/auth/analytics.readonly"].join(" "), aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 }));
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey("pkcs8", pemToBytes(privateKey), { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, encoder.encode(unsigned));
  return `${unsigned}.${base64Url(new Uint8Array(signature))}`;
};
const requestGoogleToken = async (body) => {
  const response = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) throw new Error(payload.error_description || payload.error || "Google erişim belirteci alınamadı.");
  return payload.access_token;
};
const getOAuthAccessToken = (env, refreshToken) => requestGoogleToken(new URLSearchParams({ client_id: env.GSC_OAUTH_CLIENT_ID, client_secret: env.GSC_OAUTH_CLIENT_SECRET, refresh_token: refreshToken, grant_type: "refresh_token" }));
const getServiceAccountAccessToken = async (env) => requestGoogleToken(new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: await createGoogleJwt(getServiceAccount(env)) }));
const getGoogleAccess = async (env, feature = "Search Console") => {
  const refreshToken = feature === "GA4" ? (env.GA4_OAUTH_REFRESH_TOKEN || env.GSC_OAUTH_REFRESH_TOKEN) : env.GSC_OAUTH_REFRESH_TOKEN;
  const oauthValues = [env.GSC_OAUTH_CLIENT_ID, env.GSC_OAUTH_CLIENT_SECRET, refreshToken];
  const configuredCount = oauthValues.filter(Boolean).length;
  if (configuredCount > 0 && configuredCount < oauthValues.length) throw new Error(`${feature} OAuth ayarları eksik.`);
  if (configuredCount === oauthValues.length) return { accessToken: await getOAuthAccessToken(env, refreshToken), authMode: feature === "GA4" && env.GA4_OAUTH_REFRESH_TOKEN ? "oauth-ga4-refresh-token" : "oauth-refresh-token" };
  const serviceAccount = getServiceAccount(env);
  if (serviceAccount.email || serviceAccount.privateKey) {
    if (!serviceAccount.email || !serviceAccount.privateKey) throw new Error(`${feature} servis hesabı bilgileri eksik.`);
    return { accessToken: await getServiceAccountAccessToken(env), authMode: "service-account" };
  }
  throw new Error(`${feature} kimlik bilgileri tanımlı değil.`);
};

const isoDate = (date) => date.toISOString().slice(0, 10);
const searchConsoleQuery = async ({ accessToken, siteUrl, body }) => {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const response = await fetch(endpoint, { method: "POST", headers: { Authorization: `Bearer ${accessToken}`, "content-type": "application/json" }, body: JSON.stringify(body) });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error?.message || "Search Console sorgusu başarısız oldu.");
  return payload.rows || [];
};
const handleSearchConsole = async (request, env) => {
  if (request.method !== "GET") return jsonResponse({ error: "Yalnızca GET desteklenir." }, 405);
  try {
    const requestUrl = new URL(request.url);
    const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "28", 10);
    const days = [7, 28, 90].includes(requestedDays) ? requestedDays : 28;
    const end = new Date(); end.setUTCDate(end.getUTCDate() - 2);
    const start = new Date(end); start.setUTCDate(start.getUTCDate() - (days - 1));
    const startDate = isoDate(start); const endDate = isoDate(end);
    const siteUrl = env.GSC_SITE_URL || "https://oltaatlasi.com/";
    const { accessToken, authMode } = await getGoogleAccess(env, "Search Console");
    const common = { startDate, endDate, searchType: "web", dataState: "all" };
    const [summaryRows, dailyRows, queryRows, pageRows] = await Promise.all([
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, rowLimit: 1 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["date"], rowLimit: 1000 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["query"], rowLimit: 10 } }),
      searchConsoleQuery({ accessToken, siteUrl, body: { ...common, dimensions: ["page"], rowLimit: 10 } }),
    ]);
    const summary = summaryRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const mapRows = (rows, keyName) => rows.map((row) => ({ [keyName]: row.keys?.[0] || "", clicks: row.clicks || 0, impressions: row.impressions || 0, ctr: row.ctr || 0, position: row.position || 0 }));
    return jsonResponse({ connected: true, authMode, siteUrl, range: { days, startDate, endDate }, totals: { clicks: summary.clicks || 0, impressions: summary.impressions || 0, ctr: summary.ctr || 0, position: summary.position || 0 }, daily: mapRows(dailyRows, "date"), queries: mapRows(queryRows, "query"), pages: mapRows(pageRows, "page"), fetchedAt: new Date().toISOString() });
  } catch (error) { return jsonResponse({ connected: false, error: error instanceof Error ? error.message : "Bilinmeyen Search Console hatası." }, 502); }
};

const inspectUrl = async ({ accessToken, siteUrl, inspectionUrl }) => {
  const response = await fetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}`, "content-type": "application/json" },
    body: JSON.stringify({ inspectionUrl, siteUrl, languageCode: "tr-TR" }),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error?.message || `URL Inspection başarısız: ${inspectionUrl}`);
  const result = payload?.inspectionResult?.indexStatusResult || {};
  return {
    url: inspectionUrl,
    verdict: result.verdict || "VERDICT_UNSPECIFIED",
    coverageState: result.coverageState || "Bilinmiyor",
    robotsTxtState: result.robotsTxtState || "ROBOTS_TXT_STATE_UNSPECIFIED",
    indexingState: result.indexingState || "INDEXING_STATE_UNSPECIFIED",
    pageFetchState: result.pageFetchState || "PAGE_FETCH_STATE_UNSPECIFIED",
    lastCrawlTime: result.lastCrawlTime || null,
    crawledAs: result.crawledAs || "CRAWLING_USER_AGENT_UNSPECIFIED",
    referringUrls: result.referringUrls || [],
    sitemap: result.sitemap || [],
    indexed: result.verdict === "PASS",
  };
};
const handleIndexing = async (request, env) => {
  if (request.method !== "POST") return jsonResponse({ error: "Yalnızca POST desteklenir." }, 405);
  try {
    const body = await request.json();
    const rawUrls = Array.isArray(body?.urls) ? body.urls : [];
    const urls = [...new Set(rawUrls.map((value) => String(value || "").trim()).filter(Boolean))].slice(0, 15);
    if (!urls.length) return jsonResponse({ error: "Kontrol edilecek URL bulunamadı." }, 400);
    for (const value of urls) {
      const parsed = new URL(value);
      if (parsed.protocol !== "https:" || parsed.hostname !== PRIMARY_HOST || !parsed.pathname.startsWith("/meralar/")) return jsonResponse({ error: "Yalnızca oltaatlasi.com /meralar/ URL'leri kontrol edilebilir." }, 400);
    }
    const siteUrl = env.GSC_SITE_URL || "https://oltaatlasi.com/";
    const { accessToken, authMode } = await getGoogleAccess(env, "Search Console");
    const end = new Date(); end.setUTCDate(end.getUTCDate() - 2);
    const start = new Date(end); start.setUTCDate(start.getUTCDate() - 89);
    const pageRows = await searchConsoleQuery({ accessToken, siteUrl, body: { startDate: isoDate(start), endDate: isoDate(end), searchType: "web", dataState: "all", dimensions: ["page"], rowLimit: 25000 } });
    const performance = new Map(pageRows.map((row) => [row.keys?.[0] || "", { clicks: row.clicks || 0, impressions: row.impressions || 0, ctr: row.ctr || 0, position: row.position || 0 }]));
    const routeRows = pageRows.filter((row) => {
      try { return new URL(row.keys?.[0] || "").pathname.startsWith("/meralar/"); } catch { return false; }
    });
    const inspections = [];
    for (const url of urls) {
      try {
        const inspection = await inspectUrl({ accessToken, siteUrl, inspectionUrl: url });
        inspections.push({ ...inspection, performance: performance.get(url) || { clicks: 0, impressions: 0, ctr: 0, position: 0 } });
      } catch (error) {
        inspections.push({ url, indexed: false, verdict: "ERROR", coverageState: error instanceof Error ? error.message : "URL Inspection hatası", lastCrawlTime: null, performance: performance.get(url) || { clicks: 0, impressions: 0, ctr: 0, position: 0 } });
      }
    }
    return jsonResponse({
      connected: true,
      authMode,
      siteUrl,
      range: { days: 90, startDate: isoDate(start), endDate: isoDate(end) },
      totals: {
        searchVisibleRoutes: routeRows.length,
        routesWithImpressions: routeRows.filter((row) => Number(row.impressions || 0) > 0).length,
        routesWithClicks: routeRows.filter((row) => Number(row.clicks || 0) > 0).length,
        inspected: inspections.length,
        indexed: inspections.filter((row) => row.indexed).length,
      },
      inspections,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) { return jsonResponse({ connected: false, error: error instanceof Error ? error.message : "Bilinmeyen indeks kontrol hatası." }, 502); }
};

const normalizePropertyId = (value) => String(value || "").trim().replace(/^properties\//, "");
const analyticsRequest = async ({ accessToken, propertyId, method, body }) => {
  const response = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${encodeURIComponent(propertyId)}:${method}`, { method: "POST", headers: { Authorization: `Bearer ${accessToken}`, "content-type": "application/json" }, body: JSON.stringify(body) });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error?.message || "Google Analytics sorgusu başarısız oldu.");
  return payload;
};
const metricValue = (row, index) => Number(row?.metricValues?.[index]?.value || 0);
const dimensionValue = (row, index) => row?.dimensionValues?.[index]?.value || "";
const handleGa4 = async (request, env) => {
  if (request.method !== "GET") return jsonResponse({ error: "Yalnızca GET desteklenir." }, 405);
  try {
    const requestUrl = new URL(request.url);
    const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "28", 10);
    const days = [7, 28, 90].includes(requestedDays) ? requestedDays : 28;
    const propertyId = normalizePropertyId(env.GA4_PROPERTY_ID);
    if (!propertyId) throw new Error("GA4_PROPERTY_ID tanımlanmalıdır.");
    const { accessToken, authMode } = await getGoogleAccess(env, "GA4");
    const dateRanges = [{ startDate: `${days}daysAgo`, endDate: "yesterday" }];
    const [summary, channels, devices, cities, pages, realtime] = await Promise.all([
      analyticsRequest({ accessToken, propertyId, method: "runReport", body: { dateRanges, metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }, { name: "engagementRate" }] } }),
      analyticsRequest({ accessToken, propertyId, method: "runReport", body: { dateRanges, dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "sessions" }, { name: "activeUsers" }, { name: "screenPageViews" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }], limit: "10" } }),
      analyticsRequest({ accessToken, propertyId, method: "runReport", body: { dateRanges, dimensions: [{ name: "deviceCategory" }], metrics: [{ name: "activeUsers" }, { name: "sessions" }], orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }], limit: "10" } }),
      analyticsRequest({ accessToken, propertyId, method: "runReport", body: { dateRanges, dimensions: [{ name: "city" }, { name: "country" }], metrics: [{ name: "activeUsers" }, { name: "sessions" }], orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }], limit: "10" } }),
      analyticsRequest({ accessToken, propertyId, method: "runReport", body: { dateRanges, dimensions: [{ name: "pagePathPlusQueryString" }], metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "engagementRate" }], orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }], limit: "10" } }),
      analyticsRequest({ accessToken, propertyId, method: "runRealtimeReport", body: { metrics: [{ name: "activeUsers" }] } }),
    ]);
    const summaryRow = summary.rows?.[0];
    const channelRows = (channels.rows || []).map((row) => ({ channel: dimensionValue(row, 0), sessions: metricValue(row, 0), activeUsers: metricValue(row, 1), views: metricValue(row, 2) }));
    const organicSessions = channelRows.filter((row) => row.channel === "Organic Search").reduce((sum, row) => sum + row.sessions, 0);
    const totalSessions = metricValue(summaryRow, 1);
    return jsonResponse({ connected: true, authMode, propertyId, range: { days, startDate: `${days}daysAgo`, endDate: "yesterday" }, totals: { activeUsers: metricValue(summaryRow, 0), sessions: totalSessions, views: metricValue(summaryRow, 2), engagementRate: metricValue(summaryRow, 3), organicSessions, organicShare: totalSessions ? organicSessions / totalSessions : 0, realtimeActiveUsers: metricValue(realtime.rows?.[0], 0) }, channels: channelRows, devices: (devices.rows || []).map((row) => ({ device: dimensionValue(row, 0), activeUsers: metricValue(row, 0), sessions: metricValue(row, 1) })), cities: (cities.rows || []).map((row) => ({ city: dimensionValue(row, 0), country: dimensionValue(row, 1), activeUsers: metricValue(row, 0), sessions: metricValue(row, 1) })), pages: (pages.rows || []).map((row) => ({ page: dimensionValue(row, 0), views: metricValue(row, 0), activeUsers: metricValue(row, 1), engagementRate: metricValue(row, 2) })), fetchedAt: new Date().toISOString() });
  } catch (error) { return jsonResponse({ connected: false, error: error instanceof Error ? error.message : "Bilinmeyen GA4 hatası." }, 502); }
};

const sampledCount = (row) => Math.round(Number(row?.count || 0) * Math.max(1, Number(row?.avg?.sampleInterval || 1)));
const cloudflareGraphql = async ({ token, zoneId, start, end }) => {
  const query = `query Dashboard($zoneTag: string, $start: Time, $end: Time) { viewer { zones(filter: { zoneTag: $zoneTag }) { totals: httpRequestsAdaptiveGroups(limit: 1 filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) { count avg { sampleInterval } sum { visits edgeResponseBytes } } cache: httpRequestsAdaptiveGroups(limit: 20 orderBy: [count_DESC] filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) { count avg { sampleInterval } dimensions { cacheStatus } } statuses: httpRequestsAdaptiveGroups(limit: 100 orderBy: [count_DESC] filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) { count avg { sampleInterval } dimensions { edgeResponseStatus } } countries: httpRequestsAdaptiveGroups(limit: 10 orderBy: [count_DESC] filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) { count avg { sampleInterval } dimensions { clientCountryName } } paths: httpRequestsAdaptiveGroups(limit: 10 orderBy: [count_DESC] filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) { count avg { sampleInterval } dimensions { clientRequestPath } } } } }`;
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", { method: "POST", headers: { Authorization: `Bearer ${token}`, Accept: "application/json", "content-type": "application/json" }, body: JSON.stringify({ query, variables: { zoneTag: zoneId, start, end } }) });
  const payload = await response.json();
  if (!response.ok || payload.errors?.length) throw new Error(payload.errors?.map((item) => item.message).join(" · ") || payload?.error || "Cloudflare Analytics sorgusu başarısız oldu.");
  const zone = payload?.data?.viewer?.zones?.[0];
  if (!zone) throw new Error("Cloudflare zone verisi bulunamadı.");
  return zone;
};
const handleCloudflare = async (request, env) => {
  if (request.method !== "GET") return jsonResponse({ error: "Yalnızca GET desteklenir." }, 405);
  try {
    const token = String(env.CLOUDFLARE_ANALYTICS_TOKEN || "").trim();
    const zoneId = String(env.CLOUDFLARE_ZONE_ID || "").trim();
    if (!token || !zoneId) throw new Error("CLOUDFLARE_ANALYTICS_TOKEN ve CLOUDFLARE_ZONE_ID tanımlanmalıdır.");
    const requestUrl = new URL(request.url);
    const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "7", 10);
    const days = [1, 7, 28].includes(requestedDays) ? requestedDays : 7;
    const end = new Date(); const start = new Date(end); start.setUTCDate(start.getUTCDate() - days);
    const zone = await cloudflareGraphql({ token, zoneId, start: start.toISOString(), end: end.toISOString() });
    const totalRow = zone.totals?.[0] || {}; const requests = sampledCount(totalRow);
    const cacheRows = (zone.cache || []).map((row) => ({ status: row.dimensions?.cacheStatus || "unknown", requests: sampledCount(row) }));
    const hitStatuses = new Set(["hit", "stale", "updating", "revalidated"]);
    const cachedRequests = cacheRows.filter((row) => hitStatuses.has(String(row.status).toLowerCase())).reduce((total, row) => total + row.requests, 0);
    const statusRows = (zone.statuses || []).map((row) => ({ status: Number(row.dimensions?.edgeResponseStatus || 0), requests: sampledCount(row) }));
    const statusClass = (a, b) => statusRows.filter((row) => row.status >= a && row.status <= b).reduce((total, row) => total + row.requests, 0);
    return jsonResponse({ connected: true, zoneId, range: { days, start: start.toISOString(), end: end.toISOString() }, totals: { requests, visits: Math.round(Number(totalRow?.sum?.visits || 0)), bytes: Math.round(Number(totalRow?.sum?.edgeResponseBytes || 0)), cachedRequests, cacheHitRate: requests ? cachedRequests / requests : 0, status2xx: statusClass(200, 299), status3xx: statusClass(300, 399), status4xx: statusClass(400, 499), status5xx: statusClass(500, 599) }, cache: cacheRows, statuses: statusRows, countries: (zone.countries || []).map((row) => ({ country: row.dimensions?.clientCountryName || "Unknown", requests: sampledCount(row) })), paths: (zone.paths || []).map((row) => ({ path: row.dimensions?.clientRequestPath || "/", requests: sampledCount(row) })), sampled: Number(totalRow?.avg?.sampleInterval || 1) > 1, fetchedAt: new Date().toISOString() });
  } catch (error) { return jsonResponse({ connected: false, error: error instanceof Error ? error.message : "Bilinmeyen Cloudflare Analytics hatası." }, 502); }
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (PERMANENT_REDIRECT_HOSTS.has(url.hostname)) {
      url.protocol = "https:"; url.hostname = PRIMARY_HOST; url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    if (isAdminPath(url.pathname)) {
      if (!adminAuthConfigured(env)) return adminNotConfiguredResponse();
      if (!adminAuthorized(request, env)) return unauthorizedResponse();
      if (url.pathname === "/admin/api/search-console") return handleSearchConsole(request, env);
      if (url.pathname === "/admin/api/indexing") return handleIndexing(request, env);
      if (url.pathname === "/admin/api/ga4") return handleGa4(request, env);
      if (url.pathname === "/admin/api/cloudflare") return handleCloudflare(request, env);
    }
    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse, isAdminPath(url.pathname) ? { "Cache-Control": "private, no-store" } : {});
  },
};
