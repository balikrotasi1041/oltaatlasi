import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-23";
const ibbMap: ResearchSource = {
  label: "İBB – Atatürk Köprüsü Çevresel ve Sosyal Yönetim Planı, Şekil 20 (2026)",
  url: "https://webapi.ibb.istanbul/uploads/Unkapani_Ataturk_Koprusu_CSYP_ILBANK_TR_02022026_clean_8001e507c6.pdf",
  note: "60. sayfadaki alternatif kamusal balık tutma yerleri haritası Karaköy Sahil Parkı'nı ve Eminönü Sahil Şeridi'ni karşı kıyılarda ayrı yerler olarak işaretler. Harita her metreye koşulsuz av izni vermez."
};
const halicStudy: ResearchSource = {
  label: "İstanbul Üniversitesi / KSÜ Tarım ve Doğa Dergisi – Galata–Unkapanı Haliç olta ve tür kayıtları (2018)",
  url: "https://dergipark.org.tr/en/download/article-file/480632",
  note: "Galata–Unkapanı köprüleri arasındaki Haliç suyunda tarihsel olta avında istavrit ve kefal dahil türleri aktarır. Köprü anketi parkın veya Eminönü kıyısının noktasal güncel av verisi değildir."
};
const parkInventory: ResearchSource = {
  label: "İstanbul Valiliği Çevre İl Eylem Planı – Karaköy Sahil Parkı",
  url: "https://webdosya.csb.gov.tr/db/cygm/icerikler/deniz-copleri-il-eylem-plani-3.-rev-zyon--stanbul-20210617131505.pdf",
  note: "İBB bakım envanterinde Karaköy Sahil Parkı'nı denize kıyılı dolgu/yürüyüş yolu olarak kaydeder; parkın liman işlevli kısımları av rotası değildir."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz kıyısından amatör olta, tür, boy, miktar ve yöntem hükümlerinin ana metni; güncel değişikliklerle birlikte okunur."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği ana 6/2 tebliğiyle birlikte incelendi; ilan ve yerel tabelalar ayrıca geçerlidir."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Aktif iskele, yanaşma, bağlama, yaklaşım kanalı ve operasyon sahaları açık sahil rotalarından dışlanır."
};

const base = (slug: string, name: string, district: string, zone: string, lat: number, lng: number): EnrichedMera => ({
  slug, name, province: "İstanbul", district, zone, lat, lng,
  waterType: "Deniz", region: "Marmara", locationPrecision: "Genel bölge",
  summary: "", fish: ["İstavrit"], methods: ["Kıyıdan mevzuata uygun hafif olta"],
  baits: ["Mevzuata uygun yapay veya doğal yem"], camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli", amenities: [], cautions: [],
  verification: "", updatedAt: date, publishedAt: date,
  confidence: "C", qualityGrade: "C+", indexing: "index",
  qualityAssessment: {
    model: "expanded-v2", reviewedAt: date, identityVerified: true,
    speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true,
    independentStrongFamilies: ["İBB ayrı kamusal olta kıyısı haritası", "Akademik aynı Galata–Unkapanı su kesimi tür kaydı"],
    localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
  },
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "", shoreProfile: "", transport: "", crowdNote: "",
  longIntro: [], planningNotes: [], seasonalNotes: [], sources: [],
  researchStatus: "23 Ekim 2026 yeni İstanbul avlağı: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
  researchSummary: "", researchedAt: date, fishEvidence: [], accessEvidence: [],
  accommodationOptions: [], navigationVerified: false,
  confidenceProfile: {
    model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "İki ayrı Haliç kıyısı", note: "İBB 2026 haritası kıyıları karşı yakalarda ayrı kamusal olta alanları olarak gösterir." },
    species: { level: "partial", label: "Aynı su kesiminde tarihsel tür", note: "Akademik kayıt Galata–Unkapanı suyunda istavriti bildirir; tam kıyı cebinde günlük av garantisi yoktur." },
    legal: { level: "strong", label: "Güncel 6/2 ve liman sınırları", note: "2026 değişikliği ile liman/tekne sahası yasakları incelendi; güncel saha levhası üstün gelir." },
    access: { level: "partial", label: "Kamusal yaya kıyısı", note: "İBB haritası genel kamusal kullanım gösterir; kapalı, iskele veya etkinlikli mikro alan hariçtir." },
    field: { level: "unverified", label: "Mikro nokta saha teyitsiz", note: "Pin genel yaya kıyısı için planlama referansıdır." }
  }
});

const karakoySlug = "istanbul-beyoglu-karakoy-sahil-parki-halic-kiyisi";
export const growthKarakoyParkRoute20261023: EnrichedMera = {
  ...base(karakoySlug, "Karaköy Sahil Parkı Haliç Kıyısı", "Beyoğlu", "Azapkapı'daki Karaköy Sahil Parkı'nın Haliç'e bakan açık yaya kıyısı; Karaköy vapur iskelesi güneyi, liman ve tekne bağlama sahası hariç", 41.0237, 28.9694),
  summary: "İBB'nin 2026 haritasında ayrı kamusal olta alanı olarak gösterilen Azapkapı Haliç parkıdır. Tür kaydı aynı Galata–Unkapanı su kesiminin tarihsel bilimsel verisidir; iskele veya her park kenarı için av izni değildir.",
  cautions: [
    "Karaköy vapur iskelesinin güneyi bu rota değildir. Liman, bağlı tekne, yanaşma, çalışma ve bariyerli park ceplerinde olta kurma.",
    "Çocuklar ve yayalar varken arka atış yapma; geniş güvenli açıklık yoksa avı ertele.",
    "Haliç'in su kalitesi ve balık tüketim güvenliği için güncel resmî duyuruları kontrol et; bu sayfa tüketim onayı vermez."
  ],
  verification: "23 Ekim 2026 masa başı: İBB 2026 planının 60. sayfa haritasında park ayrı kamusal balık tutma yeri; İstanbul Valiliği denize kıyılı park/yürüyüş envanteri; 2018 akademik makalede aynı Galata–Unkapanı suyunda istavrit; 6/2, 2026/26 ve Limanlar Yönetmeliği birlikte incelendi. 2017 Karaköy iskelesi güneyi lüfer kaydı bu parka aktarılmadı.",
  navigationNote: "41.0237, 28.9694 Azapkapı/Yelkenciler Caddesi yanındaki parkın yaklaşık karasal yaklaşımıdır; kesin atış cebi değildir. İBB haritasındaki açık Haliç cephesini yerinde bul; iskele, liman, bağlı tekne veya bariyere girme.",
  shoreProfile: "Karaköy Sahil Parkı Haliç'in Beyoğlu/Azapkapı yakasındadır. Galata Köprüsü üzerindeki rota ve karşı kıyı Eminönü yürüyüş şeridinden farklı bir karasal girişe sahiptir. Parkın liman işlevli kenarları bu sayfadan özellikle çıkarılmıştır.",
  transport: "Haliç metro durağı ile Azapkapı yaya bağlantısından parka yaklaşılır; son giriş, etkinlik ve çalışma bariyeri hareket günü kontrol edilir.",
  crowdNote: "Park yürüyüşü ve aile kullanımı yoğunlaşırsa dar kıyıda takım açma; yaya güvenliği avdan önce gelir.",
  longIntro: [
    "İBB'nin 2026 çevresel ve sosyal planındaki alternatif kamusal balık tutma yerleri haritası Karaköy Sahil Parkı'nı Galata Köprüsü ve Karaköy iskelesinden ayrı adlandırır. İstanbul Valiliği envanteri parkın Haliç'e kıyılı dolgu/yürüyüş yapısını kaydeder.",
    "Akademik literatür Galata–Unkapanı köprüleri arasındaki Haliç su kesiminde tarihsel istavrit avını raporlar. Bu, parkın tam önünde bugün istavrit tutulacağını veya kirlilik açısından tüketimin güvenli olduğunu kanıtlamaz."
  ],
  planningNotes: [
    "6/2 ana metni ve 2026/26 değişikliğindeki tür, boy, adet, yöntem ve yer hükümlerini av günü uygula.",
    "Limanlar Yönetmeliği kapsamındaki yanaşma, bağlama ve yaklaşım sahalarını dışarıda tut; yerel levhaya uy.",
    "Açık ve güvenli yaya cephesinde bile kalabalık ya da su kalitesi uyarısı varsa avı ertele."
  ],
  seasonalNotes: ["İstavrit verisi tarihsel ve su kesimi ölçeğindedir; güncel mevsimsel bulunurluk garanti edilmez."],
  sources: [ibbMap, parkInventory, halicStudy, law, amendment, portLaw],
  researchSummary: "İBB parkı doğrudan kamusal balık tutma alternatifi olarak haritalıyor; akademik çalışma parkın önündeki Galata–Unkapanı suyunda istavrit kaydediyor. Karaköy vapur iskelesinin güneyindeki farklı su/tür kaydı kullanılmadı.",
  fishEvidence: [{ name: "İstavrit", scientificName: "Trachurus sp.", evidenceLevel: "Galata–Unkapanı Haliç su kesiminde tarihsel olta avı", sourceLabel: halicStudy.label, sourceUrl: halicStudy.url, note: "Akademik metin aynı su kesimini ve istavriti adlandırır; parkın tam kenarında noktasal güncel av ölçümü değildir." }],
  accessEvidence: [{ label: ibbMap.label, value: "Karaköy Sahil Parkı İBB haritasında ayrı alternatif kamusal balık tutma yeri", sourceUrl: ibbMap.url, note: "Açık park yaya cephesi; liman/bağlama kesimi ve geçici kapama hariç." }]
};

const eminonuSlug = "istanbul-fatih-eminonu-halic-acik-sahil-seridi";
export const growthEminonuHaliçRoute20261023: EnrichedMera = {
  ...base(eminonuSlug, "Eminönü Haliç Açık Sahil Şeridi", "Fatih", "Atatürk (Unkapanı) ile Galata köprülerinin Fatih yakası arasındaki açık Haliç yaya kıyısı; köprü üzerleri, aktif iskele ve tekne yanaşma yerleri hariç", 41.0224, 28.9650),
  summary: "İBB'nin 2026 haritasında Eminönü Sahil Şeridi adıyla ayrı kamusal olta alternatifi olan Fatih Haliç kıyısıdır. Köprülerin üzeri veya vapur iskeleleri bu sayfanın parçası değildir.",
  cautions: [
    "Galata ve Atatürk köprülerinin üzeri ayrı kayıtlardır; köprü hareket mekanizması, aktif iskele, bağlı tekneler ve yanaşma sahalarına geçme.",
    "Yürüyüş hattındaki yoğun yaya geçişinde arka atış yapma; korkuluk, ıslak tahkimat ve suya düşme riskini izle.",
    "Haliç'te yağış sonrası su kalitesi ve sürüküntü değişebilir; yakalanan balığın tüketim güvenliğini varsayma."
  ],
  verification: "23 Ekim 2026 masa başı: İBB'nin 2026 planında Eminönü Sahil Şeridi Fatih yakasında ayrı kamusal olta alanı; 2018 akademik çalışma Galata–Unkapanı arasında istavrit ve kefali tarihsel av listesinde kaydeder. 6/2 ana metin, 2026/26 değişikliği ve Limanlar Yönetmeliği kontrol edildi. Pin haritalı yaya kıyısı ortasına yakın yaklaşık planlama referansıdır.",
  navigationNote: "41.0224, 28.9650, İBB haritasındaki Fatih yakası Galata–Unkapanı yaya kıyısının yaklaşık orta kesim referansıdır; açık atış platformu değildir. Köprü, iskele, gemi/tekne ve bariyerli kısımlardan ayrılmış kamusal kuru kıyıyı yerinde seç.",
  shoreProfile: "Bu rota, Haliç'in Fatih/Eminönü yakasındaki iki köprü arasındaki kıyı yürüyüş şerididir. Karaköy Sahil Parkı karşı yakadadır; Galata ve Atatürk köprülerindeki av sayfaları su üstü yapılarını anlatır. Güney kıyı yaya bandı bunlardan ayrı bir erişim hattıdır.",
  transport: "Unkapanı veya Eminönü çevresindeki kamusal yaya bağlantılarından Haliç kenarına yaklaşılır; rıhtım ve vapur işletme kapılarına girme.",
  crowdNote: "Eminönü yaya akışı ve köprü yakınındaki aktarmalar atış alanını sık sık daraltır; boş, güvenli kıyı bölümü yoksa av yapma.",
  longIntro: [
    "İBB'nin 2026 planındaki harita Eminönü Sahil Şeridi'ni Karaköy Sahil Parkı'ndan karşı yakada, köprülerden ise bağımsız bir kamusal balık tutma alternatifi olarak gösterir. Sayfa bu yürüyüş kıyısını kapsar; iki köprü ve aktif iskeleler için yeni ad yaratmaz.",
    "İstanbul Üniversitesi araştırmacılarının yayımladığı Haliç olta çalışması, Galata–Unkapanı su kesiminde tarihsel istavrit avı bildirir. Bu gözlem kıyının bugün her noktasında aynı türün çıkacağını veya balığın yenebilir olduğunu göstermez."
  ],
  planningNotes: [
    "6/2 tebliğinin güncel boy, adet, yöntem ve tür hükümlerini; 2026/26 değişikliğini av gününde kontrol et.",
    "İskele ve liman işletmesiyle köprü hareket alanlarını av rotası sanma; yerel tabela ve geçici kapatma önceliklidir.",
    "Yaya akışı, ıslak taş veya kötü su koşullarında olta kurma."
  ],
  seasonalNotes: ["İstavrit akademik Haliç su kesimi kaydıdır; sürü geçişi ve su kalitesi dönemsel değişebilir."],
  sources: [ibbMap, halicStudy, law, amendment, portLaw],
  researchSummary: "İBB 2026 haritası Fatih yakası Eminönü Haliç sahilini ayrı kamusal balık tutma şeridi olarak verir; akademik Galata–Unkapanı istavrit kaydı aynı su kesimindedir. Köprü ve iskele avlakları tekrar edilmedi.",
  fishEvidence: [{ name: "İstavrit", scientificName: "Trachurus sp.", evidenceLevel: "Galata–Unkapanı Haliç su kesiminde tarihsel olta avı", sourceLabel: halicStudy.label, sourceUrl: halicStudy.url, note: "Akademik çalışma iki köprü arasındaki suyu ve istavriti adlandırır; Eminönü kıyısının tam noktasında güncel ölçüm değildir." }],
  accessEvidence: [{ label: ibbMap.label, value: "Eminönü Sahil Şeridi Fatih yakasında alternatif kamusal balık tutma alanı", sourceUrl: ibbMap.url, note: "Açık yaya kıyısı; köprüler, aktif iskeleler, bağlı tekneler ve bariyerli kısımlar hariç." }]
};

export const growthIstanbulRoutes20261023 = [growthKarakoyParkRoute20261023, growthEminonuHaliçRoute20261023];
