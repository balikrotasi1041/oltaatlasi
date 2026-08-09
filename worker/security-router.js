import appWorker from "./audit-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.17",
  "185.177.72.100",
  "195.178.110.199",
]);

const SENSITIVE_PROBE_PATTERNS = [
  /^\/(?:\.env|\.git)(?:\/|$)/i,
  /^\/(?:backup(?:[-_.][^/]*)?\.sql|dump(?:[-_.][^/]*)?\.sql)$/i,
  /^\/log4j(?:2)?\.properties$/i,
  /^\/cron\.log$/i,
  /^\/(?:pnpm-lock\.yaml|yarn\.lock|composer\.(?:json|lock))$/i,
  /^\/wp-(?:admin|login\.php|config\.php)(?:\/|$)/i,
  /^\/(?:phpmyadmin|adminer)(?:\.php|\/|$)/i,
  /^\/vendor\/phpunit(?:\/|$)/i,
  /^\/horizon\/api(?:\/|$)/i,
];

const SECURITY_POLICY_HEADER = "x-olta-security-policy";
const SECURITY_POLICY_VALUE = "ip-blocklist-probe-guard-and-browser-headers-v3";
const CONTENT_SECURITY_POLICY = "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests";

const applySecurityHeaders = (headers) => {
  headers.set(SECURITY_POLICY_HEADER, SECURITY_POLICY_VALUE);
  headers.set("strict-transport-security", "max-age=31536000; includeSubDomains");
  headers.set("content-security-policy", CONTENT_SECURITY_POLICY);
  headers.set("x-frame-options", "DENY");
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");
  return headers;
};

const getClientIp = (request) => request.headers.get("CF-Connecting-IP")?.trim() || "";
const isSensitiveProbe = (pathname) => SENSITIVE_PROBE_PATTERNS.some((pattern) => pattern.test(pathname));

const plainResponse = (body, status) => new Response(body, {
  status,
  headers: applySecurityHeaders(new Headers({
    "content-type": "text/plain; charset=utf-8",
    "cache-control": "private, no-store",
    "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
  })),
});

const forbiddenResponse = () => plainResponse("Forbidden", 403);
const notFoundResponse = () => plainResponse("Not Found", 404);

const markSecurityPolicy = async (response) => {
  const headers = applySecurityHeaders(new Headers(response.headers));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export default {
  async fetch(request, env, ctx) {
    const clientIp = getClientIp(request);
    if (BLOCKED_IPS.has(clientIp)) return forbiddenResponse();

    const url = new URL(request.url);
    if (isSensitiveProbe(url.pathname)) return notFoundResponse();

    return markSecurityPolicy(await appWorker.fetch(request, env, ctx));
  },
};
