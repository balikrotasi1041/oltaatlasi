const source=(label,url,note)=>({label,url,note});

const pertekOfficial=source(
  "Tunceli İl Kültür ve Turizm Müdürlüğü – Pertek",
  "https://tunceli.ktb.gov.tr/TR-57258/pertek.html",
  "Pertek ilçesinin Keban Baraj Gölü kıyısındaki rota kimliğini, Elazığ bağlantılı feribot/genel ulaşım bağlamını ve göldeki balıkçılığı resmî olarak tanımlar; belirli bir kıyı cebini amatör ava açık ilan etmez."
);
const pertekAcademic=source(
  "Fırat Üniversitesi Fen Bilimleri Dergisi – Keban Baraj Gölü Pertek Bölgesi balık örneklemesi",
  "https://dergipark.org.tr/tr/pub/fufbd/article/312890",
  "2017 makalesi, Ekim 2015-Mart 2016 arasında Keban Baraj Gölü Pertek Bölgesinde avlanan toplam 201 balığı inceler; örnekler içinde 39 Cyprinus carpio bulunur. Geçmiş bilimsel kayıt güncel av garantisi değildir."
);
const reservoirManagement=source(
  "Elazığ İl Tarım ve Orman Müdürlüğü – Keban Baraj Gölü 6 Nolu ticari avlak sahası",
  "https://elazig.tarimorman.gov.tr/Duyuru/704/Keban-Baraj-Golu-6-Nolu-Su-Urunleri-Avlak-Sahasinin-Avcilik-Yoluyla-Istihsal-Hakkinin-Kiraya-Verilmesi-Ihalesi",
  "Keban rezervuarında ticari istihsal sahaları bulunduğunu gösteren güncel yönetim bağlamıdır; Pertek mikro kıyısı için izin, kamusal erişim veya stok miktarı kanıtı olarak kullanılmaz."
);
const amateurRules=source(
  "Tarım ve Orman Bakanlığı – 6/2 Amatör Amaçlı Su Ürünleri Avcılığı çerçevesi",
  "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  "2024-2028 amatör avcılık kuralları için resmî başvuru noktasıdır; il/su özelindeki kararlar, ticari istihsal sahaları, işletme güvenliği ve saha tabelaları ayrıca uygulanır."
);

export const dailyQualityResearch20260830={
  "ulusal-tunceli-keban-baraj-golu-pertek-kiyisi":{
    researchedAt:"2026-08-30",
    researchStatus:"Rota özelinde resmî ve akademik kaynaklarla derinleştirilmiş masa başı doğrulama",
    researchSummary:"Pertek'in Keban Baraj Gölü kıyısındaki rota kimliği ve feribot/genel ulaşım bağlamı Tunceli İl Kültür ve Turizm Müdürlüğü tarafından doğrulanır. Fırat Üniversitesi Fen Bilimleri Dergisindeki Pertek bölgesi örneklemesi aynı su bölümünde 201 balık içinde 39 sazan (Cyprinus carpio) kaydeder. Ticari istihsal ve genel 6/2 mevzuatı ayrı yönetim katmanı olarak tutulur; belirli park, özel parsel, iskele veya mikro kıyı cebinin amatör ava açık olduğu sonucu çıkarılmaz.",
    fish:["Sazan"],
    fishEvidence:[{
      name:"Sazan",
      scientificName:"Cyprinus carpio",
      evidenceLevel:"Güçlü olasılık · Pertek bölgesinde akademik örnekleme",
      sourceLabel:pertekAcademic.label,
      sourceUrl:pertekAcademic.url,
      note:"Pertek bölgesinde 201 balık üzerinde yürütülen çalışmada 39 Cyprinus carpio örneği kaydedilmiştir. Bu rota-özel bulunurluk kanıtıdır; güncel kıyıdan av başarısı veya stok yoğunluğu garantisi değildir.",
      recordCount:39,
      distanceKm:null
    }],
    methods:["Mevzuata uygun kıyı oltası"],
    baits:["Mısır","Hamur","Solucan"],
    camping:"Kontrol edilmeli",
    vehicleAccess:"Orta",
    amenities:["Pertek ilçe merkezi hizmetleri","Feribot/genel ulaşım bağlantısı"],
    cautions:[
      "Feribot ve tekne operasyon alanlarından, iskele çalışma ceplerinden ve güvenlik sınırlarından uzak durulmalıdır.",
      "Keban Baraj Gölünde ticari istihsal sahaları bulunur; ticari çalışma alanı amatör kullanım izni sayılmaz ve ağ/tekne faaliyetinden uzak kalınmalıdır.",
      "Su kotu, dik veya çamurlu kıyı, özel parsel ve işletme/DSİ tabelaları hareket günü yeniden kontrol edilmelidir."
    ],
    accommodationOptions:[{
      name:"Pertek ilçe merkezi",
      type:"İlçe merkezi / planlama tabanı",
      distanceKm:null,
      sourceUrl:pertekOfficial.url,
      note:"Resmî ilçe sayfası Pertek'in göl kıyısı ve ulaşım bağlamını doğrular; belirli tesis önerisi veya rezervasyon uygunluğu değildir."
    }],
    accessEvidence:[{
      label:"Tunceli İl Kültür ve Turizm – Pertek genel erişim bağlamı",
      value:"Pertek, Keban Baraj Gölü kıyısında ve Elazığ bağlantılı feribot ulaşımının bulunduğu yerleşimdir.",
      sourceUrl:pertekOfficial.url,
      note:"Yalnız genel kamusal ulaşım/yerleşim bağlamıdır; mikro park, tarla geçişi, iskele veya kesintisiz kıyı erişimi garanti edilmez."
    }],
    seasonalNotes:[
      "Sazan bulunurluğu Pertek bölgesindeki 2015-2016 akademik örneklemede doğrulanmıştır; eski örnekleme güncel av garantisi değildir.",
      "Boy, adet ve kapalı dönem kuralları için hareket günü güncel 6/2 Tebliğ ve Tunceli İl Tarım duyuruları kontrol edilmelidir."
    ],
    planningNotes:[
      "Navigasyon yalnız Pertek-Keban genel kıyı bölgesine yönlendirmelidir; feribot iskelesi, aktif tekne çalışma sahası, özel parsel veya teknik tesis mikro hedef olarak yayımlanmaz.",
      "İlk ziyaret gündüz yapılmalı; saha tabelası, su kotu, kıyı eğimi ve kamusal geçiş yerinde doğrulanmalıdır."
    ],
    transport:"Pertek ilçe merkezi ve resmî feribot/genel yol bağlantısı planlama başlangıcı olarak kullanılabilir. Son araç yaklaşımı, park ve kıyıya giriş için belirli bir nokta doğrulanmadığından mikro erişim iddiası yayımlanmaz; tabela, özel mülkiyet ve işletme sınırı hareket günü kontrol edilir.",
    crowdNote:"Feribot ve yerleşim çevresinde yaya/araç/tekne yoğunluğu değişebilir; güvenli atış koridoru olmayan veya operasyonel kullanılan kıyı cepleri rota dışında tutulmalıdır.",
    sources:[pertekOfficial,pertekAcademic,reservoirManagement,amateurRules],
    fieldVerification:false,
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:false,
    legalAccessUnclear:false,
    navigationVerified:false,
    replaceAutomaticFish:true,
    replaceAutomaticSources:true
  }
};
