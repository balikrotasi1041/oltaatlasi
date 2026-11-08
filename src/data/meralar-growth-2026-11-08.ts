import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { growthMarmaraEreglisiRoute20261102 } from "./meralar-growth-2026-11-02";

const date = "2026-11-08";
const base = growthMarmaraEreglisiRoute20261102;
const municipality: ResearchSource = { label: "Kocaeli Büyükşehir Belediyesi – Kefken koyları", url: "https://www.kocaeli.bel.tr/buyuleyici-guzellikler.html", note: "Yeşil Koy ve Pembe Kayalar'ı ayrı ziyaret noktaları olarak adlandırır; olta izni veya tür stoku değildir." };
const district: ResearchSource = { label: "Kandıra Belediyesi – doğal güzellikler", url: "https://kandira.bel.tr/icerik/dogal-guzellikler", note: "Pembe Kayalar'ın doğal ve arkeolojik sit niteliğini, Kefken kıyı kimliğini açıklar." };
const culture: ResearchSource = { label: "Kültür Portalı – Kefken Pembe Kayalar sit alanı", url: "https://www.kulturportali.gov.tr/turkiye/kocaeli/kulturenvanteri/kefken-pembe-kayalar-arkeolojik-sit-alani", note: "Pembe Kayalar ile Cebeci yönündeki koruma şeridini tanımlar; kazı, dolgu ve yapılaşma yasağı olta izni değildir." };
const pembeFish: ResearchSource = { label: "Medyabar – Haziran 2026 Pembe Kayalar istavrit gözlemi", url: "https://medyabar.com/haber/28213175/pembe-kayaliklarda-istavrit-bereketi", note: "Pembe Kayalar'da amatörlerin istavrit tuttuğunu sahadan bildirir; yıl boyu av garantisi değildir." };
const pembeMap: ResearchSource = { label: "Pembe Kayalar ziyaret noktası haritası", url: "https://neredenegezilir.blogspot.com/2014/12/pembe-kayalar.html", note: "41.185441, 30.225382 genel ziyaret noktası; güvenli olta atış pimi değildir." };
const yesilFish: ResearchSource = { label: "Enuygun – Kefken Yeşil Koy kefal ve olta kaydı", url: "https://www.enuygun.com/ucak-bileti/kefken-sehir-rehberi/", note: "Yeşil Koy'u kefal ve olta ile ayrı anlatır; güncel stok garantisi değildir." };
const yesilMap: ResearchSource = { label: "Biz Evde Yokuz – Yeşil Koy konum bağlantısı", url: "https://www.bizevdeyokuz.com/kefken-gezilecek-yerler/", note: "Koy için bağlı harita noktası 41.184000, 30.228249; Pembe Kayalar'dan ayrı, genel giriş referansıdır." };
const yesilAccess: ResearchSource = { label: "Altunay Hotel – Yeşil Koy patika erişimi", url: "https://altunayhotel.com/kefken", note: "Kovanağzı kıyısı ve Pembe Kayalar orman yolu bağlantılarını anlatır; güncel levha ve mülkiyet sınırı yerinde kontrol edilir." };
const local: ResearchSource = { label: "Kandıra 2026 sahil güvenliği kararları", url: "https://www.mavikocaeli.com.tr/amp/kandirada-sahil-ve-kayaliklara-yeni-yasaklar-getirildi/246597/", note: "Pembe Kayalar yüksek kayalıklarda denize atlama ve tehlikeli tırmanma yasağını, cankurtaransız koylarda yüzme kısıtını bildirir; kıyıdan olta yasağı iddia etmez." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Deniz avı tür, boy, adet, yöntem, yer ve işaretli yüzme alanı kuralları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte değerlendirildi." };

const common = {
  province: "Kocaeli", district: "Kandıra", updatedAt: date, publishedAt: date, researchedAt: date,
  confidence: "C" as const, qualityGrade: "C+" as const, indexing: "index" as const,
  methods: ["Kıyı oltası", "Hafif spin"], baits: ["Suni çapari", "Küçük silikon yem"],
  seasonalNotes: ["Denizde türlerin güncel boy/adet sınırları 6/2'den kontrol edilir.", "1 Nisan–15 Kasım şamandıralı yüzme alanlarında olta açılmaz; yerel kıyı uyarısı gününde kontrol edilir."],
  planningNotes: ["Kayalıkta dalga, kayma ve arka atış koridoru kontrol edilir.", "Kıyıdaki koruma işaretleri, geçici kapanma ve özel kullanım sınırları aşılmaz."],
  researchStatus: "8 Kasım 2026 yeni C+ kıyı incelemesi"
};

export const growthPembeKayalarRoute20261108: EnrichedMera = {
  ...base, ...common, slug: "kocaeli-kandira-kefken-pembe-kayalar-acik-kiyi", name: "Pembe Kayalar Açık Kıyısı", zone: "Pembe Kayalar ziyaret alanında kapatılmış koy girişi, yüksek falez ve koruma sınırı dışındaki güvenli kamusal açık kıyı", lat: 41.185441, lng: 30.225382,
  summary: "Kocaeli Büyükşehir ve Kandıra Belediyesi Pembe Kayalar'ı ayrı kıyı noktası olarak belgeler. Haziran 2026 saha haberi burada amatör istavrit avını kaydeder; kapalı giriş ve tehlikeli kayalıklar rota dışıdır.", fish: ["İstavrit"],
  cautions: ["Kapatılmış koy girişinden geçme; 2026 yüksek kayalıkta tırmanma/atlama yasağına uy.", "Sit alanında kaya sökme, dolgu, ateş veya alanı tahrip eden faaliyet yapma.", "Dalga kayalığa vuruyorsa ya da güvenli düz kıyı yoksa olta açma.", "İşaretli yüzme alanı, özel kullanım ve güncel yerel kapanma varsa avlanma."],
  verification: "8 Kasım 2026: Belediye ve Kültür Portalı su/koruma kimliği, Haziran 2026 yerinde istavrit gözlemi, 6/2 ve 2026/26, Kandıra 2026 kıyı kısıtları incelendi. Mayıs 2026 kapatılmış koy girişi açık erişim sayılmadı; yalnız başka yasal kamusal yaklaşım ve güvenli düz kıyı varsa av planlanır.",
  image: "/images/meralar/ulusal/kocaeli-kandira-kefken-pembe-kayalar-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/kocaeli-kandira-kefken-pembe-kayalar-acik-kiyi.svg",
  navigationNote: "41.185441, 30.225382 Pembe Kayalar ziyaret referansıdır, olta atış noktası değildir. Kapatılmış koy yolunu ve yüksek kayalıkları kullanma; güvenli kamusal kıyı yoksa geri dön.", shoreProfile: "Pembe Kayalar korunan kaya kıyısıdır; Kefken yerleşim sahili ve yaklaşık birkaç yüz metre doğudaki Yeşil Koy'un korunaklı küçük koyundan ayrı adlandırılmış alandır.",
  transport: "Kefken'den Pembe Kayalar ziyaret yoluna git; giriş/koruma levhalarını izle, kapatılmış yan koya geçme.",
  longIntro: ["Kocaeli Büyükşehir ve Kandıra Belediyesi Pembe Kayalar'ı Kefken'in ayrı ziyaret noktası olarak kaydeder. Haziran 2026 tarihli yerinde haberde amatörlerin burada istavrit yakaladığı aktarılır.", "Sahanın doğal ve arkeolojik sit niteliği ile 2026 yüksek kayalık güvenlik kararları nedeniyle rota yalnız açık, yasal ve güvenli düz kıyı içindir. Kapatılmış koya, faleze veya dalga alan kayaya yönlendirme yapılmaz; uygun kıyı bulunmazsa avlanılmaz."],
  sources: [municipality, district, culture, pembeFish, pembeMap, local, law, amendment], researchSummary: "Resmî ayrı korunan kıyı kimliği, güncel rota-özel istavrit gözlemi ve 2026 güvenlik kısıtları; kapalı koy dışlandı.",
  fishEvidence: [{ name: "İstavrit", evidenceLevel: "Haziran 2026 rota-özel yerinde haber", sourceLabel: pembeFish.label, sourceUrl: pembeFish.url, note: "Mevsimsel gözlem, av garantisi değildir." }],
  accessEvidence: [{ label: municipality.label, value: "Pembe Kayalar kamusal ziyaret alanı", sourceUrl: municipality.url, note: "Kapatılmış yan koy girişi, yüksek falez ve yasak işaretli bölüm dışı; kesin güvenli mikro kıyı yerinde seçilir." }],
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [municipality.url, culture.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { ...base.confidenceProfile!, reviewedAt: date, overall: "C", identity: { level: "strong", label: "Belediye ve Kültür Portalı Pembe Kayalar", note: "Kefken-Cebeci genel rotasından ayrılan korunan kaya kıyısı." }, species: { level: "partial", label: "2026 yerinde istavrit haberi", note: "Mevsimsel, bugünkü stok değil." }, access: { level: "partial", label: "Kamusal ziyaret alanı", note: "Kapalı giriş ve yüksek kayalık hariç; mikro kıyı yerinde." } }
};

export const growthYesilKoyRoute20261108: EnrichedMera = {
  ...base, ...common, slug: "kocaeli-kandira-kefken-yesil-koy-acik-kiyi", name: "Yeşil Koy Açık Kıyısı", zone: "Yeşil Koy'un koruma/işletme ve işaretli yüzme alanı dışındaki güvenli kamusal kıyısı", lat: 41.184, lng: 30.228249,
  summary: "Büyükşehir Yeşil Koy'u Pembe Kayalar'dan ayrı adlandırır; Kefken gezi rehberi koy için kefal ve kıyı oltasını bildirir. Pin koyun genel girişidir; yüzme ve tehlikeli kayalık bölümü av alanı değildir.", fish: ["Kefal"],
  cautions: ["1 Nisan–15 Kasım şamandıralı yüzme alanında olta açma; insanlara doğru atış yapma.", "Koydaki dik/ıslak kayalar ve Karadeniz dalgasından uzak dur.", "İşletme, kamp, yangın ve koruma levhalarına uy; izinli kıyı bulunmazsa avlanma."],
  verification: "8 Kasım 2026: Büyükşehir Yeşil Koy'u ayrı ziyaret noktası sayar, Enuygun burada kefal ve olta bildirir, harita konumu ve iki patika yaklaşımı incelendi. 6/2, 2026/26 ve Kandıra 2026 kıyı/yüzme tedbirleri değerlendirildi; yüzme sahası ve yasaklı geçiş dışlandı.",
  image: "/images/meralar/ulusal/kocaeli-kandira-kefken-yesil-koy-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/kocaeli-kandira-kefken-yesil-koy-acik-kiyi.svg",
  navigationNote: "41.184000, 30.228249 Yeşil Koy genel giriş/harita referansıdır; belirli olta atış pimi değildir. Kovanağzı veya Pembe Kayalar bağlantısındaki güncel levhaları kontrol et.", shoreProfile: "Yeşil Koy küçük, nispeten korunaklı kıyıdır; Pembe Kayalar'ın açık kayalıklarından ve Kefken yerleşim sahilinden ayrı koydur.",
  transport: "Kovanağzı kıyısından veya Pembe Kayalar yönünden tarif edilen kamusal patikaya yaklaş; kapalı geçiş ya da özel parsel sınırı varsa dön.",
  longIntro: ["Kocaeli Büyükşehir turizm kaydı Yeşil Koy'u Pembe Kayalar ve diğer Kefken koylarından ayrı sayar. Kefken gezi rehberinde Yeşil Koy'a özgü kefal ve olta bilgisi bulunur.", "Koy aynı zamanda yüzme ve kamp ziyaretidir. Olta yalnız yüzme işaretleri, insan yoğunluğu, kapalı geçiş ve tehlikeli kayalıklar dışında güvenli boş kıyı varsa düşünülmelidir; gezi rehberindeki tür kaydı bugünkü avı garanti etmez."],
  sources: [municipality, yesilFish, yesilMap, yesilAccess, local, law, amendment], researchSummary: "Resmî ayrı koy kimliği, rota-özel kefal/olta kaydı, harita/patika yaklaşımı ve yüzme güvenliği dışlaması.",
  fishEvidence: [{ name: "Kefal", evidenceLevel: "Koya özgü gezi rehberi olta/tür kaydı", sourceLabel: yesilFish.label, sourceUrl: yesilFish.url, note: "Güncel stok veya her kıyı parselinde av garantisi değildir." }],
  accessEvidence: [{ label: municipality.label, value: "Yeşil Koy ayrı kamusal ziyaret noktası", sourceUrl: municipality.url, note: "Patika için Altunay kaydı; işaretli yüzme, özel ve kapalı kesim hariç." }],
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [municipality.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { ...base.confidenceProfile!, reviewedAt: date, overall: "C", identity: { level: "strong", label: "Büyükşehir Yeşil Koy", note: "Pembe Kayalar'dan ayrı koy." }, species: { level: "partial", label: "Koy-özel kefal kaydı", note: "Gezi rehberi; stok garantisi değil." }, access: { level: "partial", label: "Kamusal ziyaret ve patika", note: "Yüzme, kapalı geçiş ve özel alan hariç." } }
};

export const growthRoutes20261108 = [growthPembeKayalarRoute20261108, growthYesilKoyRoute20261108];
