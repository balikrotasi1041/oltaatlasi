import { rehberler as eskiRehberler, type Rehber as EskiRehber } from "./rehberler";

export type RehberSource = { label:string; url:string; note:string; };
export type RehberIllustration = { src:string; alt:string; caption:string; };
export type RehberSection = { title:string; intro:string; items:string[]; illustration?:RehberIllustration; };
export type Rehber = Omit<EskiRehber,"sections"> & {
  updatedAt:string;
  author:string;
  difficulty:"Başlangıç" | "Orta" | "İleri";
  targetSpecies:string[];
  cover?:string;
  sections:RehberSection[];
  sources:RehberSource[];
};

const categoryIntro:Record<string,string>={
  Teknik:"Bu aşamada takımın nasıl çalıştığını anlamak, malzeme sayısını artırmaktan daha değerlidir.",
  Ekipman:"Ekipmanı tek başına değil, yöntem, kıyı ve hedef türle birlikte değerlendirmek gerekir.",
  Yem:"Yem sunumu; kıvam, iğne açıklığı, su koşulu ve küçük balık baskısıyla birlikte düşünülmelidir.",
  Güvenlik:"Bu aşamanın amacı ava devam etmek değil, güvenli biçimde başlayıp geri dönebilmektir.",
  Etik:"Balığa, kıyıya ve diğer kullanıcılara verilen etkiyi azaltmak uygulamanın ayrılmaz parçasıdır.",
  Mera:"Bir rota bilgisi, güncel erişim ve saha koşullarıyla doğrulanmadan kesin kabul edilmemelidir.",
  Hava:"Tahmin ile gerçek kıyı koşulu karşılaştırılmalı; saha uygulamanın önüne geçtiğinde plan değiştirilmelidir.",
  Mevsim:"Mevsim bilgisi sabit bir av takvimi değil, saat, su ve güvenlik planını ayarlama aracıdır.",
  Kamp:"Kamp düzeni az eşya, kuru kalma, güvenli dönüş ve iz bırakmama ilkeleri üzerine kurulmalıdır.",
  Navigasyon:"Dijital harita yolun açık, kamusal veya güvenli olduğunu garanti etmez; saha işaretleri üstündür."
};

const officialSource:RehberSource={
  label:"Amatör su ürünleri avcılığı resmî bilgilendirmesi",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"Güncel yer, yöntem, boy, adet ve dönem sınırlamalarını kontrol etmek için resmî başlangıç kaynağı."
};

const normalizeLegacy=(rehber:EskiRehber):Rehber=>({
  ...rehber,
  updatedAt:rehber.publishedAt,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Başlangıç",
  targetSpecies:["Genel kullanım"],
  sections:rehber.sections.map(([title,items])=>({
    title,
    intro:categoryIntro[rehber.category] || `${title} aşamasında aşağıdaki maddeleri sırayla kontrol etmek, hazırlıktaki çelişkileri sahaya gitmeden fark etmeyi kolaylaştırır.`,
    items
  })),
  sources:[officialSource]
});

export const palomarRehberi:Rehber={
  slug:"palomar-dugumu",
  title:"Palomar Düğümü: Fırdöndü ve İğne Bağlantısı",
  category:"Düğüm",
  summary:"Örgü ip ve misinada az adımla kurulabilen Palomar düğümünü dört özgün çizimle öğren.",
  icon:"🪢",
  publishedAt:"2026-07-27",
  updatedAt:"2026-07-27",
  readingTime:7,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Başlangıç",
  targetSpecies:["Genel kullanım"],
  cover:"/images/rehberler/palomar-dugumu-kapak.svg",
  sections:[
    {title:"Çift kat ilmeği hazırla",intro:"Düğümün gücü, ipin metal gözden iki kat geçmesine dayanır. İlk kıvrımda ipi ezmemek ve yeterli çalışma payı bırakmak sonraki adımları kolaylaştırır.",items:["Misina veya örgü ipi yaklaşık 15–20 santimetre çift kat yap.","Kat yerini iğne ya da fırdöndü gözünden geçir.","Göz küçükse çift katı zorlamak yerine önce tek ucu geçirip geri döndür."],illustration:{src:"/images/rehberler/palomar-01.svg",alt:"Palomar düğümünde çift kat ipin metal gözden geçirilmesi",caption:"1. adım: İpi çift kat yap ve gözden geçir."}},
    {title:"Gevşek üst düğümü kur",intro:"Burada amaç düğümü sıkmak değil, ekipmanın içinden geçebileceği geniş bir halka bırakmaktır.",items:["Çift kat ip ile gevşek bir üst düğüm oluştur.","Fırdöndü veya iğne gözü düğümün altında kalsın.","Halkayı daraltmadan iki kolun birbirine paralel ilerlediğini kontrol et."],illustration:{src:"/images/rehberler/palomar-02.svg",alt:"Palomar düğümünde gevşek üst düğümün kurulması",caption:"2. adım: Üst düğümü gevşek bırak."}},
    {title:"Ekipmanı büyük halkadan geçir",intro:"Palomar düğümünü diğer basit düğümlerden ayıran hareket budur. Büyük halka, iğne ya da fırdöndünün tamamının üzerinden geçirilir.",items:["Çift kat ipin oluşturduğu büyük halkayı aç.","İğne, klips veya fırdöndüyü bütünüyle halkanın içinden geçir.","Halkanın ekipman üzerinde burulmadığından emin ol."],illustration:{src:"/images/rehberler/palomar-03.svg",alt:"Fırdöndünün Palomar düğümündeki büyük halkadan geçirilmesi",caption:"3. adım: Metal parçayı büyük halkanın içinden geçir."}},
    {title:"Islat, eşit çek ve kontrol et",intro:"Nihai sıkma sırasında sürtünme ısı üretir. Özellikle monofilament misinada düğümü ıslatmak yüzey hasarı riskini azaltır.",items:["Düğümü temiz su veya tükürükle hafifçe ıslat.","Ana beden ile kısa ucu kontrollü ve eşit biçimde çek.","Düğüm metal göze düzgün oturduktan sonra kısa ucu en az 3–4 milimetre payla kes.","Kullanmadan önce bağlantıyı eldivenli elle kademeli yük altında dene."],illustration:{src:"/images/rehberler/palomar-04.svg",alt:"Sıkılmış ve kontrol edilmiş Palomar düğümü",caption:"4. adım: Düğümü ıslat, iki koldan eşit çek ve son kontrolü yap."}}
  ],
  sources:[]
};

export const kiyiAkintiOkumaRehberi:Rehber={
  slug:"kiyida-akinti-kopuk-hatti-okuma",
  title:"Kıyıda Akıntı ve Köpük Hattı Okuma",
  category:"Hava",
  summary:"Atıştan önce dalga kırılmasını, köpük ve yüzen parçacıkların yönünü okuyarak yem hattını ve güvenli bekleme yerini belirle.",
  icon:"🌊",
  publishedAt:"2026-07-30",
  updatedAt:"2026-07-30",
  readingTime:9,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Orta",
  targetSpecies:["Levrek","İstavrit","Kefal","Genel kıyı türleri"],
  cover:"/images/rehberler/kiyida-akinti-kopuk-hatti-okuma-kapak.svg",
  sections:[
    {title:"Önce kıyıyı beş dakika izle",intro:"Tek bir dalga, kıyının gerçek ritmini anlatmaz. Birkaç dakika boyunca kırılma çizgisini ve köpüğün tekrar eden hareketini izlemek, anlık sıçramayı kalıcı akıntı sanma hatasını azaltır.",items:["Kamışı kurmadan önce suya girmeden, kuru ve geri çekilme alanı bulunan bir noktadan en az beş dakika gözlem yap.","Dalgaların aynı hatta mı kırıldığını, yoksa belirli bir bölgede kırılmadan geçip sonra mı toplandığını not et.","Üç-beş dalgalık küçük serilerden sonra daha büyük bir set gelip gelmediğini izle; ekipmanı en son dalganın ulaştığı çizginin gerisinde tut.","Kıyıdaki rüzgâr ile su yüzeyindeki köpüğün yönü farklıysa, yalnızca rüzgâra bakarak akıntı kararı verme."]},
    {title:"Köpük ve parçacık çizgisini yorumla",intro:"Köpük, yosun ve küçük yüzen parçalar suyun taşıma yönünü görünür kılar. Fakat bu çizgi balığın kesin bulunduğu yer değil, su hareketini sınamak için kullanılan geçici bir işarettir.",items:["Köpük kıyıya paralel düzenli ilerliyorsa yemin de aynı yönde sürükleneceğini varsayarak atış açısını akıntının biraz üst tarafına kur.","Köpük iki su kütlesinin arasında uzun bir şerit oluşturuyorsa önce kısa atışla hattın iki yanındaki sürüklenme hızını karşılaştır.","Yüzen parçalar açık denize doğru dar bir kanalda hızlanıyorsa bunu geri akıntı işareti kabul et; suya girme ve oltayı kurtarmak için peşinden yürüme.","Renk farkı tek başına yeterli değildir; köpük yönü, dalga kırılması ve takımın gerçek sürüklenmesini birlikte değerlendir."]},
    {title:"Takımla küçük bir ölçüm yap",intro:"Gözlemin sahadaki karşılığı, düşük riskli bir deneme atışıdır. Hafif ve kontrol edilebilir bir takım, akıntının yönünü takım kaybetmeden anlamaya yardım eder.",items:["İlk atışı hedef mesafenin yarısına yap; misinanın karın yapma yönünü ve kurşunun ya da sahtenin kıyıya hangi açıyla döndüğünü izle.","Takım sürekli dibe gömülüyor veya hızla yan tarafa taşınıyorsa ağırlığı körlemesine artırmak yerine atış açısını ve bekleme süresini değiştir.","Spin avında aynı noktayı farklı sarım hızlarıyla taramak yerine önce akıntının sahtenin doğal aksiyonunu bozmadığı hızı bul.","Dip takımında kurşun tutmuyorsa kamış atarını aşan ağırlığa geçme; daha tutucu kurşun biçimi, daha kısa mesafe veya başka kıyı seçeneğini değerlendir."]},
    {title:"Güvenlik sınırını av planından önce koy",intro:"Akıntı okumak av verimini artırabilir, ancak asıl işlevi kıyının ne zaman terk edilmesi gerektiğini göstermektir. Su hızlandığında yöntem değiştirmek bazen yeterli değildir; doğru karar geri çekilmektir.",items:["Köpük ve su çizgisi bekleme noktasına giderek yaklaşıyorsa ekipmanı toplamak için son anı bekleme.","Dalgalar düzensiz büyüyor, geri dönüş yolu ıslanıyor veya rüzgâr kıyıya doğru belirgin güçleniyorsa avı durdur.","İskele, mendirek ve kaya çevresindeki türbülansı açık kıyı akıntısıyla aynı kabul etme; yapıların çevresinde ani yön değişimleri oluşabilir.","Takılan takım için suya girme. Kesilmesi gereken bir bağlantı, düşme ve sürüklenme riskinden daha değerlidir."]},
    {title:"Av günlüğüne ölçülebilir not bırak",intro:"“Akıntı vardı” notu bir sonraki avda işe yaramaz. Gözlemi yön, hız ve sonuçla kaydetmek, aynı kıyıya döndüğünde gerçekten karşılaştırılabilir bir hafıza oluşturur.",items:["Rüzgâr yönünü, köpüğün hareket yönünü, dalga aralığını ve kullandığın takımın sürüklenme süresini ayrı ayrı yaz.","Atış açısını saat kadranı gibi tarif et; örneğin kıyıya dik yön 12 ise akıntının üstüne 10 yönüne atış yaptığını kaydet.","Balık temasını kesin akıntı kuralına dönüştürme; aynı koşulun farklı günlerde tekrar edip etmediğini izle.","Resmî hava ve deniz uyarılarını saha gözleminden önce kontrol et; sahadaki şart daha kötüyse tahmine değil gördüğün riske göre hareket et."]}
  ],
  sources:[
    {label:"NOAA Ocean Service — Rip Currents",url:"https://oceanservice.noaa.gov/education/dyw-rip-currents.html",note:"Köpük, renk farkı, kırılma boşluğu ve açık denize hareket eden parçacıkların geri akıntı işareti olabileceğini açıklayan resmî eğitim kaynağı."},
    {label:"National Weather Service — Beach Safety",url:"https://www.weather.gov/safety/beach",note:"Kıyıya varmadan hava, dalga ve akıntı uyarılarını kontrol etme; sahada sürekli değişen koşullara karşı tetikte olma ilkeleri."},
    {label:"National Weather Service — Think Like a Lifeguard",url:"https://www.weather.gov/wrn/coastal-ocean-safety",note:"Kıyı yönelimi, rüzgâr yönü, dalga kırılması, yapı çevresi ve yerel koşulların plajdan plaja değişebileceğine ilişkin güvenlik rehberi."}
  ]
};

export const yildirimGuvenligiRehberi:Rehber={
  slug:"yildirim-firtinasinda-balikci-guvenligi",
  title:"Yıldırım Fırtınasında Balıkçı Güvenliği",
  category:"Güvenlik",
  summary:"Gök gürültüsünü duyduğun anda avı bırakmaktan güvenli sığınağı seçmeye, 30 dakikalık dönüş kuralından acil yardım planına kadar uygulanabilir yıldırım güvenliği akışı.",
  icon:"⚡",
  publishedAt:"2026-08-03",
  updatedAt:"2026-08-03",
  readingTime:8,
  author:"Olta Atlası Editörlüğü",
  difficulty:"Başlangıç",
  targetSpecies:["Genel kullanım"],
  cover:"/images/rehberler/yildirim-firtinasinda-balikci-guvenligi-kapak.svg",
  sections:[
    {title:"Atıştan önce sığınağı ve dönüş süresini belirle",intro:"Yıldırım güvenliği fırtına başladığında değil, kıyıya varmadan kurulur. Güvenli binaya veya kapalı araca kaç dakikada ulaşacağını bilmek, gök gürültüsü başladığında ekipmanı toplamakla zaman kaybetmeni önler.",items:["Hava tahmininde gök gürültülü sağanak olasılığı varsa avı kısalt, ertele veya güvenli sığınağa çok yakın bir rota seç.","Kıyıya vardığında sağlam kapalı bina ya da camları kapanan metal tavanlı araç gibi gerçek bir sığınak belirle; açık kamelyayı, tente altını ve çadırı güvenli kabul etme.","Sığınağa yürüyüş süresini hesaba kat. Oltayı kurmadan önce geri dönüş yolunda kilitli kapı, geçici bariyer veya su basabilecek bölüm olup olmadığını gör.","Grup halinde avlanıyorsan hava takibini tek kişinin zihnine bırakma; herkesin ‘gök gürültüsü duyulursa av biter’ kuralını önceden bilmesini sağla."]},
    {title:"Gök gürültüsünü duyunca avı hemen bitir",intro:"Resmî yıldırım güvenliği rehberlerinin ortak mesajı nettir: Gök gürültüsünü duyabiliyorsan yıldırım tehdidi yeterince yakındır ve dışarıda güvenli bir yer yoktur. Yağmurun başlamasını, şimşeğin yaklaşmasını veya son atışı beklemek gereksiz risk yaratır.",items:["İlk gök gürültüsünde atışı kes ve güvenli sığınağa yönel; ‘birkaç dakika daha’ avı sürdürme.","Takımın takılıysa onu kurtarmak için suya, kayalığa veya açık kıyı çizgisine ilerleme. Ekipman kaybı, yıldırım riskinden daha önemsizdir.","Kıyıda dağınık malzeme bıraktıysan yalnızca geçiş yolundaki tehlikeli parçaları güvenli biçimde al; uzun uzun takım toplama işlemi yapma.","Tekne veya küçük açık deniz aracındaysan fırtına yaklaşmadan önce karaya ve güvenli kapalı sığınağa dönme planını devreye sok; açık suda beklemeyi güvenli çözüm sayma."]},
    {title:"Doğru sığınağı yanlış sığınaktan ayır",intro:"Her çatının altı yıldırım sığınağı değildir. Güvenli seçim, yağmurdan korunmaktan farklıdır; amaç yıldırım akımının insan üzerinden geçme olasılığını azaltan kapalı bir yapıya ulaşmaktır.",items:["Elektrik veya su tesisatı bulunan sağlam kapalı bina öncelikli seçenektir.","Uygun bina yoksa camları kapalı, metal tavanlı tam kapalı araç iyi bir alternatiftir; araç içindeyken metal yüzeylere gereksiz temas etme.","Tek başına ağaç altı, açık piknik barınağı, sahil gölgeliği, çadır ve üstü açık araç güvenli sığınak değildir.","Kaya çıkıntısını, yüksek mendireği veya açık iskeleyi ‘yağmurdan koruyor’ diye yıldırım sığınağı sanma; mümkün olan en kısa yoldan gerçek sığınağa geç."]},
    {title:"Son gök gürültüsünden sonra en az 30 dakika bekle",intro:"Fırtınanın yağmuru azalırken yıldırım tehlikesi bitmiş görünse de bulut çevresinde hâlâ tehlikeli elektriksel boşalmalar oluşabilir. Bu nedenle yalnızca gökyüzünün açılmasına bakarak erken dönmek güvenli değildir.",items:["Son duyduğun gök gürültüsünün saatini not et ve en az 30 dakika boyunca güvenli sığınakta kal.","Bu bekleme sırasında yeniden gök gürültüsü duyarsan süreyi son sesten itibaren yeniden başlat.","Yağmurun kesilmesi veya rüzgârın düşmesi 30 dakikalık kuralın yerine geçmez.","Geri döndüğünde kıyıyı yeniden değerlendir; dalga, su seviyesi, taşkın, çamur veya yıldırım sonrası oluşan yeni riskler varsa avı tamamen iptal et."]},
    {title:"Yıldırım çarpmasında yardım çağır ve temastan korkma",intro:"Yıldırım mağduru elektrik yükü taşımaz; ona dokunmak yardım eden kişiyi elektrikle yüklemez. Asıl öncelik, yardım eden kişinin de yıldırım tehdidi altında kalmaması ve acil sağlık desteğinin hızla çağrılmasıdır.",items:["Önce kendini ve grubu mümkün olan en güvenli konuma al; ardından Türkiye’de tek acil çağrı numarası olan 112’yi ara ve konumu açık biçimde bildir.","Mağdurun bilinç ve solunum durumunu kontrol et. Solunum yoksa ve eğitimliysen temel yaşam desteği/CPR uygula; varsa AED talimatlarını izle.","Yardım çağrısını geciktirme. Telefonla görüşebiliyorsan 112 görevlisinin yönlendirmelerine uy.","Olaydan sonra avı sürdürme; diğer grup üyelerinde yaralanma, düşme, yanık veya şok belirtisi olup olmadığını kontrol et ve profesyonel değerlendirme bekle."]}
  ],
  sources:[
    {label:"AFAD — Yıldırım Tehlikesine Karşı Neler Yapılmalı?",url:"https://www.afad.gov.tr/yildirim-tehlikesine-karsi-neler-yapilmali",note:"Açık alan, araç ve bina için yıldırım riskini azaltma önerileri; özellikle balık oltası gibi iletken cisimlerden uzaklaşma ve kapalı araç seçimi için Türkiye'deki resmî afet kaynağı."},
    {label:"NOAA — Lightning Safety",url:"https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/lightning/lightning-safety",note:"Gök gürültüsü duyulduğunda güvenli sığınağa geçme ve son gök gürültüsünden sonra en az 30 dakika bekleme ilkesini açıklayan resmî NOAA eğitim kaynağı."},
    {label:"National Weather Service — Lightning Tips",url:"https://www.weather.gov/safety/lightning-tips",note:"Dışarıda hiçbir yerin fırtına yakınında tamamen güvenli olmadığını; sağlam bina veya metal tavanlı kapalı aracın tercih edilmesi gerektiğini açıklar."},
    {label:"112 Acil Çağrı Merkezi — Acil durumlarda tek numara 112",url:"https://www.112.gov.tr/kilis/acil-durumlarda-tek-numara-112",note:"Türkiye'de sağlık, itfaiye, polis, jandarma, sahil güvenlik ve diğer acil yardım ihtiyaçlarının 112 üzerinden koordine edildiğini doğrular."}
  ]
};

export const rehberler:Rehber[]=[yildirimGuvenligiRehberi,kiyiAkintiOkumaRehberi,palomarRehberi,...eskiRehberler.map(normalizeLegacy)];
export const rehberKategorileri=[...new Set(rehberler.map((rehber)=>rehber.category))].sort((a,b)=>a.localeCompare(b,"tr"));