export type SpeciesEvidenceKind="official"|"academic"|"stocking"|"local"|"basin";
export type SpeciesOccurrence={
  name:string;
  scientificName?:string|null;
  status:"confirmed"|"reported"|"probable";
  evidenceKind:SpeciesEvidenceKind;
  evidenceLevel:"strong"|"partial"|"unverified";
  sourceLabel:string;
  sourceUrl:string;
  note:string;
  recordedAt?:string|null;
};

// Bölgesel olasılık kayıtları burada yalnız kaynaklı olarak tutulur.
// Bir tür, yalnız aynı ilde/komşu suda görülmesi nedeniyle otomatik eklenmez.
export const probableSpeciesByRoute:Record<string,SpeciesOccurrence[]>={};

const normalize=(value:string)=>String(value||"").toLocaleLowerCase("tr-TR").trim();
const fallbackReported=(name:string):SpeciesOccurrence=>({
  name,
  status:"reported",
  evidenceKind:"local",
  evidenceLevel:"unverified",
  sourceLabel:"Avlak veri dosyası",
  sourceUrl:"",
  note:"Tür mevcut avlak kaydında raporlanıyor; ancak ayrı rota-özel tür kanıtı henüz fishEvidence katmanına bağlanmamış. Bu nedenle doğrulanmış tür grubuna alınmaz.",
});

export const getRouteSpeciesPresentation=(route:any)=>{
  const evidence=Array.isArray(route?.fishEvidence)?route.fishEvidence:[];
  const evidenceByName=new Map(evidence.map((item:any)=>[normalize(item?.name),item]));
  const confirmed:SpeciesOccurrence[]=[];
  const reported:SpeciesOccurrence[]=[];
  for(const name of (Array.isArray(route?.fish)?route.fish:[])){
    const item:any=evidenceByName.get(normalize(name));
    if(!item){reported.push(fallbackReported(name));continue;}
    const levelText=normalize(item.evidenceLevel);
    const sourceText=`${levelText} ${normalize(item.note)} ${normalize(item.sourceLabel)}`;
    const kind:SpeciesEvidenceKind=/balıklandır|stok|salım/.test(sourceText)?"stocking":/resmî|official|tarım|dsi|bakanlık/.test(sourceText)?"official":"academic";
    confirmed.push({
      name,
      scientificName:item.scientificName||null,
      status:"confirmed",
      evidenceKind:kind,
      evidenceLevel:/güçlü|strong|doğrudan|rota özelinde|örneklen/.test(sourceText)?"strong":"partial",
      sourceLabel:item.sourceLabel||"Rota özelinde tür kanıtı",
      sourceUrl:item.sourceUrl||"",
      note:item.note||"Rota özelinde kaynak kaydı.",
      recordedAt:item.recordedAt||null,
    });
  }
  const probable=(probableSpeciesByRoute[route?.slug]||[]).filter((item)=>item.status==="probable");
  return {confirmed,reported,probable};
};

export const speciesProfileGap=(routes:any[],fishCatalog:{name:string}[])=>{
  const catalog=new Set(fishCatalog.map((fish)=>normalize(fish.name)));
  const names=[...new Set(routes.flatMap((route)=>Array.isArray(route.fish)?route.fish:[]))];
  return names.filter((name)=>!catalog.has(normalize(name))).sort((a,b)=>a.localeCompare(b,"tr"));
};

export const occurrenceEvidenceGap=(routes:any[])=>routes.flatMap((route)=>{
  const presentation=getRouteSpeciesPresentation(route);
  return presentation.reported.map((item)=>({routeSlug:route.slug,species:item.name,confidence:route.confidence}));
});

export const unsourcedProbableOccurrences=()=>Object.entries(probableSpeciesByRoute).flatMap(([routeSlug,items])=>items.filter((item)=>item.status!=="probable"||!item.sourceUrl||!item.note).map((item)=>({routeSlug,species:item.name})));
