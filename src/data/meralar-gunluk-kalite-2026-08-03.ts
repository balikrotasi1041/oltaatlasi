import type { Mera, SourceLink } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";

const updatedAt="2026-08-03";
const source=(label:string,url:string,note:string):SourceLink=>({label,url,note});
const mergeSources=(current:SourceLink[],extra:SourceLink[])=>[...new Map([...current,...extra].map((item)=>[item.url,item])).values()];
const appendPlanning=(m:Mera,...notes:string[])=>[...m.planningNotes,...notes];
const appendCautions=(m:Mera,...notes:string[])=>[...new Set([...m.cautions,...notes])];
const routeBySlug=new Map(gunlukMeralar.map((m)=>[m.slug,m]));
const requireRoute=(slug:string):Mera=>{const route=routeBySlug.get(slug);if(!route)throw new Error(`Günlük kalite iyileştirmesi için rota bulunamadı: ${slug}`);return route;};

const teblig=source("6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği","https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_","1 Eylül 2024–31 Ağustos 2028 amatör avcılık kuralları; tür, boy, adet, yöntem ve alan sınırlamaları av öncesi yeniden kontrol edilmelidir.");
const teblig2025=source("Tarım ve Orman Bakanlığı – 6/2 Tebliğ 2025/12 değişikliği","https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir","16 Nisan 2025 tarihli değişikliği ve yürürlükteki güncellemeyi doğrular.");
const korfezTur=source("Kocaeli İl Tarım ve Orman Müdürlüğü – İzmit Körfezi türleri","https://kocaeli.tarimorman.gov.tr/Haber/520/Hayalet-Aglardan-Sifir-Atiga","İzmit Körfezi tür varlığı için resmî bölgesel kaynak; belirli kıyı cebinde günlük av garantisi değildir.");
const korfezAkademik=source("Marmara Üniversitesi – İzmit Körfezi balıkları araştırması","https://openaccess.marmara.edu.tr/entities/publication/d1f7a109-3294-4210-bb84-d449211142a4","Körfezdeki tür çeşitliliğini akademik olarak destekler; belirli kıyı noktasında av sonucu çıkarılmaz.");

const karasu=requireRoute("karasu-sahili");
const guzelyali=requireRoute("guzelyali-mudanya-sahili");
const kocaali=requireRoute("kocaali-merkez-sahili");
const degirmendere=requireRoute("degirmendere-sahili");
const halidere=requireRoute("halidere-sahili");
const ulasli=requireRoute("ulasli-sahili");
const hereke=requireRoute("hereke-sahili");
const basiskele=requireRoute("basiskele-sahili");
const cinarcik=requireRoute("cinarcik-sahili");
const yalova=requireRoute("yalova-merkez-sahili");
const mudanya=requireRoute("mudanya-mutareke-sahili");
const gemlik=requireRoute("gemlik-manastir-sahili");

export const gunlukKaliteIyilestirmeleri20260803:Mera[]=[
  {
    ...karasu,
    updatedAt,
    shoreProfile:"Karasu merkez kıyısı Karadeniz'e açık, belediye kaynaklarında yaklaşık 20 kilometre boyunca uzanan geniş kum plaj karakteriyle tanımlanan bir sahildir. Yazın nüfus ve plaj kullanımı belirgin biçimde artar; 2026 sezonunda Karasu sahillerinde cankurtaran kuleleri aktif olduğundan yüzme güvenlik zonları ile olta alanı kesin biçimde ayrılmalıdır. Sakarya Nehri ağzındaki Yeni Mahalle rekreasyon ve balıkçılık düzenlemesi merkez plajından ayrı bir kullanım alanıdır; hassas ağız mikro-konumu bu genel merkez rota piniyle birleştirilmemelidir.",
    planningNotes:appendPlanning(karasu,"2026 cankurtaran sezonunda bayrak, kule ve yüzme şamandırası ile ayrılan bölümler av alanı sayılmamalı; yalnızca yüzme zonundan açıkça ayrılmış kamusal kıyı değerlendirilmelidir."),
    cautions:appendCautions(karasu,"Aktif cankurtaranlı yüzme zonu ve plaj kalabalığı"),
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
  {
    ...degirmendere,
    updatedAt,
    shoreProfile:"Değirmendere merkez kıyısı yürüyüş ve bisiklet kullanımı güçlü, taş tahkimatlı ve yer yer oturma cepleri bulunan yoğun bir kent sahilidir. Kocaeli Büyükşehir Belediyesi Haziran 2026'da sahilde bakım ve düzenleme çalışmalarını sürdürdüğünü duyurduğu için çalışma şeridi, geçici bariyer ve bakım ekipmanı bulunan bölümler av rotasından ayrılmalıdır.",
    transport:"Gölcük–Değirmendere kent koridorundan toplu taşıma ve araç erişimi vardır; son durak ve sefer saati E-Komobil/Kocaeli Büyükşehir hatlarından hareket günü kontrol edilmelidir. Gecelik konaklama kıyıda değil, Gölcük veya Değirmendere yerleşimindeki ruhsatlı seçenekler üzerinden ayrıca doğrulanmalıdır.",
    planningNotes:appendPlanning(degirmendere,"Haziran 2026 kıyı bakım çalışmalarının bulunduğu bölümde geçici bariyer ve ekipman sınırları av alanı sayılmamalıdır.","Sahil kamp alanı değildir; gecelik kalış için Gölcük/Değirmendere merkezindeki ruhsatlı tesisler ayrıca kontrol edilmelidir."),
    sources:mergeSources(degirmendere.sources,[source("Kocaeli Büyükşehir – Değirmendere sahil çalışmaları 2026","https://www.kocaeli.bel.tr/haber/buyuksehir-degirmendere-sahilinde-de-calisiyor-51304.html","17 Haziran 2026 tarihli çalışma sahil bakım ve düzenleme faaliyetlerini doğrular.")]),
  },
  {
    ...halidere,
    updatedAt,
    shoreProfile:"Halıdere kıyısı yerleşim sahili ile D-130 gerisindeki mahalle dokusunun kısa mesafede birleştiği, taş tahkimat ve küçük rekreasyon ceplerinin görüldüğü Gölcük kıyısıdır. Temmuz 2026'da mahalle içindeki üç sokakta yol yenilemesi yapılması ve Haziran ayında Yalı Mescidi çevresindeki düzenleme, son yaya/araç yaklaşımının dönemsel şantiye etkisine açık olduğunu gösterir.",
    transport:"Gölcük–Halıdere koridoruna D-130 ve yerel toplu taşıma ile ulaşılır; Temmuz 2026 yol yenilemeleri nedeniyle mahalle içi son yaklaşım ve park yeri hareket günü yeniden kontrol edilmelidir. Gecelik konaklama için Halıdere kıyısında serbest kamp varsayılmamalı, Gölcük merkezindeki ruhsatlı seçenekler ayrıca incelenmelidir.",
    planningNotes:appendPlanning(halidere,"Mahalle içi yol ve Yalı çevresi bakım alanlarında araç veya takım kurulumu yapılmamalıdır.","Gecelik kalış için Gölcük merkezindeki ruhsatlı seçenekler ayrıca doğrulanmalıdır."),
    sources:mergeSources(halidere.sources,[source("Kocaeli Büyükşehir – Halıdere yol yenilemesi 2026","https://www.kocaeli.bel.tr/haber/golcuk-haliderede-3-sokakta-parke-yollar-yenilendi-51532.html","10 Temmuz 2026 tarihli çalışma mahalle içi erişim koşullarındaki güncel değişikliği doğrular."),source("Kocaeli Büyükşehir – Halıdere Yalı Mescidi düzenlemesi","https://www.kocaeli.bel.tr/amp/haber/yillara-direnen-mescit-buyuksehirle-yenileniyor-51293.html","16 Haziran 2026 tarihli çalışma Yalı çevresindeki güncel bakım bağlamını destekler.")]),
  },
  {
    ...ulasli,
    updatedAt,
    shoreProfile:"Ulaşlı kıyısı açık Marmara dalgasına bakan yerleşim sahili, taş tahkimat ve rekreasyon bölümlerinden oluşur. Şubat 2026'da fırtına hasarına karşı yaklaşık 550 metrelik sahil şeridinde dalgakıran/tahkimat yenilemesi yapılması, bu kıyıda lodos ve taş yüzey güvenliğinin rota seçiminde belirleyici olduğunu gösterir.",
    transport:"D-130 üzerindeki Ulaşlı'ya araç ve yerel toplu taşıma ile ulaşılır. Temmuz 2026'da Ulaşlı alt geçidinin devreye alınması son yaklaşım düzenini değiştirdi; yaya geçişi, park ve kıyıya iniş hareket günü yerinde kontrol edilmelidir. Gecelik kalış için Gölcük merkezindeki ruhsatlı seçenekler ayrıca incelenmelidir.",
    cautions:appendCautions(ulasli,"Yeni tahkimat ve dalgakıran taşlarında kayma/dalga sıçraması","Aktif plaj ve çocuk oyun alanı kullanımından uzak durma"),
    planningNotes:appendPlanning(ulasli,"Yüzme şamandırası veya cankurtaran düzeni bulunan plaj bölümünde av yapılmamalıdır.","Sahilde serbest kamp varsayılmamalı; konaklama Gölcük merkezinden planlanmalıdır."),
    sources:mergeSources(ulasli.sources,[source("Kocaeli Büyükşehir – Ulaşlı sahil tahkimatı 2026","https://www.kocaeli.bel.tr/amp/haber/ulasli-sahil-seridi-firtinaya-karsi-yenileniyor-50373.html","27 Şubat 2026 tarihli çalışma yaklaşık 550 metrelik kıyıda fırtına hasarına karşı yenilemeyi doğrular."),source("Kocaeli Büyükşehir – Ulaşlı alt geçidi 2026","https://www.kocaeli.bel.tr/amp/haber/golcuk-ulasli-alt-gecidi-ile-trafikte-yeni-donem-51505.html","7 Temmuz 2026 tarihli duyuru güncel ulaşım düzenini doğrular.")]),
  },
  {
    ...hereke,
    updatedAt,
    shoreProfile:"Hereke kıyısı tarihî yerleşim önü kamusal sahil cepleri ile sanayi, iskele ve ulaşım işlevlerinin aynı koridorda bulunduğu dar bir İzmit Körfezi kıyısıdır. Rota yalnızca açık kamusal rekreasyon sahilini kapsar; fabrika/liman güvenlik sınırı, bağlı tekne ve operasyon yüzeyi kesin olarak dışarıda tutulmalıdır.",
    transport:"Aşağı ve Yukarı Hereke'ye 181/182 yerel hatları; Hereke–Dilovası–Tavşancıl–İzmit koridoruna 192; Hereke–Gebze–Darıca yönüne 500 hattı bağlantı sağlar. Seferler 2026 içinde güncellendiğinden hareket günü Kocaeli Büyükşehir hat ekranından yeniden kontrol edilmelidir. Konaklama için Körfez veya Gebze merkezindeki ruhsatlı seçenekler ayrıca araştırılmalıdır.",
    cautions:appendCautions(hereke,"Sanayi/liman/iskeletme güvenlik sınırlarına girmeme","Bağlı tekneler ve çalışma iskelelerinden uzak durma"),
    planningNotes:appendPlanning(hereke,"Kamusal sahil ile sanayi/liman sınırı birbirine yaklaştığından ilk ziyaret gündüz yapılmalı ve bariyer/tabela sınırları kesin kabul edilmelidir."),
    sources:mergeSources(hereke.sources,[source("Kocaeli Büyükşehir – Hat 181 Hereke","https://www.kocaeli.bel.tr/hatlar/181/asagi-hereke-kulluk-kisladuzu-yukari-hereke-otobus-sefer-saatleri-ve-duraklari","26 Haziran 2026 güncellemesi Hereke içi toplu taşıma bağlantısını destekler."),source("Kocaeli Büyükşehir – Hat 192 Hereke–Tavşancıl–İzmit","https://www.kocaeli.bel.tr/hatlar/192/hereke-dilovasi-tavsancil-izmit-otobus-sefer-saatleri-ve-duraklari","1 Haziran 2026 güncellemesi bölgesel erişimi destekler."),source("Kocaeli Büyükşehir – Hat 500 Hereke–Gebze–Darıca","https://www.kocaeli.bel.tr/hatlar/500/hereke-gebze-darica-otobus-sefer-saatleri-ve-duraklari","2026 güzergâhı Hereke'nin doğu-batı toplu taşıma bağlantısını doğrular.")]),
  },
  {
    ...basiskele,
    updatedAt,
    shoreProfile:"Başiskele sahili geniş rekreasyon bandı, yaya-bisiklet kullanımı ve yoğun hafta sonu trafiğiyle öne çıkan İzmit Körfezi güney kıyısıdır. Mayıs–Temmuz 2026 arasında belediye trafik ve yaya düzenini yenileyerek ara sokaklarda tek yön planı ve bağımsız bisiklet yolu uygulamaları başlattı; bu nedenle kıyı arkasındaki atış koridoru ve park yaklaşımı eski harita alışkanlığıyla değerlendirilmemelidir.",
    transport:"Başiskele sahiline kent içi yollar ve toplu taşıma ile ulaşılır; Temmuz 2026 tek yön ve bisiklet yolu düzenlemeleri nedeniyle araç yaklaşımı ve park hareket günü yeniden kontrol edilmelidir. Kıyı günübirlik rekreasyon alanıdır; gecelik kalış için Başiskele veya İzmit merkezindeki ruhsatlı seçenekler ayrıca doğrulanmalıdır.",
    cautions:appendCautions(basiskele,"Bağımsız bisiklet yolu ve yoğun yaya akışında arka atış riski","Tekne yanaşma veya marina benzeri operasyon ceplerini dışarıda bırakma"),
    planningNotes:appendPlanning(basiskele,"2026 trafik düzeni nedeniyle araç parkı yalnızca izinli alanlarda yapılmalı; bisiklet/yaya hattı üzerinden kurşun veya çapari savrulmamalıdır."),
    sources:mergeSources(basiskele.sources,[source("Kocaeli Büyükşehir – Başiskele sahil trafik ve yaya düzeni","https://www.kocaeli.bel.tr/amp/haber/basiskele-sahilinde-trafik-ve-yaya-duzeni-yenileniyor-50995.html","12 Mayıs 2026 tarihli çalışma kıyı arkasındaki güncel trafik/yaya düzenlemesini doğrular."),source("Kocaeli Büyükşehir – Başiskele tek yön ve bisiklet yolu","https://www.kocaeli.bel.tr/amp/haber/ara-sokaklar-tek-yon-bisiklet-yolu-bagimsiz-51536.html","11 Temmuz 2026 tarihli duyuru bağımsız bisiklet yolu ve tek yön uygulamasını doğrular.")]),
  },
  {
    ...cinarcik,
    updatedAt,
    shoreProfile:"Çınarcık merkez kıyısı taş tahkimatlı yürüyüş bandı, küçük koy/plaj cepleri ve yazın çok yoğun rekreasyon kullanımıyla değişken bir Marmara sahilidir. Belediye Haziran 2026'da sahil temizliğini yenilerken Temmuz–Eylül programında Cumhuriyet Meydanı–Korukent Sahil Yürüyüş Yolu yürüyüşlerini ve Korukent Halk Plajı'nda su etkinliklerini duyurdu; aktif yüzme/plaj zonu olta rotasından ayrılmalıdır.",
    transport:"Çınarcık merkez sahiline ilçe içi yol ağı ve Yalova bağlantılı toplu taşıma ile ulaşılır; son yaya yaklaşımı sahil yürüyüş bandıdır. Yaz etkinlikleri nedeniyle meydan ve Korukent yönündeki yoğunluk saat bazında değişebilir. Gecelik kalış için Çınarcık ilçe merkezindeki ruhsatlı tesisler ayrıca kontrol edilmelidir.",
    cautions:appendCautions(cinarcik,"Korukent Halk Plajı ve işaretli yüzme zonunda avlanmama","Yaz spor etkinliklerinde yoğun yaya kullanımı"),
    planningNotes:appendPlanning(cinarcik,"Korukent Halk Plajı aktif yüzme alanıdır; rota yalnızca plaj/yüzme şamandıralarından açıkça ayrılmış kamusal kıyı bölümlerini ifade eder."),
    sources:mergeSources(cinarcik.sources,[source("Çınarcık Belediyesi – Sahil temizliği 2026","https://www.cinarcik.bel.tr/temiz-bir-cinarcik-hepimizin-eseri","29 Haziran 2026 duyurusu merkez sahildeki güncel kamusal kullanım ve temizlik çalışmalarını doğrular."),source("Çınarcık Belediyesi – 2026 yaz spor programı","https://www.cinarcik.bel.tr/tr/cinarcik-ta-saglikli-yasam-ve-spor-dolu-bir-yaz-basliyor-649","20 Temmuz 2026 duyurusu sahil yürüyüş hattını ve Korukent Halk Plajı'ndaki aktif su etkinliğini doğrular.")]),
  },
  {
    ...yalova,
    updatedAt,
    shoreProfile:"Yalova merkez kıyısı yürüyüş-bisiklet bandı, parklar, meydan bağlantıları ve deniz ulaşımı işlevlerinin yan yana bulunduğu yoğun kent sahilidir. Belediye yürüyüş rotaları sahil bandını kamusal rekreasyon koridoru olarak tanımlar; vapur/feribot terminali ve bağlı tekne operasyon yüzeyleri bu rota kapsamı dışında tutulmalıdır.",
    transport:"Kent merkezi, otobüs/minibüs bağlantıları ve deniz ulaşımı sahile kısa erişim sağlar; rota terminal operasyon alanına değil açık kamusal yürüyüş kıyısına yönelir. Gecelik konaklama için Yalova merkezindeki ruhsatlı tesisler ayrıca kontrol edilmelidir; sahil parkları kamp alanı olarak kabul edilmemelidir.",
    planningNotes:appendPlanning(yalova,"Vapur/feribot terminali, bağlı tekne ve güvenlik şeritleri av alanı değildir; kamusal yürüyüş kıyısından ayrılmalıdır."),
    sources:mergeSources(yalova.sources,[source("Yalova Belediyesi – Yürüyüş rotaları","https://www.yalova.bel.tr/sayfa/yuruyus-rotalari","Kent merkezindeki sahil yürüyüş koridorunu kamusal kullanım açısından doğrular."),source("Yalova Belediyesi – 2026 yeşil alan ve sahil bakımı","https://www.yalova.bel.tr/haberler/bayram-oncesi-yesil-alanlarda-yogun-mesai","25 Mayıs 2026 tarihli çalışma kent merkezi ve sahil bandındaki güncel bakım faaliyetlerini destekler.")]),
  },
  {
    ...mudanya,
    updatedAt,
    shoreProfile:"Mudanya Mütareke çevresi tarihî kıyı, meydan ve yürüyüş bandının iç içe geçtiği yoğun bir kent sahilidir. Temmuz 2026'da Mütareke Meydanı hafta sonu aile etkinliklerine ayrıldığından etkinlik saatlerinde meydan önü kıyısı güvenli atış koridoru değildir; ayrıca liman, iskele ve balıkçı barınağı çalışma alanları rotadan kesin olarak çıkarılmalıdır.",
    transport:"Mudanya merkeze Bursa bağlantılı toplu taşıma ve karayolu ile ulaşılır; son yaya yaklaşımı Mütareke Meydanı ve sahil bandıdır. Etkinlik günlerinde araç/yaya yoğunluğu artabilir. Gecelik konaklama için Mudanya merkezindeki ruhsatlı otel/pansiyon seçenekleri ayrıca kontrol edilmelidir.",
    cautions:appendCautions(mudanya,"Mütareke Meydanı etkinlik saatlerinde yoğun çocuk/aile kullanımı","Liman, iskele ve balıkçı barınağı operasyon alanlarını dışarıda bırakma"),
    planningNotes:appendPlanning(mudanya,"Hafta sonu etkinliği, tören veya meydan kalabalığı varsa kıyıda takım açılmamalıdır."),
    sources:mergeSources(mudanya.sources,[source("Mudanya Belediyesi – Mütareke'de Oyun Var 2026","https://mudanya.bel.tr/haberler/mutareke-de-oyun-var","10 Temmuz 2026 duyurusu Mütareke Meydanı'nın hafta sonu aktif aile etkinlik kullanımını doğrular.")]),
  },
  {
    ...gemlik,
    updatedAt,
    shoreProfile:"Gemlik Manastır yönündeki kamusal kıyı, yerleşim sahili ve taş tahkimat ceplerinden oluşurken ilçenin liman ve sanayi işlevleri yakın çevrede ayrı operasyon bölgeleri yaratır. Bursa Büyükşehir Belediyesi Mayıs 2026'da Gemlik Körfezi kıyısında yaklaşık 47 bin metrekarelik sahil düzenleme ve iklim uyum çalışmasını hızlandırdığını duyurdu; şantiye/çalışma bölümleri av rotası değildir.",
    transport:"Gemlik merkez ve Manastır kıyı hattına ilçe içi yollar ve Bursa bağlantılı toplu taşıma ile ulaşılır; 2026 sahil düzenleme çalışmaları nedeniyle geçici kapanma ve yönlendirmeler yerinde kontrol edilmelidir. Gecelik kalış için Gemlik merkezindeki ruhsatlı seçenekler ayrıca doğrulanmalıdır.",
    cautions:appendCautions(gemlik,"2026 sahil düzenleme şantiyesi ve geçici bariyerler","Liman, yükleme, sanayi ve tekne operasyon sahalarına girmeme"),
    planningNotes:appendPlanning(gemlik,"Gemlik'in aktif liman/industrial kıyıları bu rota kapsamında değildir; yalnızca açık kamusal rekreasyon sahili değerlendirilebilir."),
    sources:mergeSources(gemlik.sources,[source("Bursa Büyükşehir – Gemlik sahil düzenleme çalışmaları 2026","https://www.bursa.bel.tr/haber/buyuksehir-gemlikte-sahil-duzenleme-calismalarina-hiz-verdi-37216","25 Mayıs 2026 duyurusu Gemlik Körfezi kıyısındaki yaklaşık 47 bin metrekarelik düzenleme ve 450 metrelik yol çalışmasını doğrular.")]),
  },
  {
    slug:"tutunciftlik-sahil-parki",name:"Tütünçiftlik Sahil Parkı",district:"Körfez",province:"Kocaeli",zone:"Kocaeli",waterType:"Deniz",region:"Marmara",
    summary:"Körfez ilçesinin Tütünçiftlik–60 Evler kamusal sahil koridorunda park, yürüyüş alanı ve toplu taşıma durağıyla erişilebilen; sanayi ve iskele operasyonlarından ayrılması gereken genel kıyı rotası.",
    fish:["İstavrit","Kefal","İzmarit","Zargana","Lüfer","Mezgit"],methods:["Çapari","Şamandıra","Hafif dip oltası","Mevsiminde kontrollü spin"],baits:["Suni çapari","Karides","Midye","Ekmek","Küçük silikon"],
    camping:"Uygun değil",vehicleAccess:"Kolay",amenities:["Kamusal sahil parkı","Yürüyüş alanı","Hat 151 toplu taşıma durağı","Körfez ilçe merkezinde market ve yeme içme","Körfez/İzmit merkezinde konaklama seçenekleri"],
    cautions:["Sanayi, yükleme ve özel iskele operasyon sahalarına girmeme","Vapur/tekne manevrası ve bağlama halatlarından uzak durma","Yoğun yaya ve bisiklet kullanımında arka atış güvenliği","Lodoslu havada taş tahkimatta dalga sıçraması"],
    lat:40.7556,lng:29.7901,locationPrecision:"Genel bölge",verification:"Kocaeli Büyükşehir'in Körfez kıyı ve toplu taşıma kayıtları, 2026 sahil temizlik faaliyeti, bölgesel tür kaynakları ve güncel 6/2 mevzuatıyla masa başı doğrulama; saha teyidi yoktur.",updatedAt,publishedAt:updatedAt,confidence:"C",
    image:"/images/meralar/tutunciftlik-sahil-parki.svg",socialImage:"/images/meralar/tutunciftlik-sahil-parki.svg",
    navigationNote:"Pin Tütünçiftlik Sahil Parkı çevresindeki genel kamusal rekreasyon kıyısını gösterir; endüstriyel iskele, yükleme sahası, vapur/tekne operasyonu ve kapalı güvenlik bölümleri kesinlikle av noktası değildir.",
    shoreProfile:"Tütünçiftlik–60 Evler hattı Körfez ilçesinin düzenlenmiş kamusal sahil, park ve yürüyüş ceplerinden oluşur; aynı kıyı koridorunda sanayi ve iskele işlevleri bulunduğundan açık rekreasyon sahili ile operasyon yüzeyleri yerinde net biçimde ayrılmalıdır.",
    transport:"Kocaeli Büyükşehir Hat 151 güzergâhında Tütünçiftlik Sahil Parkı durakları bulunur ve İzmit yönüyle toplu taşıma bağlantısı sağlar. Araçla yaklaşımda yalnızca kamusal park/yol kullanılmalıdır. Gecelik kalış için Körfez veya İzmit merkezindeki ruhsatlı tesisler ayrıca kontrol edilmelidir.",
    crowdNote:"Akşam, hafta sonu ve iyi havada park-yürüyüş kullanımı artar; çocuk, koşucu veya bisikletli bulunan arka koridorda ağır kurşun ve çapari savrulmamalıdır.",
    longIntro:["Tütünçiftlik Sahil Parkı, Körfez ilçesinin Tütünçiftlik–60 Evler kıyı koridorunda yer alan kamusal rekreasyon sahilini temsil eder. Kocaeli Büyükşehir kayıtları bu kesimde sahil parkı duraklarını ve uzun kamusal kıyı düzenlemesini destekler.","İzmit Körfezi tür kayıtları istavrit, kefal, izmarit, zargana, lüfer ve mezgit gibi türlerin bölgesel varlığını destekler; bu liste belirli gün veya noktada av garantisi değildir. Saha doğrulaması olmadığı için güven seviyesi C'dir."],
    planningNotes:["İlk ziyaret gündüz yapılmalı; sanayi/özel iskele sınırı, bariyer ve güvenlik levhaları çevrimiçi kayıttan üstündür.","Sahil parkı kamp alanı değildir; gecelik konaklama Körfez veya İzmit merkezindeki ruhsatlı seçeneklerden ayrıca planlanmalıdır.","Hat 151 seferi ve durakları hareket günü Kocaeli Büyükşehir ekranından yeniden kontrol edilmelidir."],
    seasonalNotes:["İstavrit ve zargana gibi pelajik türlerin kıyıya yaklaşımı yem balığı ve mevsime bağlıdır; lüfer/mezgit kayıtları da körfez ölçeğindedir.","Boy, adet, takım, alıkoyma ve alan kuralları güncel 6/2 Tebliğ ile 2025 değişikliğinden av öncesi kontrol edilmelidir."],
    sources:[source("Kocaeli Büyükşehir – Körfez ilçesi ve sahil düzenlemeleri","https://www.kocaeli.bel.tr/korfez.html","Körfez'in 13,5 km kıyısını ve Tütünçiftlik Fener Gölü çevresindeki yaklaşık 3 km kamusal sahil düzenlemesini açıklar."),source("Kocaeli Büyükşehir – Hat 151 Tütünçiftlik Sahil","https://www.kocaeli.bel.tr/hatlar//151/tutunciftlik-sahil-95-evler-seka-izmit-otogar-otobus-sefer-saatleri-ve-duraklari","3 Temmuz 2026 güncellenen güzergâhta Tütünçiftlik Sahil Parkı duraklarını doğrular."),source("Kocaeli Büyükşehir – 2025 sahil temizliği değerlendirmesi","https://www.kocaeli.bel.tr/haber/buyuksehir-2025te-16-bin-735-kilo-atik-topladi-49940.html","7 Ocak 2026 tarihli haberde Tütünçiftlik–60 Evler kıyı koridorundaki aktif temizlik çalışmalarını doğrular."),korfezTur,korfezAkademik,teblig,teblig2025],
  },
  {
    slug:"derince-harikalar-sahili",name:"Derince Harikalar Sahili",district:"Derince",province:"Kocaeli",zone:"Kocaeli",waterType:"Deniz",region:"Marmara",
    summary:"Derince kent kıyısında Harikalar Sahili'nin kamusal rekreasyon bölümünü kapsayan; çocuk/aile yoğunluğu ve yakın tekne-iskele işlevleri nedeniyle kontrollü atış gerektiren genel kıyı rotası.",
    fish:["İstavrit","Kefal","İzmarit","Zargana","Lüfer","Mezgit"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Midye","Ekmek"],
    camping:"Uygun değil",vehicleAccess:"Kolay",amenities:["Kamusal rekreasyon alanı","Hat 103 Harikalar Sahili durağı","Yürüyüş ve aile kullanım alanları","Derince merkezinde market ve yeme içme","Derince/İzmit merkezinde konaklama seçenekleri"],
    cautions:["Çocuk ve aile yoğunluğu nedeniyle arka atış koridoru","Kayık iskelesi, marina/bağlama ve tekne manevra ceplerinden uzak durma","İşaretli yüzme/kumsal kullanımında avlanmama","Lodos ve kaygan taş tahkimat"],
    lat:40.7486,lng:29.8060,locationPrecision:"Genel bölge",verification:"Kocaeli Büyükşehir'in Harikalar Sahili tanıtımı ve 2026 güncel Hat 103 durağı, bölgesel tür kaynakları ve güncel 6/2 mevzuatıyla masa başı doğrulama; saha teyidi yoktur.",updatedAt,publishedAt:updatedAt,confidence:"C",
    image:"/images/meralar/derince-harikalar-sahili.svg",socialImage:"/images/meralar/derince-harikalar-sahili.svg",
    navigationNote:"Pin Harikalar Sahili'nin genel kamusal park kıyısını gösterir; kayık iskelesi, bağlı tekne, marina/çekek işlevi, yüzme şamandırası veya kapalı operasyon yüzeyi av noktası değildir.",
    shoreProfile:"Harikalar Sahili geniş aile rekreasyonu, yürüyüş alanları ve taş tahkimatlı kıyı ceplerini bir araya getirir; bazı bölümlerde tekne/iskelesel kullanım yakın olduğundan yalnızca açık kamusal kıyı ve güvenli arka atış koridoru değerlendirilmelidir.",
    transport:"Kocaeli Büyükşehir Hat 103 güzergâhında doğrudan 'Derince Harikalar Sahili' durağı bulunur. Araçla yaklaşımda kamusal otopark/yol tercih edilmeli, servis veya tekne alanına girilmemelidir. Gecelik kalış Derince veya İzmit merkezindeki ruhsatlı seçeneklerden ayrıca planlanmalıdır.",
    crowdNote:"Özellikle hafta sonu ve yaz akşamlarında aile/çocuk kullanımı artabilir; arka atış koridoru tam boş değilse takım açılmamalıdır.",
    longIntro:["Derince Harikalar Sahili, kentin deniz kıyısındaki büyük kamusal rekreasyon alanlarından biridir. Güncel belediye otobüs verisinde sahil adına özel durak bulunması, genel kamusal erişimi destekler; ancak kıyı içindeki tekne/iskelesel çalışma cepleri rota dışında tutulur.","İzmit Körfezi için resmî ve akademik tür kayıtları sayfadaki balık listesini bölgesel hazırlık bilgisi olarak destekler. Saha gözlemi ve günlük yakalama verisi olmadığından güven seviyesi C'dir."],
    planningNotes:["Çocuk oyun/aile alanı yoğunken ağır takım veya çapari kullanılmamalıdır.","Kayık iskelesi, bağlı tekne, yüzme işareti ve operasyon alanı görülen bölümden uzaklaşılmalıdır.","Sahil kamp alanı değildir; konaklama Derince/İzmit merkezinden ayrıca doğrulanmalıdır."],
    seasonalNotes:["Pelajik tür hareketi körfez içindeki yem balığı, su sıcaklığı ve rüzgârla değişir; tür listesi günlük av sözü değildir.","6/2 Tebliğ ve 2025/12 değişikliği av öncesi yeniden kontrol edilmelidir."],
    sources:[source("Kocaeli Büyükşehir – Büyüleyici Güzellikler / Harikalar Sahili","https://www.kocaeli.bel.tr/buyuleyici-guzellikler.html","Derince Harikalar Sahili'ni yaklaşık 30 bin metrekarelik kamusal rekreasyon alanı olarak tanımlar."),source("Kocaeli Büyükşehir – Hat 103","https://www.kocaeli.bel.tr/hatlar/103/60-evler-sopali-cinarli-cenesuyu-otobus-sefer-saatleri-ve-duraklari","2026 güncel durak listesinde 'Derince Harikalar Sahili' durağını doğrular."),korfezTur,korfezAkademik,teblig,teblig2025],
  },
  {
    slug:"cengelkoy-sahili",name:"Çengelköy Sahili",district:"Üsküdar",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
    summary:"Çengelköy merkezde Boğaz akıntısına açık kamusal yürüyüş kıyısını kapsayan; aktif vapur iskelesi, yoğun yaya kullanımı ve Kuleli yönündeki güvenlik sınırlarından ayrılması gereken rota.",
    fish:["İstavrit","Kefal","Zargana","Lüfer"],methods:["Çapari","Şamandıra","Hafif dip oltası","Mevsiminde kontrollü spin"],baits:["Suni çapari","Karides","Ekmek","Küçük kaşık"],
    camping:"Uygun değil",vehicleAccess:"Orta",amenities:["Kamusal sahil yürüyüş hattı","Çengelköy vapur iskelesi yakınında toplu taşıma bağlantısı","Mahalle içinde market ve yeme içme","Üsküdar merkezinde konaklama seçenekleri"],
    cautions:["Vapur iskelesi yanaşma ve yolcu operasyonunda avlanmama","Boğaz akıntısı ve gemi geçişinin oluşturduğu ani su hareketi","Yoğun yaya kullanımı ve dar arka atış koridoru","Kuleli yönündeki askerî/güvenlik sınırlarına yaklaşmama"],
    lat:41.0534,lng:29.0522,locationPrecision:"Genel bölge",verification:"Şehir Hatları'nın güncel Çengelköy iskelesi/sefer kayıtları, İBB'nin 2026 kamusal sahil kullanımı ve yerel balıkçılık içerikleri, İstanbul İl Tarım tür bağlamı ve güncel 6/2 mevzuatıyla masa başı doğrulama; saha teyidi yoktur.",updatedAt,publishedAt:updatedAt,confidence:"C",
    image:"/images/meralar/cengelkoy-sahili.svg",socialImage:"/images/meralar/cengelkoy-sahili.svg",
    navigationNote:"Pin Çengelköy merkezdeki genel kamusal sahil yürüyüş bölümünü gösterir. Vapur iskelesinin yanaşma/yolcu alanı, bağlı tekneler ve Kuleli yönündeki askerî veya kapalı güvenlik sahaları kesinlikle rota değildir.",
    shoreProfile:"Çengelköy kıyısı dar mahalle sahili, taş/korkuluklu yürüyüş bandı ve aktif vapur iskelesinin kısa mesafede buluştuğu Boğaz cephesidir; akıntı güçlü olabilir ve kamusal yürüyüş alanının genişliği bölüm bölüm değiştiğinden güvenli arka atış koridoru yerinde seçilmelidir.",
    transport:"Şehir Hatları'nın Çengelköy İskelesi ve Çengelköy–İstinye seferleri deniz ulaşımını doğrular; ayrıca Üsküdar–Beykoz kara toplu taşıma koridoru kullanılır. İskele yalnız ulaşım referansıdır, operasyon yüzeyi av alanı değildir. Gecelik kalış için Üsküdar merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
    crowdNote:"Hafta sonu, gün batımı ve vapur saatlerinde kıyı çok kalabalık olabilir; yaya hattı boş değilse olta açılmamalı ve daha geniş kamusal kıyı bölümüne geçilmelidir.",
    longIntro:["Çengelköy Sahili, Boğaz'ın Anadolu yakasında mahalle merkezi ile aktif vapur iskelesinin yan yana bulunduğu kamusal yürüyüş kıyısını temsil eder. İBB 2026 kent önerilerinde Çengelköy sahilini uzun yürüyüş için anarken, Şehir Hatları güncel iskele ve sefer kullanımını doğrular.","İBB'nin balıkçılık içerikleri Çengelköy/Kuleli çevresinde istavrit ve mevsimsel çinekop-lüfer hareketinden söz eder; İstanbul İl Tarım kayıtları da istavrit/kefal tür varlığını bölgesel olarak destekler. Bunlar belirli gün ve noktada av garantisi değildir."],
    planningNotes:["İskele görevlisi, güvenlik şeridi ve vapur yanaşma alanı çevrimiçi rotadan üstündür; operasyon varken takım açılmamalıdır.","Kuleli yönündeki askerî veya kapalı güvenlik sınırları rota dışında tutulmalıdır.","Sahil kamp alanı değildir; gecelik konaklama Üsküdar merkezindeki ruhsatlı tesislerden ayrıca planlanmalıdır."],
    seasonalNotes:["İstavrit Boğaz'da yaygın bölgesel türdür; lüfer/çinekop hareketi mevsimseldir ve akıntı-yem balığı koşullarına bağlıdır.","Güncel 6/2 Tebliğ ve 2025/12 değişikliğiyle tür, boy, adet, takım ve alan kuralları av öncesi yeniden kontrol edilmelidir."],
    sources:[source("Şehir Hatları – Çengelköy İskelesi","https://sehirhatlari.istanbul/tr/iskeleler/cengelkoy-141","Aktif yolcu iskelesini ve konum/ulaşım bağlamını doğrular; yanaşma yüzeyi av alanı değildir."),source("Şehir Hatları – Çengelköy–İstinye seferi","https://sehirhatlari.istanbul/tr/seferler/ic-hatlar/bogaz-hatlari/cengelkoy-istinye-170","Güncel Boğaz deniz ulaşımı bağlantısını doğrular."),source("İBB – Bayramda İstanbul / Çengelköy Sahili","https://istanbulseninhaber.ibb.istanbul/haber-detay/bayramda-istanbul-sessiz-sokaklar-uzun-kahvaltilar-sehir-kacamaklari","13 Mayıs 2026 tarihli İBB içeriği Çengelköy Sahili'ni kamusal kıyı yürüyüş rotası olarak anıyor."),source("İBB – İstanbul'da balık tutulacak yerler","https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulda-balik-tutulacak-yerle","Çengelköy/Kuleli çevresinde istavrit ve mevsimsel çinekop bilgisini yerel hazırlık kaynağı olarak sunar; günlük av garantisi değildir."),source("İstanbul İl Tarım – istavrit/kefal denetimi","https://istanbul.tarimorman.gov.tr/Haber/2589/3-Ton-Istavrit_kefal-Baligina-El-Konuldu-Ihtiyac-Sahiplerine-Dagitildi","İstanbul/Beykoz bağlamında istavrit ve kefal tür varlığını resmî bölgesel kayıtla destekler."),teblig,teblig2025],
  },
];