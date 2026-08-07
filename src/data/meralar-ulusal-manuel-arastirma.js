const fishEvidence = [
  {
    name:"Sazan",
    scientificName:"Cyprinus carpio",
    evidenceLevel:"Resmî stok ve akademik çalışma",
    sourceLabel:"Ankara İl Tarım ve Orman Müdürlüğü – Hirfanlı Baraj Gölü stok ilanı",
    sourceUrl:"https://ankara.tarimorman.gov.tr/Duyuru/337/Hirfanli-Baraj-Golu-2-Bolge-Su-Urunleri-Istihsal-Hakki-Kiralamasi",
    note:"2024 tarihli resmî ilanda avlanabilir sazan stoku belirtilmiştir; ayrıca Hirfanlı sazanlarının beslenmesi üzerine akademik çalışma vardır."
  },
  {
    name:"Sudak",
    scientificName:"Sander lucioperca",
    evidenceLevel:"Resmî stok",
    sourceLabel:"Ankara İl Tarım ve Orman Müdürlüğü – Hirfanlı Baraj Gölü stok ilanı",
    sourceUrl:"https://ankara.tarimorman.gov.tr/Duyuru/337/Hirfanli-Baraj-Golu-2-Bolge-Su-Urunleri-Istihsal-Hakki-Kiralamasi",
    note:"Resmî istihsal ilanında sudak için avlanabilir stok miktarı yer alır."
  },
  {
    name:"Tatlı Su Levreği",
    scientificName:"Perca fluviatilis",
    evidenceLevel:"Kamu kurumu yerel raporu",
    sourceLabel:"Sarıyahşi Kaymakamlığı – Hirfanlı Barajında Balıkçılık",
    sourceUrl:"https://www.sariyahsi.gov.tr/hirfanli-barajinda-balikcilik",
    note:"Kaymakamlık sayfası sazan, tatlı su levreği ve yayın balığının avlandığını bildirir."
  },
  {
    name:"Yayın",
    scientificName:"Silurus glanis",
    evidenceLevel:"Kamu kurumu yerel raporu",
    sourceLabel:"Sarıyahşi Kaymakamlığı – Hirfanlı Barajında Balıkçılık",
    sourceUrl:"https://www.sariyahsi.gov.tr/hirfanli-barajinda-balikcilik",
    note:"Yerel kamu kaynağında avlanan türler arasında yayın balığı sayılır."
  },
  {
    name:"Kadife",
    scientificName:"Tinca tinca",
    evidenceLevel:"Akademik çalışma",
    sourceLabel:"Ege Journal of Fisheries and Aquatic Sciences – Hirfanlı kadife balığı çalışması",
    sourceUrl:"https://www.researchgate.net/publication/274469063_Feeding_properties_of_tench_Tinca_tinca_Linnaeus_1758_in_Hirfanli_Dam_Lake_Kirsehir_Turkey",
    note:"Hirfanlı Baraj Gölü'nden yakalanan kadife balıkları üzerinde beslenme çalışması yapılmıştır."
  },
  {
    name:"Siraz",
    scientificName:"Capoeta sieboldii",
    evidenceLevel:"Akademik çalışma",
    sourceLabel:"Karadeniz Fen Bilimleri Dergisi – Hirfanlı siraz balığı çalışması",
    sourceUrl:"https://dergipark.org.tr/tr/pub/kfbd/issue/22233/238665",
    note:"Hirfanlı Baraj Gölü'nde yaşayan siraz balığının beslenme rejimi araştırılmıştır."
  },
  {
    name:"Gümüş Balığı",
    scientificName:"Atherina boyeri",
    evidenceLevel:"Resmî stok ve akademik çalışma",
    sourceLabel:"Ankara İl Tarım ve Orman Müdürlüğü – Hirfanlı Baraj Gölü stok ilanı",
    sourceUrl:"https://ankara.tarimorman.gov.tr/Duyuru/337/Hirfanli-Baraj-Golu-2-Bolge-Su-Urunleri-Istihsal-Hakki-Kiralamasi",
    note:"Resmî ilanda yüksek avlanabilir stok bildirilmiş; akademik çalışmalarda da Hirfanlı popülasyonu incelenmiştir."
  },
  {
    name:"Gümüşi Havuz Balığı",
    scientificName:"Carassius gibelio",
    evidenceLevel:"Resmî stok",
    sourceLabel:"Ankara İl Tarım ve Orman Müdürlüğü – Hirfanlı Baraj Gölü stok ilanı",
    sourceUrl:"https://ankara.tarimorman.gov.tr/Duyuru/337/Hirfanli-Baraj-Golu-2-Bolge-Su-Urunleri-Istihsal-Hakki-Kiralamasi",
    note:"Resmî ilanda Carassius spp. için avlanabilir stok miktarı belirtilir."
  }
];

const common = {
  researchedAt:"2026-07-30",
  researchStatus:"Rota özelinde araştırıldı",
  researchSummary:"Hirfanlı Baraj Gölü için tür bilgisi resmî stok ilanı, yerel kamu kurumları ve akademik yayınlarla karşılaştırıldı. Pin gölün genel konumudur; seçilecek kıyı, erişim ve av yasağı ayrıca kontrol edilmelidir.",
  fishEvidence,
  fish:["Sazan","Sudak","Tatlı Su Levreği","Yayın","Kadife","Siraz","Gümüş Balığı","Gümüşi Havuz Balığı"],
  methods:["Dip oltası","Şamandıra","Spin","Jig"],
  baits:["Mısır","Hamur","Solucan","Silikon","Minnow","Kaşık"],
  seasonalNotes:[
    "Hirfanlı Baraj Gölü için sazan, sudak, tatlı su levreği, yayın, kadife, siraz, gümüş balığı ve gümüşi havuz balığına ilişkin resmî veya akademik kayıtlar bulunmaktadır. Türlerin aynı kıyıda ve aynı dönemde bulunacağı sonucu çıkarılmamalıdır.",
    "Kırşehir İl Tarım ve Orman Müdürlüğü 2026 yılında 15 Mart–15 Haziran arasında amatör avcılık yasağı duyurmuştur. Tarihler ve istisnalar her yıl ve il sınırına göre yeniden kontrol edilmelidir."
  ],
  cautions:[
    "Barajın Ankara, Kırşehir, Kırıkkale ve Aksaray yönlerinde farklı işletme ve kıyı koşulları bulunabilir.",
    "15 Mart–15 Haziran dönemindeki iç su yasağı ve güncel il müdürlüğü kararları kontrol edilmelidir.",
    "Su seviyesi değişimi, çamurlu yamaç, sert rüzgâr ve kıyıdan ani derinleşme riski vardır.",
    "Pin, güvenli kıyı girişi veya araç park noktası değildir."
  ],
  sources:[
    {
      label:"Ankara İl Tarım ve Orman Müdürlüğü – Hirfanlı Baraj Gölü 2. Bölge stok ilanı",
      url:"https://ankara.tarimorman.gov.tr/Duyuru/337/Hirfanli-Baraj-Golu-2-Bolge-Su-Urunleri-Istihsal-Hakki-Kiralamasi",
      note:"Sazan, sudak, gümüş balığı, gümüşi havuz balığı ve kerevit için resmî stok bilgisi."
    },
    {
      label:"Sarıyahşi Kaymakamlığı – Hirfanlı Barajında Balıkçılık",
      url:"https://www.sariyahsi.gov.tr/hirfanli-barajinda-balikcilik",
      note:"Sazan, tatlı su levreği ve yayın balığının avlandığını bildiren yerel kamu kaynağı."
    },
    {
      label:"Kırşehir İl Tarım ve Orman Müdürlüğü – 2026 av yasağı duyurusu",
      url:"https://kirsehir.tarimorman.gov.tr/Haber/690/%E2%80%8Bsu-Urunleri-Av-Yasaklari-Basliyor",
      note:"2026 iç su av yasağı tarihleri; av öncesinde güncel duyuru yeniden kontrol edilmelidir."
    },
    {
      label:"Kırşehir İl Kültür ve Turizm Müdürlüğü – Hirfanlı Barajı",
      url:"https://kirsehir.ktb.gov.tr/TR-196433/hirfanli-baraj.html",
      note:"Barajın kapsadığı alan, plaj, sosyal tesis ve çevre balıkçılığı hakkında resmî tanıtım."
    },
    {
      label:"Kırşehir Valiliği – Doğal Güzelliklerimiz",
      url:"https://www.kirsehir.gov.tr/dogal-guzelliklerimiz",
      note:"Plaj, kamp kullanımı, asfalt ulaşım ve çevredeki sosyal tesisler hakkında resmî bilgi."
    },
    {
      label:"Hirfanlı Baraj Gölü sazan beslenmesi akademik çalışması",
      url:"https://dergipark.org.tr/tr/pub/kefdergi/article/626007",
      note:"Hirfanlı'dan 206 sazan örneğine dayanan akademik çalışma."
    },
    {
      label:"Hirfanlı Baraj Gölü siraz balığı akademik çalışması",
      url:"https://dergipark.org.tr/tr/pub/kfbd/issue/22233/238665",
      note:"Hirfanlı'da yaşayan siraz balığına ilişkin akademik kayıt."
    }
  ],
  replaceAutomaticSources:true,
  navigationVerified:false,
};

const commonRulesSource={
  label:"Tarım ve Orman Bakanlığı – amatör su ürünleri avcılığı kuralları",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"Güncel dönem, tür, boy, adet, takım ve suya özel kısıtlar hareket gününde yeniden kontrol edilmelidir."
};

const agriBalikGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Ağrı Balık Gölü; Kültür ve Turizm Bakanlığı, SERKA, Çevre Şehircilik ve İletişim Başkanlığı kayıtlarıyla su varlığı, kırmızı benekli alabalık ve sazan kaydı, koruma statüsü, ziyaretçi erişimi, kıyı çalışması ve mevsimsel tesis bağlamında doğrulandı. Saha teyidi ve amatör av izni yoktur.",
  fish:["Alabalık","Sazan"],
  fishEvidence:[
    {
      name:"Alabalık",scientificName:"Salmo trutta",evidenceLevel:"Resmî rota kaydı",
      sourceLabel:"Kültür Portalı – Balık Gölü",
      sourceUrl:"https://www.kulturportali.gov.tr/turkiye/agri/gezilecekyer/balik-golu",
      note:"Bakanlık sayfası gölde kırmızı benekli alabalık yaşadığını, gölün içme-kullanma suyu koruma sahası olduğunu ve hassas kuş yaşamını birlikte bildirir."
    },
    {
      name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Kamu kurumu rota kaydı",
      sourceLabel:"SERKA – Ağrı'da Gezilecek Yerler",
      sourceUrl:"https://www.serka.gov.tr/bolgemiz/agri/agri-da-gezilecek-yerler/",
      note:"Serhat Kalkınma Ajansı Balık Gölü'nde kırmızı pullu alabalık ve sazan yaşadığını bildirir; bu kayıt amatör av izni veya stok yoğunluğu değildir."
    }
  ],
  methods:["Mevzuat ve koruma kararı doğrulandıktan sonra kıyıdan hafif takım"],
  baits:["Yalnız güncel tebliğ ve alan kararlarının izin verdiği yemler"],
  camping:"Kontrol edilmeli",
  vehicleAccess:"Zor",
  amenities:["Adakent/Tanyolu çevresinde mevsimsel turizm tesisleri","Günübirlik kamelya ve restoran kaydı","Yüksek rakım ve sınırlı yol koşulları"],
  accommodationOptions:[
    {
      name:"Adakent çevresi mevsimsel bungalov tesisleri",type:"Bungalov/restoran alanı",distanceKm:null,
      sourceUrl:"https://www.iletisim.gov.tr/turkce/yerel_basin/detay/agridaki-doga-harikasi-balik-golunde-yogunluk-yasaniyor",
      note:"2025 tarihli kamu haberinde 11 bungalov ve göl çevresinde birden fazla turizm tesisi aktarılır; işletme, sezon ve rezervasyon durumu doğrudan doğrulanmalıdır."
    }
  ],
  accessEvidence:[
    {
      label:"Taşlıçay yönünden genel ulaşım",value:"Resmî turizm kaydı gölü Taşlıçay adresiyle verir ve toplu/şehir içi ulaşım bulunduğunu belirtir.",
      sourceUrl:"https://www.kulturportali.gov.tr/turkiye/agri/gezilecekyer/balik-golu",
      note:"Bu bilgi belirli kıyı cebine araç erişimi veya yolun her mevsim açık olduğu anlamına gelmez."
    },
    {
      label:"Kıyı yolu ve tesis erişimi",value:"2025 tarihli kamu haberinde Taşlıçay'a yaklaşık 30 kilometre mesafe ve göl çevresindeki yol sorunları birlikte aktarılır.",
      sourceUrl:"https://www.iletisim.gov.tr/turkce/yerel_basin/detay/agridaki-doga-harikasi-balik-golunde-yogunluk-yasaniyor",
      note:"Son yaklaşım gündüz yapılmalı; kış, yağış ve yol çalışması koşulları yerelden doğrulanmalıdır."
    }
  ],
  transport:"Taşlıçay üzerinden Adakent/Tanyolu çevresindeki açık olduğu doğrulanmış turizm tesisi planlama hedefi olarak seçilmelidir. Genel göl pinine araç rotası verilmemeli; son yolun kaplama, kar, çamur ve geçiş durumu hareket günü yerel işletme veya kurumdan sorulmalıdır.",
  crowdNote:"Yaz ve bayram dönemlerinde ziyaretçi yoğunluğu artabilir; kuş yaşamı, otlaklar, içme suyu koruma alanı ve diğer ziyaretçiler olta planından önce gelir.",
  seasonalNotes:[
    "Kırmızı benekli alabalık ve sazan rota özelinde kamu kaynaklarında geçer; türlerin güncel avlanabilirliği, koruma statüsü ve popülasyon durumu ayrıca doğrulanmalıdır.",
    "2.241 metre rakımda kışın don, ani hava değişimi ve yol kapanması riski vardır; buz üzerinden araç veya yaya geçişi önerilmez."
  ],
  planningNotes:[
    "Göl içme-kullanma suyu koruma sahasıdır; yerel koruma kararları ve tabelalar genel tebliğden daha kısıtlayıcı olabilir.",
    "Kıyı kenar çizgisi çalışması kamusal giriş garantisi değildir; tarım ve otlak parsellerinden izinsiz geçilmemelidir.",
    "Geceleme düşünülüyorsa mevsimsel tesisin ruhsatı, açık olduğu tarih ve rezervasyonu doğrudan işletmeden doğrulanmalıdır."
  ],
  cautions:["İçme-kullanma suyu koruma sahası","Hassas kuş ve alabalık habitatı","Yüksek rakım, don ve hızlı hava değişimi","Kötü veya mevsimsel kapanabilen son yol","Kamusal amatör av alanı doğrulanmış değildir"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Kültür Portalı – Balık Gölü",url:"https://www.kulturportali.gov.tr/turkiye/agri/gezilecekyer/balik-golu",note:"Konum, koruma sahası, kırmızı benekli alabalık, kuş yaşamı ve genel ulaşım kaydı."},
    {label:"SERKA – Ağrı'da Gezilecek Yerler",url:"https://www.serka.gov.tr/bolgemiz/agri/agri-da-gezilecek-yerler/",note:"Balık Gölü konumu ile alabalık ve sazan kaydı."},
    {label:"Ağrı Çevre Şehircilik – kıyı kenar çizgisi çalışması",url:"https://agri.csb.gov.tr/agri-ili-balikgolu-kiyi-kenar-cizgisi-tespit-calismalari-haber-295969",note:"2025'te Tanyolu–Bezirhane–Aktarla arasındaki yaklaşık 20 km kıyı çalışmasını bildirir; erişim hakkı vermez."},
    {label:"İletişim Başkanlığı – Balık Gölü turizm sezonu",url:"https://www.iletisim.gov.tr/turkce/yerel_basin/detay/agridaki-doga-harikasi-balik-golunde-yogunluk-yasaniyor",note:"2025 ziyaretçi, tesis, bungalov ve yol koşulu bağlamı."},
    commonRulesSource
  ]
};

const seyhanBarajGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Seyhan Baraj Gölü; Tarım ve Orman Bakanlığının doğa turizmi alan kaydı, Adana Valiliği ve Büyükşehir Belediyesinin Adnan Menderes kıyı şeridi kayıtları ile rota-özel akademik tür çalışmalarından doğrulandı. Sportif olta balıkçılığı resmî alan faaliyeti olarak açıkça sayılır; yine de güncel yasak ve yerel kısıtlar hareket günü kontrol edilmelidir.",
  fish:["Sazan","Gümüşi Havuz Balığı","Alabalık"],
  fishEvidence:[
    {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde akademik çalışma",sourceLabel:"Seyhan Baraj Gölü sazan ağır metal çalışması",sourceUrl:"https://doi.org/10.29048/makufebed.411888",note:"Çalışma doğrudan Seyhan Baraj Gölü'nden sazan örneklerini inceler; av verimi veya tüketim güvenliği için güncel sonuç yerine geçmez."},
    {name:"Gümüşi Havuz Balığı",scientificName:"Carassius gibelio",evidenceLevel:"Bakanlık teknik yayını",sourceLabel:"Tarım ve Orman Bakanlığı – Seyhan Baraj Gölü egzotik balıkları",sourceUrl:"https://www.tarimorman.gov.tr/DKMP/Belgeler/dkmp%20resmi%20istatistik/kutuphane/82.pdf",note:"Bakanlık yayını Carassius gibelio'yu Seyhan Baraj Gölü'nde tespit edilen türler arasında verir."},
    {name:"Alabalık",scientificName:"Oncorhynchus mykiss",evidenceLevel:"Bakanlık teknik yayını",sourceLabel:"Tarım ve Orman Bakanlığı – Seyhan Baraj Gölü egzotik balıkları",sourceUrl:"https://www.tarimorman.gov.tr/DKMP/Belgeler/dkmp%20resmi%20istatistik/kutuphane/82.pdf",note:"Bakanlık yayını gökkuşağı alabalığını Seyhan Baraj Gölü kayıtları arasında sayar; güncel avlanabilirlik ayrıca kontrol edilir."}
  ],
  methods:["Kıyıdan dip oltası","Şamandıralı olta","Mevzuata uygun hafif spin"],
  baits:["Mısır","Hamur","Solucan","Tür ve kurala uygun yapay yem"],
  camping:"Uygun değil",
  vehicleAccess:"Kolay",
  amenities:["Adnan Menderes Bulvarı kamusal kıyı şeridi","Aydınlatılmış yürüyüş ve bisiklet hattı","Kent içi yeme-içme ve market seçenekleri","Adana'da belgeli konaklama seçenekleri"],
  accommodationOptions:[
    {name:"Adana turizm işletme belgeli tesisleri",type:"Kent otelleri",distanceKm:null,sourceUrl:"https://adana.ktb.gov.tr/TR-220079/konaklama-tesisleri.html",note:"İl Kültür ve Turizm Müdürlüğünün belgeli tesis listesi kullanılmalı; göl kıyısında geceleme veya kamp varsayılmamalıdır."}
  ],
  accessEvidence:[
    {label:"Adnan Menderes kamusal kıyı şeridi",value:"Valilik, Seyhan Baraj Gölü kıyısındaki hattı kentin önemli rekreasyon ve dinlenme alanı olarak tanımlar.",sourceUrl:"https://adana.gov.tr/adnan-menderes-bulvari-",note:"Kamusal rekreasyon kullanımı olta atılabilecek her noktanın güvenli veya serbest olduğu anlamına gelmez."},
    {label:"Güncel kıyı düzenlemesi",value:"Büyükşehir Belediyesi 3,5 kilometrelik hatta aydınlatma, bisiklet yolu ve korkuluk yenilemesi yaptığını bildirir.",sourceUrl:"https://www.adana.bel.tr/tr/haber/buyuksehir-den-adnan-menderes-bulvari-nda-aydinlatma--bisiklet-yolu-ve-korkuluk-yenileme-calismasi-",note:"Yaya ve bisiklet güvenliği olta kullanımından önce gelir; korkuluk ve yoğun kullanım alanlarında atış yapılmamalıdır."},
    {label:"Resmî sportif olta faaliyeti",value:"Tarım ve Orman Bakanlığı Ekotaban kaydı Seyhan Baraj Gölü Yaban Hayatı Geliştirme Sahasında sportif olta balıkçılığını yapılabilen faaliyetler arasında sayar.",sourceUrl:"https://ekotaban.tarimorman.gov.tr/alan/442",note:"Korunan alan koşulları, güncel izinler ve yasaklar ayrıca kontrol edilmelidir."}
  ],
  lat:37.0574661,
  lng:35.3050604,
  locationPrecision:"Genel bölge",
  navigationVerified:true,
  navigationNote:"Pin Adnan Menderes Bulvarı üzerindeki kamusal kent kıyısının genel planlama noktasını gösterir; park cebi veya olta atış noktası değildir. Bisiklet yolu, yaya akışı, korkuluk ve güncel saha düzeni yerinde kontrol edilmelidir.",
  transport:"Kent içinden Çukurova ilçesindeki Adnan Menderes Bulvarı kamusal kıyı hattı hedeflenebilir. Navigasyon genel bulvar noktasına gider; aracı yalnız yasal park alanına bırak, bisiklet ve yaya yolunu kapatma, su yapıları ile koruma alanı sınırlarından uzak dur.",
  crowdNote:"Kamusal kıyı spor, yürüyüş, bisiklet ve dinlenme için yoğun kullanılır. Güvenli atış koridoru bulunmayan saat ve bölümlerde olta açılmamalıdır.",
  seasonalNotes:["Sazan, gümüşi havuz balığı ve gökkuşağı alabalığı rota-özel akademik veya Bakanlık kayıtlarında yer alır; aynı kıyıda güncel bulunurluk ve av verimi garanti değildir.","İçsu kapalı dönemleri, tür-boy-adet sınırları ve korunan alan kararları av günü resmî kaynaklardan kontrol edilmelidir."],
  planningNotes:["Adnan Menderes kıyı şeridinde yaya ve bisiklet güvenliği uygun değilse olta açma.","Baraj gövdesi, su alma yapıları ve güvenlik alanlarını rota dışında tut.","Geceleme için yalnız belgeli kent tesislerini kullan; kıyı kampı varsayma."],
  cautions:["Yoğun yaya ve bisiklet trafiği","Baraj işletme ve koruma alanları","Kıyıdan ani derinleşme ve düşme riski","Güncel içsu yasakları","Tüketim için güncel su ürünü duyurularını kontrol etme gereği"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:true,
  replaceAutomaticSources:true,
  sources:[
    {label:"Tarım ve Orman Bakanlığı Ekotaban – Seyhan Baraj Gölü",url:"https://ekotaban.tarimorman.gov.tr/alan/442",note:"Günübirlik rekreasyon ve sportif olta balıkçılığını resmî alan faaliyetleri arasında sayar."},
    {label:"Adana Valiliği – Adnan Menderes kıyı şeridi",url:"https://adana.gov.tr/adnan-menderes-bulvari-",note:"Kamusal rekreasyon ve dinlenme alanını doğrular."},
    {label:"Adana Büyükşehir – kıyı düzenlemesi",url:"https://www.adana.bel.tr/tr/haber/buyuksehir-den-adnan-menderes-bulvari-nda-aydinlatma--bisiklet-yolu-ve-korkuluk-yenileme-calismasi-",note:"3,5 km aydınlatma, bisiklet yolu ve korkuluk yenilemesini bildirir."},
    {label:"TR Dizin – Seyhan Baraj Gölü balık faunası",url:"https://search.trdizin.gov.tr/tr/yayin/detay/129399/",note:"2004–2005 örneklemesine dayalı rota-özel balık faunası çalışması."},
    {label:"Tarım ve Orman Bakanlığı – Seyhan Baraj Gölü egzotik balıkları",url:"https://www.tarimorman.gov.tr/DKMP/Belgeler/dkmp%20resmi%20istatistik/kutuphane/82.pdf",note:"Rota-özel tür tespitleri içeren teknik yayın."},
    commonRulesSource
  ]
};

const asartepeBarajGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Asartepe Baraj Gölü; Ankara Valiliği su yapısı kaydı, resmî çevre durum raporundaki hobi balıkçılığı ifadesi, EBA kamusal piknik alanı kaydı ve rota-özel akademik tür çalışmasıyla doğrulandı. Saha teyidi yapılmadı; genel göl pini güvenli kıyı girişi değildir.",
  fish:["Gümüşi Havuz Balığı"],
  fishEvidence:[{name:"Gümüşi Havuz Balığı",scientificName:"Carassius gibelio",evidenceLevel:"Rota özelinde hakemli çalışma",sourceLabel:"Asartepe Baraj Gölü Carassius gibelio popülasyon çalışması",sourceUrl:"https://doi.org/10.17100/nevbiltek.565112",note:"Çalışma doğrudan Asartepe Baraj Gölü'ndeki Carassius gibelio popülasyonunu inceler; güncel yoğunluk ve av başarısı garanti değildir."}],
  methods:["Mevzuata uygun hafif dip oltası","Şamandıralı olta"],
  baits:["Solucan","Ekmek","Mısır"],
  camping:"Kontrol edilmeli",
  vehicleAccess:"Orta",
  amenities:["Asartepe/Alay mevkii piknik alanı kaydı","Güdül ve Ayaş yönünde temel ihtiyaç planı","Kıyıda sürekli tesis garantisi yok"],
  accommodationOptions:[{name:"Güdül/Ayaş ve Ankara çevresi konaklama planı",type:"İlçe/kent konaklaması",distanceKm:null,sourceUrl:"https://ankara.ktb.gov.tr/Eklenti/116988%2Cfaaliyetraporu2023webpdf.pdf?0=",note:"İl Kültür ve Turizm raporu Güdül ve Ayaş konaklama kapasitesini verir; tesis adı, güncel belge ve mesafe ayrıca doğrulanmalıdır."}],
  accessEvidence:[
    {label:"Asartepe ve Alay mevkii piknik alanı",value:"Millî Eğitim Bakanlığı açık öğrenme kaydı Asartepe Barajı ve Alay mevkiindeki piknik alanını kamusal öğrenme/ziyaret noktası olarak listeler.",sourceUrl:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/asartepe-baraji-ve-alay-mevkii-nde-piknik-alanlari-1281",note:"Genel adres belirli park, kıyı girişi veya olta atış cebini doğrulamaz."},
    {label:"Asartepe su yapısı",value:"Ankara Valiliği barajı Güdül yakınında İlhan Deresi üzerinde, sulama amaçlı işletilen su yapısı olarak kaydeder.",sourceUrl:"https://www.ankara.gov.tr/barajlar",note:"İşletme yapıları ve servis yolları kamusal kullanım alanı değildir."}
  ],
  transport:"Güdül/Çanıllı yönünden yalnız kamusal yol ve açık olduğu doğrulanmış piknik alanı hedeflenmelidir. Genel göl merkezine navigasyon verilmez; son yaklaşım, park, bariyer, tarım parseli ve DSİ işletme sınırı gündüz kontrol edilmelidir.",
  crowdNote:"Piknik alanı aile ve günübirlik ziyaretçilerle paylaşılır; güvenli atış koridoru yoksa olta açılmamalıdır.",
  seasonalNotes:["Gümüşi havuz balığı rota-özel hakemli çalışmayla doğrulanmıştır; çalışma tarihi güncel stok veya av başarısı anlamına gelmez.","İçsu kapalı dönemi, tür-boy-adet sınırı ve yerel işletme kararları av öncesinde kontrol edilmelidir."],
  planningNotes:["Baraj gövdesi, regülatör, su alma yapısı ve servis yollarından uzak dur.","Kamusal piknik alanı dışındaki tarla ve kıyı geçişlerinde mülkiyet izni varsayma.","Kıyıda konaklama veya kamp hizmeti varsayma; ilçe/kent seçeneğini önceden doğrula."],
  cautions:["Sulama işletme alanları","Özel tarım parselleri","Piknik ziyaretçileriyle ortak kullanım","Su seviyesi ve çamurlu kıyı","Genel pinin erişim noktası olmaması"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Ankara 2016 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/editordosya/Ankara_icdr2016.pdf",note:"Asartepe Barajında hobi balıkçılığı yapıldığını bildiren resmî çevre raporu."},
    {label:"MEB EBA – Asartepe Barajı ve Alay mevkii piknik alanları",url:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/asartepe-baraji-ve-alay-mevkii-nde-piknik-alanlari-1281",note:"Kamusal ziyaret/piknik alanı ve genel adres bağlamı."},
    {label:"Ankara Valiliği – Barajlar",url:"https://www.ankara.gov.tr/barajlar",note:"Asartepe'nin Güdül yakınındaki sulama barajı olduğunu doğrular."},
    {label:"Asartepe Baraj Gölü Carassius gibelio çalışması",url:"https://doi.org/10.17100/nevbiltek.565112",note:"Rota-özel tür ve popülasyon çalışması."},
    commonRulesSource
  ]
};

const nazikGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Nazik Gölü; Bitlis İl Tarım ve Orman Müdürlüğünün tür ve balıkçılık kaydı, DKMP'nin ulusal öneme haiz sulak alan tescili, 2023 il çevre raporu ve Ahlat/Ovakışla erişim kaynaklarıyla doğrulandı. Kesin korunacak hassas alan ve sulak alan statüsü nedeniyle amatör av, kıyı girişi ve yerel karar ayrıca teyit edilmelidir.",
  fish:["İnci Kefali","Sazan","Siraz","Havuz Balığı"],
  fishEvidence:[
    {name:"İnci Kefali",scientificName:"Alburnus tarichi",evidenceLevel:"İl Tarım resmî stok kaydı",sourceLabel:"Bitlis İl Tarım ve Orman Müdürlüğü – İlimiz",sourceUrl:"https://bitlis.tarimorman.gov.tr/Menu/16/Ilimiz",note:"Nazik Gölü için inci kefali avlanabilir stok tahmini ve ekonomik balıkçılık bilgisi verir; amatör av izni değildir."},
    {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"İl Tarım resmî stok kaydı",sourceLabel:"Bitlis İl Tarım ve Orman Müdürlüğü – İlimiz",sourceUrl:"https://bitlis.tarimorman.gov.tr/Menu/16/Ilimiz",note:"Aynalı ve pullu sazan için rota-özel stok kaydı verir; güncel amatör av koşulları ayrıca kontrol edilir."},
    {name:"Siraz",scientificName:"Capoeta sp.",evidenceLevel:"İl Tarım resmî stok kaydı",sourceLabel:"Bitlis İl Tarım ve Orman Müdürlüğü – İlimiz",sourceUrl:"https://bitlis.tarimorman.gov.tr/Menu/16/Ilimiz",note:"Yerel adı Gocut olan sirazı Nazik Gölü türleri arasında sayar."},
    {name:"Havuz Balığı",scientificName:"Carassius carassius",evidenceLevel:"İl Tarım resmî tür kaydı",sourceLabel:"Bitlis İl Tarım ve Orman Müdürlüğü – İlimiz",sourceUrl:"https://bitlis.tarimorman.gov.tr/Menu/16/Ilimiz",note:"Havuz balığını düşük stoklu ve avcılığı olmayan tür olarak kaydeder; hedef tür önerisi değildir."}
  ],
  methods:["Yalnız güncel alan kararı ve tebliğ doğrulandıktan sonra kıyıdan yasal amatör takım"],
  baits:["Tür ve alan kuralına uygun yem"],
  camping:"Uygun değil",
  vehicleAccess:"Orta",
  amenities:["Ovakışla ve Ahlat üzerinden planlama","Kıyıda sürekli hizmet garantisi yok","Ahlat'ta konaklama alternatifi"],
  accommodationOptions:[{name:"Ahlat'taki belgeli/listeli konaklama seçenekleri",type:"İlçe konaklaması",distanceKm:null,sourceUrl:"https://bitlis.ktb.gov.tr/TR-187647/bitlis-rehberi.html",note:"İl Kültür ve Turizm Müdürlüğü Ahlat'taki tesisleri listeler; güncel belge, açık olma ve rezervasyon bilgisi doğrudan doğrulanmalıdır."}],
  accessEvidence:[
    {label:"Ovakışla üzerinden genel konum",value:"MEB açık öğrenme kaydı Nazik Gölü'nü Ahlat/Ovakışla kuzeyinde konumlandırır ve genel yol tarifi bağlantısı sunar.",sourceUrl:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/nazik-golu-74",note:"Kıyı parseli, güvenli park veya amatör av alanı doğrulaması değildir."},
    {label:"Sulak alan ve koruma statüsü",value:"DKMP, Nazik Gölü'nün 2015'te Ulusal Öneme Haiz Sulak Alan tescil edildiğini bildirir.",sourceUrl:"https://bolge14.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=16",note:"Alan yönetim planı ve güncel koruma kararları ziyaret öncesinde kontrol edilmelidir."}
  ],
  transport:"Ahlat ilçe merkezinden Ovakışla yönü genel planlama koridorudur. Göl merkezine rota oluşturma; yalnız kamusal yol ve açık geçişleri kullan. Kışın donmuş göl yüzeyini yol olarak kullanma ve kıyıdaki hassas alan/tabela kararlarına uy.",
  crowdNote:"Balıkçılık, sulama, köy erişimi ve hassas sulak alan kullanımı aynı çevrede kesişir; ticari ağ faaliyetleri ve koruma uygulamaları amatör planı sınırlayabilir.",
  seasonalNotes:["İnci kefali, sazan, siraz ve havuz balığı İl Tarım kaydında rota özelinde yer alır; havuz balığının avcılığı olmadığı özellikle belirtilir.","Üreme dönemi yasakları, hassas alan kararları ve il müdürlüğü duyuruları hareket günü kontrol edilmelidir."],
  planningNotes:["Nazik Gölü kesin korunacak hassas alan ve ulusal öneme haiz sulak alandır; tabela ve görevlilerden güncel kullanım koşulu öğrenilmelidir.","Kışın göl yüzeyine araçla veya yürüyerek çıkma; buz kalınlığı güvenli kabul edilmemelidir.","Geceleme için Ahlat'taki güncel ruhsatlı seçenekleri doğrula; göl kıyısında kamp varsayma."],
  cautions:["Kesin korunacak hassas alan","Ulusal öneme haiz sulak alan","Kışın buz ve aşırı soğuk","Ticari ağ/kaçak av denetimleri","Genel pinin kıyı girişi olmaması"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Bitlis İl Tarım ve Orman Müdürlüğü – Nazik Gölü",url:"https://bitlis.tarimorman.gov.tr/Menu/16/Ilimiz",note:"Rota-özel tür, stok ve balıkçılık bilgisi."},
    {label:"DKMP 14. Bölge – Nazik Gölü Ulusal Öneme Haiz Sulak Alanı",url:"https://bolge14.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=16",note:"2015 tescili ve biyolojik çeşitlilik bilgisi."},
    {label:"Bitlis 2023 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/b-tl-s_-cdr2023-20240705110240.pdf",note:"Nazik Gölü'nün balıkçılık ve sulama kullanımı ile en çok avlanan türlerini bildirir."},
    {label:"Bitlis Valiliği – Nazik Gölü kaçak av denetimi",url:"https://www.bitlis.gov.tr/bitliste-bulunan-nazik-golunde-kacak-balik-avciligi-yapan-1-supheli-yakalanmistir",note:"Kesin korunacak hassas alan statüsü ve kaçak av denetimi bağlamı."},
    commonRulesSource
  ]
};

const catalanBarajGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Çatalan Baraj Gölü'nün konumu ve içme suyu işlevi resmî çevre raporu ile; balık topluluklarının araştırıldığı ve gölün koruma altında olduğu Çukurova Üniversitesi/TÜBİTAK proje kaydıyla doğrulandı. Bu kaynaklar kamusal kıyı girişi veya amatör av izni göstermediği için kayıt Güven D'de tutulur.",
  fish:[],
  fishEvidence:[],
  replaceAutomaticFish:true,
  methods:["Yalnız içme suyu havzası kararı ve güncel mevzuat açıkça izin verirse yasal amatör takım"],
  baits:["Yalnız alan kararı ve tebliğin izin verdiği yemler"],
  camping:"Uygun değil",
  vehicleAccess:"Kontrol edilmeli",
  amenities:["Adana kent merkezinden günübirlik araştırma planı","Kıyıda kamusal hizmet veya park alanı doğrulanmış değildir"],
  accessEvidence:[
    {label:"İçme suyu havzası",value:"Resmî çevre raporu Çatalan Barajı'nı Adana'nın içme ve kullanma suyu kaynağı olarak tanımlar.",sourceUrl:"https://webdosya.csb.gov.tr/db/ced/icerikler/adana_-2019_-cdr-20201023092541.pdf",note:"Su varlığı ve işlev kanıtıdır; kıyı erişimi veya av izni değildir."},
    {label:"Koruma ve bilimsel araştırma",value:"Çukurova Üniversitesi proje kaydı Çatalan'ı içme suyu amaçlı kullanılan ve koruma altındaki göl olarak, Seyhan'ı ise balıkçılığa açık göl olarak ayrı tanımlar.",sourceUrl:"https://avesis.cu.edu.tr/proje/adc7f65f-3f61-42a9-915d-02f00c5ee2e2/seyhan-nehri-adana-uzerindeki-catalan-ve-seyhan-baraj-gollerinde-ihtiyoplankton-topluluklarinin-arastirilmasi-ve-potansiyel-iklim-degisimi-etkilerinin-ongorulmesi",note:"Bu ayrım nedeniyle Çatalan için amatör av uygunluğu varsayılmaz."}
  ],
  transport:"Genel göl merkezine araç rotası verilmemelidir. Ziyaret veya araştırma gerekiyorsa ilgili su idaresi, jandarma ve yerel yönetimden açık kamusal erişim bilgisi alınmalı; baraj yapıları, su alma tesisleri ve koruma kuşaklarına yaklaşılmamalıdır.",
  crowdNote:"İçme suyu koruma amacı, güvenlik alanları ve işletme faaliyetleri rekreasyon planından önce gelir.",
  seasonalNotes:["Gölün balık toplulukları bilimsel araştırma konusudur; ancak incelenen proje kaydı tür listesi veya amatör av izni sağlamaz.","İç su tebliğine ek olarak içme suyu havzası, baraj güvenliği ve yerel koruma kararları kontrol edilmelidir."],
  planningNotes:["Çatalan'ı Seyhan Baraj Gölü ile aynı erişim ve balıkçılık koşullarında kabul etme.","Bariyer, yasak levhası ve görevli talimatı varsa geri dön.","Kıyıda kamp, ateş, park veya gece erişimi varsayma."],
  cautions:["İçme suyu havzası ve koruma statüsü","Baraj işletme ve güvenlik alanları","Kamusal kıyı girişi doğrulanmamış olması","Genel pinin erişim noktası olmaması","Araç parkı ve yol kenarı güvenliği"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Adana 2019 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/adana_-2019_-cdr-20201023092541.pdf",note:"Çatalan Baraj Gölü'nün konumu, içme suyu işlevi, yüzey alanı ve hacmi."},
    {label:"Çukurova Üniversitesi AVESİS – Çatalan ve Seyhan ihtiyoplankton projesi",url:"https://avesis.cu.edu.tr/proje/adc7f65f-3f61-42a9-915d-02f00c5ee2e2/seyhan-nehri-adana-uzerindeki-catalan-ve-seyhan-baraj-gollerinde-ihtiyoplankton-topluluklarinin-arastirilmasi-ve-potansiyel-iklim-degisimi-etkilerinin-ongorulmesi",note:"Çatalan'ın koruma ve bilimsel araştırma bağlamını doğrular; amatör av izni değildir."},
    commonRulesSource
  ]
};

const camgaziBarajGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Çamgazi Baraj Gölü'nde 2024 ve 2025 yıllarında resmî balıklandırma yapıldığı, 2025 çalışmasında 1.075.000 sazan yavrusu bırakıldığı Adıyaman İl Tarım ve Orman Müdürlüğünce doğrulanır. Balıklandırma kaydı kamusal kıyı girişi veya amatör av izni olmadığından rota Güven D'de kalır.",
  fish:["Sazan"],
  fishEvidence:[{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî balıklandırma kaydı",sourceLabel:"Adıyaman İl Tarım ve Orman Müdürlüğü – Çamgazi balıklandırması",sourceUrl:"https://adiyaman.tarimorman.gov.tr/Haber/889/Camgazi-Baraji-Golune-1-075-000-Sazan-Baligi-Yavrusu-Birakildi",note:"2 Eylül 2025'te 1.075.000 sazan yavrusunun göle bırakıldığını bildirir; güncel stok, av başarısı veya av izni anlamına gelmez."}],
  replaceAutomaticFish:true,
  methods:["Yalnız güncel il duyurusu, tebliğ ve saha kararı izin verirse yasal amatör takım"],
  baits:["Yalnız güncel mevzuatın izin verdiği yemler"],
  camping:"Kontrol edilmeli",
  vehicleAccess:"Kontrol edilmeli",
  amenities:["Adıyaman merkezden günübirlik planlama","Kıyıda sürekli hizmet, park veya kamusal giriş doğrulanmış değildir"],
  accessEvidence:[{label:"Avlanma dönemi",value:"Adıyaman İl Tarım ve Orman Müdürlüğü 2026 için ildeki baraj, göl, gölet ve akarsularda 1 Nisan–30 Haziran arasında avlanma yasağı duyurur.",sourceUrl:"https://adiyaman.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=714",note:"İl geneli dönem kuralıdır; belirli Çamgazi kıyısının kamuya açık olduğunu göstermez."}],
  transport:"Adıyaman merkezden hareket edilse bile genel göl pinine doğrudan araç rotası verilmemelidir. Son yaklaşım, açık kamusal yol, park ve kıyı kullanımı İl Tarım ve Orman Müdürlüğü, jandarma veya yerel idareden doğrulanmalıdır.",
  crowdNote:"Balıklandırma çalışması yapılan su alanında görevli faaliyetleri, baraj güvenliği, tarım parselleri ve yerel kullanım önceliklidir.",
  seasonalNotes:["Sazan varlığı 2024 ve 2025 resmî balıklandırma kayıtlarıyla desteklenir; stok yoğunluğu ve doğal üreme sonucu çıkarılamaz.","Adıyaman'da duyurulan kapalı dönem ve her yıl yayımlanabilecek yeni kararlar av gününde yeniden kontrol edilmelidir."],
  planningNotes:["Balıklandırma haberini av izni veya kamusal kıyı erişimi olarak yorumlama.","Tarla ve özel mülkiyet üzerinden izinsiz geçme; su yapıları ve güvenlik alanlarından uzak dur.","İlk keşfi gündüz yap; telefon kapsaması ve dönüş yolunu önceden kontrol et."],
  cautions:["Kamusal kıyı erişiminin doğrulanmamış olması","1 Nisan–30 Haziran 2026 il geneli av yasağı","Baraj işletme ve güvenlik alanları","Özel mülkiyet ve tarım parselleri","Genel pinin araç girişi olmaması"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Adıyaman İl Tarım ve Orman Müdürlüğü – Çamgazi'ye 1.075.000 sazan",url:"https://adiyaman.tarimorman.gov.tr/Haber/889/Camgazi-Baraji-Golune-1-075-000-Sazan-Baligi-Yavrusu-Birakildi",note:"2025 rota-özel resmî balıklandırma kaydı."},
    {label:"Adıyaman İl Tarım ve Orman Müdürlüğü – 2024 göl ve gölet balıklandırması",url:"https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz",note:"Çamgazi dâhil il sularına sazan bırakıldığını bildiren önceki resmî kayıt."},
    {label:"Adıyaman İl Tarım ve Orman Müdürlüğü – 2026 avlanma yasağı",url:"https://adiyaman.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=714",note:"İl iç sularındaki dönemsel yasağı bildirir; güncel duyuru hareket günü kontrol edilmelidir."},
    commonRulesSource
  ]
};

const kozanBarajGolu={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Kozan Barajı'nın Kilgen Çayı üzerinde bulunduğu ve sulama amacı resmî kaymakamlık ve belediye kayıtlarıyla doğrulandı. Belediyenin 2019 performans raporundaki mesire alanı çalışması güncel işletme veya tamamlanmış kamusal kıyı kanıtı sayılmadığından erişim ve amatör av durumu belirsizdir.",
  fish:[],
  fishEvidence:[],
  replaceAutomaticFish:true,
  methods:["Yalnız güncel yerel karar ve tebliğ açıkça izin verirse yasal amatör takım"],
  baits:["Yalnız güncel mevzuatın izin verdiği yemler"],
  camping:"Kontrol edilmeli",
  vehicleAccess:"Kontrol edilmeli",
  amenities:["Kozan ilçe merkezinden gündüz araştırma planı","Kıyıda güncel kamusal tesis, park veya giriş doğrulanmış değildir"],
  accessEvidence:[{label:"Mesire alanı planı",value:"Kozan Belediyesinin 2019 performans raporu, DSİ kullanımındaki atıl alanda mesire ve dinlenme alanı hedefini kaydeder.",sourceUrl:"https://www.kozan.bel.tr/upload/2021/09/2019-yili-performans-raporu.pdf",note:"Tarihsel plan kaydıdır; tesisin bugün tamamlanmış, açık veya kıyının balıkçılığa uygun olduğunu kanıtlamaz."}],
  transport:"Kozan ilçe merkezi planlama başlangıcıdır. Baraj merkez pinine değil, açık olduğu güncel resmî kaynaktan doğrulanmış kamusal tesis veya yola rota oluşturulmalıdır; DSİ sahası, bariyer ve özel parseller geçilmemelidir.",
  crowdNote:"Sulama işletmesi, DSİ kullanım alanları, tarım arazileri ve güncel mesire düzeni olta planından önce değerlendirilmelidir.",
  seasonalNotes:["Kozan ilçesindeki çeşitli göllerde resmî sazan balıklandırması yapılmıştır; mevcut kaynak Kozan Barajı'nı tekil olarak ayırmadığı için rota tür listesine aktarılmamıştır.","Güncel kapalı dönem, suya özel karar ve yerel güvenlik kısıtları ilgili kurumdan doğrulanmalıdır."],
  planningNotes:["2019 tarihli mesire projesini güncel açık tesis kabul etme.","Kıyıya tarla, işletme veya DSİ alanından izinsiz geçme.","İlk keşfi gündüz yap; park ve dönüş rotasını yerinde doğrula."],
  cautions:["Güncel kamusal kıyı girişinin doğrulanmamış olması","DSİ ve sulama işletme alanları","Özel mülkiyet ve tarım parselleri","Mesire projesinin tarihsel olması","Genel pinin erişim noktası olmaması"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Kozan Kaymakamlığı – genel coğrafya ve Kozan Barajı",url:"https://kozan.gov.tr/genel-cografya-ve-yeryuzu-sekilleri",note:"Barajın Kilgen Çayı üzerindeki konumu, yapım yılı ve sulama işlevi."},
    {label:"Kozan Belediyesi – 2019 performans raporu",url:"https://www.kozan.bel.tr/upload/2021/09/2019-yili-performans-raporu.pdf",note:"Baraj alanındaki tarihsel mesire ve dinlenme alanı hedefi; güncel açık tesis kanıtı değildir."},
    {label:"Tarım Orman Ekranı – Kozan'da göllere sazan bırakılması",url:"https://www.tarimtv.gov.tr/tr/video-detay/kozan-da-gollere-sazan-yavrusu-birakildi-19140",note:"İlçedeki çeşitli gölleri topluca bildirir; Kozan Barajı için tekil tür kanıtı sayılmamıştır."},
    commonRulesSource
  ]
};

const karkamisSanliurfaKiyisi={
  researchedAt:"2026-08-07",
  researchStatus:"Rota özelinde güçlü masa başı doğrulama",
  researchSummary:"Karkamış Baraj Gölü'nün Şanlıurfa–Gaziantep çevresindeki su ürünleri yetiştiriciliği ve su kalitesi resmî/akademik kaynaklarla doğrulandı. Bu kayıtlar üretim tesislerini anlatır; kamusal kıyı girişi, amatör av alanı veya güvenli Şanlıurfa yaklaşımı kanıtlanmadığı için kayıt Güven D'de tutulur.",
  fish:[],
  fishEvidence:[],
  replaceAutomaticFish:true,
  methods:["Yalnız güncel güvenlik, işletme ve amatör av kuralları açıkça izin verirse yasal takım"],
  baits:["Yalnız güncel mevzuatın izin verdiği yemler"],
  camping:"Uygun değil",
  vehicleAccess:"Kontrol edilmeli",
  amenities:["Birecik veya Nizip yönünden kurumsal bilgi alma planı","Kıyıda kamusal park, tesis veya giriş doğrulanmış değildir"],
  accessEvidence:[{label:"Su ürünleri üretim alanı",value:"Tarım Orman Ekranı, Karkamış Barajı havzasındaki alabalık yetiştiriciliğini ve işletmeleri bildirir.",sourceUrl:"https://www.tarimtv.gov.tr/tr/video-detay/firat-in-baliklari-dunyaya-ihrac-ediliyor-9888",note:"Üretim sahası kamuya açık amatör balıkçılık alanı değildir; kafes ve işletme sınırlarına yaklaşılmamalıdır."}],
  transport:"Genel göl pinine araç rotası verilmemelidir. Şanlıurfa kıyısı için il/ilçe sınırı, güvenlik durumu, işletme alanları ve açık kamusal yol jandarma, ilgili belediye ve İl Tarım ve Orman Müdürlüğünden doğrulanmadan kıyı yaklaşımı planlanmamalıdır.",
  crowdNote:"Su ürünleri kafesleri, tekne trafiği, baraj işletmesi ve güvenlik uygulamaları amatör kullanım varsayımından önce gelir.",
  seasonalNotes:["Karkamış Baraj Gölü'nde alabalık yetiştiriciliği resmî kaynakta yer alır; yetiştirilen türün doğal av stoku veya amatör hedef tür olduğu sonucu çıkarılamaz.","İl sınırı, kapalı dönem, ticari istihsal ve güvenlik kararları hareket günü doğrulanmalıdır."],
  planningNotes:["Yetiştiricilik kafeslerinden, teknelerden ve özel işletme alanlarından uzak dur.","Sınır ve güvenlik hassasiyetleri nedeniyle tabela ve kolluk talimatını kesin öncelik kabul et.","Gece varışı, kıyı kampı ve genel göl pinine navigasyon planlama."],
  cautions:["Kamusal amatör av alanı doğrulanmamış olması","Su ürünleri yetiştiricilik tesisleri ve tekne trafiği","Baraj işletme alanları","İl sınırı ve güvenlik hassasiyeti","Genel pinin Şanlıurfa kıyı girişi olmaması"],
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:false,
  legalAccessUnclear:true,
  replaceAutomaticSources:true,
  navigationVerified:false,
  sources:[
    {label:"Tarım Orman Ekranı – Karkamış Baraj Gölü yetiştiriciliği",url:"https://www.tarimtv.gov.tr/tr/video-detay/firat-in-baliklari-dunyaya-ihrac-ediliyor-9888",note:"Baraj havzasındaki alabalık yetiştiriciliği ve işletme bağlamı; amatör av izni değildir."},
    {label:"Tarım ve Orman Bakanlığı araştırma yayını – Karkamış su kalitesi",url:"https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Belgeler/YAYINLAR/R%C4%B1dvan%20TEPE%201.pdf",note:"Gölün rota-özel su kalitesi araştırması; kıyı erişimi veya av uygunluğu sağlamaz."},
    {label:"Şanlıurfa Valiliği – GAP barajları ve su ürünleri üretimi",url:"https://www.sanliurfa.gov.tr/vali-sildak-turkyenin-en-buyuk-barajini-inceledi",note:"Karkamış'ın bölgesel baraj sistemi içindeki yerini ve ildeki su ürünleri üretimi bağlamını doğrular."},
    commonRulesSource
  ]
};

export const ulusalManuelArastirma = {
  "ulusal-agri-balik-golu":agriBalikGolu,
  "ulusal-adana-seyhan-baraj-golu":seyhanBarajGolu,
  "ulusal-adana-catalan-baraj-golu":catalanBarajGolu,
  "ulusal-adana-kozan-baraj-golu":kozanBarajGolu,
  "ulusal-adiyaman-camgazi-baraj-golu":camgaziBarajGolu,
  "ulusal-sanliurfa-karkamis-baraj-golu-sanliurfa-kiyisi":karkamisSanliurfaKiyisi,
  "ulusal-ankara-asartepe-baraj-golu":asartepeBarajGolu,
  "ulusal-bitlis-nazik-golu":nazikGolu,
  "ulusal-ankara-hirfanli-baraj-golu-ankara-kiyisi":{
    ...common,
    vehicleAccess:"Orta",
    camping:"Sınırlı",
    amenities:["Evren sahilinde piknik alanları","Evren yönünde konaklama tesisleri","İlçe merkezinde market ve yeme-içme seçenekleri","Kıyı seçimine göre otopark araştırması"],
    accommodationOptions:[
      {
        name:"Evren sahilindeki konaklama tesisleri",
        type:"Otel/pansiyon bölgesi",
        distanceKm:null,
        sourceUrl:"https://www.evren.gov.tr/flamingo",
        note:"Evren Kaymakamlığı göl kıyısında konaklama tesisleri ve piknik alanları bulunduğunu belirtir; işletme ve rezervasyon güncelliği ayrıca kontrol edilmelidir."
      }
    ],
    accessEvidence:[
      {
        label:"Evren sahili ve Hirfanlı Barajı",
        value:"Evren ilçesi göl kıyısında düzenlenmiş sahil ve rekreasyon alanlarına sahiptir; rota pini belirli kıyı girişini göstermez.",
        sourceUrl:"https://evren.gov.tr/evren-sahili-ve-hirfanli-baraji",
        note:"Kaymakamlık tanıtımı genel bölgeyi doğrular."
      }
    ],
    transport:"Ankara yönünden Evren ilçe merkezi ve düzenlenmiş sahil bölgesi planlama başlangıcı olarak kullanılabilir. Son kıyı yaklaşımı, yol yüzeyi, bariyer ve özel mülkiyet sınırı yerinde kontrol edilmelidir.",
    planningNotes:[
      "Evren sahili gibi düzenlenmiş alanlar ile kırsal kıyı cepleri aynı erişim ve tesis düzeyine sahip değildir.",
      "Konaklama tesisleri için güncel işletme adı, açık olduğu dönem ve rezervasyon koşulu yolculuktan önce doğrulanmalıdır.",
      "Gölün Ankara kıyısındaki güncel av yasağı ve ticari istihsal bölgeleri Ankara İl Tarım ve Orman Müdürlüğünden kontrol edilmelidir."
    ]
  },
  "ulusal-kirsehir-hirfanli-baraj-golu-kirsehir-kiyisi":{
    ...common,
    vehicleAccess:"Kolay",
    camping:"Sınırlı",
    amenities:["Asfalt yolla erişilen kıyı seçenekleri","Plaj ve piknik alanları","Restoran ve sosyal tesis seçenekleri","Kırşehir/Kaman yönünde konaklama araştırması"],
    accommodationOptions:[
      {
        name:"Hirfanlı, Toklumen ve Savcılı çevresi tesisleri",
        type:"Sosyal tesis/restoran ve çevre konaklaması",
        distanceKm:null,
        sourceUrl:"https://www.kirsehir.gov.tr/dogal-guzelliklerimiz",
        note:"Valilik, Hirfanlı sosyal tesisleri ile Toklumen ve Savcılı Büyükoba tesislerini bildirir; konaklama kapasitesi ve halka açıklık ayrıca araştırılmalıdır."
      },
      {
        name:"Ahi Evran Gençlik Kampı",
        type:"Kamu gençlik kampı",
        distanceKm:null,
        sourceUrl:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/ahi-evran-genclik-kampi-9060",
        note:"Kaman/Hirfanlı'daki kurumsal kamp tesisidir; genel turistik konaklama gibi değerlendirilmemeli, katılım ve ziyaret koşulları ilgili kurumdan öğrenilmelidir."
      }
    ],
    accessEvidence:[
      {
        label:"Kırşehir kıyı erişimi",
        value:"İl Tarım ve Orman Müdürlüğü, Sıdıklı Darboğaz–Hirfanlı köyü arasındaki 65 kilometrelik hat boyunca çok sayıda kıyı erişimi bulunduğunu bildirir.",
        sourceUrl:"https://kirsehir.tarimorman.gov.tr/Haber/363/",
        note:"Bu genel hat bilgisi belirli bir kıyının kamuya açık, güvenli veya araçla ulaşılabilir olduğunu tek başına kanıtlamaz."
      },
      {
        label:"Asfalt yol ve rekreasyon alanları",
        value:"Kırşehir Valiliği Toklumen, Sıdıklı Büyükoba, Davulağıl, Savcılı Büyükoba ve bazı köy kıyılarına asfalt ulaşım bulunduğunu belirtir.",
        sourceUrl:"https://www.kirsehir.gov.tr/dogal-guzelliklerimiz",
        note:"Kıyı adı seçilerek son yaklaşım ayrıca kontrol edilmelidir."
      }
    ],
    transport:"Kırşehir yönünde Sıdıklı Büyükoba, Toklumen, Savcılı Büyükoba ve Hirfanlı çevresi resmî kaynaklarda rekreasyon ve kıyı erişimiyle anılır. Genel göl pinine doğrudan rota oluşturmak yerine seçilen yerleşim veya tesise navigasyon yapılmalıdır.",
    planningNotes:[
      "Kırşehir kıyısında plaj ve sosyal tesis bulunan bölümler ile ıssız köy kıyıları arasında hizmet farkı büyüktür.",
      "Yazın kamp amaçlı kullanılan alanlar bulunduğu belirtilse de kamp, ateş ve geceleme izni belediye, jandarma ve alan işletmesinden doğrulanmalıdır.",
      "15 Mart–15 Haziran 2026 yasağı örnektir; her sezon Kırşehir İl Tarım ve Orman Müdürlüğünün güncel duyurusu kontrol edilmelidir."
    ]
  },
  "ulusal-kirikkale-hirfanli-baraj-golu-kirikkale-kiyisi":{
    ...common,
    vehicleAccess:"Orta",
    camping:"Kontrol edilmeli",
    amenities:["Karakeçili ve çevre ilçe merkezlerinde temel ihtiyaçlar","Kırsal kıyılarda tesis bulunmama ihtimali","Yol ve park durumunun önceden araştırılması","Kırıkkale merkez yönünde konaklama alternatifi"],
    accommodationOptions:[
      {
        name:"Karakeçili/Kırıkkale ilçe ve kent merkezi seçenekleri",
        type:"İlçe/kent konaklaması",
        distanceKm:null,
        sourceUrl:"https://www.openstreetmap.org/search?query=Karake%C3%A7ili%20K%C4%B1r%C4%B1kkale%20otel",
        note:"Göl kıyısında sürekli hizmet veren tesis varsayılmamalıdır; ilçe veya kent merkezi konaklaması güncel haritadan ve işletmeden doğrulanmalıdır."
      }
    ],
    accessEvidence:[
      {
        label:"Hirfanlı'nın bölgesel kapsamı",
        value:"Baraj çok geniş bir alanı kapsar; Kırıkkale yönündeki kırsal kıyılarda yol kalitesi ve son yaklaşım aynı değildir.",
        sourceUrl:"https://kirsehir.ktb.gov.tr/TR-196433/hirfanli-baraj.html",
        note:"Genel baraj tanıtımıdır; Kırıkkale kıyısında belirli giriş noktası doğrulamaz."
      }
    ],
    transport:"Kırıkkale/Karakeçili yönünde önce yerleşim merkezine, ardından seçilmiş ve açık olduğu teyit edilmiş kıyı yoluna gidilmelidir. Genel göl merkezine navigasyon verilmemelidir; stabilize veya toprak son yaklaşım ihtimali dikkate alınmalıdır.",
    planningNotes:[
      "Kırsal kıyıya gece varışından kaçınılmalı; ilk keşif gündüz yapılmalıdır.",
      "Yakıt, içme suyu, yiyecek ve telefon kapsaması için ilçe merkezinden ayrılmadan hazırlık yapılmalıdır.",
      "Kırıkkale ili sınırlarındaki dönemsel yasaklar ve ticari istihsal sahaları ilgili İl Tarım ve Orman Müdürlüğünden kontrol edilmelidir."
    ]
  }
};
