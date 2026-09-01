import type { EnrichedMera, ConfidenceProfile, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

const date="2026-09-01";
const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"2024-2028 amatör avcılık çerçevesidir; il ve suya özel karar, kiralama ve saha kısıtlarıyla birlikte uygulanır."};
const src=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const fishEv=(source:ResearchSource,note:string):FishEvidence=>({name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü olasılık · rota özelinde resmî balıklandırma",sourceLabel:source.label,sourceUrl:source.url,note,recordCount:null,distanceKm:null});
const accessEv=(label:string,value:string,source:ResearchSource,note:string):AccessEvidence=>({label,value,sourceUrl:source.url,note});
const profile=(identity:string,access:string,species:string):ConfidenceProfile=>({model:"evidence-v1",overall:"C",identity:{level:"strong",label:"Rota özelinde resmî kimlik",note:identity},legal:{level:"partial",label:"Genel mevzuat ve yerel kullanım bağlamı",note:"6/2 Tebliğ ve rota özelindeki kamu kayıtları birlikte değerlendirilmiştir. Belirli kıyı cebinin sürekli açık olduğu varsayılmaz; güncel il kararı, kiralama, tabela ve saha kısıtları hareket günü kontrol edilir."},access:{level:"partial",label:"Genel kamusal erişim bağlamı",note:access},species:{level:"strong",label:"Rota özelinde sazan kanıtı",note:species},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Son park, kıyı girişi, bariyer, su kotu, özel parsel ve güncel güvenlik koşulları yerinde doğrulanmamıştır."},reviewedAt:date});

const burdurStock=src("Burdur İl Tarım ve Orman Müdürlüğü - 2026 balıklandırma faaliyeti","https://burdur.tarimorman.gov.tr/Haber/567/2026-Yili-Baliklandirma-Faaliyetimiz-Gerceklestirildi","4 Ağustos 2026 tarihli resmî kayıt Tefenni Çaylı Göleti ile Karamanlı Baraj Gölünün yavru sazanla balıklandırıldığını ve sürdürülebilir amatör balıkçılığın desteklendiğini açıkça kaydeder.");
const tefenniDsi=src("Tarım ve Orman Bakanlığı Su Dünyası - Tefenni Çaylı Göleti ve Sulaması","https://cdniys.tarimorman.gov.tr/api/File/GetGaleriFile/425/DosyaGaleri/1010/106.pdf","Bakanlık yayını Tefenni Çaylı Göleti ve Sulaması yatırımını rota adıyla kaydeder; göletin sulama yapısı kimliğini destekler.");
const cayliMap=src("Çaylı Köyü açık harita konumu","https://www.haritatr.com/cayli-koyu-haritasi-m26cd","Çaylı yerleşiminin genel koordinatını verir. Bu kaynak yalnız yaklaşık planlama bölgesi içindir; gölet kıyısı veya park noktası değildir.");
const karamanliStock=src("Burdur İl Tarım ve Orman Müdürlüğü - Karamanlı Baraj Gölü stok tespiti","https://burdur.tarimorman.gov.tr/Haber/500/Karamanli-Baraj-Golu-Stok-Tespit-Calismasi","28 Haziran 2024 tarihli resmî çalışma Karamanlı Baraj Gölünde stok tespiti yapıldığını ve avcılık programının kaynak koruma yaklaşımıyla düzenleneceğini kaydeder.");
const karamanliGov=src("Karamanlı Kaymakamlığı - Karamanlı Barajı","https://www.karamanli.gov.tr/baraj","Barajın Değirmen Deresi üzerinde sulama amacıyla kurulduğunu, göl alanı ve kapasitesini resmî ilçe kaynağıyla doğrular.");
const karamanliMap=src("OpenStreetMap tabanlı Karamanlı Barajı konumu","https://mapcarta.com/12964696","Baraj yapısının genel koordinatını OpenStreetMap verisiyle eşleştirir; yayımlanan pin kıyı girişi değildir.");
const korkutStock=src("Muş İl Tarım ve Orman Müdürlüğü - Korkut Göleti balıklandırması","https://mus.tarimorman.gov.tr/Haber/228/Mustaki-Goletler-Baliklandirildi","Korkut Göletine 10 bin yavru sazan bırakıldığını rota adıyla kaydeder; aynı resmî haberde alanın yerel piknik ve balıkçılık kullanımı da aktarılır.");
const korkutGov=src("Korkut Kaymakamlığı - ilçe coğrafyası ve göletler","https://www.korkut.gov.tr/korkut-ilcesi","İlçe merkezi üzerindeki Düzlük Deresi üzerinde Korkut Sulama Göletini resmî olarak tanımlar.");
const korkutPublic=src("Korkut Kaymakamlığı / Gençlik Haftası etkinliği hakkında AA saha kaydı","https://www.yenisafak.com/gundem/musta-turk-bayraklariyla-genclik-yuruyusu-duzenlendi-4708814","19 Mayıs 2025 etkinliğinde Kaymakamlık ve Gençlik ve Spor İlçe Müdürlüğü yürüyüşünün Korkut Göletinde piknik ile tamamlandığını aktarır; yalnız genel kamusal kullanım bağlamıdır.");
const korkutMap=src("OpenStreetMap tabanlı Korkut genel konumu","https://mapcarta.com/es/29607402","Korkut ilçe merkezini ve yakınındaki Korkut Göleti su varlığını eşleştirir. Pin hassas kıyı girişi değil genel planlama bölgesidir.");

export const yeniMeralar20260901:EnrichedMera[]=[
  {
    slug:"burdur-tefenni-cayli-goleti",
    name:"Çaylı Göleti",
    district:"Tefenni",
    province:"Burdur",
    zone:"Çaylı genel bölge",
    waterType:"Gölet",
    region:"Akdeniz",
    summary:"Tefenni Çaylı Göleti, 2026 resmî sazan balıklandırması ve Bakanlık su yapısı kaydıyla doğrulanan; mikro kıyı erişimi kesinleştirilmeden genel bölge hassasiyetinde yayımlanan Güven C içsu rotasıdır.",
    fish:["Sazan"],
    methods:["Şamandıralı olta","Dip oltası"],
    baits:["Mısır","Hamur","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Kontrol edilmeli",
    amenities:["Tefenni ilçe merkezindeki market ve temel hizmetler","Çaylı yerleşimi genel yaklaşım referansı"],
    cautions:["Gölet sulama yapısıdır; tesis ve savak güvenlik alanlarına girilmez.","Pin Çaylı genel bölgesini gösterir; son park ve kıyı girişi doğrulanmış değildir.","Sazan balıklandırması av garantisi değildir; boy, dönem ve yöntem kuralları güncel 6/2 Tebliğden kontrol edilir."],
    lat:37.207516,
    lng:29.814226,
    locationPrecision:"Genel bölge",
    verification:"Resmî 2026 balıklandırma kaydı + Bakanlık su yapısı kaydı + genel yerleşim konumu",
    updatedAt:date,
    publishedAt:date,
    confidence:"C",
    image:"/images/meralar/ulusal/burdur-tefenni-cayli-goleti.svg",
    socialImage:"/images/meralar/ulusal/burdur-tefenni-cayli-goleti.svg",
    navigationNote:"Navigasyon Çaylı köyü ve göletin genel çevresini planlama başlangıcı olarak gösterir. Son kıyı yolu, park, mülkiyet ve su yapısı güvenlik sınırı yerinde kontrol edilmelidir.",
    shoreProfile:"Küçük sulama göletlerinde kıyı eğimi ve su kotu mevsime göre hızlı değişebilir. Dolgu gövde, savak ve işletme tesisleri av noktası kabul edilmez; yalnız güvenli ve kamusal olduğu sahada görülen kıyı kesimleri değerlendirilmelidir.",
    transport:"Tefenni yönünden Çaylı yerleşimi genel yaklaşım referansıdır. Yayımlanan koordinat köy/genel bölge planlaması içindir; gölete uzanan son yolun araç uygunluğu, özel parsel geçişi ve park cebi açık kaynakta kesinleşmediği için hareket günü harita ve tabela ile yeniden kontrol edilmelidir.",
    crowdNote:"Küçük kırsal göletlerde uygun kıyı alanı sınırlı olabilir. Tarımsal kullanım, su seviyesi ve yerel yoğunluk nedeniyle başka kıyıya geçmek gerekebilir.",
    longIntro:["Çaylı Göleti, Burdur'un Tefenni ilçesinde 2026 yılında İl Tarım ve Orman Müdürlüğünün resmî balıklandırma programında rota adıyla yer alan bir sulama göletidir.","Güven C seviyesi sazan bulunma olasılığı ile su varlığı kimliğinin güçlü masa başı kanıta sahip olduğunu gösterir; belirli bir kıyı cebinin kamusal olduğu, aracın su kenarına kadar gidebildiği veya avın her tarihte serbest olduğu anlamına gelmez."],
    planningNotes:["Önce güncel 6/2 Tebliğ ve varsa Burdur İl Tarım duyuruları kontrol edilmelidir.","Baraj/gölet işletme yapıları, savak ve teknik tesislerden güvenli mesafe korunmalıdır.","Konaklama için Tefenni ilçe merkezi kullanılabilir; gölet çevresinde gecelik kalış veya kamp izni varsayılmamalıdır."],
    seasonalNotes:["2026'da bırakılan sazan yavruları tür olasılığı kanıtıdır; İl Müdürlüğü bu balıkların 1-2 yıl içinde asgari av boyuna ulaşabileceğini belirtir.","Su kotu ve kıyı çamuru sulama sezonunda değişebilir; ilk ziyaret gündüz ve kısa keşif şeklinde planlanmalıdır."],
    sources:[burdurStock,tefenniDsi,cayliMap,teblig],
    researchedAt:date,
    researchStatus:"Rota özelinde resmî balıklandırma ve su yapısı kimliği doğrulandı; mikro erişim genel bölge seviyesinde tutuldu.",
    researchSummary:"2026 sazan balıklandırması, Bakanlık yatırım kaydı ve Çaylı genel konumu çaprazlandı. Özel kıyı, park veya tesis alanı yayımlanmadı.",
    fishEvidence:[fishEv(burdurStock,"İl Tarım 2026 balıklandırmasında Tefenni Çaylı Göletini sazan bırakılan su olarak açıkça listeler.")],
    accommodationOptions:[],
    accessEvidence:[accessEv("Genel yaklaşım","Çaylı yerleşimi",cayliMap,"Yerleşim koordinatı yalnız rota planlama referansıdır; gölet kıyısına erişim kanıtı değildir."),accessEv("Su yapısı kimliği","Tefenni Çaylı Göleti ve Sulaması",tefenniDsi,"Bakanlık yayını göletin sulama tesisi kimliğini rota adıyla doğrular.")],
    navigationVerified:false,
    confidenceProfile:profile("İl Tarımın 2026 kaydı ile Bakanlık su yapısı kaydı aynı Çaylı Göletini eşleştiriyor.","Çaylı yerleşimine genel yaklaşım açık harita ile destekli; son kıyı girişi ve park doğrulanmış değil.","2026 resmî balıklandırması sazan varlığı için güçlü olasılık kanıtıdır; güncel yakalama garantisi değildir.")
  },
  {
    slug:"burdur-karamanli-karamanli-baraj-golu",
    name:"Karamanlı Baraj Gölü",
    district:"Karamanlı",
    province:"Burdur",
    zone:"Karamanlı genel kıyı",
    waterType:"Baraj",
    region:"Akdeniz",
    summary:"Karamanlı Baraj Gölü, Kaymakamlık su yapısı kimliği, 2024 resmî stok tespiti ve 2026 sazan balıklandırmasıyla doğrulanan; kiralama ve mikro kıyı durumu ayrıca kontrol edilen Güven C rotasıdır.",
    fish:["Sazan"],
    methods:["Dip oltası","Şamandıralı olta"],
    baits:["Mısır","Hamur","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Karamanlı ilçe merkezi yakın hizmetleri","İlçe merkezinde market ve konaklama seçenekleri"],
    cautions:["2024 stok çalışması istihsal hakkı/kiralama süreci bağlamındadır; ticari saha sınırı amatör kullanım izni olarak yorumlanmaz.","Baraj gövdesi, savak ve teknik işletme alanlarında av planlanmaz.","Güncel il kararı, tabela, av yasağı ve kiralama sınırı hareket günü doğrulanmalıdır."],
    lat:37.39521,
    lng:29.83686,
    locationPrecision:"Genel bölge",
    verification:"Kaymakamlık baraj kimliği + İl Tarım stok tespiti + 2026 sazan balıklandırması + açık harita eşleşmesi",
    updatedAt:date,
    publishedAt:date,
    confidence:"C",
    image:"/images/meralar/ulusal/burdur-karamanli-karamanli-baraj-golu.svg",
    socialImage:"/images/meralar/ulusal/burdur-karamanli-karamanli-baraj-golu.svg",
    navigationNote:"Pin baraj yapısı ve gölün genel bölgesini gösterir; kamusal av kıyısı veya son araç parkı değildir. Kiralama/istihsal sınırları ile saha tabelaları yerinde kontrol edilmelidir.",
    shoreProfile:"Karamanlı Baraj Gölü çevresinde tarımsal kullanım ve su işletmesi önceliklidir. Kıyı çizgisi su seviyesine göre geri çekilebilir; baraj gövdesi, savak, tesis yolu ve işletme alanları yerine yalnız kamusal ve güvenli olduğu görülen doğal kıyı kesimleri değerlendirilmelidir.",
    transport:"Karamanlı ilçe merkezi barajın birkaç kilometre güneyindeki ana planlama merkezidir. Açık haritadaki pin baraj yapısına ilişkin genel konum verir; gövde üstüne veya teknik tesise yönlendirme olarak kullanılmamalı, son kıyı yaklaşımı güncel tabela, yol durumu, özel mülkiyet ve istihsal sahası sınırlarıyla doğrulanmalıdır.",
    crowdNote:"İlçe merkezine yakınlık hafta sonu rekreasyon yoğunluğunu artırabilir. Balıkçılık ve diğer kıyı kullanımları çakışıyorsa güvenli mesafe bırakılmalıdır.",
    longIntro:["Karamanlı Baraj Gölü, Karamanlı Kaymakamlığının resmî sayfasında Değirmen Deresi üzerindeki sulama barajı olarak tanımlanır; İl Tarım 2024'te gölde stok tespiti yapmış ve 2026'da gölü yeniden sazanla balıklandırmıştır.","Bu kayıt Güven C'dir. Resmî stok ve balıklandırma verileri tür ve su varlığı için güçlü kanıt sağlasa da ticari istihsal/kiralama süreçleri belirli kıyıda amatör av izni yerine geçmez."],
    planningNotes:["Hareket günü 6/2 Tebliğ, Burdur İl Tarım duyuruları ve varsa istihsal/kiralama sınırları birlikte kontrol edilmelidir.","Konaklama ve temel ihtiyaçlar için Karamanlı ilçe merkezi kullanılabilir; baraj kıyısında kamp hakkı varsayılmamalıdır.","Teknik tesis çevresi ile suya ani eğimli kıyılardan uzak durulmalıdır."],
    seasonalNotes:["4 Ağustos 2026 resmî kaydı Karamanlı Baraj Gölüne sazan yavrusu bırakıldığını doğrular; bu kayıt güncel tür olasılığını güçlendirir.","Sulama çekimi su kotunu ve erişilebilir kıyı genişliğini değiştirebilir; çamurlu yeni kıyı bandına araçla girilmemelidir."],
    sources:[karamanliGov,karamanliStock,burdurStock,karamanliMap,teblig],
    researchedAt:date,
    researchStatus:"Resmî su kimliği, stok yönetimi ve 2026 balıklandırması rota özelinde doğrulandı; amatör mikro kıyı izni kesinleştirilmedi.",
    researchSummary:"Kaymakamlık, İl Tarım stok çalışması, güncel balıklandırma ve açık harita birlikte değerlendirildi. İstihsal/kiralama kaydı amatör av izni sayılmadı.",
    fishEvidence:[fishEv(burdurStock,"4 Ağustos 2026 resmî balıklandırma kaydı Karamanlı Baraj Gölünü sazan bırakılan su olarak açıkça listeler.")],
    accommodationOptions:[],
    accessEvidence:[accessEv("İlçe-baraj ilişkisi","Karamanlı merkezinin yaklaşık 3 km kuzeyi",karamanliGov,"Kaymakamlık coğrafya ve baraj sayfaları barajın ilçe bağlamını doğrular; mikro kıyı girişi değildir."),accessEv("Genel su konumu","OSM baraj yapısı eşleşmesi",karamanliMap,"Koordinat baraj yapısının genel konumudur; kamusal av cebi veya park noktası değildir.")],
    navigationVerified:false,
    confidenceProfile:profile("Kaymakamlık su yapısı kimliği ile İl Tarım stok/balıklandırma kayıtları aynı Karamanlı Baraj Gölünü doğruluyor.","İlçe yakınlığı ve baraj yapısı konumu doğrulanmış olsa da kıyı girişinin kamusallığı ve kiralama sınırları saha teyidi gerektiriyor.","2026 resmî sazan balıklandırması güçlü tür olasılığıdır; av garantisi veya sürekli izin değildir.")
  },
  {
    slug:"mus-korkut-korkut-sulama-goleti",
    name:"Korkut Sulama Göleti",
    district:"Korkut",
    province:"Muş",
    zone:"Korkut genel bölge",
    waterType:"Gölet",
    region:"Doğu Anadolu",
    summary:"Korkut Sulama Göleti, Kaymakamlığın su varlığı kaydı, İl Tarımın rota özelindeki sazan balıklandırması ve 2025 kamusal etkinlik kullanımıyla desteklenen Güven C kırsal içsu rotasıdır.",
    fish:["Sazan"],
    methods:["Şamandıralı olta","Dip oltası"],
    baits:["Mısır","Hamur","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Korkut ilçe merkezi temel hizmetleri","Yakın yerleşimlerden gündüz planlama imkânı"],
    cautions:["Gölet sulama yapısıdır; gövde, savak ve teknik alanlara yaklaşılmaz.","Kamu etkinliğinin gölete ulaşmış olması her kıyı parçasının kamusal olduğu anlamına gelmez.","Geçmiş ve 2023 balıklandırma kayıtları tür olasılığıdır; güncel boy, dönem ve av kuralları ayrıca kontrol edilir."],
    lat:38.7443,
    lng:41.8057,
    locationPrecision:"Yaklaşık",
    verification:"Kaymakamlık gölet kimliği + İl Tarım rota özelinde sazan balıklandırması + 2025 kamusal etkinlik erişim bağlamı",
    updatedAt:date,
    publishedAt:date,
    confidence:"C",
    image:"/images/meralar/ulusal/mus-korkut-korkut-sulama-goleti.svg",
    socialImage:"/images/meralar/ulusal/mus-korkut-korkut-sulama-goleti.svg",
    navigationNote:"Koordinat Korkut merkezinin kuzeyindeki gölet için yaklaşık planlama bölgesidir; hassas kıyı girişi değildir. İlk ziyaret gündüz yapılmalı ve son yaklaşım tabela/yerel yol durumu ile doğrulanmalıdır.",
    shoreProfile:"Korkut Sulama Göleti kırsal ve tarımsal kullanım çevresindedir. Su seviyesinin çekildiği dönemlerde yumuşak zemin oluşabilir; sulama tesisi, gövde ve savak çevresi yerine yalnız güvenli, açık ve kamusal olduğu sahada görülen kıyı kesimleri kullanılmalıdır.",
    transport:"Korkut ilçe merkezi genel yaklaşım merkezidir. Kaymakamlık göleti ilçe merkezi üzerindeki Düzlük Deresi üzerinde tanımlar; açık harita verileri göleti merkez yakınında gösterir. Yayımlanan pin yaklaşık su bölgesidir, son park veya kıyı girişi değildir; köy/tarla yollarının durumu ve özel parsel sınırları yerinde kontrol edilmelidir.",
    crowdNote:"Resmî 2015 kaydı alanı yerel piknik yeri olarak aktarır ve 2025 gençlik etkinliği gölette tamamlanmıştır. Güzel havalarda ortak kullanım artabileceği için olta atış güvenliği özellikle gözetilmelidir.",
    longIntro:["Korkut Sulama Göleti, Korkut Kaymakamlığının ilçe coğrafyası kaydında Düzlük Deresi üzerindeki sulama göleti olarak yer alır. Muş İl Tarım ve Orman Müdürlüğü göleti rota adıyla sazan balıklandırma çalışmalarına dahil etmiştir.","2025'te Kaymakamlık ile Gençlik ve Spor İlçe Müdürlüğü programındaki yürüyüşün gölette piknik ile tamamlanması genel kamusal kullanım bağlamını destekler. Buna rağmen son kıyı girişi, tarla yolu veya park noktası kesin kamusal erişim olarak sunulmaz."],
    planningNotes:["Muş için geçerli dönemsel amatör av yasağı ve 6/2 Tebliğ hareket günü kontrol edilmelidir.","Gölet küçük olduğundan hassas mikro-konumlar veya özel parseller hedef gösterilmez; yaklaşık su bölgesi üzerinden planlama yapılır.","Konaklama için Korkut veya Muş merkez seçenekleri değerlendirilmelidir; kıyıda gecelik kalış izni varsayılmamalıdır."],
    seasonalNotes:["2015'te 10 bin sazan yavrusu bırakılmış, 2023'te Korkut Sulama Göleti yeniden il genelindeki milyonlarca sazan yavrusunun bırakıldığı sular arasında sayılmıştır; geçmiş stok tür olasılığını destekler.","İlkbahar erimesi ve sulama sezonu yol/zemin koşullarını değiştirebilir; çamurlu kıyı bandına araçla girilmemelidir."],
    sources:[korkutGov,korkutStock,korkutPublic,korkutMap,teblig],
    researchedAt:date,
    researchStatus:"Rota özelinde resmî gölet kimliği ve sazan balıklandırması doğrulandı; kamusal kullanım destekli ancak mikro erişim yaklaşık tutuldu.",
    researchSummary:"Kaymakamlık su kimliği, İl Tarım balıklandırması ve 2025 kamu etkinliği erişim bağlamı çaprazlandı. Hassas kıyı veya özel parsel konumu yayımlanmadı.",
    fishEvidence:[fishEv(korkutStock,"Muş İl Tarım Korkut Göletine 10 bin yavru sazan bırakıldığını rota özelinde kaydeder; sonraki il balıklandırmaları da Korkut Sulama Göletini kapsamıştır.")],
    accommodationOptions:[],
    accessEvidence:[accessEv("Resmî su kimliği","Korkut merkez üstünde Düzlük Deresi sulama göleti",korkutGov,"Kaymakamlık göleti ilçe coğrafyasında açıkça tanımlar."),accessEv("Kamusal kullanım bağlamı","2025 Gençlik Haftası yürüyüşünün gölette tamamlanması",korkutPublic,"Kamu programı gölete genel erişimi destekler; her kıyı cebinin kamusal olduğunu kanıtlamaz."),accessEv("Yaklaşık konum","Korkut merkezi ve yakın Korkut Göleti",korkutMap,"Açık harita yalnız genel planlama için kullanılır.")],
    navigationVerified:false,
    confidenceProfile:profile("Kaymakamlık gölet kimliği ve İl Tarım rota özelindeki balıklandırması aynı Korkut Sulama Göletini doğruluyor.","Kamu etkinliği genel erişimi destekliyor; son yol, park ve mülkiyet saha teyitli değil.","Rota özelindeki resmî sazan balıklandırması güçlü tür olasılığıdır; av başarısı veya güncel izin garantisi değildir.")
  }
];
