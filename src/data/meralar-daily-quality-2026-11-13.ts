import { applyCPlusReviews } from "./meralar-d-to-cplus-2026-11-11";
import type { EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";

const reviewedAt = "2026-11-13";
const bilecikWaterSafety: ResearchSource = {
  label: "Bilecik Valiliği – 2026/2 su güvenliği kararı",
  url: "https://bilecik.tarimorman.gov.tr/Lists/Duyuru/Attachments/685/Ek-1.pdf",
  note: "30 Temmuz 2026 tarihli kararın 5.1 maddesi, balık tutma amacı dahil, baraj ve göletlerde suya girmeyi yasaklar."
};
const bilecikSeason: ResearchSource = {
  label: "Bilecik İl Tarım – 2026 içsu av dönemi",
  url: "https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=681",
  note: "Bilecik'te sazan için 15 Mart–15 Haziran kapalı dönemi ve 2026 genel sezon açılışı."
};
const bilecikRecreationSurvey: ResearchSource = {
  label: "Düzce Üniversitesi – Bilecik göletlerinde 2023 saha gözlemleri",
  url: "https://acikerisim.duzce.edu.tr/server/api/core/bitstreams/a964ab29-0e52-418e-993e-419708110bce/content",
  note: "Saha araştırması Zemzemiye ve Yenipazar göletlerinde piknik ve olta balıkçılığı gözlemlerini ayrı ayrı kaydeder."
};
const bilecikRule = "Bilecik Valiliğinin 2026/2 kararı gereği olta için dahi suya girmeyin. Yalnızca açık kuru kıyıda kalın ve DSİ güvenlik sahası ile levhalı alanlara girmeyin.";

export const dailyPromotionSlugs20261113 = [
  "ankara-500km-bilecik-zemzemiye-goleti",
  "bilecik-yenipazar-baraj-goleti",
  "ulusal-usak-karaagac-baraj-golu-usak"
] as const;

const yenipazarStock: ResearchSource = {
  label: "Bilecik İl Tarım – Yenipazar 2019 sazan salımı",
  url: "https://bilecik.tarimorman.gov.tr/Haber/812/Ilimizdeki-10-Golete-Eszamanli-Olarak-64-Bin-Adet-Balik-Birakildi",
  note: "İl Tarım 2019 yılında Yenipazar Göleti'ne 10.000 sazan yavrusu bırakıldığını kaydediyor."
};
const yenipazarAccess: ResearchSource = {
  label: "Rota Senin – Eylül 2026 Süzmen Göleti saha gözlemi",
  url: "https://www.rotasenin.com/suzmen-goleti-yenipazar",
  note: "Tarihli kıyı fotoğrafları, Yenipazar merkezinden toprak yol yaklaşımını ve ziyaretçilerin kullandığı piknik kıyısını gösteriyor."
};
const karaagacStudy: ResearchSource = {
  label: "Yüksel ve Atalay – Karaağaç Göleti balık faunası, 2010",
  url: "https://dergipark.org.tr/tr/pub/nwsaecolife/article/211810",
  note: "2009 saha örneklemesi Karaağaç Göleti'nde sazan, kadife ve turnayı kaydetti."
};
const karaagacVisit: ResearchSource = {
  label: "MEB – Karaağaç Göleti ziyaret bilgisi",
  url: "https://okuldisiogrenme.eba.gov.tr/mekan-detay/karaagac-goleti-1795",
  note: "MEB, Yeşil Karaağaç'ta göletin çevresini ziyarete açık okul dışı öğrenme alanı olarak tanımlar."
};
const karaagacShoreReport: ResearchSource = {
  label: "Uşak Haber Gazetesi – Ekim 2026 Karaağaç kıyısı",
  url: "https://www.usakhabergazetesi.com.tr/usaklilarin-rotasi-karaagac-goletinde-sonbahar-molasi",
  note: "Tarihli saha haberi asfalt yol yaklaşımını, kullanılan mesire alanını ve kıyıdaki yaya düzenini kaydeder."
};
const usakLocalRules: ResearchSource = {
  label: "Uşak İl Tarım – turna dönemi ve kiralı göletlerin av yasağı",
  url: "https://usak.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=483",
  note: "İl duyurusunda turnanın 15 Aralık–31 Mart dönemi ve amatör avın yasak olduğu altı kiralı gölet ayrı ayrı belirtilir. Yeşil Karaağaç bu altı gölet arasında yer almıyor."
};
const usakSeason: ResearchSource = {
  label: "Uşak İl Tarım – sazan ve kadife kapalı dönemi",
  url: "https://usak.tarimorman.gov.tr/Duyuru/462/Ilimizde-Su-Urunleri-Avciligi-Ve-Satis-Yasaklari",
  note: "Uşak'ta sazan ve kadife için 15 Mart–15 Haziran dönemini bildirir."
};

const mergeSources = (old: EnrichedMera, sources: ResearchSource[]): ResearchSource[] =>
  [...new Map([...old.sources, ...sources].map(source => [source.url, source])).values()];

export function applyDailyAvlakQuality20261113(routes: Map<string, EnrichedMera>): void {
  const [zemzemiyeSlug, yenipazarSlug, karaagacSlug] = dailyPromotionSlugs20261113;
  applyCPlusReviews(routes, [{
    slug: zemzemiyeSlug,
    district: "Söğüt",
    fish: {
      label: "Gölete özgü resmî sazan salımı",
      source: {
        label: "Bilecik İl Tarım – Zemzemiye 2018 sazan salımı",
        url: "https://bilecik.tarimorman.gov.tr/Haber/677/",
        note: "İl Tarım 2018 yılında Zemzemiye Göleti'ne 8.000 sazan yavrusu bırakıldığını kaydediyor."
      },
      basis: "Salım kaydı sazanı Zemzemiye Göleti'ne bağlar. Güncel yetişkin stok büyüklüğü bilinmiyor."
    },
    access: {
      label: "Eskişehir'den Haberler – Ağustos 2026 Zemzemiye kıyı ziyareti",
      url: "https://eskisehirdenhaberler.com/haber/balik-tutmaya-gittiler-goelet-kiyisini-temizlediler-coepleri-tek-tek-topladilar",
      note: "Haber Söğüt Zemzemiye'de gölet kıyısına ulaşan amatör olta ziyaretçilerini ve yaptıkları kıyı temizliğini kaydediyor."
    },
    additionalSources: [bilecikRecreationSurvey, bilecikWaterSafety, bilecikSeason],
    localRule: bilecikRule,
    safety: "Islak çamura ve dik şeve inmeyin. Kıyıda atık veya kırık cam varsa başka bir kuru kesim seçin."
  }], reviewedAt);

  const yenipazar = routes.get(yenipazarSlug);
  if (!yenipazar || yenipazar.confidence !== "C" || yenipazar.qualityGrade !== "C" || yenipazar.indexing !== "hold") {
    throw new Error(`${reviewedAt} Yenipazar başlangıç sınıfı veya indeks durumu değişti.`);
  }
  const yenipazarShore = "Yenipazar merkezinin güneydoğusundaki Süzmen Göleti kıyısına toprak yol üzerinden ulaşılır. Yağıştan sonra yol çamurlanabilir. Harita pini göleti gösterir.";
  const yenipazarFishing = "Eylül 2026 saha kaydı genel kamusal yaklaşımı doğrular. Sadece levhaların ve güncel işletme sınırlarının izin verdiği açık kuru kıyıda olta kullanın.";
  routes.set(yenipazarSlug, {
    ...yenipazar,
    qualityGrade: "C+",
    updatedAt: reviewedAt,
    researchedAt: reviewedAt,
    vehicleAccess: "Kontrol edilmeli",
    summary: "Süzmen Deresi üzerindeki Yenipazar Baraj Göleti, kıyıya toprak yol yaklaşımı olan bir sulama barajıdır. İl Tarım gölete sazan yavrusu bırakıldığını kaydetmiştir.",
    verification: `Yenipazar Baraj Göleti C+. Bilecik İl Tarımın gölete özgü sazan salımı, Eylül 2026 kıyı gözlemi, 6/2 ve Bilecik 2026/2 kararı incelendi. ${bilecikRule}`,
    researchStatus: "Kaynaklı araştırma",
    researchSummary: `${yenipazarStock.note} ${yenipazarAccess.note} ${bilecikRule}`,
    transport: yenipazarShore,
    shoreProfile: `${yenipazarShore} ${yenipazarFishing}`,
    navigationNote: "Koordinat Valiliğin yayımladığı genel su konumudur. Toprak yolda, teknik tesis ve bariyer çevresinde güncel saha işaretlerini takip edin.",
    longIntro: [yenipazarShore, yenipazarStock.note, yenipazarFishing],
    planningNotes: [bilecikRule, "Yağıştan sonra çamurlu yaklaşımı ve güncel orman giriş duyurularını kontrol edin."],
    seasonalNotes: [bilecikSeason.note, "2019 balıklandırması, bugünkü av verimi veya balık boyu hakkında ölçüm vermez."],
    cautions: ["Suya girmeyin ve baraj gövdesine yaklaşmayın.", "Toprak yol ve kıyı yağıştan sonra kayganlaşabilir.", "Sazan için 6/2 boy, miktar ve sezon hükümlerine uyun."],
    fishEvidence: [{
      name: "Sazan",
      scientificName: "Cyprinus carpio",
      evidenceLevel: "Gölete özgü resmî sazan salımı",
      sourceLabel: yenipazarStock.label,
      sourceUrl: yenipazarStock.url,
      note: "2019 salım kaydıdır. Bugünkü yetişkin stok ölçülmedi."
    }],
    accessEvidence: [
      ...yenipazar.accessEvidence.map(source => ({ ...source, value: "Valiliğin yayımladığı genel su konumu ve ilçe merkezinden yaklaşım" })),
      { label: yenipazarAccess.label, value: yenipazarAccess.note, sourceUrl: yenipazarAccess.url, note: yenipazarFishing }
    ],
    sources: mergeSources(yenipazar, [yenipazarStock, yenipazarAccess, bilecikRecreationSurvey, bilecikWaterSafety, bilecikSeason]),
    qualityAssessment: {
      model: "expanded-v2",
      reviewedAt,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: [yenipazarStock.url],
      localContentVerified: true,
      fieldOrEquivalentVerified: false,
      unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1",
      overall: "C",
      reviewedAt,
      identity: { level: "strong", label: "Yenipazar (Süzmen) Baraj Göleti", note: "Valilik ve tarihli saha kaydı aynı suyu gösteriyor." },
      species: { level: "strong", label: yenipazarStock.label, note: yenipazarStock.note },
      legal: { level: "strong", label: "6/2 ve Bilecik 2026/2", note: bilecikRule },
      access: { level: "partial", label: yenipazarAccess.label, note: yenipazarFishing },
      field: { level: "partial", label: "Tarihli kıyı gözlemi", note: "Son yol ve kuru kıyı gözlemi Eylül 2026 tarihli kayda dayanır. Mevsim koşulları değişebilir." }
    }
  });

  const karaagac = routes.get(karaagacSlug);
  if (!karaagac || karaagac.confidence !== "C" || karaagac.qualityGrade !== "C+" || karaagac.indexing !== "hold" || !karaagac.qualityAssessment || !karaagac.confidenceProfile) {
    throw new Error(`${reviewedAt} Karaağaç başlangıç sınıfı veya indeks durumu değişti.`);
  }
  const karaagacAccess = karaagac.accessEvidence[0];
  const karaagacLaw = "6/2 ve 2026/26 ile Uşak İl Tarım duyuruları geçerlidir. Sazan ve kadife için 15 Mart–15 Haziran, turna için 15 Aralık–31 Mart kapalı dönemine uyun.";
  const karaagacShore = "Yeşil Karaağaç'taki mesire kıyısında piknik masaları ve asfalt yaklaşım bulunur. Su çekildiğinde çamurlu kesimlerde ve su basmış teraslarda ilerlemeyin. Ziyaret alanındaki açık kuru kıyıda levhaları izleyin.";
  const species: FishEvidence[] = [
    ["Sazan", "Cyprinus carpio"],
    ["Kadife", "Tinca tinca"],
    ["Turna", "Esox lucius"]
  ].map(([name, scientificName]) => ({
    name,
    scientificName,
    evidenceLevel: "Gölete özgü 2009 akademik saha örneklemesi",
    sourceLabel: karaagacStudy.label,
    sourceUrl: karaagacStudy.url,
    note: "Tarihsel saha örneği. Güncel stok miktarı ölçülmedi."
  }));
  routes.set(karaagacSlug, {
    ...karaagac,
    confidence: "B",
    qualityGrade: "B",
    updatedAt: reviewedAt,
    researchedAt: reviewedAt,
    summary: "Uşak merkezdeki Yeşil Karaağaç Göleti, asfalt yolla ulaşılan bir mesire kıyısına sahip. 2009 saha örneklemesinde sazan, kadife ve turna kaydedildi.",
    verification: `Karaağaç Göleti B. Akademik saha örneklemesi, Zafer Kalkınma Ajansı gölet formu, Valilik ve MEB kıyı kaynakları ayrı incelendi. ${karaagacLaw}`,
    researchSummary: `${karaagacStudy.note} ${karaagacAccess.value} ${karaagacLaw}`,
    fish: species.map(record => record.name),
    fishEvidence: species,
    methods: ["Kıyıdan dip oltası", "Şamandıralı olta", "Kıyıdan at-çek"],
    baits: ["Mısır", "Hamur", "Solucan", "Yapay yem"],
    shoreProfile: karaagacShore,
    longIntro: [karaagacStudy.note, "Zafer Kalkınma Ajansının ayrı su ürünleri kapasite envanteri göletin kimliğini ve tür kaydını destekliyor.", karaagacShore],
    planningNotes: [karaagacLaw, "Piknik ve yaya hattının dışında, atış için arkanız boş olan kuru kıyıyı kullanın."],
    seasonalNotes: [karaagacLaw, "Araştırma sonuçları 2009 örneklemesine aittir. Bugünkü av verimi ve boy dağılımı bilinmiyor."],
    cautions: [karaagac.cautions[0], "Her türün kapalı dönemine, asgari boyuna ve alıkoyma sınırına uyun.", "İçsuda canlı balığı yem olarak kullanmayın."],
    accessEvidence: [
      ...karaagac.accessEvidence,
      { label: karaagacVisit.label, value: karaagacVisit.note, sourceUrl: karaagacVisit.url, note: "Mesire alanına genel ziyaret yaklaşımı." }
    ],
    sources: mergeSources(karaagac, [karaagacStudy, karaagacVisit, karaagacShoreReport, usakLocalRules, usakSeason]),
    qualityAssessment: {
      ...karaagac.qualityAssessment,
      reviewedAt,
      independentStrongFamilies: [...karaagac.qualityAssessment.independentStrongFamilies, karaagacStudy.url]
    },
    confidenceProfile: {
      ...karaagac.confidenceProfile,
      overall: "B",
      reviewedAt,
      species: { level: "strong", label: karaagacStudy.label, note: karaagacStudy.note },
      legal: { level: "strong", label: "6/2 ve Uşak İl Tarım duyuruları", note: karaagacLaw }
    }
  });
}
