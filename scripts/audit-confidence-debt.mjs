import { meralar } from "../src/data/meralar-tumu.ts";

const levelDebt = { strong: 0, partial: 1, unverified: 3 };
const dimensionWeight = { identity: 2, legal: 5, access: 4, species: 2, field: 2 };
const dimensions = Object.keys(dimensionWeight);
const errors = [];

const rows = meralar.map((route) => {
  const profile = route.confidenceProfile;
  if (!profile) {
    return {
      slug: route.slug,
      confidence: route.confidence,
      score: 30 + (route.confidence === "D" ? 8 : 0),
      missing: "structured-profile",
    };
  }
  if (profile.overall !== route.confidence) errors.push(`${route.slug}: profil/genel güven uyuşmazlığı.`);
  if (route.confidence === "A" && (profile.field.level !== "strong" || profile.legal.level !== "strong")) errors.push(`${route.slug}: Güven A saha ve hukuk eşiğini karşılamıyor.`);
  if (route.confidence === "B" && profile.legal.level !== "strong") errors.push(`${route.slug}: Güven B hukuk/kullanım eşiğini karşılamıyor.`);
  const score = dimensions.reduce((total, dimension) => total + levelDebt[profile[dimension].level] * dimensionWeight[dimension], 0);
  const missing = dimensions.filter((dimension) => profile[dimension].level === "unverified").join(",") || "—";
  return { slug: route.slug, confidence: route.confidence, score, missing };
}).sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug, "tr"));

const distribution = Object.fromEntries(["A", "B", "C", "D"].map((level) => [level, meralar.filter((route) => route.confidence === level).length]));
const structured = meralar.filter((route) => route.confidenceProfile).length;
console.log(`Güven borcu: ${meralar.length} rota; A/B/C/D=${distribution.A}/${distribution.B}/${distribution.C}/${distribution.D}; yapılandırılmış profil=${structured}.`);
console.log("En yüksek güven borcu (ilk 20):");
for (const row of rows.slice(0, 20)) console.log(`${String(row.score).padStart(2, " ")}  ${row.confidence}  ${row.slug}  [${row.missing}]`);
for (const error of errors) console.error(`HATA: ${error}`);
if (errors.length) process.exit(1);
