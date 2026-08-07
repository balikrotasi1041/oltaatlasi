import { existsSync } from "node:fs";
import { meralar, retiredRouteSlugs } from "../src/data/meralar-tumu.ts";

const errors = [];
const warnings = [];
let unresolvedCoordinateCount = 0;
const activeSlugs = new Set(meralar.map((route) => route.slug));
for (const slug of retiredRouteSlugs) if (activeSlugs.has(slug)) errors.push(`Yayından kaldırılan slug aktif veri kümesinde: ${slug}`);
if (activeSlugs.size !== meralar.length) errors.push("Aktif rota veri kümesinde yinelenen slug var.");

for (const route of meralar) {
  if (!route.sources?.length || route.sources.length < 2) errors.push(`${route.slug}: en az iki kaynak yok.`);
  for (const source of route.sources || []) {
    try {
      const parsed = new URL(source.url);
      if (parsed.protocol !== "https:") errors.push(`${route.slug}: HTTPS olmayan kaynak ${source.url}`);
    } catch {
      errors.push(`${route.slug}: geçersiz kaynak ${source.url}`);
    }
  }
  if (/pilot veri|şablon metin|lorem ipsum/i.test(`${route.verification} ${route.longIntro?.join(" ")}`)) errors.push(`${route.slug}: pilot/şablon metin canlı içerikte kaldı.`);
  if (!route.transport || route.transport.length < 90) errors.push(`${route.slug}: ulaşım notu yetersiz.`);
  if (!route.accommodationOptions?.length && !/konaklama|otel|pansiyon|ilçe merkez|yerleşim|gecelik kalış/i.test(`${route.transport} ${route.planningNotes?.join(" ")} ${route.amenities?.join(" ")}`)) errors.push(`${route.slug}: konaklama planlama bilgisi eksik.`);
  if (!route.cautions || route.cautions.length < 3) errors.push(`${route.slug}: risk notları yetersiz.`);
  if (route.locationPrecision === "Tam" && route.confidence !== "A") errors.push(`${route.slug}: A dışında kesin koordinat kullanıyor.`);
  const hasCoordinates = [route.lat, route.lng].every((value) => Number.isFinite(Number(value)));
  if (!hasCoordinates) {
    unresolvedCoordinateCount += 1;
    if (route.confidence !== "D") errors.push(`${route.slug}: çözülmemiş koordinat D dışında yayımlanıyor.`);
    if (!/çözül|genel|başlangıç|doğrulan/i.test(`${route.navigationNote} ${route.transport}`)) errors.push(`${route.slug}: çözülmemiş koordinat uyarısı eksik.`);
  }
  if (!route.image?.includes(route.slug) || !route.socialImage?.includes(route.slug)) errors.push(`${route.slug}: image/socialImage slug ile uyuşmuyor.`);
  if (!route.slug.startsWith("ulusal-")) {
    if (!existsSync(`public${route.image}`)) errors.push(`${route.slug}: görsel dosyası eksik ${route.image}`);
    if (!existsSync(`public${route.socialImage}`)) errors.push(`${route.slug}: sosyal görsel dosyası eksik ${route.socialImage}`);
  }
  if (route.slug.startsWith("ulusal-") && (route.confidence === "A" || route.confidence === "B")) {
    warnings.push(`${route.slug}: yüksek ulusal confidence için kanıt işaretleri ayrıca gözden geçirilmeli.`);
  }
}

const confidence = Object.fromEntries(["A", "B", "C", "D"].map((level) => [level, meralar.filter((route) => route.confidence === level).length]));
console.log(`Bakım taraması: ${meralar.length} rota; confidence A/B/C/D = ${confidence.A}/${confidence.B}/${confidence.C}/${confidence.D}; ${unresolvedCoordinateCount} çözülmemiş D pini; ${errors.length} hata, ${warnings.length} uyarı.`);
for (const warning of warnings) console.warn(`UYARI: ${warning}`);
for (const error of errors) console.error(`HATA: ${error}`);
if (errors.length) process.exit(1);
