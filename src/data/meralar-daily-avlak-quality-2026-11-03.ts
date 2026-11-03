import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-03";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu/deniz dönem, tür, boy, adet ve yöntem sınırları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "Güncel 6/2 ile birlikte incelendi." };
const okcularSpecies: ResearchSource = { label: "Bolu İl Tarım – Okçular yetişkin sazan salımı", url: "https://bolu.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1249", note: "Okçular (Reisler) Göleti'ne 2022'de 1000 adet 15–20 cm sazan bırakıldı; bugünkü stok garantisi değil." };
const okcularAccess: ResearchSource = { label: "Kaynarca Kaymakamlığı – Reisler Okçular Gölü", url: "https://www.kaynarca.gov.tr/kaynarca-goleti", note: "Mesire alanı ve balık tutmayı bildirir; güncel kıyı ve işletme sınırı kontrol edilir." };
const okcularAcademic: ResearchSource = { label: "Sakarya Üniversitesi – Kaynarca coğrafi etüdü", url: "https://acikerisim.sakarya.edu.tr/bitstream/handle/20.500.12619/93333/T03647.pdf?isAllowed=y&sequence=1", note: "Reisler-Okçular su kimliği, sazan salımı ve amatör balıkçılık kullanımını kaydeder; tarihsel." };
const poyrazSpecies: ResearchSource = { label: "Sakarya Valiliği – Poyrazlar Gölü", url: "https://www.sakarya.gov.tr/poyrazlar-golu", note: "Göl kimliği ve sazan, turna, yayın kaydı; günübirlik ziyaret." };
const poyrazPark: ResearchSource = { label: "DKMP – Poyrazlar Tabiat Parkı", url: "https://ekotaban.tarimorman.gov.tr/alan/412", note: "Günlük park erişimi ve balık türleri; olta izni açıkça sayılmıyor." };
const poyrazProtected: ResearchSource = { label: "Sakarya ÇŞİD – Poyrazlar nitelikli doğal koruma alanı", url: "https://sakarya.csb.gov.tr/poyrazlar-golu-dogal-sit-nitelikli-dogal-koruma-alani-tescili-duyuru-474105", note: "Koruma statüsü; izinli olta kıyısı ayrıca teyit edilmeli." };
const sarkoyFish: ResearchSource = { label: "Tekirdağ İl Kültür – Şarköy sportif olta ve türler", url: "https://tekirdag.ktb.gov.tr/TR-75792/sportif-olta-balikciligi.html", note: "Şarköy kıyı şeridinde istavrit, kefal, karagöz dahil türler ve sportif olta." };
const sarkoyAcademic: ResearchSource = { label: "KMÜ – Şarköy kıyısı sportif olta çalışması", url: "https://dergi.kmu.edu.tr/userfiles/file/haziran2012/53-60.pdf", note: "Şarköy kıyısında sportif olta ve türleri tarihsel akademik bağlamda kaydeder." };

const appendSources = (old: EnrichedMera, extra: ResearchSource[]) => [...new Map([...(old.sources || []), ...extra].map(source => [source.url, source])).values()];
export const promoted20261103 = ["ankara-500km-sakarya-okcular-goleti", "ulusal-sakarya-poyrazlar-golu", "sarkoy-merkez-sahili"];

export function applyDailyAvlakQuality20261103(routes: Map<string, EnrichedMera>): void {
  const okcular = routes.get(promoted20261103[0]);
  if (!okcular || okcular.confidence !== "D" || okcular.qualityGrade) throw new Error("Okçular 3 Kasım baseline D değişti.");
  routes.set(okcular.slug, { ...okcular, confidence: "C", qualityGrade: "C+", indexing: "hold", updatedAt: date, researchedAt: date, fish: ["Sazan"],
    summary: "Okçular (Reisler) Göleti'nde resmî yetişkin sazan salımı ve Kaymakamlığın kamusal mesire/balık tutma kaydı vardır. Gölet güncel 6/2 ile C+ düzeyinde doğrulandı; günlük indeks kotası nedeniyle noindex bekler.",
    verification: "3 Kasım 2026 gerçek D→C+ terfisi: Bolu İl Tarım yetişkin sazan salımı, Kaynarca Kaymakamlığı olta erişimi, Sakarya Üniversitesi su kimliği; 6/2 ve 2026/26 incelendi. Günlük ortak indeks kotası yeni sayfalara ayrıldı.",
    longIntro: ["Bolu İl Tarım 2022'de Okçular (Reisler) Göleti'ne 15–20 cm sazan bırakıldığını kaydeder. Kaynarca Kaymakamlığı göleti balık tutulabilen mesire alanı olarak tanıtır.", "Sakarya Üniversitesi çalışması su kimliğini ve amatör kullanım geçmişini doğrular. Güncel av günü, mesire işletmesi ve levhalı kıyı kısıtları ayrıca kontrol edilir."],
    cautions: ["İşletme iskelesi, su alma yapısı ve yasak levhası olan kesimde avlanma.", "6/2 içsu kapalı dönem, boy ve adet kurallarına uy.", "Mesire kalabalığında güvenli atış mümkün değilse olta açma."],
    navigationNote: "Mevcut pin gölet genel konumudur; mesire giriş ve güncel izinli atış cebi yerinde seçilir.",
    sources: appendSources(okcular, [okcularSpecies, okcularAccess, okcularAcademic, law, amendment]),
    fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "Resmî Okçular yetişkin sazan salımı", sourceLabel: okcularSpecies.label, sourceUrl: okcularSpecies.url, note: "Bugünkü stok garantisi değil." }],
    accessEvidence: [{ label: okcularAccess.label, value: "Kamusal mesire alanında balık tutulabilir", sourceUrl: okcularAccess.url, note: "Güncel levha ve işletme koşulları ayrıca kontrol edilir." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [okcularSpecies.url, okcularAccess.url, okcularAcademic.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
    confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî Okçular/Reisler kaydı", note: "Su kimliği doğrulandı." }, species: { level: "strong", label: "İl Tarım yetişkin sazan", note: "2022 salımı güncel stok garantisi değil." }, legal: { level: "strong", label: "6/2 ve 2026/26", note: "Yerel levha uygulanır." }, access: { level: "partial", label: "Kaymakamlık mesire/olta", note: "Mikro kıyı yerinde kontrol edilir." }, field: { level: "unverified", label: "Saha teyidi yok", note: "İşletme ve su seviyesi değişebilir." } }
  });

  const poyraz = routes.get(promoted20261103[1]);
  if (!poyraz || poyraz.confidence !== "D" || poyraz.qualityGrade) throw new Error("Poyrazlar 3 Kasım baseline D değişti.");
  const poyrazRisk = "2024 nitelikli doğal koruma alanında güncel izinli olta kıyısı ve işletme koşulu doğrulanmadı; yetkili kuruma ve yerel levhaya bakmadan avlanma.";
  routes.set(poyraz.slug, { ...poyraz, confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date, fish: ["Sazan", "Turna", "Yayın"],
    summary: `Valilik ve DKMP Poyrazlar Gölü'nün türlerini ve ziyaret bağlamını doğrular. ${poyrazRisk} Kayıt C/HOLD kalır.`,
    verification: `3 Kasım 2026 gerçek D→C terfisi: Valilik göl/tür, DKMP park kaydı, ÇŞİD koruma statüsü, 6/2 ve 2026/26. ${poyrazRisk}`,
    longIntro: ["Sakarya Valiliği Poyrazlar Gölü'nde sazan, turna ve yayın bulunduğunu; DKMP günübirlik park erişimini bildirir.", poyrazRisk],
    cautions: [...new Set([...(poyraz.cautions || []), poyrazRisk, "Sazlık, kuş alanı ve iskelelerde güvenli atış yoksa avlanma."])],
    sources: appendSources(poyraz, [poyrazSpecies, poyrazPark, poyrazProtected, law, amendment]),
    fishEvidence: ["Sazan", "Turna", "Yayın"].map(name => ({ name, evidenceLevel: "Valilik göle özgü tür kaydı", sourceLabel: poyrazSpecies.label, sourceUrl: poyrazSpecies.url, note: "Av izni veya bugünkü yakalama garantisi değil." })),
    accessEvidence: [{ label: poyrazPark.label, value: "Günübirlik park erişimi", sourceUrl: poyrazPark.url, note: "Olta kıyısı izni belirsiz; HOLD." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [poyrazSpecies.url, poyrazPark.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [poyrazRisk] },
    confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Valilik Poyrazlar", note: "Göl kimliği." }, species: { level: "strong", label: "Valilik ve DKMP türleri", note: "Suya özgü." }, legal: { level: "partial", label: "6/2 ve koruma statüsü", note: "Olta kıyısı teyit bekliyor." }, access: { level: "partial", label: "DKMP günübirlik park", note: "Park erişimi av izni değil." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Koruma levhası doğrulanmalı." } }
  });

  const sarkoy = routes.get(promoted20261103[2]);
  if (!sarkoy || sarkoy.confidence !== "C" || sarkoy.qualityGrade) throw new Error("Şarköy 3 Kasım baseline C değişti.");
  routes.set(sarkoy.slug, { ...sarkoy, qualityGrade: "C+", indexing: "hold", updatedAt: date, researchedAt: date, fish: ["İstavrit", "Kefal", "Karagöz"],
    summary: "İl Kültür'ün doğrudan Şarköy kıyısında sportif olta ve tür kaydı, akademik kıyı çalışması ve güncel 6/2 ile C+ düzeyine çıktı. Plaj ve iskele dışı açık kıyı kullanılmalı; günlük indeks kotası nedeniyle noindex bekler.",
    verification: "3 Kasım 2026 gerçek C→C+ terfisi: İl Kültür Şarköy kıyı şeridinde sportif olta/tür kaydı, KMÜ akademik kıyı çalışması, 6/2 ve 2026/26. Plaj, iskele ve liman dışlanır.",
    longIntro: ["Tekirdağ İl Kültür Şarköy kıyı şeridinde sportif olta ve istavrit, kefal, karagöz kaydeder; akademik çalışma Şarköy kıyısı etkinliğini ayrıca ele alır.", "Bu ilçe ölçekli kanıt her metre kıyının açık olduğu anlamına gelmez. İşaretli yüzme, liman ve iskele dışında güvenli kamusal kıyı yerinde seçilir."],
    cautions: [...new Set([...(sarkoy.cautions || []), "1 Nisan–15 Kasım işaretli yüzme sahasında olta açma.", "Liman, iskele ve bağlı tekne operasyon alanına girme."])],
    sources: appendSources(sarkoy, [sarkoyFish, sarkoyAcademic, law, amendment]),
    fishEvidence: ["İstavrit", "Kefal", "Karagöz"].map(name => ({ name, evidenceLevel: "Resmî Şarköy kıyı şeridi tür kaydı", sourceLabel: sarkoyFish.label, sourceUrl: sarkoyFish.url, note: "İlçe ölçeği; mikro nokta garantisi değil." })),
    accessEvidence: [{ label: sarkoyFish.label, value: "Şarköy kıyısında sportif olta", sourceUrl: sarkoyFish.url, note: "Plaj, liman ve iskele dışındaki güvenli açık kıyı; güncel levha kontrol edilir." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [sarkoyFish.url, sarkoyAcademic.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
    confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Şarköy kıyı şeridi", note: "Merkez, Hoşköy ve Mürefte farklı yerleşim kıyıları." }, species: { level: "partial", label: "İl Kültür tür kaydı", note: "İlçe kıyısı ölçeğinde." }, legal: { level: "strong", label: "6/2 ve 2026/26", note: "Yüzme/liman dışı." }, access: { level: "partial", label: "Sportif olta kıyısı", note: "Mikro nokta levha ile seçilir." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Güncel plaj ve liman sınırı yerinde." } }
  });
}
