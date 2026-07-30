import { readFileSync } from "node:fs";

const files = ["src/data/meralar.ts", "src/data/meralar-gunluk.ts"];
const sources = files.map((path) => ({ path, text: readFileSync(path, "utf8") }));
const combined = sources.map(({ text }) => text).join("\n");

const collect = (pattern) => [...combined.matchAll(pattern)].map((match) => match[1]);
const duplicates = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];

const slugs = collect(/(?:"slug"\s*:\s*|slug:\s*)"([^"]+)"/g);
const names = collect(/(?:"name"\s*:\s*|name:\s*)"([^"]+)"/g);
const sourceUrls = collect(/(?:"url"\s*:\s*|url:\s*)"(https?:\/\/[^"\s]+)"/g);

const errors = [];
const warnings = [];

if (slugs.length === 0) errors.push("Hiç rota slug kaydı bulunamadı.");
for (const slug of duplicates(slugs)) errors.push(`Tekrarlanan rota slug: ${slug}`);
for (const name of duplicates(names)) warnings.push(`Tekrarlanan görünen ad kontrol edilmeli: ${name}`);

for (const slug of slugs) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`Geçersiz slug biçimi: ${slug}`);
}

for (const url of sourceUrls) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") warnings.push(`HTTPS olmayan kaynak: ${url}`);
  } catch {
    errors.push(`Geçersiz kaynak URL'si: ${url}`);
  }
}

const exactLocationCount = (combined.match(/locationPrecision\s*:\s*"Tam"|"locationPrecision"\s*:\s*"Tam"/g) || []).length;
if (exactLocationCount > 0) warnings.push(`${exactLocationCount} kayıtta kesin konum kullanılıyor; kamusal erişim ve hassas alan riski ayrıca kontrol edilmeli.`);

const unsafePhrases = ["av garantisi verir", "kesin balık çıkar", "yasak yoktur"];
for (const phrase of unsafePhrases) {
  if (combined.toLocaleLowerCase("tr-TR").includes(phrase)) errors.push(`Kaçınılması gereken kesin hüküm bulundu: ${phrase}`);
}

console.log(`Rota veri denetimi: ${slugs.length} slug, ${sourceUrls.length} kaynak bağlantısı.`);
for (const warning of warnings) console.warn(`UYARI: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`HATA: ${error}`);
  process.exit(1);
}
