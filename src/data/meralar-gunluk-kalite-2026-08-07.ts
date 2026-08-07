import type { Mera, SourceLink } from "./meralar";
import { meralar as temelMeralar } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";

const all=[...temelMeralar,...gunlukMeralar];
const teblig:SourceLink={label:"Tarım ve Orman Bakanlığı — 6/2 Amatör Avcılık ve 2025/12 değişikliği",url:"https://istanbul.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=381",note:"2024/21 sayılı 6/2 Tebliğ ile 16 Nisan 2025 tarihli değişiklik; boy, adet, yöntem, yer ve dönem sınırlamaları için güncel resmî çerçeve."};
const marmaraIstavrit:SourceLink={label:"Marmara Denizi istavrit araştırması",url:"https://dergipark.org.tr/tr/pub/jaes/article/1348554",note:"Marmara Denizi'nde Trachurus mediterraneus varlığını destekleyen akademik çalışma; kıyıdan günlük av garantisi değildir."};
const izmitFish:SourceLink={label:"İzmit Körfezi balık türleri çalışması",url:"https://dergipark.org.tr/tr/pub/gida/article/92493",note:"İzmit Körfezi örneklerinde zargana, izmarit, istavrit ve başka türlerin kaydını veren akademik çalışma; tarihsel/bölgesel kanıttır."};
const bosphorusFish:SourceLink={label:"İstanbul Boğazı balık kayıtları — İstanbul Üniversitesi",url:"https://nek.istanbul.edu.tr/ekos/TEZ/61077.pdf",note:"Boğaz ağ dalyanlarında istavrit, lüfer, kefal, zargana ve diğer türleri raporlayan akademik çalışma; kıyıdan av garantisi değildir."};
const kbbSahil:SourceLink={label:"Kocaeli Büyükşehir Belediyesi — Sahiller",url:"https://www.kocaeli.bel.tr/hizmet/sahiller-103.html",note:"Karamürsel Altınkemer–Ulaşlı ile Değirmendere–Halıdere dahil düzenlenmiş kamusal sahil alanlarını listeler."};

function base(slug:string){const found=all.find(m=>m.slug===slug);if(!found)throw new Error(`Güncellenecek avlak bulunamadı: ${slug}`);return found;}
function improve(slug:string,patch:Partial<Mera>):Mera{const b=base(slug);return{...b,...patch,verification:"Masa başı doğrulama; saha teyidi yok",confidence:"C",updatedAt:"2026-08-07",socialImage:b.image};}

export const gunlukKaliteIyilestirmeleri20260807:Mera[]=[
  improve("izmit-korfezi-sahil-bandi",{
    summary:"İzmit Marina ile 1 Mart Vapur İskelesi çevresindeki düzenlenmiş kent sahilini kapsayan; vapur, marina ve yaya operasyon alanlarından ayrılarak değerlendirilmesi gereken genel kıyı rotası.",
    shoreProfile:"İzmit merkez kıyısında yürüyüş ve bisiklet hattı, taş tahkimat ve açık suya bakan cepler yan yanadır. Marina, vapur iskelesi ve Balıkhan çevresindeki operasyon alanları rota dışıdır; güvenli kıyı cebi güncel tabela ve saha kullanımına göre seçilmelidir.",
    transport:"İzmit kent merkezinden sahil yürüyüş hattına toplu taşıma ve yaya bağlantısı bulunur. Koordinat, Kocaeli Büyükşehir Sahil Otoparkı ile marina dışındaki genel kamusal sahil bağlamını gösterir; vapur ve marina girişleri navigasyon hedefi değildir.",
    crowdNote:"İş çıkışı, hafta sonu ve gün batımında yürüyüş-bisiklet trafiği belirgin artar. Çapari veya ağır kurşun kullanılacaksa arka atış koridoru tamamen boş değilse takım açılmamalıdır.",
    navigationNote:"Genel İzmit kent sahiline yönlendirir; marina, vapur iskelesi, Balıkhan ve kapalı güvenlik bölümlerine girilmez.",
    amenities:["Düzenlenmiş yürüyüş ve bisiklet yolu","Toplu taşıma bağlantıları","Kocaeli Büyükşehir Sahil Otoparkı çevresi","İzmit merkezinde market ve yeme-içme seçenekleri"],
    cautions:["Marina ve vapur operasyon alanlarından uzak dur","Yoğun yaya ve bisiklet trafiğinde atış yapma","Lodos ve vapur geçişlerinde kısa dalga/kıyı sıçramasını izle"],
    longIntro:["İzmit Körfezi Sahil Bandı, tek bir iskele değil İzmit kent merkezindeki kamusal sahil ceplerini anlatır. 2026'da Kocaeli Büyükşehir Belediyesi sahil otoparkı çevresinde yeni kamusal kullanım noktaları açıldığını duyurmuştur; bu, alanın yüksek yaya kullanımını da teyit eder.","İzmit Körfezi'nden akademik balık örneklerinde istavrit, zargana ve izmarit dahil türler kaydedilmiştir. Bu bölgesel kayıt kıyıdan av garantisi değildir; güncel 6/2 Tebliğ, yerel tabela ve operasyon sınırları her ziyarette ayrıca kontrol edilmelidir."],
    planningNotes:["İlk keşifte marina ve vapur operasyon sahalarını kesin olarak ayır; kamusal yürüyüş hattında yalnız geniş ve arka koridoru boş cepleri değerlendir.","Kent sahilinde kamp uygun değildir; gecelik kalış gerekiyorsa İzmit ilçe merkezindeki ruhsatlı konaklama seçenekleri güncel olarak ayrıca araştırılmalıdır.","Lodos, vapur hareketi ve yoğun yaya saatleri aynı anda oluşursa av planını başka saate veya başka kamusal kıyı cebine kaydır."],
    seasonalNotes:["İstavrit, zargana ve izmarit İzmit Körfezi bölgesel kayıtlarında yer alır; kıyıya yaklaşım yem balığı, su sıcaklığı ve körfez içi dolaşıma göre değişir.","Tür, boy, adet ve yöntem kısıtları 6/2 Tebliğ ve yürürlükteki değişikliklerden kontrol edilmelidir; listelenen türler av garantisi değildir."],
    sources:[{label:"Kocaeli Büyükşehir — İzmit sahil kullanımı",url:"https://www.kocaeli.bel.tr/haber/balik-durum-lezzeti-simdi-de-izmit-sahilinde-51097.html",note:"2026 tarihli belediye haberi Kocaeli Büyükşehir Sahil Otoparkı çevresindeki kamusal kullanımın güncel olduğunu doğrular."},izmitFish,teblig]
  }),
  improve("karamursel-sahili",{
    shoreProfile:"Karamürsel merkezde taş tahkimatlı yürüyüş sahili ile Altınkemer yönüne uzanan düzenlenmiş kıyı arasında farklı cepler bulunur. Kocaeli Büyükşehir'in Altınkemer–Ulaşlı sahil düzenlemesi bu hattın kamusal rekreasyon karakterini doğrular; küçük iskele ve bağlama noktaları av alanı sayılmaz.",
    transport:"D-130 koridorundan Karamürsel ilçe merkezine ulaşıldıktan sonra sahile yaya geçiş mümkündür. Koordinat genel merkez sahilini gösterir; küçük iskele, tekne bağlama veya işletme önleri yerine açık kamusal kıyı bölümü yerinde seçilmelidir.",
    crowdNote:"Yaz akşamları ve hafta sonlarında sahil yürüyüşü ile çocuklu aile kullanımı artar; geniş arka koridor bulunmayan bölümde kurşun savrulmamalıdır.",
    navigationNote:"Karamürsel merkez kamusal sahil bandına yönlendirir; iskele ve tekne bağlama cepleri operasyon alanı kabul edilerek dışarıda bırakılır.",
    amenities:["Düzenlenmiş sahil yürüyüş alanı","İlçe merkezinde market ve temel hizmetler","Toplu taşıma bağlantısı","Yakın otopark seçenekleri"],
    cautions:["Küçük iskele ve bağlama ceplerinde takım açma","Yazın yoğun yaya kullanımında arka atış koridorunu kontrol et","Lodosla taş tahkimatta sıçrama ve kaygan yüzeye dikkat et"],
    longIntro:["Karamürsel Sahili, İzmit Körfezi'nin güney kıyısında ilçe merkezine bitişik düzenlenmiş kamusal sahil hattıdır. Kocaeli Büyükşehir Belediyesi sahil düzenlemeleri arasında Karamürsel Altınkemer–Ulaşlı koridorunu açıkça listeler.","İzmit Körfezi tür kayıtları istavrit, zargana ve izmarit gibi türlerin bölgesel varlığını destekler; günlük kıyı avı için kesinlik vermez. Sahadaki küçük iskeleler, bağlama alanları ve kalabalık yürüyüş cepleri av noktası olarak yorumlanmamalıdır."],
    planningNotes:["Sabah erken saatler, yoğun yaya kullanımından kaçınmak için daha elverişli olabilir; yine de güncel saha koşulu gözlenmelidir.","Kamp kent merkez sahilinde uygun değildir; gecelik kalış için Karamürsel ilçe merkezindeki güncel ruhsatlı seçenekler ayrıca kontrol edilmelidir.","Körfez güney kıyısında lodos ve karşı kıyı tekne trafiğinin oluşturduğu dalga etkisi taş tahkimatta izlenmelidir."],
    seasonalNotes:["İstavrit, zargana ve izmarit İzmit Körfezi bölgesel bilimsel kayıtlarında bulunur; kıyıya gelişleri dönemsel ve günlük su koşullarına bağlıdır.","6/2 Tebliğdeki boy, adet ve yöntem sınırları ile varsa il bazlı geçici kararlar av öncesi kontrol edilmelidir."],
    sources:[kbbSahil,izmitFish,teblig]
  }),
  improve("eskihisar-sahili",{
    shoreProfile:"Eskihisar'da kale altındaki kamusal sahil ile feribot terminali/tekne hareket alanı birbirinden ayrılmalıdır. Gebze Belediyesi 2024'te kale altı sahilinde ailelere yönelik balık tutma etkinliği düzenleyerek kamusal kıyı kullanımını doğrudan doğrulamıştır.",
    transport:"Gebze merkezden Eskihisar yönüne karayolu ve toplu taşıma bağlantısı vardır. Navigasyon kale altındaki genel kamusal sahile göre tutulur; feribot terminali girişleri, rampalar ve manevra alanları kesinlikle rota dışıdır.",
    crowdNote:"Feribot yoğunluğu, hafta sonu sahil ziyaretleri ve belediye etkinlikleri aynı bölgede kalabalık oluşturabilir; arka atış koridoru daralırsa av yapılmamalıdır.",
    navigationNote:"Eskihisar kale altındaki genel kamusal sahili hedefler; feribot rampası, terminal güvenlik alanı ve tekne manevra hattı dışarıda bırakılır.",
    amenities:["Kale altı kamusal sahil","Gebze/Eskihisar ulaşım bağlantıları","Yakın yerleşim hizmetleri","Yaya kullanım alanları"],
    cautions:["Feribot terminali ve rampalara yaklaşma","Tekne dalgası ve akıntıda kıyı mesafesini koru","Kalabalıkta uzun takım ve ağır kurşun kullanma"],
    longIntro:["Eskihisar Sahili için en güçlü yerel doğrulama, Gebze Belediyesi'nin 23 Eylül 2024'te kale altı sahilinde düzenlediği 'Baba ve Çocuk Balık Tutma' etkinliğidir. Bu kayıt kamusal sahil kullanımını destekler, ancak feribot terminalinin av alanı olduğu anlamına gelmez.","Rota özellikle terminal operasyonundan ayrılmış kale altı genel kıyı bağlamında ele alınır. Marmara tür kayıtları istavriti destekler; diğer türlerin günlük kıyı varlığı mevsim ve akıntıya bağlıdır."],
    planningNotes:["Feribot hareketlerini başlamadan önce gözle; terminal güvenlik ve manevra alanını geniş payla dışarıda bırak.","Kamp uygun değildir; gecelik ihtiyaç için Gebze ilçe merkezindeki ruhsatlı tesisler güncel olarak ayrıca araştırılmalıdır.","Çocuklu aile ve yürüyüş yoğunluğu varsa çapari/kurşun savurma yerine daha güvenli saat seç."],
    seasonalNotes:["Marmara Denizi istavrit varlığı akademik olarak desteklenir; Eskihisar kıyısındaki günlük av durumu ayrıca saha gözlemine bağlıdır.","6/2 Tebliğ ve terminal çevresindeki yerel güvenlik talimatları birlikte değerlendirilmelidir."],
    sources:[{label:"Gebze Belediyesi — Eskihisar'da balık tutma etkinliği",url:"https://www.gebze.bel.tr/haber/eskihisar-sahilinde-%27baba-ve-cocuk-balik-tutma-etkinligi_6915.html",note:"Kale altı Eskihisar sahilinin kamusal balık tutma etkinliğine konu olduğunu doğrular; feribot terminalini kapsamaz."},marmaraIstavrit,teblig]
  }),
  improve("degirmendere-sahili",{
    shoreProfile:"Değirmendere merkez sahilinde yürüyüş ve bisiklet yolları ile taş tahkimatlı kıyı birlikte uzanır. Kocaeli Büyükşehir 17 ve 23 Haziran 2026 tarihli duyurularında bakım, kazık, dalgakıran ve yeni yol çalışmalarını belgelediğinden kıyı geometrisi eski fotoğraf ve haritalardan farklı olabilir.",
    transport:"Gölcük–Değirmendere kıyı koridoruna D-130 üzerinden erişilir; merkezde sahile yaya bağlantıları vardır. 2026 yapım/bakım çalışmaları nedeniyle şantiye sınırı, geçici kapatma ve yönlendirmeler navigasyondan önce gelir.",
    crowdNote:"Yürüyüş ve bisiklet yolu yoğun kullanılan bir kent sahilidir. Çalışma alanları ve hafta sonu kalabalığı arka atış güvenliğini azaltabilir.",
    navigationNote:"Değirmendere merkez genel sahiline yönlendirir; 2026 sahil yenileme şantiyesi, kapalı bölümler ve küçük iskeleler av alanı değildir.",
    amenities:["Yürüyüş ve bisiklet yolları","Değirmendere merkez hizmetleri","Düzenlenmiş sahil alanı","Toplu taşıma bağlantıları"],
    cautions:["2026 sahil yenileme ve bakım alanlarına girme","Bisiklet/yaya hattına doğru atış yapma","Lodos ve dalgakıran çevresinde sıçrama-kayganlık riskini izle"],
    longIntro:["Değirmendere Sahili 2026 yazında aktif yenileme ve bakım sürecindedir. Kocaeli Büyükşehir Belediyesi kırık yürüyüş/bisiklet yolu taşlarının değiştirildiğini, ayrıca kazık ve dalgakıran imalatlarının sürdüğünü açıklamıştır.","Bu nedenle rota sabit bir av cebi olarak değil, açık kalan kamusal sahil parçalarının güncel tabela ile seçildiği genel bölge olarak tutulur. İzmit Körfezi tür çalışmaları istavrit ve zargana gibi türleri bölgesel düzeyde destekler."],
    planningNotes:["Gitmeden önce belediyenin güncel sahil çalışması duyurularını ve yerinde bariyerleri kontrol et; kapalı bölüme girme.","Kamp kent sahilinde uygun değildir; gecelik kalış için Gölcük veya Değirmendere çevresindeki ruhsatlı seçenekler ayrıca araştırılmalıdır.","Şantiye, bisiklet yolu ve yoğun yaya kullanımı güvenli atış alanını daraltıyorsa avı ertele."],
    seasonalNotes:["İzmit Körfezi bölgesel kayıtları istavrit ve zarganayı destekler; kıyıdan yakalanabilirlik mevsim ve körfez içi su hareketine bağlıdır.","6/2 Tebliğ yanında sahil yapım çalışmaları nedeniyle oluşan geçici erişim kısıtları bağlayıcı saha koşuludur."],
    sources:[{label:"Kocaeli Büyükşehir — Değirmendere sahil bakımı",url:"https://www.kocaeli.bel.tr/haber/buyuksehir-degirmendere-sahilinde-de-calisiyor-51304.html",note:"17 Haziran 2026 tarihli bakım ve yürüyüş/bisiklet yolu çalışmasını doğrular."},{label:"Kocaeli Büyükşehir — Değirmendere sahil yenilemesi",url:"https://www.kocaeli.bel.tr/haber/degirmendere-sahili-yeni-bir-yuze-kavusuyor-51383.html",note:"23 Haziran 2026 tarihli kazık, dalgakıran ve yol imalatlarını doğrular."},izmitFish,teblig]
  }),
  improve("emirgan-sahili",{
    shoreProfile:"Emirgan'da Boğaz'a açık taş kıyı ile Şehir Hatları iskelesi ve park/koru yaya akışı aynı kısa hatta birleşir. İskele önünde resmî kaynağa göre 7,7 m derinlik vardır; bu veri yalnız operasyon alanının neden dışarıda tutulması gerektiğini gösterir.",
    transport:"Sarıyer sahil yolu üzerindeki Emirgan'a İETT ve deniz ulaşımıyla erişilebilir. Navigasyon genel kamusal kıyıyı hedefler; Şehir Hatları iskelesinin yanaşma platformu ve yolcu alanı av noktası değildir.",
    crowdNote:"Emirgan Korusu ziyaretleri, hafta sonu sahil yürüyüşü ve vapur yolcuları kıyıyı yoğunlaştırır; özellikle lale dönemi ve güzel havada güvenli atış koridoru bulmak zorlaşabilir.",
    navigationNote:"Emirgan genel sahiline yönlendirir; Şehir Hatları iskelesi ve yolcu dolaşım alanı tamamen dışarıda bırakılır.",
    amenities:["Toplu taşıma ve Şehir Hatları erişimi","Emirgan çevresinde yeme-içme ve temel hizmetler","Kamusal sahil yürüyüşü","Yakın park/koru alanı"],
    cautions:["Şehir Hatları iskelesinde ve yanaşma hattında avlanma","Hızlı Boğaz akıntısında ağır takımın sürüklenmesini hesaba kat","Yoğun yaya saatinde arka atış yapma"],
    longIntro:["Emirgan Sahili'nin ayırt edici unsurları, aktif Şehir Hatları iskelesi ile hemen gerisindeki yoğun park/koru ziyaretidir. Resmî iskele kaydı yanaşma yerinin 15,6 m uzunluğunda ve ön derinliğin 7,7 m olduğunu bildirir; bu alan operasyon sahasıdır ve av rotasına dahil edilmez.","İstanbul Boğazı akademik kayıtlarında istavrit, lüfer, zargana ve kefal bulunur. Bu türler Boğaz ölçeğinde kanıttır; Emirgan kıyısında günlük av garantisi değildir."],
    planningNotes:["İskele seferleri ve yolcu hareketini gözle; yalnız aktif operasyon alanından uzakta kamusal kıyı cebi değerlendir.","Kamp uygun değildir; gecelik kalış için Sarıyer/Beşiktaş aksındaki ruhsatlı seçenekler ayrıca kontrol edilmelidir.","Boğaz akıntısı güçlü olduğunda dipte sürüklenme ve yan taraftaki kullanıcılarla misina kesişmesi riskini azaltacak takım seç."],
    seasonalNotes:["Boğaz genelinde istavrit, lüfer, kefal ve zargana raporlanmıştır; göç ve kıyıya yaklaşım mevsimsel değişir.","6/2 Tebliğdeki boy/adet kuralları ve aktif iskele güvenlik talimatları birlikte uygulanmalıdır."],
    sources:[{label:"Şehir Hatları — Emirgan İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/emirgan-144",note:"Aktif iskele, yanaşma yeri ve su derinliği bilgisi; operasyon alanının rota dışı tutulmasını destekler."},bosphorusFish,teblig]
  }),
  improve("bebek-sahili",{
    shoreProfile:"Bebek Koyu'ndaki görece korunaklı su, açık Boğaz akıntısına geçiş ve dar sahil yürüyüş hattı kısa mesafede değişir. Aktif Bebek İskelesi önünde derinlik resmî kayda göre yaklaşık 1,14–4,1 m arasındadır; iskele ve bağlı tekne alanları rota dışıdır.",
    transport:"Bebek'e sahil yolu otobüsleri ve yaya bağlantılarıyla ulaşılır. Kıyıda park yeri sınırlı olabilir; araç yerine toplu taşıma tercih edilebilir. Koordinat koyun genel kamusal yürüyüş hattını gösterir.",
    crowdNote:"Kafe, yürüyüş ve koşu kullanımı gün boyu yüksektir; hafta sonu ve akşam saatlerinde uzun kamışla güvenli arka atış alanı çoğu bölümde oluşmaz.",
    navigationNote:"Bebek Koyu'nun genel kamusal sahiline yönlendirir; Şehir Hatları iskelesi, bağlı tekneler ve dar yaya cepleri av alanı değildir.",
    amenities:["Yoğun toplu taşıma bağlantısı","Kamusal sahil yürüyüş hattı","Yakın market ve yeme-içme","Kent içi aydınlatma"],
    cautions:["İskele ve tekne bağlama halatlarından uzak dur","Dar yaya hattında savurma atış yapma","Koydan açık Boğaz'a geçişte akıntı değişimini izle"],
    longIntro:["Bebek Sahili klasik bir geniş av platformu değil, yoğun yaya kullanımındaki dar Boğaz kıyısıdır. Şehir Hatları'nın resmî kaydı Bebek İskelesi'nin aktif yanaşma alanını ve 1,14–4,1 m su derinliğini verir; iskele operasyonu av rotasından ayrılmalıdır.","Boğaz bilimsel kayıtları istavrit, lüfer, kefal ve zargana varlığını destekler. Bebek Koyu'ndaki günlük kıyı hareketi akıntı, tekne trafiği ve yem balığına göre değişir."],
    planningNotes:["Sabah erken saatler yaya yoğunluğunu azaltabilir; yine de koşu/yürüyüş hattını olta arkasında bırakma.","Kamp uygun değildir; gecelik kalış için Beşiktaş/Sarıyer çevresindeki ruhsatlı konaklama seçenekleri ayrıca kontrol edilmelidir.","Bağlı tekneler ve halatlar nedeniyle misina güzergâhı açık değilse başka kıyı cebine geç."],
    seasonalNotes:["İstavrit, lüfer, zargana ve kefal Boğaz ölçeğinde raporlanır; Bebek kıyısında görülmeleri sezon ve su hareketine bağlıdır.","6/2 Tebliğ ve aktif iskele kuralları av öncesi kontrol edilmelidir."],
    sources:[{label:"Şehir Hatları — Bebek İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/bebek-136",note:"Aktif iskelenin ölçü ve derinlik bilgileri; operasyon alanını rota dışında tutmak için resmî kaynak."},bosphorusFish,teblig]
  }),
  improve("arnavutkoy-besiktas-sahili",{
    shoreProfile:"Arnavutköy'de kazıklı sahil yolu, tarihî yalı hattı ve aktif Şehir Hatları iskelesi dar bir koridorda birleşir. Resmî kayıtta iskele önündeki derinlik 2,9–8,7 m aralığındadır; bu operasyon alanı av noktası değildir.",
    transport:"Beşiktaş–Sarıyer sahil yolu otobüsleri Arnavutköy'e erişim sağlar; park imkânı sınırlıdır. Koordinat genel kamusal kıyıyı gösterir ve aktif iskeleyi hedeflemez.",
    crowdNote:"Dar kaldırım, restoran/kafe kullanımı ve vapur yolcusu nedeniyle özellikle akşamları arka atış alanı çok sınırlıdır.",
    navigationNote:"Arnavutköy genel sahiline yönlendirir; aktif Şehir Hatları iskelesi, bağlı tekneler ve dar restoran önü cepleri dışarıda bırakılır.",
    amenities:["Toplu taşıma bağlantısı","Kamusal kıyı yürüyüşü","Yakın market ve yeme-içme","Kent içi aydınlatma"],
    cautions:["Dar kaldırımda savurma atış yapma","İskele ve tekne halatlarına yaklaşma","Boğaz akıntısında misinanın komşu kıyı kullanıcılarına sürüklenmesini önle"],
    longIntro:["Arnavutköy Sahili'nin temel kısıtı geniş av platformu olmamasıdır. Şehir Hatları iskelesi 1988'den beri mevcut kazıklı yol düzeni içinde aktiftir ve resmî kaynak 2,9–8,7 m ön derinlik bildirir; yanaşma alanı rota dışıdır.","Boğaz balık kayıtlarında istavrit, lüfer, zargana ve kefal yer alır. Bu liste Arnavutköy'de günlük yakalama vaadi değildir; kıyı güvenliği ve yaya kullanımı önceliklidir."],
    planningNotes:["Yaya yoğunluğu başlamadan erken saatte keşif yap; dar kaldırımda güvenli arka koridor yoksa avı iptal et.","Kamp uygun değildir; gecelik kalış için Beşiktaş ilçe merkezindeki güncel ruhsatlı seçenekler ayrıca kontrol edilmelidir.","Akıntı misinayı iskele/tekne hattına taşıyorsa takımın ağırlığını artırmak yerine av cebini değiştirmek daha güvenlidir."],
    seasonalNotes:["Boğaz ölçeğinde istavrit, lüfer, kefal ve zargana raporlanır; göç dönemleri ve yüzey akıntısı kıyı erişimini değiştirir.","6/2 Tebliğ, aktif iskele talimatları ve yerel güvenlik işaretleri birlikte izlenmelidir."],
    sources:[{label:"Şehir Hatları — Arnavutköy İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/arnavutkoy-23",note:"Aktif iskele ve 2,9–8,7 m ön derinliği doğrular; operasyon alanının dışlanması için resmî kaynak."},bosphorusFish,teblig]
  }),
  improve("ortakoy-sahili",{
    shoreProfile:"Ortaköy Meydanı, Büyük Mecidiye Camii önü, aktif Şehir Hatları iskelesi ve 15 Temmuz Şehitler Köprüsü ayağı etkisi çok dar bir sahilde birleşir. İskele ön derinliği resmî kayıtta 8,7 m'dir; meydan ve iskele çevresi yüksek yaya/operasyon kullanımı nedeniyle öncelikle güvenlik alanıdır.",
    transport:"Beşiktaş'tan sahil yolu otobüsleriyle ulaşılır; araç parkı ve meydan trafiği yoğun olabilir. Navigasyon yalnız Ortaköy genel kamusal sahiline yönlendirir; iskele ve köprü güvenlik sınırlarını hedeflemez.",
    crowdNote:"Turistik meydan günün büyük bölümünde kalabalıktır. Güvenli arka atış koridoru yoksa kıyıdan olta kullanmak uygun değildir.",
    navigationNote:"Ortaköy genel kamusal kıyısına yönlendirir; Şehir Hatları iskelesi, köprü ayağı güvenlik alanı ve meydandaki yoğun yaya cepleri dışarıda bırakılır.",
    amenities:["Toplu taşıma bağlantısı","Yoğun yeme-içme ve temel hizmetler","Kamusal meydan ve sahil","Kent içi aydınlatma"],
    cautions:["Köprü ayağı ve güvenlik sınırlarına yaklaşma","Şehir Hatları iskelesinde avlanma","Turistik kalabalıkta ağır kurşun/çapari savurma"],
    longIntro:["Ortaköy Sahili, balıkçılık açısından erişimden çok güvenli atış alanı sorunu taşıyan bir Boğaz kıyısıdır. Şehir Hatları iskelesi 2002'de yenilenmiş aktif operasyon noktasıdır ve ön derinliği 8,7 m olarak verilir; iskele rota dışıdır.","Meydan, cami ve köprü ayağı çevresindeki güvenlik/yaya yoğunluğu nedeniyle bu kayıt yalnız genel kıyı planlaması içindir. Boğaz tür kayıtları istavrit ve lüfer dahil çeşitli türleri destekler ancak günlük avı garanti etmez."],
    planningNotes:["Meydan kalabalığını ve güvenlik bariyerlerini ilk olarak kontrol et; açık arka koridor yoksa takım açma.","Kamp uygun değildir; konaklama gerekiyorsa Beşiktaş ilçe merkezindeki ruhsatlı seçenekleri ayrıca araştır.","Akıntı ve vapur geçişi misinayı iskele hattına taşıyabilecekse başka kıyı rotası seç."],
    seasonalNotes:["Boğaz'da istavrit, lüfer, kefal ve zargana raporlanır; Ortaköy'deki kıyı erişimi yoğunluk ve operasyon koşullarıyla sınırlıdır.","6/2 Tebliğ yanında köprü/iskele güvenlik sınırları ve görevli talimatı bağlayıcıdır."],
    sources:[{label:"Şehir Hatları — Ortaköy İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/ortakoy-156",note:"Aktif iskelenin konumu, yenilenme bilgisi ve 8,7 m ön derinliğini doğrular."},bosphorusFish,teblig]
  }),
  improve("pasabahce-sahili",{
    shoreProfile:"Paşabahçe'de genişletilmiş kamusal sahil parkı ile aktif Şehir Hatları iskelesi ve küçük bağlama cepleri aynı koy hattında yer alır. Rota yalnız park ve açık kamusal kıyı bölümlerini kapsar; iskele ve kayık/tekne çalışma alanları dışarıdadır.",
    transport:"Beykoz sahil yolu otobüsleri Paşabahçe'ye erişir; yaya sahil parkı boyunca farklı kıyı cepleri görülebilir. Navigasyon aktif iskeleyi değil genel kamusal park kıyısını hedefler.",
    crowdNote:"Geniş park hafta sonu aile, yürüyüş ve bisiklet kullanımını artırır; açık görünse bile arka atış hattı kullanıcılarla kesişiyorsa olta açılmamalıdır.",
    navigationNote:"Paşabahçe kamusal sahil parkının genel kıyısına yönlendirir; Şehir Hatları iskelesi ve tekne bağlama alanları dışarıda bırakılır.",
    amenities:["Kamusal sahil parkı","Beykoz sahil yolu toplu taşıması","Yakın market ve yeme-içme","Yürüyüş alanları"],
    cautions:["Aktif iskele ve bağlama ceplerinden uzak dur","Park kalabalığında arka atış yapma","Boğaz akıntısı ile koy içi akıntı farkını gözle"],
    longIntro:["Paşabahçe rotası, Beykoz kıyısında park kullanımıyla aktif deniz ulaşımının yan yana olduğu bir bölgedir. Şehir Hatları iskele ağı Paşabahçe'yi aktif iskele olarak listeler; bu nedenle iskele ve yanaşma yaklaşımı av alanı değildir.","Boğaz akademik kayıtlarında istavrit, lüfer, kefal ve zargana bulunur. Paşabahçe koyundaki günlük kıyı varlığı su hareketi, mevsim ve yem balığına bağlıdır."],
    planningNotes:["Park içinde en geniş arka koridoru seç; bisiklet/yaya akışı varsa olta savurma.","Kamp park sahilinde uygun kabul edilmez; gecelik kalış için Beykoz ilçe merkezindeki güncel ruhsatlı seçenekler ayrıca kontrol edilmelidir.","İskele sefer saatleri ve bağlı tekneler misina hattını etkiliyorsa açık kıyı cebine geç."],
    seasonalNotes:["Boğaz tür kayıtları istavrit, lüfer, zargana ve kefali destekler; günlük av ve bolluk garantisi vermez.","6/2 Tebliğ ile Şehir Hatları operasyon sınırları ve yerel tabela birlikte dikkate alınmalıdır."],
    sources:[{label:"Şehir Hatları — Paşabahçe İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/pasabahce-157",note:"Paşabahçe'deki aktif deniz ulaşım noktasını doğrular; operasyon alanı rota dışında tutulur."},bosphorusFish,teblig]
  }),
  improve("kanlica-sahili",{
    shoreProfile:"Kanlıca'da küçük meydan, aktif Şehir Hatları iskelesi ve hemen yanındaki küçük kayık limanı dar Boğaz kıyısında birleşir. Resmî iskele kaydı 6,5 m ön derinlik ve bitişik kayık limanını açıkça belirtir; bu iki operasyon alanı rota dışıdır.",
    transport:"Beykoz sahil yolu otobüsleri ve Şehir Hatları Kanlıca'ya erişim sağlar. Koordinat küçük meydanın genel kamusal kıyı bağlamını gösterir; iskele/yakındaki kayık limanı navigasyon hedefi değildir.",
    crowdNote:"Meydan, vapur yolcuları ve yeme-içme ziyaretleri nedeniyle dar kıyıda yoğunluk hızlı artar. Uzun takım için güvenli arka koridor çoğu yoğun saatte sınırlıdır.",
    navigationNote:"Kanlıca meydanı çevresindeki genel kamusal sahile yönlendirir; aktif iskele ve hemen yanındaki küçük kayık limanı dışarıda bırakılır.",
    amenities:["Şehir Hatları ve otobüs erişimi","Küçük kamusal meydan","Yakın market/yeme-içme","Kent içi aydınlatma"],
    cautions:["İskele ve bitişik kayık limanında avlanma","Dar meydanda yaya arkasına atış yapma","Güçlü Boğaz akıntısında misina sürüklenmesini kontrol et"],
    longIntro:["Kanlıca Sahili'nin en ayırt edici kısıtı, aktif Şehir Hatları iskelesinin hemen yanında küçük kayık limanı bulunmasıdır. Şehir Hatları resmî kaydı iskele önünde 6,5 m derinlik verir ve kayık limanını açıkça belirtir; bu alanlar av rotasına dahil değildir.","Boğaz tür kayıtları istavrit, lüfer, kefal ve zarganayı destekler. Kanlıca meydanında av yapılabilirlik ise yaya yoğunluğu, akıntı ve operasyon alanlarından güvenli ayrışmaya bağlıdır."],
    planningNotes:["İskele ve kayık limanından geniş payla uzak, arka koridoru boş kıyı parçası yoksa avı başka rotaya kaydır.","Kamp uygun değildir; gecelik kalış için Beykoz çevresindeki ruhsatlı konaklama seçenekleri ayrıca araştırılmalıdır.","Vapur yanaşması ve kayık hareketleri sırasında takım toplanmalı; misina operasyon hattına bırakılmamalıdır."],
    seasonalNotes:["İstavrit, lüfer, zargana ve kefal Boğaz ölçeğinde bilimsel kayıtlarda bulunur; Kanlıca için günlük av garantisi değildir.","6/2 Tebliğ yanında aktif iskele ve kayık limanı operasyon kuralları önceliklidir."],
    sources:[{label:"Şehir Hatları — Kanlıca İskelesi",url:"https://s2.sehirhatlari.istanbul/tr/iskeleler/kanlica-150",note:"Aktif iskele, 6,5 m ön derinlik ve hemen yanındaki küçük kayık limanını doğrular."},bosphorusFish,teblig]
  })
];
