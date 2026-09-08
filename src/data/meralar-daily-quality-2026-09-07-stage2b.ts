import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { applyDailyQuality20260908Stage2 } from "./meralar-daily-quality-2026-09-08-stage2";

const teblig:ResearchSource={
  label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; suya özgü işletme, koruma, dönem ve saha kararları ayrıca uygulanır."
};

export const promoted20260907Stage2B=["ankara-500km-cankiri-akhasan-baraj-golu"] as const;

export const applyDailyQuality20260907Stage2B=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260907Stage2B[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-07 Stage2B hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-07 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);

  const sources:ResearchSource[]=[
    {label:"Çerkeş Kaymakamlığı - Akhasan Barajı 2026 saha incelemesi",url:"https://www.cerkes.gov.tr/sayin-kaymakamimiz-emir-osman-bulgurlu-akhasan-baraji-ve-turbasi-koyu-sulama-goletinde-incelemelerde-bulundu",note:"Akhasan Barajını Çerkeş'te rota adıyla doğrular; Kaymakamlık ve DSİ görüşmesi üzerinden 2026 güncel su seviyesi/işletme bağlamı verir. Mikro kıyı erişim izni değildir."},
    {label:"AA - 2023 Çerkeş Akhasan/Bozoğlu/Bayındır balıklandırması",url:"https://www.haberler.com/ekonomi/cerkes-ilcesinde-su-kaynaklarina-172-bin-yavru-sazan-birakildi-16348066-haberi/",note:"Tarım ve Orman Bakanlığının Su Kaynaklarının Balıklandırılması Projesi kapsamında Akhasan Barajı, Bozoğlu ve Bayındır göletlerine toplam 172 bin sazan yavrusu bırakıldığını rota adıyla bildirir; toplam miktar Akhasan'a özel ayrıştırılmaz."},
    {label:"Çerkeş yerel saha kaydı - Akhasan Barajı kullanım ve kuraklık bağlamı",url:"https://www.ajanscerkes.com/haber/cerkes-akhasan-baraji-tehdit-altinda_1756/",note:"Akhasan'ın Çerkeş'in yaklaşık 15 km güneyindeki genel konumunu, sulama kullanımını, kuraklık baskısını ve amatör olta kullanımını bağımsız yerel destekleyici kaynak olarak bildirir; resmî izin veya mikro erişim kanıtı değildir."},
    teblig
  ];

  const uniqSources=[...new Map([...(previous.sources||[]),...sources].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Sulama amaçlı aktif su yapısıdır; su kotu kuraklık ve tarımsal kullanım nedeniyle değişebilir. Baraj gövdesi/teknik tesisler, servis yolları, özel parseller ve bariyerli alanlar rota dışıdır; son kıyı geçişi ve saha tabelaları hareket günü kontrol edilmelidir.";

  routeMap.set(slug,{
    ...previous,
    fish:["Sazan"],
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    summary:"Akhasan Barajının Çerkeş'teki rota kimliği 2026 tarihli Kaymakamlık/DSİ bağlamıyla, sazan olasılığı Bakanlık balıklandırma projesi kaydıyla ve genel kullanım/kuraklık durumu bağımsız yerel kaynakla çaprazlandı. Balıklandırma av garantisi değildir.",
    longIntro:[
      "Akhasan Baraj Gölü, rota kimliği, güncel su/işletme bağlamı, tür olasılığı ve genel kullanım bilgisi birbirinden bağımsız kaynak aileleriyle desteklendiği için Güven C düzeyine çıkarılmıştır.",
      "Güven C belirli bir kıyı cebinin sürekli açık veya kamusal olduğunu göstermez. Harita pini yalnız genel baraj konumudur; park, yol sonu, özel mülkiyet, baraj teknik sahası ve güncel tabela hareket günü ayrıca doğrulanmalıdır."
    ],
    verification:`2026-09-07 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    updatedAt:"2026-09-07",
    researchedAt:"2026-09-07",
    researchStatus:"2026-09-07 Stage 2 rota özelinde çok kaynaklı araştırma tamamlandı.",
    researchSummary:`Akhasan Barajı için Çerkeş Kaymakamlığı/DSİ güncel rota ve su bağlamı, Tarım ve Orman kaynaklı sazan balıklandırması ve bağımsız yerel kullanım/kuraklık kaydı çaprazlandı. ${risk}`,
    fishEvidence:[{name:"Sazan",evidenceLevel:"Güçlü olasılık · rota özelinde balıklandırma kaydı",sourceLabel:"AA - 2023 Çerkeş Akhasan/Bozoğlu/Bayındır balıklandırması",sourceUrl:"https://www.haberler.com/ekonomi/cerkes-ilcesinde-su-kaynaklarina-172-bin-yavru-sazan-birakildi-16348066-haberi/",note:"Akhasan Barajı balıklandırma programında rota adıyla yer alır. Geçmiş balıklandırma güncel stok yoğunluğu, yasal boy veya av başarısı garantisi değildir.",recordCount:null,distanceKm:null}],
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Çerkeş genel kullanım bağlamı",value:"Akhasan Barajı · Çerkeş genel bölge",sourceUrl:"https://www.ajanscerkes.com/haber/cerkes-akhasan-baraji-tehdit-altinda_1756/",note:"Yerel kayıt barajın genel konumunu, sulama ve amatör olta kullanım bağlamını destekler; mikro kıyı, park veya özel mülk geçişini doğrulamaz."}],
    sources:uniqSources,
    cautions:[...new Set([...(previous.cautions||[]),risk])],
    navigationNote:`Pin yalnız Akhasan Baraj Gölü genel su/bölge konumunu gösterir; park, yol sonu, kamusal kıyı cebi veya özel mülk geçişi değildir. ${risk}`,
    confidenceProfile:{
      model:"evidence-v1",
      overall:"C",
      identity:{level:"strong",label:"Rota özelinde güncel kimlik kanıtı",note:"Akhasan Barajı Çerkeş Kaymakamlığının 2026 saha incelemesi ve DSİ bağlamıyla rota adıyla doğrulanır; konum yalnız genel bölgedir."},
      legal:{level:"partial",label:"Genel mevzuat + işletme bağlamı",note:"6/2 Tebliğ geçerlidir; sulama/baraj işletme alanları, yerel kısıtlar ve saha tabelaları ayrıca uygulanır. Belirli kıyının sürekli açık olduğu varsayılmaz."},
      access:{level:"partial",label:"Genel kullanım bağlamı",note:"Bağımsız yerel kaynak Akhasan'da amatör olta kullanımını ve genel çevreyi destekler; mikro kıyı, park, yol sonu ve özel mülk geçişi saha teyitli değildir."},
      species:{level:"strong",label:"Rota özelinde sazan olasılığı",note:"Akhasan Barajı Tarım ve Orman Bakanlığı balıklandırma projesinde sazan bırakılan sular arasında rota adıyla geçer; geçmiş balıklandırma yalnız bulunma olasılığıdır, av garantisi değildir."},
      field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, zemin, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir."},
      reviewedAt:"2026-09-07"
    }
  });
  applyDailyQuality20260908Stage2(routeMap);
  return routeMap;
};
