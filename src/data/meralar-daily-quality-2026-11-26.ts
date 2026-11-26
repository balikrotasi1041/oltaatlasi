import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-27";
const regulation: ResearchSource = {
  label: "Resmî Gazete — 6/2 Numaralı Amatör Su Ürünleri Avcılığı Tebliği",
  url: "https://www.resmigazete.gov.tr/eskiler/2024/08/20240811-4.htm",
  note: "Ulusal amatör su ürünleri avcılığı kurallarını ve alan kısıtlarını belirler.",
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı — 2026/26 sayılı tebliğ değişikliği",
  url: "https://rize.tarimorman.gov.tr/Duyuru/361/",
  note: "16 Eylül 2026 değişiklik metni ana tebliğle birlikte değerlendirilir.",
};

type WaterReview = {
  slug: string;
  distanceKmFromIstanbulCenter: number;
  identityAndSpecies: string;
  access: string;
  law: string;
  risk: string;
  fish: { name: string; scientificName: string }[];
  speciesSource: ResearchSource;
  contextSource: ResearchSource;
  evidenceLevel: string;
};

const reviews: WaterReview[] = [
  {
    slug: "ulusal-istanbul-alibey-baraj-golu",
    distanceKmFromIstanbulCenter: 15.05,
    identityAndSpecies: "İstanbul İl Tarım ve Orman Müdürlüğü, 27 Ağustos 2026'da Alibey Baraj Gölü'ne 300 bin sazan yavrusu bırakıldığını kaydediyor. Salım, yetişkin stok yoğunluğunu veya av verimini göstermez.",
    access: "İçme suyu havzasında kamuya açık ve avlanmaya uygun belirli bir kıyı doğrulanmadı.",
    law: "Ulusal 6/2 Tebliği ve 2026/26 değişikliği geçerlidir. Alibey havza metni taslak olarak yayımlanmıştır. Kıyıya özgü yürürlükteki havza ve işletme şartları ayrıca doğrulanmalıdır.",
    risk: "Baraj işletme hatlarına, su alma yapısına ve kapalı kıyılara yaklaşmayın.",
    fish: [{ name: "Sazan", scientificName: "Cyprinus carpio" }],
    speciesSource: {
      label: "İstanbul İl Tarım — 27 Ağustos 2026 balıklandırma kaydı",
      url: "https://istanbul.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=3144",
      note: "Alibey Baraj Gölü'ne 300 bin sazan yavrusu bırakıldığını bildirir.",
    },
    contextSource: {
      label: "İSKİ — Taslak Alibey Baraj Gölü Havzası Koruma Planı",
      url: "https://www.iski.gov.tr/web/assets/SayfalarDocs/Alibey%20Baraj%C4%B1%20Havza%20Koruma%20Plan%C4%B1%20Tasla%C4%9F%C4%B1.pdf",
      note: "Taslak, su varlığını ve havza bağlamını açıklar. Kıyı erişimini veya yürürlükteki av iznini kanıtlamaz.",
    },
    evidenceLevel: "Suya özgü resmî sazan yavrusu salımı",
  },
  {
    slug: "ankara-500km-istanbul-kucukcekmece-golu",
    distanceKmFromIstanbulCenter: 19.53,
    identityAndSpecies: "Saç ve çalışma arkadaşlarının 2026 makalesinde Küçükçekmece Lagünü'nde yapılan 2023–2024 örneklemesinde gümüş balığı ve has kefal kaydedildi. Lagün Marmara'ya bağlı, acı su karakterinde bir su kütlesidir.",
    access: "Lagün kıyısında olta için hukuka uygun, kamusal ve güvenli bir kıyı noktası doğrulanmadı.",
    law: "6/2 Tebliği ve 2026/26 değişikliği ulusal çerçeveyi belirler. Bu lagünde geçerli yerel av koşulları ve kıyı erişimi ayrıca teyit edilmelidir.",
    risk: "2024 örneklemesini kullanan çalışma lagünde mikroplastik saptadı. Bu çalışma güncel suya girme veya balık tüketme güvenliğini değerlendirmiyor.",
    fish: [
      { name: "Gümüş balığı", scientificName: "Atherina pontica" },
      { name: "Has kefal", scientificName: "Mugil cephalus" },
    ],
    speciesSource: {
      label: "Saç ve ark. (2026) — Küçükçekmece Lagünü balık topluluğu",
      url: "https://avesis.istanbul.edu.tr/publication/details/ae8313c8-8d85-481b-bb37-535472cbc912/current-fish-community-structure-of-an-anthropogenically-pressured-system-the-case-of-the-kucukcekmece-lagoon-nw-turkiye",
      note: "Hakemli makalenin üniversite kaydı. İki türü lagün örneklemesinde bildirir. DOI: 10.12681/mms.42905.",
    },
    contextSource: {
      label: "Saç ve ark. (2026) — İstanbul'da iki su ortamının mikroplastik örneklemesi",
      url: "https://link.springer.com/article/10.1007/s00027-026-01295-2",
      note: "Lagünün Marmara bağlantısını ve 2024 mikroplastik örneklemesini belgeler. Sağlık veya av izni değerlendirmesi değildir.",
    },
    evidenceLevel: "Lagüne özgü hakemli balık örneklemesi",
  },
  {
    slug: "ulusal-istanbul-buyukcekmece-golu",
    distanceKmFromIstanbulCenter: 35.81,
    identityAndSpecies: "Saç ve çalışma arkadaşları 2024'te Büyükçekmece içme suyu rezervuarında Atherina pontica türü gümüş balığını örnekledi. Rezervuar, Büyükçekmece'nin Marmara kıyısındaki koyundan ayrı bir su kütlesidir.",
    access: "Koruma planı kapsamındaki kıyılarda olta için kamuya açık, güvenli ve hukuka uygun giriş noktası doğrulanmadı.",
    law: "İSKİ'de yayımlanan Büyükçekmece Baraj Gölü Havza Koruma Planı madde 47, su alma yapısına 300 metreden yakın mesafede olta balıkçılığına izin vermez ve göl içi su ürünleri avcılığı ile ilgili ek hükümler içerir. 300 metre sınırının dışında bulunmak tek başına av izni sağlamaz.",
    risk: "İçme suyu tesislerine ve kapalı koruma alanlarına girmeyin. Tür örneklemesi tüketim güvenliği veya av izni göstermez.",
    fish: [{ name: "Gümüş balığı", scientificName: "Atherina pontica" }],
    speciesSource: {
      label: "Saç ve ark. (2026) — Büyükçekmece rezervuarında örneklenen gümüş balığı",
      url: "https://link.springer.com/article/10.1007/s00027-026-01295-2",
      note: "2024 mevsimsel örneklemesinde rezervuarda Atherina pontica türü kaydedildi.",
    },
    contextSource: {
      label: "İSKİ — Büyükçekmece Baraj Gölü Havza Koruma Planı özel hükümleri",
      url: "https://cdn.iski.istanbul/uploads/Bueyuek_Cekmece_Baraj_Goelue_Havza_Koruma_Plani_Oezel_Huekuemler_03b22746fa.pdf",
      note: "Madde 47, göl aynası koruma alanındaki olta ve su ürünleri avcılığı hükümlerini verir.",
    },
    evidenceLevel: "Rezervuara özgü hakemli balık örneklemesi",
  },
];

export const promotionDecisions20261126 = reviews.map(review => ({
  slug: review.slug,
  baselineGrade: "D",
  finalGrade: "C",
  distanceKmFromIstanbulCenter: review.distanceKmFromIstanbulCenter,
  identityAndSpecies: review.identityAndSpecies,
  access: review.access,
  law: review.law,
  sources: [review.speciesSource.url, review.contextSource.url, regulation.url, amendment.url],
}));

export function applyDailyAvlakQuality20261126(routes: Map<string, EnrichedMera>): void {
  for (const review of reviews) {
    const old = routes.get(review.slug);
    if (old?.confidence !== "D" || (old.qualityGrade && old.qualityGrade !== "D")) {
      throw new Error(`27 Kasım D başlangıç kaydı uyuşmuyor: ${review.slug}`);
    }
    const additions = [review.speciesSource, review.contextSource, regulation, amendment];
    const sources = [...new Map([...(old.sources ?? []), ...additions].map(source => [source.url, source])).values()];
    routes.set(review.slug, {
      ...old,
      confidence: "C",
      qualityGrade: "C",
      indexing: "hold",
      updatedAt: date,
      researchedAt: date,
      fish: review.fish.map(fish => fish.name),
      methods: [],
      baits: [],
      summary: `${review.identityAndSpecies} ${review.access}`,
      verification: `${review.evidenceLevel}. ${review.access}`,
      navigationNote: "Harita pini su kütlesinin genel konumudur. Kıyıya giriş veya olta noktası önerilmez.",
      navigationVerified: false,
      transport: "Su kütlesi haritada genel konumuyla gösterilir. Olta için ulaşım ve kıyıya giriş tarifi verilmez.",
      shoreProfile: `${review.access} Haritadaki genel su pini, kıyıdan erişim veya avlanma noktası olarak kullanılmamalıdır.`,
      longIntro: [review.identityAndSpecies, review.law],
      cautions: [review.risk, review.access, "Güncel resmî duyurulara ve sahadaki kısıtlara uyun."],
      planningNotes: [review.law, review.access],
      seasonalNotes: ["Örnekleme veya yavru salımı güncel bolluk ya da av dönemi hakkında güvence vermez."],
      researchStatus: "Suya özgü tür kanıtı doğrulandı, av erişimi teyit bekliyor",
      researchSummary: `${review.identityAndSpecies} ${review.access} ${review.law}`,
      sources,
      fishEvidence: review.fish.map(fish => ({
        ...fish,
        evidenceLevel: review.evidenceLevel,
        sourceLabel: review.speciesSource.label,
        sourceUrl: review.speciesSource.url,
        note: review.speciesSource.note,
      })),
      accessEvidence: [{
        label: review.contextSource.label,
        value: "Su kütlesi ve kısıt bağlamı",
        sourceUrl: review.contextSource.url,
        note: review.access,
      }],
      qualityAssessment: {
        model: "expanded-v2",
        reviewedAt: date,
        identityVerified: true,
        speciesRouteSpecific: true,
        currentLawResolved: false,
        safePublicAccessVerified: false,
        independentStrongFamilies: [review.speciesSource.url],
        localContentVerified: false,
        fieldOrEquivalentVerified: false,
        unresolvedRisks: [review.access, review.law],
      },
      confidenceProfile: {
        model: "evidence-v1",
        overall: "C",
        reviewedAt: date,
        identity: { level: "strong", label: "Suya özgü kaynak", note: review.identityAndSpecies },
        species: { level: "strong", label: review.evidenceLevel, note: review.speciesSource.note },
        legal: { level: "partial", label: "Ulusal kurallar ve yerel inceleme", note: review.law },
        access: { level: "unverified", label: "Olta erişimi teyitsiz", note: review.access },
        field: { level: "unverified", label: "Saha teyidi yok", note: review.risk },
      },
    });
  }
}
