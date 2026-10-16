import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const slug = "kocaeli-babali-acik-karadeniz-kiyisi";
const reviewedAt = "2026-10-16";

const mainLaw: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık ana tebliği",
  url: "https://trabzon.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=241",
  note: "Babalı deniz kıyısında madde 15–17, güncel tür boy/adet sınırları ve 1 Nisan–15 Kasım arasında şamandıralı yüzme alanı yasağı uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 Tebliğ 2026/26 değişikliği",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 değişikliği ana tebliğle birlikte değerlendirilir; tür boy/adet ve diğer güncel hükümler av gününde yeniden kontrol edilir."
};
const kandiraCoast: ResearchSource = {
  label: "Kandıra Belediyesi – doğal güzellikler / Babalı",
  url: "https://www.kandira.bel.tr/icerik/dogal-guzellikler",
  note: "Babalı ve Uzunkum kıyısını adlandırır; sahile genel ziyaretçi erişimi, belirli olta cebinde izin anlamına gelmez."
};
const localSafety: ResearchSource = {
  label: "Kocaeli Valiliği – Kandıra kıyı güvenliği kararı, 3 Temmuz 2026",
  url: "https://www.kocaeli.gov.tr/suda-bogulma-olaylarini-onleme-huzur-ve-sukunu-bozacak-sekilde-gurultuye-neden-olmak-karavan-park-ve-alkol-kullanilmasi-ile-ilgili-yasaklama-karari",
  note: "Çeken akıntı tehlikesini, Babalı Harmankayalar–Dikili Burnu yüksek kayalıkları riskini ve sahilde ateş/kamp yasağını bildirir; genel kıyı oltası yasağı koymaz."
};
const swimmingOrder: ResearchSource = {
  label: "Kocaeli Valiliği – Suda Boğulma Genel Emri 2025/1",
  url: "https://www.kocaeli.gov.tr/suda-bogulma-olaylari-ile-ilgili-genel-emir-2025-1",
  note: "A/5, şamandırayla işaretlenmiş yüzme alanlarına olta ve diğer av araçlarıyla girişi yasaklar."
};
const publicCoast: ResearchSource = {
  label: "Kocaeli Büyükşehir Belediyesi – 22 Mayıs 2026 Babalı sahil etkinliği",
  url: "https://www.kocaeli.bel.tr/amp/haber/buyuk-surgun-162-yilinda-babalida-dualarla-anildi-51141.html",
  note: "Babalı Sahili'nde toplu kamusal etkinliği belgeler; sahilin belirli bir noktasında olta izni vermez."
};

export function applyBabaliHoldMaintenance20261016(routes: Map<string, EnrichedMera>): void {
  const previous = routes.get(slug);
  if (!previous || previous.waterType !== "Deniz" || previous.confidence !== "C" || previous.qualityGrade !== "C+" || previous.indexing !== "hold") {
    throw new Error(`Babalı bakımının C+/HOLD deniz kaydı korunmalı: ${slug}`);
  }

  routes.set(slug, {
    ...previous,
    region: "Karadeniz",
    zone: "Babalı açık Karadeniz kumsalının genel bölgesi; sit sınırı ve mikro olta cebi teyit bekliyor",
    vehicleAccess: "Kontrol edilmeli",
    amenities: [],
    cautions: [
      "Karadeniz'de çeken akıntı ve yüksek dalga tehlikesi vardır; suya girmeyin, ıslak kıyıdan veya kayalıklardan olta atmayın.",
      "Babalı Harmankayalar–Dikili Burnu yüksek kayalıklarından ve mağara/sit alanından uzak durun; sit sınırının haritası teyit edilmedi.",
      "İşaretli yüzme alanına olta ile girmeyin; 6/2 ayrıca 1 Nisan–15 Kasım döneminde şamandıralı yüzme alanında avı yasaklar. Yüzücü/sörfçü varken güvenli atış yoksa olta atmayın.",
      "Kandıra sahilinde 2026 Valilik kararı uyarınca ateş yakma, kamp ve çadır kurma yasaktır; güncel levhaları kontrol edin."
    ],
    navigationNote: "Pin Babalı yerleşiminin yaklaşık konumudur; doğrulanmış sahil girişi, park yeri veya izinli olta cebi değildir.",
    shoreProfile: "Babalı'nın açık Karadeniz kıyısında kuru, kamusal kumsal genel planlama alanıdır. Sit sınırı ve izinli olta cebi haritalanmadı; mağara, yüksek kayalık, işaretli yüzme alanı ve su sporları kesimlerinden uzak durulmalı, dalga ve atış koridoru yerinde değerlendirilmelidir.",
    crowdNote: "Yüzücü, sörfçü veya diğer kıyı kullanıcıları varsa ve güvenli atış açıklığı oluşmuyorsa olta atılmamalıdır.",
    planningNotes: [
      "6/2 ana tebliğinin deniz hükümleri, 2026/26 değişikliği ve tür boy/adet sınırlarını av gününde kontrol et.",
      "Kocaeli Valiliği/Kandıra Kaymakamlığı duyurularını ve sahil levhalarını yeniden kontrol et; geçici kapanma veya koruma sınırı varsa avlanma.",
      "İşaretli yüzme alanı, tarihî sit/mağara, yüksek kayalık ve su sporları kullanımından uzak, güvenli açık kumsal bulunmazsa olta atma; sahilde ateş yakma veya kamp kurma."
    ],
    sources: [
      ...previous.sources.filter(source =>
        source.label !== "Tarım ve Orman Bakanlığı – 6/2 Tebliğ ve ekleri" &&
        source.label !== "Kandıra Belediyesi – doğal güzellikler"
      ),
      kandiraCoast,
      mainLaw,
      amendment,
      localSafety,
      swimmingOrder,
      publicCoast
    ],
    accessEvidence: [
      {
        label: kandiraCoast.label,
        value: "Babalı sahili genel ziyaretçi kıyısıdır; belirli olta cebi veya güncel izin doğrulanmamıştır.",
        sourceUrl: kandiraCoast.url,
        note: kandiraCoast.note
      },
      {
        label: publicCoast.label,
        value: "2026'da kamusal sahil etkinliği düzenlenmiştir; bu yalnız genel erişim bağlamıdır.",
        sourceUrl: publicCoast.url,
        note: publicCoast.note
      }
    ],
    longIntro: [
      "Babalı açık Karadeniz kıyısı Kocaeli ve Kandıra belediyelerinin kaynaklarında adlandırılır; Kocaeli Büyükşehir Belediyesi lüferi bu kıyı yöresinde bildirir. Tür kaydı günlük yakalama garantisi değildir.",
      "Babalı sahiline genel kamusal ziyaret mümkündür; tarihî sit sınırı, işaretli yüzme alanları ve güvenli/izinli mikro olta cebi bu rota için haritalanmadı. Yalnız güncel kurallara ve levhalara uygun, açık kuru kıyı ayrıca değerlendirilmelidir."
    ],
    verification: "16 Ekim 2026: Kocaeli Büyükşehir'in Babalı kıyısı ve lüfer kaydı, Kandıra Belediyesi'nin sahil tanımı, 6/2 ana deniz hükümleri, 2026/26 değişikliği ve Kocaeli Valiliği 2025/1 ile 2026 kıyı güvenliği kararları incelendi. Genel kumsal erişimi belirli olta cebi izni değildir; sit sınırı, pin ve yerel levhalar av gününde yeniden doğrulanmalıdır.",
    researchStatus: "16 Ekim 2026 içerik bakımı: açık Karadeniz kıyısı ve yerel güvenlik kuralları incelendi; C+/HOLD ve noindex korunuyor.",
    researchSummary: "Kocaeli Büyükşehir'in Babalı kıyısı/lüfer kaydı ile Kandıra'nın sahil tanımı ve 2026 kamusal etkinliği genel kıyı erişimini destekler. 6/2 deniz hükümleri ve Kocaeli Valiliği güvenlik kararları incelendi; sit sınırı ve izinli mikro olta cebi açık değildir.",
    updatedAt: reviewedAt,
    researchedAt: reviewedAt,
    qualityAssessment: previous.qualityAssessment ? { ...previous.qualityAssessment, reviewedAt } : previous.qualityAssessment,
    confidenceProfile: previous.confidenceProfile ? {
      ...previous.confidenceProfile,
      reviewedAt,
      legal: { ...previous.confidenceProfile.legal, note: "Deniz için 6/2 madde 15–17, 2026/26 değişikliği, Valilik güvenlik kararı ve sahil levhaları geçerlidir; belirli olta cebi doğrulanmadı." },
      access: { ...previous.confidenceProfile.access, note: "Belediye kaynakları Babalı sahiline genel kamusal ziyareti destekler; sit sınırı ve güvenli/izinli mikro olta cebi doğrulanmadı." }
    } : previous.confidenceProfile
  });
}
