import type { EnrichedMera, ConfidenceProfile, ResearchSource } from "./meralar-tumu-core";

export const dailyQualityDate20260825="2026-08-25" as const;

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"2024-2028 amatör avcılık çerçevesidir; il/su özelindeki kararlar ve saha tabelaları ayrıca uygulanır."};
const tebligDegisiklik:ResearchSource={label:"Tarım ve Orman Bakanlığı - 6/2 Tebliğ değişikliği",url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",note:"2025 değişikliklerini gösterir; hareket günü güncel resmî metin kontrol edilmelidir."};
const cifteviBaliklandirma:ResearchSource={label:"Aksaray İl Tarım ve Orman Müdürlüğü - Çiftevi balıklandırması",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."};
const erzincanCevre:ResearchSource={label:"Erzincan 2023 İl Çevre Durum Raporu · DSİ yüzey suları",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/erz-ncan_-cdr2023-20240827091301.pdf",note:"Karasu Nehri'nin Erzincan içindeki güzergâhını ve su kaynağı kimliğini DSİ verileriyle doğrular; mikro kıyı izni değildir."};
const karasuFauna:ResearchSource={label:"Erzincan Üniversitesi Sempozyumu - Karasu Nehri yan kolları balık faunası",url:"https://ebyu.edu.tr/wp-content/uploads/2017/06/Uluslararas%C4%B1-Erzincan-Sempozyumu-Cilt-3-.pdf",note:"Karasu yan kollarında 12 balık türünü doğrudan örneklemeyle raporlar; tür olasılığını güçlendirir, av başarısı garantisi değildir."};
const dsi8:ResearchSource={label:"DSİ 8. Bölge - işletmedeki Erzurum baraj ve göletleri",url:"https://bolge08.dsi.gov.tr/Sayfa/Detay/854",note:"Demirdöven Barajını işletmedeki resmî su yapısı olarak doğrular."};
const demirdovenValilik:ResearchSource={label:"Erzurum Valiliği - Demirdöven Barajı sulama kullanımı",url:"https://erzurum.gov.tr/demirdoven-baraji-ciftcinin-yuzunu-guldurecek",note:"Demirdöven Barajının Pasinler/Köprüköy sulama bağlamını ve işletme kullanımını resmî yerel kaynakla doğrular; kıyı av izni değildir."};
const demirdovenAkademik:ResearchSource={label:"Kafkas Üniversitesi - Demirdöven Barajı ve Tımar Deresi faunistik çalışma",url:"https://dergipark.org.tr/tr/pub/kujs/article/362892",note:"Demirdöven/Tımar su sistemi için akademik saha çalışmasıdır; baraj kimliği ve ekolojik bağlamı destekler, balık stok garantisi değildir."};
const zapKtb:ResearchSource={label:"Hakkâri İl Kültür ve Turizm Müdürlüğü - akarsular ve balık varlığı",url:"https://hakkari.ktb.gov.tr/TR-349446/bitki-ortusu.html",note:"Zap Suyu başta olmak üzere Hakkâri akarsularında alabalık ve sazan grubu balıkların yaşadığını resmî yerel kaynak olarak belirtir."};
const zapAkademik:ResearchSource={label:"Hakkâri Sempozyumu - il su kaynakları ve su ürünleri",url:"https://atam.gov.tr/wp-content/uploads/2023/06/hakkari-sempozyumu.pdf",note:"Zap Suyu başta olmak üzere Hakkâri su kaynaklarını ve avcılığı yapılan sazan/alabalık türlerini akademik-kurumsal çalışmada değerlendirir."};

const uniqSources=(items:ResearchSource[])=>[...new Map(items.filter((item)=>item?.url).map((item)=>[item.url,item])).values()];

const profile=(identityNote:string,accessNote:string,speciesNote:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Çok kaynaklı rota kimliği",note:identityNote},
  legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ ve 2025 değişikliği kontrol edildi; belirli kıyı cebinin sürekli açık olduğu varsayılmaz."},
  access:{level:"partial",label:"Genel erişim/kullanım bağlamı",note:accessNote},
  species:{level:"strong",label:"Rota/havza özelinde güçlü tür olasılığı",note:speciesNote},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet, işletme sınırı ve güncel riskler hareket günü yeniden kontrol edilmelidir."},
  reviewedAt:dailyQualityDate20260825,
});

type Promotion={slug:string;addedSources:ResearchSource[];reason:string;access:string;species:string};

export const stage2Promotions20260825:Promotion[]=[
  {slug:"ulusal-aksaray-ciftevi-baraj-golu",addedSources:[cifteviBaliklandirma],reason:"Rota özelindeki resmî 10.000 sazan balıklandırması, mevcut su kimliği/yerel konum kaynakları ve güncel amatör avcılık mevzuatı birlikte değerlendirildi.",access:"Çiftevi/Ortaköy genel yaklaşımı planlama başlangıcıdır; son park, kıyı geçişi, mülkiyet ve varsa sulama işletme sınırı saha teyitli değildir.",species:"Sazan için rota özelinde resmî balıklandırma kaydı vardır; geçmiş kayıt güncel bulunurluk olasılığıdır, av garantisi değildir."},
  {slug:"ulusal-erzincan-karasu-nehri-erzincan-hatti",addedSources:[erzincanCevre,karasuFauna],reason:"DSİ verilerini kullanan resmî il çevre raporu Karasu'nun Erzincan koridorunu doğruluyor; akademik doğrudan örnekleme Karasu yan kollarında çoklu balık türlerini kaydediyor.",access:"Karasu'nun Tercan-Üzümlü-Merkez-Kemah-İliç-Kemaliye koridoru resmî olarak bilinir; tek bir mikro kıyı veya park noktası yayımlanmaz.",species:"Karasu yan kollarında doğrudan örneklenmiş 12 tür bulunur; aynı türlerin her kıyıda ve her tarihte bulunacağı varsayılmaz."},
  {slug:"ulusal-ardahan-kura-nehri-ardahan-hatti",addedSources:[],reason:"Mevcut rota dosyasındaki Ardahan İl Tarım Kura balık kurtarma kaydı, resmî su/havza kaynakları ve akademik ihtiyofauna katmanı birlikte yeniden değerlendirildi; mevcut güçlü tür kanıtı korunur.",access:"Kura için yalnız Ardahan genel akarsu koridoru kullanılır; koordinat, park ve mikro kıyı erişimi kesinleştirilmez.",species:"Mevcut rota-özel resmî balık yaşam alanı kaydı ile akademik/biyolojik kayıtlar birlikte değerlendirilir; av garantisi verilmez."},
  {slug:"ulusal-hakkari-zap-suyu-hakkari-hatti",addedSources:[zapKtb,zapAkademik],reason:"Hakkâri'nin resmî yerel kaynağı Zap Suyu'nda sazan grubu balıkların ve il akarsularında alabalığın varlığını kaydeder; Hakkâri su ürünleri çalışması Zap sistemi ve avcılığı yapılan türleri bağımsız akademik-kurumsal katmanda destekler.",access:"Zap Vadisi çok uzun ve yer yer sarp bir koridordur; yalnız genel bölge planlaması yapılır, güvenli mikro kıyı veya araç girişi iddia edilmez.",species:"Zap/Hakkâri su sistemi için sazan ve alabalık kanıtı iki bağımsız kaynak ailesinde bulunur; türlerin her kesimde bulunacağı varsayılmaz."},
  {slug:"ulusal-erzurum-demirdoven-baraj-golu",addedSources:[dsi8,demirdovenValilik,demirdovenAkademik],reason:"DSİ Demirdöven'i işletmedeki baraj olarak doğrular; Erzurum Valiliği Pasinler/Köprüköy sulama kullanımını ve genel yaklaşım bağlamını verir; akademik saha çalışması Demirdöven-Tımar su sistemini bağımsız olarak doğrular.",access:"Pasinler/Köprüköy ve baraj çevresi yalnız genel yaklaşım bağlamıdır; sulama tesisleri, teknik yapılar ve özel parseller kamusal olta noktası sayılmaz.",species:"Mevcut rota dosyasındaki biyolojik/tür kanıtı korunur; yeni akademik kaynak su sisteminin ekolojik bağlamını destekler, stok yoğunluğu veya av başarısı garantisi değildir."},
];

const promote=(routeMap:Map<string,EnrichedMera>,item:Promotion)=>{
  const previous=routeMap.get(item.slug);
  if(!previous)throw new Error(`25 Ağustos Stage 2 hedefi bulunamadı: ${item.slug}`);
  if(previous.confidence!=="D")throw new Error(`25 Ağustos Stage 2 hedefi artık D değil: ${item.slug} (${previous.confidence})`);
  const existingSources=previous.sources||[];
  if(existingSources.length+item.addedSources.length<2)throw new Error(`25 Ağustos Stage 2 en az iki kaynak kapısı sağlanmadı: ${item.slug}`);
  const sources=uniqSources([...existingSources,...item.addedSources,teblig,tebligDegisiklik]);
  routeMap.set(item.slug,{
    ...previous,
    confidence:"C",
    updatedAt:dailyQualityDate20260825,
    researchedAt:dailyQualityDate20260825,
    locationPrecision:previous.locationPrecision||"Genel bölge",
    navigationVerified:false,
    researchStatus:"25 Ağustos çok kaynaklı masa başı doğrulama · saha teyidi yok",
    researchSummary:`${item.reason} ${item.access}`,
    verification:`25 Ağustos 2026 yeniden doğrulaması: ${item.reason} Güven C mikro kıyı erişimi, sürekli av izni veya av başarısı garantisi değildir.`,
    summary:`${previous.name}, kimlik, genel kullanım/erişim, mevzuat ve tür olasılığı ayrı kanıt katmanlarıyla yeniden çaprazlanarak Güven C düzeyine yükseltilen genel bölge planlama rotasıdır.`,
    longIntro:[`${previous.name} için 25 Ağustos 2026 kalite turunda bağımsız resmî/bilimsel/yerel kaynak aileleri yeniden çaprazlandı. ${item.reason}`,`${item.access} ${item.species}`],
    cautions:[...new Set([...(previous.cautions||[]),"Son kıyı girişi, park, mülkiyet, işletme/koruma sınırı, su seviyesi ve saha tabelaları hareket günü yeniden doğrulanmalıdır."])],
    sources,
    confidenceProfile:profile(item.reason,item.access,item.species),
  });
};

export const applyDailyQualityStage2_20260825=(routeMap:Map<string,EnrichedMera>)=>{
  for(const item of stage2Promotions20260825)promote(routeMap,item);
  return routeMap;
};
