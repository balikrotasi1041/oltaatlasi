import type { EnrichedMera, ConfidenceProfile, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

const date="2026-09-05";
const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"2024-2028 genel amatör avcılık çerçevesidir; il/su özelindeki karar, kiralama, koruma ve saha kısıtları ayrıca uygulanır."};
const s=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const fishEv=(source:ResearchSource,name="Sazan",scientificName="Cyprinus carpio"):FishEvidence=>({name,scientificName,evidenceLevel:"Güçlü olasılık · rota özelinde resmî balıklandırma",sourceLabel:source.label,sourceUrl:source.url,note:"Geçmiş balıklandırma türün bulunabileceğine dair olasılık kanıtıdır; güncel stok yoğunluğu veya av garantisi değildir.",recordCount:null,distanceKm:null});
const accessEv=(label:string,value:string,source:ResearchSource,note:string):AccessEvidence=>({label,value,sourceUrl:source.url,note});
const profile=(identity:string,access:string):ConfidenceProfile=>({model:"evidence-v1",overall:"C",identity:{level:"strong",label:"Rota özelinde resmî kimlik",note:identity},legal:{level:"partial",label:"Güncel mevzuat + rota kullanımı",note:"Genel 6/2 Tebliğ rota özelindeki resmî kullanım/balıklandırma kayıtlarıyla birlikte değerlendirilmiştir. Belirli kıyı cebinin sürekli açık olduğu varsayılmaz."},access:{level:"partial",label:"Genel erişim bağlamı",note:access},species:{level:"strong",label:"Rota özelinde tür kanıtı",note:"Resmî balıklandırma kaydı sazan varlığı için güçlü olasılık kanıtıdır; güncel av başarısı anlamına gelmez."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Son park, özel parsel, bariyer, kıyı zemini, su kotu ve güncel tabela hareket günü yerinde doğrulanmalıdır."},reviewedAt:date});

const erganiStock=s("Diyarbakır İl Tarım ve Orman Müdürlüğü - balıklandırma","https://diyarbakir.tarimorman.gov.tr/Haber/958/4-Yilda-Barajlara-Ve-Goletlere-14-Milyonu-Askin-Balik-Yavrusu-Birakildi","Ergani Barajı rota adıyla sazan balıklandırma kaydında yer alır; çalışma balıkçılığı destekleme amacıyla açıklanmıştır.");
const erganiDsi=s("Tarım ve Orman Bakanlığı / DSİ - Ergani Barajı","https://www.tarimorman.gov.tr/Haber/4099/Ergani-Barajinda-Mutlu-Son","Ergani Barajının Diyarbakır'da DSİ tarafından inşa edilmiş aktif sulama barajı kimliğini resmî olarak doğrular.");
const erganiAcademic=s("Mediterranean Fisheries and Aquaculture Research - Ergani Baraj Gölü","https://dergipark.org.tr/en/pub/medfar/article/1684143","2025 hakemli çalışma Ergani Baraj Gölünü aylık örneklemeyle rota özelinde bağımsız akademik aileden doğrular.");
const erganiMap=s("Açık harita - Ergani Barajı genel konumu","https://wikimapia.org/35224404/tr/Ergani-Bo%C4%9Faz-Baraj%C4%B1","Yalnız genel konum destekleyicisidir; kıyı girişi, park veya mülkiyet izni değildir.");

const eskStock=s("Eskişehir İl Tarım ve Orman Müdürlüğü - rota özelinde balıklandırma","https://eskisehir.tarimorman.gov.tr/Haber/335/Ilimizde-Baliklandirma-Calismalari","Kızılcaören ve Günyüzü-1 göletlerini rota adıyla sazan balıklandırma listesinde sayar ve seçilen suların yetiştiriciliğe açılmamış, amatör balıkçıların yararlanabildiği kaynaklar olduğunu bildirir.");
const esk2015=s("Eskişehir İl Tarım ve Orman Müdürlüğü - Günyüzü-1 balıklandırması","https://eskisehir.tarimorman.gov.tr/Haber/217/Ilimizde-Baliklandirma-Calismalari","Günyüzü-1 Göletini ayrıca önceki balıklandırma programında rota adıyla doğrular.");
const eskLease=s("Eskişehir İl Tarım ve Orman Müdürlüğü - Su Ürünleri Gölet Kiralamaları","https://eskisehir.tarimorman.gov.tr/Duyuru/60/Su-Urunleri-Golet-Kiralamalari","Kızılcaören ve Günyüzü-1 dahil listelenen göletlerin ilan tarihindeki kiralama durumunu verir; güncel mikro mülkiyet/erişim garantisi değildir.");
const dsi=s("DSİ 3. Bölge - İşletmedeki Sulama Tesisleri","https://bolge03.dsi.gov.tr/Sayfa/Detay/899","Beylikova Kızılcaören Göletini işletmedeki sulama tesisi olarak kurumsal envanterde doğrular.");
const kizilMap=s("OpenStreetMap tabanlı Kızılcaören genel konumu","https://mapcarta.com/12960272","Beylikova Kızılcaören genel planlama çevresini gösterir; mikro kıyı veya park noktası değildir.");
const gunyuzuMap=s("OpenStreetMap tabanlı Günyüzü Göleti genel çevresi","https://mapcarta.com/N9379331245","Günyüzü Göleti genel çevresini gösterir; yayımlanan pin yalnız genel planlamadır.");

const common=(slug:string,name:string,district:string,province:string,zone:string,lat:number,lng:number,image:string,sources:ResearchSource[],mapSource:ResearchSource,summary:string,identity:string,access:string,waterType:EnrichedMera["waterType"]="Gölet",region="İç Anadolu"):EnrichedMera=>({
  slug,name,district,province,zone,waterType,region,summary,
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:[`${district} ilçe merkezindeki temel hizmetler`,`Genel yerleşim yaklaşımı`],
  cautions:["Pin genel planlama bölgesidir; kesin kıyı girişi, park yeri veya kamusal parsel göstermez.","Sulama/işletme yapıları, savak, dolgu gövde ve teknik tesisler av noktası kabul edilmez.","Sazan balıklandırması tür olasılığı kanıtıdır; av garantisi değildir. Güncel 6/2 Tebliğ, il kararları ve saha tabelaları kontrol edilmelidir."],
  lat,lng,locationPrecision:"Genel bölge",verification:"Rota özelinde resmî su/balıklandırma kaydı + bağımsız genel konum/erişim bağlamı",updatedAt:date,publishedAt:date,confidence:"C",image,socialImage:image,
  navigationNote:"Gösterilen koordinat son kıyı cebine yönlendirme değildir. Son yaklaşım, yol açıklığı, özel parsel, park, bariyer ve güvenlik sınırları hareket günü yerinde kontrol edilmelidir.",
  shoreProfile:"Kırsal içsu rotalarında su kotu, çamur, gevşek şev ve işletme sınırları mevsime göre değişebilir. Yalnız sahada açıkça güvenli ve kamusal olduğu görülen kıyı kesimleri değerlendirilmelidir.",
  transport:`${district} üzerinden genel yerleşim/su çevresi planlanabilir. Mikro yol, araçla kıyıya iniş ve park cebi doğrulanmadığından navigasyon son kilometre için kesin kabul edilmemelidir.`,
  crowdNote:"İçsu rotalarında uygun kıyı alanı su seviyesi, tarımsal faaliyet ve yerel kullanım nedeniyle sınırlı olabilir.",
  longIntro:[`${name}, rota kimliği ve sazan olasılığı resmî kayıtlarla desteklenen, mikro kıyı erişimi kesinleştirilmeden Güven C düzeyinde yayımlanan bir içsu planlama rotasıdır.`,`Güven C, su gövdesinin her kıyısının sürekli açık veya avlanmaya uygun olduğu anlamına gelmez. Güncel mevzuat, özel mülkiyet, işletme güvenliği ve saha tabelaları hareket günü ayrıca kontrol edilmelidir.`],
  planningNotes:["Güncel 6/2 Tebliğ ve varsa il/ilçe duyuruları hareket öncesi kontrol edilir.","Teknik su yapıları ve işletme sahalarından güvenli mesafe korunur.","Kamp/gecelik kalış izni varsayılmaz; ilçe merkezindeki konaklama ve hizmetler tercih edilir."],
  seasonalNotes:["Geçmiş veya güncel sazan balıklandırması türün bulunabileceğine dair kalıcı olasılık kanıtıdır; güncel stok yoğunluğu veya yakalama başarısı garantisi değildir.","Sulama sezonunda su seviyesi ve kıyı zemini hızla değişebilir."],
  sources:[...sources,teblig],researchedAt:date,researchStatus:"Rota özelinde çok kaynaklı masa başı doğrulama tamamlandı; mikro erişim genel bölge seviyesinde tutuldu.",researchSummary:summary,
  fishEvidence:[fishEv(sources[0])],accommodationOptions:[],
  accessEvidence:[accessEv("Genel konum",zone,mapSource,"İkincil harita yalnız genel planlama bölgesini destekler; mülkiyet veya kıyı giriş izni değildir.")],navigationVerified:false,
  confidenceProfile:profile(identity,access)
});

export const yeniMeralar20260905:EnrichedMera[]=[
  common("diyarbakir-ergani-ergani-baraj-golu","Ergani Baraj Gölü","Ergani","Diyarbakır","Ergani Barajı genel bölge",38.26472,39.68667,"/images/meralar/ulusal/diyarbakir-ergani-ergani-baraj-golu.svg",[erganiStock,erganiDsi,erganiAcademic,erganiMap],erganiMap,"Ergani Baraj Gölü, resmî sazan balıklandırması, DSİ sulama barajı kimliği ve 2025 hakemli akademik çalışma ile çaprazlanan Güven C rotasıdır.","İl Tarım balıklandırması, Tarım ve Orman/DSİ baraj kaydı ve hakemli Ergani Baraj Gölü çalışması aynı su gövdesini doğrular.","Balıklandırma amacı balıkçılık kullanımını genel düzeyde destekler; son kıyı cebi, park ve mülkiyet sınırı saha teyitli değildir.","Baraj","Güneydoğu Anadolu"),
  common("eskisehir-beylikova-kizilcaoren-goleti","Kızılcaören Göleti","Beylikova","Eskişehir","Kızılcaören genel bölge",39.63287,31.36453,"/images/meralar/ulusal/eskisehir-beylikova-kizilcaoren-goleti.svg",[eskStock,dsi,eskLease,kizilMap],kizilMap,"Kızılcaören Göleti, resmî sazan balıklandırması, DSİ işletme envanteri ve kiralama bağlamıyla doğrulanan Güven C rotasıdır.","İl Tarım balıklandırma kaydı ile DSİ işletme envanteri Beylikova Kızılcaören kimliğini destekler.","İl Tarım balıklandırma programı amatör kullanım bağlamı sağlar; eski kiralama kaydı güncel mülkiyet garantisi değildir ve mikro kıyı erişimi doğrulanmış sayılmaz."),
  common("eskisehir-gunyuzu-gunyuzu-1-goleti","Günyüzü-1 Göleti","Günyüzü","Eskişehir","Günyüzü genel gölet çevresi",39.37929,31.81662,"/images/meralar/ulusal/eskisehir-gunyuzu-gunyuzu-1-goleti.svg",[eskStock,esk2015,eskLease,gunyuzuMap],gunyuzuMap,"Günyüzü-1 Göleti, tekrarlanan resmî sazan balıklandırma kayıtları ve amatör kullanım/kiralama bağlamıyla doğrulanan Güven C rotasıdır.","İl Tarım balıklandırma kayıtları Günyüzü-1 adını ilçe düzeyinde tekrarlar; genel su yapısı çevresi bağımsız harita verisiyle eşleştirilir.","İl Tarımın amatör balıkçıların yararlanabildiği kaynak seçimi kaydı kamusal genel kullanım bağlamı sağlar; son kıyı girişi saha teyitli değildir.")
];

export const applyDailyQuality20260905Stage3=(routeMap:Map<string,EnrichedMera>)=>{
  for(const route of yeniMeralar20260905){
    if(routeMap.has(route.slug))throw new Error(`5 Eylül yeni rota slug çakışması: ${route.slug}`);
    const normalized=route.name.toLocaleLowerCase("tr-TR").replace(/[^a-z0-9çğıöşü]+/g," ").trim();
    const duplicate=[...routeMap.values()].find((existing)=>existing.name.toLocaleLowerCase("tr-TR").replace(/[^a-z0-9çğıöşü]+/g," ").trim()===normalized&&existing.province===route.province);
    if(duplicate)throw new Error(`5 Eylül yeni rota ad/il duplicate: ${route.name} -> ${duplicate.slug}`);
    routeMap.set(route.slug,route);
  }
  return routeMap;
};