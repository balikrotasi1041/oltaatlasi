import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const slug = "istanbul-silivri-gumusyaka-acik-kiyi";
const coastalProject: ResearchSource = {
  label: "Silivri Belediyesi — Gümüşyaka sahil düzenlemesi",
  url: "https://www.silivri.bel.tr/haber/gumusyaka_gece_pazari_yenileniyor_sosyal_tesis_ve_plaj_alani_geliyor/1075",
  note: "Gece Pazarı çevresindeki kamusal alanı, sosyal tesis ve plaj planını Gümüşyaka Mahallesi'nde tanımlar."
};
const publicAccess: ResearchSource = {
  label: "Silivri Belediyesi — Gümüşyaka Gece Pazarı'nda kamusal kullanım",
  url: "https://www.silivri.bel.tr/haber/baskan_balcioglu_gumusyaka_gece_pazarini_ziyaret_etti/1996",
  note: "5 Haziran 2026 açıklaması yenilenen pazar alanının halk tarafından kullanıldığını kaydeder. Sosyal tesisin açıldığını ya da plajda olta izni verildiğini söylemez."
};
const coastalAccessPolicy: ResearchSource = {
  label: "Silivri Belediyesi — Sahillerde kamusal alan denetimleri",
  url: "https://www.silivri.bel.tr/haber/silivri-sahillerinde-kamu-alanlarina-yonelik-denetimler-suruyor/2090",
  note: "20 Ağustos 2026 duyurusu Silivri'nin kamuya açık kumsallarında işgallere karşı yapılan denetimleri açıklar."
};
const coastalReference: ResearchSource = {
  label: "Silivri360 — Gümüşyaka Gece Pazarı konumu",
  url: "https://silivri360.com/mekan/gumusyaka-gece-pazari-gumusyaka/",
  note: "Sahil yolundaki kamusal yaklaşım için 41.04739, 28.05160 referansını verir."
};
const swimmingArea: ResearchSource = {
  label: "Anadolu Ajansı — 2026 İstanbul yüzme alanları listesi",
  url: "https://www.anadoluajansi.gov.tr/tr/gundem/istanbulda-95-nokta-yuzme-alani-olarak-belirlendi/3952780",
  note: "2026 listesinde Silivri Gümüşyaka Çadır Yeri Mevkii yüzme alanıdır."
};
const swimmingBounds: ResearchSource = {
  label: "İstanbul Valiliği — 2020 yaz mevsimi genelgesi ve koordinat listesi",
  url: "https://www.istesob.org.tr/wp-content/uploads/2020/06/169-Nolu-Genelge-22-06-2020-Genelge-2020-1-Yaz-Mevsimi-Kurallari-Hakkinda.pdf",
  note: "Gümüşyaka Belediye Çadır Yeri'nin tarihsel kıyı uçlarını 41.047393/28.054280 ve 41.051402/28.061422 olarak verir. Güncel sınır için sahadaki şamandıralar ve işaretler geçerlidir."
};
const catchReport: ResearchSource = {
  label: "Balık Avı — 15 Temmuz 2007 Silivri Gümüşyaka mırmır kaydı",
  url: "https://www.balikavi.net/konu/15-07-2007-gumusyaka-av-raporu.11937/",
  note: "Balıkçı Gümüşyaka/Silivri kıyısında yemli dip oltasıyla mırmır yakaladığını bildirir. Tarihsel gözlem sahil bandına aittir."
};
const newerCatch: ResearchSource = {
  label: "Gümüşyaka yemli mırmır avı — Kıyı avı kaydı",
  url: "https://www.youtube.com/watch?v=zsAezpkd7mc",
  note: "2025 tarihli olta kaydı Gümüşyaka'yı Silivri kıyısı olarak tanımlar."
};
const law: ResearchSource = {
  label: "Resmî Gazete — 6/2 amatör avcılık tebliği",
  url: "https://www.resmigazete.gov.tr/eskiler/2024/08/20240811-4.htm?sfnsn=scwspwa",
  note: "16. madde deniz oltasını ve şamandıralı yüzme alanı yasağını, 17. madde denizlerdeki yer yasaklarını düzenler."
};
const amendment2025: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2025/12 tebliğ değişikliği",
  url: "https://www.tarimorman.gov.tr/HHGM/Haber/142/",
  note: "16 Nisan 2025 tarihli değişiklik ana tebliğle birlikte uygulanır."
};
const amendment2026: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2026/26 tebliğ değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 tarihli değişiklik ana tebliğle birlikte uygulanır."
};

export const gumusyakaCatchupRoute20261127: EnrichedMera = {
  slug,
  name: "Gümüşyaka Açık Kıyısı",
  province: "İstanbul",
  district: "Silivri",
  region: "Marmara",
  waterType: "Deniz",
  zone: "Silivri Gümüşyaka Mahallesi'nde Sahilyolu Caddesi çevresinden ulaşılan açık Marmara kıyısı. İşaretli yüzme alanları, özel tesis ve iskeleler kapsam dışıdır.",
  lat: 41.04739,
  lng: 28.05160,
  locationPrecision: "Genel bölge",
  summary: "Gümüşyaka'nın İstanbul tarafındaki açık Marmara kıyısıdır. Silivri Gümüşyaka adıyla yayımlanan kıyı avı kaydında mırmır bildirilir. Av planında Gümüşyaka Çadır Yeri yüzme sahasının sınırlarını ve kıyıdaki yaya hareketini dikkate alın.",
  fish: ["Mırmır"],
  methods: ["Güvenli atış açıklığında kıyıdan yemli dip oltası"],
  baits: ["Kum kurdu"],
  camping: "Kontrol edilmeli",
  vehicleAccess: "Kontrol edilmeli",
  amenities: ["Kamusal sahil yaklaşımı"],
  cautions: [
    "1 Nisan–15 Kasım arasında, kıyıdan en çok 200 metre uzaklıktaki şamandıralı yüzme alanlarının içinde avcılık yasaktır. Yüzücülerin kullandığı suya hiçbir dönemde atış yapmayın.",
    "Kamp ve kıyı tesislerini, özel site geçişlerini ve eski av kayıtlarındaki iskeleleri kullanmayın. Güncel levha, kordon ve geçici kapatmalara uyun.",
    "Kıyıya dalga vuruyorsa veya yaya geçişi güvenli atışı engelliyorsa takım açmayın. Kaygan zemine ve suya inmeyin."
  ],
  verification: "27 Kasım 2026: Gümüşyaka'ya özgü belediye ve kıyı avı kayıtları, sahil yolu konumu, 2026 yüzme alanı listesi, tarihsel Valilik koordinatları ve 6/2 değişiklikleri incelendi.",
  updatedAt: date,
  publishedAt: date,
  researchedAt: date,
  confidence: "C",
  qualityGrade: "C+",
  indexing: "hold",
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "Kamusal Sahilyolu Caddesi yaklaşımını izleyin. Harita pini Gece Pazarı'nı kıyı referansı olarak gösterir. Güvenli ve izinli kıyı açıklığını güncel saha işaretlerine göre belirleyin.",
  shoreProfile: "Marmara'ya açık kumluk kıyıda dalga, su seviyesi ve kıyı kullanımı güvenli atış alanını değiştirir. Gümüşyaka Çadır Yeri'nin yüzme şeridini rota dışında tutun.",
  transport: "Gümüşyaka Mahallesi'nde Sahilyolu Caddesi ve Gece Pazarı, kamusal yaklaşım için referanstır. Kamp tesisi ve site içi geçişleri kullanmayın.",
  crowdNote: "Sahil yolundaki yaya hareketiyle yüzücüleri birlikte göz önünde bulundurun. Kamışın gerisinde ve misina yönünde güvenli açıklık arayın.",
  longIntro: [
    "Silivri Belediyesi Gece Pazarı çevresindeki sahil düzenlemesini ve yenilenen pazarın 2026'da kamusal kullanımını belgeler. Buradaki rota Gümüşyaka Mahallesi'nin deniz kıyısını kapsar. Gümüşyaka Göleti ayrı bir içsudur.",
    "Temmuz 2007 tarihli Silivri Gümüşyaka av raporunda yemli dip oltasıyla mırmır yakalandığı bildirilir. Bu kayıttaki iskele erişimi günümüz için doğrulanmış değildir. Tür kaydı sahil bandına aittir ve bugünkü av verimini göstermez."
  ],
  planningNotes: [
    "Çadır Yeri Mevkii 2026 yüzme alanı listesindedir. Yolculuk günü şamandıra, cankurtaran ve uyarı levhalarını kontrol edin.",
    "Olta açmadan önce açık, kamusal ve güvenli bir kıyı açıklığı bulun. Bu koşullar sağlanmıyorsa avı erteleyin."
  ],
  seasonalNotes: ["6/2 Tebliği'nin alan, takım ve miktar hükümleri geçerlidir. 1 Nisan–15 Kasım döneminde şamandıralı yüzme alanları içinde su ürünleri avcılığı yapılmaz."],
  sources: [coastalProject, publicAccess, coastalAccessPolicy, coastalReference, swimmingArea, swimmingBounds, catchReport, newerCatch, law, amendment2025, amendment2026],
  researchStatus: "27 Kasım 2026 C+ kıyı araştırması",
  researchSummary: "Silivri Gümüşyaka'nın kamusal sahil yaklaşımı belediye belgeleriyle, mırmırın sahil bandındaki varlığı tarihli birinci el av raporuyla desteklenir. 2026 yüzme alanı ve 6/2 kısıtları rota açıklamasında işlenmiştir.",
  fishEvidence: [{
    name: "Mırmır",
    scientificName: "Lithognathus mormyrus",
    evidenceLevel: "Yer ve tarih içeren birinci el kıyı avı kaydı",
    sourceLabel: catchReport.label,
    sourceUrl: catchReport.url,
    note: "15 Temmuz 2007'de Gümüşyaka/Silivri kıyısında bildirilen amatör av. Kaydın belirli iskeleleri rota kapsamı dışındadır."
  }],
  accommodationOptions: [],
  accessEvidence: [
    { label: coastalProject.label, value: "Kıyı bandındaki belediye projesi", sourceUrl: coastalProject.url, note: "Dayanak, sahil çevresinin kamusal kullanım bağlamını gösterir." },
    { label: publicAccess.label, value: "2026'da kullanılan kamusal Gece Pazarı", sourceUrl: publicAccess.url, note: "Rota yaklaşımı için kıyıya yakın kamusal referanstır." }
  ],
  navigationVerified: false,
  qualityAssessment: {
    model: "expanded-v2",
    reviewedAt: date,
    identityVerified: true,
    speciesRouteSpecific: true,
    currentLawResolved: true,
    safePublicAccessVerified: true,
    independentStrongFamilies: ["Silivri Belediyesi — Gümüşyaka sahil düzenlemesi ve 2026 kamusal kullanım"],
    localContentVerified: true,
    fieldOrEquivalentVerified: false,
    unresolvedRisks: []
  },
  confidenceProfile: {
    model: "evidence-v1",
    overall: "C",
    reviewedAt: date,
    identity: { level: "strong", label: "Silivri Belediyesi Gümüşyaka kıyı kayıtları", note: "Gümüşyaka Mahallesi'ndeki İstanbul kıyısı ve yaklaşımı ayrı tanımlanır." },
    species: { level: "partial", label: "Yer ve tarih içeren kıyı avı bildirimi", note: "Mırmır, Silivri Gümüşyaka sahil bandında kayda geçmiştir." },
    legal: { level: "strong", label: "6/2 ve 2026 yüzme alanı", note: "Çadır Yeri yüzme alanı, 6/2 ve güncel yerel işaretler birlikte dikkate alınır." },
    access: { level: "partial", label: "Kamusal sahil yolu yaklaşımı", note: "Gece Pazarı referansı araç veya olta erişimi garantisi vermez." },
    field: { level: "unverified", label: "Güncel saha ölçümü yok", note: "Harita noktası kamusal yaklaşımı gösterir." }
  }
};
