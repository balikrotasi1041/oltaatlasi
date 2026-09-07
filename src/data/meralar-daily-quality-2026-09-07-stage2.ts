import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig: ResearchSource = {
  label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url: "https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note: "2024-2028 genel amatör avcılık çerçevesidir; il/su özelindeki koruma, işletme, dönem ve saha kararları ayrıca uygulanır."
};

export const promoted20260907Stage2 = [
  "ankara-500km-cankiri-alpsari-goleti",
  "ankara-500km-cankiri-bozoglu-goleti",
  "ankara-500km-ankara-kurtbogazi-baraj-golu",
  "ankara-500km-ankara-doganozu-baraj-golu",
  "ankara-500km-ankara-karagol",
  "ankara-500km-ankara-yukari-cavundur-goleti",
  "ankara-500km-yozgat-divanli-goleti"
] as const;

type Evidence = {
  fish: string[];
  sources: ResearchSource[];
  accessUrl: string;
  summary: string;
  risk: string;
};

const evidence: Record<(typeof promoted20260907Stage2)[number], Evidence> = {
  "ankara-500km-cankiri-alpsari-goleti": {
    fish: ["Sazan"],
    sources: [
      {label:"Çankırı İl Tarım - 3 Eylül 2026 Alpsarı balıklandırması",url:"https://cankiri.tarimorman.gov.tr/Haber/1352/Ilimizde-Gol-Ve-Goletler-662-Bin-500-Sazan-Yavrusu-Ile-Bereketleniyor",note:"Korgun Alpsarı Göletine 50 bin sazan yavrusu bırakıldığını rota özelinde doğrular; yasal boya ulaşmanın 3-4 yıl sürebileceği ayrıca belirtilir."},
      {label:"Çankırı İl Tarım - Çankırı hakkında",url:"https://cankiri.tarimorman.gov.tr/Menu/135/Cankiri-Hakkinda",note:"Alpsarı Göletinin Korgun bağlamındaki resmî yerel kimliğini destekler; mikro kıyı erişimi değildir."},
      {label:"Çankırı İl Tarım - 2014 çalışma kitabı",url:"https://cankiri.tarimorman.gov.tr/Belgeler/KutuMenu/2014y%C4%B1l%C4%B1%C3%A7al%C4%B1%C5%9Fmakitab%C4%B1.pdf",note:"Alpsarı çevresindeki kamusal gezi/mesire kullanımını destekler; belirli park veya kıyı cebinin güncel izni değildir."}
    ],
    accessUrl:"https://cankiri.tarimorman.gov.tr/Belgeler/KutuMenu/2014y%C4%B1l%C4%B1%C3%A7al%C4%B1%C5%9Fmakitab%C4%B1.pdf",
    summary:"Alpsarı Göletinin Korgun'daki kimliği, kamusal genel rekreasyon bağlamı ve rota özelindeki 2026 sazan balıklandırması ayrı kamu kayıtlarıyla çaprazlandı.",
    risk:"Gölet kıyısındaki her parsel veya yol kamusal değildir; su kotu, zemin, işletme/mesire kuralları ve saha tabelaları hareket günü kontrol edilmelidir."
  },
  "ankara-500km-cankiri-bozoglu-goleti": {
    fish:["Sazan"],
    sources:[
      {label:"Çerkeş Kaymakamlığı - coğrafi yapı",url:"https://www.cerkes.gov.tr/ilce-tanitim-karti-cografi-yapi",note:"Bozoğlu köyündeki sulama göletini resmî yerel kaynakta tanımlar; mikro erişim kanıtı değildir."},
      {label:"AA - 2025 Bozoğlu/Akhasan balıklandırması",url:"https://www.haberler.com/guncel/cankiri-da-320-bin-sazan-yavrusu-su-kaynaklarina-birakildi-18984892-haberi/",note:"Bozoğlu Göleti ve Akhasan Barajına sazan yavrusu bırakıldığını rota adıyla bildirir; toplam sayı iki su arasında ayrıştırılmaz."},
      {label:"Çankırı İl Tarım - 2025 içsu avlanma çerçevesi",url:"https://cankiri.tarimorman.gov.tr/Haber/1251/Cankirida-Su-Urunleri-Avlanma-Yasagi-Sona-Eriyor",note:"İl genelindeki dönem kurallarını ve tamamen kapalı suları bildirir; Bozoğlu için mikro kıyı izni üretmez."}
    ],
    accessUrl:"https://www.cerkes.gov.tr/ilce-tanitim-karti-cografi-yapi",
    summary:"Bozoğlu Göletinin Çerkeş'teki sulama suyu kimliği, rota adıyla sazan balıklandırması ve güncel Çankırı içsu avcılık çerçevesi bağımsız kaynak aileleriyle çaprazlandı.",
    risk:"Sulama göletinde servis/tarla yolları ve kıyı parselleri kamusal varsayılamaz; zemin, su seviyesi, bariyer ve tabela hareket günü kontrol edilmelidir."
  },
  "ankara-500km-ankara-kurtbogazi-baraj-golu": {
    fish:["Sazan","Gümüş balığı"],
    sources:[
      {label:"Kahramankazan Kaymakamlığı - Kurtboğazı Barajı",url:"https://www.kahramankazan.gov.tr/kurtbogazi-baraji-ilcemiz",note:"Kahramankazan sınırlarındaki baraj kimliğini, rekreasyon ve olta balıkçılığı kullanımını; aynalı/pullu sazan ile gümüş balığını rota özelinde bildirir."},
      {label:"ASKİ - Kurtboğazı Barajı",url:"https://aski.gov.tr/TR/ICERIKDETAY/Kurtbogazi-Baraji/32/15",note:"Barajın Ankara içme suyu sistemindeki resmî kimliğini doğrular; içme suyu koruma ve işletme kararları önceliklidir."}
    ],
    accessUrl:"https://www.kahramankazan.gov.tr/kurtbogazi-baraji-ilcemiz",
    summary:"Kurtboğazı Barajının resmî su kaynağı kimliği, genel rekreasyon/olta kullanımı ve rota özelindeki tür bilgisi iki ayrı kamu kurumu üzerinden çaprazlandı.",
    risk:"Aktif içme suyu kaynağıdır; koruma kuşakları, tesis/işletme sahaları, özel mesire alanları ve güncel saha tabelaları genel olta bilgisinden üstündür."
  },
  "ankara-500km-ankara-doganozu-baraj-golu": {
    fish:["Sazan","Tatlısu kefali","Yayın"],
    sources:[
      {label:"Tarım ve Orman TATUS - Doğanözü Baraj Gölü",url:"https://cbs1.tarimorman.gov.tr/server/rest/services/TATUS/MapServer/7",note:"DOĞANÖZÜ adıyla resmî su varlığı/gözlem katmanı eşleşmesini destekler; mikro kıyı erişimi değildir."},
      {label:"Manşet Ankara - 2026 Doğanözü güncel rota kaydı",url:"https://mansetankara.com/ozel-haber/2025-yilinda-alarm-veren-doganozu-barajinda-su-seviyesi-yukseldi-261785h",note:"Kızılcahamam-Güdül/Kirmir Vadisi genel konumu, su seviyesi ve sazan, tatlısu kefali, yayın ile olta kullanımını rota özelinde bildirir; bağımsız yerel destekleyici kaynaktır."}
    ],
    accessUrl:"https://mansetankara.com/ozel-haber/2025-yilinda-alarm-veren-doganozu-barajinda-su-seviyesi-yukseldi-261785h",
    summary:"Doğanözü Baraj Gölünün resmî su varlığı kimliği, güncel genel konum/kullanım bağlamı ve rota özelindeki tür olasılığı resmî ve bağımsız yerel kaynakla çaprazlandı.",
    risk:"Su seviyesi hızlı değişebilir; servis/tarla yolu, özel mülkiyet ve kıyı zemini kamusal veya güvenli varsayılamaz."
  },
  "ankara-500km-ankara-karagol": {
    fish:["Abant alası"],
    sources:[
      {label:"DKMP 9. Bölge - Çubuk Karagöl Tabiat Parkı",url:"https://bolge9.tarimorman.gov.tr/Menu/42/Ankara-Cubuk-Karagol-Tabiat-Parki",note:"Tabiat parkı kimliği, genel ulaşım/ziyaretçi altyapısı ve kontrollü sportif olta balıkçılığı bağlamını resmî olarak destekler."},
      {label:"Tarım Orman Ekranı - Karagöl Abant alası balıklandırması",url:"https://www.tarimtv.gov.tr/tr/video-detay/karagol-e-5-bin-abant-alasi-birakildi-10497",note:"2018'de Çubuk Karagöl'e 5 bin Abant alası yavrusu bırakıldığını kaydeder; geçmiş balıklandırma güncel av garantisi değildir."},
      {label:"Çubuk Belediyesi - Karagöl 2026 ziyaret kaydı",url:"https://www.cubuk.bel.tr/karagol-tabiat-parki-dogaseverlerin-gozdesi-olmaya-devam-ediyor/",note:"2026 güncel ziyaret ve rekreasyon kullanımını yerel yönetim kaynağıyla destekler."}
    ],
    accessUrl:"https://bolge9.tarimorman.gov.tr/Menu/42/Ankara-Cubuk-Karagol-Tabiat-Parki",
    summary:"Çubuk Karagöl'ün korunan alan kimliği, kontrollü sportif olta bağlamı, genel erişim ve geçmiş Abant alası balıklandırması çoklu kamu kaynaklarıyla çaprazlandı.",
    risk:"Korunan tabiat parkıdır; DKMP işletme saatleri, dönemsel yangın/orman giriş kararları, koruma kuralları ve saha görevlisi/tabelaları önceliklidir."
  },
  "ankara-500km-ankara-yukari-cavundur-goleti": {
    fish:["Aynalı sazan","Kambur sazan"],
    sources:[
      {label:"Çubuk Belediyesi 2025-2029 Stratejik Planı",url:"https://www.cubuk.bel.tr/wp-content/uploads/2024/09/2025-2029-stratejik-plan.pdf",note:"Yukarı Çavundur/Kayapınar Göletinin kimliğini, asfalt yol ve mesire kullanımını, ailece olta balıkçılığını ve aynalı/kambur sazan bilgisini rota özelinde kaydeder."},
      {label:"AA - 2 Mayıs 2026 Yukarı Çavundur etkinliği",url:"https://www.haberler.com/kultur-sanat/cubuk-ta-dogayla-bulus-saglikli-yasa-temasiyla-19798095-haberi/",note:"Belediyenin gölet çevresini kapsayan güncel kamusal doğa yürüyüşü etkinliğini bağımsız haber kaydıyla destekler; mikro kıyı av izni değildir."}
    ],
    accessUrl:"https://www.cubuk.bel.tr/wp-content/uploads/2024/09/2025-2029-stratejik-plan.pdf",
    summary:"Yukarı Çavundur Göletinin Çubuk/Kayapınar kimliği, genel mesire-ulaşım bağlamı, güncel kamusal çevre kullanımı ve rota özelindeki sazan türleri iki bağımsız kaynak ailesiyle çaprazlandı.",
    risk:"Mesire ve yürüyüş kullanımı göletin tüm kıyılarını sürekli açık yapmaz; tarla/servis yolu, özel mülkiyet, su kotu ve saha tabelaları ayrıca kontrol edilmelidir."
  },
  "ankara-500km-yozgat-divanli-goleti": {
    fish:["Sazan"],
    sources:[
      {label:"Yozgat İl Tarım - 2025 Divanlı balıklandırması",url:"https://yozgat.tarimorman.gov.tr/Haber/725/2025-Yili-Yozgat-Ili-Icsu-Baliklandirma-Faaliyeti",note:"Saraykent Divanlı'ya 20 bin sazan yavrusu bırakıldığını rota özelinde doğrular; program 5 hektarın altındaki ve kiralanmış avlakları kapsam dışı bırakmıştır. Balıklandırma av garantisi değildir."},
      {label:"Yozgat İl Tarım - 2026 Divanlı Göleti Millet Bahçesi",url:"https://yozgat.tarimorman.gov.tr/Haber/775/Budama-Egitimi-Verildi",note:"Saraykent Belediyesinin Divanlı Göleti bölgesindeki Millet Bahçesini 19 Şubat 2026 tarihinde güncel kamusal rekreasyon bağlamıyla doğrular; göletin tüm kıyısına erişim izni değildir."},
      {label:"Turizm Çalışmaları Dergisi - Yozgat alternatif turizm alan araştırması",url:"https://dergipark.org.tr/en/download/article-file/910550",note:"Saraykent bölümünde Divanlı Göleti ve Mesire Yerini bağımsız akademik/turizm kaynağı olarak listeler; mikro kıyı izni veya güncel av garantisi değildir."}
    ],
    accessUrl:"https://yozgat.tarimorman.gov.tr/Haber/775/Budama-Egitimi-Verildi",
    summary:"Divanlı Göletinin Saraykent kimliği, 2026'da gölet bölgesindeki belediye Millet Bahçesi kullanımı, bağımsız akademik mesire kaydı ve 2025 rota özelindeki 20 bin sazan balıklandırmasıyla çaprazlandı.",
    risk:"Millet Bahçesi varlığı göletin bütün çevresini kamusal veya olta avına açık yapmaz; kıyı geçişi, belediye düzenlemeleri, su kotu, özel parseller ve güncel saha tabelaları hareket günü kontrol edilmelidir."
  }
};

const uniqSources = (items: ResearchSource[]) => [...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const applyDailyQuality20260907Stage2 = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of promoted20260907Stage2) {
    const previous = routeMap.get(slug);
    if (!previous) throw new Error(`2026-09-07 Stage2 hedefi yok: ${slug}`);
    if (previous.confidence !== "D") throw new Error(`2026-09-07 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);
    const e = evidence[slug];
    const sources = uniqSources([...(previous.sources || []), ...e.sources, teblig]);
    routeMap.set(slug, {
      ...previous,
      fish: e.fish,
      confidence: "C",
      locationPrecision: "Genel bölge",
      navigationVerified: false,
      summary: `${e.summary} Tür kayıtları güncel av başarısı veya av garantisi değildir.`,
      longIntro: [
        `${previous.name}, rota kimliği, genel erişim/kullanım bağlamı, mevzuat ve rota özelindeki tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildiği için Güven C düzeyine çıkarılmıştır.`,
        "Güven C belirli bir kıyı cebinin sürekli açık, kamusal veya araçla erişilebilir olduğu anlamına gelmez. Konum yalnız genel bölge planlamasıdır; park, yol sonu, özel mülkiyet, işletme/koruma sınırı ve saha tabelaları hareket günü ayrıca doğrulanmalıdır."
      ],
      verification: `2026-09-07 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${e.risk}`,
      updatedAt: "2026-09-07",
      researchedAt: "2026-09-07",
      researchStatus: "2026-09-07 Stage 2 rota özelinde çok kaynaklı araştırma tamamlandı.",
      researchSummary: `${e.summary} ${e.risk}`,
      fishEvidence: e.fish.map((name)=>({name,evidenceLevel:"Güçlü/orta-güçlü olasılık · rota özelinde kaynak",sourceLabel:e.sources[0].label,sourceUrl:e.sources[0].url,note:"Rota özelindeki resmî, kurumsal veya bağımsız destekleyici kayda dayanır; güncel av başarısı, stok yoğunluğu veya yasal boy garantisi değildir.",recordCount:null,distanceKm:null})),
      accessEvidence: [...(previous.accessEvidence || []), {label:"Genel erişim/kullanım bağlamı",value:`${previous.name} genel bölge`,sourceUrl:e.accessUrl,note:"Kaynak genel rota/rekreasyon/kullanım bağlamını destekler; mikro kıyı, park cebi, yol sonu veya özel mülk geçişi saha teyitli değildir."}],
      sources,
      cautions: [...new Set([...(previous.cautions || []), e.risk])],
      navigationNote: `Pin yalnız ${previous.name} genel su/bölge konumunu gösterir; park, yol sonu, kamusal kıyı cebi veya özel mülk geçişi değildir. ${e.risk}`,
      confidenceProfile: {
        model:"evidence-v1",
        overall:"C",
        identity:{level:"strong",label:"Rota özelinde kimlik kanıtı",note:"Ad, il/ilçe ve su varlığı kimliği resmî/kurumsal kaynaklarla eşleşmiştir; konum yalnız genel bölgedir."},
        legal:{level:"partial",label:"Güncel mevzuat + yerel/koruma bağlamı",note:"6/2 Tebliğ ile suya özgü işletme, koruma ve saha kararları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz."},
        access:{level:"partial",label:"Genel kamusal/kullanım bağlamı",note:"Genel rekreasyon, ziyaret veya rota kullanım kaydı vardır; mikro kıyı, park, yol sonu ve özel mülk geçişi saha teyitli değildir."},
        species:{level:"strong",label:"Rota özelinde tür olasılığı",note:"Türler rota özelindeki kaynaklardan türetilir; geçmiş balıklandırma yalnız bulunma olasılığıdır, av garantisi değildir."},
        field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, zemin, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir."},
        reviewedAt:"2026-09-07"
      }
    });
  }
  return routeMap;
};