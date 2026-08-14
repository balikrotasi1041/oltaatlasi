import appWorker from "./audit-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.17",
  "185.177.72.100",
  "195.178.110.199",
]);

const SENSITIVE_PROBE_PATTERNS = [
  /^\/(?:\.env|\.git)(?:\/|$)/i,
  /^\/(?:backup(?:[-_.][^/]*)?\.sql|dump(?:[-_.][^/]*)?\.sql|export\.sql)$/i,
  /^\/log4j(?:2)?\.properties$/i,
  /^\/cron\.log$/i,
  /^\/(?:pnpm-lock\.yaml|yarn\.lock|composer\.(?:json|lock)|build\.gradle|\.amplifyrc)$/i,
  /^\/wp-(?:admin|login\.php|config\.php)(?:\/|$)/i,
  /^\/(?:phpmyadmin|adminer)(?:\.php|\/|$)/i,
  /^\/vendor\/phpunit(?:\/|$)/i,
  /^\/horizon\/api(?:\/|$)/i,
  /^\/rest\/executions(?:\/|$)/i,
  /^\/webhook-waiting(?:\/|$)/i,
  /^\/v1\.40\/swarm(?:\/|$)/i,
];

const SECURITY_POLICY_HEADER = "x-olta-security-policy";
const SECURITY_POLICY_VALUE = "ip-blocklist-probe-guard-browser-headers-and-404-v4";
const CONTENT_SECURITY_POLICY = "base-uri 'self'; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests";
const HASHED_ASSET_PATTERN = /^\/_astro\//;
const IMAGE_ASSET_PATTERN = /^\/images\//;
const SITEMAP_PATTERN = /^\/sitemap(?:-[^/]*)?\.xml$/;
const STABLE_SITE_ASSETS = new Set(["/logo-mark.svg", "/favicon.svg", "/site.webmanifest"]);

const browserCachePolicy = (pathname) => {
  if (HASHED_ASSET_PATTERN.test(pathname)) return "public, max-age=31536000, immutable";
  if (STABLE_SITE_ASSETS.has(pathname)) return "public, max-age=604800, stale-while-revalidate=2592000";
  if (IMAGE_ASSET_PATTERN.test(pathname)) return "public, max-age=86400, stale-while-revalidate=604800";
  if (pathname === "/robots.txt" || SITEMAP_PATTERN.test(pathname)) return "public, max-age=3600, stale-while-revalidate=86400";
  return "";
};

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
const isExplicit404Path = (pathname) => pathname === "/404" || pathname === "/404/";

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

const explicit404Response = async (request, env) => {
  if (!env.ASSETS?.fetch) return notFoundResponse();
  const assetUrl = new URL(request.url);
  assetUrl.pathname = "/404/";
  assetUrl.search = "";
  const assetResponse = await env.ASSETS.fetch(new Request(assetUrl.toString(), {
    method: request.method === "HEAD" ? "HEAD" : "GET",
    headers: request.headers,
  }));
  const headers = applySecurityHeaders(new Headers(assetResponse.headers));
  headers.set("cache-control", "private, no-store");
  headers.set("x-robots-tag", "noindex, nofollow, noarchive, nosnippet");
  return new Response(request.method === "HEAD" ? null : assetResponse.body, {
    status: 404,
    statusText: "Not Found",
    headers,
  });
};

const markSecurityPolicy = async (response, pathname, method) => {
  const headers = applySecurityHeaders(new Headers(response.headers));
  const cachePolicy = response.ok && (method === "GET" || method === "HEAD") ? browserCachePolicy(pathname) : "";
  if (cachePolicy) headers.set("cache-control", cachePolicy);
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
    if (isExplicit404Path(url.pathname)) return explicit404Response(request, env);

    return markSecurityPolicy(await appWorker.fetch(request, env, ctx), url.pathname, request.method);
  },
};
