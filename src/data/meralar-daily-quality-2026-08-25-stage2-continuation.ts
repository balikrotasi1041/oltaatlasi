import type { EnrichedMera, ConfidenceProfile, ResearchSource } from "./meralar-tumu-core";

const reviewedAt="2026-08-25" as const;
const teblig:ResearchSource={label:"Tarım ve Orman Bakanlığı - 6/2 Amatör Avcılık Tebliği ve değişiklikleri",url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",note:"Güncel amatör avcılık çerçevesi; rota özelindeki işletme, kiralama, koruma, saha tabelası ve yerel kararlar ayrıca uygulanır."};
const uniq=(sources:ResearchSource[])=>[...new Map(sources.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

const derinozKtb:ResearchSource={label:"Amasya İl Kültür ve Turizm Müdürlüğü - Barajlar",url:"https://amasya.ktb.gov.tr/TR-59470/barajlar.html",note:"Derinöz Barajını Suluova/Derinöz Çayı üzerinde sulama amaçlı resmî su yapısı olarak doğrular."};
const derinozValilik:ResearchSource={label:"Amasya Valiliği - Derinöz Barajı saha ziyareti",url:"https://www.amasya.gov.tr/vali-dr-osman-varol-derinoz-baraji-mevkisinde-incelemelerde-bulundu",note:"Baraj çevresinde yürüyüş ve piknik yapan vatandaşları kaydeder; kamusal kullanım bağlamını destekler fakat mikro kıyı av izni değildir."};
const derinozAkademik:ResearchSource={label:"Amasya'nın Ekoturizm Potansiyeli - Derinöz olta balıkçılığı",url:"https://www.researchgate.net/publication/338279512_AMASYA%27NIN_EKOTURIZM_POTANSIYELININ_BELIRLENMESI_UZERINE_BIR_ARASTIRMA",note:"Derinöz Barajını olta balıkçılığına uygun alanlar arasında sayar; sazan, turna ve yayın balığı olasılığını bölgesel/rota bağlamında destekler."};

const filyosVisit:ResearchSource={label:"Visit Zonguldak - Filyos Çayı",url:"https://www.visitzonguldak.com/tr/rota-sec",note:"Filyos Çayını Çaycuma-Zonguldak koridorunda tanımlar ve olta balıkçılığını uygun rekreasyon faaliyetleri arasında sayar."};
const filyosWater:ResearchSource={label:"DergiPark - Filyos Nehri fiziksel su kalitesi",url:"https://dergipark.org.tr/tr/pub/jaes/article/636576",note:"Filyos Nehrinin Devrek ve Yenice birleşiminden Çaycuma Vadisi üzerinden Karadeniz'e uzanan fiziksel nehir kimliğini akademik olarak doğrular."};
const filyosFish:ResearchSource={label:"Zootaxa - Filyos drenajı Alburnoides turani",url:"https://www.mapress.com/zt/article/view/zootaxa.4763.3.6",note:"Filyos Nehri drenajından tanımlanan tatlısu balığı kaydıdır; tür varlığını havza düzeyinde bilimsel olarak doğrular, kıyı av garantisi değildir."};
const filyosSecondary:ResearchSource={label:"Filyos River biotope kaydı - saha tür listesi",url:"https://biotope-aquarium.info/aquariums/sedimented-and-vegetation-areas-of-filyos-river-zonguldak-turkey-135-l/",note:"Filyos Nehrinde Cyprinus carpio dahil saha temelli tür listesi sunan ikincil kaynaktır; resmî kaynak sayılmaz."};

const urunluDsi:ResearchSource={label:"DSİ 8. Bölge - Olur Ürünlü Göleti",url:"https://bolge08.dsi.gov.tr/Sayfa/Detay/854",note:"Tesisi resmî olarak Erzurum/Olur Ürünlü Göleti ve sulama göleti olarak doğrular."};
const urunluSaglik:ResearchSource={label:"Erzurum İl Sağlık Müdürlüğü - Olur coğrafyası",url:"https://oluridh.saglik.gov.tr/TR-169752/cografi-yapi-ve-nufusu.html",note:"Ürünlü Göletini yaklaşık 2200 m rakımda ve kırmızı benekli alabalık görülen su olarak resmî yerel kaynakta kaydeder."};
const urunluStock:ResearchSource={label:"TRT Haber / AA - Ürünlü Göleti alabalık balıklandırması",url:"https://www.trthaber.com/haber/guncel/erzurumda-15-bin-kirmizi-benekli-alabalik-yavrusu-golete-birakildi-514648.html",note:"Olur Kaymakamlığı koordinasyonundaki projede Ürünlü Göletine 15 bin kırmızı benekli alabalık yavrusu bırakıldığını aktarır; geçmiş balıklandırma av garantisi değildir."};

const malatyaStock2022:ResearchSource={label:"Malatya İl Tarım ve Orman - 2022 balıklandırma",url:"https://malatya.tarimorman.gov.tr/Haber/779/Ilimizde-Barajlarda-Ve-Goletlerde-Baliklandirma-Calismalarimiz-Basladi",note:"Kapıkaya, Sultansuyu, Beylerderesi ve Orduzu dahil adı verilen Malatya sularında yavru sazan balıklandırmasını rota özelinde kaydeder."};
const malatyaStock2023:ResearchSource={label:"Malatya İl Tarım ve Orman - 2023 balıklandırma",url:"https://malatya.tarimorman.gov.tr/Haber/838/Ilimizde-Baliklandirma-Calismalari-Yapildi",note:"Battalgazi Kapıkaya Baraj Gölü dahil adı verilen sulara yavru sazan bırakıldığını rota özelinde doğrular."};
const malatyaCevre2020:ResearchSource={label:"Malatya İl Çevre Durum Raporu 2020",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/2020_malatya_-cdr_son-20210726112324.pdf",note:"Kapıkaya/Turgut Özal, Sultansuyu ve Orduzu su yapılarını resmî il çevre envanterinde doğrular."};
const malatyaValilikRisk:ResearchSource={label:"Malatya Valiliği / DSİ - baraj ve gölet güvenlik duyurusu",url:"https://www.malatya.gov.tr/dsi-92-sube-mudurlugunun-baraj-golet-ve-sulama-tesislerinde-bogulma-olaylarinin-onlenmesi-hakkinda-duyurusu",note:"Kapıkaya, Sultansuyu ve Beylerderesi dahil tesislerde servis yolu, su kütlesi ve işletme alanı kaynaklı can güvenliği risklerini ve uyarı tedbirlerini resmî olarak bildirir."};
const kapikayaRekreasyon:ResearchSource={label:"Malatya İl Tarım ve Orman - Kapıkaya rekreasyonel avlak ihalesi",url:"https://malatya.tarimorman.gov.tr/Duyuru/602/Su-Urunleri-Projeye-Dayali-Olarak-Rekreasyonel-Amacli-Kiralama-Ihalesi-Ilani",note:"Battalgazi Kapıkaya Baraj Gölünü 280 hektarlık rekreasyonel su ürünleri avlak sahası ve yıllık avlanabilir stok ile rota özelinde doğrular; ihale/işletme koşulları güncel kontrol edilmelidir."};
const sultansuyuValilik:ResearchSource={label:"Malatya Valiliği - Sultansuyu Barajı",url:"https://www.malatya.gov.tr/cografi-konum?v=1.0.24",note:"Sultansuyu Barajını Malatya'da sulama amaçlı ve 1993'te hizmete açılan resmî su yapısı olarak kaydeder."};
const sultansuyuFishery:ResearchSource={label:"Tarım ve Orman - kiralanan su ürünleri avlak sahaları",url:"https://www.tarimorman.gov.tr/BSGM/Belgeler/Icerikler/Su%20%C3%9Cr%C3%BCnleri%20Altyap%C4%B1lar%C4%B1/%C4%B0ST%C4%B0HSAL%20HAKKI%20K%C4%B0RALANAN%20G%C3%96L-BARAJ%20G%C3%96L%C3%9C%20SU%20%C3%9CR%C3%9CNLER%C4%B0%20AVLAK%20SAHALARI.pdf",note:"Sultansuyu Baraj Gölünü Akçadağ'da kiralanan su ürünleri avlak sahası olarak kaydeder; ticari haklar amatör kıyı erişimi anlamına gelmez ve çatışma riski olarak dikkate alınır."};
const orduzuValilik:ResearchSource={label:"Malatya Valiliği - Orduzu Sulama Göleti",url:"https://www.malatya.gov.tr/cografi-konum?v=1.0.24",note:"Orduzu Sulama Göletini Malatya merkez/Battalgazi çevresindeki resmî sulama göletleri arasında doğrular."};
const orduzuRecent:ResearchSource={label:"Yerel saha haberi - Orduzu Göleti Mesire Alanı",url:"https://malatyagazete.com/orduzu-goletinde-aci-son",note:"2026'da Orduzu Göleti Mesire Alanının fiilî kamusal kullanımını ve boğulma riskini gösteren ikincil saha kaydıdır; güvenli yüzme veya av izni değildir."};

const profile=(identity:string,access:string,species:string,risk:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Rota özelinde doğrulanmış su kimliği",note:identity},
  legal:{level:"partial",label:"Mevzuat ve kullanım ayrımı",note:"6/2 Tebliğ ile rota özelindeki işletme/kiralama/güvenlik kayıtları birlikte değerlendirilir; belirli kıyı cebinin sürekli açık olduğu varsayılmaz."},
  access:{level:"partial",label:"Genel erişim bağlamı",note:access},
  species:{level:"strong",label:"Rota/havza özelinde tür olasılığı",note:species},
  field:{level:"unverified",label:"Saha teyidi yok",note:risk},
  reviewedAt,
});

type Patch={slug:string;sources:ResearchSource[];fish:string[];summary:string;access:string;species:string;risk:string;name?:string;district?:string;waterType?:string};
const patches:Patch[]=[
  {slug:"ankara-500km-amasya-derinoz-baraj-golu",sources:[derinozKtb,derinozValilik,derinozAkademik],fish:["Sazan","Turna","Yayın"],summary:"Derinöz Barajı resmî su kimliği, Valilikçe kaydedilen rekreasyon kullanımı ve akademik olta balıkçılığı/tür kaydıyla çaprazlandı.",access:"Suluova/Derinöz genel baraj çevresinde rekreasyon kullanımı belgeli; son park, özel parsel, su alma yapısı ve olta cebi saha teyitli değildir.",species:"Akademik ekoturizm çalışması Derinöz için sazan, turna ve yayın balığı olasılığını kaydeder; bulunurluk ve av başarısı garanti değildir.",risk:"Baraj su kotu, dik/gevşek şev, su alma yapıları, içme-kullanma suyu işlevi ve tabela/bariyerler hareket günü kontrol edilmelidir."},
  {slug:"ulusal-zonguldak-filyos-nehri-zonguldak-hatti",sources:[filyosVisit,filyosWater,filyosFish,filyosSecondary],fish:["Sazan"],summary:"Filyos Nehri Çaycuma-Zonguldak koridoru resmî turizm kaynağındaki olta kullanımı, akademik nehir kimliği ve bilimsel/ikincil tür kayıtlarıyla doğrulandı.",access:"Filyos uzun ve değişken bir akarsu koridorudur; yalnız genel Çaycuma/Filyos yaklaşımı kullanılır, liman çalışma sahası veya tek mikro kıyı pini yayımlanmaz.",species:"Bilimsel çalışma Filyos drenajına özgü tatlısu balığı kaydeder; ikincil saha kaydı sazanı da bildirir. Yayında yalnız sazan olasılığı korunur; av garantisi değildir.",risk:"Taşkın/debi, sediman, liman ve balıkçı barınağı çalışma sahaları, kaygan kıyı ve özel/işletme alanları hareket günü kontrol edilmelidir."},
  {slug:"ulusal-erzurum-olur-baraj-golu",sources:[urunluDsi,urunluSaglik,urunluStock],fish:["Kırmızı benekli alabalık"],name:"Ürünlü Göleti",district:"Olur",waterType:"Gölet",summary:"Eski genel 'Olur Baraj Gölü' etiketi, DSİ'nin resmî Ürünlü Göleti kaydıyla düzeltilerek Olur/Ürünlü olarak kimliklendirildi; tür olasılığı resmî yerel kayıt ve geçmiş balıklandırmayla desteklendi.",access:"Olur/Ürünlü genel bölgesi planlama başlangıcıdır; sulama tesisi, servis yolu, özel parsel ve son kıyı geçişi kamusal giriş garantisi sayılmaz.",species:"Resmî yerel sağlık kaynağı Ürünlü'de kırmızı benekli alabalık bulunduğunu bildirir; 2020 balıklandırması bu olasılığı güçlendirir, güncel stok/av garantisi değildir.",risk:"Yüksek rakım, ani hava değişimi, soğuk su, gölet şevi ve sulama işletme sınırları hareket günü kontrol edilmelidir."},
  {slug:"ulusal-malatya-kapikaya-baraj-golu-malatya",sources:[malatyaStock2023,malatyaCevre2020,malatyaValilikRisk,kapikayaRekreasyon],fish:["Sazan"],district:"Battalgazi",summary:"Kapıkaya/Turgut Özal Baraj Gölü için resmî baraj kimliği, rota özelinde sazan balıklandırması, 2025 rekreasyonel avlak ihalesi ve güncel DSİ güvenlik kaydı birlikte değerlendirildi.",access:"Rekreasyonel avlak sahası rota düzeyinde kullanımı doğrular; kiralama/işletme şartları, teknik yapılar ve son kıyı girişi ayrıca kontrol edilmelidir.",species:"2023 İl Tarım kaydı Kapıkaya Baraj Gölüne yavru sazan bırakıldığını doğrular; 2025 ihale kaydı avlanabilir stok bulunduğunu ayrıca gösterir.",risk:"Valilik/DSİ 2026 duyurusu baraj, servis yolu ve işletme tesislerinde boğulma ve amacı dışı kullanım riskini açıkça belirtir."},
  {slug:"ankara-500km-malatya-sultansuyu-baraj-golu",sources:[malatyaStock2022,sultansuyuValilik,sultansuyuFishery,malatyaValilikRisk],fish:["Sazan"],summary:"Sultansuyu Baraj Gölü resmî baraj kimliği, rota özelinde sazan balıklandırması, su ürünleri avlak kiralaması ve 2026 DSİ güvenlik duyurusuyla çaprazlandı.",access:"Akçadağ genel yaklaşımı kullanılır; ticari su ürünleri kiralaması amatör kıyı erişimi değildir ve faaliyet çakışması varsa başka kamusal kıyı seçilmelidir.",species:"2022 İl Tarım kaydı Sultansuyu Baraj Gölünde sazan balıklandırmasını doğrular; geçmiş balıklandırma güncel bulunurluk olasılığıdır, av garantisi değildir.",risk:"Ticari avlak faaliyeti, sulama işletmesi, servis yolları, su kotu ve uyarı levhaları hareket günü kontrol edilmelidir."},
  {slug:"ankara-500km-malatya-beylerderesi-baraj-goleti",sources:[malatyaStock2022,malatyaValilikRisk],fish:["Sazan"],waterType:"Gölet",summary:"Beylerderesi kaydı İl Tarımın rota özelindeki sazan balıklandırması ve Valilik/DSİ'nin 2026 güvenlik duyurusundaki Beylerderesi Göleti tesis kaydıyla doğrulandı.",access:"Yeşilyurt/Beylerderesi genel yaklaşımı planlama başlangıcıdır; servis yolu ve sulama tesisi kamusal olta noktası sayılmaz.",species:"2022 İl Tarım balıklandırma kaydı Beylerderesi Göletinde sazan olasılığını rota özelinde destekler; av garantisi değildir.",risk:"DSİ güvenlik duyurusunda gölet ve servis yolu kullanımının can güvenliği riski oluşturabildiği belirtilir; bariyer ve levhalar önceliklidir."},
  {slug:"ankara-500km-malatya-orduzu-goleti",sources:[malatyaStock2022,orduzuValilik,orduzuRecent],fish:["Sazan"],summary:"Orduzu Sulama Göleti resmî il kaynağıyla kimliklendirildi, 2022 sazan balıklandırmasıyla tür olasılığı güçlendirildi ve 2026 mesire alanı saha haberi kamusal kullanım/risk bağlamı sağladı.",access:"Battalgazi/Orduzu mesire alanı çevresi genel kullanım bağlamıdır; belirli kıyı cebinin av için güvenli veya sürekli açık olduğu varsayılmaz.",species:"2022 İl Tarım kaydı Orduzu Göletinde sazan balıklandırmasını doğrular; geçmiş kayıt güncel bulunurluk olasılığıdır, av garantisi değildir.",risk:"2026 boğulma olayı su kenarındaki gerçek güvenlik riskini gösterir; yüzme, dik şev, çamur ve su kotu ayrıca değerlendirilmelidir."},
];

export const stage2ContinuationSlugs20260825=patches.map((p)=>p.slug);

export const applyDailyQualityStage2Continuation20260825=(routeMap:Map<string,EnrichedMera>)=>{
  for(const item of patches){
    const prev=routeMap.get(item.slug);
    if(!prev)throw new Error(`25 Ağustos Stage 2 devam hedefi aktif değil: ${item.slug}`);
    if(prev.confidence!=="D")throw new Error(`25 Ağustos Stage 2 devam hedefi gerçek D değil: ${item.slug} (${prev.confidence})`);
    const identity=item.name?`${item.name} / ${item.district||prev.district} / ${item.waterType||prev.waterType}`:`${prev.name} / ${item.district||prev.district} / ${item.waterType||prev.waterType}`;
    routeMap.set(item.slug,{
      ...prev,
      ...(item.name?{name:item.name}:{}),
      ...(item.district?{district:item.district}:{}),
      ...(item.waterType?{waterType:item.waterType as any}:{}),
      fish:item.fish,
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      confidence:"C",
      updatedAt:reviewedAt,
      researchedAt:reviewedAt,
      researchStatus:`25 Ağustos Stage 2: ${item.summary}`,
      researchSummary:`${item.summary} Mikro kıyı, park, özel mülkiyet, işletme sınırı ve güncel amatör av uygunluğu kesinleştirilmedi.`,
      summary:`${item.name||prev.name}, rota özelindeki resmî ve bağımsız destekleyici kanıtlarla Güven C düzeyinde masa başı doğrulanmış genel bölge rotasıdır; son kıyı erişimi ve güncel saha koşulları ayrıca kontrol edilmelidir.`,
      verification:`Rota kimliği, genel erişim bağlamı, mevzuat/risk ve tür olasılığı en az iki bağımsız kaynak ailesiyle çaprazlandı; Güven C. Saha teyidi yoktur.`,
      sources:uniq([...(prev.sources||[]),teblig,...item.sources]),
      cautions:[...new Set([...(prev.cautions||[]),item.risk,"6/2 Tebliğ, il müdürlüğü kararları, işletme/kiralama sınırları ve saha tabelaları hareket günü birlikte kontrol edilmelidir."])],
      confidenceProfile:profile(identity,item.access,item.species,item.risk),
    } as EnrichedMera);
  }
  return routeMap;
};
