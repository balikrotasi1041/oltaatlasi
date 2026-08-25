import type { EnrichedMera } from "./meralar-tumu-core";
import { applyGunluk20260820 } from "./meralar-gunluk-2026-08-20";
import { applyStabilizasyon20260821 } from "./meralar-stabilizasyon-2026-08-21";
import { applyStabilizasyon20260822 } from "./meralar-stabilizasyon-2026-08-22";
import { applyStabilizasyon20260823 } from "./meralar-stabilizasyon-2026-08-23";
import { applyGrowth20260823 } from "./meralar-growth-2026-08-23";
import { applyDailyQualityRun20260824 } from "./meralar-daily-quality-2026-08-24-run";
import { applyDailyQualityStage2_20260825 } from "./meralar-daily-quality-2026-08-25-stage2";
import { applyDailyQualityStage2Continuation20260825 } from "./meralar-daily-quality-2026-08-25-stage2-continuation";

const valilik="https://www.kirikkale.gov.tr/turkuaz-bisiklet-yolunun-ilk-etabi-acildi";
const yesilVadi="https://www.kirikkale.gov.tr/vali-sayin-haktankacmaz-yesil-vadi-projesini-inceledi";
const map="https://mapcarta.com/N1038522591";

const appendDailyRiskNote=(routeMap:Map<string,EnrichedMera>,slug:string,note:string)=>{
  const route=routeMap.get(slug);
  if(!route)throw new Error(`24 Ağustos risk yaması hedefi yok: ${slug}`);
  routeMap.set(slug,{...route,cautions:[...new Set([...(route.cautions||[]),note])]});
};

export const applyGunlukSonuc20260818=(routeMap:Map<string,EnrichedMera>)=>{
  const slug="ulusal-kirikkale-kizilirmak-yahsihan-hatti";
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`18 Ağustos Yahşihan sonuç yaması hedefi yok: ${slug}`);
  routeMap.set(slug,{
    ...previous,
    lat:39.84558,
    lng:33.44711,
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    navigationNote:"Pin Yahşihan istasyonu/Yeşil Vadi genel yaklaşım bölgesini temsil eder ve Kızılırmak kıyısındaki kamusal rekreasyon koridoruna yakın planlama noktasıdır; kesin olta cebi değildir. Son yaklaşımda park, kıyı tahkimatı, taşkın durumu ve saha tabelası kontrol edilmelidir.",
    transport:"Kırıkkale-Ankara yolu üzerinden Yahşihan ve Yeşil Vadi/Irmak yönüne ulaşılır. Valilik kaynakları Kızılırmak Yeşil Vadi projesini Yahşihan-Hacıbalı/Irmak koridorunda tanımlar; genel pin ulaşım başlangıcıdır, nehir kıyısındaki her geçişin açık olduğunu garanti etmez.",
    longIntro:["Yahşihan-Kızılırmak hattı, Yahşihan'ın Kızılırmak kıyısındaki konumu ile Yeşil Vadi/Turkuaz rekreasyon koridorunun resmî kamu kaynaklarında doğrulanması sayesinde Güven C düzeyine taşınmıştır.","Kırıkkale Valiliği bu koridorda olta balıkçılığını rekreasyon faaliyetleri arasında açıkça sayar. Bu kayıt nehrin her metresini sürekli av alanı yapmaz; su seviyesi, kıyı tahkimatı, güncel tebliğ, saha tabelası ve kamusal geçiş hareket günü ayrıca kontrol edilmelidir."],
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi",value:"Yahşihan-Hacıbalı/Irmak arasında kamusal rekreasyon koridoru",sourceUrl:yesilVadi,note:"Valilik proje alanını Kızılırmak'ın iki kıyısında kamusal rekreasyon alanı olarak tanımlar; mikro olta noktası veya güncel av izni değildir."},{label:"Açık harita - Yahşihan/Kızılırmak",value:"39.84558, 33.44711 genel planlama noktası",sourceUrl:map,note:"Kızılırmak ve Yahşihan Park Mesire Alanı yakınlığı için genel konum referansı; kesin kıyı girişi değildir."}],
    sources:[...new Map([...(previous.sources||[]),{label:"Kırıkkale Valiliği - Turkuaz Bisiklet Yolu",url:valilik,note:"Kızılırmak koridorunda olta balıkçılığının rekreasyon kullanımları arasında yer aldığını açıkça belirtir."},{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi Projesi",url:yesilVadi,note:"Yahşihan/Irmak-Hacıbalı bölümündeki kamusal rekreasyon alanının kapsamını ve Kızılırmak sahillerini tanımlar."},{label:"Açık harita - Yahşihan/Kızılırmak genel yaklaşımı",url:map,note:"Genel planlama koordinatı için kullanılır; erişim izni değildir."}].map((s)=>[s.url,s])).values()],
    confidence:"C",
    confidenceProfile:{...(previous.confidenceProfile||{model:"evidence-v1" as const,overall:"C" as const,identity:{level:"strong" as const,label:"Resmî rota kimliği",note:"Yahşihan-Kızılırmak koridoru resmî kaynaklarla eşleşir."},legal:{level:"partial" as const,label:"Güncel mevzuat kontrolü",note:"Rekreasyon kullanım kaydı mikro kıyının sürekli av izni değildir."},access:{level:"partial" as const,label:"Kamusal rekreasyon erişimi",note:"Yeşil Vadi koridoru kaynaklıdır; son kıyı geçişi saha teyitli değildir."},species:{level:"unverified" as const,label:"Tür kanıtı sınırlı",note:"Rota özelinde tür iddiası genişletilmez."},field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Saha koşulları hareket günü kontrol edilmelidir."},reviewedAt:"2026-08-18"}),overall:"C",access:{level:"partial",label:"Kamusal rekreasyon erişimi",note:"Valilik Yeşil Vadi koridorunu Yahşihan/Irmak-Hacıbalı arasında kamusal rekreasyon alanı olarak tanımlar; son kıyı cebi saha teyitli değildir."},reviewedAt:"2026-08-18"},
  });

  const pertekSlug="ulusal-tunceli-keban-baraj-golu-pertek-kiyisi";
  const pertek=routeMap.get(pertekSlug);
  if(!pertek)throw new Error(`18 Ağustos Pertek sonuç yaması hedefi yok: ${pertekSlug}`);
  routeMap.set(pertekSlug,{
    ...pertek,
    longIntro:["Keban Baraj Gölü'nün Pertek 5. Bölge kıyısı, Tunceli İl Tarım ve Orman Müdürlüğünün DSİ görüşüyle belirlediği amatör avcılık yapılabilecek kıyı sınırları sayesinde Güven B düzeyinde resmî kullanım kanıtına sahiptir.","Güven B, Pertek kıyısının tamamının serbest olduğu anlamına gelmez. Korluca/Kolonkaya-Zümek Köprüsü ve Eski Singeç Köprüsü arasında resmî metinde tanımlanan sınırlar, güncel saha tabelaları, dönem kuralları ve özel/işletme alanları birlikte dikkate alınmalıdır."],
  });

  applyGunluk20260820(routeMap);
  applyStabilizasyon20260821(routeMap);
  applyStabilizasyon20260822(routeMap);
  applyStabilizasyon20260823(routeMap);
  applyGrowth20260823(routeMap);
  applyDailyQualityRun20260824(routeMap);
  applyDailyQualityStage2_20260825(routeMap);
  applyDailyQualityStage2Continuation20260825(routeMap);

  appendDailyRiskNote(routeMap,"sivas-golova-baraj-golu","Su kotu, dik/gevşek şev ve rüzgâr etkisi hareket günü yerinde değerlendirilmeden su kenarına inilmemelidir; baraj işletme sınırları ve saha tabelaları önceliklidir.");
  appendDailyRiskNote(routeMap,"siirt-kurtalan-yayikli-goleti","Kırsal sulama göletinde yumuşak çamur, ani kıyı kırılması ve tarımsal araç trafiği riski bulunabilir; son yaklaşım ve kıyı zemini gündüz koşullarında kontrol edilmelidir.");
  appendDailyRiskNote(routeMap,"siirt-kurtalan-cayirli-goleti","Düşük su seviyesinde açığa çıkan çamurlu taban güvenli zemin kabul edilmemeli; kuruma riski, sulama faaliyeti ve kıyı taşıma kapasitesi hareket günü yeniden değerlendirilmelidir.");

  return routeMap;
};