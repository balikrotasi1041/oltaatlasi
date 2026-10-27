import type { EnrichedMera } from "./meralar-tumu-core";

const reviewedAt = "2026-10-27";
const istanbulFish = "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle";
const degirmendereCatch = "https://www.kocaeli.bel.tr/haber/yarismada-1240-balik-oltayla-yakalandi-39531.html";
const degirmendereFestival = "https://www.kocaeli.bel.tr/haber/deniz-festivali-degirmendereyi-renklendirdi-51423.html";
const law = "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513";
const amendment = "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf";
const portLaw = "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf";

const candidates = [
  {
    slug: "istanbul-avcilar-avcilar-sahil-parki",
    fish: ["İstavrit", "Kefal"],
    fishSource: istanbulFish,
    sourceLabel: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)",
    sourceNote: "Avcılar sahilini ve mevsimsel istavrit ile kefal kaydını yer adıyla verir; Denizköşkler parkının her metre karesinde av garantisi değildir.",
    accessSource: "https://istanbulseninhaber.ibb.istanbul/haber-detay/avcilar-sahil-parki-yenilendi",
    accessNote: "Kamusal Avcılar Sahil Parkı; plaj, yüzme şamandırası ve yoğun yaya alanı dışlanır.",
    risk: "Yüzme alanı, park yürüyüş aksı ve kalabalıkta güvenli atış açıklığı yoksa olta açılmaz."
  },
  {
    slug: "tuzla-sahil-parki",
    fish: ["Lüfer", "Palamut"],
    fishSource: istanbulFish,
    sourceLabel: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)",
    sourceNote: "Tuzla sahilini lüfer ve palamut için adlandırır; açık denizdeki mercan/çipura bilgisi park kıyısına taşınmaz.",
    accessSource: "https://icraat.ibb.istanbul/proje-detay/tuzla-sahil-parki-acilisini-yaptik/ce90ce27-c5ab-4b72-a679-70d1c5f192f6",
    accessNote: "İBB 123 bin m² kamusal parkı doğrular; kano, çocuk oyun, marina ve bağlı tekne bölümleri av yeri değildir.",
    risk: "Kano, oyun alanı, iskele ve yaya koridorundan uzak açık kıyı bulunmazsa olta açılmaz."
  },
  {
    slug: "degirmendere-sahili",
    fish: ["İstavrit", "İzmarit", "İspari"],
    fishSource: degirmendereCatch,
    sourceLabel: "Kocaeli Büyükşehir – Değirmendere Yüzbaşılar olta yarışı (2021)",
    sourceNote: "Değirmendere Yüzbaşılar kıyısındaki 2021 yarışmasında yakalanan türleri açıkça listeler; bugünkü stok garantisi değildir.",
    accessSource: degirmendereFestival,
    accessNote: "2026 Deniz Festivali aynı Yüzbaşılar Sahili'nde sportif olta kullanımını kaydeder; geçici çalışma ve işletme sınırları hariçtir.",
    risk: "2026 kıyı inşaatı, çekek ve tekne operasyonu ile yaya/bisiklet yolunda güvenli açıklık yoksa olta açılmaz."
  }
] as const;

export function applyDailyAvlakQuality20261027(routes: Map<string, EnrichedMera>): void {
  for (const candidate of candidates) {
    const old = routes.get(candidate.slug);
    if (!old || old.confidence !== "C" || old.qualityGrade) {
      throw new Error(`${candidate.slug}: 27 Ekim başlangıç C durumu değişmiş; terfi yeniden incelenmeli.`);
    }
    const source = { label: candidate.sourceLabel, url: candidate.fishSource, note: candidate.sourceNote };
    const accessSource = { label: "Kamusal kıyı ve kullanım kaydı", url: candidate.accessSource, note: candidate.accessNote };
    const sourceUrls = new Set([candidate.fishSource, candidate.accessSource, law, amendment, portLaw]);
    routes.set(old.slug, {
      ...old,
      fish: [...candidate.fish],
      qualityGrade: "C+",
      updatedAt: reviewedAt,
      verification: `27 Ekim 2026: ${candidate.sourceLabel} bu rota için ${candidate.fish.join(", ")} türlerini kaydeder. Kayıt tarihsel/bölgesel bağlamdır, güncel av garantisi değildir. 6/2 ve 2026/26 değişikliği incelendi. ${candidate.risk}`,
      seasonalNotes: ["Tür kaydı av garantisi değildir. Güncel sezon, boy, adet ve yer kısıtları ile hava/akıntı koşulları yola çıkmadan önce kontrol edilmelidir."],
      sources: [
        ...old.sources.filter(item => !sourceUrls.has(item.url)), source, accessSource,
        { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: law, note: "Güncel tür, boy, adet, yöntem ve yer sınırlamaları." },
        { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendment, note: "16 Eylül 2026 değişikliği ana tebliğle birlikte incelendi." },
        { label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği", url: portLaw, note: "Aktif iskele ve tekne operasyon bölgeleri dışarıda tutulur." }
      ],
      fishEvidence: candidate.fish.map(name => ({ name, scientificName: null, evidenceLevel: "Resmî yer adıyla olta/tür kaydı", sourceLabel: candidate.sourceLabel, sourceUrl: candidate.fishSource, note: candidate.sourceNote })),
      accessEvidence: [{ label: "Kamusal kıyı ve kullanım", value: candidate.accessNote, sourceUrl: candidate.accessSource, note: candidate.risk }],
      qualityAssessment: {
        model: "expanded-v2", reviewedAt, identityVerified: true, speciesRouteSpecific: true,
        currentLawResolved: true, safePublicAccessVerified: true,
        independentStrongFamilies: [candidate.sourceLabel], localContentVerified: true,
        fieldOrEquivalentVerified: false, unresolvedRisks: []
      }
    });
  }
}
