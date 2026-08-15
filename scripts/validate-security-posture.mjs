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
console.log("Güvenlik duruşu doğrulandı: Worker yüzeyi, secret ignore kuralları ve GitHub Actions pinleri beklenen durumda.");
