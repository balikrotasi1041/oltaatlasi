import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const slug = "ulusal-bilecik-gunyurdu-baraj-golu";
const reviewedAt = "2026-10-15";
const municipality: ResearchSource = {
  label: "Pazaryeri Belediyesi – Günyurdu (Bakraz) Barajı",
  url: "https://www.pazaryeri.bel.tr/sayfa/turizm/",
  note: "Günyurdu'nu mesire, kamp ve olta balıkçılığı yeri olarak adlandırır; ilçe yol ayrımı ve genel gölet yaklaşımını açıklar. Her kıyının serbest olduğu anlamına gelmez."
};
const seasonalLaw: ResearchSource = {
  label: "Bilecik İl Tarım – 2026 içsu av dönemi",
  url: "https://bilecik.tarimorman.gov.tr/Duyuru/672/Bilecik-Ic-Sularinda-Av-Yasagi-Basladi",
  note: "Bilecik'te sazan ve diğer belirtilen içsu türleri için 15 Mart–15 Haziran 2026 yasağını bildirir; 15 Ekim dönem dışıdır. Suya özgü ve yerel hükümler ayrıca geçerlidir."
};
const waterEntryRule: ResearchSource = {
  label: "Bilecik Valiliği – 2026/2 boğulma kararı, Madde 5.1",
  url: "https://bilecik.tarimorman.gov.tr/Lists/Duyuru/Attachments/685/Ek-1.pdf",
  note: "30 Temmuz 2026 imzalı karar balık tutmak amacıyla da baraj/gölet suyuna girmeyi yasaklar; kıyıdan oltayı ayrıca yasaklamaz. Bu sayfa yalnız izinli kıyıdan olta planlamasıdır."
};
const openSeason: ResearchSource = {
  label: "Bilecik İl Tarım – 2026 içsu av yasağı sona erdi",
  url: "https://bilecik.tarimorman.gov.tr/Duyuru/681/Ilimiz-Ic-Sularinda-Av-Yasagi-Sona-Erdi",
  note: "18 Haziran 2026 duyurusu ildeki dönem yasağının bittiğini bildirir; özel yasak olarak Selöz'ü ayrıca anar, Günyurdu'nu anmaz. Yerel yeni kararlar ve 6/2 sürer."
};

export function applyDailyQuality20261015(routes: Map<string, EnrichedMera>): void {
  const previous = routes.get(slug);
  if (!previous) throw new Error(`15 Ekim kalite adayı bulunamadı: ${slug}`);
  const publicAccess = "Pazaryeri Belediyesi'nin Günyurdu için tanımladığı genel mesire yaklaşımı; yalnız kamuya açık ve levhaların izin verdiği kıyı. Baraj gövdesi, su alma/işletme yapıları, özel parseller ve kapalı bölümler bu rehbere dahil değildir.";
  routes.set(slug, {
    ...previous,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "index",
    updatedAt: reviewedAt,
    researchedAt: reviewedAt,
    summary: "Günyurdu (Bakraz) Barajı, belediyenin mesire ve olta kullanım kaydıyla genel kıyı planlamasına açılır. Sazan bilgisi 2013 tarihli DSİ balıklandırmasıdır; bugün balık bulunacağı veya tutulacağı garantisi değildir.",
    verification: "15 Ekim 2026: Pazaryeri Belediyesi'nin rota-özel mesire/olta ve yol kaydı, DSİ'nin Günyurdu sazan balıklandırması, 6/2 yasak ekleri, Bilecik İl Tarım 2026 dönemi ve Valiliğin suya girme kararı birlikte incelendi. Kıyıdan olta ile suya girme ayrıldı; güncel su kotu, levha ve mikro giriş saha teyitli değildir.",
    researchStatus: "15 Ekim 2026 yeniden değerlendirmesi: C+/index, yalnız genel mesire kıyısı",
    researchSummary: "Belediye genel kamusal mesire ve olta kullanımını açıkça tarif eder. 6/2 Ek-4/Ek-5'te Günyurdu yer almaz; Bilecik 15 Mart–15 Haziran 2026 sazan dönemi kapanışı sona ermiştir. Valiliğin 4 Ağustos 2026 kararı balık tutma amacıyla da suya girmeyi yasaklar; bu kayıt yalnız kıyı yaklaşımıdır. 2013 balıklandırma tarihsel tür kanıtıdır. Ekim su seviyesi ve belirli atış noktası bilinmiyor.",
    fish: ["Sazan"],
    methods: ["Kıyıdan mevzuata uygun olta"],
    baits: ["Mevzuata uygun doğal veya yapay yem"],
    sources: [...previous.sources, municipality, seasonalLaw, openSeason, waterEntryRule],
    accessEvidence: [{ label: municipality.label, value: publicAccess, sourceUrl: municipality.url, note: municipality.note }],
    qualityAssessment: {
      model: "expanded-v2",
      reviewedAt,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["Pazaryeri Belediyesi", "DSİ 2013 Günyurdu balıklandırması"],
      localContentVerified: true,
      fieldOrEquivalentVerified: false,
      unresolvedRisks: []
    },
    navigationVerified: false,
    navigationNote: "Pin baraj gölünün genel konumunu gösterir; izinli olta noktası, park yeri veya baraj tesisine giriş tarifi değildir.",
    shoreProfile: `${publicAccess} Güncel su kotu, kıyı şevi ve zemin güvenliği yerinde görülmeden kesin atış noktası önerilmez.`,
    longIntro: [
      "Pazaryeri Belediyesi Günyurdu'nu mesire ve olta balıkçılığı alanı olarak tanımlar; yol tarifi genel göl yaklaşımı içindir. Bu sayfa yalnız kamusal mesire bağlamını anlatır.",
      "Valiliğin Ağustos 2026 kararı balık tutma amacıyla da suya girmeyi yasaklar. Rehber yalnız izinli kamusal kıyıdan, suya girmeden olta planlamasına yöneliktir. Sazan kaydı 2013 DSİ balıklandırmasına dayanır; güncel av garantisi değildir."
    ],
    seasonalNotes: [
      "Bilecik İl Tarım'ın 2026 duyurusuna göre sazan için 15 Mart–15 Haziran dönem yasağı uygulanmıştır; 15 Ekim bu dönemin dışındadır.",
      "6/2 boy/adet/araç kuralları, yerel kararlar, baraj işletmesi ve sahadaki levhalar ayrıca kontrol edilmelidir."
    ],
    planningNotes: [
      "Belediyenin tarif ettiği genel mesire yaklaşımını kullan; son kıyı girişini ve levhaları yerinde doğrula.",
      "Baraj gövdesi, su alma tesisi, işletme bölgesi ve özel parsellerden uzak dur.",
      "Valilik kararı gereği balık tutmak için dahi suya girme; yalnız açık kıyıdan kal.",
      "2013 sazan balıklandırmasını güncel stok veya av garantisi sayma; su seviyesini gitmeden önce kontrol et."
    ],
    cautions: [
      "Su kotu, kıyı zemini ve son giriş Ekim 2026 için saha teyitli değildir.",
      "Valilik kararı suya girmeyi yasaklar; baraj gövdesi, su alma noktası, işletme sınırları ve yerel levhalar da belirleyicidir.",
      "Dönem, boy ve adet kurallarını 6/2 ve güncel İl Tarım duyurularından kontrol et."
    ],
    confidenceProfile: {
      model: "evidence-v1",
      overall: "C",
      reviewedAt,
      identity: { level: "strong", label: "Resmî baraj kimliği", note: "DSİ ve Pazaryeri Belediyesi Günyurdu (Bakraz) su varlığını adlandırır." },
      species: { level: "partial", label: "Tarihli sazan balıklandırması", note: "DSİ 2013 kaydı rota özeldir; bugün yaşayan stok veya yakalama garantisi değildir." },
      legal: { level: "strong", label: "2026 dönem, ekler ve suya girme kararı kontrol edildi", note: "6/2 Ek-4/Ek-5, Bilecik İl Tarım dönemi ve Valiliğin suya girme yasağı incelendi. Rehber yalnız kıyıdandır; hareket günü yeni karar ve levhalar kontrol edilir." },
      access: { level: "partial", label: "Belediye mesire yaklaşımı", note: publicAccess },
      field: { level: "unverified", label: "Mikro kıyı teyidi yok", note: "Belirli olta cebi, güncel su kotu ve giriş sahada doğrulanmadı." }
    }
  });
}
