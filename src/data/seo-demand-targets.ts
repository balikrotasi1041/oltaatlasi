export type SeoDemandTarget = {
  title: string;
  description: string;
  priority: number;
  intent: "konum" | "balikcilik" | "il-rehberi";
};

// Search Console talep hasadı: yüksek gösterim, 3–15 sıra ve düşük CTR sinyali
// veren mevcut sayfalar. Yeni ince sayfa üretmek yerine mevcut güçlü URL geliştirilir.
export const seoDemandTargets: Record<string, SeoDemandTarget> = {
  "/meralar/sarimsakli-baraji-genel-amator-kiyi/": {
    title: "Sarımsaklı Barajı Yol Tarifi ve Balık Avı",
    description: "Sarımsaklı Barajı yol tarifi ve balık avı planı: kamusal genel kıyı yaklaşımı, raporlanan balık türleri, erişim, kıyı riskleri ve güncel içsu kuralları.",
    priority: 1,
    intent: "konum",
  },
  "/meralar/yamula-baraji-resmi-amator-balikcilik-alani/": {
    title: "Yamula Barajı Balık Tutma Yerleri ve Yol Tarifi",
    description: "Yamula Barajı balık tutma yerleri ve yol tarifi: resmî amatör alan bağlamı, raporlanan türler, kıyı erişimi, riskler ve güncel mevzuat notları.",
    priority: 1,
    intent: "konum",
  },
  "/meralar/seyhli-goleti-genel-amator-kiyi/": {
    title: "Şeyhli Göleti Yol Tarifi ve Balık Avı",
    description: "Şeyhli Göleti yol tarifi ve balık avı rehberi: genel kamusal yaklaşım, raporlanan balık türleri, kıyı ve zemin yapısı, erişim ile güncel içsu kuralları.",
    priority: 0.9,
    intent: "konum",
  },
  "/meralar/bilecik-kizildamlar-baraj-goleti/": {
    title: "Kızıldamlar Barajı Yol Tarifi ve Balık Avı",
    description: "Bilecik Kızıldamlar Barajı yol tarifi ve balık avı planı: genel konum, sazan kaydı, son yaklaşım, kıyı riskleri ve güncel içsu kuralları.",
    priority: 0.9,
    intent: "konum",
  },
  "/meralar/gumusoren-baraji-genel-amator-kiyi/": {
    title: "Gümüşören Barajı Balık Avı ve Yol Tarifi",
    description: "Gümüşören Barajı balık avı ve yol tarifi: genel kamusal yaklaşım, raporlanan türler, araç erişimi, zemin koşulları ve güncel içsu mevzuatı.",
    priority: 0.9,
    intent: "konum",
  },
  "/meralar/cengelkoy-sahili/": {
    title: "Çengelköy Sahili Yol Tarifi ve Balık Tutma",
    description: "Çengelköy Sahili yol tarifi ve balık tutma rehberi: Boğaz kıyısı erişimi, raporlanan türler, akıntı, yaya yoğunluğu ve güncel saha uyarıları.",
    priority: 0.9,
    intent: "konum",
  },
  "/meralar/kandilli-sahili/": {
    title: "Kandilli Sahili Yol Tarifi ve Balık Tutma",
    description: "Kandilli Sahili yol tarifi ve balık tutma planı: Boğaz kıyısı ulaşımı, raporlanan türler, akıntı, dar kamusal kıyı kullanımı ve güvenlik notları.",
    priority: 0.9,
    intent: "konum",
  },
  "/iller/kirikkale/": {
    title: "Kırıkkale'de Balık Tutulacak Yerler",
    description: "Kırıkkale'de balık tutulacak yerleri Hirfanlı ve Kapulukaya başta olmak üzere tür, ulaşım, güven seviyesi ve güncel içsu kurallarıyla karşılaştır.",
    priority: 0.9,
    intent: "il-rehberi",
  },
  "/iller/duzce/": {
    title: "Düzce'de Balık Tutulacak Yerler",
    description: "Düzce'de balık tutulacak yerleri göl, gölet, baraj ve kıyı rotaları üzerinden; tür, ulaşım, güven seviyesi ve saha notlarıyla karşılaştır.",
    priority: 0.9,
    intent: "il-rehberi",
  },
  "/iller/malatya/": {
    title: "Malatya'da Balık Tutulacak Yerler",
    description: "Malatya'da balık tutulacak yerleri baraj, gölet ve akarsu rotaları üzerinden; tür, ulaşım, güven seviyesi ve güncel içsu notlarıyla karşılaştır.",
    priority: 0.9,
    intent: "il-rehberi",
  },
};

export const seoDemandPaths = new Set(Object.keys(seoDemandTargets));

export const routeDemandPriority = (slug: string) =>
  seoDemandTargets[`/meralar/${slug}/`]?.priority || 0;
