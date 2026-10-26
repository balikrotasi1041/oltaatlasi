import type { EnrichedMera } from "./meralar-tumu-core";

const date = "2026-10-26";
const booklet = "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf";
const law = "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513";
const amendment = "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf";
const portLaw = "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf";

const candidates = [
  { slug: "ortakoy-sahili", fish: ["İstavrit", "Lüfer", "Zargana"], description: "Ortaköy–Bebek kıyı koridoru", risk: "kalabalık meydan, aktif iskele ve köprü ayağı akıntısı" },
  { slug: "kandilli-sahili", fish: ["İstavrit", "Lüfer"], description: "Kandilli kıyısı", risk: "dar yaya kıyısı, aktif vapur iskelesi ve güçlü akıntı" },
  { slug: "kucuksu-sahili", fish: ["İstavrit", "Mezgit", "Sardalya"], description: "Küçüksu kıyısı", risk: "dere ağzı sürüküntüsü, yüzme alanı ve aktif vapur iskelesi" }
] as const;

export function applyDailyAvlakQuality20261026(routes: Map<string, EnrichedMera>): void {
  for (const candidate of candidates) {
    const old = routes.get(candidate.slug);
    if (!old || old.confidence !== "C" || old.qualityGrade) {
      throw new Error(`${candidate.slug}: 26 Ekim baseline C durumu değişmiş; terfi yeniden incelenmeli.`);
    }
    routes.set(old.slug, {
      ...old,
      fish: [...candidate.fish],
      qualityGrade: "C+",
      updatedAt: date,
      verification: `26 Ekim 2026: İBB olta rehberi ${candidate.description} için ${candidate.fish.join(", ")} türlerini yer adıyla kaydeder. Bu tarihsel tür verisi güncel av garantisi değildir. 6/2 ve 2026/26 değişikliği yeniden incelendi; ${candidate.risk} nedeniyle açık ve güvenli kıyı yoksa av yapılmaz.`,
      seasonalNotes: [...(old.seasonalNotes || []), "İBB yer/tür kaydı tarihsel gözlemdir; mevsim ve güncel su koşulları av başarısını değiştirir."],
      sources: [
        ...old.sources.filter(source => ![booklet, law, amendment, portLaw].includes(source.url)),
        { label: "İBB Tarım – Yeni Başlayanlar İçin Olta Balıkçılığı", url: booklet, note: `${candidate.description} için ${candidate.fish.join(", ")} türlerini yer adıyla listeler; 2017 kaydıdır.` },
        { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: law, note: "Tür, boy, adet, yöntem ve yer sınırlamaları." },
        { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendment, note: "16 Eylül 2026 değişikliği ana metinle birlikte değerlendirilmiştir." },
        { label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği", url: portLaw, note: "Aktif iskele ve tekne operasyon alanları rotanın dışındadır." }
      ],
      fishEvidence: candidate.fish.map(name => ({ name, scientificName: null, evidenceLevel: "İBB yer adıyla tarihsel olta/tür kaydı", sourceLabel: "İBB Tarım – Yeni Başlayanlar İçin Olta Balıkçılığı", sourceUrl: booklet, note: `${candidate.description} ölçeğindedir; bugünkü mikro noktada av garantisi değildir.` })),
      accessEvidence: [{ label: "İBB Tarım olta rehberi", value: "Genel kamusal kıyı bağlamı; aktif iskele, yüzme ve kapalı alanlar hariç", sourceUrl: booklet, note: `Rota ${candidate.description} ölçeğindedir. ${candidate.risk}; son saha levhası ve güvenli yaya açıklığı av gününde kontrol edilir.` }],
      qualityAssessment: {
        model: "expanded-v2", reviewedAt: date, identityVerified: true,
        speciesRouteSpecific: true, currentLawResolved: true,
        safePublicAccessVerified: true,
        independentStrongFamilies: [`İBB ${candidate.description} rota/tür kaydı`],
        localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
      }
    });
  }
}
