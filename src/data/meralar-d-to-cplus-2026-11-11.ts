import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-11";
const law: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık",
  url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513",
  note: "İçsularda avlanabilecek türler, boy, miktar, av aracı ve alan hükümleri."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "6/2 ile birlikte uygulanan güncel değişiklik."
};

export type CPlusReview = {
  slug: string;
  district: string;
  name?: string;
  waterType?: EnrichedMera["waterType"];
  coordinates?: [number, number];
  fish: { label: string; source: ResearchSource; basis: string };
  access: ResearchSource;
  additionalSources?: ResearchSource[];
  localRule: string;
  safety: string;
};

const nevsehirStock = "https://nevsehir.tarimorman.gov.tr/Haber/947/Nevsehirde-Baraj-Ve-Goletlere-Yavru-Balik-Birakildi";
const kastamonuReport = "https://kastamonu.tarimorman.gov.tr/Belgeler/Calisma_Raporu/2025%20Y%C4%B1l%C4%B1%20Kastamonu%20%C4%B0l%20Faaliyet%20Raporu.pdf";
const apaGovernor = "https://cumra.gov.tr/apa-baraji";
const allebenCulture = "https://www.kulturportali.gov.tr/turkiye/gaziantep/TurizmAktiviteleri/olta-balikciligi--alleben-goleti--baliklar--firat-nehri--gaziantep-rumkalesi--islahiye--rumkale-";

export const extraCPlusReviews: CPlusReview[] = [
  {
    slug: "ulusal-nevsehir-damsa-baraj-golu",
    district: "Ürgüp",
    fish: {
      label: "Baraja özgü resmî balıklandırma",
      source: { label: "Nevşehir İl Tarım – 2024 Damsa sazan salımı", url: "https://nevsehir.tarimorman.gov.tr/Haber/983/%E2%80%8BNevsehir-Damsa-Barajina-Yavru-Balik-Birakildi", note: "İl Tarım, Damsa Barajı'na sazan yavrusu bırakıldığını kaydediyor." },
      basis: "Salım kaydı türü doğrular. Yetişkin stok ve av verimi ölçülmedi."
    },
    access: { label: "Ürgüp Belediyesi – Damsa Barajı Mesire Alanı", url: "https://urgup.bel.tr/tr/sosyal-tesis/damsa-baraji-mesire-alani", note: "Mustafapaşa yönündeki belediye mesire alanı genel ziyaret yaklaşımını sağlar. Çitle ayrılan piknik kıyısı atış yeri olarak kullanılmamalıdır." },
    additionalSources: [{ label: "Nevşehir İl Tarım – Damsa ve diğer sular", url: nevsehirStock, note: "2023 salımını ve kontrollü amatör olta kullanımını birlikte ele alır." }],
    localRule: "Barajın DSİ güvenlik sahası ve mesire çiti dışında, olta kullanımına açık kıyı kesimlerinde kalın.",
    safety: "Çiti aşmayın. Baraj gövdesinden, dolusavaktan ve su çekilince açığa çıkan yumuşak çamurdan uzak durun."
  },
  {
    slug: "ulusal-nevsehir-doyduk-baraj-golu",
    district: "Kozaklı",
    fish: {
      label: "Baraja özgü resmî balıklandırma",
      source: { label: "Nevşehir İl Tarım – Doyduk sazan salımı", url: nevsehirStock, note: "2023 duyurusu Doyduk Barajı'nı 120 bin sazan yavrusu bırakılan su olarak kaydediyor." },
      basis: "Sayı 2023 salımına aittir. Bugünkü av miktarı hakkında tahmin vermez."
    },
    access: { label: "Kozaklı Kaymakamlığı – Doyduk köyü", url: "https://www.kozakli.gov.tr/kozaklinin-koyleri---doyduk", note: "Kaymakamlık Doyduk Barajı'nı köyün yanındaki ziyaret alanı olarak tanımlıyor." },
    additionalSources: [{ label: "Nevşehir'de açık hava rekreasyonu saha araştırması", url: "https://dergipark.org.tr/tr/download/article-file/1429062", note: "Çalışma Doyduk Barajı'nı olta kullanılan sular arasında kaydeder." }],
    localRule: "Amatör oltayı köy tarafındaki açık ve izinli kıyıyla sınırlayın. DSİ güvenlik sınırına ve tarla girişlerine uyun.",
    safety: "Sığ görünen çamurlu kıyıya inmeyin. Sulama yapıları ve tarım arazileri için levhaları takip edin."
  },
  {
    slug: "ulusal-konya-apa-baraj-golu",
    district: "Çumra",
    fish: {
      label: "Kaymakamlığın baraja özgü tür kaydı",
      source: { label: "Çumra Kaymakamlığı – Apa Barajı", url: apaGovernor, note: "Çumra Kaymakamlığı Apa Barajı'nda sazan tutulduğunu ve gölde amatör olta kullanıldığını belirtiyor." },
      basis: "Kaymakamlık kaydı sazanın bu suya ait olduğunu destekler. Güncel stok ölçümü içermez."
    },
    access: { label: "Çumra Belediyesi – İlçemiz ve Apa mesiresi", url: "https://www.cumra.bel.tr/Icerik/ilcemiz%26.html", note: "Baraj çevresindeki piknik kesimleri genel kamusal yaklaşımı sağlar. Kaymakamlık aynı kıyıdaki kurum tesislerini de ayrı olarak tanımlar." },
    localRule: "DSİ ve üniversite tesislerinin sınırları ile baraj güvenlik sahası dışında, olta kullanımına açık kıyıda kalın.",
    safety: "Piknikçilerin yakınında, dik şevde ve barajın su giriş veya çıkış yapıları yanında atış yapmayın."
  },
  {
    slug: "ankara-500km-izmir-golcuk",
    district: "Ödemiş",
    fish: {
      label: "Göle özgü akademik tür kaydı",
      source: { label: "Ege Üniversitesi – Ödemiş Gölcük Gölü araştırması", url: "https://dergipark.org.tr/tr/download/article-file/57415", note: "Ege Üniversitesi çalışması Ödemiş Gölcük Gölü'nde sazanı (Cyprinus carpio) kaydediyor." },
      basis: "Akademik kayıt türün göldeki varlığını belgeler. Bugünkü popülasyonun büyüklüğü ölçülmedi."
    },
    access: { label: "Ödemiş Belediyesi – Gölcük'te amatör balıkçılık", url: "https://odemis.bel.tr/sayfa/genel-bilgiler", note: "Belediye Gölcük Gölü'nü amatör olta kullanılan bir su olarak, yerleşim çevresini de ziyaret alanı olarak tanımlar." },
    additionalSources: [{ label: "DKMP – Ödemiş Gölcük doğa turizmi", url: "https://ekotaban.tarimorman.gov.tr/alan/5483", note: "Gölün kimliği ve rekreasyon alanı." }],
    localRule: "Yalnızca göl kıyısında olta kullanımına açık kamusal kesimleri kullanın. Koruma levhaları ve mülk sınırları geçerlidir.",
    safety: "Sazlığa girmeyin ve ziyaretçilerin kullandığı yürüyüş hattında atış yapmayın."
  },
  {
    slug: "ankara-500km-gaziantep-alleben-goleti",
    district: "Şahinbey",
    fish: {
      label: "Gölete özgü resmî tür kaydı",
      source: { label: "Kültür Portalı – Alleben Göleti'nde kıyı oltası", url: allebenCulture, note: "Kültür ve Turizm Bakanlığı, Sarısalkım yakınındaki Alleben Göleti'nde sazanı ve kıyıdan amatör oltayı kaydediyor." },
      basis: "Kayıt Alleben Göleti'ne aittir. Şehir içinden geçen Alleben Deresi ayrı bir sudur."
    },
    access: { label: "MEB – Alleben Göleti Rekreasyon Alanı", url: "https://okuldisiogrenme.eba.gov.tr/mekan-detay/alleben-goleti-rekreasyon-alani-10200", note: "Gölet çevresindeki rekreasyon alanı genel ziyaret yaklaşımı sağlar." },
    localRule: "Oltayı ziyaret alanındaki açık ve izinli kıyıyla sınırlayın. İşletme, etkinlik veya su yapısı için ayrılan kesimlere girmeyin.",
    safety: "Piknik alanı kalabalıksa atış yapmayın. Islak şevden ve suya inen kaygan taşlardan uzak durun."
  },
  {
    slug: "ankara-500km-elazig-hazar-golu",
    district: "Sivrice",
    fish: {
      label: "2026 resmî göl balıklandırması",
      source: { label: "Elazığ İl Tarım – Hazar Sazan Kupası ve balık salımı", url: "https://elazig.tarimorman.gov.tr/Haber/1934/Hazarda-Sazan-Kupasi-Odul-Toreniyle-Tamamlandi", note: "İl Tarım, Ekim 2026'da Sivrice Hazar Gölü'ne 30 bin sazan yavrusu bırakıldığını kaydediyor." },
      basis: "Ekim 2026 etkinliği ve balıklandırma Hazar Gölü'ne aittir. Yavru salımı güncel yetişkin stok ölçümü değildir."
    },
    access: { label: "Elazığ İl Tarım – Hazar Gölü amatör avlanma alanları", url: "https://elazig.tarimorman.gov.tr/Lists/KutuMenu/Attachments/17/Amat%C3%B6r%20Avc%C4%B1l%C4%B1k%20Alanlar%C4%B1.pdf", note: "İl Tarım ve DSİ komisyonu Hazar Gölü için dört amatör avlanma alanı belirlemiştir. Belge kıyı sınırlarını ve koordinatları gösterir." },
    localRule: "Sadece İl Tarımın Sivrice Hazar Gölü belgesindeki dört amatör avlanma kesiminden birinin güncel sınır ve levhalarına göre olta atın.",
    safety: "Göl geneli için harita pinini kullanın. Yüzme alanı, işletme sınırı ve sazlıkların dışındaki izinli kuru kıyıda kalın."
  },
  {
    slug: "ulusal-kastamonu-bezirgan-baraj-golu",
    name: "Bezirgan (Hazım Kılıç) Göleti",
    district: "Daday",
    waterType: "Gölet",
    fish: {
      label: "2025 resmî gölet balıklandırması",
      source: { label: "Kastamonu İl Tarım – 2025 Faaliyet Raporu", url: kastamonuReport, note: "İl Tarım raporu Daday Bezirgan Göleti'ne 30 bin sazan yavrusu bırakıldığını kaydediyor." },
      basis: "Balıklandırma satırı aynı suya aittir. Güncel av verimi ölçülmedi."
    },
    access: { label: "DKMP – Kastamonu doğa turizmi planı", url: "https://bolge10.tarimorman.gov.tr/BelgelerArsiv/KASTAMONU%20ILI%20DOGA%20TURIZMI%20MASTER%20PLANI.pdf", note: "DKMP, Daday'daki Bezirgan Göleti'ni sportif olta kullanımı olan sular arasında listeliyor." },
    additionalSources: [{ label: "DSİ 23. Bölge – Gölet envanteri", url: "https://bolge23.dsi.gov.tr/Sayfa/Detay/1235", note: "Daday'daki Bezirgan su yapısının kimliğini doğrular." }],
    localRule: "Köy tarafında olta kullanımına açık, kamuya erişilebilir kıyıyı kullanın. Sulama tesisi ve kapatılmış kesimler dışarıda kalır.",
    safety: "Gövdeye, dolusavağa ve su alma yapısına yaklaşmayın. Su seviyesinin düştüğü günlerde çamura girmeyin."
  },
  {
    slug: "ankara-500km-kastamonu-beyler-baraj-golu",
    district: "Devrekâni",
    fish: {
      label: "Baraja özgü resmî tür ve balıklandırma",
      source: { label: "Devrekâni Kaymakamlığı – Beyler Barajı", url: "https://www.devrekani.gov.tr/beyler-baraji-2", note: "Kaymakamlık Beyler Barajı'nda sazanı, amatör olta kullanımını ve kıyıdaki piknik kesimlerini tanımlıyor." },
      basis: "2025 İl Tarım raporu Beyler'i sazan bırakılan sular arasında sayar. Rapordaki toplam birden çok suyu kapsar."
    },
    access: { label: "Devrekâni Kaymakamlığı – Beyler Barajı kıyısı", url: "https://www.devrekani.gov.tr/beyler-baraji-2", note: "Beyler, Fakılar ve Karayazıcılar çevresinde halka açık piknik yaklaşımı tarif ediliyor." },
    additionalSources: [{ label: "Kastamonu İl Tarım – 2025 Faaliyet Raporu", url: kastamonuReport, note: "Beyler Barajı'nı sazan bırakılan sular arasında gösterir." }],
    localRule: "Olta kullanımına açık kuru kıyıda kalın. DSİ güvenlik alanına girmeyin ve varsa yetiştiricilik kafeslerine 100 metreden fazla mesafe bırakın.",
    safety: "Barajın su yapıları ve kaygan şevlerden uzak durun. Piknik alanında insanların üzerinden atış yapmayın."
  },
  {
    slug: "ulusal-usak-karaagac-baraj-golu-usak",
    name: "Karaağaç Göleti",
    district: "Merkez",
    waterType: "Gölet",
    coordinates: [38.654722, 29.333611],
    fish: {
      label: "Gölete özgü saha envanteri",
      source: { label: "Zafer Kalkınma Ajansı – Karaağaç Göleti saha formu", url: "https://dokuman.zafer.gov.tr/uiassets/filemanagement/B%C4%B0LG%C4%B0BANKASI/usak/usak-afyon-su-urunleri-kapasitesinin-belirlenmesi.pdf", note: "Saha formu Karaağaç Göleti'nde sazanı kaydediyor ve su kütlesinin koordinatını veriyor." },
      basis: "Tarihsel saha envanterinde sazan doğrudan bu gölet için listelenir. Güncel stok büyüklüğü bilinmiyor."
    },
    access: { label: "Uşak Valiliği – Mesire Yerleri", url: "https://usak.gov.tr/mesire-yerleri", note: "Valilik Yeşil Karaağaç'taki sulama göletine asfalt yoldan ulaşıldığını ve gölette olta ile balık tutulabildiğini belirtiyor." },
    additionalSources: [{ label: "Uşak Üniversitesi – Haziran 2026 Karaağaç ziyareti", url: "https://ogrenci.usak.edu.tr/etkinlik/8572", note: "Üniversite 2026'da göletin rekreasyon amaçlı ziyaretini kaydediyor." }],
    localRule: "Güncel orman parkı kararlarına ve giriş levhalarına uyun. Oltayı açık kıyıyla sınırlayın.",
    safety: "Sular altında kalan teras veya çamurlu kıyıya inmeyin. Kalabalık piknik kesiminde atış yapmayın."
  },
  {
    slug: "ankara-500km-ankara-kizilca-goleti",
    district: "Çubuk",
    fish: {
      label: "Gölete özgü belediye fauna kaydı",
      source: { label: "Ankara Büyükşehir Belediyesi – Ankara Su Canlıları Atlası", url: "https://s.ankara.bel.tr/files/2024/02/22/856f8c1a4b9ea4e6531331103fc36d08.pdf", note: "Ankara Büyükşehir Belediyesi atlası Çubuk Kızılca Göleti'nde pullu sazanı kaydediyor." },
      basis: "Atlas türü bu gölete bağlar. Su seviyesi değiştikçe av verimi değişebilir."
    },
    access: { label: "Çubuk Belediyesi – Kızılca Göleti kıyı kullanımı", url: "https://www.cubuk.bel.tr/universiteli-dagcilar-kizilca-goletinde-cevre-temizligi-yapti/", note: "Belediye 2026 tarihli kıyı ziyareti duyurusunda göleti vatandaşların balık tuttuğu ve piknik yaptığı alan olarak tanımlıyor." },
    additionalSources: [{ label: "Ankara Büyükşehir Belediyesi – Kızılca Göleti su seviyesi", url: "https://www.ankara.bel.tr/haberler/kuruma-riski-altindaki-kizilca-goleti-yeniden-suya-kavustu-18207", note: "2026'da su beslemesinin yeniden açıldığını ve kıyı koşullarını etkileyen çalışmaları kaydediyor." }],
    localRule: "Oltayı kamuya açık kuru kıyıyla sınırlayın. Sulama kanalı, işletme sahası ve özel tarla girişlerine girmeyin.",
    safety: "Suyu besleyen kanal ağızlarından ve seviye değişimiyle oluşan yumuşak çamurdan uzak durun."
  }
];

export function applyExtraCPlus20261111(routes: Map<string, EnrichedMera>): void {
  applyCPlusReviews(routes, extraCPlusReviews, date);
}

export function applyCPlusReviews(routes: Map<string, EnrichedMera>, reviews: CPlusReview[], reviewedAt: string): void {
  for (const review of reviews) {
    const old = routes.get(review.slug);
    if (!old || old.confidence !== "D" || (old.qualityGrade && old.qualityGrade !== "D")) {
      throw new Error(`${reviewedAt} D sınıfı başlangıç kaydı değişti: ${review.slug}`);
    }
    const name = review.name ?? old.name;
    const [lat, lng] = review.coordinates ?? [old.lat, old.lng];
    const mapSources = old.sources.filter(source =>
      /google maps|TATUS|openstreetmap/i.test(source.label)
    );
    const sources = [...new Map(
      [review.fish.source, review.access, ...(review.additionalSources ?? []), law, amendment, ...mapSources]
        .map(source => [source.url, source])
    ).values()];
    const currentLaw = `6/2 Tebliğ ve 2026/26 değişikliği geçerlidir. ${review.localRule}`;
    const summary = `${review.fish.source.note} ${review.access.note}`;
    const navigationNote = "Harita pini su kütlesinin genel konumunu gösterir. Kıyıya girişte güncel levhaları ve açık geçişleri takip edin.";
    routes.set(review.slug, {
      ...old,
      name,
      district: review.district,
      waterType: review.waterType ?? old.waterType,
      lat,
      lng,
      locationPrecision: "Genel bölge",
      confidence: "C",
      qualityGrade: "C+",
      indexing: "hold",
      updatedAt: reviewedAt,
      researchedAt: reviewedAt,
      researchStatus: "Kaynaklı araştırma",
      researchSummary: `${summary} ${currentLaw}`,
      summary,
      verification: `${reviewedAt}: D→C+. Su kimliği, sazan kaydı, erişim ve yürürlükteki kurallar yeniden incelendi. ${currentLaw}`,
      fish: ["Sazan"],
      fishEvidence: [{
        name: "Sazan",
        scientificName: "Cyprinus carpio",
        evidenceLevel: review.fish.label,
        sourceLabel: review.fish.source.label,
        sourceUrl: review.fish.source.url,
        note: review.fish.basis
      }],
      accessEvidence: [{
        label: review.access.label,
        value: review.access.note,
        sourceUrl: review.access.url,
        note: review.localRule
      }],
      methods: ["Kıyıdan dip oltası", "Şamandıralı olta"],
      baits: ["Mısır", "Hamur"],
      camping: "Kontrol edilmeli",
      vehicleAccess: "Kontrol edilmeli",
      amenities: [],
      cautions: [review.safety, "Sazanın güncel kapalı dönemine, boy ve alıkoyma sınırlarına uyun.", "Avdan önce güncel kıyı levhalarını ve işletme sınırlarını kontrol edin."],
      navigationNote,
      navigationVerified: false,
      shoreProfile: `${review.access.note} ${review.safety}`,
      transport: navigationNote,
      crowdNote: "Diğer ziyaretçilerden uzakta ve arkanız boşken atış yapın.",
      longIntro: [review.fish.source.note, review.access.note, review.fish.basis],
      planningNotes: [currentLaw, review.safety],
      seasonalNotes: ["Sazan için 6/2 Çizelge 5 ve 6 ile güncel il duyurularını kontrol edin."],
      sources,
      qualityAssessment: {
        model: "expanded-v2",
        reviewedAt,
        identityVerified: true,
        speciesRouteSpecific: true,
        currentLawResolved: true,
        safePublicAccessVerified: true,
        independentStrongFamilies: [review.fish.source.url],
        localContentVerified: true,
        fieldOrEquivalentVerified: false,
        unresolvedRisks: []
      },
      confidenceProfile: {
        model: "evidence-v1",
        overall: "C",
        reviewedAt,
        identity: { level: "strong", label: name, note: "Kaynaklar aynı su kütlesini tanımlıyor." },
        species: { level: "strong", label: review.fish.label, note: review.fish.basis },
        legal: { level: "strong", label: "6/2 ve 2026/26", note: review.localRule },
        access: { level: "partial", label: review.access.label, note: review.access.note },
        field: { level: "unverified", label: "Saha ziyareti kaydı yok", note: navigationNote }
      }
    });
  }
}
