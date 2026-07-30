import { readFileSync } from "node:fs";

const files = ["src/data/meralar.ts", "src/data/meralar-gunluk.ts", "src/data/meralar-ulusal.ts"];
const sources = files.map((path) => ({ path, text: readFileSync(path, "utf8") }));
const combined = sources.map(({ text }) => text).join("\n");
const nationalText = sources.find(({ path }) => path.endsWith("meralar-ulusal.ts"))?.text || "";

const collect = (pattern) => [...combined.matchAll(pattern)].map((match) => match[1]);
const duplicates = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
const slugifyTr = (value) => value
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç", "c")
  .replaceAll("ğ", "g")
  .replaceAll("ı", "i")
  .replaceAll("ö", "o")
  .replaceAll("ş", "s")
  .replaceAll("ü", "u")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const nationalMatch = nationalText.match(/const rawRoutes = String\.raw`([\s\S]*?)`;/);
const nationalRows = nationalMatch ? nationalMatch[1].trim().split("\n").filter(Boolean) : [];
const nationalEntries = nationalRows.flatMap((line) => {
  const [province, zone, namesText] = line.split("|");
  return (namesText || "").split(";").filter(Boolean).map((name) => ({
    province,
    zone,
    name,
    slug: `ulusal-${slugifyTr(province || "")}-${slugifyTr(name)}`,
  }));
});

const staticSlugs = collect(/(?:"slug"\s*:\s*|slug:\s*)"([^"]+)"/g);
const slugs = [...staticSlugs, ...nationalEntries.map(({ slug }) => slug)];
const names = [...collect(/(?:"name"\s*:\s*|name:\s*)"([^"]+)"/g), ...nationalEntries.map(({ name }) => name)];
const sourceUrls = collect(/(?:"url"\s*:\s*|url:\s*)"(https?:\/\/[^"\s]+)"/g);

const errors = [];
const warnings = [];

if (!nationalMatch) errors.push("Ulusal rota ham veri bloğu bulunamadı.");
if (nationalRows.length !== 81) errors.push(`Ulusal rota il sayısı 81 yerine ${nationalRows.length}.`);
if (nationalEntries.length !== 405) errors.push(`Ulusal rota sayısı 405 yerine ${nationalEntries.length}.`);
const nationalProvinceCounts = new Map();
for (const entry of nationalEntries) nationalProvinceCounts.set(entry.province, (nationalProvinceCounts.get(entry.province) || 0) + 1);
for (const [province, count] of nationalProvinceCounts) if (count !== 5) errors.push(`${province} için ulusal rota sayısı 5 yerine ${count}.`);
for (const row of nationalRows) {
  const [province, zone, namesText] = row.split("|");
  if (!province || !zone || !namesText) errors.push(`Eksik ulusal rota satırı: ${row}`);
  const rowNames = (namesText || "").split(";").filter(Boolean);
  if (rowNames.length !== 5) errors.push(`${province || "Bilinmeyen il"} satırında ${rowNames.length} rota var.`);
}

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

console.log(`Rota veri denetimi: ${slugs.length} slug, ${sourceUrls.length} kaynak bağlantısı, ${nationalEntries.length} ulusal rota.`);
for (const warning of warnings) console.warn(`UYARI: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`HATA: ${error}`);
  process.exit(1);
}
