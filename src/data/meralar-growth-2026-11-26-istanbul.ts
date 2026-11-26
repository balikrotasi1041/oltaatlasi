import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 6/2 amatör avcılık tebliği",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "Deniz amatör avcılığındaki tür, boy, dönem ve takım hükümlerinin dayanağıdır."
};
const amendment2025: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2025/12 amatör avcılık değişikliği",
  url: "https://www.tarimorman.gov.tr/HHGM/Haber/142/",
  note: "6/2 tebliğini değiştiren 16 Nisan 2025 düzenlemesidir."
};
const amendment2026: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2026/26 amatör avcılık değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "İstanbul Boğazı trafik ayırım şeridinde su ürünleri avcılığını yasaklayan hükmü ekler."
};
const nakkastepeGuide: ResearchSource = {
  label: "İBB — İstanbul Olta Balıkçılığı Rehberi, Nakkaştepe Sahil Parkı",
  url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
  note: "Rehber Nakkaştepe Sahil Parkı ve Kuzguncuk'u ayrı kıyı kayıtları olarak gösterir. Park kıyısı için kefal ve istavriti kaydeder."
};
const nakkastepeShore: ResearchSource = {
  label: "İstanbul Valiliği — Deniz Çöpleri İl Eylem Planı 2025–2029",
  url: "https://webdosya.csb.gov.tr/db/cygm/icerikler/istanbul-dcep-2025-2029-20250324133942.pdf",
  note: "Üsküdar kıyı envanterinde 163 metrelik Kuzguncuk Parkı kesimini genel Kuzguncuk kıyısından ayrı listeler. Yakalama veya parkın her noktasından olta atma izni vermez."
};
const nakkastepeMap: ResearchSource = {
  label: "Yandex Haritalar — Nakkaştepe Sahil",
  url: "https://yandex.com.tr/maps/org/nakkastepe_sahil/2607957926/",
  note: "Nakkaştepe Sahil Parkı için kullanılan harita referansını gösterir."
};
const burunbahceInspection: ResearchSource = {
  label: "İstanbul İl Tarım ve Orman Müdürlüğü — Beykoz amatör avcılık denetimi",
  url: "https://istanbul.tarimorman.gov.tr/Haber/2568/Beykoz-Ilcesinde-Amator-Balikcilara-Yonelik-Denetim-Yapildi",
  note: "2024 kıyı denetimi Burunbahçe'yi Paşabahçe ve Çubuklu'dan ayrı sayar ve Burunbahçe'deki amatör olta avcılığını belgeler."
};
const burunbahceEvent: ResearchSource = {
  label: "Beykoz Belediyesi — Burunbahçe olta balıkçılığı yarışması",
  url: "https://beykoz.bel.tr/haberler/bogazda-en-cok-baligi-tutan-altini-alacak",
  note: "Belediye halka açık yarışmanın yerini Burunbahçe Sahili, sosyal tesisler önü olarak verir. Palamut ve lüfer yarışma hedefleri arasında anılır."
};
const burunbahceFish: ResearchSource = {
  label: "Beykoz Olay — Burunbahçe kıyısında palamut gözlemi",
  url: "https://www.beykozolay.com/2026/11/18/beykoz-burunbahcede-palamut-akini-kovalar-doldu/",
  note: "18 Kasım 2026 tarihli saha haberi ve bağlantılı görüntü, 15 Kasım'da Burunbahçe kıyısından oltayla palamut çıkarıldığını belgeler."
};
const burunbahceMap: ResearchSource = {
  label: "Yandex Haritalar — Burunbahçe Sahil",
  url: "https://yandex.com.tr/maps/org/burunbahce_sahil/174600688734/",
  note: "Burunbahçe kıyısındaki park referansını konumlandırır."
};

export const growthRoutes20261126Istanbul: EnrichedMera[] = [
  {
    slug: "istanbul-uskudar-nakkastepe-sahil-parki-acik-kiyi",
    name: "Nakkaştepe Sahil Parkı Açık Kıyısı",
    province: "İstanbul", district: "Üsküdar", region: "Marmara", waterType: "Deniz",
    zone: "Nakkaştepe Sahil Parkı'nın 163 metrelik park kesiminde, Boğaz önündeki kuru yürüyüş hattı. Kuzguncuk iskelesi ile Beylerbeyi ve Kuzguncuk'un genel kıyı hatları kapsam dışıdır.",
    lat: 41.038925, lng: 29.033057, locationPrecision: "Genel bölge",
    summary: "Üsküdar'da İstanbul Boğazı'na bakan kısa park kıyısıdır. İBB'nin kıyı rehberi burada kefal ve istavrit bildirir. Yaya alanı, akıntı ve Boğaz trafiği avlanılabilecek açıklığı sınırlar.",
    fish: ["Kefal", "İstavrit"], methods: ["Hafif kıyı oltası", "Akıntıya uygun kontrollü takım"], baits: ["Tür ve akıntıya uygun küçük yem"],
    camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: ["Kamusal sahil parkı", "Yaya yürüyüş hattı"],
    cautions: [
      "İstanbul Boğazı trafik ayrım düzeninde ve iskele çevresindeki manevra alanlarında avlanmayın.",
      "Tekne dalgasında ve ıslak zeminde kıyı kenarından uzak durun. Bariyer üzerine çıkmayın.",
      "Yürüyüş yolunda güvenli atış koridoru yoksa takım açmayın. Parktaki güncel tabela ve geçici kapatmaları gözetin."
    ],
    verification: "26 Kasım 2026: İBB'nin rota-özel tür kaydı, 2025–2029 kıyı envanteri, park harita konumu ve yürürlükteki 6/2 değişiklikleri incelendi. Tür kaydı tarihsel, konum ise park referansıdır.",
    updatedAt: date, publishedAt: date, researchedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
    image: "/images/meralar/ulusal/istanbul-uskudar-nakkastepe-sahil-parki-acik-kiyi.svg",
    socialImage: "/images/meralar/ulusal/istanbul-uskudar-nakkastepe-sahil-parki-acik-kiyi.svg",
    navigationNote: "Nakkaştepe Sahil olarak işaretlenen deniz seviyesindeki parkı bulun. Koordinat parkı gösterir. İç kesimdeki millet bahçesi ve Kuzguncuk iskelesi rota dışındadır.",
    shoreProfile: "Anadolu yakasındaki kısa park cephesi yürüyüş yoluna açılır. Parkın kıyısında tekne dalgası, akıntı ve yaya yoğunluğu değişebilir.",
    transport: "Kuzguncuk ile Beylerbeyi arasındaki sahil yolundan park girişine yürüyerek yaklaşılır. Bitişik iskele veya işletme erişimleri kullanılmaz.",
    crowdNote: "Parkta yürüyüş yapanlar önceliklidir. Arkada ve kıyı önünde yeterli boşluk oluşmadan atış yapmayın.",
    longIntro: [
      "Nakkaştepe Sahil Parkı, İBB'nin İstanbul Olta Balıkçılığı Rehberi'nde Kuzguncuk'tan ayrı bir avlak adıyla listelenir. Parkın sınırı ile komşu sahil ve iskele kullanımlarını ayırmak için tarif yalnız park cephesine odaklanır.",
      "Kefal ve istavrit park adına bağlı belediye kaydında yer alır. Kaynak tarihsel olduğundan anlık balık hareketi hakkında bilgi vermez."
    ],
    planningNotes: ["Kıyıdaki tabela, açık yaya hattı ve Boğaz trafik ayrım düzenini kontrol edin.", "Rüzgâr ve tekne dalgası kıyıyı güvensiz hâle getirirse avı erteleyin."],
    seasonalNotes: ["Deniz amatör avında güncel tür ve boy sınırlarını kontrol edin. İşaretli yüzme alanı oluşursa dönemsel yasak uygulanır."],
    sources: [nakkastepeGuide, nakkastepeShore, nakkastepeMap, law, amendment2025, amendment2026],
    researchStatus: "26 Kasım 2026 C+ kıyı araştırması",
    researchSummary: "İBB tür kaydı, resmî kıyı envanteri, park harita referansı, 6/2 ile değişiklikleri ve Boğaz trafik alanı koşulları incelendi.",
    fishEvidence: [
      { name: "Kefal", evidenceLevel: "Belediye rehberi, rota-özel", sourceLabel: nakkastepeGuide.label, sourceUrl: nakkastepeGuide.url, note: "Nakkaştepe Sahil Parkı adına bağlı tarihsel kayıt." },
      { name: "İstavrit", evidenceLevel: "Belediye rehberi, rota-özel", sourceLabel: nakkastepeGuide.label, sourceUrl: nakkastepeGuide.url, note: "Nakkaştepe Sahil Parkı adına bağlı tarihsel kayıt." }
    ],
    accommodationOptions: [],
    accessEvidence: [{ label: nakkastepeShore.label, value: "Kıyı envanterindeki kamusal park kesimi", sourceUrl: nakkastepeShore.url, note: "Yürüyüş hattındaki güvenli ve açık kıyı kesimleri güncel tabelaya bağlıdır." }],
    navigationVerified: false,
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["İBB Nakkaştepe rota-özel kıyı ve tür rehberi"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: { level: "strong", label: "İBB rehberi ve resmî kıyı envanteri", note: "Park kıyısı Kuzguncuk genel kıyısından ayrı tanımlanır." },
      species: { level: "strong", label: "İBB rota-özel tarihsel tür listesi", note: "Kefal ve istavrit park adına bağlıdır." },
      legal: { level: "strong", label: "6/2 ve değişiklikleri", note: "Boğaz trafik düzeni ve deniz avına ilişkin hükümler geçerlidir." },
      access: { level: "partial", label: "Kamusal sahil parkı", note: "Tabelalar, yaya yoğunluğu ve dalga koşulları yerinde kontrol edilir." },
      field: { level: "unverified", label: "Yeni saha teyidi yok", note: "Harita pini park referansını gösterir." }
    }
  },
  {
    slug: "istanbul-beykoz-burunbahce-parki-acik-kiyi",
    name: "Burunbahçe Parkı Açık Kıyısı",
    province: "İstanbul", district: "Beykoz", region: "Marmara", waterType: "Deniz",
    zone: "Burunbahçe Parkı'nın kamusal yürüyüş hattı önündeki kuru ve açık Boğaz kıyısı. Paşabahçe ile Çubuklu iskeleleri, işletme ve plaj erişimleri kapsam dışıdır.",
    lat: 41.114791, lng: 29.087804, locationPrecision: "Genel bölge",
    summary: "Paşabahçe ile Çubuklu arasında kalan Burunbahçe park kıyısıdır. İl Tarım denetim kaydı kıyıyı ayrı konum olarak belgeler. Kasım 2026 saha haberinde park çevresindeki kıyıda palamut avı kaydedilmiştir.",
    fish: ["Palamut"], methods: ["Kontrollü kıyı oltası", "Güvenli atış açıklığında kıyıdan at-çek"], baits: ["Palamuda uygun küçük sahte yem"],
    camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: ["Kamusal park kıyısı", "Sahil yürüyüş hattı"],
    cautions: [
      "Boğaz trafik ayrım düzeninde ve iskele manevra alanında avlanmayın.",
      "İşletme, plaj ve kısıtlı alan girişleri kapsam dışıdır. Güncel tabelalar ile görevli yönlendirmelerine uyun.",
      "Yürüyüş hattında insan yoğunluğu, tekne dalgası veya akıntı güvenli atışı engelliyorsa olta açmayın."
    ],
    verification: "26 Kasım 2026: İstanbul İl Tarım'ın ayrı Burunbahçe denetim kaydı, Beykoz Belediyesinin park etkinliği, Kasım 2026 palamut saha haberi ve 6/2 değişiklikleri incelendi.",
    updatedAt: date, publishedAt: date, researchedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
    image: "/images/meralar/ulusal/istanbul-beykoz-burunbahce-parki-acik-kiyi.svg",
    socialImage: "/images/meralar/ulusal/istanbul-beykoz-burunbahce-parki-acik-kiyi.svg",
    navigationNote: "Burunbahçe Sahil park referansına kamusal yürüyüş hattından yaklaşın. Koordinat park kıyısının genel konumudur. Sosyal tesis, plaj ve iskele girişleri rota dışındadır.",
    shoreProfile: "Burunbahçe'de sahil yürüyüş yolu Boğaz önündedir. Akıntı, tekne dalgası ve kamusal kullanım nedeniyle uygun kıyı açıklığı değişkendir.",
    transport: "Beykoz sahil yolunun Paşabahçe–Çubuklu kesiminden Burunbahçe parkına ulaşılır. Son yaklaşımda kamusal park girişini kullanın.",
    crowdNote: "Yürüyüş yolu kalabalıksa veya arkada geçiş varsa güvenli atış koridoru açılmasını bekleyin.",
    longIntro: [
      "İstanbul İl Tarım ve Orman Müdürlüğünün 2024 denetim kaydında Burunbahçe, Paşabahçe ve Çubuklu'dan ayrı bir amatör avcılık noktası olarak geçer. Beykoz Belediyesi de olta etkinliğinin yerini Burunbahçe Sahili olarak belirtir.",
      "15 Kasım 2026 tarihli kıyı gözlemi palamut avını belgeler. Belediye yarışma duyurusundaki hedef türlerle kıyıda gözlenen türü ayırdık ve bu sayfada palamutu listeledik."
    ],
    planningNotes: ["İskele, plaj ve işletme bölümlerine girmeden kamusal park cephesini kullanın.", "Kıyıdaki levhaları ve tekne hareketini değerlendirin. Trafik ayrım düzenine olta atmayın."],
    seasonalNotes: ["Palamut için güncel boy, zaman ve avlanma usulü hükümlerini kontrol edin. Kasım kaydı günlük verim garantisi vermez."],
    sources: [burunbahceInspection, burunbahceEvent, burunbahceFish, burunbahceMap, law, amendment2025, amendment2026],
    researchStatus: "26 Kasım 2026 C+ kıyı araştırması",
    researchSummary: "Ayrı Burunbahçe denetim kaydı ve belediye etkinliği ile kıyı kimliği ve kamusal park erişimi, tarihli kıyı gözlemiyle palamut kanıtı doğrulandı.",
    fishEvidence: [{ name: "Palamut", evidenceLevel: "Tarih ve yer belirten kıyı gözlemi", sourceLabel: burunbahceFish.label, sourceUrl: burunbahceFish.url, note: "15 Kasım 2026 gözlemi Burunbahçe'de oltayla yakalanan palamutu belgeler." }],
    accommodationOptions: [],
    accessEvidence: [
      { label: burunbahceEvent.label, value: "Belediye duyurusunda halka açık kıyı etkinliği", sourceUrl: burunbahceEvent.url, note: "Kaynak Burunbahçe sahilini açıkça adlandırır. Yalnız park önündeki kamusal açık kıyı bu rotaya dahildir." },
      { label: burunbahceInspection.label, value: "Burunbahçe kıyısında amatör olta denetimi", sourceUrl: burunbahceInspection.url, note: "Paşabahçe ve Çubuklu ayrı yerler olarak geçer." }
    ],
    navigationVerified: false,
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["İstanbul İl Tarım Burunbahçe rota-özel denetim kaydı", "Beykoz Belediyesi Burunbahçe Parkı olta etkinliği"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: { level: "strong", label: "İl Tarım ve Beykoz Belediyesi Burunbahçe kayıtları", note: "Kıyı parkı Paşabahçe ve Çubuklu'dan ayrı tanımlanır." },
      species: { level: "strong", label: "Kasım 2026 park kıyısı gözlemi", note: "Palamut Burunbahçe'deki tarihli kıyı avında belgelenir." },
      legal: { level: "strong", label: "6/2 ve değişiklikleri", note: "Boğaz trafik düzeni ve deniz avına ilişkin hükümler uygulanır." },
      access: { level: "partial", label: "Kamusal park kıyısı", note: "İşletmeler ve plaj dışındaki park yolu güncel tabelaya bağlıdır." },
      field: { level: "unverified", label: "Kıyı kullanımına dair yeni saha teyidi yok", note: "Harita pini park referansıdır." }
    }
  }
];
