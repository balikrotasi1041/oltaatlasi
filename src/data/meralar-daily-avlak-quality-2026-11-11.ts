import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-11";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu dönem, boy, miktar ve kapalı alan hükümleri." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "6/2 ile birlikte incelendi." };
const istanbulStock: ResearchSource = { label: "İstanbul İl Tarım – 27 Ağustos 2026 balıklandırma", url: "https://istanbul.tarimorman.gov.tr/Haber/3144/Istanbulda-Baliklandirma-Calismalari-Suruyor-16-Su-Kaynagina-922-Bin-Sazan-Yavrusu-Birakildi", note: "Sazlıdere ve Darlık Baraj göllerini adıyla 2026 sazan yavrusu salımı listesine alır; yetişkin stok veya av izni değildir." };
const taskisigiStudy: ResearchSource = { label: "Acta Aquatica Turcica – Çaltıcak/Taşkısığı Gölü tür örneklemesi", url: "https://dergipark.org.tr/tr/pub/actaquatr/article/1451579", note: "2021–2022 ticari av örneklerinde Taşkısığı Gölü'nde Esox lucius (turna) ve diğer türleri kaydeder; amatör erişim izni değildir." };
const taskisigiStock: ResearchSource = { label: "IJFAA – Çaltıcak/Taşkısığı Gölü stok çalışması", url: "https://dergipark.org.tr/tr/pub/ijfaa/article/1525379", note: "Aynı gölde 2021–2022 örneklerinden sekiz ticari tür ve stok tahmini; örnek dönemi güncel av garantisi değildir." };
const mergeSources = (old: EnrichedMera, additions: ResearchSource[]) => [...new Map([...(old.sources || []), ...additions].map(source => [source.url, source])).values()];
export const promoted20261111 = ["ulusal-istanbul-sazlidere-baraj-golu", "ulusal-istanbul-darlik-baraj-golu", "ankara-500km-sakarya-taskisigi-golu"];

export function applyDailyAvlakQuality20261111(routes: Map<string, EnrichedMera>): void {
  for (const [slug, title] of [[promoted20261111[0], "Sazlıdere"], [promoted20261111[1], "Darlık"]] as const) {
    const old = routes.get(slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`11 Kasım ${title} D baseline değişti`);
    const risk = "İçme suyu havzasında güncel amatör av izni, koruma kuşağı ve kamusal kıyı girişi doğrulanmadı; HOLD/noindex.";
    routes.set(slug, { ...old, confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date, fish: ["Sazan"],
      summary: `${title} Baraj Gölü, İstanbul İl Tarım'ın 27 Ağustos 2026 yavru sazan bırakılan sular listesinde adıyla yer alır. Salım yetişkin stok veya amatör av izni değildir. ${risk}`,
      verification: `11 Kasım 2026 D→C: ${title} için rota-özel 2026 resmî yavru sazan salımı ve yürürlükteki 6/2 ile 2026/26 incelendi. ${risk}`,
      longIntro: [`İstanbul İl Tarım 2026 balıklandırma duyurusu ${title} Baraj Gölü'nü adıyla sayar ve yavru sazan salımını bildirir. Önceki genel tür listesi bu rota için doğrulanmış sayılmadı; yalnız sazan bırakıldı bilgisi tutuldu.`, "İçme suyu barajı kimliği kamusal olta erişimi anlamına gelmez. Koruma kuşağı, İSKİ/yerel işletme hükümleri ve izinli kıyı doğrulanmadan kullanıcıya av noktası önerilmez; sayfa noindex bekler."],
      cautions: ["İSKİ/yerel işletme koruma kuşağı ve güncel av yasağı doğrulanmadan kıyıda olta açma.", "Baraj gövdesi, su alma, dolusavak ve güvenlik tesislerine yaklaşma.", "Sazan kapalı dönemi ile boy/adet sınırını güncel 6/2'den kontrol et."],
      navigationNote: "Pin baraj su kütlesi referansıdır; izinli olta veya giriş noktası değildir.", sources: mergeSources(old, [istanbulStock, law, amendment]),
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "2026 resmî baraj-özel yavru salımı", sourceLabel: istanbulStock.label, sourceUrl: istanbulStock.url, note: "Bugünkü yetişkin stok veya kıyıdan av garantisi değildir." }],
      accessEvidence: [{ label: istanbulStock.label, value: "Balıklandırılan içme suyu barajı", sourceUrl: istanbulStock.url, note: "Bu kaynak amatör erişimi doğrulamaz; HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: false, safePublicAccessVerified: false, independentStrongFamilies: [istanbulStock.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [risk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: `İl Tarım ${title}`, note: "Baraj kimliği doğrulandı." }, species: { level: "partial", label: "2026 sazan yavrusu", note: "Yetişkin stok kanıtı değil." }, legal: { level: "partial", label: "6/2 ve 2026/26", note: "İSKİ yerel koruma koşulu eksik." }, access: { level: "unverified", label: "İzinli kıyı belirsiz", note: "HOLD." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Kıyı/güvenlik sınırı belirsiz." } }
    });
  }

  const old = routes.get(promoted20261111[2]);
  if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error("11 Kasım Taşkısığı D baseline değişti");
  const risk = "Akademik örneklem ticari balıkçılardan alınmıştır; güncel kira/amatör av hakkı ve kamusal kıyı girişi doğrulanmadı. HOLD/noindex.";
  routes.set(old.slug, { ...old, name: "Taşkısığı (Çaltıcak) Gölü", confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date, fish: ["Turna"],
    summary: `İki 2024 akademik çalışma Taşkısığı/Çaltıcak Gölü'nden 2021–2022 döneminde turna örneklerini kaydeder. ${risk}`,
    verification: `11 Kasım 2026 D→C: Acta Aquatica Turcica ve IJFAA'daki göle özgü örnekleme, 6/2 ve 2026/26 incelendi. Önceki genel sazan/kefal/siraz listesi rota-özel doğrulanmadığından kaldırıldı. ${risk}`,
    longIntro: ["Taşkısığı, akademik yayınlarda Çaltıcak (Taşkısığı) Gölü adıyla geçer. 2021–2022 ticari av örneklerinde Esox lucius yani turna doğrulandı. Bu tarihsel örnekleme güncel kıyı av başarısı değildir.", "Ticari balıkçılık araştırması amatör olta hakkı veya kamusal kıyı erişimi vermez. Gölün işletme/kira statüsü ve izinli giriş doğrulanana kadar rota HOLD kalır."],
    cautions: ["İzinli amatör av ve kamusal kıyı girişi yetkili kurumdan doğrulanmadan olta açma.", "Turna için yürürlükteki kapalı dönem, boy ve adet kurallarını kontrol et.", "Sazlık/batak kıyı ve ticari ağ faaliyetinden uzak dur."],
    navigationNote: "Pin göl merkezi genel referansıdır; izinli kamusal giriş noktası değildir.", sources: mergeSources(old, [taskisigiStudy, taskisigiStock, law, amendment]),
    fishEvidence: [{ name: "Turna", scientificName: "Esox lucius", evidenceLevel: "2021–2022 göle özgü akademik ticari av örnekleri", sourceLabel: taskisigiStudy.label, sourceUrl: taskisigiStudy.url, note: "Bugünkü stok/amatör av izni garantisi değildir." }],
    accessEvidence: [{ label: taskisigiStudy.label, value: "Ticari balıkçı örneklemesi", sourceUrl: taskisigiStudy.url, note: "Kamusal/amatör erişim kanıtı değil; HOLD." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: false, safePublicAccessVerified: false, independentStrongFamilies: [taskisigiStudy.url, taskisigiStock.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [risk] },
    confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Akademik Çaltıcak/Taşkısığı", note: "Aynı göl." }, species: { level: "strong", label: "Esox lucius örneklemesi", note: "2021–2022 ticari örnek." }, legal: { level: "partial", label: "6/2 ve 2026/26", note: "Yerel kira/amatör alan koşulu eksik." }, access: { level: "partial", label: "Ticari balıkçı örneklemesi", note: "Bu, kamusal amatör kıyı erişimi değildir; HOLD." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Sazlık ve işletme sınırı." } }
  });
}
