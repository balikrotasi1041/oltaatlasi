import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-13";
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
  navigationNote: string;
  transport: string;
  methods: string[];
  baits: string[];
};

const studyUrl = "https://dergipark.org.tr/en/pub/tjbc/article/528668";
const waterReport = "https://webdosya.csb.gov.tr/db/ced/icerikler/istanbul-ilcdr-2023-20241230081046.pdf";
const parkReport = "https://yesil.istanbul/haber_ibb-den-sile-ye-14-yepyeni-park";
const floodReport = "https://sile.bel.tr/tr/haber/silede-saganak-yagis-seferberligi/";
const annex: ResearchSource = {
  label: "İBB – 6/2 tebliği ve suya özgü yasak alan ekleri",
  url: "https://tarim.ibb.istanbul/img/155442992025__3064691425N.pdf",
  note: "Ek-4 ve Ek-5'te bu iki Şile dere kesimine özgü bir av yasağı yer almıyor."
};

const entries: Entry[] = [
  {
    slug: "istanbul-sile-kabakoz-deresi-koy-kiyisi",
    name: "Kabakoz Deresi Köy Kıyısı",
    province: "İstanbul",
    district: "Şile",
    zone: "Kabakoz Mahallesi köy yerleşiminde dereye kamusal yaklaşım",
    waterType: "Akarsu",
    region: "Marmara",
    lat: 41.143849,
    lng: 29.690371,
    species: "Tatlısu kefali",
    scientificName: "Squalius cephalus",
    fishSource: {
      label: "Özuluğ ve Saç (2019) – Kabakoz Deresi saha örneklemesi",
      url: studyUrl,
      note: "Araştırmanın 77 ve 78 numaralı Kabakoz Deresi istasyonlarında 2016'da tatlısu kefali kaydedildi. Köy kesimi 77 numaralı istasyona yakındır."
    },
    accessSource: {
      label: "İBB – Kabakoz Köy Parkı ve yürüyüş yolları",
      url: parkReport,
      note: "İBB, Kabakoz Köy Parkı'nı ve kamusal yaya yollarını kaydediyor. Köy merkezi ve park dereye genel yaklaşım için kullanılabilir."
    },
    otherSources: [
      { label: "İstanbul 2023 İl Çevre Durum Raporu – Kabakoz 34-022", url: waterReport, note: "Kabakoz köyündeki dere izleme konumunu doğrular." },
      { label: "İETT – 139A, Kabakoz Merkez durağı", url: "https://iett.istanbul/RouteDetail?hkod=139A", note: "Şile–Ağva güzergâhındaki köy merkezi erişimidir." },
      { label: "Şile Belediyesi – Kabakoz Deresi taşkın değerlendirmesi", url: "https://sile.bel.tr/uploads/cm/8x/cm8x6noir001i07o378tx9t34/cm8x6noir001i07o378tx9t34.pdf", note: "Dere çevresindeki taşkın tehlikesini ve dere yatağını açık tutma koşullarını açıklar." },
      { label: "OpenStreetMap – Kabakoz Deresi", url: "https://www.openstreetmap.org/way/184281540", note: "Köy içindeki akarsu ve yol yaklaşımını haritada ayırır." },
      annex
    ],
    rule: "Tatlısu kefalinde 20 cm asgari boy geçerlidir. 6/2 Çizelge 6'da orman içi olmayan akarsular için zaman yasağı yoktur. Orman içi sularda İstanbul'un 15 Mart–15 Haziran kapalı dönemi uygulanır. Bu rota köy yerleşimindeki kıyıyla sınırlıdır.",
    safety: "Dere yağıştan sonra hızla yükselebilir. Köprü üstünden atış yapmayın, suya girmeyin ve dik şev, çamurlu yatak veya çalışma sahasına inmeyin.",
    transport: "Kabakoz Merkez durağından köy içindeki kamusal yaya yollarını kullanın. Yaya hattı ve özel parsellerle çakışmayan açık ve düz kuru kıyı bulunmuyorsa olta atmayın.",
    navigationNote: "Pin 34-022 numaralı genel dere izleme konumunu gösterir. Köy parkı bir yaklaşım referansıdır. Köprü, dere ağzı ve plaj rota kapsamı dışındadır.",
    methods: ["Kıyıdan şamandıralı olta"],
    baits: ["Hamur", "Solucan"]
  },
  {
    slug: "istanbul-sile-agva-goksu-deresi-yakuplu-kiyisi",
    name: "Ağva Göksu Deresi Yakuplu Kıyısı",
    province: "İstanbul",
    district: "Şile",
    zone: "Yakuplu Caddesi ve Çeşmeli Parkı çevresindeki Göksu kuru kıyı yaklaşımı",
    waterType: "Akarsu",
    region: "Marmara",
    lat: 41.1318965,
    lng: 29.8403838,
    species: "Sazan",
    scientificName: "Cyprinus carpio",
    fishSource: {
      label: "Özuluğ ve Saç (2019) – Ağva Göksu Deresi saha örneklemesi",
      url: studyUrl,
      note: "2016 örneklemesinde Göksu Deresi'nin 62 numaralı istasyonunda sazan kaydedildi. İstasyon aynı derenin Yakuplu kesiminin yukarısındadır."
    },
    accessSource: {
      label: "İBB – Yakuplu Çeşmeli Parkı",
      url: parkReport,
      note: "İBB'nin kaydettiği Yakuplu Çeşmeli Parkı, Yakuplu Caddesi üzerinden dere çevresine kamusal yaya yaklaşımı sağlar."
    },
    otherSources: [
      { label: "Şile Belediyesi – Ağva ve Göksu", url: "https://sile.bel.tr/tr/dogal-guzellikler/", note: "Ağva'daki Göksu kıyısını, kıyı işletmelerini ve tekne gezisi kullanımını ayırt eder." },
      { label: "OpenStreetMap – Yakuplu Çeşmeli Parkı", url: "https://www.openstreetmap.org/way/875085177", note: "Kamusal parkı ve cadde yaklaşımını gösterir." },
      { label: "OpenStreetMap – Ağva Göksu Deresi", url: "https://www.openstreetmap.org/way/1240951243", note: "Yakuplu karşısındaki su kimliğini ve dere güzergâhını gösterir." },
      { label: "İstanbul 2023 İl Çevre Durum Raporu – Göksu ve arıtma tesisi", url: waterReport, note: "Aşağı kesimdeki 34-023 istasyonunu ve Ağva atıksu arıtma tesisini kaydeder. Yakuplu pini tesisin memba tarafındadır." },
      { label: "Şile Belediyesi – sağanak ve taşkın çalışmaları", url: floodReport, note: "Şile'de yağışla artan taşkın riskini kaydeder." },
      annex
    ],
    rule: "İstanbul'da sazan için 15 Mart–15 Haziran kapalı dönemi, 40 cm asgari boy ve 5 adet sınırı geçerlidir. Su alma yapıları, arıtma tesisi ve deşarj kesimleri, köprüler, özel iskeleler ve tekne geçiş hatları rota dışındadır.",
    safety: "Dik veya ıslak şeve ve suya inmeyin. Yağış sonrası yükselen akımda ve tekne hareketinde atış yapmayın. Dere suyunun ve avın tüketime uygunluğu bu çalışmada değerlendirilmedi.",
    transport: "Ağva'da Yakuplu Caddesi üzerinden Çeşmeli Parkı çevresine yürüyün. Yalnızca levhalarla kısıtlanmamış, doğrudan kamusal taraftan ulaşılan kuru kıyı varsa olta atın.",
    navigationNote: "Harita pini Yakuplu karşısındaki dere kesimini gösterir. Park veya işletme iskelesinden atış izni varsaymayın. Bu rota Beykoz Göksu'dan ve Ağva'nın Yeşilçay ağzından ayrıdır.",
    methods: ["Kıyıdan dip oltası", "Şamandıralı olta"],
    baits: ["Mısır", "Hamur"]
  }
];

export const growthRoutes20261113: EnrichedMera[] = entries.map(entry => {
  const { species, scientificName, fishSource, accessSource, otherSources, rule, safety, navigationNote, ...route } = entry;
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
    verification: `13 Kasım 2026. Su kimliği, akademik tür örneklemesi, kamusal kıyı yaklaşımı ve 6/2 hükümleri incelendi. ${rule}`,
    updatedAt: date,
    publishedAt: date,
    researchedAt: date,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "index",
    image,
    socialImage: image,
    navigationNote,
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
      note: "Tür kaydı 2016 saha örneklemesine aittir. Bugünkü stok ve av verimi ölçülmedi."
    }],
    accessEvidence: [{ label: accessSource.label, value: accessSource.note, sourceUrl: accessSource.url, note: rule }],
    accommodationOptions: [],
    navigationVerified: false,
    qualityAssessment: {
      model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true,
      currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [fishSource.url],
      localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1", overall: "C", reviewedAt: date,
      identity: { level: "strong", label: route.name, note: accessSource.note },
      species: { level: "strong", label: species, note: fishSource.note },
      legal: { level: "strong", label: "6/2 ve 2026/26", note: rule },
      access: { level: "partial", label: accessSource.label, note: route.transport },
      field: { level: "unverified", label: "Saha ziyareti kaydı yok", note: safety }
    }
  };
});
