import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-22";
const ibbGuide: ResearchSource = {
  label: "İBB Tarım – Yeni Başlayanlar İçin Olta Balıkçılığı (2017)",
  url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
  note: "Rehberin 'Diğer Lokasyonlar' tablosu Hisarönü için istavrit, mezgit ve sardalyayı; Avcılar–Ambarlı sahili için oltayla ispari, mırmır, karagöz ve izmariti yer adıyla bildirir. Tarihsel kayıt güncel av garantisi değildir."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz oltası için tür, boy, adet ve yöntem hükümleri; 1 Nisan–15 Kasım işaretli yüzme alanı yasağı dahil."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "Yürürlükteki 6/2 değişikliği ana metinle birlikte okundu; yerel tabela ve daha özel kararların yerine geçmez."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği madde 21",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Kıyı tesisinin yaklaşım kanalı, mendirek ağzı, yanaşma/bağlama ve demirleme alanında su ürünleri avcılığı yasaktır."
};
const hisarWalk: ResearchSource = {
  label: "İBB – Kuruçeşme–Rumelihisarı sahil yürüyüş hattı",
  url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/en-guzel-istanbul-manzarasina-sahip-10-yer",
  note: "İBB 2022 içeriği Rumelihisarı sahilini kamusal yürüyüş hattının ayrı bir durağı olarak verir ve olta balıkçılarından söz eder. Tek tek kıyı ceplerine izin belgesi değildir."
};
const hisarIdentity: ResearchSource = {
  label: "Kültür ve Turizm Bakanlığı – Rumeli Hisarı Müzesi konumu",
  url: "https://kvmgm.ktb.gov.tr/tr-44097/istanbul-hisarlar-muze-mudurlugu.html",
  note: "Rumelihisarı/Yahya Kemal Caddesi kimliğini doğrular; müze arazisi ve girişleri olta rotası değildir."
};
const hisarMap: ResearchSource = {
  label: "OpenStreetMap – Rumeli Hisarı yer referansı",
  url: "https://www.openstreetmap.org/relation/7318154",
  note: "41.0847, 29.0570 müze önü genel kıyı çevresini gösterir; kesin kamusal atış cebi değildir. OpenStreetMap contributors, ODbL 1.0."
};
const ambarliFish: ResearchSource = {
  label: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)",
  url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle",
  note: "İBB Ambarlı'yı Avcılar sahilinden ayrıca anar; Ambarlı için istavrit, kefal, eşkina, isparoz, lüfer ve mırmır bildirir. 'Liman bölgesi' ifadesi liman işletmesinde av izni değildir."
};
const ambarliPark: ResearchSource = {
  label: "Avcılar Belediyesi – Ambarlı Ulusal Egemenlik Parkı",
  url: "https://avcilar.bel.tr/park/ulusal-egemenlik-parki",
  note: "Belediye parkı Ambarlı Mahallesi, Marmara Sahil adresinde ve kamusal park envanterinde tanımlar. Parkın her kıyı kenarı olta için elverişli değildir."
};
const ambarliMap: ResearchSource = {
  label: "OpenStreetMap – Ambarlı Ulusal Egemenlik Parkı poligonu",
  url: "https://www.openstreetmap.org/way/1183800507",
  note: "Park merkezi 40.9716564, 28.7143712; pin parka genel yaklaşım içindir. Denizköşkler'deki Avcılar Sahil Parkı-2 merkezinden yaklaşık 3 km batıdaki ayrı kıyıdır. OpenStreetMap contributors, ODbL 1.0."
};
const ambarliWater: ResearchSource = {
  label: "Avcılar Ambarlı sahilinde 2026 su kalitesi uyarısı – DHA aktarımı",
  url: "https://www.gzt.com/gundem/avcilar-ambarli-sahili-neden-kapatildi-deniz-suyu-analizinde-uygunsuzluk-tespit-edildi-4249758",
  note: "Ağustos 2026'da bir Ambarlı kesiminde denize girmenin su analizi üzerine yasaklandığı bildirildi. Bu, tüm sahilde olta yasağı veya tüketim güvenliği kararı değildir; kirlilik uyarısı ayrıca izlenir."
};

const base = (slug: string, name: string, district: string, zone: string, lat: number, lng: number): EnrichedMera => ({
  slug, name, province: "İstanbul", district, zone, lat, lng,
  waterType: "Deniz", region: "Marmara", locationPrecision: "Genel bölge",
  summary: "", fish: ["İstavrit"], methods: ["Kıyıdan mevzuata uygun olta"],
  baits: ["Mevzuata uygun yapay veya doğal yem"], camping: "Uygun değil",
  vehicleAccess: "Kontrol edilmeli", amenities: [], cautions: [],
  verification: "", updatedAt: date, publishedAt: date,
  confidence: "C", qualityGrade: "C+", indexing: "index",
  qualityAssessment: {
    model: "expanded-v2", reviewedAt: date, identityVerified: true,
    speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true,
    independentStrongFamilies: ["İBB yer adıyla olta ve tür kaydı"],
    localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
  },
  image: `/images/meralar/ulusal/${slug}.svg`,
  socialImage: `/images/meralar/ulusal/${slug}.svg`,
  navigationNote: "", shoreProfile: "", transport: "", crowdNote: "",
  longIntro: [], planningNotes: [], seasonalNotes: [], sources: [],
  researchStatus: "22 Ekim 2026 yeni program: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
  researchSummary: "", researchedAt: date, fishEvidence: [], accessEvidence: [],
  accommodationOptions: [], navigationVerified: false,
  confidenceProfile: {
    model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "Rota kimliği", note: "İBB'nin yer adıyla kayıtlı kıyısı." },
    species: { level: "strong", label: "Rota-özel tür", note: "İBB olta rehberi rotayı adıyla ve türle birlikte verir." },
    legal: { level: "strong", label: "6/2 ve liman sınırı", note: "2026/26 değişikliği ve kıyı tesisi/yüzme sınırları değerlendirildi." },
    access: { level: "partial", label: "Genel kamusal kıyı", note: "Kaynaklar açık kıyı kullanımını destekler; son metre saha teyitli değildir." },
    field: { level: "unverified", label: "Mikro atış cebi teyitsiz", note: "Pin yalnız genel yer referansıdır." }
  }
});

const hisarSlug = "istanbul-sariyer-rumelihisari-hisaronu-acik-kiyi";
export const growthHisaronuRoute20261022: EnrichedMera = {
  ...base(hisarSlug, "Rumelihisarı Hisarönü Açık Kıyısı", "Sarıyer", "Rumeli Hisarı önü Yahya Kemal Caddesi kamusal sahil yürüyüş kesimi; müze, eski iskele, özel işletme ve yanaşma yerleri hariç", 41.0847, 29.0570),
  summary: "İBB'nin Hisarönü adıyla istavrit bildirdiği Boğaz kıyısıdır. Bu kayıt müzenin, iskele işletmesinin veya bağlı teknelerin önünü av noktası olarak göstermez.",
  fish: ["İstavrit"],
  cautions: [
    "Rumeli Hisarı müzesi, özel restoran/yalı, eski iskele, bağlı tekne ve yanaşma yeri rota dışındadır; levha ve görevlilerin sınırlarına uy.",
    "Boğaz'ın dar akıntı kesiminde kaygan taş, yüksek kıyı duvarı ve suya düşme riski vardır; kuru, geniş ve güvenli yaya boşluğu yoksa av yapma.",
    "Kaldırımdan arka atış yapma; araç ve yaya trafiğiyle çakışan bölümde oltayı kurma."
  ],
  verification: "22 Ekim 2026 masa başı: İBB 2017 rehberindeki Hisarönü/istavrit kaydı, İBB'nin Rumelihisarı yürüyüş ve oltacı anlatımı, Bakanlığın müze konumu, 6/2 ile 2026/26 değişikliği ve Limanlar Yönetmeliği karşılaştırıldı. Pin genel kıyı çevresidir; müze, iskele ve özel alanlar dışlanır.",
  navigationNote: "41.0847, 29.0570 Rumeli Hisarı önü genel kıyı yeridir; müze, özel işletme, eski iskele veya izinli mikro atış noktası değildir. Yalnız açık kamusal kuru kıyıya yaya geçişi kullan.",
  shoreProfile: "Hisarönü, Beşiktaş'taki Bebek Koyu'ndan kuzeyde ve Emirgan'dan güneyde, Rumeli Hisarı önünde ayrı bir Boğaz kesimidir. İBB'nin 2017 olta tablosu Hisarönü'nü adlandırır; kamusal yürüyüş bandı dar ve yer yer özel kıyı kullanımıyla kesintilidir.",
  transport: "Rumelihisarı Mahallesi Yahya Kemal Caddesi kıyı yolundan yaya yaklaşımı planlanır. İBB yürüyüş hattı ve Bakanlık müze adresi genel yön verir; son açık kıyı geçidi, etkinlik veya çalışma bariyeri hareket günü kontrol edilir.",
  crowdNote: "Dar sahil bandında turistler, yürüyenler ve araç trafiği yoğundur; güvenli atış açıklığı bulunmazsa takım açma.",
  longIntro: [
    "İBB'nin olta rehberi Hisarönü'nü istavrit, mezgit ve sardalya için ayrı yer adıyla listeler. Sayfada yalnız istavrit gösterilir; rehberin tarihsel kaydı bugün yakalama garantisi değildir.",
    "İBB Rumeli Hisarı sahilini halka açık yürüyüş hattında oltacıların görüldüğü bölüm olarak anar. Müze arazisi, eski iskele, restoran cepleri ve tekne yanaşma alanları bu avlak tanımına girmez."
  ],
  planningNotes: [
    "6/2 ana tebliği ve 16 Eylül 2026 değişikliğinin güncel tür, boy, adet, yöntem ve yer hükümlerine uy.",
    "Limanlar Yönetmeliği uyarınca yanaşma ve bağlama yerlerinde avlanma; müze ve özel işletmeye girme.",
    "Akıntı, dalga, ıslak tahkimat veya yaya yoğunluğu güvenliği bozuyorsa avı ertele."
  ],
  seasonalNotes: ["İBB'nin istavrit kaydı yer temellidir; mevsim, akıntı ve yem balığı hareketi av olasılığını değiştirir."],
  sources: [ibbGuide, hisarWalk, hisarIdentity, hisarMap, law, amendment, portLaw],
  researchSummary: "Hisarönü tür kanıtı İBB olta rehberinden; kamusal kıyı kimliği İBB yürüyüş içeriğinden gelir. Müze, özel işletme ve iskele sahaları dışlandı.",
  fishEvidence: [{ name: "İstavrit", scientificName: null, evidenceLevel: "Hisarönü adıyla İBB kurumsal olta/tür kaydı", sourceLabel: ibbGuide.label, sourceUrl: ibbGuide.url, note: "2017 tablosunda Hisarönü için istavrit açıkça yazılıdır; tarihsel kayıt." }],
  accessEvidence: [{ label: hisarWalk.label, value: "İBB'nin Rumelihisarı sahilini yürüyüş ve oltacı hattı olarak tanımlaması", sourceUrl: hisarWalk.url, note: "Genel kamusal kıyıyı destekler; her mikro atış noktasını doğrulamaz." }]
};

const ambarliSlug = "istanbul-avcilar-ambarli-ulusal-egemenlik-parki-acik-kiyi";
export const growthAmbarliRoute20261022: EnrichedMera = {
  ...base(ambarliSlug, "Ambarlı Ulusal Egemenlik Parkı Açık Kıyısı", "Avcılar", "Ulusal Egemenlik Parkı'nın Marmara'ya bakan kamusal kıyı çevresi; küçük tekne limanı, İDO/İSPARK tesisi, yanaşma ve plaj alanları hariç", 40.9716564, 28.7143712),
  summary: "Ambarlı sahili, İBB'nin Avcılar sahilinden ayrı adlandırdığı ve ispari bildirdiği kıyıdır. Park pini karasal yaklaşım içindir; liman, iskele ve yüzme kesimi avlak değildir.",
  fish: ["İspari"],
  cautions: [
    "Küçük tekne limanı, İDO iskelesi, İSPARK/liman işletmesi, mendirek ağzı ve bağlı teknelerin yakınında avlanma.",
    "2026 Ambarlı su kalite uyarısı nedeniyle su görünümü ve güncel resmî sağlık duyurusunu kontrol et; bu sayfa yakalanan balığın tüketim güvenliğini onaylamaz.",
    "1 Nisan–15 Kasım döneminde şamandıralarla çevrili yüzme alanına olta atma; yoğun park ve yaya kullanımında atışı ertele."
  ],
  verification: "22 Ekim 2026 masa başı: İBB 2017 Avcılar–Ambarlı sahili/ispari kaydı ile 2025 Ambarlı tür listesi, Avcılar Belediyesi'nin Ambarlı Ulusal Egemenlik Parkı kaydı, park harita poligonu, 6/2 ve 2026/26 değişikliği ve Limanlar Yönetmeliği incelendi. Ağustos 2026 yüzme suyu uygunsuzluğu ayrıca risk olarak kaydedildi; av ve tüketim izni çıkarımı yapılmadı.",
  navigationNote: "40.9716564, 28.7143712 park merkezi genel karasal yaklaşımıdır; kesin olta platformu veya suya inme kapısı değildir. Parkın yalnız açık Marmara kıyısında, işletme/liman ve yüzme alanından ayrılmış güvenli bölüm kullanılabilir.",
  shoreProfile: "Ulusal Egemenlik Parkı Avcılar Belediyesi envanterinde Ambarlı Mahallesi Marmara Sahil adresindedir. Denizköşkler'deki Avcılar Sahil Parkı-2 merkezi yaklaşık 3 km doğudadır; eski Avcılar sayfasının Ambarlı'ya düşen pini düzeltilmiştir. Yakındaki küçük tekne limanı ve iskele operasyonu rota dışıdır.",
  transport: "Ambarlı Mahallesi Marmara Sahil Sokağı üzerindeki belediye parkına genel yaya yaklaşımı kullanılabilir. Pin park merkezindedir; son kıyı geçidi, geçici etkinlik, işletme bariyeri ve yüzme uyarısı hareket günü kontrol edilir.",
  crowdNote: "Park etkinlikleri, yürüyüş ve yaz yüzmesi açık kıyı payını azaltabilir; kimsenin arkasına olta savurma.",
  longIntro: [
    "İBB'nin 2017 rehberi Avcılar–Ambarlı sahilinde oltayla ispari kaydeder. 2025 İBB içeriği Ambarlı'yı Avcılar sahilinden ayrıca anarak yer ayrımını ve tür çeşitliliğini destekler. Liste bugün av garantisi vermez.",
    "Avcılar Belediyesi Ulusal Egemenlik Parkı'nı Ambarlı Marmara Sahil'de kamusal park olarak gösterir. Bu sayfa liman, küçük tekne barınağı, iskele, plaj veya özel işletme ceplerini kapsamaz. 2026 su kalitesi uyarısı tüketim açısından ayrıca dikkat gerektirir."
  ],
  planningNotes: [
    "6/2 ana tebliği ve 2026/26 değişikliğindeki tür/boy/adet/yöntem ile işaretli yüzme alanı sınırlarını uygula.",
    "Limanlar Yönetmeliği madde 21 nedeniyle yanaşma, bağlama, mendirek ağzı ve yaklaşım kanalında avlanma.",
    "Güncel su kalitesi, levha, park etkinliği ve atış güvenliği uygun değilse avı ertele; tüketim güvenliğini varsayma."
  ],
  seasonalNotes: ["İspari tarihsel rota-özel kayıttır; stok ve av başarısı dönemsel değişir. Yaz yüzme alanı kısıtı 1 Nisan–15 Kasım geçerlidir."],
  sources: [ibbGuide, ambarliFish, ambarliPark, ambarliMap, ambarliWater, law, amendment, portLaw],
  researchSummary: "İBB'nin Ambarlı'ya özel tür kaydı, belediyenin ayrı Ambarlı parkı, harita poligonu ve 2026 su kalite uyarısı birlikte değerlendirildi. Liman/yüzme bölümleri dışlandı.",
  fishEvidence: [{ name: "İspari", scientificName: null, evidenceLevel: "Avcılar–Ambarlı Sahili için İBB kurumsal olta/tür kaydı", sourceLabel: ibbGuide.label, sourceUrl: ibbGuide.url, note: "2017 İBB tablosu sahilde oltayla ispari avını açıkça bildirir; tarihsel kayıttır." }],
  accessEvidence: [{ label: ambarliPark.label, value: "Ambarlı Marmara Sahil'de belediye parkı", sourceUrl: ambarliPark.url, note: "Genel kamusal karasal kıyı yaklaşımı; tesis ve mikro av cebi ayrıca sınırlanır." }]
};

export const growthIstanbulRoutes20261022 = [growthHisaronuRoute20261022, growthAmbarliRoute20261022];
