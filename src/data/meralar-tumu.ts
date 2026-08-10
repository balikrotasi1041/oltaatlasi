export * from "./meralar-tumu-core";
import type { Mera } from "./meralar";
import type { EnrichedMera } from "./meralar-tumu-core";
import { meralar as coreMeralar } from "./meralar-tumu-core";
import { istanbulKocaeliIyilestirmeleri20260810Evening, istanbulKocaeliYeni20260810Evening } from "./meralar-istanbul-kocaeli-2026-08-10-evening";

const routeMap=new Map<string,EnrichedMera>(coreMeralar.map((route)=>[route.slug,route]));
const applyOverride=(route:Mera)=>{
  const previous=routeMap.get(route.slug);
  routeMap.set(route.slug,{
    ...(previous||{}),
    ...route,
    fishEvidence:previous?.fishEvidence||[],
    accommodationOptions:previous?.accommodationOptions||[],
    accessEvidence:previous?.accessEvidence||[],
    navigationVerified:previous?.navigationVerified??false,
    confidenceProfile:previous?.confidenceProfile,
  } as EnrichedMera);
};
for(const route of istanbulKocaeliIyilestirmeleri20260810Evening)applyOverride(route);
for(const route of istanbulKocaeliYeni20260810Evening)applyOverride(route);

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
