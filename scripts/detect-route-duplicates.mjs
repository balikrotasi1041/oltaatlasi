import { readFileSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";

const allowlistPath = new URL("./duplicate-radar-allowlist.json", import.meta.url);
const allowlistDocument = JSON.parse(readFileSync(allowlistPath, "utf8"));
if (!Array.isArray(allowlistDocument.pairs)) throw new Error("Duplicate radar allowlist dosyasında 'pairs' dizisi bulunmalı.");

const genericTokens = new Set([
  "alani", "amator", "av", "balik", "balikcilik", "baraj", "bolge", "cebi", "deniz", "genel",
  "gol", "golu", "hatti", "iskele", "kamusal", "kiyi", "kiyisi", "merkez", "park", "resmi",
  "rota", "sahil", "sahili", "sahilinde", "suyu", "tutma", "yaklasim", "yolu",
  "acik", "adis", "alan", "baslangic", "bitki", "cevre", "dogrulama", "egim", "eslesme",
  "gecis", "genel", "gorunum", "gunduz", "harita", "ilk", "kanit", "kaynak", "konum",
  "kontrol", "koridor", "kotu", "ortusu", "planlama", "profil", "su", "uydu", "varlik",
  "ziyaret", "zemin",
]);
const normalize = (value) => String(value || "")
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç", "c").replaceAll("ğ", "g").replaceAll("ı", "i")
  .replaceAll("ö", "o").replaceAll("ş", "s").replaceAll("ü", "u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, " ").trim();
const tokens = (value) => new Set(normalize(value).split(/\s+/).filter((token) => token.length > 2 && !genericTokens.has(token)));
const intersectionSize = (left, right) => [...left].filter((token) => right.has(token)).length;
const containment = (left, right) => {
  const smallest = Math.min(left.size, right.size);
  return smallest ? intersectionSize(left, right) / smallest : 0;
};
const jaccard = (left, right) => {
  const union = new Set([...left, ...right]).size;
  return union ? intersectionSize(left, right) / union : 0;
};
const radians = (value) => value * Math.PI / 180;
const distanceKm = (left, right) => {
  const earthRadiusKm = 6371;
  const latitudeDelta = radians(Number(right.lat) - Number(left.lat));
  const longitudeDelta = radians(Number(right.lng) - Number(left.lng));
  const value = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(radians(Number(left.lat))) * Math.cos(radians(Number(right.lat))) * Math.sin(longitudeDelta / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
};
const pairKey = (left, right) => [left, right].sort().join("::");

const allowlist = new Map();
for (const entry of allowlistDocument.pairs) {
  if (!Array.isArray(entry?.slugs) || entry.slugs.length !== 2 || !entry.slugs.every(Boolean) || !String(entry.reason || "").trim()) {
    throw new Error("Her duplicate radar allowlist kaydı iki slug ve açıklayıcı bir reason içermeli.");
  }
  allowlist.set(pairKey(entry.slugs[0], entry.slugs[1]), String(entry.reason).trim());
}

export const duplicateScore = (left, right) => {
  if (left.province !== right.province || left.district !== right.district || left.waterType !== right.waterType) return null;
  if (![left.lat, left.lng, right.lat, right.lng].every((value) => Number.isFinite(Number(value)))) return null;
  const distance = distanceKm(left, right);
  if (distance > 2.5) return null;
  const leftName = tokens(left.name);
  const rightName = tokens(right.name);
  const nameSimilarity = containment(leftName, rightName);
  const leftArea = tokens(`${left.name} ${left.zone} ${left.summary} ${left.shoreProfile}`);
  const rightArea = tokens(`${right.name} ${right.zone} ${right.summary} ${right.shoreProfile}`);
  const areaSimilarity = jaccard(leftArea, rightArea);
  const leftIdentityUrl=left.sources?.[0]?.url||"";
  const rightIdentityUrl=right.sources?.[0]?.url||"";
  const independentlyMappedExpansion=left.slug.startsWith("ankara-500km-")&&right.slug.startsWith("ankara-500km-")
    &&leftIdentityUrl&&rightIdentityUrl&&leftIdentityUrl!==rightIdentityUrl;
  const suspicious = (nameSimilarity >= 0.8 && Math.min(leftName.size, rightName.size) > 0)
    || (distance <= 0.75 && areaSimilarity >= 0.64 && !(independentlyMappedExpansion&&nameSimilarity<0.8));
  return { suspicious, distance, nameSimilarity, areaSimilarity };
};

const syntheticOld = {
  slug: "cubuklu-beykoz-sahili", name: "Çubuklu Beykoz Sahili", province: "İstanbul", district: "Beykoz",
  waterType: "Deniz", zone: "Çubuklu", summary: "Çubuklu kıyı hattı", shoreProfile: "Çubuklu sahil erişimi", lat: 41.109, lng: 29.083,
};
const syntheticCurrent = { ...syntheticOld, slug: "cubuklu-sahili", name: "Çubuklu Sahili", lat: 41.108, lng: 29.084 };
const syntheticDistinct = { ...syntheticOld, slug: "kanlica-sahili", name: "Kanlıca Sahili", zone: "Kanlıca", summary: "Kanlıca kıyı hattı", shoreProfile: "Kanlıca sahil erişimi", lat: 41.100, lng: 29.065 };
if (!duplicateScore(syntheticOld, syntheticCurrent)?.suspicious) throw new Error("Duplicate radar öz testi Çubuklu çakışmasını yakalayamadı.");
if (duplicateScore(syntheticCurrent, syntheticDistinct)?.suspicious) throw new Error("Duplicate radar öz testi ayrı kıyı adlarını yanlış eşleştirdi.");

const exactSlugs = new Map();
for (const route of meralar) exactSlugs.set(route.slug, (exactSlugs.get(route.slug) || 0) + 1);
const exactDuplicates = [...exactSlugs].filter(([, count]) => count > 1).map(([slug]) => slug);
const candidates = [];
for (let leftIndex = 0; leftIndex < meralar.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < meralar.length; rightIndex += 1) {
    const score = duplicateScore(meralar[leftIndex], meralar[rightIndex]);
    if (score?.suspicious) candidates.push({ left: meralar[leftIndex], right: meralar[rightIndex], ...score });
  }
}
const allowed = candidates.filter(({ left, right }) => allowlist.has(pairKey(left.slug, right.slug)));
const blocked = candidates.filter(({ left, right }) => !allowlist.has(pairKey(left.slug, right.slug)));
const activeCandidateKeys = new Set(candidates.map(({ left, right }) => pairKey(left.slug, right.slug)));
const staleAllowlist = [...allowlist].filter(([key]) => !activeCandidateKeys.has(key));

console.log(`Duplicate radar: ${meralar.length} aktif rota, ${candidates.length} şüpheli çift, ${allowed.length} allowlist, ${blocked.length} blokaj.`);
for (const item of allowed) console.log(`ALLOW ${item.left.slug} ↔ ${item.right.slug}: ${allowlist.get(pairKey(item.left.slug, item.right.slug))}`);
for (const [key, reason] of staleAllowlist) console.warn(`UYARI: Artık eşleşmeyen allowlist kaydı: ${key} (${reason})`);
for (const item of blocked) {
  console.error(`HATA: ${item.left.slug} ↔ ${item.right.slug} | ${item.distance.toFixed(2)} km | ad ${(item.nameSimilarity * 100).toFixed(0)}% | alan ${(item.areaSimilarity * 100).toFixed(0)}%`);
}
if (exactDuplicates.length) {
  for (const slug of exactDuplicates) console.error(`HATA: Yinelenen aktif slug: ${slug}`);
}
if (blocked.length || exactDuplicates.length) process.exit(1);

