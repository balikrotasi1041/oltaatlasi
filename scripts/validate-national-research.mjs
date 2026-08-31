import { ulusalMeralar } from "../src/data/meralar-ulusal.js";
import { ulusalOtomatikArastirma, ulusalOtomatikArastirmaMeta } from "../src/data/meralar-ulusal-otomatik-arastirma.js";
import { ulusalManuelArastirma } from "../src/data/meralar-ulusal-manuel-arastirma.js";
import { academicEvidenceMatchesRoute, meaningfulRouteTokens } from "./national-research-matchers.mjs";

const expectedSlugs=new Set(ulusalMeralar.map((route)=>route.slug));
const automatic=ulusalOtomatikArastirma||{};
const manual=ulusalManuelArastirma||{};
const errors=[];
const warnings=[];

if(meaningfulRouteTokens({name:"Balık Gölü"}).length!==0)errors.push("Genel 'Balık Gölü' adı ayırt edici akademik eşleşme üretmemelidir.");
if(meaningfulRouteTokens({name:"Asartepe Baraj Gölü"}).join(" ")!=="asartepe")errors.push("Asartepe ayırt edici rota token testi başarısız.");

const validUrl=(value)=>{
  try{return new URL(value).protocol==="https:";}catch{return false;}
};
const normalize=(value="")=>String(value)
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i")
  .replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();
const evidenceClass=(level="")=>{
  const value=normalize(level);
  if(/resmi|kamu kurumu|akademik|hakemli|universite|su urunleri|balikcilik|akuakultur|tez|acik arsiv|arastirma enstitusu|yakin cevre biyolojik/.test(value))return "strong";
  if(/vatandas bilimi|gonullu|amator coklu|amator calisma|kulup|dernek|yapilandirilmis gozlem/.test(value))return "community";
  if(/forum|sosyal|tekil|ipucu|amator tekil/.test(value))return "hint";
  return "unknown";
};
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
let communitySupportedRoutes=0;
let candidateOnlyRoutes=0;
const filterFishNames=new Set();
for(const route of ulusalMeralar){
  const data=merged(route.slug);
  const prefix=`${route.province} / ${route.name}`;
  const minimumEvidenceCount=manual[route.slug]?1:3;
  if(!data.researchStatus)errors.push(`${prefix}: researchStatus eksik.`);
  if(!data.researchedAt||!/^\d{4}-\d{2}-\d{2}$/.test(data.researchedAt))errors.push(`${prefix}: researchedAt eksik veya geçersiz.`);
  if(!data.researchSummary||data.researchSummary.length<120)errors.push(`${prefix}: araştırma özeti yetersiz.`);
  if(!Array.isArray(data.fish)||data.fish.length<minimumEvidenceCount)errors.push(`${prefix}: en az ${minimumEvidenceCount} kanıtlı/araştırma adayı tür gerekli.`);
  if(!Array.isArray(data.fishEvidence)||data.fishEvidence.length<minimumEvidenceCount)errors.push(`${prefix}: en az ${minimumEvidenceCount} tür kanıt kaydı gerekli.`);
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

  const evidenceClasses=new Set();
  const evidenceNames=new Set();
  let communityEvidenceCount=0;
  for(const evidence of data.fishEvidence||[]){
    if(!evidence?.name||!evidence?.evidenceLevel||!evidence?.note)errors.push(`${prefix}: eksik tür kanıt alanı.`);
    if(!validUrl(evidence?.sourceUrl))errors.push(`${prefix}: geçersiz tür kanıt URL'si: ${evidence?.sourceUrl||"boş"}`);
    if(!academicEvidenceMatchesRoute(route,evidence))errors.push(`${prefix}: tür kanıtı rota adıyla ayırt edici biçimde eşleşmiyor: ${evidence?.sourceLabel||"etiketsiz"}`);
    const cls=evidenceClass(evidence?.evidenceLevel||"");
    evidenceClasses.add(cls);
    if(cls==="unknown")warnings.push(`${prefix}: tanımsız evidenceLevel sınıfı: ${evidence?.evidenceLevel||"boş"}`);
    if(cls==="community"){
      communityEvidenceCount+=1;
      if(String(evidence?.note||"").length<60)errors.push(`${prefix}: gönüllü/amatör tür kaydı tarih-konum-tür bağlamını açıklayacak kadar ayrıntılı değil.`);
    }
    if(evidence?.name)evidenceNames.add(normalize(evidence.name));
  }
  const unsupportedFish=normalizedFish.filter((fish)=>!evidenceNames.has(fish));
  if(unsupportedFish.length)errors.push(`${prefix}: tür listesinde olup kanıt kaydı bulunmayan balıklar var: ${unsupportedFish.join(", ")}`);

  const hasStrong=evidenceClasses.has("strong");
  const hasCommunitySupport=communityEvidenceCount>=2;
  if(hasStrong)directEvidenceRoutes+=1;
  else if(hasCommunitySupport)communitySupportedRoutes+=1;
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

if(directEvidenceRoutes<1)errors.push("Hiçbir rotada doğrudan resmî/akademik/üniversite tür kanıtı bulunamadı.");
if(filterFishNames.size<3)errors.push(`Harita balık filtresi için yalnızca ${filterFishNames.size} kullanılabilir tür üretildi.`);
if(candidateOnlyRoutes>0)warnings.push(`${candidateOnlyRoutes} rota güçlü veya en az iki bağımsız yapılandırılmış topluluk tür kanıtına ulaşmadı; bunlar Güven D araştırma kuyruğunda tutulmalıdır.`);
if(communitySupportedRoutes>0)warnings.push(`${communitySupportedRoutes} rota birden fazla yapılandırılmış gönüllü/amatör kayıtla tür olasılığı desteği taşıyor; bu destek hukuk veya kamusal erişim kanıtı değildir.`);

console.log(`Ulusal araştırma denetimi: 405 rota, ${directEvidenceRoutes} güçlü resmî/akademik/üniversite tür kanıtlı, ${communitySupportedRoutes} çoklu gönüllü/amatör destekli, ${candidateOnlyRoutes} aday tür düzeyinde, ${filterFishNames.size} filtrelenebilir balık türü.`);
for(const warning of [...new Set(warnings)])console.warn(`UYARI: ${warning}`);
if(errors.length){
  for(const error of errors.slice(0,250))console.error(`HATA: ${error}`);
  if(errors.length>250)console.error(`HATA: ${errors.length-250} ek hata daha var.`);
  process.exit(1);
}
