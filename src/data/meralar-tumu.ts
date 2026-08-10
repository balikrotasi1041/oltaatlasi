import type { Mera } from "./meralar";
import { meralar as temelMeralar } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";
import { beykozMeralar } from "./meralar-beykoz";
import { kocaeliIyilestirmeler, kocaeliIyilestirmeMeta } from "./meralar-kocaeli-iyilestirmeler";
import { istanbulIyilestirmeler } from "./meralar-istanbul-iyilestirmeler";
import { gunlukIyilestirmeler20260801 } from "./meralar-gunluk-iyilestirme-2026-08-01";
import { gunlukIyilestirmeler20260802, gunlukIyilestirmeMeta20260802 } from "./meralar-gunluk-iyilestirme-2026-08-02";
import { kaliteIyilestirmeleri20260803, retiredRouteSlugs20260803 } from "./meralar-kalite-iyilestirme-2026-08-03";
import { gunlukKaliteIyilestirmeleri20260803 } from "./meralar-gunluk-kalite-2026-08-03";
import { gun1Meralar20260804 } from "./meralar-gun1-2026-08-04";
import { gunlukKaliteIyilestirmeleri20260807 } from "./meralar-gunluk-kalite-2026-08-07";
import { gun2Meralar20260807 } from "./meralar-gun2-2026-08-07";
import { gun5Meralar20260810 } from "./meralar-gun5-2026-08-10";
import { istanbulKocaeliIyilestirmeleri20260808, istanbulKocaeliYeni20260808 } from "./meralar-istanbul-kocaeli-2026-08-08";
import { istanbulKocaeliIyilestirmeleriFix20260808 } from "./meralar-istanbul-kocaeli-fix-2026-08-08";
import { istanbulKocaeliIyilestirmeleri20260809, istanbulKocaeliYeni20260809 } from "./meralar-istanbul-kocaeli-2026-08-09";
import { ulusalMeralar } from "./meralar-ulusal";
import { ulusalKoordinatlar, ulusalKoordinatMeta } from "./meralar-ulusal-koordinatlar";
import { ulusalManuelArastirma } from "./meralar-ulusal-manuel-arastirma";
import { ulusalGuvenIyilestirmeleri20260809 } from "./meralar-ulusal-guven-iyilestirme-2026-08-09";
import { ulusalGuvenIyilestirmeleri20260810 } from "./meralar-ulusal-guven-iyilestirme-2026-08-10";
import { ulusalOtomatikArastirma, ulusalOtomatikArastirmaMeta } from "./meralar-ulusal-otomatik-arastirma";

export type ResearchSource={label:string;url:string;note:string};
export type FishEvidence={name:string;scientificName?:string|null;evidenceLevel:string;sourceLabel:string;sourceUrl:string;note:string;recordCount?:number|null;distanceKm?:number|null};
export type AccommodationOption={name:string;type:string;distanceKm:number|null;sourceUrl:string;note:string};
export type AccessEvidence={label:string;value:string;sourceUrl:string;note:string};
export type ConfidenceDimension={level:"strong"|"partial"|"unverified";label:string;note:string};
export type ConfidenceProfile={model:"evidence-v1";overall:Mera["confidence"];identity:ConfidenceDimension;legal:ConfidenceDimension;access:ConfidenceDimension;species:ConfidenceDimension;field:ConfidenceDimension;reviewedAt:string};
type NationalCoordinate={lat:number;lng:number;displayName:string;sourceUrl:string;matchScore:number;matchedAt:string};
type NationalResearch={researchedAt?:string;researchStatus?:string;researchSummary?:string;fish?:string[];fishEvidence?:FishEvidence[];methods?:string[];baits?:string[];camping?:Mera["camping"];vehicleAccess?:Mera["vehicleAccess"];amenities?:string[];cautions?:string[];accommodationOptions?:AccommodationOption[];accessEvidence?:AccessEvidence[];seasonalNotes?:string[];planningNotes?:string[];transport?:string;crowdNote?:string;sources?:ResearchSource[];fieldVerification?:boolean;strongOfficialSource?:boolean;officialAmateurFishingUseEvidence?:boolean;legalAccessUnclear?:boolean;replaceAutomaticSources?:boolean;replaceAutomaticFish?:boolean;navigationVerified?:boolean;lat?:number;lng?:number;locationPrecision?:Mera["locationPrecision"];navigationNote?:string};
export type EnrichedMera=Mera&{researchStatus?:string;researchSummary?:string;researchedAt?:string;fishEvidence:FishEvidence[];accommodationOptions:AccommodationOption[];accessEvidence:AccessEvidence[];navigationVerified?:boolean;confidenceProfile?:ConfidenceProfile};

const coordinateIndex=ulusalKoordinatlar as Record<string,NationalCoordinate>;
const automatic=ulusalOtomatikArastirma as Record<string,NationalResearch>;
const manual=ulusalManuelArastirma as Record<string,NationalResearch>;
const confidenceBoost={...ulusalGuvenIyilestirmeleri20260809,...ulusalGuvenIyilestirmeleri20260810} as Record<string,NationalResearch>;
const kocaeliMeta=kocaeliIyilestirmeMeta as Record<string,NationalResearch>;
const gunlukMeta20260802=gunlukIyilestirmeMeta20260802 as Record<string,NationalResearch>;
const unique=(values:string[]=[]):string[]=>[...new Set(values.map(String).map(v=>v.trim()).filter(Boolean))];
const uniqueSources=(values:ResearchSource[]=[]):ResearchSource[]=>[...new Map(values.filter(s=>s?.url&&s?.label).map(s=>[s.url,s])).values()];
const baseDefaults=(m:Mera):EnrichedMera=>({...m,fish:unique(m.fish),methods:unique(m.methods),baits:unique(m.baits),fishEvidence:[],accommodationOptions:[],accessEvidence:[]});
const withResearch=(m:Mera,r?:NationalResearch):EnrichedMera=>({...baseDefaults(m),researchStatus:r?.researchStatus,researchSummary:r?.researchSummary,researchedAt:r?.researchedAt,fishEvidence:r?.fishEvidence||[],accommodationOptions:r?.accommodationOptions||[],accessEvidence:r?.accessEvidence||[]});
const mergedResearch=(slug:string):NationalResearch|undefined=>{const o=confidenceBoost[slug];if(o)return o;const a=automatic[slug],m=manual[slug];if(!a&&!m)return undefined;return{...(a||{}),...(m||{}),fish:m?.replaceAutomaticFish?(m.fish||[]):m?.fish?.length?m.fish:a?.fish,fishEvidence:m?.replaceAutomaticFish?(m.fishEvidence||[]):m?.fishEvidence?.length?m.fishEvidence:a?.fishEvidence,methods:m?.methods?.length?m.methods:a?.methods,baits:m?.baits?.length?m.baits:a?.baits,amenities:m?.amenities?.length?m.amenities:a?.amenities,cautions:m?.cautions?.length?m.cautions:a?.cautions,accommodationOptions:m?.accommodationOptions?.length?m.accommodationOptions:a?.accommodationOptions,accessEvidence:m?.accessEvidence?.length?m.accessEvidence:a?.accessEvidence,seasonalNotes:m?.seasonalNotes?.length?m.seasonalNotes:a?.seasonalNotes,planningNotes:m?.planningNotes?.length?m.planningNotes:a?.planningNotes,sources:uniqueSources(m?.replaceAutomaticSources?(m.sources||[]):[...(m?.sources||[]),...(a?.sources||[])])};};
export const nationalConfidence=(r?:NationalResearch):Mera["confidence"]=>{
  if(!r)return "D";
  if(r.legalAccessUnclear)return "D";
  const hasStrongOfficialEvidence=Boolean(r.strongOfficialSource)&&Boolean(r.sources?.some((source)=>/\.gov\.tr\b|\.bel\.tr\b|tarimorman\.gov\.tr\b/i.test(source.url)));
  if(r.fieldVerification&&hasStrongOfficialEvidence)return "A";
  if(r.officialAmateurFishingUseEvidence&&hasStrongOfficialEvidence)return "B";
  const hasStrongDeskResearch=/rota özelinde/i.test(r.researchStatus||"")&&Boolean((r.sources?.length||0)>=2||(r.fishEvidence?.length&&r.accessEvidence?.length));
  return hasStrongDeskResearch?"C":"D";
};
const evidenceNames=(r?:NationalResearch)=>new Set((r?.fishEvidence||[]).map((item)=>item.name.toLocaleLowerCase("tr-TR")));
const nationalConfidenceProfile=(r:NationalResearch|undefined,fish:string[],sources:ResearchSource[],hasCoordinates:boolean,overall:Mera["confidence"],reviewedAt:string):ConfidenceProfile=>{
  const officialSources=sources.filter((source)=>/\.gov\.tr\b|\.bel\.tr\b|tarimorman\.gov\.tr\b/i.test(source.url));
  const supportedFish=evidenceNames(r);
  const allFishSupported=fish.length>0&&fish.every((name)=>supportedFish.has(name.toLocaleLowerCase("tr-TR")));
  const identity:ConfidenceDimension=r?.strongOfficialSource&&officialSources.length
    ?{level:"strong",label:"Resmî rota kimliği",note:"Su varlığı ve rota kimliği en az bir resmî, rota özelindeki kaynakla destekleniyor."}
    :hasCoordinates&&sources.length>=2
      ?{level:"partial",label:"Çok kaynaklı konum eşleşmesi",note:"Ad ve genel konum birden fazla kaynakla eşleşiyor; mikro kıyı noktası doğrulanmış sayılmaz."}
      :{level:"unverified",label:"Aday konum",note:"Rota kimliği veya koordinatı ek doğrulama bekliyor."};
  const legal:ConfidenceDimension=r?.legalAccessUnclear
    ?{level:"unverified",label:"Rota özelinde hukuki durum belirsiz",note:"Genel tebliğ, güncel il kararı ve istihsal/kiralama durumu birlikte doğrulanmadan av uygunluğu varsayılmaz."}
    :r?.officialAmateurFishingUseEvidence
      ?{level:"strong",label:"Resmî amatör kullanım kanıtı",note:"Resmî kaynak amatör veya sportif olta kullanımını rota düzeyinde kaydediyor; güncel dönem ve saha kısıtları yine kontrol edilmelidir."}
      :{level:"partial",label:"Genel mevzuat kontrolü",note:"6/2 Tebliğ çerçevesi biliniyor; belirli kıyı cebine ait güncel izin veya yasak kararı ayrıca teyit edilmelidir."};
  const access:ConfidenceDimension=r?.navigationVerified&&(r.accessEvidence?.length||0)>0
    ?{level:"strong",label:"Planlama noktası doğrulandı",note:"Kamusal planlama hedefi ile koordinat kaynaklarda eşleşiyor; yolun her an açık olduğu anlamına gelmez."}
    :(r?.accessEvidence?.length||0)>0
      ?{level:"partial",label:"Genel erişim bağlamı",note:"Yerleşim veya rekreasyon erişimi belgeli; son kıyı girişi, park ve mülkiyet sınırı saha teyitli değildir."}
      :{level:"unverified",label:"Erişim doğrulanmadı",note:"Pin su varlığını gösterir; kıyıya giriş veya araç rotası kanıtı değildir."};
  const species:ConfidenceDimension=allFishSupported
    ?{level:"strong",label:"Rota özelinde tür kanıtı",note:"Listelenen türlerin tamamı bu su varlığına ait resmî veya bilimsel kayıtlarla eşleşiyor; kıyıdan av garantisi vermez."}
    :(r?.fishEvidence?.length||0)>0
      ?{level:"partial",label:"Kısmi tür kanıtı",note:"Bazı türler rota düzeyinde destekleniyor; liste günlük bulunurluk veya kıyıdan av başarısı anlamına gelmez."}
      :{level:"unverified",label:"Tür listesi teyit bekliyor",note:"Bölgesel tür bilgisi belirli kıyıda amatör av kanıtı olarak kullanılmaz."};
  const field:ConfidenceDimension=r?.fieldVerification
    ?{level:"strong",label:"Saha doğrulaması var",note:"Kıyı koşulları yerinde kontrol edildi; tarih sonrası değişiklikler yine mümkündür."}
    :{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir."};
  return{model:"evidence-v1",overall,identity,legal,access,species,field,reviewedAt};
};
const nationalSummary=(m:Mera,confidence:Mera["confidence"])=>{
  if(confidence==="B")return`${m.name}, rota özelindeki güçlü resmî amatör kullanım kanıtı ve destekleyici erişim/tür kaynaklarıyla masa başında doğrulanmış bir planlama dosyasıdır; güncel saha koşulları ayrıca kontrol edilmelidir.`;
  if(confidence==="C")return`${m.name}, su varlığı, tür veya genel erişim bağlamı rota özelindeki kaynaklarla desteklenen bir planlama dosyasıdır; belirli kıyı cebinin güncel amatör av ve kamusal erişim durumu doğrulanmış değildir.`;
  return`${m.name}, açık kaynaklarda su varlığı olarak eşleştirilmiş ön değerlendirme rotasıdır; kamusal erişim ve avlanma uygunluğu ayrıca doğrulanmalıdır.`;
};
const nationalLongIntro=(m:Mera,confidence:Mera["confidence"]):string[]=>{
  if(confidence==="B")return[
    `${m.name}, resmî bir kaynağın amatör veya sportif olta kullanımını rota düzeyinde açıkça desteklediği; tür, ulaşım ve yakın hizmet bilgilerinin ayrı kanıtlarla çaprazlandığı bir Güven B dosyasıdır.`,
    "Güven B, gölün veya kıyının her noktasında sürekli av izni anlamına gelmez. 6/2 Tebliğ, yürürlükteki değişiklikler, il müdürlüğü duyuruları, kiralanmış istihsal alanı sınırları, DSİ güvenlik sahası ve yerel tabela birlikte kontrol edilmelidir."
  ];
  if(confidence==="C")return[
    `${m.name}, su varlığı ile tür veya genel erişim bağlamının rota özelindeki resmî ya da bilimsel kaynaklarla desteklenmesi nedeniyle Güven C düzeyinde yayımlanır.`,
    "Bu seviye, belirli kıyı cebinin kamusal olduğu veya amatör avcılığa güncel olarak ayrıldığı anlamına gelmez. Bölgesel tür kaydı kıyıdan av kanıtı sayılmaz; son giriş, mevzuat, saha riski ve il bazlı karar ayrıca doğrulanmalıdır."
  ];
  return[
    `${m.name}, ulusal toplu tarama kapsamında oluşturulmuş bir ön değerlendirme rota dosyasıdır. Su varlığının adı ve il eşleşmesi açık kaynak kayıtlarında kontrol edilmiş, belirli bir kıyının amatör balıkçılığa açık olduğu sonucu çıkarılmamıştır.`,
    "Bu kaydın güven seviyesi D'dir. Fiziki erişim, coğrafi kısıt, özel mülkiyet, koruma veya güvenlik statüsü, su seviyesi ve hukuki uygunluk resmî kaynaklardan ve yerinde ayrıca doğrulanmalıdır."
  ];
};
const nationalShoreProfile=(m:Mera,r?:NationalResearch)=>{
  const cleanSentence=(value:string)=>String(value||"").trim().replace(/[.!?]+$/u,"");
  const base=String(m.shoreProfile||"").trim().replace(/\s+/g," ");
  const access=(r?.accessEvidence||[]).slice(0,2).map((item)=>`${item.label}: ${cleanSentence(item.value)}. ${cleanSentence(item.note)}.`).join(" ");
  const research=String(r?.researchSummary||"").trim();
  const evidence=access||research||"Masa başı kaynak taramasında kıyıya giriş, yol ve kamusal kullanım için noktasal saha teyidi bulunmadığından yaklaşım koşulları yerinde ayrıca doğrulanmalıdır.";
  return `${m.name}, ${m.province} için ${cleanSentence(base.charAt(0).toLocaleLowerCase("tr-TR")+base.slice(1))}. ${cleanSentence(evidence)}. Bu kıyı profili, belirli bir erişim cebinin kamusal olduğu veya amatör avcılığa açık bulunduğu anlamına gelmez.`;
};
const national:EnrichedMera[]=ulusalMeralar.map((m):EnrichedMera=>{
  const c=coordinateIndex[m.slug];
  const r=mergedResearch(m.slug);
  const fish=r?.replaceAutomaticFish?unique(r.fish||[]):r?.fish?.length?unique(r.fish):unique(m.fish);
  const manualPoint=Number.isFinite(r?.lat)&&Number.isFinite(r?.lng);
  const hasCoordinates=Boolean(c||manualPoint);
  const confidence=hasCoordinates?nationalConfidence(r):"D";
  const updatedAt=r?.researchedAt||c?.matchedAt.slice(0,10)||m.updatedAt;
  const sources=uniqueSources([...(r?.sources||[]),...(c?[{label:`OpenStreetMap – ${c.displayName}`,url:c.sourceUrl,note:`Genel su varlığı eşleşmesi; pin kamusal kıyı erişimi veya av izni doğrulamaz (puan ${c.matchScore}).`}]:[]),...m.sources.filter(s=>!s.label.startsWith("OpenStreetMap"))]);
  return{
    ...m,
    ...(c?{lat:c.lat,lng:c.lng,locationPrecision:"Genel bölge" as const,navigationNote:"Harita pini genel su varlığı merkezini gösterir; yol, park, kıyıya giriş ve av yapılabilirlik ayrıca araştırılmalıdır."}:{}),
    ...(r?{
      methods:r.methods?.length?unique(r.methods):unique(m.methods),
      baits:r.baits?.length?unique(r.baits):unique(m.baits),
      camping:r.camping||m.camping,
      vehicleAccess:r.vehicleAccess||m.vehicleAccess,
      amenities:r.amenities?.length?r.amenities:m.amenities,
      cautions:r.cautions?.length?r.cautions:m.cautions,
      transport:r.transport||m.transport,
      crowdNote:r.crowdNote||m.crowdNote,
      planningNotes:r.planningNotes?.length?r.planningNotes:m.planningNotes,
      seasonalNotes:r.seasonalNotes?.length?r.seasonalNotes:m.seasonalNotes,
      researchStatus:r.researchStatus,
      researchSummary:r.researchSummary,
      researchedAt:r.researchedAt,
      ...(manualPoint?{lat:r.lat!,lng:r.lng!,locationPrecision:r.locationPrecision||"Genel bölge",navigationNote:r.navigationNote||"Pin masa başı araştırmayla seçilen genel planlama noktasını gösterir; açık giriş, park ve kıyı güvenliği yerinde kontrol edilmelidir."}: {})
    }:{}),
    fish,
    confidence,
    summary:nationalSummary(m,confidence),
    longIntro:nationalLongIntro(m,confidence),
    updatedAt,
    verification:r?.researchStatus?`${r.researchStatus}; Güven ${confidence}. Kaynak kanıtı ile kıyı erişimi, güncel av izni ve saha koşulu ayrı değerlendirilir.`:(c?`${m.verification} Genel konum OpenStreetMap/Nominatim ile eşleştirildi; erişim ve izin doğrulanmış sayılmaz.`:m.verification),
    fishEvidence:r?.fishEvidence||[],
    accommodationOptions:r?.accommodationOptions||[],
    accessEvidence:r?.accessEvidence||[],
    navigationVerified:r?.navigationVerified??false,
    shoreProfile:nationalShoreProfile(m,r),
    sources,
    confidenceProfile:nationalConfidenceProfile(r,fish,sources,hasCoordinates,confidence,updatedAt),
  };
});

export const retiredRouteSlugs=new Set<string>([
  ...retiredRouteSlugs20260803,
  "cubuklu-beykoz-sahili",
  "maltepe-sahili",
  "pendik-sahili",
  "basiskele-sahili",
]);

const localLayers:EnrichedMera[]=[
  ...temelMeralar.map(baseDefaults),
  ...gunlukMeralar.map(baseDefaults),
  ...beykozMeralar.map(baseDefaults),
  ...kocaeliIyilestirmeler.map((m)=>withResearch(m,kocaeliMeta[m.slug])),
  ...istanbulIyilestirmeler.map(baseDefaults),
  ...gunlukIyilestirmeler20260801.map(baseDefaults),
  ...gunlukIyilestirmeler20260802.map((m)=>withResearch(m,gunlukMeta20260802[m.slug])),
  ...kaliteIyilestirmeleri20260803.map(baseDefaults),
  ...gunlukKaliteIyilestirmeleri20260803.map(baseDefaults),
  ...gun1Meralar20260804.map(baseDefaults),
  ...gunlukKaliteIyilestirmeleri20260807.map(baseDefaults),
  ...gun2Meralar20260807.map(baseDefaults),
  ...gun5Meralar20260810.map(baseDefaults),
  ...istanbulKocaeliIyilestirmeleri20260808.map(baseDefaults),
  ...istanbulKocaeliIyilestirmeleriFix20260808.map(baseDefaults),
  ...istanbulKocaeliYeni20260808.map(baseDefaults),
  ...istanbulKocaeliIyilestirmeleri20260809.map(baseDefaults),
  ...istanbulKocaeliYeni20260809.map(baseDefaults),
].filter((m)=>!retiredRouteSlugs.has(m.slug));
const localBySlug=new Map<string,EnrichedMera>();
for(const route of localLayers)localBySlug.set(route.slug,route);
export const meralar:EnrichedMera[]=[...localBySlug.values(),...national.filter((m)=>!retiredRouteSlugs.has(m.slug)&&!localBySlug.has(m.slug))];

const repeatedActiveSlugs=[...new Set(meralar.map((m)=>m.slug).filter((slug,index,all)=>all.indexOf(slug)!==index))];
if(repeatedActiveSlugs.length)throw new Error(`Aktif rota veri kümesinde yinelenen slug var: ${repeatedActiveSlugs.join(", ")}`);
export const nationalCoordinateStats={resolved:ulusalKoordinatMeta.resolvedCount,unresolved:ulusalKoordinatMeta.unresolvedCount,generatedAt:ulusalKoordinatMeta.generatedAt};
export const nationalResearchStats={routeCount:ulusalOtomatikArastirmaMeta.routeCount||Object.keys(automatic).length,fishEvidenceRouteCount:ulusalOtomatikArastirmaMeta.fishEvidenceRouteCount||0,accessEvidenceRouteCount:ulusalOtomatikArastirmaMeta.accessEvidenceRouteCount||0,generatedAt:ulusalOtomatikArastirmaMeta.generatedAt||null,manualRouteCount:Object.keys(manual).length+kocaeliIyilestirmeler.length+istanbulIyilestirmeler.length+gunlukIyilestirmeler20260801.length+gunlukIyilestirmeler20260802.length+gunlukKaliteIyilestirmeleri20260807.length+gun2Meralar20260807.length+gun5Meralar20260810.length+istanbulKocaeliIyilestirmeleriFix20260808.length+istanbulKocaeliYeni20260808.length+istanbulKocaeliIyilestirmeleri20260809.length+istanbulKocaeliYeni20260809.length};
const routesWithoutFish=meralar.filter(m=>!Array.isArray(m.fish)||m.fish.length===0);
const indexableRoutesWithoutFish=routesWithoutFish.filter(m=>m.confidence!=="D");
if(indexableRoutesWithoutFish.length)throw new Error(`Balık türü bilgisi olmayan ${indexableRoutesWithoutFish.length} indekslenebilir avlak sayfası var: ${indexableRoutesWithoutFish.slice(0,20).map(m=>m.slug).join(", ")}`);
const invalidFish=meralar.filter(m=>m.fish.some(f=>typeof f!=="string"||!f.trim()));
if(invalidFish.length)throw new Error(`Geçersiz balık türü alanı bulunan avlaklar: ${invalidFish.map(m=>m.slug).join(", ")}`);
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
export const provinces=[...new Set(meralar.map(m=>m.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince=Object.fromEntries(provinces.map(p=>[p,[...new Set(meralar.filter(m=>m.province===p).map(m=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions=[...new Set(meralar.flatMap(m=>m.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const fishCoverageStats={routeCount:meralar.length,routesWithFish:meralar.length-routesWithoutFish.length,fishTypeCount:fishOptions.length};
export const zonesByProvince=Object.fromEntries(provinces.map(p=>[p,[...new Set(meralar.filter(m=>m.province===p).map(m=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts=Object.fromEntries(provinces.flatMap(p=>(districtsByProvince[p]||[]).map((d:string)=>[`${p}|${d}`,meralar.filter(m=>m.province===p&&m.district===d).length])));
export const districtIndexableRouteCounts=Object.fromEntries(provinces.flatMap(p=>(districtsByProvince[p]||[]).map((d:string)=>[`${p}|${d}`,meralar.filter(m=>m.province===p&&m.district===d&&m.confidence!=="D").length])));
