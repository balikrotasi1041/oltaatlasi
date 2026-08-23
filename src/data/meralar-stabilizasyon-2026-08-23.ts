import type { EnrichedMera } from "./meralar-tumu-core";

// Search Console exportu 23 Ağustos 2026'da alındı; performans verisi 21 Ağustos'a kadar gelir.
// Konum niyetinde yüksek gösterim + 3-15 pozisyon + düşük/sıfır CTR önceliklendirildi.
export const ctrFirsatlari20260823 = [
  { slug:"sarimsakli-baraji-genel-amator-kiyi", query:"sarımsaklı barajı yol tarifi", impressions:624, clicks:1, ctr:0.16, position:8.74 },
  { slug:"yamula-baraji-resmi-amator-balikcilik-alani", query:"yamula barajı yol tarifi", impressions:182, clicks:0, ctr:0, position:7.13 },
  { slug:"koyunbaba-baraji-demirci-oyumigde-amator-alani", query:"koyunbaba barajı yol tarifi", impressions:30, clicks:0, ctr:0, position:8.90 },
  { slug:"ulusal-nigde-gumusler-baraj-golu", query:"gümüşler barajı yol tarifi", impressions:28, clicks:0, ctr:0, position:8.71 },
  { slug:"bilecik-kizildamlar-baraj-goleti", query:"kızıldamlar barajı yol tarifi", impressions:28, clicks:0, ctr:0, position:9.32 },
  { slug:"cengelkoy-sahili", query:"çengelköy sahil yol tarifi", impressions:25, clicks:0, ctr:0, position:10.24 },
  { slug:"sariyar-baraji-softabogazi-amator-alani", query:"sarıyar barajı yol tarifi", impressions:21, clicks:0, ctr:0, position:8.90 },
  { slug:"ulusal-nigde-akkaya-baraj-golu", query:"akkaya barajı yol tarifi", impressions:18, clicks:0, ctr:0, position:8.56 },
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

  // Sırf günlük kotayı doldurmak için görünür metin veya confidence şişirilmez.
  // CTR adayları son GSC verisiyle yeniden sıralanır; mevcut SEO override/URL/canonical korunur.
  // Doğrulanmış yeni mikro erişim kanıtı olmadan directions pini üretilmez.
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
