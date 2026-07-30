import { meralar as temelMeralar } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";
import { ulusalMeralar } from "./meralar-ulusal";
import { ulusalKoordinatlar, ulusalKoordinatMeta } from "./meralar-ulusal-koordinatlar";

type NationalCoordinate = {
  lat:number; lng:number; displayName:string; name:string; category:string|null; type:string|null;
  osmType:string|null; osmId:number|null; sourceUrl:string; query:string; matchScope:string;
  matchScore:number; matchedAt:string;
};

const coordinateIndex=ulusalKoordinatlar as Record<string,NationalCoordinate>;
const koordinatliUlusalMeralar=ulusalMeralar.map((mera)=>{
  const coordinate=coordinateIndex[mera.slug];
  if(!coordinate)return mera;
  const coordinateSource={
    label:`OpenStreetMap – ${coordinate.displayName}`,
    url:coordinate.sourceUrl,
    note:`Nominatim eşleştirmesiyle bulunan genel su varlığı konumudur (eşleşme puanı ${coordinate.matchScore}). Pin, kamusal kıyı erişimi veya avlanma noktası değildir.`,
  };
  return {
    ...mera,
    lat:coordinate.lat,
    lng:coordinate.lng,
    locationPrecision:"Genel bölge" as const,
    updatedAt:coordinate.matchedAt.slice(0,10),
    verification:`${mera.verification} Su varlığının genel harita konumu OpenStreetMap/Nominatim sonucu üzerinden eşleştirildi; pin kıyı erişimi veya avlanma izni doğrulamaz.`,
    navigationNote:"Harita pini su varlığının veya eşleşen coğrafi unsurun genel merkezini gösterir. Yol, park, kıyıya giriş ve av yapılabilirlik için kullanılmamalı; güvenli kamusal erişim ayrıca araştırılmalıdır.",
    sources:[coordinateSource,...mera.sources.filter((source)=>!source.label.startsWith("OpenStreetMap"))],
  };
});

export const nationalCoordinateStats={
  resolved:ulusalKoordinatMeta.resolvedCount,
  unresolved:ulusalKoordinatMeta.unresolvedCount,
  generatedAt:ulusalKoordinatMeta.generatedAt,
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
