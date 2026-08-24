import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const errors = [];
const expect = (condition, message) => { if (!condition) errors.push(message); };

const wrangler = JSON.parse(readFileSync("wrangler.jsonc", "utf8"));
expect(wrangler.workers_dev === false, "wrangler.jsonc workers_dev=false olmalıdır.");
expect(wrangler.preview_urls === false, "wrangler.jsonc preview_urls=false olmalıdır.");
expect(wrangler.main === "./worker/security-gate.js", "Worker giriş noktası security-gate.js olmalıdır.");

const rateLimits = new Map((wrangler.ratelimits || []).map((item) => [item.name, item]));
const weatherRateLimit = rateLimits.get("WEATHER_RATE_LIMITER");
const suspiciousRateLimit = rateLimits.get("SUSPICIOUS_RATE_LIMITER");
expect(weatherRateLimit?.simple?.limit === 60 && weatherRateLimit?.simple?.period === 60, "Hava API rate limit'i 60 istek/60 saniye olmalıdır.");
expect(suspiciousRateLimit?.simple?.limit === 15 && suspiciousRateLimit?.simple?.period === 60, "Şüpheli crawler rate limit'i 15 istek/60 saniye olmalıdır.");
expect(weatherRateLimit?.namespace_id !== suspiciousRateLimit?.namespace_id, "Rate limit binding namespace kimlikleri birbirinden farklı olmalıdır.");

const gate = readFileSync("worker/security-gate.js", "utf8");
expect(gate.includes("decodeURIComponent"), "Security gate encoded probe normalizasyonunu korumalıdır.");
expect(gate.includes('request.method === "TRACE"'), "Security gate TRACE isteklerini reddetmelidir.");
expect(gate.includes('url.protocol === "http:"'), "Security gate HTTP→HTTPS korumasını içermelidir.");
expect(gate.includes("CF-Connecting-IP"), "Security gate istemci IP'sini Cloudflare başlığından okumalıdır.");
for (const blockedIp of ["185.177.72.68", "216.73.216.200", "45.45.237.65"]) {
  expect(gate.includes(`"${blockedIp}"`), `Doğrulanmış kötüye kullanım adresi ${blockedIp} security gate blocklist içinde olmalıdır.`);
}
expect(gate.includes('"216.244.66.233"'), "Yüksek hacimli şüpheli crawler IP'si throttle listesinde bulunmalıdır.");
expect(gate.includes("SUSPICIOUS_RATE_LIMITER"), "Şüpheli crawler trafiği Worker rate limit binding'i ile sınırlandırılmalıdır.");
expect(gate.includes("WEATHER_RATE_LIMITER"), "Hava API'si Worker rate limit binding'i ile sınırlandırılmalıdır.");
expect(gate.includes('"Retry-After": "60"'), "429 yanıtı istemciye Retry-After başlığı vermelidir.");
expect(gate.includes('"X-Olta-Rate-Limit"'), "Rate limit yanıtları teşhis başlığı taşımalıdır.");
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
for (const blockedIp of ["185.177.72.68", "216.73.216.200", "45.45.237.65"]) {
  expect(router.includes(`"${blockedIp}"`), `Doğrulanmış kötüye kullanım adresi ${blockedIp} downstream blocklist içinde de olmalıdır.`);
}
expect(router.includes("rails\\/info\\/properties"), "Downstream probe guard Rails bilgi taramasını engellemelidir.");
expect(router.includes("app\\.config"), "Downstream probe guard App.config taramasını engellemelidir.");
expect(router.includes("tgz"), "Downstream probe guard backup.tgz benzeri arşiv taramalarını engellemelidir.");
expect(router.includes("jenkinsfile"), "Downstream probe guard Jenkinsfile taramasını engellemelidir.");
expect(router.includes("DATA_ASSET_PATTERN"), "Statik JSON veri dosyaları kısa süreli güvenli browser cache politikası taşımalıdır.");
expect(router.includes('SHORT_CACHE_PAGES = new Set(["/iletisim/"])'), "İletişim sayfası kısa browser cache politikasına alınmalıdır.");

const robotsGenerator = readFileSync("scripts/generate-robots.mjs", "utf8");
for (const blockedPath of ["/admin/", "/api/", "/__deploy/", "/data/weather-official-audit.json"]) {
  expect(robotsGenerator.includes(`Disallow: ${blockedPath}`), `robots.txt üreticisi yardımcı yolu taramaya kapatmalıdır: ${blockedPath}`);
}

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
console.log("Güvenlik duruşu doğrulandı: Worker yüzeyi, kötüye kullanım blokları, rate limit binding'leri, probe korumaları, güvenli browser cache politikaları, cache'li hava endpoint'i, robots yardımcı yol dışlamaları, secret ignore kuralları ve GitHub Actions pinleri beklenen durumda.");
