import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-26";
const slug = "kocaeli-kandira-uzunkum-acik-olta-kiyisi";
const contest: ResearchSource = {
  label: "Kocaeli Büyükşehir Belediyesi – Uzunkum olta yarışması (2025)",
  url: "https://www.kocaeli.bel.tr/haber/olta-ustalarinin-nefes-kesen-yarisi-49464.html",
  note: "Uzunkum Sahili'nde sportif kıyı oltası ve yarışmada yakalanan 62 cm minekopu yer adıyla kaydeder; etkinlik günü dışındaki güncel av başarısını garanti etmez."
};
const tourism: ResearchSource = {
  label: "Kocaeli Büyükşehir Belediyesi – Kandıra kıyı turizmi (2026)",
  url: "https://www.kocaeli.bel.tr/amp/haber/kocaelinin-turizm-rotalari-hayran-birakti-52015.html",
  note: "Uzunkum Sahili'ni 2026 kamusal kıyı turizmi rotası olarak ayrıca listeler."
};
const nature: ResearchSource = {
  label: "Kocaeli Valiliği – 2016 il çevre durum raporu, Uzunkum",
  url: "https://webdosya.csb.gov.tr/db/ced/editordosya/kocaeli_icdr2016.pdf",
  note: "Uzunkum kıyısının Kandıra'da ayrı kumsal ve yürüyüş/balıkçılık alanı olduğunu belgeler; tarihsel alan tanımıdır."
};
const swimming: ResearchSource = {
  label: "Kocaeli Valiliği – 2025/1 suda boğulmayı önleme emri",
  url: "https://www.kocaeli.gov.tr/suda-bogulma-olaylari-ile-ilgili-genel-emir-2025-1",
  note: "Şamandıralı yüzme alanında olta avını dışlar; açık kıyı bile güncel yüzme ve can güvenliği sınırına tabidir."
};
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Deniz amatör avında tür, boy, adet, takım ve yer hükümleri." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte incelendi." };

export const growthUzunkumRoute20261026: EnrichedMera = {
  slug,
  name: "Uzunkum Açık Olta Kıyısı",
  province: "Kocaeli", district: "Kandıra", region: "Karadeniz",
  zone: "Çamkonak Uzunkum Sahili'nde 2025 sportif olta yarışmasının yapıldığı genel açık kıyı; şamandıralı yüzme ve kapalı koruma cepleri hariç",
  waterType: "Deniz", locationPrecision: "Genel bölge", lat: 41.2016, lng: 30.2833,
  summary: "Kandıra Uzunkum kıyısında resmî sportif olta yarışması yapılan açık sahil kesimidir. Yarışmada minekop kaydı vardır; şamandıralı yüzme alanı, çeken akıntı ve dalga riski av gününde ayrıca kontrol edilmelidir.",
  fish: ["Minekop"], methods: ["Kıyıdan mevzuata uygun surf oltası"], baits: ["Mevzuata uygun doğal yem"],
  camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli",
  amenities: ["Kamusal kumsal"],
  cautions: ["Şamandıralı yüzme alanına olta atma; plaj kullanıcıları varken güvenli atış açıklığı yoksa avı ertele.", "Çeken akıntı ve Karadeniz dalgasında suya girme, ıslak kaya veya faleze çıkma.", "Kum zambağı ve korunan kıyı bitkilerini ezme; kamp ve ateş yasağına uy."],
  verification: "26 Ekim 2026: Kocaeli Büyükşehir 2025 Uzunkum sportif olta yarışmasında minekop yakalandığını ve 2026'da Uzunkum Sahili'nin ziyaret edildiğini belgeliyor. Valilik çevre raporu ayrı Uzunkum kıyısını tanımlar. 6/2, 2026/26 ve 2025/1 yüzme sınırı incelendi. Bu tarihsel tür kaydı bugünkü av garantisi değildir.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: `/images/meralar/ulusal/${slug}.svg`, socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "41.2016, 30.2833 Uzunkum uzun sahilinin genel yön bulma referansıdır; atış noktası veya araç girişi değildir. Resmî yarışmanın açık kıyısını saha levhalarıyla belirle; yüzme şamandırası, korunan kumul ve özel/kapalı kesimleri dışla.",
  shoreProfile: "Uzunkum, Kandıra Cebeci'nin doğusundaki ayrı uzun açık Karadeniz kumsalıdır; sitedeki Cebeci, Kumcağız ve Babalı rotalarıyla aynı kıyı veya aynı su yaklaşımı sayılmaz.",
  transport: "Kandıra–Cebeci/Çamkonak yönünden resmî kamusal yaklaşımı kullan; son yol, park ve kıyı girişini aynı gün teyit et.",
  crowdNote: "Yüzme, yürüyüş ve koruma kullanımıyla çakışan kesimde olta açma.",
  longIntro: ["Kocaeli Büyükşehir Belediyesi'nin 2025 Uluslararası Surfcasting yarışması Uzunkum Sahili'nde düzenlendi; belediye yarışmadaki en büyük balığın minekop olduğunu bildirdi.", "Bu sayfa yarışma sahilini genel düzeyde tanımlar. Uzunkum'un tamamı sürekli av alanı değildir; şamandıralı yüzme alanı ve günlük güvenlik kararı üstündür."],
  planningNotes: ["6/2 ve 2026/26 tür, boy, adet ve takım kurallarını uygula.", "Valiliğin şamandıralı yüzme alanı yasağını ve güncel deniz/kıyı güvenliği kararını kontrol et."],
  seasonalNotes: ["Minekop kaydı 2025 yarışmasında yakalanan balığa dayanır; günlük/mevsimlik bolluk iddiası değildir."],
  sources: [contest, tourism, nature, swimming, law, amendment],
  researchStatus: "26 Ekim 2026 C+ yeni rota incelemesi; ilk yayında index,follow",
  researchSummary: "Resmî yarışma doğrudan Uzunkum olta kullanımı ve minekop kaydı sağlar. Ayrı resmî kaynaklar kıyı kimliği ve yüzme yasağı sınırını doğrular.", researchedAt: date,
  fishEvidence: [{ name: "Minekop", scientificName: null, evidenceLevel: "Uzunkum 2025 resmî surfcasting yarışmasında yakalanan tür", sourceLabel: contest.label, sourceUrl: contest.url, note: "Tek yarışma örneği; bugünkü bolluk veya yakalama garantisi değildir." }],
  accessEvidence: [{ label: contest.label, value: "Uzunkum açık sahilde resmî olta yarışması", sourceUrl: contest.url, note: "Etkinlik günü dışı kullanım şamandıralı yüzme ve güncel saha kararına bağlıdır." }, { label: tourism.label, value: "2026 kamusal Uzunkum kıyısı", sourceUrl: tourism.url, note: "Genel sahil erişimidir; her kıyı metresinde av izni değildir." }],
  accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["Kocaeli Büyükşehir Uzunkum resmî olta yarışması"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "Uzunkum ayrı kıyı", note: "Valilik ve belediye kayıtlarında ayrı kıyı." },
    species: { level: "strong", label: "Yarışmada yakalanan minekop", note: "2025 yarışma sonucu, güncel av garantisi değildir." },
    legal: { level: "partial", label: "6/2 ve yüzme sınırı", note: "Günlük şamandıra ve saha kararı üstün tutulur." },
    access: { level: "partial", label: "Kamusal açık sahil", note: "Yarışma kıyısı; mikro giriş ve atış açıklığı saha teyitli değildir." },
    field: { level: "unverified", label: "Saha teyidi yok", note: "Konum genel plaj referansıdır." }
  }
};

const kumcagizSlug = "kocaeli-kandira-kumcagiz-deresi-kurtyeri-kiyisi";
const kumcagizSpecies: ResearchSource = {
  label: "Kocaeli Büyükşehir Belediyesi – Kocaeli Ansiklopedisi, Kumcağız Deresi",
  url: "https://www.kocaeli.bel.tr/files/uploads/documents/1764854550_kocaeliansiklopedisicilt3-son-04122025pdf.pdf",
  note: "Kumcağız Deresi'ni Kumcağız Plajı'ndan ayrı su olarak tanımlar; derede sazan ve kefal için olta imkânını bildirir. Sazan tek ihtiyatlı tür olarak kullanıldı."
};
const kumcagizAccess: ResearchSource = {
  label: "Kocaeli Büyükşehir Belediyesi – Kandıra kıyı turizmi (2026)",
  url: "https://www.kocaeli.bel.tr/amp/haber/kocaelinin-turizm-rotalari-hayran-birakti-52015.html",
  note: "Kumcağız kamusal plaj ve yerleşimini 2026 kıyı turizmi kapsamında listeler; dereye özel mülkiyetten giriş izni değildir."
};
const kumcagizWater: ResearchSource = {
  label: "OpenStreetMap – Kumcağız Deresi su yolu",
  url: "https://www.openstreetmap.org/way/237819153",
  note: "Kurtyeri içindeki Kumcağız Deresi geometrisini ve genel su kimliği koordinatını verir; mülkiyet/erişim kanıtı değildir."
};
const kumcagizFlood: ResearchSource = {
  label: "Kocaeli Valiliği AFAD – İl Risk Azaltma Planı",
  url: "https://kocaeli.afad.gov.tr/kurumlar/kocaeli.afad/Kocaeli-IRAP.pdf",
  note: "Kandıra Kumcağız Deresi için taşkın/su baskını bağlamını kaydeder."
};

export const growthKumcagizCreekRoute20261026: EnrichedMera = {
  ...growthUzunkumRoute20261026,
  slug: kumcagizSlug, name: "Kumcağız Deresi Kurtyeri Kıyısı",
  zone: "Kumcağız plajının gerisindeki Kurtyeri Kumcağız Deresi; deniz kumsalı, yüzme alanı ve özel parseller hariç",
  region: "Batı Karadeniz içsuları", waterType: "Akarsu", lat: 41.1614315, lng: 30.228854,
  summary: "Kocaeli Büyükşehir ansiklopedisinin sazan için olta imkânı bildirdiği Kumcağız Deresi'nin Kurtyeri'deki genel kıyı kesimidir. Deniz plajı sayfasından ayrı tatlı su rotasıdır; açık yaya yaklaşımı ve güncel levha yerinde kontrol edilir.",
  fish: ["Sazan"], methods: ["İçsu kurallarına uygun hafif dip oltası"], baits: ["Mevzuata uygun hamur veya mısır"],
  amenities: ["Yakın kamusal Kumcağız sahil yerleşimi"],
  cautions: ["Taşkın, ani yükselme ve yağış sonrası sürüküntüde dere kıyısına yaklaşma.", "Dere yatağına, köprü altına veya özel parsellere girme; açık kamusal yaya yaklaşımı yoksa avı ertele.", "Sazan zaman yasağı, boy/adet sınırı ve suya özgü güncel levhayı av günü kontrol et."],
  verification: "26 Ekim 2026: Kocaeli Büyükşehir ansiklopedisi Kumcağız Deresi'nde sazan için olta imkânını açıkça kaydeder. OSM su yolu Kurtyeri içindeki dereyi deniz plajından ayırır; belediye Kumcağız kamusal sahil yerleşimini 2026'da listeler. 6/2, 2026/26 ve AFAD taşkın kaydı incelendi. Genel pin özel parsel veya kesin atış noktası değildir.",
  image: `/images/meralar/ulusal/${kumcagizSlug}.svg`, socialImage: `/images/meralar/ulusal/${kumcagizSlug}.svg`,
  navigationNote: "41.1614315, 30.228854 Kumcağız Deresi üzerindeki yaklaşık su kimliği referansıdır; tam av cebi veya kamu yolu girişi değildir. Kurtyeri kamusal kıyısından yalnız açık ve güvenli yaya bağlantısıyla yaklaş; kapalı/özel kıyıya girme.",
  shoreProfile: "Kumcağız Deresi, mevcut Kumcağız Sahili deniz/kumsal rotasından ayrı akarsu yatağıdır. Pin deniz kıyısındaki plaj sayfasından yaklaşık yarım kilometre içeride dere üzerindedir.",
  transport: "Kurtyeri ve Kumcağız kamusal sahil bağlantılarını kullan; dereye son yaya girişi, yol durumu ve taşkın sonrası bariyerleri yerinde kontrol et.",
  crowdNote: "Kumcağız plaj/yaya yoğunluğu ve dere kenarı daralması güvenli açıklık bırakmıyorsa olta kurma.",
  longIntro: ["Kocaeli Büyükşehir Belediyesi'nin ansiklopedisi Kumcağız Deresi'ni sazan ve kefal için olta imkânı veren ayrı bir içsu olarak tanımlar. Bu sayfa tür belirsizliğini azaltmak için yalnız sazanı listeler.", "Dere ağzına yakın kamuya açık genel kıyı bağlantısı ile özel veya kapalı dere parselleri aynı kabul edilemez. Yağış sonrası taşkın, su kalitesi ve güncel yerel levhalar planı değiştirebilir."],
  planningNotes: ["6/2 içsu sazan zaman yasağı, boy/adet ve takım sınırlamalarını av gününde kontrol et; 2026/26 değişikliğini de uygula.", "Kamusal yaya girişi veya güvenli kuru kıyı doğrulanamıyorsa avı yapma."],
  seasonalNotes: ["Sazan kaydı belediye ansiklopedisindedir; yağış ve akarsu ağzı değişimi güncel varlığı ve erişimi etkiler."],
  sources: [kumcagizSpecies, kumcagizAccess, kumcagizWater, kumcagizFlood, law, amendment],
  researchSummary: "Belediye ansiklopedisi dere adı ile sazan olta kullanımını birlikte verir. OSM geometri deniz plajı kaydıyla mükerrerliği ayırır. Erişim genel düzeyde; özel parsel ve mikro atış yeri iddiası yoktur.",
  fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "Belediye ansiklopedisinde Kumcağız Deresi sazan/olta kaydı", sourceLabel: kumcagizSpecies.label, sourceUrl: kumcagizSpecies.url, note: "Tarihsel kurum kaydı; bugünkü yakalama garantisi değildir." }],
  accessEvidence: [{ label: kumcagizAccess.label, value: "Kurtyeri/Kumcağız kamusal kıyı yerleşimine genel yaya yaklaşımı", sourceUrl: kumcagizAccess.url, note: "Dere boyunca kesintisiz geçiş veya özel parsel erişimi kanıtlanmış değildir." }, { label: kumcagizSpecies.label, value: "Kumcağız Deresi olta kullanımının kurumsal kaydı", sourceUrl: kumcagizSpecies.url, note: "Av noktasında tabela ve taşkın bariyeri ayrıca kontrol edilir." }],
  qualityAssessment: { ...growthUzunkumRoute20261026.qualityAssessment!, independentStrongFamilies: ["Kocaeli Büyükşehir Ansiklopedisi doğrudan Kumcağız Deresi sazan/olta kaydı"] },
  confidenceProfile: { ...growthUzunkumRoute20261026.confidenceProfile!,
    identity: { level: "strong", label: "Ayrı Kumcağız Deresi", note: "Belediye ansiklopedisi ve OSM su yolu örtüşür." },
    species: { level: "strong", label: "Dereye özgü sazan kaydı", note: "Kurumsal tarihsel kayıt; güncel bolluk değildir." },
    legal: { level: "partial", label: "6/2 içsu", note: "Sazan sezonu ve yerel levha av gününde kontrol edilir." },
    access: { level: "partial", label: "Kamusal sahil bağlantısı", note: "Son dere kıyısı girişi ve özel mülkiyet sınırı saha teyitli değildir." }
  }
};

export const growthRoutes20261026 = [growthUzunkumRoute20261026, growthKumcagizCreekRoute20261026];
