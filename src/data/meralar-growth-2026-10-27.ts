import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-27";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – yürürlükteki 6/2 amatör avcılık tebliği",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "İçsularda tür, boy, miktar, takım, kapalı dönem, Ek-4/Ek-5 ve kiralık istihsal sahası hükümleri; Bursa için sazan/yayın dönemi 15 Mart–15 Haziran."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 6/2 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "2026/26 değişikliği incelendi; Bursa'nın sazangiller/yayın dönemi değişen il grubunda değildir."
};
const bursaAngling: ResearchSource = {
  label: "Bursa Büyükşehir Belediyesi Turizm Portalı – sportif olta balıkçılığı",
  url: "https://www.gotobursa.com.tr/tr/mekan/sportif-olta-balikciligi-600/",
  note: "Kestel Gölbaşı değil, Dağyenice Göleti'ni Bursa'da sportif olta kullanılabilen içsular arasında adlandırır; diğer rota için tür kanıtı değildir."
};
const guide: ResearchSource = {
  label: "Bursa İl Kültür ve Turizm Müdürlüğü – Bursa Keşif Rehberi",
  url: "https://bursa.ktb.gov.tr/Eklenti/78710%2Cdergi1-turkcepdf.pdf?0=",
  note: "Gölbaşı Göleti için 40.21844, 29.32645; Dağyenice Göleti için 40.12997, 28.94027 su kimliği koordinatlarını verir. Bunlar av/park mikro pini değildir."
};

const golbasiSlug = "bursa-kestel-golbasi-goleti-kamusal-kiyi";
const golbasiTourism: ResearchSource = {
  label: "Bursa Büyükşehir Belediyesi Turizm Portalı – Gölbaşı Piknik Alanı",
  url: "https://www.bursa.com.tr/tr/mekan/golbasi-piknik-alani-75/",
  note: "Kestel Gölbaşı Göleti kıyısındaki kamusal piknik alanını ve kıyıda balık tutulabildiğini rota adıyla bildirir."
};
const golbasiPublic: ResearchSource = {
  label: "Bursa Büyükşehir Belediyesi – Gölbaşı'nın halka açılması",
  url: "https://www.bursa.bel.tr/haber/golbasi-cazibe-merkezi-olacak-1776",
  note: "Eski yetiştiricilik kiralaması sonrasında göletin halka açılması kararını belgeler; güncel münferit kıyı işletmesi izni anlamına gelmez."
};
const golbasiCatch: ResearchSource = {
  label: "Bursa TV – 31 Ağustos 2026 Gölbaşı Göleti yayın yakalaması",
  url: "https://www.bursatv.com.tr/bursada-turna-beklerken-oltaya-13-kiloluk-dev-yayin-baligi-takildi/amp",
  note: "Kestel Gölbaşı Göleti'nde kıyıdan oltayla yakalanan 127 cm yayın balığını yer ve tür adıyla kaydeder; tek yakalama bolluk garantisi değildir."
};
const golbasiWater: ResearchSource = {
  label: "Yenişehir Yörem / İHA – Şubat 2026 Gölbaşı Göleti su seviyesi",
  url: "https://www.yenisehiryorem.com/bursa/cole-donen-golbasi-goleti-yeniden-hayat-buldu-208443",
  note: "2025 kuraklığından sonra 2026 başında suyun geri döndüğünü bildirir; güncel su kotu her ziyaret öncesi kontrol edilmelidir."
};

export const growthGolbasiRoute20261027: EnrichedMera = {
  slug: golbasiSlug,
  name: "Kestel Gölbaşı Göleti Kamusal Kıyısı",
  province: "Bursa", district: "Kestel", region: "Marmara içsuları",
  zone: "Gölbaşı Göleti'nin kamusal piknik kıyısı; baraj gövdesi, sulama tesisi ve kapalı/özel kesimler hariç",
  waterType: "Gölet", locationPrecision: "Genel bölge", lat: 40.21844, lng: 29.32645,
  summary: "Bursa'nın Kestel ilçesindeki Gölbaşı Göleti, belediye turizm kaynağında kıyıdan olta yapılabilen kamusal piknik alanı olarak geçer. Ağustos 2026'da yayın yakalanmıştır; sulama suyu seviyesi ve kıyı güvenliği değişebilir.",
  fish: ["Yayın"], methods: ["İçsu kurallarına uygun kıyı oltası"], baits: ["Mevzuata uygun yapay yem"],
  camping: "Kontrol edilmeli", vehicleAccess: "Kontrol edilmeli", amenities: ["Kamusal piknik alanı"],
  cautions: [
    "Sulama nedeniyle su kotu hızla düşebilir; çamurlu yeni kıyı bandına araçla veya yürüyerek girme.",
    "Baraj gövdesi, savak, su alma yapısı, işletme yolu ve levhayla kapatılmış kesimler av yeri değildir.",
    "Piknikçiler yakınken geri savurma yapma; yayın için Bursa'daki kapalı döneme, boy ve miktar sınırlarına uy."
  ],
  verification: "27 Ekim 2026: Bursa Büyükşehir turizm kaydı kamusal Gölbaşı kıyısında balık tutulabildiğini bildiriyor; 31 Ağustos 2026 yayın yakalama haberi türü aynı suya bağlıyor. İl Kültür ve Turizm Müdürlüğünün gölet koordinatı, 6/2 ana metin ve 2026/26 değişikliği incelendi. 2025 kuraklığı ve 2026 yeniden dolma bilgisi nedeniyle su kotu av günü kontrol edilir.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: `/images/meralar/ulusal/${golbasiSlug}.svg`, socialImage: `/images/meralar/ulusal/${golbasiSlug}.svg`,
  navigationNote: "40.21844, 29.32645 resmî Bursa rehberindeki genel gölet referansıdır. Kamusal piknik alanının açık girişini ve sulama yapılarından uzak güvenli kuru kıyıyı yerinde seç.",
  shoreProfile: "Gölbaşı, Kestel'deki ayrı sulama göletidir; sitedeki Babasultan ve Boğazköy baraj kayıtlarıyla aynı su değildir. 2025'te kuruma, 2026'da yeniden dolma yaşandığından sabit kıyı hattı varsayılmaz.",
  transport: "Kestel Gölbaşı kamusal piknik alanı yönlendirmesini izle; son yol, bariyer ve su kotunu güncel olarak kontrol et.",
  crowdNote: "Piknik ve yürüyüş yoğunluğu güvenli olta atış koridorunu daraltabilir.",
  longIntro: [
    "Bursa Büyükşehir Belediyesi'nin turizm portalı Gölbaşı Göleti kıyısını olta ve piknik için adlandırıyor. 31 Ağustos 2026 tarihli yerel haber gölette kıyı oltasıyla yayın yakalandığını bildiriyor; turna hedefiyle yapılan av, turnanın burada yakalandığına kanıt sayılmadı.",
    "Bu dosya suyun ve kamusal piknik kıyısının genel planlama kaydıdır. Geçmiş kuraklık, sulama işletmesi, geçici levha ve güvenli kıyı genişliği av gününde değerlendirilir."
  ],
  planningNotes: ["6/2 ve 2026/26 metnindeki içsu hükümlerini uygula; Bursa'da yayın kapalı dönemi 15 Mart–15 Haziran'dır.", "Kiralama/işletme levhası veya geçici kapanma görülürse belirlenmiş amatör alan dışında olta açma."],
  seasonalNotes: ["Ağustos 2026 yayın kaydı tekil yakalamadır, bugünkü bolluk veya göletin doluluk garantisi değildir."],
  sources: [golbasiTourism, golbasiPublic, golbasiCatch, golbasiWater, guide, law, amendment],
  researchStatus: "27 Ekim 2026 yeni C+ rota incelemesi; ilk yayında index,follow",
  researchSummary: "Belediyenin rota-özel olta/piknik kaydı, 2026 tür yakalama haberi, resmî koordinat ve güncel 6/2 hükümleri çaprazlandı. Su kotu ve mikro kıyı izni saha değişkenidir.", researchedAt: date,
  fishEvidence: [{ name: "Yayın", scientificName: "Silurus glanis", evidenceLevel: "31 Ağustos 2026 Gölbaşı Göleti kıyı yakalama haberi", sourceLabel: golbasiCatch.label, sourceUrl: golbasiCatch.url, note: "Tekil doğrulanmış haber; düzenli yakalama iddiası değildir." }],
  accessEvidence: [{ label: golbasiTourism.label, value: "Gölbaşı piknik kıyısında balık tutulabilir", sourceUrl: golbasiTourism.url, note: "Kamusal genel kullanım; sulama tesisi ve işaretli kapalı alanlar hariç." }, { label: golbasiPublic.label, value: "Göletin kamusal kullanıma açılması", sourceUrl: golbasiPublic.url, note: "Tarihsel mülkiyet/erişim kararı; av günü levha kontrolü gerekir." }],
  accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["Bursa Büyükşehir Gölbaşı rota-özel olta ve kamusal kıyı kaydı"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
    identity: { level: "strong", label: "Kestel Gölbaşı su kimliği", note: "Bursa İl Kültür ve Turizm rehberi koordinatı ile belediye turizm sayfası eşleşir." },
    species: { level: "strong", label: "2026 yayın yakalaması", note: "Yerel haberde aynı gölette yakalanan yayın; popülasyon tahmini değildir." },
    legal: { level: "partial", label: "6/2 ve 2026 değişikliği", note: "Ek-4/5, 15 Mart–15 Haziran kapalı dönem, sulama ve olası işletme levhaları kontrol edilir." },
    access: { level: "partial", label: "Kamusal piknik kıyısı", note: "Belediye kaydı genel erişimi destekler; su kenarındaki mikro atış noktası saha teyitli değildir." },
    field: { level: "unverified", label: "Saha teyidi yok", note: "Su seviyesi, bariyer ve kuru kıyı av günü yeniden incelenir." }
  }
};

const dagyeniceSlug = "bursa-nilufer-dagyenice-goleti-kamusal-kiyi";
const dagyeniceTourism: ResearchSource = {
  label: "Bursa Büyükşehir Belediyesi Turizm Portalı – Dağyenice Göleti",
  url: "https://rota.bursa.com.tr/mekanlar/dagyenice-goleti-70",
  note: "Nilüfer Dağyenice Göleti'nin yıl boyu ziyaret edilebildiğini ve göl kıyısında balık tutulabildiğini açıkça bildirir."
};
const dagyeniceCatch: ResearchSource = {
  label: "Bursa'da Bugün – 15 Temmuz 2025 Dağyenice yayın yakalaması",
  url: "https://m.bursadabugun.com/haber/bursa-da-dagyenice-de-35-kg-agirliginda-yayin-baligi-yakalandi-1826380.html",
  note: "Nilüfer Dağyenice Göleti'nde amatör balıkçıların yayın balığı yakaladığını gölet ve tür adıyla kaydeder; tekil olaydır."
};

export const growthDagyeniceRoute20261027: EnrichedMera = {
  ...growthGolbasiRoute20261027,
  slug: dagyeniceSlug,
  name: "Dağyenice Göleti Kamusal Kıyısı",
  district: "Nilüfer",
  zone: "Dağyenice Göleti'nin kamusal ziyaretçi kıyısı; işletme, özel parsel ve su yapısı hariç",
  lat: 40.12997, lng: 28.94027,
  summary: "Nilüfer Dağyenice Göleti, Bursa turizm portalında kıyıdan balık tutulabilen yıl boyu açık ziyaret alanıdır. Gölette yayın yakalama kaydı vardır; piknik yoğunluğu ve su kenarı erişimi güncel olarak kontrol edilir.",
  amenities: ["Kamusal yürüyüş ve piknik alanı"],
  cautions: ["Göl kıyısındaki piknik ve yürüyüş kullanıcılarına doğru olta savurma; güvenli açıklık yoksa avı ertele.", "Islak/çamurlu şeve, suya ve kapalı işletme kesimine girme.", "Bursa'da yayın için 15 Mart–15 Haziran kapalı dönem ve güncel boy/miktar kurallarını uygula."],
  verification: "27 Ekim 2026: Bursa Büyükşehir turizm portalı Dağyenice Göleti'ni yıl boyu açık, kıyıda balık tutulabilen alan olarak tanımlıyor. 15 Temmuz 2025 yerel haber gölette yayın balığı yakalandığını bildiriyor. İl Kültür ve Turizm koordinatı, 6/2 ve 2026/26 değişikliği incelendi. Mikro kıyı ve geçici bariyer av gününde kontrol edilir.",
  image: `/images/meralar/ulusal/${dagyeniceSlug}.svg`, socialImage: `/images/meralar/ulusal/${dagyeniceSlug}.svg`,
  navigationNote: "40.12997, 28.94027 Bursa İl Kültür ve Turizm rehberindeki gölet koordinatıdır; kesin atış yeri veya park girişi değildir. Misi–Dağyenice kamusal yönlendirmesini izle.",
  shoreProfile: "Nilüfer Dağyenice Göleti, Kestel Gölbaşı'ndan yaklaşık 40 km ayrı bir içsudur. Gölet kıyısında rekreasyon, yürüyüş ve balıkçılık birlikte kullanılır; gövde ve işletme alanına girilmez.",
  transport: "Misi ve Dağyenice mahalleleri üzerinden turizm portalındaki genel yaklaşımı kullan; son yolun ve yürüyüş girişinin güncel durumunu kontrol et.",
  crowdNote: "Hafta sonu piknik yoğunluğunda güvenli olta atış alanı kalmayabilir.",
  longIntro: ["Bursa Büyükşehir Belediyesi'nin turizm portalı Dağyenice Göleti'ni kıyıda olta tutulabilen kamusal ziyaret alanı olarak tanımlar. 2025 tarihli yerel yayın yakalama haberi türü gölet adına bağlar.", "Resmî koordinat gölet kimliğini gösterir; av noktası izni değildir. Yaya ve piknik kullanımı, olası işletme sınırı ve geçici levhalar av günü önceliklidir."],
  planningNotes: ["6/2 ve 2026/26 içsu hükümleri ile Bursa yayın kapalı dönemini uygula.", "Genel ziyaretçi kıyısı dışında özel veya kapalı alana geçme; güncel levha varsa uy."],
  seasonalNotes: ["Yayın kaydı 2025'teki tekil avdır; mevsimsel av başarısını garanti etmez."],
  sources: [dagyeniceTourism, bursaAngling, dagyeniceCatch, guide, law, amendment],
  researchSummary: "Belediye turizm portalı rota-özel kıyı oltası ve kamusal ziyareti, 2025 yakalama haberi yayın türünü, İl Kültür ve Turizm rehberi gölet konumunu doğrular.",
  fishEvidence: [{ name: "Yayın", scientificName: "Silurus glanis", evidenceLevel: "15 Temmuz 2025 Dağyenice Göleti yakalama haberi", sourceLabel: dagyeniceCatch.label, sourceUrl: dagyeniceCatch.url, note: "Tekil haber; güncel bolluk anlamına gelmez." }],
  accessEvidence: [{ label: dagyeniceTourism.label, value: "Yıl boyu ziyaret ve göl kıyısında balık tutma", sourceUrl: dagyeniceTourism.url, note: "Kamusal genel kullanım; işletme ve mikro kıyı kısıtları ayrıca kontrol edilir." }],
  qualityAssessment: { ...growthGolbasiRoute20261027.qualityAssessment!, independentStrongFamilies: ["Bursa Büyükşehir Dağyenice rota-özel kıyı oltası ve erişim kaydı"] },
  confidenceProfile: { ...growthGolbasiRoute20261027.confidenceProfile!,
    identity: { level: "strong", label: "Nilüfer Dağyenice su kimliği", note: "Bursa resmî keşif rehberi ve turizm portalı eşleşir." },
    species: { level: "strong", label: "2025 yayın yakalaması", note: "Yerel haber aynı gölette yayını kaydeder; sürekli bolluk iddiası değildir." },
    access: { level: "partial", label: "Kamusal ziyaretçi kıyısı", note: "Belediye portalı kıyıda olta ve yıl boyu ziyaret bilgisini verir; mikro atış yeri saha teyitli değildir." },
    field: { level: "unverified", label: "Saha teyidi yok", note: "Piknik yoğunluğu, işletme sınırı ve geçici levha av günü kontrol edilir." }
  }
};

export const growthRoutes20261027 = [growthGolbasiRoute20261027, growthDagyeniceRoute20261027];
