import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { newMurefteRoute20261103 } from "./meralar-growth-2026-11-03";

const date = "2026-11-04";
const base = newMurefteRoute20261103;
const fish: ResearchSource = { label: "Tekirdağ İl Kültür – Şarköy kıyısında sportif olta ve türler", url: "https://tekirdag.ktb.gov.tr/TR-75792/sportif-olta-balikciligi.html", note: "Şarköy kıyı şeridi ölçeğinde istavrit, kefal ve karagöz; mikro kıyı stoku iddiası değildir." };
const study: ResearchSource = { label: "KMÜ – Şarköy çevresi kırsal turizm çalışması", url: "https://dergi.kmu.edu.tr/userfiles/file/haziran2012/53-60.pdf", note: "Tablo 3 Uçmakdere ve Gaziköy'ü birbirinden ayrı deniz turizmi/sportif olta faaliyet alanları arasında sayar; tarihsel kayıt." };
const coast: ResearchSource = { label: "Tekirdağ Büyükşehir – Gaziköy ve Uçmakdere kıyı şeridi", url: "https://tekirdag.bel.tr/arsiv/13639", note: "İki mahalleyi ayrı kıyı kesimleri olarak kamusal kıyı temizliği kapsamında adlandırır." };
const road: ResearchSource = { label: "Tekirdağ Büyükşehir – 2026 Uçmakdere–Gaziköy–Hoşköy yolu", url: "https://www.tekirdag.bel.tr/haber/51437", note: "Gaziköy–Hoşköy etabının tamamlandığını ve mahalleler arası yolu bildirir; kıyıdaki her metreye olta izni değildir." };
const beach: ResearchSource = { label: "Tekirdağ Büyükşehir – 2026 halk plajları", url: "https://www.tekirdag.bel.tr/haber/51288", note: "Uçmakdere halk plajını doğrular. İşaretli yüzme sahası 1 Nisan–15 Kasım arasında olta alanı değildir." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Denizde tür, boy, miktar, av aracı ve yüzme sahası hükümleri." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "6/2 ile birlikte incelendi." };
const ucMap: ResearchSource = { label: "Uçmakdere kıyı yaklaşım koordinatı", url: "https://mapcarta.com/N12006184975", note: "Uçmakdere Plajı çevresinin harita referansı; işaretli yüzme alanı atış noktası değildir." };
const gazMap: ResearchSource = { label: "Gaziköy kamusal kıyı yaklaşım koordinatı", url: "https://mapcarta.com/N12006187953", note: "Gaziköy kıyı referansı; işaretli yüzme alanı atış noktası değildir." };
const seasonal = "1 Nisan–15 Kasım arasında işaretli yüzme alanında olta açma; bu dönemde yalnız yüzme sahası dışında açık ve güvenli kamusal kıyı varsa değerlendir.";
const commonFish = ["İstavrit", "Kefal", "Karagöz"];
const fishEvidence = commonFish.map(name => ({ name, evidenceLevel: "Resmî Şarköy kıyı şeridi tür kaydı ve akademik mahalle faaliyet kaydı", sourceLabel: fish.label, sourceUrl: fish.url, note: "Şarköy kıyısı ölçeğinde; mikro noktada av garantisi değildir." }));
const sourceList = [fish, study, coast, road, law, amendment];

export const newUcmakdereRoute20261104: EnrichedMera = {
  ...base, slug: "tekirdag-sarkoy-ucmakdere-acik-kiyi", name: "Uçmakdere Açık Kıyısı", province: "Tekirdağ", district: "Şarköy", region: "Marmara", waterType: "Deniz",
  zone: "Uçmakdere mahalle kıyısında işaretli yüzme alanı, özel tesis, tekne ve paraşüt iniş alanı dışındaki güvenli kamusal kıyı", locationPrecision: "Genel bölge", lat: 40.8042, lng: 27.3911,
  summary: "Akademik çalışma Uçmakdere'yi Şarköy deniz turizmi ve sportif olta faaliyet alanı olarak kaydeder. İl Kültür Şarköy kıyısında istavrit, kefal ve karagöz bildirir. Plajın işaretli yüzme kesimi sezon boyunca olta alanı değildir.",
  fish: commonFish, methods: ["Mevzuata uygun hafif kıyı oltası", "Kıyıdan çapari"], baits: ["Türe ve 6/2'ye uygun yapay yem", "Ekmek"],
  cautions: [seasonal, "Yamaç paraşütü iniş alanında, özel kamp/tesis kıyısında ve kalabalık plajda olta açma.", "Kayalık/çakıllı kıyıda dalga, heyelan ve dar yol riskini av gününde kontrol et."],
  verification: "4 Kasım 2026: İl Kültür Şarköy tür/olta kaydı, KMÜ Uçmakdere faaliyet alanı, Büyükşehir ayrı kıyı ve 2026 halk plajı kaydı; 6/2 ve 2026/26 incelendi. Tür kanıtı ilçe ölçeğindedir; izinli mikro kıyı yerinde seçilir.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: "/images/meralar/ulusal/tekirdag-sarkoy-ucmakdere-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/tekirdag-sarkoy-ucmakdere-acik-kiyi.svg",
  navigationNote: "40.8042, 27.3911 Uçmakdere sahil yaklaşım referansıdır; işaretli plajda atış noktası değildir. Açık kıyıda güncel levha ve özel tesis sınırını yerinde kontrol et.",
  shoreProfile: "Uçmakdere'nin Marmara kıyısı Gaziköy, Hoşköy, Şarköy merkez ve Mürefte'den ayrı yerleşim kesimidir; akademik çalışma bu mahalleyi adıyla sayar.",
  transport: "Büyükşehir'in Uçmakdere–Gaziköy kıyı yolu üzerinden mahalleye ulaşılır; heyelan ve güncel yol duyurusu kontrol edilir.",
  longIntro: ["KMÜ çalışması Uçmakdere'yi sportif olta dâhil deniz turizmi faaliyet alanları arasında listeler; İl Kültür Şarköy kıyısında istavrit, kefal ve karagözü bildirir.", "Uçmakdere halk plajının varlığı belediye kaydıyla doğrulanır; plaj erişimi olta izni değildir. İşaretli yüzme alanı sezon boyunca dışlanır, kalabalıkta atış yapılmaz."],
  planningNotes: ["İşaretli yüzme/paraşüt iniş/özel tesis alanını dışla.", "Pin yalnız kıyıya yaklaşım içindir."], seasonalNotes: [seasonal],
  sources: [...sourceList, beach, ucMap], researchStatus: "4 Kasım 2026 yeni C+ deniz kıyısı incelemesi", researchSummary: "Resmî Şarköy türleri, akademik Uçmakdere olta faaliyeti ve belediye kıyı erişimi; yüzme alanı dışlandı.", researchedAt: date,
  fishEvidence, accessEvidence: [{ label: coast.label, value: "Uçmakdere adıyla kamusal kıyı şeridi", sourceUrl: coast.url, note: "Olta alanı işaretli yüzme/özel tesis dışında yerinde seçilir." }, { label: beach.label, value: "Uçmakdere halk plajı erişimi", sourceUrl: beach.url, note: "Sezonluk yüzme sahası yasağı geçerlidir; plajda olta izni değildir." }],
  camping: "Kontrol edilmeli", vehicleAccess: "Kontrol edilmeli", amenities: ["Halk plajı çevresi"], crowdNote: "Yüzücüler, paraşütçüler veya yürüyenlere güvenli mesafe yoksa olta açma.", accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [fish.url, study.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Akademik ve belediye Uçmakdere", note: "Ayrı kıyı kimliği." }, species: { level: "partial", label: "İl Kültür Şarköy kıyısı", note: "İlçe kıyısı tür kaydı." }, legal: { level: "strong", label: "6/2 ve 2026/26", note: "İşaretli yüzme sahası dışı." }, access: { level: "partial", label: "Belediye kıyı/plaj kaydı", note: "Mikro atış yeri yerinde seçilir." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Dalga/levha değişebilir." } }
};

export const newGazikoyRoute20261104: EnrichedMera = {
  ...newUcmakdereRoute20261104, slug: "tekirdag-sarkoy-gazikoy-acik-kiyi", name: "Gaziköy Açık Kıyısı", zone: "Gaziköy mahalle kıyısında işaretli yüzme, özel tesis ve tekne alanı dışındaki güvenli kamusal kıyı", lat: 40.75517, lng: 27.33532,
  summary: "Akademik çalışma Gaziköy'ü Şarköy deniz turizmi ve sportif olta faaliyet alanı olarak sayar. İl Kültür'ün Şarköy kıyısı türleri istavrit, kefal ve karagözdür; mikro stok iddiası değildir.",
  cautions: [seasonal, "Gaziköy kayalık/çakıllı kıyısında ani derinlik, dalga ve kayma riskini kontrol et.", "Heyelanlı kıyı yolu, özel mülk ve tekne hareketi olan alanda güvenli yaklaşım yoksa avlanma."],
  verification: "4 Kasım 2026: KMÜ Gaziköy faaliyet alanı, İl Kültür Şarköy tür/olta kaydı, Büyükşehir Gaziköy kıyısı ve 2026 yol çalışması; 6/2 ve 2026/26 incelendi. Türler ilçe kıyısı ölçeğinde; işaretli yüzme alanı dışlanır.",
  image: "/images/meralar/ulusal/tekirdag-sarkoy-gazikoy-acik-kiyi.svg", socialImage: "/images/meralar/ulusal/tekirdag-sarkoy-gazikoy-acik-kiyi.svg",
  navigationNote: "40.75517, 27.33532 Gaziköy kıyı yaklaşım referansıdır; izinli mikro atış cebi değildir. Mevcut levhayı, yüzme ve özel mülk sınırını kontrol et.",
  shoreProfile: "Gaziköy'ün Marmara kıyısı Uçmakdere'den yaklaşık altı kilometre, Hoşköy'den ayrı bir yerleşim kıyısıdır; akademik faaliyet tablosu Gaziköy'ü adıyla listeler.",
  transport: "Büyükşehir'in 2026 Gaziköy–Hoşköy yol kaydı kullanılır; dar kıyı yolu ve heyelan duyurusu av gününde kontrol edilir.",
  longIntro: ["KMÜ çalışmasının faaliyet tablosu Gaziköy'ü Şarköy deniz turizmi ve sportif olta alanları arasında sayar. İl Kültür, Şarköy kıyı şeridi için istavrit, kefal ve karagöz bildirir.", "Büyükşehir Gaziköy'ü ayrı kıyı kesimi ve ulaşım mahallesi olarak belgeler. Bu genel kayıtlar özel mülk, tekne alanı veya işaretli yüzme kesiminde av hakkı vermez."],
  planningNotes: ["Özel mülk, tekne ve işaretli yüzme kesimi dışarıda tutulur.", "Pin kıyı yaklaşım referansıdır."],
  sources: [...sourceList, gazMap], researchSummary: "Resmî Şarköy türleri, akademik Gaziköy faaliyeti ve belediye ayrı kıyı/yol kaydı.",
  accessEvidence: [{ label: coast.label, value: "Gaziköy adıyla kamusal kıyı şeridi", sourceUrl: coast.url, note: "Mikro atış yeri ve levha av gününde kontrol edilir." }, { label: road.label, value: "2026 Gaziköy bağlantı yolu", sourceUrl: road.url, note: "Yol erişimi olta izni değildir." }],
  amenities: [], crowdNote: "Yüzücüler ve kıyı ziyaretçilerine güvenli mesafe yoksa olta açma.",
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Akademik ve belediye Gaziköy", note: "Uçmakdere/Hoşköy'den ayrı." }, species: { level: "partial", label: "İl Kültür Şarköy kıyısı", note: "İlçe kıyısı tür kaydı." }, legal: { level: "strong", label: "6/2 ve 2026/26", note: "Yüzme alanı dışı." }, access: { level: "partial", label: "Belediye kıyı/yol", note: "Mikro kıyı yerinde." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Dalga/levha değişebilir." } }
};

export const growthRoutes20261104 = [newUcmakdereRoute20261104, newGazikoyRoute20261104];
