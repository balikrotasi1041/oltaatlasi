import type { EnrichedMera } from "./meralar-tumu-core";

const date = "2026-10-28";
const law = "https://yalova.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=513";
const amendment = "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf";
const portLaw = "https://ktbs.uab.gov.tr/mevzuatlar/limanlar_yonetmeligi.pdf";
const items = [
  {
    slug: "eskihisar-sahili", fish: ["İstavrit", "Kefal", "Zargana"],
    fishUrl: "https://www.ozgurkocaeli.com.tr/haber/4408733/osmangazi-manzarasinda-balik-tutma-keyfi",
    fishLabel: "Özgür Kocaeli – Eskihisar kıyısında olta röportajı (2016)",
    fishNote: "Eskihisar sahilinde haftalık avlanan aile istavrit, kefal ve zarganayı yer adıyla bildirir; tarihsel anlatım güncel stok garantisi değildir.",
    accessUrl: "https://www.gebze.bel.tr/haber/baba-cocuk-balik-tutma-keyfi-eskihisar-da-gerceklesti_7393.html",
    accessNote: "Gebze Belediyesi 2 Eylül 2026'da Eskihisar sahilinde üçüncü kamusal olta etkinliğini kaydeder; feribot terminali ve operasyon sahası hariçtir.",
    risk: "Feribot yaklaşımı, araç bekleme şeridi, bağlı tekne ve güvenlik sahasında olta açılmaz; kıyı yürüyüşçüleri için güvenli atış açıklığı aranır.",
    summary: "Eskihisar'ın terminal dışındaki kamusal kıyısında 2026 belediye olta etkinliği ve kıyıdan avlananların tarihsel istavrit, kefal, zargana kaydıyla doğrulanan C+ rota.",
    intro: "2016 saha röportajında Eskihisar kıyısında avlanan aile istavrit, kefal ve zarganayı bildirir. 2026 belediye etkinliği genel kıyı olta kullanımını günceller; geçmiş tür kaydı bugünkü av verimini garanti etmez."
  },
  {
    slug: "karamursel-sahili", fish: ["İstavrit", "İspari", "İzmarit", "Karagöz", "Kırlangıç"],
    fishUrl: "https://www.kocaeligazetesi.com.tr/haber/25168734/karamurselde-olta-balikcilarinin-balik-mesaisi",
    fishLabel: "Kocaeli Gazetesi – Karamürsel kıyı olta röportajı (2025)",
    fishNote: "2025'te Karamürsel sahil ve iskelelerinde avlananlarla görüşerek beş türü adlarıyla aktarır; her platformda av garantisi değildir.",
    accessUrl: "https://www.kocaeli.bel.tr/haber/karamursel-sahili-sekilleniyor-37457.html",
    accessNote: "Kocaeli Büyükşehir Altınkemer–Ereğli kamusal sahilinde beş balık tutma platformu kaydeder; güncel bakım/kapalı alan levhası kontrol edilir.",
    risk: "Aktif tekne çekek yeri, kıyı çalışması, yüzme alanı ve kalabalık yürüyüş bandında olta açılmaz.",
    summary: "Karamürsel'in kamusal Altınkemer–Ereğli sahilinde resmî olta platformları ve 2025 yerel kıyı avı tür kaydıyla doğrulanan C+ genel kıyı rotası.",
    intro: "Kocaeli Büyükşehir Karamürsel sahilinde olta platformları inşa edildiğini kaydeder. 2025 yerel röportajı ilçenin kıyı oltacılarından istavrit, ispari, izmarit, karagöz ve kırlangıç kayıtlarını aktarır; 12 km sahilin tamamında eşit dağılım varsayılmaz."
  },
  {
    slug: "derince-harikalar-sahili", fish: ["İstavrit"],
    fishUrl: "https://www.kocaelibarisgazetesi.com/haber/20383194/iste-baligin-tutuldugu-mera-kocaelide-balikcilar-su-sira-sinek-avlarken-ayakkabi-boyu-istavriti-paylasti",
    fishLabel: "Kocaeli Barış – Harikalar Sahili istavrit yakalaması (2024)",
    fishNote: "2024'te Harikalar Sahili Monnetto önü kıyı oltasıyla yakalanan istavriti yer ve tür adıyla kaydeder; tekil avdır.",
    accessUrl: "https://www.kocaeli.bel.tr/buyuleyici-guzellikler.html",
    accessNote: "Kocaeli Büyükşehir 30 bin m² Harikalar Sahili'ni Derince'de kamusal ziyaret alanı olarak tanımlar; çocuk/tesis kıyısı av noktası değildir.",
    risk: "Çocuk oyun ve kafe önü kalabalığı, bağlı tekne ve yürüyüş aksında güvenli atış açıklığı yoksa olta açılmaz.",
    summary: "Derince Harikalar Sahili'nin kamusal park kimliği ve aynı sahilde belgeli 2024 istavrit yakalamasıyla C+ düzeyinde doğrulanmış genel kıyı rotası.",
    intro: "2024 yerel haber istavrit yakalamasını Harikalar Sahili'ne özgü olarak kaydeder. Belediye alanın kamusal park kimliğini doğrular; tekil av bugünkü tür bolluğu veya tesis önünde sürekli atış izni değildir."
  }
] as const;

export function applyDailyAvlakQuality20261028(routes: Map<string, EnrichedMera>): void {
  for (const item of items) {
    const old = routes.get(item.slug);
    if (!old || old.confidence !== "C" || old.qualityGrade) throw new Error(`${item.slug}: 28 Ekim başlangıç C durumu değişti; terfi yeniden incelenmeli.`);
    const fishSource = { label: item.fishLabel, url: item.fishUrl, note: item.fishNote };
    const accessSource = { label: "Kamusal kıyı ve olta kullanım kaydı", url: item.accessUrl, note: item.accessNote };
    const sourceUrls = new Set([item.fishUrl, item.accessUrl, law, amendment, portLaw]);
    routes.set(old.slug, {
      ...old,
      fish: [...item.fish], summary: item.summary, longIntro: [item.intro, item.accessNote],
      qualityGrade: "C+", updatedAt: date,
      verification: `28 Ekim 2026: ${item.fishLabel} rota-özel tür kaydı verir. ${item.accessNote} 6/2, 2026/26 ve Limanlar Yönetmeliği incelendi. ${item.risk}`,
      seasonalNotes: ["Tarihsel/tekil tür kaydı av garantisi değildir; güncel sezon, boy, adet, saha levhası ve hava/akıntı av gününde kontrol edilir."],
      sources: [
        ...old.sources.filter(source => !sourceUrls.has(source.url)), fishSource, accessSource,
        { label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık", url: law, note: "Güncel tür, yöntem, boy, adet ve yer sınırlamaları." },
        { label: "Tarım ve Orman Bakanlığı – 2026/26 değişikliği", url: amendment, note: "16 Eylül 2026 değişikliği ana tebliğle incelendi." },
        { label: "Ulaştırma ve Altyapı Bakanlığı – Limanlar Yönetmeliği", url: portLaw, note: "Aktif iskele, liman ve tekne operasyon bölgeleri rota dışıdır." }
      ],
      fishEvidence: item.fish.map(name => ({ name, scientificName: null, evidenceLevel: "Rota adıyla kıyı avcısı/yakalama kaydı", sourceLabel: item.fishLabel, sourceUrl: item.fishUrl, note: item.fishNote })),
      accessEvidence: [{ label: "Kamusal kıyı ve kullanım", value: item.accessNote, sourceUrl: item.accessUrl, note: item.risk }],
      qualityAssessment: { model: "expanded-v2", reviewedAt: date, identityVerified: true, speciesRouteSpecific: true, currentLawResolved: true, safePublicAccessVerified: true, independentStrongFamilies: [item.accessUrl], localContentVerified: true, fieldOrEquivalentVerified: false, unresolvedRisks: [] }
    });
  }
}
