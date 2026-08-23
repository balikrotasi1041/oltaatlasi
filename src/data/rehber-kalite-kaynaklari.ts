import type { RehberSource } from "./rehber-katalogu";

const fisheries:RehberSource={label:"Tarım ve Orman Bakanlığı — Su ürünleri avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Türkiye’de güncel amatör avcılık mevzuatı, tebliğ ve resmî bilgilendirmeler için birincil kontrol noktası."};
const mgm:RehberSource={label:"Meteoroloji Genel Müdürlüğü — Tahminler",url:"https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx",note:"Rüzgâr, yağış, sıcaklık ve saatlik hava koşullarını av planından önce güncel olarak kontrol etmek için resmî meteoroloji kaynağı."};
const afadLightning:RehberSource={label:"AFAD — Yıldırım tehlikesine karşı önlemler",url:"https://www.afad.gov.tr/yildirim-tehlikesine-karsi-neler-yapilmali",note:"Açık alanda yıldırım sırasında olta dahil metal ekipmandan uzaklaşma ve güvenli sığınak arama ilkelerini açıklar."};
const afadFlood:RehberSource={label:"AFAD — Sel ve taşkın güvenliği",url:"https://istanbul.afad.gov.tr/afetler-ve-etkileri",note:"Sel suyuna girmeme, bariyerleri aşmama, gece ve akarsu kenarı risklerini değerlendirme için resmî afet güvenliği çerçevesi."};
const health:RehberSource={label:"Sağlık Bakanlığı — İlk yardım ve OED",url:"https://acilafet.saglik.gov.tr/TR-78789/ilk-yardim-ve-oed.html",note:"İlk yardım hazırlığında resmî sağlık bilgisinin esas alınması ve acil durum yaklaşımı için kaynak."};
const ogm:RehberSource={label:"Orman Genel Müdürlüğü — Orman yangını tedbirleri",url:"https://www.ogm.gov.tr/tr/e-kutuphane-sitesi/mevzuat-sitesi/Talimatlar/Orman%20Yang%C4%B1n%C4%B1%20Tedbirleri.pdf",note:"Yangın riski yüksek dönemlerde güncel riskin izlenmesi ve orman yangını tedbirleri için resmî çerçeve."};
const anglingCode:RehberSource={label:"Natural Resources Wales — The Angling Code",url:"https://www.cyfoethnaturiolcymru.gov.uk/days-out/the-countryside-codes/the-angling-code/?lang=en",note:"Kıyıyı diğer kullanıcılarla paylaşma, yaban hayatını rahatsız etmeme ve sorumlu olta kullanımı için kamusal uygulama ilkeleri."};

export const guideQualitySources=(category:string):RehberSource[]=>{
  switch(category){
    case "Hava": return [fisheries,mgm,afadLightning,afadFlood];
    case "Güvenlik": return [fisheries,health,afadLightning,afadFlood];
    case "Kamp": return [fisheries,ogm,afadLightning,afadFlood];
    case "Mera":
    case "Navigasyon": return [fisheries,afadFlood,anglingCode];
    case "Etik": return [fisheries,anglingCode];
    case "Yem":
    case "Teknik":
    case "Düğüm":
    case "Ekipman":
    case "Mevsim": return [fisheries,anglingCode];
    default: return [fisheries];
  }
};
