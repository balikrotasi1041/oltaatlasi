import appWorker from "./yandex-metrica-router.js";
import { handleWeatherRequest } from "./weather-service.js";
import { NOINDEX_PATHS } from "./index-policy-routes.js";

const PRIMARY_HOSTS = new Set(["oltaatlasi.com", "www.oltaatlasi.com"]);
const BLOCKED_IPS = new Set([
  "185.177.72.17",
  "185.177.72.68",
  "216.73.216.79",
  "216.73.216.200",
  "91.92.47.81",
  "157.143.3.35",
  "51.68.234.131",
  "45.45.237.65",
  "2a01:4f9:4a:2aa5::2",
  "123.6.49.44",
]);
// Veri merkezi/crawler adresleri doğrudan saldırgan sayılmaz. Meşru keşfi tamamen
// kesmeden ani istek patlamaları sınırlandırılır; karar davranışa göre verilir.
const THROTTLED_IPS = new Set([
  "148.251.126.195",
  "195.178.110.22",
  "216.244.66.233",
]);

const SENSITIVE_SCAN_PATTERNS = [
  /^\/(?:(?:\$\([^/]{1,64}\)\/)?\.env|\.git(?:\/|$)|\.svn(?:\/|$)|\.hg(?:\/|$))/i,
  /^\/(?:wp-admin(?:\/|$)|wp-login\.php$|wp-config\.php$|xmlrpc\.php$|wp-content(?:\/|$)|wp-includes(?:\/|$)|wp-[^/]+(?:\/|$))/i,
  /^\/.*\.php(?:\/|$)/i,
  /^\/(?:phpinfo\.php|info\.php|server-status|appsettings(?:\.[^/]+)?\.json|app\.config|web\.config)$/i,
  /^\/(?:vendor\/phpunit(?:\/|$)|phpmyadmin(?:\/|$)|adminer(?:\.php|\/|$)|\.DS_Store$)/i,
  /^\/(?:backup(?:[-_.][^/]*)?\.(?:sql|tgz|zip|tar(?:\.gz)?)|dump(?:[-_.][^/]*)?\.sql|export\.sql)$/i,
  /^\/(?:rails\/info\/properties|jenkinsfile|log4j(?:2)?\.properties|cron\.log|pnpm-lock\.yaml|yarn\.lock|composer\.(?:json|lock)|build\.gradle|\.amplifyrc)$/i,
  /^\/(?:horizon\/api(?:\/|$)|rest\/executions(?:\/|$)|webhook-waiting(?:\/|$)|v1\.40\/swarm(?:\/|$))/i,
];

const VERIFIED_BOT_HINTS = [
  "googlebot",
  "bingbot",
  "oai-searchbot",
  "chatgpt-user",
  "applebot",
  "yandexbot",
];

const securityResponse = (status, extraHeaders = {}) => new Response(null, {
  status,
  headers: {
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
    ...extraHeaders,
  },
});

const rateLimitedResponse = (policy) => securityResponse(429, {
  "Retry-After": "60",
  "X-Olta-Rate-Limit": policy,
});

const enforceRateLimit = async (binding, key, policy) => {
  if (!binding?.limit || !key) return null;
  try {
    const { success } = await binding.limit({ key });
    return success ? null : rateLimitedResponse(policy);
  } catch {
    // Güvenlik bağı geçici olarak kullanılamazsa siteyi kapatmak yerine fail-open davran.
    return null;
  }
};

const clientIp = (request) => String(request.headers.get("CF-Connecting-IP") || "").trim();
const normalizedProbePath = (pathname) => {
  let value = String(pathname || "/");
  for (let pass = 0; pass < 2; pass += 1) {
    try {
      const decoded = decodeURIComponent(value);
      if (decoded === value) break;
      value = decoded;
    } catch {
      break;
    }
  }
  return value.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
};
const isSensitiveScanPath = (pathname) => {
  const normalized = normalizedProbePath(pathname);
  return SENSITIVE_SCAN_PATTERNS.some((pattern) => pattern.test(normalized));
};
const isSearchCrawler = (request) => {
  const ua = String(request.headers.get("user-agent") || "").toLocaleLowerCase("en-US");
  return VERIFIED_BOT_HINTS.some((hint) => ua.includes(hint));
};
const normalizedIndexPath = (pathname) => pathname.endsWith("/") ? pathname : `${pathname}/`;
const applyIndexPolicyHeaders = (response, pathname) => {
  if (!NOINDEX_PATHS.has(normalizedIndexPath(pathname)) || response.status !== 200) return response;
  const headers = new Headers(response.headers);
  // URL erişilebilir ve takip edilebilir kalır; yalnızca düşük doğrulamalı sayfanın indekslenmesi ertelenir.
  headers.set("X-Robots-Tag", "noindex, follow, max-image-preview:large");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};
export default {
  async fetch(request, env, ctx) {
    const ip = clientIp(request);
    if (BLOCKED_IPS.has(ip)) return securityResponse(403);

    if (THROTTLED_IPS.has(ip)) {
      const throttled = await enforceRateLimit(env?.SUSPICIOUS_RATE_LIMITER, `suspect:${ip}`, "suspicious-crawler");
      if (throttled) return throttled;
    }

    const url = new URL(request.url);
    if (PRIMARY_HOSTS.has(url.hostname) && url.protocol === "http:") {
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    if (request.method === "TRACE") return securityResponse(405);
    if (isSensitiveScanPath(url.pathname)) {
      const throttled = await enforceRateLimit(env?.SUSPICIOUS_RATE_LIMITER, ip ? `probe:${ip}` : "", "exploit-path-probe");
      if (throttled) return throttled;
      return securityResponse(404);
    }

    if (url.pathname === "/api/weather") {
      const throttled = await enforceRateLimit(env?.WEATHER_RATE_LIMITER, ip ? `weather:${ip}` : "", "weather-api");
      if (throttled) return throttled;
      return handleWeatherRequest(request, ctx);
    }

    if (url.pathname === "/iletisim/" && request.method === "GET" && !isSearchCrawler(request)) {
      const throttled = await enforceRateLimit(env?.CONTACT_RATE_LIMITER, ip ? `contact:${ip}` : "", "contact-page");
      if (throttled) return throttled;
    }

    let response = await appWorker.fetch(request, env, ctx);
    response = applyIndexPolicyHeaders(response, url.pathname);
    return response;
  },
};
