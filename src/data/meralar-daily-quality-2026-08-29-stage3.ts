import type { ConfidenceProfile, EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";
import { dailyQualityNewRoutes20260828 } from "./meralar-daily-quality-2026-08-28-stage3";

const date="2026-08-29";
const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Belgeler/Icerikler/Su%20%C3%9Cr%C3%BCnleri%20Avc%C4%B1l%C4%B1%C4%9F%C4%B1/6-2-NOLU-TEBLIG.pdf",note:"Güncel amatör içsu avcılığı için dönem, boy, adet, yöntem ve alan kısıtlarının ana çerçevesidir; il kararları ve saha tabelaları daha sıkı olabilir."};
const dsi:ResearchSource={label:"DSİ Genel Müdürlüğü - Malatya Darende Ayvalı Göleti ve Sulaması",url:"https://www.dsi.gov.tr/Haber/Detay/4420",note:"Darende Ayvalı Göleti'nin resmî tesis kimliğini, depolama hacmini ve sulama amacını doğrular."};
const tarim:ResearchSource={label:"Malatya İl Tarım ve Orman Müdürlüğü - 2023 balıklandırma çalışmaları",url:"https://malatya.tarimorman.gov.tr/Haber/838/",note:"Darende Ayvalı Göleti'ni sazan yavrusu bırakılan sular arasında rota adıyla listeler; bu tür olasılığıdır, av garantisi değildir."};
const local:ResearchSource={label:"Darende Haber - Ayvalı Göleti su tutmaya başladı",url:"https://darendehaber.com/haber/ayvali-goleti-su-tutmaya-basladi-4161.html",note:"Tesisin su tutmaya başladığını ve Ayvalı Mahallesi bağlamını yerel destekleyici kaynak olarak kaydeder; kamusal mikro kıyı izni değildir."};
const place:ResearchSource={label:"Ayvalı Mahallesi genel yerleşim konumu",url:"https://harita.org/malatya/darende/ayvali-mahallesi/",note:"Yalnız Ayvalı yerleşiminin genel yaklaşım koordinatı için ikincil referanstır; gölet kıyısı, park veya olta cebi değildir."};

const ayvaliEvidence:FishEvidence={name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü olasılık · rota özelinde resmî balıklandırma kaydı",sourceLabel:tarim.label,sourceUrl:tarim.url,note:"2023 resmî balıklandırma kaydı Ayvalı Göleti'ne sazan bırakıldığını doğrular; güncel stok veya yakalama garantisi değildir.",recordCount:null,distanceKm:null};
const ayvaliProfile:ConfidenceProfile={model:"evidence-v1",overall:"C",identity:{level:"strong",label:"Resmî rota kimliği",note:"DSİ Ayvalı Göleti'ni adı, ilçe, depolama ve sulama amacıyla rota özelinde doğrular."},legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ uygulanır; belirli bir kıyının sürekli amatör ava açık olduğu sonucu çıkarılmaz."},access:{level:"partial",label:"Genel yerleşim yaklaşımı",note:"Ayvalı Mahallesi yalnız planlama başlangıcıdır; son kıyı girişi, park ve mülkiyet sınırı doğrulanmış değildir."},species:{level:"strong",label:"Rota özelinde tür olasılığı",note:"2023 resmî balıklandırma kaydı sazanı rota adıyla doğrular; av garantisi değildir."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, teknik tesis, bariyer, özel parsel ve güncel tabela hareket günü kontrol edilmelidir."},reviewedAt:date};

const carryForward=(slug:string)=>{
  const route=dailyQualityNewRoutes20260828.find((item)=>item.slug===slug);
  if(!route)throw new Error(`29 Ağustos Stage 3 kaynak rotası bulunamadı: ${slug}`);
  const visual=`/images/meralar/ulusal/${slug}.svg`;
  return {...route,updatedAt:date,publishedAt:date,researchedAt:date,image:visual,socialImage:visual,confidenceProfile:route.confidenceProfile?{...route.confidenceProfile,reviewedAt:date}:route.confidenceProfile} as EnrichedMera;
};

const ayvali:EnrichedMera={
  slug:"ulusal-malatya-darende-ayvali-goleti",name:"Ayvalı Göleti",district:"Darende",province:"Malatya",zone:"Malatya",waterType:"Gölet",region:"İçsu",
  summary:"Darende Ayvalı Göleti; DSİ'nin rota özelindeki tesis kaydı, Malatya İl Tarımın 2023 sazan balıklandırması ve yerel su tutma kaydıyla çaprazlanan, mikro kıyı erişimi doğrulanmadığı için yalnız genel yerleşim yaklaşımıyla yayımlanan Güven C planlama rotasıdır.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Ayvalı yerleşiminde temel kırsal hizmet bağlamı","Darende ilçe merkezinde temel ihtiyaçlar"],
  cautions:["Gölet gövdesi, savak, vana ve servis yapıları av noktası değildir","Genel pin Ayvalı Mahallesi yaklaşımını temsil eder; kesin gölet kıyısı, park veya kamusal geçiş değildir","Tarım parselleri ve teknik servis yolları izinsiz geçiş için kullanılmamalıdır","Su kotu düştüğünde yumuşak çamur ve kıyı kırılması riski artabilir"],
  lat:38.7480004,lng:37.587844,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok. DSİ Ayvalı Göleti'nin tesis kimliği ve sulama işlevini doğrular. Malatya İl Tarım 2023 balıklandırmasında göleti adıyla sazan salınan sular arasında listeler. Koordinat göletin mikro konumu değil, Ayvalı Mahallesi genel yaklaşımıdır.",updatedAt:date,publishedAt:date,confidence:"C",
  image:"/images/meralar/ulusal/ulusal-malatya-darende-ayvali-goleti.svg",socialImage:"/images/meralar/ulusal/ulusal-malatya-darende-ayvali-goleti.svg",navigationVerified:false,
  navigationNote:"Pin Ayvalı Mahallesi'nin genel yaklaşım merkezidir; gölet kıyısı, park alanı, tarla yolu veya kesin olta noktası değildir.",shoreProfile:"Sulama göletlerinde kıyı çizgisi mevsim ve sulama çekimine göre değişebilir. Yumuşak taban, dikleşen şev ve teknik yapılara yakın bölümler güvenli kıyı kabul edilmemelidir.",transport:"Darende'den Ayvalı Mahallesi genel yaklaşımı planlama başlangıcıdır; son kıyı yolu, park, özel parsel ve servis yolu açık kaynakla kesinleştirilmediğinden mikro yol tarifi yayımlanmaz.",crowdNote:"Sulama ve tarımsal çalışma önceliklidir; teknik ekipman, araç veya tarımsal faaliyet bulunan dar kıyı bölümünde olta açılmamalıdır.",
  longIntro:["Ayvalı Göleti için C seviyesinin temelini üç ayrı doğrulama katmanı oluşturur: DSİ su yapısının kimliğini ve kullanım amacını, Malatya İl Tarım ise 2023 yılında gölete sazan bırakıldığını doğrudan kaydeder.","Bu veriler belirli bir kıyı cebinin kamuya açık olduğu veya sürekli amatör av izni bulunduğu anlamına gelmez; son giriş, mülkiyet, su seviyesi, teknik işletme sınırı ve güncel av kuralları ayrıca kontrol edilir."],planningNotes:["6/2 Tebliğ ve güncel Malatya İl Tarım duyurularını hareket günü yeniden kontrol et.","Gölet gövdesi, savak, vana ve servis yollarından uzak kal; bariyerleri kamusal geçiş kabul etme.","Mahalle pini yalnız yaklaşım içindir; kesin kıyı veya park noktası olarak kullanma."],seasonalNotes:["2023 sazan balıklandırması türün bulunma olasılığını destekler; güncel stok ve av başarısı garanti edilmez.","Sulama döneminde su kotu ve kıyı zemini kısa sürede değişebilir."],
  sources:[dsi,tarim,local,teblig,place],researchedAt:date,researchStatus:"DSİ rota kimliği, İl Tarım rota özelindeki sazan balıklandırması ve yerel su tutma kaydı çaprazlandı; mikro erişim saha teyitli değildir.",researchSummary:"Su kimliği ve sazan olasılığı güçlü; kamusal son kıyı girişi ve park belirsiz olduğundan genel bölge hassasiyeti korunur.",fishEvidence:[ayvaliEvidence],accommodationOptions:[],accessEvidence:[{label:"Ayvalı genel yaklaşımı",value:"Ayvalı Mahallesi genel yerleşim planlama noktası",sourceUrl:place.url,note:"Kesin gölet kıyısı, park veya kamusal yol değildir; son yaklaşım saha ve mülkiyet kontrolü gerektirir."}],confidenceProfile:ayvaliProfile
};

export const dailyQualityNewRoutes20260829:EnrichedMera[]=[carryForward("ulusal-malatya-kuluncak-sofular-goleti"),carryForward("ulusal-malatya-kuluncak-bicir-goleti"),ayvali];

export const applyDailyQualityStage3_20260829=(routeMap:Map<string,EnrichedMera>)=>{
  for(const route of dailyQualityNewRoutes20260829){
    if(routeMap.has(route.slug))throw new Error(`29 Ağustos yeni rota duplicate: ${route.slug}`);
    routeMap.set(route.slug,route);
  }
  return routeMap;
};
