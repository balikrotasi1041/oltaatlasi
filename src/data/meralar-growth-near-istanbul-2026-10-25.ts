import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-25";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör oltası için tür, boy, adet, yöntem ve şamandıralı yüzme alanı hükümleri."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte değerlendirildi."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Bağlama, yanaşma, yaklaşım kanalı, mendirek ağzı ve operasyon sahaları av rotası değildir."
};

function base(slug: string, name: string, province: string, district: string, zone: string, region: string, lat: number, lng: number): EnrichedMera {
  return {
    slug, name, province, district, zone, region, lat, lng,
    waterType: "Deniz", locationPrecision: "Genel bölge",
    summary: "", fish: [], methods: ["Kıyıdan mevzuata uygun hafif olta"],
    baits: ["Mevzuata uygun yem"], camping: "Uygun değil",
    vehicleAccess: "Kontrol edilmeli", amenities: [], cautions: [],
    verification: "", updatedAt: date, publishedAt: date,
    confidence: "C", qualityGrade: "C+", indexing: "index",
    image: `/images/meralar/ulusal/${slug}.svg`,
    socialImage: `/images/meralar/ulusal/${slug}.svg`,
    navigationNote: "", shoreProfile: "", transport: "", crowdNote: "",
    longIntro: [], planningNotes: [], seasonalNotes: [], sources: [],
    researchStatus: "25 Ekim 2026 ilk yayımlama: C+ çekirdek kanıt incelemesi; index,follow",
    researchSummary: "", researchedAt: date, fishEvidence: [], accessEvidence: [],
    accommodationOptions: [], navigationVerified: false,
    qualityAssessment: {
      model: "expanded-v2", reviewedAt: date,
      identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true,
      safePublicAccessVerified: true, independentStrongFamilies: [],
      localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: { level: "strong", label: "Ayrı kamusal kıyı kesimi", note: "Kurumsal yer kaydı ve coğrafi konum karşılaştırıldı." },
      species: { level: "partial", label: "Tarihsel su kesimi türü", note: "Tür kanıtı güncel günlük av garantisi değildir." },
      legal: { level: "strong", label: "Güncel 6/2", note: "2026 değişikliği ve liman/yüzme sınırları incelendi; güncel saha levhası üstündür." },
      access: { level: "partial", label: "Kamusal genel yaklaşım", note: "Mikro atış noktası saha koşuluna bağlıdır." },
      field: { level: "unverified", label: "Mikro saha teyitsiz", note: "Harita pini yalnız genel yaklaşım referansıdır." }
    }
  };
}

const tuzlaSlug = "istanbul-tuzla-itu-yani-acik-kiyi";
const tuzlaEvent: ResearchSource = {
  label: "Tuzla Belediyesi – İTÜ Yanı Balık Tutma Yarışması (2026)",
  url: "https://www.tuzla.bel.tr/guncel/etkinlikler/balik-tutma-yarismasi-oltani-al-gel",
  note: "28 Haziran 2026 olta etkinliğini açıkça 'Tuzla Sahil İTÜ Yanı' konumuna yerleştirir; tek günlük etkinlik sürekli sınırsız izin anlamına gelmez."
};
const tuzlaShore: ResearchSource = {
  label: "Tuzla Belediyesi – İTÜ ile Deniz Harp Okulu arası halka açılan kıyı",
  url: "https://www.tuzla.bel.tr/Files/pdf/proje-2024-bizim-isimiz.pdf",
  note: "Sahil işgallerinin kaldırıldığı İTÜ–Deniz Harp Okulu kamusal kıyı şeridini bildirir; üniversite/askeri tesis arazisi hariçtir."
};
const tuzlaSpecies: ResearchSource = {
  label: "İBB – İstanbul'da Balık Tutulacak Yerler (2025), Tuzla",
  url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle",
  note: "Tuzla kıyı sektöründe lüferi bildirir. İTÜ yanındaki tek atış cebinde güncel tür ölçümü değildir."
};
const tuzlaCoast: ResearchSource = {
  label: "İstanbul Valiliği – 2025 Deniz Çöpleri Eylem Planı, İTÜ kıyısı",
  url: "https://webdosya.csb.gov.tr/db/istanbul/icerikler/den-z-copler--eylem-plan_-son-1-20250106094748.pdf",
  note: "İTÜ Denizcilik Fakültesi yanında 690 m kayalık/yürüyüş kıyısını Tuzla Sahil Parkı'ndan ayrı envanter satırı olarak kaydeder."
};
export const growthTuzlaItuRoute20261025: EnrichedMera = {
  ...base(tuzlaSlug, "Tuzla İTÜ Yanı Açık Kıyı", "İstanbul", "Tuzla", "Postane Mahallesi'nde İTÜ Denizcilik Fakültesi yanındaki belediyenin kamusal olta etkinliği kıyısı; kampüs, eğitim/tekne alanı ve doğudaki Tuzla Sahil Parkı hariç", "Marmara", 40.81616, 29.29628),
  summary: "Tuzla Belediyesi'nin 2026 olta yarışmasını düzenlediği İTÜ yanındaki kamusal kıyı bölümüdür. Tuzla sahilindeki lüfer kaydı sektör ölçeğindedir; kampüs, eğitim suyu ve marina av noktası değildir.",
  fish: ["Lüfer"],
  amenities: ["Kamusal kıyı yürüyüş bandı"],
  cautions: [
    "İTÜ kampüsüne, eğitim iskelesine ve denizcilik eğitim alanına girme; tekne manevrasını engelleyecek suya takım atma.",
    "1 Nisan–15 Kasım arasında şamandıralı yüzme alanında avlanma; etkinlik, yüzme veya su sporu varsa güvenli mesafeye çekil.",
    "Tuzla'da marina/tersane trafiği, bağlı tekneler ve kalabalık yürüyüş bandı nedeniyle boş ve güvenli kıyı yoksa avı ertele."
  ],
  verification: "25 Ekim 2026: Tuzla Belediyesi 2026 olta etkinliği İTÜ Yanı adresini veriyor; belediyenin kıyı projesi İTÜ–Deniz Harp Okulu açık sahilini anlatıyor. İstanbul Valiliği envanteri İTÜ yanında yürüyüş kıyısını ayrı listeliyor. İBB'nin Tuzla kıyı sektörü lüfer kaydı tarihsel/genel tür desteğidir; noktasal günlük av kanıtı değildir. 6/2, 2026/26 ve liman sınırları incelendi.",
  navigationNote: "40.81616, 29.29628 İTÜ'nün doğusundaki kamusal kıyı çevresi için yaklaşık planlama referansıdır; kesin olta cebi değildir. Belediye etkinliğinin 'Tuzla Sahil İTÜ Yanı' tarifini esas al. Kampüs kapısı, üniversite iskelesi, eğitim suyu, marina ve doğudaki Tuzla Sahil Parkı bu rota değildir.",
  shoreProfile: "İTÜ Denizcilik Fakültesi yanındaki kamusal yaya kıyısı, mevcut Tuzla Sahil Parkı sayfasının daha doğudaki büyük rekreasyon alanından ayrı bir kıyı kesimidir. 2025 il kıyı envanterinde İTÜ Denizcilik Fakültesi ile Tuzla Merkez Sahil ayrı satırlardadır.",
  transport: "Postane Mahallesi'ndeki kamusal sahil girişinden yürüyerek yaklaş; kampüs, deniz eğitim iskelesi ve kapalı geçitleri kullanma.",
  crowdNote: "Yaya, çocuk, festival veya su sporu kullanımı atış alanını kapatıyorsa olta kurma.",
  longIntro: [
    "Tuzla Belediyesi 28 Haziran 2026 'Oltanı Al Gel' yarışmasının yerini açıkça Tuzla Sahil İTÜ Yanı olarak yayımladı. Belediye kıyı açma projesi ve İstanbul Valiliği'nin kıyı envanteri bu kesimin kamusal yaya hattını destekler.",
    "İBB'nin Tuzla için bildirdiği lüfer yerel kıyı sektörü kanıtıdır; İTÜ yanındaki tam noktada bugün lüfer tutulacağını göstermez. Bu nedenle sayfa tek tür ve açık belirsizlikle sınırlıdır."
  ],
  planningNotes: ["6/2 ve 2026/26 boy, adet, yöntem ve şamandıralı yüzme alanı hükümlerini uygula.", "Limanlar Yönetmeliği kapsamındaki aktif iskele, bağlı tekne ve eğitim manevra alanını dışla."],
  seasonalNotes: ["Lüfer mevsimsel ve Tuzla kıyı sektörü ölçeğinde bildirilen türdür; her gün ve her kıyı noktasında bulunması beklenemez."],
  sources: [tuzlaEvent, tuzlaShore, tuzlaSpecies, tuzlaCoast, law, amendment, portLaw],
  researchSummary: "Belediye yarışması doğrudan İTÜ yanındaki kıyı olta kullanımını; il envanteri ayrı yürüyüş kıyısını doğrular. İBB lüferi Tuzla kıyısında bildirir, ancak mikro noktada tür gözlemi değildir.",
  fishEvidence: [{ name: "Lüfer", scientificName: "Pomatomus saltatrix", evidenceLevel: "İBB Tuzla kıyı sektörü tarihsel tür kaydı + İTÜ Yanı resmî olta etkinliği", sourceLabel: tuzlaSpecies.label, sourceUrl: tuzlaSpecies.url, note: "İTÜ yanındaki belirli metrede doğrudan balık örneklemesi değildir." }],
  accessEvidence: [{ label: tuzlaEvent.label, value: "Belediyenin İTÜ Yanı kamusal olta etkinliği", sourceUrl: tuzlaEvent.url, note: "Etkinlik günü ve açık kıyı ölçeği; kampüs/operasyon alanına izin değildir." }, { label: tuzlaShore.label, value: "İTÜ yanındaki kamusal sahil koridoru", sourceUrl: tuzlaShore.url, note: "Açık yaya şeridi; üniversite ve askeri saha hariç." }],
  qualityAssessment: { ...base(tuzlaSlug, "", "İstanbul", "Tuzla", "", "Marmara", 40.81616, 29.29628).qualityAssessment!, independentStrongFamilies: ["Tuzla Belediyesi İTÜ Yanı 2026 olta etkinliği"] }
};

const karasuSlug = "sakarya-karasu-yenimahalle-deniz-agzi-olta-alani";
const karasuProject: ResearchSource = {
  label: "Sakarya Büyükşehir Belediyesi – Karasu Yenimahalle olta alanları (2025)",
  url: "https://www.sakarya.bel.tr/1/Haber/nehrin-ve-denizin-bulustugu-yer-karadenizin-cazibe-merkezi-olacak/24780",
  note: "Sakarya Nehri ağzı Yenimahalle projesindeki balık tutma alanlarını ve belediyenin platformlarını açıkça kaydeder."
};
const karasuDelivered: ResearchSource = {
  label: "Sakarya Büyükşehir Belediyesi – 2025 turizm broşürü",
  url: "https://www.sakarya.bel.tr/uploads/files/TurizmBrosur2025.pdf",
  note: "Eylül 2025'te tamamlanmış Yenimahalle rekreasyon sahilini ve balıkçılar için ayrılan alanları bildirir."
};
const karasuKtb: ResearchSource = {
  label: "Sakarya İl Kültür ve Turizm Müdürlüğü – Yenimahalle",
  url: "https://sakarya.ktb.gov.tr/TR-340487/yenimahalle-sakarya-nehrinin-denize-dokuldugu-yer.html",
  note: "Nehir ağzındaki Yenimahalle yürüyüş hattını ve Karadeniz cephesinde sportif olta balıkçılığını anlatır."
};
const karasuSpecies: ResearchSource = {
  label: "Bozcaarmutlu vd. – Sakarya Nehri ağzında kefal örnekleri (2015)",
  url: "https://pubmed.ncbi.nlm.nih.gov/25339526/",
  note: "Mugil cephalus örnekleri Sakarya Nehri ağzından 2008–2011'de alınmıştır; tarihsel tür kanıtı ve kirletici uyarısıdır, tüketim onayı değildir."
};
export const growthKarasuYenimahalleRoute20261025: EnrichedMera = {
  ...base(karasuSlug, "Karasu Yenimahalle Deniz Ağzı Olta Alanı", "Sakarya", "Karasu", "Sakarya Nehri ağzında Yenimahalle'nin Karadeniz'e bakan tamamlanmış kamusal olta/yürüyüş alanı; nehir içi tekne bağlama ve Karasu merkez kumsalı hariç", "Karadeniz", 41.12508, 30.64901),
  summary: "Sakarya Büyükşehir'in tamamladığı Yenimahalle balık tutma alanı ve açık Karadeniz cephesidir. Nehir ağzındaki tarihsel akademik kefal örneği vardır; su kalitesi, akıntı ve tekne trafiği nedeniyle av ve tüketim garantisi vermez.",
  fish: ["Kefal"],
  amenities: ["Kamusal yürüyüş yolu", "Belediye balık tutma alanı"],
  cautions: [
    "Nehir ağzı akıntısı, ani derinleşme ve Karadeniz dalgası nedeniyle suya girme veya ıslak kayaya çıkma.",
    "Balıkçı teknesi yanaşma, bağlama ve manevra bölgesini kullanma; resmî olta alanındaki güncel levhalara uy.",
    "Akademik çalışmada kirleticiler incelenmiştir; yakalanan balığın tüketim güvenliğini bu sayfadan varsayma."
  ],
  verification: "25 Ekim 2026: Sakarya Büyükşehir 2025 projesi Yenimahalle nehir ağzında balık tutma alanlarını, 2025 turizm broşürü tamamlandığını gösteriyor. Sakarya İl Kültür Müdürlüğü Karadeniz cephesinde sportif olta kullanımını bildiriyor. 2015 hakemli makale Sakarya Nehri ağzında tarihsel kefal örneği sunuyor; güncel av/tüketim iddiası değildir. 6/2, 2026/26 ve liman işletme sınırları incelendi.",
  navigationNote: "41.12508, 30.64901 Yenimahalle'den nehir ağzına yaklaşımın yaklaşık karasal referansıdır; atış platformunun koordinatı değildir. Belediye tabelalarıyla Karadeniz tarafındaki tamamlanmış kamusal olta alanını bul; nehir içi tekne bağlama yerine veya mendireğe girme.",
  shoreProfile: "Sakarya Nehri'nin Karadeniz'e ulaştığı Yenimahalle olta alanı; sitedeki Karasu Sahili genel açık kum/kumsal rehberinden yaklaşık dört kilometre batıda, nehir ağzı ve amaçlı olta donatısıyla ayrılır.",
  transport: "Karasu merkezinden Yenimahalle kamusal yaya yoluna yaklaş; son kıyı girişi ve çalışma/tekne sınırını yerinde kontrol et.",
  crowdNote: "Balıkçı teknesi, yaya ve yazın yüzme kullanımı arttığında güvenli açıklık yoksa avı ertele.",
  longIntro: [
    "Sakarya Büyükşehir Belediyesi nehir ile denizin birleştiği Yenimahalle'de balık tutma platformlarını içeren rekreasyon düzenlemesini 2025'te tamamladığını bildirir. Sakarya İl Kültür ve Turizm Müdürlüğü burada Karadeniz'de sportif olta yapılabildiğini kaydeder.",
    "Hakemli araştırmada Sakarya Nehri ağzından alınmış kefal örnekleri vardır. Bu veri güncel bolluk veya yenebilirlik kanıtı değildir; nehir ağzında su kalitesi ve can güvenliği ayrı değerlendirilmelidir."
  ],
  planningNotes: ["6/2 ve 2026/26 tür, boy, adet, takım ve yer kısıtlarını uygula.", "Nehir içi ticari tekne iskelesini, bağlama ve liman manevra sahasını av noktası sayma; yalnız ayrılmış açık kamusal kıyıdan avlan."],
  seasonalNotes: ["Kefal 2008–2011 Sakarya Nehri ağzı akademik örneğinde yer alır; güncel mevsimsel varlık ve tüketim güvenliği ayrıca doğrulanmalıdır."],
  sources: [karasuProject, karasuDelivered, karasuKtb, karasuSpecies, law, amendment, portLaw],
  researchSummary: "Belediye doğrudan Yenimahalle olta alanını ve tamamlanmasını; il kültür müdürlüğü sportif oltayı; akademik çalışma aynı nehir ağzında tarihsel kefali belgeliyor. Genel Karasu kumsalıyla mükerrer değildir.",
  fishEvidence: [{ name: "Kefal", scientificName: "Mugil cephalus", evidenceLevel: "Hakemli makalede Sakarya Nehri ağzından alınmış tarihsel örnek", sourceLabel: karasuSpecies.label, sourceUrl: karasuSpecies.url, note: "2008–2011 örnekleri; bugünkü av veya tüketim güvenliği sonucuna taşınmaz." }],
  accessEvidence: [{ label: karasuProject.label, value: "Yenimahalle belediye olta alanı", sourceUrl: karasuProject.url, note: "Amaçlı olta alanı ve yaya erişimi; tekne bağlama ve aktif çalışma dışı." }, { label: karasuDelivered.label, value: "Eylül 2025'te hizmete giren kamusal sahil", sourceUrl: karasuDelivered.url, note: "Son giriş ve levha hareket günü kontrol edilir." }],
  qualityAssessment: { ...base(karasuSlug, "", "Sakarya", "Karasu", "", "Karadeniz", 41.12508, 30.64901).qualityAssessment!, independentStrongFamilies: ["Sakarya Büyükşehir Yenimahalle doğrudan olta alanı", "Hakemli Sakarya Nehri ağzı kefal örneği"] }
};

export const growthNearIstanbulRoutes20261025 = [growthTuzlaItuRoute20261025, growthKarasuYenimahalleRoute20261025];
