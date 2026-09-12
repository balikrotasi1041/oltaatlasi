import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık Mevzuatı",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; yerel koruma, dönem, işletme ve saha kararları ayrıca uygulanır."
};

export const promoted20260909Stage2D=["ulusal-cankiri-karadere-baraj-golu-cankiri"] as const;

export const applyDailyQuality20260909Stage2D=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260909Stage2D[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-09 Stage2D hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-09 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);

  const stocking:ResearchSource={
    label:"Çankırı İl Tarım ve Orman Müdürlüğü - 2018 Çalışma Raporu",
    url:"https://cankiri.tarimorman.gov.tr/Belgeler/KutuMenu/%C3%87al%C4%B1%C5%9Fma_%20Raporu_2018_web.pdf",
    note:"2018 su ürünleri balıklandırma tablosunda Eldivan Karadere Göleti'ni rota adıyla listeler ve gölete aynalı sazan bırakıldığını resmî olarak doğrular. Geçmiş balıklandırma yalnız güncel bulunma olasılığıdır; av garantisi değildir."
  };
  const recreation:ResearchSource={
    label:"Çankırı İl Kültür ve Turizm Müdürlüğü - Eldivan / Mesire Yerleri",
    url:"https://cankiri.ktb.gov.tr/TR-70622/mesire-yerleri.html",
    note:"Karadere ve Saray Göletleri çevresini orman, çeşme ve su kaynaklarıyla birlikte piknik ve kamp yapmaya elverişli genel rekreasyon alanları olarak tanımlar; her kıyı parçası için erişim veya av izni değildir."
  };
  const district:ResearchSource={
    label:"Çankırı İl Kültür ve Turizm Müdürlüğü - Eldivan",
    url:"https://cankiri.ktb.gov.tr/TR-242734/eldivan.html",
    note:"Karadere Göleti'ni Eldivan ilçesindeki günübirlik doğa ve rekreasyon bağlamında rota adıyla doğrular; mikro kıyı, park veya özel mülkiyet sınırı değildir."
  };
  const supporting:ResearchSource={
    label:"Kampp - Karadere Göleti saha/rekreasyon kaydı",
    url:"https://www.kampp.com/karadere-goleti-kamp-alani/",
    note:"Eldivan Karadere Göleti için piknik/kamp ve olta kullanımına ilişkin ikincil saha bağlamı sağlar. Resmî kaynak değildir; yalnız destekleyici olarak kullanılır."
  };

  const sources=[...new Map([...(previous.sources||[]),stocking,recreation,district,supporting,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Karadere bir sulama/rekreasyon göleti olarak değerlendirilmelidir. Mesire ve kamp uygunluğu gölet çevresinin tamamını sürekli açık olta kıyısı yapmaz; özel/tarımsal parseller, servis yolları, su yapıları, orman yangını tedbirleri, düşük su kotu, çamurlu şev ve güncel saha tabelaları hareket günü kontrol edilmelidir.";

  routeMap.set(slug,{
    ...previous,
    name:"Karadere Göleti",
    province:"Çankırı",
    district:"Eldivan",
    waterType:"Gölet",
    fish:["Sazan"],
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    summary:"Eldivan Karadere Göleti'nin rota kimliği ve genel rekreasyon bağlamı Çankırı İl Kültür ve Turizm kayıtlarıyla, sazan olasılığı ise İl Tarımın rota özelindeki 2018 balıklandırma raporuyla doğrulandı. Güven C mikro kıyı veya av garantisi değildir.",
    longIntro:[
      "Karadere Göleti, Eldivan'daki rota kimliği ve kamusal rekreasyon bağlamı ile rota özelindeki sazan balıklandırması birbirinden farklı kaynak aileleriyle eşleştiği için Güven C düzeyine çıkarılmıştır.",
      "Geçmiş sazan balıklandırması bugün türün bulunabileceğine dair güçlü bir olasılık kanıtıdır; güncel stok yoğunluğu veya yakalama garantisi değildir. Piknik/kamp bağlamı da gölet çevresindeki her parselin ve her kıyı cebinin sürekli açık olduğu anlamına gelmez."
    ],
    verification:`2026-09-09 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    updatedAt:"2026-09-09",
    researchedAt:"2026-09-09",
    researchStatus:"2026-09-09 Stage 2 rota özelinde resmî balıklandırma + resmî rekreasyon/ilçe + ikincil saha kaydıyla tamamlandı.",
    researchSummary:`Çankırı İl Tarımın 2018 çalışma raporu Eldivan Karadere Göleti'ni aynalı sazan balıklandırma tablosunda rota adıyla doğrular. İl Kültür ve Turizm kayıtları Karadere Göleti'ni Eldivan'da piknik/kamp için elverişli genel rekreasyon alanı olarak tanımlar. İkincil saha kaydı yalnız destekleyici olta/erişim bağlamı olarak tutulur. ${risk}`,
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü olasılık · resmî rota-özel balıklandırma kaydı",sourceLabel:stocking.label,sourceUrl:stocking.url,note:"Karadere Göleti 2018 resmî balıklandırma tablosunda aynalı sazan bırakılan sular arasında yer alır. Geçmiş balıklandırma güncel bulunma olasılığıdır; av garantisi değildir.",recordCount:null,distanceKm:null}
    ],
    accessEvidence:[
      ...(previous.accessEvidence||[]),
      {label:"Resmî genel rekreasyon bağlamı",value:"Karadere Göleti · Eldivan genel çevresi",sourceUrl:recreation.url,note:"İl Kültür ve Turizm Müdürlüğü gölet çevresini piknik/kamp için elverişli alan olarak tanımlar; bu bilgi kesin kıyı geçişi, park veya özel mülk erişim hakkı oluşturmaz."}
    ],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"Sazan için yürürlükteki 6/2 Tebliğdeki dönem, boy ve günlük adet kuralları ile varsa yerel kararlar hareket günü kontrol edilmelidir."])],
    navigationNote:`Mevcut pin yalnız Karadere Göleti'nin Eldivan'daki genel su/bölge konumunu temsil eder; kesin park, yol sonu, kamusal kıyı cebi veya özel mülk geçişi değildir. ${risk}`,
    confidenceProfile:{
      model:"evidence-v1",
      overall:"C",
      identity:{level:"strong",label:"Rota özelinde resmî kimlik",note:"Çankırı İl Kültür ve Turizm kayıtları Karadere Göleti'ni Eldivan ilçesinde rota adıyla doğrular; su türü gölet olarak düzeltilir."},
      legal:{level:"partial",label:"Genel mevzuat + saha kısıtları",note:"6/2 Tebliğ geçerlidir. Rekreasyon kaydı göletin her kıyısında sınırsız av izni değildir; yerel yasak, işletme, orman ve saha tabelaları ayrıca uygulanır."},
      access:{level:"partial",label:"Genel rekreasyon erişim bağlamı",note:"Resmî turizm kaynağı Karadere Göleti çevresini piknik/kamp için elverişli sayar; mikro kıyı, park, yol sonu ve mülkiyet sınırı saha teyitli değildir."},
      species:{level:"strong",label:"Rota özelinde sazan olasılığı",note:"İl Tarımın 2018 çalışma raporu Karadere Göleti'ni aynalı sazan bırakılan sular arasında açıkça listeler; bu geçmiş kayıt av garantisi değildir."},
      field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, kıyı zemini, bariyer, yangın tedbirleri, mülkiyet ve güncel tabela hareket günü yeniden kontrol edilmelidir."},
      reviewedAt:"2026-09-09"
    }
  });
  return routeMap;
};
