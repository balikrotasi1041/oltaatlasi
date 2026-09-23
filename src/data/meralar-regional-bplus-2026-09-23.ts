import type { EnrichedMera, ConfidenceProfile, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

const date="2026-09-23";
const s=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const f=(name:string,scientificName:string|null,source:ResearchSource,evidenceLevel:string,note:string):FishEvidence=>({name,scientificName,evidenceLevel,sourceLabel:source.label,sourceUrl:source.url,note,recordCount:null,distanceKm:null});
const a=(label:string,value:string,source:ResearchSource,note:string):AccessEvidence=>({label,value,sourceUrl:source.url,note});

const teblig=s("6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)","https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_","2024-2028 genel amatör avcılık çerçevesidir; yerel karar ve saha tabelaları ayrıca uygulanır.");
const kulaBrif=s("Manisa İl Tarım ve Orman Müdürlüğü - 2024 Brifingi","https://manisa.tarimorman.gov.tr/Belgeler/Brifing%202024/Brifing2024.pdf","Kula Göleti'ni rota adıyla tanımlar ve amatör balık avcılığı sahası olarak değerlendirildiğini açıkça kaydeder.");
const kulaLevha=s("Manisa İl Tarım ve Orman Müdürlüğü - Avcılık farkındalık çalışması","https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d59be594-0585-4d66-8a17-00217dd913d6&TermSetId=51c21c3c-cdd9-4e02-8fb2-bd268f69bdcc&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=898%2FSu-Urunleri-Avciliginda-Farkindalik-Calismasi","2024 sonunda Kula Göleti dahil yoğun avcılık yapılan içsulara amatör avcılık kuralları ve tür limitlerini içeren levhalar yerleştirildiğini doğrular.");
const kulaDsi=s("DSİ 2. Bölge Müdürlüğü - İşletmedeki sulamalar","https://bolge02.dsi.gov.tr/Sayfa/Detay/862","Kula Göleti Sulaması'nı işletmedeki DSİ sulama tesisi olarak doğrular.");
const kulaBel=s("Kula Belediyesi - 2024 Faaliyet Raporu","https://www.kula.bel.tr/dosya/Faaliyet%20Raporlar%C4%B1/Kula%20Belediyesi%202024%20Faaliyet%20Raporu.pdf","Göletin belediye işletmesindeki sulama işlevini ve kuraklığa bağlı düşük su sorununu güncel kurumsal bağlamda kaydeder.");
const kula2019=s("Manisa İl Tarım ve Orman Müdürlüğü - 2019 Brifingi","https://manisa.tarimorman.gov.tr/Belgeler/Brifing%202019/2019%20Brifing.pdf","Kula Göleti'nde tarihsel olarak aynalı sazan yetiştiriciliği bulunduğunu rota özelinde kaydeder; doğal stok veya av garantisi değildir.");
const kulaSaha=s("Ajans Manisa - Kula Göleti kaçak ağ taraması","https://www.ajansmanisa.com/haber-400770-kula-goletinde-kacak-ag-taramasi-yapildi","İl Tarım ekiplerinin gölette ağ taraması yaptığı ve yerel olta kullanımını aktarır; ikincil saha desteğidir.");
const kulaMap=s("Gölbaşı Mahallesi genel konum desteği","https://kmhesaplama.com/manisa/kula/golbasi/","38.507190, 28.603620 Gölbaşı yerleşim koordinatıdır; kesin gölet kıyısı veya park pini değildir.");

const osStock=s("Edirne İl Tarım ve Orman Müdürlüğü - Su Kaynaklarımızı Balıklandırıyoruz","https://edirne.tarimorman.gov.tr/Haber/549/Su-Kaynaklarimizi-Baliklandiriyoruz","Havsa Osmanlı Köyü Göleti'ndeki 2025 resmî sazan balıklandırmasını ve amatör balıkçılığı geliştirme amacını rota özelinde kaydeder.");
const osEnv=s("Edirne 2024 İl Çevre Durum Raporu","https://webdosya.csb.gov.tr/db/edirne/icerikler/cevre-durum-raporu-2024-20251103071244.pdf","Havsa-Osmanlı Köyü Osmanlı Göleti'ni yüzey suyu izleme noktası olarak 41.582795490906, 26.852530227397 koordinatlarıyla doğrular.");
const osAmator=s("ANKA - Edirne Valisi Osmanlı Göleti açıklaması","https://ankahaber.net/haber/detay/edirne_valisi_sezer_cocuklarla_birlikte_30_bin_yavru_sazan_baligini_golete_birakti_258388","Valinin Osmanlı Göleti'ni amatör olta balıkçılığının önemli merkezlerinden biri olarak nitelediği ve yaklaşık 30 bin pullu sazan salımını açıkladığı rota-özel saha haberidir.");

const profile=(speciesStrong:boolean,identity:string,legal:string,access:string,species:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"B",
  identity:{level:"strong",label:"Resmî rota kimliği",note:identity},
  legal:{level:"strong",label:"Resmî/rota-özel amatör kullanım kanıtı",note:legal},
  access:{level:"partial",label:"Genel yaklaşım doğrulandı",note:access},
  species:{level:speciesStrong?"strong":"partial",label:speciesStrong?"Rota özelinde tür kanıtı":"İhtiyatlı tür olasılığı",note:species},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Kesin park, bariyer, özel parsel, teknik tesis ve son kıyı girişi hareket günü yerinde doğrulanmalıdır."},
  reviewedAt:date
});

export const yeniRegionalBPlus20260923:EnrichedMera[]=[
{
  slug:"manisa-kula-kula-goleti",name:"Kula Göleti",district:"Kula",province:"Manisa",zone:"Gölbaşı-İmamlı genel yaklaşım bölgesi",waterType:"Gölet",region:"Ege",
  summary:"Kula Göleti, Manisa İl Tarımın güncel brifinginde amatör balık avcılığı sahası olarak tanımlanan; DSİ ve belediye sulama kayıtlarıyla kimliği çaprazlanan Güven B Ege rotasıdır.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Kula ilçe merkezi temel ihtiyaçları","Gölbaşı Mahallesi genel yaklaşım referansı"],
  cautions:["Gölet sulama amaçlıdır; gövde, savak, su alma, vana ve diğer teknik işletme yapıları rota dışıdır.","Geçmiş resmî kayıtlarda yetiştiricilik bulunduğundan güncel kafes/işletme görülürse yaklaşma ve av mesafesi kuralları uygulanmalıdır.","Kula Belediyesi 2024 raporu kuraklık ve düşük su sorununu kaydeder; su kotu ile kıyı zemini hareket günü kontrol edilmelidir.","Sazan kaydı av garantisi değildir; 6/2 Tebliğ, il duyuruları ve saha levhaları güncel olarak uygulanır."],
  lat:38.50719,lng:28.60362,locationPrecision:"Genel bölge",
  verification:"2026-09-23 masa başı doğrulaması: Manisa İl Tarım 2024 brifingi rota özelinde amatör kullanım, 2024 levha çalışması güncel avcılık yönetimi, DSİ ve Kula Belediyesi su yapısı/işletme kimliği sağlar. Tür kanıtı ihtiyatlıdır; mikro kıyı erişimi saha teyitli değildir. Güven B.",
  updatedAt:date,publishedAt:date,confidence:"B",indexing:"index",
  image:"/images/meralar/ulusal/manisa-kula-kula-goleti.svg",socialImage:"/images/meralar/ulusal/manisa-kula-kula-goleti.svg",
  navigationNote:"Pin Gölbaşı Mahallesi genel yaklaşımını gösterir; doğrudan kıyı girişi veya park noktası değildir. Kamusal yol, bariyer, özel parsel ve varsa yetiştiricilik alanı yerinde doğrulanmalıdır.",
  shoreProfile:"Kula Göleti tarımsal sulama amaçlı yapay içsudur. Kuraklık ve sulama kullanımı su çizgisini değiştirebilir; çamurlu şevler, teknik yapılar ve varsa kafes çevresi dışlanarak yalnız güvenli ve kamusal olduğu sahada görülen kıyılar değerlendirilmelidir.",
  transport:"Kula ilçe merkezi ile Gölbaşı Mahallesi genel yaklaşım koridorudur. Koordinat yerleşim ölçeğindedir; kesin kıyı, araç yolu veya park izni değildir. Son kilometre gündüz koşullarında yerinde kontrol edilmelidir.",
  crowdNote:"Sulama kullanımı ve amatör balıkçılık aynı alanı paylaşabilir. Tarımsal işletme hareketi, dar kıyı veya yetiştiricilik faaliyeti görülen kesimlerde güvenli atış alanı yoksa başka bölüme geçilmelidir.",
  longIntro:["Kula Göleti'nin Güven B seviyesinin ana dayanağı, Manisa İl Tarım ve Orman Müdürlüğünün 2024 brifinginde göleti açıkça amatör balık avcılığı sahası olarak tanımlaması ve aynı yıl gölete amatör avcılık bilgilendirme levhası yerleştirmesidir.","Bu seviye her kıyının sürekli açık olduğunu veya sazanın günlük yakalanacağını göstermez. Sulama işletmesi, su kotu, teknik tesis, özel mülkiyet ve varsa yetiştiricilik alanları hareket günü ayrıca kontrol edilmelidir."],
  planningNotes:["İlk ziyareti gündüz yap; Gölbaşı pini yalnız genel yaklaşım referansıdır.","6/2 Tebliğ ile Manisa İl Tarımın güncel dönem ve boy/adet duyurularını hareket günü kontrol et.","Teknik sulama yapıları ile varsa kafes/yetiştiricilik sahasını rota dışında bırak.","Geceleme için gölet kıyısını varsayma; Kula ilçe merkezindeki ruhsatlı seçenekleri ayrıca kontrol et."],
  seasonalNotes:["Kuraklık ve tarımsal sulama su seviyesini güçlü biçimde etkileyebilir; düşük su döneminde kıyı çamuru ve dik şev riski artabilir.","Sazan bilgisi tür olasılığı içindir; doğal stok yoğunluğu ve günlük av başarısı saha verisi olmadan ileri sürülmez."],
  sources:[kulaBrif,kulaLevha,kulaDsi,kulaBel,kula2019,kulaSaha,kulaMap,teblig],
  researchedAt:date,researchStatus:"Rota özelinde resmî amatör kullanım + güncel avcılık levhası + DSİ/belediye su yapısı kimliği çaprazlandı; tür kanıtı ihtiyatlı, mikro erişim saha teyitli değil.",
  researchSummary:"Kula Göleti resmî olarak amatör balıkçılık sahasıdır; işletme/sulama kimliği ve güncel su durumu kurumsal kaynaklarla, yerel olta kullanımı ikincil saha kaynağıyla desteklenmiştir.",
  fishEvidence:[f("Sazan","Cyprinus carpio",kula2019,"Destekleyici olasılık · tarihsel rota-özel resmî yetiştiricilik kaydı","Aynalı sazan rota özelinde kaydedilmiştir; doğal popülasyon tespiti değildir."),f("Sazan","Cyprinus carpio",kulaLevha,"Destekleyici olasılık · rota-özel amatör avcılık levhası","Kula Göleti'ne yerleştirilen levhada sazan boy/adet kuralları yer alır; av garantisi değildir.")],
  accommodationOptions:[],
  accessEvidence:[a("Resmî amatör kullanım","Kula Göleti amatör balık avcılığı sahası",kulaBrif,"Mikro kıyı giriş izni değildir."),a("Genel yaklaşım","Gölbaşı Mahallesi 38.507190, 28.603620",kulaMap,"Yerleşim planlama referansıdır; kıyı/park pini değildir.")],
  navigationVerified:false,
  confidenceProfile:profile(false,"Manisa İl Tarım, DSİ ve Kula Belediyesi aynı su varlığını doğrular.","2024 İl Tarım brifingi Kula Göleti'ni amatör balık avcılığı sahası olarak tanımlar ve güncel levha çalışmasıyla destekler.","Genel yerleşim yaklaşımı belgeli; mikro kıyı ve mülkiyet saha teyitli değildir.","Tarihsel rota-özel resmî aynalı sazan yetiştiricilik kaydı ve güncel amatör levha sazan olasılığını destekler; doğal stok tespiti değildir.")
},
{
  slug:"edirne-havsa-osmanli-koyu-goleti",name:"Osmanlı Köyü Göleti",district:"Havsa",province:"Edirne",zone:"Osmanlı Köyü ve gölet genel bölgesi",waterType:"Gölet",region:"Marmara",
  summary:"Osmanlı Köyü Göleti, 2025 resmî sazan balıklandırması, amatör olta balıkçılığını geliştirme amacı ve resmî yüzey suyu konum kaydıyla doğrulanan Güven B Marmara rotasıdır.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Osmanlı Köyü genel yaklaşım referansı","Havsa ilçe merkezi temel ihtiyaçları"],
  cautions:["Pompa, su alma, vana, sedde ve diğer teknik işletme alanları rota dışıdır.","Resmî çevre izleme koordinatı park veya kıyı girişi değildir; özel parsel ve tarla yolları yerinde kontrol edilmelidir.","2025 balıklandırması stok yoğunluğu veya av garantisi değildir.","6/2 Tebliğ, Edirne İl Tarım dönemsel duyuruları ve saha tabelaları hareket günü kontrol edilmelidir."],
  lat:41.582795490906,lng:26.852530227397,locationPrecision:"Genel bölge",
  verification:"2026-09-23 masa başı doğrulaması: Edirne İl Tarım 2025 balıklandırması rota özelinde pullu sazan ve amatör balıkçılığı geliştirme bağlamı sağlar; Valinin rota-özel amatör kullanım açıklaması ve İl Çevre Durum Raporu konumu çaprazlar. Mikro erişim saha teyitli değildir. Güven B.",
  updatedAt:date,publishedAt:date,confidence:"B",indexing:"index",
  image:"/images/meralar/ulusal/edirne-havsa-osmanli-koyu-goleti.svg",socialImage:"/images/meralar/ulusal/edirne-havsa-osmanli-koyu-goleti.svg",
  navigationNote:"Pin resmî çevre izleme koordinatının genel gölet konumunu gösterir; su kenarına araçla giriş, park izni veya kamusal patika garantisi değildir. Son yaklaşım saha tabelası ve mülkiyet sınırlarıyla doğrulanmalıdır.",
  shoreProfile:"Osmanlı Köyü Göleti kırsal içsu ve sulama yapısıdır. Su seviyesi, bitki örtüsü ve kıyı zemini mevsime göre değişebilir; sedde, pompa, su alma ve diğer teknik tesislerden uzak, yalnız kamusal ve stabil kıyılar değerlendirilmelidir.",
  transport:"Havsa ilçesinden Osmanlı Köyü yönü genel yaklaşım koridorudur. Resmî çevre raporu gölet konumunu doğrular ancak son yol, park veya kıyı girişi tanımlamaz; özel tarla yollarına izinsiz girilmemelidir.",
  crowdNote:"Aile/rekreasyon ve amatör balıkçılık kullanımı dönemsel artabilir. Dar kıyıda güvenli atış alanı yoksa veya tarımsal işletme hareketi varsa daha açık ve kamusal bir bölüme geçilmelidir.",
  longIntro:["Osmanlı Köyü Göleti'nin Güven B seviyesinin ana dayanağı, 2025'te Edirne İl Tarım ve Orman Müdürlüğünün gölette yürüttüğü rota-özel sazan balıklandırması ile amatör olta balıkçılığını geliştirme amacının aynı kamu programında açıkça yer almasıdır.","Edirne Valisinin saha açıklaması Osmanlı Göleti'ni amatör olta balıkçılığının önemli merkezlerinden biri olarak tanımlar. Buna rağmen sayfa yalnız genel gölet konumunu verir; özel mülkiyet, teknik alanlar, su kotu ve son kıyı girişi yerinde kontrol edilmelidir."],
  planningNotes:["İlk ziyareti gündüz yap ve resmî izleme pinini doğrudan park/olta cebi olarak kullanma.","6/2 Tebliğ ile Edirne İl Tarımın güncel av yasaklarını ve tür kurallarını hareket günü kontrol et.","Sedde, pompa, vana ve su alma yapılarından güvenli mesafe bırak.","Geceleme için gölet kıyısını varsayma; Havsa ilçe merkezindeki ruhsatlı seçenekleri ayrıca kontrol et."],
  seasonalNotes:["2025 pullu sazan balıklandırması güçlü tür olasılığı kanıtıdır; güncel stok yoğunluğu veya kıyıdan av başarısı değildir.","Yağış ve sulama işletmesi su seviyesini ve kıyı çamurunu değiştirebilir; yaklaşım mevsime göre yeniden değerlendirilmelidir."],
  sources:[osStock,osEnv,osAmator,teblig],
  researchedAt:date,researchStatus:"Rota özelinde resmî balıklandırma + amatör kullanım açıklaması + resmî çevre izleme konumu çaprazlandı; mikro erişim saha teyitli değil.",
  researchSummary:"Osmanlı Köyü Göleti resmî sazan balıklandırması, amatör olta balıkçılığı bağlamı ve kamu yüzey suyu izleme konumuyla B seviyesinde masa başında doğrulanmıştır.",
  fishEvidence:[f("Sazan","Cyprinus carpio",osStock,"Güçlü olasılık · rota özelinde resmî balıklandırma","2025'te Osmanlı Köyü Göleti'nde pullu sazan yavruları suyla buluşturulmuştur; av garantisi değildir.")],
  accommodationOptions:[],
  accessEvidence:[a("Amatör kullanım bağlamı","Osmanlı Göleti amatör olta balıkçılığı için kullanılan alan",osAmator,"Mikro kıyı erişim hakkı anlamına gelmez."),a("Resmî yüzey suyu konumu","41.582795490906, 26.852530227397",osEnv,"İzleme koordinatıdır; park/kıyı giriş pini değildir.")],
  navigationVerified:false,
  confidenceProfile:profile(true,"Edirne İl Tarım ve İl Çevre Durum Raporu aynı su varlığını doğrular.","Resmî balıklandırma amatör balıkçılığı geliştirme amacı taşır; Vali açıklaması rotayı amatör olta merkezi olarak tanımlar.","Resmî izleme koordinatı genel konumu doğrular; mikro erişim saha teyitli değildir.","2025 resmî balıklandırması rota özelinde pullu sazan varlığı olasılığını güçlü biçimde destekler.")
}
];

export const regionalBPlusStats20260923={
  total:yeniRegionalBPlus20260923.length,
  ege:yeniRegionalBPlus20260923.filter(r=>r.region==="Ege").length,
  marmara:yeniRegionalBPlus20260923.filter(r=>r.region==="Marmara").length,
  slugs:yeniRegionalBPlus20260923.map(r=>r.slug)
};
if(regionalBPlusStats20260923.total!==2||regionalBPlusStats20260923.ege!==1||regionalBPlusStats20260923.marmara!==1)throw new Error("23 Eylül bölgesel B+ hedefi 1 Ege + 1 Marmara olmalı.");
if(yeniRegionalBPlus20260923.some(r=>!["A","B"].includes(r.confidence)))throw new Error("23 Eylül bölgesel yeni rotalar B+ olmalı.");
if(yeniRegionalBPlus20260923.some(r=>r.sources.length<3))throw new Error("23 Eylül B+ rotalarda en az üç kaynak bulunmalı.");
