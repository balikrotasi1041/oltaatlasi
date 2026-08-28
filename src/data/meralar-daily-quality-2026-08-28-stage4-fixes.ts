import type { ConfidenceProfile, EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";

const date="2026-08-28";
const dsi:ResearchSource={label:"DSİ Genel Müdürlüğü - Malatya Darende Ayvalı Göleti ve Sulaması",url:"https://www.dsi.gov.tr/Haber/Detay/4420",note:"Darende Ayvalı Göleti'nin resmî tesis kimliğini, 32 m gövde yüksekliğini, 870 bin m³ depolama hacmini ve 1.690 dekar sulama amacını doğrular."};
const tarim:ResearchSource={label:"Malatya İl Tarım ve Orman Müdürlüğü - 2023 balıklandırma çalışmaları",url:"https://malatya.tarimorman.gov.tr/Haber/838/",note:"26 Eylül 2023 programında Darende Ayvalı Göleti'ni sazan yavrusu bırakılan sular arasında rota adıyla listeler; bu kayıt tür olasılığıdır, av garantisi değildir."};
const local:ResearchSource={label:"Darende Haber - Ayvalı Göleti su tutmaya başladı",url:"https://darendehaber.com/haber/ayvali-goleti-su-tutmaya-basladi-4161.html",note:"2017'de tesisin su tutmaya başladığını ve Ayvalı Mahallesi bağlamını yerel destekleyici kaynak olarak kaydeder; kamusal mikro kıyı izni değildir."};
const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Belgeler/Icerikler/Su%20%C3%9Cr%C3%BCnleri%20Avc%C4%B1l%C4%B1%C4%9F%C4%B1/6-2-NOLU-TEBLIG.pdf",note:"Güncel amatör içsu avcılığı için dönem, boy, adet, yöntem ve alan kısıtlarının ana çerçevesidir; il kararları ve saha tabelaları daha sıkı olabilir."};
const place:ResearchSource={label:"Ayvalı Mahallesi genel yerleşim konumu",url:"https://harita.org/malatya/darende/ayvali-mahallesi/",note:"Yalnız Ayvalı yerleşiminin genel yaklaşım koordinatı için ikincil harita referansıdır. DSİ kaynağı göletin Ayvalı yerleşimi çevresindeki tesis kimliğini doğrular; bu pin gölet kıyısı, park veya olta cebi değildir."};

const fishEvidence:FishEvidence={name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü olasılık · rota özelinde resmî balıklandırma kaydı",sourceLabel:tarim.label,sourceUrl:tarim.url,note:"2023 resmî balıklandırma kaydı Darende Ayvalı Göleti'ne sazan yavrusu bırakıldığını doğrular. Geçmiş balıklandırma güncel yakalama, stok yoğunluğu veya av izni garantisi değildir.",recordCount:null,distanceKm:null};
const profile:ConfidenceProfile={
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Resmî rota kimliği",note:"DSİ Darende Ayvalı Göleti'ni adı, ilçe, depolama ve sulama amacıyla rota özelinde doğrular."},
  legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ uygulanır; belirli bir kıyının sürekli amatör ava açık olduğu sonucu çıkarılmaz ve güncel il kararları/saha tabelaları üstündür."},
  access:{level:"partial",label:"Genel yerleşim yaklaşımı",note:"Ayvalı Mahallesi yalnız planlama başlangıcıdır. Son kıyı girişi, park, tarla/servis yolu ve mülkiyet sınırı masa başında doğrulanmış değildir."},
  species:{level:"strong",label:"Rota özelinde tür olasılığı",note:"Malatya İl Tarımın 2023 balıklandırma kaydı sazanı rota adıyla doğrular; av garantisi değildir."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, çamurlu kıyı, teknik tesis, bariyer, özel parsel ve güncel tabela hareket günü kontrol edilmelidir."},
  reviewedAt:date,
};

const ayvali:EnrichedMera={
  slug:"ulusal-malatya-darende-ayvali-goleti",name:"Ayvalı Göleti",district:"Darende",province:"Malatya",zone:"Malatya",waterType:"Gölet",region:"İçsu",
  summary:"Darende Ayvalı Göleti; DSİ'nin rota özelindeki tesis kaydı, Malatya İl Tarımın 2023 sazan balıklandırması ve yerel su tutma kaydıyla çaprazlanan, mikro kıyı erişimi doğrulanmadığı için yalnız genel yerleşim yaklaşımıyla yayımlanan Güven C planlama rotasıdır.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Ayvalı yerleşiminde temel kırsal hizmet bağlamı","Darende ilçe merkezinde yakıt, erzak ve diğer temel ihtiyaçlar"],
  cautions:["Gölet gövdesi, savak, vana ve servis yapıları av noktası değildir","Genel pin Ayvalı Mahallesi yaklaşımını temsil eder; kesin gölet kıyısı, park veya kamusal geçiş değildir","Tarım parselleri ve teknik servis yolları izinsiz geçiş için kullanılmamalıdır","Su kotu düştüğünde yumuşak çamur ve kıyı kırılması riski artabilir"],
  lat:38.7480004,lng:37.587844,locationPrecision:"Genel bölge",
  verification:"Masa başı doğrulama; saha teyidi yok. DSİ Darende Ayvalı Göleti'nin tesis kimliği ve sulama işlevini doğrular. Malatya İl Tarım 2023 balıklandırmasında göleti adıyla sazan salınan sular arasında listeler. Koordinat göletin mikro konumu değil, Ayvalı Mahallesi genel yaklaşımıdır.",updatedAt:date,publishedAt:date,confidence:"C",
  image:"/images/meralar/ulusal/malatya-darende-ayvali-goleti.svg",socialImage:"/images/meralar/ulusal/malatya-darende-ayvali-goleti.svg",navigationVerified:false,
  navigationNote:"Pin Ayvalı Mahallesi'nin genel yaklaşım merkezidir; gölet kıyısı, park alanı, tarla yolu veya kesin olta noktası değildir. DSİ kaydı göletin Darende/Ayvalı bağlamını doğrular, son yaklaşım hareket günü ayrıca kontrol edilmelidir.",
  shoreProfile:"Sulama göletlerinde kıyı çizgisi mevsim ve sulama çekimine göre değişebilir. Yumuşak taban, dikleşen şev ve teknik yapılara yakın bölümler güvenli kıyı kabul edilmemelidir.",
  transport:"Darende'den Ayvalı Mahallesi genel yaklaşımı planlama başlangıcıdır. DSİ ve yerel kaynaklar göleti Ayvalı bağlamında doğrular; son kıyı yolu, park, özel parsel ve servis yolu açık kaynakla kesinleştirilmediğinden mikro yol tarifi yayımlanmaz.",
  crowdNote:"Sulama ve tarımsal çalışma önceliklidir; teknik ekipman, araç veya tarımsal faaliyet bulunan dar kıyı bölümünde olta açılmamalıdır.",
  longIntro:["Ayvalı Göleti için C seviyesinin temelini üç ayrı doğrulama katmanı oluşturur: DSİ su yapısının kimliğini ve kullanım amacını, Malatya İl Tarım ise 2023 yılında gölete sazan bırakıldığını doğrudan kaydeder.","Bu veriler belirli bir kıyı cebinin kamuya açık olduğu veya sürekli amatör av izni bulunduğu anlamına gelmez. Bu nedenle rota mahalle ölçeğinde genel konumla yayımlanır; son giriş, mülkiyet, su seviyesi, teknik işletme sınırı ve güncel av kuralları hareket günü ayrıca kontrol edilir."],
  planningNotes:["6/2 Tebliğ ve güncel Malatya İl Tarım duyurularını hareket günü yeniden kontrol et.","Gölet gövdesi, savak, vana ve servis yollarından uzak kal; bariyerleri kamusal geçiş kabul etme.","Mahalle pini yalnız yaklaşım içindir; kesin kıyı veya park noktası olarak kullanma."],
  seasonalNotes:["2023 sazan balıklandırması türün bulunma olasılığını destekler; güncel stok ve av başarısı garanti edilmez.","Sulama döneminde su kotu ve kıyı zemini kısa sürede değişebilir."],
  sources:[dsi,tarim,local,teblig,place],researchedAt:date,
  researchStatus:"DSİ rota kimliği, İl Tarım rota özelindeki sazan balıklandırması ve yerel işletmeye alma/su tutma kaydı çaprazlandı; mikro erişim saha teyitli değildir.",
  researchSummary:"Su kimliği ve sazan olasılığı güçlü; kamusal son kıyı girişi, park ve tarla/servis yolu belirsiz olduğundan genel bölge hassasiyeti korunur.",
  fishEvidence:[fishEvidence],accommodationOptions:[],
  accessEvidence:[{label:"Ayvalı genel yaklaşımı",value:"Ayvalı Mahallesi genel yerleşim planlama noktası",sourceUrl:place.url,note:"Kesin gölet kıyısı, park veya kamusal yol değildir; son yaklaşım saha ve mülkiyet kontrolü gerektirir."}],
  confidenceProfile:profile,
};

const alignFishEvidence=(route:EnrichedMera)=>{
  const wanted=new Set(route.fish.map((name)=>name.toLocaleLowerCase("tr-TR")));
  const byName=new Map<string,FishEvidence>();
  for(const evidence of route.fishEvidence||[]){
    const key=evidence.name.toLocaleLowerCase("tr-TR");
    if(wanted.has(key))byName.set(key,evidence);
  }
  return route.fish.map((name)=>byName.get(name.toLocaleLowerCase("tr-TR"))).filter((item):item is FishEvidence=>Boolean(item));
};

export const applyDailyQualityStage4Fixes20260828=(routeMap:Map<string,EnrichedMera>)=>{
  // Sürgü Baraj Gölü, 17 Ağustos Ankara-500 km paketindeki Sürgü Çayı kaydıyla aynı su kimliğine çakıştığı için yeni rota kotasından çıkarılır.
  routeMap.delete("ulusal-malatya-dogansehir-surgu-baraj-golu");
  if(routeMap.has(ayvali.slug))throw new Error(`28 Ağustos Ayvalı yeni rota zaten mevcut: ${ayvali.slug}`);
  routeMap.set(ayvali.slug,ayvali);

  // 27 Ağustos yükseltmesinde fish listesi yalnız bilimsel olarak doğrulanan sazana daraltılmıştı; eski D taslağındaki
  // bölgesel fishEvidence dizisi taşınmıştı. Kullanıcı yüzündeki listeyi rota-özel kanıtla birebir eşleştir.
  const ataturkSlug="ankara-500km-adiyaman-ataturk-baraj-golu";
  const ataturk=routeMap.get(ataturkSlug);
  if(!ataturk)throw new Error(`28 Ağustos Atatürk kanıt hizalama hedefi yok: ${ataturkSlug}`);
  const aligned=alignFishEvidence(ataturk);
  if(aligned.length!==ataturk.fish.length)throw new Error(`28 Ağustos Atatürk tür kanıtı eksik: ${aligned.length}/${ataturk.fish.length}`);
  routeMap.set(ataturkSlug,{...ataturk,fishEvidence:aligned});
  return routeMap;
};
