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
  probabilityModel:"probability-v2";
  note:string;
};

export type ProvinceAuditedMera=EnrichedMera&{
  provinceEvidenceReviewedAt:string;
  provinceEvidenceReview:ProvinceEvidenceReview;
  probabilityModel:"probability-v2";
};

export type ProvinceConfidenceAuditStats={
  reviewedRoutes:number;
  reviewedProvinces:number;
  provincesWithAcceptedEvidence:number;
  exactRouteEvidenceHits:number;
  officialAmateurUseHits:number;
  exactSpeciesEvidenceHits:number;
  confidenceUpgrades:string[];
  stockingProbabilityUpgrades:string[];
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
const minConfidence=(before:EnrichedMera["confidence"],candidate:EnrichedMera["confidence"]):EnrichedMera["confidence"]=>{
  const rank={D:0,C:1,B:2,A:3};
  return rank[candidate]>rank[before]?candidate:before;
};
const evidenceToSource=(item:ProvinceFisheriesEvidence):ResearchSource=>({label:item.label,url:item.url,note:item.note});
const evidenceToFish=(item:ProvinceFisheriesEvidence):FishEvidence[] =>
  (item.species||[]).map((name)=>({
    name,
    scientificName:null,
    evidenceLevel:item.kind==="stocking"
      ?"Güçlü olasılık · resmî balıklandırma kaydı"
      :"Doğrulanmış tür/stok kaydı",
    sourceLabel:item.label,
    sourceUrl:item.url,
    note:item.kind==="stocking"
      ?`${item.note} Balıklandırma kaydı eski tarihli olsa bile, aksini gösteren güçlü bir veri yoksa türün bu su kütlesinde hâlâ bulunabileceğine ilişkin geçerli olasılık kanıtı sayılır. Güncel av başarısı veya avlanma izni anlamına gelmez.`
      :`${item.note} Bu kayıt türün ilgili suyla bağını güçlü biçimde destekler; güncel av başarısı veya avlanma izni anlamına gelmez.`,
    recordCount:null,
    distanceKm:null,
  }));

const buildProfile=(
  route:EnrichedMera,
  overall:EnrichedMera["confidence"],
  officialUse:ProvinceFisheriesEvidence[],
  speciesEvidence:ProvinceFisheriesEvidence[],
):ConfidenceProfile|undefined=>{
  const existing=route.confidenceProfile;
  if(!existing&&!officialUse.length&&!speciesEvidence.length)return undefined;

  const supported=new Set(speciesEvidence.flatMap((item)=>item.species||[]).map(canonicalSpecies));
  const routeFish=route.fish.map(canonicalSpecies);
  const matched=routeFish.filter((name)=>supported.has(name));
  const hasStocking=speciesEvidence.some((item)=>item.kind==="stocking");

  const speciesCandidate:ConfidenceDimension|undefined=speciesEvidence.length&&routeFish.length
    ?matched.length===routeFish.length
      ?{
        level:"strong",
        label:hasStocking?"Güçlü tür olasılığı · resmî balıklandırma":"Rota özelinde güçlü tür/stok kanıtı",
        note:hasStocking
          ?"Yayımlanan türlerin tamamı rota özelindeki resmî balıklandırma veya stok kayıtlarıyla eşleşiyor. Kayıdın eski olması tek başına olasılığı düşürmez; karşı kanıt varsa ayrıca değerlendirilir."
          :"Yayımlanan türlerin tamamı bu su varlığına ait resmî tür/stok kayıtlarıyla eşleşiyor; kıyıdan av garantisi değildir.",
      }
      :matched.length
        ?{
          level:"partial",
          label:hasStocking?"Kısmi tür olasılığı · resmî balıklandırma":"Rota özelinde kısmi tür/stok kanıtı",
          note:"Yayımlanan türlerden en az biri rota özelindeki resmî tür veya balıklandırma kaydıyla destekleniyor; diğer türler kendi kanıtlarıyla değerlendirilmelidir.",
        }
        :undefined
    :undefined;

  const legalCandidate:ConfidenceDimension|undefined=officialUse.length
    ?{
      level:"strong",
      label:"Rota özelinde resmî amatör kullanım kanıtı",
      note:"Mevcut 6/2 dönemi içindeki resmî kaynak bu su/rotada amatör olta kullanımını açıkça kaydediyor. Bu, her kıyı cebine giriş garantisi değildir; dönem, işletme, ticari saha ve yerel tabela ayrıca geçerlidir.",
    }
    :undefined;

  return{
    model:"evidence-v1",
    overall,
    identity:existing?.identity||{
      level:officialUse.length||speciesEvidence.length?"strong":"partial",
      label:officialUse.length||speciesEvidence.length?"Resmî rota/su eşleşmesi":"Rota kimliği destekleniyor",
      note:officialUse.length||speciesEvidence.length
        ?"Rota veya su adı resmî rota-özel kanıtla eşleşiyor; mikro kıyı noktası ayrıca saha kontrolü gerektirir."
        :"Su adı ve genel konum kaynaklarla destekleniyor; mikro kıyı noktası ayrıca doğrulanmalıdır.",
    },
    legal:legalCandidate
      ?strongest(existing?.legal,legalCandidate)
      :(existing?.legal||{
        level:"partial",
        label:"Genel mevzuat kontrolü",
        note:"Balıklandırma veya tür kaydı avlanma izni değildir. Güncel 6/2 Tebliğ, il kararları, kiralama/işletme durumu ve saha tabelaları ayrıca uygulanır.",
      }),
    access:existing?.access||{
      level:"unverified",
      label:"Erişim saha teyidi bekliyor",
      note:"Resmî tür veya balıklandırma kaydı son araç yolu, park veya her kıyı cebine kamusal giriş garantisi değildir.",
    },
    species:speciesCandidate
      ?strongest(existing?.species,speciesCandidate)
      :(existing?.species||{
        level:"unverified",
        label:"Tür olasılığı ayrı değerlendiriliyor",
        note:"Rota özelinde yeterli tür kanıtı bulunmadığında tür listesi olasılık düzeyinde tutulur ve yeni kayıtlarla güncellenir.",
      }),
    field:existing?.field||{
      level:"unverified",
      label:"Saha doğrulaması yok",
      note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel kıyı riski hareket günü yeniden kontrol edilmelidir.",
    },
    reviewedAt:provinceEvidenceReviewMeta.reviewedAt,
  };
};

const confidenceText=(level:EnrichedMera["confidence"])=>{
  if(level==="A")return "çok yüksek güven";
  if(level==="B")return "yüksek güven";
  if(level==="C")return "destekli güven";
  return "sınırlı doğrulama";
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
  const stockingProbabilityUpgrades:string[]=[];
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
    const stockingEvidence=speciesEvidence.filter((item)=>item.kind==="stocking");

    exactRouteEvidenceHits+=routeEvidence.length;
    officialAmateurUseHits+=officialUse.length;
    exactSpeciesEvidenceHits+=speciesEvidence.length;

    const hasCoordinates=Number.isFinite(route.lat)&&Number.isFinite(route.lng);
    let after=before;

    if(hasCoordinates){
      if(officialUse.length){
        after=minConfidence(after,"B");
      }else if(speciesEvidence.length){
        // probability-v2: rota özelindeki resmî tür/stok veya balıklandırma kaydı,
        // avlağın gerçek bir balıkçılık rotası olduğuna güçlü masa başı kanıt sayılır.
        // Hukuk ve erişim boyutları ayrı kalır; A seviyesi saha teyidi olmadan verilmez.
        after=minConfidence(after,before==="D"?"C":"B");
      }
    }

    if(before!==after){
      confidenceUpgrades.push(slug);
      if(stockingEvidence.length&&!officialUse.length)stockingProbabilityUpgrades.push(slug);
    }

    const existingFishEvidence=route.fishEvidence||[];
    const extraFishEvidence=speciesEvidence.flatMap(evidenceToFish);
    const mergedFishEvidence=[
      ...new Map(
        [...existingFishEvidence,...extraFishEvidence]
          .filter((item)=>item?.sourceUrl&&item?.name)
          .map((item)=>[`${canonicalSpecies(item.name)}|${item.sourceUrl}`,item]),
      ).values(),
    ];

    const sources=routeEvidence.length
      ?uniqueSources([...(route.sources||[]),...routeEvidence.map(evidenceToSource)])
      :route.sources;

    const profile=buildProfile(route,after,officialUse,speciesEvidence);
    const visibleEvidenceChange=after!==before||routeEvidence.length>0;
    if(!visibleEvidenceChange)unchangedRoutes+=1;

    const probabilityReason=officialUse.length
      ?"Rota adı güncel dönem içindeki resmî amatör kullanım kaydıyla eşleşti."
      :speciesEvidence.length
        ?"Rota adı resmî tür/stok veya balıklandırma kaydıyla eşleşti. Bu kanıt, türün günümüzde bulunabileceğine dair güçlü olasılık olarak kabul edildi; kayıt eski diye otomatik değer kaybetmedi."
        :routeEvidence.length
          ?"Rota özelindeki kamu kaydı güven profilinin ilgili boyutuna işlendi."
          :provinceEvidence.length
            ?"İldeki resmî balıkçılık kaynakları tarandı; rota adına güvenle bağlanamayan il düzeyi veriler genel güveni yükseltmedi."
            :"İl için belirlenen resmî kanıt sınıfları tarandı; bu turda rota özelinde ek kanıt bulunmadı.";

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
      probabilityModel:"probability-v2",
      note:`${probabilityReason} Balık bulunma olasılığı, avlanma izni ve kıyı erişimi birbirinden ayrı değerlendirilir.`,
    };

    const upgradedSummary=after!==before
      ?`${route.name}, rota özelindeki resmî balıkçılık kanıtlarıyla ${confidenceText(after)} düzeyinde değerlendirilir. Tür bulunma olasılığı ile güncel avlanma izni ve kıyı erişimi ayrı doğrulama boyutlarıdır.`
      :route.summary;

    const upgradedIntro=after!==before
      ?[
        `${route.name}, Olta Atlası olasılık-temelli güven modeliyle Güven ${after} düzeyinde değerlendirilir. Rota özelindeki resmî tür, stok, balıklandırma veya amatör kullanım kayıtları masa başı güveni yükseltir.`,
        `Geçmiş tarihli resmî balıklandırma kayıtları, aksini gösteren güçlü bir veri yoksa türün bugün de bulunabileceğine ilişkin geçerli kanıt sayılır. Bu değerlendirme av garantisi vermez ve güncel 6/2 Tebliğ, il kararları, saha tabelaları, erişim ve mülkiyet koşullarının ayrıca kontrol edilmesi gereğini ortadan kaldırmaz.`,
      ]
      :route.longIntro;

    const audited:ProvinceAuditedMera={
      ...route,
      confidence:after,
      confidenceProfile:profile,
      fishEvidence:mergedFishEvidence,
      sources,
      summary:upgradedSummary,
      longIntro:upgradedIntro,
      researchedAt:route.researchedAt,
      updatedAt:visibleEvidenceChange?provinceEvidenceReviewMeta.reviewedAt:route.updatedAt,
      verification:visibleEvidenceChange
        ?`${route.verification} Olasılık-temelli güven modeli v2 uygulandı: resmî tür/stok ve balıklandırma kayıtları türün bulunabilirliği için geçerli kanıt sayılır; kayıt yaşı tek başına güveni düşürmez. Av izni, erişim ve saha koşulları ayrı değerlendirilir.`
        :route.verification,
      provinceEvidenceReviewedAt:provinceEvidenceReviewMeta.reviewedAt,
      provinceEvidenceReview:review,
      probabilityModel:"probability-v2",
    };
    routeMap.set(slug,audited);
  }

  const auditedRoutes=[...routeMap.values()] as ProvinceAuditedMera[];
  const missingRouteAudit=auditedRoutes.filter((route)=>route.provinceEvidenceReviewedAt!==provinceEvidenceReviewMeta.reviewedAt);
  if(missingRouteAudit.length)throw new Error(`İl kanıt taramasından geçmeyen aktif rota var: ${missingRouteAudit.slice(0,20).map((route)=>route.slug).join(", ")}`);

  const invalidBUpgrade=auditedRoutes.filter((route)=>
    route.provinceEvidenceReview.confidenceBefore!=="B"&&
    route.provinceEvidenceReview.confidenceBefore!=="A"&&
    route.confidence==="B"&&
    route.provinceEvidenceReview.exactOfficialAmateurUseCount<1&&
    route.provinceEvidenceReview.exactSpeciesEvidenceCount<1
  );
  if(invalidBUpgrade.length)throw new Error(`Rota özelinde resmî amatör kullanım veya tür/stok kanıtı olmadan B seviyesine yükselen rota var: ${invalidBUpgrade.map((route)=>route.slug).join(", ")}`);

  const createdA=auditedRoutes.filter((route)=>route.provinceEvidenceReview.confidenceBefore!=="A"&&route.confidence==="A");
  if(createdA.length)throw new Error(`Saha teyidi olmadan yeni A seviyesi üretilemez: ${createdA.map((route)=>route.slug).join(", ")}`);

  const stockingRaisedLegal=auditedRoutes.filter((route)=>{
    const review=route.provinceEvidenceReview;
    return review.exactSpeciesEvidenceCount>0&&review.exactOfficialAmateurUseCount===0&&route.confidenceProfile?.legal?.label==="Rota özelinde resmî amatör kullanım kanıtı";
  });
  if(stockingRaisedLegal.length)throw new Error(`Balıklandırma/tür kanıtı hukuki kullanım kanıtına dönüştürülemez: ${stockingRaisedLegal.map((route)=>route.slug).join(", ")}`);

  const stats:ProvinceConfidenceAuditStats={
    reviewedRoutes:auditedRoutes.length,
    reviewedProvinces:activeProvinceSet.size,
    provincesWithAcceptedEvidence:[...activeProvinceSet].filter((province)=>(provinceFisheriesEvidence20260815[province]||[]).length>0).length,
    exactRouteEvidenceHits,
    officialAmateurUseHits,
    exactSpeciesEvidenceHits,
    confidenceUpgrades,
    stockingProbabilityUpgrades,
    retiredSlugs,
    unchangedRoutes,
  };
  if(typeof process!=="undefined"&&process.env.CI==="true")console.info(`[province-confidence-audit] ${JSON.stringify(stats)}`);
  return stats;
};
