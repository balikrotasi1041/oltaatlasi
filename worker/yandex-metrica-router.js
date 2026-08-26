import appWorker from "./traffic-diagnostics-router.js";

const API_PATH = "/admin/api/yandex-metrica";
const DASHBOARD_PATHS = new Set(["/admin/dashboard", "/admin/dashboard/"]);
const DEFAULT_COUNTER_ID = "111979244";
const SNAPSHOT_TTL_SECONDS = 6 * 60 * 60;

const jsonResponse = (payload, status = 200) => new Response(JSON.stringify(payload), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
    "X-Content-Type-Options": "nosniff",
  },
});

const allowedDays = (value) => {
  const parsed = Number.parseInt(String(value || "28"), 10);
  return [7, 28, 90].includes(parsed) ? parsed : 28;
};

const snapshotKey = (counterId, days) => new Request(
  `https://oltaatlasi.internal/yandex-metrica/${encodeURIComponent(counterId)}?days=${days}`,
);

const saveSnapshot = async (ctx, key, payload) => {
  const write = caches.default.put(key, new Response(JSON.stringify(payload), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "Cache-Control": `max-age=${SNAPSHOT_TTL_SECONDS}`,
    },
  }));
  if (ctx?.waitUntil) ctx.waitUntil(write);
  else await write;
};

const yandexReport = async ({ token, counterId, days, metrics, dimensions = "", sort = "", limit = 10 }) => {
  const params = new URLSearchParams({
    ids: counterId,
    date1: `${days}daysAgo`,
    date2: "yesterday",
    metrics,
    accuracy: "full",
    lang: "en",
    limit: String(limit),
  });
  if (dimensions) params.set("dimensions", dimensions);
  if (sort) params.set("sort", sort);

  const response = await fetch(`https://api-metrika.yandex.net/stat/v1/data?${params.toString()}`, {
    headers: {
      Authorization: `OAuth ${token}`,
      Accept: "application/json",
    },
  });
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`Yandex.Metrica API geçersiz yanıt döndürdü (${response.status}).`);
  }
  if (!response.ok || payload?.errors?.length) {
    const message = payload?.errors?.map((item) => item?.message || item?.error_type).filter(Boolean).join(" · ")
      || payload?.message
      || `Yandex.Metrica API sorgusu başarısız oldu (${response.status}).`;
    throw new Error(message);
  }
  return payload;
};

const dimensionName = (row, index) => row?.dimensions?.[index]?.name || row?.dimensions?.[index]?.id || "";
const metricNumber = (row, index) => Number(row?.metrics?.[index] || 0);

const handleYandexMetrica = async (request, env, ctx) => {
  if (request.method !== "GET") return jsonResponse({ connected: false, error: "Yalnızca GET desteklenir." }, 405);

  const requestUrl = new URL(request.url);
  const days = allowedDays(requestUrl.searchParams.get("days"));
  const counterId = String(env.YANDEX_METRICA_COUNTER_ID || DEFAULT_COUNTER_ID).trim();
  const token = String(env.YANDEX_METRICA_TOKEN || "").trim();
  const cacheKey = snapshotKey(counterId, days);

  try {
    if (!token) {
      throw new Error("YANDEX_METRICA_TOKEN tanımlı değil. Dashboard verisi için Cloudflare Worker sırrına metrika:read yetkili Yandex OAuth token eklenmelidir.");
    }

    const [summary, sources, devices, cities, pages] = await Promise.all([
      yandexReport({
        token,
        counterId,
        days,
        metrics: "ym:s:users,ym:s:visits,ym:s:pageviews,ym:s:bounceRate,ym:s:pageDepth,ym:s:avgVisitDurationSeconds,ym:s:percentNewVisitors",
        limit: 1,
      }),
      yandexReport({
        token,
        counterId,
        days,
        dimensions: "ym:s:trafficSourceName",
        metrics: "ym:s:visits,ym:s:users,ym:s:bounceRate",
        sort: "-ym:s:visits",
        limit: 10,
      }),
      yandexReport({
        token,
        counterId,
        days,
        dimensions: "ym:s:deviceCategory",
        metrics: "ym:s:visits,ym:s:users,ym:s:pageviews",
        sort: "-ym:s:visits",
        limit: 10,
      }),
      yandexReport({
        token,
        counterId,
        days,
        dimensions: "ym:s:regionCityName,ym:s:regionCountryName",
        metrics: "ym:s:visits,ym:s:users",
        sort: "-ym:s:visits",
        limit: 10,
      }),
      yandexReport({
        token,
        counterId,
        days,
        dimensions: "ym:pv:URLPathFull",
        metrics: "ym:pv:pageviews,ym:pv:users",
        sort: "-ym:pv:pageviews",
        limit: 10,
      }),
    ]);

    const totals = summary?.totals || [];
    const payload = {
      connected: true,
      counterId,
      range: { days, startDate: `${days}daysAgo`, endDate: "yesterday" },
      totals: {
        users: Number(totals[0] || 0),
        visits: Number(totals[1] || 0),
        pageviews: Number(totals[2] || 0),
        bounceRate: Number(totals[3] || 0),
        pageDepth: Number(totals[4] || 0),
        avgVisitDurationSeconds: Number(totals[5] || 0),
        percentNewVisitors: Number(totals[6] || 0),
      },
      sources: (sources?.data || []).map((row) => ({
        source: dimensionName(row, 0) || "Tanımsız",
        visits: metricNumber(row, 0),
        users: metricNumber(row, 1),
        bounceRate: metricNumber(row, 2),
      })),
      devices: (devices?.data || []).map((row) => ({
        device: dimensionName(row, 0) || "Tanımsız",
        visits: metricNumber(row, 0),
        users: metricNumber(row, 1),
        pageviews: metricNumber(row, 2),
      })),
      cities: (cities?.data || []).map((row) => ({
        city: dimensionName(row, 0) || "Tanımsız",
        country: dimensionName(row, 1) || "",
        visits: metricNumber(row, 0),
        users: metricNumber(row, 1),
      })),
      pages: (pages?.data || []).map((row) => ({
        page: dimensionName(row, 0) || "/",
        pageviews: metricNumber(row, 0),
        users: metricNumber(row, 1),
      })),
      fetchedAt: new Date().toISOString(),
    };

    await saveSnapshot(ctx, cacheKey, payload);
    return jsonResponse(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bilinmeyen Yandex.Metrica hatası.";
    const cached = await caches.default.match(cacheKey);
    if (cached) {
      const snapshot = await cached.json();
      return jsonResponse({
        ...snapshot,
        stale: true,
        warning: "Yandex.Metrica canlı bağlantısı geçici olarak kullanılamıyor; son başarılı veri gösteriliyor.",
        staleReason: message,
      });
    }
    return jsonResponse({ connected: false, counterId, error: message }, 200);
  }
};

const yandexPanel = `
<section class="panel" id="ym-dashboard" aria-labelledby="ym-title">
  <div class="panel-head">
    <div><p class="eyebrow dark">Yandex.Metrica</p><h2 id="ym-title">Davranış ve ziyaret trafiği</h2><p id="ym-status">Veriler yükleniyor…</p></div>
    <div class="actions"><label for="ym-period">Dönem</label><select id="ym-period"><option value="7">Son 7 gün</option><option value="28" selected>Son 28 gün</option><option value="90">Son 90 gün</option></select><button id="ym-refresh" type="button">Yenile</button></div>
  </div>
  <div class="metric-cards six" aria-live="polite">
    <article><span>Kullanıcı</span><strong id="ym-users">—</strong><small id="ym-new-users">—</small></article>
    <article><span>Ziyaret</span><strong id="ym-visits">—</strong></article>
    <article><span>Sayfa görüntüleme</span><strong id="ym-pageviews">—</strong></article>
    <article><span>Hemen çıkma</span><strong id="ym-bounce">—</strong></article>
    <article><span>Sayfa derinliği</span><strong id="ym-depth">—</strong></article>
    <article><span>Ort. ziyaret süresi</span><strong id="ym-duration">—</strong></article>
  </div>
  <div id="ym-error" class="notice error" hidden></div>
  <div class="analytics-grid">
    <section class="subpanel"><h3>Trafik kaynakları</h3><div id="ym-sources" class="data-list"><p class="muted">Yükleniyor…</p></div></section>
    <section class="subpanel"><h3>Cihazlar</h3><div id="ym-devices" class="data-list"><p class="muted">Yükleniyor…</p></div></section>
    <section class="subpanel"><h3>Şehirler</h3><div id="ym-cities" class="data-list"><p class="muted">Yükleniyor…</p></div></section>
    <section class="subpanel"><h3>En çok görüntülenen sayfalar</h3><div id="ym-pages" class="data-list"><p class="muted">Yükleniyor…</p></div></section>
  </div>
</section>
<script>
(() => {
  const nf = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });
  const df = new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const text = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = value; };
  const errorNode = document.getElementById("ym-error");
  const statusNode = document.getElementById("ym-status");
  const period = document.getElementById("ym-period");
  const refresh = document.getElementById("ym-refresh");
  const duration = (seconds) => { const total = Math.max(0, Math.round(Number(seconds || 0))); const minutes = Math.floor(total / 60); const rest = total % 60; return minutes ? minutes + " dk " + rest + " sn" : rest + " sn"; };
  const render = (id, rows, titleFn, detailFn, valueFn) => {
    const root = document.getElementById(id); if (!root) return; root.replaceChildren();
    if (!rows.length) { const p = document.createElement("p"); p.className = "muted"; p.textContent = "Bu dönem için veri bulunamadı."; root.appendChild(p); return; }
    rows.forEach((row) => { const item = document.createElement("div"); item.className = "data-row"; const label = document.createElement("span"); const title = document.createElement("b"); title.textContent = titleFn(row); const detail = document.createElement("small"); detail.textContent = detailFn(row); const value = document.createElement("strong"); value.textContent = valueFn(row); label.append(title, detail); item.append(label, value); root.appendChild(item); });
  };
  const load = async () => {
    const days = period?.value || "28"; if (refresh) refresh.disabled = true; if (statusNode) statusNode.textContent = "Yandex.Metrica verileri yükleniyor…"; if (errorNode) { errorNode.hidden = true; errorNode.textContent = ""; }
    try {
      const response = await fetch("/admin/api/yandex-metrica?days=" + encodeURIComponent(days), { credentials: "same-origin", headers: { Accept: "application/json" } });
      const payload = await response.json(); if (!response.ok || !payload.connected) throw new Error(payload.error || "Yandex.Metrica bağlantısı kurulamadı.");
      text("ym-users", nf.format(payload.totals.users)); text("ym-new-users", df.format(payload.totals.percentNewVisitors) + "% yeni ziyaretçi"); text("ym-visits", nf.format(payload.totals.visits)); text("ym-pageviews", nf.format(payload.totals.pageviews)); text("ym-bounce", df.format(payload.totals.bounceRate) + "%"); text("ym-depth", df.format(payload.totals.pageDepth)); text("ym-duration", duration(payload.totals.avgVisitDurationSeconds));
      render("ym-sources", payload.sources || [], (row) => row.source || "Tanımsız", (row) => nf.format(row.users) + " kullanıcı · " + df.format(row.bounceRate) + "% hemen çıkma", (row) => nf.format(row.visits));
      render("ym-devices", payload.devices || [], (row) => row.device || "Tanımsız", (row) => nf.format(row.users) + " kullanıcı · " + nf.format(row.pageviews) + " görüntüleme", (row) => nf.format(row.visits));
      render("ym-cities", payload.cities || [], (row) => (row.city || "Tanımsız") + (row.country ? " · " + row.country : ""), (row) => nf.format(row.users) + " kullanıcı", (row) => nf.format(row.visits));
      render("ym-pages", payload.pages || [], (row) => row.page || "/", (row) => nf.format(row.users) + " kullanıcı", (row) => nf.format(row.pageviews));
      if (statusNode) statusNode.textContent = "Son " + payload.range.days + " gün · sayaç " + payload.counterId + (payload.stale ? " · son başarılı veri" : "");
    } catch (error) {
      ["ym-users","ym-new-users","ym-visits","ym-pageviews","ym-bounce","ym-depth","ym-duration"].forEach((id) => text(id, "—"));
      ["ym-sources","ym-devices","ym-cities","ym-pages"].forEach((id) => render(id, [], () => "", () => "", () => ""));
      if (statusNode) statusNode.textContent = "Yandex.Metrica bağlantısı bekleniyor."; if (errorNode) { errorNode.hidden = false; errorNode.textContent = error instanceof Error ? error.message : "Bilinmeyen bağlantı hatası."; }
    } finally { if (refresh) refresh.disabled = false; }
  };
  period?.addEventListener("change", load); refresh?.addEventListener("click", load); load();
})();
</script>`;

const injectDashboardPanel = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.includes("text/html")) return response;
  const html = await response.text();
  if (html.includes('id="ym-dashboard"')) return new Response(html, response);

  const cloudflareMarker = '<section class="panel" aria-labelledby="cf-title">';
  const injected = html.includes(cloudflareMarker)
    ? html.replace(cloudflareMarker, `${yandexPanel}${cloudflareMarker}`)
    : html.replace("</main>", `${yandexPanel}</main>`);
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.set("Cache-Control", "private, no-store");
  headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  return new Response(injected, { status: response.status, statusText: response.statusText, headers });
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === API_PATH) {
      const downstream = await appWorker.fetch(request, env, ctx);
      if (downstream.status !== 404) return downstream;
      return handleYandexMetrica(request, env, ctx);
    }

    const response = await appWorker.fetch(request, env, ctx);
    if (DASHBOARD_PATHS.has(url.pathname)) return injectDashboardPanel(response);
    return response;
  },
};
