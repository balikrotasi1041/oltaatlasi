import assert from "node:assert/strict";
import worker from "../worker/index.js";

const originalFetch = globalThis.fetch;
const originalCaches = globalThis.caches;
const snapshots = new Map();
const tokenRequests = [];
let rejectToken = false;

globalThis.caches = {
  default: {
    async match(request) {
      const response = snapshots.get(request.url);
      return response ? response.clone() : undefined;
    },
    async put(request, response) {
      snapshots.set(request.url, response.clone());
    },
  },
};

globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === "string" ? input : input.url;
  if (url === "https://oauth2.googleapis.com/token") {
    const body = new URLSearchParams(String(init.body || ""));
    tokenRequests.push(Object.fromEntries(body));
    if (rejectToken) {
      return new Response(JSON.stringify({ error: "invalid_grant", error_description: "expired" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    return Response.json({ access_token: "test-access-token" });
  }
  if (url.startsWith("https://www.googleapis.com/webmasters/")) return Response.json({ rows: [] });
  if (url.startsWith("https://analyticsdata.googleapis.com/")) return Response.json({ rows: [] });
  throw new Error(`Beklenmeyen test isteği: ${url}`);
};

const baseEnv = {
  ADMIN_USERNAME: "admin",
  ADMIN_PASSWORD: "secret",
  GSC_OAUTH_CLIENT_ID: "gsc-client",
  GSC_OAUTH_CLIENT_SECRET: "gsc-secret",
  GSC_OAUTH_REFRESH_TOKEN: "gsc-refresh",
  GSC_SITE_URL: "https://oltaatlasi.com/",
  GA4_OAUTH_CLIENT_ID: "ga4-client",
  GA4_OAUTH_CLIENT_SECRET: "ga4-secret",
  GA4_OAUTH_REFRESH_TOKEN: "ga4-refresh",
  GA4_PROPERTY_ID: "123456",
};

const callAdminApi = async (path, env = baseEnv) => {
  const pending = [];
  const response = await worker.fetch(new Request(`https://oltaatlasi.com${path}`, {
    headers: { Authorization: `Basic ${Buffer.from("admin:secret").toString("base64")}` },
  }), env, { waitUntil: (promise) => pending.push(promise) });
  await Promise.all(pending);
  return { response, payload: await response.json() };
};

try {
  const searchConsole = await callAdminApi("/admin/api/search-console?days=28");
  assert.equal(searchConsole.response.status, 200);
  assert.equal(searchConsole.payload.connected, true);
  assert.equal(tokenRequests.at(-1).client_id, "gsc-client");
  assert.equal(tokenRequests.at(-1).client_secret, "gsc-secret");
  assert.equal(tokenRequests.at(-1).refresh_token, "gsc-refresh");

  const ga4 = await callAdminApi("/admin/api/ga4?days=28");
  assert.equal(ga4.response.status, 200);
  assert.equal(ga4.payload.connected, true);
  assert.equal(ga4.payload.authMode, "oauth-ga4-client");
  assert.equal(tokenRequests.at(-1).client_id, "ga4-client");
  assert.equal(tokenRequests.at(-1).client_secret, "ga4-secret");
  assert.equal(tokenRequests.at(-1).refresh_token, "ga4-refresh");

  snapshots.clear();
  const incompleteGa4 = await callAdminApi("/admin/api/ga4?days=7", {
    ...baseEnv,
    GA4_OAUTH_CLIENT_SECRET: "",
  });
  assert.equal(incompleteGa4.response.status, 502);
  assert.match(incompleteGa4.payload.error, /OAuth ayarları eksik/);

  snapshots.clear();
  rejectToken = false;
  await callAdminApi("/admin/api/search-console?days=90");
  rejectToken = true;
  const staleSearchConsole = await callAdminApi("/admin/api/search-console?days=90");
  assert.equal(staleSearchConsole.response.status, 200);
  assert.equal(staleSearchConsole.payload.connected, true);
  assert.equal(staleSearchConsole.payload.stale, true);
  assert.match(staleSearchConsole.payload.warning, /son başarılı veri/);
  assert.match(staleSearchConsole.payload.staleReason, /yenileme anahtarı geçersiz/);

  console.log("Admin data flow validation passed: isolated OAuth clients and stale snapshot fallback.");
} finally {
  globalThis.fetch = originalFetch;
  globalThis.caches = originalCaches;
}
