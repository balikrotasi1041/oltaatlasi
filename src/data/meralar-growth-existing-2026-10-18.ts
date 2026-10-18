import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const date = "2026-10-18";
const slug = "bilecik-bozcaarmut-baraj-goleti";

const valilik: ResearchSource = {
  label: "Bilecik Valiliği – Bozcaarmut Baraj Göleti",
  url: "https://bilecik.gov.tr/bozcaarmut-baraj-goleti",
  note: "Pazaryeri/Bozcaarmut su kimliğini, genel GPS konumunu ve köy içinden gölete uzanan yaklaşık 2,9 km yolu verir; pin belirli bir olta cebi değildir."
};
const kultur: ResearchSource = {
  label: "Bilecik İl Kültür ve Turizm Müdürlüğü – Bozcaarmut Göleti",
  url: "https://www.kulturportali.gov.tr/turkiye/bilecik/gezilecekyer/bozcaarmut-golet",
  note: "Göleti ziyaret alanı olarak tanımlar ve olta balıkçılığına uygunluğunu rota adıyla belirtir; güncel saha levhası veya kesin kıyı izni yerine geçmez."
};
const stock: ResearchSource = {
  label: "Bilecik İl Tarım ve Orman Müdürlüğü – 2018 Bozcaarmut sazan balıklandırması",
  url: "https://bilecik.tarimorman.gov.tr/Haber/677/",
  note: "27 Haziran 2018'de Bozcaarmut Göleti'ne 10.000 sazan yavrusu bırakıldığını kaydeder; güncel stok ve av başarısı garantisi değildir."
};
const provinceLaw: ResearchSource = {
  label: "Bilecik İl Tarım ve Orman Müdürlüğü – 2026 içsu av dönemi",
  url: "https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=bfedb6a9-3737-4630-9ded-fdd8dea63bb7&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=681",
  note: "16 Haziran 2026'da il genel sazangiller yasağının bittiğini; 6/2 kurallarını ve ilde tamamen yasaklı su olarak Selöz Göleti'ni bildirir. Bozcaarmut için belirli mikro kıyı izni değildir."
};
const nationalLaw: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 amatör avcılık tebliği",
  url: "https://sanliurfa.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=518",
  note: "İçsu tür, dönem, takım, boy/adet, alan ve baraj güvenlik sahası kurallarının ana metni; yerel karar ve levhalarla birlikte uygulanır."
};
const amendment: ResearchSource = {
  label: "Tarım ve Orman Bakanlığı – 6/2 tebliği 2026/26 değişikliği",
  url: "https://www.tarimorman.gov.tr/HHGM/Haber/267/",
  note: "16 Eylül 2026 değişikliğini duyurur; ana tebliğ ve yerel kararlarla birlikte değerlendirilir."
};
const forestSeason: ResearchSource = {
  label: "TRT Haber/AA – Bilecik Valiliği 2026 orman giriş kararı",
  url: "https://www.trthaber.com/haber/turkiye/bilecikte-ormanlik-alan-ve-yaylalara-girisler-yasaklandi-947908.html",
  note: "Valiliğin yazılı açıklamasını aktarır: 2026 orman/yol giriş kısıtı 1 Ekim'e kadardı, denetim 31 Ekim'e dek sürer. Bu haber yeni veya yerel bir kapanma olmadığını kanıtlamaz."
};

export function applyGrowthExistingRelease20261018(routes: Map<string, EnrichedMera>): void {
  const previous = routes.get(slug);
  if (!previous || previous.confidence !== "C" || previous.qualityGrade !== "C" || previous.indexing !== "hold") {
    throw new Error(`18 Ekim eski kayıt salımı C/HOLD başlangıcı gerektirir: ${slug}`);
  }

  const sources = [valilik, kultur, stock, provinceLaw, nationalLaw, amendment, forestSeason];
  const oldSources = previous.sources.filter(source => !sources.some(replacement => replacement.url === source.url));

  routes.set(slug, {
    ...previous,
    confidence: "C",
    qualityGrade: "C",
    indexing: "index",
    updatedAt: date,
    researchedAt: date,
    researchStatus: "18 Ekim 2026: mevcut C/HOLD kayıt, rota özelindeki tür, genel ziyaret erişimi ve güncel il/ulusal kurallar yeniden incelenerek C/index açıldı",
    summary: "Bozcaarmut Baraj Göleti, Bilecik/Pazaryeri'nde resmî yol tarifi bulunan ve İl Kültür ve Turizm Müdürlüğünce olta balıkçılığına uygun tanımlanan bir sazan rotasıdır. Genel kıyı planlaması C güvenindedir; pin kesin atış noktası değildir.",
    verification: "18 Ekim 2026 masa başı incelemesi: Valilik gölet kimliği/konum/yol bilgisini, İl Kültür ve Turizm Müdürlüğü genel olta uygunluğunu, İl Tarım 2018 sazan balıklandırmasını ve 2026 genel av dönemi ile Selöz'e özgü tam yasağı doğrular. 6/2 ana metni ve 2026/26 değişikliği incelendi. Belirli kıyı cebi, anlık orman yolu/levha durumu ve zemin saha teyitli değildir; kapalı veya tehlikeli kesimde av yapılmaz.",
    researchSummary: "Bozcaarmut su kimliği ve yol tarifi Valilikten, sazan varlığı 2018 İl Tarımdan, genel olta uygunluğu İl Kültür ve Turizm Müdürlüğünden doğrulandı. 2026 İl Tarım duyurusu genel içsu sezonunun açıldığını ve tam yasaklı Selöz Göleti'ni bildirir; Bozcaarmut için yeni bir tam yasak göstermez. Mikro kıyı ve anlık levha durumu bilinmiyor.",
    longIntro: [
      previous.longIntro[0],
      "Bilecik İl Tarımın 2018 kaydında Bozcaarmut'a 10.000 sazan yavrusu bırakıldığı belirtilir. İl Kültür ve Turizm Müdürlüğünün rota tanıtımı genel olta uygunluğunu destekler; bu iki tarihsel kaynak günlük av veya kesin kıyı cebi garantisi değildir."
    ],
    navigationNote: "Valiliğin koordinatı göletin genel konumudur; özel parsel, baraj gövdesi, savak veya kesin olta girişine yönlendirme değildir. Köyden gölete giden yol genel ziyaret bağlamında belgeli olsa da son kıyı ve anlık orman yolu levhaları yerinde kontrol edilmelidir.",
    cautions: [
      "Baraj gövdesi, savak, işletme ve olası güvenlik sahaları av alanı değildir; yalnız kamusal ve güvenli olduğu görülen kıyıda plan yap.",
      "Orman yolunda yeni bariyer/yangın kararı veya yasak levhası varsa ilerleme; ateş ve kamp için ayrı izin koşullarını uygula.",
      "Su kotu, yağış, çamur ve dik kıyı zemini değişebilir; pin mikro olta noktası değildir."
    ],
    planningNotes: [
      ...previous.planningNotes,
      "Valiliğin köyden gölete yol tarifini kullan; kesin atış cebini harita pininden çıkarma. İl Kültür ve Turizm Müdürlüğünün genel olta uygunluğu ile güncel saha levhasını ayrı değerlendir.",
      "2026 orman giriş kısıtı duyurulan takvimde 1 Ekim'de sona ermiş görünse de 31 Ekim'e kadar denetim sürer; yeni yerel kapanma veya bariyer varsa kıyıya girme."
    ],
    seasonalNotes: [
      ...previous.seasonalNotes,
      "Bilecik İl Tarımın 2026 duyurusu tam yasaklı il suyunu Selöz Göleti olarak adlandırır; Bozcaarmut için ayrıca yürürlüğe giren suya özgü bir karar veya levha görülürse bu genel değerlendirme geçersiz olur."
    ],
    fishEvidence: [{
      name: "Sazan",
      evidenceLevel: "Rota özelinde resmî kayıt",
      sourceLabel: stock.label,
      sourceUrl: stock.url,
      note: stock.note
    }],
    accessEvidence: [
      { label: valilik.label, value: "Bozcaarmut Köyü içinden gölete genel yol tarifi ve su koordinatı", sourceUrl: valilik.url, note: valilik.note },
      { label: kultur.label, value: "Resmî ziyaret tanıtımında rota olta balıkçılığına uygun olarak tanımlanır", sourceUrl: kultur.url, note: kultur.note }
    ],
    sources: [...oldSources, ...sources],
    qualityAssessment: {
      ...previous.qualityAssessment!,
      reviewedAt: date,
      currentLawResolved: true,
      safePublicAccessVerified: true,
      independentStrongFamilies: ["Bilecik Valiliği", "Bilecik İl Kültür ve Turizm Müdürlüğü", "Bilecik İl Tarım ve Orman Müdürlüğü"],
      unresolvedRisks: []
    },
    confidenceProfile: previous.confidenceProfile ? {
      ...previous.confidenceProfile,
      reviewedAt: date,
      legal: { level: "strong", label: "2026 il ve ulusal kurallar değerlendirildi", note: "6/2 ana metni ve 2026/26 değişikliğiyle birlikte İl Tarımın sezon ve Selöz tam yasak duyurusu incelendi; baraj güvenlik sahası ve yeni yerel kararlar dışlanır." },
      access: { level: "strong", label: "Resmî genel ziyaret ve olta bağlamı", note: "Valilik yol/konumu, İl Kültür ve Turizm Müdürlüğü genel olta uygunluğunu doğrular; mikro kıyı veya anlık açıklık garanti edilmez." }
    } : previous.confidenceProfile
  });
}
