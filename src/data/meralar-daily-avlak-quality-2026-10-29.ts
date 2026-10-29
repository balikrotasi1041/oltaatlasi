import type { EnrichedMera } from "./meralar-tumu-core";

const date = "2026-10-29";
const stock = { label: "Kocaeli İl Tarım ve Orman Müdürlüğü – 2025 Faaliyet Raporu", url: "https://kocaeli.tarimorman.gov.tr/Belgeler/pdf_dosyalar_/Kocaeli%20%C4%B0l%20Tar%C4%B1m%20ve%20Orman%20M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC%202025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf", note: "53. sayfa 2025 sazan yavrusu salımını gölet adı ve miktarıyla verir; yetişkin stok veya yakalama garantisi değildir." };
const park = { label: "Körfez Belediyesi – Sevindikli ve Sipahiler Göleti Aktivite Alanı", url: "https://korfez.bel.tr/proje-d/14/85/sevindikli-ve-sipahiler-goleti-aktivite-alani", note: "Tamamlanan projede iki ayrı gölet için balık tutma, piknik ve yürüme alanları listelenir; mikro kıyı levhası yine kontrol edilir." };
const festival = { label: "İMEAK Deniz Ticaret Odası Kocaeli Şubesi – Ütük 2026 olta festivali", url: "https://kocaeli.denizticaretodasi.org.tr/tr/slider/yk-baskanimiz-vedat-dogusel-kamader-tarafindan-duzenlenen--18-geleneksel-turna-ve-tatlisu-levregi-tutma-festivaline--istirak-etti-5924", note: "6 Haziran 2026'da Ütük'teki kamusal olta etkinliğini kurumsal olarak kaydeder; turna/levrek yakalaması veya sürekli sınırsız izin kanıtı değildir." };
const law = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Kocaeli içsu sazan kapalı dönemi, boy, adet, yöntem ve yer sınırlamaları." };
const amendment = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte değerlendirildi." };
const targets = [
  { slug: "ankara-500km-kocaeli-sipahiler-goleti", amount: 18000, access: park },
  { slug: "ankara-500km-kocaeli-sevindikli-goleti", amount: 19000, access: park },
  { slug: "ankara-500km-kocaeli-utuk-goleti", amount: 18000, access: festival }
] as const;
export const promoted20261029 = targets.map((item) => item.slug);

export function applyDailyAvlakQuality20261029(routes: Map<string, EnrichedMera>): void {
  for (const item of targets) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`${item.slug}: 29 Ekim başlangıç D durumu değişti; terfi yeniden incelenmeli.`);
    const accessDescription = item.access === park
      ? "Körfez Belediyesinin tamamlanan projesi bu gölette balık tutma ve kamusal rekreasyon alanı bildirir."
      : "2026 kurumsal etkinlik kaydı Ütük'te organize amatör olta kullanımını doğrular; bu geçmiş etkinlik her kıyıda sürekli izin değildir.";
    const risk = "Kıyı levhası, olası kiralık istihsal sahası, özel parsel ve baraj/gölet teknik yapısı hareket günü kontrol edilir; açık alan belirlenemiyorsa avlanılmaz.";
    routes.set(old.slug, {
      ...old,
      confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: ["Sazan"],
      summary: `${old.name} için Kocaeli İl Tarımın 2025 rota-özel sazan yavrusu salımı ve ${item.access === park ? "belediyenin balık tutma alanı" : "2026 amatör olta etkinliği"} belgelidir. Yetişkin stok ile güncel kıyı izni ayrıca doğrulanmalıdır; rota C/noindex kalır.`,
      longIntro: [`2025 İl Tarım faaliyet raporu ${old.name} için ${item.amount.toLocaleString("tr-TR")} sazan yavrusu salımı kaydeder. Bu, gölette yetişkin sazan yakalanacağını göstermez.`, `${accessDescription} ${risk}`],
      verification: `29 Ekim 2026 gerçek D→C terfisi: resmî 2025 rota-özel sazan salımı, ${item.access.label}, güncel 6/2 ve 2026/26 çaprazlandı. ${risk} Güncel yetişkin stok ve mikro kıyı doğrulanmadığından noindex.`,
      cautions: [...new Set([...(old.cautions || []), "2025 sazan yavrusu salımı av garantisi değildir.", risk, "Kocaeli sazan kapalı döneminde ve yasak bölgede olta açma."])],
      navigationNote: `Pin ${old.name} su gövdesinin genel konumudur; kesin, izinli kıyı değildir. ${risk}`,
      sources: [...new Map([...(old.sources || []), stock, item.access, law, amendment].map(s => [s.url, s])).values()],
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "2025 rota-özel resmî yavru salımı", sourceLabel: stock.label, sourceUrl: stock.url, note: `${item.amount.toLocaleString("tr-TR")} yavru salımı; yetişkin stok ve av garantisi değildir.` }],
      accessEvidence: [{ label: item.access.label, value: accessDescription, sourceUrl: item.access.url, note: risk }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [stock.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: ["Güncel izinli mikro kıyı ve yetişkin stok doğrulanmadı; HOLD"] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
        identity: { level: "strong", label: "İl Tarım gölet adı", note: "Resmî salım tablosu suyu ilçe ve adıyla listeler." },
        species: { level: "partial", label: "2025 sazan salımı", note: "Yetişkin popülasyon kanıtı değildir." },
        legal: { level: "partial", label: "6/2 ve 2026/26", note: "Mevsim, istihsal kiralaması ve yerel levha ayrıca kontrol edilir." },
        access: { level: "partial", label: item.access.label, note: "Genel kullanım kanıtı; mikro kıyı güncel teyitli değildir." },
        field: { level: "unverified", label: "Saha teyidi yok", note: "Bugünkü su seviyesi ve açık kıyı teyitli değildir." } }
    });
  }
}
