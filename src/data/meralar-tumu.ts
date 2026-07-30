import { meralar as temelMeralar } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";
import { ulusalMeralar } from "./meralar-ulusal";
import { ulusalKoordinatlar, ulusalKoordinatMeta } from "./meralar-ulusal-koordinatlar";
import { ulusalManuelArastirma } from "./meralar-ulusal-manuel-arastirma";
import { ulusalOtomatikArastirma, ulusalOtomatikArastirmaMeta } from "./meralar-ulusal-otomatik-arastirma";

type NationalCoordinate = {
  lat:number; lng:number; displayName:string; name:string; category:string|null; type:string|null;
  osmType:string|null; osmId:number|null; sourceUrl:string; query:string; matchScope:string;
  matchScore:number; matchedAt:string;
};

type ResearchSource = { label:string; url:string; note:string };
type FishEvidence = {
  name:string; scientificName?:string|null; evidenceLevel:string; sourceLabel:string;
  sourceUrl:string; note:string; recordCount?:number|null; distanceKm?:number|null;
};
type AccommodationOption = {
  name:string; type:string; distanceKm:number|null; sourceUrl:string; note:string;
};
type AccessEvidence = {
  label:string; value:string; sourceUrl:string; note:string;
};
type NationalResearch = {
  researchedAt?:string; researchStatus?:string; researchSummary?:string;
  fish?:string[]; fishEvidence?:FishEvidence[]; methods?:string[]; baits?:string[];
  camping?:"Uygun"|"Sınırlı"|"Uygun değil"|"Kontrol edilmeli";
  vehicleAccess?:"Kolay"|"Orta"|"Zor"; amenities?:string[]; cautions?:string[];
  accommodationOptions?:AccommodationOption[]; accessEvidence?:AccessEvidence[];
  seasonalNotes?:string[]; planningNotes?:string[]; transport?:string; crowdNote?:string;
  sources?:ResearchSource[];
};

const coordinateIndex=ulusalKoordinatlar as Record<string,NationalCoordinate>;
const automaticResearch=ulusalOtomatikArastirma as Record<string,NationalResearch>;
const manualResearch=ulusalManuelArastirma as Record<string,NationalResearch>;

const uniqueStrings=(values:string[]=[])=
  [...new Set(values.map((value)=>String(value).trim()).filter(Boolean))];

const uniqueSources=(values:ResearchSource[]=[])=
  [...new Map(values.filter((source)=>source?.url&&source?.label).map((source)=>[source.url,source])).values()];

const mergeResearch=(automatic?:NationalResearch,manual?:NationalResearch):NationalResearch|undefined=>{
  if(!automatic&&!manual)return undefined;
  return {
    ...(automatic||{}),
    ...(manual||{}),
    fish:manual?.fish?.length?manual.fish:automatic?.fish,
    fishEvidence:manual?.fishEvidence?.length?manual.fishEvidence:automatic?.fishEvidence,
    methods:manual?.methods?.length?manual.methods:automatic?.methods,
    baits:manual?.baits?.length?manual.baits:automatic?.baits,
    amenities:manual?.amenities?.length?manual.amenities:automatic?.amenities,
    cautions:manual?.cautions?.length?manual.cautions:automatic?.cautions,
    accommodationOptions:manual?.accommodationOptions?.length?manual.accommodationOptions:automatic?.accommodationOptions,
    accessEvidence:manual?.accessEvidence?.length?manual.accessEvidence:automatic?.accessEvidence,
    seasonalNotes:manual?.seasonalNotes?.length?manual.seasonalNotes:automatic?.seasonalNotes,
    planningNotes:manual?.planningNotes?.length?manual.planningNotes:automatic?.planningNotes,
    sources:uniqueSources([...(manual?.sources||[]),...(automatic?.sources||[])]),
  };
};

const koordinatliUlusalMeralar=ulusalMeralar.map((mera)=>{
  const coordinate=coordinateIndex[mera.slug];
  const research=mergeResearch(automaticResearch[mera.slug],manualResearch[mera.slug]);
  const coordinateSource=coordinate?{
    label:`OpenStreetMap – ${coordinate.displayName}`,
    url:coordinate.sourceUrl,
    note:`Nominatim eşleştirmesiyle bulunan genel su varlığı konumudur (eşleşme puanı ${coordinate.matchScore}). Pin, kamusal kıyı erişimi veya avlanma noktası değildir.`,
  }:null;
  const researched=Boolean(research?.researchStatus);
  const fish=research?.fish?.length?uniqueStrings(research.fish):mera.fish;
  const methods=research?.methods?.length?uniqueStrings(research.methods):mera.methods;
  const baits=research?.baits?.length?uniqueStrings(research.baits):mera.baits;
  const sources=uniqueSources([
    ...(research?.sources||[]),
    ...(coordinateSource?[coordinateSource]:[]),
    ...mera.sources.filter((source)=>!source.label.startsWith("OpenStreetMap")),
  ]);
  return {
    ...mera,
    ...(coordinate?{
      lat:coordinate.lat,
      lng:coordinate.lng,
      locationPrecision:"Genel bölge" as const,
      updatedAt:coordinate.matchedAt.slice(0,10),
      verification:`${mera.verification} Su varlığının genel harita konumu OpenStreetMap/Nominatim sonucu üzerinden eşleştirildi; pin kıyı erişimi veya avlanma izni doğrulamaz.`,
      navigationNote:"Harita pini su varlığının veya eşleşen coğrafi unsurun genel merkezini gösterir. Yol, park, kıyıya giriş ve av yapılabilirlik için kullanılmamalı; güvenli kamusal erişim ayrıca araştırılmalıdır.",
    }:{}),
    ...(research?{
      fish,
      methods,
      baits,
      camping:research.camping||mera.camping,
      vehicleAccess:research.vehicleAccess||mera.vehicleAccess,
      amenities:research.amenities?.length?research.amenities:mera.amenities,
      cautions:research.cautions?.length?research.cautions:mera.cautions,
      transport:research.transport||mera.transport,
      crowdNote:research.crowdNote||mera.crowdNote,
      planningNotes:research.planningNotes?.length?research.planningNotes:mera.planningNotes,
      seasonalNotes:research.seasonalNotes?.length?research.seasonalNotes:mera.seasonalNotes,
      updatedAt:research.researchedAt||coordinate?.matchedAt.slice(0,10)||mera.updatedAt,
      verification:researched
        ? `${mera.verification} Tür, ulaşım ve yakın hizmetler açık kaynak araştırmasıyla zenginleştirildi; saha ve hukuki uygunluk ayrıca doğrulanmalıdır.`
        : mera.verification,
      confidence:manualResearch[mera.slug]?"B" as const:(fish.length&&research.accessEvidence?.length?"C" as const:mera.confidence),
      researchStatus:research.researchStatus,
      researchSummary:research.researchSummary,
      researchedAt:research.researchedAt,
      fishEvidence:research.fishEvidence||[],
      accommodationOptions:research.accommodationOptions||[],
      accessEvidence:research.accessEvidence||[],
    }:{}),
    sources,
  };
});

export const nationalCoordinateStats={
  resolved:ulusalKoordinatMeta.resolvedCount,
  unresolved:ulusalKoordinatMeta.unresolvedCount,
  generatedAt:ulusalKoordinatMeta.generatedAt,
};
export const nationalResearchStats={
  routeCount:ulusalOtomatikArastirmaMeta.routeCount||Object.keys(automaticResearch).length,
  fishEvidenceRouteCount:ulusalOtomatikArastirmaMeta.fishEvidenceRouteCount||0,
  accessEvidenceRouteCount:ulusalOtomatikArastirmaMeta.accessEvidenceRouteCount||0,
  generatedAt:ulusalOtomatikArastirmaMeta.generatedAt||null,
  manualRouteCount:Object.keys(manualResearch).length,
};
export const meralar = [...temelMeralar, ...gunlukMeralar, ...koordinatliUlusalMeralar];
export const provinces = [...new Set(meralar.map((mera) => mera.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions = [...new Set(meralar.flatMap((mera) => mera.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const zonesByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts = Object.fromEntries(
  provinces.flatMap((province) => (districtsByProvince[province] || []).map((district: string) => [
    `${province}|${district}`,
    meralar.filter((m) => m.province === province && m.district === district).length,
  ]))
);
