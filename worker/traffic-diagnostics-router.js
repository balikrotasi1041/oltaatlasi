import edgeHealthWorker from "./edge-health-router.js";

const DIAGNOSTICS_PATH = "/admin/api/traffic-diagnostics";
const DAY_MS = 24 * 60 * 60 * 1000;

const secureJson = (payload, status = 200) => new Response(JSON.stringify(payload, null, 2), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
    "X-Content-Type-Options": "nosniff",
  },
});

const authorize = async (request, env, ctx) => {
  const url = new URL(request.url);
  url.pathname = "/admin/dashboard/";
  url.search = "";
  const response = await edgeHealthWorker.fetch(new Request(url.toString(), {
    method: "GET",
    headers: request.headers,
  }), env, ctx);
  return response.status === 401 || response.status === 503 ? response : null;
};

const graphql = async (token, query, variables) => {
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const payload = await response.json();
  if (!response.ok || payload.errors?.length) throw new Error(payload.errors?.map((item) => item.message).join(" · ") || payload?.error || "Cloudflare GraphQL sorgusu başarısız oldu.");
  return payload?.data?.viewer?.zones?.[0] || {};
};

const requestQuery = `query TrafficDiagnostics($zoneTag: string, $start: Time, $end: Time) {
  viewer { zones(filter: { zoneTag: $zoneTag }) {
    agents: httpRequestsAdaptiveGroups(limit: 500, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) {
      count avg { sampleInterval } dimensions { userAgent clientCountryName }
    }
    routes: httpRequestsAdaptiveGroups(limit: 500, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) {
      count avg { sampleInterval } dimensions { userAgent clientRequestPath clientCountryName edgeResponseStatus }
    }
    statuses: httpRequestsAdaptiveGroups(limit: 100, orderBy: [count_DESC], filter: { datetime_geq: $start, datetime_lt: $end, requestSource: "eyeball" }) {
      count avg { sampleInterval } dimensions { edgeResponseStatus }
    }
  } }
}`;

const firewallQuery = `query SecurityDiagnostics($zoneTag: string, $filter: FirewallEventsAdaptiveFilter_InputObject) {
  viewer { zones(filter: { zoneTag: $zoneTag }) {
    firewallEventsAdaptive(filter: $filter, limit: 500, orderBy: [datetime_DESC]) {
      action clientAsn clientCountryName clientIP clientRequestPath clientRequestQuery datetime source userAgent description
    }
  } }
}`;

const classifyAgent = (value = "") => {
  const ua = String(value).toLowerCase();
  if (/googlebot|google-inspectiontool|adsbot-google/.test(ua)) return { key: "google", label: "Google crawler", kind: "search" };
  if (/bingbot|bingpreview/.test(ua)) return { key: "bing", label: "Bing crawler", kind: "search" };
  if (/applebot/.test(ua)) return { key: "apple", label: "AppleBot", kind: "search" };
  if (/amazonbot/.test(ua)) return { key: "amazon", label: "Amazonbot", kind: "crawler" };
  if (/claudebot|claude-web|anthropic-ai/.test(ua)) return { key: "anthropic", label: "Anthropic crawler", kind: "ai" };
  if (/gptbot|chatgpt-user|oai-searchbot/.test(ua)) return { key: "openai", label: "OpenAI crawler", kind: "ai" };
  if (/perplexitybot|perplexity-user/.test(ua)) return { key: "perplexity", label: "Perplexity crawler", kind: "ai" };
  if (/meta-externalagent|facebookexternalhit|meta-externalfetcher/.test(ua)) return { key: "meta", label: "Meta crawler", kind: "ai" };
  if (/ahrefsbot|ahrefs/.test(ua)) return { key: "ahrefs", label: "Ahrefs", kind: "seo" };
  if (/semrushbot|semrush/.test(ua)) return { key: "semrush", label: "Semrush", kind: "seo" };
  if (/mj12bot|dotbot|petalbot|bytespider|yandexbot|duckduckbot|baiduspider/.test(ua)) return { key: "other-crawler", label: "Diğer crawler", kind: "crawler" };
  if (/curl|wget|python-requests|python\/|go-http-client|aiohttp|httpclient|scrapy|headless/.test(ua)) return { key: "automation", label: "Otomasyon / script", kind: "automation" };
  if (/bot|crawler|spider|slurp/.test(ua)) return { key: "generic-bot", label: "Tanımsız bot", kind: "crawler" };
  if (/mozilla\/5\.0/.test(ua)) return { key: "browser", label: "Tarayıcı benzeri", kind: "browser" };
  if (!ua.trim()) return { key: "empty", label: "Boş User-Agent", kind: "automation" };
  return { key: "unknown", label: "Sınıflandırılamadı", kind: "unknown" };
};

const statusBucket = (status) => {
  const code = Number(status || 0);
  if (code >= 200 && code < 300) return "2xx";
  if (code >= 300 && code < 400) return "3xx";
  if (code >= 400 && code < 500) return "4xx";
  if (code >= 500 && code < 600) return "5xx";
  return "other";
};

const aggregateTraffic = (zones) => {
  const categoryMap = new Map();
  const agentMap = new Map();
  const routeMap = new Map();
  const statusMap = new Map();
  let sampled = false;
  for (const zone of zones) {
    for (const row of zone.agents || []) {
      const requests = Math.round(Number(row.count || 0));
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
      const ua = row.dimensions?.userAgent || "";
      const country = row.dimensions?.clientCountryName || "Unknown";
      const classification = classifyAgent(ua);
      const category = categoryMap.get(classification.key) || { ...classification, requests: 0 };
      category.requests += requests;
      categoryMap.set(classification.key, category);
      const agentKey = `${classification.key}\u0000${country}\u0000${ua}`;
      const agent = agentMap.get(agentKey) || { classification: classification.label, kind: classification.kind, country, userAgent: ua, requests: 0 };
      agent.requests += requests;
      agentMap.set(agentKey, agent);
    }
    for (const row of zone.routes || []) {
      const requests = Math.round(Number(row.count || 0));
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
      const dimensions = row.dimensions || {};
      const classification = classifyAgent(dimensions.userAgent || "");
      const key = `${classification.key}\u0000${dimensions.clientRequestPath || "/"}\u0000${dimensions.clientCountryName || "Unknown"}\u0000${dimensions.edgeResponseStatus || 0}`;
      const route = routeMap.get(key) || { classification: classification.label, kind: classification.kind, path: dimensions.clientRequestPath || "/", country: dimensions.clientCountryName || "Unknown", status: Number(dimensions.edgeResponseStatus || 0), requests: 0 };
      route.requests += requests;
      routeMap.set(key, route);
    }
    for (const row of zone.statuses || []) {
      const requests = Math.round(Number(row.count || 0));
      sampled ||= Number(row.avg?.sampleInterval || 1) > 1;
      const bucket = statusBucket(row.dimensions?.edgeResponseStatus);
      statusMap.set(bucket, (statusMap.get(bucket) || 0) + requests);
    }
  }
  const categories = [...categoryMap.values()].sort((a, b) => b.requests - a.requests);
  const classifiedRequests = categories.reduce((sum, row) => sum + row.requests, 0);
  const browserLikeRequests = categories.filter((row) => row.kind === "browser").reduce((sum, row) => sum + row.requests, 0);
  const nonBrowserRequests = Math.max(0, classifiedRequests - browserLikeRequests);
  const statusBuckets = ["2xx", "3xx", "4xx", "5xx", "other"].map((bucket) => ({ bucket, requests: statusMap.get(bucket) || 0 }));
  const totalStatusRequests = statusBuckets.reduce((sum, row) => sum + row.requests, 0);
  const fourxxRequests = statusMap.get("4xx") || 0;
  const fivexxRequests = statusMap.get("5xx") || 0;
  return {
    categories,
    topAgents: [...agentMap.values()].sort((a, b) => b.requests - a.requests).slice(0, 100),
    topRoutes: [...routeMap.values()].sort((a, b) => b.requests - a.requests).slice(0, 100),
    summary: {
      classifiedRequests,
      browserLikeRequests,
      nonBrowserRequests,
      browserLikeShare: classifiedRequests ? browserLikeRequests / classifiedRequests : 0,
      totalStatusRequests,
      statusBuckets,
      fourxxRequests,
      fourxxShare: totalStatusRequests ? fourxxRequests / totalStatusRequests : 0,
      fivexxRequests,
      fivexxShare: totalStatusRequests ? fivexxRequests / totalStatusRequests : 0,
    },
    sampled,
  };
};

const aggregateSecurity = (events) => {
  const ipMap = new Map();
  const actionMap = new Map();
  for (const event of events) {
    const classification = classifyAgent(event.userAgent || "");
    const key = event.clientIP || "unknown";
    const row = ipMap.get(key) || { ip: key, asn: event.clientAsn || null, country: event.clientCountryName || "Unknown", classification: classification.label, kind: classification.kind, userAgent: event.userAgent || "", requests: 0, actions: {}, paths: [], latestAt: event.datetime || null };
    row.requests += 1;
    row.actions[event.action || "unknown"] = (row.actions[event.action || "unknown"] || 0) + 1;
    if (event.clientRequestPath && !row.paths.includes(event.clientRequestPath) && row.paths.length < 10) row.paths.push(event.clientRequestPath);
    if (event.datetime && (!row.latestAt || event.datetime > row.latestAt)) row.latestAt = event.datetime;
    ipMap.set(key, row);
    actionMap.set(event.action || "unknown", (actionMap.get(event.action || "unknown") || 0) + 1);
  }
  return {
    eventCount: events.length,
    actions: [...actionMap.entries()].map(([action, requests]) => ({ action, requests })).sort((a, b) => b.requests - a.requests),
    topIps: [...ipMap.values()].sort((a, b) => b.requests - a.requests).slice(0, 100),
    recentEvents: events.slice(0, 100).map((event) => ({ datetime: event.datetime, action: event.action, source: event.source, description: event.description || "", ip: event.clientIP, asn: event.clientAsn, country: event.clientCountryName, path: event.clientRequestPath, query: event.clientRequestQuery, userAgent: event.userAgent, classification: classifyAgent(event.userAgent || "").label })),
  };
};

const makeRanges = (days) => {
  const end = Date.now();
  const start = end - days * DAY_MS;
  const ranges = [];
  for (let cursor = start; cursor < end; cursor += DAY_MS) ranges.push({ start: new Date(cursor).toISOString(), end: new Date(Math.min(cursor + DAY_MS, end)).toISOString() });
  return ranges;
};

const loadDiagnostics = async (request, env) => {
  const token = String(env.CLOUDFLARE_ANALYTICS_TOKEN || "").trim();
  const zoneId = String(env.CLOUDFLARE_ZONE_ID || "").trim();
  if (!token || !zoneId) throw new Error("Cloudflare Analytics tokenı veya Zone ID tanımlı değil.");
  const url = new URL(request.url);
  const requestedDays = Number.parseInt(url.searchParams.get("days") || "1", 10);
  const days = [1, 7].includes(requestedDays) ? requestedDays : 1;
  const ranges = makeRanges(days);
  const trafficZones = [];
  for (const range of ranges) trafficZones.push(await graphql(token, requestQuery, { zoneTag: zoneId, start: range.start, end: range.end }));
  let security;
  try {
    const range = ranges[ranges.length - 1];
    const zone = await graphql(token, firewallQuery, { zoneTag: zoneId, filter: { datetime_geq: range.start, datetime_leq: range.end } });
    security = { available: true, ...aggregateSecurity(zone.firewallEventsAdaptive || []) };
  } catch (error) {
    security = { available: false, error: error instanceof Error ? error.message : "Security Events sorgulanamadı.", eventCount: 0, actions: [], topIps: [], recentEvents: [] };
  }
  return {
    connected: true,
    range: { days, start: ranges[0].start, end: ranges[ranges.length - 1].end },
    traffic: aggregateTraffic(trafficZones),
    security,
    notes: [
      "HTTP trafik sınıflandırması User-Agent imzasına dayanır; User-Agent taklit edilebilir.",
      "Tarayıcı benzeri istek sayısı gerçek kişi veya oturum sayısı değildir; bot filtreli GA/Search Console verileriyle birlikte yorumlanmalıdır.",
      "4xx oranı bot, script ve tarayıcıların var olmayan ya da korumalı adresleri taramasından yükselebilir; üst rota tablosunda HTTP durumu ve trafik sınıfı birlikte kontrol edilmelidir.",
      "Security Events yalnız güvenlik ürünlerinin kaydettiği olayları içerir; bütün HTTP isteklerinin ham IP günlüğü değildir.",
      "IP sahipliği için ASN/IP verileri açık kaynak WHOIS/RDAP ile ayrıca doğrulanmalıdır."
    ],
    fetchedAt: new Date().toISOString(),
  };
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== DIAGNOSTICS_PATH) return edgeHealthWorker.fetch(request, env, ctx);
    const authFailure = await authorize(request, env, ctx);
    if (authFailure) return authFailure;
    if (request.method !== "GET") return secureJson({ error: "Yalnızca GET desteklenir." }, 405);
    try { return secureJson(await loadDiagnostics(request, env)); }
    catch (error) { return secureJson({ connected: false, error: error instanceof Error ? error.message : "Trafik teşhisi alınamadı." }, 502); }
  },
};
