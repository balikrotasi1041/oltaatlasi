import { readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const files = ["src/data/meralar.ts", "src/data/meralar-gunluk.ts", "src/data/meralar-ulusal.js"];
const sources = files.map((filePath) => ({ path: filePath, text: readFileSync(filePath, "utf8") }));
const combined = sources.map(({ text }) => text).join("\n");
const nationalText = sources.find(({ path: filePath }) => filePath.endsWith("meralar-ulusal.js"))?.text || "";
const coordinateModule=await import(`${pathToFileURL(path.resolve("src/data/meralar-ulusal-koordinatlar.js")).href}?t=${Date.now()}`);
const coordinateIndex=coordinateModule.ulusalKoordinatlar||{};
const coordinateMeta=coordinateModule.ulusalKoordinatMeta||{};

const collect = (pattern) => [...combined.matchAll(pattern)].map((match) => match[1]);
const duplicates = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
const slugifyTr = (value) => value
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç", "c").replaceAll("ğ", "g").replaceAll("ı", "i")
  .replaceAll("ö", "o").replaceAll("ş", "s").replaceAll("ü", "u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const nationalMatch = nationalText.match(/const\s+rawRoutes\s*=\s*String\.raw`([\s\S]*?)`;/);
const nationalRows = nationalMatch ? nationalMatch[1].trim().split(/\r?\n/).filter(Boolean) : [];
const nationalEntries = nationalRows.flatMap((line) => {
  const [province, zone, namesText] = line.split("|");
  return (namesText || "").split(";").filter(Boolean).map((name) => ({
    province, zone, name, slug: `ulusal-${slugifyTr(province || "")}-${slugifyTr(name)}`,
  }));
});
const nationalSlugSet=new Set(nationalEntries.map(({slug})=>slug));
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
for (const slug of slugs) if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`Geçersiz slug biçimi: ${slug}`);
for (const url of sourceUrls) {
  try { if (new URL(url).protocol !== "https:") warnings.push(`HTTPS olmayan kaynak: ${url}`); }
  catch { errors.push(`Geçersiz kaynak URL'si: ${url}`); }
}

const coordinateEntries=Object.entries(coordinateIndex);
for(const[slug,coordinate]of coordinateEntries){
  if(!nationalSlugSet.has(slug))errors.push(`Koordinat kaydı ulusal rota listesinde yok: ${slug}`);
  const lat=Number(coordinate?.lat),lng=Number(coordinate?.lng);
  if(!Number.isFinite(lat)||!Number.isFinite(lng))errors.push(`Geçersiz koordinat: ${slug}`);
  if(lat<34.5||lat>43.5||lng<24.5||lng>46.5)errors.push(`Türkiye sınır kutusu dışında koordinat: ${slug} (${lat}, ${lng})`);
  if(!String(coordinate?.sourceUrl||"").startsWith("https://www.openstreetmap.org/"))errors.push(`OpenStreetMap kaynak bağlantısı eksik: ${slug}`);
  if(Number(coordinate?.matchScore)<11)errors.push(`Düşük eşleşme puanlı koordinat: ${slug}`);
}
if(Number(coordinateMeta.resolvedCount||0)!==coordinateEntries.length)errors.push("Koordinat meta resolvedCount değeri kayıt sayısıyla uyuşmuyor.");
if(Number(coordinateMeta.unresolvedCount||0)!==405-coordinateEntries.length)errors.push("Koordinat meta unresolvedCount değeri kayıt sayısıyla uyuşmuyor.");
if(coordinateEntries.length===0)warnings.push("Ulusal rota koordinat önbelleği henüz boş; geocode:national çalıştırılmalı.");

const exactLocationCount = (combined.match(/locationPrecision\s*:\s*"Tam"|"locationPrecision"\s*:\s*"Tam"/g) || []).length;
if (exactLocationCount > 0) warnings.push(`${exactLocationCount} kayıtta kesin konum kullanılıyor; kamusal erişim ve hassas alan riski ayrıca kontrol edilmeli.`);
const unsafePhrases = ["av garantisi verir", "kesin balık çıkar", "yasak yoktur"];
for (const phrase of unsafePhrases) if (combined.toLocaleLowerCase("tr-TR").includes(phrase)) errors.push(`Kaçınılması gereken kesin hüküm bulundu: ${phrase}`);

console.log(`Rota veri denetimi: ${slugs.length} slug, ${sourceUrls.length} kaynak, ${nationalEntries.length} ulusal rota, ${coordinateEntries.length} ulusal pin.`);
for (const warning of warnings) console.warn(`UYARI: ${warning}`);
if (errors.length) { for (const error of errors) console.error(`HATA: ${error}`); process.exit(1); }
