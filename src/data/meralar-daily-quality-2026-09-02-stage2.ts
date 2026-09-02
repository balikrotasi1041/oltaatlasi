import type { ConfidenceProfile, EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 amatör avcılık çerçevesi; il/ilçe, koruma, kiralama, işletme ve saha tabelaları ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
const fishEvidence=(name:string,scientificName:string,source:ResearchSource,note:string)=>({name,scientificName,evidenceLevel:"Güçlü olasılık · rota özelinde kaynak",sourceLabel:source.label,sourceUrl:source.url,note,recordCount:null,distanceKm:null});
const profile=(speciesNote:string,accessNote:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Rota kimliği güçlü",note:"Su adı, il/ilçe ve su türü rota özelindeki resmî/kurumsal kaynaklarla eşleşir; harita pini mikro kıyı girişi değildir."},
  legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ çerçevesi kontrol edilmiştir; yerel koruma, kiralama, işletme ve geçici yasaklar hareket günü ayrıca doğrulanmalıdır."},
  access:{level:"partial",label:"Kamusal genel kullanım bağlamı",note:accessNote},
  species:{level:"strong",label:"Rota özelinde güçlü tür olasılığı",note:speciesNote},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Son kıyı girişi, park, bariyer, zemin, su kotu, özel mülkiyet ve güncel tabela masa başından kesinleştirilmemiştir."},
  reviewedAt:"2026-09-02",
});

type Promotion={sources:ResearchSource[];district?:string;fish:{name:string;scientificName:string;source:ResearchSource;note:string}[];access:string;summary:string;caution:string;transport?:string};

const yozgatStock:ResearchSource={label:"Yozgat İl Tarım ve Orman Müdürlüğü · 2025 içsu balıklandırma",url:"https://yozgat.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=725",note:"19 Ağustos 2025 tarihli resmî kayıtta 17 suya toplam 297.750 yavru sazan bırakıldığı; Altınsu 20.000, Divanlı 20.000 ve Uzunlu 40.000 olarak rota adı ve ilçeyle listelenir. Geçmiş balıklandırma av garantisi değildir."};
const zinavValilik:ResearchSource={label:"Tokat Valiliği · Zinav Kanyonu ve Gölü",url:"https://tokat.gov.tr/zinav-kanyonu-ve-golu",note:"Reşadiye/Yolüstü yakınındaki Zinav Gölü kimliğini, tatlı su niteliğini, balıkçılığa uygun genel kullanım bağlamını ve sazan/yayın gibi türleri rota özelinde bildirir."};
const zinavKultur:ResearchSource={label:"Kültür Portalı · Sportif Olta Balıkçılığı - Zinav Gölü",url:"https://www.kulturportali.gov.tr/turkiye/tokat/TurizmAktiviteleri/zinav-golu",note:"2 Mayıs 2025 güncellemeli kurumsal içerik Zinav'da sportif olta balıkçılığını açıkça faaliyet olarak sayar; korunan alan kuralları ayrıca geçerlidir."};
const uzuncayirKultur:ResearchSource={label:"Kültür Portalı · Tunceli Baraj Gölleri",url:"https://www.kulturportali.gov.tr/turkiye/tunceli/turizmaktiviteleri/baraj-golleri",note:"8 Mayıs 2025 güncellemeli içerik Uzunçayır kıyılarında sportif olta balıkçılığını ve genel rekreasyon kullanımını açıkça belirtir."};
const uzuncayirAcademic:ResearchSource={label:"Aquaculture Studies · Uzunçayır Baraj Gölü balık faunası",url:"https://dergipark.org.tr/tr/pub/yunusae/article/235421",note:"Uzunçayır Baraj Gölü ve bağlantılı akarsularda 2011-2012 örneklemesiyle 12 takson; Cyprinus carpio ve Squalius cephalus dahil rota özelinde balık faunası kaydı sağlar."};
const sunnetValilik:ResearchSource={label:"Bolu Valiliği · Av Turizmi",url:"https://bolu.gov.tr/av-turizmi",note:"Sünnet Gölü'nü sportif olta balıkçılığı için sayar ve sazan dahil tatlısu balıklarının olta ile avlanabildiğini kurumsal olarak belirtir."};
const sunnetStock:ResearchSource={label:"Bolu İl Tarım ve Orman Müdürlüğü · Göl ve göletler balıklandırılıyor",url:"https://bolu.tarimorman.gov.tr/Haber/295/Gelecege-Yatirim-Yapiliyor-Bolu-Gol-Ve-Goletleri-Baliklandiriliyor",note:"Sünnet Gölü/Göynük için 2015 programında 12.000 yavru balık bırakıldığını rota adıyla kaydeder; güncel stok yoğunluğu veya av başarısı değildir."};
const uzunluKaymakamlik:ResearchSource={label:"Boğazlıyan Kaymakamlığı · Uzunlu Barajı",url:"https://www.bogazliyan.gov.tr/uzunlu-baraji",note:"Uzunlu Barajı'nın Yozgat/Boğazlıyan'da Kozanözü Deresi üzerindeki sulama ve taşkın amaçlı resmî baraj kimliğini doğrular."};
const uzunluLocal:ResearchSource={label:"İHA · Uzunlu Barajı 2025 saha kullanımı",url:"https://www.iha.com.tr/yozgat-haberleri/kuraklik-etkisini-gosterdi-uzunlu-baraji-gozle-gorulur-sekilde-cekildi-310989918",note:"5 Ekim 2025 saha haberi barajın güncel su seviyesi ve balık varlığı bağlamını destekler; mikro kamusal kıyı izni değildir."};
const divanliTarim:ResearchSource={label:"Yozgat İl Tarım ve Orman Müdürlüğü · Divanlı Göleti Millet Bahçesi",url:"https://yozgat.tarimorman.gov.tr/Haber/775/Budama-Egitimi-Verildi",note:"19 Şubat 2026 tarihli resmî içerik Divanlı Göleti bölgesindeki Saraykent Belediyesi Millet Bahçesi kamusal kullanım bağlamını doğrular."};
const divanliLocal:ResearchSource={label:"Yerel komisyon raporu · Divanlı Göleti",url:"https://www.yozgatcamlik.com/saraykent-haber/saraykentin-goletlerinde-su-sorunu-22141789h",note:"İl Genel Meclisi Göletler ve Su Ürünleri Komisyonu aktarımında Divanlı'da olta balıkçılığı yapıldığı ve gölet çevresindeki belediye Millet Bahçesinin vatandaşların hizmetinde olduğu belirtilir."};
const altinsuLocal:ResearchSource={label:"Yozgat İl Genel Meclisi raporu · Altınsu Göleti",url:"https://www.yozgathakimiyet.com.tr/yozgat-meclisinde-baraj-ve-goletler-gorusuldu",note:"3 Şubat 2026 tarihli komisyon raporu Altınsu'yu Saraykent ilçesinde sulama göleti olarak tanımlar ve mevcut durumda yalnız olta balıkçılığına izin verildiğini aktarır."};

export const promoted20260902Stage2=[
  "ankara-500km-tokat-zinav-golu",
  "ulusal-tunceli-uzuncayir-baraj-golu",
  "ankara-500km-bolu-sunnet-golu",
  "ulusal-yozgat-uzunlu-baraj-golu",
  "ankara-500km-yozgat-divanli-goleti",
  "ankara-500km-yozgat-altinsu-goleti",
] as const;

const promotions:Record<(typeof promoted20260902Stage2)[number],Promotion>={
  "ankara-500km-tokat-zinav-golu":{sources:[zinavValilik,zinavKultur],district:"Reşadiye",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:zinavValilik,note:"Tokat Valiliği Zinav Gölü'nde sazanı rota özelinde bildirir; bulunurluk/yakalama garantisi değildir."}],access:"Valilik ve Kültür Portalı gölü turizm/rekreasyon ve sportif olta bağlamında tanımlar; korunan orman/tabiat parkı zonları, son kıyı ve park noktası ayrıca kontrol edilmelidir.",summary:"Zinav Gölü; Tokat Valiliği ve Kültür Portalında Reşadiye/Yolüstü yakınındaki korunan tatlısu gölü, sportif olta balıkçılığı yapılan ve sazan varlığı bildirilen rota olarak doğrulanır. Genel planlama Güven C'dir; koruma zonları ve mikro kıyı girişi saha teyitlidir.",caution:"Zinav Gölü korunan doğal alan bağlamındadır; DKMP/yerel tabela, ateş-kamp, kıyı kullanımı ve geçici koruma kararları genel olta bilgisinden üstündür."},
  "ulusal-tunceli-uzuncayir-baraj-golu":{sources:[uzuncayirKultur,uzuncayirAcademic],district:"Merkez / Mazgirt koridoru",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:uzuncayirAcademic,note:"Akademik göl örneklemesinde Cyprinus carpio kaydedilmiştir."},{name:"Tatlısu Kefali",scientificName:"Squalius cephalus",source:uzuncayirAcademic,note:"Akademik göl örneklemesinde Squalius cephalus kaydedilmiştir."}],access:"Tunceli İl Kültür ve Turizm kaynağı göl kıyılarını piknik/kamp ve sportif olta bağlamında tanımlar; bu genel kullanım kaydı her kıyı cebini açık veya güvenli yapmaz.",summary:"Uzunçayır Baraj Gölü; güncel kurumsal turizm kaydında sportif olta bağlamı ve hakemli fauna çalışmasında rota özelinde balık taksonlarıyla desteklenir. Güven C yalnız genel kıyı planlaması içindir; enerji/işletme alanları ve mikro erişim ayrıca kontrol edilir.",caution:"Baraj işletme, enerji, su seviyesi, dik şev ve olası yetiştiricilik/tekne çalışma alanlarından uzak durulmalı; Kanoğlu gibi daha güçlü resmî sınır kaydı bulunan özel rotalar varsa onlar tercih edilmelidir."},
  "ankara-500km-bolu-sunnet-golu":{sources:[sunnetValilik,sunnetStock],district:"Göynük",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:sunnetValilik,note:"Bolu Valiliği Sünnet'i sportif olta suları arasında sayıp sazan dahil balıkların olta ile avlanabildiğini bildirir."}],access:"Bolu Valiliği Sünnet Gölü'nü sportif olta balıkçılığı yapılan sular arasında sayar; ormanlık çevrede son yol, yangın/koruma tedbirleri ve güncel saha tabelası ayrıca kontrol edilmelidir.",summary:"Sünnet Gölü, Bolu Valiliğinin sportif olta listesi ve İl Tarımın rota adını içeren balıklandırma kaydıyla Güven C düzeyinde genel planlama rotasına yükseltilmiştir. Son orman kıyısı, park ve güncel dönem koşulları saha teyitlidir.",caution:"Ormanlık çevrede yangın tedbirleri, dönemsel yol/alan kapatmaları, göl işletmesi ve özel parsel sınırları hareket günü kontrol edilmelidir."},
  "ulusal-yozgat-uzunlu-baraj-golu":{sources:[uzunluKaymakamlik,yozgatStock,uzunluLocal],district:"Boğazlıyan",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:yozgatStock,note:"2025 resmî programında Uzunlu'ya 40.000 yavru sazan bırakılmıştır; geçmiş balıklandırma güncel yakalama garantisi değildir."}],access:"Barajın Uzunlu/Boğazlıyan kimliği resmîdir; güncel saha haberleri vatandaşların kıyı çevresini kullandığını destekler. Son kıyı geçişi, tarımsal işletme ve mülkiyet sınırı kesinleştirilmemiştir.",summary:"Uzunlu Barajı; Boğazlıyan Kaymakamlığı su yapısı kaydı, 2025 Yozgat İl Tarım sazan balıklandırması ve güncel saha kullanımıyla Güven C genel planlama düzeyine çıkarılmıştır. Düşük su kotu ve tarımsal işletme riski nedeniyle mikro kıyı iddiası yapılmaz.",caution:"2025'te ciddi kuraklık ve düşük su seviyesi raporlanmıştır; çamur, oksijensizlik/balık ölümü, sulama işletmesi, kıyı bariyeri ve güncel su kotu hareket günü kontrol edilmelidir."},
  "ankara-500km-yozgat-divanli-goleti":{sources:[yozgatStock,divanliTarim,divanliLocal],district:"Saraykent",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:yozgatStock,note:"2025 resmî programında Divanlı Göleti'ne 20.000 yavru sazan bırakılmıştır; av garantisi değildir."}],access:"İl Tarım 2026 kaydı Divanlı Göleti bölgesindeki Saraykent Belediyesi Millet Bahçesini, komisyon raporu ise vatandaş kullanımını ve olta balıkçılığını doğrular; göletin tüm kıyısı kamusal kabul edilmez.",summary:"Divanlı Göleti, 2025 rota özelindeki sazan balıklandırması ile 2026 Millet Bahçesi/kamusal rekreasyon ve olta kullanım kayıtlarının kesişmesi sayesinde Güven C genel planlama rotasıdır. Son kıyı cebi ve gölet işletme sınırı saha teyitlidir.",caution:"Millet Bahçesi varlığı göletin tüm çevresini av alanı yapmaz; oyun/piknik alanlarından, sulama yapılarından ve özel/tahsis dışı parsellerden güvenli mesafe bırakılmalıdır."},
  "ankara-500km-yozgat-altinsu-goleti":{sources:[yozgatStock,altinsuLocal],district:"Saraykent",fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:yozgatStock,note:"2025 resmî programında Altınsu Göleti'ne 20.000 yavru sazan bırakılmıştır; av başarısı garantisi değildir."}],access:"2026 İl Genel Meclisi komisyon raporu Altınsu'yu Saraykent'te tanımlar ve mevcut kullanımın olta balıkçılığı olduğunu aktarır; mikro kıyı ve son yol kamuya açık kabul edilmez.",summary:"Altınsu Göleti, 2025 resmî sazan balıklandırması ve 2026 il komisyonunun olta kullanımı kaydıyla Güven C genel planlama düzeyine yükseltilmiştir. Önceki Sorgun alan etiketi resmî kaynağa göre Saraykent olarak düzeltilir; son kıyı girişi saha teyitlidir.",caution:"Kuraklık nedeniyle düşük doluluk raporlanmıştır; yumuşak çamur, sulama yapıları, su kotu, tarla geçişi ve kıyı mülkiyeti hareket günü kontrol edilmelidir."},
};

export const applyDailyQuality20260902Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260902Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-02 Stage2 hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-02 Stage2 gerçek D→C değil: ${slug} (${previous.confidence})`);
    const item=promotions[slug];
    const primary=item.fish[0];
    routeMap.set(slug,{
      ...previous,
      district:item.district||previous.district,
      fish:item.fish.map((f)=>f.name),
      fishEvidence:item.fish.map((f)=>fishEvidence(f.name,f.scientificName,f.source,f.note)),
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:"Harita pini yalnız genel su/alan planlaması içindir; son kıyı girişi, park, yol açıklığı, özel mülkiyet, bariyer ve güncel saha tabelası hareket günü ayrıca doğrulanmalıdır.",
      summary:item.summary,
      researchSummary:item.summary,
      researchStatus:"2 Eylül 2026 Aşama 2 masa başı doğrulaması: rota kimliği, tür olasılığı, kamusal genel kullanım bağlamı ve mevzuat en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi; mikro erişim iddiası üretilmedi.",
      verification:`2 Eylül 2026: ${primary.source.label} dahil rota-özel kanıtlar çaprazlandı. Güven C genel planlama düzeyidir; saha teyidi ve av garantisi değildir.`,
      sources:uniq([...(previous.sources||[]),...item.sources,teblig]),
      accessEvidence:[...(previous.accessEvidence||[]),{label:"Kamusal genel kullanım bağlamı",value:"Genel alan/olta kullanım kanıtı",sourceUrl:item.sources.find((s)=>s!==primary.source)?.url||item.sources[0].url,note:item.access}],
      longIntro:[item.summary,item.access],
      cautions:[...new Set([...(previous.cautions||[]),item.caution,"6/2 Tebliğ, il/ilçe duyuruları, işletme/koruma kararları ve saha tabelaları hareket günü yeniden kontrol edilmelidir."])],
      researchedAt:"2026-09-02",
      updatedAt:"2026-09-02",
      confidenceProfile:profile(primary.note,item.access),
    });
  }
  return routeMap;
};
