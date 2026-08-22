import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

export const ctrFirsatlari20260822 = [
  { slug:"sarimsakli-baraji-genel-amator-kiyi", query:"sarımsaklı barajı yol tarifi", impressions:544, clicks:1, ctr:0.18, position:8.67 },
  { slug:"yamula-baraji-resmi-amator-balikcilik-alani", query:"yamula barajı yol tarifi", impressions:126, clicks:0, ctr:0, position:7.22 },
  { slug:"koyunbaba-baraji-demirci-oyumigde-amator-alani", query:"koyunbaba barajı yol tarifi", impressions:28, clicks:0, ctr:0, position:8.86 },
  { slug:"sariyar-baraji-softabogazi-amator-alani", query:"sarıyar barajı yol tarifi", impressions:19, clicks:0, ctr:0, position:8.68 },
  { slug:"ulusal-adana-nergizlik-baraj-golu", query:"nergizlik barajı yol tarifi", impressions:14, clicks:0, ctr:0, position:6.93 },
  { slug:"seyhli-goleti-genel-amator-kiyi", query:"şeyhli göleti yol tarifi", impressions:10, clicks:0, ctr:0, position:5.40 },
  { slug:"ulusal-malatya-kapikaya-baraj-golu-malatya", query:"kapıkaya barajı yol tarifi", impressions:10, clicks:0, ctr:0, position:5.90 },
  { slug:"gumusoren-baraji-genel-amator-kiyi", query:"gümüşören barajı yol tarifi", impressions:4, clicks:0, ctr:0, position:3.50 },
] as const;

export const dKaliteHedefleri20260822 = [
  "ulusal-amasya-destek-baraj-golu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
  "ulusal-cankiri-karadere-baraj-golu-cankiri",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti",
  "ulusal-adiyaman-ataturk-baraj-golu",
  "ulusal-adiyaman-karahuyuk-goleti",
  "ulusal-adiyaman-sirimtas-baraj-golu",
] as const;

export const stabilizasyonHedefleri20260822 = [
  ...ctrFirsatlari20260822.map((item)=>item.slug),
  ...dKaliteHedefleri20260822,
] as const;

const amasyaKtb = "https://amasya.ktb.gov.tr/TR-59470/barajlar.html";
const dsi7 = "https://bolge07.dsi.gov.tr/Sayfa/Detay/1051";
const ardahanKtb = "https://ardahan.ktb.gov.tr/TR-55765/nehirler.html";
const ardahanCevre2024 = "https://webdosya.csb.gov.tr/db/ced/icerikler/ardahan_-cdr-2024-20250917092626.pdf";
const uniqueSources=(items:ResearchSource[])=>[...new Map(items.filter((item)=>item?.url).map((item)=>[item.url,item])).values()];

export const applyStabilizasyon20260822=(routeMap:Map<string,EnrichedMera>)=>{
  const unique=[...new Set(stabilizasyonHedefleri20260822)];
  if(unique.length!==17)throw new Error(`22 Ağustos stabilizasyon hedefi 17 benzersiz rota olmalı: ${unique.length}`);
  for(const slug of unique)if(!routeMap.has(slug))throw new Error(`22 Ağustos stabilizasyon hedefi aktif değil: ${slug}`);
  for(const slug of dKaliteHedefleri20260822){
    const route=routeMap.get(slug)!;
    if(route.confidence!=="D")throw new Error(`22 Ağustos D bakım hedefi artık D değil: ${slug} (${route.confidence})`);
  }

  const destek=routeMap.get("ulusal-amasya-destek-baraj-golu")!;
  routeMap.set(destek.slug,{
    ...destek,
    updatedAt:"2026-08-22",
    researchStatus:"Rota kimliği iki ayrı resmî kamu kaynağıyla yeniden kontrol edildi. Amasya İl Kültür ve Turizm Müdürlüğü tesisi 'Destek Barajı', DSİ 7. Bölge ise hem 'Taşova Destek Barajı Sulaması' hem 'Destek Göleti ve Sulama Tesisi' adlarıyla kaydediyor. Resmî adlandırma farkı not edildi; mikro kıyı erişimi ve güncel amatör kullanım kanıtı yetersiz olduğu için Güven D korunur.",
    researchSummary:"Destek su yapısının Taşova/Destek'teki resmî tesis kimliği güçlendirildi. Kamu kaynaklarındaki baraj/gölet adlandırma farkı kullanıcıya kesinleştirilmiş tek bir teknik sınıf gibi sunulmaz. Araçla son yaklaşım, kamusal kıyı girişi, park ve güncel av uygunluğu için rota-özel kanıt hâlâ gerekir.",
    sources:uniqueSources([...(destek.sources||[]),
      {label:"Amasya İl Kültür ve Turizm Müdürlüğü · Barajlar",url:amasyaKtb,note:"Destek Beldesi'ndeki tesisi Destek Barajı olarak ve sulama amaçlı kamu su yapısı şeklinde tanımlar; kıyı erişimi veya av izni değildir."},
      {label:"DSİ 7. Bölge Müdürlüğü · İşletmedeki sulamalar",url:dsi7,note:"Taşova Destek Barajı Sulaması ile Destek Göleti ve Sulama Tesisi kayıtlarını birlikte gösterir; resmî tesis kimliği/adlandırma karşılaştırması için kullanılır."},
    ]),
    confidence:"D",
  });

  const kura=routeMap.get("ulusal-ardahan-kura-nehri-ardahan-hatti")!;
  routeMap.set(kura.slug,{
    ...kura,
    updatedAt:"2026-08-22",
    researchStatus:"Kura Nehri'nin Ardahan ilindeki rota kimliği güncel resmî il kaynaklarıyla yeniden doğrulandı. İl Kültür ve Turizm Müdürlüğü Kura'nın il sınırları içindeki uzunluğunu ve başlangıç/bitiş tarifini verir; 2024 İl Çevre Durum Raporu havza ve su kaynağı bağlamını destekler. Bu kaynaklar mikro kıyı girişini doğrulamadığı için Güven D korunur.",
    researchSummary:"Ardahan Kura hattının nehir kimliği ve il içindeki genel koridoru resmî kaynaklarla daha güçlüdür. Ancak hangi kıyı cebinin kamusal ve güvenli olduğu, araçla son yaklaşım, mevsimsel su seviyesi ve güncel amatör av uygunluğu rota özelinde ayrıca doğrulanmalıdır.",
    sources:uniqueSources([...(kura.sources||[]),
      {label:"Ardahan İl Kültür ve Turizm Müdürlüğü · Nehirler",url:ardahanKtb,note:"Kura Nehri'nin Ardahan il sınırlarındaki genel güzergâh ve uzunluk bilgisini verir; mikro kıyı erişimi değildir."},
      {label:"Ardahan 2024 İl Çevre Durum Raporu",url:ardahanCevre2024,note:"Kura havzasının güncel resmî çevresel/su kaynağı bağlamını destekler; av izni veya güvenli kıyı pini olarak kullanılmaz."},
    ]),
    confidence:"D",
  });

  const stats={
    reviewed:unique.length,
    ctrReviewed:ctrFirsatlari20260822.length,
    dReviewed:dKaliteHedefleri20260822.length,
    dMateriallyImproved:2,
    confidenceUpgrades:0,
    newRoutes:0,
    remainingD:[...routeMap.values()].filter((route)=>route.confidence==="D").length,
  };
  console.log("[stabilizasyon-2026-08-22]",JSON.stringify(stats));
  return stats;
};
