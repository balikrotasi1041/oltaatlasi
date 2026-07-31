import baseWorker from "./index.js";

const DAY_MS = 24 * 60 * 60 * 1000;
const CACHE_SECONDS = 300;

const secureJson = (payload, status = 200) => new Response(JSON.stringify(payload), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  },
});

const authorizeAdminRequest = async (request, env) => {
  const authUrl = new URL(request.url);
  authUrl.pathname = "/admin/dashboard/";
  authUrl.search = "";
  const authRequest = new Request(authUrl.toString(), {
    method: "GET",
    headers: request.headers,
  });
  const response = await baseWorker.fetch(authRequest, env);
  return response.status === 401 || response.status === 503 ? response : null;
};

const cloudflareQuery = `query Dashboard($zoneTag: string, $start: Time, $end: Time) {
  viewer {
    zones(filter: { zoneTag: $zoneTag }) {
      totals: httpRequestsAdaptiveGroups(
        limit: 1
        filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }
      ) {
        count
        avg { sampleInterval }
        sum { visits edgeResponseBytes }
      }
      cache: httpRequestsAdaptiveGroups(
        limit: 20
        orderBy: [count_DESC]
        filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }
      ) {
        count
        avg { sampleInterval }
        dimensions { cacheStatus }
      }
      statuses: httpRequestsAdaptiveGroups(
        limit: 100
        orderBy: [count_DESC]
        filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }
      ) {
        count
        avg { sampleInterval }
        dimensions { edgeResponseStatus }
      }
      countries: httpRequestsAdaptiveGroups(
        limit: 25
        orderBy: [count_DESC]
        filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }
      ) {
        count
        avg { sampleInterval }
        dimensions { clientCountryName }
      }
      paths: httpRequestsAdaptiveGroups(
        limit: 50
        orderBy: [count_DESC]
        filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }
      ) {
        count
        avg { sampleInterval }
        dimensions { clientRequestPath }
      }
    }
  }
}`;

const queryCloudflareDay = async ({ token, zoneId, start, end }) => {
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: cloudflareQuery,
      variables: { zoneTag: zoneId, start, end },
    }),
  });
  const payload = await response.json();
  if (!response.ok || payload.errors?.length) {
    const message = payload.errors?.map((item) => item.message).join(" · ")
      || payload?.error
      || "Cloudflare Analytics sorgusu başarısız oldu.";
    throw new Error(message);
  }
  const zone = payload?.data?.viewer?.zones?.[0];
  if (!zone) throw new Error("Cloudflare zone verisi bulunamadı. Zone ID ve token erişimini kontrol edin.");
  return zone;
};

const makeDailyRanges = (start, end) => {
  const ranges = [];
  for (let cursor = start.getTime(); cursor < end.getTime(); cursor += DAY_MS) {
    ranges.push({
      start: new Date(cursor).toISOString(),
      end: new Date(Math.min(cursor + DAY_MS, end.getTime())).toISOString(),
    });
  }
  return ranges;
};

const addToMap = (map, key, value) => map.set(key, (map.get(key) || 0) + Number(value || 0));
const sortedRows = (map, keyName, limit) => [...map.entries()]
  .map(([key, requests]) => ({ [keyName]: key, requests: Math.round(requests) }))
  .sort((a, b) => b.requests - a.requests)
  .slice(0, limit);

const aggregateZones = (zones) => {
  const cacheMap = new Map();
  const statusMap = new Map();
  const countryMap = new Map();
  const pathMap = new Map();
  let requests = 0;
  let visits = 0;
  let bytes = 0;
  let sampled = false;

  for (const zone of zones) {
    const total = zone.totals?.[0] || {};
    requests += Number(total.count || 0);
    visits += Number(total.sum?.visits || 0);
    bytes += Number(total.sum?.edgeResponseBytes || 0);
    sampled ||= Number(total.avg?.sampleInterval || 1) > 1;

    for (const row of zone.cache || []) {
      addToMap(cacheMap, row.dimensions?.cacheStatus || "unknown", row.count);
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
    }
    for (const row of zone.statuses || []) {
      addToMap(statusMap, Number(row.dimensions?.edgeResponseStatus || 0), row.count);
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
    }
    for (const row of zone.countries || []) {
      addToMap(countryMap, row.dimensions?.clientCountryName || "Unknown", row.count);
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
    }
    for (const row of zone.paths || []) {
      addToMap(pathMap, row.dimensions?.clientRequestPath || "/", row.count);
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
    }
  }

  const cache = sortedRows(cacheMap, "status", 20);
  const statuses = sortedRows(statusMap, "status", 100).map((row) => ({
    status: Number(row.status),
    requests: row.requests,
  }));
  const hitStatuses = new Set(["hit", "stale", "updating", "revalidated"]);
  const cachedRequests = cache
    .filter((row) => hitStatuses.has(String(row.status).toLowerCase()))
    .reduce((total, row) => total + row.requests, 0);
  const statusClass = (minimum, maximum) => statuses
    .filter((row) => row.status >= minimum && row.status <= maximum)
    .reduce((total, row) => total + row.requests, 0);

  return {
    totals: {
      requests: Math.round(requests),
      visits: Math.round(visits),
      bytes: Math.round(bytes),
      cachedRequests,
      cacheHitRate: requests ? cachedRequests / requests : 0,
      status2xx: statusClass(200, 299),
      status3xx: statusClass(300, 399),
      status4xx: statusClass(400, 499),
      status5xx: statusClass(500, 599),
    },
    cache,
    statuses,
    countries: sortedRows(countryMap, "country", 10),
    paths: sortedRows(pathMap, "path", 10),
    sampled,
  };
};

const fetchCloudflarePayload = async (request, env) => {
  const token = String(env.CLOUDFLARE_ANALYTICS_TOKEN || "").trim();
  const zoneId = String(env.CLOUDFLARE_ZONE_ID || "").trim();
  if (!token || !zoneId) throw new Error("CLOUDFLARE_ANALYTICS_TOKEN ve CLOUDFLARE_ZONE_ID tanımlanmalıdır.");

  const requestUrl = new URL(request.url);
  const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "7", 10);
  const days = [1, 7, 28].includes(requestedDays) ? requestedDays : 7;
  const end = new Date();
  const start = new Date(end.getTime() - days * DAY_MS);
  const ranges = makeDailyRanges(start, end);

  const zones = [];
  for (let index = 0; index < ranges.length; index += 4) {
    const batch = ranges.slice(index, index + 4);
    const results = await Promise.all(batch.map((range) => queryCloudflareDay({
      token,
      zoneId,
      start: range.start,
      end: range.end,
    })));
    zones.push(...results);
  }

  return {
    connected: true,
    zoneId,
    range: { days, start: start.toISOString(), end: end.toISOString(), chunks: ranges.length },
    ...aggregateZones(zones),
    fetchedAt: new Date().toISOString(),
  };
};

const handleCloudflare = async (request, env, ctx) => {
  if (request.method !== "GET") return secureJson({ error: "Yalnızca GET desteklenir." }, 405);
  try {
    const requestUrl = new URL(request.url);
    const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "7", 10);
    const days = [1, 7, 28].includes(requestedDays) ? requestedDays : 7;
    const cacheKey = new Request(`https://oltaatlasi.internal/cloudflare-analytics?days=${days}`);
    const cached = await caches.default.match(cacheKey);
    if (cached) return secureJson(await cached.json());

    const payload = await fetchCloudflarePayload(request, env);
    const cacheResponse = new Response(JSON.stringify(payload), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Cache-Control": `max-age=${CACHE_SECONDS}`,
      },
    });
    ctx.waitUntil(caches.default.put(cacheKey, cacheResponse));
    return secureJson(payload);
  } catch (error) {
    return secureJson({
      connected: false,
      error: error instanceof Error ? error.message : "Bilinmeyen Cloudflare Analytics hatası.",
    }, 502);
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== "/admin/api/cloudflare") return baseWorker.fetch(request, env, ctx);

    const authFailure = await authorizeAdminRequest(request, env);
    if (authFailure) return authFailure;
    return handleCloudflare(request, env, ctx);
  },
};
