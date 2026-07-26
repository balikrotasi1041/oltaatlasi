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
    {
      title:"Çift kat ilmeği hazırla",
      intro:"Düğümün gücü, ipin metal gözden iki kat geçmesine dayanır. İlk kıvrımda ipi ezmemek ve yeterli çalışma payı bırakmak sonraki adımları kolaylaştırır.",
      items:["Misina veya örgü ipi yaklaşık 15–20 santimetre çift kat yap.","Kat yerini iğne ya da fırdöndü gözünden geçir.","Göz küçükse çift katı zorlamak yerine önce tek ucu geçirip geri döndür."],
      illustration:{src:"/images/rehberler/palomar-01.svg",alt:"Palomar düğümünde çift kat ipin metal gözden geçirilmesi",caption:"1. adım: İpi çift kat yap ve gözden geçir."}
    },
    {
      title:"Gevşek üst düğümü kur",
      intro:"Burada amaç düğümü sıkmak değil, ekipmanın içinden geçebileceği geniş bir halka bırakmaktır.",
      items:["Çift kat ip ile gevşek bir üst düğüm oluştur.","Fırdöndü veya iğne gözü düğümün altında kalsın.","Halkayı daraltmadan iki kolun birbirine paralel ilerlediğini kontrol et."],
      illustration:{src:"/images/rehberler/palomar-02.svg",alt:"Palomar düğümünde gevşek üst düğümün kurulması",caption:"2. adım: Üst düğümü gevşek bırak."}
    },
    {
      title:"Ekipmanı büyük halkadan geçir",
      intro:"Palomar düğümünü diğer basit düğümlerden ayıran hareket budur. Büyük halka, iğne ya da fırdöndünün tamamının üzerinden geçirilir.",
      items:["Çift kat ipin oluşturduğu büyük halkayı aç.","İğne, klips veya fırdöndüyü bütünüyle halkanın içinden geçir.","Halkanın ekipman üzerinde burulmadığından emin ol."],
      illustration:{src:"/images/rehberler/palomar-03.svg",alt:"Fırdöndünün Palomar düğümündeki büyük halkadan geçirilmesi",caption:"3. adım: Metal parçayı büyük halkanın içinden geçir."}
    },
    {
      title:"Islat, eşit çek ve kontrol et",
      intro:"Nihai sıkma sırasında sürtünme ısı üretir. Özellikle monofilament misinada düğümü ıslatmak yüzey hasarı riskini azaltır.",
      items:["Düğümü temiz su veya tükürükle hafifçe ıslat.","Ana beden ile kısa ucu kontrollü ve eşit biçimde çek.","Düğüm metal göze düzgün oturduktan sonra kısa ucu en az 3–4 milimetre payla kes.","Kullanmadan önce bağlantıyı eldivenli elle kademeli yük altında dene."],
      illustration:{src:"/images/rehberler/palomar-04.svg",alt:"Sıkılmış ve kontrol edilmiş Palomar düğümü",caption:"4. adım: Düğümü ıslat, iki koldan eşit çek ve son kontrolü yap."}
    }
  ],
  sources:[]
};

export const rehberler:Rehber[]=[palomarRehberi,...eskiRehberler.map(normalizeLegacy)];
export const rehberKategorileri=[...new Set(rehberler.map((rehber)=>rehber.category))].sort((a,b)=>a.localeCompare(b,"tr"));
