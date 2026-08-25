export type SpeciesEvidenceKind="official"|"academic"|"stocking"|"local"|"basin";
export type SpeciesOccurrence={
  name:string;
  scientificName?:string|null;
  status:"confirmed"|"probable";
  evidenceKind:SpeciesEvidenceKind;
  evidenceLevel:"strong"|"partial";
  sourceLabel:string;
  sourceUrl:string;
  note:string;
  recordedAt?:string|null;
};

// Bölgesel olasılık kayıtları burada yalnız kaynaklı olarak tutulur.
// Bir tür, yalnız aynı ilde/komşu suda görülmesi nedeniyle otomatik eklenmez.
export const probableSpeciesByRoute:Record<string,SpeciesOccurrence[]>={};

const normalize=(value:string)=>String(value||"").toLocaleLowerCase("tr-TR").trim();
const fallbackConfirmed=(name:string):SpeciesOccurrence=>({
  name,
  status:"confirmed",
  evidenceKind:"local",
  evidenceLevel:"partial",
  sourceLabel:"Avlak veri dosyası",
  sourceUrl:"",
  note:"Tür avlak kaydında yayımlanıyor ancak ayrı rota-özel kanıt nesnesi henüz eşleştirilmemiş. Güven seviyesi ve kaynakça birlikte okunmalıdır.",
});

export const getRouteSpeciesPresentation=(route:any)=>{
  const evidence=Array.isArray(route?.fishEvidence)?route.fishEvidence:[];
  const evidenceByName=new Map(evidence.map((item:any)=>[normalize(item?.name),item]));
  const confirmed=(Array.isArray(route?.fish)?route.fish:[]).map((name:string)=>{
    const item:any=evidenceByName.get(normalize(name));
    if(!item)return fallbackConfirmed(name);
    const levelText=normalize(item.evidenceLevel);
    const kind:SpeciesEvidenceKind=/balıklandır|stok|salım/.test(levelText+" "+normalize(item.note))?"stocking":/resmî|official/.test(levelText+" "+normalize(item.sourceLabel))?"official":"academic";
    return {
      name,
      scientificName:item.scientificName||null,
      status:"confirmed" as const,
      evidenceKind:kind,
      evidenceLevel:/güçlü|strong|doğrudan|rota özelinde/.test(levelText+" "+normalize(item.note))?"strong" as const:"partial" as const,
      sourceLabel:item.sourceLabel||"Rota özelinde tür kanıtı",
      sourceUrl:item.sourceUrl||"",
      note:item.note||"Rota özelinde kaynak kaydı.",
      recordedAt:item.recordedAt||null,
    };
  });
  const probable=(probableSpeciesByRoute[route?.slug]||[]).filter((item)=>item.status==="probable");
  return {confirmed,probable};
};

export const speciesProfileGap=(routes:any[],fishCatalog:{name:string}[])=>{
  const catalog=new Set(fishCatalog.map((fish)=>normalize(fish.name)));
  const names=[...new Set(routes.flatMap((route)=>Array.isArray(route.fish)?route.fish:[]))];
  return names.filter((name)=>!catalog.has(normalize(name))).sort((a,b)=>a.localeCompare(b,"tr"));
};

export const unsourcedProbableOccurrences=()=>Object.entries(probableSpeciesByRoute).flatMap(([routeSlug,items])=>items.filter((item)=>!item.sourceUrl||!item.note).map((item)=>({routeSlug,species:item.name})));
