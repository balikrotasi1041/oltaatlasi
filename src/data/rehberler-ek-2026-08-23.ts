import type { Rehber } from "./rehber-katalogu";

const officialFisheries={label:"Tarım ve Orman Bakanlığı — Amatör su ürünleri avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Av öncesinde güncel tür, boy, adet, dönem, alan ve yöntem kısıtlarını kontrol etmek için resmî başlangıç kaynağı."};
const anglingCode={label:"Natural Resources Wales — The Angling Code",url:"https://www.cyfoethnaturiolcymru.gov.uk/days-out/the-countryside-codes/the-angling-code/?lang=en",note:"Kıyıyı diğer kullanıcılarla paylaşma, çevreye zarar vermeme ve güvenli/etik olta kullanımına ilişkin kamusal rehberlik."};

export const kiyidanMirmirAviRehberi:Rehber={
  slug:"kiyidan-mirmir-avi",
  title:"Kıyıdan Mırmır Avı: Takım, Yem ve Kumluk Zemin",
  category:"Teknik",
  summary:"Mırmırı kumluk kıyıda ararken dip yapısını, yem sunumunu, takım sadeliğini ve güvenli atış alanını birlikte planlama rehberi.",
  icon:"〰️",
  publishedAt:"2026-08-23",
  updatedAt:"2026-08-23",
  readingTime:9,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Başlangıç",
  targetSpecies:["Mırmır"],
  cover:"/images/rehberler/kiyidan-mirmir-avi.svg",
  sections:[
    {title:"Önce zemini ve kıyı kullanımını oku",intro:"Mırmır için başlangıç noktası çok uzağa atmak değil, kumlu veya kum-çakıl geçişli dipte yemin doğal kalabileceği ve atışın güvenle yapılabileceği bir kıyı bulmaktır.",items:["Kıyının yüzme, yaya geçişi veya yoğun rekreasyon alanı olup olmadığını gözle; kalabalıkta uzun atış yapma.","Kumluk zeminde dalga kırılma hattı, küçük çukurlar ve koyu-açık renk geçişleri dip değişimini gösterebilir; bunu kesin derinlik ölçümü gibi yorumlama.","İlk atışlarda aynı noktaya yüklenmek yerine yakın-orta mesafeyi kontrollü tara; balık varlığını tek vuruşla genelleme.","Kıyıdaki yerel yasak, özel kullanım veya koruma statüsünü harita görüntüsünden değil güncel tabela ve resmî kaynaklardan doğrula."]},
    {title:"Takımı sade kur",intro:"Kumluk kıyıda amaç yemi dipte düzenli sunmak ve vuruşu okuyabilmektir. Gereksiz köstek, aşırı ağır kurşun veya takımın atarını aşan yük kontrolü azaltır.",items:["Kamışın atar aralığını kurşun+yem toplamıyla birlikte değerlendir; üst sınırı aşma.","Bir veya iki köstekle başla; köstek boyunu akıntı ve dolaşma durumuna göre değiştir.","Yem iğneyi tamamen kapatmamalı; iğne ucu ve açıklığı işlevini korusun.","Kurşun seçimini yalnız mesafeye göre değil dalga, akıntı ve zeminde tutunma ihtiyacına göre yap."]},
    {title:"Yemi küçük ve dayanıklı sun",intro:"Mırmırın dip omurgasızlarıyla beslendiğini gösteren akademik çalışmalar, doğal dip yemlerinin neden sık kullanıldığını açıklar; ancak belirli bir yem her kıyıda garanti değildir.",items:["Boru kurdu, karides veya uygun doğal deniz yemini küçük ve iğneyi boğmayacak porsiyonla dene.","Yem atışta düşüyorsa önce iğneleme ve porsiyonu düzelt; sadece daha büyük yem takma.","Küçük balık baskısında yemi gereksiz büyütmek yerine daha dayanıklı parça ve daha kısa kontrol aralığı dene.","Kullanılmayan canlı veya doğal yemi başka suya bırakma; yerel biyogüvenlik ve yem kurallarını ayrıca kontrol et."]},
    {title:"Vuruşu oku, mesafeyi tek değişkenle ayarla",intro:"Arama avında aynı anda kurşun, yem, köstek ve mesafeyi değiştirmek hangi değişkenin işe yaradığını anlamayı zorlaştırır.",items:["İlk denemede yem ve takım sabitken yalnız mesafeyi değiştir.","Vuruş gelirse aynı bantta birkaç kontrollü atış yap; sonuç kesilirse bir sonraki mesafe veya sunum değişkenine geç.","Kamış ucundaki her titreşimi balık vuruşu sayma; dalga ve misina yayını karşılaştır.","Av notuna saat, yaklaşık mesafe, dip izlenimi, yem ve hava koşulunu yaz; tek günün sonucunu kalıcı kural gibi yayımlama."]},
  ],
  sources:[
    officialFisheries,
    {label:"Iğdır Üniversitesi FBE Dergisi — Genç mırmırların beslenmesi",url:"https://dergipark.org.tr/tr/pub/jist/article/104249",note:"Çanakkale sığ sularında Lithognathus mormyrus örnekleri ve dip omurgasızlarıyla beslenme alışkanlığına ilişkin akademik saha kaydı."},
    {label:"Aquatic Sciences and Engineering — Güney Karadeniz mırmır popülasyonu",url:"https://dergipark.org.tr/en/pub/ase/article/937864",note:"Türkiye’nin Güney Karadeniz kıyılarından mırmır örneklerini inceleyen hakemli çalışma."},
    anglingCode,
  ],
};

export const surfCastingBaslangicRehberi:Rehber={
  slug:"surf-casting-baslangic",
  title:"Surf Casting’e Başlangıç: Kıyıdan Uzak Atış ve Takım Dengesi",
  category:"Teknik",
  summary:"Uzak atışı hedef haline getirmeden kamış atarı, kurşun-yem toplamı, atış koridoru ve takım kontrolünü birlikte kurma rehberi.",
  icon:"🌊",
  publishedAt:"2026-08-23",
  updatedAt:"2026-08-23",
  readingTime:10,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Orta",
  targetSpecies:["Mırmır","Çipura","Karagöz"],
  cover:"/images/rehberler/surf-casting-baslangic.svg",
  sections:[
    {title:"Mesafeden önce güvenli atış koridoru oluştur",intro:"Surf casting uzun takım ve ağır yükle çalışabildiği için tekniğin ilk şartı arka ve yan alanın boş olmasıdır. Güvenli alan yoksa mesafe denemesi yapılmaz.",items:["Atıştan önce arkanda, yanında ve kurşunun uçuş hattında insan, araç, hayvan veya sabit engel olmadığını kontrol et.","Dalga nedeniyle ayak zemini bozuluyorsa atışı ertele; sağlam basış mesafeden daha önemlidir.","Kurşunu kalabalığın yanında sallayarak hız toplama; hazırlık alanı ile atış alanını ayır.","Gece atışında görünürlük yetersizse uzun atış tekniğine geçme; çevreyi yeniden aydınlat ve kontrol et."]},
    {title:"Kamış atarı ile toplam yükü eşleştir",intro:"Kamış üzerindeki atar değeri yalnız kurşunu değil yem ve takımın toplam yükünü değerlendirmek için temel sınırdır.",items:["Kurşun, yem, klips ve takımın yaklaşık toplam yükünü kamışın önerilen atar aralığı içinde tut.","Daha ağır kurşunun otomatik olarak daha uzağa gideceğini varsayma; kamışın yüklenmesi ve atış tekniği birlikte çalışır.","Misina, şok lider ve düğümlerde aşınma varsa güç denemesi yapmadan değiştir.","Makara doluluğunu taşma yapmayacak ama dudak sürtünmesini gereksiz artırmayacak düzeyde tut."]},
    {title:"Şok lider ve bağlantıları kontrollü test et",intro:"Uzak atışta hızlanan yük bağlantılara kısa süreli yüksek gerilim uygular. Bu nedenle düğüm ve lider yalnız çekme dayanımıyla değil düzgün geçişle de değerlendirilmelidir.",items:["Kullandığın ana misina ve atış yüküne uygun şok lider yaklaşımını ekipman üreticisi sınırlarıyla birlikte değerlendir.","Lider düğümünün kamış halkalarından takılmadan geçtiğini düşük güçte dene.","Düğümü ıslatarak sık, kuyruk payını kontrol et ve beyazlayan/aşınan misinayı yeniden bağla.","Atıştan önce kurşun klipsi ve bağlantı noktasını elle kademeli yük altında test et."]},
    {title:"Tekniği kısa atıştan büyüt",intro:"İlk hedef maksimum mesafe değil, aynı hareketi güvenli ve tekrarlanabilir biçimde yapabilmektir.",items:["İlk denemeleri düşük güç ve kısa mesafeyle yap; kurşunun düz çıkışını izle.","Kontrol oturdukça gücü küçük adımlarla artır; bir anda tam güç atışa geçme.","Atış sonrası misina yayını alırken takımı sürükleyip sürüklemediğini gözle.","Av verimini yalnız mesafeyle ilişkilendirme; bazı günler yakın kırılma hattı daha üretken olabilir."]},
  ],
  sources:[
    officialFisheries,
    {label:"UK Environment Agency teknik notu — Hook & line ve beachcaster bağlamı",url:"https://assets.publishing.service.gov.uk/media/5f60b65f8fa8f5106ef9bde8/Fishing_Activity_Technical_Note_002.pdf",note:"Hook-and-line düzenini ve kıyıdan uzun kamışların casting amacıyla kullanım bağlamını açıklayan kamu teknik dokümanı; rehberde performans garantisi olarak kullanılmaz."},
    anglingCode,
  ],
};

export const balikTuruTeshisiRehberi:Rehber={
  slug:"balik-turu-teshisi-ve-mevzuat-kontrolu",
  title:"Balık Türü Teşhisi ve Mevzuat Kontrolü",
  category:"Etik",
  summary:"Avlanan balığın adını tahmin etmek yerine fotoğraf, ayırt edici özellik, bilimsel kaynak ve güncel mevzuatı birlikte kontrol etme akışı.",
  icon:"🔬",
  publishedAt:"2026-08-23",
  updatedAt:"2026-08-23",
  readingTime:9,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Başlangıç",
  targetSpecies:["Genel kullanım"],
  cover:"/images/rehberler/balik-turu-teshisi-ve-mevzuat-kontrolu.svg",
  sections:[
    {title:"Önce temiz bir teşhis kaydı oluştur",intro:"Tür teşhisi için yalnız renk veya yerel isim yeterli değildir. Balığın biçimini gösterecek birkaç gözlem, yanlış eşleşme riskini azaltır.",items:["Balığı gereksiz süre karada tutmadan yan profil, baş-ağız yapısı ve yüzgeçleri gösterecek net kayıt al.","Fotoğrafta ölçek kullanacaksan balığa zarar vermeyen ve ölçüm kuralına uygun bir referans seç.","Yalnız renk üzerinden teşhis yapma; ışık, su ve ölüm sonrası renk değişimi yanıltabilir.","Yerel isim ile bilimsel/tür adı farklı olabilir; iki adı eş anlamlı varsaymadan kontrol et."]},
    {title:"Ayırt edici özellikleri birden fazla kaynakla karşılaştır",intro:"Benzer türlerde tek özellik yerine birkaç morfolojik işareti birlikte kontrol etmek daha güvenlidir.",items:["Vücut formu, ağız konumu, yüzgeç yerleşimi, belirgin çizgi/benek ve pul yapısı gibi gözlenebilir özellikleri not et.","Üniversite, müze, akademik makale veya güvenilir tür kataloğunda aynı özelliğin birden fazla örnekte nasıl tanımlandığını karşılaştır.","Sadece sosyal medya fotoğrafına veya arama motoru görseline dayanarak kesin teşhis yapma.","Şüphe devam ediyorsa türü kesinleştirmeden alıkoyma kararını ertele ve uzman görüşü ara."]},
    {title:"Teşhisten sonra güncel av kuralını aç",intro:"Doğru tür adı belirlendikten sonra ikinci ayrı işlem mevzuat kontrolüdür. Eski tablo veya forum mesajı güncel kural yerine geçmez.",items:["Güncel 6/2 Tebliği ve yürürlükteki değişiklikleri Tarım ve Orman Bakanlığı kaynağından kontrol et.","Tür için boy, adet, kapalı dönem, yasak yöntem veya alan kısıtı varsa hepsini birlikte değerlendir.","İl müdürlüğü veya yerel idare tarafından geçici karar yayımlanmışsa genel tebliğe ek olarak onu da dikkate al.","Tür listede açık değilse kendi yorumunla serbest kabul etme; resmî birimden doğrulama iste."]},
    {title:"Kaydı belirsizliğiyle birlikte sakla",intro:"Saha notunun değeri kesin görünmesinden değil, hangi kısmının doğrulandığını açık göstermesinden gelir.",items:["Tarih, su alanı, yaklaşık konum, fotoğraf ve kullandığın teşhis kaynaklarını birlikte kaydet.","Teşhis yüzde yüz değilse notta 'muhtemel' veya 'teyit gerekli' ifadesini koru.","Bir türün o gün görülmesi tüm su kütlesinde sürekli ve bol bulunduğunu kanıtlamaz.","Hassas tür veya mikro-konum söz konusuysa ayrıntılı koordinatı kamuya açık paylaşma."]},
  ],
  sources:[
    officialFisheries,
    {label:"FishBase — Species identification and biology database",url:"https://www.fishbase.se/search.php",note:"Bilimsel ad, taksonomi ve tür biyolojisini karşılaştırmak için uluslararası bilimsel veri tabanı; yerel av mevzuatı yerine kullanılmaz."},
    anglingCode,
  ],
};

export const rehberlerEk20260823=[kiyidanMirmirAviRehberi,surfCastingBaslangicRehberi,balikTuruTeshisiRehberi];
