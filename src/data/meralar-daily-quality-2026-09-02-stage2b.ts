import type { ConfidenceProfile, EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 amatör avcılık çerçevesi; yerel koruma, işletme, kiralama ve saha tabelaları ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
const fishEvidence=(name:string,scientificName:string,source:ResearchSource,note:string)=>({name,scientificName,evidenceLevel:"Güçlü olasılık · rota özelinde kaynak",sourceLabel:source.label,sourceUrl:source.url,note,recordCount:null,distanceKm:null});
const profile=(speciesNote:string,accessNote:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Rota kimliği güçlü",note:"Su adı, il/ilçe ve su türü rota özelindeki kurumsal kaynaklarla eşleşir; genel konum mikro kıyı girişi değildir."},
  legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ çerçevesi kontrol edilmiştir; yerel koruma, işletme, geçici yasak ve saha tabelaları hareket günü ayrıca doğrulanmalıdır."},
  access:{level:"partial",label:"Kamusal genel kullanım bağlamı",note:accessNote},
  species:{level:"strong",label:"Rota özelinde güçlü tür olasılığı",note:speciesNote},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Son kıyı girişi, park, bariyer, zemin, su kotu, özel mülkiyet ve güncel tabela masa başından kesinleştirilmemiştir."},
  reviewedAt:"2026-09-02",
});
type Promotion={sources:ResearchSource[];district?:string;fish:{name:string;scientificName:string;source:ResearchSource;note:string}[];access:string;summary:string;caution:string};

const todurgeKaymakamlik:ResearchSource={label:"Zara Kaymakamlığı · Tödürge Gölü",url:"https://www.zara.gov.tr/todurge-golu",note:"Tödürge Gölü'nün Zara ilçesindeki kimliğini, çevresindeki mera/hazine arazisi bağlamını ve gölde balık türlerinin bulunduğunu kurumsal olarak açıklar."};
const todurgeTurizm:ResearchSource={label:"Zara Kaymakamlığı · Turizm ve mesire alanları",url:"https://www.zara.gov.tr/turizm",note:"Tödürge Gölü'nün yöre halkı ve ziyaretçilerce rekreasyon amacıyla kullanılan genel alan olduğunu destekler; mikro kıyı izni değildir."};
const todurgeAcademic:ResearchSource={label:"DergiPark · Tödürge Gölü balık çalışması",url:"https://dergipark.org.tr/tr/pub/limnofish/issue/34314/379071",note:"Tödürge Gölü'nde rota özelinde balık örneklemesine dayanan akademik çalışma; tür varlığı için bağımsız bilimsel kanıttır."};

const yapialtinStock:ResearchSource={label:"AA · Şarkışla barajlarına Tarım ve Orman balıklandırması",url:"https://www.aa.com.tr/tr/yesilhat/dogal-yasam/sarkislada-barajlara-100-bin-sazan-baligi-yavrusu-birakildi/1817425",note:"30 Ağustos 2022 tarihli kayıtta Tarım ve Orman Bakanlığı projesi kapsamında Yapıaltın, Kızılcakışla ve Maksutlu barajlarına sazan bırakıldığı; ilçe müdürlüğünün amatör avcıları dönem yasaklarına uymaya çağırdığı belirtilir."};
const yapialtinCurrent:ResearchSource={label:"Sivas İrade · 2026 Yapıaltın amatör olta saha kaydı",url:"https://www.sivasirade.com/haber/sivasta-fikra-gibi-olay-kancaya-takilan-balik-agaca-tirmandi-269385.html",note:"23 Haziran 2026 tarihli yerel saha kaydı Yapıaltın köyündeki gölette amatör olta kullanımını ve sazan yakalandığını destekleyici kanıt olarak aktarır; kamusal mikro giriş garantisi değildir."};

const deliceOfficial:ResearchSource={label:"Sivas Çevre Durum Raporu · İmranlı Delice Göleti",url:"https://webdosya.csb.gov.tr/db/ced/editordosya/Sivas2015.pdf",note:"Kurumsal çevre durum raporunun teknik su yapıları tablosu İmranlı/Delice Göleti'ni sulama amaçlı gölet olarak tanımlar; mikro kıyı erişimi değildir."};
const deliceCurrent:ResearchSource={label:"İHA · İmranlı Delice Göleti balıklandırması",url:"https://www.sivasekspres.com/haber/sivasta-yuzlerce-balik-suyla-bulustu-80023.html",note:"19 Eylül 2025'te Tarım ve Orman Bakanlığı içsu balıklandırması kapsamında Delice Göleti ve Kızılırmak Barajı'na yavru sazan bırakıldığı; Delice'deki programa İmranlı Kaymakamının katıldığı bildirilir."};
const deliceLocal:ResearchSource={label:"Yerel kamu aktarımı · Delice Göleti ve amatör balıkçılık",url:"https://www.bizimsivas.com.tr/sivasin-gollerine-bereket-yagdi",note:"2025 balıklandırmasını ve çalışmanın sportif/amatör balıkçılık gelişimine yönelik bağlamını destekler; son kıyı geçişinin açık olduğu anlamına gelmez."};

export const promoted20260902Stage2B=[
  "ankara-500km-sivas-todurge-golu",
  "ankara-500km-sivas-yapialtin-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
] as const;

const promotions:Record<(typeof promoted20260902Stage2B)[number],Promotion>={
  "ankara-500km-sivas-todurge-golu":{district:"Zara",sources:[todurgeKaymakamlik,todurgeTurizm,todurgeAcademic],fish:[{name:"Tatlısu Kefali",scientificName:"Squalius cephalus",source:todurgeAcademic,note:"Rota özelindeki akademik örneklemede Squalius cephalus kaydı bulunur; güncel yakalama garantisi değildir."}],access:"Kaymakamlık kaynakları gölün Zara'daki kamusal turizm/rekreasyon bağlamını ve çevrede mera-hazine arazilerini tarif eder. Bu genel bağlam her kıyı cebini açık, güvenli veya avlanabilir yapmaz.",summary:"Tödürge Gölü; Zara Kaymakamlığı kaynaklarında rota kimliği ve genel rekreasyon bağlamı, bağımsız akademik çalışmada rota özelinde balık varlığıyla desteklendiği için Güven C genel planlama düzeyine yükseltilmiştir. Karstik/sulak alan yapısı nedeniyle yalnız genel bölge kullanılır.",caution:"Sulak alan, sazlık/bataklık zemin, kuş yaşamı ve mevsimsel su değişimi nedeniyle hassas mikro kıyılara girilmemeli; koruma kararları, özel parsel sınırları ve güncel saha tabelaları önceliklidir."},
  "ankara-500km-sivas-yapialtin-baraj-golu":{district:"Şarkışla",sources:[yapialtinStock,yapialtinCurrent],fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:yapialtinStock,note:"Tarım ve Orman Bakanlığı projesi kapsamında Yapıaltın Barajı'na sazan yavrusu bırakıldığı kaydedilmiştir; geçmiş balıklandırma av garantisi değildir."}],access:"Şarkışla İlçe Tarım açıklaması amatör avcıları dönem yasaklarına uymaya çağırırken Yapıaltın'ı doğrudan balıklandırma sahaları arasında sayar; 2026 saha kaydı amatör olta kullanımını destekler. Son kıyı girişi ve mülkiyet ayrıca kontrol edilir.",summary:"Yapıaltın Baraj Gölü; rota özelindeki Tarım ve Orman balıklandırma kaydı ile güncel amatör olta saha kaydının kesişmesi sayesinde Güven C genel planlama düzeyine çıkarılmıştır. Sazan olasılığı güçlüdür ancak av başarısı ve mikro erişim garanti edilmez.",caution:"Baraj su kotu, dik/çamurlu şev, sulama işletmesi, gece görüşü ve boğulma riski önemlidir; suya girilmemeli, dolusavak/işletme alanlarından uzak durulmalı ve saha tabelaları izlenmelidir."},
  "ulusal-sivas-delice-baraj-golu-sivas":{district:"İmranlı",sources:[deliceOfficial,deliceCurrent,deliceLocal],fish:[{name:"Sazan",scientificName:"Cyprinus carpio",source:deliceCurrent,note:"2025 Tarım ve Orman içsu balıklandırmasında Delice Göleti'ne yavru sazan bırakıldığı rota adıyla kaydedilmiştir; av garantisi değildir."}],access:"Kurumsal su yapısı kaydı rota kimliğini doğrular; Delice Göleti'nde Kaymakam katılımlı balıklandırma programı ve amatör/sportif balıkçılığı destekleyen yerel aktarım genel kullanım bağlamı sağlar. Kesin kıyı girişinin kamusal ve güvenli olduğu masa başından doğrulanmış değildir.",summary:"İmranlı Delice Göleti; kurumsal su yapısı kaydı, 2025 Tarım ve Orman balıklandırması, Kaymakamlık katılımlı saha programı ve amatör balıkçılık bağlamını destekleyen kaynaklarla Güven C genel planlama düzeyine yükseltilmiştir. Mikro kıyı ve güncel su kotu saha teyitlidir.",caution:"Yüksek rakım, ani hava, düşük su sıcaklığı, çamurlu/dik kıyı ve sulama/işletme hareketleri risk yaratabilir; suya girilmemeli ve son yaklaşım gündüz kontrol edilmelidir."},
};

export const applyDailyQuality20260902Stage2B=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260902Stage2B){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2 Eylül Aşama 2B hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2 Eylül Aşama 2B gerçek D→C koşulu sağlanmıyor: ${slug} (${previous.confidence})`);
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
      researchStatus:"2 Eylül 2026 Aşama 2 ek doğrulaması: rota kimliği, tür olasılığı, kamusal genel kullanım bağlamı, risk ve mevzuat en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi; mikro erişim iddiası üretilmedi.",
      verification:`2 Eylül 2026: ${primary.source.label} dahil rota-özel kanıtlar çaprazlandı. Güven C genel planlama düzeyidir; saha teyidi ve av garantisi değildir.`,
      sources:uniq([...(previous.sources||[]),...item.sources,teblig]),
      accessEvidence:[...(previous.accessEvidence||[]),{label:"Kamusal genel kullanım bağlamı",value:"Rota özelinde genel kullanım/olta bağlamı",sourceUrl:item.sources[1]?.url||item.sources[0].url,note:item.access}],
      longIntro:[item.summary,item.access],
      cautions:[...new Set([...(previous.cautions||[]),item.caution,"6/2 Tebliğ, il/ilçe duyuruları, işletme/koruma kararları ve saha tabelaları hareket günü yeniden kontrol edilmelidir."])],
      researchedAt:"2026-09-02",
      updatedAt:"2026-09-02",
      confidenceProfile:profile(primary.note,item.access),
    });
  }
  return routeMap;
};
