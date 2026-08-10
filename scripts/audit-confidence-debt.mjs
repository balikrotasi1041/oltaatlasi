import { meralar } from "../src/data/meralar-tumu.ts";
import { meralar as coreMeralar } from "../src/data/meralar-tumu-core.ts";
import { ulusalGuvenIyilestirmeBatch2Meta20260810 } from "../src/data/meralar-ulusal-guven-iyilestirme-2026-08-10-batch2.js";

const levelDebt = { strong: 0, partial: 1, unverified: 3 };
const dimensionWeight = { identity: 2, legal: 5, access: 4, species: 2, field: 2 };
const dimensions = Object.keys(dimensionWeight);
const confidenceRank = { D: 0, C: 1, B: 2, A: 3 };
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

const baselineBySlug=new Map(coreMeralar.map((route)=>[route.slug,route]));
const activeBySlug=new Map(meralar.map((route)=>[route.slug,route]));
const batch=ulusalGuvenIyilestirmeBatch2Meta20260810;
if(batch.targetCount<10)errors.push(`Güven yükseltme paketi 10 hedef yerine ${batch.targetCount} hedef tanımlıyor.`);
if(batch.targetSlugs.length!==batch.targetCount)errors.push(`Güven yükseltme meta sayısı uyuşmuyor: ${batch.targetSlugs.length}/${batch.targetCount}.`);
const liftRows=[];
for(const slug of batch.targetSlugs){
  const before=baselineBySlug.get(slug);
  const after=activeBySlug.get(slug);
  if(!before){errors.push(`${slug}: güven yükseltme öncesi kayıt bulunamadı.`);continue;}
  if(!after){errors.push(`${slug}: güven yükseltme sonrası aktif kayıt bulunamadı.`);continue;}
  if(confidenceRank[after.confidence]<=confidenceRank[before.confidence])errors.push(`${slug}: güven seviyesi yükselmedi (${before.confidence} → ${after.confidence}).`);
  if(after.confidence==="D")errors.push(`${slug}: araştırma sonrası hâlâ Güven D.`);
  if(after.researchedAt!==batch.reviewedAt)errors.push(`${slug}: researchedAt ${batch.reviewedAt} değil (${after.researchedAt||"boş"}).`);
  if(!after.confidenceProfile||after.confidenceProfile.overall!==after.confidence)errors.push(`${slug}: yapılandırılmış güven profili eksik/uyumsuz.`);
  if((after.sources?.length||0)<3)errors.push(`${slug}: en az 3 kaynak gerekli.`);
  if((after.fishEvidence?.length||0)<1)errors.push(`${slug}: rota özelinde tür kanıtı eksik.`);
  if((after.accessEvidence?.length||0)<1)errors.push(`${slug}: rota özelinde erişim/hukuk bağlamı eksik.`);
  if(after.confidence==="A"&&after.confidenceProfile?.field.level!=="strong")errors.push(`${slug}: saha teyidi olmadan A olamaz.`);
  liftRows.push(`${slug}: ${before.confidence} → ${after.confidence}`);
}
if(liftRows.length)console.log(`Güven yükseltme paketi (${liftRows.length}/${batch.targetCount}): ${liftRows.join(" | ")}`);

const distribution = Object.fromEntries(["A", "B", "C", "D"].map((level) => [level, meralar.filter((route) => route.confidence === level).length]));
const structured = meralar.filter((route) => route.confidenceProfile).length;
console.log(`Güven borcu: ${meralar.length} rota; A/B/C/D=${distribution.A}/${distribution.B}/${distribution.C}/${distribution.D}; yapılandırılmış profil=${structured}.`);
console.log("En yüksek güven borcu (ilk 20):");
for (const row of rows.slice(0, 20)) console.log(`${String(row.score).padStart(2, " ")}  ${row.confidence}  ${row.slug}  [${row.missing}]`);
const dRows = rows.filter((row) => row.confidence === "D");
console.log(`D güvenindeki tüm rotalar (${dRows.length}):`);
for (const row of dRows) console.log(`D-ROUTE ${String(row.score).padStart(2, " ")}  ${row.slug}  [${row.missing}]`);
for (const error of errors) console.error(`HATA: ${error}`);
if (errors.length) process.exit(1);