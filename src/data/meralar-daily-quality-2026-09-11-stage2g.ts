import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık Mevzuatı",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; Eymir'de ODTÜ yönetim kuralları ve güncel saha kararları ayrıca uygulanır."
};

export const promoted20260911Stage2G=["ankara-500km-ankara-eymir-golu"] as const;

export const applyDailyQuality20260911Stage2G=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260911Stage2G[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-11 Stage2G hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-11 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);

  const rules:ResearchSource={
    label:"ODTÜ İç Hizmetler Müdürlüğü - Eymir Göl Kuralları",
    url:"https://ihm2.metu.edu.tr/eymir-gol-kurallari",
    note:"Eymir yerleşkesinin kontrollü giriş saatlerini ve balık avının yalnız belirli dönemlerde kontrollü yapılabildiğini; bir kişi için en fazla bir olta ve Göl Amirliği sahilinde av yasağını doğrudan bildirir."
  };
  const monitoring:ResearchSource={
    label:"ODTÜ EKOSAM - Eymir ve Mogan uzun dönem ekolojik izleme",
    url:"https://ekosam.metu.edu.tr/en/lake-eymir-and-mogan-long-term-ecological-monitoring-and-restoration-research",
    note:"Eymir Gölünde 27 yıldır kesintisiz ekolojik izleme yürütüldüğünü ve balık örneklemelerinin her yıl saha çalışmalarıyla toplandığını doğrular."
  };
  const species:ResearchSource={
    label:"TÜBİTAK Turkish Journal of Zoology - Lake Eymir biomanipulation",
    url:"https://journals.tubitak.gov.tr/zoology/vol24/iss3/11/",
    note:"Eymir Gölünde kadife (Tinca tinca) ve sazanı (Cyprinus carpio) baskın balıklar olarak rota özelinde bildiren hakemli çalışmadır; tarihsel tür kanıtı güncel av garantisi değildir."
  };
  const sources=[...new Map([...(previous.sources||[]),rules,monitoring,species,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Eymir ODTÜ tarafından yönetilen kontrollü bir yerleşkedir. Yaya/araç giriş saatleri, giriş kartı kuralları, dönemsel av kontrolü ve Göl Amirliği sahilindeki av yasağı önceliklidir. Harita pini izinli olta cebi, park veya sürekli açık kıyı anlamına gelmez.";

  routeMap.set(slug,{
    ...previous,
    name:"Eymir Gölü",
    province:"Ankara",
    district:"Gölbaşı",
    waterType:"Göl",
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    fish:[...new Set([...(previous.fish||[]),"Sazan","Kadife"])],
    summary:"Eymir Gölünde kontrollü olta kullanımı ODTÜ'nün resmî göl kurallarıyla; balık topluluğunun süreklilik gösteren izlenmesi ODTÜ EKOSAM ile; sazan ve kadife türleri hakemli rota-özel çalışma ile çaprazlandı. Güven C yalnız masa başı kanıt düzeyidir; güncel av dönemi ve izinli kıyı hareket günü kontrol edilir.",
    verification:`2026-09-11 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    researchedAt:"2026-09-11",
    updatedAt:"2026-09-11",
    researchStatus:"2026-09-11 Stage 2: ODTÜ resmî kullanım kuralları + ODTÜ uzun dönem izleme + hakemli rota-özel tür çalışması çaprazlandı.",
    researchSummary:`ODTÜ kuralları balık avını belirli dönemlerde kontrollü olarak açıkça düzenler; EKOSAM balık örneklemelerinin yıllık sürdüğünü doğrular; hakemli çalışma sazan ve kadifeyi Eymir'de rota özelinde kaydeder. ${risk}`,
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Kontrollü kamusal ziyaret ve olta bağlamı",value:"Eymir Gölü Yerleşkesi",sourceUrl:rules.url,note:"Yaya giriş saatleri ve kontrollü balık avı resmî olarak tanımlıdır; sürekli ve sınırsız kıyı erişimi değildir."}],
    fishEvidence:[
      ...(previous.fishEvidence||[]),
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Güçlü tarihsel rota kanıtı + güncel yıllık izleme",sourceLabel:species.label,sourceUrl:species.url,note:"Hakemli çalışma Eymir'de sazanı doğrudan kaydeder; EKOSAM yıllık balık örneklemelerinin sürdüğünü bildirir. Av garantisi değildir.",recordCount:null,distanceKm:null},
      {name:"Kadife",scientificName:"Tinca tinca",evidenceLevel:"Güçlü tarihsel rota kanıtı + güncel yıllık izleme",sourceLabel:species.label,sourceUrl:species.url,note:"Hakemli çalışma Eymir'de kadifeyi doğrudan kaydeder; güncel yoğunluk veya av başarısı iddiası değildir.",recordCount:null,distanceKm:null}
    ],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"Balık avı yalnız ODTÜ'nün izin verdiği dönem ve kesimlerde yapılmalıdır; Göl Amirliği sahil şeridinde olta avı yasaktır."])],
    navigationNote:`Pin Eymir Gölü genel bölgesini temsil eder; izinli balık avı kıyısı veya park noktası değildir. ${risk}`,
    confidenceProfile:{model:"evidence-v1",overall:"C",identity:{level:"strong",label:"ODTÜ resmî göl kimliği",note:"ODTÜ İç Hizmetler kuralları Eymir Gölü Yerleşkesini ve kullanım rejimini doğrudan tanımlar."},legal:{level:"strong",label:"Rota özelinde kontrollü av kuralı",note:"ODTÜ resmî kuralları avın belirli dönemlerde kontrollü olduğunu, bir kişi için en fazla bir olta ve Göl Amirliği sahilinde av yasağını bildirir; 6/2 Tebliğ ayrıca uygulanır."},access:{level:"partial",label:"Kontrollü ziyaret erişimi",note:"Yaya ziyaret saatleri tanımlıdır; araç girişleri ve bazı dönemler kısıtlıdır. Mikro kıyı/park saha teyitli değildir."},species:{level:"strong",label:"Hakemli rota tür kanıtı + devam eden izleme",note:"Sazan ve kadife Eymir'de hakemli çalışmayla kayıtlıdır; EKOSAM yıllık balık örneklemelerinin sürdüğünü bildirir."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Güncel av dönemi, izinli kesim, bariyer ve görevlilerin saha talimatları hareket günü kontrol edilmelidir."},reviewedAt:"2026-09-11"}
  });
  return routeMap;
};
