import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-04";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "Güncel içsu/deniz av dönemi, tür, boy, adet ve yöntem sınırları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "6/2 ile birlikte incelendi." };
const stocking2023: ResearchSource = { label: "Sakarya İl Tarım – 2023 Sekiharman sazan balıklandırması", url: "https://sakarya.tarimorman.gov.tr/Haber/274/Ilimiz-Goletlerinde-Baliklandirma-Calismalari", note: "Sekiharman Göleti'ni sazan balıklandırması ve yalnız amatör kullanım grubunda sayar; 2023 duyurusundaki gelecek zaman fiili tek başına gerçekleşme kanıtı değildir." };
const stocking2022: ResearchSource = { label: "Sakarya İl Tarım – 2022 Sekiharman sazan salımı", url: "https://sakarya.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=237", note: "Sekiharman Göleti'ne yavru sazan bırakıldığını bildirir." };
const stocking2014: ResearchSource = { label: "Sakarya İl Tarım – 2014 Hüseyinli ve Sekiharman sazan salımı", url: "https://sakarya.tarimorman.gov.tr/Haber/20/Baliklandirma-Faaliyetleri-Devam-Etmektedir", note: "İki gölete yavru sazan bırakıldığını ve grubun yalnız amatör avcılığa açık olduğunu açıkça bildirir; güncel stok garantisi değildir." };
const stocking2020: ResearchSource = { label: "Sakarya İl Tarım – 2020 Hüseyinli sazan salımı", url: "https://sakarya.tarimorman.gov.tr/Haber/176/2020-Yili-Baliklandirma-Calismasi", note: "Hüseyinli Göleti'ne yavru sazan bırakıldığını bildirir." };
const localBan: ResearchSource = { label: "Sakarya İl Tarım – 2026 içsu kapalı dönem duyurusu", url: "https://sakarya.tarimorman.gov.tr/Haber/326/Ic-Sularda-Av-Yasagi-Basliyor-_15-Mart-15-Haziran-2026_", note: "Sazan için 15 Mart–15 Haziran 2026 kapalı dönemini açıklar; sonraki yıl güncel ilan yeniden kontrol edilir." };
const hosFish: ResearchSource = { label: "Şarköy Kaymakamlığı – Hoşköy barınağı ve ilçe türleri", url: "https://www.sarkoy.gov.tr/ruzgar-sorfu", note: "Hoşköy'ü ayrı kıyı/barınak olarak ve Şarköy ilçe av türlerini listeler; barınak içi olta izni değildir." };
const hosKtb: ResearchSource = { label: "Tekirdağ İl Kültür – Şarköy kıyı sportif olta", url: "https://tekirdag.ktb.gov.tr/TR-75792/sportif-olta-balikciligi.html", note: "Şarköy kıyı şeridi için istavrit, kefal ve karagöz; ilçe ölçeğinde." };
const hosStudy: ResearchSource = { label: "KMÜ – Şarköy kıyı faaliyet çalışması", url: "https://dergi.kmu.edu.tr/userfiles/file/haziran2012/53-60.pdf", note: "Şarköy kıyısında sportif oltayı inceler, Hoşköy'ü ayrı yerleşim olarak listeler." };
const unique = (route: EnrichedMera, sources: ResearchSource[]) => [...new Map([...(route.sources || []), ...sources].map(s => [s.url, s])).values()];
export const promoted20261104 = ["ankara-500km-sakarya-sekiharman-goleti", "ankara-500km-sakarya-huseyinli-goleti", "hoskoy-kamusal-kiyi"];
export const released20261104 = ["ankara-500km-sakarya-okcular-goleti", "sarkoy-merkez-sahili"];

export function applyDailyAvlakQuality20261104(routes: Map<string, EnrichedMera>): void {
  for (const [slug, specificSources] of [
    [promoted20261104[0], [stocking2022, stocking2023, stocking2014]],
    [promoted20261104[1], [stocking2014, stocking2020]]
  ] as const) {
    const old = routes.get(slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`4 Kasım baseline D değişti: ${slug}`);
    const accessRisk = "Suya genel amatör avcılık duyurulmuş olsa da güncel kamusal kıyı girişi ve işletme/özel mülk sınırı doğrulanmadı; rota HOLD kalır.";
    routes.set(slug, { ...old, confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: ["Sazan"], summary: `İl Tarım ${old.name} için suya özgü sazan salımını belgeliyor. ${accessRisk}`,
      verification: `4 Kasım 2026 gerçek D→C terfisi: resmî suya özgü sazan salımı, 6/2, 2026/26 ve Sakarya 2026 içsu dönemi incelendi. ${accessRisk}`,
      longIntro: [`Sakarya İl Tarım ${old.name} için yavru sazan salımını adıyla bildirir. Bu tarihsel salım bugünkü yetişkin stok veya av başarısı garantisi değildir.`, accessRisk],
      cautions: ["Su alma yapısı, işletme tesisi ve yasak levhası olan kıyıdan uzak dur.", "Sazan kapalı dönemi, boy/adet ve takım sınırını güncel 6/2 ve yerel duyurudan doğrula.", accessRisk],
      navigationNote: "Mevcut pin su kütlesi referansıdır; izinli kıyı girişi veya atış noktası olarak kullanma.",
      sources: unique(old, [...specificSources, localBan, law, amendment]),
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "İl Tarım gölete özgü yavru sazan salımı", sourceLabel: specificSources[0].label, sourceUrl: specificSources[0].url, note: "Bugünkü yetişkin stok garantisi değildir." }],
      accessEvidence: [{ label: specificSources[0].label, value: "Genel amatör balıkçılık bağlamı", sourceUrl: specificSources[0].url, note: "Güncel kamusal kıyı girişi doğrulanmadı; HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: specificSources.map(s => s.url), localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [accessRisk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî gölet adı", note: "Mevcut OSM su piniyle eşleşir." }, species: { level: "partial", label: "Resmî sazan salımı", note: "Güncel stok teyidi yok." }, legal: { level: "strong", label: "6/2 ve 2026 duyurusu", note: "Yerel levha güncellenebilir." }, access: { level: "partial", label: "Genel amatör kullanım; kıyı girişi eksik", note: "Bu yüzden HOLD." }, field: { level: "unverified", label: "Saha teyidi yok", note: "İşletme sınırı kontrol edilmeli." } }
    });
  }

  const hos = routes.get(promoted20261104[2]);
  if (!hos || hos.confidence !== "C" || hos.qualityGrade) throw new Error("Hoşköy 4 Kasım baseline C değişti.");
  routes.set(hos.slug, { ...hos, qualityGrade: "C+", updatedAt: date, researchedAt: date,
    fish: ["İstavrit", "Kefal", "Levrek"],
    summary: "Kaymakamlık Hoşköy'ü ayrı kıyı/barınak olarak ve Şarköy türlerini; İl Kültür Şarköy kıyısında sportif oltayı doğrular. Liman, iskele ve işaretli yüzme sahası dışındaki kamusal kıyı değerlendirilir.",
    verification: "4 Kasım 2026 gerçek C→C+ terfisi: Kaymakamlık Hoşköy su kimliği/ilçe türleri, İl Kültür sportif olta/tür ve akademik kıyı incelemesi; 6/2 ve 2026/26. Barınak operasyon alanı dışlanır.",
    longIntro: ["Şarköy Kaymakamlığı Hoşköy'de ayrı bir balıkçı barınağı bulunduğunu ve ilçe kıyısında istavrit, kefal ve levrek avlandığını bildirir. İl Kültür kıyı şeridinin sportif oltaya uygunluğunu açıklar.", "Bu ilçe ölçeğindeki tür bilgisi Hoşköy'ün her kıyı cebinde yakalama garantisi değildir. Barınak/iskele ve işaretli yüzme sahası av alanı olarak gösterilmez."],
    cautions: [...new Set([...(hos.cautions || []), "Balıkçı barınağı ve iskele operasyon alanında olta açma.", "1 Nisan–15 Kasım işaretli yüzme sahasında olta açma."])],
    sources: unique(hos, [hosFish, hosKtb, hosStudy, law, amendment]),
    fishEvidence: ["İstavrit", "Kefal", "Levrek"].map(name => ({ name, evidenceLevel: "Kaymakamlık Şarköy ilçe kıyısı tür kaydı", sourceLabel: hosFish.label, sourceUrl: hosFish.url, note: "Hoşköy mikro kıyısı için stok garantisi değil." })),
    accessEvidence: [{ label: hosKtb.label, value: "Şarköy kıyısında sportif olta", sourceUrl: hosKtb.url, note: "Hoşköy barınak, iskele ve işaretli yüzme sahası hariç." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [hosFish.url, hosKtb.url, hosStudy.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] }
  });

  for (const slug of released20261104) {
    const old = routes.get(slug);
    if (!old || old.indexing !== "hold" || old.qualityGrade !== "C+" || old.confidence === "D") throw new Error(`4 Kasım önceki C+/HOLD salımı baseline değişti: ${slug}`);
    routes.set(slug, { ...old, indexing: "index", updatedAt: date, researchedAt: date,
      verification: `${old.verification} 4 Kasım 2026: önceki C+/HOLD çekirdek kimlik, tür, 6/2, kamusal erişim ve teknik indeks koşulları yeniden incelendi; bugünkü ortak indeks kotasından salındı.`,
      qualityAssessment: old.qualityAssessment ? { ...old.qualityAssessment, reviewedAt: date } : undefined
    });
  }
}
