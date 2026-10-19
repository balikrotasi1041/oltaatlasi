import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-19";
const slug = "istanbul-sariyer-kirecburnu-haydar-aliyev-parki-acik-kiyi";

const guide: ResearchSource = {
  label: "İBB Tarım ve Su Ürünleri – Yeni Başlayanlar İçin Olta Balıkçılığı (2017)",
  url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
  note: "Rehber Kireçburnu–Yeniköy kıyı hattını yürüyüş, bisiklet ve olta için adlandırır; bu tarihsel kayıt parkın bugünkü her kıyı cebine otomatik izin vermez."
};
const shoreCatch: ResearchSource = {
  label: "Yeni Mesaj – Kireçburnu Sahili'nde kıyıdan palamut avı (2022)",
  url: "https://www.yenimesaj.com.tr/amator-balikcilar-sahili-doldurdu-H1452332.htm",
  note: "18 Eylül 2022 tarihli yerinde haberde amatör kıyı balıkçılarıyla görüşülür ve Kireçburnu Sahili'nde palamut avı bildirilir; parkın belirli mikro cebinde bugünkü av garantisi değildir."
};
const officialFish: ResearchSource = {
  label: "İstanbul İl Tarım ve Orman Müdürlüğü – Kireçburnu açıklarında av kaydı",
  url: "https://istanbul.tarimorman.gov.tr/Haber/219/Istanbullu-Balikcilar-Vira-Bismillah-Dedi",
  note: "2015'te Kireçburnu açıklarındaki ticari ağlara sardalya ve istavrit takıldığını bildirir; açık deniz ağ verisi park kıyısında amatör yakalama verisi olarak sunulmaz."
};
const association: ResearchSource = {
  label: "İSOBDER – Kalbin İçin Olta At, Haydar Aliyev Parkı",
  url: "https://www.isobder.org/etkinlikler/kalbin-icin-olta-at/",
  note: "İstanbul Amatör ve Sportif Olta Balıkçılığı Derneği'nin 15 Nisan 2017 etkinlik kaydı, olta etkinliğinin doğrudan Kireçburnu Haydar Aliyev Parkı'nda yapıldığını belirtir."
};
const municipalPark: ResearchSource = {
  label: "Sarıyer Belediyesi – 2025 faaliyet raporu, park bakımı",
  url: "https://sariyer.bel.tr/Uploads/TinyMCE/Content/2026/04/76396e3a-62c1-4344-81ee-66de54742bd4.pdf",
  note: "2026'da yayımlanan belediye faaliyet raporu Kireçburnu Mahallesi Haydar Aliyev Parkı'nı güncel park bakım listesinde ayrı adla sayar."
};
const municipalGuide: ResearchSource = {
  label: "Sarıyer Belediyesi – Sarıyer Yaşam Rehberi (2024)",
  url: "https://sariyer.bel.tr/ckuploads/ckfiles/SARIYER%20YASAM%20REHBERI-09.05.2024.pdf?time=1715233947652",
  note: "Haydar Aliyev Parkı'nı Kireçburnu, mevcut Kefeliköy rotasının Meral Okay Senaristler Parkı'nı ise Kefeliköy başlığı altında ayrı gösterir."
};
const municipalPlan: ResearchSource = {
  label: "Sarıyer Belediyesi – Haydar Aliyev Parkı etkinlik yerleşim planı",
  url: "https://sariyer.bel.tr/ckuploads/ckfiles/edebiyat%20g%C3%BCnleriPROGRAM-17.05.2022.pdf?time=1652778706796",
  note: "2022 etkinlik planı parkın deniz kenarında kamusal yaya/etkinlik alanı olduğunu gösterir; dönemsel etkinlik cepleri olta alanı sayılmaz."
};
const location: ResearchSource = {
  label: "HaritaMap – Kireçburnu Haydar Aliyev Parkı genel konumu",
  url: "https://www.haritamap.com/yer/haydar-aliyev-parki-sariyer",
  note: "41.148865, 29.045399 park merkezi yaklaşık konumudur; kıyı çizgisi, giriş, mülkiyet sınırı veya doğrulanmış atış noktası pini değildir."
};
const nationalLaw: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör avcılığına ilişkin tür, boy, miktar, yöntem ve alan kurallarının ana metni; güncel yerel kararlarla birlikte uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 ana tebliğiyle birlikte yürürlükteki 2026 değişikliğini verir; av günü yeniden kontrol edilir."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği, madde 21",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Kıyı tesislerinin yaklaşım, mendirek, yanaşma ve bağlama sahalarındaki su ürünleri av yasağı Kireçburnu Balıkçı İskelesi için özellikle kontrol edilir."
};
const activeHarbour: ResearchSource = {
  label: "İstanbul İl Tarım ve Orman Müdürlüğü – 2026 av sezonu açılışı",
  url: "https://istanbul.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=0069152d-9984-4dd2-a999-f06cd66392fc&TermSetId=013f24a8-4f3b-4247-8a02-33d0fbf2782a&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=3146",
  note: "31 Ağustos 2026 törenini Kireçburnu Balıkçı İskelesi'nde adlandırır; bu aktif işletme/tekne sahası parkın olta rotasından dışlanır."
};

export const growthKirecburnuRoute20261019: EnrichedMera = {
  slug,
  name: "Kireçburnu Haydar Aliyev Parkı Açık Kıyısı",
  province: "İstanbul",
  district: "Sarıyer",
  zone: "Kireçburnu Haydar Aliyev Parkı'nın kamusal Boğaz cephesi; balıkçı iskelesi ve bağlı tekne sahası hariç",
  waterType: "Deniz",
  region: "Marmara",
  summary: "Sarıyer Kireçburnu'ndaki Haydar Aliyev Parkı, geçmişte amatör olta etkinliği yapılan kamusal Boğaz kıyısıdır. Tür kaydı tarihsel ve kıyı düzeyindedir; pin izinli mikro atış noktası değildir.",
  fish: ["Palamut"],
  methods: ["Kıyıdan mevzuata uygun olta"],
  baits: ["Mevzuata uygun yapay veya doğal yem"],
  camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli",
  amenities: [],
  cautions: [
    "Kireçburnu Balıkçı İskelesi, mendirek ağzı, tekne bağlama ve manevra sahası rota dışında kalır; tesis yaklaşım yasağını uygula.",
    "Parktaki çocuk, etkinlik, yaya ve bisiklet alanlarında güvenli arka atış koridoru yoksa olta açma.",
    "Boğaz akıntısı, dalga sıçraması ve kaygan tahkimatta geride kal; işaretli yüzme alanı ve güncel saha levhalarına uy."
  ],
  lat: 41.148865,
  lng: 29.045399,
  locationPrecision: "Genel bölge",
  verification: "19 Ekim 2026 masa başı incelemesi: İBB'nin 2017 rehberi Kireçburnu–Yeniköy hattında olta kullanımını, İSOBDER 2017 kaydı doğrudan Haydar Aliyev Parkı'nda olta etkinliğini, 2022 yerinde haber Kireçburnu Sahili'nde kıyıdan palamut avını gösterir. İl Tarımın 2015 açık deniz istavrit/sardalya kaydı yalnız bölgesel bağlam olarak kullanıldı. Sarıyer Belediyesinin 2024 park rehberi ve 2026 faaliyet raporu park kimliği ile genel kamu erişimini doğrular. 6/2, 2026/26 ve aktif balıkçı iskelesi sınırı incelendi. Mikro atış cebi ve anlık levha saha teyitli değildir.",
  updatedAt: date,
  publishedAt: date,
  confidence: "C",
  qualityGrade: "C+",
  indexing: "index",
  qualityAssessment: {
    model: "expanded-v2",
    reviewedAt: date,
    identityVerified: true,
    speciesRouteSpecific: true,
    currentLawResolved: true,
    safePublicAccessVerified: true,
    independentStrongFamilies: ["İBB olta rehberi", "Sarıyer Belediyesi park kayıtları", "İSOBDER park olta etkinliği"],
    localContentVerified: true,
    fieldOrEquivalentVerified: false,
    unresolvedRisks: []
  },
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "41.148865, 29.045399 Haydar Aliyev Parkı'nın yaklaşık merkezidir. İskele, mendirek, tekne sahası veya izinli olta cebi konumu değildir; son açık yaya kıyısı av günü yerinde kontrol edilir.",
  shoreProfile: "Haydar Aliyev Parkı, Kireçburnu'nun kamusal Boğaz cephesindedir; Sarıyer Belediyesinin rehberinde Kefeliköy/Meral Okay Senaristler Parkı'ndan ayrı kayıtlıdır. Bu rota yalnız parkın işletme ve bağlama sahasından ayrılmış güvenli kuru kıyı bölümünü tarif eder.",
  transport: "Kireçburnu Mahallesi Haydar Aliyev Parkı genel yaklaşımı belediye kaynaklarında doğrulanır; son yaya geçişinde etkinlik bariyeri, iskele işletmesi ve kıyı levhası kontrol edilir.",
  crowdNote: "Belediye etkinlikleri, çocuk parkı ve kıyı yürüyüşü atış boşluğunu daraltabilir; kalabalıkta av ertelenir.",
  longIntro: [
    "İBB'nin 2017 olta rehberi Kireçburnu–Yeniköy hattını oltaya uygun kıyı olarak adlandırır. İSOBDER aynı yıl Haydar Aliyev Parkı'nda amatör olta etkinliği düzenlemiştir; bu tarihsel bilgiler bugünkü her metre için açık izin anlamına gelmez.",
    "2022'de Kireçburnu Sahili'nde kıyıdan palamut avlayan amatör balıkçılarla yapılan yerinde görüşme tür iddiasının temelidir. İl Tarımın daha eski istavrit/sardalya açık deniz ağ kaydı park kıyısına taşınmaz. Aktif balıkçı iskelesi ve bağlı tekne alanı kesinlikle rota dışıdır."
  ],
  planningNotes: [
    "6/2 ana tebliği ve 2026/26 değişikliğindeki tür, boy, miktar, yöntem ve yer sınırlarını av gününde yeniden oku.",
    "Balıkçı iskelesine, mendireğe, yanaşma/bağlama alanına veya özel işletme kıyısına olta yöneltme.",
    "Parkta etkinlik veya kalabalık varsa güvenli boş kıyı bulamadan takım açma."
  ],
  seasonalNotes: [
    "2022 palamut kıyı avı tarihsel rota kanıtıdır; balığın bugün veya her mevsim park kıyısında bulunduğu iddiası değildir.",
    "Boğaz akıntısı, deniz trafiği, hava ve yerel kısıtlar günlük kullanımı değiştirebilir."
  ],
  sources: [guide, association, shoreCatch, officialFish, municipalPark, municipalGuide, municipalPlan, location, nationalLaw, amendment, portLaw, activeHarbour],
  researchStatus: "19 Ekim 2026 yeni program: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
  researchSummary: "İBB'nin rota özelindeki olta hattı, ISOBDER'in doğrudan park etkinliği, kıyıdan palamut yerinde haberi ve güncel belediye park kaydı birlikte incelendi. Mikro atış yeri garanti edilmez; aktif balıkçı iskelesi dışlanır.",
  researchedAt: date,
  fishEvidence: [{
    name: "Palamut",
    scientificName: null,
    evidenceLevel: "Kireçburnu Sahili kıyıdan amatör av, 2022 yerinde röportaj",
    sourceLabel: shoreCatch.label,
    sourceUrl: shoreCatch.url,
    note: shoreCatch.note
  }],
  accessEvidence: [
    { label: association.label, value: "Haydar Aliyev Parkı'nda geçmiş amatör olta etkinliği", sourceUrl: association.url, note: association.note },
    { label: municipalPark.label, value: "Güncel belediye park bakım kaydı ve genel kamusal kullanım", sourceUrl: municipalPark.url, note: municipalPark.note }
  ],
  accommodationOptions: [],
  navigationVerified: false,
  confidenceProfile: {
    model: "evidence-v1",
    overall: "C",
    reviewedAt: date,
    identity: { level: "strong", label: "Ayrı belediye parkı", note: "Sarıyer Belediyesi Haydar Aliyev Parkı'nı Kireçburnu, Meral Okay Senaristler Parkı'nı Kefeliköy başlığında ayrı sayar." },
    species: { level: "strong", label: "Kireçburnu kıyı palamudu", note: "2022 yerinde amatör kıyı avı röportajı; günlük av veya parkın her cebinde tür garantisi değildir." },
    legal: { level: "strong", label: "6/2 ve aktif iskele sınırı", note: "2026/26 değişikliği ve Limanlar Yönetmeliği ile aktif Kireçburnu Balıkçı İskelesi sahası ayrı değerlendirildi." },
    access: { level: "partial", label: "Kamusal parkın açık kıyısı", note: "Güncel belediye park kaydı ve geçmiş olta etkinliği genel erişimi destekler; anlık levha ve mikro kıyı yerinde doğrulanır." },
    field: { level: "unverified", label: "Saha mikro teyidi yok", note: "Yaklaşık park pini izinli atış cebi veya güncel boş kıyı garantisi değildir." }
  }
};
