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
}
