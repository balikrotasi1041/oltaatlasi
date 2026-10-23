import type { EnrichedMera } from "./meralar-tumu-core";

const date = "2026-10-23";
const guideUrl = "https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf";
const parkUrl = "https://icraat.ibb.istanbul/proje-detay/fatih-sarayburnu-parki-duzenlemesi-acilisini-yaptik/56981d6c-f41f-4fb2-92f9-cacb22d7c836";
const lawUrl = "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241";
const amendmentUrl = "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf";

export function applyDailyAvlakQuality20261023(routes: Map<string, EnrichedMera>): void {
  const old = routes.get("sarayburnu-sahili");
  if (!old || old.confidence !== "C" || old.indexing === "hold") {
    throw new Error("Sarayburnu başlangıç C/index durumu değişmiş; 23 Ekim terfisi yeniden incelenmeli.");
  }
  const species = ["İstavrit", "Lüfer", "Palamut"];
  routes.set(old.slug, {
    ...old,
    fish: species,
    qualityGrade: "C+",
    updatedAt: date,
    verification: "23 Ekim 2026 kanıt incelemesi: İBB'nin Sarayburnu adıyla istavrit, lüfer, uskumru ve palamut kaydı; İBB'nin açılmış Sarayburnu Parkı ve kamusal kıyı yürüyüş hattı; yürürlükteki 6/2 ana metin ve 2026/26 değişikliği birlikte değerlendirildi. Tür listesi yalnız kaynakla eşleşen üç türle sınırlandı. Liman/iskele, etkinlik bariyeri ve güvenlik alanları hariçtir; günlük av ve mikro atış yeri garanti edilmez.",
    seasonalNotes: [
      "İBB'nin tarihsel rota kaydında istavrit, lüfer ve palamut yer alır; mevsim, akıntı ve yerel kısıtlar günlük avı değiştirir.",
      "Lüfer ve palamut geçişleri dönemsel olabilir; av gününde 6/2 boy, adet ve yöntem kurallarını yeniden kontrol et."
    ],
    sources: [
      ...old.sources.filter(source => source.url !== guideUrl && source.url !== lawUrl && source.url !== amendmentUrl),
      { label: "İBB Tarım – İstanbul'da Oltayla Balık Tutulan Yerler", url: guideUrl, note: "Rehberin 8. sayfası Sarayburnu'nu ayrı kıyı av yeri olarak adlandırır ve istavrit, lüfer, uskumru, palamutu bildirir; tarihsel tür kaydıdır." },
      { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: lawUrl, note: "2024–2028 dönemi deniz amatör avcılığına ilişkin tür, boy, adet, araç ve yer sınırları." },
      { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendmentUrl, note: "16 Eylül 2026 tarihli yürürlükteki 6/2 değişikliği; ana tebliğle birlikte okunmalı." }
    ],
    fishEvidence: species.map(name => ({
      name,
      scientificName: null,
      evidenceLevel: "İBB'nin Sarayburnu adını verdiği olta yerindeki tarihsel tür kaydı",
      sourceLabel: "İBB Tarım – İstanbul'da Oltayla Balık Tutulan Yerler",
      sourceUrl: guideUrl,
      note: "Rota özelindeki kaynak yer ve türü birlikte verir; bugünkü av başarısı anlamına gelmez."
    })),
    accessEvidence: [
      { label: "İBB – Sarayburnu Parkı düzenlemesi", value: "Kamusal park ve kıyı yürüyüş yolu", sourceUrl: parkUrl, note: "Genel açık kıyı erişimini destekler; iskele/liman, bariyer ve etkinlik ceplerini kapsamaz." },
      { label: "İBB Tarım – Sarayburnu olta yeri", value: "Sarayburnu adıyla kıyıdan olta kullanımı", sourceUrl: guideUrl, note: "Tarihsel yer kanıtıdır; güncel operasyon sınırları ayrıca geçerlidir." }
    ],
    qualityAssessment: {
      model: "expanded-v2",
      reviewedAt: date,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["İBB Sarayburnu rota-özel olta/tür kaydı"],
      localContentVerified: true,
      fieldOrEquivalentVerified: false,
      unresolvedRisks: []
    }
  });

  const additional: Array<{slug: string; fish: string[]; accessUrl: string; accessLabel: string; accessNote: string}> = [
    {
      slug: "tarabya-sahili",
      fish: ["İstavrit", "Mezgit", "Sardalya"],
      accessUrl: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbul-kosu-rotalari",
      accessLabel: "İBB – Tarabya–Rumeli Kavağı kıyı koşu rotası",
      accessNote: "Tarabya kıyısının genel kamusal yaya kullanımı; marina, tekne parkı ve bağlı tekneler hariç."
    },
    {
      slug: "emirgan-sahili",
      fish: ["İstavrit", "Mezgit", "Sardalya"],
      accessUrl: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulun-ask-duraklari",
      accessLabel: "İBB – Emirgan Sahili yürüyüşü (2026)",
      accessNote: "İBB 2026'da Emirgan Sahili'ni Boğaz boyunca kamusal yürüyüş yeri olarak tanımlar; aktif iskele ve tekne alanı hariç."
    }
  ];
  for (const candidate of additional) {
    const previous = routes.get(candidate.slug);
    if (!previous || previous.confidence !== "C" || previous.indexing === "hold") {
      throw new Error(`${candidate.slug}: başlangıç C/index durumu değişmiş; terfi yeniden incelenmeli.`);
    }
    routes.set(candidate.slug, {
      ...previous,
      fish: candidate.fish,
      qualityGrade: "C+",
      updatedAt: date,
      verification: `23 Ekim 2026 kanıt incelemesi: İBB 2017 olta rehberinin 13. sayfası ${previous.name} adıyla istavrit, mezgit ve sardalyayı kaydeder. ${candidate.accessLabel} genel kamusal kıyı kullanımını destekler. 6/2 ana tebliğ ve 2026/26 değişikliği incelendi. Aktif iskele, tekne parkı, bağlı tekneler ve kapalı bölüm dışlanır; mikro atış yerinin açık olduğu veya günlük av garantisi verilmez.`,
      seasonalNotes: [
        "İBB'nin tarihsel rota kaydı istavrit, mezgit ve sardalyayı bildirir; balık varlığı ve kıyı koşulları mevsime göre değişir.",
        "Av gününde 6/2 tür, boy, adet, yöntem ve yer sınırları ile güncel iskele ve kıyı tabelalarını kontrol et."
      ],
      sources: [
        ...previous.sources.filter(source => ![guideUrl, lawUrl, amendmentUrl, candidate.accessUrl].includes(source.url)),
        { label: "İBB Tarım – İstanbul'da Oltayla Balık Tutulan Yerler", url: guideUrl, note: `Rehberin 13. sayfası ${previous.name} adını ve istavrit, mezgit, sardalyayı birlikte bildirir; tarihsel tür kanıtıdır.` },
        { label: candidate.accessLabel, url: candidate.accessUrl, note: candidate.accessNote },
        { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği", url: lawUrl, note: "2024–2028 dönemi deniz amatör avcılığına ilişkin tür, boy, adet, araç ve yer sınırları." },
        { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendmentUrl, note: "16 Eylül 2026 tarihli yürürlükteki 6/2 değişikliği; ana tebliğle birlikte okunmalı." }
      ],
      fishEvidence: candidate.fish.map(name => ({
        name,
        scientificName: null,
        evidenceLevel: "İBB'nin rota adıyla verdiği tarihsel olta/tür kaydı",
        sourceLabel: "İBB Tarım – İstanbul'da Oltayla Balık Tutulan Yerler",
        sourceUrl: guideUrl,
        note: "Rota ve tür birlikte listelenir; güncel av başarısı anlamına gelmez."
      })),
      accessEvidence: [
        { label: candidate.accessLabel, value: "Genel kamusal kuru kıyı yürüyüş hattı", sourceUrl: candidate.accessUrl, note: candidate.accessNote },
        { label: "İBB Tarım – kıyı olta yeri", value: `${previous.name} rota adıyla kıyıdan olta kullanımı`, sourceUrl: guideUrl, note: "Tarihsel olta kaydı; aktif iskele ve marina izin alanı değildir." }
      ],
      qualityAssessment: {
        model: "expanded-v2",
        reviewedAt: date,
        identityVerified: true,
        speciesRouteSpecific: true,
        currentLawResolved: true,
        safePublicAccessVerified: true,
        independentStrongFamilies: [`İBB ${previous.name} rota-özel olta/tür kaydı`],
        localContentVerified: true,
        fieldOrEquivalentVerified: false,
        unresolvedRisks: []
      }
    });
  }
}
