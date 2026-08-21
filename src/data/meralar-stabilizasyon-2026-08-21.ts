import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

export const ctrFirsatlari20260821 = [
  { slug:"sarimsakli-baraji-genel-amator-kiyi", query:"sarımsaklı barajı yol tarifi", impressions:544, clicks:1, ctr:0.18, position:8.67 },
  { slug:"yamula-baraji-resmi-amator-balikcilik-alani", query:"yamula barajı yol tarifi", impressions:126, clicks:0, ctr:0, position:7.22 },
  { slug:"gumusoren-baraji-genel-amator-kiyi", query:"Gümüşören Barajı / konum-yol tarifi niyeti", impressions:56, clicks:0, ctr:0, position:5.39 },
  { slug:"seyhli-goleti-genel-amator-kiyi", query:"şeyhli göleti yol tarifi", impressions:10, clicks:0, ctr:0, position:5.40 },
  { slug:"ulusal-adana-nergizlik-baraj-golu", query:"nergizlik barajı yol tarifi", impressions:14, clicks:0, ctr:0, position:6.93 },
  { slug:"ulusal-malatya-kapikaya-baraj-golu-malatya", query:"kapıkaya barajı yol tarifi", impressions:10, clicks:0, ctr:0, position:5.90 },
  { slug:"ulusal-adana-kozan-baraj-golu", query:"Kozan Baraj Gölü / konum niyeti", impressions:75, clicks:0, ctr:0, position:6.29 },
  { slug:"sariyar-baraji-softabogazi-amator-alani", query:"sarıyar barajı yol tarifi", impressions:19, clicks:0, ctr:0, position:8.68 },
] as const;

export const dKaliteHedefleri20260821 = [
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-erzurum-kuzgun-baraj-golu-erzurum",
  "ulusal-erzurum-kapikaya-baraj-golu-erzurum",
  "ulusal-erzurum-koycegiz-baraj-golu-erzurum",
  "ulusal-erzurum-olur-baraj-golu",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-bayburt-lori-deresi",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
] as const;

export const stabilizasyonHedefleri20260821 = [
  ...ctrFirsatlari20260821.map((item)=>item.slug),
  ...dKaliteHedefleri20260821,
] as const;

const erzurumCevreRaporu = "https://webdosya.csb.gov.tr/db/ced/icerikler/erzurum_-cdr2023-20240918101359.pdf";
const uniqueSources=(items:ResearchSource[])=>[...new Map(items.filter((item)=>item?.url).map((item)=>[item.url,item])).values()];

export const applyStabilizasyon20260821=(routeMap:Map<string,EnrichedMera>)=>{
  const unique=[...new Set(stabilizasyonHedefleri20260821)];
  if(unique.length!==17)throw new Error(`21 Ağustos stabilizasyon hedefi 17 benzersiz rota olmalı: ${unique.length}`);
  for(const slug of unique)if(!routeMap.has(slug))throw new Error(`21 Ağustos stabilizasyon hedefi aktif değil: ${slug}`);
  for(const slug of dKaliteHedefleri20260821){
    const route=routeMap.get(slug)!;
    if(route.confidence!=="D")throw new Error(`21 Ağustos D bakım hedefi artık D değil: ${slug} (${route.confidence})`);
  }

  const officialSource:ResearchSource={
    label:"Erzurum 2023 Çevre Durum Raporu · DSİ 8. Bölge 2024 su varlıkları",
    url:erzurumCevreRaporu,
    note:"Resmî rapor Demirdöven'i baraj, Kapıkaya ve Köyceğiz'i ise gölet olarak listeler; tesis kimliği ve su türü için kullanılır, kıyı erişimi veya av izni değildir."
  };

  const demirdoven=routeMap.get("ulusal-erzurum-demirdoven-baraj-golu")!;
  routeMap.set(demirdoven.slug,{
    ...demirdoven,
    updatedAt:"2026-08-21",
    researchStatus:"Rota kimliği DSİ verisini aktaran güncel resmî çevre raporuyla yeniden kontrol edildi; mikro kıyı erişimi ve güncel amatör kullanım teyidi bulunmadığı için Güven D korunur.",
    researchSummary:"Demirdöven Barajı resmî DSİ su varlığı listesinde doğrulanıyor. Bu kaynak baraj kimliğini güçlendirir; araçla son yaklaşım, kamusal kıyı girişi ve güncel amatör av uygunluğu için ek rota-özel kanıt hâlâ gerekir.",
    sources:uniqueSources([...(demirdoven.sources||[]),officialSource]),
    confidence:"D",
  });

  for(const [slug,name] of [
    ["ulusal-erzurum-kapikaya-baraj-golu-erzurum","Kapıkaya Göleti"],
    ["ulusal-erzurum-koycegiz-baraj-golu-erzurum","Köyceğiz Göleti"],
  ] as const){
    const previous=routeMap.get(slug)!;
    routeMap.set(slug,{
      ...previous,
      name,
      waterType:"Gölet",
      updatedAt:"2026-08-21",
      summary:`${name}, Erzurum için resmî DSİ su varlığı listesinde gölet olarak doğrulanan ancak kamusal mikro kıyı erişimi ve güncel amatör av uygunluğu ayrıca teyit edilmesi gereken genel konum rotasıdır.`,
      navigationVerified:false,
      researchStatus:"Resmî DSİ tesis sınıfı yeniden kontrol edildi; önceki 'baraj gölü' adlandırması 'gölet' olarak düzeltildi. Mikro kıyı erişimi ve güncel amatör kullanım kanıtı bulunmadığı için Güven D korunur.",
      researchSummary:`${name} için tesis kimliği ve su türü resmî raporla güçlendirildi. Son park/kıyı girişi, mülkiyet, işletme güvenliği ve güncel av uygunluğu doğrulanmadan doğrudan yol tarifi verilmez.`,
      sources:uniqueSources([...(previous.sources||[]),officialSource]),
      confidence:"D",
    });
  }

  return {
    reviewed:unique.length,
    ctrReviewed:ctrFirsatlari20260821.length,
    dReviewed:dKaliteHedefleri20260821.length,
    dMateriallyImproved:3,
    confidenceUpgrades:0,
    newRoutes:0,
    remainingD:[...routeMap.values()].filter((route)=>route.confidence==="D").length,
  };
};
