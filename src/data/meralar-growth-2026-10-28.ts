import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-28";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu dönem, boy, miktar, yöntem, yasak bölge ve kiralık istihsal sahası hükümleri av gününde uygulanır." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana tebliğ ile birlikte incelendi." };
const guide: ResearchSource = { label: "Bursa İl Kültür ve Turizm Müdürlüğü – Bursa Keşif Rehberi", url: "https://bursa.ktb.gov.tr/Eklenti/78710%2Cdergi1-turkcepdf.pdf?0=", note: "Gököz ve Baraklı göletlerini ayrı sular olarak, genel koordinatlarıyla ve olta kullanımıyla kaydeder." };
const officialAngling: ResearchSource = { label: "Bursa Büyükşehir Belediyesi Turizm Portalı – sportif olta balıkçılığı", url: "https://www.gotobursa.com.tr/tr/mekan/sportif-olta-balikciligi-600/", note: "Keles Gököz ve Keles Baraklı göletlerini ayrı sportif olta suları olarak adlandırır." };
const gokozPark: ResearchSource = { label: "Bursa Büyükşehir Turizm Portalı – Gököz Doğa Parkı", url: "https://www.rota.bursa.com.tr/mekanlar/gokoz-natural-park-381", note: "Gököz Göleti kıyısındaki parkta sportif olta balıkçılığını ziyaretçi etkinliği olarak bildirir; işletmenin güncel alan ve ücret koşulları ayrıca sorulmalıdır." };
const gokozMeb: ResearchSource = { label: "Bursa İl Millî Eğitim Müdürlüğü – Gököz Göleti", url: "https://bursa.meb.gov.tr/meb_iys_dosyalar/2025_10/02142436_turkiyeyuzyilimaarifmodeliokuldisiogrenmeortamlariogretmenelkitabi.pdf", note: "Gölet ve Maremşah mesire kimliğini, genel erişimi ve olta kullanımını kaydeder; 24 saat açık alan kaydı tüm kıyılarda kesintisiz av izni demek değildir." };
const gokozFish: ResearchSource = { label: "İnegöl Online / İHA – Gököz işletmecisi röportajı", url: "https://www.inegolonline.com/haber/sehrin-sicagindan-bunalanlar-dogal-klima-gokoz-u-tercih-ediyor-310199", note: "2024'te gölet işletmecisi sazan ve amatör olta kullanımını gölet adıyla bildirir; güncel stok veya av garantisi değildir." };

export const growthGokozRoute20261028: EnrichedMera = {
  slug: "bursa-keles-gokoz-goleti-maremsah-kiyisi", name: "Gököz Göleti Maremşah Kıyısı", province: "Bursa", district: "Keles", region: "Marmara içsuları",
  zone: "Gököz Göleti'nin Maremşah mesire ve işletmece oltaya ayrılan ziyaretçi kıyısı; özel ve kapalı kesimler hariç",
  waterType: "Gölet", locationPrecision: "Genel bölge", lat: 39.94969, lng: 29.21318,
  summary: "Keles Gököz Göleti'nin Maremşah kıyısı resmî Bursa kaynaklarında sportif olta alanıdır; işletmeci gölette sazan bulunduğunu bildirir. Güncel işletme koşulları ve av alanı girişte doğrulanır.",
  fish: ["Sazan"], methods: ["Mevzuata uygun kıyı dip oltası", "Mevzuata uygun şamandıralı olta"], baits: ["Mısır", "Solucan"],
  camping: "Kontrol edilmeli", vehicleAccess: "Kontrol edilmeli", amenities: ["Mesire alanı", "İşletme hizmetleri"],
  cautions: ["İşletmenin oltaya ayırmadığı kıyıda veya özel parselde avlanma.", "Gölet su kotu, çamurlu şev ve diğer ziyaretçiler nedeniyle güvenli açıklığı yerinde seç.", "Bursa içsularında sazan için 15 Mart–15 Haziran kapalı dönem ve güncel boy/miktar hükümlerine uy."],
  verification: "28 Ekim 2026: Bursa resmî turizm rehberi ve İl Millî Eğitim kaydı Gököz'de olta kullanımını ve su kimliğini doğrular; 2024 işletmeci röportajı sazan türünü gölete bağlar. 6/2 ve 2026/26 incelendi. İzinli mikro kıyı ve ücret/işletme koşulları sahada ayrıca sorulur.",
  updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
  image: "/images/meralar/ulusal/bursa-keles-gokoz-goleti-maremsah-kiyisi.svg", socialImage: "/images/meralar/ulusal/bursa-keles-gokoz-goleti-maremsah-kiyisi.svg",
  navigationNote: "39.94969, 29.21318 Bursa resmî rehberindeki gölet konumudur; olta atış noktası değildir. Maremşah mesire alanına ulaşınca izinli kıyıyı görevliye sor.",
  shoreProfile: "Gököz, Keles'teki ayrı hayvan içme suyu göletidir; Baraklı Göleti ile aynı su değildir. Mesire ve özel işletme kullanımları iç içe olduğundan tüm kıyı serbest varsayılmaz.",
  transport: "Keles–Gököz yönünde Maremşah mesire ve Gököz Doğa Parkı işaretlerini izle; son yol ve işletme giriş koşullarını yolculuk günü kontrol et.",
  crowdNote: "Mesire, sandal ve park kullanımı sırasında güvenli arka atış alanı yoksa olta açma.",
  longIntro: ["Bursa İl Kültür ve Turizm Müdürlüğünün koordinatlı rehberi ve resmî ziyaretçi kaynakları Gököz Göleti'ni olta için adlandırır. Gölet işletmecisinin 2024 röportajı sazan varlığını bildirir; bu tekil saha anlatımı bugünkü av verimini göstermez.", "Maremşah mesire alanındaki genel ziyaret hakkı, özel işletmenin bütün kıyılarına sınırsız av hakkı vermez. İşaretli av alanı, güncel ücret ve tesis kuralları girişte teyit edilmelidir."],
  planningNotes: ["6/2 ve 2026/26 metnindeki Bursa içsu kurallarını uygula.", "İşletme veya levha bir kesimi kapatıyorsa farklı, izinli kıyı seç; izin yoksa avlanma."], seasonalNotes: ["2024 sazan kaydı güncel stok veya yakalama garantisi değildir."],
  sources: [guide, officialAngling, gokozPark, gokozMeb, gokozFish, law, amendment],
  researchStatus: "28 Ekim 2026 yeni C+ rota incelemesi", researchSummary: "Resmî gölet koordinatı, resmî olta/mesire erişimi, gölet işletmecisinin sazan kaydı ve güncel içsu mevzuatı çaprazlandı.", researchedAt: date,
  fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "Gölet işletmecisiyle 2024 yerinde röportaj", sourceLabel: gokozFish.label, sourceUrl: gokozFish.url, note: "Rota-özel tür anlatımı; güncel popülasyon ölçümü değildir." }],
  accessEvidence: [{ label: gokozPark.label, value: "Ziyaretçilere sportif olta", sourceUrl: gokozPark.url, note: "İşletmece izinli kesim ve güncel koşullar sorulur." }, { label: gokozMeb.label, value: "Maremşah gölet mesire alanı", sourceUrl: gokozMeb.url, note: "Genel kamusal erişim; mikro av alanı teyitli değildir." }],
  accommodationOptions: [], navigationVerified: false,
  qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: ["Bursa İl Kültür ve Turizm ile Büyükşehir rota-özel gölet/olta kaydı"], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
  confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî Gököz gölet koordinatı", note: "Keles ve ayrı su kimliği resmî rehberde yer alır." }, species: { level: "partial", label: "İşletmeci sazan kaydı", note: "2024 röportajı; güncel stok belirsiz." }, legal: { level: "partial", label: "6/2 ve 2026 değişikliği", note: "İşletme, kapalı dönem ve levha av gününde uygulanır." }, access: { level: "partial", label: "Mesire ve işletme alanı", note: "Genel ziyaret doğrulandı; izinli kıyı sahada sorulur." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Mikro kıyı ve güncel su seviyesi uzaktan doğrulanmadı." } }
};

const barakliVisit: ResearchSource = { label: "Keles Kaymakamlığı – Baraklı Göleti Mesire Alanı 2026 incelemesi", url: "https://www.keles.gov.tr/kaymakamimiz-sn-burak-bozkurt-gurses-barakli-goleti-mesire-alaninda-incelemelerde-bulundu", note: "1 Haziran 2026'da mesire alanının güncel kamusal kullanımını doğrular; tür veya su seviyesi ölçümü değildir." };
const barakliFish: ResearchSource = { label: "Turkey Outdoor – Bursa sportif olta rehberi", url: "https://turkeyoutdoor.org/bursa-outdoor-sportif-olta-balikciligi/", note: "2025 rota adını ve Baraklı Göleti için sazanı listeler; yerinde yakalama sayımı değildir." };
const barakliOther: ResearchSource = { label: "Bursamız – Baraklı Göleti rota dosyası", url: "https://bursamiz.com/tr/yerler/barakli-goleti-ve-doga-parki", note: "Baraklı Göleti için sazanı ayrıca listeler; ücret ve saat iddiaları teyit edilmediği için kullanılmaz." };
export const growthBarakliRoute20261028: EnrichedMera = {
  ...growthGokozRoute20261028,
  slug: "bursa-keles-barakli-goleti-mesire-kiyisi", name: "Baraklı Göleti Mesire Kıyısı", zone: "Baraklı Göleti'nin kamusal mesire kıyısı; sulama yapısı ve kapalı/özel alanlar hariç",
  lat: 39.97413, lng: 29.29080,
  summary: "Keles Baraklı Göleti resmî rehberde olta ve mesire suyu olarak kayıtlıdır; rota-özel kaynaklar sazanı bildirir. Su kotu, giriş ücreti ve izinli kıyı güncel olarak kontrol edilir.",
  amenities: ["Mesire alanı"],
  cautions: ["Sulama göletinin güncel su kotu ve çamurlu kıyısı av öncesi kontrol edilir.", "Mesire işletmesi veya levha kapalı kesim gösterirse avlanma; giriş ücreti/saat varsayma.", "Sazan için Bursa içsu kapalı dönemi 15 Mart–15 Haziran ve güncel boy/miktar hükümleri geçerlidir."],
  verification: "28 Ekim 2026: Bursa resmî rehberi Baraklı Göleti'nde oltayı ve koordinatı, Kaymakamlığın 1 Haziran 2026 kaydı mesire kullanımını doğrular. İki rota-özel turizm kaynağı sazanı bildirir; güncel stok saha ölçümü değildir. 6/2 ve 2026/26 incelendi.",
  image: "/images/meralar/ulusal/bursa-keles-barakli-goleti-mesire-kiyisi.svg", socialImage: "/images/meralar/ulusal/bursa-keles-barakli-goleti-mesire-kiyisi.svg",
  navigationNote: "39.97413, 29.29080 Bursa resmî keşif rehberindeki gölet koordinatıdır, atış noktası değildir. Mesire girişinde su kotunu, açık kıyıyı ve işletme levhasını kontrol et.",
  shoreProfile: "Baraklı, Gököz'den ayrı, Keles Baraklı mahallesindeki sulama göletidir. Mesire kullanımı vardır; geçmiş kuraklık haberi nedeniyle güncel su seviyesi varsayılmaz.",
  transport: "Keles Baraklı Mahallesi ve Baraklı Göleti mesire yönlendirmesini izle; son yolun, giriş koşullarının ve gölet su kotunun güncel durumunu yola çıkmadan kontrol et.",
  longIntro: ["Bursa İl Kültür ve Turizm Müdürlüğünün koordinatlı rehberi Baraklı Göleti'nde olta kullanımını yazar. Keles Kaymakamlığının 2026 mesire incelemesi alanın güncel kamusal kullanımını destekler.", "2025 rota rehberi ve ikinci yerel rota dosyası gölette sazanı bildirir. Bunlar balık sayımı veya bugünkü av garantisi değildir; su kotu ve giriş koşulları sahada kontrol edilir."],
  sources: [guide, officialAngling, barakliVisit, barakliFish, barakliOther, law, amendment],
  researchSummary: "Resmî gölet/olta ve 2026 mesire kayıtları, iki ayrı rota-özel sazan anlatımı ve güncel içsu mevzuatı değerlendirildi; ücret/saat ve stok kesinleştirilmedi.",
  fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "2025 rota-özel turizm bildirimi", sourceLabel: barakliFish.label, sourceUrl: barakliFish.url, note: "Bursamız rota dosyasıyla çaprazlandı; güncel stok garantisi değildir." }],
  accessEvidence: [{ label: guide.label, value: "Baraklı Göleti olta ve mesire", sourceUrl: guide.url, note: "Genel rota; sulama tesisi ve kapalı alanlar dışarıda." }, { label: barakliVisit.label, value: "2026 mesire alanı ziyareti", sourceUrl: barakliVisit.url, note: "Güncel giriş koşulları ayrıca kontrol edilir." }],
  qualityAssessment: { ...growthGokozRoute20261028.qualityAssessment!, independentStrongFamilies: ["Bursa İl Kültür ve Turizm Baraklı rota-özel olta kaydı", "Keles Kaymakamlığı 2026 mesire alanı kaydı"] },
  confidenceProfile: { ...growthGokozRoute20261028.confidenceProfile!, identity: { level: "strong", label: "Resmî Baraklı gölet koordinatı", note: "Resmî Bursa rehberi Gököz'den ayrı su konumunu verir." }, species: { level: "partial", label: "Rota-özel sazan anlatımları", note: "İki turizm kaynağı; güncel stok ölçümü yok." }, access: { level: "partial", label: "2026 mesire kaydı", note: "Kaymakamlık ziyaret kaydı kamusal mesireyi destekler; mikro kıyı ve ücret belirsiz." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Su kotu, tesis koşulları ve atış noktası yerinde kontrol edilir." } }
};

export const growthRoutes20261028 = [growthGokozRoute20261028, growthBarakliRoute20261028];
