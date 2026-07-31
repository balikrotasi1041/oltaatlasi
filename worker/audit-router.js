import dashboardWorker from "./router.js";

const AUDIT_PATH = "/admin/api/audit-export";
const SITE_GA4_MEASUREMENT_ID = "G-K3ZLC335GP";
const CLOUDFLARE_EXPORT_DAYS = 7;

const secureJson = (payload, status = 200, download = false) => {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  };
  if (download) {
    const date = new Date().toISOString().slice(0, 10);
    headers["Content-Disposition"] = `attachment; filename="olta-atlasi-denetim-${date}.json"`;
  }
  return new Response(JSON.stringify(payload, null, 2), { status, headers });
};

const requestThroughWorker = async (request, env, ctx, pathname, days) => {
  const url = new URL(request.url);
  url.pathname = pathname;
  url.search = `?days=${encodeURIComponent(days)}`;
  const internalRequest = new Request(url.toString(), {
    method: "GET",
    headers: request.headers,
  });
  const response = await dashboardWorker.fetch(internalRequest, env, ctx);
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    payload = { connected: false, error: text || `HTTP ${response.status}` };
  }
  return {
    ok: response.ok && payload?.connected !== false,
    status: response.status,
    payload,
  };
};

const readDashboardSummary = async (request, env, ctx) => {
  const url = new URL(request.url);
  url.pathname = "/admin/dashboard/";
  url.search = "";
  const response = await dashboardWorker.fetch(new Request(url.toString(), {
    method: "GET",
    headers: request.headers,
  }), env, ctx);

  if (!response.ok) return { ok: false, status: response.status };
  const html = await response.text();
  const extract = (label) => {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `<span[^>]*>\\s*${escaped}\\s*<\\/span>\\s*<strong[^>]*>([^<]+)<\\/strong>`,
      "i",
    );
    return html.match(pattern)?.[1]?.trim() || null;
  };
  const score = html.match(/<div[^>]*class="[^"]*score[^"]*"[^>]*>[\s\S]*?<strong[^>]*>([^<]+)<\/strong>/i)?.[1]?.trim() || null;

  return {
    ok: true,
    status: response.status,
    totals: {
      qualityScore: score,
      fishingSpots: extract("Toplam avlak"),
      provinces: extract("İl"),
      districts: extract("İlçe"),
      fishSpecies: extract("Balık türü"),
    },
  };
};

const ga4HasNoData = (ga4) => {
  if (!ga4.ok) return false;
  const totals = ga4.payload?.totals || {};
  return [
    totals.activeUsers,
    totals.sessions,
    totals.views,
    totals.organicSessions,
    totals.realtimeActiveUsers,
  ].every((value) => Number(value || 0) === 0);
};

const handleAuditExport = async (request, env, ctx) => {
  if (request.method !== "GET") return secureJson({ error: "Yalnızca GET desteklenir." }, 405);

  const requestUrl = new URL(request.url);
  const requestedDays = Number.parseInt(requestUrl.searchParams.get("days") || "28", 10);
  const days = [7, 28, 90].includes(requestedDays) ? requestedDays : 28;

  const authCheck = await readDashboardSummary(request, env, ctx);
  if (!authCheck.ok) {
    const url = new URL(request.url);
    url.pathname = "/admin/dashboard/";
    url.search = "";
    return dashboardWorker.fetch(new Request(url.toString(), {
      method: "GET",
      headers: request.headers,
    }), env, ctx);
  }

  const [ga4, searchConsole, cloudflare] = await Promise.all([
    requestThroughWorker(request, env, ctx, "/admin/api/ga4", days),
    requestThroughWorker(request, env, ctx, "/admin/api/search-console", days),
    requestThroughWorker(request, env, ctx, "/admin/api/cloudflare", CLOUDFLARE_EXPORT_DAYS),
  ]);

  const zeroGa4 = ga4HasNoData(ga4);

  return secureJson({
    report: "Olta Atlası güvenli yönetim paneli denetim dışa aktarımı",
    generatedAt: new Date().toISOString(),
    requestedPeriodDays: days,
    containsSecrets: false,
    note: "Bu dosya parola, API tokenı, OAuth yenileme belirteci veya özel anahtar içermez.",
    diagnostics: {
      ga4: zeroGa4
        ? {
          status: "no-data",
          siteMeasurementId: SITE_GA4_MEASUREMENT_ID,
          message: "GA4 API bağlantısı başarılı ancak seçilen dönemde kullanıcı, oturum ve görüntüleme verisi sıfır. Ölçüm kimliğinin doğru veri akışına ait olduğu, analitik izninin kabul edildiği ve verinin işlenmesi için yeterli süre geçtiği kontrol edilmelidir.",
        }
        : { status: ga4.ok ? "ok" : "error", siteMeasurementId: SITE_GA4_MEASUREMENT_ID },
      cloudflare: {
        requestedDays: days,
        exportedDays: CLOUDFLARE_EXPORT_DAYS,
        message: "Cloudflare zone veri saklama sınırı nedeniyle dışa aktarım son 7 günle sınırlıdır; Search Console ve GA4 seçilen dönemi kullanır.",
      },
    },
    content: authCheck,
    ga4,
    searchConsole,
    cloudflare,
  }, 200, true);
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== AUDIT_PATH) return dashboardWorker.fetch(request, env, ctx);
    return handleAuditExport(request, env, ctx);
  },
};
