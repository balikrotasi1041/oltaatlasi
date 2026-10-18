import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-18";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Deniz amatör avcılığında yöntem, tür, boy, miktar ve yer sınırları için ana resmî metin; av günü yerel kararlarla birlikte okunur."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 16 Eylül 2026 tarihli 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "Yürürlükteki 6/2 değişikliği; ana tebliğ ve güncel yerel/işletme sınırlarıyla birlikte uygulanır."
};
const portLaw: ResearchSource = {
  label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği, madde 21",
  url: "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf",
  note: "Kıyı tesislerinin yaklaşım kanalı, mendirek ağzı, yanaşma ve bağlama yeri ile demirleme sahasında her türlü su ürünleri avcılığını yasaklar."
};
const osmAttribution = "OpenStreetMap contributors, ODbL 1.0; pin genel planlama noktasıdır, doğrulanmış olta cebi değildir.";

type NewRouteSpec = {
  slug: string;
  name: string;
  district: string;
  zone: string;
  lat: number;
  lng: number;
  fishSource: ResearchSource;
  fishNote: string;
  accessSource: ResearchSource;
  accessNote: string;
  locationSource: ResearchSource;
  additionalSources: ResearchSource[];
  scope: string;
  caution: string;
  localRule: string;
};

const specs: NewRouteSpec[] = [
  {
    slug: "istanbul-uskudar-vanikoy-parki-acik-kiyi",
    name: "Vaniköy Parkı Açık Kıyısı",
    district: "Üsküdar",
    zone: "Vaniköy Parkı'nın yaklaşık 201 metrelik kamusal Boğaz cephesi; Kandilli iskelesi ve komşu özel kıyılar hariç",
    lat: 41.0682874,
    lng: 29.0572697,
    fishSource: {
      label: "İBB Tarım ve Su Ürünleri – Yeni Başlayanlar İçin Olta Balıkçılığı (2017)",
      url: "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf",
      note: "Rehberin Vaniköy satırı istavriti yer adıyla listeler; aynı rehber Kandilli'yi ayrı bir yer olarak kaydeder."
    },
    fishNote: "İBB'nin 2017 olta rehberi Vaniköy için istavriti, mezgiti ve sardalyayı yer adıyla listeler. Burada temkinli olarak yalnız istavrit gösterilir; tarihsel kayıt güncel av garantisi değildir.",
    accessSource: {
      label: "ÇŞİDB – İstanbul Deniz Çöpleri Eylem Planı 2025–2029",
      url: "https://webdosya.csb.gov.tr/db/cygm/icerikler/istanbul-dcep-2025-2029-20250324133942.pdf",
      note: "Vaniköy Parkı'nı 201 metrelik kıyı kenarı ve İBB'nin günlük temizlediği bölüm olarak; Kandilli İDO kıyısını ayrı kayıt olarak gösterir."
    },
    accessNote: "Resmî kıyı bakım planı Vaniköy Parkı'nın Boğaz cephesini ayrı bir kamu parkı kıyısı olarak kaydeder; İBB park listesi de parkı Üsküdar'da gösterir. Belirli bir mikro atış cebi veya süresiz olta izni doğrulanmış değildir.",
    locationSource: {
      label: "OpenStreetMap – Vaniköy Parkı",
      url: "https://www.openstreetmap.org/node/10554253492",
      note: `Park merkezindeki 41.0682874, 29.0572697 genel konumu. ${osmAttribution}`
    },
    additionalSources: [{
      label: "İBB Yeşil İstanbul – Piknik Alanları",
      url: "https://yesil.istanbul/storage/public/2023/07/12/64aeac456456f-.pdf",
      note: "Üsküdar'daki Vaniköy Parkı'nı belediyenin kamusal park envanterinde sayar."
    }],
    scope: "Rota, parkın açık ve kamusal kuru kıyısıyla sınırlıdır. Yakındaki Kandilli İskelesi, Selvi Burnu, özel yalı cephesi ve tekne yanaşma alanları bu rotaya dahil değildir; mevcut Kandilli Sahili sayfası iskele çevresini anlatır.",
    caution: "Boğaz akıntısı ve dalga sıçraması, dar yaya kıyısı ile yakın deniz trafiği birlikte değerlendirilir. Güvenli arka atış alanı veya açık kamusal kıyı bulunmuyorsa olta açılmaz.",
    localRule: "Boğaz trafik ayırım şeridi, aktif iskele/yanaşma alanı ve işaretli yüzme alanı avlanma yeri değildir; yerel tabela, görevli talimatı ve güncel 6/2 hükümleri önceliklidir."
  },
  {
    slug: "istanbul-kartal-dragos-sahili-acik-kiyi",
    name: "Dragos Sahili Açık Kıyısı",
    district: "Kartal",
    zone: "Orhantepe Dragos genel kamusal yürüyüş sahili; Dragos Su Sporları Merkezi iskelesi ve faaliyet suyu hariç",
    lat: 40.9040760,
    lng: 29.1411500,
    fishSource: {
      label: "İBB – İstanbul'da Balık Tutulacak Yerler (2025)",
      url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle",
      note: "Dragos sahilini ayrı olta yeri olarak adlandırır; istavrit, mezgit, kefal, isparoz ve eşkina bildirir."
    },
    fishNote: "İBB'nin 29 Ocak 2025 tarihli Dragos sahili anlatımı istavriti rota adıyla listeler. Güncel kıyıdan günlük av veya belirli mikro cebin verimi garanti değildir.",
    accessSource: {
      label: "İBB Spor İstanbul – Açık Alan Egzersizleri",
      url: "https://sportesisleri.ibb.istanbul/acik-alan-egzersizleri",
      note: "Dragos Sahili'ni Kartal Su Sporları Merkezi yanında kamusal açık alan etkinlik noktası olarak listeler; spor iskelesi av alanı değildir."
    },
    accessNote: "İBB'nin açık alan etkinliği ve Kartal Belediyesi'nin Dragos sahil kamusal etkinlikleri genel yaya erişimini doğrular. Su Sporları Merkezi ve iskelesi aktif işletme alanıdır; onlardan ayrılmış kuru kıyı seçilir.",
    locationSource: {
      label: "OpenStreetMap – Dragos Sahili",
      url: "https://www.openstreetmap.org/node/4390319091",
      note: `Orhantepe Dragos sahilindeki 40.9040760, 29.1411500 genel bakı noktası. ${osmAttribution}`
    },
    additionalSources: [
      {
        label: "Kartal Belediyesi – Dragos sahil kamusal etkinliği",
        url: "https://www.kartal.bel.tr/Belediyemiz/Haberler/19004",
        note: "Kartal Meydanı–Dragos Sahil Amfi Tiyatro arasında halka açık bisiklet etkinliğini kaydeder."
      },
      {
        label: "Kartal Belediyesi – Dragos Su Sporları Merkezi",
        url: "https://www.kartal.bel.tr/Hizmetlerimiz/SporHizmetleri",
        note: "Dragos'taki kürek/kano faaliyetlerini tanımlar; faaliyet suyu ve iskele bu olta rotasının dışındadır."
      }
    ],
    scope: "Dragos Sahili, Kartal merkez sahili sayfasının yaklaşık dört kilometre batısındaki Orhantepe kıyısıdır. Rota yalnız açık kamusal kuru sahili kapsar; su sporları iskelesi, kürek/kano yaklaşımı, bağlı tekneler ve etkinlik şeridi dışarıdadır.",
    caution: "Kano ve kürek faaliyetleri, suya iniş rampası, yaya ve bisiklet koridoru nedeniyle güvenli atış boşluğu hızla değişir. Sporcu veya tekne yaklaşımı varsa olta atılmaz.",
    localRule: "Dragos Su Sporları Merkezi işletme/tekne alanı ve işaretli yüzme sahası avlanma yeri değildir; güncel 6/2, kıyı tabelaları ve liman/görevli talimatları uygulanır."
  }
];

function makeRoute(spec: NewRouteSpec): EnrichedMera {
  const sources: ResearchSource[] = [spec.fishSource, spec.accessSource, spec.locationSource, ...spec.additionalSources, law, amendment, portLaw];
  return {
    slug: spec.slug, name: spec.name, district: spec.district, province: "İstanbul",
    zone: spec.zone, waterType: "Deniz", region: "Marmara",
    summary: `${spec.name}, İBB'nin yer adıyla olta/tür kaydı ve güncel kamusal kıyı bağlamıyla doğrulanmış planlama rotasıdır.`,
    fish: ["İstavrit"], methods: ["Kıyıdan mevzuata uygun olta"], baits: ["Mevzuata uygun yapay veya doğal yem"],
    camping: "Uygun değil", vehicleAccess: "Kontrol edilmeli", amenities: [],
    cautions: [spec.caution, spec.localRule],
    lat: spec.lat, lng: spec.lng, locationPrecision: "Genel bölge",
    verification: `18 Ekim 2026: İBB rota özelindeki tür/olta kaydı, kamusal kıyı kaynakları, 6/2 ana tebliği ve 2026/26 değişikliği karşılaştırıldı. ${spec.fishNote} ${spec.accessNote} Pin genel sahil planlama noktasıdır, izinli mikro atış yeri değildir.`,
    updatedAt: date, publishedAt: date, confidence: "C", qualityGrade: "C+", indexing: "index",
    qualityAssessment: {
      model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true,
      currentLawResolved: true, safePublicAccessVerified: true,
      independentStrongFamilies: ["İBB rota özelinde olta ve tür kaydı"],
      localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
    },
    image: `/images/meralar/ulusal/${spec.slug}.svg`,
    socialImage: `/images/meralar/ulusal/${spec.slug}.svg`,
    navigationNote: "Pin genel kıyı planlama konumudur; güncel açık giriş, izinli olta cebi veya park yeri teyidi değildir.",
    shoreProfile: `${spec.scope} ${spec.caution}`,
    transport: "İBB ve belediye kaynakları genel sahil kullanımını doğrular; son yaya yaklaşımı, bariyer, etkinlik ve işletme sınırı av günü kontrol edilir.",
    crowdNote: "Yaya, bisiklet, yolcu veya tekne kullanımı için boş ve güvenli atış koridoru yoksa olta atılmaz.",
    longIntro: [`${spec.name} İBB'nin rota adını verdiği olta kaynağında yer alır. ${spec.fishNote}`, `${spec.accessNote} ${spec.scope}`],
    planningNotes: ["6/2 ana tebliğini, 2026/26 değişikliğini ve ilgili yerel kararları kontrol et.", spec.localRule, spec.caution],
    seasonalNotes: ["Tür kaydı mevsimsel olabilir; hava, akıntı, etkinlik, kıyı düzeni ve yerel kısıtları av günü yeniden kontrol et."],
    sources,
    researchStatus: "18 Ekim 2026 yeni program: C+ çekirdek kanıt incelemesi; ilk yayında index,follow",
    researchSummary: `${spec.fishNote} ${spec.accessNote}`,
    researchedAt: date,
    fishEvidence: [{name: "İstavrit", scientificName: null, evidenceLevel: "Rota özelinde İBB kurumsal tür kaydı", sourceLabel: spec.fishSource.label, sourceUrl: spec.fishSource.url, note: spec.fishNote}],
    accessEvidence: [{label: spec.accessSource.label, value: spec.accessNote, sourceUrl: spec.accessSource.url, note: spec.accessSource.note}],
    accommodationOptions: [], navigationVerified: false,
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: {level: "strong", label: "İBB rota kimliği", note: "İBB kaynağı rota adını ayrı verir."},
      species: {level: "strong", label: "Rota özelinde İBB tür kaydı", note: spec.fishNote},
      legal: {level: "strong", label: "6/2 deniz kuralları", note: spec.localRule},
      access: {level: "partial", label: "Genel kamusal kıyı", note: spec.accessNote},
      field: {level: "unverified", label: "Mikro kıyı saha teyidi yok", note: "Pin, av günü izinli ve güvenli mikro atış cebini göstermez."}
    }
  };
}

export const growthNewRoutes20261018 = specs.map(makeRoute);
