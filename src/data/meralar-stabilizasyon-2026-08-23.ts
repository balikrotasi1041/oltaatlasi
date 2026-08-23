import type { EnrichedMera } from "./meralar-tumu-core";

export const ctrFirsatlari20260823 = [
  { slug:"sarimsakli-baraji-genel-amator-kiyi", query:"sarımsaklı barajı yol tarifi", impressions:544, clicks:1, ctr:0.18, position:8.67 },
  { slug:"yamula-baraji-resmi-amator-balikcilik-alani", query:"yamula barajı yol tarifi", impressions:126, clicks:0, ctr:0, position:7.22 },
  { slug:"koyunbaba-baraji-demirci-oyumigde-amator-alani", query:"koyunbaba barajı yol tarifi", impressions:28, clicks:0, ctr:0, position:8.86 },
  { slug:"ulusal-nigde-gumusler-baraj-golu", query:"gümüşler barajı yol tarifi", impressions:20, clicks:0, ctr:0, position:8.65 },
  { slug:"sariyar-baraji-softabogazi-amator-alani", query:"sarıyar barajı yol tarifi", impressions:19, clicks:0, ctr:0, position:8.68 },
  { slug:"cengelkoy-sahili", query:"çengelköy sahil yol tarifi", impressions:19, clicks:0, ctr:0, position:10.47 },
  { slug:"bilecik-kizildamlar-baraj-goleti", query:"kızıldamlar barajı yol tarifi", impressions:16, clicks:0, ctr:0, position:9.81 },
  { slug:"ulusal-adana-nergizlik-baraj-golu", query:"nergizlik barajı yol tarifi", impressions:14, clicks:0, ctr:0, position:6.93 },
] as const;

export const dKaliteHedefleri20260823 = [
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
  "ulusal-cankiri-karadere-baraj-golu-cankiri",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti",
  "ulusal-bayburt-lori-deresi",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-erzurum-olur-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
] as const;

export const stabilizasyonHedefleri20260823 = [
  ...ctrFirsatlari20260823.map((item)=>item.slug),
  ...dKaliteHedefleri20260823,
] as const;

export const applyStabilizasyon20260823=(routeMap:Map<string,EnrichedMera>)=>{
  const unique=[...new Set(stabilizasyonHedefleri20260823)];
  if(unique.length!==17)throw new Error(`23 Ağustos stabilizasyon hedefi 17 benzersiz rota olmalı: ${unique.length}`);
  for(const slug of unique)if(!routeMap.has(slug))throw new Error(`23 Ağustos stabilizasyon hedefi aktif değil: ${slug}`);
  for(const slug of dKaliteHedefleri20260823){
    const route=routeMap.get(slug)!;
    if(route.confidence!=="D")throw new Error(`23 Ağustos D bakım hedefi artık D değil: ${slug} (${route.confidence})`);
  }

  // Bu turda sırf dosyada değişiklik olsun diye görünür metin veya confidence şişirilmez.
  // Search Console fırsatları mevcut title/H1/konum katmanları açısından denetlenir;
  // doğrulanmış yeni mikro erişim kanıtı olmadan directions pini üretilmez.
  const stats={
    reviewed:unique.length,
    ctrReviewed:ctrFirsatlari20260823.length,
    dReviewed:dKaliteHedefleri20260823.length,
    dMateriallyImproved:0,
    confidenceUpgrades:0,
    newRoutes:0,
    remainingD:[...routeMap.values()].filter((route)=>route.confidence==="D").length,
  };
  console.log("[stabilizasyon-2026-08-23]",JSON.stringify(stats));
  return stats;
};
