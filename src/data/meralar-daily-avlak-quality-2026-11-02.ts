import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-02";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu dönem, tür, boy, adet ve yöntem sınırları; yerel kararlar ayrıca geçerlidir." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 ile birlikte incelendi." };
const tekirdagReport: ResearchSource = { label: "Tekirdağ İl Tarım – 2025 faaliyet raporu", url: "https://tekirdag.tarimorman.gov.tr/Belgeler/Faaliyet%20Raporlar%C4%B1/2025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf", note: "Karaidemir ve Çokal göllerini sazan avcılığı bağlamında adlandırır; ticari kooperatif hakkı amatör av izni değildir." };
const cokalLease: ResearchSource = { label: "Tekirdağ İl Tarım – Çokal Baraj Gölü kiralama kararı", url: "https://tekirdag.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f231bc2d-a483-49b7-9c96-1ef378bb0796&UrlSuffix=1613%2FCokal-Baraj-Golu-Kiralandi", note: "2023'ten beş yıllık kooperatif kira hakkını ve amatör av için DSİ görüşüyle alan belirleneceğini bildirir; belirlenmiş kıyı kanıtı değildir." };
const sakaryaReport: ResearchSource = { label: "Sakarya İl Tarım – 2025 faaliyet raporu", url: "https://sakarya.tarimorman.gov.tr/Lists/KutuMenu/Attachments/12/2025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf", note: "Sapanca Gölü'ne 2025'te 300 bin pullu sazan yavrusu salımını bildirir; bugünkü yetişkin stok veya kıyı izni değildir." };
const sapancaEnforcement: ResearchSource = { label: "Sakarya İl Tarım – Sapanca Eşme amatör av/kaçak ağ denetimi", url: "https://sakarya.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=162", note: "Sapanca gölünde amatör kıyı avı geçmişi ve sazan kaydı; Eşme Kocaeli kıyısı Sakarya rotasının mikro erişim kanıtı değildir." };

const targets = [
  { slug: "ulusal-tekirdag-karaidemir-baraj-golu", primary: tekirdagReport, extra: [] as ResearchSource[], issue: "Kooperatif ticari istihsal hakkı ile amatör avın güncel ayrılmış kıyısı ve 2026 erişimi doğrulanmadı." },
  { slug: "ankara-500km-tekirdag-cokal-baraj-golu", primary: tekirdagReport, extra: [cokalLease], issue: "2023–2028 kooperatif kirası vardır; DSİ görüşüyle amatör av alanı belirlenmiş mi ve hangi kıyı açık, doğrulanmadı." },
  { slug: "ulusal-sakarya-sapanca-golu-sakarya-kiyisi", primary: sakaryaReport, extra: [sapancaEnforcement], issue: "Resmî balıklandırma göl ölçeğindedir; Sakarya kıyısında güncel izinli mikro alan ve koruma sınırı doğrulanmadı." }
] as const;

export const promoted20261102 = targets.map(item => item.slug);
export function applyDailyAvlakQuality20261102(routes: Map<string, EnrichedMera>): void {
  for (const item of targets) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || (old.qualityGrade && old.qualityGrade !== "D")) throw new Error(`${item.slug}: 2 Kasım baseline D durumu değişti; yeniden incele.`);
    const risk = `${item.issue} Yetkili kurum ve yerel levhalarla izinli kıyı netleşmeden avlanma.`;
    const sources = [item.primary, ...item.extra, law, amendment];
    routes.set(old.slug, {
      ...old, confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date, fish: ["Sazan"],
      summary: `${old.name} için resmî rota/su ölçekli sazan kaydı bulundu; ${risk} Kayıt C/HOLD kalır.`,
      longIntro: [`${item.primary.label} ${old.name} su kimliği ile sazan kaydını destekler. Ticari av veya yavru salımı güncel amatör kıyı hakkı ve av garantisi vermez.`, risk],
      verification: `2 Kasım 2026 gerçek D→C terfisi: ${sources.map(source => source.label).join("; ")}. ${risk} Güncel amatör erişim doğrulanmadığından noindex.`,
      cautions: [...new Set([...(old.cautions || []), "Ticari kira ve sazan balıklandırması amatör erişim veya yetişkin stok garantisi değildir.", risk, "6/2 ve yerel içsu kapalı dönem, boy, adet ve yöntem koşullarını uygula."])],
      navigationNote: `Pin ${old.name} için genel su referansıdır; izinli atış noktası değildir. ${risk}`,
      sources: [...new Map([...(old.sources || []), ...sources].map(source => [source.url, source])).values()],
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "Resmî suya özgü üretim/av geçmişi", sourceLabel: item.primary.label, sourceUrl: item.primary.url, note: "Güncel amatör av veya yetişkin stok garantisi değildir." }],
      accessEvidence: [{ label: item.primary.label, value: item.issue, sourceUrl: item.primary.url, note: "İzinli kıyı doğrulanmadığından HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [item.primary.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [risk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
        identity: { level: "strong", label: item.primary.label, note: "Su adı resmî kayıtta var." },
        species: { level: "partial", label: item.primary.label, note: "Sazan kaydı güncel yetişkin stok garantisi değil." },
        legal: { level: "partial", label: "6/2, 2026/26 ve yerel haklar", note: "Ticari/amatör ayrımı ve kıyı sınırı çözülmedi." },
        access: { level: "partial", label: "Suya ilişkin kayıt", note: `Amatör mikro kıyı doğrulanmadı. ${item.issue}` },
        field: { level: "unverified", label: "Saha teyidi yok", note: "Güncel kıyı, seviye ve levha teyitli değil." } }
    });
  }
}
