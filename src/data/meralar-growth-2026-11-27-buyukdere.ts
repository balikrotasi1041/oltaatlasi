import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const slug = "istanbul-sariyer-buyukdere-fener-yakini-acik-kiyi";
const coastInventory: ResearchSource = {
  label: "İstanbul Valiliği — Deniz Çöpleri İl Eylem Planı 2025–2029",
  url: "https://webdosya.csb.gov.tr/db/cygm/icerikler/istanbul-dcep-2025-2029-20250324133942.pdf",
  note: "Sarıyer kıyı envanterinde Büyükdere kıyı kesimlerini askerî kıyı ve Sarıyer Meydanı'ndan ayrı satırlarda listeler."
};
const coastalSurvey: ResearchSource = {
  label: "Bartın Üniversitesi — Büyükdere Kıyı Bandı saha çalışması",
  url: "https://acikerisim.bartin.edu.tr/bitstream/handle/11772/6434/%C5%9Eule%20Y%C4%B1ld%C4%B1z%20%C3%96m%C3%BCr.pdf?isAllowed=y&sequence=1",
  note: "Çayırbaşı ve Demokrasi Şehitleri caddelerini, kamusal yaya geçişlerini, özel köprüleri, koydaki iskeleyi ve kurtarma istasyonunu ayrı ayrı haritalar."
};
const fishingInspection: ResearchSource = {
  label: "İstanbul İl Tarım ve Orman Müdürlüğü — Sarıyer kıyısında olta denetimi",
  url: "https://istanbul.tarimorman.gov.tr/Haber/1450/Sariyer-Sahil-Seridinde-Tarabya-Buyukdere-Tarabya-Istinye-Baltalimani-Emirgan-Olmak-Uzere-Toplam-3-Bolgede-Amator-Ve-Sportif-Olta-Balikciligi-Yapanlara-Yonelik-Denetim-Yapilmistir",
  note: "23 Aralık 2020 denetimi Tarabya–Büyükdere hattında kıyıdaki amatör olta balıkçılığını belgeler. Denetimin kaydı her kıyı noktasına av izni vermez."
};
const bluefishStudy: ResearchSource = {
  label: "Üsküdar Üniversitesi Etkileşim — Boğaziçi'nde balık kültürü ve lüfer",
  url: "https://dergipark.org.tr/tr/download/article-file/710896",
  note: "Erkebay ve Rigel'in 2019 araştırması, tarihsel anlatımlarda Karadeniz'den gelen lüferin toplandığı koylar arasında Büyükdere'yi açıkça sayar. Güncel stok ölçümü değildir."
};
const bluefishRecord: ResearchSource = {
  label: "Sinan Genim — Tarihsel Büyükdere Koyu lüfer kaydı",
  url: "https://www.sinangenim.com/tr/medya/kose-yazilari/lufer-uzerine-437/",
  note: "Deveciyan'ın av sahalarını aktarırken Büyükdere Koyu'nu, Kireçburnu ve İstinye'den ayrı bir lüfer sahası olarak belirtir."
};
const pathwayReport: ResearchSource = {
  label: "Sarıyer Aktüel — Çayırbaşı ile Büyükdere Feneri arasındaki yürüyüş hattı",
  url: "https://sariyeraktuel.com/haber/sariyer-sahilinde-karanlik-tehlike-ne-korkuluk-var-ne-lamba-5226",
  note: "9 Haziran 2026 tarihli saha haberi hattın yürüyüş ve spor için kullanıldığını, bazı kesimlerinde aydınlatma veya korkuluk eksikliği olduğunu bildirir."
};
const shoreMap: ResearchSource = {
  label: "OpenStreetMap — Büyükdere Feneri yakınındaki kıyı çizgisi",
  url: "https://www.openstreetmap.org/node/27607731",
  note: "Fenerin güneybatısındaki kıyı çizgisini konumlandırır. Harita pini bir atış noktası veya fener yolu değildir."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 6/2 amatör avcılık tebliği",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "Boğaz trafik ayrım şeridinde su ürünleri avcılığını yasaklar. Deniz avında güncel boy, miktar ve takım hükümleri geçerlidir."
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

export const buyukdereCatchupRoute20261127: EnrichedMera = {
  slug,
  name: "Büyükdere Fener Yakını Açık Kıyısı",
  province: "İstanbul", district: "Sarıyer", region: "Marmara", waterType: "Deniz",
  zone: "Büyükdere Koyu'nun kuzeybatı yakasında, Büyükdere Deniz Feneri'nin güneybatısında Piyasa Caddesi yanındaki kamusal açık kıyı. Fenerin kendisi, iskeleler, çarşı bağlantısı, bağlama alanları ve güvenlik tesisleri kapsam dışıdır.",
  lat: 41.1621694, lng: 29.0477655, locationPrecision: "Genel bölge",
  summary: "Büyükdere Koyu'na bakan kısa kamusal kıyı kesimidir. Lüfer koy adına bağlı tarihsel kayıtlarda yer alır. Yalnız gündüz, geniş ve korkuluğu sağlam kuru kıyı açıklıkları değerlendirilir.",
  fish: ["Lüfer"],
  methods: ["Kıyıdan kontrollü at-çek", "Akıntıya uygun kıyı oltası"],
  baits: ["Küçük sahte balık", "Kıyı koşuluna uygun kaşık"],
  camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: ["Kamusal kıyı yürüyüş hattı", "Toplu taşıma yakınında"],
  cautions: [
    "Gündüz gidin. Korkuluğu olmayan, zemininde açıklık bulunan veya teknelerin yanaştığı kıyı kesimlerini kullanmayın.",
    "Fener ve iskele yapılarına çıkmayın. Boğaz trafik ayrım şeridine, bağlama ve manevra alanlarına atış yapmayın.",
    "Yaya geçişi ve araç yolu ile aranızda güvenli atış boşluğu yoksa takım açmayın. Tekne dalgasında kıyı kenarından uzaklaşın."
  ],
  verification: "27 Kasım 2026: Büyükdere kıyı envanteri, yaya erişimi ve aydınlatma bilgisi, koy adına bağlı lüfer kayıtları, İl Tarım denetimi ve 6/2 değişiklikleri incelendi. Güncel av miktarı ve saha ziyareti kanıtı yoktur.",
  updatedAt: date, publishedAt: date, researchedAt: date,
  confidence: "C", qualityGrade: "C+", indexing: "hold",
  image: `/images/meralar/ulusal/${slug}.svg`, socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "Piyasa Caddesi üzerindeki Büyükdere Mahallesi durağı yakınındaki kamusal yürüyüş hattını kullanın. Koordinat fenerin güneybatısındaki kıyı referansıdır. Dar ve korumasız geçişlerden atış yapılmaz.",
  shoreProfile: "Koyun bu kesiminde kıyı yaya hattı ile sahil yolu birbirine yakındır. Köprü, çarşı, tarihî iskele ve fener yapıları farklı kullanımlara ayrılır. Korkuluk, zemin ve yaya akışına göre geniş kuru kıyı açıklığını değerlendirin.",
  transport: "Sarıyer sahil yolundan Büyükdere Mahallesi durağı civarındaki kamusal yaya hattına ulaşılır. Aktif bağlama alanlarından, işletmelerden ve kapalı geçişlerden uzak durun.",
  crowdNote: "Yürüyüş ve spor yapanlar kıyıyı kullanır. Yaya alanını daraltan veya arkadan geçişi riske atan bir noktada olta kurmayın.",
  longIntro: [
    "Büyükdere Koyu, İstanbul Boğazı'nın Avrupa kıyısındadır. İl Tarım ve Orman Müdürlüğünün denetimi Büyükdere'yi içeren kıyı hattında olta kullanıldığını belgeler. Burada tarif edilen kıyı fenerin güneybatısındaki kamusal yaklaşımla sınırlıdır.",
    "Üsküdar Üniversitesi Etkileşim dergisindeki tarihsel çalışma lüferi özellikle Büyükdere Koyu'nda kaydeder. Bu kaynak koyda tür geçmişini destekler. Güncel av verimi veya mevsimsel bolluk göstermez."
  ],
  planningNotes: [
    "Yerel işaretleri, korkuluğun sürekliliğini ve kıyının sağlamlığını gündüz kontrol edin. Sahada elverişli açık kuru bölüm yoksa av yapmayın.",
    "Basamaklara, fener platformuna, iskeleye veya tekne yanaşma şeridine geçmeyin. Tekne trafiği ve yürüyüş önceliklidir."
  ],
  seasonalNotes: ["Lüfer için güncel deniz avı boy, miktar, dönem ve takım sınırlarını 6/2 ve ilgili değişikliklerinden kontrol edin."],
  sources: [coastInventory, coastalSurvey, fishingInspection, bluefishStudy, bluefishRecord, pathwayReport, shoreMap, law, law2025, law2026],
  researchStatus: "27 Kasım 2026 C+ kıyı araştırması",
  researchSummary: "Resmî kıyı envanteri su kimliğini, 2026 yaya hattı kaydı kamusal yaklaşımı, akademik yayın Büyükdere Koyu'nda tarihsel lüfer varlığını destekler. Yalnız gündüz güvenli açık kıyı açıklığı değerlendirilir.",
  fishEvidence: [
    { name: "Lüfer", evidenceLevel: "Koy adına bağlı akademik tarihsel kayıt", sourceLabel: bluefishStudy.label, sourceUrl: bluefishStudy.url, note: "Büyükdere Koyu kaynakta doğrudan anılır. Güncel kıyı avı veya bolluk verisi yoktur." }
  ],
  accommodationOptions: [],
  accessEvidence: [
    { label: coastInventory.label, value: "Büyükdere'ye ayrı kıyı envanter kayıtları", sourceUrl: coastInventory.url, note: "Askerî kıyı, Sarıyer Meydanı ve komşu kıyılar ayrı envanter satırlarıdır." },
    { label: pathwayReport.label, value: "2026 kamusal sahil yürüyüşü gözlemi", sourceUrl: pathwayReport.url, note: "Yaya kullanımı belgelenir. Aydınlatmasız ve korkuluksuz kesimler rota dışında kalır." }
  ],
  navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["İstanbul İl Tarım Büyükdere kıyı denetimi ve kıyı envanteri", "Üsküdar Üniversitesi Büyükdere Koyu lüfer çalışması"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: {
    model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "Kıyı envanteri ve harita", note: "Büyükdere Koyu ve kamusal kıyı yaklaşımı komşu iskele ve tesislerden ayrılmıştır." },
    species: { level: "partial", label: "Koy adına bağlı tarihsel lüfer kaydı", note: "Akademik kaynak türü koy adıyla eşleştirir. Güncel av sayımı yoktur." },
    legal: { level: "strong", label: "6/2 ve değişiklikleri", note: "Boğaz trafik ayrım şeridi, yerel levhalar, iskele ve operasyon alanları gözetilir." },
    access: { level: "partial", label: "Kamuya açık kıyı yaklaşımı", note: "Yürüyüş hattı kaynaklıdır. Güvenli açıklığın güncel durumu yerinde kontrol edilir." },
    field: { level: "unverified", label: "Yeni saha ziyareti yapılmadı", note: "Harita konumu kıyı referansıdır." }
  }
};
