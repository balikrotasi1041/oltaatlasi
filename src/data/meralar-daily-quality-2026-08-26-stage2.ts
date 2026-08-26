import type { EnrichedMera, ResearchSource, FishEvidence } from "./meralar-tumu-core";

export const promotedSlugs20260826Stage2 = [
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-erzincan-tercan-baraj-golu",
  "ulusal-artvin-borcka-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ankara-500km-adiyaman-ataturk-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
] as const;

const reviewNote = "26 Ağustos 2026 masa başı kanıt turu: rota kimliği, genel konum, kamusal genel erişim bağlamı, güncel amatör avcılık mevzuatı, saha riski ve tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildi. Mikro kıyı/park/patika kesinliği verilmez; saha tabelası, özel/kiralı alan ve güncel yasaklar hareket günü ayrıca kontrol edilmelidir.";

const adiyamanStock2024 = "https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz";
const adiyamanStock2022 = "https://adiyaman.tarimorman.gov.tr/Haber/687/Ilimizdeki-Gol-Ve-Goletlere-4-Milyon-Yavru-Balik-Birakildi";
const ataturkStock2021 = "https://adiyaman.tarimorman.gov.tr/Haber/624/Ataturk-Baraji-Golune-1-596-000-Yavru-Balik-Birakildi";
const ataturkSabut2024 = "https://adiyaman.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=780";
const adiyamanBan2026 = "https://adiyaman.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=714";
const sirimtasTagem = "https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=804";
const ataturkAcademic = "https://dergipark.org.tr/en/download/article-file/1673139";
const osm = (q:string)=>`https://www.openstreetmap.org/search?query=${encodeURIComponent(q)}`;

const source=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const fish=(name:string,scientificName:string|null,sourceLabel:string,sourceUrl:string,note:string):FishEvidence=>({name,scientificName,evidenceLevel:"Güçlü olasılık · rota özelinde resmî stok/balıklandırma veya bilimsel kayıt",sourceLabel,sourceUrl,note,recordCount:null,distanceKm:null});
const uniqueSources=(items:ResearchSource[])=>[...new Map(items.filter((item)=>item?.url).map((item)=>[item.url,item])).values()];
const uniqueFish=(items:FishEvidence[])=>[...new Map(items.filter((item)=>item?.name&&item?.sourceUrl).map((item)=>[`${item.name}|${item.sourceUrl}`,item])).values()];

const addAdiyamanEvidence=(routeMap:Map<string,EnrichedMera>)=>{
  const patches:Record<string,{sources:ResearchSource[];fishEvidence:FishEvidence[];status:string;summary:string}>={
    "ankara-500km-adiyaman-ataturk-baraj-golu":{
      sources:[
        source("Adıyaman İl Tarım · Atatürk Barajı 2021 sazan balıklandırması",ataturkStock2021,"Kahta ve Samsat ilçelerindeki 13-16. avlak sahalarına 1.596.000 pullu sazan yavrusu bırakıldığını rota özelinde doğrular; güncel av garantisi değildir."),
        source("Adıyaman İl Tarım · Atatürk Barajı 2024 şabut ve sazan takviyesi",ataturkSabut2024,"Atatürk Baraj Gölüne 2,55 milyon şabut ve daha önce 4,5 milyon sazan yavrusu bırakıldığını bildirir; tür olasılığı kanıtıdır."),
        source("ADYÜTAYAM · Atatürk Barajı balıkçılık/yetiştiricilik çalışması",ataturkAcademic,"Atatürk Baraj Gölünün Adıyaman kesimindeki avlak sahaları ve su ürünleri faaliyetlerini akademik bağlamda doğrular; amatör mikro kıyı izni değildir."),
        source("OpenStreetMap · Atatürk Baraj Gölü Adıyaman genel bölge",osm("Atatürk Baraj Gölü Adıyaman"),"Yalnız genel su/yerleşim bağlamı için ikincil harita kaynağıdır; kıyı giriş izni değildir."),
        source("Adıyaman İl Tarım · 2026 içsu av yasağı",adiyamanBan2026,"Adıyaman içsularında 1 Nisan-30 Haziran 2026 dönemindeki av düzenlemelerini açıklar; güncel mevzuat katmanıdır."),
      ],
      fishEvidence:[
        fish("Sazan","Cyprinus carpio","Adıyaman İl Tarım 2021/2024 balıklandırma kayıtları",ataturkStock2021,"Pullu sazan yavrularının Atatürk Baraj Gölünün Adıyaman avlak sahalarına bırakıldığı resmî olarak kaydedilmiştir; güncel yakalama veya yasal boy garantisi değildir."),
        fish("Şabut",null,"Adıyaman İl Tarım 2024 şabut balıklandırması",ataturkSabut2024,"Fırat Havzasına özgü şabut yavrularının Atatürk Baraj Gölüne bırakıldığı resmî kayıttır; kıyıdan av garantisi değildir."),
      ],
      status:"Atatürk Baraj Gölünün Adıyaman kesimi rota özelindeki İl Tarım balıklandırma kayıtları, akademik su ürünleri çalışması, güncel il av mevzuatı ve ikincil genel harita katmanıyla yeniden doğrulandı.",
      summary:"Adıyaman kıyısında su kimliği ve tür olasılığı güçlüdür. Barajın geniş ve bölümlenmiş avlak yapısı nedeniyle tek bir mikro kıyı, park veya giriş noktası doğrulanmış sayılmaz; kiralama/istihsal sınırları ile saha tabelaları hareket günü kontrol edilmelidir."
    },
    "ankara-500km-adiyaman-karahuyuk-goleti":{
      sources:[
        source("Adıyaman İl Tarım · 2024 Karahöyük Göleti sazan balıklandırması",adiyamanStock2024,"Karahöyük Göletini adıyla sayarak 2024 yavru sazan balıklandırma programına dahil edildiğini doğrular."),
        source("Adıyaman İl Tarım · 2022 Karahöyük Göleti sazan balıklandırması",adiyamanStock2022,"Karahöyük Göletinde 2022 yılında da sazan balıklandırması yapıldığını bağımsız zamanlı resmî kayıtla destekler."),
        source("OpenStreetMap · Karahöyük Göleti Adıyaman genel bölge",osm("Karahöyük Göleti Adıyaman"),"Yalnız genel konum/yerleşim kontrolü için ikincil kaynaktır; mikro kıyı erişimi değildir."),
        source("Adıyaman İl Tarım · 2026 içsu av yasağı",adiyamanBan2026,"İldeki göl, gölet, baraj ve akarsularda dönemsel av kurallarını açıklar; saha özelinde sürekli açıklık anlamına gelmez."),
      ],
      fishEvidence:[fish("Sazan","Cyprinus carpio","Adıyaman İl Tarım 2024 balıklandırma kaydı",adiyamanStock2024,"Karahöyük Göletine yavru sazan bırakıldığı resmî olarak kaydedilmiştir; tür varlığı için güçlü olasılık kanıtıdır, av garantisi değildir.")],
      status:"Karahöyük Göleti iki ayrı yıldaki İl Tarım balıklandırma kayıtları, güncel il av mevzuatı ve genel açık harita konum katmanıyla rota özelinde yeniden değerlendirildi.",
      summary:"Gölet kimliği ve sazan olasılığı resmî balıklandırma kayıtlarıyla güçlüdür. Kesin kıyı girişi, park, tarımsal servis yolu ve mülkiyet sınırı doğrulanmadığından konum yalnız genel bölge olarak tutulur."
    },
    "ankara-500km-adiyaman-sirimtas-baraj-golu":{
      sources:[
        source("TAGEM Elazığ Su Ürünleri · Sırımtaş Baraj Gölü siraz stok takviyesi",sirimtasTagem,"Adıyaman Sincik'teki Sırımtaş Baraj Gölüne yavru siraz (Capoeta umbla) bırakıldığını rota özelinde doğrular."),
        source("OpenStreetMap · Sırımtaş Baraj Gölü Sincik genel bölge",osm("Sırımtaş Baraj Gölü Sincik Adıyaman"),"Genel su/yerleşim konumu için ikincil harita katmanıdır; HES/baraj işletme sahasına giriş izni değildir."),
        source("Adıyaman İl Tarım · 2026 içsu av yasağı",adiyamanBan2026,"Adıyaman içsularındaki dönemsel av düzenini verir; Sırımtaş'ta daha sıkı işletme veya saha kısıtı varsa o kural üstündür."),
      ],
      fishEvidence:[fish("Siraz","Capoeta umbla","TAGEM Elazığ Su Ürünleri Sırımtaş stok kaydı",sirimtasTagem,"Yavru sirazların Sırımtaş Baraj Gölü stoklarına takviye amacıyla bırakıldığı resmî kayıttır; av garantisi değildir.")],
      status:"Sırımtaş Baraj Gölü, TAGEM'in rota özelindeki siraz stok takviyesi, güncel Adıyaman içsu mevzuatı ve ikincil genel harita katmanıyla yeniden doğrulandı.",
      summary:"Sincik'teki baraj kimliği ve siraz olasılığı güçlüdür. Baraj/HES işletme güvenlik sahaları, servis yolları ve mikro kıyı erişimi doğrulanmış sayılmaz; yalnız kamusal ve açık bölge saha tabelasıyla teyit edilerek kullanılmalıdır."
    }
  };
  for(const [slug,patch] of Object.entries(patches)){
    const route=routeMap.get(slug);
    if(!route)throw new Error(`26 Ağustos Adıyaman kanıt hedefi bulunamadı: ${slug}`);
    routeMap.set(slug,{
      ...route,
      sources:uniqueSources([...(route.sources||[]),...patch.sources]),
      fishEvidence:uniqueFish([...(route.fishEvidence||[]),...patch.fishEvidence]),
      researchStatus:patch.status,
      researchSummary:patch.summary,
      locationPrecision:route.locationPrecision||"Genel bölge",
      navigationVerified:false,
      navigationNote:route.navigationNote||"Pin veya harita araması yalnız suyun genel planlama bölgesini gösterir; kesin park, patika, kıyı cebi ya da giriş izni değildir.",
      transport:route.transport||"İlçe/yerleşim üzerinden yalnız kamusal yol ağıyla genel su bölgesine yaklaşılır; son yol, bariyer, mülkiyet, işletme ve kıyı güvenliği gündüz saha kontrolüyle doğrulanmalıdır.",
      cautions:[...new Set([...(route.cautions||[]),"Baraj/gölet işletme alanları, özel veya kiralı istihsal sahaları ve sahadaki daha sıkı yasaklar rota dışıdır; genel konum verisi giriş izni değildir."])],
    });
  }
};

export const applyDailyQualityStage220260826 = (routeMap: Map<string, EnrichedMera>) => {
  addAdiyamanEvidence(routeMap);
  for (const slug of promotedSlugs20260826Stage2) {
    const route = routeMap.get(slug);
    if (!route) throw new Error(`26 Ağustos Aşama 2 hedefi bulunamadı: ${slug}`);
    if (route.confidence !== "D") throw new Error(`26 Ağustos Aşama 2 yalnız gerçek D→C+ sayar: ${slug} (${route.confidence})`);

    const sourceHosts = new Set((route.sources || []).map((s) => {
      try { return new URL(s.url).hostname.replace(/^www\./, ""); } catch { return ""; }
    }).filter(Boolean));
    if (sourceHosts.size < 2) throw new Error(`26 Ağustos Aşama 2 bağımsız kaynak ailesi yetersiz: ${slug}`);
    if (!route.locationPrecision) throw new Error(`26 Ağustos Aşama 2 locationPrecision eksik: ${slug}`);
    if (!(route.transport || route.navigationNote)) throw new Error(`26 Ağustos Aşama 2 erişim bağlamı eksik: ${slug}`);
    if (!(route.fish?.length || route.fishEvidence?.length)) throw new Error(`26 Ağustos Aşama 2 tür kanıtı eksik: ${slug}`);

    routeMap.set(slug, {
      ...route,
      confidence: "C",
      verification: `${route.verification || ""}${route.verification ? "\n\n" : ""}${reviewNote}`,
      researchedAt: "2026-08-26",
      updatedAt: "2026-08-26",
      navigationVerified: false,
      confidenceProfile: {
        ...(route.confidenceProfile || {
          model: "evidence-v1" as const,
          identity: { level: "partial" as const, label: "Çok kaynaklı rota kimliği", note: "Rota kimliği ve genel konum kaynaklarla eşleşir; mikro kıyı kesinliği verilmez." },
          legal: { level: "partial" as const, label: "Güncel mevzuat kontrolü", note: "6/2 Tebliğ ve rota kaynakları birlikte değerlendirilir; saha tabelası ve yerel yasaklar önceliklidir." },
          access: { level: "partial" as const, label: "Genel erişim bağlamı", note: "Kamusal genel yaklaşım doğrulanır; son park/patika ve kıyı geçişi saha teyitli değildir." },
          species: { level: "partial" as const, label: "Tür olasılığı kanıtlı", note: "Akademik/resmî/balıklandırma kayıtları tür olasılığıdır; av garantisi değildir." },
          field: { level: "unverified" as const, label: "Saha doğrulaması yok", note: "Güncel bariyer, tabela, su kotu ve kıyı güvenliği hareket günü kontrol edilmelidir." },
          reviewedAt: "2026-08-26",
        }),
        overall: "C",
        species: route.fishEvidence?.length?{level:"partial",label:"Rota özelinde tür olasılığı kanıtlı",note:"Resmî stok/balıklandırma veya bilimsel kayıt türün su varlığında bulunma olasılığını destekler; av garantisi değildir."}:route.confidenceProfile?.species,
        reviewedAt: "2026-08-26",
      },
    });
  }
  return routeMap;
};
