import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-31";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu tür, sezon, boy, adet, yöntem ve yasak yer kuralları; yerel kararlar ayrıca uygulanır." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "16 Eylül 2026 değişikliği ana 6/2 metniyle birlikte incelendi." };
const ortaburunStock: ResearchSource = { label: "Yalova İl Tarım – Ortaburun'a sazan salımı", url: "https://yalova.tarimorman.gov.tr/Haber/947/100-Bin-Adet-Sazan-Baligi-Goletlere-Birakildi", note: "2024'te Ortaburun Göleti'ne 40 bin sazan yavrusu salımını adlandırır; yetişkin stok veya av garantisi değildir." };
const ortaburunWater: ResearchSource = { label: "Yalova 2024 İl Çevre Durum Raporu", url: "https://webdosya.csb.gov.tr/db/ced/icerikler/yalova-2024-icdr-20251008082821.pdf", note: "Ortaburun'un sulama amaçlı baraj/gölet su kimliğini doğrular; amatör av izni değildir." };
const ortaburunIntake: ResearchSource = { label: "Çınarcık su alma duyurusu", url: "https://www.yalovagazetesi.com/cinarcik-belediyesinden-su-duyurusu", note: "Su alma kullanımı bildirir; işletme yapısı ve yaklaşım sınırı güncel teyit gerektirir." };
const kazakPark: ResearchSource = { label: "Türkiye Kültür Portalı – Kapaklı Kazak Gölü", url: "https://www.kulturportali.gov.tr/turkiye/tekirdag/gezilecekyer/kapakli-kazak-golu", note: "Su/mesire kimliği ve kamusal ziyaret bağlamı; olta izni değildir." };
const kazakMunicipal: ResearchSource = { label: "Kapaklı Belediyesi – Kazak Gölü mesire alanı 2026", url: "https://www.kapakli.bel.tr/guncel/haberler/baskan-cetin-ustyapi-calismalari-ve-kazak-golu-mesire-alaninda-incelemelerde-bulundu", note: "Belediye bakımındaki kamusal mesire alanını doğrular; kıyıdan av izni vermez." };
const kazakStock: ResearchSource = { label: "Kapaklı Belediyesi sazan balıklandırma haberi", url: "https://www.kapakligazetesi.com.tr/kapakli-belediyesinden-sazan-yatirimi", note: "Kazak Gölü'ne tarihsel sazan yavrusu salımını aktarır; bugünkü yetişkin stok kanıtı değildir." };
const hanogluReport: ResearchSource = { label: "Tekirdağ İl Tarım 2025 faaliyet raporu", url: "https://tekirdag.tarimorman.gov.tr/Belgeler/Faaliyet%20Raporlar%C4%B1/2025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf", note: "Hanoğlu Göleti sazan yetiştiriciliği kira sözleşmesinin 2025'te bittiğini ve yenilenmediğini kaydeder; 2026 güncel hak durumunu kanıtlamaz." };
const hanogluHistory: ResearchSource = { label: "Tekirdağ İl Tarım 2017 tarım raporu", url: "https://tekirdag.tarimorman.gov.tr/Belgeler/TarimRaporlari/GTHB59_2017.pdf", note: "Hanoğlu Göleti'nde sazan üretim geçmişini rota adıyla kaydeder." };
const hanogluFestival: ResearchSource = { label: "Hanoğlu Göleti amatör olta festivali", url: "https://www.babaeskisozgazetesi.com/balik-yakalama-festivali-basliyor/27868", note: "Tarihsel olta etkinliğini bildirir; güncel kıyı izni veya stok garantisi değildir." };

const targets = [
  { slug: "ankara-500km-yalova-ortaburun-baraji", fish: "Sazan", primary: ortaburunStock, support: [ortaburunWater, ortaburunIntake], issue: "Sulama ve su alma yapısı çevresindeki 2026 kıyı/av erişimi doğrulanmadı." },
  { slug: "ankara-500km-tekirdag-kazak-golu", fish: "Sazan", primary: kazakStock, support: [kazakPark, kazakMunicipal], issue: "Kamusal mesire erişimi amatör olta izni değildir; izinli kıyı ve güncel yetişkin stok doğrulanmadı." },
  { slug: "ankara-500km-tekirdag-hanoglu-goleti", fish: "Sazan", primary: hanogluReport, support: [hanogluHistory, hanogluFestival], issue: "2025 kira bitişi 2026 av iznini kanıtlamaz; güncel kiralama, kıyı hakkı ve stok belirsiz." }
] as const;

export const promoted20261031 = targets.map((item) => item.slug);

export function applyDailyAvlakQuality20261031(routes: Map<string, EnrichedMera>): void {
  for (const item of targets) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`${item.slug}: 31 Ekim baseline D durumu değişti; terfi yeniden incelenmeli.`);
    const risk = `${item.issue} İzinli ve güvenli kıyı yerinde veya yetkili idarece netleşmeden avlanma.`;
    const sources = [item.primary, ...item.support, law, amendment];
    routes.set(old.slug, {
      ...old,
      confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: [item.fish],
      summary: `${old.name} için rota-özel tarihsel ${item.fish.toLocaleLowerCase("tr-TR")} kaydı bulundu. ${risk} Bu nedenle kayıt C/HOLD olarak kalır.`,
      longIntro: [`${old.name} için ${item.primary.label} ile suya özgü ${item.fish.toLocaleLowerCase("tr-TR")} kaydı doğrulandı. Tarihsel üretim veya yavru salımı bugün yetişkin balık yakalanacağını göstermez.`, `${item.support.map((source) => source.label).join(" ve ")} ile kimlik/ziyaret bağlamı incelendi. ${risk}`],
      verification: `31 Ekim 2026 gerçek D→C terfisi: ${sources.map((source) => source.label).join("; ")}. ${risk} Güncel kamusal amatör av kıyısı doğrulanmadığından noindex.`,
      cautions: [...new Set([...(old.cautions || []), "Tarihsel sazan üretimi veya yavru salımı güncel av garantisi değildir.", risk, "6/2 ve yerel içsu sezonu, boy, adet, yöntem, su yapısı ve levha sınırlarını uygula."])],
      navigationNote: `Pin ${old.name} su gövdesinin genel referansıdır; izinli atış noktası değildir. ${risk}`,
      sources: [...new Map([...(old.sources || []), ...sources].map((source) => [source.url, source])).values()],
      fishEvidence: [{ name: item.fish, scientificName: "Cyprinus carpio", evidenceLevel: "Rota-özel tarihsel resmî/kurumsal sazan kaydı", sourceLabel: item.primary.label, sourceUrl: item.primary.url, note: "Bugünkü yetişkin stok veya av garantisi değildir." }],
      accessEvidence: [{ label: item.support[0].label, value: item.issue, sourceUrl: item.support[0].url, note: "İzinli mikro kıyı kanıtlanmadığı için HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [item.primary.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [risk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date,
        identity: { level: "strong", label: item.support[0].label, note: "Su/yer kimliği rota adıyla incelendi." },
        species: { level: "partial", label: item.primary.label, note: "Tarihsel sazan kaydı; bugünkü popülasyon kanıtı değil." },
        legal: { level: "partial", label: "6/2, 2026/26 ve yerel karar kontrolü", note: "Güncel suya özgü izin/kira ve levha sınırı açık değil." },
        access: { level: "partial", label: "Genel su/ziyaret bağlamı", note: `İzinli amatör kıyı doğrulanmadı. ${item.issue}` },
        field: { level: "unverified", label: "Saha teyidi yok", note: "Bugünkü su seviyesi, işletme sınırı ve av erişimi teyitli değil." } }
    });
  }
}
