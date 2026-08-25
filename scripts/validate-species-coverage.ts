import { meralar } from "../src/data/meralar-tumu";
import { baliklar } from "../src/data/content-katalogu";
import { probableSpeciesByRoute, speciesProfileGap, occurrenceEvidenceGap, unsourcedProbableOccurrences } from "../src/data/species-occurrence";
import { speciesRegulations, provinceSeasonRules, nationalAmateurSource, nationalAmateurAmendment2025, canonicalRegulationSpecies } from "../src/data/species-regulations";

const errors:string[]=[];
const warnings:string[]=[];
const normalize=(value:string)=>String(value||"").toLocaleLowerCase("tr-TR").trim();
const catalogNames=new Set(baliklar.map((fish)=>normalize(fish.name)));
const activeSpecies=[...new Set(meralar.flatMap((route)=>route.fish||[]))].sort((a,b)=>a.localeCompare(b,"tr"));
const missingProfiles=speciesProfileGap(meralar,baliklar);
const missingRegulations=activeSpecies.filter((name)=>!canonicalRegulationSpecies(name));
const evidenceDebt=occurrenceEvidenceGap(meralar);
const cPlusEvidenceDebt=evidenceDebt.filter((item)=>item.confidence!=="D");
const highConfidenceMissingProfiles=meralar.filter((route)=>route.confidence!=="D").flatMap((route)=>route.fish.filter((name)=>!catalogNames.has(normalize(name))).map((name)=>`${route.slug}:${name}`));
const probableEntries=Object.entries(probableSpeciesByRoute).flatMap(([routeSlug,items])=>items.map((item)=>({routeSlug,...item})));

for(const item of unsourcedProbableOccurrences())errors.push(`Kaynağı eksik/geçersiz muhtemel tür: ${item.routeSlug} / ${item.species}`);
for(const item of probableEntries){
  if(item.status!=="probable")errors.push(`Muhtemel tür katmanında geçersiz status: ${item.routeSlug} / ${item.name}`);
  if(!item.sourceUrl.startsWith("https://"))errors.push(`Muhtemel tür kaynağı HTTPS değil: ${item.routeSlug} / ${item.name}`);
  if(!meralar.some((route)=>route.slug===item.routeSlug))errors.push(`Muhtemel tür rotası aktif veri kümesinde yok: ${item.routeSlug}`);
}
for(const [name,regulation] of Object.entries(speciesRegulations)){
  if(name!==regulation.species)errors.push(`Mevzuat anahtarı/tür adı uyuşmuyor: ${name} / ${regulation.species}`);
  if(regulation.minLengthCm!==null&&(!Number.isFinite(regulation.minLengthCm)||regulation.minLengthCm<=0))errors.push(`Geçersiz asgari boy: ${name}`);
  if(!regulation.source.url.startsWith("https://"))errors.push(`Geçersiz mevzuat kaynak URL'si: ${name}`);
  if(regulation.validThrough<regulation.checkedAt)errors.push(`Mevzuat geçerlilik tarihi kontrol tarihinden eski: ${name}`);
}
for(const rule of provinceSeasonRules){
  if(!/^\d{2}-\d{2}$/.test(rule.start)||!/^\d{2}-\d{2}$/.test(rule.end))errors.push(`İl dönem kuralı tarih biçimi hatalı: ${rule.province}`);
  if(!rule.source.url.startsWith("https://"))errors.push(`İl dönem kuralı kaynağı geçersiz: ${rule.province}`);
}
if(!nationalAmateurSource.url.includes("20240811-4"))errors.push("6/2 ana Resmî Gazete kaynağı beklenen belge değil.");
if(!nationalAmateurAmendment2025.url.includes("20250416-4"))errors.push("2025/12 değişiklik kaynağı beklenen belge değil.");

if(missingProfiles.length)warnings.push(`Avlaklarda geçen fakat balık profili olmayan ${missingProfiles.length} tür: ${missingProfiles.join(", ")}`);
if(highConfidenceMissingProfiles.length)warnings.push(`C+ avlaklarda profilsiz tür eşleşmesi: ${highConfidenceMissingProfiles.slice(0,40).join(" | ")}${highConfidenceMissingProfiles.length>40?" …":""}`);
if(missingRegulations.length)warnings.push(`Mevzuat veri katmanında henüz doğrulanmamış ${missingRegulations.length} aktif tür: ${missingRegulations.join(", ")}`);
if(cPlusEvidenceDebt.length)warnings.push(`C+ avlaklarda ayrı fishEvidence bekleyen ${cPlusEvidenceDebt.length} tür eşleşmesi: ${cPlusEvidenceDebt.slice(0,40).map((item)=>`${item.routeSlug}:${item.species}`).join(" | ")}${cPlusEvidenceDebt.length>40?" …":""}`);

console.log(`Tür kapsamı: ${activeSpecies.length} aktif avlak türü, ${baliklar.length} balık profili, ${Object.keys(speciesRegulations).length} doğrulanmış mevzuat profili, ${probableEntries.length} kaynaklı muhtemel eşleşme, ${evidenceDebt.length} kanıt borcu.`);
for(const warning of warnings)console.warn(`UYARI: ${warning}`);
if(errors.length){for(const error of errors)console.error(`HATA: ${error}`);process.exit(1);}
