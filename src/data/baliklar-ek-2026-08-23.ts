import type { Balik } from "./baliklar";

export type BalikGuideSource = { label:string; url:string; note:string; kind:"Resmî"|"Akademik"|"Bilimsel"; };
export type BalikEk = Balik & {
  scientificName:string;
  qualityLevel:"B";
  sources:BalikGuideSource[];
};

const officialFisheries:BalikGuideSource={
  label:"Tarım ve Orman Bakanlığı — Amatör su ürünleri avcılığı",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"Güncel boy, adet, dönem, alan ve yöntem sınırlamalarının kontrol edileceği resmî başlangıç kaynağı.",
  kind:"Resmî",
};

export const baliklarEk20260823:BalikEk[]=[
  {
    slug:"mirmir",
    name:"Mırmır",
    scientificName:"Lithognathus mormyrus",
    water:"Deniz",
    habitat:"Kumluk ve kum-çakıl geçişli sığ kıyılarda dipten beslenen, Türkiye denizlerinde kayıtlı çizgili Sparidae türü.",
    seasonNote:"Kıyıya yaklaşma ve beslenme davranışı bölgeye, su sıcaklığına, dip canlılarına ve gün içindeki kıyı baskısına göre değişir; tek bir ayı ülke geneli için kesin sezon gibi kullanma.",
    methods:["Yemli dip oltası","Surf casting","Hafif dip takımı"],
    baits:["Boru kurdu","Karides","Mamun"],
    caution:"Kumluk sahiller yüzme ve yaya kullanımına açık olabilir. Atış koridorunu boş tut; güncel boy ve alıkoyma kurallarını av öncesinde resmî kaynaktan doğrula.",
    image:"/images/baliklar/mirmir.svg",
    qualityLevel:"B",
    sources:[
      officialFisheries,
      {label:"Iğdır Üniversitesi FBE Dergisi — Çanakkale sığ sularında genç mırmırların beslenmesi",url:"https://dergipark.org.tr/tr/pub/jist/article/104249",note:"Lithognathus mormyrus bireylerinin Çanakkale’de sığ su örneklemesine ve dip omurgasızlarıyla beslenmesine ilişkin akademik saha kaydı.",kind:"Akademik"},
      {label:"Aquatic Sciences and Engineering — Güney Karadeniz mırmır popülasyonu",url:"https://dergipark.org.tr/en/pub/ase/article/937864",note:"Türün Güney Karadeniz Türkiye kıyılarından örneklendiğini ve morfolojik olarak incelendiğini gösteren hakemli çalışma.",kind:"Akademik"},
    ],
  },
  {
    slug:"kalkan",
    name:"Kalkan",
    scientificName:"Scophthalmus maeoticus",
    water:"Deniz",
    habitat:"Karadeniz’de kumlu ve çamurlu diplerle ilişkili yaşayan yassı gövdeli dip balığı; Türkiye’nin Batı ve Orta Karadeniz kıyılarından bilimsel kayıtları bulunur.",
    seasonNote:"Kıyıdan erişilebilirlik sabit değildir; su sıcaklığı, derinlik, dip yapısı ve üreme dönemi davranışı etkiler. Ticari stok bilgisi kıyıdan amatör av başarısı anlamına gelmez.",
    methods:["Yemli dip oltası","Dip takımı"],
    baits:["Balık şeridi","Karides","Doğal deniz yemi"],
    caution:"Kalkan stokları ve av kuralları hassastır. Boy, dönem ve alan sınırlamalarını güncel 6/2 Tebliği ile il müdürlüğü duyurularından doğrulamadan alıkoyma kararı verme.",
    image:"/images/baliklar/kalkan.svg",
    qualityLevel:"B",
    sources:[
      officialFisheries,
      {label:"Biological Diversity and Conservation — Karadeniz kalkanı karyotipi",url:"https://dergipark.org.tr/en/pub/biodicon/article/761934",note:"Scophthalmus maeoticus örneklerinin Türkiye’nin Batı ve Orta Karadeniz kıyılarından elde edildiğini belgeleyen hakemli çalışma.",kind:"Akademik"},
      {label:"Journal of Aquaculture Engineering and Fisheries Research — Türk denizlerinde Karadeniz kalkanı kaydı",url:"https://dergipark.org.tr/tr/pub/jaefr/article/297105",note:"Karadeniz’in İstanbul kıyısından Scophthalmus maeoticus örneği bildiren bilimsel kayıt; türün Türkiye kıyılarındaki varlığı için destekleyici kaynaktır.",kind:"Akademik"},
    ],
  },
  {
    slug:"sabut",
    name:"Şabut",
    scientificName:"Arabibarbus grypus",
    water:"İç su",
    habitat:"Fırat-Dicle havzasındaki büyük akarsular ve baraj göllerinde kayıtlı, iri gövdeli sazangillerden bir iç su balığı.",
    seasonNote:"Akım, su seviyesi, baraj işletmesi ve mevsimsel sıcaklık değişimi kullanılabilir kıyı alanını etkiler. Barajdaki akademik tür kaydı belirli bir kıyı cebinde günlük av garantisi değildir.",
    methods:["Yemli dip oltası","Dip takımı"],
    baits:["Solucan","Mısır","Hamur"],
    caution:"Fırat-Dicle havzasında su seviyeleri ve kıyı güvenliği hızlı değişebilir. Güncel iç su kuralları ile yerel erişim kısıtlarını ayrıca doğrula.",
    image:"/images/baliklar/sabut.svg",
    qualityLevel:"B",
    sources:[
      officialFisheries,
      {label:"Journal of Anatolian Environmental and Animal Sciences — Karakaya Baraj Gölü Şabut popülasyonu",url:"https://dergipark.org.tr/tr/pub/jaes/article/1298332",note:"Arabibarbus grypus bireylerinin Karakaya Baraj Gölü’nde doğrudan örneklendiği popülasyon çalışması.",kind:"Akademik"},
      {label:"MEMBA Su Bilimleri Dergisi — Uluçay Suyu Şabut örnekleri",url:"https://dergipark.org.tr/tr/pub/memba/article/1728318",note:"Siirt Uluçay Suyu’ndan Arabibarbus grypus örnekleri kullanan 2025 tarihli akademik çalışma; Dicle havzası bağlamını destekler.",kind:"Akademik"},
    ],
  },
  {
    slug:"kadife",
    name:"Kadife",
    scientificName:"Tinca tinca",
    water:"İç su",
    habitat:"Bitkili, nispeten sakin göl, gölet ve baraj kıyılarında yaşayabilen; Türkiye’de farklı iç sulardan bilimsel kayıtları bulunan sazangil türü.",
    seasonNote:"Kıyı bitkileri, su sıcaklığı, çözünmüş oksijen ve dip yapısı davranışı etkiler. Aynı su alanında mevsimsel bitki yoğunluğu erişilebilir kıyıyı değiştirebilir.",
    methods:["Şamandıra","Yemli dip oltası"],
    baits:["Solucan","Mısır","Hamur"],
    caution:"İç sularda kapalı dönem ve alan bazlı kısıtlar olabilir. Bitkili kıyıda takılma ve batak zemin riskini küçümseme; güncel mevzuatı kontrol et.",
    image:"/images/baliklar/kadife.svg",
    qualityLevel:"B",
    sources:[
      officialFisheries,
      {label:"Black Sea Journal of Agriculture — Sıddıklı Barajı Kadife biyolojisi",url:"https://dergipark.org.tr/tr/pub/bsagriculture/article/1249974",note:"Tinca tinca bireylerinin Sıddıklı Barajı’ndan örneklendiği, boy-ağırlık ve kondisyon verilerini içeren 2023 tarihli çalışma.",kind:"Akademik"},
      {label:"Acta Biologica Turcica — Türkiye iç sularında Tinca tinca kayıtları",url:"https://dergipark.org.tr/tr/download/article-file/207945",note:"Sapanca, Terkos, Kovada ve Beyşehir gibi farklı Türkiye iç sularında Tinca tinca literatür kayıtlarını derleyen bilimsel kaynak.",kind:"Bilimsel"},
    ],
  },
  {
    slug:"gumusi-havuz-baligi",
    name:"Gümüşi Havuz Balığı",
    scientificName:"Carassius gibelio",
    water:"İç su",
    habitat:"Türkiye’de çok sayıda iç suya yayılmış, farklı göl, gölet, baraj ve akarsularda görülebilen istilacı/yabancı karakteriyle ayrıca dikkat gerektiren sazangil türü.",
    seasonNote:"Geniş çevresel toleransı nedeniyle farklı su tiplerinde bulunabilir; ancak bir havzada kaydedilmiş olması her yakın su kütlesinde bulunduğu anlamına gelmez.",
    methods:["Şamandıra","Yemli dip oltası"],
    baits:["Solucan","Mısır","Ekmek"],
    caution:"Canlı bireyi başka suya taşıma veya salma. Ekolojik açıdan sakıncalı/yabancı türlerle ilgili güncel 6/2 Tebliği hükümlerini ve yerel talimatları av öncesinde kontrol et.",
    image:"/images/baliklar/gumusi-havuz-baligi.svg",
    qualityLevel:"B",
    sources:[
      officialFisheries,
      {label:"Journal of Limnology and Freshwater Fisheries Research — Karamenderes’te istilacı Carassius gibelio",url:"https://dergipark.org.tr/tr/pub/limnofish/article/461758",note:"Karamenderes Çayı’nda Carassius gibelio bireylerini örnekleyen ve beslenme ekolojisini inceleyen hakemli çalışma.",kind:"Akademik"},
      {label:"Doğanın Sesi — Türkiye’de yayılış gösteren istilacı yabancı omurgalılar",url:"https://dergipark.org.tr/tr/pub/dosder/article/1119029",note:"Carassius gibelio’yu Türkiye’de sorun oluşturabilen yabancı/istilacı türler arasında değerlendiren akademik derleme.",kind:"Akademik"},
    ],
  },
];
