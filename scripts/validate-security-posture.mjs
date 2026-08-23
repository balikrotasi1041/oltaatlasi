import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const errors = [];
const expect = (condition, message) => { if (!condition) errors.push(message); };

const wrangler = JSON.parse(readFileSync("wrangler.jsonc", "utf8"));
expect(wrangler.workers_dev === false, "wrangler.jsonc workers_dev=false olmalıdır.");
expect(wrangler.preview_urls === false, "wrangler.jsonc preview_urls=false olmalıdır.");
expect(wrangler.main === "./worker/security-gate.js", "Worker giriş noktası security-gate.js olmalıdır.");

const gate = readFileSync("worker/security-gate.js", "utf8");
expect(gate.includes("decodeURIComponent"), "Security gate encoded probe normalizasyonunu korumalıdır.");
expect(gate.includes('request.method === "TRACE"'), "Security gate TRACE isteklerini reddetmelidir.");
expect(gate.includes('url.protocol === "http:"'), "Security gate HTTP→HTTPS korumasını içermelidir.");
expect(gate.includes("CF-Connecting-IP"), "Security gate istemci IP'sini Cloudflare başlığından okumalıdır.");
for (const blockedIp of ["185.177.72.68", "216.73.216.200"]) {
  expect(gate.includes(`"${blockedIp}"`), `Doğrulanmış kötüye kullanım adresi ${blockedIp} security gate blocklist içinde olmalıdır.`);
}
for (const signature of ["rails\\/info\\/properties", "app\\.config", "backup", "tgz", "\\$\\(", "jenkinsfile"]) {
  expect(gate.includes(signature), `Security gate probe imzasını korumalıdır: ${signature}`);
}
expect(gate.includes('url.pathname === "/api/weather"'), "Mera hava endpoint'i security gate üzerinden sunulmalıdır.");
expect(gate.includes("handleWeatherRequest"), "Mera hava endpoint'i ayrı weather service handler'ına yönlenmelidir.");

const weather = readFileSync("worker/weather-service.js", "utf8");
expect(weather.includes("https://api.met.no/weatherapi/locationforecast/2.0/compact"), "Hava servisi sabit MET Norway Locationforecast kaynağını kullanmalıdır.");
expect(weather.includes("caches.default"), "Hava servisi gereksiz upstream trafiğini önlemek için Cloudflare cache kullanmalıdır.");
expect(weather.includes('"user-agent"'), "MET Norway istekleri tanımlayıcı User-Agent göndermelidir.");
expect(weather.includes('"x-robots-tag": "noindex, nofollow, noarchive, nosnippet"'), "Hava API yanıtları arama indeksine kapalı olmalıdır.");
expect(weather.includes('request.method !== "GET"'), "Hava endpoint'i yalnız GET kabul etmelidir.");
expect(weather.includes("roundCoord"), "Hava endpoint'i koordinatları cache/veri minimizasyonu için yuvarlamalıdır.");
expect(!weather.includes("eval("), "Hava servisi eval kullanmamalıdır.");

const weatherUi = readFileSync("src/components/SeoOpportunityPanel.astro", "utf8");
expect(weatherUi.includes("/api/weather?"), "Mera hava kartı yalnız aynı origin hava endpoint'ini çağırmalıdır.");
expect(weatherUi.includes("/data/weather-official-audit.json"), "Mera hava kartı günlük MGM denetim kaydını okumalıdır.");
expect(weatherUi.includes("balık yakalama ihtimalini değil"), "Saha koşulu skoru av garantisi gibi sunulmamalıdır.");
const officialAudit = JSON.parse(readFileSync("public/data/weather-official-audit.json", "utf8"));
expect(officialAudit.version === 1, "Resmî hava denetim dosyası sürüm 1 şemasını kullanmalıdır.");
expect(typeof officialAudit.warnings === "object" && officialAudit.warnings !== null, "Resmî hava denetim dosyasında warnings nesnesi bulunmalıdır.");

const router = readFileSync("worker/security-router.js", "utf8");
for (const blockedIp of ["185.177.72.68", "216.73.216.200"]) {
  expect(router.includes(`"${blockedIp}"`), `Doğrulanmış kötüye kullanım adresi ${blockedIp} downstream blocklist içinde de olmalıdır.`);
}
expect(router.includes("rails\\/info\\/properties"), "Downstream probe guard Rails bilgi taramasını engellemelidir.");
expect(router.includes("app\\.config"), "Downstream probe guard App.config taramasını engellemelidir.");
expect(router.includes("tgz"), "Downstream probe guard backup.tgz benzeri arşiv taramalarını engellemelidir.");
expect(router.includes("jenkinsfile"), "Downstream probe guard Jenkinsfile taramasını engellemelidir.");

const ignore = readFileSync(".gitignore", "utf8").split(/\r?\n/);
for (const entry of [".env", ".dev.vars", ".wrangler/", "*.pem", "*.key"]) {
  expect(ignore.includes(entry), `.gitignore güvenlik girdisi eksik: ${entry}`);
}

const workflowsDir = ".github/workflows";
for (const file of readdirSync(workflowsDir).filter((name) => /\.ya?ml$/i.test(name))) {
  const text = readFileSync(path.join(workflowsDir, file), "utf8");
  for (const match of text.matchAll(/uses:\s*(actions\/[\w-]+)@([^\s#]+)/g)) {
    expect(/^[a-f0-9]{40}$/.test(match[2]), `${file}: ${match[1]} tam commit SHA ile sabitlenmelidir.`);
  }
}

if (errors.length) {
  for (const error of errors) console.error(`GÜVENLİK HATASI: ${error}`);
  process.exit(1);
}
console.log("Güvenlik duruşu doğrulandı: Worker yüzeyi, kötüye kullanım blokları, probe korumaları, cache'li hava endpoint'i, secret ignore kuralları ve GitHub Actions pinleri beklenen durumda.");
