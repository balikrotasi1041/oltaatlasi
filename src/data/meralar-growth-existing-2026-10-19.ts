import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-19";
const slug = "izmir-karaburun-mordogan-merkez-kiyi-yolu";

const municipality: ResearchSource = {
  label: "Karaburun Belediyesi – Mordoğan İskelesi ve çevresi",
  url: "https://www.karaburun.bel.tr/tr/gezidetay/iskeleler/80",
  note: "Mordoğan merkezdeki işlek iskeleyi ve çevresindeki kamusal yürüyüş yolunu ayrı tanımlar. Faal iskele ve tekne hareket alanı olta rotasına dahil değildir."
};
const metropolitan: ResearchSource = {
  label: "İzmir Büyükşehir Belediyesi – Karaburun ve Mordoğan",
  url: "https://www.izmir.bel.tr/tr/MekanDetay/72/230",
  note: "Mordoğan'ı adıyla tanıtır ve bölgede olta balıkçılığından söz eder; belirli bir atış cebinin bugün açık olduğunu söylemez."
};
const research: ResearchSource = {
  label: "Ege Üniversitesi Su Ürünleri Dergisi – Mordoğan balık örneklemesi",
  url: "https://dergipark.org.tr/tr/download/article-file/57800",
  note: "Mordoğan örnekleme istasyonunda tarihsel kefal ve çipura kayıtları içerir. Kalıntı çalışmasıdır; güncel stok, av başarısı veya tüketim güvenliği sonucu değildir."
};
const nationalLaw: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık ana tebliği",
  url: "https://tarim.ibb.istanbul/img/155442992025__3064691425N.pdf",
  note: "2024/21 sayılı 2024–2028 amatör avcılık kuralları; deniz tür, boy, adet, yöntem, alan ve güvenlik hükümleri uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 tebliği 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği, ana tebliğ ve 2025 değişikliğiyle birlikte değerlendirilir."
};
const protectedArea: ResearchSource = {
  label: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı – Karaburun-Ildır ÖÇK Bölgesi",
  url: "https://tvk.csb.gov.tr/karaburun-ildir-korfezi-91579",
  note: "Karaburun kıyısının özel çevre koruma statüsünü ve Akdeniz foku habitatını bildirir; korunan habitat, yerel levha ve kapalı kıyı kesimleri dışlanır."
};

export function applyGrowthExistingRelease20261019(routes: Map<string, EnrichedMera>): void {
  const previous = routes.get(slug);
  if (!previous || previous.confidence !== "C" || previous.qualityGrade !== "C+" || previous.indexing !== "hold") {
    throw new Error(`19 Ekim eski kayıt salımı başlangıç güven C, kalite C+ ve HOLD gerektirir: ${slug}`);
  }

  const sources = [municipality, metropolitan, research, nationalLaw, amendment, protectedArea];
  const oldSources = previous.sources.filter(source => !sources.some(replacement => replacement.url === source.url));

  routes.set(slug, {
    ...previous,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "index",
    updatedAt: date,
    researchedAt: date,
    researchStatus: "19 Ekim 2026: başlangıç güveni C, kalite derecesi C+ olan HOLD Mordoğan merkez açık kıyı kaydı, rota-özel tür, genel kamusal yürüyüş yolu ve güncel 6/2 yeniden incelenerek güven terfisi yapılmadan index salımına hazırlandı.",
    summary: "Mordoğan merkezdeki açık sahil yürüyüş yolu, İzmir Büyükşehir Belediyesinin olta kullanımı anlatımı ve Ege Üniversitesinin Mordoğan'a özgü kefal/çipura örnekleriyle desteklenen C+ genel kıyı rotasıdır. Faal iskele, marina, plaj ve korunan habitat kesimleri dışarıdadır.",
    verification: "19 Ekim 2026 masa başı yeniden incelemesi: Karaburun Belediyesi merkezdeki işlek iskeleyi ve çevresindeki yürüyüş yolunu, İzmir Büyükşehir Belediyesi Mordoğan'da olta balıkçılığı bağlamını, Ege Üniversitesi Mordoğan istasyonunda kefal ve çipura örneklerini doğrular. 6/2 ana tebliği ve 2026/26 değişikliği incelendi. Karaburun-Ildır ÖÇK statüsü ve kıyı tesisi/yüzme sınırları dikkate alındı. Bu kaynaklar faal iskele, marina, plaj veya belirli mikro atış noktasında izin vermez; anlık levha ve güvenlik sahada kontrol edilir.",
    researchSummary: "Belediye kaynakları Mordoğan merkezde kamusal kıyı yürüyüşünü ve genel olta kullanımını; Ege Üniversitesi makalesi Mordoğan'da tarihsel kefal/çipura varlığını destekler. 6/2 ve 2026 değişikliği uygulanır. Açık kıyı dışında kalan işlek iskele, tekne yaklaşımı, yüzme alanı ve korunan habitat rotaya dahil edilmez.",
    navigationNote: "Koordinat Mordoğan merkez açık kıyı bölgesi içindir; faal iskele, marina, mendirek, plaj veya kesin atış cebi değildir. Yürüyüş yolu üzerinde yalnız kamusal erişime açık, yaya ve tekne güvenliğiyle çelişmeyen ve levhayla kapatılmamış bölümler değerlendirilir.",
    shoreProfile: "Mordoğan merkezdeki kamusal kıyı yürüyüş bandı, işlek iskele ve gezi/balıkçı teknelerinin alanından ayrılmalıdır. Kıyı yapıları, yüzme cepleri ve korunan habitat çevresi av için önerilmez. Açık kıyının belirli metreleri saha teyitli değildir; olta atışı öncesi yaya, tekne ve dalga güvenliği yerinde değerlendirilir.",
    cautions: [
      "Faal Mordoğan İskelesi, marina/mendirek, tekne yaklaşımı ve yüzme alanlarında olta planlama; yerel kapatma ve güvenlik levhaları önceliklidir.",
      "Karaburun-Ildır özel çevre koruma bölgesindeki korunan habitatlara, özellikle Akdeniz foku üreme/yaşam alanlarına yaklaşma veya zarar verme.",
      "Rüzgâr, dalga, kaygan taş ve yaya yoğunluğu atış güvenliğini değiştirebilir; tarihsel tür çalışması güncel av ya da tüketim güvenliği garantisi değildir."
    ],
    seasonalNotes: [
      "2024/21 sayılı 6/2 ana tebliğ ile 16 Eylül 2026 tarihli 2026/26 değişikliği birlikte uygulanır; tür boy/adet, yöntem ve yer sınırlamaları ile güncel il/alan kararları kontrol edilir.",
      "Ege Üniversitesinin Mordoğan örneklemesi tarihsel tür kanıtıdır; güncel stok, av başarısı veya balığın tüketim güvenliği sonucu çıkarılmaz."
    ],
    fishEvidence: [
      { name: "Kefal", scientificName: "Mugilidae spp.", evidenceLevel: "Rota özelinde tarihsel akademik örnekleme", sourceLabel: research.label, sourceUrl: research.url, note: "Mordoğan örnekleme istasyonunda tarihsel kefal kaydı; kıyıda güncel av garantisi değildir." },
      { name: "Çipura", scientificName: "Sparus aurata", evidenceLevel: "Rota özelinde tarihsel akademik örnekleme", sourceLabel: research.label, sourceUrl: research.url, note: "Mordoğan örnekleme istasyonunda tarihsel çipura kaydı; kıyıda güncel av garantisi değildir." }
    ],
    accessEvidence: [
      { label: municipality.label, value: "Mordoğan merkez iskelesinin çevresinde kamusal yürüyüş yolu", sourceUrl: municipality.url, note: "İşlek iskele, marinaya ve tekne alanına giriş izni olarak yorumlanmaz." },
      { label: metropolitan.label, value: "Mordoğan'da genel olta balıkçılığı kullanımı", sourceUrl: metropolitan.url, note: "Belirli kıyı metresinin bugün açık olduğunu garanti etmez; levha ve güvenlik sınırları önceliklidir." }
    ],
    sources: [...oldSources, ...sources],
    qualityAssessment: {
      ...previous.qualityAssessment!,
      reviewedAt: date,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["Karaburun Belediyesi", "İzmir Büyükşehir Belediyesi", "Ege Üniversitesi"],
      localContentVerified: true,
      unresolvedRisks: []
    },
    confidenceProfile: previous.confidenceProfile ? {
      ...previous.confidenceProfile,
      reviewedAt: date,
      legal: { level: "strong", label: "Güncel 6/2 ve koruma bağlamı incelendi", note: "6/2 ana metni, 2026/26 değişikliği ve Karaburun-Ildır ÖÇK statüsü incelendi; yerel levha, plaj ve kıyı tesisi sınırları önceliklidir." },
      access: { level: "strong", label: "Kamusal açık kıyı bağlamı", note: "Belediyenin yürüyüş yolu ve Mordoğan olta anlatımı genel erişimi destekler; faal iskele, marina, plaj ve kesin atış cebi için izin kanıtı değildir." }
    } : previous.confidenceProfile
  });
}
