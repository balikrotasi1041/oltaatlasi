import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-11";
const duzce2024: ResearchSource = {
  label: "Düzce Valiliği – 2024 il çevre durum raporu",
  url: "https://webdosya.csb.gov.tr/db/ced/icerikler/duzce_-cdr-2024-20251003120222.pdf",
  note: "Kaynaşlı Çamlıpınar Göleti'ni günübirlik ve olta kullanımına uygun su olarak kaydeder; güncel kıyı levhası geçerlidir."
};

export const releasedExisting20261111 = [
  "ankara-500km-kocaeli-tahtali-goleti",
  "ankara-500km-duzce-camlipinar"
];

export function releaseExisting20261111(routes: Map<string, EnrichedMera>): void {
  for (const slug of releasedExisting20261111) {
    const old = routes.get(slug);
    if (!old || old.qualityGrade !== "C+" || old.indexing !== "hold" ||
        !old.qualityAssessment?.identityVerified || !old.qualityAssessment.speciesRouteSpecific ||
        !old.qualityAssessment.currentLawResolved || !old.qualityAssessment.safePublicAccessVerified ||
        old.qualityAssessment.unresolvedRisks.length) {
      throw new Error(`11 Kasım kota bekleyeni için C+ çekirdek kanıt eksik: ${slug}`);
    }
    const tahtali = slug === releasedExisting20261111[0];
    routes.set(slug, {
      ...old,
      indexing: "index",
      updatedAt: date,
      researchedAt: date,
      summary: tahtali
        ? "Derince Kaymakamlığı Tahtalı Göleti'nde sazan ve amatör oltayı, MEB mesire alanında olta kullanımını ve İl Tarım 2025 yavru sazan salımını doğrular. Güncel levha, işletme sınırı ve 6/2 kuralları geçerlidir."
        : "Düzce İl Tarım Çamlıpınar Göleti'nde 2024 yavru sazan salımını, Düzce il çevre raporları aynı gölette günübirlik olta kullanımını doğrular. Güncel mesire levhası ve 6/2 kuralları geçerlidir.",
      verification: tahtali
        ? "11 Kasım 2026 C+ / HOLD→index yeniden incelemesi: Kaymakamlık sazan ve amatör olta, MEB kamusal mesire olta kullanımı, 2025 İl Tarım balıklandırması, yürürlükteki 6/2 ve 2026/26 tekrar değerlendirildi. 2026 genel orman giriş tedbirinin süresi bitti; yeni yerel levha ve işletme sınırı av gününde kontrol edilmeli. Bu işlem kalite terfisi değildir."
        : "11 Kasım 2026 C+ / HOLD→index yeniden incelemesi: Kaynaşlı Belediyesi su kimliği, 2024 İl Tarım sazan salımı, 2023 ve 2024 il çevre raporlarındaki olta kullanımı, yürürlükteki 6/2 ve 2026/26 tekrar değerlendirildi. Güncel mesire levhası av gününde kontrol edilmeli. Bu işlem kalite terfisi değildir.",
      navigationNote: tahtali
        ? "Pin göletin genel su referansıdır, izinli kıyı cebi değildir. MEB kaydındaki adres alanı göle yön tarifi olarak kullanılmamalı; yerel giriş ve levha kontrol edilmeli."
        : old.navigationNote,
      sources: tahtali ? old.sources : [...new Map([...(old.sources || []), duzce2024].map(source => [source.url, source])).values()],
      qualityAssessment: { ...old.qualityAssessment, reviewedAt: date }
    });
  }
}
