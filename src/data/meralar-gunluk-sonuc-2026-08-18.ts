import type { EnrichedMera, ConfidenceProfile, ResearchSource } from "./meralar-tumu-core";

const valilik="https://www.kirikkale.gov.tr/turkuaz-bisiklet-yolunun-ilk-etabi-acildi";
const yesilVadi="https://www.kirikkale.gov.tr/vali-sayin-haktankacmaz-yesil-vadi-projesini-inceledi";
const map="https://mapcarta.com/N1038522591";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024-31 Ağustos 2028 dönemindeki amatör avcılık hükümleri; yürürlükteki değişikliklerle birlikte uygulanır."};
const tebligDegisiklik:ResearchSource={label:"Tarım ve Orman Bakanlığı - 6/2 Tebliğ 2025/12 değişikliği",url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",note:"16 Nisan 2025 tarihli değişiklik güncel mevzuat kontrolüne dahildir."};
const aksarayCiftevi="https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-";
const kastamonuCigdem="https://kastamonu.tarimorman.gov.tr/Haber/1053/Ilimizde-Goletler-Baliklandirildi";
const hatay2017="https://hatay.tarimorman.gov.tr/Haber/426/Ilimiz-Goletlerine-115-Bin-Adet-Sazan-Baligi-Yavrusu-Birakildi";
const hatay2018="https://hatay.tarimorman.gov.tr/Haber/476/Ilimiz-Gol-Ve-Goletlerine-90-000-Adet-Sazan-Yavrusu-Birakildi";
const hatay2020="https://hatay.tarimorman.gov.tr/Haber/581/Ilimiz-Gol-Ve-Goletlerine-94-000-Adet-Sazan-Yavrusu-Birakildi";
const gorentasMap="https://mapcarta.com/12973560";
const siirt2020="https://siirt.tarimorman.gov.tr/Haber/563/Il-Mudurlugumuz-Tarafindan-Goletlere-55-000-Adet-Yavru-Pullu-Sazan-Baligi-Birakildi";
const siirt2023="https://siirt.tarimorman.gov.tr/Haber/824/Su-Kaynaklarinin-Baliklandirilmasi-Projesi-Kapsaminda-Baraj-Ve-Goletlerimizde-Baliklandirma-Calismalarimiz-Devam-Ediyor%E2%80%A6";
const kurtalan="https://www.kurtalan.gov.tr/kurtalan";
const ekinliMap="https://www.haritamap.com/yer/ekinli-koyu-kurtalan";
const osmaniyeKaracaoren="https://osmaniye.tarimorman.gov.tr/Haber/1150/Karacaoren-Goletine-10-Bin-Pullu-Sazan-Birakildi";
const osmaniyeBan2026="https://osmaniye.tarimorman.gov.tr/Duyuru/359/Su-Urunleri-Av-Yasagi-Basladi";
const yarbasiMap="https://www.geonames.org/search.html?country=TR&q=Osmaniye";

const uniqueSources=(values:ResearchSource[]=[]):ResearchSource[]=>[...new Map(values.filter((s)=>s?.url&&s?.label).map((s)=>[s.url,s])).values()];
const confidenceProfile=(overall:"C"|"D",identity:"strong"|"partial",access:"partial"|"unverified",species:"strong"|"partial"|"unverified",reviewedAt="2026-08-20"):ConfidenceProfile=>({
  model:"evidence-v1",overall,
  identity:{level:identity,label:identity==="strong"?"Resmî rota kimliği":"Çok kaynaklı rota kimliği",note:identity==="strong"?"Su varlığı ve rota adı resmî rota-özel kaynakla destekleniyor; mikro kıyı noktası ayrıca saha teyidi gerektirir.":"Su adı ve genel konum birden fazla kaynakla eşleşiyor; mikro kıyı doğrulaması sürdürülmelidir."},
  legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ ve erişilebilen il duyuruları kontrol edildi; belirli kıyı cebinin sürekli açık olduğu veya istihsal/kiralama sınırları dışında kaldığı varsayılmaz."},
  access:{level:access,label:access==="partial"?"Genel erişim bağlamı kaynaklı":"Son kıyı erişimi doğrulanmadı",note:access==="partial"?"Yakın yerleşim veya kamusal yol bağlamı kaynaklıdır; son park, patika ve mülkiyet sınırı saha teyitli değildir.":"Genel pin su/yerleşim planlama noktasıdır; kıyıya araç veya yaya giriş izni vermez."},
  species:{level:species,label:species==="strong"?"Rota özelinde güçlü tür olasılığı":species==="partial"?"Kısmi tür kanıtı":"Tür kanıtı sınırlı",note:species==="strong"?"Sazan rota özelindeki resmî balıklandırma kaydıyla desteklenir; güncel stok yoğunluğu ve av başarısı garantisi değildir.":species==="partial"?"En az bir tür rota bağlamında destekleniyor; güncel av başarısı anlamına gelmez.":"Rota özelinde yeterli tür kanıtı bulunmadığından tür iddiası genişletilmez."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel kıyı riski hareket günü yeniden kontrol edilmelidir."},
  reviewedAt,
});
const carpEvidence=(label:string,url:string,note:string)=>({name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü olasılık · resmî balıklandırma kaydı",sourceLabel:label,sourceUrl:url,note,recordCount:null,distanceKm:null});

export const gunlukBakimHedefleri20260820=[
  "ulusal-amasya-destek-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
  "ulusal-erzurum-kapikaya-baraj-golu-erzurum",
  "ulusal-cankiri-karadere-baraj-golu-cankiri",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-bayburt-lori-deresi",
  "ankara-500km-adiyaman-ataturk-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
  "ankara-500km-adiyaman-cataltepe-goleti",
] as const;
export const gunlukBakimSonucu20260820={reviewed:17,meaningfullyImproved:2,upgraded:0,unchanged:15} as const;
export const gunlukYeniSlugs20260820=["hatay-yayladagi-gorentas-goleti","siirt-kurtalan-ekinli-goleti","osmaniye-duzici-karacaoren-baraj-goleti"] as const;

export const applyGunlukSonuc20260818=(routeMap:Map<string,EnrichedMera>)=>{
  const slug="ulusal-kirikkale-kizilirmak-yahsihan-hatti";
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`18 Ağustos Yahşihan sonuç yaması hedefi yok: ${slug}`);
  routeMap.set(slug,{
    ...previous,
    lat:39.84558,
    lng:33.44711,
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    navigationNote:"Pin Yahşihan istasyonu/Yeşil Vadi genel yaklaşım bölgesini temsil eder ve Kızılırmak kıyısındaki kamusal rekreasyon koridoruna yakın planlama noktasıdır; kesin olta cebi değildir. Son yaklaşımda park, kıyı tahkimatı, taşkın durumu ve saha tabelası kontrol edilmelidir.",
    transport:"Kırıkkale-Ankara yolu üzerinden Yahşihan ve Yeşil Vadi/Irmak yönüne ulaşılır. Valilik kaynakları Kızılırmak Yeşil Vadi projesini Yahşihan-Hacıbalı/Irmak koridorunda tanımlar; genel pin ulaşım başlangıcıdır, nehir kıyısındaki her geçişin açık olduğunu garanti etmez.",
    longIntro:["Yahşihan-Kızılırmak hattı, Yahşihan'ın Kızılırmak kıyısındaki konumu ile Yeşil Vadi/Turkuaz rekreasyon koridorunun resmî kamu kaynaklarında doğrulanması sayesinde Güven C düzeyine taşınmıştır.","Kırıkkale Valiliği bu koridorda olta balıkçılığını rekreasyon faaliyetleri arasında açıkça sayar. Bu kayıt nehrin her metresini sürekli av alanı yapmaz; su seviyesi, kıyı tahkimatı, güncel tebliğ, saha tabelası ve kamusal geçiş hareket günü ayrıca kontrol edilmelidir."],
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi",value:"Yahşihan-Hacıbalı/Irmak arasında kamusal rekreasyon koridoru",sourceUrl:yesilVadi,note:"Valilik proje alanını Kızılırmak'ın iki kıyısında kamusal rekreasyon alanı olarak tanımlar; mikro olta noktası veya güncel av izni değildir."},{label:"Açık harita - Yahşihan istasyonu/Kızılırmak",value:"39.84558, 33.44711 genel planlama noktası",sourceUrl:map,note:"Kızılırmak ve Yahşihan Park Mesire Alanı yakınlığı için genel konum referansı; kesin kıyı girişi değildir."}],
    sources:[...new Map([...(previous.sources||[]),{label:"Kırıkkale Valiliği - Turkuaz Bisiklet Yolu",url:valilik,note:"Kızılırmak koridorunda olta balıkçılığının rekreasyon kullanımları arasında yer aldığını açıkça belirtir."},{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi Projesi",url:yesilVadi,note:"Yahşihan/Irmak-Hacıbalı bölümündeki kamusal rekreasyon alanının kapsamını ve Kızılırmak sahillerini tanımlar."},{label:"Açık harita - Yahşihan/Kızılırmak genel yaklaşımı",url:map,note:"Genel planlama koordinatı için kullanılır; erişim izni değildir."}].map((s)=>[s.url,s])).values()],
    confidence:"C",
    confidenceProfile:{...(previous.confidenceProfile||{model:"evidence-v1" as const,overall:"C" as const,identity:{level:"strong" as const,label:"Resmî rota kimliği",note:"Yahşihan-Kızılırmak koridoru resmî kaynaklarla eşleşir."},legal:{level:"partial" as const,label:"Güncel mevzuat kontrolü",note:"Rekreasyon kullanım kaydı mikro kıyının sürekli av izni değildir."},access:{level:"partial" as const,label:"Kamusal rekreasyon erişimi",note:"Yeşil Vadi koridoru kaynaklıdır; son kıyı geçişi saha teyitli değildir."},species:{level:"unverified" as const,label:"Tür kanıtı sınırlı",note:"Rota özelinde tür iddiası genişletilmez."},field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Saha koşulları hareket günü kontrol edilmelidir."},reviewedAt:"2026-08-18"}),overall:"C",access:{level:"partial",label:"Kamusal rekreasyon erişimi",note:"Valilik Yeşil Vadi koridorunu Yahşihan/Irmak-Hacıbalı arasında kamusal rekreasyon alanı olarak tanımlar; son kıyı cebi saha teyitli değildir."},reviewedAt:"2026-08-18"},
  });

  const pertekSlug="ulusal-tunceli-keban-baraj-golu-pertek-kiyisi";
  const pertek=routeMap.get(pertekSlug);
  if(!pertek)throw new Error(`18 Ağustos Pertek sonuç yaması hedefi yok: ${pertekSlug}`);
  routeMap.set(pertekSlug,{
    ...pertek,
    longIntro:["Keban Baraj Gölü'nün Pertek 5. Bölge kıyısı, Tunceli İl Tarım ve Orman Müdürlüğünün DSİ görüşüyle belirlediği amatör avcılık yapılabilecek kıyı sınırları sayesinde Güven B düzeyinde resmî kullanım kanıtına sahiptir.","Güven B, Pertek kıyısının tamamının serbest olduğu anlamına gelmez. Korluca/Kolonkaya-Zümek Köprüsü ve Eski Singeç Köprüsü arasında resmî metinde tanımlanan sınırlar, güncel saha tabelaları, dönem kuralları ve özel/işletme alanları birlikte dikkate alınmalıdır."],
  });

  for(const target of gunlukBakimHedefleri20260820){
    const route=routeMap.get(target);
    if(!route)throw new Error(`20 Ağustos D bakım hedefi bulunamadı: ${target}`);
    if(route.confidence!=="D")throw new Error(`20 Ağustos bakım hedefi Güven D değil: ${target} (${route.confidence})`);
  }

  const cifteviSlug="ulusal-aksaray-ciftevi-baraj-golu";
  const ciftevi=routeMap.get(cifteviSlug)!;
  routeMap.set(cifteviSlug,{
    ...ciftevi,
    name:"Çiftevi Göleti",
    waterType:"Gölet",
    fish:["Sazan"],
    summary:"Çiftevi Göleti, Aksaray İl Tarım ve Orman Müdürlüğünün rota özelindeki 10 bin sazan yavrusu balıklandırma kaydıyla tür olasılığı güçlendirilmiş; ancak son kıyı erişimi ve mikro hukuki durum saha teyidi istediği için Güven D olarak tutulan bir içsu planlama kaydıdır.",
    longIntro:["Aksaray İl Tarım ve Orman Müdürlüğünün balıklandırma kaydı, Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını açıkça doğrular. Bu eski kayıt, sazanın bugün de bulunabileceğine dair kalıcı bir olasılık kanıtı olarak değerlendirilir; yakalama garantisi değildir.","Resmî tür kanıtına rağmen belirli kıyı cebinin kamusal erişimi, güncel istihsal/kiralama sınırları ve saha tabelaları rota düzeyinde yeterince doğrulanmadığı için güven seviyesi yapay biçimde yükseltilmemiştir."],
    verification:"20 Ağustos 2026 masa başı yeniden incelemesi: resmî rota-özel sazan balıklandırması doğrulandı; güncel 6/2 mevzuat çerçevesi eklendi. Son kıyı erişimi ve rota özelindeki güncel kullanım hakkı doğrulanamadığından Güven D korunur; saha teyidi yoktur.",
    researchedAt:"2026-08-20",updatedAt:"2026-08-20",
    sources:uniqueSources([...(ciftevi.sources||[]),{label:"Aksaray İl Tarım ve Orman Müdürlüğü - Çiftevi balıklandırması",url:aksarayCiftevi,note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde doğrular."},teblig,tebligDegisiklik]),
    fishEvidence:[...(ciftevi.fishEvidence||[]),carpEvidence("Aksaray İl Tarım ve Orman Müdürlüğü - Çiftevi balıklandırması",aksarayCiftevi,"Resmî kayıtta Çiftevi Göleti'ne 10.000 sazan yavrusu bırakılmıştır; geçmiş balıklandırma güncel bulunurluk için olasılık kanıtıdır, av garantisi değildir.")],
    confidence:"D",
    confidenceProfile:confidenceProfile("D","strong","unverified","strong"),
  });

  const cigdemSlug="ulusal-kastamonu-cigdem-baraj-golu-kastamonu";
  const cigdem=routeMap.get(cigdemSlug)!;
  routeMap.set(cigdemSlug,{
    ...cigdem,
    name:"Çiğdem Göleti",
    waterType:"Gölet",
    fish:["Sazan"],
    summary:"Devrekâni Çiğdem Göleti, Kastamonu İl Tarım ve Orman Müdürlüğünün 2018'de 20 bin aynalı/pullu sazan yavrusu bırakıldığını belirten rota özelindeki kaydıyla tür kanıtı güçlendirilmiş; son kıyı erişimi ve güncel mikro kullanım durumu teyitsiz olduğu için Güven D olarak tutulan bir içsu kaydıdır.",
    longIntro:["Kastamonu İl Tarım ve Orman Müdürlüğünün 27 Haziran 2018 tarihli kaydı, Devrekâni Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını açıkça belirtir. Resmî adlandırma 'Çiğdem Göleti' olduğu için kullanıcı yüzündeki su türü ve ad bu kanıta göre düzeltilmiştir.","Balıklandırma tür olasılığını güçlü biçimde destekler; ancak son kıyı girişinin kamusal olup olmadığı, güncel istihsal/kiralama sınırı ve saha güvenliği rota özelinde yeterince doğrulanmadığından Güven D korunur."],
    verification:"20 Ağustos 2026 masa başı yeniden incelemesi: resmî su adı ve 20.000 sazanlık balıklandırma kaydı doğrulandı; güncel 6/2 mevzuat çerçevesi eklendi. Mikro erişim ve rota özelindeki güncel kullanım hakkı teyitsiz olduğundan Güven D korunur; saha teyidi yoktur.",
    researchedAt:"2026-08-20",updatedAt:"2026-08-20",
    sources:uniqueSources([...(cigdem.sources||[]),{label:"Kastamonu İl Tarım ve Orman Müdürlüğü - Çiğdem Göleti balıklandırması",url:kastamonuCigdem,note:"Devrekâni Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını rota özelinde doğrular."},teblig,tebligDegisiklik]),
    fishEvidence:[...(cigdem.fishEvidence||[]),carpEvidence("Kastamonu İl Tarım ve Orman Müdürlüğü - Çiğdem Göleti balıklandırması",kastamonuCigdem,"2018'de 20.000 aynalı/pullu sazan yavrusu bırakıldığı resmî kayıttadır; geçmiş balıklandırma güncel bulunurluk için olasılık kanıtıdır, av garantisi değildir.")],
    confidence:"D",
    confidenceProfile:confidenceProfile("D","strong","unverified","strong"),
  });

  const newRoutes:EnrichedMera[]=[
    {
      slug:"hatay-yayladagi-gorentas-goleti",name:"Görentaş (23 Temmuz) Göleti",district:"Yayladağı",province:"Hatay",zone:"Hatay",waterType:"Gölet",region:"İçsu",
      summary:"Yayladağı'ndaki Görentaş (23 Temmuz) Göleti, 2017, 2018 ve 2020 resmî balıklandırma kayıtlarında sazanla ilişkilendirilen; sınır bölgesi niteliği nedeniyle yalnız genel yerleşim planlama piniyle sunulan Güven C içsu rotasıdır.",
      fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli",vehicleAccess:"Orta",
      amenities:["Görentaş yerleşiminde sınırlı temel ihtiyaç imkânları","Yayladağı ilçe merkezinde market ve temel hizmetler","Gecelik kalış için Yayladağı ve Antakya'daki ruhsatlı seçenekler ayrıca kontrol edilmeli"],
      cautions:["Görentaş sınır bölgesine yakındır; askerî, güvenlik ve sınır tesisleri kesinlikle rota dışıdır","Pin göletin kesin kıyı girişini değil Görentaş yerleşimindeki genel planlama noktasını gösterir","Kıyıda özel parsel, tarımsal kullanım, bariyer ve güvenlik tabelaları hareket günü kontrol edilmelidir","Balıklandırma kaydı sazanın güncel bulunurluk olasılığını destekler; av başarısı veya alıkoyma hakkı garanti etmez"],
      lat:35.91554,lng:36.14935,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok. Hatay İl Tarım ve Orman Müdürlüğünün 2017, 2018 ve 2020 balıklandırma kayıtları Görentaş/23 Temmuz Göleti'ni sazan bırakılan sular arasında açıkça sayar. Sınır güvenliği nedeniyle pin yalnız Görentaş yerleşimindeki genel planlama bölgesidir; kesin kıyı cebi değildir.",updatedAt:"2026-08-20",publishedAt:"2026-08-20",confidence:"C",
      image:"/images/meralar/ulusal/hatay-yayladagi-gorentas-goleti.svg",socialImage:"/images/meralar/ulusal/hatay-yayladagi-gorentas-goleti.svg",
      navigationNote:"Görentaş yerleşim pini yalnız güvenli rota planlama başlangıcıdır. Göletin son yaklaşımını gündüz, kamusal yol ve saha tabelaları üzerinden doğrula; sınır hattı, askerî/güvenlik tesisi veya kapalı yol yönüne ilerleme.",
      shoreProfile:"Görentaş çevresi engebeli sınır kırsalıdır; gölet kıyısında su kotuna bağlı yumuşak zemin ve tarımsal kullanım görülebilir. Güvenli av planı, güvenlik alanlarından uzak, açık ve stabil kıyı bulunabildiği takdirde yapılmalıdır.",
      transport:"Yayladağı ilçe merkezinden Görentaş yerleşimine kamusal yol üzerinden ulaşım planlanır. Verilen koordinat yerleşim merkezini temsil eder; gölete son araç/yaya yaklaşımı, kapalı yol, özel parsel ve sınır güvenliği işaretleri görülerek yalnız gündüz teyit edilmelidir.",
      crowdNote:"Yerleşim ve tarımsal kullanım nedeniyle yerel trafik görülebilir. Güvenlik görevlilerinin yönlendirmesi, sınır uyarısı veya kapalı yol işareti varsa rota zorlanmamalı; alternatif açık ve güvenli kıyı araştırılmalıdır.",
      longIntro:["Görentaş Göleti'nin sazan potansiyeli tek bir kullanıcı paylaşımına değil, Hatay İl Tarım ve Orman Müdürlüğünün birbirini izleyen 2017, 2018 ve 2020 balıklandırma kayıtlarına dayanır; 2020 kaydı suyu '23 Temmuz (Görentaş)' adıyla da tanımlar.","Bu güçlü tür ve kimlik kanıtı, sınır bölgesindeki her kıyının erişime açık olduğu anlamına gelmez. Güven C seviyesi, su ve tür kimliğini ifade eder; son kıyı erişimi ile güncel güvenlik/mevzuat koşulları hareket günü ayrıca doğrulanmalıdır."],
      planningNotes:["İlk ziyareti gündüz yap ve Görentaş yerleşiminden sonra yalnız açık kamusal yolları kullan.","Sınır, askerî ve güvenlik alanlarını kesinlikle hedefleme; saha görevlisi veya tabela daha sıkı bir sınır koyuyorsa buna uy.","6/2 Tebliğ, güncel Hatay il duyuruları, tür boy/adet sınırları ve yerel kısıtları hareket günü yeniden kontrol et."],
      seasonalNotes:["2017-2020 arasındaki tekrarlı sazan balıklandırmaları, türün günümüzde bulunabileceğine dair güçlü olasılık kanıtıdır; günlük av başarısı garanti edilmez.","Kurak dönem su kotu ve kıyı erişimini değiştirebilir; güvenli, stabil kıyı bulunmadığında av planı ertelenmelidir."],
      sources:[{label:"Hatay İl Tarım ve Orman Müdürlüğü - 2017 balıklandırması",url:hatay2017,note:"Görentaş dahil Yayladağı göletlerine sazan bırakıldığını ve sportif balıkçılığın geliştirilmesi hedefini açıklar."},{label:"Hatay İl Tarım ve Orman Müdürlüğü - 2018 balıklandırması",url:hatay2018,note:"Görentaş Göleti'ni sazan yavrusu bırakılan sular arasında rota özelinde sayar."},{label:"Hatay İl Tarım ve Orman Müdürlüğü - 2020 balıklandırması",url:hatay2020,note:"23 Temmuz (Görentaş) adlandırmasıyla göleti sazan balıklandırma listesine dahil eder."},{label:"Açık harita - Görentaş yerleşimi",url:gorentasMap,note:"35.91554, 36.14935 genel yerleşim planlama noktası; gölet kıyı girişi veya izin kanıtı değildir."},teblig,tebligDegisiklik],
      researchedAt:"2026-08-20",researchStatus:"Rota özelinde üç resmî balıklandırma kaydı, güncel 6/2 mevzuat çerçevesi ve genel yerleşim konumu çaprazlandı.",researchSummary:"Su kimliği ve sazan olasılığı güçlü; sınır bölgesi nedeniyle son kıyı erişimi ve mikro güvenlik durumu saha teyitli değildir.",
      fishEvidence:[carpEvidence("Hatay İl Tarım ve Orman Müdürlüğü - Görentaş balıklandırmaları",hatay2020,"2020 resmî kaydı 23 Temmuz (Görentaş) Göleti'ni sazan bırakılan sular arasında açıkça sayar; 2017 ve 2018 kayıtları da aynı tür kanıtını tekrarlar.")],accommodationOptions:[],accessEvidence:[{label:"Görentaş yerleşim planlama noktası",value:"35.91554, 36.14935 genel bölge",sourceUrl:gorentasMap,note:"Yerleşim merkezidir; gölet kıyı erişimi veya güvenlik izni değildir."}],navigationVerified:false,confidenceProfile:confidenceProfile("C","strong","unverified","strong")
    },
    {
      slug:"siirt-kurtalan-ekinli-goleti",name:"Ekinli Göleti",district:"Kurtalan",province:"Siirt",zone:"Siirt",waterType:"Gölet",region:"İçsu",
      summary:"Kurtalan Ekinli Göleti, Kaymakamlık kaydında DSİ sulama göleti olarak tanımlanan ve Siirt İl Tarım ve Orman Müdürlüğünün rota özelindeki 2020 sazan balıklandırmasıyla desteklenen Güven C içsu rotasıdır.",
      fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli",vehicleAccess:"Orta",
      amenities:["Ekinli köyünde sınırlı yerel ihtiyaç imkânları","Kurtalan ilçe merkezinde market, yakıt ve temel hizmetler","Gecelik kalış için Kurtalan veya Siirt merkezde ruhsatlı seçenekler ayrıca kontrol edilmeli"],
      cautions:["Sulama göletinin teknik yapıları, savak ve işletme bölümü av noktası değildir","Pin Ekinli köyünün genel planlama noktasıdır; son kıyı yolu ve park kamusal erişim garantisi değildir","Tarımsal faaliyet, hayvan sürüsü ve özel parsel sınırlarına müdahale edilmemelidir","Sazan için dönem, boy/adet ve av aracı kuralları güncel 6/2 Tebliğ ve il duyurularından hareket günü kontrol edilmelidir"],
      lat:38.005562,lng:41.478245,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok. Kurtalan Kaymakamlığı Ekinli Köyü'nde DSİ tarafından yaptırılmış sulama göleti bulunduğunu doğrular; Siirt İl Tarım ve Orman Müdürlüğü 3 Haziran 2020'de Ekinli ve Yayıklı göletlerine toplam 55.000 pullu sazan yavrusu bırakıldığını bildirir. Pin köy merkezidir, kesin kıyı girişi değildir.",updatedAt:"2026-08-20",publishedAt:"2026-08-20",confidence:"C",
      image:"/images/meralar/ulusal/siirt-kurtalan-ekinli-goleti.svg",socialImage:"/images/meralar/ulusal/siirt-kurtalan-ekinli-goleti.svg",
      navigationNote:"Koordinat Ekinli köyündeki genel planlama merkezidir. Göletin son yaklaşımında sulama tesisi, tarla yolu, özel parsel ve kapalı bariyerleri gündüz kontrol et; teknik yapıya veya işletme sahasına girme.",
      shoreProfile:"Ekinli Göleti tarımsal sulama amacı taşıyan küçük bir kırsal içsudur. Kıyı çizgisi su seviyesine göre çamurlaşabilir; sulama yapıları ve tarla girişlerinden uzak, stabil ve geriden güvenli atış yapılabilen bölüm bulunursa av planlanmalıdır.",
      transport:"Kurtalan ilçe merkezinden Ekinli köyü yönüne kamusal köy yolu üzerinden planlama yapılır. Kaymakamlık Ekinli'de DSİ sulama göleti bulunduğunu doğrular; ancak verilen pin köy merkezidir ve son kıyı yolu, park veya özel parsel geçişini doğrulamaz.",
      crowdNote:"Tarım ve hayvancılık kullanımı önceliklidir. Dar tarla yolu, çalışan sulama ekipmanı veya hayvan hareketi varsa araçla kıyıya zorlanmamalı; yerel kullanımı engellemeyen güvenli bir bölüm seçilmelidir.",
      longIntro:["Ekinli Göleti için rota kimliği iki ayrı resmî katmanda doğrulanır: Kurtalan Kaymakamlığı Ekinli Köyü'nde DSİ sulama göleti bulunduğunu belirtir; Siirt İl Tarım ve Orman Müdürlüğü ise Ekinli ve Yayıklı göletlerine 2020'de toplam 55 bin pullu sazan bırakıldığını kaydeder.","Siirt İl Müdürlüğünün 2023 balıklandırma programı Kurtalan göletlerindeki sazan stok desteğinin devam ettiğini ve sportif balıkçılığın geliştirilmesini hedeflediğini ayrıca gösterir. Buna rağmen son kıyı erişimi, özel parsel ve güncel kullanım kısıtları saha teyidi istediği için rota Güven C olarak sunulur."],
      planningNotes:["Hareket günü güncel Siirt il av yasağı duyurusunu ve 6/2 Tebliğ hükümlerini kontrol et; eski duyurulardaki sayısal sınırları güncel kural yerine kullanma.","Göletin sulama işlevine öncelik ver; teknik yapı, savak ve kapalı servis alanlarına girme.","Ekinli köy pinini kıyı park noktası sayma; son yaklaşımı gündüz ve kamusal yol üzerinden doğrula."],
      seasonalNotes:["2020 rota-özel sazan bırakımı ve 2023 Kurtalan göletleri balıklandırması türün güncel bulunma olasılığını destekler; av garantisi değildir.","Sulama sezonunda su kotu ve kıyı yapısı hızla değişebilir; çamur veya dik kıyı oluşmuşsa başka bölüm seçilmelidir."],
      sources:[{label:"Siirt İl Tarım ve Orman Müdürlüğü - Ekinli/Yayıklı balıklandırması",url:siirt2020,note:"Kurtalan Ekinli ve Yayıklı göletlerine toplam 55.000 pullu sazan yavrusu bırakıldığını rota özelinde doğrular."},{label:"Siirt İl Tarım ve Orman Müdürlüğü - 2023 Kurtalan göletleri balıklandırması",url:siirt2023,note:"Kurtalan ilçesi göletlerinde sazan balıklandırmasının sürdüğünü ve sportif balıkçılık hedefini açıklar."},{label:"Kurtalan Kaymakamlığı - ilçe coğrafyası",url:kurtalan,note:"Ekinli Köyü'nde DSİ tarafından yaptırılmış sulama göleti bulunduğunu resmî olarak doğrular."},{label:"Açık harita - Ekinli köyü",url:ekinliMap,note:"38.005562, 41.478245 genel yerleşim planlama noktası; kıyı erişim izni değildir."},teblig,tebligDegisiklik],
      researchedAt:"2026-08-20",researchStatus:"Rota özelinde resmî gölet kimliği, sazan balıklandırması, 2023 stok desteği ve güncel 6/2 mevzuat çerçevesi çaprazlandı.",researchSummary:"Kimlik ve tür kanıtı güçlü; son kıyı erişimi, özel parsel ve mikro kullanım hakkı saha teyitli değildir.",
      fishEvidence:[carpEvidence("Siirt İl Tarım ve Orman Müdürlüğü - Ekinli/Yayıklı balıklandırması",siirt2020,"2020'de Ekinli ve Yayıklı göletlerine toplam 55.000 pullu sazan yavrusu bırakılmıştır; bu kayıt türün günümüzde bulunabileceğine dair güçlü olasılık kanıtıdır.")],accommodationOptions:[],accessEvidence:[{label:"Kurtalan Kaymakamlığı - Ekinli sulama göleti",value:"Ekinli Köyü'nde DSİ sulama göleti",sourceUrl:kurtalan,note:"Su varlığını ve kamu yatırımı kimliğini doğrular; mikro kıyı girişini doğrulamaz."},{label:"Ekinli köyü genel konumu",value:"38.005562, 41.478245",sourceUrl:ekinliMap,note:"Köy planlama noktasıdır; kıyı parkı veya özel parsel geçişi değildir."}],navigationVerified:false,confidenceProfile:confidenceProfile("C","strong","partial","strong")
    },
    {
      slug:"osmaniye-duzici-karacaoren-baraj-goleti",name:"Karacaören Baraj Göleti",district:"Düziçi",province:"Osmaniye",zone:"Osmaniye",waterType:"Gölet",region:"İçsu",
      summary:"Düziçi Yarbaşı Beldesi Karacaören Baraj Göleti, 4 Temmuz 2025'te 10 bin pullu sazanla balıklandırıldığı resmî olarak doğrulanan; 2026 il av yasağı çerçevesi ve genel yerleşim konumuyla desteklenen Güven C içsu rotasıdır.",
      fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli",vehicleAccess:"Orta",
      amenities:["Yarbaşı/Karacaören yerleşiminde temel yerel ihtiyaç noktaları","Düziçi ilçe merkezinde market, yakıt ve temel hizmetler","Gecelik kalış için Düziçi veya Osmaniye merkezde ruhsatlı seçenekler ayrıca kontrol edilmeli"],
      cautions:["Baraj gövdesi, savak ve sulama/işletme yapıları av noktası değildir","Pin Yarbaşı/Karacaören yerleşimindeki genel planlama noktasıdır; kesin kıyı veya park girişi değildir","Osmaniye İl Tarım ve Orman Müdürlüğü 2026'da il genelinde 1 Mart-31 Mayıs döneminde içsu av yasağı uygulamıştır; sonraki yıllarda güncel il duyurusu yeniden kontrol edilmelidir","Balıklandırma kaydı 2025 yavrularının bugün yasal boya ulaştığını veya av başarısını garanti etmez"],
      lat:37.212679,lng:36.435224,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok. Osmaniye İl Tarım ve Orman Müdürlüğü 4 Temmuz 2025'te Düziçi Yarbaşı Beldesi Karacaören Baraj Göleti'ne 10.000 pullu sazan bırakıldığını rota özelinde doğrular. 26 Şubat 2026 il duyurusu güncel dönem kısıtlarını açıklar. Pin Yarbaşı/Karacaören yerleşimidir; kesin kıyı girişi değildir.",updatedAt:"2026-08-20",publishedAt:"2026-08-20",confidence:"C",
      image:"/images/meralar/ulusal/osmaniye-duzici-karacaoren-baraj-goleti.svg",socialImage:"/images/meralar/ulusal/osmaniye-duzici-karacaoren-baraj-goleti.svg",
      navigationNote:"Koordinat Yarbaşı/Karacaören yerleşiminin genel planlama noktasıdır. Gölete son yaklaşımda baraj yapıları, özel parsel, tarımsal yol ve kapalı bariyerleri gündüz kontrol et; teknik işletme alanına girme.",
      shoreProfile:"Karacaören Baraj Göleti kırsal sulama karakterli küçük bir rezervuardır. Su seviyesine bağlı çamurlu bantlar ve tarımsal kıyı kullanımı oluşabileceğinden, gövde/savak yapılarından uzakta stabil ve geriden güvenli atış yapılabilen bir kıyı bölümü seçilmelidir.",
      transport:"Düziçi ilçe merkezinden Yarbaşı Beldesi/Karacaören yönüne kamusal yol bağlantılarıyla planlama yapılır. Verilen koordinat yerleşim merkezidir; son araç yolu, park, özel parsel ve kıyı geçişi hareket günü yerinde doğrulanmalıdır.",
      crowdNote:"Sulama ve tarımsal kullanım nedeniyle dar yol veya kıyı başka kullanıcılarla paylaşılabilir. Çalışan ekipman, sulama faaliyeti veya hayvan hareketi görülen bölümde takım açılmamalı; güvenli ve açık alternatif kıyı aranmalıdır.",
      longIntro:["Karacaören Baraj Göleti'nin sazan potansiyeli doğrudan rota özelindeki resmî kayda dayanır: Osmaniye İl Tarım ve Orman Müdürlüğü 4 Temmuz 2025'te gölete 10 bin pullu sazan bırakıldığını duyurmuştur.","Osmaniye'nin 26 Şubat 2026 tarihli resmî duyurusu il genelindeki içsu av yasağı dönemini de güncel mevzuatla birlikte açıklar. Bu kanıtlar su ve tür kimliğini güçlendirir, fakat göletin her kıyısını kamusal veya sürekli avlanabilir yapmaz; son erişim ve saha tabelası ayrıca kontrol edilmelidir."],
      planningNotes:["2025'te bırakılan yavruların büyüme durumunu varsayma; güncel boy/adet kurallarını 6/2 Tebliğden kontrol et.","Hareket günü Osmaniye İl Müdürlüğünün en güncel dönem yasağı duyurusunu kontrol et; 2026 tarihini sonraki yıllar için otomatik kural sayma.","Yarbaşı yerleşim pinini park noktası sayma; baraj gövdesi ve teknik yapılardan uzak kamusal son yaklaşımı gündüz doğrula."],
      seasonalNotes:["2025 rota-özel pullu sazan balıklandırması türün bulunma olasılığını güçlü biçimde destekler; güncel stok yoğunluğu ve av başarısı garanti değildir.","İlkbahar dönem yasakları ve sulama sezonundaki su kotu değişimleri kıyı planını etkileyebilir; güncel duyuru ile saha koşulu birlikte değerlendirilmelidir."],
      sources:[{label:"Osmaniye İl Tarım ve Orman Müdürlüğü - Karacaören balıklandırması",url:osmaniyeKaracaoren,note:"4 Temmuz 2025'te Karacaören Baraj Göleti'ne 10.000 pullu sazan bırakıldığını rota özelinde doğrular."},{label:"Osmaniye İl Tarım ve Orman Müdürlüğü - 2026 av yasağı",url:osmaniyeBan2026,note:"26 Şubat 2026 duyurusunda Osmaniye içsularındaki dönem yasağını ve amatör/ticari kapsamı açıklar."},{label:"GeoNames - Yarbaşı/Karacaören",url:yarbasiMap,note:"Yarbaşı yerleşimini Karacaören eş adıyla 37.212679, 36.435224 konumunda gösterir; gölet kıyı girişi değildir."},teblig,tebligDegisiklik],
      researchedAt:"2026-08-20",researchStatus:"Rota özelinde 2025 resmî sazan balıklandırması, 2026 il yasağı, güncel 6/2 çerçevesi ve genel yerleşim konumu çaprazlandı.",researchSummary:"Su ve sazan kimliği güçlü; son kıyı erişimi ve mikro kullanım hakkı saha teyitli değildir.",
      fishEvidence:[carpEvidence("Osmaniye İl Tarım ve Orman Müdürlüğü - Karacaören balıklandırması",osmaniyeKaracaoren,"4 Temmuz 2025'te Karacaören Baraj Göleti'ne 10.000 pullu sazan bırakıldığı resmî kayıttadır; yavruların bugünkü boyu veya av başarısı varsayılmaz.")],accommodationOptions:[],accessEvidence:[{label:"Yarbaşı/Karacaören genel yerleşim konumu",value:"37.212679, 36.435224",sourceUrl:yarbasiMap,note:"Genel planlama noktasıdır; gölet kıyı erişimi veya park izni değildir."}],navigationVerified:false,confidenceProfile:confidenceProfile("C","strong","partial","strong")
    }
  ];

  for(const route of newRoutes){
    if(routeMap.has(route.slug))throw new Error(`20 Ağustos yeni rotası mevcut slug ile çakışıyor: ${route.slug}`);
    const sameName=[...routeMap.values()].find((candidate)=>candidate.province===route.province&&candidate.name.toLocaleLowerCase("tr-TR")===route.name.toLocaleLowerCase("tr-TR"));
    if(sameName)throw new Error(`20 Ağustos yeni rotası aynı ilde mevcut adla çakışıyor: ${route.slug} ↔ ${sameName.slug}`);
    routeMap.set(route.slug,route);
  }
};
