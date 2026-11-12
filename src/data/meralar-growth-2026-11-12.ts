import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-12";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "Tür, dönem, alıkoyma, av aracı ve yer hükümleri."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 ile birlikte uygulanan değişiklik."
};

type Entry = {
  slug: string;
  name: string;
  province: string;
  district: string;
  zone: string;
  waterType: EnrichedMera["waterType"];
  region: string;
  lat: number;
  lng: number;
  species: string;
  scientificName: string;
  fishSource: ResearchSource;
  accessSource: ResearchSource;
  otherSources: ResearchSource[];
  rule: string;
  safety: string;
  transport: string;
  methods: string[];
  baits: string[];
};

const entries: Entry[] = [
  {
    slug: "bursa-inegol-yenicekoy-goleti",
    name: "Yeniceköy Göleti",
    province: "Bursa",
    district: "İnegöl",
    zone: "DOSTUM tarafından olta için ayrılan gölet kıyısı",
    waterType: "Gölet",
    region: "Marmara",
    lat: 40.1018948,
    lng: 29.4190493,
    species: "Sazan",
    scientificName: "Cyprinus carpio",
    fishSource: {
      label: "Genç Gazete – Yeniceköy Göleti sazan salımı",
      url: "https://www.gencgazete.net/290-kilogram-balik-salindi",
      note: "2021 tarihli yerel kayıt, belediye ve spor kulübünün Yeniceköy Göleti'ne 118 aynalı sazan bıraktığını bildiriyor."
    },
    accessSource: {
      label: "DOSTUM – Yeniceköy olta alanı",
      url: "https://www.dostum.org.tr/tr/sporlar/balikcilik",
      note: "Merkezin işletmecisi yanındaki yapay gölde amatör olta kullanımını tanımlıyor."
    },
    otherSources: [
      { label: "İnegöl Belediyesi – DOSTUM Yeniceköy", url: "https://www.inegol.bel.tr/inegol/ilcemizi-taniyalim", note: "Merkezin balıkçılık alanını ve ziyaretçi kullanımını kaydeder." },
      { label: "Bursa Büyükşehir Belediyesi – DOSTUM konumu", url: "https://rota.bursa.com.tr/mekanlar/inegol-doga-sporlari-turizm-merkezi-dostum-766", note: "Harita pini merkezin genel ziyaretçi yaklaşımıdır." },
      { label: "Bilecik Haber – Yeniceköy sazan avı kaydı", url: "https://www.bilecikhaber.com.tr/devasa-sazanlar-hayrete-dusurdu-364720h.htm", note: "2024'te aynı gölette belgelenen pullu ve aynalı sazan avı." },
      { label: "Bursa Büyükşehir Belediyesi – Yeniceköy kıyı düzenlemesi", url: "https://www.bursa.bel.tr/haber/yenicekoyde-buyuk-donusum-29022", note: "Piknik alanıyla su arasındaki çiti ve tesis sınırını kaydeder." }
    ],
    rule: "Sazan için Bursa'da 15 Mart–15 Haziran kapalı dönemi geçerlidir. Olta için yalnızca tesisin ayırdığı açık kıyıyı kullanın.",
    safety: "Kıyı çitini aşmayın ve kanoların kullandığı suya doğru atış yapmayın. Kaygan, otla kaplı kıyıya inmeyin.",
    transport: "İnegöl'den Yeniceköy Mahallesi'ndeki DOSTUM ziyaretçi girişine gidilir. Olta kesimini tesisin levhasından öğrenin.",
    methods: ["Kıyıdan dip oltası", "Şamandıralı olta"],
    baits: ["Mısır", "Hamur"]
  },
  {
    slug: "balikesir-burhaniye-pelitkoy-kiyisi",
    name: "Pelitköy Açık Kıyısı",
    province: "Balıkesir",
    district: "Burhaniye",
    zone: "Bağlarburnu ve Gadana çevresinde işaretli yüzme kesimleri dışındaki kamusal kıyı",
    waterType: "Deniz",
    region: "Ege",
    lat: 39.4748079616,
    lng: 26.8696869061,
    species: "Zargana",
    scientificName: "Belone belone",
    fishSource: {
      label: "Samsun Gazetesi – Pelitköy zargana avı saha haberi",
      url: "https://www.samsungazetesi.com/burhaniyede-balikcilar-zargana-sezonunu-acti",
      note: "Saha haberi Pelitköy kıyısında zargana avlayan balıkçının doğrudan gözlemini kaydediyor."
    },
    accessSource: {
      label: "Burhaniye Belediyesi – Pelitköy sahil düzenlemesi",
      url: "https://burhaniye.bel.tr/Guncel/Haberler_Detay.aspx?ID=6027",
      note: "Belediye Bağlarburnu ve Gadana'daki kamusal kıyı bandını ve balık tutma kullanımını tanımlıyor."
    },
    otherSources: [
      { label: "Burhaniye Belediyesi – Bağlarburnu genel erişimi", url: "https://www.burhaniye.bel.tr/Burhaniye/Kesfet_Detay.aspx?ID=16", note: "Kıyı ulaşımı ve halk plajının harita referansı." },
      { label: "Balıkesir Üniversitesi – Burhaniye sportif olta araştırması", url: "https://dergipark.org.tr/tr/pub/baunsobed/article/580638", note: "Burhaniye sahillerindeki anketin tür tablosu zarganayı içerir." },
      { label: "TÜRÇEV – Bağlarburnu halk plajı", url: "https://www.mavibayrak.org.tr/turkiye/plaj.aspx?plaj_refno=1796", note: "Plaj kaydı işaretli yüzme alanını ayrı değerlendirmek için kullanılır." }
    ],
    rule: "1 Nisan–15 Kasım arasında şamandıralarla işaretli yüzme alanında amatör av yasaktır. Güncel levha ve özel tesis sınırlarına uyun.",
    safety: "Lodos, dalga ve kaygan taşlar kuru kıyıda güvenli duruşu engelliyorsa avlanmayın. Yüzenlerden ve kıyı yürüyüşünden uzak durun.",
    transport: "Burhaniye'den Pelitköy Sahili ve Bağlarburnu yönüne ulaşılır. Harita pini kamusal sahile yaklaşımı gösterir.",
    methods: ["Kıyı oltası", "Şamandıralı yüzey takımı"],
    baits: ["Türe uygun doğal yem"]
  }
];

export const growthRoutes20261112: EnrichedMera[] = entries.map(entry => {
  const { species, scientificName, fishSource, accessSource, otherSources, rule, safety, ...route } = entry;
  const image = `/images/meralar/ulusal/${route.slug}.svg`;
  return {
    ...route,
    summary: `${fishSource.note} ${accessSource.note}`,
    fish: [species],
    camping: "Kontrol edilmeli",
    vehicleAccess: "Kontrol edilmeli",
    amenities: [],
    cautions: [rule, safety, "Avdan önce yerel levhaları ve türe ilişkin güncel boy ve miktar sınırlarını kontrol edin."],
    locationPrecision: "Genel bölge",
    verification: `12 Kasım 2026. Su kimliği, türe ilişkin saha kaydı, resmî kıyı kullanımı ve 6/2 hükümleri incelendi. ${rule}`,
    updatedAt: date,
    publishedAt: date,
    researchedAt: date,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "index",
    image,
    socialImage: image,
    navigationNote: "Harita pini genel kıyı yaklaşımıdır. İzinli atış kesimini yerel levhalar üzerinden kontrol edin.",
    shoreProfile: accessSource.note,
    crowdNote: "Yakınınızda ziyaretçi varsa atış için güvenli mesafe oluşana kadar bekleyin.",
    longIntro: [fishSource.note, accessSource.note, rule],
    planningNotes: [safety, rule],
    seasonalNotes: [rule],
    sources: [fishSource, accessSource, ...otherSources, law, amendment],
    researchStatus: "Kaynaklı araştırma",
    researchSummary: `${fishSource.note} ${accessSource.note} ${rule}`,
    fishEvidence: [{
      name: species, scientificName, evidenceLevel: "Suya özgü saha kaydı",
      sourceLabel: fishSource.label, sourceUrl: fishSource.url,
      note: "Belgelenen av veya salım güncel av verimi ölçümü değildir."
    }],
    accessEvidence: [{ label: accessSource.label, value: accessSource.note, sourceUrl: accessSource.url, note: rule }],
    accommodationOptions: [],
    navigationVerified: false,
    qualityAssessment: {
      model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true,
      currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [accessSource.url],
      localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: { level: "strong", label: route.name, note: accessSource.note },
      species: { level: "partial", label: species, note: fishSource.note },
      legal: { level: "strong", label: "6/2 ve 2026/26", note: rule },
      access: { level: "partial", label: accessSource.label, note: route.transport },
      field: { level: "unverified", label: "Saha ziyareti kaydı yok", note: safety }
    }
  };
});
