import type { Mera } from "./meralar";

export const gunlukMeralar: Mera[] = [
  {
    slug: "cinarcik-sahili",
    name: "Çınarcık Sahili",
    district: "Çınarcık",
    province: "Yalova",
    zone: "Güney Marmara",
    waterType: "Deniz",
    region: "Marmara",
    summary: "Marmara kıyısında koy, burun ve dere ağızlarının birbirini izlediği; yaz kalabalığı ve taş-kum geçişleri nedeniyle yer seçimi isteyen genel sahil rotası.",
    fish: ["İstavrit", "Kefal", "Zargana", "İzmarit"],
    methods: ["Çapari", "Şamandıra", "Hafif dip oltası"],
    baits: ["Suni çapari", "Karides", "Ekmek", "Midye"],
    camping: "Uygun değil",
    vehicleAccess: "Kolay",
    amenities: ["Yerleşim içi market ve kafe", "Sahil yürüyüş hattı", "Toplu taşıma bağlantıları"],
    cautions: ["Yaz sezonunda yoğun yaya ve yüzme alanı kullanımı", "Taş-kum geçişlerinde kaygan zemin", "Dere ağızlarında yağış sonrası bulanıklık ve akış"],
    lat: 40.6418,
    lng: 29.1235,
    locationPrecision: "Genel bölge",
    verification: "Resmî kıyı tanımı ve akademik bölge kaynağı",
    updatedAt: "2026-07-27",
    publishedAt: "2026-07-27",
    confidence: "C",
    image: "/images/meralar/cinarcik-sahili.svg",
    socialImage: "/images/meralar/cinarcik-sahili.svg",
    navigationNote: "Koordinat Çınarcık merkez sahilindeki genel kamusal erişim hattını gösterir. Plaj, iskele, bağlama alanı ve etkinlik bölümlerinde tabela ile görevli talimatı geçerlidir.",
    shoreProfile: "Çınarcık kıyısı tek biçimli değildir; Paşa Limanı, Kocadere ve Dikilitaş gibi burunlarla koylar, dere ağızları ve düzenlenmiş sahil bölümleri birbirini izler. Merkez kesimde taş tahkimat ve yürüyüş alanları, çevrede ise kum-çakıl geçişleri görülebilir.",
    transport: "Yalova merkezden karayoluyla ulaşılır; ilçe merkezinde toplu taşıma ve yaya erişimi mümkündür. Yaz hafta sonlarında park ve sahil trafiği belirgin biçimde artabilir.",
    crowdNote: "İlçe ekonomisinin turizme dayanması nedeniyle yaz akşamları ve hafta sonlarında sahil yoğunlaşır. Yüzme alanında veya yaya arkasında güvenli atış mesafesi yoksa av ertelenmelidir.",
    longIntro: [
      "Çınarcık Sahili, Yalova'nın Marmara Denizi kıyısında yer alan ve koylarla burunların kısa mesafelerde değiştiği bir rota dosyasıdır. Resmî ilçe coğrafyası Paşa Limanı, Kocadere, Dikilitaş ve diğer kıyı çıkıntıları ile Osman Uçuğu ve Engerek koylarını kayda geçirir; bu çeşitlilik tek takımın bütün sahile uymayacağı anlamına gelir.",
      "Bu kayıt saha gözlemi içermediğinden güven seviyesi C'dir. Türler Güney Marmara kıyı literatürü ve bölgesel raporlarla sınırlı biçimde listelenmiştir; belirli gün veya noktada av garantisi verilmez."
    ],
    planningNotes: [
      "İlk keşifte taş tahkimat, plaj ve dere ağzı bölümleri ayrı ayrı değerlendirilmelidir; yüzme alanları av sahası kabul edilmemelidir.",
      "Yağış sonrası dere ağızlarında akış, sürüklenen dal ve su berraklığı kontrol edilmelidir.",
      "Sahilde kalabalık arttığında çapari ve kurşunlu takımlarla baş üstü atış yapılmamalıdır."
    ],
    seasonalNotes: [
      "İstavrit, kefal, zargana ve izmarit Güney Marmara kıyı dosyalarında raporlanan türlerdir; kıyıya yaklaşım yem balığı, su sıcaklığı ve rüzgârla değişir.",
      "Marmara'da güncel boy, adet ve yöntem sınırları 6/2 Tebliğ ve sonraki değişikliklerden kontrol edilmelidir."
    ],
    sources: [
      { label: "Çınarcık Belediyesi - Genel Bilgiler", url: "https://www.cinarcik.bel.tr/tr/cinarcik-genel-bilgiler", note: "İlçenin Marmara kıyısı, burunları, koyları ve dere sistemleri için resmî coğrafya kaynağı." },
      { label: "Yalova kıyısı akademik çalışması", url: "https://dergipark.org.tr/tr/pub/menba/article/1282775", note: "Çınarcık ve yakın Yalova kıyılarının denizel ortamına ilişkin hakemli bölgesel çalışma." },
      { label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği", url: "https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_", note: "1 Eylül 2024-31 Ağustos 2028 dönemi için boy, adet, yöntem ve alan kuralları." }
    ]
  },
  {
    slug: "karasu-sahili",
    name: "Karasu Sahili",
    district: "Karasu",
    province: "Sakarya",
    zone: "Batı Karadeniz",
    waterType: "Deniz",
    region: "Karadeniz",
    summary: "Yaklaşık 20 kilometrelik geniş kum kıyısı, açık deniz dalgası ve mevsimsel göç balıklarıyla öne çıkan genel surf avı rotası.",
    fish: ["İstavrit", "Mezgit", "Kefal", "Palamut"],
    methods: ["Surf casting", "Çapari", "Spin"],
    baits: ["Suni çapari", "Karides", "Akyem", "Kaşık"],
    camping: "Kontrol edilmeli",
    vehicleAccess: "Kolay",
    amenities: ["Sahil boyunca yeme içme tesisleri", "Yerleşim içi market", "Geniş plaj erişimi"],
    cautions: ["Ani büyüyen Karadeniz dalgası", "Güçlü kıyı akıntısı ve çeken akıntı", "Yazın yüzme alanları ve kalabalık", "Fırtına sonrası kıyı erozyonu"],
    lat: 41.1095,
    lng: 30.6905,
    locationPrecision: "Genel bölge",
    verification: "Belediye, valilik ve akademik bölge kaynağı",
    updatedAt: "2026-07-27",
    publishedAt: "2026-07-27",
    confidence: "C",
    image: "/images/meralar/karasu-sahili.svg",
    socialImage: "/images/meralar/karasu-sahili.svg",
    navigationNote: "Koordinat Karasu merkez plajının genel kamusal bölümünü gösterir. Cankurtaran şeritleri, yüzme alanları, mendirekler ve tesis sınırlarında yerel kurallar önceliklidir.",
    shoreProfile: "Karasu Belediyesi ve Sakarya Valiliği sahili yaklaşık 20 kilometrelik geniş, ince kumlu bir kıyı olarak tanımlar. Açık Karadeniz'e bakan bu yapı, dip takımında kum hareketi ve dalga kırılmasını; spin ve çapari kullanımında ise rüzgâr yönünü belirleyici hâle getirir.",
    transport: "Sakarya merkezden karayoluyla ulaşım yaklaşık 50-55 kilometredir. Merkez plaj çevresinde araç erişimi kolaydır; yaz trafiği ve otopark yoğunluğu için erken saat planı gerekir.",
    crowdNote: "Yaz sezonunda plaj kullanımı çok yüksektir. Amatör av için yüzme alanlarından, çocuklu ailelerden ve cankurtaran koridorlarından bütünüyle ayrılmış bölüm seçilmelidir.",
    longIntro: [
      "Karasu Sahili, Batı Karadeniz ile Marmara geçişinde yer alan uzun ve açık bir kum kıyısıdır. Resmî kaynaklar kıyının yaklaşık 20 kilometreye uzandığını ve ince kumlu geniş plaj yapısını vurgular; bu nedenle rota tek bir koordinattan değil, güvenli kamusal sahil ceplerinden oluşur.",
      "Karasu bölgesi balıkçılığı üzerine akademik çalışma istavrit, mezgit, kefal, palamut ve lüfer dahil geniş bir tür grubunun bölgede avlandığını kaydeder. Bu çalışma ticari deniz balıkçılığını inceler; kıyıdan amatör av başarısı için doğrudan garanti sayılmaz."
    ],
    planningNotes: [
      "Dalga tahmini yalnızca yükseklik değil periyot ve rüzgâr yönüyle birlikte okunmalıdır; köpük hattı büyüyorsa kıyıya yaklaşılmamalıdır.",
      "Surf takımında kurşunun kuma gömülmesi ve yan akıntıyla sürüklenmesi gözlenmeli; komşu misinalara çapraz hat kurulmammalıdır.",
      "Yazın gündüz yerine yüzme alanı dışında, düşük yaya yoğunluklu ve hava açısından güvenli saatler tercih edilmelidir."
    ],
    seasonalNotes: [
      "Karasu bölgesi kaynaklarında istavrit, mezgit, kefal ve palamut raporlanır; göç ve kıyıya yaklaşma dönemi yıllara göre değişebilir.",
      "Kalkan ve diğer özel türler için dönem, boy ve yöntem sınırlamaları ayrıca kontrol edilmelidir; bu sayfa kapalı sezon veya limit istisnası oluşturmaz."
    ],
    sources: [
      { label: "Karasu Belediyesi - Karasu Sahil", url: "https://www.karasu.bel.tr/karasu-sahil", note: "Sahilin yaklaşık 20 kilometrelik geniş kum yapısı ve kamusal kullanım özellikleri için resmî kaynak." },
      { label: "Sakarya Valiliği - Karasu", url: "https://www.sakarya.gov.tr/karasu", note: "İlçenin konumu, kıyı uzunluğu ve il merkezine uzaklığı için resmî kaynak." },
      { label: "Karasu bölgesi deniz balıkçılığı araştırması", url: "https://www.egejfas.org/en/pub/article/68037", note: "Karasu'da raporlanan palamut, mezgit, istavrit, kefal ve diğer deniz türleri için akademik destekleyici kaynak." },
      { label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği", url: "https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_", note: "Güncel amatör avcılık sınırları için resmî mevzuat." }
    ]
  },
  {
    slug: "guzelyali-mudanya-sahili",
    name: "Güzelyalı Mudanya Sahili",
    district: "Mudanya",
    province: "Bursa",
    zone: "Güney Marmara",
    waterType: "Deniz",
    region: "Marmara",
    summary: "Kamusal mesire alanı, yerleşim içi sahil ve balıkçı barınağı çevresinin yan yana bulunduğu; işletme sınırlarına dikkat gerektiren Güney Marmara rotası.",
    fish: ["İstavrit", "Kefal", "İzmarit", "Tekir"],
    methods: ["Çapari", "Şamandıra", "Hafif dip oltası"],
    baits: ["Suni çapari", "Karides", "Midye", "Ekmek"],
    camping: "Uygun değil",
    vehicleAccess: "Kolay",
    amenities: ["Kamusal mesire alanı", "Yerleşim içi market ve kafe", "Otobüs ve deniz ulaşımı seçenekleri"],
    cautions: ["Balıkçı barınağı ve tekne operasyon alanları", "Bağlama halatları", "Yaya ve bisiklet yoğunluğu", "Marmara'da ani poyraz"],
    lat: 40.3535,
    lng: 28.9185,
    locationPrecision: "Genel bölge",
    verification: "Kaymakamlık, İl Tarım ve akademik Marmara kaynağı",
    updatedAt: "2026-07-27",
    publishedAt: "2026-07-27",
    confidence: "C",
    image: "/images/meralar/guzelyali-mudanya-sahili.svg",
    socialImage: "/images/meralar/guzelyali-mudanya-sahili.svg",
    navigationNote: "Koordinat Güzelyalı'nın genel kamusal sahil ve mesire alanı çevresine yönlendirir. Balıkçı barınağının giriş-çıkış hattı, iskeleler ve bağlama alanları av noktası değildir.",
    shoreProfile: "Güzelyalı'da düzenlenmiş mesire alanı, taş tahkimat, küçük kıyı cepleri ve balıkçı barınağı çevresi kısa mesafede değişir. Resmî kayıtlarda Güzelyalı Barınağı Mudanya'daki faal balıkçılık altyapılarından biri olarak geçer; amatör avcı operasyon alanından uzak kalmalıdır.",
    transport: "Bursa ve Mudanya merkezinden karayoluyla ulaşım mümkündür; yerleşim içinde toplu taşıma seçenekleri bulunur. Sahil hattında hafta sonu araç ve yaya yoğunluğu artar.",
    crowdNote: "Mesire alanı kamusal kullanım için düzenlenmiştir. Piknik, yürüyüş ve bisiklet yoğunluğu olan saatlerde kurşunlu takım savrulması güvenli değildir.",
    longIntro: [
      "Güzelyalı Mudanya Sahili, Güney Marmara'da kamusal mesire kullanımı ile aktif balıkçılık altyapısının birbirine yakın bulunduğu bir rota dosyasıdır. Kaymakamlık, yeniden düzenlenen Güzelyalı Mesire Alanı'nın halkın kullanımına açıldığını; Bursa İl Tarım ise Güzelyalı Barınağı'nı Mudanya'daki balıkçı barınakları arasında sayar.",
      "Bu iki işlevin yan yana bulunması erişimi kolaylaştırırken amatör av alanını daraltabilir. Barınak ağzı, tekne manevra koridoru ve bağlama halatları dışında kalan kamusal kıyı bölümleri yerinde kontrol edilmelidir."
    ],
    planningNotes: [
      "Balıkçı barınağı giriş hattı ve tekne manevra alanı kesinlikle boş bırakılmalıdır.",
      "Mesire alanında arka atış mesafesi bulunmuyorsa şamandıra veya kurşunlu takım kullanılmamalıdır.",
      "Poyraz başladığında taş tahkimat üzerindeki sıçrama ve kayganlık gözlenmeli; ekipman su kenarından geri alınmalıdır."
    ],
    seasonalNotes: [
      "Marmara Denizi çalışmalarında istavrit baskın türler arasında yer alır; Güney Marmara'da kefal, izmarit ve tekir de bölgesel olarak raporlanır.",
      "Tür listesi kıyıdan av garantisi değildir. Barınak çevresindeki yerel yasak, işletme kararı ve güncel tebliğ koşulları avdan önce doğrulanmalıdır."
    ],
    sources: [
      { label: "Mudanya Kaymakamlığı - Güzelyalı Mesire Alanı", url: "https://www.mudanya.gov.tr/guzelyali-mesire-alani-acilisi", note: "Kamusal mesire alanının düzenlenmesi ve halkın kullanımına açılması için resmî kaynak." },
      { label: "Bursa İl Tarım - Av sezonu açılışı", url: "https://bursa.tarimorman.gov.tr/Haber/1455/Su-Urunleri-Av-Sezonu-Acilisi-Gemlikte-Gerceklestirildi", note: "Güzelyalı Barınağı'nın Mudanya'daki balıkçılık altyapıları arasında bulunduğunu doğrulayan resmî kaynak." },
      { label: "Marmara Denizi demersal balık faunası", url: "https://dergipark.org.tr/en/pub/jmsf/article/912403", note: "Marmara'da istavrit ve diğer türlerin bölgesel varlığına ilişkin hakemli destekleyici çalışma." },
      { label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği", url: "https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_", note: "Güncel amatör avcılık sınırları için resmî mevzuat." }
    ]
  }
];
