import type { Mera, SourceLink } from "./meralar";
import { meralar as temelMeralar } from "./meralar";

const updatedAt="2026-08-03";
const source=(label:string,url:string,note:string):SourceLink=>({label,url,note});
const mergeSources=(current:SourceLink[],extra:SourceLink[])=>[...new Map([...current,...extra].map((item)=>[item.url,item])).values()];
const appendPlanning=(m:Mera,...notes:string[])=>[...m.planningNotes,...notes];

type Patcher=(m:Mera)=>Mera;
const patches:Record<string,Patcher>={
  "ketenciler-goleti":(m)=>({
    ...m,
    updatedAt,
    confidence:"C",
    verification:"Ketenciler Göleti adı ve sazan balıklandırması Kocaeli İl Tarım ve Orman Müdürlüğünün 2022 duyurusu ile 2025 faaliyet raporunda doğrulandı. Ketenciler yerleşimi ve güncel toplu taşıma Kocaeli Büyükşehir kaynaklarından kontrol edildi; gölet kıyısının kamusal erişimi ve amatör avcılığa hukuki uygunluğu için saha teyidi yoktur.",
    transport:"Ketenciler yerleşimi Kocaeli Büyükşehir kayıtlarında Kartepe ilçesine bağlıdır ve il merkezine yaklaşık 20 km mesafede gösterilir. KM19 Ketenciler–Kirazoğlu–İzmit hattının 2 Temmuz 2026 güncel seferleri yerleşime toplu taşıma bağlantısını doğrular. İl Tarım balıklandırma kayıtları göleti İzmit başlığı altında sınıflandırdığından idari sınır ve son kıyı yaklaşımı genel bölge hassasiyetinde tutulmalı; araçla kıyıya doğrudan erişim varsayılmamalıdır.",
    planningNotes:appendPlanning(m,"Gecelik kalış gölet kıyısında varsayılmamalıdır; konaklama için Kartepe veya İzmit ilçe merkezindeki ruhsatlı seçenekler seyahat tarihinde ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[
      source("Kocaeli İl Tarım ve Orman Müdürlüğü – Ketenciler Göleti balıklandırması","https://kocaeli.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=454","7 Eylül 2022 tarihli resmî kayıtta Ketenciler Göleti için 40.000 sazan yavrusu balıklandırması yer alır; bu kayıt kıyıdan günlük av garantisi değildir."),
      source("Kocaeli İl Tarım ve Orman Müdürlüğü – 2025 Faaliyet Raporu","https://kocaeli.tarimorman.gov.tr/Belgeler/pdf_dosyalar_/Kocaeli%20%C4%B0l%20Tar%C4%B1m%20ve%20Orman%20M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC%202025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf","2025 balıklandırılan su kaynakları tablosunda Ketenciler Göleti 40.000 adet ile yeniden listelenir; idari tabloda İzmit altında gösterilir."),
      source("Kocaeli Büyükşehir Belediyesi – Kartepe / Ketenciler","https://www.kocaeli.bel.tr/kartepe.html","Ketenciler yerleşimini Kartepe ilçesine bağlı köyler arasında ve il merkezine yaklaşık 20 km mesafede doğrular."),
      source("Kocaeli Büyükşehir Belediyesi – KM19 Ketenciler hattı","https://www.kocaeli.bel.tr/hatlar//KM19/ketenciler-kirazoglu-izmit-otobus-sefer-saatleri-ve-duraklari","2 Temmuz 2026 güncellemesiyle Ketenciler–İzmit toplu taşıma bağlantısını doğrular; gölet kıyısına doğrudan erişim kanıtı değildir."),
    ]),
  }),
  "galata-koprusu":(m)=>({
    ...m,updatedAt,
    planningNotes:appendPlanning(m,"Köprü ve yakın kıyı günübirlik kent kullanımıdır; kamp alanı değildir. Gecelik konaklama gerekiyorsa Fatih veya Beyoğlu ilçe merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[source("İBB – Unkapanı/Azapkapı kıyısı iklim ve afet dayanıklılığı planı 2026","https://webapi.ibb.istanbul/uploads/Unkapani_Ataturk_Koprusu_CSYP_ILBANK_TR_02022026_clean_8001e507c6.pdf","2026 planında Haliç kıyısındaki amatör balıkçılık kullanımını ve Galata Köprüsü'nün yoğun balıkçılık noktası olduğunu; proje döneminde geçici etkiler oluşabileceğini açıklar.")]),
  }),
  "ataturk-unkapani-koprusu":(m)=>({
    ...m,updatedAt,
    planningNotes:appendPlanning(m,"Köprü üzerinde geceleme veya kamp planlanmamalıdır. Gecelik konaklama için Fatih/Beyoğlu merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmeli; bakım ve deniz trafiğine açılma saatleri seyahat günü yeniden doğrulanmalıdır."),
    sources:mergeSources(m.sources,[
      source("İBB Çevre Koruma – Atatürk (Unkapanı) Köprüsü","https://cevre.ibb.istanbul/deniz-hizmetleri-sube-mudurlugu/ataturk-unkapani-koprusu/","Köprünün deniz trafiğine açıldığı gece saatlerini ve periyodik bakım kapanmalarını açıklar; aktif operasyon sırasında av yapılmamalıdır."),
      source("İBB – Unkapanı/Azapkapı kıyısı iklim ve afet dayanıklılığı planı 2026","https://webapi.ibb.istanbul/uploads/Unkapani_Ataturk_Koprusu_CSYP_ILBANK_TR_02022026_clean_8001e507c6.pdf","2026 planı kıyıdaki amatör balıkçılık noktalarını ve inşaat/bakım dönemlerindeki geçici etkileri değerlendirir."),
    ]),
  }),
  "sarayburnu-sahili":(m)=>({
    ...m,updatedAt,
    shoreProfile:"Sarayburnu kıyısı tarihî yarımadanın ucunda, İBB'nin yenilediği park ile güçlendirilmiş sahil hattının birleştiği yoğun bir kent kıyısıdır. Düzenlemede sahil yürüyüş rotası, geniş yeşil alan, oturma ve panoramik bölümler bulunur; kıyı taş tahkimatı ve yaya koridoru birbirine yakındır. Yarı maraton ve benzeri büyük etkinlik günlerinde Sarayburnu–Eminönü hattında geçici yol ve yaya düzenlemeleri oluşabildiğinden güvenli atış koridoru yerinde kontrol edilmelidir.",
    planningNotes:appendPlanning(m,"Sarayburnu Parkı kamp veya geceleme alanı değildir; gecelik konaklama için Fatih ilçe merkezindeki ruhsatlı tesisler seyahat tarihinde ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[
      source("İBB – Sarayburnu Parkı düzenlemesi","https://icraat.ibb.istanbul/proje-detay/fatih-sarayburnu-parki-duzenlemesi-acilisini-yaptik/56981d6c-f41f-4fb2-92f9-cacb22d7c836","Park, güçlendirilmiş kıyı, sahil yürüyüş yolu, yeşil alan ve kamusal kullanım karakterini doğrular."),
      source("İBB – 2026 İstanbul Yarı Maratonu","https://istanbulseninhaber.ibb.istanbul/haber-detay/turkiye-is-bankasi-21-istanbul-yari-maratonu-yaklasiyor","2026 yarış güzergâhında Yenikapı–Sarayburnu–Eminönü hattındaki geçici trafik ve etkinlik yoğunluğu bağlamını doğrular."),
    ]),
  }),
  "yenikapi-sahili":(m)=>({
    ...m,updatedAt,
    shoreProfile:"Yenikapı kıyısı yalnızca taş tahkimatlı bir sahil değildir; büyük etkinlik alanı, Marmaray/metro bağlantıları ve geniş yaya akışının aynı bölgede toplandığı kent ölçekli bir kullanım koridorudur. 2026 İstanbul Yarı Maratonu'nun başlangıç ve bitiş alanının Yenikapı olması, belirli günlerde bariyer, etkinlik kurulumu ve yoğun yaya trafiğinin kıyı kullanımını değiştirebildiğini gösterir. Olta ancak etkinlik, ulaşım ve güvenlik alanlarından belirgin biçimde ayrılmış kamusal kıyı bölümünde değerlendirilebilir.",
    planningNotes:appendPlanning(m,"Yenikapı etkinlik alanı kamp veya geceleme alanı olarak kabul edilmemelidir; gecelik konaklama için Fatih merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[
      source("İBB Enstitü İstanbul – Yenikapı etkinlik alanı 2026","https://enstitu.ibb.istanbul/portal/etkinlikler_detay.aspx?RegID=21582","2026'da Yenikapı Dr. Mimar Kadir Topbaş Gösteri ve Sanat Merkezi çevresindeki aktif etkinlik kullanımını doğrular."),
      source("İBB – 2026 İstanbul Yarı Maratonu","https://istanbulseninhaber.ibb.istanbul/haber-detay/turkiye-is-bankasi-21-istanbul-yari-maratonu-yaklasiyor","Yenikapı'nın yarış başlangıç/bitiş merkezi oluşunu ve etkinlik günü ulaşım düzenlemelerini doğrular."),
    ]),
  }),
  "tarabya-sahili":(m)=>({
    ...m,updatedAt,
    planningNotes:appendPlanning(m,"Tarabya sahil hattı günübirlik kent rekreasyonu için kullanılır; kıyıda kamp varsayılmamalıdır. Gecelik konaklama için Sarıyer ilçesindeki ruhsatlı seçenekler seyahat tarihinde ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[
      source("İBB – İstanbul koşu rotaları / Tarabya–Rumeli Kavağı","https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbul-kosu-rotalari","Tarabya–Rumeli Kavağı hattını aktif kamusal kıyı rotası olarak tanımlar ve yaya/araç yoğunluğu konusunda dikkat uyarısı içerir."),
      source("İBB Kültürel Miras – Sarıyer","https://kulturelmiras.ibb.istanbul/portfolio-item/sariyer-2/","Tarabya'nın Boğaz kıyısındaki yerleşim ve tarihî kıyı karakterini destekler."),
    ]),
  }),
  "istinye-sahili":(m)=>({
    ...m,updatedAt,
    planningNotes:appendPlanning(m,"İstinye kıyısında aktif yolcu ve arabalı vapur iskelelerinin operasyon alanları rota dışında tutulmalıdır. Sahilde kamp yapılmamalı; gecelik konaklama için Sarıyer ilçesindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[
      source("Şehir Hatları – İstinye İskelesi","https://sehirhatlari.istanbul/tr/iskeleler/istinye-147","Aktif yolcu iskelesini doğrular; yanaşma ve operasyon yüzeyi av alanı değildir."),
      source("Şehir Hatları – İstinye Arabalı İskelesi","https://sehirhatlari.istanbul/tr/iskeleler/istinye-arabali-148","Aktif arabalı vapur operasyonunu doğrular; araç/deniz trafiği alanı kapsam dışıdır."),
      source("Şehir Hatları – İstinye İskelesi güçlendirme duyurusu","https://sehirhatlari.istanbul/tr/duyurular/istinye-iskelesi-duyurusu-3590","Güçlendirme sonrası seferlerin 14 Temmuz 2025 itibarıyla yeniden başladığını bildirir."),
    ]),
  }),
  "sarkoy-merkez-sahili":(m)=>({
    ...m,updatedAt,
    planningNotes:appendPlanning(m,"Şarköy merkez sahili yazın aktif halk plajı kullanımına sahiptir; yüzme şamandıraları içinde av yapılmamalı ve kıyıda serbest kamp varsayılmamalıdır. Gecelik konaklama için Şarköy ilçe merkezindeki ruhsatlı otel/pansiyon seçenekleri ayrıca kontrol edilmelidir."),
    sources:mergeSources(m.sources,[source("Tekirdağ Büyükşehir Belediyesi – Şarköy halk plajları 2026","https://www.tekirdag.bel.tr/haber/51288","29 Haziran 2026 duyurusu Şarköy merkez dahil 14 halk plajında yüzme suyu analizlerinin uygun çıktığını bildirir; yazın yüzme alanları olta rotasından ayrılmalıdır.")]),
  }),
  "karasu-sahili":(m)=>({
    ...m,updatedAt,
    shoreProfile:"Karasu merkez kıyısı Karadeniz'e açık, belediye kaynaklarında yaklaşık 20 kilometre boyunca uzanan geniş kum plaj karakteriyle tanımlanan bir sahildir. Yazın nüfus ve plaj kullanımı belirgin biçimde artar; 2026 sezonunda Karasu sahillerinde cankurtaran kuleleri aktif olduğundan yüzme güvenlik zonları ile olta alanı kesin biçimde ayrılmalıdır. Sakarya Nehri ağzındaki Yeni Mahalle rekreasyon ve balıkçılık düzenlemesi merkez plajından ayrı bir kullanım alanıdır; hassas ağız mikro-konumu bu genel merkez rota piniyle birleştirilmemelidir.",
    sources:mergeSources(m.sources,[
      source("Karasu Belediyesi – Turizm","https://karasu.bel.tr/turizm","Karasu'nun uzun kum plajını ve yaz sezonundaki yüksek kullanım yoğunluğunu doğrular."),
      source("Sakarya Büyükşehir – 2026 cankurtaran sezonu","https://sakarya.bel.tr/tr/Haber/cankurtaranlar-goreve-basladi/26521","6 Haziran 2026 itibarıyla Karasu, Kocaali ve Kaynarca sahillerinde 48 kule ve 76 cankurtaranla sezonun başladığını bildirir."),
    ]),
  }),
  "guzelyali-mudanya-sahili":(m)=>({
    ...m,updatedAt,
    shoreProfile:"Güzelyalı kıyısı yerleşim sahili, yaya bandı ve liman/balıkçı barınağı işlevlerinin kısa mesafede birbirine yaklaştığı bir Mudanya kıyısıdır. Temmuz 2026'da belediye ekipleri Güzelyalı plajlarındaki kıyı işgallerini kaldırarak yaya erişimini açmıştır; buna karşılık Güzelyalı Limanı ve balıkçı barınağı çevresindeki operasyon, çekek ve proje alanları kamusal sahil yürüyüş bölümünden ayrı tutulmalıdır. Rota yalnızca açık ve engelsiz kamusal kıyı bandını ifade eder, barınak çalışma alanını içermez.",
    sources:mergeSources(m.sources,[
      source("Mudanya Belediyesi – Güzelyalı kıyı işgallerine müdahale 2026","https://mudanya.bel.tr/arsiv/mudanya-ve-buyuksehir-zabitasi-ndan-kiyi-isgaline-mudahale-1","28 Temmuz 2026 tarihli çalışma Güzelyalı plajlarında kıyı işgallerinin kaldırıldığını ve yaya erişiminin açıldığını doğrular."),
      source("Mudanya Belediyesi – Güzelyalı Sahil Bandı katılım toplantısı","https://mudanya.bel.tr/duyuru/katilim-toplantisi-duyurusu","Güzelyalı Limanı/Balıkçı Barınağı çevresindeki marina, barınak ve çekek işlevlerine ilişkin proje alanını doğrular; operasyon sahası av rotası değildir."),
    ]),
  }),
  "kocaali-merkez-sahili":(m)=>({
    ...m,updatedAt,
    shoreProfile:"Kocaali merkez kıyısı geniş Karadeniz plajı ile yerleşim sahilinin buluştuğu, yazın yüzme ve rekreasyon kullanımının belirgin biçimde arttığı bir hattır. Sakarya Büyükşehir Belediyesi 2026'da merkez sahilde yeni Sahil Park ve Sosyal Gelişim Merkezi projesini duyurmuş; aynı sezon Karasu–Kocaali–Kaynarca kıyılarında cankurtaran hizmetini başlatmıştır. Bu nedenle güncel şantiye/rekreasyon sınırları ile cankurtaranlı yüzme zonları olta atış alanından ayrılmalı, denize açık kumsalda dalga ve rip riski ayrıca değerlendirilmelidir.",
    sources:mergeSources(m.sources,[
      source("Sakarya Büyükşehir – Kocaali Sahil Park ve SGM 2026","https://www.sakarya.bel.tr/tr/Haber/kocaaliye-sahil-park-ve-sgm-ile-deger-katacagiz/26087","11 Mart 2026 tarihli proje merkez sahilde yeni rekreasyon ve sosyal kullanım düzenini doğrular."),
      source("Sakarya Büyükşehir – 2026 cankurtaran sezonu","https://sakarya.bel.tr/tr/Haber/cankurtaranlar-goreve-basladi/26521","Kocaali sahillerinde 2026 yaz sezonunda aktif cankurtaran hizmetini doğrular; yüzme güvenlik zonları av alanı değildir."),
    ]),
  }),
};

export const retiredRouteSlugs20260803=new Set<string>([
  "kandira-akgol",
]);

export const kaliteIyilestirmeleri20260803:Mera[]=temelMeralar
  .filter((m)=>Boolean(patches[m.slug]))
  .map((m)=>patches[m.slug](m));
