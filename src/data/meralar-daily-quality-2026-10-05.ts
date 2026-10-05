import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const reviewedAt = "2026-10-05";
const law2026: ResearchSource = {
  label: "6/2 Tebliğ 2026/26 değişikliği – 16.09.2026",
  url: "https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf",
  note: "16 Eylül 2026 tarihli güncel değişiklik ana 2024/21 metni ve 2025/12 değişikliğiyle birlikte uygulanır; tek başına belirli kıyıda av izni oluşturmaz."
};

type Decision = {
  slug: string;
  grade: "C+" | "C";
  speciesSource: RegExp;
  accessSource: RegExp;
  primaryMissing?: string;
  additionalMissing?: string[];
  families: string[];
};

export const dailyQualityDecisions20261005: Decision[] = [
  {slug:"bilecik-bozcaarmut-baraj-goleti",grade:"C",speciesSource:/2018 balıklandırma/i,accessSource:/Bilecik Valiliği/i,primaryMissing:"Orman yolundan sonraki güncel kamusal kıyı girişi",additionalMissing:["Yangın dönemi orman erişimi ve baraj işletme sınırı"],families:["Valilik","İl Tarım"]},
  {slug:"bilecik-kucukelmali-baraj-goleti",grade:"C",speciesSource:/2018 balıklandırma/i,accessSource:/Bilecik Valiliği/i,primaryMissing:"Mesire alanında güncel ve açıkça izinli olta kullanım bölümü",additionalMissing:["Giriş saatleri, ortak kullanım güvenliği ve olta mikro alanı"],families:["Valilik","İl Tarım"]},
  {slug:"bilecik-kurtkoy-baraj-goleti",grade:"C",speciesSource:/2019 balıklandırma/i,accessSource:/Bilecik Valiliği/i,primaryMissing:"Sulama işletmesi ve özel tarla sınırlarından ayrılmış kamusal kıyı",additionalMissing:["Güncel bariyer, tabela ve su kotu"],families:["Valilik","İl Tarım"]},
  {slug:"bilecik-cerkesli-baraj-goleti",grade:"C+",speciesSource:/sazan yakalama etkinliği/i,accessSource:/Bilecik Valiliği/i,families:["Valilik","İl Tarım"]},
  {slug:"bilecik-yenipazar-baraj-goleti",grade:"C",speciesSource:/2019 balıklandırma/i,accessSource:/Bilecik Valiliği/i,primaryMissing:"Orman içindeki son kıyı girişinin güncel kamusal kullanım teyidi",additionalMissing:["Yangın dönemi erişimi ve baraj işletme sınırı"],families:["Valilik","İl Tarım"]},
  {slug:"akkoy-baraji-genel-amator-kiyi",grade:"C",speciesSource:/Kültür ve Turizm/i,accessSource:/Drone ile/i,primaryMissing:"Denetlenen faaliyetin dışında güvenli ve kamusal genel kıyı sınırı",additionalMissing:["Güncel teknik işletme ve özel geçiş sınırları"],families:["İl Tarım","Kültür ve Turizm"]},
  {slug:"kovali-baraji-genel-amator-kiyi",grade:"C",speciesSource:/Kültür ve Turizm/i,accessSource:/Drone ile/i,primaryMissing:"Denetim alanı ile izinli kamusal kıyının güncel eşleştirmesi",additionalMissing:["Baraj işletme ve özel geçiş sınırları"],families:["İl Tarım","Kültür ve Turizm"]},
  {slug:"agcasar-baraji-genel-amator-kiyi",grade:"C",speciesSource:/Kültür ve Turizm/i,accessSource:/Drone denetimi/i,primaryMissing:"Aktif sulama işletmesinden ayrılmış güncel kamusal kıyı",additionalMissing:["İşletme güvenlik alanı ve mikro erişim"],families:["İl Tarım","Kültür ve Turizm","Sulama Birliği"]},
  {slug:"pasali-goleti-genel-amator-kiyi",grade:"C",speciesSource:/sazan balıklandırması/i,accessSource:/DSİ 12/i,primaryMissing:"Aktif sulama tesisi dışında izinli ve güvenli kamusal kıyı",additionalMissing:["Son yol, bariyer ve mülkiyet teyidi"],families:["DSİ","İl Tarım","Çevre envanteri"]},
  {slug:"darili-goleti-genel-amator-kiyi",grade:"C",speciesSource:/2015 sazan balıklandırması/i,accessSource:/Kayseri Valiliği/i,primaryMissing:"Gölet çevresindeki güncel kamusal kıyı girişi",additionalMissing:["Sulama işletmesi, özel parsel ve saha tabelası"],families:["Valilik","DSİ","İl Tarım"]},
  {slug:"zincidere-goleti-mesire-genel-kiyi",grade:"C",speciesSource:/2015 sazan balıklandırması/i,accessSource:/Talas Belediyesi - Zincidere Göleti$/i,primaryMissing:"Mesire alanında balıkçılığa ayrılmış güncel güvenli kıyı",additionalMissing:["Ortak kullanıcı güvenliği ve alan işletme kuralları"],families:["Belediye","DSİ","İl Tarım"]},
  {slug:"ketenciler-goleti",grade:"C",speciesSource:/2025 Faaliyet Raporu/i,accessSource:/KM19/i,primaryMissing:"Toplu taşıma durağından sonra izinli ve güvenli genel kıyı erişimi",additionalMissing:["Kızılkanat için rota-özel güçlü kanıt bulunmaması"],families:["İl Tarım","Belediye/ulaşım"]},
  {slug:"mugla-ula-ula-goleti",grade:"C+",speciesSource:/sazan kaydı/i,accessSource:/Ulaşım Ana Planı/i,families:["Belediye saha/planlama","MEB kamusal mekân"]},
  {slug:"burdur-karamanli-karamanli-baraj-golu",grade:"C",speciesSource:/2026 balıklandırma/i,accessSource:/Karamanlı Kaymakamlığı/i,primaryMissing:"Stok tespiti ve olası istihsal programıyla uyumlu güncel amatör kıyı sınırı",additionalMissing:["Kiralama/işletme durumu ve mikro erişim"],families:["Kaymakamlık","İl Tarım"]},
  {slug:"burdur-tefenni-cayli-goleti",grade:"C",speciesSource:/2026 balıklandırma/i,accessSource:/Su Dünyası/i,primaryMissing:"Çaylı yerleşiminden sonra güncel ve izinli kamusal kıyı girişi",additionalMissing:["Sulama işletmesi, kiralama, bariyer ve mikro park alanı"],families:["Bakanlık su yapısı","İl Tarım"]},
  {slug:"balikesir-altieylul-bayat-sehit-aydin-nazillioglu-goleti",grade:"C",speciesSource:/2024 balıklandırması/i,accessSource:/DSİ 25/i,primaryMissing:"Sulama işletmesinden ayrılmış güncel ve güvenli amatör kıyı bölümü",additionalMissing:["Kiralama, özel parsel, bariyer ve mikro park alanı"],families:["DSİ","İl Tarım"]},
  {slug:"cakirli-iznik-golu-piknik-sahili",grade:"C",speciesSource:/sazan balıklandırması/i,accessSource:/Orhangazi Belediyesi/i,primaryMissing:"Ticari 3 No'lu avlakla çakışmadığı doğrulanmış amatör kıyı bölümü",additionalMissing:["Piknik alanında geri atış ve ortak kullanım güvenliği"],families:["Belediye","İl Tarım"]}
];

const uniqueSources = (sources: ResearchSource[]) => [...new Map(sources.map(source => [source.url, source])).values()];

export function applyDailyQuality20261005(routeMap: Map<string, EnrichedMera>) {
  for (const decision of dailyQualityDecisions20261005) {
    const previous = routeMap.get(decision.slug);
    if (!previous) throw new Error(`5 Ekim kalite hedefi bulunamadı: ${decision.slug}`);
    const speciesSource = previous.sources.find(source => decision.speciesSource.test(source.label));
    const accessSource = previous.sources.find(source => decision.accessSource.test(source.label));
    if (!speciesSource || !accessSource) throw new Error(`5 Ekim kanıt eşleşmesi eksik: ${decision.slug}`);
    const ready = decision.grade === "C+";
    const supportedFish = decision.slug === "ketenciler-goleti" ? ["Sazan"] : previous.fish;
    const unresolvedRisks = ready ? [] : [decision.primaryMissing!, ...(decision.additionalMissing || [])];
    routeMap.set(decision.slug, {
      ...previous,
      fish: supportedFish,
      confidence: "C",
      qualityGrade: decision.grade,
      indexing: ready ? "index" : "hold",
      researchedAt: reviewedAt,
      updatedAt: reviewedAt,
      researchStatus: `Genişletilmiş kalite standardı: ${decision.grade}${ready ? " / INDEX" : " / HOLD"}`,
      verification: ready
        ? `5 Ekim 2026: resmî rota kimliği, rota-özel tür/kullanım, güncel 6/2 değişikliği ve kamusal genel erişim çaprazlandı; C+ indeks eşiği sağlandı, mikro kıyı garantisi verilmez.`
        : `5 Ekim 2026: genişletilmiş kaynak zinciri tamamlandı; ${decision.primaryMissing} çözülemediği için C/HOLD korunur.`,
      fishEvidence: supportedFish.map(name => ({
        name,
        evidenceLevel: "Rota özelinde resmî kayıt",
        sourceLabel: speciesSource.label,
        sourceUrl: speciesSource.url,
        note: `${speciesSource.note} Kayıt güncel av başarısı veya stok garantisi değildir.`
      })),
      accessEvidence: [{
        label: accessSource.label,
        value: ready ? "Kamusal genel erişim ve olta kullanımı rota düzeyinde destekleniyor" : "Genel erişim/işletme bağlamı var; izinli mikro kıyı çözülemedi",
        sourceUrl: accessSource.url,
        note: accessSource.note
      }],
      sources: uniqueSources([...(previous.sources || []), law2026]),
      qualityAssessment: {
        model: "expanded-v2",
        reviewedAt,
        identityVerified: true,
        speciesRouteSpecific: true,
        currentLawResolved: ready,
        safePublicAccessVerified: ready,
        independentStrongFamilies: decision.families,
        localContentVerified: true,
        fieldOrEquivalentVerified: false,
        unresolvedRisks
      },
      confidenceProfile: {
        model: "evidence-v1",
        overall: "C",
        reviewedAt,
        identity: {level:"strong",label:"Resmî rota kimliği",note:"Ad, il, ilçe, su türü ve genel konum rota-adlı resmî kaynakla eşleşti."},
        species: {level:"strong",label:"Rota özelinde tür kanıtı",note:`${speciesSource.label}; kayıt güncel av garantisi değildir.`},
        legal: ready
          ? {level:"strong",label:"Güncel mevzuat ve rota kullanımı birlikte çözüldü",note:"2024/21 ana metni, yürürlükteki değişiklikler ve rota özelindeki kullanım kaydı birlikte değerlendirildi."}
          : {level:"partial",label:"Güncel mevzuat incelendi; rota hükmü tamamlanmadı",note:decision.primaryMissing!},
        access: ready
          ? {level:"strong",label:"Kamusal genel erişim bağlamı",note:`${accessSource.label}; belirli mikro kıyı ve anlık saha koşulu garanti edilmez.`}
          : {level:"partial",label:"Genel erişim bağlamı; mikro kıyı teyitsiz",note:decision.primaryMissing!},
        field: {level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu ve güncel zemin hareket günü yeniden kontrol edilmelidir."}
      }
    } as EnrichedMera);
  }
}

export const dailyQualityStats20261005 = {
  reviewed: dailyQualityDecisions20261005.length,
  materiallyImproved: dailyQualityDecisions20261005.length,
  cPlus: dailyQualityDecisions20261005.filter(item => item.grade === "C+").length,
  cHold: dailyQualityDecisions20261005.filter(item => item.grade === "C").length,
  indexReleased: dailyQualityDecisions20261005.filter(item => item.grade === "C+").length
};
