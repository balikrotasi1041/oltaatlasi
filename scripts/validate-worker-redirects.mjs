import worker from "../worker/index.js";

const assets = { fetch: async () => new Response("asset", { status: 200 }) };
const cases = [
  ["https://oltaatlasi.com/meralar/cubuklu-beykoz-sahili/", "https://oltaatlasi.com/meralar/cubuklu-sahili/"],
  ["https://oltaatlasi.com/meralar/cubuklu-beykoz-sahili?utm_source=test", "https://oltaatlasi.com/meralar/cubuklu-sahili/?utm_source=test"],
  ["https://www.oltaatlasi.com/meralar/cubuklu-beykoz-sahili/", "https://oltaatlasi.com/meralar/cubuklu-sahili/"],
  ["https://oltaatlasi.com/meralar/maltepe-sahili/", "https://oltaatlasi.com/meralar/maltepe-orhangazi-sehir-parki-kiyisi/"],
  ["https://oltaatlasi.com/meralar/pendik-sahili/", "https://oltaatlasi.com/meralar/pendik-sahil-parki-kamusal-kiyi/"],
  ["https://oltaatlasi.com/meralar/basiskele-sahili/", "https://oltaatlasi.com/meralar/basiskele-kamusal-sahil-hatti/"],
];
for (const [source, expected] of cases) {
  const response = await worker.fetch(new Request(source), { ASSETS: assets }, {});
  if (response.status !== 301) throw new Error(`${source} için 301 yerine ${response.status} döndü.`);
  if (response.headers.get("location") !== expected) throw new Error(`${source} hedefi ${response.headers.get("location")}; beklenen ${expected}.`);
}
const current = await worker.fetch(new Request("https://oltaatlasi.com/meralar/cubuklu-sahili/"), { ASSETS: assets }, {});
if (current.status !== 200) throw new Error(`Ana Çubuklu rotası erişilemez: ${current.status}`);
console.log(`Worker redirect denetimi: ${cases.length} kalıcı yönlendirme ve ana hedef başarılı.`);
