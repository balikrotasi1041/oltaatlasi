import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-30";
const angling: ResearchSource = { label: "Haber S Balıkesir – Erdek kıyı avı dosyası (2026)", url: "https://www.habersbalikesir.com/marmara-nin-balik-cenneti-erdek-kiyidan-olta-atabileceginiz-en-verimli-noktalar/101492", note: "Turanköy için levrek, karagöz ve eşkina; İlhanlar kayalık kıyısı için karagöz, eşkina ve lidakiyi ayrı yer adıyla aktarır. Stok sayımı veya av garantisi değildir." };
const turanOfficial: ResearchSource = { label: "T.C. İletişim Başkanlığı – Turanköy kıyı yerleşimi", url: "https://www.iletisim.gov.tr/turkce/yerel_basin/detay/erdekin-kirsal-mahallesi-turkuaz-renkli-deniziyle-turist-cekiyor-balikesir", note: "Turan Mahallesi'nin Erdek'in ayrı, ziyaret edilen kıyı yerleşimi olduğunu doğrular; olta izni veya tür kanıtı değildir." };
const ilhanOfficial: ResearchSource = { label: "Balıkesir İl Kültür ve Turizm Müdürlüğü – Erdek kıyıları", url: "https://balikesir.ktb.gov.tr/TR-65920/dogal-guzellikler-ve-mesire-yerleri.html", note: "İlhan Köyü'nü Narlı ve Ocaklar'dan ayrı, ziyaret edilen Erdek kıyısı olarak adlandırır; balık türü kanıtı değildir." };
const ilhanBay: ResearchSource = { label: "Marmara Bölge – İlhanköy Koyu kıyı gözlemi (2026)", url: "https://marmarabolge.com/kapidag-yarimadasindaki-bu-koy-dogalligiyla-buyuluyor", note: "2026'da İlhanköy Koyu'nun ziyaret edilen açık kıyı olduğunu bildirir; amatör olta için özel izin belgesi değildir." };
const mapTuran: ResearchSource = { label: "OpenStreetMap Nominatim – Erdek Turan Mahallesi", url: "https://www.openstreetmap.org/search?query=Turan%20Mahallesi%20Erdek", note: "40.5040632, 27.7817463 idari mahalle merkezi; kesin olta cebi veya plaj sınırı değildir." };
const mapIlhan: ResearchSource = { label: "OpenStreetMap Nominatim – Erdek İlhanköy Mahallesi", url: "https://www.openstreetmap.org/search?query=%C4%B0lhank%C3%B6y%20Erdek", note: "40.5055212, 27.6954969 idari mahalle merkezi; kesin kıyı atış noktası değildir." };
const swimming: ResearchSource = { label: "Akademik yüzme suyu ek verisi – Turan Halk Plajı koordinatı", url: "https://dergipark.org.tr/en/download/article-file/4653659", note: "Turan Halk Plajı'nı 40.506795, 27.790100 koordinatında gösterir; sayfa bu işaretli yüzme alanını av önerisinden çıkarır." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Deniz tür/boy/adet/yöntem kuralları ile 1 Nisan–15 Kasım işaretli yüzme alanı yasağı uygulanır." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte değerlendirildi." };

const base: EnrichedMera = {
  slug: "balikesir-erdek-turankoy-acik-kayalik-kiyisi", name: "Turanköy Açık Kayalık Kıyısı", province: "Balıkesir", district: "Erdek", region: "Marmara kıyısı",
  zone: "Turan Mahallesi kıyısında işaretli yüzme sahası ve işletme alanı dışındaki açık doğal kayalık kesim", waterType: "Deniz", locationPrecision: "Genel bölge", lat: 40.5040632, lng: 27.7817463,
  summary: "Erdek Turanköy'de 2026 yerel kıyı avı dosyası levrek ve kayalıkta karagöz/eşkina bildirir. Pin mahalle merkezidir; yüzme sahası ve özel işletme dışındaki açık kıyı gününde seçilir.",
  fish: ["Karagöz", "Eşkina"], methods: ["Kıyı dip oltası", "Hafif kıyı oltası"], baits: ["Mevzuata uygun doğal yem"],
  camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: ["Kıyı yerleşimi hizmetleri"],
  cautions: ["1 Nisan–15 Kasım işaretli yüzme alanında olta yasaktır; şamandıra sınırı belirsizse avlanma.", "Özel işletme, bağlı tekne veya liman operasyonu alanına girme.", "Kuzey kıyısında kaygan kaya ve ani dalga riskinde olta açma."],
  verification: "30 Ekim 2026: T.C. İletişim Başkanlığı ayrı Turanköy kıyı kimliğini; 2026 yerel kıyı dosyası Turanköy levrek ve kayalık karagöz/eşkina av anlatımını destekler. Akademik yüzme suyu koordinatı Turan Halk Plajı'nı ayırır. 6/2 ve 2026/26 incelendi; işaretli yüzme alanı av önerisinin dışındadır.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: "/images/meralar/ulusal/balikesir-erdek-turankoy-acik-kayalik-kiyisi.svg", socialImage: "/images/meralar/ulusal/balikesir-erdek-turankoy-acik-kayalik-kiyisi.svg",
  navigationNote: "40.5040632, 27.7817463 mahalle merkezi genel referansıdır; su kenarında kesin olta cebi değildir. Turan Halk Plajı'nın işaretli yüzme bölgesini, işletme sahasını ve levhaları dışarıda bırak; açık güvenli kayalık kesim bulunamazsa avlanma.",
  shoreProfile: "Turanköy, Kapıdağ'ın kuzeydoğusunda ayrı bir kıyı yerleşimidir. Plaj, işletme ve kayalık doğal kıyı farklı kullanımlardır; yalnız genel açık kayalık kıyı anlatılır.",
  transport: "Erdek Turan Mahallesi'ne ulaş; son kıyı yaklaşımını yerel levha ve şamandıra sınırlarına göre seç. Bu pin doğrudan atış noktası değildir.",
  crowdNote: "Yüzücü veya yürüyüşçü yakınında atış yapma.",
  longIntro: ["Resmî yerel basın kaydı Turanköy'ü Erdek'in ayrı ve ziyaret edilen kıyı mahallesi olarak tanımlar. 2026 kurumsal yerel haber dosyası Turanköy kıyısında levrek; kayalık kesimde karagöz ve eşkina av anlatımını aktarır.", "Bu anlatım bugünkü avı garanti etmez. Turan Halk Plajı'nın işaretli yüzme sahası, özel işletmeler ve varsa operasyon kıyısı dışında kalan güvenli açık kayalık kesim yerinde belirlenmelidir."],
  planningNotes: ["6/2 ve 2026/26 metnindeki deniz tür, boy, adet ve yöntem sınırlarını kontrol et.", "İşaretli yüzme, özel işletme veya kıyı operasyonuyla çakışan noktada olta açma."],
  seasonalNotes: ["1 Nisan–15 Kasım işaretli yüzme alanı yasağı geçerlidir.", "Kuzey kıyısında rüzgâr ve dalga yükselirse kayalığa çıkma."],
  sources: [turanOfficial, angling, mapTuran, swimming, law, amendment],
  researchStatus: "30 Ekim 2026 yeni C+ kıyı incelemesi", researchSummary: "Resmî Turanköy kimliği, rota-özel 2026 kıyı tür anlatımı, yüzme sahası ayrımı ve güncel 6/2 kuralları çaprazlandı.", researchedAt: date,
  fishEvidence: [{ name: "Karagöz", scientificName: "Diplodus vulgaris", evidenceLevel: "2026 Turanköy kayalık av anlatımı", sourceLabel: angling.label, sourceUrl: angling.url, note: "Saha stok sayımı değildir." }, { name: "Eşkina", scientificName: "Sciaena umbra", evidenceLevel: "2026 Turanköy kayalık av anlatımı", sourceLabel: angling.label, sourceUrl: angling.url, note: "Av garantisi değildir." }],
  accessEvidence: [{ label: turanOfficial.label, value: "Turan Mahallesi ziyaret edilen açık kıyı yerleşimidir", sourceUrl: turanOfficial.url, note: "Plaj/yüzme ve özel işletme alanı dışındaki kıyı yerinde seçilir; kesin olta cebi doğrulanmadı." }],
  accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["T.C. İletişim Başkanlığı Turanköy kıyı kimliği", "2026 Haber S Turanköy kıyı avı dosyası"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî Turan mahalle kimliği", note: "Erdek Turan kıyısı ayrı yerleşimdir." }, species: { level: "partial", label: "2026 yerel kıyı avı", note: "Karagöz/eşkina rota adıyla, stok sayımı değil." }, legal: { level: "partial", label: "6/2 ve 2026/26", note: "İşaretli yüzme sahası hariç; yerel levha gününde kontrol edilir." }, access: { level: "partial", label: "Kamusal genel kıyı", note: "Kesin mikro kıyı saha teyitli değildir." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Kesin atış cebi uzaktan doğrulanmadı." } }
};

export const growthTurankoyRoute20261030 = base;
export const growthIlhankoyRoute20261030: EnrichedMera = {
  ...base,
  slug: "balikesir-erdek-ilhankoy-acik-kayalik-kiyisi", name: "İlhanköy Açık Kayalık Kıyısı", zone: "Erdek İlhanköy Koyu'nun işaretli yüzme ve özel kullanım dışındaki açık kayalık kıyısı", lat: 40.5055212, lng: 27.6954969,
  summary: "Erdek İlhanköy Koyu'nun kayalık kıyısında 2026 rota-özel karagöz ve eşkina av anlatımı vardır. Pin mahalle merkezidir; işaretli yüzme alanı dışındaki açık kıyı yerinde seçilir.",
  fish: ["Karagöz", "Eşkina"],
  image: "/images/meralar/ulusal/balikesir-erdek-ilhankoy-acik-kayalik-kiyisi.svg", socialImage: "/images/meralar/ulusal/balikesir-erdek-ilhankoy-acik-kayalik-kiyisi.svg",
  cautions: ["1 Nisan–15 Kasım işaretli yüzme alanında olta yasaktır; sınır belirsizse avlanma.", "İşletme, özel parsel ve bağlı tekne alanına girme.", "Kaygan kaya, dalga ve kalabalıkta güvenli atış alanı yoksa olta açma."],
  verification: "30 Ekim 2026: Balıkesir İl Kültür İlhanköy'ü Narlı/Ocaklar'dan ayrı Erdek kıyısı sayar; 2026 Marmara Bölge İlhanköy Koyu'nun ziyaret edilen açık kıyısını, Haber S İlhanlar kayalığında karagöz/eşkina avını bildirir. 6/2 ve 2026/26 incelendi; yüzme alanı ve özel kıyı dışarıda.",
  navigationNote: "40.5055212, 27.6954969 İlhanköy mahalle merkezi genel referansıdır; su kenarında kesin atış noktası değildir. Narlı ile karıştırma; açık kıyı, yüzme şamandırası, özel işletme ve levha sınırını yerinde ayır.",
  shoreProfile: "İlhanköy Koyu, Narlı'nın kuzeyinde ayrı bir Erdek kıyı yerleşimidir. Sayfa plaj içi veya özel işletmeyi değil açık doğal kayalık yaklaşımı anlatır.",
  transport: "Erdek İlhanköy yerleşimine git; son kıyı seçimini işletme sınırı, işaretli yüzme ve güvenli kaya koşullarına göre yap. Genel pin doğrudan olta yeri değildir.",
  longIntro: ["Balıkesir İl Kültür Müdürlüğü İlhan Köyü'nü ayrı kıyı yerleşimi olarak kaydeder. 2026 İlhanköy Koyu haberi ziyaret edilen açık kıyıyı; aynı yılın Erdek kıyı avı dosyası İlhanlar kayalıklarında karagöz ve eşkina avını anlatır.", "Haberler stok ölçümü veya bugün av garantisi değildir. İşaretli yüzme sahası, özel kıyı ve güvenli olmayan kayalar av önerisinin dışındadır."],
  sources: [ilhanOfficial, ilhanBay, angling, mapIlhan, law, amendment],
  researchSummary: "İlhanlar, Narlı ve Turanköy ayrı kıyılardır; resmî yer kimliği, 2026 rota-özel tür haberi, kamusal koy ve 6/2 sınırları çaprazlandı.",
  fishEvidence: [{ name: "Karagöz", scientificName: "Diplodus vulgaris", evidenceLevel: "2026 İlhanlar kayalık av anlatımı", sourceLabel: angling.label, sourceUrl: angling.url, note: "Güncel stok sayımı değildir." }, { name: "Eşkina", scientificName: "Sciaena umbra", evidenceLevel: "2026 İlhanlar kayalık av anlatımı", sourceLabel: angling.label, sourceUrl: angling.url, note: "Av garantisi değildir." }],
  accessEvidence: [{ label: ilhanOfficial.label, value: "İlhanköy ziyaret edilen Erdek kıyısıdır", sourceUrl: ilhanOfficial.url, note: "Kesin olta cebi değil; işaretli yüzme ve özel alan dışı kıyı gününde seçilir." }, { label: ilhanBay.label, value: "2026 açık koy ziyareti", sourceUrl: ilhanBay.url, note: "Amatör av için özel izin belgesi değildir." }],
  qualityAssessment: { ...base.qualityAssessment!, independentStrongFamilies: ["Balıkesir İl Kültür İlhanköy kıyı kaydı", "2026 Haber S İlhanlar kayalık avı dosyası"] },
  confidenceProfile: { ...base.confidenceProfile!, identity: { level: "strong", label: "Resmî İlhan Köyü kimliği", note: "Narlı/Turan'dan ayrı kıyı yerleşimi." }, species: { level: "partial", label: "2026 İlhanlar kayalık avı", note: "Karagöz/eşkina; stok sayımı değil." } }
};

export const growthRoutes20261030 = [growthTurankoyRoute20261030, growthIlhankoyRoute20261030];
