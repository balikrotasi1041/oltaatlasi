import type { EnrichedMera } from "./meralar-tumu-core";

const date = "2026-10-25";
const fishGuide = "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle";
const law = "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241";
const amendment = "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf";
const portLaw = "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf";

const candidates = [
  {
    slug: "beylerbeyi-sahili",
    fish: ["İstavrit", "İzmarit", "Kefal", "Zargana"],
    accessUrl: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
    accessLabel: "İBB Tarım – Beylerbeyi iskele ve cami önü olta kaydı",
    accessNote: "Tarihsel Beylerbeyi kıyı olta kaydıdır; bugün aktif iskele, balıkçı barınağı ve bağlı tekne alanlarında av izni değildir.",
    risk: "Köprü ayağı akıntısı, dar yaya alanı ve aktif iskele/tekne hareketi"
  },
  {
    slug: "bebek-sahili",
    fish: ["İstavrit", "Lüfer", "Zargana"],
    accessUrl: "https://yesil.istanbul/haber_bebek-parki-acildi",
    accessLabel: "İBB Yeşil İstanbul – halka açık Bebek Parkı",
    accessNote: "Bebek Parkı açık kamusal kıyı bağlamını destekler; bağlı tekne, aktif iskele ve Akıntıburnu kıyı şantiyesi bu rotanın dışında tutulur.",
    risk: "Kalabalık park, tekneler ve Akıntıburnu tarafındaki 2026 kıyı çalışması"
  },
  {
    slug: "anadolu-kavagi",
    fish: ["İstavrit", "Kefal", "Zargana"],
    accessUrl: fishGuide,
    accessLabel: "İBB – Anadolu Kavağı kıyı oltası",
    accessNote: "İBB'nin Anadolu Kavağı adını verdiği kıyı oltası kaydı genel kamusal kullanım içindir; aktif vapur iskelesi, bağlı tekne ve askeri/güvenlik alanı hariçtir.",
    risk: "Boğaz'ın Karadeniz çıkışında güçlü akıntı, vapur ve tekne hareketi"
  }
] as const;

export function applyDailyAvlakQuality20261025(routes: Map<string, EnrichedMera>): void {
  for (const candidate of candidates) {
    const old = routes.get(candidate.slug);
    if (!old || (old.qualityGrade && old.qualityGrade !== "C") || old.confidence !== "C" || old.indexing === "hold") {
      throw new Error(`${candidate.slug}: 25 Ekim C/index başlangıç durumu değişmiş; terfi yeniden incelenmeli.`);
    }
    const accessUrl = candidate.slug === "anadolu-kavagi" ? fishGuide : candidate.accessUrl;
    routes.set(old.slug, {
      ...old,
      fish: [...candidate.fish],
      qualityGrade: "C+",
      updatedAt: date,
      verification: `25 Ekim 2026 çekirdek inceleme: İBB'nin 2025 olta rehberi ${old.name} adını ve ${candidate.fish.join(", ")} türlerini birlikte veriyor. ${candidate.accessLabel} genel kıyı erişimini destekliyor. 6/2 ana tebliği, 2026/26 değişikliği ve Limanlar Yönetmeliği değerlendirildi. ${candidate.risk}; mikro atış yeri ve günlük av garantisi verilmez.`,
      seasonalNotes: [
        `İBB'nin rota adıyla verdiği ${candidate.fish.join(", ")} kaydı tarihsel/genel yer verisidir; mevsime göre güncel av başarısı değişir.`,
        "Av gününde 6/2 boy, adet, takım, yer hükümleri ile güncel yerel uyarıları kontrol et."
      ],
      sources: [
        ...old.sources.filter(source => ![fishGuide, law, amendment, portLaw, accessUrl].includes(source.url)),
        { label: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)", url: fishGuide, note: `${old.name} adıyla ${candidate.fish.join(", ")} türlerini bildirir; noktasal güncel av garantisi değildir.` },
        ...(accessUrl === fishGuide ? [] : [{ label: candidate.accessLabel, url: accessUrl, note: candidate.accessNote }]),
        { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: law, note: "Denizde tür, boy, adet, yöntem ve yüzme alanı hükümleri." },
        { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendment, note: "16 Eylül 2026 değişikliği ana metinle birlikte incelendi." },
        { label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği", url: portLaw, note: "Aktif iskele, bağlama, yanaşma ve seyir güvenliği alanları rotadan çıkarılır." }
      ],
      fishEvidence: candidate.fish.map(name => ({ name, scientificName: null, evidenceLevel: "İBB'nin yer adıyla verdiği olta/tür kaydı", sourceLabel: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)", sourceUrl: fishGuide, note: "Yer ve tür birlikte kaydedilir; bugünkü yakalama veya her kıyı cebine izin anlamına gelmez." })),
      accessEvidence: [{ label: candidate.accessLabel, value: "Genel açık kıyı; aktif iskele/tekne ve kapalı kesim dışı", sourceUrl: accessUrl, note: candidate.accessNote }],
      qualityAssessment: {
        model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true,
        currentLawResolved: true, safePublicAccessVerified: true,
        independentStrongFamilies: [`İBB ${old.name} rota-özel olta/tür kaydı`],
        localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
      }
    });
  }
}
