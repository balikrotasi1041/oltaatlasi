import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-16";
const guide: ResearchSource = {
  label: "İBB Tarım ve Su Ürünleri – Yeni Başlayanlar İçin Olta Balıkçılığı (2017)",
  url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
  note: "İstanbul'daki olta yerlerini ve rota bazındaki türleri listeler; tarihsel kaynak bugünkü yakalama veya mikro kıyı izni garantisi değildir."
};
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör avcılığı, boy/adet kuralları, Boğaz güvenliği ve 1 Nisan–15 Kasım şamandıralı yüzme alanı yasağı av gününde uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 ana metni ve yürürlükteki değişikliklerle birlikte okunur; Boğaz trafik ayırım şeridinde av yapılmaz."
};

const specs = [
  {
    slug: "istanbul-beyoglu-findikli-parki-acik-kiyi",
    name: "Fındıklı Parkı Açık Kıyısı",
    district: "Beyoğlu",
    zone: "Fındıklı Parkı'nın kamuya açık deniz cephesi; Kabataş iskele ve inşaat/işletme alanları hariç",
    lat: 41.0318152,
    lng: 28.9907573,
    fish: "İstavrit",
    fishNote: "İBB 2017 rehberi Fındıklı Parkı için istavriti yer adıyla listeler; tarihsel kayıt günlük av garantisi değildir.",
    access: "İBB'nin 2025 park düzenleme duyurusu ve Kabataş Transfer Merkezi duyurusu kamusal park/yaya alanını tanımlar; denize erişen belirli atış cebi ayrıca levha ve güvenlik kontrolü ister.",
    accessSource: {
      label: "İBB – Kabataş Fındıklı Parkı çevre düzenlemesi",
      url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/kabatas-findikli-parki-cevre-duzenlemesi",
      note: "Parkın 2025 düzenlemesini ve yeniden kamusal kullanıma açılma planını kaydeder; bugün her kıyı parçasının açık olduğunu tek başına kanıtlamaz."
    },
    additional: [
      {
        label: "İBB – Kabataş Transfer Merkezi açılışı (2025)",
        url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/kabatas-transfer-merkezi-aciliyor",
        note: "Fındıklı Parkı ile bağlantılı yeni yaya alanlarının halka açıldığını bildirir; iskele veya şantiye içinde olta izni vermez."
      },
      {
        label: "OpenStreetMap – Fındıklı Parkı sınırı",
        url: "https://www.openstreetmap.org/way/24807026",
        note: "41.0318152, 28.9907573 park merkezidir; mikro atış veya park girişi pini değildir."
      }
    ],
    caution: "Kabataş vapur iskeleleri, transfer merkezi işletmesi, geçici çalışma alanları, şamandıralı yüzme alanı ve yaya yoğunluğu dışında güvenli atış açıklığı yoksa olta atma."
  },
  {
    slug: "istanbul-uskudar-pasalimani-parki-acik-kiyi",
    name: "Paşalimanı Parkı Açık Kıyısı",
    district: "Üsküdar",
    zone: "Paşalimanı Parkı'nın kamuya açık Boğaz cephesi; Kıyı Emniyeti iskelesi ve tekne alanı hariç",
    lat: 41.0322562,
    lng: 29.0228020,
    fish: "İstavrit",
    fishNote: "İBB 2017 rehberi Paşalimanı'nı istavrit, mezgit ve sardalya için yer adıyla listeler; park içindeki mikro cep için güncel av garantisi değildir.",
    access: "İBB 2017 rehberi Paşalimanı Parkı'nı olta yeri olarak adlandırır; 2026 tarihli yerel yürüyüş anlatımı ve harita parkın genel kamusal kullanımını destekler. Kıyı Emniyeti iskelesi işletme alanı dışlanır.",
    accessSource: {
      label: "İBB Tarım ve Su Ürünleri – Paşalimanı Parkı",
      url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
      note: "Rehber Paşalimanı Parkı'nı ayrı olta yeri olarak adlandırır; Kıyı Emniyeti iskelesinin Üsküdar tarafı tarihsel tarif olup güncel işletme izni değildir."
    },
    additional: [
      {
        label: "İBB – Üsküdar kıyı parkları envanteri",
        url: "https://depremzemin.ibb.istanbul/uploads/prefix-uskudar-tsunami-666af3ab7ecb7.pdf",
        note: "Paşalimanı Parkı'nı Üsküdar kıyı parkları arasında sayar; kıyı güvenliği ve işletme sınırını ayrıca değerlendirmek gerekir."
      },
      {
        label: "OpenStreetMap – Paşalimanı Parkı sınırı",
        url: "https://www.openstreetmap.org/way/53597263",
        note: "41.0322562, 29.0228020 park merkezidir; doğrulanmış olta cebi değildir."
      }
    ],
    caution: "Kıyı Emniyeti iskelesi, tekne manevrası, özel işletme ve yaya geçişine misina sarkıtma; şamandıralı yüzme alanı ve Boğaz trafik ayırım şeridi dışında güvenli kıyı yoksa olta atma."
  }
] as const;

function makeRoute(spec: typeof specs[number]): EnrichedMera {
  const sources: ResearchSource[] = [guide, spec.accessSource, ...spec.additional, law, amendment];
  return {
    slug: spec.slug, name: spec.name, district: spec.district, province: "İstanbul",
    zone: spec.zone, waterType: "Deniz", region: "Marmara",
    summary: `${spec.name}, İBB'nin yer adıyla tür/olta kaydı ve kamusal park bağlamıyla doğrulanmış genel kıyı planlama rotasıdır.`,
    fish: [spec.fish], methods: ["Kıyıdan mevzuata uygun olta"], baits: ["Mevzuata uygun yapay veya doğal yem"],
    camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: [],
    cautions: [spec.caution, "İstavrit boy/adet kuralları, yerel levha ve güncel Boğaz güvenlik kararlarını av günü kontrol et."],
    lat: spec.lat, lng: spec.lng, locationPrecision: "Genel bölge",
    verification: `16 Ekim 2026: İBB rota/tür rehberi, kamusal park kaynakları, 6/2 ana deniz tebliği ve 2026/26 değişikliği karşılaştırıldı. ${spec.fishNote} ${spec.access} Pin park merkezidir, izinli mikro atış noktası değildir.`,
    updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
    qualityAssessment: {
      model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true,
      currentLawResolved: true, safePublicAccessVerified: true,
      independentStrongFamilies: ["İBB rota-özel olta ve tür rehberi"],
      localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
    },
    image: `/images/meralar/ulusal/${spec.slug}.svg`,
    socialImage: `/images/meralar/ulusal/${spec.slug}.svg`,
    navigationNote: "Pin parkın genel merkezidir; açık giriş, kıyı cebine izin veya park yeri teyidi değildir.",
    shoreProfile: `${spec.name} için yalnız kamusal kuru kıyı genel bağlamı verilir. ${spec.caution}`,
    transport: "Parkın genel konumu kaynaklarda doğrulandı; son yaya geçişi, bariyer ve işletme sınırı av günü kontrol edilir.",
    crowdNote: "Yaya, yolcu ve tekne kullanımı için boş ve güvenli atış koridoru yoksa olta atılmaz.",
    longIntro: [`${spec.name} İBB'nin rota özelindeki olta rehberinde yer alır. ${spec.fishNote}`, spec.access],
    planningNotes: ["6/2 ana tebliği ile 2026/26 değişikliğini ve ilgili il/ilçe kararlarını kontrol et.", spec.caution],
    seasonalNotes: ["Tür kaydı mevsimsel ve tarihsel olabilir; hava, akıntı, kıyı düzeni ve yerel yasakları yeniden kontrol et."],
    sources,
    researchStatus: "16 Ekim 2026 yeni program: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
    researchSummary: `${spec.fishNote} ${spec.access}`,
    researchedAt: date,
    fishEvidence: [{name: spec.fish, scientificName: null, evidenceLevel: "Rota özelinde İBB tarihsel tür kaydı", sourceLabel: guide.label, sourceUrl: guide.url, note: spec.fishNote}],
    accessEvidence: [{label: spec.accessSource.label, value: spec.access, sourceUrl: spec.accessSource.url, note: spec.accessSource.note}],
    accommodationOptions: [], navigationVerified: false,
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: {level: "strong", label: "İBB rota kimliği", note: "İBB rehberi rota adını ayrı verir."},
      species: {level: "strong", label: "Rota özelinde İBB tür kaydı", note: spec.fishNote},
      legal: {level: "strong", label: "6/2 deniz kuralları", note: "Ana metin ve 2026/26 değişikliği, yerel levha ve işletme sınırlarıyla birlikte uygulanır."},
      access: {level: "partial", label: "Genel kamusal park kıyısı", note: spec.access},
      field: {level: "unverified", label: "Mikro kıyı saha teyidi yok", note: "Park merkezi pini olta atış cebini göstermez."}
    }
  };
}

export const growthNewRoutes20261016 = specs.map(makeRoute);

export function applyGrowthExistingRelease20261016(routes: Map<string, EnrichedMera>): void {
  const slug = "kocaeli-babali-acik-karadeniz-kiyisi";
  const previous = routes.get(slug);
  if (!previous || previous.indexing !== "hold" || previous.qualityGrade !== "C+" || previous.confidence !== "C") {
    throw new Error(`Eski kayıt salımı başlangıç C+/HOLD olmalı: ${slug}`);
  }
  routes.set(slug, {
    ...previous, indexing: "index", updatedAt: date, researchedAt: date,
    researchStatus: "16 Ekim 2026 yeni program: mevcut C+/HOLD kayıt güncel kıyı kaynaklarıyla yeniden incelenip indekslenebilir açıldı",
    verification: `${previous.verification} 16 Ekim 2026 yeniden salım incelemesi: Valilik/Kaymakamlık kaynaklarında genel Babalı kıyısı için tümden olta yasağı bulunmadı; işaretli yüzme alanı, tarihî sit, kaya/mağara ve su sporları kesimi dışlanır. Açık kuru kamusal kumsalda güvenli/izinli bir bölüm yoksa olta atılmaz.`,
    qualityAssessment: previous.qualityAssessment ? {...previous.qualityAssessment, reviewedAt: date} : previous.qualityAssessment
  });
}
