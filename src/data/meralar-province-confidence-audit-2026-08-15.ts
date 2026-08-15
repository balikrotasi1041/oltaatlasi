import type { EnrichedMera, ConfidenceDimension, ConfidenceProfile, FishEvidence, ResearchSource } from "./meralar-tumu-core";
import {
  provinceEvidenceReviewMeta,
  provinceFisheriesEvidence20260815,
  retiredRouteEvidence20260815,
  reviewedProvinces20260815,
  type ProvinceFisheriesEvidence,
} from "./province-fisheries-evidence-2026-08-15";

export type ProvinceEvidenceReview={
  province:string;
  reviewedAt:string;
  reviewedCategories:string[];
  acceptedProvinceEvidenceCount:number;
  exactRouteEvidenceCount:number;
  exactOfficialAmateurUseCount:number;
  exactSpeciesEvidenceCount:number;
  confidenceBefore:EnrichedMera["confidence"];
  confidenceAfter:EnrichedMera["confidence"];
  note:string;
};

export type ProvinceAuditedMera=EnrichedMera&{
  provinceEvidenceReviewedAt:string;
  provinceEvidenceReview:ProvinceEvidenceReview;
};

export type ProvinceConfidenceAuditStats={
  reviewedRoutes:number;
  reviewedProvinces:number;
  provincesWithAcceptedEvidence:number;
  exactRouteEvidenceHits:number;
  officialAmateurUseHits:number;
  exactSpeciesEvidenceHits:number;
  confidenceUpgrades:string[];
  retiredSlugs:string[];
  unchangedRoutes:number;
};

const normalize=(value:string)=>String(value||"").toLocaleLowerCase("tr-TR").replace(/[’']/g,"").replace(/\s+/g," ").trim();
const canonicalSpecies=(value:string)=>{
  const n=normalize(value);
  if(n.includes("sazan"))return "sazan";
  if(n.includes("yayın"))return "yayın";
  if(n.includes("siraz")||n.includes("şiraz"))return "siraz";
  if(n.includes("fırat turn"))return "fırat turnası";
  if(n.includes("şabut")||n.includes("sabut"))return "şabut";
  return n;
};
const uniqueSources=(values:ResearchSource[])=>[...new Map(values.filter((source)=>source?.url&&source?.label).map((source)=>[source.url,source])).values()];
const strongest=(current:ConfidenceDimension|undefined,candidate:ConfidenceDimension):ConfidenceDimension=>{
  const rank={unverified:0,partial:1,strong:2};
  return !current||rank[candidate.level]>rank[current.level]?candidate:current;
};
const evidenceToSource=(item:ProvinceFisheriesEvidence):ResearchSource=>({label:item.label,url:item.url,note:item.note});
const evidenceToFish=(item:ProvinceFisheriesEvidence):FishEvidence[]=>
  (item.species||[]).map((name)=>({
    name,
    scientificName:null,
    evidenceLevel:item.kind==="stocking"?"Resmî balıklandırma kaydı":"Resmî rota özelinde tür/stok kaydı",
    sourceLabel:item.label,
    sourceUrl:item.url,
    note:`${item.note} Bu kayıt türün ilgili suyla bağını destekler; güncel popülasyon, kıyıdan av başarısı veya avlanma izni anlamına gelmez.`,
    recordCount:null,
    distanceKm:null,
  }));

const buildProfile=(route:EnrichedMera,overall:EnrichedMera["confidence"],officialUse:ProvinceFisheriesEvidence[],speciesEvidence:ProvinceFisheriesEvidence[]):ConfidenceProfile|undefined=>{
  const existing=route.confidenceProfile;
  if(!existing&&!officialUse.length)return undefined;
  const supported=new Set(speciesEvidence.flatMap((item)=>item.species||[]).map(canonicalSpecies));
  const routeFish=route.fish.map(canonicalSpecies);
  const matched=routeFish.filter((name)=>supported.has(name));
  const speciesCandidate:ConfidenceDimension|undefined=speciesEvidence.length&&routeFish.length
    ? matched.length===routeFish.length
      ?{level:"strong",label:"Rota özelinde resmî tür/stok kanıtı",note:"Yayımlanan türlerin tamamı bu su varlığına ait resmî balıklandırma veya stok kaydıyla eşleşiyor; av garantisi değildir."}
      :matched.length
        ?{level:"partial",label:"Rota özelinde kısmi tür/stok kanıtı",note:"Yayımlanan türlerden en az biri bu suya ait resmî balıklandırma veya stok kaydıyla eşleşiyor; diğer türler kendi kaynaklarıyla değerlendirilmelidir."}
        :undefined
    :undefined;
  const legalCandidate:ConfidenceDimension|undefined=officialUse.length
    ?{level:"strong",label:"Rota özelinde resmî amatör kullanım kanıtı",note:"Güncel veya mevcut 6/2 dönemi içindeki resmî kaynak bu su/rotada amatör olta kullanımını açıkça kaydediyor. Bu, her kıyı cebine giriş garantisi değildir; dönem, işletme, ticari saha ve yerel tabela ayrıca geçerlidir."}
    :undefined;
  return{
    model:"evidence-v1",
    overall,
    identity:existing?.identity||{level:"strong",label:"Resmî rota kimliği ve kullanım eşleşmesi",note:"Rota/su adı resmî amatör kullanım kaynağında açıkça eşleşiyor; mikro kıyı noktası ayrıca saha kontrolü gerektirir."},
    legal:legalCandidate?strongest(existing?.legal,legalCandidate):(existing?.legal as ConfidenceDimension),
    access:existing?.access||{level:"unverified",label:"Erişim saha teyidi bekliyor",note:"Resmî amatör kullanım kaydı son araç yolu, park veya her kıyı cebine kamusal giriş garantisi değildir."},
    species:speciesCandidate?strongest(existing?.species,speciesCandidate):(existing?.species||{level:"unverified",label:"Tür kanıtı ayrı değerlendiriliyor",note:"Amatör kullanım kanıtı tür listesi veya av başarısı garantisi değildir."}),
    field:existing?.field||{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel kıyı riski hareket günü yeniden kontrol edilmelidir."},
    reviewedAt:provinceEvidenceReviewMeta.reviewedAt,
  };
};

export const applyProvinceConfidenceAudit=(routeMap:Map<string,EnrichedMera>):ProvinceConfidenceAuditStats=>{
  const reviewedProvinceSet=new Set<string>(reviewedProvinces20260815);
  const activeProvinceSet=new Set([...routeMap.values()].map((route)=>route.province));
  const missingProvinceReviews=[...activeProvinceSet].filter((province)=>!reviewedProvinceSet.has(province));
  if(missingProvinceReviews.length)throw new Error(`İl balıkçılık güven taraması eksik: ${missingProvinceReviews.join(", ")}`);
  const missingEvidenceBuckets=[...reviewedProvinceSet].filter((province)=>!(province in provinceFisheriesEvidence20260815));
  if(missingEvidenceBuckets.length)throw new Error(`İl kanıt kovası eksik: ${missingEvidenceBuckets.join(", ")}`);

  const retiredSlugs:string[]=[];
  for(const retired of retiredRouteEvidence20260815){
    if(routeMap.delete(retired.slug))retiredSlugs.push(retired.slug);
  }

  const confidenceUpgrades:string[]=[];
  let exactRouteEvidenceHits=0;
  let officialAmateurUseHits=0;
  let exactSpeciesEvidenceHits=0;
  let unchangedRoutes=0;

  for(const [slug,route] of routeMap.entries()){
    const before=route.confidence;
    const provinceEvidence=provinceFisheriesEvidence20260815[route.province]||[];
    const routeEvidence=provinceEvidence.filter((item)=>item.scope==="route"&&(item.routeSlugs||[]).includes(slug));
    const officialUse=routeEvidence.filter((item)=>item.officialAmateurUse===true&&item.legalEffect==="amateur-use");
    const speciesEvidence=routeEvidence.filter((item)=>(item.kind==="stocking"||item.kind==="species-stock")&&(item.species?.length||0)>0);
    exactRouteEvidenceHits+=routeEvidence.length;
    officialAmateurUseHits+=officialUse.length;
    exactSpeciesEvidenceHits+=speciesEvidence.length;

    const hasCoordinates=Number.isFinite(route.lat)&&Number.isFinite(route.lng);
    const after:EnrichedMera["confidence"]=before==="C"&&hasCoordinates&&officialUse.length?"B":before;
    if(before==="C"&&after==="B")confidenceUpgrades.push(slug);

    const existingFishEvidence=route.fishEvidence||[];
    const extraFishEvidence=speciesEvidence.flatMap(evidenceToFish);
    const mergedFishEvidence=[...new Map([...existingFishEvidence,...extraFishEvidence].filter((item)=>item?.sourceUrl&&item?.name).map((item)=>[`${canonicalSpecies(item.name)}|${item.sourceUrl}`,item])).values()];
    const sources=officialUse.length?uniqueSources([...(route.sources||[]),...officialUse.map(evidenceToSource)]):route.sources;
    const profile=buildProfile(route,after,officialUse,speciesEvidence);
    const visibleEvidenceChange=after!==before||officialUse.length>0||speciesEvidence.length>0;
    if(!visibleEvidenceChange)unchangedRoutes+=1;

    const review:ProvinceEvidenceReview={
      province:route.province,
      reviewedAt:provinceEvidenceReviewMeta.reviewedAt,
      reviewedCategories:[...provinceEvidenceReviewMeta.reviewedCategories],
      acceptedProvinceEvidenceCount:provinceEvidence.length,
      exactRouteEvidenceCount:routeEvidence.length,
      exactOfficialAmateurUseCount:officialUse.length,
      exactSpeciesEvidenceCount:speciesEvidence.length,
      confidenceBefore:before,
      confidenceAfter:after,
      note:officialUse.length
        ?"Rota adı resmî amatör kullanım kaynağıyla eşleşti. Genel güven yalnız C→B yönünde yükseltildi; saha teyidi olmadığı için A verilmedi."
        :routeEvidence.length
          ?"Rota özelindeki stok/tür veya kamu kaydı güven profilinin ilgili boyutuna işlendi; amatör kullanım kanıtı yoksa genel güven seviyesi yükseltilmedi."
          :provinceEvidence.length
            ?"İldeki balıklandırma, organizasyon/destek ve kamu duyuruları tarandı; il düzeyi bulgular belirli rotaya taşınmadığı için genel güven seviyesi değiştirilmedi."
            :"İl için Tarım ve Orman/kamu kaynakları üzerinden istenen kanıt sınıfları tarandı; bu turda rotaya güvenle bağlanabilecek ek kanıt bulunmadı."
    };

    const audited:ProvinceAuditedMera={
      ...route,
      confidence:after,
      confidenceProfile:profile,
      fishEvidence:mergedFishEvidence,
      sources,
      researchedAt:route.researchedAt,
      updatedAt:visibleEvidenceChange?provinceEvidenceReviewMeta.reviewedAt:route.updatedAt,
      verification:after!==before
        ?`${route.verification} İl bazlı derin güven taramasında rota özelindeki resmî amatör kullanım kanıtıyla Güven ${after} olarak yeniden değerlendirildi; saha teyidi yok.`
        :route.verification,
      provinceEvidenceReviewedAt:provinceEvidenceReviewMeta.reviewedAt,
      provinceEvidenceReview:review,
    };
    routeMap.set(slug,audited);
  }

  const auditedRoutes=[...routeMap.values()] as ProvinceAuditedMera[];
  const missingRouteAudit=auditedRoutes.filter((route)=>route.provinceEvidenceReviewedAt!==provinceEvidenceReviewMeta.reviewedAt);
  if(missingRouteAudit.length)throw new Error(`İl kanıt taramasından geçmeyen aktif rota var: ${missingRouteAudit.slice(0,20).map((route)=>route.slug).join(", ")}`);
  const invalidUpgrade=auditedRoutes.filter((route)=>route.provinceEvidenceReview.confidenceBefore==="C"&&route.confidence==="B"&&route.provinceEvidenceReview.exactOfficialAmateurUseCount<1);
  if(invalidUpgrade.length)throw new Error(`Rota özelinde resmî amatör kullanım kanıtı olmadan B seviyesine yükselen rota var: ${invalidUpgrade.map((route)=>route.slug).join(", ")}`);
  const createdA=auditedRoutes.filter((route)=>route.provinceEvidenceReview.confidenceBefore!=="A"&&route.confidence==="A");
  if(createdA.length)throw new Error(`Saha teyidi olmadan yeni A seviyesi üretilemez: ${createdA.map((route)=>route.slug).join(", ")}`);

  const stats:ProvinceConfidenceAuditStats={
    reviewedRoutes:auditedRoutes.length,
    reviewedProvinces:activeProvinceSet.size,
    provincesWithAcceptedEvidence:[...activeProvinceSet].filter((province)=>(provinceFisheriesEvidence20260815[province]||[]).length>0).length,
    exactRouteEvidenceHits,
    officialAmateurUseHits,
    exactSpeciesEvidenceHits,
    confidenceUpgrades,
    retiredSlugs,
    unchangedRoutes,
  };
  if(typeof process!=="undefined"&&process.env.CI==="true")console.info(`[province-confidence-audit] ${JSON.stringify(stats)}`);
  return stats;
};
