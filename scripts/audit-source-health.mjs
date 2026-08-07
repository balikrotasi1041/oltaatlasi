import { meralar } from "../src/data/meralar-tumu.ts";

const sourceRoutes = new Map();
for (const route of meralar) {
  for (const source of route.sources) {
    const routes = sourceRoutes.get(source.url) || [];
    routes.push(route.slug);
    sourceRoutes.set(source.url, routes);
  }
}

const request = async (url, method) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    return await fetch(url, {
      method,
      redirect:"follow",
      signal:controller.signal,
      headers:{
        "user-agent":"OltaAtlasi-SourceAudit/1.0 (+https://oltaatlasi.com/hakkinda/)",
        ...(method === "GET" ? { range:"bytes=0-2048" } : {}),
      },
    });
  } finally {
    clearTimeout(timeout);
  }
};

const probe = async (url) => {
  try {
    let response = await request(url, "HEAD");
    if ([405, 501].includes(response.status) || [404, 410].includes(response.status)) response = await request(url, "GET");
    if ([404, 410].includes(response.status)) return { state:"broken", status:response.status, finalUrl:response.url };
    if ([401, 403, 418, 429].includes(response.status)) return { state:"restricted", status:response.status, finalUrl:response.url };
    if (response.status >= 400) return { state:"warning", status:response.status, finalUrl:response.url };
    return { state:"ok", status:response.status, finalUrl:response.url };
  } catch (error) {
    return { state:"unreachable", status:0, error:error instanceof Error?error.message:String(error) };
  }
};

const urls = [...sourceRoutes.keys()];
const results = [];
let cursor = 0;
const worker = async () => {
  while (cursor < urls.length) {
    const index = cursor;
    cursor += 1;
    const url = urls[index];
    results[index] = { url, routes:sourceRoutes.get(url), ...(await probe(url)) };
  }
};
await Promise.all(Array.from({ length:Math.min(32, urls.length) }, worker));

const byState = (state) => results.filter((result) => result.state === state);
const broken = byState("broken");
const restricted = byState("restricted");
const warnings = [...byState("warning"), ...byState("unreachable")];
console.log(`Kaynak sağlık taraması: ${results.length} benzersiz URL; ${byState("ok").length} erişilebilir, ${restricted.length} erişim kısıtlı, ${warnings.length} geçici/inceleme uyarısı, ${broken.length} kesin 404/410.`);
for (const result of broken) console.error(`HATA ${result.status}: ${result.url} | ${result.routes.slice(0,8).join(", ")}`);
for (const result of warnings.slice(0,40)) console.warn(`UYARI ${result.status||result.error}: ${result.url} | ${result.routes.slice(0,5).join(", ")}`);
if (warnings.length > 40) console.warn(`UYARI: ${warnings.length - 40} ek geçici/inceleme sonucu özet çıktıdan gizlendi.`);
if (broken.length) process.exit(1);
