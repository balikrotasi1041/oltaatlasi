import type { EnrichedMera } from "./meralar-tumu-core";

/**
 * 17 Ağustos'ta üretilen Ankara-merkezli 500 km aday havuzu aktif yayın zincirinden
 * karantinaya alınmıştır. Önceki toplu dosya 870 adet Güven D kaydı; rota-özel hukuk,
 * mikro kıyı erişimi, tür stoku ve saha doğrulaması tamamlanmadan doğrudan `meralar`
 * koleksiyonuna ekliyordu. Bu seri yalnız mevcut kalite standardını geçen yeni meraları
 * yayımlar. Aday araştırmasının önceki sürümü Git geçmişinde korunur ve rota bazında
 * yeniden doğrulanmadan aktif yayına dönmez.
 */
export const yeniMeralarAnkara500Km20260817: EnrichedMera[] = [];

export const ankara500KmQuarantine20260817 = {
  quarantinedCount: 870,
  confidence: "D",
  reason: "Rota-özel hukuk, mikro erişim, tür stoku ve saha katmanları yüksek doğrulama eşiğini karşılamıyor.",
  reviewedAt: "2026-08-17",
} as const;
