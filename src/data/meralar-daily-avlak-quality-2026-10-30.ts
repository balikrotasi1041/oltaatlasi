import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-30";
const stock: ResearchSource = { label: "Kocaeli İl Tarım ve Orman Müdürlüğü – 2025 Faaliyet Raporu", url: "https://kocaeli.tarimorman.gov.tr/Belgeler/pdf_dosyalar_/Kocaeli%20%C4%B0l%20Tar%C4%B1m%20ve%20Orman%20M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC%202025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf", note: "52. sayfa Tahtalı, Denizli ve Arıklar göletlerinin 2025 rota-özel yavru sazan salımını listeler; yetişkin stok veya av garantisi değildir." };
const tahtaliAccess: ResearchSource = { label: "Derince Kaymakamlığı – Tahtalı Göleti", url: "https://derince.gov.tr/derince-tahtali-goleti", note: "Tahtalı Göleti'nde sazan varlığını ve amatör balıkçılık kullanımını rota adıyla bildirir; 2026 orman giriş kararı ayrıca uygulanır." };
const tahtaliMunicipal: ResearchSource = { label: "Derince Belediyesi – Tahtalı Göleti olta etkinliği", url: "https://www.derince.bel.tr/haber/1/6138/istilaci-baliklar-bertaraf-edildi", note: "Tahtalı'da belediye işbirliğiyle 2024 amatör olta etkinliği yapıldığını doğrular; güncel sınırsız kıyı izni değildir." };
const denizliAccess: ResearchSource = { label: "MEB Okul Dışı Öğrenme – Gebze Denizli Göleti", url: "https://okuldisiogrenme.eba.gov.tr/mekan-detay/gebze-denizli-goleti-8907", note: "Gölet çevresinin eğitim ve yürüyüş için ziyaret edilebilir olduğunu doğrular; amatör balıkçılık izni vermez." };
const denizliAngling: ResearchSource = { label: "Galaksideki İzler – Denizli Göleti ziyaret/olta anlatımı", url: "https://galaksidekiizler.blogspot.com/2020/06/gebze-denizli-koyu-ve-goleti.html", note: "Tarihsel ziyaret ve balık tutma anlatımı; güncel hukuki izin, erişim veya yetişkin stok kanıtı değildir." };
const ariklarIdentity: ResearchSource = { label: "Kocaeli Büyükşehir Belediyesi – Kandıra su varlıkları", url: "https://www.kocaeli.bel.tr/kandira.html", note: "Arıklar Göleti'ni Kandıra'da sulama amaçlı su olarak adlandırır; su kıyısında serbest av izni değildir." };
const ariklarCatch: ResearchSource = { label: "Sakarya Son Dakika – Arıklar Göleti yayın avı (2026)", url: "https://www.sakaryasondakika.com/haber/28881101/tosun-pasa-diye-sevdilersakaryada-oltaya-dev-yayin-baligi-takildi", note: "26 Eylül 2026'da Arıklar Göleti'nde amatör olta ile yayın yakalandığını aktarır; alanın tüm kıyıları veya her gün açık değildir." };
const forest: ResearchSource = { label: "Kocaeli Valiliği – 2026 orman giriş kararı", url: "https://www.basiskele.gov.tr/kocaeli-ili-orman-yanginlari-ile-mucadele-kurul-kararlari", note: "Kocaeli ormanlık alanlarına 15 Mayıs–1 Kasım 2026 giriş kısıtını kaydeder; açık istisna doğrulanmadan orman içi kıyıya yönlendirme yapılmaz." };
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Kocaeli içsu sazan dönemi, boy, adet, yöntem ve yasak yer sınırları uygulanır." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte değerlendirildi." };

const targets = [
  { slug: "ankara-500km-kocaeli-tahtali-goleti", amount: 125000, access: tahtaliAccess, other: tahtaliMunicipal, reason: "Kaymakamlık rota-özel sazan ve amatör balıkçılığı doğrular; orman girişi 1 Kasım'a dek kısıtlı." },
  { slug: "ankara-500km-kocaeli-denizli-goleti", amount: 175000, access: denizliAccess, other: denizliAngling, reason: "MEB kamusal ziyaret, tarihsel olta anlatımı ve resmî sazan salımı var; güncel olta izni/havza sınırı teyitli değil." },
  { slug: "ankara-500km-kocaeli-ariklar-baraj-golu", amount: 90000, access: ariklarIdentity, other: ariklarCatch, reason: "Büyükşehir su kimliği ve 2026 rota-özel amatör yayın avı var; sulama/orman sınırı ve izinli mikro kıyı teyitli değil." }
] as const;

export const promoted20261030 = targets.map((item) => item.slug);

export function applyDailyAvlakQuality20261030(routes: Map<string, EnrichedMera>): void {
  for (const item of targets) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`${item.slug}: 30 Ekim baseline D durumu değişti; terfi yeniden incelenmeli.`);
    const risk = "2026 Kocaeli orman giriş kısıtı, kıyı levhası, sulama/istihsal sahası ve özel parsel hareket günü kontrol edilir; izinli açık kıyı doğrulanmadan avlanılmaz.";
    routes.set(old.slug, {
      ...old,
      confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: ["Sazan"],
      summary: `${old.name} için Kocaeli İl Tarımın 2025 rota-özel sazan yavrusu salımı belgelidir. ${item.reason} Bu nedenle rota C/noindex kalır.`,
      longIntro: [`2025 İl Tarım faaliyet raporu ${old.name} için ${item.amount.toLocaleString("tr-TR")} sazan yavrusu salımı kaydeder. Bu, gölette bugün yetişkin sazan yakalanacağını kanıtlamaz.`, `${item.reason} ${risk}`],
      verification: `30 Ekim 2026 gerçek D→C terfisi: resmî 2025 rota-özel sazan salımı, ${item.access.label}, ${item.other.label}, 6/2 ve 2026/26 çaprazlandı. ${risk} Güncel izinli mikro kıyı doğrulanmadığından noindex.`,
      cautions: [...new Set([...(old.cautions || []), "Yavru sazan salımı yetişkin stok veya av garantisi değildir.", risk, "Kocaeli sazan kapalı döneminde veya yasak bölgede olta açma."])],
      navigationNote: `Pin ${old.name} su gövdesinin genel konumudur; kesin, izinli kıyı değildir. ${risk}`,
      sources: [...new Map([...(old.sources || []), stock, item.access, item.other, forest, law, amendment].map((s) => [s.url, s])).values()],
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "2025 rota-özel resmî yavru salımı", sourceLabel: stock.label, sourceUrl: stock.url, note: `${item.amount.toLocaleString("tr-TR")} yavru salımı; yetişkin stok ve av garantisi değildir.` }],
      accessEvidence: [{ label: item.access.label, value: item.reason, sourceUrl: item.access.url, note: risk }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [stock.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: ["Güncel izinli mikro kıyı, orman/havza sınırı ve yetişkin stok doğrulanmadı; HOLD"] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
        identity: { level: "strong", label: "İl Tarım gölet adı", note: "Resmî balıklandırma tablosu suyu ilçe ve adıyla listeler." },
        species: { level: "partial", label: "2025 sazan salımı", note: "Yetişkin popülasyon kanıtı değildir." },
        legal: { level: "partial", label: "6/2, 2026/26, orman kararı", note: "Mevsim, orman girişi, istihsal ve yerel levha ayrıca kontrol edilir." },
        access: { level: "partial", label: item.access.label, note: "Genel ziyaret/olta bağlamı; mikro kıyı güncel teyitli değildir." },
        field: { level: "unverified", label: "Saha teyidi yok", note: "Bugünkü su seviyesi ve açık kıyı teyitli değildir." } }
    });
  }
}
