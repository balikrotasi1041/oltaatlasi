import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const law: ResearchSource = {
  label: "Resmî Gazete — 6/2 amatör avcılık tebliği",
  url: "https://www.resmigazete.gov.tr/eskiler/2024/08/20240811-4.htm",
  note: "İçsulardaki tür, dönem, boy, miktar ve takım koşullarını düzenler."
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
const sakaryaSeason: ResearchSource = {
  label: "Sakarya İl Tarım ve Orman Müdürlüğü — 2026 içsu av yasağı",
  url: "https://sakarya.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=326",
  note: "Sazan dahil sayılan türler için 2026 kapalı dönemini 15 Mart–15 Haziran olarak duyurur."
};
const kulakliStocking: ResearchSource = {
  label: "Sakarya İl Tarım ve Orman Müdürlüğü — 2021 Kulaklı Göleti balıklandırması",
  url: "https://sakarya.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=199",
  note: "Yavru sazan bırakıldığı açıklanan göletler arasında Kulaklı'yı adıyla listeler."
};
const kulakliAmateur: ResearchSource = {
  label: "Sakarya İl Tarım ve Orman Müdürlüğü — göletlerde amatör avcılık",
  url: "https://sakarya.tarimorman.gov.tr/Haber/274/",
  note: "2023 planında Kulaklı Göleti'ni listeler. Duyuru balıklandırılan göl ve göletleri yalnız amatör avcılığa açık olarak tanımlar."
};
const kulakliMap: ResearchSource = {
  label: "Sakarya Büyükşehir Belediyesi Kent Rehberi — Kulaklı Göleti",
  url: "https://rehber.sakarya.bel.tr/harita/kent/goletler/41.083706,30.368297/kulakli",
  note: "Göletler katmanındaki Kulaklı kaydının koordinatı. Pin su kütlesini tarif eder."
};
const kulakliShore: ResearchSource = {
  label: "Balıkta — Kaynarca Kulaklı Göleti kıyı avı kaydı",
  url: "https://www.youtube.com/watch?v=Y4XNY_HVGco",
  note: "2020 tarihli, göleti adıyla belirten amatör olta kaydı kıyı kullanımına tarihsel örnek sağlar."
};

export const growthRoutes20261126Inland: EnrichedMera[] = [
  {
    slug: "sakarya-kaynarca-kulakli-goleti",
    name: "Kulaklı Göleti",
    province: "Sakarya",
    district: "Kaynarca",
    region: "Marmara",
    waterType: "Gölet",
    zone: "Kaynarca Kulaklı Mahallesi'ndeki sulama göletinin işletme yapıları ve işaretli kısıtlı alanlar dışındaki açık kıyısı.",
    lat: 41.083706,
    lng: 30.368297,
    locationPrecision: "Genel bölge",
    summary: "Sakarya İl Tarım ve Orman Müdürlüğü, Kaynarca'daki Kulaklı Göleti'ne sazan yavrusu bırakıldığını kaydeder. İl müdürlüğünün duyurusuna göre balıklandırılan göletler amatör avcılığa açıktır. İşletme sınırları ve kıyı koşulları yerinde kontrol edilmeli.",
    fish: ["Sazan"],
    methods: ["Mevzuata uygun kıyıdan dip oltası", "Şamandıralı kıyı oltası"],
    baits: ["Mısır", "Hamur"],
    camping: "Kontrol edilmeli",
    vehicleAccess: "Kontrol edilmeli",
    amenities: [],
    cautions: [
      "Set, su alma yapısı, savak ve işletme alanlarından uzak durun. Bariyerli ya da uyarı levhası bulunan kesimlere girmeyin.",
      "Sulama nedeniyle su seviyesi değişebilir. Dik veya çamurlu kıyıda durmayın ve suya girmeyin.",
      "Kıyıya giden son bölümde özel tarım arazisinden geçmeyin. Yetkili makamların güncel levha ve duyurularını kontrol edin."
    ],
    verification: "26 Kasım 2026: Resmî Kulaklı sazan salımı, amatör kullanım duyurusu, belediye harita kaydı, tarihsel kıyı avı kaydı ve güncel içsu mevzuatı incelendi.",
    updatedAt: date,
    publishedAt: date,
    researchedAt: date,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "hold",
    image: "/images/meralar/ulusal/sakarya-kaynarca-kulakli-goleti.svg",
    socialImage: "/images/meralar/ulusal/sakarya-kaynarca-kulakli-goleti.svg",
    navigationNote: "Belediye pini sulama göletini gösterir. Kulaklı Mahallesi yönünden yaklaşın ve açık, kamusal kıyıya ulaşan geçişi tabelalara göre seçin.",
    shoreProfile: "Sulama göletinin toprak kıyısında su çekildiğinde yumuşak çamur tabakası açığa çıkabilir. Set ve işletme tesisleri kıyı tarifinin dışında kalır.",
    transport: "Belediyenin Kent Rehberi'nde Göletler katmanındaki Kulaklı kaydı genel yaklaşım için kullanılabilir. Son bölümün araçla geçilebilirliği güncel koşullara bağlıdır.",
    crowdNote: "Kıyıda başka balıkçılar varsa açık atış hattı bırakan bir kesim seçin.",
    longIntro: [
      "Sakarya İl Tarım ve Orman Müdürlüğü 2021 balıklandırmasında Kulaklı Göleti'ne sazan yavrusu bırakıldığını kaydeder. 2023 duyurusu Kulaklı'yı yeniden programda sayar ve balıklandırılan göletlerde amatör avcılığın geçerli olduğunu belirtir.",
      "Kent Rehberi pini göletin yerini gösterir. Gölet adıyla yayımlanan 2020 kıyı olta kaydı, geçmişteki kullanıma örnektir. Bugünkü su seviyesi, kıyı geçişleri ve stok durumu koşullara bağlıdır."
    ],
    planningNotes: [
      "Göletin işletme tarafında veya işaretli güvenlik alanında takım açmayın.",
      "Sazan salımı kaydıyla güncel popülasyon büyüklüğü ölçülemez."
    ],
    seasonalNotes: [
      "Sakarya İl Tarım, 2026 yılında sazan için 15 Mart–15 Haziran kapalı dönemini duyurdu. Av gününde yürürlükteki dönem, boy, miktar ve yer kurallarını kontrol edin."
    ],
    sources: [kulakliStocking, kulakliAmateur, kulakliMap, kulakliShore, sakaryaSeason, law, amendment2025, amendment2026],
    researchStatus: "26 Kasım 2026 C+ içsu araştırması",
    researchSummary: "Kulaklı Göleti'ne özgü sazan salımı, il müdürlüğünün amatör avcılık açıklaması, belediye konumu ve kıyı olta kaydı doğrulandı.",
    fishEvidence: [
      {
        name: "Sazan",
        scientificName: "Cyprinus carpio",
        evidenceLevel: "Resmî rota-özel balıklandırma",
        sourceLabel: kulakliStocking.label,
        sourceUrl: kulakliStocking.url,
        note: "2021 yavru sazan salım kaydıdır. Yetişkin stok büyüklüğü ölçülmemiştir."
      }
    ],
    accommodationOptions: [],
    accessEvidence: [
      { label: kulakliAmateur.label, value: "Amatör avcılığa açık gölet grubu", sourceUrl: kulakliAmateur.url, note: "Tür, zaman ve sahadaki işletme kısıtları geçerlidir." },
      { label: kulakliShore.label, value: "Kulaklı Göleti kıyısından olta kullanımı", sourceUrl: kulakliShore.url, note: "2020 gözlemi. Güncel su seviyesi ve izinli kıyı geçişleri yerinde kontrol edilir." }
    ],
    navigationVerified: false,
    qualityAssessment: {
      model: "expanded-v2",
      reviewedAt: date,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["Sakarya İl Tarım ve Orman Müdürlüğü — Kulaklı Göleti kayıtları"],
      localContentVerified: true,
      fieldOrEquivalentVerified: false,
      unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1",
      overall: "C",
      reviewedAt: date,
      identity: { level: "strong", label: "Kent Rehberi gölet kaydı", note: "Kulaklı'nın su kütlesi ve harita pini belediye kaydında yer alır." },
      species: { level: "strong", label: "Gölete özgü resmî sazan salımı", note: "2021 salımı resmî kaynakta su adıyla kayıtlıdır." },
      legal: { level: "strong", label: "6/2 ve Sakarya İl Tarım duyuruları", note: "Amatör kullanım, tür ve dönem hükümleriyle birlikte değerlendirilir." },
      access: { level: "partial", label: "Gölet kıyı avı kaydı ve amatör kullanım", note: "Açık kıyı kesimi güncel tabela ve zemin koşullarıyla doğrulanır." },
      field: { level: "unverified", label: "Güncel saha teyidi yok", note: "Son yol ve kıyı açıklığı dönemsel olarak değişebilir." }
    }
  }
];
