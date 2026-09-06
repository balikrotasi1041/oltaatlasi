import type { AccessEvidence, EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";

const teblig: ResearchSource = {
  label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url: "https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note: "2024-2028 genel amatör avcılık çerçevesidir; il ve suya özel koruma, işletme, dönem ve saha kararları ayrıca uygulanır."
};

const alpsariStockUrl = "https://cankiri.tarimorman.gov.tr/Haber/1352/Ilimizde-Gol-Ve-Goletler-662-Bin-500-Sazan-Yavrusu-Ile-Bereketleniyor";
const alpsariInfoUrl = "https://cankiri.tarimorman.gov.tr/Menu/135/Cankiri-Hakkinda";
const alpsariPublicUrl = "https://cankiri.tarimorman.gov.tr/Belgeler/KutuMenu/2014y%C4%B1l%C4%B1%C3%A7al%C4%B1%C5%9Fmakitab%C4%B1.pdf";
const bozogluIdentityUrl = "https://www.cerkes.gov.tr/ilce-tanitim-karti-cografi-yapi";
const bozogluStockUrl = "https://www.haberler.com/guncel/cankiri-da-320-bin-sazan-yavrusu-su-kaynaklarina-birakildi-18984892-haberi/";
const bozogluOfficialPressUrl = "https://cankiri.tarimorman.gov.tr/Link/44/Basinda-Biz";
const cankiriLegalUrl = "https://cankiri.tarimorman.gov.tr/Haber/1251/Cankirida-Su-Urunleri-Avlanma-Yasagi-Sona-Eriyor";
const kurtbogaziKaymakamlikUrl = "https://www.kahramankazan.gov.tr/kurtbogazi-baraji-ilcemiz";
const kurtbogaziAskiUrl = "https://aski.gov.tr/TR/ICERIKDETAY/Kurtbogazi-Baraji/32/15";
const doganozuTatusUrl = "https://cbs1.tarimorman.gov.tr/server/rest/services/TATUS/MapServer/7";
const doganozuCurrentUrl = "https://mansetankara.com/ozel-haber/2025-yilinda-alarm-veren-doganozu-barajinda-su-seviyesi-yukseldi-261785h";

const uniqSources = (items: ResearchSource[]) => [...new Map(items.filter((s) => s?.url).map((s) => [s.url, s])).values()];

export const promoted20260906Stage2Partial = [
  "ankara-500km-cankiri-alpsari-goleti",
  "ankara-500km-cankiri-bozoglu-goleti",
  "ankara-500km-ankara-kurtbogazi-baraj-golu",
  "ankara-500km-ankara-doganozu-baraj-golu"
] as const;

type Upgrade = {
  fish: string[];
  sources: ResearchSource[];
  fishEvidence: FishEvidence[];
  accessEvidence: AccessEvidence[];
  summary: string;
  risk: string;
};

const evidence: Record<(typeof promoted20260906Stage2Partial)[number], Upgrade> = {
  "ankara-500km-cankiri-alpsari-goleti": {
    fish: ["Sazan"],
    sources: [
      {
        label: "Çankırı İl Tarım - 3 Eylül 2026 Alpsarı balıklandırması",
        url: alpsariStockUrl,
        note: "Alpsarı Göletine 50 bin sazan yavrusu bırakıldığını rota özelinde doğrular; yetkililer balıkların yasal boya ulaşmasının yıllar alacağını özellikle belirtir."
      },
      {
        label: "Çankırı İl Tarım - Çankırı hakkında / Alpsarı",
        url: alpsariInfoUrl,
        note: "Alpsarı Göletini Korgun bağlamında ve ilçe/şehir merkezine genel mesafeleriyle resmî olarak tanımlar; mikro kıyı girişi değildir."
      },
      {
        label: "Çankırı İl Gıda Tarım - 2014 çalışma kitabı",
        url: alpsariPublicUrl,
        note: "Alpsarı Göleti çevresindeki gezi ve mesire alanlarının halka hizmet verdiğini kamu kaynağında kaydeder; güncel park yeri, özel parsel geçişi veya belirli kıyı cebinin av izni değildir."
      }
    ],
    fishEvidence: [{
      name: "Sazan",
      evidenceLevel: "Güçlü olasılık · rota özelinde resmî balıklandırma",
      sourceLabel: "Çankırı İl Tarım - 3 Eylül 2026 Alpsarı balıklandırması",
      sourceUrl: alpsariStockUrl,
      note: "Alpsarı Göletine 50 bin sazan yavrusu bırakıldığı resmî olarak kaydedildi. Bu, tür bulunma olasılığı kanıtıdır; güncel av başarısı veya yasal boyda balık garantisi değildir.",
      recordCount: null,
      distanceKm: null
    }],
    accessEvidence: [{
      label: "Kamusal genel rekreasyon bağlamı",
      value: "Alpsarı Göleti gezi/mesire alanı",
      sourceUrl: alpsariPublicUrl,
      note: "Resmî kaynak alanın halka hizmet veren rekreasyon bağlamını destekler; belirli kıyı cebi, park alanı, yol sonu veya özel mülk geçişi doğrulanmış sayılmaz."
    }],
    summary: "Alpsarı Göletinin Korgun'daki kimliği, kamusal genel rekreasyon bağlamı ve rota özelindeki 2026 sazan balıklandırması bağımsız kamu kayıtlarıyla çaprazlandı.",
    risk: "Gölet kıyısındaki her parsel veya yol kamusal değildir; su kotu, zemin, işletme/mesire kuralları, saha tabelaları ve güncel 6/2 sınırları hareket günü yeniden kontrol edilmelidir."
  },
  "ankara-500km-cankiri-bozoglu-goleti": {
    fish: ["Sazan"],
    sources: [
      {
        label: "Çerkeş Kaymakamlığı - coğrafi yapı",
        url: bozogluIdentityUrl,
        note: "Bozoğlu köyündeki sulama göletini resmî yerel kaynakta tanımlar; bu kayıt mikro kıyı erişimi veya park izni değildir."
      },
      {
        label: "AA kaynaklı 2025 Bozoğlu/Akhasan balıklandırma haberi",
        url: bozogluStockUrl,
        note: "Bozoğlu Göleti ile Akhasan Barajına toplam 320 bin sazan yavrusu bırakıldığını bildirir; toplam sayı iki su arasında rota bazında ayrıştırılamaz."
      },
      {
        label: "Çankırı İl Tarım - Basında Biz",
        url: bozogluOfficialPressUrl,
        note: "İl Müdürlüğü basın derlemesinde Bozoğlu Göleti ve Akhasan Barajına sazan balıklandırması haberini kayıt altına alır."
      },
      {
        label: "Çankırı İl Tarım - 2025 içsu avlanma çerçevesi",
        url: cankiriLegalUrl,
        note: "İl genelindeki dönem yasağını ve tamamen avlanmaya kapalı Akhasan ile Güldürcek sularını açıkça bildirir; Bozoğlu için mikro kıyı izni üretmez."
      }
    ],
    fishEvidence: [{
      name: "Sazan",
      evidenceLevel: "Güçlü olasılık · rota özelinde balıklandırma kaydı",
      sourceLabel: "Çankırı İl Tarım kaydına dayalı Bozoğlu/Akhasan balıklandırması",
      sourceUrl: bozogluOfficialPressUrl,
      note: "Bozoğlu Göleti, sazan yavrusu bırakılan iki su varlığından biri olarak rota adıyla kaydedilmiştir. Toplam 320 bin balığın Bozoğlu payı ayrıştırılmadığından sayı rota için kullanılmaz; kayıt tür olasılığıdır, av garantisi değildir.",
      recordCount: null,
      distanceKm: null
    }],
    accessEvidence: [{
      label: "Genel yerel su yapısı bağlamı",
      value: "Çerkeş / Bozoğlu köyü sulama göleti",
      sourceUrl: bozogluIdentityUrl,
      note: "Kaymakamlık göletin yerel ve kamusal su yapısı kimliğini destekler; belirli kıyı geçişi, tarla yolu, park alanı veya özel parsel erişimi doğrulanmış değildir."
    }],
    summary: "Bozoğlu Göletinin Çerkeş'teki sulama suyu kimliği, rota adıyla sazan balıklandırması ve Çankırı'nın güncel içsu avcılık çerçevesi ayrı kaynak aileleriyle çaprazlandı.",
    risk: "Sulama göletinde servis/tarla yolları ve kıyı parselleri kamusal varsayılamaz; zemin, su seviyesi, tarımsal faaliyet, bariyer/tabela ve dönem kuralları hareket günü kontrol edilmelidir."
  },
  "ankara-500km-ankara-kurtbogazi-baraj-golu": {
    fish: ["Sazan", "Gümüş balığı"],
    sources: [
      {
        label: "Kahramankazan Kaymakamlığı - Kurtboğazı Barajı",
        url: kurtbogaziKaymakamlikUrl,
        note: "Barajı Kahramankazan sınırlarında resmî olarak tanımlar; rekreasyon, piknik ve olta balıkçılığı kullanımını açıkça sayar ve aynalı/pullu sazan ile gümüş balığı türlerini bildirir."
      },
      {
        label: "ASKİ - Kurtboğazı Barajı",
        url: kurtbogaziAskiUrl,
        note: "Kurtboğazı'nın Ankara içme suyu sistemindeki resmî su kaynağı kimliğini, kapasitesini ve rekreasyon kullanımını doğrular. İçme suyu işlevi nedeniyle saha kısıtları önceliklidir."
      }
    ],
    fishEvidence: [
      {
        name: "Sazan",
        evidenceLevel: "Güçlü olasılık · rota özelinde resmî tür kaydı",
        sourceLabel: "Kahramankazan Kaymakamlığı - Kurtboğazı Barajı",
        sourceUrl: kurtbogaziKaymakamlikUrl,
        note: "Kaymakamlık sayfası aynalı ve pullu sazanı rota özelinde bildirir. Bu tür varlığı olasılığıdır; av başarısı, stok yoğunluğu veya belirli kıyıda av izni garantisi değildir.",
        recordCount: null,
        distanceKm: null
      },
      {
        name: "Gümüş balığı",
        evidenceLevel: "Güçlü olasılık · rota özelinde resmî tür kaydı",
        sourceLabel: "Kahramankazan Kaymakamlığı - Kurtboğazı Barajı",
        sourceUrl: kurtbogaziKaymakamlikUrl,
        note: "Kaymakamlık rota özelinde gümüş balığını bildirir; güncel av başarısı garantisi değildir.",
        recordCount: null,
        distanceKm: null
      }
    ],
    accessEvidence: [{
      label: "Kamusal genel rekreasyon ve olta bağlamı",
      value: "Kahramankazan sınırlarında rekreasyon alanı",
      sourceUrl: kurtbogaziKaymakamlikUrl,
      note: "Kaymakamlık olta balıkçılığını faaliyetler arasında sayar. Bu, barajın tüm kıyılarını açık yapmaz; içme suyu koruma/işletme alanları, özel mesire işletmeleri ve saha tabelaları ayrıca kontrol edilir."
    }],
    summary: "Kurtboğazı Barajının Kahramankazan'daki kimliği, ASKİ içme suyu/rekreasyon kaydı ve Kaymakamlığın rota özelindeki olta-tür bilgisi bağımsız kamu kurumları üzerinden çaprazlandı.",
    risk: "Kurtboğazı aktif içme suyu kaynağıdır. Koruma kuşakları, tesis/işletme alanları ve bariyerler önceliklidir; Kaymakamlığın genel olta kullanım kaydı belirli bir kıyı cebinin sürekli açık olduğu anlamına gelmez."
  },
  "ankara-500km-ankara-doganozu-baraj-golu": {
    fish: ["Sazan", "Tatlısu kefali", "Yayın"],
    sources: [
      {
        label: "Tarım ve Orman TATUS - Doğanözü Baraj Gölü gözlem eşleşmesi",
        url: doganozuTatusUrl,
        note: "Tarım ve Orman Bakanlığı TATUS baraj gözlem katmanında DOĞANÖZÜ adıyla resmî su varlığı eşleşmesini destekler; mikro kıyı erişimi değildir."
      },
      {
        label: "Manşet Ankara - 2026 Doğanözü güncel su/olta/tür kaydı",
        url: doganozuCurrentUrl,
        note: "2026 ilkbaharındaki su seviyesi toparlanmasını, Kızılcahamam-Güdül yolu/Kirmir Vadisi genel konumunu ve sazan, tatlısu kefali, yayın ile olta balıkçılığı kullanımını rota özelinde bildirir. Bağımsız yerel destekleyici kaynaktır."
      }
    ],
    fishEvidence: [
      {
        name: "Sazan",
        evidenceLevel: "Orta-güçlü olasılık · güncel rota özelinde yerel kayıt",
        sourceLabel: "Manşet Ankara - 2026 Doğanözü",
        sourceUrl: doganozuCurrentUrl,
        note: "Rota özelinde sazan bulunduğunu bildirir; resmî stok sayımı değildir ve av garantisi sayılmaz.",
        recordCount: null,
        distanceKm: null
      },
      {
        name: "Tatlısu kefali",
        evidenceLevel: "Orta olasılık · güncel rota özelinde yerel kayıt",
        sourceLabel: "Manşet Ankara - 2026 Doğanözü",
        sourceUrl: doganozuCurrentUrl,
        note: "Rota özelinde tatlısu kefali bulunduğunu bildirir; akademik/resmî stok sayımı değildir.",
        recordCount: null,
        distanceKm: null
      },
      {
        name: "Yayın",
        evidenceLevel: "Orta olasılık · güncel rota özelinde yerel kayıt",
        sourceLabel: "Manşet Ankara - 2026 Doğanözü",
        sourceUrl: doganozuCurrentUrl,
        note: "Rota özelinde yayın balığı bulunduğunu bildirir; av başarısı veya stok yoğunluğu garantisi değildir.",
        recordCount: null,
        distanceKm: null
      }
    ],
    accessEvidence: [{
      label: "Genel ulaşım ve olta kullanım bağlamı",
      value: "Kızılcahamam-Güdül yolu / Kirmir Çayı Vadisi genel baraj çevresi",
      sourceUrl: doganozuCurrentUrl,
      note: "Güncel yerel kaynak barajı ekoturizm ve olta balıkçılığı bağlamında tanımlar. Belirli kıyı cebi, servis yolu, park veya özel parsel geçişi doğrulanmış sayılmaz."
    }],
    summary: "Doğanözü Barajının resmî TATUS su kimliği, 2026 tarihli bağımsız rota/tür/olta kaydı ve genel 6/2 mevzuat çerçevesi çaprazlandı; mikro erişim iddiası üretilmedi.",
    risk: "2025'te ciddi su çekilmesi yaşanan barajda 2026'da seviye toparlanmış olsa da kot hızlı değişebilir. Tarımsal işletme, servis yolu, özel parsel, dik/çamurlu şev ve saha tabelaları hareket günü kontrol edilmelidir."
  }
};

export const applyDailyQuality20260906Stage2Partial = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of promoted20260906Stage2Partial) {
    const previous = routeMap.get(slug);
    if (!previous) throw new Error(`2026-09-06 Stage2 hedefi yok: ${slug}`);
    if (previous.confidence !== "D") throw new Error(`2026-09-06 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);
    const upgrade = evidence[slug];
    const sources = uniqSources([...(previous.sources || []), ...upgrade.sources, teblig]);
    routeMap.set(slug, {
      ...previous,
      fish: upgrade.fish,
      confidence: "C",
      locationPrecision: "Genel bölge",
      navigationVerified: false,
      summary: `${upgrade.summary} Geçmiş balıklandırma veya tür kayıtları yalnız tür bulunma olasılığını destekler; güncel av başarısı veya av garantisi değildir.`,
      longIntro: [
        `${previous.name}, rota kimliği, genel erişim bağlamı, güncel mevzuat ve rota özelindeki tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildiği için Güven C düzeyine çıkarılmıştır.`,
        "Güven C belirli bir kıyı cebinin sürekli açık, kamusal veya araçla erişilebilir olduğu anlamına gelmez. Konum yalnız genel bölge planlamasıdır; park, yol sonu, özel mülkiyet, işletme/koruma sınırı ve saha tabelaları hareket günü ayrıca doğrulanmalıdır."
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
        legal: { level: "partial", label: "Güncel mevzuat + yerel bağlam", note: "6/2 Tebliğ ve su/il düzeyindeki güncel koruma, işletme ve avcılık kuralları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz." },
        access: { level: "partial", label: "Genel erişim bağlamı", note: "Kamu/rekreasyon veya güncel rota kullanım kaydı kaynaklıdır; mikro kıyı, park, yol sonu ve özel mülk geçişi saha teyitli değildir." },
        species: { level: "strong", label: "Rota özelinde tür olasılığı", note: "Türler rota özelindeki resmî veya güncel destekleyici kayıtlardan türetilir; av başarısı, stok yoğunluğu veya yasal boy garantisi değildir." },
        field: { level: "unverified", label: "Saha doğrulaması yok", note: "Bariyer, tabela, su kotu, zemin, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir." },
        reviewedAt: "2026-09-06"
      }
    });
  }
  return routeMap;
};
