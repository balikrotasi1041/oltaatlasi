const rulesSource={
  label:"Tarım ve Orman Bakanlığı – 6/2 amatör su ürünleri avcılığı kuralları",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"2024-2028 amatör av dönemi genel çerçevesidir; il, su ve alan özelindeki daha güncel kararlar, koruma hükümleri ve saha tabelaları ayrıca uygulanır."
};

const noField="Masa başı kaynak doğrulamasıdır; bariyer, tabela, su kotu, mülkiyet ve güncel kıyı güvenliği hareket günü yeniden kontrol edilmelidir.";

export const ulusalGuvenIyilestirmeleri20260810={
  "ulusal-ardahan-cildir-golu-ardahan-kiyisi":{
    researchedAt:"2026-08-10",
    researchStatus:"Rota özelinde güçlü resmî amatör kullanım, güncel il mevzuatı ve akademik tür doğrulaması",
    researchSummary:"Ardahan İl Kültür ve Turizm Müdürlüğü Çıldır Gölü'nü doğrudan sportif olta balıkçılığı rotası olarak tanımlar. Ardahan İl Tarım ve Orman Müdürlüğünün 12 Mayıs 2026 duyurusu sazangiller ve ilgili türlerin güncel kapalı dönemini açıklar; 2024 tarihli hakemli çalışma gölün güncel balık faunasını rota özelinde örneklemiştir. Genel amatör kullanım kanıtı güçlü olduğundan Güven B uygundur; buz, kuş alanları, adalar ve her kıyının kamusal erişimi ayrıca değerlendirilir.",
    fish:["Sazan","Gümüşi Havuz Balığı"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde 2024 hakemli saha kaydı ve resmî yerel tür kaydı",sourceLabel:"Journal of Anatolian Environmental and Animal Sciences – Çıldır Gölü balıklarının güncellenmiş değerlendirmesi",sourceUrl:"https://dergipark.org.tr/tr/pub/jaes/article/1521913",note:"Mayıs 2024'te gölü temsil eden üç istasyonda yapılan örnekleme Cyprinus carpio varlığını kaydeder; bu veri kıyıdan av garantisi değildir."},
      {name:"Gümüşi Havuz Balığı",scientificName:"Carassius gibelio",evidenceLevel:"Rota özelinde 2024 hakemli saha kaydı",sourceLabel:"Journal of Anatolian Environmental and Animal Sciences – Çıldır Gölü balıklarının güncellenmiş değerlendirmesi",sourceUrl:"https://dergipark.org.tr/tr/pub/jaes/article/1521913",note:"2024 örneklemesinde Carassius gibelio gölde kaydedilmiştir; istilacı/yabancı tür kaydı hedef av tavsiyesi değildir."}
    ],
    methods:["Kıyıdan dip oltası","Şamandıralı olta"],
    baits:["Mısır","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Çıldır ilçe merkezi planlama desteği","Ardahan yönünden karayolu erişimi","Mevsimsel turizm hizmetleri"],
    cautions:[
      "Gölün donması buz yüzeyinin güvenli olduğu anlamına gelmez; güncel AFAD/yerel otorite uyarısı olmadan buz üzerine çıkılmamalıdır.",
      "Adalar, sazlıklar ve kuşların yoğun kullandığı hassas kıyılarda rahatsızlık oluşturacak erişim ve av baskısından kaçınılmalıdır.",
      "Her kıyı cebinin kamusal olduğu varsayılmamalı; özel mülkiyet, işletme ve tabela sınırlarına uyulmalıdır.",
      "15 Mayıs-15 Ağustos 2026 kapalı dönemi ve sonrasında yayımlanabilecek yeni il kararları hareket günü yeniden kontrol edilmelidir."
    ],
    accommodationOptions:[
      {name:"Çıldır ilçe merkezi",type:"Yerleşim / gecelik planlama",distanceKm:null,sourceUrl:"https://ardahan.ktb.gov.tr/TR-55790/sportif-olta-balikciligi.html",note:"Belirli tesis önerisi değildir; gecelik kalışta ruhsatlı konaklama seçeneği ve güncel hizmet durumu ayrıca kontrol edilmelidir."}
    ],
    accessEvidence:[
      {label:"Resmî sportif olta kullanımı",value:"Ardahan İl Kültür ve Turizm Müdürlüğü Çıldır Gölü'nde sportif olta balıkçılığını doğrudan tanımlar.",sourceUrl:"https://ardahan.ktb.gov.tr/TR-55790/sportif-olta-balikciligi.html",note:"Genel göl kullanımı kanıtıdır; belirli parsel, ada, sazlık veya kıyı cebine giriş hakkı vermez."},
      {label:"Göl ve hassas alan bağlamı",value:"Resmî turizm sayfası gölün adalarını ve kuş alanı niteliğini kaydeder.",sourceUrl:"https://ardahan.ktb.gov.tr/TR-55794/cildir-golu.html",note:"Hassas ekolojik ceplerde erişim ve av baskısını sınırlamak için planlama uyarısı olarak kullanılmıştır."}
    ],
    seasonalNotes:[
      "Sazan ve gümüşi havuz balığı 2024 rota-özel bilimsel örneklemeyle desteklenir; aynı gün aynı kıyıda bulunmaları veya yakalanmaları garanti değildir.",
      "Ardahan İl Tarım ve Orman Müdürlüğünün 12 Mayıs 2026 duyurusunda 6/2 kapsamında sazan ve ilgili iç su türleri için 15 Mayıs-15 Ağustos kapalı dönemi belirtilir; daha yeni karar varsa o uygulanır.",
      "Kışın göl yüzeyi donabilir; buz kalınlığı yıl ve noktaya göre değişir. Resmî güvenlik değerlendirmesi olmadan buz üstü av planlanmamalıdır."
    ],
    planningNotes:[
      "Sportif olta kullanımı rota düzeyinde resmî olarak desteklenmektedir; son kıyı girişi, park ve özel mülkiyet sınırı saha teyitli değildir.",
      "Adalar ve kuşların yoğun kullandığı sazlık kıyıları planlama noktası olarak seçme; yerel koruma ve güvenlik tabelası varsa açık kaynak özetinden üstündür.",
      "Gecelik planı kıyıda izinsiz kamp varsayımıyla değil Çıldır/Ardahan yerleşimlerinde ruhsatlı seçenekleri ayrıca kontrol ederek yap."
    ],
    transport:"Resmî turizm kaynağı Çıldır Gölü'nü Ardahan il merkezine yaklaşık 45 km mesafede tanımlar. Harita pini yalnız genel göl konumudur; son kıyı yolu, kış koşulları, park, özel mülkiyet ve açık giriş hareket günü ayrıca doğrulanmalıdır.",
    crowdNote:"Kış turizmi, festival dönemleri ve hafta sonlarında belirli kıyılarda ziyaretçi yoğunluğu artabilir. Yaya, kızak/araç, turizm faaliyeti veya diğer oltacılarla güvenli atış koridoru oluşmuyorsa başka kıyı seçilmelidir.",
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    sources:[
      {label:"Ardahan İl Kültür ve Turizm Müdürlüğü – Sportif Olta Balıkçılığı",url:"https://ardahan.ktb.gov.tr/TR-55790/sportif-olta-balikciligi.html",note:"Çıldır Gölü'nü doğrudan sportif olta balıkçılığı rotası olarak tanımlar; genel kullanım kanıtıdır."},
      {label:"Ardahan İl Tarım ve Orman Müdürlüğü – 2026 su ürünleri avcılığı yasak dönemi",url:"https://ardahan.tarimorman.gov.tr/Haber/1532/Su-Urunleri-Avciligi-Yasak-Donemi",note:"12 Mayıs 2026 duyurusunda 6/2 kapsamında ilgili iç su türleri için ildeki kapalı dönemi açıklar."},
      {label:"Çıldır Gölü balıklarının güncellenmiş değerlendirmesi – hakemli çalışma",url:"https://dergipark.org.tr/tr/pub/jaes/article/1521913",note:"Mayıs 2024'te üç temsil istasyonunda yapılan örnekleme ve literatür değerlendirmesi gölün güncel balık faunasını rota özelinde destekler."},
      {label:"Ardahan İl Kültür ve Turizm Müdürlüğü – Çıldır Gölü",url:"https://ardahan.ktb.gov.tr/TR-55794/cildir-golu.html",note:"Gölün fiziki yapısı, adaları ve önemli kuş alanı bağlamını verir; mikro erişim izni değildir."},
      rulesSource
    ]
  },

  "ulusal-kirikkale-kapulukaya-baraj-golu":{
    researchedAt:"2026-08-10",
    researchStatus:"Rota özelinde güçlü resmî amatör kullanım, güncel balıklandırma ve akademik tür doğrulaması",
    researchSummary:"Kırıkkale İl Kültür ve Turizm Müdürlüğü Kapulukaya Baraj Gölü'nde amatör olta balıkçılığı yapıldığını açıkça belirtir. Karaahmetli Tabiat Parkı sayfası göl çevresinde olta balıkçılığını rekreasyon faaliyeti olarak ayrıca kaydeder. Kırıkkale İl Tarım ve Orman Müdürlüğünün 13 Ağustos 2025 kaydı baraja 695 bin sazan yavrusu bırakıldığını, hakemli çalışma ise Kapulukaya'da turna, sazan ve kadifeyi rota özelinde belgelemiştir. Bu nedenle Güven B uygundur; tabiat parkı kuralları, baraj işletme alanları ve güncel kapalı dönem ayrıca uygulanır.",
    fish:["Sazan","Turna","Kadife"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde güncel resmî balıklandırma ve akademik kayıt",sourceLabel:"Kırıkkale İl Tarım ve Orman Müdürlüğü – Kapulukaya Barajına yavru balık salımı",sourceUrl:"https://kirikkale.tarimorman.gov.tr/Haber/924/Kapulukaya-Barajina-Yavru-Balik-Salimi",note:"13 Ağustos 2025'te 695.000 sazan yavrusunun Kapulukaya Barajı'na bırakıldığını bildirir; stok yoğunluğu veya av başarısı garantisi değildir."},
      {name:"Turna",scientificName:"Esox lucius",evidenceLevel:"Rota özelinde hakemli popülasyon/beslenme çalışması",sourceLabel:"Gazi Eğitim Fakültesi Dergisi – Kapulukaya Baraj Gölü turna çalışması",sourceUrl:"https://dergipark.org.tr/tr/pub/gefad/article/90524",note:"Kapulukaya'da yakalanmış 328 turna bireyine dayanan çalışma türün rota özelindeki varlığını doğrudan destekler; çalışma tarihinin eski olduğu not edilmelidir."},
      {name:"Kadife",scientificName:"Tinca tinca",evidenceLevel:"Rota özelinde hakemli besin içeriği kaydı",sourceLabel:"Gazi Eğitim Fakültesi Dergisi – Kapulukaya Baraj Gölü turna çalışması",sourceUrl:"https://dergipark.org.tr/tr/pub/gefad/article/90524",note:"Kapulukaya turnalarının sindirim içeriğinde Tinca tinca kaydedilmiştir; bu dolaylı rota kanıtı güncel kıyı bulunurluğu veya av başarısı anlamına gelmez."}
    ],
    methods:["Kıyıdan dip oltası","Şamandıralı olta","Mevzuata uygun at-çek"],
    baits:["Mısır","Solucan","Mevzuata uygun yapay yem"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Karaahmetli Tabiat Parkı günübirlik rekreasyon bağlamı","Bahşılı/Kırıkkale yerleşim hizmetleri","Doğa yürüyüşü ve kuş gözlem alanları"],
    cautions:[
      "Baraj gövdesi, santral/su alma yapıları, servis yolları ve işletme güvenlik sahaları amatör rota olarak değerlendirilmemelidir.",
      "Karaahmetli Tabiat Parkı sınırlarında güncel korunan alan, giriş, ateş ve kullanım kuralları ayrıca uygulanır.",
      "Turna ve sazangillerin tür bazlı kapalı dönemleri aynı değildir; güncel 6/2 ve Kırıkkale İl Tarım duyuruları hareket günü birlikte kontrol edilmelidir.",
      "Kıyı kotu ve gevşek zemin baraj seviyesine göre değişebilir; dik/çamurlu kıyıda yaklaşım zorlanmamalıdır."
    ],
    accommodationOptions:[
      {name:"Bahşılı ve Kırıkkale merkez",type:"Yerleşim / gecelik planlama",distanceKm:null,sourceUrl:"https://kirikkale.ktb.gov.tr/TR-172537/bahsili.html",note:"Belirli işletme önerisi değildir; ruhsatlı konaklama ve güncel ulaşım seçeneği ayrıca kontrol edilmelidir."}
    ],
    accessEvidence:[
      {label:"Resmî amatör olta kullanımı",value:"Kırıkkale İl Kültür ve Turizm Müdürlüğü Kapulukaya Baraj Gölü ile Kızılırmak Vadisinde amatör olta balıkçılığı yapıldığını belirtir.",sourceUrl:"https://kirikkale.ktb.gov.tr/TR-212419/sportif-olta-balikciligi.html",note:"Barajın her kıyısına giriş izni anlamına gelmez."},
      {label:"Karaahmetli rekreasyon erişimi",value:"Resmî Bahşılı sayfası Karaahmetli Tabiat Parkına Karaahmetli köyünden ulaşıldığını ve olta balıkçılığını yapılabilen faaliyetlerden biri olarak kaydeder.",sourceUrl:"https://kirikkale.ktb.gov.tr/TR-172537/bahsili.html",note:"Tabiat parkı kullanım kuralları ve güncel alan yönetimi önceliklidir."}
    ],
    seasonalNotes:[
      "Sazan 2025 resmî balıklandırmasıyla; turna ve kadife rota-özel akademik kayıtla desteklenir. Balıklandırma sayısı veya akademik kayıt güncel av yoğunluğu garantisi değildir.",
      "Kırıkkale İl Tarım ve Orman Müdürlüğü 13 Mart 2026 tarihinde sazan av yasağına ilişkin güncel duyuru yayımlamıştır; ek dosyadaki dönem ve güncel 6/2 hükümleri av günü kontrol edilmelidir.",
      "Turna için 6/2'deki tür bazlı kapalı dönem ayrıca kontrol edilmelidir; tek bir sazan takvimi bütün türlere uygulanmamalıdır."
    ],
    planningNotes:[
      "Karaahmetli Tabiat Parkı, resmî kaynakta olta balıkçılığıyla ilişkilendirilen en güçlü genel erişim bağlamıdır; bu, parkın her metre kıyısının av için açık olduğu anlamına gelmez.",
      "Baraj işletme tesislerinden, tekne çalışma alanlarından ve güvenlik şeritlerinden uzak dur; tabela ve görevli talimatını esas al.",
      "Gecelik kalış gerekiyorsa kıyıda kamp varsayımı yerine Bahşılı/Kırıkkale merkezindeki ruhsatlı seçenekleri ayrıca doğrula."
    ],
    transport:"Bahşılı resmî tanıtım sayfası Karaahmetli Tabiat Parkına Karaahmetli köyünden ulaşıldığını belirtir ve Kapulukaya Baraj Gölünü ilçe bağlamında tanımlar. Harita pini genel baraj konumudur; son park, yaya yaklaşımı, tabiat parkı giriş koşulları ve işletme sınırı yerinde doğrulanmalıdır.",
    crowdNote:"Karaahmetli çevresinde günübirlik piknik, yürüyüş, kuş gözlemi ve olta kullanımı aynı alanı paylaşabilir. Hafta sonu ve iyi havada güvenli atış koridoru daralırsa daha sakin ve izinli bir kıyı cebine geçilmelidir.",
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    sources:[
      {label:"Kırıkkale İl Kültür ve Turizm Müdürlüğü – Sportif Olta Balıkçılığı",url:"https://kirikkale.ktb.gov.tr/TR-212419/sportif-olta-balikciligi.html",note:"Kapulukaya Baraj Gölünde amatör olta balıkçılığı yapıldığını açıkça belirtir."},
      {label:"Kırıkkale İl Kültür ve Turizm Müdürlüğü – Bahşılı / Karaahmetli Tabiat Parkı",url:"https://kirikkale.ktb.gov.tr/TR-172537/bahsili.html",note:"Karaahmetli köyünden ulaşımı ve tabiat parkında olta balıkçılığını rekreasyon faaliyeti olarak kaydeder."},
      {label:"Kırıkkale İl Tarım ve Orman Müdürlüğü – Kapulukaya Barajına 695 bin sazan",url:"https://kirikkale.tarimorman.gov.tr/Haber/924/Kapulukaya-Barajina-Yavru-Balik-Salimi",note:"13 Ağustos 2025 tarihli rota-özel sazan balıklandırma kaydıdır."},
      {label:"Kapulukaya Baraj Gölü turna beslenme çalışması – hakemli makale",url:"https://dergipark.org.tr/tr/pub/gefad/article/90524",note:"Turna türünü ve mide içerikleri üzerinden sazan/kadife kayıtlarını rota özelinde destekler; çalışma eski tarihli olduğundan güncel stok iddiası kurulmaz."},
      {label:"Kırıkkale İl Tarım ve Orman Müdürlüğü – 2026 balık av yasakları",url:"https://kirikkale.tarimorman.gov.tr/Duyuru/652/Balik-Av-Yasaklari",note:"13 Mart 2026 tarihli güncel il duyurusudur; ek dosya ve 6/2 hükümleri av günü kontrol edilmelidir."},
      rulesSource
    ]
  },

  "ulusal-kutahya-enne-baraj-golu":{
    researchedAt:"2026-08-10",
    researchStatus:"Rota özelinde güçlü resmî sportif olta kullanımı ve akademik sazan doğrulaması",
    researchSummary:"Kütahya İl Kültür ve Turizm Müdürlüğü Enne Barajı'nı şehir merkezine yaklaşık 18 km uzaklıkta sportif amaçlı olta balıkçılığı yapılan sular arasında açıkça sayar. Enne Baraj Gölü'nde yaşayan Cyprinus carpio bireylerini doğrudan inceleyen hakemli çalışma sazan varlığını rota özelinde destekler. Bu kanıt paketi Güven B için yeterlidir; akademik çalışmanın eski tarihli ve ağır metal araştırması olması güncel tüketim güvenliği sonucu çıkarmaya elverişli değildir, kıyı erişimi de saha teyitli değildir.",
    fish:["Sazan"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde hakemli doğrudan örnekleme",sourceLabel:"Dumlupınar Üniversitesi Fen Bilimleri Enstitüsü Dergisi – Enne Baraj Gölü pullu sazan çalışması",sourceUrl:"https://dergipark.org.tr/tr/pub/dpufbed/article/406266",note:"Enne Baraj Gölü'nde yaşayan Cyprinus carpio bireyleri üzerinde yapılmış çalışmadır; eski tarihli olduğundan güncel stok yoğunluğu ve tüketim güvenliği sonucu çıkarılmaz."}
    ],
    methods:["Kıyıdan dip oltası","Şamandıralı olta"],
    baits:["Mısır","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Kütahya şehir merkezi hizmetleri","Şehir merkezine yakın günübirlik planlama","Karayolu bağlantısı"],
    cautions:[
      "Baraj gövdesi, su alma yapıları, işletme servis yolları ve tabelayla sınırlandırılan kesimler amatör erişim alanı sayılmamalıdır.",
      "Hakemli ağır metal çalışması tür varlığını doğrular; güncel su kalitesi veya balığın tüketim güvenliği hakkında olumlu/olumsuz güncel hüküm yerine kullanılamaz.",
      "Sazan ve diğer iç su türlerinde güncel 6/2 dönem, boy ve adet kuralları ile Kütahya'da yayımlanabilecek yeni yerel kararlar kontrol edilmelidir.",
      "Kıyı su seviyesi ve çamurlanma koşulları değişebilir; ilk ziyaret gündüz yapılmalıdır."
    ],
    accommodationOptions:[
      {name:"Kütahya şehir merkezi",type:"Yerleşim / gecelik planlama",distanceKm:null,sourceUrl:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Enne'nin şehir merkezine yaklaşık 18 km uzaklığı resmî kaynakta verilir; belirli tesis değil, ruhsatlı şehir konaklamasını ayrıca araştırma bağlamıdır."}
    ],
    accessEvidence:[
      {label:"Resmî sportif olta kullanımı ve mesafe",value:"Kütahya İl Kültür ve Turizm Müdürlüğü Enne Barajını şehir merkezine yaklaşık 18 km uzaklıkta ve sportif amaçlı olta balıkçılığı yapılan su olarak tanımlar.",sourceUrl:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Genel rota kanıtıdır; belirli kıyı girişinin kamusal olduğunu tek başına göstermez."}
    ],
    seasonalNotes:[
      "Sazan rota-özel hakemli çalışma ile desteklenir; çalışma eski tarihli olduğu için güncel kıyı bulunurluğu veya av başarısı iddiası kurulmaz.",
      "Kütahya İl Tarım'ın önceki dönem duyuruları yerel kapalı dönem uygulamalarının bulunduğunu gösterir; hareket gününde yalnız güncel 6/2 ve varsa yeni il duyurusu esas alınmalıdır.",
      "Su kotu ve kıyı zemini mevsime göre değişebileceğinden erişim ilk ziyarette gündüz gözlenmelidir."
    ],
    planningNotes:[
      "Resmî turizm kaynağı sportif olta kullanımını doğrudan destekler; son kıyı girişi, bariyer ve park noktası saha teyitli değildir.",
      "Eski ağır metal araştırmasını güncel tüketim güvenliği tavsiyesi olarak yorumlama; gerekiyorsa güncel resmî su kalitesi/sağlık duyurularını ayrıca ara.",
      "Gecelik kalış gerekiyorsa kıyıda izinsiz kamp varsayma; Kütahya şehir merkezindeki ruhsatlı seçenekleri ayrıca doğrula."
    ],
    transport:"Kütahya İl Kültür ve Turizm Müdürlüğü Enne Barajını Kütahya şehir merkezine yaklaşık 18 km uzaklıkta tanımlar. Harita pini genel su varlığı konumudur; son yaklaşım yolu, park, baraj işletme sınırı, özel mülkiyet ve açık kıyı girişi hareket günü ayrıca kontrol edilmelidir.",
    crowdNote:"Şehir merkezine görece yakın olması günübirlik kullanım yoğunluğunu artırabilir. Piknikçi, yürüyüşçü veya diğer oltacılarla güvenli atış mesafesi oluşmadığında daha sakin ve izinli bir kıyı cebine geçilmelidir.",
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    sources:[
      {label:"Kütahya İl Kültür ve Turizm Müdürlüğü – Sportif Olta Balıkçılığı",url:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Enne Barajında sportif amaçlı olta balıkçılığı yapıldığını ve şehir merkezine yaklaşık 18 km uzaklığı açıkça belirtir."},
      {label:"Enne Baraj Gölü pullu sazan çalışması – hakemli makale",url:"https://dergipark.org.tr/tr/pub/dpufbed/article/406266",note:"Enne Baraj Gölü'nde yaşayan Cyprinus carpio bireylerini doğrudan inceler; güncel tüketim güvenliği kaynağı değildir."},
      {label:"Enne Baraj Gölü ekosistem envanteri – akademik yayın",url:"https://dergipark.org.tr/tr/pub/tabin/article/136559",note:"Enne'nin rota-özel ekosistem literatürünü destekleyen akademik kayıttır; av izni kaynağı olarak kullanılmaz."},
      rulesSource
    ]
  },

  "ulusal-kutahya-kayabogazi-baraj-golu":{
    researchedAt:"2026-08-10",
    researchStatus:"Rota özelinde güçlü resmî sportif olta kullanımı, resmî stok ve ticari istihsal geçmişi doğrulaması",
    researchSummary:"Kütahya İl Kültür ve Turizm Müdürlüğü Kayaboğazı Barajını Tavşanlı'nın güneyinde sportif amaçlı olta balıkçılığı yapılan sular arasında açıkça sayar. Kütahya İl Tarım ve Orman Müdürlüğünün 2016 tarihli rota-özel istihsal ihalesi barajda pullu sazan ve havuz balığı için avlanabilir stok kaydı verir. İhale beş yıllık eski bir ticari kullanım kaydı olduğundan bugünkü kiralama durumunu kanıtlamaz; tam tersine güncel ağ/tekne/istihsal faaliyetinin ayrıca kontrol edilmesini gerektirir. Resmî amatör kullanım kanıtı nedeniyle Güven B uygundur, mikro kıyı erişimi saha teyitli değildir.",
    fish:["Sazan"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî avlanabilir stok kaydı",sourceLabel:"Kütahya İl Tarım ve Orman Müdürlüğü – Kayaboğazı Baraj Gölü istihsal ihalesi",sourceUrl:"https://kutahya.tarimorman.gov.tr/Duyuru/138/Il-Gida-Tarim-Ve-Hayvancilik-Mudurlugunden-Kayabogazi-Baraj-Golunun-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi",note:"2016 ihale duyurusunda Kayaboğazı için 1000 kg pullu sazan avlanabilir stok kaydı yer alır; eski tarihli ticari kayıt güncel stok yoğunluğu veya amatör av başarısı değildir."}
    ],
    methods:["Kıyıdan dip oltası","Şamandıralı olta"],
    baits:["Mısır","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Tavşanlı ilçe merkezi planlama desteği","Karayolu bağlantısı","Günübirlik kırsal rota bağlamı"],
    cautions:[
      "2016 tarihli beş yıllık istihsal ihalesi güncel kira durumunu göstermez; güncel ticari ağ, tekne veya istihsal sahası varsa bunlara müdahale edilmemelidir.",
      "Baraj gövdesi, işletme yapıları ve servis yolları amatör kıyı rotası olarak kullanılmamalıdır.",
      "Sazan için güncel 6/2 dönem, boy ve adet kuralları ile Kütahya'da yayımlanabilecek suya özel kararlar hareket günü kontrol edilmelidir.",
      "Özel parsel veya tarımsal işletme üzerinden kıyıya kestirme yapılmamalıdır."
    ],
    accommodationOptions:[
      {name:"Tavşanlı ilçe merkezi",type:"Yerleşim / gecelik planlama",distanceKm:null,sourceUrl:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Resmî kaynak Kayaboğazı'nı Tavşanlı'nın güneyinde, ilçe merkezine yaklaşık 7 km bağlamında tanımlar; ruhsatlı konaklama seçeneği ayrıca kontrol edilmelidir."}
    ],
    accessEvidence:[
      {label:"Resmî sportif olta kullanımı",value:"Kütahya İl Kültür ve Turizm Müdürlüğü Kayaboğazı Barajında sportif amaçlı olta balıkçılığı yapıldığını açıkça belirtir.",sourceUrl:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Genel rota kullanımı kanıtıdır; belirli kıyı parseline giriş hakkı değildir."},
      {label:"Resmî su alanı ve ticari kullanım geçmişi",value:"2016 İl Tarım ihalesi Kayaboğazı'nı Tavşanlı sınırlarında 300 hektarlık devlet hüküm ve tasarrufu altındaki baraj gölü olarak kaydeder.",sourceUrl:"https://kutahya.tarimorman.gov.tr/Duyuru/138/Il-Gida-Tarim-Ve-Hayvancilik-Mudurlugunden-Kayabogazi-Baraj-Golunun-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi",note:"Bu kayıt güncel kiralama veya kıyı erişim izni değildir; planlama risk bağlamıdır."}
    ],
    seasonalNotes:[
      "Sazan rota-özel 2016 resmî stok kaydıyla desteklenir; eski tarihli stok miktarı bugünkü yoğunluk veya av başarısı anlamına gelmez.",
      "Resmî turizm sayfasındaki sportif olta kaydı genel kullanımı destekler; güncel ticari istihsal/kiralama ve kıyı tabelası ayrıca kontrol edilmelidir.",
      "Güncel 6/2 kapalı dönem, boy ve adet sınırları ile yeni il kararları av günü esas alınmalıdır."
    ],
    planningNotes:[
      "Tavşanlı yönünden genel rota resmî kaynakla desteklenir; son park ve kıyıya iniş saha teyitli değildir.",
      "Ağ, şamandıra, tekne veya ticari çalışma işareti görülen kesimlerden uzak dur; eski ihale kaydını güncel serbest erişim kanıtı sayma.",
      "Gecelik kalış gerekiyorsa kıyı kampını varsayma; Tavşanlı ilçe merkezindeki ruhsatlı seçenekleri ayrıca doğrula."
    ],
    transport:"Kütahya İl Kültür ve Turizm Müdürlüğü Kayaboğazı Barajını Tavşanlı'nın güneyinde, ilçe merkezine yaklaşık 7 km bağlamında sportif olta rotaları arasında verir. Harita pini genel baraj konumudur; son yaklaşım yolu, park, özel parsel ve aktif istihsal/işletme sınırı hareket günü kontrol edilmelidir.",
    crowdNote:"Ticari istihsal faaliyeti, günübirlik ziyaretçiler ve diğer amatör balıkçılar aynı kıyı alanlarını kullanabilir. Ağ ve tekne operasyonlarından geniş güvenlik mesafesi bırakılmalı, atış koridoru çakışıyorsa yer değiştirilmelidir.",
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    sources:[
      {label:"Kütahya İl Kültür ve Turizm Müdürlüğü – Sportif Olta Balıkçılığı",url:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Kayaboğazı Barajında sportif amaçlı olta balıkçılığı yapıldığını ve Tavşanlı bağlamını açıkça belirtir."},
      {label:"Kütahya İl Tarım ve Orman Müdürlüğü – Kayaboğazı istihsal hakkı ihalesi",url:"https://kutahya.tarimorman.gov.tr/Duyuru/138/Il-Gida-Tarim-Ve-Hayvancilik-Mudurlugunden-Kayabogazi-Baraj-Golunun-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi",note:"2016 tarihli ihale, rota kimliği ile pullu sazan/havuz balığı stok kaydını destekler; güncel kira veya amatör erişim izni değildir."},
      {label:"Kütahya İl Kültür ve Turizm Müdürlüğü – Coğrafi Bilgiler",url:"https://kutahya.ktb.gov.tr/TR-69488/cografi-bilgiler.html",note:"Kayaboğazı Baraj Gölünü ilin temel su varlıkları arasında sayar; mikro kıyı erişimi kanıtı değildir."},
      rulesSource
    ]
  },

  "ulusal-kirklareli-armagan-baraj-golu":{
    researchedAt:"2026-08-10",
    researchStatus:"Rota özelinde güçlü resmî sportif olta, resmî sazan balıklandırması ve içme suyu işletme bağlamı doğrulaması",
    researchSummary:"Kırklareli İl Kültür ve Turizm Müdürlüğü Armağan Barajını sportif olta balıkçılığı yapılabilen sular arasında açıkça sayar. Kırklareli İl Tarım ve Orman Müdürlüğünün 11 Ağustos 2022 balıklandırma kaydı Armağan Baraj Gölüne 200 bin sazan yavrusu ayrıldığını gösterir. Kırklareli Valiliğinin su yönetimi kaydı ise Armağan'dan Kırklareli içme suyu arıtma tesislerine su iletimini doğrular. Bu nedenle amatör kullanım kanıtı güçlü olmakla birlikte su alma/işletme ve koruma cepleri kesinlikle rota dışında tutulmalıdır. Genel rota Güven B'dir; her kıyının açık olduğu sonucu çıkarılmaz.",
    fish:["Sazan"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî balıklandırma kaydı",sourceLabel:"Kırklareli İl Tarım ve Orman Müdürlüğü – 2022 balıklandırma faaliyetleri",sourceUrl:"https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi",note:"Resmî tabloda Armağan Baraj Gölü için 200.000 sazan yavrusu kaydı vardır; bırakım sayısı güncel stok veya kıyıdan av başarısı garantisi değildir."}
    ],
    methods:["Kıyıdan dip oltası","Şamandıralı olta"],
    baits:["Mısır","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Kırklareli merkez planlama desteği","Armağan çevresi kırsal yerleşim bağlamı","Karayolu ile günübirlik erişim planı"],
    cautions:[
      "Armağan Barajı Kırklareli içme suyu sistemine kaynak sağlar; su alma yapısı, isale/işletme tesisleri, mutlak koruma veya tabelayla kapalı alanlara girilmemelidir.",
      "Resmî sportif olta tanımı barajın bütün kıyı şeridini serbest alan yapmaz; güncel su koruma sınırları ve saha tabelası önceliklidir.",
      "Sazan için güncel 6/2 dönem, boy ve adet hükümleri ile Kırklareli İl Tarımın yeni kararları hareket günü kontrol edilmelidir.",
      "Kırsal son yaklaşımda özel mülkiyet ve tarım parsellerinden izinsiz geçiş yapılmamalıdır."
    ],
    accommodationOptions:[
      {name:"Kırklareli şehir merkezi",type:"Yerleşim / gecelik planlama",distanceKm:null,sourceUrl:"https://kirklareli.ktb.gov.tr/TR-64308/sportif-olta-balikciligi.html",note:"Belirli tesis önerisi değildir; gecelik kalış için şehir merkezindeki ruhsatlı seçenekler ayrıca kontrol edilmelidir."}
    ],
    accessEvidence:[
      {label:"Resmî sportif olta kullanımı",value:"Kırklareli İl Kültür ve Turizm Müdürlüğü Armağan Barajını ilde sportif olta balıkçılığı yapılabilen sular arasında açıkça sayar.",sourceUrl:"https://kirklareli.ktb.gov.tr/TR-64308/sportif-olta-balikciligi.html",note:"Genel rota kanıtıdır; belirli kıyı girişinin serbestliği değildir."},
      {label:"İçme suyu işletme bağlamı",value:"Kırklareli Valiliği Armağan Barajından Kırklareli Belediyesi içme suyu arıtma tesislerine su iletim projesini kaydeder.",sourceUrl:"https://www.kirklareli.gov.tr/il-su-yonetimi-koordinasyon-kurulu-toplantisi-yapildi16052017",note:"Su alma, isale ve koruma alanlarını amatör rotadan dışlamak için kritik planlama uyarısıdır."}
    ],
    seasonalNotes:[
      "Sazan varlığı 2022 rota-özel resmî balıklandırma kaydıyla desteklenir; balıklandırma sayısı güncel stok yoğunluğu veya av başarısı değildir.",
      "Sportif olta kullanımı resmî turizm kaynağında yer alır; içme suyu işletme/koruma sınırları ve güncel yerel kararlar ayrıca uygulanır.",
      "6/2 Tebliğdeki güncel dönem, boy ve adet kuralları ile Kırklareli İl Tarımın varsa daha yeni suya özel duyurusu av günü kontrol edilmelidir."
    ],
    planningNotes:[
      "İlk planlama yalnız genel baraj çevresine yapılmalı; su alma tesisi, isale yapıları, işletme servis yolu ve koruma tabelaları rota dışında tutulmalıdır.",
      "Sportif olta kullanımına dair resmî kaynak güçlüdür ancak son kıyı cebinin kamusal erişimi saha teyitli değildir; bariyer ve özel parsel sınırına uy.",
      "Gecelik kalış gerekiyorsa kıyıda kamp varsayma; Kırklareli merkezde ruhsatlı konaklama seçeneklerini ayrıca doğrula."
    ],
    transport:"Armağan Barajı Kırklareli merkez ilçesi kırsalında genel rota olarak planlanabilir; resmî kaynaklar sportif olta kullanımını ve barajın içme suyu işletme rolünü birlikte doğrular. Harita pini su varlığını gösterir; son yol, park, koruma zonu, servis yolu ve kamusal kıyı girişi yerinde kontrol edilmelidir.",
    crowdNote:"Kırsal kullanım yoğunluğu mevsime göre düşük görünse bile su işletmesi, bakım ekibi, tarımsal faaliyet veya diğer balıkçılarla çakışma olabilir. İşletme faaliyeti görülen kesimlerden uzak durulmalı ve güvenli atış alanı yoksa kıyı değiştirilmelidir.",
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    sources:[
      {label:"Kırklareli İl Kültür ve Turizm Müdürlüğü – Sportif Olta Balıkçılığı",url:"https://kirklareli.ktb.gov.tr/TR-64308/sportif-olta-balikciligi.html",note:"Armağan Barajını ilde sportif olta balıkçılığı yapılabilen sular arasında açıkça sayar."},
      {label:"Kırklareli İl Tarım ve Orman Müdürlüğü – 2022 balıklandırma faaliyetleri",url:"https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi",note:"Resmî tabloda Armağan Baraj Gölü için 200.000 sazan yavrusu kaydı bulunur."},
      {label:"Kırklareli Valiliği – İl Su Yönetimi Koordinasyon Kurulu",url:"https://www.kirklareli.gov.tr/il-su-yonetimi-koordinasyon-kurulu-toplantisi-yapildi16052017",note:"Armağan Barajından Kırklareli Belediyesi içme suyu arıtma tesislerine su iletimini doğrular; koruma/işletme riski için kullanılır."},
      rulesSource
    ]
  }
};

export const ulusalGuvenIyilestirmeMeta20260810={
  researchedAt:"2026-08-10",
  routeCount:Object.keys(ulusalGuvenIyilestirmeleri20260810).length,
  methodology:"Düşük güvenli ulusal kayıtlar, resmî amatör/sportif kullanım kanıtı öncelemesiyle taranır; akademik, resmî balıklandırma ve destekleyici saha kaynakları tür/erişim bağlamını güçlendirir. Hukuki uygunluk için destekleyici sosyal/hobi kaynakları resmî kanıtın yerine geçmez.",
  fieldVerification:noField
};
