import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { growthMarmaraEreglisiRoute20261102 } from "./meralar-growth-2026-11-02";

const date = "2026-11-05";
const base = growthMarmaraEreglisiRoute20261102;
const fish: ResearchSource = { label: "Tekirdağ İl Kültür – Marmaraereğlisi kıyısında sportif olta ve türler", url: "https://tekirdag.ktb.gov.tr/TR-75792/sportif-olta-balikciligi.html", note: "Marmaraereğlisi kıyı şeridi için istavrit, kefal ve karagöz dahil türleri bildirir; mahalle mikro stoku değildir." };
const access2026: ResearchSource = { label: "Marmaraereğlisi Belediyesi – 2026 Yeniçiftlik ve Sultanköy sahil düzenlemesi", url: "https://www.marmaraereglisi.bel.tr/haber-1588-marmaraereglisi_belediyesi_2026_nisan_ayi_olagan_meclis_toplantisi_gerceklestirildi.html", note: "İki sahili ayrı adlandırır; kamusal sahil düzenlemesi ve belediye tesislerini bildirir. İşaretli yüzme, tesis ve özel kesim olta alanı değildir." };
const coast: ResearchSource = { label: "Tekirdağ Büyükşehir – Sultanköy ve Yeniçiftlik kıyı çalışması", url: "https://www.tekirdag.bel.tr/haber/47989", note: "İki farklı mahallenin kıyısını ayrı sayar; kamusal kıyı temizliği ve plaj bağlamı." };
const accessVisit: ResearchSource = { label: "Tekirdağ Büyükşehir – Sultanköy sahili ve Yeniçiftlik halk plajı incelemesi", url: "https://www.tekirdag.bel.tr/birim_haber_detay/48477", note: "Sultanköy sahili ile Yeniçiftlik Atatürk Halk Plajı ayrı kamusal kıyı kesimleridir. Plajda olta izni değildir." };
const yeniMap: ResearchSource = { label: "Yeniçiftlik Sahil mahalle harita noktası", url: "https://www.haritatr.com/yeniciftlik-sahil-haritasi-ed95", note: "40.969837, 27.896502 mahalle sahil referansı; işaretli yüzme veya doğrudan olta atış noktası değildir." };
const sultanMap: ResearchSource = { label: "Sultanköy Plajı harita noktası", url: "https://www.haritamap.com/lokasyon/sultankoy-plaji-2000", note: "41.013561, 27.986824 plaj yaklaşım referansı; plajın işaretli yüzme alanı av rotasının dışındadır." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Deniz tür, boy, adet ve av aracı kuralları ile işaretli yüzme alanı sınırları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "Güncel değişiklik ana 6/2 metniyle birlikte incelendi." };
const species = ["İstavrit", "Kefal", "Karagöz"];
const fishEvidence = species.map(name => ({ name, evidenceLevel: "Resmî Marmaraereğlisi kıyı şeridi tür kaydı", sourceLabel: fish.label, sourceUrl: fish.url, note: "İlçe kıyısı ölçeği; mahalledeki her metrede av garantisi değildir." }));
const seasonal = "1 Nisan–15 Kasım işaretli yüzme sahasında olta açma; plaj, iskele, tekne ve özel tesis dışındaki güvenli açık kıyı dışında avlanma.";

export const newYeniciftlikRoute20261105: EnrichedMera = {
  ...base, slug: "tekirdag-marmaraereglisi-yeniciftlik-acik-kiyi", name: "Yeniçiftlik Açık Kıyısı", zone: "Yeniçiftlik Sahil Mahallesi'nde Atatürk Halk Plajı işaretli yüzme alanı, tesis ve tekne kesimi dışındaki güvenli kamusal açık kıyı", lat: 40.969837, lng: 27.896502,
  summary: "İl Kültür Marmaraereğlisi kıyısı için sportif olta ve istavrit, kefal, karagöz kaydeder. Belediye Yeniçiftlik sahilini ayrı kamusal kıyı olarak belgeler; işaretli plajda olta açılmaz.", fish: species,
  cautions: [seasonal, "Yeniçiftlik halk plajının işaretli yüzme kesimi ve kalabalık promenadı atış alanı değildir.", "Dalga, bağlı tekne ve kıyı erozyonu güvenli avı engelliyorsa ayrıl."],
  verification: "5 Kasım 2026: İl Kültür Marmaraereğlisi kıyısı tür/olta kaydı; belediye 2026 Yeniçiftlik sahili ve Büyükşehir ayrı halk plajı; 6/2 ve 2026/26 incelendi. Türler ilçe kıyısı ölçeğindedir; mikro av noktası ve yüzme sınırı yerinde kontrol edilir.",
  updatedAt: date, publishedAt: date, researchedAt: date, image: "/images/meralar/ulusal/tekirdag-marmaraereglisi-yeniciftlik-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/tekirdag-marmaraereglisi-yeniciftlik-acik-kiyi.svg",
  navigationNote: "40.969837, 27.896502 Yeniçiftlik Sahil mahalle yaklaşımıdır, olta atış pimi değildir. Plaj ve işletme sınırları dışındaki açık kıyıyı güncel levhayla seç.", shoreProfile: "Yeniçiftlik Sahil, Marmaraereğlisi merkez kıyısından yaklaşık beş kilometre batıda ayrı mahalle kıyısıdır; Sultanköy doğu kıyısıyla karışmaz.",
  transport: "Yeniçiftlik Sahil kamusal kıyısına mahalle yolu üzerinden yaklaş; işaretli yüzme ve özel tesis kesimini kullanma.",
  longIntro: ["İl Kültür Marmaraereğlisi kıyı şeridini sportif oltaya uygun genel bölge sayar; istavrit, kefal ve karagöz listeler. Belediye 2026 kayıtları Yeniçiftlik sahilini ayrı kamusal kıyı olarak gösterir.", "Bu ilçe ölçekli tür kanıtı Yeniçiftlik'in her cebinde stok veya av hakkı değildir. Atatürk Halk Plajı işaretli yüzme kesimi, işletme ve bağlı tekne çevresi rota dışındadır."],
  sources: [fish, access2026, coast, accessVisit, yeniMap, law, amendment], researchStatus: "5 Kasım 2026 yeni C+ kıyı incelemesi", researchSummary: "Resmî ilçe tür/olta kaydı ve ayrı Yeniçiftlik kamusal kıyısı; yüzme alanı dışlandı.",
  fishEvidence, accessEvidence: [{ label: access2026.label, value: "Yeniçiftlik ayrı kamusal sahil kesimi", sourceUrl: access2026.url, note: "İşaretli plaj, işletme ve tekne kesimi hariç." }],
  planningNotes: ["Plaj/yüzme alanı ve işletme dışlanır.", "Pin yalnız mahalle sahiline yaklaşımdır."], seasonalNotes: [seasonal],
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [fish.url, access2026.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { ...base.confidenceProfile!, reviewedAt: date, identity: { level: "strong", label: "Belediye Yeniçiftlik sahili", note: "Marmaraereğlisi merkezden ayrı mahalle kıyısı." }, species: { level: "partial", label: "İl Kültür kıyı şeridi türleri", note: "İlçe ölçeği, mikro stok değil." }, access: { level: "partial", label: "Kamusal sahil", note: "Plaj/işletme dışı açık bölüm yerinde seçilir." } }
};

export const newSultankoyRoute20261105: EnrichedMera = {
  ...newYeniciftlikRoute20261105, slug: "tekirdag-marmaraereglisi-sultankoy-acik-kiyi", name: "Sultanköy Açık Kıyısı", zone: "Sultanköy Mahallesi'nde plajın işaretli yüzme, özel tesis ve tekne alanı dışındaki güvenli kamusal açık kıyı", lat: 41.013561, lng: 27.986824,
  summary: "Belediye Sultanköy sahilini Yeniçiftlik ve merkezden ayrı kamusal kıyı olarak kaydeder. İl Kültür'ün Marmaraereğlisi kıyısı sportif olta ve tür kaydı bu ilçe kesimi için genel bağlam sağlar.",
  cautions: [seasonal, "Sultanköy plajı işaretli yüzme alanı ve kalabalık yürüyüş kesimi atış alanı değildir.", "Kıyıdaki dalga ve tekne hareketinde güvenli boşluk yoksa avlanma."],
  verification: "5 Kasım 2026: İl Kültür Marmaraereğlisi kıyısı tür/olta kaydı; belediye 2026 Sultanköy sahili ve Büyükşehir ayrı kıyı kaydı; 6/2 ve 2026/26 incelendi. İlçe tür kanıtı mikro stok garantisi değildir.",
  image: "/images/meralar/ulusal/tekirdag-marmaraereglisi-sultankoy-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/tekirdag-marmaraereglisi-sultankoy-acik-kiyi.svg",
  navigationNote: "41.013561, 27.986824 Sultanköy Plajı yaklaşım referansıdır; işaretli yüzme alanında olta izni değildir. Açık kıyıyı yerinde levhayla seç.", shoreProfile: "Sultanköy, Marmaraereğlisi merkezden doğuya ve Yeniçiftlik'ten yaklaşık on iki kilometre uzağa uzanan ayrı mahalle kıyısıdır; merkez rotasıyla aynı atış alanı değildir.",
  transport: "Sultanköy mahallesinin belediyece belgelenen sahiline yaklaş; özel tesis ve plaj sınırını aşma.",
  longIntro: ["Tekirdağ İl Kültür Marmaraereğlisi kıyısında sportif oltayı ve istavrit, kefal, karagöz türlerini bildirir. Belediye 2026'da Sultanköy sahilini ayrı mahalle kıyısı olarak kaydeder.", "Plaj erişimi olta izni değildir. İşaretli yüzme alanı, özel işletme ve tekne çevresi dışında güvenli açık kıyı bulunmazsa av planlanmaz."],
  sources: [fish, access2026, coast, accessVisit, sultanMap, law, amendment], researchSummary: "Resmî ilçe tür/olta kaydı ve ayrı Sultanköy kamusal kıyısı; yüzme alanı dışlandı.",
  accessEvidence: [{ label: access2026.label, value: "Sultanköy ayrı kamusal sahil kesimi", sourceUrl: access2026.url, note: "Plaj, işletme ve tekne kesimi hariç." }],
  confidenceProfile: { ...newYeniciftlikRoute20261105.confidenceProfile!, identity: { level: "strong", label: "Belediye Sultanköy sahili", note: "Merkez ve Yeniçiftlik'ten ayrı kıyı." } }
};

export const growthRoutes20261105 = [newYeniciftlikRoute20261105, newSultankoyRoute20261105];
