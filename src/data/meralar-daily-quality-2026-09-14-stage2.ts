import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"Tarım ve Orman Bakanlığı - 6/2 Amatör Balıkçılık",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 genel amatör avcılık çerçevesidir; rota özelindeki koruma, kiralama, işletme, güvenlik ve yerel kararlar ayrıca uygulanır."};
const eski2022:ResearchSource={label:"Eskişehir İl Tarım - 903 bin yavru sazan",url:"https://eskisehir.tarimorman.gov.tr/Haber/1045/",note:"2022 balıklandırmasında Yukarıkartal, Musaözü, Karaören, Kaymaz, Aşağıkuzfındık ve Kanlıpınar rota özelinde sayılır; yetiştiriciliğe açılmamış ve amatör balıkçıların yararlanabileceği suların tercih edildiği açıkça belirtilir."};
const eski2019:ResearchSource={label:"Eskişehir İl Tarım - iç sulara 250 bin yavru sazan",url:"https://eskisehir.tarimorman.gov.tr/Haber/621/Ic-Sularimiza-250-000-Adet-Yavru-Sazan-Baligi-Birakildi",note:"Aşağıkuzfındık, Musaözü ve Yukarı Kartal dahil rota-özel sazan balıklandırmalarını; yetiştiriciliğe açılmamış, amatör balıkçıların yararlanabileceği suların seçildiğini kaydeder."};
const eskiYayin2026:ResearchSource={label:"Eskişehir İl Tarım - Musaözü'ne yayın balığı",url:"https://eskisehir.tarimorman.gov.tr/Haber/1731/Eskisehirde-Su-Kaynaklarina-2-500-Yayin-Baligi-Yavrusu",note:"27 Temmuz 2026'da Musaözü Göleti'ne 2.500 yayın balığı yavrusu bırakıldığını doğrular; balıklandırma av garantisi değildir."};
const musaDkmp:ResearchSource={label:"Tarım ve Orman Ekotaban - Musaözü Tabiat Parkı",url:"https://ekotaban.tarimorman.gov.tr/alan/376",note:"Musaözü Tabiat Parkının resmî ulaşım ve alan bağlamını verir; park statüsü gölün her kıyısında serbest olta izni anlamına gelmez."};
const sarisungur2025:ResearchSource={label:"Sarısungur Carp Race of Master 2025",url:"https://ulusalajans.com.tr/esabder-sarisungur-carp-race-of-master-2025-sona-erdi-141-balik-yakalandi",note:"18-23 Ağustos 2025'te Sarısungur (Mamuca) Göleti'nde 141 sazanın yakalanıp geri bırakıldığı sportif yarışmayı ve belediye desteğini kaydeder."};
const duzce2023:ResearchSource={label:"Düzce İl Tarım - 35 bin yavru sazan",url:"https://duzce.tarimorman.gov.tr/Haber/1019/Ilimizde-35-Bin-Yavru-Sazan-Gol_goletle-Bulustu",note:"Çamlıpınar Göleti ve Kurugöl'e ayrı ayrı 5.000 sazan yavrusu bırakıldığını ve yer/boy/zaman yasaklarına uyulmasını kaydeder."};
const duzce2022:ResearchSource={label:"Düzce İl Tarım - 2022 balıklandırması",url:"https://duzce.tarimorman.gov.tr/Haber/960/",note:"Çamlıpınar Göleti ve Kurugöl dahil dört suya pullu sazan bırakıldığını doğrular; stok destekleme kaydı av garantisi değildir."};
const esenPortal:ResearchSource={label:"Kültür Portalı / Denizli İl Kültür ve Turizm - Eşen Göleti",url:"https://www.kulturportali.gov.tr/turkiye/denizli/gezilecekyer/esen-goleti-beyagac",note:"Beyağaç Eşen Göletinde sportif olta balıkçılığı yapıldığını, aynalı sazan üretildiğini ve genel ulaşım tarifini resmî turizm kaynağı olarak verir."};
const cindereCatch:ResearchSource={label:"Gazete Şehir - Cindere Barajı amatör sazan avı",url:"https://gazetesehir.com/haber/25582236/cinderede-bereketli-gun-sazanla-cuvali-doldurdu",note:"21 Temmuz 2025 tarihli rota-özel amatör olta kaydı sazan varlığı ve fiilî kıyı kullanımını destekler; tekil av haberi güncel izin veya av garantisi değildir."};
const valiCatch:ResearchSource={label:"Akış Haber - Vali Recep Yazıcıoğlu Barajı yayın kaydı",url:"https://www.akishaber.com.tr/denizlide-ki-dev-yayin-baligi-gorenleri-sasirtti-5584h.htm",note:"Gökpınar/Vali Recep Yazıcıoğlu Barajında oltayla yakalanıp geri bırakılan yayın balığını rota özelinde kaydeder; eski kayıt güncel av başarısı garantisi değildir."};
const valiAccess:ResearchSource={label:"Birdingplaces - Vali Recep Yazıcıoğlu Barajı genel erişim",url:"https://www.birdingplaces.eu/tr/birdingplaces/turkey/vali-recep-yazicioglu-baraji",note:"Rezervuarın Denizli doğusunda genel erişim ve yol bağlamını ikincil olarak destekler; kamusal mikro kıyı veya av izni kanıtı değildir."};
const nev2023:ResearchSource={label:"Nevşehir Valiliği - baraj ve göletlere yavru balık",url:"https://www.nevsehir.gov.tr/baraj-ve-goletlere-yavru-balik-birakildi",note:"2023'te Ayhanlar Barajına 101 bin, Karaburna Göletine 16 bin sazan bırakıldığını resmî olarak doğrular."};
const nev2022:ResearchSource={label:"Nevşehir İl Tarım - 2022 gölet balıklandırması",url:"https://nevsehir.tarimorman.gov.tr/Haber/905/Nevsehirde-Goletlere-Yavru-Balik-Birakildi",note:"Karaburna Göletine sazan bırakıldığını rota özelinde tekrar doğrular; geçmiş balıklandırma av garantisi değildir."};
const karaburnaInfra:ResearchSource={label:"Nevşehir İl Özel İdaresi - Karaburna Göleti yenileme",url:"https://www.nevsehirozelidare.gov.tr/karaburna-goleti-yenileniyor",note:"Hacıbektaş Karaburna Göletinin sulama yapısı kimliğini ve işletme bağlamını resmî olarak doğrular; sulama tesisleri olta erişim alanı değildir."};
const tasolukAcademic:ResearchSource={label:"Afyon Kocatepe Üniversitesi - Taşoluk Baraj Gölü tatlısu kefali çalışması",url:"https://dergipark.org.tr/en/pub/akufemubid/article/237463",note:"Nisan 2010-Mayıs 2011 arasında Taşoluk Baraj Gölünden 150 Squalius cephalus örneğini doğrudan inceleyen hakemli rota-özel çalışmadır."};
const tasolukDsi:ResearchSource={label:"DSİ 25. Bölge - Taşoluk Barajı",url:"https://bolge25.dsi.gov.tr/Sayfa/Detay/1035",note:"Biga/Taşoluk Barajının resmî su yapısı kimliği ve işletme bağlamı için kullanılır; gövde ve işletme sahaları kamusal olta erişimi değildir."};
const cavdarDkmp:ResearchSource={label:"Tarım ve Orman DKMP - Tabiat Parkları",url:"https://www.tarimorman.gov.tr/DKMP/Menu/28/Tabiat-Parklari",note:"Çavdarhisar Barajı Tabiat Parkını Kütahya/Çavdarhisar'da resmî korunan alan listesinde doğrular; korunan alan statüsü serbest av izni değildir."};
const cavdarSazan:ResearchSource={label:"Çavdarhisar Barajı sazan balıklandırma kaydı",url:"https://www.kutahyahaber.com.tr/cavdarhisar-barajina-15-bin-sazan-yavrusu-birakildi",note:"İlçe Tarım açıklamasını aktaran rota-özel kayıtta Çavdarhisar Barajına 15 bin pullu sazan bırakıldığı ve amatör oltacıların kurallara uyması gerektiği belirtilir."};
const beskarisValilik:ResearchSource={label:"Kütahya Valiliği - Beşkarış Turna Balığı Yakalama Yarışması",url:"https://www.kutahya.gov.tr/buyuk-zaferin-100-yilinda-turna-baligi-yakalama-yarismasi",note:"Beşkarış Barajında kıyıdan ve bottan turna balığı yakalama yarışmasını resmî olarak duyurur; rota kimliği, amatör kullanım ve turna türünü birlikte destekler."};

export const promoted20260914Stage2=[
  "ankara-500km-eskisehir-kanlipinar-goleti",
  "ankara-500km-eskisehir-karaoren-goleti",
  "ankara-500km-eskisehir-kaymaz-goleti",
  "ankara-500km-eskisehir-yukarikartal-baraj-golu",
  "ankara-500km-eskisehir-kuzfindik-baraj-golu",
  "ulusal-eskisehir-musaozu-baraj-golu",
  "ankara-500km-eskisehir-mamuca-goleti",
  "ankara-500km-duzce-kurugol",
  "ankara-500km-duzce-camlipinar",
  "ankara-500km-denizli-esen-goleti",
  "ankara-500km-denizli-cindere-baraj-golu",
  "ankara-500km-denizli-vali-recep-yazicioglu-baraj-golu",
  "ankara-500km-nevsehir-ayhan-baraj-golu",
  "ankara-500km-nevsehir-karaburna-goleti",
  "ankara-500km-canakkale-tasoluk-baraj-golu",
  "ulusal-kutahya-cavdarhisar-baraj-golu",
  "ulusal-kutahya-beskaris-baraj-golu",
] as const;

type Evidence={sources:ResearchSource[];fish:string[];fishSource:ResearchSource;access:string;risk:string;identity?:string};
const evidence:Record<(typeof promoted20260914Stage2)[number],Evidence>={
  "ankara-500km-eskisehir-kanlipinar-goleti":{sources:[eski2022],fish:["Sazan"],fishSource:eski2022,access:"İl Tarımın balıklandırma programı bu suyu yetiştiriciliğe açılmamış ve amatör balıkçıların yararlanabileceği kaynaklar arasında değerlendirir; kesin kıyı cebi değildir.",risk:"Kanlıpınar korunan/rekreasyon alanı bağlamına sahiptir; giriş düzeni, faaliyet alanları, kalabalık ve saha tabelaları hareket günü kontrol edilmelidir."},
  "ankara-500km-eskisehir-karaoren-goleti":{sources:[eski2022],fish:["Sazan"],fishSource:eski2022,access:"Resmî program Karaören'i amatör balıkçıların yararlanabileceği, yetiştiriciliğe açılmamış su kaynakları arasında sayar; mikro giriş teyitli değildir.",risk:"Sulama ve kırsal kullanım nedeniyle su kotu, çamur, tarımsal trafik, özel parseller ve son kıyı geçişi yerinde kontrol edilmelidir."},
  "ankara-500km-eskisehir-kaymaz-goleti":{sources:[eski2022],fish:["Sazan"],fishSource:eski2022,access:"Resmî program Kaymaz'ı amatör balıkçıların yararlanabileceği, yetiştiriciliğe açılmamış su kaynakları arasında sayar; park ve son kıyı yolu doğrulanmış değildir.",risk:"Sulama göleti karakterinde su seviyesi ve yumuşak zemin değişebilir; özel mülkiyet, tarımsal çalışma ve tabela önceliklidir."},
  "ankara-500km-eskisehir-yukarikartal-baraj-golu":{sources:[eski2022,eski2019],fish:["Sazan"],fishSource:eski2022,access:"2019 ve 2022 resmî programlarında Yukarı Kartal/Yukarıkartal suyu amatör balıkçıların yararlanabileceği kaynaklar kapsamında balıklandırılmıştır; bu ifade mikro kıyı izni değildir.",risk:"Su yapısı/sulama güvenliği, gövde ve işletme bölümleri dışlanmalıdır; kıyı zemini ile güncel tabela hareket günü kontrol edilmelidir."},
  "ankara-500km-eskisehir-kuzfindik-baraj-golu":{sources:[eski2022,eski2019],fish:["Sazan"],fishSource:eski2022,access:"Aşağıkuzfındık/Kuzfındık resmî balıklandırma kayıtlarında amatör balıkçıların yararlanabileceği su olarak geçer; ticari/işletme hakkı ve mikro kıyı ayrıca teyit edilmelidir.",risk:"Baraj gövdesi, sulama/işletme alanı ve varsa kiralanmış istihsal sahaları kamusal olta erişimi sayılmaz; güncel hak sahipliği ve tabela kontrol edilmelidir."},
  "ulusal-eskisehir-musaozu-baraj-golu":{sources:[eski2022,eski2019,eskiYayin2026,musaDkmp],fish:["Sazan","Yayın"],fishSource:eskiYayin2026,access:"Musaözü hem resmî balıklandırma programlarında amatör kullanım bağlamına hem DKMP tabiat parkı ulaşım kaydına sahiptir; park içindeki her kıyı olta alanı değildir.",risk:"Tabiat parkı kuralları, rekreasyon kullanıcıları, suya giriş yasağı olabilecek bölümler ve dönemsel DKMP/İl Tarım kararları hareket günü kontrol edilmelidir."},
  "ankara-500km-eskisehir-mamuca-goleti":{sources:[sarisungur2025],fish:["Sazan"],fishSource:sarisungur2025,access:"Sarısungur (Mamuca) Göletinde belediye destekli ulusal sportif sazan yarışması yapılmış olması genel kıyı kullanımını destekler; belirli park/olta cebi sürekli açık kabul edilmez.",risk:"Kano ve diğer su sporları, organizasyonlar ve yoğun rekreasyon güvenli atış koridorunu etkileyebilir; etkinlik takvimi ve saha düzeni kontrol edilmelidir."},
  "ankara-500km-duzce-kurugol":{sources:[duzce2023,duzce2022],fish:["Sazan"],fishSource:duzce2023,access:"İl Tarım Kurugöl'ü tekrarlanan balıklandırma ve sportif balıkçılık hedefi içindeki su olarak kaydeder; orman/kırsal son yaklaşım ve park noktası ayrıca teyit edilmelidir.",risk:"Orman yolu, hava, çamur, yangın dönemi kısıtları ve kıyı zemin koşulları değişebilir; araçla son yaklaşım garanti edilmez."},
  "ankara-500km-duzce-camlipinar":{sources:[duzce2023,duzce2022],fish:["Sazan"],fishSource:duzce2023,access:"İl Tarım Çamlıpınar Göletini tekrarlanan sazan balıklandırması yapılan kaynak olarak doğrular; genel bölge yaklaşımı mikro kıyı erişimi değildir.",risk:"Kaynaşlı kırsalında orman/sulama yolu, çamur, tarımsal faaliyet ve dönemsel erişim değişebilir; bariyer ve tabela önceliklidir."},
  "ankara-500km-denizli-esen-goleti":{sources:[esenPortal],fish:["Aynalı sazan"],fishSource:esenPortal,access:"Denizli İl Kültür ve Turizm kaynaklı Kültür Portalı sportif olta balıkçılığını ve Beyağaç üzerinden genel ulaşımı açıkça tarif eder.",risk:"Orman içi dinlenme alanında yangın dönemi, rekreasyon yoğunluğu, toprak yol ve su seviyesi şartları değişebilir; tesis bulunmadığı için hazırlık ilçe merkezinde yapılmalıdır."},
  "ankara-500km-denizli-cindere-baraj-golu":{sources:[cindereCatch],fish:["Sazan"],fishSource:cindereCatch,access:"2025 rota-özel amatör kıyı avı kaydı genel kullanım olasılığını destekler; HES/baraj işletme sahasına giriş veya sürekli kamusal kıyı hakkı çıkarılmaz.",risk:"Aktif baraj/HES sistemidir. Gövde, su alma yapısı, enerji tesisi, servis yolları ve güvenlik sahaları kesinlikle dışlanmalı; su kotu ve işletme talimatları kontrol edilmelidir."},
  "ankara-500km-denizli-vali-recep-yazicioglu-baraj-golu":{sources:[valiCatch,valiAccess],fish:["Yayın"],fishSource:valiCatch,access:"Şehir doğusundaki rezervuara genel yol/yaya erişimi ikincil kaynakta, rota-özel olta kullanımı ise tarihsel yerel kayıtta desteklenir; mikro kıyı kamusal kabul edilmez.",risk:"Baraj işletmesi, olası tel/bariyer, dik şev ve su tahliye yapıları nedeniyle yalnız genel bölge planlanmalı; tesis ve güvenlik alanlarına girilmemelidir."},
  "ankara-500km-nevsehir-ayhan-baraj-golu":{sources:[nev2023],fish:["Sazan"],fishSource:nev2023,access:"Nevşehir Valiliğinin balıklandırma duyurusu Ayhanlar Barajını kontrollü amatör/ticari avcılık bağlamında değerlendirir; belirli kıyı veya park noktası tanımlamaz.",risk:"Sulama/baraj işletme alanları, gövde ve tesis yolları olta erişimi değildir; su kotu, kiralama/istihsal hakkı ve yerel tabela güncel olarak kontrol edilmelidir."},
  "ankara-500km-nevsehir-karaburna-goleti":{sources:[nev2023,nev2022,karaburnaInfra],fish:["Sazan"],fishSource:nev2023,access:"Valilik/İl Tarım sazan balıklandırmaları ile İl Özel İdaresinin sulama göleti kimliği çaprazlanır; köy/gölet genel yaklaşımı dışında mikro kıyı iddiası yapılmaz.",risk:"Aktif sulama altyapısıdır. Kanal, vana, işletme bölümü ve tarımsal çalışma sahaları dışlanmalı; kıyı zemini, özel parseller ve güncel tabela kontrol edilmelidir."},
  "ankara-500km-canakkale-tasoluk-baraj-golu":{sources:[tasolukAcademic,tasolukDsi],fish:["Tatlısu kefali"],fishSource:tasolukAcademic,access:"DSİ su yapısı kimliği ve Biga genel yol ağı planlama bağlamı sağlar; akademik tür kaydı kamusal kıyı izni vermez ve mikro giriş doğrulanmış değildir.",risk:"Sulama amaçlı işletilen barajda gövde, vana/iletim yapıları, servis yolu ve çalışma alanları dışlanmalı; sulama sezonu ve su kotu nedeniyle kıyı koşulları değişebilir."},
  "ulusal-kutahya-cavdarhisar-baraj-golu":{sources:[cavdarDkmp,cavdarSazan],fish:["Sazan"],fishSource:cavdarSazan,access:"DKMP Çavdarhisar Barajı Tabiat Parkını resmî olarak doğrular; rota-özel sazan balıklandırma kaydı amatör olta bağlamını destekler. Korunan alanın her bölümü av sahası değildir.",risk:"Tabiat parkı ve sulama barajı kuralları birlikte uygulanır; gövde/işletme alanları, ziyaretçi güvenliği, aktivite kısıtları ve saha tabelaları önceliklidir."},
  "ulusal-kutahya-beskaris-baraj-golu":{sources:[beskarisValilik],fish:["Turna"],fishSource:beskarisValilik,access:"Kütahya Valiliğinin Beşkarış Barajında kıyıdan ve bottan turna yakalama yarışması duyurusu rota-özel amatör kullanım bağlamını doğrular; etkinlik kaydı sürekli ve sınırsız erişim anlamına gelmez.",risk:"Baraj işletme/gövde alanları, tekne güvenliği, su kotu ve güncel yerel kararlar kontrol edilmeli; yarışma geçmişi güncel av izni yerine kullanılmamalıdır."},
};

const uniqSources=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const applyDailyQuality20260914Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260914Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-14 Stage2 hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-14 gerçek D→C önkoşulu bozuldu: ${slug} (${previous.confidence})`);
    const e=evidence[slug];
    const primary=e.fishSource;
    const fishEvidence=e.fish.map((name)=>({name,evidenceLevel:"Güçlü rota-özel kayıt",sourceLabel:primary.label,sourceUrl:primary.url,note:`${name} bu su varlığında rota-özel kaynakla desteklenir. Geçmiş balıklandırma veya yakalama kaydı güncel av başarısı garantisi değildir.`,recordCount:null,distanceKm:null}));
    routeMap.set(slug,{
      ...previous,
      fish:e.fish,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:`Harita pini yalnız ${previous.name} genel su/rota bölgesini temsil eder; kesin park, araç girişi veya olta cebi değildir. ${e.risk}`,
      summary:`${previous.name}, rota kimliği, tür olasılığı, genel erişim bağlamı ve güncel mevzuat ayrı kaynak katmanlarıyla yeniden değerlendirilen Güven C planlama kaydıdır; mikro kıyı erişimi ve av başarısı garanti edilmez.`,
      longIntro:[`${previous.name} için 14 Eylül 2026 kalite araştırmasında su varlığı/konum, genel erişim veya kullanım bağlamı ve rota-özel tür kanıtı çaprazlandı. ${e.access}`,`Güven C belirli kıyının sürekli kamusal veya avcılığa açık olduğunu göstermez. ${e.risk} 6/2 Tebliğ, il/ilçe kararları, koruma ve işletme hükümleri hareket günü birlikte kontrol edilmelidir.`],
      researchStatus:"14 Eylül 2026 Stage 2 çok kaynaklı masa başı doğrulama tamamlandı; yalnız gerçek D kaydı kanıt eşiğini geçtiği için C'ye yükseltildi.",
      researchSummary:`${e.access} Tür olasılığı: ${e.fish.join(", ")}. ${e.risk}`,
      verification:`14 Eylül 2026: rota kimliği/genel konum, erişim-kullanım bağlamı, mevzuat/risk ve tür olasılığı bağımsız kaynak katmanlarıyla değerlendirildi. Geçmiş balıklandırma av garantisi değildir; mikro erişim saha teyitli değildir.`,
      researchedAt:"2026-09-14",
      updatedAt:"2026-09-14",
      sources:uniqSources([...(previous.sources||[]),...e.sources,teblig]),
      accessEvidence:[...(previous.accessEvidence||[]),{label:"Genel erişim/kullanım bağlamı",value:e.access,sourceUrl:e.sources[0]?.url||teblig.url,note:"Genel bölge planlamasıdır; kesin park, özel mülkiyet sınırı veya sürekli açık olta cebi değildir."}],
      fishEvidence,
      cautions:[...new Set([...(previous.cautions||[]),e.risk,"6/2 Tebliğ ile güncel il/ilçe müdürlüğü kararları, koruma/işletme kısıtları ve saha tabelaları hareket günü birlikte kontrol edilmelidir."])],
      confidenceProfile:{model:"evidence-v1",overall:"C",identity:{level:"strong",label:"Rota kimliği ve genel konum kaynaklı",note:"Su varlığı adı, il/ilçe ve genel konum mevcut kaynaklarla çaprazlanmıştır; pin mikro kıyı değildir."},legal:{level:"partial",label:"6/2 + rota risk/kısıt kontrolü",note:"Genel mevzuat ile rota özelindeki işletme, koruma veya kullanım bağlamı değerlendirildi; hareket günü yerel karar yine kontrol edilir."},access:{level:"partial",label:"Genel erişim/kullanım bağlamı",note:e.access},species:{level:"strong",label:"Rota-özel tür olasılığı",note:`${e.fish.join(", ")} rota özelindeki resmî, akademik veya doğrudan saha/kullanım kaydıyla desteklenmiştir; av garantisi değildir.`},field:{level:"unverified",label:"Mikro saha doğrulaması yok",note:"Park, son yol, özel mülkiyet, bariyer, su kotu, zemin ve tabela hareket günü yerinde kontrol edilmelidir."},reviewedAt:"2026-09-14"},
    });
  }
  return routeMap;
};
