import appWorker from "./audit-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.100",
  "195.178.110.199",
]);

const SECURITY_POLICY_HEADER = "x-olta-security-policy";
const SECURITY_POLICY_VALUE = "ip-blocklist-and-browser-headers-v2";
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

const forbiddenResponse = () => new Response("Forbidden", {
  status: 403,
  headers: applySecurityHeaders(new Headers({
    "content-type": "text/plain; charset=utf-8",
    "cache-control": "private, no-store",
  })),
});

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
    return markSecurityPolicy(await appWorker.fetch(request, env, ctx));
  },
};
