export type RehberSource = { label:string; url:string; note:string; };
export type RehberIllustration = { src:string; alt:string; caption:string; };
export type RehberSection = { title:string; intro:string; items:string[]; illustration?:RehberIllustration; };
export type Rehber = {
  slug:string;
  title:string;
  category:string;
  summary:string;
  icon:string;
  publishedAt:string;
  updatedAt:string;
  readingTime:number;
  author:string;
  difficulty:"Başlangıç" | "Orta" | "İleri";
  targetSpecies:string[];
  cover?:string;
  sections:RehberSection[];
  sources:RehberSource[];
};

export const rehberler: Rehber[] = [
  {
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
        items:[
          "Misina veya örgü ipi yaklaşık 15–20 santimetre çift kat yap.",
          "Kat yerini iğne ya da fırdöndü gözünden geçir.",
          "Göz küçükse çift katı zorlamak yerine önce tek ucu geçirip geri döndür."
        ],
        illustration:{src:"/images/rehberler/palomar-01.svg",alt:"Palomar düğümünde çift kat ipin metal gözden geçirilmesi",caption:"1. adım: İpi çift kat yap ve gözden geçir."}
      },
      {
        title:"Gevşek üst düğümü kur",
        intro:"Burada amaç düğümü sıkmak değil, ekipmanın içinden geçebileceği geniş bir halka bırakmaktır.",
        items:[
          "Çift kat ip ile gevşek bir üst düğüm oluştur.",
          "Fırdöndü veya iğne gözü düğümün altında kalsın.",
          "Halkayı daraltmadan iki kolun birbirine paralel ilerlediğini kontrol et."
        ],
        illustration:{src:"/images/rehberler/palomar-02.svg",alt:"Palomar düğümünde gevşek üst düğümün kurulması",caption:"2. adım: Üst düğümü gevşek bırak."}
      },
      {
        title:"Ekipmanı büyük halkadan geçir",
        intro:"Palomar düğümünü diğer basit düğümlerden ayıran hareket budur. Büyük halka, iğne ya da fırdöndünün tamamının üzerinden geçirilir.",
        items:[
          "Çift kat ipin oluşturduğu büyük halkayı aç.",
          "İğne, klips veya fırdöndüyü bütünüyle halkanın içinden geçir.",
          "Halkanın ekipman üzerinde burulmadığından emin ol."
        ],
        illustration:{src:"/images/rehberler/palomar-03.svg",alt:"Fırdöndünün Palomar düğümündeki büyük halkadan geçirilmesi",caption:"3. adım: Metal parçayı büyük halkanın içinden geçir."}
      },
      {
        title:"Islat, eşit çek ve kontrol et",
        intro:"Nihai sıkma sırasında sürtünme ısı üretir. Özellikle monofilament misinada düğümü ıslatmak yüzey hasarı riskini azaltır.",
        items:[
          "Düğümü temiz su veya tükürükle hafifçe ıslat.",
          "Ana beden ile kısa ucu kontrollü ve eşit biçimde çek.",
          "Düğüm metal göze düzgün oturduktan sonra kısa ucu en az 3–4 milimetre payla kes.",
          "Kullanmadan önce bağlantıyı eldivenli elle kademeli yük altında dene."
        ],
        illustration:{src:"/images/rehberler/palomar-04.svg",alt:"Sıkılmış ve kontrol edilmiş Palomar düğümü",caption:"4. adım: Düğümü ıslat, iki koldan eşit çek ve son kontrolü yap."}
      }
    ],
    sources:[]
  },
  {
    slug:"balik-kampi-kontrol-listesi",
    title:"Balık Kampı Kontrol Listesi",
    category:"Kamp",
    summary:"Kıyıda unutulan küçük bir malzemenin bütün geceyi kemirmemesi için sade kontrol listesi.",
    icon:"⛺",
    publishedAt:"2026-07-18",
    updatedAt:"2026-07-27",
    readingTime:6,
    author:"Olta Atlası Editörlüğü",
    difficulty:"Başlangıç",
    targetSpecies:["Genel kullanım"],
    sections:[
      {title:"Barınma",intro:"Kamp konforunun temeli fazla eşya değil, kuru ve sıcak kalabilmektir.",items:["Mevsime uygun çadır","Uyku tulumu ve mat","Yağmurluk","Yedek kuru kıyafet"]},
      {title:"Av ekipmanı",intro:"Bir arıza bütün seansı bitirmesin diye yalnızca kritik yedekleri taşı.",items:["Yedek takım","Pens ve makas","Kepçe","Fener ve yedek pil"]},
      {title:"Güvenlik",intro:"Dönüş planı ve iletişim, oltadan önce hazırlanmalıdır.",items:["İlk yardım çantası","İçme suyu","Konum paylaşımı","Yangın yasağı kontrolü"]},
      {title:"Mera etiği",intro:"Kampın izi, ayrıldıktan sonra kıyıda kalmamalıdır.",items:["Çöp torbası","Misina ve iğneleri toplama","Üreme alanına girmeme","Sessiz ve temiz ayrılma"]}
    ],
    sources:[{label:"Amatör su ürünleri avcılığı resmî bilgilendirmesi",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Güncel yasak, boy, adet ve yöntem sınırlamaları için resmî başlangıç kaynağı."}]
  },
  {
    slug:"mera-bildirimi-nasil-dogrulanir",
    title:"Mera Bildirimi Nasıl Doğrulanır?",
    category:"Mera",
    summary:"Duyum ile saha bilgisini ayıran basit güvenilirlik yöntemi.",
    icon:"🔎",
    publishedAt:"2026-07-18",
    updatedAt:"2026-07-27",
    readingTime:6,
    author:"Olta Atlası Editörlüğü",
    difficulty:"Başlangıç",
    targetSpecies:["Genel kullanım"],
    sections:[
      {title:"Kaynak",intro:"Bir mera iddiası, tarih ve ilk kaynak bilinmeden doğrulanmış sayılmaz.",items:["Tarih sor","Fotoğrafın çekim yerini doğrula","Tek kişilik duyumu kesin bilgi yapma"]},
      {title:"Konum",intro:"Av bilgisini doğrularken hassas alanları ve mülkiyet sınırlarını ayrıca ayır.",items:["Hassas noktayı açık etme","Özel mülkiyeti kontrol et","Yasak ve koruma alanlarını ayır"]},
      {title:"Balık bilgisi",intro:"Tür, boy ve adet iddiaları fotoğraf ve zaman bilgisiyle birlikte değerlendirilmelidir.",items:["Tür teşhisinde fotoğraf kullan","Boy ve adet bilgisini iste","Eski avı güncel rapor gibi paylaşma"]},
      {title:"Yayın",intro:"Doğrulama kadar kaynağın hakkını korumak da editörlük işidir.",items:["Fotoğraf sahibini belirt","Eski görüntüyü güncel diye kullanma","Tür fotoğrafını ayrı doğrula"]}
    ],
    sources:[{label:"Olta Atlası içerik yöntemi",url:"/hakkinda/",note:"Güven seviyesi, kaynak ayrımı ve hassas konum yaklaşımının açıklaması."}]
  },
  {
    slug:"ilk-kez-meraya-giderken",
    title:"İlk Kez Bir Meraya Giderken",
    category:"Mera",
    summary:"Harita üzerindeki noktayı gerçek saha koşuluna dönüştüren hazırlık kontrolü.",
    icon:"🧭",
    publishedAt:"2026-07-18",
    updatedAt:"2026-07-27",
    readingTime:6,
    author:"Olta Atlası Editörlüğü",
    difficulty:"Başlangıç",
    targetSpecies:["Genel kullanım"],
    sections:[
      {title:"Ön araştırma",intro:"Rotaya çıkmadan önce erişim, hava ve geri dönüş seçeneklerini birlikte değerlendir.",items:["Mülkiyet ve yasak durumu","Hava ve yol","Yakın tesis ve dönüş rotası"]},
      {title:"Varış",intro:"İlk ziyaretin amacı hemen avlanmak değil, alanı güvenli biçimde okumaktır.",items:["Gün ışığında keşif","Aracı güvenli bırak","Kıyı zeminini önce yürüyerek kontrol et"]},
      {title:"Kurulum",intro:"Az ekipman, çevreyi ve atış koridorunu daha iyi görmeyi sağlar.",items:["En az ekipmanla başla","Atış koridoru oluştur","Çevredeki kullanıcıları gözet"]},
      {title:"Çıkış",intro:"Ayrılmadan önce hem çevreyi hem de dönüş planını son kez kontrol et.",items:["Çöp kontrolü","Saha notu","Gecikme varsa yakına haber"]}
    ],
    sources:[{label:"Amatör su ürünleri avcılığı resmî bilgilendirmesi",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Av öncesi güncel yer, yöntem, boy ve adet sınırlamalarının kontrolü için."}]
  }
];

export const rehberKategorileri = [...new Set(rehberler.map((r)=>r.category))].sort((a,b)=>a.localeCompare(b,"tr"));
