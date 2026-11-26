import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const stocking: ResearchSource = {
  label: "Edirne İl Tarım ve Orman Müdürlüğü — Tayakadın sazan balıklandırması",
  url: "https://edirne.tarimorman.gov.tr/Haber/732/Su-Kaynaklarimizi-Baliklandiriyoruz",
  note: "Ağustos 2026'da Tayakadın Köyü Göleti'ne 5.000 yavru sazan bırakıldığını ve köydeki katılımcıların kıyı etkinliğini kaydeder. Programın amaçlarından biri amatör avcılığı yaygınlaştırmaktır."
};
const water: ResearchSource = {
  label: "Edirne İl Çevre Durum Raporu — Tayakadın Göleti",
  url: "https://webdosya.csb.gov.tr/db/ced/icerikler/2019_ed-rne_cevre_durum_raporu-20201221092740.pdf",
  note: "Yüzey suyu istasyonu 22-069 Tayakadın Göleti için 41.560467, 26.666772 kaydını verir."
};
const irrigation: ResearchSource = {
  label: "DSİ 11. Bölge — işletmedeki göletler",
  url: "https://bolge11.dsi.gov.tr/Sayfa/Detay/1084",
  note: "Edirne Merkez Tayakadın Göleti'nin 2015 yılında işletmeye alındığını kaydeder."
};
const villageApproach: ResearchSource = {
  label: "OpenStreetMap — Tayakadın'dan gölete genel yaklaşım",
  url: "https://www.openstreetmap.org/way/896165470",
  note: "Köy yönünden kıyı yakınlarına uzanan bağlantı yolu. Son kıyı geçişinin mülkiyet ve zemin durumu sahada kontrol edilir."
};
const leaseNotice: ResearchSource = {
  label: "Edirne İl Tarım ve Orman Müdürlüğü — Ekim 2026 avlak kiralama ilanı",
  url: "https://edirne.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=702",
  note: "30 Ekim ihalesinde listelenen istihsal sahaları arasında Tayakadın Göleti bulunmaz."
};
const law: ResearchSource = {
  label: "Resmî Gazete — 6/2 amatör avcılık tebliği",
  url: "https://www.resmigazete.gov.tr/eskiler/2024/08/20240811-4.htm",
  note: "Edirne'de sazan için 15 Mart–15 Haziran kapalı dönemini ve içsu av kurallarını düzenler."
};
const amendment2025: ResearchSource = {
  label: "Resmî Gazete — 2025/12 amatör avcılık değişikliği",
  url: "https://www.resmigazete.gov.tr/eskiler/2025/04/20250416-4.htm",
  note: "6/2 tebliğinin 16 Nisan 2025 tarihli değişikliğidir."
};
const amendment2026: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2026/26 amatör avcılık değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 tebliğinin 16 Eylül 2026 tarihli değişikliğidir."
};

export const tayakadinCatchupRoute20261127: EnrichedMera = {
  slug: "edirne-merkez-tayakadin-koyu-goleti",
  name: "Tayakadın Köyü Göleti",
  province: "Edirne",
  district: "Merkez",
  region: "Marmara",
  waterType: "Gölet",
  zone: "Tayakadın Köyü yönünden ulaşılan sulama göletinin açık, kamusal kıyı kesimleri. Set, savak ve işletme alanları rota dışındadır.",
  lat: 41.560467,
  lng: 26.666772,
  locationPrecision: "Genel bölge",
  summary: "Edirne Merkez'deki Tayakadın Köyü Göleti'ne Ağustos 2026'da 5.000 yavru sazan bırakıldı. Köy yolu gölete genel yaklaşım sağlar; kıyıya geçişte yerel levhalar ve işletme sınırları geçerlidir.",
  fish: ["Sazan"],
  methods: ["Kıyıdan dip oltası", "Şamandıralı kıyı oltası"],
  baits: ["Mısır", "Hamur"],
  vehicleAccess: "Kontrol edilmeli",
  camping: "Kontrol edilmeli",
  amenities: [],
  cautions: [
    "Set, savak, su alma yapısı ve işletme alanına girmeyin. Çit veya uyarı levhası varsa kıyı planını değiştirin.",
    "Toprak kıyıda su çekilmesiyle açılan çamur şeridine ve dik zemine yaklaşmayın.",
    "Özel tarlalardan geçmeyin. Son yaklaşımın yağış sonrası çamur durumunu ve kamusal geçişi yerinde kontrol edin."
  ],
  verification: "27 Kasım 2026: Resmî sazan salımı, yüzey suyu koordinatı, köyden harita yaklaşımı, Ekim 2026 kiralama ilanı ve güncel 6/2 incelendi.",
  updatedAt: date,
  publishedAt: date,
  researchedAt: date,
  confidence: "C",
  qualityGrade: "C+",
  indexing: "hold",
  image: "/images/meralar/ulusal/edirne-merkez-tayakadin-koyu-goleti.svg",
  socialImage: "/images/meralar/ulusal/edirne-merkez-tayakadin-koyu-goleti.svg",
  navigationNote: "Harita pini resmî yüzey suyu izleme noktasını gösterir. Tayakadın Köyü'nden açık yaklaşım yolunu izleyin; kamusal olduğundan emin olmadığınız kıyı geçişini kullanmayın.",
  shoreProfile: "Tarımsal sulama göletinde kıyı eğimi ve su seviyesi değişebilir. Atış için su yapısı dışında, zemini sağlam ve açık kıyı kesimini değerlendirin.",
  transport: "Tayakadın Köyü yönünden gölete yaklaşım yolu haritada görülür. Kıyıya son geçiş ve park olanağı yerinde kontrol edilmelidir.",
  crowdNote: "Kıyı kullanıcıları varsa atış öncesinde arka ve ön boşluğu kontrol edin.",
  longIntro: [
    "İl Tarım ve Orman Müdürlüğü, Tayakadın Köyü Göleti'nde Ağustos 2026'da köyden katılımcılarla yapılan balıklandırmada 5.000 yavru sazanın bırakıldığını açıkladı. Kıyıdaki etkinlik, günlük veya sürekli kıyı erişim izni vermez.",
    "Edirne İl Çevre Durum Raporu göleti yüzey suyu izleme noktası olarak konumlandırır. Bu koordinatı göleti bulmak için kullanın; set, savak ve işaretli işletme sahaları av planına girmemelidir."
  ],
  planningNotes: [
    "Köyden gelen açık yaklaşımda güncel levhaları ve kıyı zemini kontrol edin. Kıyı erişimi kapalıysa avı erteleyin.",
    "Yavru sazan salımı güncel yetişkin stokunu veya av verimini ölçmez."
  ],
  seasonalNotes: [
    "Edirne'de sazanın kapalı dönemi 6/2 Çizelge 6'ya göre 15 Mart–15 Haziran'dır. Av günü güncel boy, miktar, takım ve yer hükümlerini kontrol edin."
  ],
  sources: [stocking, water, irrigation, villageApproach, leaseNotice, law, amendment2025, amendment2026],
  researchStatus: "27 Kasım 2026 C+ içsu araştırması",
  researchSummary: "Gölete özgü resmî sazan salımı, resmî su koordinatı, köy yaklaşım haritası ve yürürlükteki amatör av hükümleri incelendi.",
  fishEvidence: [
    { name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "Resmî rota-özel balıklandırma", sourceLabel: stocking.label, sourceUrl: stocking.url, note: "2026'da 5.000 yavru sazan bırakıldı." }
  ],
  accommodationOptions: [],
  navigationVerified: false,
  accessEvidence: [
    { label: villageApproach.label, value: "Köyden genel gölet bağlantısı", sourceUrl: villageApproach.url, note: "Son kıyı geçişi, işletme sınırı ve özel mülkiyet yerinde kontrol edilir." },
    { label: stocking.label, value: "2026 kıyı etkinliği ve amatör kullanım bağlamı", sourceUrl: stocking.url, note: "Etkinlik sürekli giriş ya da av izni sağlamaz." }
  ],
  qualityAssessment: {
    model: "expanded-v2",
    reviewedAt: date,
    identityVerified: true,
    speciesRouteSpecific: true,
    currentLawResolved: true,
    safePublicAccessVerified: true,
    independentStrongFamilies: ["Edirne İl Tarım ve Orman Müdürlüğü — Tayakadın Göleti 2026 balıklandırma kaydı"],
    localContentVerified: true,
    fieldOrEquivalentVerified: false,
    unresolvedRisks: []
  },
  confidenceProfile: {
    model: "evidence-v1",
    overall: "C",
    reviewedAt: date,
    identity: { level: "strong", label: "Resmî su izleme ve DSİ kayıtları", note: "Edirne Merkez'deki göleti su adıyla doğrular." },
    species: { level: "strong", label: "Tayakadın Göleti'nde resmî sazan salımı", note: "Ağustos 2026 olayı su adına bağlıdır." },
    legal: { level: "strong", label: "6/2 ve güncel değişiklikler", note: "Edirne içsu hükümleri ve yerel saha sınırlamaları geçerlidir." },
    access: { level: "partial", label: "Köy yolu ve 2026 kamu etkinliği", note: "Son kıyı geçişi, özel parseller ve saha levhaları yerinde kontrol edilir." },
    field: { level: "unverified", label: "Yeni saha teyidi yok", note: "Güncel kıyı koşulu ve geçiş noktası yerinde belirlenir." }
  }
};
