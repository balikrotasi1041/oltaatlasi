import type { EnrichedMera } from "./meralar-tumu-core";

const valilik="https://www.kirikkale.gov.tr/turkuaz-bisiklet-yolunun-ilk-etabi-acildi";
const yesilVadi="https://www.kirikkale.gov.tr/vali-sayin-haktankacmaz-yesil-vadi-projesini-inceledi";
const map="https://mapcarta.com/N1038522591";

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
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi",value:"Yahşihan-Hacıbalı/Irmak arasında kamusal rekreasyon koridoru",sourceUrl:yesilVadi,note:"Valilik proje alanını Kızılırmak'ın iki kıyısında kamusal rekreasyon alanı olarak tanımlar; mikro olta noktası veya güncel av izni değildir."},{label:"Açık harita - Yahşihan istasyonu/Kızılırmak",value:"39.84558, 33.44711 genel planlama noktası",sourceUrl:map,note:"Kızılırmak ve Yahşihan Park Mesire Alanı yakınlığı için genel konum referansı; kesin kıyı girişi değildir."}],
    sources:[...new Map([...(previous.sources||[]),{label:"Kırıkkale Valiliği - Turkuaz Bisiklet Yolu",url:valilik,note:"Kızılırmak koridorunda olta balıkçılığının rekreasyon kullanımları arasında yer aldığını açıkça belirtir."},{label:"Kırıkkale Valiliği - Kızılırmak Yeşil Vadi Projesi",url:yesilVadi,note:"Yahşihan/Irmak-Hacıbalı bölümündeki kamusal rekreasyon alanının kapsamını ve Kızılırmak sahillerini tanımlar."},{label:"Açık harita - Yahşihan/Kızılırmak genel yaklaşımı",url:map,note:"Genel planlama koordinatı için kullanılır; erişim izni değildir."}].map((s)=>[s.url,s])).values()],
    confidence:"C",
    confidenceProfile:{...(previous.confidenceProfile||{model:"evidence-v1" as const,overall:"C" as const,identity:{level:"strong" as const,label:"Resmî rota kimliği",note:"Yahşihan-Kızılırmak koridoru resmî kaynaklarla eşleşir."},legal:{level:"partial" as const,label:"Güncel mevzuat kontrolü",note:"Rekreasyon kullanım kaydı mikro kıyının sürekli av izni değildir."},access:{level:"partial" as const,label:"Kamusal rekreasyon erişimi",note:"Yeşil Vadi koridoru kaynaklıdır; son kıyı geçişi saha teyitli değildir."},species:{level:"unverified" as const,label:"Tür kanıtı sınırlı",note:"Rota özelinde tür iddiası genişletilmez."},field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Saha koşulları hareket günü kontrol edilmelidir."},reviewedAt:"2026-08-18"}),overall:"C",access:{level:"partial",label:"Kamusal rekreasyon erişimi",note:"Valilik Yeşil Vadi koridorunu Yahşihan/Irmak-Hacıbalı arasında kamusal rekreasyon alanı olarak tanımlar; son kıyı cebi saha teyitli değildir."},reviewedAt:"2026-08-18"},
  });
};
