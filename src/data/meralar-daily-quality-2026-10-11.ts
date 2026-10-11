import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const reviewedAt = "2026-10-11";
const slug = "bilecik-kucukelmali-baraj-goleti";
const dkmp: ResearchSource = {
  label: "DKMP EkoTaban – Küçükelmalı Tabiat Parkı, sportif olta balıkçılığı",
  url: "https://ekotaban.tarimorman.gov.tr/alan/344",
  note: "Bakanlığın tabiat parkı kaydı, Küçükelmalı Göleti'ni parkın içinde gösterir ve gölet kıyısında sportif olta balıkçılığını izin verilen faaliyetler arasında açıkça sayar. Güncel tesis koşulları, giriş/yer kullanım ücretleri, levhalar ve 6/2 Tebliğ ayrıca uygulanır."
};

export function applyDailyuality20261011(routeMap: Map<string, EnrichedMera>) {
  const previous = routeMap.get(slug);
  if (!previous) throw new Error(`11 Ekim hedefi bulunamadı: ${slug}`);
  if (previous.confidence !== "C" || previous.qualityGrade !== "C" || previous.indexing !== "hold") {
    throw new Error(`11 Ekim eligibility gate: ${slug} C/HOLD başlangıcında değil.`);
  }
  const stocking = previous.sources.find(source => /2018 balıklandırma/i.test(source.label));
  if (!stocking || !previous.fishEvidence?.some(e => e.name === "Sazan" && e.sourceUrl === stocking.url)) {
    throw new Error(`11 Ekim rota-özel sazan kanıtı eksik: ${slug}`);
  }
  const sources = [...new Map([...previous.sources, dkmp].map(source => [source.url, source])).values()];
  const permittedActivityNote = "DKMP resmî Küçükelmalı Tabiat Parkı sayfası, gölet kıyısında sportif olta balıkçılığını açıkça tanımlar; yalnızca alanın izin verilen kullanım bölümleri ve işletme kuralları içinde planlanmalıdır.";
  routeMap.set(slug, {
    ...previous,
    confidence: "C",
    qualityGrade: "C+",
    indexing: "index",
    researchedAt: reviewedAt,
    updatedAt: reviewedAt,
    researchStatus: "Genişletilmiş kalite standardı: C+ / INDEX; saha ve işletme levhası teyidi ayrıca gerekli",
    summary: "Küçükelmalı Göleti, DKMP'nin sportif olta faaliyeti kaydı, İl Tarım'ın rota-özel sazan balıklandırması ve yürürlükteki kurallar birleştirilerek C+ düzeyinde doğrulanan tabiat parkı rotasıdır.",
    longIntro: [
      permittedActivityNote,
      "2018 İl Tarım balıklandırma kaydındaki sazan bilgisi stoklama geçmişini gösterir, mevcut popülasyon veya av garantisi değildir. Bakanlık listesi her noktada olta kullanımını, giriş hakkını veya ücretsiz kullanımı garanti etmez.",
      ...(previous.longIntro || []).map(p => p.replaceAll("C/HOLD araştırma dosyası", "kaynaklı araştırma dosyası").replaceAll("Güven C/HOLD düzeyindedir", "Güven C+ düzeyindedir"))
    ],
    cautions: [...new Set([...(previous.cautions || []), "Tabiat parkında işletme/giriş koşullarını, avlanılabilecek bölümü ve saha levhalarını girişte kontrol edin; diğer ziyaretçilerle ortak kıyı güvenliğini gözetin."])],
    verification: "11 Ekim 2026: DKMP EkoTaban kaydında gölet kıyısında sportif olta kullanımı açıkça belirtiliyor; 2018 İl Tarım rota-özel sazan balıklandırması ve 6/2 Tebliğ güncel değişiklikleri çaprazlandı. Günlük giriş, ücret ve saha kısıtları ayrıca kontrol edilmelidir.",
    accessEvidence: [
      ...previous.accessEvidence,
      {label: dkmp.label, value: "Kamusal tabiat parkı içinde sportif olta faaliyeti resmen tanımlanmış", sourceUrl: dkmp.url, note: dkmp.note}
    ],
    sources,
    qualityAssessment: {
      model: "expanded-v2",
      reviewedAt,
      identityVerified: true,
      speciesRouteSpecific: true,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["DKMP", "Bilecik İl Tarım", "Bilecik Valiliği"],
      localContentVerified: true,
      fieldOrEquivalentVerified: false,
      unresolvedRisks: []
    },
    confidenceProfile: {
      model: "evidence-v1",
      overall: "C",
      reviewedAt,
      identity: {level: "strong", label: "DKMP tarafından doğrulanan tabiat parkı", note: "Resmî DKMP kaydı göleti ve parkı aynı alanda gösterir."},
      species: {level: "strong", label: "Rota-özel sazan balıklandırması", note: "2018 İl Tarım kaydı tarihsel stoklamadır; av garantisi oluşturmaz."},
      legal: {level: "strong", label: "DKMP sportif olta kullanım kaydı ve 6/2 mevzuat", note: "Faaliyet resmî olarak kayıtlıdır; tabiat parkı işletme ve yer kullanım koşulları ayrıca geçerlidir."},
      access: {level: "strong", label: "Kamusal tabiat parkı", note: "DKMP giriş kontrollü rekreasyon alanı belirtir; mikro konum ve saha levhaları hareket günü kontrol edilmelidir."},
      field: {level: "unverified", label: "Güncel saha teyidi yok", note: "İşletme koşulları, yoğun ziyaretçi kullanımı ve balık tutulabilecek kesimler girişte teyit edilmelidir."}
    }
  } as EnrichedMera);
}
