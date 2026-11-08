import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-11-08";
const law: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513", note: "İçsu tür, boy, adet, dönem ve yöntem kuralları." };
const amendment: ResearchSource = { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf", note: "Ana 6/2 metniyle birlikte incelendi." };
const sakaryaLaw: ResearchSource = { label: "Sakarya İl Tarım – 2026 içsu kapalı dönemi", url: "https://sakarya.tarimorman.gov.tr/Haber/326/Ic-Sularda-Av-Yasagi-Basliyor-_15-Mart-15-Haziran-2026_", note: "2026 kapalı dönem duyurusu; sonraki sezon yeniden kontrol edilir." };
const kirklareliLaw: ResearchSource = { label: "Kırklareli İl Tarım – içsu kapalı dönem duyurusu", url: "https://kirklareli.tarimorman.gov.tr/Duyuru/706/Ic-Sularda-Av-Yasaklari-Basliyor", note: "Tarihsel yerel duyuru; geçerli takvim için 6/2 ve yeni ilanlar kontrol edilir." };
const duzceLaw: ResearchSource = { label: "Düzce İl Tarım – içsu avcılık duyuruları", url: "https://duzce.tarimorman.gov.tr/", note: "Yerel kapalı dönem ve sahaya özgü levhalar av günü ayrıca kontrol edilir." };
const aslanIdentity: ResearchSource = { label: "Sakarya Büyükşehir – Söğütlü İmamlar Aslanlar aynı gölet", url: "https://sakarya.bel.tr/tr/Haber/binlerce-donum-tarim-arazisi-suyla-bulusuyor/11641", note: "İmamlar-Aslanlar sulama göletini tek su olarak tanımlar; yeni İmamlar sayfası açılmaz." };
const aslanPin: ResearchSource = { label: "Sakarya Üniversitesi – Aslanlar Göleti kıyısı araştırma istasyonu", url: "https://acikerisim.sakarya.edu.tr/bitstream/handle/20.500.12619/102437/T11222.pdf?isAllowed=y&sequence=1", note: "İmamlar'da Aslanlar Göleti kenarı istasyonunu 40°55'51.94 N, 30°22'45.16 E olarak verir; atış noktası değil su kimliği pimi." };
const aslanFish: ResearchSource = { label: "Sakarya İl Tarım – İmamlar 2016 sazan salımı", url: "https://sakarya.tarimorman.gov.tr/Haber/65/Su-Kaynaklarinin-Baliklandirma-Projesi", note: "İmamlar/Aslanlar aynı suya tarihsel yavru sazan bırakıldığını destekler; bugünkü stok garantisi değildir." };
const karacaFish: ResearchSource = { label: "Kırklareli İl Tarım – Babaeski Karacaoğlan sazan salımı", url: "https://kirklareli.tarimorman.gov.tr/Haber/1360/Babaeski-Ilcemiz-Goletleri-Baliklandirildi", note: "2020'de Karacaoğlan dahil Babaeski göletlerine yavru sazan bırakıldığını açıklar." };
const karacaList: ResearchSource = { label: "Kırklareli İl Tarım – 2022 Karacaoğlan balıklandırma planı", url: "https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi", note: "Karacaoğlan'ı Babaeski ilçesinde ayrı satırda listeler; 2022 hedef sayısı gerçekleşmiş sayılmaz." };
const camliFish: ResearchSource = { label: "Düzce İl Tarım – 2024 Çamlıpınar sazan salımı", url: "https://duzce.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1196", note: "Çamlıpınar Göleti'ne 5.000 yavru sazan bırakıldığını bildirir; bugünkü av garantisi değildir." };
const camliAccess: ResearchSource = { label: "Düzce Valiliği – 2023 çevre durum raporu Çamlıpınar", url: "https://webdosya.csb.gov.tr/db/ced/icerikler/duzce_-cdr2023-20241108082014.pdf", note: "Kaynaşlı Çamlıpınar Göleti'ni günübirlik piknik ve olta balıkçılığına uygun olarak tanımlar; güncel levha kontrol edilir." };
const camliMunicipal: ResearchSource = { label: "Kaynaşlı Belediyesi – Çamlıpınar Göleti", url: "https://www.kaynasli.bel.tr/kaynasli/turizm/camlipinar-goleti/", note: "Dipsizgöl Köyü'ndeki Çamlıpınar mesire yeri ve su kimliğini tanımlar." };

export const promoted20261108 = ["ankara-500km-sakarya-aslanlar-goleti", "ankara-500km-kirklareli-karacaoglan-goleti", "ankara-500km-duzce-camlipinar"];

export function applyDailyAvlakQuality20261108(routes: Map<string, EnrichedMera>): void {
  const holdDecisions = [
    { slug: promoted20261108[0], name: "Söğütlü İmamlar-Aslanlar", evidence: aslanFish, identity: aslanIdentity, local: sakaryaLaw },
    { slug: promoted20261108[1], name: "Babaeski Karacaoğlan", evidence: karacaFish, identity: karacaList, local: kirklareliLaw }
  ];
  for (const item of holdDecisions) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "D" || old.qualityGrade) throw new Error(`8 Kasım baseline D değişti: ${item.slug}`);
    const risk = "Kamusal kıyı girişi, sulama tesisi ve güncel işletme/özel mülk sınırları doğrulanmadı; bu nedenle kayıt HOLD/noindex kalır.";
    const sources = [...new Map([...(old.sources || []), item.evidence, item.identity, ...(item.slug === promoted20261108[0] ? [aslanPin] : []), item.local, law, amendment].map(source => [source.url, source])).values()];
    routes.set(item.slug, { ...old, ...(item.slug === promoted20261108[0] ? { lat: 40.931094, lng: 30.379211 } : {}), confidence: "C", qualityGrade: undefined, indexing: "hold", updatedAt: date, researchedAt: date,
      fish: ["Sazan"], summary: `${item.name} için resmî tarihsel yavru sazan salımı doğrulandı. ${risk}`,
      verification: `8 Kasım 2026 D→C: ${item.name} su kimliği, resmî sazan salımı, 6/2 ve yerel içsu bağlamı incelendi. ${risk}`,
      longIntro: [`${item.evidence.label} bu su için yavru sazan salımını kaydeder. Geçmiş balıklandırma bugünkü yetişkin stok veya av başarısı garantisi değildir.`, risk],
      cautions: ["Gölet gövdesi, dolusavak ve su alma yapısından uzak dur.", "Sazan kapalı dönemi ile boy/adet sınırını güncel 6/2 ve il duyurusundan doğrula.", risk],
      navigationNote: "Pin su kütlesi genel referansıdır; izinli kıyı girişi veya av pimi değildir.", sources,
      fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "İl Tarım gölete özgü tarihsel yavru salımı", sourceLabel: item.evidence.label, sourceUrl: item.evidence.url, note: "Güncel yetişkin stok garantisi değildir." }],
      accessEvidence: [{ label: item.identity.label, value: "Su kimliği doğrulandı", sourceUrl: item.identity.url, note: "Güncel kamusal av kıyısı henüz doğrulanmadı; HOLD." }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: false, independentStrongFamilies: [item.evidence.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [risk] },
      confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Resmî gölet kimliği", note: item.name }, species: { level: "partial", label: "Resmî sazan salımı", note: "Güncel stok kanıtı değil." }, legal: { level: "strong", label: "6/2 ve il içsu bağlamı", note: "Güncel levha ayrıca kontrol edilir." }, access: { level: "partial", label: "Kıyı girişi eksik", note: "Bu yüzden HOLD." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Sulama ve mülkiyet sınırı incelenmeli." } }
    });
  }
  const slug = promoted20261108[2];
  const old = routes.get(slug);
  if (!old || old.confidence !== "C" || old.qualityGrade) throw new Error(`8 Kasım baseline C değişti: ${slug}`);
  const sources = [...new Map([...(old.sources || []), camliFish, camliAccess, camliMunicipal, duzceLaw, law, amendment].map(source => [source.url, source])).values()];
  routes.set(slug, { ...old, confidence: "C", qualityGrade: "C+", indexing: "hold", updatedAt: date, researchedAt: date,
    fish: ["Sazan"], summary: "Düzce İl Tarım Çamlıpınar Göleti'ne sazan salımını; Valilik çevre raporu aynı suyun günübirlik olta kullanımını kaydeder. Ortak günlük indeks kotası yeni avlaklara ayrıldığı için bu terfi HOLD kalır.",
    verification: "8 Kasım 2026 C→C+: Kaynaşlı Çamlıpınar/Dipsizgöl kimliği, 2024 resmî sazan salımı, Valilik olta kullanımı, 6/2 ve 2026/26 incelendi. Güncel levha ve kıyı sınırı yerinde kontrol edilir; bugün indeks salımı yapılmadı.",
    longIntro: ["Kaynaşlı Belediyesi Çamlıpınar Göleti'ni Dipsizgöl köyü mesire yeri olarak tanımlar. Düzce İl Tarım'ın 2024 kaydı gölete yavru sazan bırakıldığını, Valilik çevre raporu günübirlik olta kullanımını destekler.", "Bu iki kanıt bugünkü balık yoğunluğu veya tüm kıyılarda izin demek değildir. Sazan dönemini, mesire levhalarını ve su yapılarının güvenlik sınırını gününde kontrol edin."],
    cautions: ["Sazan kapalı döneminde avlanma; güncel boy/adet ve yöntem sınırlarına uy.", "Gölet gövdesi, dolusavak, su alma yapısı ve kalabalık piknik kıyısından uzak dur.", "Güncel mesire/koruma levhası olta kullanımını kısıtlıyorsa avlanma."],
    navigationNote: "Pin Çamlıpınar Göleti genel su referansıdır; mesire girişi ve güvenli kıyı yerinde seçilir.", sources,
    fishEvidence: [{ name: "Sazan", scientificName: "Cyprinus carpio", evidenceLevel: "2024 İl Tarım gölete özgü yavru sazan salımı", sourceLabel: camliFish.label, sourceUrl: camliFish.url, note: "Güncel yetişkin stok garantisi değildir." }],
    accessEvidence: [{ label: camliAccess.label, value: "Valilik raporunda günübirlik olta kullanımına uygun Çamlıpınar Göleti", sourceUrl: camliAccess.url, note: "Güncel levha ve özel kullanım sınırı av günü kontrol edilir." }],
    qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [camliFish.url, camliAccess.url], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] },
    confidenceProfile: { model: "evidence-v1", overall: "C", reviewedAt: date, identity: { level: "strong", label: "Kaynaşlı Belediyesi Çamlıpınar", note: "Dipsizgöl köyündeki ayrı gölet." }, species: { level: "strong", label: "2024 İl Tarım sazan salımı", note: "Stok garantisi değil." }, legal: { level: "strong", label: "6/2 ve 2026/26", note: "Yerel levha gününde." }, access: { level: "partial", label: "Valilik günübirlik olta kaydı", note: "Mikro kıyı gününde." }, field: { level: "unverified", label: "Saha teyidi yok", note: "Mesire/tesis sınırı yerinde." } }
  });
}
