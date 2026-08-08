import securityWorker from "./security-router.js";

const ADMIN_PREFIX = "/admin";
const ADMIN_DATA_PATHS = new Set([
  "/admin/api/search-console",
  "/admin/api/ga4",
  "/admin/api/cloudflare",
]);

const isAdminPath = (pathname) => pathname === ADMIN_PREFIX || pathname.startsWith(`${ADMIN_PREFIX}/`);

const withAdminCrawlerHeaders = (response) => {
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  headers.set("Cache-Control", "private, no-store");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

const softenDashboardUpstreamFailure = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (response.status < 500 || !contentType.includes("application/json")) return response;

  let payload;
  try {
    payload = await response.clone().json();
  } catch {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "private, no-store");
  headers.set("X-Olta-Upstream-Status", String(response.status));

  return new Response(JSON.stringify({
    ...payload,
    connected: false,
    degraded: true,
    upstreamStatus: response.status,
  }), {
    status: 200,
    headers,
  });
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let response = await securityWorker.fetch(request, env, ctx);

    if (ADMIN_DATA_PATHS.has(url.pathname)) {
      response = await softenDashboardUpstreamFailure(response);
    }

    if (isAdminPath(url.pathname)) {
      response = withAdminCrawlerHeaders(response);
    }

    return response;
  },
};
