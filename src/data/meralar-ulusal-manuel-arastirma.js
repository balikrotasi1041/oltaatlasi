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
  ]
};

export const ulusalManuelArastirma = {
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
