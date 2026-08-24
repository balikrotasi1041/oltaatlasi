import type { Mera } from "./meralar";
import type { EnrichedMera, ResearchSource, FishEvidence, AccessEvidence, ConfidenceProfile } from "./meralar-tumu-core";

const REVIEW_DATE="2026-08-24";
const NATIONAL_RULE:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"1 Eylül 2024-31 Ağustos 2028 dönemindeki amatör avcılık çerçevesi; yerel karar, koruma, işletme ve güvenlik kısıtları ayrıca kontrol edilir."};
const GOOGLE=(name:string,province:string)=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${province}`)}`;
const OSM=(name:string,province:string)=>`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${name}, ${province}, Türkiye`)}`;
const uniq=<T extends {url:string}>(items:T[])=>[...new Map(items.map(item=>[item.url,item])).values()];

const adiyamanStock:ResearchSource={label:"Adıyaman İl Tarım ve Orman - 2024 balıklandırma",url:"https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz",note:"Atatürk ve Çat barajları ile Kınık, Hasancık, İncesu, Karahöyük ve Gözebaşı göletlerine/barajlarına yavru sazan bırakıldığını rota adlarıyla kaydeder; geçmiş salım güncel av garantisi değildir."};
const adiyamanBan:ResearchSource={label:"Adıyaman İl Tarım ve Orman - 2026 içsu av yasağı",url:"https://adiyaman.tarimorman.gov.tr/Duyuru/714/2026-Yili-Su-Urunleri-Avlanma-Yasagi-Basliyor",note:"Adıyaman içsularında 1 Nisan-30 Haziran 2026 dönemindeki av yasağı ve 6/1-6/2 mevzuat bağlamını doğrular."};
const boluStock:ResearchSource={label:"Bolu İl Tarım ve Orman - 2016 balıklandırma",url:"https://bolu.tarimorman.gov.tr/Haber/500/Baliklandirma-Calismalari-Bu-Yil-Da-Devam-Ediyor",note:"Sünnet Gölü ve Çayköy Göleti dahil su kaynaklarına yavru sazan bırakıldığını rota adıyla listeler; geçmiş balıklandırma türün bulunabilirliği için olasılık kanıtıdır."};
const aksarayStock:ResearchSource={label:"Aksaray İl Tarım ve Orman - Çiftevi balıklandırma",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göletine 2017 yılında 10.000 sazan yavrusu bırakıldığını resmî olarak kaydeder; güncel stok yoğunluğu veya av başarısı anlamına gelmez."};
const aksarayAccess:ResearchSource={label:"Aksaray Belediyesi gezi rehberi - Çiftevi Göleti",url:"https://www.aksaray.bel.tr/KategoriResimleri/Pdf/0fb99654.pdf",note:"Çiftevi Göletini Ağaçören bağlamında, 38.840230 / 34.000974 koordinatı, araç yaklaşımı ve olta balıkçılığı ifadesiyle tanımlar; kıyının her noktasında kamusal giriş garantisi değildir."};
const kastamonuStock:ResearchSource={label:"Kastamonu İl Tarım ve Orman 2025 Faaliyet Raporu",url:"https://kastamonu.tarimorman.gov.tr/Belgeler/Calisma_Raporu/2025%20Y%C4%B1l%C4%B1%20Kastamonu%20%C4%B0l%20Faaliyet%20Raporu.pdf",note:"Devrekani'deki Çiğdem Gölü/Göleti grubuna 2025 balıklandırmasında sazan bırakıldığını resmî tabloda kaydeder."};
const kastamonuIdentity:ResearchSource={label:"Kastamonu Tarımsal Kuraklık Eylem Planı 2023-2027",url:"https://kastamonu.tarimorman.gov.tr/Belgeler/Kurakl%C4%B1k%20Eylem%20Plan%C4%B1/Kastamonu%20KEP%202023-2027.pdf",note:"Çiğdem Göletini ve sulama alanını resmî plan içinde gösterir; su yapısının kimliğini destekler, amatör av izni vermez."};
const erzincanFish:ResearchSource={label:"EBYÜ - Karasu Nehri yan kolları balık faunası",url:"https://ebyu.edu.tr/wp-content/uploads/2017/06/Uluslararas%C4%B1-Erzincan-Sempozyumu-Cilt-3-.pdf",note:"Erzincan Karasu sistemi yan kollarında 12 balık taksonu; sazan, tatlısu kefali ve Capoeta türleri dahil bilimsel kayıt sunar."};
const erzincanIdentity:ResearchSource={label:"Erzincan İl Tarım ve Orman - temel tarımsal veriler",url:"https://erzincan.tarimorman.gov.tr/Menu/92/Temel-Tarimsal-Veriler",note:"Karasu Nehrini Erzincan'ın en büyük ve önemli akarsuyu ve Fırat'ın ana kolu olarak resmî biçimde tanımlar."};
const erzincanRules:ResearchSource={label:"Erzincan İl Tarım ve Orman - 2026 içsu av yasağı",url:"https://erzincan.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=1f82ef00-6627-4d84-9d9e-9ee342896390&TermSetId=f0f01ff6-5b7c-4b42-8604-1b5f6d1a031e&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=648%2FSu-Urunleri-Av-Yasagina-Iliskin-Duyuru",note:"2026'da Erzincan içsularında tür ve dönem yasaklarını 6/1 ve 6/2 Tebliğlerine dayalı olarak açıklar."};
const kuraOfficial:ResearchSource={label:"Ardahan İl Tarım ve Orman - Kura Nehri balık kurtarma kaydı",url:"https://ardahan.tarimorman.gov.tr/Haber/356/Su-Birikintisinde-Mahsur-Kalan-Baliklar-Kurtarildi",note:"Tahtakıran yakınındaki balıkların Kura Nehrine taşındığını resmî saha faaliyetiyle doğrular; tür veya kıyı av izni kanıtı değildir."};
const kuraAcademic:ResearchSource={label:"Atatürk Üniversitesi - Kura Nehri ve yakın çevresi alan kullanımı",url:"https://dergipark.org.tr/tr/pub/ataunizfd/article/40548",note:"Ardahan Kura Nehri ve yakın çevresini sulak alan, yerleşim, rekreasyon ve koruma kullanımlarıyla bilimsel olarak inceler; hassas alanlarda erişim varsayılmaz."};
const filyosAcademic:ResearchSource={label:"DergiPark - Filyos Nehri fiziksel su kalitesi",url:"https://dergipark.org.tr/tr/pub/jaes/article/636576",note:"Filyos Nehrinin havza, uzunluk, birleşim ve Çaycuma-Hisarönü akış bağlamını bilimsel olarak doğrular."};
const filyosBio:ResearchSource={label:"Zonguldak Kömür Jeoparkı - doğal miras",url:"https://zonguldakgeopark.com/tr/kesfet/dogal-miras",note:"Filyos Nehrini Zonguldak'ın tatlı su kaynaklarından biri olarak ve ildeki tatlısu balığı çeşitliliği bağlamında tanımlar; rota özelinde tür veya av izni değildir."};
const zapAcademic:ResearchSource={label:"Hakkari Sempozyumu - Hakkari su kaynakları ve su ürünleri",url:"https://atam.gov.tr/wp-content/uploads/2023/06/hakkari-sempozyumu.pdf",note:"Zap Suyunu Hakkari'nin başlıca su kaynaklarından biri olarak ele alır ve ilde avcılığı yapılan sazan ile doğal alabalık bağlamını verir."};
const zapOfficial:ResearchSource={label:"Hakkari İl Tarım ve Orman brifing raporu",url:"https://hakkari.tarimorman.gov.tr/Belgeler/KutuMenu/2012_Brifing_Raporu_Brifing_.pdf",note:"Zap Suyunda resmî su kalitesi izleme istasyonları bulunduğunu ve il derelerinde sazan/alabalık varlığını kaydeder; belirli kıyı cebine av izni vermez."};
const kemaliyeAcademic:ResearchSource={label:"Erzincan Üniversitesi - Kemaliye fiziki coğrafyası",url:"https://dergipark.org.tr/tr/download/issue-full-file/89908",note:"Fırat/Karasu Nehrinin Kemaliye'yi katedip Keban Baraj Gölüne kavuştuğu sarp vadi bağlamını bilimsel olarak açıklar; mikro kıyı erişimi çıkarımı yapılmaz."};
const firatFish:ResearchSource={label:"DergiPark - Fırat ve Dicle sistemlerinde Carassius gibelio",url:"https://dergipark.org.tr/en/pub/tjbc/article/1013455",note:"Fırat Nehir sisteminde Carassius gibelio varlığına bilimsel tür kanıtı sağlar; Kemaliye'nin her kıyısında bulunma garantisi değildir."};
const sivasLocal:ResearchSource={label:"Sivas yerel haber - 2025 Delice Göleti balıklandırması",url:"https://vatan58.com/sivasta-baliklandirma-calismalari-kapsaminda-600-bin-balik-birakildi/",note:"2025'te Delice Göleti ve Kızılırmak Barajına yavru sazan bırakıldığını Tarım ve Orman projesi bağlamında bildirir; yerel kaynak resmî kaydın yerine geçmez."};

export const upgradeTargets20260824=[
  "ankara-500km-adiyaman-ataturk-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ankara-500km-adiyaman-kinik-goleti",
  "ulusal-adiyaman-cat-baraj-golu",
  "ulusal-adiyaman-gozebasi-baraj-golu",
  "ulusal-adiyaman-hasancik-baraj-golu",
  "ulusal-adiyaman-incesu-baraj-golu",
  "ankara-500km-bolu-sunnet-golu",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti"
] as const;

const profile=(route:EnrichedMera,speciesStrong:boolean):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Çapraz kaynaklı rota kimliği",note:"Su adı, il/ilçe ve genel konum resmî/bilimsel kayıtlar ile harita katmanı birlikte değerlendirilerek doğrulandı; pin mikro kıyı girişi değildir."},
  legal:{level:"partial",label:"Genel ve yerel mevzuat kontrolü",note:"6/2 Tebliği ve bulunabilen il düzeyi kararlar kontrol edildi; belirli kıyı cebinde işletme, koruma, güvenlik veya özel mülkiyet kısıtı hareket günü ayrıca teyit edilmelidir."},
  access:{level:"partial",label:"Genel yaklaşım doğrulandı",note:"Yerleşim/su konumu ve harita yaklaşımı masa başında eşleştirildi. Son kilometre, park, zemin, bariyer ve kamusal geçiş saha teyitli değildir."},
  species:{level:speciesStrong?"strong":"partial",label:speciesStrong?"Rota adıyla tür kanıtı":"Havza/il düzeyi tür olasılığı",note:speciesStrong?"En az bir tür rota adıyla resmî balıklandırma veya bilimsel kayıtla destekleniyor; güncel stok ve av başarısı garanti edilmez.":"Tür olasılığı akademik/resmî havza kayıtlarıyla destekleniyor; aynı kıyıda ve aynı tarihte bulunacağı varsayılmaz."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, zemin, tabela, özel mülkiyet, koruma ve güncel riskler yerinde doğrulanmalıdır."},reviewedAt:REVIEW_DATE
});

const mapSource=(route:EnrichedMera):ResearchSource=>({label:`Google Maps - ${route.name} ad araması`,url:GOOGLE(route.name,route.province),note:"Yalnız ikincil konum/yol ağı kontrolüdür; kamusal kıyı, açık yol veya av izni kanıtı değildir."});
const osmAccess=(route:EnrichedMera):AccessEvidence=>({label:"OpenStreetMap genel yaklaşım kontrolü",value:"Su adı ve çevre yol/yerleşim ağı masa başında incelendi; son kıyı girişi doğrulanmadı.",sourceUrl:OSM(route.name,route.province),note:"OSM topluluk verisidir. Bariyer, özel yol, mevsimsel bozulma ve park imkânı hareket günü kontrol edilmelidir."});
const fishEvidence=(name:string,url:string,label:string,note:string):FishEvidence=>({name,scientificName:name==="Sazan"?"Cyprinus carpio":null,evidenceLevel:"documented",sourceLabel:label,sourceUrl:url,note});

const evidenceFor=(slug:string):{sources:ResearchSource[];fish?:string[];evidence?:FishEvidence[];summary:string;speciesStrong:boolean}=>{
  if(slug.includes("adiyaman"))return{sources:[adiyamanStock,adiyamanBan,NATIONAL_RULE],fish:["Sazan"],evidence:[fishEvidence("Sazan",adiyamanStock.url,adiyamanStock.label,"Rota adı 2024 resmî balıklandırma kaydında yer alır; bu geçmiş salım bugün av garantisi değildir.")],summary:"Adıyaman'daki rota, 2024 resmî sazan balıklandırma kaydı, 2026 il içsu yasağı ve mevcut harita/konum kaynakları birlikte değerlendirilerek C seviyesine yükseltildi.",speciesStrong:true};
  if(slug.includes("sunnet")||slug.includes("caykoy"))return{sources:[boluStock,NATIONAL_RULE],fish:["Sazan"],evidence:[fishEvidence("Sazan",boluStock.url,boluStock.label,"Su adı Bolu İl Tarımın 2016 balıklandırma tablosunda geçer; geçmiş salım kalıcı tür olasılığı kanıtıdır, av garantisi değildir.")],summary:"Bolu rota kimliği mevcut harita katmanlarıyla, sazan olasılığı rota adıyla resmî balıklandırma kaydıyla ve hukuki çerçeve 6/2 Tebliğiyle çaprazlandı.",speciesStrong:true};
  if(slug.includes("ciftevi"))return{sources:[aksarayStock,aksarayAccess,NATIONAL_RULE],fish:["Sazan"],evidence:[fishEvidence("Sazan",aksarayStock.url,aksarayStock.label,"Çiftevi Göletine 2017'de 10.000 sazan yavrusu bırakıldığı resmî kayıttadır; av garantisi değildir.")],summary:"Çiftevi Göleti için rota-özel balıklandırma, belediye koordinat/yol tarifi ve genel mevzuat birlikte doğrulandı; mikro kıyı girişi hâlâ saha teyidi gerektirir.",speciesStrong:true};
  if(slug.includes("cigdem"))return{sources:[kastamonuStock,kastamonuIdentity,NATIONAL_RULE],fish:["Sazan"],evidence:[fishEvidence("Sazan",kastamonuStock.url,kastamonuStock.label,"2025 resmî faaliyet raporu Devrekani Çiğdem Gölü/Göleti grubunu sazan balıklandırması içinde listeler.")],summary:"Çiğdem Göleti resmî su yapısı planı ve 2025 resmî sazan balıklandırma tablosuyla eşleştirildi; erişim genel planlama düzeyinde bırakıldı.",speciesStrong:true};
  if(slug.includes("delice"))return{sources:[sivasLocal,NATIONAL_RULE],fish:["Sazan"],evidence:[fishEvidence("Sazan",sivasLocal.url,sivasLocal.label,"2025 yerel haber Tarım ve Orman balıklandırma çalışması kapsamında Delice Göletine sazan bırakıldığını bildirir; mevcut rota kaynaklarıyla çaprazlanır.")],summary:"Delice Göleti için mevcut resmî rota kaydı, geçmiş/2025 sazan balıklandırma kanıtı ve harita bağlamı birleştirildi; kesin kıyı erişimi yayımlanmadı.",speciesStrong:true};
  if(slug.includes("karasu-nehri"))return{sources:[erzincanIdentity,erzincanFish,erzincanRules,NATIONAL_RULE],fish:["Sazan","Tatlısu kefali","Siraz"],evidence:[fishEvidence("Sazan",erzincanFish.url,erzincanFish.label,"Karasu sistemi yan kolları çalışmasında Cyprinus carpio kaydedilmiştir."),fishEvidence("Tatlısu kefali",erzincanFish.url,erzincanFish.label,"Karasu sistemi yan kolları çalışmasında Squalius cephalus kaydedilmiştir."),fishEvidence("Siraz",erzincanFish.url,erzincanFish.label,"Karasu sistemi yan kollarında Capoeta türleri kaydedilmiştir; yerel ad eşlemesi olasılık düzeyindedir.")],summary:"Karasu Nehri kimliği resmî il verisiyle, tür olasılığı bilimsel fauna çalışmasıyla ve 2026 dönem kuralları İl Tarım duyurusuyla çaprazlandı.",speciesStrong:false};
  if(slug.includes("kura-nehri"))return{sources:[kuraOfficial,kuraAcademic,NATIONAL_RULE],summary:"Kura Nehri resmî saha kaydı ve akademik alan kullanım çalışmasıyla doğrulandı; balık türleri mevcut kaynakların olasılık düzeyinde tutuldu, mikro erişim kesinleştirilmedi.",speciesStrong:false};
  if(slug.includes("filyos-nehri"))return{sources:[filyosAcademic,filyosBio,NATIONAL_RULE],summary:"Filyos Nehri kimliği ve hidrolojik bağlamı akademik kaynakla, tatlısu biyolojik bağlamı yerel kurumsal kaynakla çaprazlandı; türler kıyı-özel kanıt sayılmadı.",speciesStrong:false};
  if(slug.includes("zap-suyu"))return{sources:[zapAcademic,zapOfficial,NATIONAL_RULE],fish:["Sazan","Alabalık"],evidence:[fishEvidence("Sazan",zapAcademic.url,zapAcademic.label,"Hakkari su ürünleri çalışması ilde avcılığı yapılan başlıca türlerden sazanı kaydeder; Zap'ın her kesiminde garanti değildir."),fishEvidence("Alabalık",zapOfficial.url,zapOfficial.label,"Hakkari İl Tarım raporu il derelerinde alabalık bulunduğunu ve Zap üzerinde resmî izleme yapıldığını kaydeder; mikro nokta kanıtı değildir.")],summary:"Zap Suyu için resmî izleme kaydı, akademik su ürünleri değerlendirmesi ve genel mevzuat çaprazlandı; sarp vadi ve son yaklaşım belirsizliği korunur.",speciesStrong:false};
  if(slug.includes("kemaliye"))return{sources:[kemaliyeAcademic,firatFish,erzincanRules,NATIONAL_RULE],fish:["Gümüşi Havuz Balığı"],evidence:[fishEvidence("Gümüşi Havuz Balığı",firatFish.url,firatFish.label,"Carassius gibelio Fırat nehir sisteminde bilimsel olarak kaydedilmiştir; Kemaliye kıyısında güncel bulunurluk garantisi değildir.")],summary:"Kemaliye Fırat rotasında nehir/vadi kimliği bilimsel coğrafya kaynağıyla, tür olasılığı Fırat sistemi çalışmasıyla ve 2026 il kuralları resmî duyuruyla çaprazlandı; sarp kanyon erişimi kesinleştirilmedi.",speciesStrong:false};
  throw new Error(`24 Ağustos kanıt paketi bulunamadı: ${slug}`);
};

export const applyGrowthUpgrades20260824=(routeMap:Map<string,EnrichedMera>)=>{
  let upgraded=0;
  for(const slug of upgradeTargets20260824){
    const current=routeMap.get(slug);
    if(!current)throw new Error(`24 Ağustos D adayı bulunamadı: ${slug}`);
    if(current.confidence!=="D")throw new Error(`24 Ağustos adayı D değil (${current.confidence}): ${slug}`);
    if(!Number.isFinite(current.lat)||!Number.isFinite(current.lng))throw new Error(`24 Ağustos adayı koordinatsız: ${slug}`);
    const e=evidenceFor(slug);
    const sources=uniq([...(current.sources||[]),...e.sources,mapSource(current)]);
    if(sources.length<3)throw new Error(`24 Ağustos yetersiz kaynak: ${slug}`);
    const next:EnrichedMera={
      ...current,
      confidence:"C",
      verification:"24.08.2026 çok kaynaklı masa başı doğrulama; mikro kıyı erişimi saha teyitli değildir.",
      updatedAt:REVIEW_DATE,
      researchedAt:REVIEW_DATE,
      researchStatus:"Rota özelinde çok kaynaklı masa başı doğrulama",
      researchSummary:e.summary,
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:`${current.name} için gösterilen pin genel su/yerleşim planlama konumudur. Google Maps ve OpenStreetMap yalnız yaklaşım karşılaştırması için kullanılmalıdır; son kilometre, park, bariyer, özel mülkiyet ve kamusal kıyı geçişi yerinde doğrulanmadan kesin rota kabul edilmemelidir.`,
      transport:`${current.district||current.province} üzerinden genel araç yaklaşımı harita katmanlarında incelenebilir. Yol-zemin ve mevsimsellik uzaktan kesinleştirilmedi; yağış sonrası stabilize/toprak bağlantılar, kapalı yol ve park imkânı hareket günü kontrol edilmelidir.`,
      cautions:[...(current.cautions||[]),"Harita pini mikro kıyı girişi değildir; son yaklaşım ve kamusal geçiş yerinde doğrulanmalıdır.","6/2 Tebliği, il/ilçe kararları, işletme-kiralama, koruma ve güvenlik sahaları hareket günü yeniden kontrol edilmelidir."],
      planningNotes:[...(current.planningNotes||[]),"Konum/yol tarifi niyetinde genel pin kullanılabilir; kullanıcı özel mülk, işletme veya kapalı servis yoluna yönlendirilmemelidir.","Geçmiş balıklandırma veya havza fauna kaydı türün bulunma olasılığıdır; güncel stok, kıyıdan erişilebilirlik ve av başarısı değildir."],
      sources,
      accessEvidence:[...(current.accessEvidence||[]),osmAccess(current)],
      fish:e.fish||current.fish,
      fishEvidence:e.evidence?[...(current.fishEvidence||[]),...e.evidence]:current.fishEvidence,
      confidenceProfile:profile(current,e.speciesStrong)
    };
    routeMap.set(slug,next);upgraded++;
  }
  return{reviewed:upgradeTargets20260824.length,upgraded};
};

const tunceliOfficial:ResearchSource={label:"Tunceli İl Tarım ve Orman - 13.05.2026 amatör avcılık yerleri",url:"https://tunceli.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=362",note:"08.05.2026 tarihli komisyon kararında Keban 4, 5 ve 8. bölgelerde amatör avcılığa ayrılan kıyı şeritlerini ve kıyıdan su içine 50 m tahsis sınırını açıkça tanımlar."};
const tunceliLeases:ResearchSource={label:"Tarım ve Orman BSGM - kiralanan istihsal sahaları",url:"https://www.tarimorman.gov.tr/BSGM/Belgeler/Icerikler/Su%20%C3%9Cr%C3%BCnleri%20Altyap%C4%B1lar%C4%B1/%C4%B0ST%C4%B0HSAL%20HAKKI%20K%C4%B0RALANAN%20G%C3%96L-BARAJ%20G%C3%96L%C3%9C%20SU%20%C3%9CR%C3%9CNLER%C4%B0%20AVLAK%20SAHALARI.pdf",note:"Keban Baraj Gölündeki bölgesel istihsal/kiralama bağlamını resmî listede gösterir; amatör kullanım yalnız İl Müdürlüğünün ayrıca belirlediği kıyılarda değerlendirilir."};
const tunceliTourism:ResearchSource={label:"Kültür Portalı - Tunceli baraj gölleri",url:"https://www.kulturportali.gov.tr/turkiye/tunceli/turizmaktiviteleri/baraj-golleri",note:"Keban'ın Çemişgezek, Pertek ve Mazgirt kıyılarını; Çemişgezek, Göktepe ve Akpazar kesimlerini sportif balıkçılık bağlamında tanımlar. Güncel av izni için 2026 İl Tarım kararı esas alınır."};
const cemisFish:ResearchSource={label:"Akademik çalışma - Keban Çemişgezek bölgesinde avlanan balıklar",url:"https://paperity.org/p/78173869/fish-species-caught-in-cemisgezek-region-of-keban-dam-lake-and-their-amount",note:"Yemişdere dahil Çemişgezek avlanma sahalarında sazan ve diğer Cyprinidae türlerini saha verisiyle raporlar; eski tarihli kayıt güncel av garantisi değildir."};
const pertekFish:ResearchSource={label:"Akademik çalışma - Keban Baraj Gölü Pertek 5. Bölge",url:"https://dergipark.org.tr/tr/download/article-file/302921",note:"Pertek 5. Bölge örnekleminde Cyprinus carpio dahil tür kayıtları sunar; tür olasılığı kanıtıdır, günlük bulunurluk garantisi değildir."};
const kebanFish:ResearchSource={label:"Elazığ su ürünleri sektör raporu - Keban balık faunası",url:"https://www.researchgate.net/publication/287195583_FISHERIES_SECTOR_REPORT_-ELAZIG_DEVELOPMENT_ASSEMBLY-_ELAZIG_SU_URUNLERI_SEKTOR_RAPORU-29_Kasim_2014",note:"Keban Baraj Gölünde 23 balık türü ve ekonomik türler arasında sazanı raporlar; Akpazar kıyısında güncel yakalama garantisi değildir."};

const makeNew=(args:{slug:string;name:string;district:string;zone:string;lat:number;lng:number;areaNote:string;fishSource:ResearchSource;secondaryUrl:string}):EnrichedMera=>{
  const sources=[tunceliOfficial,tunceliLeases,tunceliTourism,args.fishSource,NATIONAL_RULE,{label:`İkincil yerleşim/harita kontrolü - ${args.name}`,url:args.secondaryUrl,note:"Yerleşim/genel konum kontrolü için ikincil kaynaktır; resmî kıyı tahsisinin yerine geçmez ve mikro giriş noktası yayımlamaz."}];
  const fishEv:FishEvidence=fishEvidence("Sazan",args.fishSource.url,args.fishSource.label,"Bilimsel/havza kaydında sazan raporlanmıştır; türün bugün bulunabileceğine dair olasılık kanıtıdır, av garantisi değildir.");
  const base={
    slug:args.slug,name:args.name,district:args.district,province:"Tunceli",zone:args.zone,waterType:"Baraj" as const,region:"Doğu Anadolu",
    summary:`${args.name}, Tunceli İl Tarım ve Orman Müdürlüğünün 13 Mayıs 2026 tarihli kararında amatör avcılığa ayrılan Keban kıyı şeritlerinden biridir. Pin yalnız ${args.areaNote} genel planlama konumunu gösterir; resmî metindeki kıyı sınırı, saha tabelası ve güncel 6/2 kuralları birlikte uygulanmalıdır.`,
    fish:["Sazan"],methods:["Kıyıdan dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli" as const,vehicleAccess:"Kontrol edilmeli" as const,
    amenities:[`${args.district} ilçe merkezi lojistik yedeği","Kırsal yerleşim yakınlığı; kıyıda tesis garantisi yok"],
    cautions:["Resmî amatör tahsis yalnız karar metninde tarif edilen kıyı şeridi ve su içine 50 m alan içindir","Ticari istihsal/kiralama alanı ile amatör kıyı tahsisi karıştırılmamalıdır","Özel mülkiyet, işletme, güvenlik, arkeolojik/koruma alanı ve saha tabelaları üstündür","Su kotu, dik şev, çamur ve kuvvetli rüzgâr hareket günü kontrol edilmelidir"],
    lat:args.lat,lng:args.lng,locationPrecision:"Genel bölge" as const,verification:"2026 İl Tarım amatör kıyı kararı + BSGM kiralama bağlamı + akademik tür kaydı + ikincil harita kontrolü",updatedAt:REVIEW_DATE,publishedAt:REVIEW_DATE,confidence:"B" as const,
    image:`/images/meralar/${args.slug}.svg`,socialImage:`/images/meralar/${args.slug}.svg`,navigationNote:`Koordinat ${args.areaNote} yerleşim/genel kıyı planlama referansıdır; 2026 kararındaki resmî kıyı şeridinin mikro başlangıç/bitiş noktası olarak kullanılmamalıdır. Son kilometre, park ve kamusal geçiş hareket günü doğrulanmalıdır.`,
    shoreProfile:"Keban Baraj Gölünde su kotuna bağlı olarak açık toprak/taş kıyı, eğimli şev ve dönemsel çamur görülebilir. Resmî tahsis kıyı şeridini tanımlar; güvenli atış cebi veya düz zemin garanti etmez.",
    transport:`${args.district} ve ilgili kırsal yerleşim üzerinden genel yaklaşım planlanabilir. Navigasyon yerleşim referansına kadar kullanılmalı; son kıyı yolu, araç uygunluğu, bariyer ve park alanı sahada teyit edilmelidir.`,crowdNote:"Hafta sonu ve uygun hava koşullarında yerel kullanım artabilir. Atış hattı, tekneler ve diğer kıyı kullanıcıları için güvenli mesafe bırakılmalıdır.",
    longIntro:[`${args.name}, 08.05.2026 tarihli Tunceli Su Ürünleri Amatör Avcılık Yer Belirleme Komisyonu kararında belirlenmiş ve 13.05.2026'da yayımlanmış resmî amatör kıyı düzenlemesine dayanır.`,`Güven B, belirlenen kıyı şeridinin resmî amatör kullanım kanıtına sahip olduğunu gösterir; her parselin kamusal olduğu, yolun açık olduğu veya balığın o gün kıyıda bulunduğu anlamına gelmez.`],
    planningNotes:["6/2 Tebliği, 2026 İl Tarım kararı ve yerel tabela birlikte kontrol edilmelidir.","Harita koordinatı yerleşim/genel kıyı planlama referansıdır; özel mülk ya da işletme yoluna kesin rota üretmez.","Geçmiş/bilimsel tür kaydı olasılık kanıtıdır; av garantisi değildir."],
    seasonalNotes:["Keban su kotu ve kıyı zemin yapısı mevsime göre önemli ölçüde değişebilir.","Rüzgâr, gök gürültülü fırtına ve görüş koşulları açık baraj kıyısında saha güvenliğini doğrudan etkiler."],
    sources,fishEvidence:[fishEv],accommodationOptions:[],accessEvidence:[{label:"2026 resmî amatör kıyı tahsisi",value:args.areaNote,sourceUrl:tunceliOfficial.url,note:"Kıyı kullanımının hukuki dayanağı İl Tarım kararındaki metindir; pin yalnız genel planlama referansıdır."}],navigationVerified:false,
    researchStatus:"Rota özelinde güçlü resmî amatör kullanım kanıtı ve çok kaynaklı masa başı doğrulama",researchSummary:"2026 Tunceli İl Tarım kararı, BSGM istihsal/kiralama listesi, Kültür Portalı, akademik tür kaydı ve ikincil harita verisi çaprazlandı.",researchedAt:REVIEW_DATE,
    confidenceProfile:{model:"evidence-v1",overall:"B",identity:{level:"strong",label:"Resmî rota kimliği",note:"2026 İl Tarım kararı Keban bölgesini ve kıyı şeridini adlandırır."},legal:{level:"strong",label:"Resmî amatör kullanım kanıtı",note:"İl Tarım kararı 6/2 Tebliği kapsamında amatör avcılık kıyısını ve 50 m su içi tahsisini belirler."},access:{level:"partial",label:"Genel yerleşim yaklaşımı",note:"Yerleşim/genel kıyı konumu bilinir; son kilometre, park ve kamusal geçiş saha teyitli değildir."},species:{level:"partial",label:"Bilimsel tür olasılığı",note:"Sazan Keban/ilgili bölge bilimsel kayıtlarında bulunur; güncel stok ve kıyıdan av başarısı garanti edilmez."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Zemin, su kotu, tabela ve güncel erişim hareket günü doğrulanmalıdır."},reviewedAt:REVIEW_DATE}
  };
  return base as EnrichedMera;
};

export const yeniCPlusMeralar20260824:EnrichedMera[]=[
  makeNew({slug:"tunceli-keban-4-yemisdere-resmi-amator-kiyisi",name:"Keban 4. Bölge Yemişdere Resmî Amatör Kıyısı",district:"Çemişgezek",zone:"Yemişdere",lat:38.92112,lng:38.98852,areaNote:"Yemişdere Köyü ve 2026 kararında köy altından dolgu alanı başlangıcına kadar tarif edilen kıyı kesimi",fishSource:cemisFish,secondaryUrl:"https://www.openstreetmap.org/node/1830678116"}),
  makeNew({slug:"tunceli-keban-5-korluca-gecityaka-resmi-amator-kiyisi",name:"Keban 5. Bölge Korluca-Geçityaka Resmî Amatör Kıyısı",district:"Pertek",zone:"Korluca-Geçityaka",lat:38.830738,lng:39.321838,areaNote:"Korluca Köyü ile Geçityaka mezrası arasında 2026 kararında tarif edilen kıyı şeridi",fishSource:pertekFish,secondaryUrl:"https://www.openstreetmap.org/search?query=Korluca%2C%20Pertek%2C%20Tunceli"}),
  makeNew({slug:"tunceli-keban-8-akpazar-resmi-amator-kiyisi",name:"Keban 8. Bölge Akpazar Resmî Amatör Kıyısı",district:"Mazgirt",zone:"Akpazar",lat:38.85071,lng:39.67815,areaNote:"Akpazar merkez kıyı şeridi; Elmalık, Demirci ve Karşıkonak ayrı resmî alt kesimlerdir ve bu pin onların mikro girişi değildir",fishSource:kebanFish,secondaryUrl:"https://www.openstreetmap.org/node/1491509876"})
];
