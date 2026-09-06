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

const uniqSources = (items: ResearchSource[]) => [...new Map(items.filter((s) => s?.url).map((s) => [s.url, s])).values()];

export const promoted20260906Stage2Partial = [
  "ankara-500km-cankiri-alpsari-goleti",
  "ankara-500km-cankiri-bozoglu-goleti"
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
      summary: `${upgrade.summary} Geçmiş balıklandırma tür bulunma olasılığını destekler; güncel av başarısı veya av garantisi değildir.`,
      longIntro: [
        `${previous.name}, rota kimliği, genel erişim bağlamı, güncel mevzuat ve rota özelindeki tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildiği için Güven C düzeyine çıkarılmıştır.`,
        "Güven C belirli bir kıyı cebinin sürekli açık, kamusal veya araçla erişilebilir olduğu anlamına gelmez. Konum yalnız genel bölge planlamasıdır; park, yol sonu, özel mülkiyet, işletme sınırı ve saha tabelaları hareket günü ayrıca doğrulanmalıdır."
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
        legal: { level: "partial", label: "Güncel mevzuat + yerel bağlam", note: "6/2 Tebliğ ve il düzeyindeki güncel avcılık duyuruları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz." },
        access: { level: "partial", label: "Genel erişim bağlamı", note: "Yerel kamu/rekreasyon veya sulama suyu bağlamı kaynaklıdır; mikro kıyı, park, yol sonu ve özel mülk geçişi saha teyitli değildir." },
        species: { level: "strong", label: "Rota özelinde tür olasılığı", note: "Sazan rota adıyla balıklandırma kaydıyla desteklenir; güncel av başarısı, stok yoğunluğu veya yasal boyda balık garantisi değildir." },
        field: { level: "unverified", label: "Saha doğrulaması yok", note: "Bariyer, tabela, su kotu, zemin, özel mülkiyet ve güncel riskler hareket günü yeniden kontrol edilmelidir." },
        reviewedAt: "2026-09-06"
      }
    });
  }
  return routeMap;
};
