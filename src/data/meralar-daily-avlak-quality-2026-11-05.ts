import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-05";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu tür, boy, adet, dönem ve yöntem kuralları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "Güncel değişiklik ana 6/2 ile birlikte incelendi." };
const sakaryaBan: ResearchSource = { label: "Sakarya İl Tarım – 2026 içsu kapalı dönemi", url: "https://sakarya.tarimorman.gov.tr/Haber/326/Ic-Sularda-Av-Yasagi-Basliyor-_15-Mart-15-Haziran-2026_", note: "15 Mart–15 Haziran 2026 sazan kapalı dönemi; sonraki yıl ilanı yeniden kontrol edilir." };
const kirklareliBan: ResearchSource = { label: "Kırklareli İl Tarım – sazangiller kapalı dönem duyurusu", url: "https://kirklareli.tarimorman.gov.tr/Duyuru/706/Ic-Sularda-Av-Yasaklari-Basliyor", note: "Tarihsel 5/2 duyurusu; güncel kural için 6/2 ve 2026/26 esas alındı." };
const hasanStock: ResearchSource = { label: "Sakarya İl Tarım – Hasanfakı Göleti 2016 sazan salımı", url: "https://sakarya.tarimorman.gov.tr/Haber/65/Su-Kaynaklarinin-Baliklandirma-Projesi", note: "Hasanfakı adıyla yavru sazan bırakıldığını bildirir; güncel yetişkin stok garantisi değildir." };
const evcilerStock: ResearchSource = { label: "Kırklareli İl Tarım – 2022 Evciler sazan balıklandırması", url: "https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi", note: "Balıklandırma Evciler'de fiilen başladı; sazan listesinde Evciler Göleti 5.000 yavru hedefi vardır. Tam miktar gerçekleşmiş gibi sunulmaz." };
const cavuskoyStock: ResearchSource = { label: "Kırklareli İl Tarım – Babaeski Çavuşköy 2020 sazan salımı", url: "https://kirklareli.tarimorman.gov.tr/Haber/1360/Babaeski-Ilcemiz-Goletleri-Baliklandirildi", note: "Babaeski Çavuşköy, Karacaoğlan ve Terzili göletlerine yavru sazan bırakıldığını bildirir; Vize'deki adaş göletle karıştırılmaz." };
const cavuskoyList: ResearchSource = { label: "Kırklareli İl Tarım – 2022 ilçe ayrımlı sazan listesi", url: "https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi", note: "Babaeski ve Vize Çavuşköy göletlerini ayrı satırlarda listeler; 2022 hedefi gerçekleşme kanıtı değildir." };
const routeDecisions = [
  { slug: "ankara-500km-sakarya-hasanfaki-goleti", evidence: hasanStock, local: sakaryaBan, identity: "Söğütlü/Hasanfakı" },
  { slug: "ankara-500km-kirklareli-evciler-goleti", evidence: evcilerStock, local: kirklareliBan, identity: "Pınarhisar/Evciler" },
  { slug: "ankara-500km-kirklareli-cavuskoy-goleti", evidence: cavuskoyStock, local: kirklareliBan, identity: "Babaeski/Çavuşköy" }
] as const;
export const promoted20261105 = routeDecisions.map(item => item.slug);

export function applyDailyAvlakQuality20261105(routes: Map<string, EnrichedMera>): void {
  for (const item of routeDecisions) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`5 Kasım baseline D değişti: ${item.slug}`);
    const accessRisk = "Göletin genel amatör kullanım bağlamı incelendi; güncel kamusal kıyı girişi ve sulama/özel mülk sınırı doğrulanmadığı için rota HOLD kalır.";
    const specific = item.slug.includes("cavuskoy") ? [item.evidence, cavuskoyList] : [item.evidence];
    const sources = [...new Map([...(old.sources || []), ...specific, item.local, law, amendment].map(source => [source.url, source])).values()];
    routes.set(item.slug, { ...old, confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: ["Sazan"], summary: `${item.evidence.label} bu gölet için tarihsel yavru sazan salımını kaydeder. ${accessRisk}`,
      verification: `5 Kasım 2026 gerçek D→C terfisi: ${item.identity} su kimliği, rota-özel resmî sazan salımı, 6/2 ve ilgili il dönemi incelendi. ${accessRisk}`,
      longIntro: [`${item.evidence.label} gölet için yavru sazan salımını bildirir. Bu geçmiş salım bugünkü yetişkin balık yoğunluğunu veya av başarısını garanti etmez.`, accessRisk],
      cautions: ["Gölet gövdesi, dolusavak, su alma ve sulama tesisinden uzak dur.", "Sazan kapalı dönemi, boy/adet ve takım sınırını güncel 6/2 ve yerel duyurudan doğrula.", accessRisk],
      navigationNote: "Mevcut pin genel su kütlesi referansıdır; izinli kıyı girişi veya atış noktası olarak kullanma.",
      sources,
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "İl Tarım gölete özgü yavru sazan salımı", sourceLabel: item.evidence.label, sourceUrl: item.evidence.url, note: "Güncel yetişkin stok garantisi değildir." }],
      accessEvidence: [{ label: item.evidence.label, value: "Tarihsel balıklandırma ve genel amatör bağlam", sourceUrl: item.evidence.url, note: "Güncel kamusal kıyı girişi henüz doğrulanmadı; HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [item.evidence.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [accessRisk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî ilçe/gölet adı", note: `${item.identity}; mevcut OSM su piniyle eşleşir.` }, species: { level: "partial", label: "Resmî sazan salımı", note: "Güncel stok teyidi yok." }, legal: { level: "strong", label: "6/2 ve il dönemi", note: "Güncel levha değişebilir." }, access: { level: "partial", label: "Kamusal kıyı girişi eksik", note: "Bu yüzden HOLD." }, field: { level: "unverified", label: "Saha teyidi yok", note: "İşletme sınırı kontrol edilmeli." } }
    });
  }
}
