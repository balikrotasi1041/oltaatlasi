import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const reviewedAt = "2026-10-16";
const officialAmendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 Tebliğ 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği: Boğaz trafik ayırım şeridinde av yasaktır; istavrit asgari boyu 12 cm'dir. Kıyıdaki yerel levhalar ve ana 6/2 hükümleri ayrıca uygulanır."
};
const mainLaw: ResearchSource = {
  label: "6/2 amatör avcılık ana tebliği – madde 16",
  url: "https://www.lexpera.com.tr/resmi-gazete/metin/6-2-numarali-amator-amacli-su-urunleri-avciliginin-duzenlenmesi-hakkinda-teblig-no-2024-21-32629",
  note: "Deniz amatör olta, iğne, boy/miktar kuralları ve 1 Nisan–15 Kasım şamandıralı yüzme alanı yasağı uygulanır."
};
const sariyerPark: ResearchSource = {
  label: "Sarıyer Belediyesi – 2024 Yaşam Rehberi, Kefeliköy parkı",
  url: "https://sariyer.bel.tr/ckuploads/ckfiles/SARIYER%20YASAM%20REHBERI-09.05.2024.pdf?time=1715233947652",
  note: "Kefeliköy Meral Okay Senaristler Parkı'nı kamusal park envanterinde sayar; belirli olta cebi veya bugünkü levha izni vermez."
};
const uskudarCoast: ResearchSource = {
  label: "Üsküdar Belediyesi – Şemsi Paşa Camii kıyı konumu",
  url: "https://www.uskudar.bel.tr/tr/main/pages/semsi-pasa-camii/40",
  note: "Caminin deniz kıyısı konumunu teyit eder; avlu, hazire veya bir mikro olta noktası için izin belgesi değildir."
};
const ibbCoast: ResearchSource = {
  label: "İBB – 14.09.2026 kıyı düzenleme duyurusu",
  url: "https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulun-kiyilari-yenileniyor",
  note: "Komşu Salacak sahili dahil kamusal kıyı düzenlemelerinin tamamlandığını bildirir; Şemsi Paşa kıyısındaki belirli atış noktasını doğrulamaz."
};
const unique = (sources: ResearchSource[]) => [...new Map(sources.map(source => [source.url, source])).values()];

export function applyDailyQuality20261016(routes: Map<string, EnrichedMera>): void {
  const entries = [
    {
      slug: "istanbul-kefelikoy-sahil-parki",
      sources: [sariyerPark, officialAmendment],
      families: ["İBB 2017 Kefeli Köy olta/tür rehberi", "Sarıyer Belediyesi kamusal park envanteri"],
      status: "16 Ekim 2026: C+/HOLD yeniden inceleme ve indeks salımı; tür kaydı tarihsel, park sahili genel erişimdir",
      verification: "16 Ekim 2026: İBB'nin 2017 Kefeli Köy istavrit kaydı, Sarıyer Belediyesi park envanteri, 6/2 ana metni ve 2026/26 Boğaz trafik şeridi değişikliği birlikte incelendi. Özel yalı, tekne manevrası, şamandıralı yüzme alanı ve kapalı levha dışlanır. Mikro atış cebi, bugünkü levha ve yağış sonrası kıyı güvenliği saha teyitli değildir.",
      caution: "Kefeliköy'de yalnız açık kamusal park sahilinden ve güvenli atış açıklığında olta planla; özel yalı, tekne hattı, şamandıralı yüzme alanı ve Boğaz trafik ayırım şeridine girme. Yoğun yağış sonrası zemin ve bariyerleri sahada kontrol et."
    },
    {
      slug: "istanbul-uskudar-semsipasa-cami-kiyisi",
      sources: [uskudarCoast, ibbCoast, mainLaw],
      families: ["İBB 2017 Şemsi Paşa olta/tür rehberi", "Üsküdar Belediyesi ve İBB kamusal kıyı bağlamı"],
      status: "16 Ekim 2026: C+/HOLD yeniden inceleme ve indeks salımı; genel yaya kıyısı, kesin mikro atış noktası değil",
      verification: "16 Ekim 2026: İBB'nin 2017 Şemsi Paşa kıyısı istavrit/kefal kaydı, Üsküdar kıyı konumu, komşu Salacak için İBB'nin 2026 kamusal kıyı duyurusu ve güncel 6/2 kuralları incelendi. Cami avlusu/hazire, iskele işletmesi, yaya geçişi, şamandıralı yüzme alanı ve Boğaz trafik şeridi av alanı değildir. Mikro atış cebi, bugünkü levha ve yağış sonrası kıyı güvenliği saha teyitli değildir.",
      caution: "Şemsi Paşa'da cami avlusu/hazire ve iskele işletmesine girme; yaya/tekne güvenliği için boş atış koridoru yoksa olta atma. Şamandıralı yüzme alanından ve Boğaz trafik ayırım şeridinden uzak dur. Yağış sonrası zemin ve bariyerleri sahada kontrol et."
    }
  ] as const;

  for (const entry of entries) {
    const previous = routes.get(entry.slug);
    if (!previous || previous.qualityGrade !== "C+" || previous.indexing !== "hold") {
      throw new Error(`16 Ekim salım adayı C+/HOLD baselineında değil: ${entry.slug}`);
    }
    routes.set(entry.slug, {
      ...previous,
      indexing: "index",
      updatedAt: reviewedAt,
      researchedAt: reviewedAt,
      sources: unique([...previous.sources, ...entry.sources]),
      fishEvidence: entry.slug === "istanbul-kefelikoy-sahil-parki"
        ? previous.fishEvidence.map(fish => ({
            ...fish,
            note: "İBB'nin 2017 rehberi Kefeli Köy genelini istavrit için listeler; belirli park kıyısında güncel yakalama garantisi değildir."
          }))
        : previous.fishEvidence,
      accessEvidence: entry.slug === "istanbul-kefelikoy-sahil-parki"
        ? [...previous.accessEvidence, {
            label: sariyerPark.label,
            value: "Kefeliköy Meral Okay Senaristler Parkı kamusal park envanterinde bulunur; açık yaya parkına genel erişim bağlamıdır.",
            sourceUrl: sariyerPark.url,
            note: "2024 yaşam rehberi parkı listeler; belirli olta cebi, işletme sınırı veya güncel levha izni doğrulamaz."
          }]
        : previous.accessEvidence,
      verification: entry.verification,
      researchStatus: entry.status,
      planningNotes: [...previous.planningNotes, entry.caution],
      cautions: entry.slug === "istanbul-kefelikoy-sahil-parki"
        ? ["Güncel 6/2 Tebliği, il/ilçe kararları ve kıyıdaki yasak levhalarını kontrol et.", entry.caution]
        : [...previous.cautions, entry.caution],
      qualityAssessment: { ...previous.qualityAssessment!, reviewedAt, independentStrongFamilies: [...entry.families] },
      confidenceProfile: previous.confidenceProfile
        ? { ...previous.confidenceProfile, reviewedAt }
        : previous.confidenceProfile
    });
  }
}
