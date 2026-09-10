import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { applyDailyQuality20260909Stage2D } from "./meralar-daily-quality-2026-09-09-stage2d";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık Mevzuatı",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"6/2 Numaralı Tebliğ kapsamındaki 2024-2028 genel amatör avcılık çerçevesidir; yerel yasak, koruma, işletme ve saha kararları ayrıca uygulanır."
};

export const promoted20260909Stage2C=["ulusal-zonguldak-filyos-nehri-zonguldak-hatti"] as const;

export const applyDailyQuality20260909Stage2C=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260909Stage2C[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-09 Stage2C hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-09 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);

  const identity:ResearchSource={
    label:"Çaycuma Kaymakamlığı - Çaycuma'nın Tanıtımı",
    url:"https://www.caycuma.gov.tr/caycumanin-tanitimi",
    note:"Filyos Çayı'nın yaklaşık 35 km'lik bölümünün Çaycuma sınırlarından geçtiğini ve Filyos Beldesinde Karadeniz'e döküldüğünü resmî olarak doğrular; mikro kıyı girişi değildir."
  };
  const publicUse:ResearchSource={
    label:"Visit Zonguldak - Filyos Çayı",
    url:"https://www.visitzonguldak.com/tr/yerler/filyos-cayi",
    note:"Filyos Çayı'nı Çaycuma/Zonguldak bağlamında tanıtır ve rafting ile olta balıkçılığına uygun rekreasyon alanı olarak kaydeder. Bu ifade nehrin her metresini sürekli açık av sahası yapmaz."
  };
  const academicFish:ResearchSource={
    label:"Hacettepe Üniversitesi AVESİS - Anatolian Midwestern Black Sea freshwater fishes",
    url:"https://avesis.hacettepe.edu.tr/yayin/31e9266d-5fc7-4aa6-896e-30babd38ada6/freshwater-fishes-of-the-anatolian-midwestern-black-sea-basin",
    note:"2020 tarihli hakemli çalışma Filyos alt havzasını örneklenen ayrı bir balık topluluğu grubu olarak inceler; 27 tür/18 cins/9 familyalık güncel oluş verisi havza düzeyinde akademik tür kanıtıdır."
  };
  const localSpecies:ResearchSource={
    label:"Biotope Aquarium - Filyos River saha biyotop kaydı",
    url:"https://biotope-aquarium.info/aquariums/sedimented-and-vegetation-areas-of-filyos-river-zonguldak-turkey-135-l/",
    note:"Filyos Nehri saha biyotopunda Cyprinus carpio (sazan) dahil balık taksonlarını listeler. Resmî kaynak değildir; yalnız akademik havza kanıtını tamamlayan ikincil tür olasılığı olarak kullanılır."
  };

  const sources=[...new Map([...(previous.sources||[]),identity,publicUse,academicFish,localSpecies,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Filyos büyük, taşkın karakterli ve mevsimsel debisi değişken bir akarsudur. Turizm/olta uygunluğu genel koridor bağlamıdır; özel parseller, tarım arazileri, köprü/şantiye bölümleri, taşkın tahkimatı, sazlık/delta hassas alanları ve yasak/tabelalı kesimler rota dışında tutulmalıdır. Son kıyı cebi hareket günü doğrulanmalıdır.";

  routeMap.set(slug,{
    ...previous,
    province:"Zonguldak",
    district:"Çaycuma",
    waterType:"Akarsu",
    fish:["Sazan"],
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    summary:"Filyos Çayı'nın Çaycuma/Zonguldak kimliği Kaymakamlık kaydıyla, genel olta balıkçılığı kullanımı kurumsal turizm kaynağıyla, balık topluluğu ise hakemli Filyos alt havzası çalışması ve ikincil saha tür kaydıyla çaprazlandı. Güven C mikro kıyı veya av garantisi değildir.",
    longIntro:[
      "Filyos Çayı Zonguldak hattı, su varlığı ve ilçe kimliği resmî kaynakla; rekreasyonel olta kullanımı yerel kurumsal kaynakla; balık varlığı ise akademik Filyos havzası çalışmasıyla doğrulandığı için Güven C düzeyine çıkarılmıştır.",
      "Bu seviye nehrin her kıyısının kamusal ve sürekli açık olduğu anlamına gelmez. Taşkın, yüksek debi, özel mülkiyet, tarım arazileri, köprü/şantiye kesimleri, delta hassasiyetleri, 6/2 Tebliğ ve güncel saha tabelaları hareket günü birlikte kontrol edilmelidir."
    ],
    verification:`2026-09-09 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    updatedAt:"2026-09-09",
    researchedAt:"2026-09-09",
    researchStatus:"2026-09-09 Stage 2 rota özelinde resmî + akademik + yerel/destekleyici kaynaklarla tamamlandı.",
    researchSummary:`Çaycuma Kaymakamlığı Filyos Çayı'nın ilçe koridorunu doğruluyor; Visit Zonguldak olta balıkçılığını uygun faaliyet olarak kaydediyor; Hacettepe Üniversitesi çalışması Filyos alt havzasının balık topluluğunu akademik olarak örnekliyor. Sazan olasılığı yalnız ikincil saha kaydıyla desteklendiğinden av garantisi olarak sunulmuyor. ${risk}`,
    fishEvidence:[
      {name:"Sazan",evidenceLevel:"Orta · Filyos havzası akademik balık topluluğu + ikincil rota saha kaydı",sourceLabel:"Biotope Aquarium - Filyos River saha biyotop kaydı",sourceUrl:localSpecies.url,note:"Cyprinus carpio aynı Filyos nehri biyotop kaydında listelenir; hakemli çalışma ayrıca Filyos alt havzasında güncel balık oluş verisini doğrular. Kayıt güncel kıyı av başarısı veya stok yoğunluğu garantisi değildir.",recordCount:null,distanceKm:null}
    ],
    accessEvidence:[
      ...(previous.accessEvidence||[]),
      {label:"Resmî ilçe/akarsu koridoru",value:"Filyos Çayı · Çaycuma/Zonguldak genel koridor",sourceUrl:identity.url,note:"Kaymakamlık çayın yaklaşık 35 km'sinin ilçe sınırlarından geçtiğini doğrular; belirli kıyı geçişi veya park noktası değildir."},
      {label:"Genel rekreasyon/olta kullanımı",value:"Filyos Çayı",sourceUrl:publicUse.url,note:"Kurumsal turizm kaynağı olta balıkçılığını uygun faaliyet olarak sayar; özel parsel veya hassas mikro-konumlarda erişim hakkı üretmez."}
    ],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"Yağış sonrası hızlı debi yükselişi ve taşkın riski nedeniyle su seviyesi yüksekken kıyıya inilmemeli; MGM uyarıları ve yerel güvenlik duyuruları önceliklidir."])],
    navigationNote:`Pin yalnız Filyos Çayı'nın Çaycuma/Zonguldak genel koridorunu temsil eder; kesin park, yol sonu, kamusal kıyı cebi veya hassas delta mikro-konumu değildir. ${risk}`,
    confidenceProfile:{
      model:"evidence-v1",
      overall:"C",
      identity:{level:"strong",label:"Resmî rota ve ilçe kimliği",note:"Çaycuma Kaymakamlığı Filyos Çayı'nın yaklaşık 35 km'lik bölümünün ilçe sınırlarından geçtiğini ve Filyos Beldesinde denize ulaştığını doğrular."},
      legal:{level:"partial",label:"Genel mevzuat + kurumsal olta kullanım bağlamı",note:"6/2 Tebliğ geçerlidir; Visit Zonguldak olta balıkçılığını uygun faaliyet sayar. Bu, nehrin her kesimi için sürekli ve sınırsız av izni değildir."},
      access:{level:"partial",label:"Genel koridor ve rekreasyon bağlamı",note:"Çaycuma/Filyos koridoru ile olta rekreasyonu kaynaklıdır; mikro kıyı, özel mülkiyet, park ve son yaklaşım saha teyitli değildir."},
      species:{level:"partial",label:"Akademik havza + ikincil rota tür olasılığı",note:"Hakemli çalışma Filyos alt havzasında balık topluluğunu doğrular; sazan adı ikincil rota saha kaydıyla desteklenir. Av garantisi değildir."},
      field:{level:"unverified",label:"Saha doğrulaması yok",note:"Taşkın, kıyı tahkimatı, özel parsel, bariyer ve güncel tabela hareket günü yeniden kontrol edilmelidir."},
      reviewedAt:"2026-09-09"
    }
  });
  applyDailyQuality20260909Stage2D(routeMap);
  return routeMap;
};
