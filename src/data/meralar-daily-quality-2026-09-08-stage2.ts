import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; özel/işletilen alan kuralları ve yerel saha kararları ayrıca uygulanır."
};

export const promoted20260908Stage2=["ankara-500km-ankara-anadolu-goleti"] as const;

export const applyDailyQuality20260908Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260908Stage2[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-08 Stage2 hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-08 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);
  if(previous.province!=="Ankara"||previous.waterType!=="Gölet")throw new Error(`2026-09-08 Anadolu Göleti kimlik önkoşulu bozuldu: ${previous.province}/${previous.waterType}`);

  const officialIdentity:ResearchSource={
    label:"Anadolu OSB - Neden Anadolu OSB",
    url:"https://www.anadoluosb.org.tr/neden-anadoluosb/",
    note:"Anadolu OSB'nin Temelli Sanayi Havzasında, Malıköy/Sincan/Ankara adresinde bulunduğunu ve bünyesinde doğal gölet ile rekreasyon alanları olduğunu kurumun kendi kaydıyla doğrular."
  };
  const officialFishing:ResearchSource={
    label:"Anadolu OSB - 7. Sportif Sazan Balığı Yakalama Yarışması",
    url:"https://www.anadoluosb.org.tr/7-geneksel-sportif-sazan-baligi-yakalama-yarismasi/",
    note:"Anadolu OSB Yağmursuyu Göletinde ASOF ile sportif sazan avı yarışması düzenlendiğini; göletin amatör/sportif olta kullanımını rota düzeyinde açıkça doğrular. Etkinlik kaydı sürekli ve sınırsız serbestlik anlamına gelmez."
  };
  const currentSpecies:ResearchSource={
    label:"ASOF - Anadolu OSB Yağmursuyu Göleti 9. Sportif Sazan Yarışması",
    url:"https://www.asofed.org.tr/haberler/28-asof-aosb-yagmursuyu-goleti-9-sportif-sazan-baligi-yakalama-yarismasi.html",
    note:"28 Eylül 2025 yarışmasında 12 sazan ve 159 havuz balığı yakalandığını, Ankara İl Tarım ve Orman Müdürlüğü gözlemcilerinin etkinlikte bulunduğunu rota özelinde bildirir."
  };
  const municipalSupport:ResearchSource={
    label:"Ankara Büyükşehir Belediyesi - Anadolu OSB sportif sazan etkinliği",
    url:"https://www.ankara.bel.tr/tr/haberler/300-bisikletci-kale-de-dalgalanan-bayragi-anadolu-osb-ye-tasidi-14827",
    note:"Anadolu OSB Göletinde ASOF hakemliğinde Sportif Sazan Balığı Yakalama Yarışması yapıldığını belediye kaydıyla bağımsız olarak destekler."
  };
  const sources=[...new Map([...(previous.sources||[]),officialIdentity,officialFishing,currentSpecies,municipalSupport,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Gölet organize sanayi bölgesi sınırları içindedir; etkinlik günündeki kontrollü erişim sürekli kamusal giriş hakkı anlamına gelmez. OSB güvenlik/işletme kuralları, etkinlik dışı erişim, özel/teknik alan sınırları ve saha tabelaları hareket günü ayrıca doğrulanmalıdır.";

  routeMap.set(slug,{
    ...previous,
    district:"Sincan",
    waterType:"Gölet",
    fish:["Sazan","Havuz Balığı"],
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    summary:"Anadolu OSB Yağmursuyu Göleti, Sincan/Malıköy-Temelli bağlamı kurumun kendi kaynaklarıyla; sportif olta kullanımı ve sazan/havuz balığı varlığı ise OSB, belediye ve ASOF kayıtlarıyla rota özelinde çaprazlandığı için Güven C düzeyindedir. Etkinlik kayıtları sürekli giriş veya av garantisi değildir.",
    longIntro:[
      "Anadolu OSB Yağmursuyu Göleti, rota kimliği, ilçe/genel konum, rekreasyon bağlamı ve balık türleri birbirinden bağımsız kurumsal kaynaklarla desteklendiği için Güven C düzeyine çıkarılmıştır.",
      "Bu seviye OSB içindeki gölete her gün ve her noktadan girilebildiği anlamına gelmez. Organize sanayi bölgesi güvenlik ve işletme kuralları, etkinlik dışı erişim koşulları, 6/2 Tebliğ ve sahadaki güncel tabelalar hareket günü birlikte kontrol edilmelidir."
    ],
    verification:`2026-09-08 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    updatedAt:"2026-09-08",
    researchedAt:"2026-09-08",
    researchStatus:"2026-09-08 Stage 2 rota özelinde çok kaynaklı araştırma tamamlandı.",
    researchSummary:`Anadolu OSB'nin Malıköy/Sincan/Ankara kimliği ve doğal gölet bilgisi kurumun kendi kaydıyla; sportif olta kullanımı OSB ve Ankara Büyükşehir Belediyesi kayıtlarıyla; sazan ve havuz balığı varlığı 2025 ASOF yarışma sonucu ile çaprazlandı. ${risk}`,
    fishEvidence:[
      {name:"Sazan",evidenceLevel:"Güçlü · rota özelinde güncel yakalama kaydı",sourceLabel:"ASOF - Anadolu OSB Yağmursuyu Göleti 9. Sportif Sazan Yarışması",sourceUrl:currentSpecies.url,note:"28 Eylül 2025 yarışmasında rota özelinde sazan yakalandığı kayıtlıdır; tek etkinlik günlük av başarısı garantisi değildir.",recordCount:12,distanceKm:null},
      {name:"Havuz Balığı",evidenceLevel:"Güçlü · rota özelinde güncel yakalama kaydı",sourceLabel:"ASOF - Anadolu OSB Yağmursuyu Göleti 9. Sportif Sazan Yarışması",sourceUrl:currentSpecies.url,note:"28 Eylül 2025 yarışmasında 159 havuz balığı kaydedilmiştir; istilacı türlere ilişkin güncel mevzuat ve alıkoyma kuralları ayrıca uygulanır.",recordCount:159,distanceKm:null}
    ],
    accessEvidence:[
      ...(previous.accessEvidence||[]),
      {label:"Anadolu OSB genel konum ve rekreasyon bağlamı",value:"Malıköy Anadolu OSB · Sincan/Ankara genel bölge",sourceUrl:officialIdentity.url,note:"OSB adresini, doğal gölet ve rekreasyon alanı varlığını doğrular; mikro kıyı, park noktası veya etkinlik dışı sürekli giriş hakkı değildir."},
      {label:"Sportif olta kullanım kaydı",value:"Anadolu OSB Yağmursuyu Göleti",sourceUrl:officialFishing.url,note:"OSB tarafından sportif sazan yarışması düzenlenmiştir; kontrollü etkinlik erişimi sürekli kamusal erişim olarak yorumlanmaz."}
    ],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"Sanayi bölgesi içinde araç/yaya trafiği ve teknik alan sınırlarına dikkat edilmeli; yalnız izin verilen rekreasyon bölümünde hareket edilmelidir."])],
    navigationNote:`Pin yalnız Anadolu OSB Yağmursuyu Göleti genel bölgesini gösterir; güvenlik kapısı, park, yol sonu veya sürekli açık kıyı cebi değildir. ${risk}`,
    confidenceProfile:{
      model:"evidence-v1",
      overall:"C",
      identity:{level:"strong",label:"Kurum kaynağıyla rota ve ilçe kimliği",note:"Anadolu OSB'nin Malıköy/Sincan/Ankara adresi ve doğal göleti kurumun kendi sayfasında doğrulanır."},
      legal:{level:"partial",label:"Genel mevzuat + kontrollü kullanım bağlamı",note:"6/2 Tebliğ geçerlidir; OSB içi etkinlik kayıtları sürekli ve sınırsız kamusal av izni değildir. İşletme/güvenlik kuralları ayrıca uygulanır."},
      access:{level:"partial",label:"Rekreasyon ve etkinlik erişimi belgeli",note:"OSB ve belediye kayıtları gölette sportif olta etkinliği yapıldığını doğrular; etkinlik dışı mikro giriş ve park noktası saha teyitli değildir."},
      species:{level:"strong",label:"2025 rota özelinde yakalama kaydı",note:"ASOF kaydında aynı gölette 12 sazan ve 159 havuz balığı yakalanmıştır; bu veri av garantisi değildir."},
      field:{level:"unverified",label:"Saha doğrulaması yok",note:"OSB güvenlik uygulaması, bariyer, giriş izni, kıyı zemini ve güncel tabela hareket günü yeniden kontrol edilmelidir."},
      reviewedAt:"2026-09-08"
    }
  });
  return routeMap;
};
