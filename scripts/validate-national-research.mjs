import { ulusalMeralar } from "../src/data/meralar-ulusal.js";
import { ulusalOtomatikArastirma, ulusalOtomatikArastirmaMeta } from "../src/data/meralar-ulusal-otomatik-arastirma.js";
import { ulusalManuelArastirma } from "../src/data/meralar-ulusal-manuel-arastirma.js";

const expectedSlugs=new Set(ulusalMeralar.map((route)=>route.slug));
const automatic=ulusalOtomatikArastirma||{};
const manual=ulusalManuelArastirma||{};
const errors=[];
const warnings=[];

const validUrl=(value)=>{
  try{return new URL(value).protocol==="https:";}catch{return false;}
};
const normalize=(value="")=>String(value)
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i")
  .replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();
const merged=(slug)=>{
  const generated=automatic[slug]||{};
  const curated=manual[slug]||{};
  return{
    ...generated,
    ...curated,
    fish:curated.fish?.length?curated.fish:generated.fish,
    fishEvidence:curated.fishEvidence?.length?curated.fishEvidence:generated.fishEvidence,
    methods:curated.methods?.length?curated.methods:generated.methods,
    baits:curated.baits?.length?curated.baits:generated.baits,
    amenities:curated.amenities?.length?curated.amenities:generated.amenities,
    accessEvidence:curated.accessEvidence?.length?curated.accessEvidence:generated.accessEvidence,
    accommodationOptions:curated.accommodationOptions?.length?curated.accommodationOptions:generated.accommodationOptions,
    sources:[...(curated.sources||[]),...(generated.sources||[])],
  };
};

if(ulusalMeralar.length!==405)errors.push(`Ulusal rota sayısı 405 yerine ${ulusalMeralar.length}.`);
if(Number(ulusalOtomatikArastirmaMeta?.routeCount)!==405)errors.push(`Otomatik araştırma meta sayısı 405 yerine ${ulusalOtomatikArastirmaMeta?.routeCount??0}.`);
if(Object.keys(automatic).length!==405)errors.push(`Otomatik araştırma nesnesinde 405 yerine ${Object.keys(automatic).length} kayıt var.`);

for(const slug of Object.keys(automatic))if(!expectedSlugs.has(slug))errors.push(`Araştırma önbelleğinde bilinmeyen rota: ${slug}`);
for(const slug of Object.keys(manual))if(!expectedSlugs.has(slug))errors.push(`Manuel araştırmada bilinmeyen rota: ${slug}`);

let directEvidenceRoutes=0;
let candidateOnlyRoutes=0;
const filterFishNames=new Set();
for(const route of ulusalMeralar){
  const data=merged(route.slug);
  const prefix=`${route.province} / ${route.name}`;
  if(!data.researchStatus)errors.push(`${prefix}: researchStatus eksik.`);
  if(!data.researchedAt||!/^\d{4}-\d{2}-\d{2}$/.test(data.researchedAt))errors.push(`${prefix}: researchedAt eksik veya geçersiz.`);
  if(!data.researchSummary||data.researchSummary.length<120)errors.push(`${prefix}: araştırma özeti yetersiz.`);
  if(!Array.isArray(data.fish)||data.fish.length<3)errors.push(`${prefix}: en az 3 muhtemel/kanıtlı tür gerekli.`);
  if(!Array.isArray(data.fishEvidence)||data.fishEvidence.length<3)errors.push(`${prefix}: en az 3 tür kanıt kaydı gerekli.`);
  if(!Array.isArray(data.methods)||data.methods.length<1)errors.push(`${prefix}: yöntem bilgisi eksik.`);
  if(!Array.isArray(data.baits)||data.baits.length<1)errors.push(`${prefix}: yem/sahte bilgisi eksik.`);
  if(!Array.isArray(data.accessEvidence)||data.accessEvidence.length<1)errors.push(`${prefix}: ulaşım/erişim kanıtı eksik.`);
  if(!Array.isArray(data.accommodationOptions)||data.accommodationOptions.length<1)errors.push(`${prefix}: konaklama araştırması eksik.`);
  if(!Array.isArray(data.amenities)||data.amenities.length<1)errors.push(`${prefix}: yakın imkân bilgisi eksik.`);
  if(!Array.isArray(data.sources)||data.sources.length<3)errors.push(`${prefix}: en az 3 kaynak gerekli.`);

  const normalizedFish=(data.fish||[]).map((fish)=>normalize(fish));
  const validFishNames=(data.fish||[]).filter((fish)=>typeof fish==="string"&&normalize(fish).length>1);
  if(validFishNames.length!==(data.fish||[]).length)errors.push(`${prefix}: boş veya geçersiz balık türü adı bulundu.`);
  if(new Set(normalizedFish).size!==normalizedFish.length)errors.push(`${prefix}: yinelenen balık türü adı bulundu.`);
  for(const fish of validFishNames){
    if(/bilinmiyor|doğrulanmayı bekliyor|balık türü/i.test(fish))errors.push(`${prefix}: filtrede kullanılamayacak genel tür ifadesi bulundu: ${fish}`);
    filterFishNames.add(fish.trim());
  }

  const evidenceLevels=new Set();
  const evidenceNames=new Set();
  for(const evidence of data.fishEvidence||[]){
    if(!evidence?.name||!evidence?.evidenceLevel||!evidence?.note)errors.push(`${prefix}: eksik tür kanıt alanı.`);
    if(!validUrl(evidence?.sourceUrl))errors.push(`${prefix}: geçersiz tür kanıt URL'si: ${evidence?.sourceUrl||"boş"}`);
    evidenceLevels.add(evidence?.evidenceLevel||"");
    if(evidence?.name)evidenceNames.add(normalize(evidence.name));
  }
  const unsupportedFish=normalizedFish.filter((fish)=>!evidenceNames.has(fish));
  if(unsupportedFish.length)errors.push(`${prefix}: tür listesinde olup kanıt kaydı bulunmayan balıklar var: ${unsupportedFish.join(", ")}`);

  const hasDirect=[...evidenceLevels].some((level)=>
    /akademik|resmî|resmi|yakın çevre biyolojik|kamu kurumu/i.test(level)
  );
  if(hasDirect)directEvidenceRoutes+=1;
  else candidateOnlyRoutes+=1;

  for(const evidence of data.accessEvidence||[]){
    if(!evidence?.label||!evidence?.value||!evidence?.note)errors.push(`${prefix}: eksik erişim kanıt alanı.`);
    if(!validUrl(evidence?.sourceUrl))errors.push(`${prefix}: geçersiz erişim URL'si: ${evidence?.sourceUrl||"boş"}`);
  }
  for(const option of data.accommodationOptions||[]){
    if(!option?.name||!option?.type||!option?.note)errors.push(`${prefix}: eksik konaklama alanı.`);
    if(!validUrl(option?.sourceUrl))errors.push(`${prefix}: geçersiz konaklama URL'si: ${option?.sourceUrl||"boş"}`);
  }
  const sourceUrls=new Set();
  for(const source of data.sources||[]){
    if(!source?.label||!source?.note)errors.push(`${prefix}: eksik kaynak alanı.`);
    if(!validUrl(source?.url))errors.push(`${prefix}: geçersiz kaynak URL'si: ${source?.url||"boş"}`);
    if(source?.url)sourceUrls.add(source.url);
  }
  if(sourceUrls.size<3)errors.push(`${prefix}: en az 3 benzersiz kaynak URL'si gerekli.`);

  const text=JSON.stringify(data).toLocaleLowerCase("tr-TR");
  for(const unsafe of ["kesin balık çıkar","av garantisi verir","yasak yoktur","izin gerektirmez"]){
    if(text.includes(unsafe))errors.push(`${prefix}: kaçınılması gereken kesin ifade bulundu: ${unsafe}`);
  }
}

if(directEvidenceRoutes<1)errors.push("Hiçbir rotada doğrudan veya yakın çevre tür kanıtı bulunamadı.");
if(filterFishNames.size<3)errors.push(`Harita balık filtresi için yalnızca ${filterFishNames.size} kullanılabilir tür üretildi.`);
if(candidateOnlyRoutes>warnings.length)warnings.push(`${candidateOnlyRoutes} rota yalnızca bölgesel araştırma adayı türlerle yayımlanacak; bunlar sayfada açıkça bu düzeyde gösterilmelidir.`);

console.log(`Ulusal araştırma denetimi: 405 rota, ${directEvidenceRoutes} doğrudan/yakın tür kanıtlı, ${candidateOnlyRoutes} aday tür düzeyinde, ${filterFishNames.size} filtrelenebilir balık türü.`);
for(const warning of warnings)console.warn(`UYARI: ${warning}`);
if(errors.length){
  for(const error of errors.slice(0,250))console.error(`HATA: ${error}`);
  if(errors.length>250)console.error(`HATA: ${errors.length-250} ek hata daha var.`);
  process.exit(1);
}
