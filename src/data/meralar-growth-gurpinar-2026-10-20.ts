import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-20";
const slug = "istanbul-beylikduzu-gurpinar-sahil-acik-kiyi";
const contest2018: ResearchSource = {
  label: "Beylikdüzü Belediyesi – Gürpınar Sahili olta yarışması ve kırlangıç avı (2018)",
  url: "https://www.beylikduzu.istanbul/haber/907/200-olta-balikcisi-beylikduzu-sahilinde-yaristi",
  note: "Belediye, Gürpınar Stadı–Balık Hali arasındaki yaklaşık 2,5 km halka açılmış kıyıda olta yarışması yapıldığını ve 41,5 cm kırlangıç yakalandığını bildirir. Tarihsel kayıt günlük av garantisi değildir."
};
const contest2024: ResearchSource = {
  label: "Beylikdüzü Belediyesi – Gürpınar Balık Hali Sahili olta yarışması (2024)",
  url: "https://www.beylikduzu.istanbul/haber/2405/6-olta-balikciligi-yarismasi-renkli-goruntulere-sahne-oldu",
  note: "Belediye 76 amatör oltacının Balık Hali Sahili'ndeki etkinliğini kaydeder; halin operasyon sahası ve iskeleleri kamusal olta kıyısı sayılmaz."
};
const public2026: ResearchSource = {
  label: "Beylikdüzü Belediyesi – 2026 Gürpınar Sahili kamusal bisiklet etkinliği",
  url: "https://www.beylikduzu.istanbul/duyurular/pedallar-saglikli-yasam-icin-donuyor-913",
  note: "19 Nisan 2026 halka açık spor etkinliği Gürpınar Sahili'nden başlar; kamusal sahil kullanımının güncel bağlamıdır, her kıyı metresinde olta izni değildir."
};
const municipalityService: ResearchSource = {
  label: "Beylikdüzü Belediyesi – spor hizmetleri, Gürpınar Sahili olta yarışması",
  url: "https://beylikduzu.istanbul/hizmet/spor-hizmetleri",
  note: "Belediye hizmet kataloğu Gürpınar Sahili'ni olta yarışması yeri olarak ayrı adlandırır."
};
const map: ResearchSource = {
  label: "OpenStreetMap – Gürpınar Sahili kamusal park şeridi",
  url: "https://www.openstreetmap.org/way/218591012",
  note: "Park şeridi 40.976–40.994 N aralığında kayıtlıdır; 40.9811, 28.5992 Dalyan Caddesi genel karasal yaklaşımıdır, suya inen kesin kapı veya izinli atış cebi değildir."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık ana tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör avcılığı tür, boy, adet, yöntem ve işaretli yüzme alanı hükümleri; av gününde güncel sürüm uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 2026/26 tarihli 6/2 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği ana 6/2 metni ile birlikte değerlendirilir."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Balık Hali kıyı tesisi, iskele, yanaşma ve manevra sahaları açık sahil yürüyüş bandından ayrılır."
};

export const growthGurpinarRoute20261020: EnrichedMera = {
  slug,
  name: "Gürpınar Sahili Açık Kıyı Yürüyüş Bandı",
  province: "İstanbul",
  district: "Beylikdüzü",
  zone: "Gürpınar Stadı–Balık Hali arasındaki belediyece tanımlanan kamusal kıyı; balık hali tesisi, iskele ve işaretli yüzme alanı hariç",
  waterType: "Deniz",
  region: "Marmara",
  summary: "Gürpınar Sahili'ndeki kamusal yürüyüş kıyısı, belediyenin rota üzerinde düzenlediği amatör olta yarışması ve kaydettiği kırlangıç avıyla desteklenir. Pin genel yaklaşım içindir; tesis, plaj veya izinli atış cebi değildir.",
  fish: ["Kırlangıç"],
  methods: ["Kıyıdan mevzuata uygun olta"],
  baits: ["Mevzuata uygun yapay veya doğal yem"],
  camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli",
  amenities: [],
  cautions: [
    "Gürpınar Balık Hali, balıkçı barınağı, iskele, bağlı tekne, mendirek ve yanaşma/manevra sahası olta rotası değildir.",
    "1 Nisan–15 Kasım döneminde şamandıralı yüzme alanı ve plaj kullanımından uzak dur; yaya, bisiklet ve etkinlik koridoruna olta savurma.",
    "Marmara'da lodos dalgası, kaygan tahkimat ve suya yakın yüksek kıyı duvarı risklidir; güvenli kuru kıyı bulunmazsa avı ertele."
  ],
  lat: 40.9811,
  lng: 28.5992,
  locationPrecision: "Genel bölge",
  verification: "20 Ekim 2026 masa başı değerlendirmesi: Beylikdüzü Belediyesi 2018'de Gürpınar Stadı–Balık Hali arasındaki halka açık kıyı aksında amatör olta yarışması ve 41,5 cm kırlangıç avını, 2024'te Balık Hali Sahili'nde başka olta etkinliğini, 2026'da Gürpınar Sahili'nde açık spor kullanımını bildirir. 6/2 ana tebliğ ve 2026/26 değişikliği, şamandıralı yüzme alanı ve kıyı tesisi yasaklarıyla birlikte incelendi. Pin Dalyan Caddesi genel yaklaşımdır; açık bir mikro atış cebi saha teyitli değildir.",
  updatedAt: date,
  publishedAt: date,
  confidence: "C",
  qualityGrade: "C+",
  indexing: "index",
  qualityAssessment: {
    model: "expanded-v2", reviewedAt: date,
    identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true,
    safePublicAccessVerified: true,
    independentStrongFamilies: ["Beylikdüzü Belediyesi rota-özel olta yarışmaları"],
    localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
  },
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "40.9811, 28.5992 Dalyan Caddesi genel karasal kıyı yaklaşımıdır; plaj, balık hali, barınak, liman, kıyı giriş kapısı veya izinli olta noktasının kesin koordinatı değildir. Son kıyı geçişi, levha ve güvenli atış açıklığı yerinde doğrulanır.",
  shoreProfile: "Belediyenin tarif ettiği Gürpınar Stadı–Balık Hali kamusal sahil aksı yürüyüş ve bisiklet kullanımına da açıktır. Bu kayıt yalnız tesis ve yüzme sınırları dışında kalan güvenli kuru kıyıyı planlama konusu yapar; yarışma gününün özel düzeni her gün geçerli izin sayılmaz.",
  transport: "Gürpınar Sahili ve Dalyan Caddesi belediye kaynakları ve haritada tanımlıdır; son yaklaşımda balık hali işletmesi, plaj ve etkinlik bariyerleri kontrol edilir.",
  crowdNote: "Yaz yüzmesi, bisiklet, yaya ve belediye etkinlikleri açık olta cebini daraltabilir; arka atış koridoru boş değilse olta açma.",
  longIntro: [
    "Beylikdüzü Belediyesi 2018 olta yarışmasını Gürpınar Stadı'ndan Balık Hali'ne uzanan halka açık sahilde düzenledi. Aynı etkinlikte 41,5 cm kırlangıç balığı kaydetti; bu tarihsel rota kanıtı güncel stok veya av başarısı vaadi değildir.",
    "2024 yarışması ve 2026 halka açık sahil etkinliği kıyının canlı kamusal kullanımını gösterir. Balık Hali'nin işletme, iskele ve tekneli alanları ile şamandıralı yüzme bölümü açık sahilden ayrı tutulur."
  ],
  planningNotes: [
    "6/2 ana tebliğ ile 2026/26 değişikliğindeki boy, adet, yöntem ve yer sınırlarını av gününde yeniden kontrol et.",
    "Balık Hali, barınak, marina veya işaretli yüzme alanına girme; açık kıyıda yaya/bisiklet güvenliği sağlanmıyorsa avı ertele."
  ],
  seasonalNotes: [
    "Kırlangıç 2018 yarışmasında yakalanmıştır; bugün veya her mevsim yakalanacağını göstermez.",
    "1 Nisan–15 Kasım şamandıralı yüzme alanı ve hava/dalga koşulları sahil kullanımını etkiler."
  ],
  sources: [contest2018, contest2024, public2026, municipalityService, map, law, amendment, portLaw],
  researchStatus: "20 Ekim 2026 yeni program: C+ çekirdek kanıt değerlendirmesi; ilk yayında index,follow",
  researchSummary: "Belediyenin Gürpınar sahiline özgü olta yarışması ve kırlangıç kaydı, 2026 güncel kamusal kullanım, 6/2 ve kıyı tesisi/yüzme sınırları birlikte değerlendirildi.",
  researchedAt: date,
  fishEvidence: [{name: "Kırlangıç", scientificName: null, evidenceLevel: "Gürpınar Sahili 2018 belediye olta yarışmasında av kaydı", sourceLabel: contest2018.label, sourceUrl: contest2018.url, note: contest2018.note}],
  accessEvidence: [
    {label: contest2018.label, value: "Gürpınar Stadı–Balık Hali arasında halka açılan sahilde doğrudan olta etkinliği", sourceUrl: contest2018.url, note: contest2018.note},
    {label: public2026.label, value: "Gürpınar Sahili'nde 2026 halka açık spor etkinliği", sourceUrl: public2026.url, note: public2026.note}
  ],
  accommodationOptions: [], navigationVerified: false,
  confidenceProfile: {
    model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: {level: "strong", label: "Gürpınar açık sahil aksı", note: "Belediye stad–hal arasındaki halka açık sahil hattını adlandırır; tesisler dışarıdadır."},
    species: {level: "strong", label: "Rota-özel kırlangıç kaydı", note: "Belediye 2018 yarışmasında 41,5 cm kırlangıç avını bildirir."},
    legal: {level: "strong", label: "6/2 ve kıyı tesisi sınırları", note: "2026/26 değişikliği, yüzme alanı ve liman/hal işletmesi dışlama şartları incelendi."},
    access: {level: "partial", label: "Kamusal yürüyüş kıyısı", note: "2018 olta ve 2026 halka açık etkinlik genel erişimi destekler; mikro atış cebi teyitli değildir."},
    field: {level: "unverified", label: "Mikro kıyı saha teyidi yok", note: "Pin genel yaklaşım olup kesin izinli atış noktası değildir."}
  }
};
