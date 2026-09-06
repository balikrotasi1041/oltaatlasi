import type { AccessEvidence, EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";

const teblig: ResearchSource = {
  label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url: "https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note: "2024-2028 genel amatör avcılık çerçevesidir; korunan alan, işletme, il/su özelindeki yasak ve saha kararları ayrıca uygulanır."
};

const karagolDkmpUrl = "https://bolge9.tarimorman.gov.tr/Menu/42/Ankara-Cubuk-Karagol-Tabiat-Parki";
const karagolEkotabanUrl = "https://ekotaban.tarimorman.gov.tr/alan/287";
const karagolStockUrl = "https://www.tarimtv.gov.tr/tr/video-detay/karagol-e-5-bin-abant-alasi-birakildi-10497";
const karagolMunicipalityUrl = "https://www.cubuk.bel.tr/karagol-tabiat-parki-dogaseverlerin-gozdesi-olmaya-devam-ediyor/";
const cavundurPlanUrl = "https://www.cubuk.bel.tr/wp-content/uploads/2024/09/2025-2029-stratejik-plan.pdf";
const cavundurEventUrl = "https://www.haberler.com/kultur-sanat/cubuk-ta-dogayla-bulus-saglikli-yasa-temasiyla-19798095-haberi/";

const uniq = (items: ResearchSource[]) => [...new Map(items.filter((s) => s?.url).map((s) => [s.url, s])).values()];

export const promoted20260906Stage2Supplement = [
  "ankara-500km-ankara-karagol",
  "ankara-500km-ankara-yukari-cavundur-goleti"
] as const;

type Upgrade = {
  fish: string[];
  sources: ResearchSource[];
  fishEvidence: FishEvidence[];
  accessEvidence: AccessEvidence[];
  summary: string;
  risk: string;
};

const evidence: Record<(typeof promoted20260906Stage2Supplement)[number], Upgrade> = {
  "ankara-500km-ankara-karagol": {
    fish: ["Abant alası"],
    sources: [
      {
        label: "DKMP 9. Bölge - Çubuk Karagöl Tabiat Parkı",
        url: karagolDkmpUrl,
        note: "Karagöl'ün Çubuk ilçesindeki tabiat parkı kimliğini, karayoluyla genel ulaşımı, otopark/ziyaretçi altyapısını ve sportif olta balıkçılığını kontrollü yapılabilecek faaliyetler arasında resmî olarak doğrular."
      },
      {
        label: "DKMP Ekotaban - Çubuk Karagöl Tabiat Parkı",
        url: karagolEkotabanUrl,
        note: "Korunan alan statüsünü, ziyaret saatlerini, kapasite ve rekreasyon bağlamını güncel resmî kayıtla destekler; koruma kuralları ve saha talimatları önceliklidir."
      },
      {
        label: "Tarım Orman Ekranı - Karagöl Abant alası balıklandırması",
        url: karagolStockUrl,
        note: "2018'de Çubuk Karagöl'e 5.000 Abant alası yavrusu bırakıldığını ve bilimsel izleme planlandığını kaydeder; geçmiş balıklandırma güncel av garantisi değildir."
      },
      {
        label: "Çubuk Belediyesi - Karagöl 2026 ziyaret kaydı",
        url: karagolMunicipalityUrl,
        note: "Karagöl Tabiat Parkının 2026'da güncel ziyaret ve rekreasyon kullanımını yerel yönetim kaynağıyla destekler."
      }
    ],
    fishEvidence: [{
      name: "Abant alası",
      evidenceLevel: "Güçlü olasılık · rota özelinde resmî balıklandırma",
      sourceLabel: "Tarım Orman Ekranı - Karagöl Abant alası balıklandırması",
      sourceUrl: karagolStockUrl,
      note: "2018'de 5.000 Abant alası yavrusu bırakıldığı resmî kurum içeriğinde kayıtlıdır. Bu geçmiş kayıt tür bulunma olasılığını destekler; güncel stok yoğunluğu, av başarısı veya yasal boy garantisi değildir.",
      recordCount: null,
      distanceKm: null
    }],
    accessEvidence: [
      {
        label: "Kontrollü kamusal rekreasyon alanı",
        value: "Çubuk Karagöl Tabiat Parkı",
        sourceUrl: karagolDkmpUrl,
        note: "DKMP, sportif olta balıkçılığını parkta kontrollü yapılabilecek faaliyetler arasında sayar ve genel ulaşım/otopark bilgisini verir. Bu kayıt gölün her kıyısını sürekli açık yapmaz."
      },
      {
        label: "Korunan alan işletme bağlamı",
        value: "DKMP tabiat parkı / ziyaretçi alanı",
        sourceUrl: karagolEkotabanUrl,
        note: "Ziyaret saatleri, işletme ve koruma kuralları saha kullanımında önceliklidir; mikro olta cebi veya serbest alan sınırı olarak yorumlanmaz."
      }
    ],
    summary: "Çubuk Karagöl'ün tabiat parkı kimliği, kontrollü sportif olta kullanımı, genel ulaşım ve geçmiş Abant alası balıklandırması ayrı resmî kaynaklarla; 2026 ziyaret kullanımı yerel yönetim kaydıyla çaprazlandı.",
    risk: "Karagöl korunan tabiat parkıdır. DKMP işletme saatleri, koruma kuralları, dönemsel yangın/orman giriş kararları ve saha görevlisi/tabelaları genel olta bilgisinden üstündür; gölün her kıyısı serbest varsayılamaz."
  },
  "ankara-500km-ankara-yukari-cavundur-goleti": {
    fish: ["Aynalı sazan", "Kambur sazan"],
    sources: [
      {
        label: "Çubuk Belediyesi 2025-2029 Stratejik Planı - Yukarı Çavundur Göleti",
        url: cavundurPlanUrl,
        note: "Yukarı Çavundur Kayapınar Göletinin 2001'de hizmete açıldığını, çevresinde piknik/mesire alanları oluştuğunu, asfalt yol bağlantısını, ailece olta balıkçılığı kullanımını ve aynalı/kambur sazan bilgisini rota özelinde kaydeder."
      },
      {
        label: "AA kaynaklı 2 Mayıs 2026 Yukarı Çavundur yürüyüş etkinliği",
        url: cavundurEventUrl,
        note: "Çubuk Belediyesinin 2026'da gölet çevresini kapsayan yaklaşık 10 km'lik kamusal doğa yürüyüşü etkinliği düzenlediğini bağımsız haber kaydıyla destekler; belirli kıyı parselinin av izni değildir."
      }
    ],
    fishEvidence: [
      {
        name: "Aynalı sazan",
        evidenceLevel: "Güçlü olasılık · rota özelinde yerel resmî kayıt",
        sourceLabel: "Çubuk Belediyesi 2025-2029 Stratejik Planı",
        sourceUrl: cavundurPlanUrl,
        note: "Belediye stratejik planı Yukarı Çavundur Göletinde aynalı sazan bulunduğunu rota özelinde kaydeder; güncel av başarısı veya stok yoğunluğu garantisi değildir.",
        recordCount: null,
        distanceKm: null
      },
      {
        name: "Kambur sazan",
        evidenceLevel: "Güçlü olasılık · rota özelinde yerel resmî kayıt",
        sourceLabel: "Çubuk Belediyesi 2025-2029 Stratejik Planı",
        sourceUrl: cavundurPlanUrl,
        note: "Belediye stratejik planı gölette kambur sazan bilgisini verir; saha gözlemi ve güncel av başarısı ayrıca doğrulanmalıdır.",
        recordCount: null,
        distanceKm: null
      }
    ],
    accessEvidence: [
      {
        label: "Genel kamusal mesire ve ulaşım bağlamı",
        value: "Yukarı Çavundur / Kayapınar Göleti çevresi",
        sourceUrl: cavundurPlanUrl,
        note: "Belediye gölet çevresinde mesire/piknik kullanımı, olta balıkçılığı ve asfalt yol bağlantısı kaydeder. Bu, özel parsel geçişi, park cebi veya su kenarındaki her yolun kamusal olduğu anlamına gelmez."
      },
      {
        label: "2026 güncel kamusal etkinlik kullanımı",
        value: "Gölet çevresini kapsayan belediye yürüyüş parkuru",
        sourceUrl: cavundurEventUrl,
        note: "AA kaynaklı kayıt, gölet çevresinin 2026'da belediye etkinliğinde kullanıldığını destekler; mikro kıyı erişimi veya av izni üretmez."
      }
    ],
    summary: "Yukarı Çavundur Göletinin Çubuk/Kayapınar kimliği, genel kamusal mesire-ulaşım bağlamı, 2026 güncel etkinlik kullanımı ve rota özelindeki sazan türleri iki bağımsız kaynak ailesiyle çaprazlandı.",
    risk: "Mesire ve yürüyüş kullanımı göletin tüm kıyılarını sürekli açık yapmaz. Tarla/servis yolu, özel mülkiyet, su kotu, çamurlu şev, dönemsel yangın kararları ve saha tabelaları hareket günü ayrıca kontrol edilmelidir."
  }
};

export const applyDailyQuality20260906Stage2Supplement = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of promoted20260906Stage2Supplement) {
    const previous = routeMap.get(slug);
    if (!previous) throw new Error(`2026-09-06 Stage2 ek hedefi yok: ${slug}`);
    if (previous.confidence !== "D") throw new Error(`2026-09-06 gerçek D->C ek önkoşulu bozuldu: ${slug} (${previous.confidence})`);
    const upgrade = evidence[slug];
    const sources = uniq([...(previous.sources || []), ...upgrade.sources, teblig]);
    routeMap.set(slug, {
      ...previous,
      fish: upgrade.fish,
      confidence: "C",
      locationPrecision: "Genel bölge",
      navigationVerified: false,
      summary: `${upgrade.summary} Tür kayıtları güncel av başarısı veya av garantisi değildir.`,
      longIntro: [
        `${previous.name}, rota kimliği, genel erişim/kullanım bağlamı, güncel mevzuat ve rota özelindeki tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildiği için Güven C düzeyine çıkarılmıştır.`,
        "Güven C belirli bir kıyı cebinin sürekli açık, kamusal veya araçla erişilebilir olduğu anlamına gelmez. Konum yalnız genel bölge planlamasıdır; koruma/işletme sınırı, park, yol sonu, özel mülkiyet ve saha tabelaları hareket günü ayrıca doğrulanmalıdır."
      ],
      verification: `2026-09-06 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${upgrade.risk}`,
      updatedAt: "2026-09-06",
      researchedAt: "2026-09-06",
      researchStatus: "2026-09-06 Stage 2 rota özelinde çok kaynaklı araştırma tamamlandı.",
      researchSummary: `${upgrade.summary} ${upgrade.risk}`,
      fishEvidence: upgrade.fishEvidence,
      accessEvidence: [...(previous.accessEvidence || []), ...upgrade.accessEvidence],
      sources,
      cautions: [...new Set([...(previous.cautions || []), upgrade.risk])],
      navigationNote: `Pin yalnız ${previous.name} genel su/bölge konumunu gösterir; park, yol sonu, kamusal kıyı cebi veya özel mülk geçişi değildir. ${upgrade.risk}`,
      confidenceProfile: {
        model: "evidence-v1",
        overall: "C",
        identity: { level: "strong", label: "Rota özelinde kimlik kanıtı", note: "Ad, il/ilçe ve su varlığı kimliği resmî/kurumsal kaynaklarla eşleşmiştir; konum yalnız genel bölgedir." },
        legal: { level: "partial", label: "Güncel mevzuat + yerel/koruma bağlamı", note: "6/2 Tebliğ ile suya/korunan alana özgü işletme, koruma ve saha kararları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz." },
        access: { level: "partial", label: "Genel kamusal kullanım bağlamı", note: "Resmî rekreasyon/ziyaret veya güncel rota kullanım kaydı vardır; mikro kıyı, park, yol sonu ve özel mülk geçişi saha teyitli değildir." },
        species: { level: "strong", label: "Rota özelinde tür olasılığı", note: "Türler rota özelindeki resmî/kurumsal kayıtlardan türetilir; av başarısı, stok yoğunluğu veya yasal boy garantisi değildir." },
        field: { level: "unverified", label: "Saha doğrulaması yok", note: "Bariyer, tabela, su kotu, zemin, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir." },
        reviewedAt: "2026-09-06"
      }
    });
  }
  return routeMap;
};
