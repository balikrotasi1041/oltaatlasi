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
import { bakimMeralar20260806B, bakimSlugs20260806B } from "./meralar-bakim-2026-08-06-b";
import { ulusalMeralar } from "./meralar-ulusal";
import { ulusalKoordinatlar, ulusalKoordinatMeta } from "./meralar-ulusal-koordinatlar";
import { ulusalManuelArastirma } from "./meralar-ulusal-manuel-arastirma";
import { ulusalOtomatikArastirma, ulusalOtomatikArastirmaMeta } from "./meralar-ulusal-otomatik-arastirma";

export type ResearchSource={label:string;url:string;note:string};
export type FishEvidence={name:string;scientificName?:string|null;evidenceLevel:string;sourceLabel:string;sourceUrl:string;note:string;recordCount?:number|null;distanceKm?:number|null};
export type AccommodationOption={name:string;type:string;distanceKm:number|null;sourceUrl:string;note:string};
export type AccessEvidence={label:string;value:string;sourceUrl:string;note:string};
type NationalCoordinate={lat:number;lng:number;displayName:string;sourceUrl:string;matchScore:number;matchedAt:string};
type NationalResearch={researchedAt?:string;researchStatus?:string;researchSummary?:string;fish?:string[];fishEvidence?:FishEvidence[];methods?:string[];baits?:string[];camping?:Mera["camping"];vehicleAccess?:Mera["vehicleAccess"];amenities?:string[];cautions?:string[];accommodationOptions?:AccommodationOption[];accessEvidence?:AccessEvidence[];seasonalNotes?:string[];planningNotes?:string[];transport?:string;crowdNote?:string;sources?:ResearchSource[]};
export type EnrichedMera=Mera&{researchStatus?:string;researchSummary?:string;researchedAt?:string;fishEvidence:FishEvidence[];accommodationOptions:AccommodationOption[];accessEvidence:AccessEvidence[]};

const coordinateIndex=ulusalKoordinatlar as Record<string,NationalCoordinate>;
const automatic=ulusalOtomatikArastirma as Record<string,NationalResearch>;
const manual=ulusalManuelArastirma as Record<string,NationalResearch>;
const kocaeliMeta=kocaeliIyilestirmeMeta as Record<string,NationalResearch>;
const gunlukMeta20260802=gunlukIyilestirmeMeta20260802 as Record<string,NationalResearch>;
const unique=(values:string[]=[]):string[]=>[...new Set(values.map(String).map(v=>v.trim()).filter(Boolean))];
const uniqueSources=(values:ResearchSource[]=[]):ResearchSource[]=>[...new Map(values.filter(s=>s?.url&&s?.label).map(s=>[s.url,s])).values()];
const baseDefaults=(m:Mera):EnrichedMera=>({...m,fish:unique(m.fish),methods:unique(m.methods),baits:unique(m.baits),fishEvidence:[],accommodationOptions:[],accessEvidence:[]});
const withResearch=(m:Mera,r?:NationalResearch):EnrichedMera=>({...baseDefaults(m),researchStatus:r?.researchStatus,researchSummary:r?.researchSummary,researchedAt:r?.researchedAt,fishEvidence:r?.fishEvidence||[],accommodationOptions:r?.accommodationOptions||[],accessEvidence:r?.accessEvidence||[]});
const mergedResearch=(slug:string):NationalResearch|undefined=>{const a=automatic[slug],m=manual[slug];if(!a&&!m)return undefined;return{...(a||{}),...(m||{}),fish:m?.fish?.length?m.fish:a?.fish,fishEvidence:m?.fishEvidence?.length?m.fishEvidence:a?.fishEvidence,methods:m?.methods?.length?m.methods:a?.methods,baits:m?.baits?.length?m.baits:a?.baits,amenities:m?.amenities?.length?m.amenities:a?.amenities,cautions:m?.cautions?.length?m.cautions:a?.cautions,accommodationOptions:m?.accommodationOptions?.length?m.accommodationOptions:a?.accommodationOptions,accessEvidence:m?.accessEvidence?.length?m.accessEvidence:a?.accessEvidence,seasonalNotes:m?.seasonalNotes?.length?m.seasonalNotes:a?.seasonalNotes,planningNotes:m?.planningNotes?.length?m.planningNotes:a?.planningNotes,sources:uniqueSources([...(m?.sources||[]),...(a?.sources||[])])};};
const nationalShoreProfile=(m:Mera,r?:NationalResearch)=>{
  const base=String(m.shoreProfile||"").trim().replace(/\s+/g," ");
  const access=(r?.accessEvidence||[]).slice(0,2).map((item)=>`${item.label}: ${item.value}. ${item.note}`).join(" ");
  const research=String(r?.researchSummary||"").trim();
  const evidence=access||research||"Masa başı kaynak taramasında kıyıya giriş, yol ve kamusal kullanım için noktasal saha teyidi bulunmadığından yaklaşım koşulları yerinde ayrıca doğrulanmalıdır.";
  return `${m.name}, ${m.province} için ${base.charAt(0).toLocaleLowerCase("tr-TR")}${base.slice(1)} ${evidence} Bu kıyı profili, belirli bir erişim cebinin kamusal olduğu veya amatör avcılığa açık bulunduğu anlamına gelmez.`;
};
const national:EnrichedMera[]=ulusalMeralar.map((m):EnrichedMera=>{const c=coordinateIndex[m.slug],r=mergedResearch(m.slug);const fish=r?.fish?.length?unique(r.fish):unique(m.fish);const sources=uniqueSources([...(r?.sources||[]),...(c?[{label:`OpenStreetMap – ${c.displayName}`,url:c.sourceUrl,note:`Genel su varlığı eşleşmesi; pin kamusal kıyı erişimi veya av izni doğrulamaz (puan ${c.matchScore}).`}]:[]),...m.sources.filter(s=>!s.label.startsWith("OpenStreetMap"))]);return{...m,...(c?{lat:c.lat,lng:c.lng,locationPrecision:"Genel bölge" as const,updatedAt:c.matchedAt.slice(0,10),navigationNote:"Harita pini genel su varlığı merkezini gösterir; yol, park, kıyıya giriş ve av yapılabilirlik ayrıca araştırılmalıdır.",verification:`${m.verification} Genel konum OpenStreetMap/Nominatim ile eşleştirildi; erişim ve izin doğrulanmış sayılmaz.`}:{}),...(r?{fish,methods:r.methods?.length?unique(r.methods):unique(m.methods),baits:r.baits?.length?unique(r.baits):unique(m.baits),camping:r.camping||m.camping,vehicleAccess:r.vehicleAccess||m.vehicleAccess,amenities:r.amenities?.length?r.amenities:m.amenities,cautions:r.cautions?.length?r.cautions:m.cautions,transport:r.transport||m.transport,crowdNote:r.crowdNote||m.crowdNote,planningNotes:r.planningNotes?.length?r.planningNotes:m.planningNotes,seasonalNotes:r.seasonalNotes?.length?r.seasonalNotes:m.seasonalNotes,updatedAt:r.researchedAt||c?.matchedAt.slice(0,10)||m.updatedAt,verification:r.researchStatus?`${m.verification} Tür, ulaşım ve yakın hizmetler açık kaynak araştırmasıyla zenginleştirildi; saha ve hukuki uygunluk ayrıca doğrulanmalıdır.`:m.verification,confidence:manual[m.slug]?"B" as const:(fish.length&&r.accessEvidence?.length?"C" as const:m.confidence),researchStatus:r.researchStatus,researchSummary:r.researchSummary,researchedAt:r.researchedAt}:{}),fish,methods:r?.methods?.length?unique(r.methods):unique(m.methods),baits:r?.baits?.length?unique(r.baits):unique(m.baits),fishEvidence:r?.fishEvidence||[],accommodationOptions:r?.accommodationOptions||[],accessEvidence:r?.accessEvidence||[],shoreProfile:nationalShoreProfile(m,r),sources};});

const beykozSlugs=new Set(beykozMeralar.map(m=>m.slug));
const kocaeliSlugs=new Set(kocaeliIyilestirmeler.map(m=>m.slug));
const istanbulSlugs=new Set(istanbulIyilestirmeler.map(m=>m.slug));
const gunlukIyilestirmeSlugs20260801=new Set(gunlukIyilestirmeler20260801.map(m=>m.slug));
const gunlukIyilestirmeSlugs20260802=new Set(gunlukIyilestirmeler20260802.map(m=>m.slug));
const kaliteIyilestirmeSlugs20260803=new Set(kaliteIyilestirmeleri20260803.map(m=>m.slug));
const gunlukKaliteSlugs20260803=new Set(gunlukKaliteIyilestirmeleri20260803.map(m=>m.slug));
const overridden=(slug:string)=>bakimSlugs20260806B.has(slug)||beykozSlugs.has(slug)||kocaeliSlugs.has(slug)||istanbulSlugs.has(slug)||gunlukIyilestirmeSlugs20260801.has(slug)||gunlukIyilestirmeSlugs20260802.has(slug)||kaliteIyilestirmeSlugs20260803.has(slug)||gunlukKaliteSlugs20260803.has(slug);
export const meralar:EnrichedMera[]=[
  ...temelMeralar.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!overridden(m.slug)).map(baseDefaults),
  ...gunlukMeralar.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!overridden(m.slug)).map(baseDefaults),
  ...beykozMeralar.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!istanbulSlugs.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).filter(m=>!gunlukIyilestirmeSlugs20260801.has(m.slug)&&!gunlukIyilestirmeSlugs20260802.has(m.slug)).map(baseDefaults),
  ...kocaeliIyilestirmeler.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!gunlukIyilestirmeSlugs20260801.has(m.slug)&&!gunlukIyilestirmeSlugs20260802.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(m=>withResearch(m,kocaeliMeta[m.slug])),
  ...istanbulIyilestirmeler.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!gunlukIyilestirmeSlugs20260801.has(m.slug)&&!gunlukIyilestirmeSlugs20260802.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(baseDefaults),
  ...bakimMeralar20260806B.map(baseDefaults),
  ...gunlukIyilestirmeler20260801.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!gunlukIyilestirmeSlugs20260802.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(baseDefaults),
  ...gunlukIyilestirmeler20260802.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(m=>withResearch(m,gunlukMeta20260802[m.slug])),
  ...kaliteIyilestirmeleri20260803.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(baseDefaults),
  ...gunlukKaliteIyilestirmeleri20260803.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!bakimSlugs20260806B.has(m.slug)).map(baseDefaults),
  ...gun1Meralar20260804.filter(m=>!bakimSlugs20260806B.has(m.slug)).map(baseDefaults),
  ...national.filter(m=>!retiredRouteSlugs20260803.has(m.slug)&&!overridden(m.slug)),
];

export const nationalCoordinateStats={resolved:ulusalKoordinatMeta.resolvedCount,unresolved:ulusalKoordinatMeta.unresolvedCount,generatedAt:ulusalKoordinatMeta.generatedAt};
export const nationalResearchStats={routeCount:ulusalOtomatikArastirmaMeta.routeCount||Object.keys(automatic).length,fishEvidenceRouteCount:ulusalOtomatikArastirmaMeta.fishEvidenceRouteCount||0,accessEvidenceRouteCount:ulusalOtomatikArastirmaMeta.accessEvidenceRouteCount||0,generatedAt:ulusalOtomatikArastirmaMeta.generatedAt||null,manualRouteCount:Object.keys(manual).length+kocaeliIyilestirmeler.length+istanbulIyilestirmeler.length+gunlukIyilestirmeler20260801.length+gunlukIyilestirmeler20260802.length+bakimMeralar20260806B.length};
const routesWithoutFish=meralar.filter(m=>!Array.isArray(m.fish)||m.fish.length===0);
if(routesWithoutFish.length)throw new Error(`Balık türü bilgisi olmayan ${routesWithoutFish.length} avlak sayfası var: ${routesWithoutFish.slice(0,20).map(m=>m.slug).join(", ")}`);
const invalidFish=meralar.filter(m=>m.fish.some(f=>typeof f!=="string"||!f.trim()));
if(invalidFish.length)throw new Error(`Geçersiz balık türü alanı bulunan avlaklar: ${invalidFish.map(m=>m.slug).join(", ")}`);

const dashboardWeakSources=meralar.filter((m)=>!m.sources||m.sources.length<2);
const dashboardWeakTransport=meralar.filter((m)=>!m.transport||m.transport.length<90||/güncel harita uygulaması|genel erişim bölgesine gider/i.test(m.transport));
const dashboardWeakAccommodation=meralar.filter((m)=>!m.accommodationOptions?.length&&!/konaklama|otel|pansiyon|ilçe merkezi|yerleşim/i.test(`${m.transport} ${m.planningNotes.join(" ")} ${m.amenities.join(" ")}`));
const dashboardWeakLocality=meralar.filter((m)=>!m.shoreProfile||m.shoreProfile.length<100||/şehir içi ve düzenlenmiş bölümler|yerel engellerin bir arada/i.test(m.shoreProfile));
const dashboardWeakResearch=meralar.filter((m)=>/pilot veri/i.test(m.verification));
const dashboardIssueSets=[dashboardWeakSources,dashboardWeakTransport,dashboardWeakAccommodation,dashboardWeakLocality,dashboardWeakResearch];
const dashboardIssueTotal=dashboardIssueSets.reduce((sum,items)=>sum+items.length,0);
export const contentQualityStats={
  score:Math.max(0,Math.round(100-(dashboardIssueTotal/Math.max(1,meralar.length*dashboardIssueSets.length))*100)),
  issues:{sources:dashboardWeakSources.length,transport:dashboardWeakTransport.length,accommodation:dashboardWeakAccommodation.length,locality:dashboardWeakLocality.length,research:dashboardWeakResearch.length},
};
if(dashboardIssueTotal){
  const detail=[
    ["kaynak",dashboardWeakSources],
    ["ulaşım",dashboardWeakTransport],
    ["konaklama",dashboardWeakAccommodation],
    ["kıyı",dashboardWeakLocality],
    ["pilot",dashboardWeakResearch],
  ].filter(([,items])=>(items as EnrichedMera[]).length).map(([label,items])=>`${label}: ${(items as EnrichedMera[]).slice(0,24).map((m)=>m.slug).join(", ")}`).join(" | ");
  throw new Error(`Dashboard içerik kalite kapısı ${contentQualityStats.score}/100. ${detail}`);
}

export const provinces=[...new Set(meralar.map(m=>m.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince=Object.fromEntries(provinces.map(p=>[p,[...new Set(meralar.filter(m=>m.province===p).map(m=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions=[...new Set(meralar.flatMap(m=>m.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const fishCoverageStats={routeCount:meralar.length,routesWithFish:meralar.length-routesWithoutFish.length,fishTypeCount:fishOptions.length};
export const zonesByProvince=Object.fromEntries(provinces.map(p=>[p,[...new Set(meralar.filter(m=>m.province===p).map(m=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts=Object.fromEntries(provinces.flatMap(p=>(districtsByProvince[p]||[]).map((d:string)=>[`${p}|${d}`,meralar.filter(m=>m.province===p&&m.district===d).length])));
