import appWorker from "./traffic-diagnostics-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.17",
  "216.73.216.79",
  "91.92.47.81",
  "157.143.3.35",
]);

const SENSITIVE_SCAN_PATTERNS = [
  /^\/(?:\.env|\.git(?:\/|$)|\.svn(?:\/|$)|\.hg(?:\/|$))/i,
  /^\/(?:wp-admin(?:\/|$)|wp-login\.php$|xmlrpc\.php$)/i,
  /^\/(?:phpinfo\.php|info\.php|server-status|appsettings(?:\.[^/]+)?\.json)$/i,
  /^\/(?:vendor\/phpunit(?:\/|$)|\.DS_Store$)/i,
];

const securityResponse = (status) => new Response(null, {
  status,
  headers: {
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
  },
});

const clientIp = (request) => String(request.headers.get("CF-Connecting-IP") || "").trim();
const isSensitiveScanPath = (pathname) => SENSITIVE_SCAN_PATTERNS.some((pattern) => pattern.test(pathname));

export default {
  async fetch(request, env, ctx) {
    const ip = clientIp(request);
    if (BLOCKED_IPS.has(ip)) return securityResponse(403);

    const url = new URL(request.url);
    if (isSensitiveScanPath(url.pathname)) return securityResponse(404);

    return appWorker.fetch(request, env, ctx);
  },
};
