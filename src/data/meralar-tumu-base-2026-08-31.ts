export * from "./meralar-tumu-core";
import type { Mera } from "./meralar";
import type { EnrichedMera, ConfidenceProfile, ResearchSource } from "./meralar-tumu-core";
import { meralar as coreMeralar } from "./meralar-tumu-core";
import { istanbulKocaeliIyilestirmeleri20260810Final, istanbulKocaeliYeni20260810Final } from "./meralar-istanbul-kocaeli-2026-08-10-final";
import { ulusalGuvenIyilestirmeleri20260810Batch2 } from "./meralar-ulusal-guven-iyilestirme-2026-08-10-batch2";
import { bilecikYeni20260811 } from "./meralar-bilecik-2026-08-11";
import { istanbulKocaeliIyilestirmeleri20260811 } from "./meralar-istanbul-kocaeli-2026-08-11-evening";
import { istanbulKocaeliIyilestirmeleri20260812 } from "./meralar-istanbul-kocaeli-2026-08-12";
import { kirklareliYeni20260813 } from "./meralar-kirklareli-2026-08-13";
import { istanbulKocaeliIyilestirmeleri20260813Aksam } from "./meralar-istanbul-kocaeli-2026-08-13-evening";
import { yeniMeralar20260815 } from "./meralar-duzce-bolu-karabuk-2026-08-15";
import { yeniMeralar20260816 } from "./meralar-corum-gumushane-ordu-2026-08-16";
import { yeniMeralarAnkara500Km20260817 } from "./meralar-ankara-500km-2026-08-17";
import { applyProvinceConfidenceAudit } from "./meralar-province-confidence-audit-2026-08-15";
import { applyGunlukBakim20260818, gunlukBakimHedefleri20260818 } from "./meralar-gunluk-2026-08-18";
import { yeniMeralar20260818 } from "./meralar-gunluk-yeni-2026-08-18";
import { applyGunlukSonuc20260818 } from "./meralar-gunluk-sonuc-2026-08-18";

const routeMap=new Map<string,EnrichedMera>(coreMeralar.map((route)=>[route.slug,route]));
const uniqueSources=(values:ResearchSource[]=[]):ResearchSource[]=>[...new Map(values.filter((source)=>source?.url&&source?.label).map((source)=>[source.url,source])).values()];
const confidenceRank:Record<Mera["confidence"],number>={D:0,C:1,B:2,A:3};
const officialSource=(source:ResearchSource)=>/\.gov\.tr\b|\.bel\.tr\b|tarimorman\.gov\.tr\b/i.test(source.url);
const normalize=(value:string)=>String(value||"").toLocaleLowerCase("tr-TR").trim();

const applyNationalResearch=(slug:string,research:any)=>{
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`Güven iyileştirme hedefi aktif veri kümesinde bulunamadı: ${slug}`);
  const sources=uniqueSources([...(research.sources||[]),...(previous.sources||[])]);
  const fish:string[]=Array.isArray(research.fish)&&research.fish.length?[...new Set<string>((research.fish as unknown[]).map((value)=>String(value).trim()).filter(Boolean))]:previous.fish;
  const fishEvidence=Array.isArray(research.fishEvidence)?research.fishEvidence:[];
  const hasCoordinates=Number.isFinite(previous.lat)&&Number.isFinite(previous.lng);
  const hasStrongOfficialEvidence=Boolean(research.strongOfficialSource)&&sources.some(officialSource);
  const hasRouteSpecificResearch=/rota özelinde/i.test(research.researchStatus||"")&&Boolean(sources.length>=2||(fishEvidence.length&&(research.accessEvidence?.length||0)>0));
  let candidate:Mera["confidence"]="D";
  if(hasCoordinates&&!research.legalAccessUnclear){
    if(research.fieldVerification&&hasStrongOfficialEvidence)candidate="A";
    else if(research.officialAmateurFishingUseEvidence&&hasStrongOfficialEvidence)candidate="B";
    else if(hasRouteSpecificResearch)candidate="C";
  }
  const confidence=confidenceRank[candidate]>confidenceRank[previous.confidence]?candidate:previous.confidence;
  const evidenceNames=new Set(fishEvidence.map((item:any)=>normalize(item?.name)));
  const allFishSupported=fish.length>0&&fish.every((name)=>evidenceNames.has(normalize(name)));
  const profile:ConfidenceProfile={
    model:"evidence-v1",
    overall:confidence,
    identity:hasStrongOfficialEvidence
      ?{level:"strong",label:"Resmî rota kimliği",note:"Su varlığı ve rota kimliği en az bir resmî, rota özelindeki kaynakla destekleniyor."}
      :{level:"partial",label:"Çok kaynaklı rota kimliği",note:"Rota birden fazla kaynakla eşleşiyor; ek resmî teyit ve mikro kıyı doğrulaması sürdürülmelidir."},
    legal:research.officialAmateurFishingUseEvidence&&hasStrongOfficialEvidence
      ?{level:"strong",label:"Resmî amatör kullanım kanıtı",note:"Resmî kaynak amatör veya sportif olta kullanımını rota düzeyinde kaydediyor; güncel dönem, ticari faaliyet ve saha kısıtları ayrıca uygulanır."}
      :{level:"partial",label:"Rota özelinde hukuk ve kısıt araştırması",note:"Güncel tebliğ ile rota/il özelindeki resmî kararlar araştırıldı; belirli kıyı cebinin sürekli açık olduğu varsayılmaz."},
    access:(research.accessEvidence?.length||0)>0
      ?{level:"partial",label:"Kaynaklı erişim bağlamı",note:"Yerleşim, rekreasyon veya resmî alan bağlamı belgeli; son park, kıyı girişi ve mülkiyet sınırı saha teyitli değildir."}
      :{level:"unverified",label:"Erişim doğrulanmadı",note:"Genel konum, kıyıya giriş veya araç rotası garantisi değildir."},
    species:allFishSupported
      ?{level:"strong",label:"Rota özelinde tür kanıtı",note:"Yayımlanan türlerin tamamı bu su varlığına ait resmî veya bilimsel kayıtlarla eşleşiyor; kıyıdan av garantisi vermez."}
      :fishEvidence.length
        ?{level:"partial",label:"Kısmi tür kanıtı",note:"Bazı türler rota düzeyinde destekleniyor; liste güncel av başarısı anlamına gelmez."}
        :{level:"unverified",label:"Tür listesi teyit bekliyor",note:"Rota özelinde yeterli tür kanıtı henüz yok."},
    field:research.fieldVerification
      ?{level:"strong",label:"Saha doğrulaması var",note:"Kıyı koşulları yerinde kontrol edildi; tarih sonrası değişiklikler yine mümkündür."}
      :{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir."},
    reviewedAt:research.researchedAt||previous.updatedAt,
  };
  const evidenceSummary=(research.accessEvidence||[]).slice(0,2).map((item:any)=>`${item.label}: ${item.value} ${item.note}`).join(" ");
  routeMap.set(slug,{
    ...previous,
    fish,
    methods:research.methods?.length?research.methods:previous.methods,
    baits:research.baits?.length?research.baits:previous.baits,
    camping:research.camping||previous.camping,
    vehicleAccess:research.vehicleAccess||previous.vehicleAccess,
    amenities:research.amenities?.length?research.amenities:previous.amenities,
    cautions:research.cautions?.length?research.cautions:previous.cautions,
    transport:research.transport||previous.transport,
    crowdNote:research.crowdNote||previous.crowdNote,
    planningNotes:research.planningNotes?.length?research.planningNotes:previous.planningNotes,
    seasonalNotes:research.seasonalNotes?.length?research.seasonalNotes:previous.seasonalNotes,
    researchStatus:research.researchStatus,
    researchSummary:research.researchSummary,
    researchedAt:research.researchedAt,
    confidence,
    summary:confidence==="B"
      ?`${previous.name}, rota özelindeki güçlü resmî amatör kullanım kanıtı ile tür, erişim ve mevzuat kaynakları çaprazlanmış bir planlama dosyasıdır; güncel saha koşulları ayrıca kontrol edilmelidir.`
      :`${previous.name}, rota özelindeki resmî/bilimsel tür, hukuk veya erişim kanıtlarıyla derinleştirilmiş bir planlama dosyasıdır; belirli kıyı cebinin güncel amatör av ve kamusal erişim durumu ayrıca doğrulanmalıdır.`,
    longIntro:confidence==="B"
      ?[`${previous.name}, resmî kaynakların amatör veya sportif olta kullanımını rota düzeyinde desteklediği; tür, ulaşım ve kısıtların ayrı kanıtlarla çaprazlandığı Güven B düzeyinde masa başı doğrulanmış bir dosyadır.`,`Güven B her kıyının sürekli açık olduğu anlamına gelmez. 6/2 Tebliğ, il müdürlüğü kararları, ticari istihsal alanları, DSİ/işletme güvenliği, özel mülkiyet ve saha tabelaları hareket günü birlikte kontrol edilmelidir.`]
      :[`${previous.name}, su varlığı ile tür, erişim veya hukuki durumun rota özelindeki resmî ve gerektiğinde akademik kaynaklarla desteklenmesi nedeniyle Güven C düzeyinde yayımlanır.`,`Bu seviye belirli bir kıyı cebine giriş veya sürekli amatör av izni anlamına gelmez; son yaklaşım, yerel yasak, ticari faaliyet, su kotu ve saha güvenliği ayrıca doğrulanmalıdır.`],
    verification:`${research.researchStatus}; Güven ${confidence}. Tür kanıtı, amatör kullanım hukuku ve kıyı erişimi birbirinden ayrı değerlendirilmiştir; saha teyidi bulunmamaktadır.`,
    updatedAt:research.researchedAt||previous.updatedAt,
    fishEvidence,
    accommodationOptions:research.accommodationOptions||[],
    accessEvidence:research.accessEvidence||[],
    navigationVerified:Boolean(research.navigationVerified),
    shoreProfile:`${previous.name} için mevcut su/kıyı profili rota-özel araştırmayla güncellendi. ${evidenceSummary||research.researchSummary} Bu açıklama belirli bir kıyı cebinin kamusal, sürekli açık veya amatör avcılığa sınırsız uygun olduğu anlamına gelmez.`,
    sources,
    confidenceProfile:profile,
  });
};

for(const [slug,research] of Object.entries(ulusalGuvenIyilestirmeleri20260810Batch2))applyNationalResearch(slug,research);

const applyOverride=(route:Mera)=>{
  const previous=routeMap.get(route.slug);
  const enriched=route as EnrichedMera;
  routeMap.set(route.slug,{
    ...(previous||{}),
    ...route,
    fishEvidence:enriched.fishEvidence||previous?.fishEvidence||[],
    accommodationOptions:enriched.accommodationOptions||previous?.accommodationOptions||[],
    accessEvidence:enriched.accessEvidence||previous?.accessEvidence||[],
    navigationVerified:enriched.navigationVerified??previous?.navigationVerified??false,
    confidenceProfile:enriched.confidenceProfile||previous?.confidenceProfile,
  } as EnrichedMera);
};
for(const route of istanbulKocaeliIyilestirmeleri20260810Final)applyOverride(route);
for(const route of istanbulKocaeliYeni20260810Final)applyOverride(route);
for(const route of bilecikYeni20260811){
  if(routeMap.has(route.slug))throw new Error(`Yeni Bilecik rotası mevcut slug ile çakışıyor: ${route.slug}`);
  routeMap.set(route.slug,route);
}
const blockedKirklareliSlugs=new Set(["kirklareli-armagan-baraji","kirklareli-sofuhalil-goleti"]);
for(const route of kirklareliYeni20260813){
  if(blockedKirklareliSlugs.has(route.slug))continue;
  if(routeMap.has(route.slug))throw new Error(`Yeni Kırklareli rotası mevcut slug ile çakışıyor: ${route.slug}`);
  applyOverride(route);
}
const blocked20260815Slugs=new Set(["duzce-hasanlar-baraj-golu"]);
for(const route of yeniMeralar20260815){
  if(blocked20260815Slugs.has(route.slug))continue;
  if(routeMap.has(route.slug))throw new Error(`15 Ağustos yeni rotası mevcut slug ile çakışıyor: ${route.slug}`);
  routeMap.set(route.slug,route as EnrichedMera);
}
for(const route of yeniMeralar20260816){
  if(routeMap.has(route.slug))throw new Error(`16 Ağustos yeni rotası mevcut slug ile çakışıyor: ${route.slug}`);
  routeMap.set(route.slug,route as EnrichedMera);
}

const applyPatch=(slug:string,patch:Partial<Mera>)=>{
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`İyileştirme hedefi aktif veri kümesinde bulunamadı: ${slug}`);
  routeMap.set(slug,{...previous,...patch} as EnrichedMera);
};
for(const [slug,patch] of Object.entries(istanbulKocaeliIyilestirmeleri20260811))applyPatch(slug,patch);
for(const [slug,patch] of Object.entries(istanbulKocaeliIyilestirmeleri20260812))applyPatch(slug,patch);
for(const [slug,patch] of Object.entries(istanbulKocaeliIyilestirmeleri20260813Aksam))applyPatch(slug,patch);
export const provinceConfidenceAuditStats=applyProvinceConfidenceAudit(routeMap);
for(const route of yeniMeralarAnkara500Km20260817){
  if(routeMap.has(route.slug))throw new Error(`Ankara 500 km genişlemesi mevcut slug ile çakışıyor: ${route.slug}`);
  routeMap.set(route.slug,route);
}

export const gunlukBakimStats20260818=applyGunlukBakim20260818(routeMap);
if(gunlukBakimStats20260818.reviewed!==17||gunlukBakimHedefleri20260818.length!==17)throw new Error(`18 Ağustos bakım kotası 17 değil: ${gunlukBakimStats20260818.reviewed}/${gunlukBakimHedefleri20260818.length}`);
applyGunlukSonuc20260818(routeMap);
for(const route of yeniMeralar20260818){
  if(routeMap.has(route.slug))throw new Error(`18 Ağustos yeni rotası mevcut slug ile çakışıyor: ${route.slug}`);
  routeMap.set(route.slug,route);
}

const publishedToday11=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-11");
if(publishedToday11.length>10)throw new Error(`11 Ağustos günlük yeni kayıt sınırı aşıldı: ${publishedToday11.length}`);
const publishedToday12=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-12");
if(publishedToday12.length>10)throw new Error(`12 Ağustos günlük yeni kayıt sınırı aşıldı: ${publishedToday12.length}`);
const publishedToday13=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-13");
if(publishedToday13.length>10)throw new Error(`13 Ağustos günlük yeni kayıt sınırı aşıldı: ${publishedToday13.length}`);
const publishedToday15=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-15");
if(publishedToday15.length>10)throw new Error(`15 Ağustos günlük yeni kayıt sınırı aşıldı: ${publishedToday15.length}`);
const publishedToday16=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-16");
if(publishedToday16.length>10)throw new Error(`16 Ağustos günlük yeni kayıt sınırı aşıldı: ${publishedToday16.length}`);
const publishedToday18=[...routeMap.values()].filter((route)=>route.publishedAt==="2026-08-18");
if(publishedToday18.length!==3)throw new Error(`18 Ağustos günlük yeni kayıt hedefi 3 olmalı: ${publishedToday18.length}`);

export const meralar:EnrichedMera[]=[...routeMap.values()];
const repeatedActiveSlugs=[...new Set(meralar.map((m)=>m.slug).filter((slug,index,all)=>all.indexOf(slug)!==index))];
if(repeatedActiveSlugs.length)throw new Error(`Aktif rota veri kümesinde yinelenen slug var: ${repeatedActiveSlugs.join(", ")}`);

const routesWithoutFish=meralar.filter((m)=>!Array.isArray(m.fish)||m.fish.length===0);
const indexableRoutesWithoutFish=routesWithoutFish.filter((m)=>m.confidence!=="D");
if(indexableRoutesWithoutFish.length)throw new Error(`Balık türü bilgisi olmayan ${indexableRoutesWithoutFish.length} indekslenebilir avlak sayfası var: ${indexableRoutesWithoutFish.slice(0,20).map((m)=>m.slug).join(", ")}`);
const invalidFish=meralar.filter((m)=>m.fish.some((f)=>typeof f!=="string"||!f.trim()));
if(invalidFish.length)throw new Error(`Geçersiz balık türü alanı bulunan avlaklar: ${invalidFish.map((m)=>m.slug).join(", ")}`);

const dashboardWeakSources=meralar.filter((m)=>!m.sources||m.sources.length<2);
const dashboardWeakTransport=meralar.filter((m)=>!m.transport||m.transport.length<90||/güncel harita uygulaması|genel erişim bölgesine gider/i.test(m.transport));
const dashboardWeakAccommodation=meralar.filter((m)=>!m.accommodationOptions?.length&&!/konaklama|otel|pansiyon|ilçe merkez|yerleşim|gecelik kalış/i.test(`${m.transport} ${m.planningNotes.join(" ")} ${m.amenities.join(" ")}`));
const dashboardWeakLocality=meralar.filter((m)=>!m.shoreProfile||m.shoreProfile.length<100||/şehir içi ve düzenlenmiş bölümler|yerel engellerin bir arada/i.test(m.shoreProfile));
const dashboardWeakResearch=meralar.filter((m)=>/pilot veri/i.test(m.verification));
export const contentQualityAudit={sources:dashboardWeakSources,transport:dashboardWeakTransport,accommodation:dashboardWeakAccommodation,locality:dashboardWeakLocality,research:dashboardWeakResearch};
const dashboardIssueSets=Object.values(contentQualityAudit);
const dashboardIssueTotal=dashboardIssueSets.reduce((sum,items)=>sum+items.length,0);
export const contentQualityStats={score:Math.max(0,Math.round(100-(dashboardIssueTotal/Math.max(1,meralar.length*dashboardIssueSets.length))*100)),issues:{sources:dashboardWeakSources.length,transport:dashboardWeakTransport.length,accommodation:dashboardWeakAccommodation.length,locality:dashboardWeakLocality.length,research:dashboardWeakResearch.length}};
if(dashboardIssueTotal){const detail=[["kaynak",dashboardWeakSources],["ulaşım",dashboardWeakTransport],["konaklama",dashboardWeakAccommodation],["kıyı",dashboardWeakLocality],["pilot",dashboardWeakResearch]].filter(([,items])=>(items as EnrichedMera[]).length).map(([label,items])=>`${label}: ${(items as EnrichedMera[]).slice(0,24).map((m)=>m.slug).join(", ")}`).join(" | ");throw new Error(`Dashboard içerik kalite kapısı ${contentQualityStats.score}/100. ${detail}`);}

export const provinces=[...new Set(meralar.map((m)=>m.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince=Object.fromEntries(provinces.map((p)=>[p,[...new Set(meralar.filter((m)=>m.province===p).map((m)=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions=[...new Set(meralar.flatMap((m)=>m.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const fishCoverageStats={routeCount:meralar.length,routesWithFish:meralar.length-routesWithoutFish.length,fishTypeCount:fishOptions.length};
export const zonesByProvince=Object.fromEntries(provinces.map((p)=>[p,[...new Set(meralar.filter((m)=>m.province===p).map((m)=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts=Object.fromEntries(provinces.flatMap((p)=>(districtsByProvince[p]||[]).map((d:string)=>[`${p}|${d}`,meralar.filter((m)=>m.province===p&&m.district===d).length])));
export const districtIndexableRouteCounts=Object.fromEntries(provinces.flatMap((p)=>(districtsByProvince[p]||[]).map((d:string)=>[`${p}|${d}`,meralar.filter((m)=>m.province===p&&m.district===d&&m.confidence!=="D").length])));
