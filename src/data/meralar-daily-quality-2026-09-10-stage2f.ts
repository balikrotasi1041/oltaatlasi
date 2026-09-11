import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";
import { applyDailyQuality20260911Stage2G } from "./meralar-daily-quality-2026-09-11-stage2g";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık Mevzuatı",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; sınır, güvenlik, koruma, taşkın ve yerel saha kararları ayrıca uygulanır."
};

export const promoted20260910Stage2F=["ulusal-hakkari-zap-suyu-hakkari-hatti"] as const;

export const applyDailyQuality20260910Stage2F=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260910Stage2F[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-10 Stage2F hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-10 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);

  const valilik:ResearchSource={label:"Hakkâri Valiliği - Coğrafi Yapı",url:"https://hakkari.gov.tr/tarihce-ve-cografi-yapi",note:"Büyük Zap Suyu'nun Hakkâri il merkezinden sonra Çukurca yönüne uzanan yaklaşık 100 km'lik il içi koridorunu resmî olarak doğrular; mikro kıyı erişimi değildir."};
  const ktb:ResearchSource={label:"Hakkâri İl Kültür ve Turizm Müdürlüğü - Gör Hakkâri / Zap Suyu",url:"https://hakkari.ktb.gov.tr/TR-353662/gor--hakkari.html",note:"Zap Suyu'nu ilin ana akarsuyu ve su sporları kullanılan uzun bir koridor olarak tanımlar. Bu kamusal rekreasyon bağlamıdır; olta cebi veya av izni değildir."};
  const academic:ResearchSource={label:"Hakkâri Sempozyumu - Hakkâri İli Su Kaynakları ve Su Ürünleri",url:"https://atam.gov.tr/wp-content/uploads/2023/06/hakkari-sempozyumu.pdf",note:"Hakkâri Üniversitesi/Tarım İl Müdürlüğü katkılı çalışma, başta Zap Suyu olmak üzere il su kaynaklarını ve Hakkâri'de avcılığı yapılan sazan ile alabalığı değerlendirir. Tür kanıtı il/akarsu sistemi ölçeğinde olasılıktır; belirli mikro noktada stok garantisi değildir."};
  const local:ResearchSource={label:"Yüksekova Halkın Sesi - 16 Ocak 2026 Zap Suyu balıkçılığı",url:"https://www.yuksekovahalkinsesigazetesi.com/yuksekovada-buz-tutan-zap-suyunda-balik-avi",note:"2026 kışında Zap Suyu üzerinde fiilî balık avcılığını yerel saha haberiyle destekler. Kullanılan yöntemler güncel amatör mevzuata uygunluk kanıtı değildir; yalnız balık varlığı/kullanım olasılığına destek sağlar."};
  const sources=[...new Map([...(previous.sources||[]),valilik,ktb,academic,local,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Zap Suyu hızlı akımlı, dar vadili ve mevsimsel olarak çok yüksek debili bir akarsudur. Köprü, yol şevi, rafting parkuru, güvenlik alanı, özel parsel, sınır/güvenlik kısıtı ve taşkın riski nedeniyle genel rota belirli bir kıyı cebinin erişilebilir veya güvenli olduğu anlamına gelmez.";

  routeMap.set(slug,{
    ...previous,
    name:"Zap Suyu",
    province:"Hakkâri",
    waterType:"Akarsu",
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    fish:[...new Set([...(previous.fish||[]),"Sazan","Alabalık"])],
    summary:"Zap Suyu'nun Hakkâri içindeki ana akarsu koridoru resmî kaynaklarla, su ürünleri/tür olasılığı akademik-kurumsal çalışmayla ve 2026 fiilî balıkçılık kaydıyla çaprazlandı. Güven C, mikro kıyı veya av garantisi değildir.",
    verification:`2026-09-10 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    researchedAt:"2026-09-10",
    updatedAt:"2026-09-10",
    researchStatus:"2026-09-10 Stage 2: iki resmî rota kaynağı + akademik/kurumsal su ürünleri kaynağı + 2026 yerel saha kaydı çaprazlandı.",
    researchSummary:`Valilik ve İl Kültür Turizm Zap'ın Hakkâri içindeki genel koridorunu doğrular. Hakkâri su ürünleri çalışması başta Zap olmak üzere il su kaynakları bağlamında sazan ve alabalık avcılığını kaydeder; bu yalnız tür bulunma olasılığıdır. 16 Ocak 2026 tarihli yerel kayıt Zap üzerinde fiilî balıkçılığı destekler. ${risk}`,
    accessEvidence:[...(previous.accessEvidence||[]),{label:"Genel kamusal rekreasyon koridoru",value:"Zap Suyu su sporları/rafting koridoru",sourceUrl:ktb.url,note:"Resmî turizm kaynağı su sporları kullanımını doğrular; kesin kıyı girişi, park veya olta alanı değildir."}],
    fishEvidence:[...(previous.fishEvidence||[]),{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Orta-güçlü olasılık · Hakkâri su ürünleri çalışması + güncel saha kullanımı",sourceLabel:academic.label,sourceUrl:academic.url,note:"Çalışma Hakkâri'de, başta Zap Suyu olmak üzere su kaynakları bağlamında sazan avcılığını bildirir; mikro nokta veya güncel yoğunluk garantisi değildir.",recordCount:null,distanceKm:null},{name:"Alabalık",scientificName:"Salmo trutta",evidenceLevel:"Orta-güçlü olasılık · Hakkâri su ürünleri çalışması",sourceLabel:academic.label,sourceUrl:academic.url,note:"Hakkâri su kaynaklarında alabalık avcılığı raporlanır; Zap'ın her kesiminde varlık veya av garantisi olarak yorumlanmaz.",recordCount:null,distanceKm:null}],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"6/2 Tebliğ ile güncel Hakkâri güvenlik/yerel saha kararları hareket günü kontrol edilmelidir."])],
    navigationNote:`Harita bilgisi Zap Suyu'nun Hakkâri içindeki genel akarsu koridorunu temsil eder; kesin yol sonu, park, özel mülk geçişi veya olta cebi değildir. ${risk}`,
    confidenceProfile:{model:"evidence-v1",overall:"C",identity:{level:"strong",label:"Resmî rota kimliği",note:"Valilik ve İl Kültür Turizm Zap Suyu'nun Hakkâri koridorunu doğrular."},legal:{level:"partial",label:"Genel mevzuat + yerel güvenlik kontrolü",note:"6/2 Tebliğ uygulanır; güvenlik, sınır, koruma ve yerel kararlar ayrıca kontrol edilmelidir."},access:{level:"partial",label:"Genel rekreasyon erişim bağlamı",note:"Resmî rafting/su sporu kullanımı genel erişilebilir koridoru destekler; mikro kıyı teyitli değildir."},species:{level:"partial",label:"Çok kaynaklı tür olasılığı",note:"Hakkâri su ürünleri çalışması ve 2026 fiilî balıkçılık kaydı tür/balık varlığı olasılığını destekler; av garantisi değildir."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Akım, taşkın, yol şevi, bariyer, güvenlik ve mülkiyet hareket günü kontrol edilmelidir."},reviewedAt:"2026-09-10"}
  });
  applyDailyQuality20260911Stage2G(routeMap);
  return routeMap;
};
