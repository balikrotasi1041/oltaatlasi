import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

export function applyDailyQuality20261012(routeMap: Map<string, EnrichedMera>) {
  const slug = "bilecik-bozcaarmut-baraj-goleti";
  const previous = routeMap.get(slug);
  if (!previous || (previous.qualityGrade || previous.confidence) !== "C" || previous.indexing !== "hold" || !previous.qualityAssessment) {
    throw new Error(`12 Ekim eligibility baseline C/HOLD değil: ${slug}`);
  }
  const source: ResearchSource = {
    label: "Kültür ve Turizm Bakanlığı – Bozcaarmut Göleti",
    url: "https://www.kulturportali.gov.tr/turkiye/bilecik/gezilecekyer/bozcaarmut-golet",
    note: "4 Aralık 2024 güncellemeli turizm kaydı 12 Ekim 2026 tarihinde yeniden okundu. Olta rekreasyonu bağlamı sağlar; güncel kıyı giriş hakkı, orman erişimi veya işletme sınırı için izin belgesi değildir."
  };
  routeMap.set(slug, {
    ...previous,
    sources: [...new Map([...previous.sources, source].map(s => [s.url, s])).values()],
    updatedAt: "2026-10-12",
    researchedAt: "2026-10-12",
    verification: "12 Ekim 2026: Kültür Portalı, Valilik kimlik/konum sayfası ve 2018 İl Tarım balıklandırma kaydı yeniden incelendi. Güncel güvenli kamusal kıyı erişimi ve suya özgü hukuk teyidi eksik; C/HOLD korunur. Yeni confidence terfisi veya indeks salımı değildir.",
    qualityAssessment: { ...previous.qualityAssessment, reviewedAt: "2026-10-12" },
  });
}
