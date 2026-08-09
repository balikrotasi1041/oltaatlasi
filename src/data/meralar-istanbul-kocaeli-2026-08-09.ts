import type { Mera, SourceLink } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";
import { istanbulKocaeliIyilestirmeleri20260808 } from "./meralar-istanbul-kocaeli-2026-08-08";

const teblig:SourceLink={label:"Tarım ve Orman Bakanlığı — 6/2 Amatör Avcılık Tebliği",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024-31 Ağustos 2028 dönemi için tür, boy, adet, yöntem ve alan kuralları; av günü güncel metin tekrar kontrol edilmelidir."};
const degisiklik:SourceLink={label:"Tarım ve Orman Bakanlığı — 6/2 Tebliğ 2025/12 değişikliği",url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",note:"16 Nisan 2025 değişikliğini doğrular; 1 Ocak 2026'dan itibaren sualtı tüfeğiyle avcılıkta belge zorunluluğu dahil güncel hükümler için resmî kaynak."};
const istanbulDenetim:SourceLink={label:"İstanbul İl Tarım ve Orman Müdürlüğü — 2026 amatör balıkçılık denetimi",url:"https://istanbul.tarimorman.gov.tr/Haber/3125/Galata-Ve-Unkapani-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim-Gerceklestirildi",note:"17 Haziran 2026 tarihli denetim, 6/2 Tebliğ hükümlerinin İstanbul'da fiilen uygulandığını doğrular."};
const kurucesmeIbb:SourceLink={label:"İBB İstanbul Senin — Kuruçeşme-Ortaköy kıyı hattı",url:"https://istanbulseninhaber.ibb.istanbul/haber-detay/kurucesme-ve-ortakoy-arasinda-kesfedebileceginiz-tarihi-yerler-ve-yapilar",note:"Kuruçeşme-Ortaköy sahil yürüyüş hattını ve yerel yapıları İBB kaynağıyla doğrular; etkinlik/işletme alanları av noktası sayılmaz."};
const arnavutkoyIbb:SourceLink={label:"İBB İstanbul Senin — Arnavutköy ve Akıntıburnu",url:"https://istanbulseninhaber.ibb.istanbul/haber-detay/arnavutkoyde-gezilecek-yerler",note:"Arnavutköy sahilini ve Akıntıburnu'ndaki güçlü yüzey akıntısını yerel bağlamla doğrular."};
const istanbulKosulari:SourceLink={label:"İBB İstanbul Senin — Boğaz kıyı koşu rotaları",url:"https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbul-kosu-rotalari",note:"Kuruçeşme-Bebek dahil kıyı koridorunun yoğun kamusal yaya kullanımı taşıdığını destekler."};
const kocaeliSahiller:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Körfez sahil parkları",url:"https://www.kocaeli.bel.tr/haber/korfez-ilcesi-sahil-parklari-tertemiz-34896.html",note:"Tütünçiftlik, 60 Evler, Hereke, Kirazlıyalı ve Yarımca sahil parklarını belediye sorumluluğundaki kamusal kullanım alanları olarak listeler."};
const yarimcaPark:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Yarımca Sahil Parkı",url:"https://www.kocaeli.bel.tr/haber/buyuksehirin-yarimca-sahil-parki-cok-guzel-oldu-44759.html",note:"2023'te tamamlanan parkta yürüyüş-bisiklet yolu, yeşil alan ve oturma alanları bulunduğunu doğrular."};
const yarimcaKultur:SourceLink={label:"Kültür ve Turizm Bakanlığı Kültür Portalı — Yarımca Sahili",url:"https://www.kulturportali.gov.tr/turkiye/kocaeli/gezilecekyer/yarimca-sahili",note:"Yarımca Sahili'nin halka açık kıyı düzenlemesi, genel ulaşım ve olta kullanım geçmişi için destekleyici kamu kaynağı."};
const kocaeliTurizm:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Kocaeli Turizm Rehberi",url:"https://www.kocaeli.bel.tr/webfiles/userfiles/files/birimler/kultur-ve-sosyal-isler-dairesi-baskanligi/Turizm%20Sube/TUR%C4%B0ZM%20REHBER%C4%B0%2013_2_23.pdf",note:"İzmit Körfezi'nde 45 balık türü bulunduğunu; istavrit, kefal, zargana, lüfer, sardalya, palamut ve mezgit gibi türlerin körfez ölçeğinde raporlandığını belirtir. Belirli kıyıda av garantisi değildir."};
const kocaeliBaliklandirma:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — İzmit Körfezi Balıklandırma",url:"https://www.kocaeli.bel.tr/hizmet/baliklandirma-92.html",note:"Tarım ve Orman Bakanlığı/TAGEM iş birliğiyle körfezde tür çeşitliliğini destekleyen resmî programı doğrular; belirli kıyıda av kanıtı değildir."};
const degirmendere2026:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Değirmendere sahili bakım 2026",url:"https://www.kocaeli.bel.tr/haber/buyuksehir-degirmendere-sahilinde-de-calisiyor-51304.html",note:"17 Haziran 2026'da yürüyüş ve bisiklet yollarındaki bakım çalışmalarını ve yoğun kamusal kullanımı doğrular."};
const balikSalimi:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Körfez balıklandırma geçmişi",url:"https://www.kocaeli.bel.tr/haber/baskan-buyukakinin-gurur-tablosu-48082.html",note:"2017-2025 arasında Değirmendere, Ulaşlı, Hereke, Eskihisar, Tavşancıl ve diğer körfez noktalarında levrek, kalkan ve çipura salımı yapıldığını doğrular; kıyıdan yakalama garantisi değildir."};

const iskele=(slug:string,label:string):SourceLink=>({label:`Şehir Hatları — ${label} İskelesi`,url:`https://sehirhatlari.istanbul/tr/iskeleler/${slug}`,note:"İskelenin konum ve vapur operasyonunu doğrular; yanaşma ve operasyon sahası av rotası değildir."});
const localSources:Record<string,SourceLink[]>={
  "emirgan-sahili":[iskele("emirgan-144","Emirgan"),istanbulKosulari],
  "bebek-sahili":[iskele("bebek-136","Bebek"),istanbulKosulari],
  "arnavutkoy-besiktas-sahili":[iskele("arnavutkoy-23","Arnavutköy"),arnavutkoyIbb],
  "ortakoy-sahili":[iskele("ortakoy-156","Ortaköy"),kurucesmeIbb],
  "kurukcesme-sahili":[kurucesmeIbb,istanbulKosulari],
  "pasabahce-sahili":[iskele("pasabahce-157","Paşabahçe"),{label:"Şehir Hatları — Paşabahçe iskele tarihçesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/pasabahce-157",note:"Eski araba vapuru yanaşma alanının işlevini yitirdikten sonra çocuk parkına dönüştürüldüğünü; aktif yolcu iskelesinin ise ayrı operasyon alanı olduğunu açıklar."}],
  "kanlica-sahili":[{label:"Şehir Hatları — Kanlıca İskelesi",url:"https://s2.sehirhatlari.istanbul/tr/iskeleler/kanlica-150",note:"Aktif yolcu iskelesini ve hemen yanındaki küçük kayık limanını doğrular; bu iki operasyon alanı av rotası değildir."},istanbulKosulari],
};

const sourceBases=[...istanbulKocaeliIyilestirmeleri20260808,...gunlukMeralar];
const base=(slug:string):Mera=>{const found=sourceBases.find((route)=>route.slug===slug);if(!found)throw new Error(`2026-08-09 iyileştirme tabanı bulunamadı: ${slug}`);return found;};
const refreshed=(slug:string,patch:Partial<Mera>):Mera=>{const original=base(slug);return{...original,...patch,updatedAt:"2026-08-09",verification:"Masa başı doğrulama; saha teyidi yok",confidence:"C",socialImage:original.image,sources:[...(localSources[slug]||[]),...(patch.sources||[]),teblig,degisiklik]};};

export const istanbulKocaeliIyilestirmeleri20260809:Mera[]=[
  refreshed("emirgan-sahili",{
    shoreProfile:"Emirgan kıyısında aktif Şehir Hatları iskelesi, Emirgan Korusu önü yaya akışı ve Boğaz ana akıntısı dar bir şeritte birleşir. İskele önünün resmî kayıtta 7,7 metreye ulaşan derinliği, kıyıdan hemen sonra derinleşen suyu gösterir ancak iskele operasyon alanı av için dışlanmalıdır.",
    transport:"Sarıyer-Beşiktaş kıyı otobüsleri ve aktif Emirgan İskelesi bölgeye erişim sağlar. Araç parkı özellikle koru ve sahil yoğunluğunda sınırlı olabilir; son yaklaşım yaya yapılmalı, vapur yanaşma hattı ile durak önü boş bırakılmalıdır. Gecelik kalış gerekiyorsa Sarıyer veya Beşiktaş merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
    crowdNote:"Koru ziyaretleri, sahil yürüyüşü ve vapur saatleri aynı zaman diliminde yoğunluk yaratabilir. Arka atış koridoru yaya aksına taşıyorsa takım açılmamalıdır.",
    navigationNote:"Pin Emirgan'ın genel kamusal sahiline yönlendirir; aktif Şehir Hatları iskelesi, bağlama noktaları ve personel çalışma alanı kesinlikle av noktası değildir.",
    longIntro:["Emirgan rotasının ayırt edici iki unsuru Emirgan Korusu'nun hafta sonu yaya yoğunluğu ile Boğaz ana akıntısının aktif vapur iskelesi önünde birleşmesidir.","Bu sayfa iskelede av önermez. Yalnız operasyon sahasından, bağlı teknelerden ve yoğun yaya koridorundan bütünüyle ayrılan kamusal kıyı cepleri planlama amacıyla değerlendirilir."],
    planningNotes:["Vapur yaklaşımı veya personel hareketi görülen iskelenin iki yanını dışla.","Koru giriş-çıkış yoğunluğu nedeniyle gündüz kısa keşifte arka atış alanını gözle.","Günübirlik kullanım varsay; geceleme gerekiyorsa Sarıyer/Beşiktaş merkezde ruhsatlı konaklamayı ayrıca doğrula."],
    seasonalNotes:["Boğaz akıntısı ve yem balığı hareketi saatlik değişebilir; istavrit, zargana ve lüfer gibi bölgesel türler av garantisi değildir.","Boy, adet, yöntem ve alan kısıtları için 6/2 Tebliğ ve 2025/12 değişikliğini av günü yeniden kontrol et."],
    cautions:["Aktif Emirgan İskelesi operasyon sahasına girmeme","Koru ve sahil yaya aksında savurma yapmama","Boğaz akıntısı ve yüksek kıyı kenarında kayma riski"]
  }),
  refreshed("bebek-sahili",{
    shoreProfile:"Bebek Koyu'nun nispeten korunaklı iç kısmı ile açık Boğaz akıntısı kısa mesafede değişir. Aktif Bebek İskelesi önünde minimum su derinliği 1,14 metre, maksimum 4,1 metre olarak kayıtlıdır; bağlı tekne ve iskele yanaşma sahası av rotasının dışında tutulmalıdır.",
    transport:"Kıyı otobüsleri ve Bebek İskelesi bölgeye toplu taşıma erişimi verir. Sahil yolunda park baskısı yüksektir; araç yerine toplu taşıma ve kısa yaya yaklaşımı daha gerçekçidir. Gecelik kalış için Bebek kıyısında tesis varsayılmamalı, Beşiktaş/Sarıyer ruhsatlı seçenekleri ayrıca kontrol edilmelidir.",
    crowdNote:"Dar yürüyüş yolu, kafe önü beklemeleri ve vapur/tekne hareketi özellikle akşam saatlerinde güvenli atış koridorunu sık sık ortadan kaldırır.",
    navigationNote:"Pin Bebek Koyu'nun genel kamusal kıyısını gösterir; aktif iskele, tekne bağlama noktaları ve işletme kullanımındaki kıyı parçaları rota dışıdır.",
    longIntro:["Bebek'te en önemli ayrım, koy içindeki daha sakin su ile açık Boğaz akıntısının birkaç yüz metre içinde değişmesidir.","Kıyı aynı zamanda dar ve yoğun bir yaya koridorudur; bu nedenle av planında su koşulundan önce arka atış güvenliği ve tekne halatları değerlendirilmelidir."],
    planningNotes:["İskele ve bağlı tekne halatlarını kesin dışla.","Yoğun saatlerde savurma gerektiren takım yerine avı ertele; yaya aksını misinayla kesme.","Geceleme için kıyıda kamp düşünme; Beşiktaş/Sarıyer merkezde ruhsatlı seçenekleri ayrıca ara."],
    seasonalNotes:["Koy içi rüzgâr görece azalabilse de Boğaz akıntısı ve tekne trafiği takım kontrolünü etkiler.","Tür listesi Boğaz ölçeğindeki raporlamadır; güncel 6/2 limitleri av günü kontrol edilmelidir."],
    cautions:["Bebek İskelesi ve tekne yanaşma alanları","Dar yaya koridoru ve işletme önü yoğunluğu","Bağlama halatları ve ani tekne manevrası"]
  }),
  refreshed("arnavutkoy-besiktas-sahili",{
    shoreProfile:"Arnavutköy kıyısının Akıntıburnu kesimi, İBB kaynağında Karadeniz'den Marmara'ya yüzey akıntısının çok hızlanabildiği yer olarak tanımlanır. Aktif Şehir Hatları iskelesi ve tarihî yalı hattı nedeniyle açık kamusal atış cepleri dardır.",
    transport:"Beşiktaş-Sarıyer kıyı otobüsleri ve Arnavutköy İskelesi çevresi toplu ulaşım sağlar. Sahil caddesinde park sınırlı ve trafik yoğundur; son yaklaşımı yaya planlamak gerekir. Gecelik kalış için Beşiktaş merkez seçenekleri ayrıca doğrulanmalıdır.",
    crowdNote:"Akıntıburnu manzara noktası, restoran/işletme girişleri ve aktif iskele çevresi günün büyük bölümünde yoğundur; güvenli arka alan yoksa olta açılmamalıdır.",
    navigationNote:"Koordinat Arnavutköy-Akıntıburnu genel kamusal kıyısını gösterir; aktif iskele, yalı/işletme önü ve tekne bağlama alanları av rotası değildir.",
    longIntro:["Arnavutköy'ü diğer Boğaz kayıtlarından ayıran unsur Akıntıburnu'ndaki belirgin yüzey akıntısı ve tarihî yalı hattının kıyıyı daraltmasıdır.","Bu nedenle kıyıda bir açıklık görülmesi tek başına av uygunluğu anlamına gelmez; arka atış, tekne trafiği ve özel/işletme sınırı birlikte kontrol edilmelidir."],
    planningNotes:["Akıntıburnu'nda ağır takım kullanmadan önce akıntıyı gündüz gözle.","Aktif iskele ile yalı/işletme önü kıyıyı dışla.","Kamp veya sahilde geceleme varsayma; Beşiktaş merkezde ruhsatlı konaklamayı ayrıca kontrol et."],
    seasonalNotes:["Akıntı, rüzgâr yönünden bağımsız olarak takım sürüklenmesini artırabilir; Boğaz türleri gün ve mevsime göre hareket eder.","Güncel 6/2 boy, adet ve yöntem sınırları av günü kontrol edilmelidir."],
    cautions:["Akıntıburnu'nda çok güçlü yüzey akıntısı","Aktif Arnavutköy İskelesi","Dar kaldırım ve yoğun işletme/yaya kullanımı"]
  }),
  refreshed("ortakoy-sahili",{
    shoreProfile:"Ortaköy Meydanı, Büyük Mecidiye Camii önü, aktif yolcu iskelesi ve 15 Temmuz Şehitler Köprüsü ayağı etkisi çok dar bir kıyı parçasında birleşir. Şehir Hatları iskelesi önünde su derinliği 8,7 metreye ulaşır; bu veri av izni değil, operasyon sahasının neden dışlanması gerektiğini gösterir.",
    transport:"Ortaköy'e Beşiktaş yönünden kıyı otobüsleri ve aktif vapur seferleriyle ulaşılır. Meydan çevresinde araç parkı kısıtlıdır; toplu taşıma ve yaya yaklaşımı tercih edilmelidir. Gecelik kalış için Beşiktaş'taki ruhsatlı seçenekler ayrıca doğrulanmalıdır.",
    crowdNote:"Turistik meydan, cami ziyaretleri, vapur yolcusu ve etkinlik trafiği nedeniyle güvenli savurma alanı çoğu zaman oluşmaz; kalabalıkta av ertelenmelidir.",
    navigationNote:"Pin Ortaköy Meydanı çevresindeki genel kamusal sahile gider; aktif iskele, köprü güvenlik çevresi ve tekne yanaşma hattı kesinlikle rota dışıdır.",
    longIntro:["Ortaköy kaydı, bir 'iskelede balık tutma' önerisi değildir. Meydan ve köprü ayağı çevresindeki yoğun kamusal kullanım, suya erişimden daha belirleyici bir güvenlik kısıtıdır.","Kuruçeşme-Ortaköy sahil hattı İBB kaynaklarında yaya/tarih rotası olarak da tanımlanır; bu nedenle olta açılabilecek boş kıyı cebi ancak yerinde ve anlık olarak doğrulanabilir."],
    planningNotes:["Vapur iskelesi ve köprü güvenlik alanını kesin dışla.","Meydan kalabalığında savurma yapma; açık ve boş kamusal kıyı yoksa avı iptal et.","Sahilde kamp/geceleme planlama; Beşiktaş merkezde ruhsatlı konaklamayı ayrıca kontrol et."],
    seasonalNotes:["Boğaz akıntısı köprü ayağı etkisiyle kısa mesafede değişebilir; tür listesi günlük av garantisi değildir.","6/2 Tebliğ ve 2025/12 değişikliğini av günü yeniden kontrol et."],
    cautions:["Ortaköy İskelesi operasyon sahası","15 Temmuz Şehitler Köprüsü güvenlik çevresi","Turistik meydanda yoğun yaya trafiği"]
  }),
  refreshed("kurukcesme-sahili",{
    shoreProfile:"Kuruçeşme kıyısı açık Boğaz akıntısı, taş tahkimat ve etkinlik/işletme kullanımının kesintiye uğrattığı yaya hattıyla karakterlidir. İBB'nin Kuruçeşme-Ortaköy tarih rotası ve Kuruçeşme-Bebek koşu rotası, kıyının yoğun kamusal kullanımını doğrular.",
    transport:"Beşiktaş-Sarıyer kıyı otobüsleriyle erişilir; kıyı boyunca etkinlik günlerinde yol ve yaya düzeni değişebilir. Araç parkı güvenilir değildir. Gecelik kalış için Beşiktaş merkez seçenekleri ayrıca kontrol edilmeli, sahilde konaklama varsayılmamalıdır.",
    crowdNote:"Konser/etkinlik günleri ve akşam yürüyüş saatlerinde bazı kıyı parçaları geçici olarak erişilemez veya çok yoğun olabilir.",
    navigationNote:"Koordinat Kuruçeşme'nin genel kamusal kıyı koridoruna yönlendirir; özel işletme, etkinlik alanı, tekne bağlama ve güvenlik bariyeri görülen bölümler rota dışıdır.",
    longIntro:["Kuruçeşme'yi ayıran özellik, açık Boğaz akıntısının etkinlik alanları ve taş tahkimatlı yaya koridoruyla kesişmesidir.","Kıyının sürekliliği haritada göründüğü kadar basit değildir; özel/işletme kullanımı ve geçici etkinlik bariyerleri gün gün değişebilir."],
    planningNotes:["Etkinlik takvimi ve geçici bariyerleri yerinde kontrol et.","Taş tahkimatta ıslak yüzey ve dalga sıçramasını değerlendir.","Gecelik kalış gerekiyorsa Beşiktaş'taki ruhsatlı seçenekleri ayrıca doğrula."],
    seasonalNotes:["Lodos dalga sıçramasını, Boğaz akıntısı takım sürüklenmesini artırabilir.","Bölgesel tür listesi av garantisi değildir; 6/2 kuralları av günü kontrol edilmelidir."],
    cautions:["Etkinlik kaynaklı geçici kapanma","Özel/işletme kullanımındaki kıyı parçaları","Islak taş tahkimat ve güçlü akıntı"]
  }),
  refreshed("pasabahce-sahili",{
    shoreProfile:"Paşabahçe'de aktif Şehir Hatları iskelesi ile eski araba vapuru alanından dönüştürülen küçük çocuk parkı aynı kıyı hattında farklı işlevler taşır. Aktif iskele önündeki su derinliği 5,6 metreye ulaşır; operasyon sahası av için dışlanmalıdır.",
    transport:"Beykoz sahil yolu otobüsleri ve Paşabahçe İskelesi bölgeye erişim sağlar. Son yaklaşımda çocuk parkı, iskele yolcu akışı ve bağlı tekne alanları ayrılmalıdır. Gecelik kalış için Beykoz merkezdeki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
    crowdNote:"Çocuk parkı ve iskele çevresinde hafta sonu aile/yolcu yoğunluğu yüksektir; atış güvenliği yoksa kıyı kullanılmamalıdır.",
    navigationNote:"Pin Paşabahçe genel kamusal sahiline gider; aktif yolcu iskelesi ve tekne yanaşma hattı rota dışıdır. Eski araba vapuru sahasının park işlevi de olta atışından önce yaya güvenliğini gerektirir.",
    longIntro:["Paşabahçe'nin ayırt edici özelliği, eski araba vapuru alanının çocuk parkına dönüşmüş olması ile aktif yolcu iskelesinin yan yana bulunmasıdır.","Bu kayıt aktif iskeleyi av noktası saymaz; yalnız yaya ve çocuk kullanımından tamamen ayrılabilen açık kamusal kıyı cepleri değerlendirilir."],
    planningNotes:["Aktif iskeleyi ve yolcu bekleme alanını dışla.","Çocuk parkı/yaya alanında savurma yapma.","Günübirlik kullanım varsay; geceleme için Beykoz merkezde ruhsatlı seçenekleri ayrıca kontrol et."],
    seasonalNotes:["Boğaz akıntısı Paşabahçe koy etkisiyle kısa mesafede değişebilir; bölgesel türler av garantisi değildir.","6/2 boy, adet ve yöntem sınırlarını av günü yeniden kontrol et."],
    cautions:["Paşabahçe İskelesi operasyon sahası","Çocuk parkı ve aile kullanımında atış riski","Bağlı tekne ve halatlar"]
  }),
  refreshed("kanlica-sahili",{
    shoreProfile:"Kanlıca meydanında aktif Şehir Hatları iskelesi, hemen yanındaki küçük kayık limanı ve akıntılı Boğaz kıyısı çok dar bir alanda birleşir. İskele önünde 6,5 metre derinlik kayıtlıdır; iskele ve kayık limanı çalışma sahaları rota dışıdır.",
    transport:"Beykoz-Üsküdar kıyı otobüsleri ve aktif Kanlıca vapur seferleri erişim sağlar. Meydan çevresinde araç parkı sınırlıdır; son yaklaşım yaya yapılmalıdır. Gecelik kalış gerekiyorsa Beykoz/Üsküdar ruhsatlı seçenekleri ayrıca kontrol edilmelidir.",
    crowdNote:"Meydan, yoğurt işletmeleri, vapur yolcusu ve küçük kayık limanı nedeniyle özellikle hafta sonu çok sıkışır; güvenli olta alanı yoksa rota kullanılmamalıdır.",
    navigationNote:"Koordinat Kanlıca'nın genel kamusal meydan kıyısını gösterir; aktif vapur iskelesi ve hemen yanındaki küçük kayık limanı kesinlikle av noktası değildir.",
    longIntro:["Kanlıca'yı diğer Beykoz kıyılarından ayıran unsur, aktif yolcu iskelesi ile küçük kayık limanının meydanla neredeyse bitişik olmasıdır.","Açık kıyı cebi ancak bu iki operasyon alanından ve yoğun yaya akışından tamamen ayrılıyorsa planlanmalıdır."],
    planningNotes:["Vapur iskelesi ve küçük kayık limanını dışla.","Meydan yoğunluğunda savurma yapma.","Sahilde kamp varsayma; geceleme için Beykoz/Üsküdar merkez seçeneklerini ayrıca doğrula."],
    seasonalNotes:["Boğaz akıntısı takım sürüklenmesini hızlandırabilir; istavrit, zargana ve lüfer gibi türler mevsimsel bölgesel kayıtlardır.","6/2 hükümleri ve 2025/12 değişikliği av günü kontrol edilmelidir."],
    cautions:["Kanlıca İskelesi operasyon sahası","İskelenin yanındaki küçük kayık limanı","Dar meydan ve yoğun yaya kullanımı"]
  }),
  refreshed("degirmendere-sahili",{
    sources:[degirmendere2026,kocaeliTurizm,kocaeliBaliklandirma,balikSalimi],
    shoreProfile:"Değirmendere-Halıdere hattı düzenlenmiş sahil parkı, yürüyüş-bisiklet yolları ve taş tahkimatı birleştirir. 17 Haziran 2026 tarihli belediye kaynağı bakım çalışmalarını doğrular; bariyerli veya şantiye düzenindeki kesimler av rotası değildir.",
    transport:"Gölcük-Değirmendere kent içi ulaşımıyla erişim kolaydır; son yaklaşım sahil yürüyüş koridorundan yapılır. Bakım nedeniyle yaya/bisiklet akışı yer değiştirebilir. Gecelik kalış gerekiyorsa Gölcük veya İzmit merkezde ruhsatlı seçenekler ayrıca kontrol edilmeli, sahil parkında kamp hakkı varsayılmamalıdır.",
    crowdNote:"Gün batımı ve hafta sonlarında yürüyüş-bisiklet kullanımı yoğunlaşır; 2026 bakım bariyerleri açık alanı daha da daraltabilir.",
    navigationNote:"Pin Değirmendere genel kamusal sahiline gider; bakım bariyeri, küçük iskele, bağlı tekne ve su sporu/etkinlik alanları rota dışıdır.",
    longIntro:["Değirmendere kaydının güncel ayırt edici unsuru 2026 yazındaki sahil bakım çalışmaları ile uzun yürüyüş-bisiklet koridorunun aynı kıyıda sürmesidir.","Körfezdeki tür çeşitliliği belediye/TAGEM kaynaklarıyla desteklenir, fakat bu kıyıda günlük yakalama garantisi değildir."],
    planningNotes:["Bakım bariyerlerini ve yaya-bisiklet hattını ilk dışlama kriteri yap.","Bağlı tekne veya küçük iskele yakınında takım açma.","Günübirlik kullanım varsay; geceleme için Gölcük/İzmit merkezde ruhsatlı seçenekleri ayrıca doğrula."],
    seasonalNotes:["Lodos taş tahkimatta dalga sıçraması yaratabilir; ilk keşif sakin havada yapılmalıdır.","İstavrit, kefal, zargana ve diğer körfez türleri bölgesel kayıttır; 6/2 limitleri av günü kontrol edilmelidir."],
    cautions:["2026 bakım/şantiye bariyerleri","Bisiklet-yaya hattında arka atış riski","Islak taş tahkimat ve lodos dalgası"]
  }),
  refreshed("halidere-sahili",{
    sources:[degirmendere2026,kocaeliTurizm,kocaeliBaliklandirma],
    shoreProfile:"Halıdere, Değirmendere'den uzanan düzenlenmiş sahil sisteminin daha yerleşim odaklı bölümüdür; küçük koy cepleri, tahkimat ve yer yer küçük iskele/tekne kullanımı birlikte görülür. 2026 bakım çalışmalarının komşu koridorda sürmesi son yaklaşımı etkileyebilir.",
    transport:"Gölcük-Halıdere sahil yolu ve ilçe içi toplu taşıma kullanılır. Son yaya yaklaşımında küçük iskele, yüzme ve bisiklet kullanımını ayırmak gerekir. Gecelik kalış gerekiyorsa Gölcük merkezde ruhsatlı seçenekler ayrıca doğrulanmalıdır.",
    crowdNote:"Değirmendere merkeze göre daha sakin cepler bulunsa da yaz akşamlarında yürüyüş, bisiklet ve yüzme kullanımı artar.",
    navigationNote:"Pin Halıdere'nin genel kamusal sahiline gider; küçük iskele, bağlı tekne ve yüzme kullanılan cepler rota dışıdır.",
    longIntro:["Halıdere'yi ayıran iki unsur Değirmendere'den gelen uzun sahil düzenlemesinin devamı olması ve küçük koy/iskele ceplerinin daha sık görülmesidir.","Körfez türleri bölgesel raporlamadır; rota özelinde saha teyidi bulunmadığından av sonucu garanti edilmez."],
    planningNotes:["Küçük iskele ve bağlı tekneleri dışla.","Yüzme veya bisiklet kullanımı varsa savurma yapma.","Geceleme için Gölcük merkezde ruhsatlı konaklamayı ayrıca kontrol et."],
    seasonalNotes:["Lodos ve kısa dalga küçük koylarda bile kıyı sıçraması yaratabilir.","Güncel 6/2 tür, boy ve adet kurallarını av günü kontrol et."],
    cautions:["Küçük iskele ve bağlı tekneler","Yüzme alanıyla çakışma","Bisiklet-yaya hattını misinayla kesme"]
  }),
  refreshed("ulasli-sahili",{
    sources:[kocaeliTurizm,kocaeliBaliklandirma,balikSalimi],
    shoreProfile:"Ulaşlı kıyısında sahil parkı, taş tahkimat ve yazın yoğunlaşan plaj/yüzme kullanımı kısa mesafede birleşir. Kocaeli Büyükşehir'in balıklandırma kayıtlarında 2025 salım noktalarından biri Ulaşlı olarak geçer; bu bilgi kıyıdan av garantisi değildir.",
    transport:"Gölcük-Karamürsel kıyı yolu üzerinden erişilir. Yazın plaj ve aile kullanımı son kıyı yaklaşımını sınırlar; yüzme şamandırası bulunan bölümde olta açılmamalıdır. Gecelik kalış için Gölcük veya Karamürsel merkezde ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
    crowdNote:"Yaz sezonunda plaj ve aile kullanımı nedeniyle kıyı kapasitesi belirgin azalır; akşam saatlerinde boş atış koridoru bulmak zorlaşabilir.",
    navigationNote:"Pin Ulaşlı genel kamusal kıyısına yönlendirir; aktif yüzme zonu, küçük iskele, bağlı tekne ve su sporu alanları rota dışıdır.",
    longIntro:["Ulaşlı'nın güncel ayırt edici unsuru güçlü yazlık/plaj kullanımı ile 2025 resmî balıklandırma programında adının geçmesidir.","Balıklandırma kaydı belirli kıyı cebinde balık tutulacağını kanıtlamaz; erişim ve yüzme güvenliği her ziyarette ayrıca değerlendirilmelidir."],
    planningNotes:["Aktif plaj ve cankurtaran/yüzme zonlarını kesin dışla.","Küçük iskele ve bağlı tekne alanlarında takım açma.","Gecelik kalış için Gölcük/Karamürsel merkez seçeneklerini ayrıca doğrula."],
    seasonalNotes:["Yazın yüzme kullanımı av yapılabilir açık kıyıyı daraltır; serin dönemde rüzgâr ve dalga güvenliği öne çıkar.","Bölgesel türler av garantisi değildir; 6/2 hükümlerini av günü kontrol et."],
    cautions:["Aktif yüzme ve plaj zonları","Küçük iskele/bağlı tekne alanları","Kıyı yoluna yakın dar cepler"]
  }),
];

const newRoute=(route:Pick<Mera,"slug"|"name"|"lat"|"lng"> & {shore:string;transport:string;crowd:string;identity:string;sources:SourceLink[]}):Mera=>({
  slug:route.slug,name:route.name,district:"Körfez",province:"Kocaeli",zone:"Kocaeli",waterType:"Deniz",region:"Marmara",
  summary:`${route.identity} Kayıt yalnız kamusal park kıyısını planlama düzeyinde ele alır; liman, sanayi, iskele, yüzme ve güvenlik alanları av rotası değildir.`,
  fish:["İstavrit","Kefal","Zargana","Lüfer"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek","Midye"],
  camping:"Uygun değil",vehicleAccess:"Kolay",amenities:["Kamusal sahil parkı","Yürüyüş alanı","Körfez ilçe yerleşim hizmetleri"],
  cautions:["Sanayi/liman ve özel işletme sınırlarına yaklaşmama","Yüzme ve yoğun yaya kullanımında olta açmama","Rüzgârda taş/dolgu kıyıda dalga sıçraması"],
  lat:route.lat,lng:route.lng,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok",updatedAt:"2026-08-09",publishedAt:"2026-08-09",confidence:"C",
  image:`/images/meralar/${route.slug}.svg`,socialImage:`/images/meralar/${route.slug}.svg`,
  navigationNote:`Pin ${route.name} içindeki genel kamusal park kıyısını gösterir. Sanayi tesisi, liman/rıhtım, iskele, bağlı tekne, özel işletme ve yüzme alanı görülen bölümde av yapılmamalıdır.`,
  shoreProfile:route.shore,transport:route.transport,crowdNote:route.crowd,
  longIntro:[`${route.name}, Körfez ilçesinde İzmit Körfezi kıyısındaki kamusal rekreasyon hattıdır. ${route.identity}`,"Kocaeli Büyükşehir kaynakları İzmit Körfezi'nde çok sayıda balık türü bulunduğunu bildirir; bu liste park kıyısında belirli gün yakalama garantisi değildir. Saha teyidi olmadığı için güven seviyesi C tutulmuştur."],
  planningNotes:["İlk ziyareti gündüz kısa keşif olarak yap; sanayi/liman sınırları ile kamusal park kıyısını fiziksel olarak ayır.","Yüzme, çocuk, yürüyüş ve bisiklet kullanımı varsa savurma yapma; güvenli arka koridor yoksa avı ertele.","Parkta geceleme hakkı varsayma. Gecelik kalış gerekiyorsa Körfez veya İzmit merkezde ruhsatlı konaklama seçeneklerini ayrıca doğrula."],
  seasonalNotes:["İstavrit, kefal, zargana ve lüfer İzmit Körfezi ölçeğinde raporlanan türler arasındadır; kıyıya yaklaşım mevsim, yem balığı ve su hareketine bağlıdır.","6/2 Tebliğ ile 2025/12 değişikliğindeki boy, adet, yöntem ve alan kuralları av günü tekrar kontrol edilmelidir."],
  sources:[...route.sources,kocaeliTurizm,kocaeliBaliklandirma,teblig,degisiklik]
});

export const istanbulKocaeliYeni20260809:Mera[]=[
  newRoute({slug:"yarimca-sahil-parki",name:"Yarımca Sahil Parkı",lat:40.76905,lng:29.74054,identity:"Kocaeli Büyükşehir'in 2023'te tamamladığı yeni parkta yürüyüş-bisiklet yolları, yeşil alan ve oturma bölümleri bulunur; Kültür Portalı ayrıca Yarımca kıyısında geleneksel olta kullanımını ve toplu taşıma erişimini kaydeder.",shore:"Dolgu karakterli, düzenlenmiş park kıyısı ile taş tahkimat ve yoğun rekreasyon alanı bir aradadır. Parkın doğu-batı uçlarında sanayi ve kıyı kullanımı değişebileceği için yalnız açık kamusal park cepleri değerlendirilmelidir.",transport:"Yarımca sahil yolu ve Körfez toplu taşımasıyla erişim mümkündür; parkın yürüyüş/bisiklet yolları son yaklaşımı kolaylaştırır. Araç parkı yoğun günlerde dolabilir. Gecelik kalış için Körfez veya İzmit merkezde ruhsatlı seçenekler ayrıca kontrol edilmelidir.",crowd:"Yeni park aile, çocuk, yürüyüş, bisiklet ve egzersiz kullanımı için tasarlanmıştır; hafta sonu ve gün batımında güvenli arka atış koridoru hızla kaybolabilir.",sources:[yarimcaPark,yarimcaKultur,kocaeliSahiller]}),
  newRoute({slug:"kirazliyali-sahil-parki",name:"Kirazlıyalı Sahil Parkı",lat:40.77620,lng:29.70267,identity:"Kocaeli Büyükşehir'in Körfez ilçesinde düzenli bakım yaptığı beş sahil parkından biridir; Kirazlıyalı yerleşiminin önündeki park kıyısı Hereke ve Yarımca'dan ayrı bir kamusal erişim cebidir.",shore:"Kirazlıyalı yerleşimi önünde düzenlenmiş sahil parkı, taş/dolgu kıyı ve yeşil alanlar bulunur. D-100 ve sanayi koridoruna yakın coğrafya nedeniyle parkın dışındaki rıhtım, tesis veya özel kıyı parçaları rotaya dahil değildir.",transport:"Kirazlıyalı yerleşimine D-100/Körfez bağlantılarıyla yaklaşılır; son bölüm park/yaya alanıdır. Kamusal park dışına araçla kıyı erişimi varsayılmamalıdır. Gecelik kalış için Körfez veya İzmit merkezde ruhsatlı konaklama ayrıca araştırılmalıdır.",crowd:"Yerleşim parkı olduğu için akşam ve hafta sonu aile/yaya kullanımı artabilir; otopark ve geçiş koridorları olta ekipmanıyla kapatılmamalıdır.",sources:[kocaeliSahiller,{label:"Açık konum kaydı — Kirazlıyalı Sahil Parkı",url:"https://ilceler.org/kocaeli/korfez/park/kirazliyali-sahil-parki",note:"Park adresi ve 40.776199, 29.702674 genel konumunu açık veri servisleriyle destekler; resmî av izni kaynağı değildir."}]})
];
