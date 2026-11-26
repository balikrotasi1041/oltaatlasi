import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const slug = "istanbul-buyukcekmece-sinanoba-marina24-onu-park-kiyisi";
const coastalPlan: ResearchSource = {
  label: "İBB — Büyükçekmece Tsunami Risk Analizi ve Eylem Planı",
  url: "https://depremzemin.ibb.istanbul/uploads/prefix-buyukcekmece-tsunami-666af15179435.pdf",
  note: "Basılı 33. sayfa, Liman Sokak ile Sinanoba Burnu arasındaki kıyıda park, yeşil alan ve yürüyüş yollarını tanımlar. Deniz taşkınında kıyının hızla tahliye edilmesini önerir."
};
const publicPath: ResearchSource = {
  label: "OpenStreetMap — Sinanoba sahilindeki yaya yolu",
  url: "https://www.openstreetmap.org/way/1514952188",
  note: "Bu kıyıdaki yaya yolunu kamu erişimine açık olarak haritalar. Harita referansı yolun denize yakın ucudur."
};
const parkMap: ResearchSource = {
  label: "OpenStreetMap — Mimarsinan Sahil Parkı",
  url: "https://www.openstreetmap.org/way/1086495907",
  note: "Sinanoba'daki rota kesimini de içeren kıyı parkının sınırlarını gösterir."
};
const residentialMap: ResearchSource = {
  label: "OpenStreetMap — Marina 24 konut alanı",
  url: "https://www.openstreetmap.org/way/1514952193",
  note: "Konut kompleksini kıyı parkından ayrı sınırlar. Özel site kapısı, iskele ve tesisler rota dışıdır."
};
const mirmirObservation: ResearchSource = {
  label: "Kıyı Dünyası — Sinanoba Marina 24 karşısında mırmır avı",
  url: "https://www.youtube.com/watch?v=xVdkI5ONAps",
  note: "Balıkçı, 31 Temmuz 2026 tarihli avını Büyükçekmece Marina 24 Sinanoba sahili olarak tanımlar ve mırmır yakaladığını bildirir."
};
const swimmingList: ResearchSource = {
  label: "Anadolu Ajansı — 2026 İstanbul yüzme alanları",
  url: "https://www.aa.com.tr/tr/gundem/istanbulda-95-nokta-yuzme-alani-olarak-belirlendi/3952780",
  note: "İl Sağlık Müdürlüğünün 2026 listesinde Mimarsinan yüzme alanı ayrıca belirtilir. Kıyı rotası, şamandıralı ve yüzülen kesimleri dışarıda bırakır."
};
const swimmingBounds: ResearchSource = {
  label: "İstanbul Valiliği — Yüzme Alanları Koordinat Listesi",
  url: "https://www.istesob.org.tr/wp-content/uploads/2020/06/169-Nolu-Genelge-22-06-2020-Genelge-2020-1-Yaz-Mevsimi-Kurallari-Hakkinda.pdf",
  note: "Mimarsinan yüzme alanının yayımlanmış tarihsel koordinatları park rotasından yaklaşık 2 km kuzeydoğudadır. Güncel şamandıralar ve tabelalar esas alınır."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 6/2 amatör avcılık tebliği",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "Deniz amatör avcılığı için tür, boy, miktar, takım ve alan hükümlerinin ana metnidir."
};
const law2025: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2025/12 tebliğ değişikliği",
  url: "https://www.tarimorman.gov.tr/HHGM/Haber/142/",
  note: "16 Nisan 2025 tarihli değişikliği yayımlar."
};
const law2026: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2026/26 tebliğ değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 tarihli değişiklik ana tebliğle birlikte uygulanır."
};

export const sinanobaCatchupRoute20261127: EnrichedMera = {
  slug,
  name: "Sinanoba Marina 24 Önü Park Kıyısı",
  province: "İstanbul",
  district: "Büyükçekmece",
  region: "Marmara",
  waterType: "Deniz",
  zone: "Sinanoba'da, Marina 24 konutları ile Marmara Denizi arasındaki kamusal sahil parkının açık kıyısı. Yaya hattına komşu kuru kıyı kesimiyle sınırlıdır.",
  lat: 40.9996693,
  lng: 28.5471173,
  locationPrecision: "Genel bölge",
  summary: "Büyükçekmece Körfezi'nin batı yakasında Sinanoba'daki park kıyısıdır. Tarihli bir kıyı avı kaydında mırmır yakalanmıştır. Yaya ve bisiklet trafiği ile dalga koşulları avlanmaya elverişli açıklığı sınırlar.",
  fish: ["Mırmır"],
  methods: ["Hafif kıyı oltası", "Yemli dip takımı"],
  baits: ["Yumuşak silikon", "Tür için uygun doğal yem"],
  camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli",
  amenities: ["Kamusal sahil parkı", "Yaya yolu"],
  cautions: [
    "Islak kıyı taşları ve dalga güvenli yaklaşımı engelliyorsa park yolunda kalın. Tahkimat taşlarına ve ıslak basamaklara inmeyin.",
    "Yaya ve bisiklet yollarında olta atmayın. Kıyıda arkası açık ve güvenli bir atış alanı yoksa takım kurmayın.",
    "Yüzme alanı, özel tesis ve iskele sınırlarına girmeyin. Yerel tabela, kordon ve geçici kapatmalara uyun."
  ],
  verification: "27 Kasım 2026: İBB kıyı planı, haritalanmış kamusal yaya yolu, konut sınırı, 31 Temmuz 2026 tarihli mırmır kaydı, 2026 yüzme listesi ve 6/2 tebliğinin geçerli değişiklikleri incelendi.",
  updatedAt: date,
  publishedAt: date,
  researchedAt: date,
  confidence: "C",
  qualityGrade: "C+",
  indexing: "hold",
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "Sinanoba sahil parkının kamusal yaya bağlantısından ilerleyin. Koordinat kıyıya yakın yaya yolunu gösterir. Marina 24 site girişi, özel sosyal alan ve iskele kapsam dışında kalır.",
  shoreProfile: "Körfezin batı kıyısındaki park yürüyüş yolu ile Marmara arasındaki kısa açık kesimdir. Kıyı şeridi yer yer taşla güçlendirilmiştir. Deniz yükseldiğinde ve dalga kıyıyı ıslattığında geri çekilin.",
  transport: "Ünlüsoy Caddesi tarafındaki kamusal yaya bağlantılarından sahil parkına yaklaşılır. Özel site içinden geçiş yapmayın. Bisiklet yolunu açık tutun.",
  crowdNote: "Yürüyüşçüler ve bisikletliler kıyıyı birlikte kullanır. İnsanlar takımın salınım alanında veya denizdeyse avı bekletin.",
  longIntro: [
    "İBB'nin ilçe kıyı raporu Mimarsinan Liman Sokağı ile Sinanoba Burnu arasında parklar ve kamusal yürüyüş hatları tarif eder. Bu sayfa Sinanoba'da Marina 24 konutlarının deniz tarafındaki kısa park cephesini kapsar.",
    "31 Temmuz 2026 tarihli olta kaydında Sinanoba Marina 24 kıyısında hafif takımla mırmır yakalandığı bildirilir. Türün bu kıyıda kaydedilmiş olması her ziyarette av alınacağı anlamına gelmez."
  ],
  planningNotes: [
    "Yolun ve kıyının güncel tabela, bakım ve geçiş koşullarını gözden geçirin. Deniz önünde yüzücüler varsa o açıklığı kullanmayın.",
    "Dalga ve yükselen su kıyının güvenli kullanımını engellerse geri çekilin. Resmî tahliye uyarısında kıyıyı terk edin."
  ],
  seasonalNotes: ["Temmuz mırmır kaydı tek bir av gününü gösterir. Güncel 6/2 deniz avı kurallarında tür, boy ve miktar sınırlarını kontrol edin."],
  sources: [coastalPlan, publicPath, parkMap, residentialMap, mirmirObservation, swimmingList, swimmingBounds, law, law2025, law2026],
  researchStatus: "27 Kasım 2026 C+ kıyı araştırması",
  researchSummary: "İBB kıyı planı ve harita, konutlardan ayrı kamusal yaklaşımı gösterir. Tarihli kıyı avı mırmırı, yürürlükteki 6/2 düzenlemeleri de deniz avı koşullarını belgeler.",
  fishEvidence: [
    { name: "Mırmır", evidenceLevel: "Tarih ve kıyı adı içeren birinci el av kaydı", sourceLabel: mirmirObservation.label, sourceUrl: mirmirObservation.url, note: "31 Temmuz 2026 tarihli tekil kıyı gözlemi." }
  ],
  accommodationOptions: [],
  accessEvidence: [
    { label: coastalPlan.label, value: "Liman Sokak–Sinanoba Burnu arasında kıyı parkı ve yürüyüş yolu", sourceUrl: coastalPlan.url, note: "İBB'nin kıyı kullanım ve tahliye tanımı." },
    { label: publicPath.label, value: "Haritalanmış kamusal yaya erişimi", sourceUrl: publicPath.url, note: "Konut alanı ile bisiklet yolu ayrı tutulur." }
  ],
  navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["İBB Büyükçekmece kıyı kullanım ve risk envanteri"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: {
    model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "İBB kıyı raporu ve harita sınırları", note: "Sinanoba sahil parkı, Marmara kıyısında ve Marina 24 konut sınırı dışındadır." },
    species: { level: "partial", label: "Tarihli kıyı avı kaydı", note: "Mırmır tekil ve konuma bağlı av gözlemiyle desteklenir." },
    legal: { level: "strong", label: "6/2 ve değişiklikleri", note: "Deniz amatör avı, yerel levhalar ve belirlenmiş yüzme alanı sınırlarına tabidir." },
    access: { level: "partial", label: "Kamusal park ve yaya yolu bağlamı", note: "Kıyı açıklığı ile güncel kapanmalar yolculuk günü kontrol edilir." },
    field: { level: "unverified", label: "Yeni saha ziyareti yapılmadı", note: "Koordinat kamusal yaklaşım referansıdır." }
  }
};
