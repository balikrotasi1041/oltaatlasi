import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-29";
const tourism: ResearchSource = { label: "Balıkesir İl Kültür ve Turizm Müdürlüğü – Erdek kıyıları", url: "https://balikesir.ktb.gov.tr/TR-65920/dogal-guzellikler-ve-mesire-yerleri.html", note: "Ocaklar ve Narlı'yı Erdek'in birbirinden ayrı, ziyaret edilen kıyı yerleşimleri olarak kaydeder; balık türü kanıtı değildir." };
const shoreReport: ResearchSource = { label: "Haber S Balıkesir – Erdek kıyı avı dosyası (2026)", url: "https://www.habersbalikesir.com/marmara-nin-balik-cenneti-erdek-kiyidan-olta-atabileceginiz-en-verimli-noktalar/101492", note: "Ocaklar ve Narlı kayalıklarında kıyıdan avlananların aktardığı türleri ayrı ayrı adlandırır; saha örneklemesi veya bugünkü yakalama garantisi değildir." };
const angler: ResearchSource = { label: "Balık Sevdam – Ocaklar/Narlı birinci el kıyı anlatımı (2015)", url: "https://www.baliksevdam.com/konu/erdek-ocaklar.18356/page-2", note: "Narlı kayalığından mezgit ve istavrit, Ocaklar kıyısından karagöz/zargana raporlarını yer adıyla verir; tarihsel tanıklıktır." };
const bathing: ResearchSource = { label: "Balıkesir Büyükşehir Belediyesi – Ocaklar Plajı kamusal kıyı kaydı", url: "https://cmsapi.balikesir.bel.tr/Media/Dokumanlar/Faaliyet-Rapor/2019-Yili-Faaliyet-Raporu.pdf", note: "Ocaklar Plajı'nı belediyenin kıyı kullanım kayıtlarında adlandırır; işaretli yüzme alanında olta izni vermez." };
const mapOcaklar: ResearchSource = { label: "Yandex Haritalar – Ocaklar Mahallesi", url: "https://yandex.com.tr/maps/107898/erdek/geo/ocaklar_mah_/2215947556/", note: "Ocaklar yerleşiminin genel konumunu destekler; tek bir atış noktası değildir." };
const mapNarli: ResearchSource = { label: "Yandex Haritalar – Narlı Mahallesi", url: "https://yandex.com.tr/maps/geo/narli_mah_/2216278957/", note: "Erdek Narlı yerleşiminin genel konumunu destekler; Gemlik Narlı ile karıştırılmamalıdır." };
const portInventory: ResearchSource = { label: "Tarım ve Orman Bakanlığı – Balıkçılık Kıyı Yapıları Envanteri (2025)", url: "https://www.tarimorman.gov.tr/BSGM/Belgeler/Icerikler/Su%20%C3%9Cr%C3%BCnleri%20Altyap%C4%B1lar%C4%B1/Bal%C4%B1k%C3%A7%C4%B1%20Bar%C4%B1naklar%C4%B1.pdf", note: "Ocaklar ve Narlı barınma yerlerini ayrı ticari/operasyonel yapılar olarak listeler; bu sayfaların av önerisi bunların dışındaki kamusal kayalık kıyıdır." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Deniz amatör avcılığı, tür sınırları, liman ve 1 Nisan–15 Kasım işaretli yüzme alanı yasağı uygulanır." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte kontrol edildi." };

const base: EnrichedMera = {
  slug: "balikesir-erdek-ocaklar-kayalik-kiyisi", name: "Ocaklar Kayalık Kıyısı", province: "Balıkesir", district: "Erdek", region: "Marmara kıyısı",
  zone: "Ocaklar yerleşiminin, barınma yeri ve işaretli yüzme alanı dışındaki açık kayalık kıyısı", waterType: "Deniz", locationPrecision: "Genel bölge", lat: 40.45007, lng: 27.749723,
  summary: "Erdek Ocaklar'da kıyı oltacılığına ilişkin 2026 yerel tür anlatımı ve tarihsel birinci el kıyı avı kaydı bulunur. Sayfa barınma yeri ile işaretli yüzme alanını dışlar; açık kayalık kesim yerinde seçilir.",
  fish: ["Karagöz", "Zargana"], methods: ["Kıyı dip oltası", "Şamandıralı kıyı oltası"], baits: ["Mevzuata uygun doğal yem"],
  camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: ["Kamusal sahil yaklaşımı", "Yerleşim hizmetleri"],
  cautions: ["1 Nisan–15 Kasım arasında şamandıralı yüzme alanında olta yasaktır; sınır belirsizse avlanma.", "Ocaklar barınma yerinde, bağlı tekne ve manevra sahasında avlanma.", "Kaygan kaya, dalga ve kalabalıkta güvenli atış alanı yoksa olta açma."],
  verification: "29 Ekim 2026: İl Kültür Erdek/Ocaklar kıyı kimliğini, Büyükşehir kamusal plaj kullanımını, 2026 yerel dosya Ocaklar karagöz kaydını, 2015 birinci el anlatım zargana/karagöz kıyı raporunu destekler. 6/2 ve 2026/26 incelendi; barınma yeri ile işaretli yüzme alanı kapsam dışıdır.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: "/images/meralar/ulusal/balikesir-erdek-ocaklar-kayalik-kiyisi.svg", socialImage: "/images/meralar/ulusal/balikesir-erdek-ocaklar-kayalik-kiyisi.svg",
  navigationNote: "40.450070, 27.749723 Ocaklar kamusal kıyısının genel referansıdır; plaj içi veya kesin olta noktası değildir. Barınma yeri ve işaretli yüzme alanı dışında açık kayalık kıyıyı güncel levhalara göre seç.",
  shoreProfile: "Ocaklar uzun kamusal plaj, kayalık uçlar ve barınma yerinden oluşur. Bu dosya yalnız açık ve güvenli doğal kayalık kıyı yaklaşımını kapsar; plaj içi yüzme sahası ile balıkçı operasyonu dahil değildir.",
  transport: "Erdek'ten Ocaklar yerleşimine git; yerleşimde sahil yolunu izle. Son kıyı seçimi için yüzme şamandırası, barınak sınırı ve erişim levhasını yerinde kontrol et.",
  crowdNote: "Yüzücü, yürüyüşçü veya bağlı tekne varsa atış yapma.",
  longIntro: ["Balıkesir İl Kültür Müdürlüğü Ocaklar'ı Erdek'in ayrı kıyı yerleşimi olarak verir. 2026 yerel av dosyası kayalık Ocaklar kıyısında karagözden söz eder; 2015 birinci el anlatımlar kıyıdan zargana ve karagöz raporlar.", "Bu kaynaklar balığın her gün bulunduğunu göstermez. Kamuya açık kıyıda bile 6/2'nin işaretli yüzme alanı yasağı, barınak operasyonu ve yerel levhalar belirleyicidir."],
  planningNotes: ["6/2 ve 2026/26 metnindeki tür, boy, miktar ve deniz yer sınırlarını kontrol et.", "İşaretli yüzme sınırı, barınma yeri veya özel işletme ile çakışıyorsa avlanma."],
  seasonalNotes: ["1 Nisan–15 Kasım işaretli yüzme alanı yasağı açık kalır; doğal kayalık kesimin de güncel yerel levhası kontrol edilir.", "2015/2026 tür anlatımları av garantisi değildir."],
  sources: [tourism, shoreReport, angler, bathing, mapOcaklar, portInventory, law, amendment],
  researchStatus: "29 Ekim 2026 yeni C+ kıyı incelemesi", researchSummary: "Resmî kıyı/yerleşim kimliği, kamusal sahil, rota-özel iki kaynakta tür, barınak ayrımı ve 6/2 deniz kuralları çaprazlandı.", researchedAt: date,
  fishEvidence: [{ name: "Karagöz", scientificName: "Diplodus vulgaris", evidenceLevel: "Ocaklar adıyla 2026 yerel av anlatımı ve tarihsel saha raporu", sourceLabel: shoreReport.label, sourceUrl: shoreReport.url, note: "Güncel stok sayımı değildir." }, { name: "Zargana", scientificName: "Belone belone", evidenceLevel: "Ocaklar adıyla birinci el tarihsel kıyı raporu", sourceLabel: angler.label, sourceUrl: angler.url, note: "2015 raporu bugünkü avı garanti etmez." }],
  accessEvidence: [{ label: tourism.label, value: "Ocaklar kamusal Erdek kıyısı", sourceUrl: tourism.url, note: "Genel ziyaret; işaretli yüzme alanı dışındaki açık kayalık kesim av gününde seçilir." }, { label: bathing.label, value: "Belediye kıyı kullanımı", sourceUrl: bathing.url, note: "Plaj içinde mevsimsel olta izni değildir." }],
  accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["Balıkesir İl Kültür Ocaklar kıyı kaydı", "2026 yerel Ocaklar kıyı avı dosyası"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî Ocaklar kıyı kimliği", note: "Erdek Ocaklar ayrı yerleşim ve kıyıdır." }, species: { level: "partial", label: "Yerel tür anlatımları", note: "Karagöz ve zargana; güncel stok ölçümü değil." }, legal: { level: "partial", label: "6/2 ve 2026 değişikliği", note: "Yüzme alanı ve liman sınırı gününde denetlenir." }, access: { level: "partial", label: "Kamusal kıyı", note: "Açık kayalık kesim ve levha yerinde seçilir." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Kesin atış cebi uzaktan doğrulanmadı." } }
};

export const growthOcaklarRoute20261029 = base;
export const growthNarliRoute20261029: EnrichedMera = {
  ...base,
  slug: "balikesir-erdek-narli-acik-kayalik-kiyisi", name: "Narlı Açık Kayalık Kıyısı", zone: "Erdek Narlı'nın barınma yeri ve işaretli yüzme alanı dışındaki açık kayalık kıyısı", lat: 40.473318, lng: 27.689697,
  summary: "Erdek Narlı'nın açık kayalık kıyısında rota-özel 2026 yerel tür anlatımı ve birinci el istavrit/mezgit raporu vardır. Ticari barınma yeri ve işaretli yüzme alanı av önerisinin dışındadır.",
  fish: ["İstavrit", "Mezgit"], methods: ["Kıyı dip oltası", "Hafif kıyı takımı"],
  image: "/images/meralar/ulusal/balikesir-erdek-narli-acik-kayalik-kiyisi.svg", socialImage: "/images/meralar/ulusal/balikesir-erdek-narli-acik-kayalik-kiyisi.svg",
  cautions: ["1 Nisan–15 Kasım işaretli yüzme alanında olta yasaktır; sınır belirsizse avlanma.", "Narlı barınma yerinin içinde, mendireğinde veya tekne manevra sahasında avlanma.", "Kaygan kaya, dalga ve kalabalıkta güvenli atış alanı yoksa olta açma."],
  verification: "29 Ekim 2026: İl Kültür Erdek Narlı kıyı kimliğini doğrular; 2026 yerel dosya Narlı açık kayalığında kıyı avını ve türleri kaydeder. 2015 birinci el Narlı kayalık raporu istavrit/mezgit verir. 6/2, 2026/26 ve barınma yeri envanteri incelendi.",
  navigationNote: "40.473318, 27.689697 Yandex'in Erdek Narlı genel kıyı/yerleşim referansıdır; kesin atış noktası değildir. Gemlik Narlı ile karıştırma; barınma yeri ve işaretli yüzme alanı dışında açık kayalık kıyıyı yerinde seç.",
  shoreProfile: "Narlı, Ocaklar'dan yaklaşık altı kilometre batıda ayrı bir Erdek koyudur. Doğal kıyı kayalığı, plaj ve barınma yeri farklı kullanımlardır; sayfa yalnız açık kamusal kayalık kıyıyı anlatır.",
  transport: "Erdek–Kapıdağ Narlı yerleşimine git. Son kıyı yaklaşımı için yüzme şamandırası, barınak operasyonu, özel alan ve levhaları kontrol et.",
  longIntro: ["Balıkesir İl Kültür Müdürlüğü Narlı'yı Erdek kıyısında ayrı yerleşim olarak kaydeder. 2026 yerel dosya Narlı kayalıklarında avlananlardan söz eder; 2015 birinci el raporu kayalıktan istavrit ve mezgit alındığını belirtir.", "Tarihsel av raporu bugün balık garantisi değildir. Barınma yeri veya işaretli yüzme alanına girilmeden, güvenli ve açık kayalık kıyı yerinde belirlenmelidir."],
  sources: [tourism, shoreReport, angler, mapNarli, portInventory, law, amendment],
  researchSummary: "Narlı ve Ocaklar ayrı koylardır; resmî kıyı kaydı, 2026 rota-özel av dosyası, birinci el kayalık tür raporu ve 6/2 sınırları çaprazlandı.",
  fishEvidence: [{ name: "İstavrit", scientificName: "Trachurus spp.", evidenceLevel: "Narlı kayalığı birinci el av raporu", sourceLabel: angler.label, sourceUrl: angler.url, note: "2015 kaydı; güncel stok garantisi değildir." }, { name: "Mezgit", scientificName: "Merlangius merlangus", evidenceLevel: "Narlı kayalığı birinci el av raporu", sourceLabel: angler.label, sourceUrl: angler.url, note: "2015 kaydı; güncel stok garantisi değildir." }],
  accessEvidence: [{ label: tourism.label, value: "Erdek Narlı kıyısı genel ziyareti", sourceUrl: tourism.url, note: "Barınma yeri ve işaretli yüzme alanı hariç." }],
  qualityAssessment: { ...base.qualityAssessment!, independentStrongFamilies: ["Balıkesir İl Kültür Narlı kıyı kaydı", "2026 yerel Narlı kıyı avı dosyası"] },
  confidenceProfile: { ...base.confidenceProfile!, identity: { level: "strong", label: "Resmî Erdek Narlı kıyı kimliği", note: "Gemlik Narlı ile ayrı; Yandex konumu doğrulandı." }, species: { level: "partial", label: "Birinci el kayalık avı", note: "İstavrit ve mezgit; tarihsel, av garantisi değil." } }
};

export const growthRoutes20261029 = [growthOcaklarRoute20261029, growthNarliRoute20261029];
