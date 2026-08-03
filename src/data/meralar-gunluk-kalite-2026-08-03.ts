import type { Mera, SourceLink } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";

const updatedAt="2026-08-03";
const source=(label:string,url:string,note:string):SourceLink=>({label,url,note});
const mergeSources=(current:SourceLink[],extra:SourceLink[])=>[...new Map([...current,...extra].map((item)=>[item.url,item])).values()];
const routeBySlug=new Map(gunlukMeralar.map((m)=>[m.slug,m]));
const requireRoute=(slug:string):Mera=>{const route=routeBySlug.get(slug);if(!route)throw new Error(`Günlük kalite iyileştirmesi için rota bulunamadı: ${slug}`);return route;};

const karasu=requireRoute("karasu-sahili");
const guzelyali=requireRoute("guzelyali-mudanya-sahili");
const kocaali=requireRoute("kocaali-merkez-sahili");

export const gunlukKaliteIyilestirmeleri20260803:Mera[]=[
  {
    ...karasu,
    updatedAt,
    shoreProfile:"Karasu merkez kıyısı Karadeniz'e açık, belediye kaynaklarında yaklaşık 20 kilometre boyunca uzanan geniş kum plaj karakteriyle tanımlanan bir sahildir. Yazın nüfus ve plaj kullanımı belirgin biçimde artar; 2026 sezonunda Karasu sahillerinde cankurtaran kuleleri aktif olduğundan yüzme güvenlik zonları ile olta alanı kesin biçimde ayrılmalıdır. Sakarya Nehri ağzındaki Yeni Mahalle rekreasyon ve balıkçılık düzenlemesi merkez plajından ayrı bir kullanım alanıdır; hassas ağız mikro-konumu bu genel merkez rota piniyle birleştirilmemelidir.",
    sources:mergeSources(karasu.sources,[
      source("Karasu Belediyesi – Turizm","https://karasu.bel.tr/turizm","Karasu'nun uzun kum plajını ve yaz sezonundaki yüksek kullanım yoğunluğunu doğrular."),
      source("Sakarya Büyükşehir – 2026 cankurtaran sezonu","https://sakarya.bel.tr/tr/Haber/cankurtaranlar-goreve-basladi/26521","6 Haziran 2026 itibarıyla Karasu, Kocaali ve Kaynarca sahillerinde 48 kule ve 76 cankurtaranla sezonun başladığını bildirir."),
    ]),
  },
  {
    ...guzelyali,
    updatedAt,
    shoreProfile:"Güzelyalı kıyısı yerleşim sahili, yaya bandı ve liman/balıkçı barınağı işlevlerinin kısa mesafede birbirine yaklaştığı bir Mudanya kıyısıdır. Temmuz 2026'da belediye ekipleri Güzelyalı plajlarındaki kıyı işgallerini kaldırarak yaya erişimini açmıştır; buna karşılık Güzelyalı Limanı ve balıkçı barınağı çevresindeki operasyon, çekek ve proje alanları kamusal sahil yürüyüş bölümünden ayrı tutulmalıdır. Rota yalnızca açık ve engelsiz kamusal kıyı bandını ifade eder, barınak çalışma alanını içermez.",
    sources:mergeSources(guzelyali.sources,[
      source("Mudanya Belediyesi – Güzelyalı kıyı işgallerine müdahale 2026","https://mudanya.bel.tr/arsiv/mudanya-ve-buyuksehir-zabitasi-ndan-kiyi-isgaline-mudahale-1","28 Temmuz 2026 tarihli çalışma Güzelyalı plajlarında kıyı işgallerinin kaldırıldığını ve yaya erişiminin açıldığını doğrular."),
      source("Mudanya Belediyesi – Güzelyalı Sahil Bandı katılım toplantısı","https://mudanya.bel.tr/duyuru/katilim-toplantisi-duyurusu","Güzelyalı Limanı/Balıkçı Barınağı çevresindeki marina, barınak ve çekek işlevlerine ilişkin proje alanını doğrular; operasyon sahası av rotası değildir."),
    ]),
  },
  {
    ...kocaali,
    updatedAt,
    shoreProfile:"Kocaali merkez kıyısı geniş Karadeniz plajı ile yerleşim sahilinin buluştuğu, yazın yüzme ve rekreasyon kullanımının belirgin biçimde arttığı bir hattır. Sakarya Büyükşehir Belediyesi 2026'da merkez sahilde yeni Sahil Park ve Sosyal Gelişim Merkezi projesini duyurmuş; aynı sezon Karasu–Kocaali–Kaynarca kıyılarında cankurtaran hizmetini başlatmıştır. Bu nedenle güncel şantiye/rekreasyon sınırları ile cankurtaranlı yüzme zonları olta atış alanından ayrılmalı, denize açık kumsalda dalga ve rip riski ayrıca değerlendirilmelidir.",
    sources:mergeSources(kocaali.sources,[
      source("Sakarya Büyükşehir – Kocaali Sahil Park ve SGM 2026","https://www.sakarya.bel.tr/tr/Haber/kocaaliye-sahil-park-ve-sgm-ile-deger-katacagiz/26087","11 Mart 2026 tarihli proje merkez sahilde yeni rekreasyon ve sosyal kullanım düzenini doğrular."),
      source("Sakarya Büyükşehir – 2026 cankurtaran sezonu","https://sakarya.bel.tr/tr/Haber/cankurtaranlar-goreve-basladi/26521","Kocaali sahillerinde 2026 yaz sezonunda aktif cankurtaran hizmetini doğrular; yüzme güvenlik zonları av alanı değildir."),
    ]),
  },
];
