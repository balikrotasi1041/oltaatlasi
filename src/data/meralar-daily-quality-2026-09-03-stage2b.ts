import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 genel amatör avcılık çerçevesidir; rota özelindeki ticari istihsal, koruma, tesis ve dönem kuralları ayrıca uygulanır."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((item)=>item?.url).map((item)=>[item.url,item])).values()];

type Upgrade={
  sources:ResearchSource[];
  district?:string;
  fish?:string[];
  summary:string;
  risk:string;
  speciesLevel?:"strong"|"partial";
  accessNote:string;
};

export const promoted20260903Stage2B=[
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-adiyaman-cat-baraj-golu",
  "ulusal-elazig-cip-baraj-golu",
  "ulusal-gaziantep-kayacik-baraj-golu",
  "ulusal-denizli-adiguzel-baraj-golu",
] as const;

const evidence:Record<string,Upgrade>={
  "ulusal-erzurum-demirdoven-baraj-golu":{
    district:"Pasinler",
    fish:["Tatlısu Kefali"],
    sources:[
      {label:"Atatürk Üniversitesi AVESİS - Demirdöven tatlı su kefali",url:"https://avesis.atauni.edu.tr/yayin/a96f057f-690b-49d4-a0df-8ce637e90c7b/pasinler-demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonunun-bazi-biyokimyasal-ozelliklerinin-belirlenmesi",note:"Pasinler Demirdöven Baraj Gölünden rota özelinde tatlısu kefali populasyonu örnekleyen TR Dizin makalesidir; tarihsel tür varlığı güncel av garantisi değildir."},
      {label:"Anadolu Ajansı - Demirdöven 18 Şubat 2026",url:"https://www.aa.com.tr/tr/gundem/erzurumdaki-demirdoven-barajinin-yuzeyi-buz-tuttu/3833548",note:"Barajı Pasinler ilçesinde, Tımar Çayı üzerinde ve üç mahalle arasında konumlandırır; barajda balıkçılık yapıldığını ve kafes yetiştiriciliği bulunduğunu güncel saha haberiyle bildirir."},
    ],
    summary:"Demirdöven'in Pasinler/Tımar Çayı kimliği, güncel balıkçılık faaliyeti ve rota özelindeki tatlısu kefali bilimsel örneklemesi çaprazlandı; kafes yetiştiriciliği alanları amatör kıyı kabul edilmedi.",
    risk:"Demirdöven aktif sulama ve kafes yetiştiriciliği barajıdır; kafesler, işletme alanları, kışın buzlanan yüzey, özel parsel ve su yapıları olta kıyısı sayılmaz.",
    accessNote:"AA baraj çevresindeki yerleşimleri ve fiilî balıkçılığı doğrular; bu yalnız genel kullanım bağlamıdır, belirli kıyı cebinin kamusal olduğunu kanıtlamaz."
  },
  "ulusal-adiyaman-cat-baraj-golu":{
    district:"Çelikhan",
    sources:[
      {label:"Adıyaman İl Tarım - Çat Baraj Gölü Avlak Sahası",url:"https://adiyaman.tarimorman.gov.tr/Duyuru/617/Duyuru-Avlak-Sahasi-Ihale-Ilani",note:"Çat Baraj Gölünü resmî su ürünleri avlak sahası olarak doğrular; ticari istihsal ihalesi amatör kıyı hakkı değildir."},
      {label:"Adıyaman İl Kültür ve Turizm - Coğrafya",url:"https://adiyaman.ktb.gov.tr/TR-61344/cografya.html",note:"Çat Barajı göletini Çelikhan-Abdülharap Gölü üzerinde sulama amaçlı su yapısı olarak tanımlar ve yüzen adacık hassasiyetini kaydeder."},
    ],
    summary:"Çat'ın Çelikhan/Abdülharap kimliği, resmî su ürünleri avlak statüsü ve kayıtta zaten bulunan rota özelindeki bilimsel/GBIF tür kanıtları birlikte değerlendirildi; ticari istihsal hakkı amatör av izni sayılmadı.",
    risk:"Çat Barajında yüzen adacıklar, sulama/işletme yapıları ve ticari istihsal sahası bulunur; ekolojik mikro-konumlara, işletme alanına ve kapalı kıyılara yönlendirme yapılmaz.",
    accessNote:"Resmî avlak kaydı ve Çelikhan genel coğrafya kaydı suya yönelik genel kullanım bağlamı sağlar; belirli park/yol/kıyı geçişi doğrulanmış değildir."
  },
  "ulusal-elazig-cip-baraj-golu":{
    district:"Elazığ_Merkez İlçe",
    sources:[
      {label:"Tarım Orman Ekranı - Cip Barajı",url:"https://www.tarimtv.gov.tr/tr/video-detay/cip-baraji-gocmen-kuslarin-yeni-adresi-21452",note:"Cip Çayı üzerinde kurulu gölün balık popülasyonu ve geniş kıyı şeridini Tarım ve Orman Bakanlığı yayınında doğrular."},
      {label:"Elazığ Çevre Şehircilik - İl Hakkında",url:"https://elazig.csb.gov.tr/ilimiz-hakkinda-681",note:"Cip Barajını Elazığ'ın batısında, Cip Köyü güneyinde sulama barajı olarak tanımlar ve göl çevresinin mesire yeri olarak kullanıldığını resmî kayda geçirir."},
      {label:"Anadolu Ajansı - Cip Baraj Gölü 8 Aralık 2025",url:"https://www.aa.com.tr/tr/yasam/elazigdaki-cip-baraj-golu-farkli-turde-binlerce-gocmen-kusu-agirliyor/3764944",note:"Elazığ Belediyesi Cip Mesire Alanından gölün gözlenebildiğini ve balık popülasyonu bulunduğunu güncel bağımsız saha haberiyle destekler."},
    ],
    summary:"Cip'in Elazığ Merkez/Cip Çayı kimliği, resmî mesire kullanımı ve resmî/güncel balık popülasyonu kaydı mevcut rota özelindeki tür katmanıyla çaprazlandı; kıyıların tamamı açık sayılmadı.",
    risk:"Cip göçmen kuşlar açısından değerli habitat ve aktif sulama gölüdür; kuş yoğunluğu olan hassas mikro-kıyılara girilmemeli, su kotu ve mesire/işletme sınırları hareket günü kontrol edilmelidir.",
    speciesLevel:"partial",
    accessNote:"Çevre Şehircilik kaydı göl çevresinin mesire kullanımı olduğunu doğrular; bu genel kamusal kullanım bağlamıdır, her kıyı veya park noktası için izin değildir."
  },
  "ulusal-gaziantep-kayacik-baraj-golu":{
    district:"Oğuzeli",
    sources:[
      {label:"Gaziantep İl Tarım - Kayacık Avlak Sahası 2025",url:"https://gaziantep.tarimorman.gov.tr/Duyuru/385/Ihale-Ilani_kayacik-Avlak-Sahasi_",note:"Kayacık Barajını Oğuzeli ilçesi sınırlarında resmî su ürünleri avlak/istihsal sahası olarak doğrular; ticari kiralama amatör kıyı hakkı değildir."},
      {label:"DergiPark - Kayacık Barajı su kalitesi",url:"https://dergipark.org.tr/tr/pub/actaquatr/article/635648",note:"2019'da altı istasyondan örnekleme yapan hakemli çalışma Kayacık Barajının su gövdesi ve çevresel risklerini rota özelinde doğrular."},
      {label:"Oğuzeli Belediyesi - Kayacık doluluk 6 Ocak 2026",url:"https://oguzeli.bel.tr/public/oguzelinde-barajlara-yagis-bereketi-doluluk-orani-42ye-yukseldi",note:"Kayacık ve Doğanpınar barajlarının Oğuzeli tarım/hayvancılık su kaynakları olarak güncel işletme bağlamını resmî belediye kaynağıyla doğrular."},
    ],
    summary:"Kayacık'ın Oğuzeli kimliği ve resmî avlak statüsü, rota özelindeki hakemli su çalışması ve güncel belediye işletme bağlamıyla çaprazlandı; ticari istihsal ile amatör kıyı kullanımı ayrıldı.",
    risk:"Kayacık'ta çok düşük su seviyesi ve geçmiş balık ölümleri raporlanmıştır; ticari avlak, sulama yapıları, su kalitesi ve çekilen çamurlu kıyılar hareket günü ayrıca kontrol edilmelidir.",
    speciesLevel:"partial",
    accessNote:"Resmî avlak kaydı balıkçılık kullanımını doğrular ancak kamusal mikro-kıyı sağlamaz; yalnız genel su/yerleşim yaklaşımı planlama başlangıcıdır."
  },
  "ulusal-denizli-adiguzel-baraj-golu":{
    district:"Güney",
    fish:["Sazan"],
    sources:[
      {label:"Güney Kaymakamlığı - Adıgüzel Barajı",url:"https://www.guney.gov.tr/adiguzeller-baraji",note:"Adıgüzel Barajı ve HES'i Denizli Güney ilçesinde Büyük Menderes üzerinde aktif enerji tesisi olarak resmî biçimde doğrular."},
      {label:"DergiPark - Adıgüzel Baraj Gölü su ekolojisi",url:"https://dergipark.org.tr/tr/pub/egirdir/article/305920",note:"Adıgüzel Baraj Gölünde dört istasyonda bir yıl örnekleme yapan hakemli çalışma rota kimliğini ve ötrofik ekoloji riskini doğrular."},
      {label:"Haberdenizli - Adıgüzel'de amatör sazan avı 21 Temmuz 2025",url:"https://www.haberdenizli.com/oltayla-balik-avina-cikan-amator-balikci-cuvali-sazanla-doldurdu",note:"Adıgüzel Barajında oltayla sazan yakalandığını güncel yerel saha haberiyle destekler; tek olay av garantisi değildir."},
    ],
    summary:"Adıgüzel'in Güney/Büyük Menderes üzerindeki aktif HES kimliği, hakemli göl ekolojisi çalışması ve 2025 amatör sazan saha kaydı çaprazlandı; tekil av haberi genel av başarısına dönüştürülmedi.",
    risk:"Adıgüzel aktif HES ve sulama rezervuarıdır; hızlı su seviyesi değişimi, işletme yapıları, ötrofik/alg koşulları ve derin kıyı nedeniyle mikro erişim ve suya giriş güvenli kabul edilmez.",
    accessNote:"Güncel amatör olta saha kaydı genel fiilî kullanım bağlamını destekler; özel parsel, park ve HES güvenlik sınırının kamusal olduğu varsayılmaz."
  },
};

export const applyDailyQuality20260903Stage2B=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260903Stage2B){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-03 Stage2B hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-03 Stage2B kotaya yalnız gerçek D→C yazılır: ${slug} (${previous.confidence})`);
    const data=evidence[slug];
    if(!data)throw new Error(`2026-09-03 Stage2B kanıt paketi yok: ${slug}`);
    const fish=data.fish?.length?data.fish:previous.fish;
    if(!fish?.length)throw new Error(`2026-09-03 Stage2B tür olasılığı alanı yok: ${slug}`);
    const sources=uniq([...(previous.sources||[]),...data.sources,teblig]);
    const speciesLevel=data.speciesLevel||"strong";
    routeMap.set(slug,{
      ...previous,
      district:data.district||previous.district,
      fish,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:"Gösterilen pin/ad araması yalnız genel su ve rota planlaması içindir; kesin park, araç girişi, özel parsel sınırı veya olta cebi değildir.",
      sources,
      researchStatus:"2026-09-03 Aşama 2: rota kimliği, il/ilçe, su türü, tür olasılığı, genel erişim/kullanım, mevzuat ve risk bağımsız kaynak aileleriyle çaprazlandı.",
      researchSummary:data.summary,
      verification:`3 Eylül 2026: ${previous.name} gerçek D seviyesinden C'ye çoklu rota-özel kanıtla yükseltildi. Genel kullanım/erişim bağlamı mikro kıyı izni değildir; balık kaydı av garantisi değildir.`,
      researchedAt:"2026-09-03",
      updatedAt:"2026-09-03",
      confidenceProfile:{
        model:"evidence-v1",overall:"C",
        identity:{level:"strong",label:"Rota kimliği",note:"Ad, il/ilçe ve su gövdesi rota özelindeki resmî/kurumsal kaynaklarla eşleşir."},
        legal:{level:"partial",label:"Mevzuat ve alan kısıtları",note:"6/2 genel çerçevesi ile ticari istihsal, HES/sulama, koruma ve dönemsel saha kısıtları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz."},
        access:{level:"partial",label:"Genel kullanım/erişim bağlamı",note:data.accessNote},
        species:{level:speciesLevel,label:speciesLevel==="strong"?"Rota özelinde tür olasılığı":"Rota özelinde balık varlığı / kısmi tür kanıtı",note:speciesLevel==="strong"?"Rota özelindeki bilimsel, resmî ya da güncel saha kaydı yayımlanan tür olasılığını destekler; av başarısını garanti etmez.":"Rota özelinde balık popülasyonu veya avlak kullanımı doğrulanır; mevcut tür listesinin tamamı aynı güçte güncel kanıtlanmış sayılmaz."},
        field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet, işletme ve güncel kıyı zemini hareket günü yerinde kontrol edilmelidir."},
        reviewedAt:"2026-09-03",
      },
      cautions:[...new Set([...(previous.cautions||[]),data.risk,"Geçmiş balıklandırma, ticari avlak, tekil av haberi veya harita kaydı tek başına güncel amatör av izni, güvenli kıyı girişi ya da av garantisi değildir."])],
    });
  }
  return routeMap;
};
