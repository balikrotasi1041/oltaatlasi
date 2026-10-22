import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-22";
const slug = "istanbul-uskudar-kuleli-sahili-acik-kiyi";

const ibbFish: ResearchSource = {
  label: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)",
  url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle",
  note: "29 Ocak 2025 tarihli içerik Kuleli Askerî Lisesi önünü ayrı olta yeri olarak adlandırır; istavriti yıl boyu, çinekopu Ekim–Nisan dönemi için bildirir. Günlük av garantisi değildir."
};
const ibbGuide: ResearchSource = {
  label: "İBB Tarım – Yeni Başlayanlar İçin Olta Balıkçılığı (2017)",
  url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
  note: "Rehberin 7. sayfası Kuleli Askerî Lisesi önündeki yaklaşık 700 metrelik kıyı av hattını, istavriti ve mevsimsel lüferi rota adıyla kaydeder; tarihsel kayıttır."
};
const shorePlan: ResearchSource = {
  label: "ÇŞİDB – İstanbul Deniz Çöpleri Eylem Planı 2025–2029",
  url: "https://webdosya.csb.gov.tr/db/cygm/icerikler/istanbul-dcep-2025-2029-20250324133942.pdf",
  note: "Kuleli (139 m), Kuleli Askerî Lisesi (368 m), Çengelköy İDO (20 m) ve Vaniköy Parkı'nı (201 m) ayrı kıyı bakım satırlarında gösterir. Bakım kaydı olta izni veya okul arazisine giriş hakkı değildir."
};
const location: ResearchSource = {
  label: "OpenStreetMap – Kuleli Askerî Lisesi yer referansı",
  url: "https://www.openstreetmap.org/relation/4465498",
  note: "Yaklaşık genel Kuleli kıyı çevresi için yer referansı; 41.0589, 29.0530 izinli mikro atış noktası veya okul giriş konumu değildir. OpenStreetMap contributors, ODbL 1.0."
};
const plannedWorks: ResearchSource = {
  label: "Üsküdar Belediyesi – 2025–2029 Stratejik Planı",
  url: "https://www.uskudar.bel.tr/userfiles/files/2025_2029_stratejik_DI%CC%87JI%CC%87TAL.pdf",
  note: "Eski okul önü sahil bandı çevre düzenlemesini dönemsel proje olarak kaydeder. Hedef yüzdesi, 22 Ekim 2026'da aktif şantiye veya sahil kapanması bulunduğunu kanıtlamaz."
};
const nationalLaw: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör avcılığında tür, boy, adet, yöntem ve yer kurallarının ana resmî metni."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 ana metniyle birlikte yürürlükteki değişiklik; Boğaz trafik ayırım şeridi ve işaretli yüzme alanları gibi yer sınırları ayrıca uygulanır."
};

export const growthKuleliRoute20261022: EnrichedMera = {
  slug,
  name: "Kuleli Sahili Açık Kıyısı",
  province: "İstanbul",
  district: "Üsküdar",
  zone: "Kuleli Caddesi'nin eski okul önündeki halka açık kuru yaya kıyısı; okul, güvenlik sınırı ve bariyerli alanlar hariç",
  waterType: "Deniz",
  region: "Marmara",
  summary: "Kuleli'nin okul önü Boğaz kıyısı, İBB'nin yer adıyla istavrit bildirdiği olta hattıdır. Rota yalnız açık kamusal yaya kıyısını anlatır; okul arazisi ve güvenlik alanı dışarıdadır.",
  fish: ["İstavrit"],
  methods: ["Kıyıdan mevzuata uygun olta"],
  baits: ["Mevzuata uygun yapay veya doğal yem"],
  camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli",
  amenities: [],
  cautions: [
    "Eski askerî okul arazisine, çevrili veya güvenlik görevlisi bulunan sahaya girme; olta yalnız açık kamusal kuru kıyıda ve tabela/görevli izniyle kurulabilir.",
    "Sahil düzenleme projesi nedeniyle geçici şantiye veya bariyer varsa o bölümü kullanma; güncel kıyı açıklığını hareket günü yerinde denetle.",
    "Dar yaya hattı, kuvvetli Boğaz akıntısı, gemi geçişi ve ıslak tahkimat nedeniyle güvenli arka atış boşluğu yoksa avı ertele."
  ],
  lat: 41.0589,
  lng: 29.0530,
  locationPrecision: "Genel bölge",
  verification: "22 Ekim 2026 masa başı incelemesi: İBB'nin 2025 Kuleli önü olta/tür kaydı, 2017 İBB olta rehberi, ÇŞİDB'nin Kuleli ile Vaniköy/Çengelköy'ü ayrı kıyı bakım kesimleri olarak tanımlayan 2025–2029 planı, güncel 6/2 ve 2026/26 değişikliği karşılaştırıldı. Üsküdar'ın sahil düzenleme hedefi incelendi; hedef aktif kapama kanıtı değildir. Okul arazisine giriş ve bariyerli kıyı hariçtir. Pin genel çevredir; mikro av yeri saha teyitli değildir.",
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
    independentStrongFamilies: ["İBB rota özelinde olta ve tür kaydı", "ÇŞİDB ayrı Kuleli kıyı kesimi"],
    localContentVerified: true,
    fieldOrEquivalentVerified: false,
    unresolvedRisks: []
  },
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "41.0589, 29.0530 Kuleli'nin yaklaşık genel kıyı yer referansıdır; okul arazisi, giriş kapısı veya izinli mikro olta cebi değildir. Kuleli Caddesi'ndeki halka açık kuru yaya kıyısına yalnız açık geçişten yaklaş; bariyer ve güvenlik levhası üstün gelir.",
  shoreProfile: "İBB olta kaynakları okul önü Kuleli kıyısını ayrı rota olarak adlandırır. ÇŞİDB Kuleli, okul önü, Çengelköy İDO ve Vaniköy Parkı'nı ayrı bakım satırlarında gösterir. Mevcut Çengelköy sayfası mahalle merkezi/aktif iskeleyi, Vaniköy sayfası parkın 201 metrelik cephesini kapsar. Bu rota yalnız Kuleli'de yaya erişimine açık okul dışı kıyı kesimini kapsar.",
  transport: "Kuleli Caddesi'ndeki genel yaya sahiline Üsküdar–Çengelköy kıyı koridorundan yaklaşılır; son girişin açık olup olmadığı, geçici çalışma alanı ve güvenlik sınırı av günü kontrol edilir. Araç park yeri varsayılmaz.",
  crowdNote: "Dar kıyıda yürüyüş ve seyir kullanımı balıkçıyla çakışabilir; yayaların arkasına savurma yapma ve boş güvenli koridor yoksa takım açma.",
  longIntro: [
    "İBB'nin 2025 kent olta listesi Kuleli Askerî Lisesi önünü ayrı bir kıyı av yeri olarak tanımlar ve istavriti bildirir. İBB'nin 2017 olta rehberi aynı adı ve yaklaşık 700 metrelik tarihsel av hattını kaydeder. Bu bilgiler bugünkü her kıyı metresinde serbest av veya balık garantisi vermez.",
    "ÇŞİDB 2025–2029 kıyı bakım planında Kuleli'yi Çengelköy İDO ve Vaniköy Parkı'ndan ayrı sayar. Eski okul ve çevrili güvenlik arazisi rota değildir. 2026 sahil düzenleme hedefi bir kapama ilanı sayılmaz; güncel bariyer ve levhalar her ziyaret öncesi kontrol edilir."
  ],
  planningNotes: [
    "6/2 tebliğini ve 2026/26 değişikliğini av gününde oku; tür/boy/adet/yöntem sınırlarına, Boğaz trafik ayırım şeridine ve işaretli yüzme alanı kuralına uy.",
    "Okul arazisi, kapı önü güvenlik şeridi, bariyerli şantiye, özel kıyı ve teknelerin yanaşma sahası dışarıdadır.",
    "Kuvvetli akıntı, dalga sıçraması ve yaya yoğunluğu güvenli kıyı kullanımını engelliyorsa avı ertele."
  ],
  seasonalNotes: ["İBB istavriti tüm yıl için bildirir, fakat belirli günde kıyıdan yakalama garanti değildir. Akıntı, hava ve çalışma sınırları günlük planı değiştirebilir."],
  sources: [ibbFish, ibbGuide, shorePlan, location, plannedWorks, nationalLaw, amendment],
  researchStatus: "22 Ekim 2026 yeni program: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
  researchSummary: "İBB'nin Kuleli adıyla olta/tür kaydı ve ÇŞİDB'nin ayrı kıyı kesimi birleştirildi. Okul arazisi, kapalı güvenlik ve olası şantiye bölümleri hariç; mikro atış cebinin saha teyidi yoktur.",
  researchedAt: date,
  fishEvidence: [{
    name: "İstavrit",
    scientificName: null,
    evidenceLevel: "Kuleli Askerî Lisesi önü adıyla İBB kurumsal kıyı olta/tür kaydı",
    sourceLabel: ibbFish.label,
    sourceUrl: ibbFish.url,
    note: ibbFish.note
  }],
  accessEvidence: [
    { label: ibbFish.label, value: "İBB'nin okul önü Kuleli'yi kıyı olta alanı olarak adlandırması", sourceUrl: ibbFish.url, note: "Kamuya açık yol/kıyı kullanımı için rota düzeyinde güçlü kaynak; okul mülkünü kapsamaz." },
    { label: shorePlan.label, value: "Kuleli adlı ayrı kıyı bakım kesimi", sourceUrl: shorePlan.url, note: shorePlan.note }
  ],
  accommodationOptions: [],
  navigationVerified: false,
  confidenceProfile: {
    model: "evidence-v1",
    overall: "C",
    reviewedAt: date,
    identity: { level: "strong", label: "Kuleli ayrı kıyı kesimi", note: "İBB rota adı ve ÇŞİDB'nin Çengelköy/Vaniköy'den ayrı Kuleli satırı su/yer kimliğini doğrular." },
    species: { level: "strong", label: "Rota özelinde İBB istavrit kaydı", note: "2025 İBB içeriği istavriti Kuleli adıyla verir; günlük av garantisi değildir." },
    legal: { level: "strong", label: "6/2 ve 2026 değişikliği", note: "Genel deniz kuralları, yer yasakları ve okul/güvenlik sınırı birlikte ele alındı; ilan edilmiş aktif Kuleli kıyı kapaması bulunamadı." },
    access: { level: "partial", label: "Açık kamusal okul dışı yaya kıyısı", note: "İBB olta alanı ve ÇŞİDB ayrı kıyı kesimi genel erişimi destekler; güvenlik, bariyer ve anlık kıyı açıklığı yerinde kontrol edilir." },
    field: { level: "unverified", label: "Saha mikro teyidi yok", note: "Yaklaşık pin, izinli mikro atış noktası değildir." }
  }
};
