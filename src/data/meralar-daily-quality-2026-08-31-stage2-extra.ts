import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const regulation:ResearchSource={label:"Tarım ve Orman Bakanlığı - amatör su ürünleri avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Güncel 6/2 Tebliğ ve değişiklikleri için resmî mevzuat girişidir; tek başına rota erişim kanıtı değildir."};
const uniq=(sources:ResearchSource[])=>[...new Map(sources.map((s)=>[s.url,s])).values()];

type ExtraPromotion={slug:string;fish:string[];sources:ResearchSource[];note:string;access:string;risk:string;name?:string;district?:string;waterType?:"Deniz"|"Gölet"|"Göl"|"Akarsu"|"Baraj";};

export const promotions20260831Stage2Extra:ExtraPromotion[]=[
  {
    slug:"ulusal-ardahan-kura-nehri-ardahan-hatti",
    fish:["İnci balığı"],
    sources:[
      {label:"Ardahan İl Kültür ve Turizm Müdürlüğü - Kura Nehri",url:"https://ardahan.ktb.gov.tr/TR-55765/nehirler.html",note:"Kura Nehri'nin Ardahan/Göle koridorundaki resmî coğrafi kimliğini ve Türkiye içindeki güzergâhını doğrular."},
      {label:"Ardahan Belediyesi - Kura Nehri Yaşam Vadisi",url:"https://www.ardahan.bel.tr/haberler/deniz-olmayan-ardahanda-deniz-bisikleti-keyfi-627",note:"Kura kıyısında yürüyüş, bisiklet, yeşil alan ve sosyal tesislerle kamusal rekreasyon kullanımı bulunduğunu doğrular; olta izni anlamına gelmez."},
      {label:"Ardahan Üniversitesi - Ardahan İli İhtiyofaunası",url:"https://www.ardahan.edu.tr/dosyalar/v_ders_icerigi/ardahan_calistayi/assets/ad/Ardahan%20Co%C4%9Frafya%20ve%20Turizmi/Cilt%203%20-%20B%C3%B6l%C3%BCm%2018-%20Ardahan%20%C4%B0li%20%C4%B0htiyofaunas%C4%B1.pdf",note:"Kura Nehri ana kolu ve kollarında Alburnus filippi dahil doğal türleri istasyon kayıtlarıyla bildirir; güncel av başarısı değildir."},regulation
    ],
    note:"Ardahan Kura koridoru resmî coğrafya, belediye kamusal kıyı kullanımı ve üniversite ihtiyofauna kaydıyla çaprazlandı.",
    access:"Ardahan merkezde Kura Nehri Yaşam Vadisi kamusal rekreasyon bağlamı sağlar. Bu yalnız genel kıyı kullanım kanıtıdır; olta atılabilir mikro cep, park ve mülkiyet sınırı ayrıca kontrol edilmelidir.",
    risk:"Debi, taşkın ve kıyı erozyonu hızla değişebilir. Yaşam Vadisi dışındaki tarım/mera geçişleri kamusal kabul edilmemeli; su sporları kullanıcılarıyla güvenli mesafe korunmalıdır."
  },
  {
    slug:"ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
    fish:["Alburnoides turani"],
    sources:[
      {label:"Zonguldak İl Kültür ve Turizm - Filyos Çayı",url:"https://www.visitzonguldak.com/en",note:"Filyos Çayı'nı Çaycuma-Zonguldak koridorunda tanımlar ve rafting ile olta balıkçılığına uygun turizm faaliyeti bağlamını açıkça verir."},
      {label:"Zootaxa - Filyos River drainage Alburnoides turani",url:"https://www.biotaxa.org/Zootaxa/article/view/zootaxa.4763.3.6",note:"Hakemli çalışma Alburnoides turani'yi Filyos Nehri drenajından tanımlar; drenaj kaydı günlük av veya belirli kıyı garantisi değildir."},
      {label:"YÖK Açık Bilim - Filyos Çayı su kalitesi",url:"https://acikbilim.yok.gov.tr/handle/20.500.12812/253617",note:"Filyos Çayı ana kolunda beş istasyonda bir yıllık akademik su kalitesi örneklemesi yapıldığını doğrular."},regulation
    ],
    note:"Çaycuma/Zonguldak Filyos koridorunda resmî olta/rekreasyon kullanımı, ana kol akademik örneklemesi ve Filyos drenajına özgü balık kaydı birlikte doğrulandı.",
    access:"Resmî turizm kaynağı Filyos Çayı'nı olta balıkçılığı ve rafting açısından kullanılan bir koridor olarak tanımlar; liman/endüstri sahası, delta hassas alanları ve belirli kıyı cepleri bu genel kullanımdan çıkarılamaz.",
    risk:"Filyos deltası ekolojik açıdan hassastır; sazlık ve kuş alanlarına girilmemeli. Taşkın, hızlı akım, endüstriyel/liman çalışma sahaları ve su kalitesi hareket günü ayrıca değerlendirilmelidir."
  },
  {
    slug:"ulusal-erzincan-karasu-nehri-erzincan-hatti",
    fish:["Siraz"],
    sources:[
      {label:"Erzincan Belediyesi - Coğrafya",url:"https://www.erzincan.bel.tr/sayfa/cografya",note:"Karasu Nehri'ni Fırat'ın önemli kolu ve Erzincan-Tercan ovalarının temel akarsuyu olarak resmî biçimde doğrular."},
      {label:"DergiPark - Karasu Nehri Capoeta umbla",url:"https://dergipark.org.tr/en/pub/turkjans/article/471355",note:"Karasu Nehri Erzincan kesiminden yakalanan Capoeta umbla bireylerinde akademik analiz yapar; rota özelinde tür varlığı kanıtıdır."},
      {label:"Anadolu Ajansı - Karasu rafting koridoru",url:"https://www.aa.com.tr/tr/yasam/sicaktan-bunalanlar-karasu-nehrinde-rafting-yaparak-serinliyor/2961700",note:"Kemah yolu üzerindeki yaklaşık 8 km'lik Karasu parkurunda düzenli rekreasyon/su sporu kullanımını belgeler; olta izni değildir."},regulation
    ],
    note:"Erzincan Karasu kimliği, kamusal rekreasyon koridoru ve rota-özel Capoeta umbla yakalama kaydı bağımsız kaynaklarla eşleşti.",
    access:"Kemah yolu üzerindeki rafting kullanımı nehir kıyısına genel kamusal erişim bağlamı sağlar; belirli iniş/çıkış noktaları olta erişimi sayılmaz ve özel arazi geçişi varsayılmaz.",
    risk:"Karasu hızlı akan ve taşkın potansiyeli bulunan bir nehirdir. Rafting parkurunda misina güvenliği, ani debi değişimi, dik kıyı ve özel tarım parselleri özellikle kontrol edilmelidir."
  },
  {
    slug:"ulusal-erzincan-firat-nehri-kemaliye-hatti",
    fish:["Sazan","Siraz","Tatlısu Kefali","Gökkuşağı Alabalığı"],
    sources:[
      {label:"Kemaliye Kaymakamlığı - Genel Bilgiler",url:"https://kemaliye.gov.tr/genel-bilgiler-kemaliye",note:"Karasu/Fırat'ın Kemaliye'yi ikiye ayırarak Keban Baraj Gölü'ne kavuştuğu ilçe coğrafyasını ve doğa sporları kullanımını resmî olarak doğrular."},
      {label:"Fırat Üniversitesi - Keban Kemaliye balıkları",url:"https://dergipark.org.tr/en/pub/fufbd/issue/35839/400681",note:"Keban Baraj Gölü Kemaliye bölgesinde 2012-2013 döneminde 7 balık türü ve yıllık verimliliklerini rota özelinde raporlar."},
      {label:"Erzincan İl Kültür ve Turizm - Kemaliye",url:"https://erzincan.ktb.gov.tr/TR-57390/kemaliye.html",note:"Kemaliye'yi Keban Baraj Gölü kıyısında resmî turizm destinasyonu olarak doğrular; mikro olta noktası anlamına gelmez."},regulation
    ],
    note:"Kemaliye/Fırat-Keban kıyı kimliği, resmî turizm/doğa sporları kullanımı ve 7 türlük rota-özel akademik av verisi birlikte doğrulandı.",
    access:"Kemaliye ilçe ve Keban kıyısı kamusal turizm/doğa sporları bağlamında kullanılır; Karanlık Kanyon ve dik kıyılar nedeniyle tek bir mikro olta noktası veya yol güvenli kabul edilmez.",
    risk:"Kanyon kıyıları çok dik olabilir; tekne trafiği, su kotu ve düşme riski yüksektir. Karanlık Kanyon'da yalnız güvenli, izinli ve açık kıyı bölümleri kullanılmalıdır."
  },
  {
    slug:"ulusal-erzurum-olur-baraj-golu",
    name:"Ayvalı Baraj Gölü (Olur/Oltu)",
    district:"Olur / Oltu",
    fish:["Sazan"],
    sources:[
      {label:"Erzurum İl Kültür ve Turizm - Olur",url:"https://erzurum.ktb.gov.tr/TR-56054/olur.html",note:"Olur/Oltu çevresindeki Ayvalı Barajı ve HES'i resmî ilçe turizm/coğrafya bağlamında tanımlar."},
      {label:"Erzurum Portalı - Ayvalı Barajı olta kullanımı",url:"https://erzurumportali.com/shf/3715/oltu-ayvali-baraji",note:"Yerel destekleyici kaynak Ayvalı Barajı'nın hafta sonu olta balıkçılığı kullanımını kaydeder; resmî av izni yerine geçmez."},
      {label:"DHA - Ayvalı Barajı sazan yavruları",url:"https://www.dha.com.tr/gundem/baraj-golu-yuzeyinde-kumelesen-baliklar-sasirtti-1793476",note:"Oltu/Ayvalı Baraj Gölü'nde 2020'de sazan yavrularının gözlendiğini ve İlçe Tarım ekiplerinin inceleme yaptığını bildirir; güncel stok garantisi değildir."},regulation
    ],
    note:"Eski 'Olur Baraj Gölü' adlandırması Ayvalı Barajı'nın Olur/Oltu bağlamıyla düzeltildi; yerel olta kullanımı ve rota-özel sazan gözlemi ayrı kaynaklarla eşleşti.",
    access:"Ayvalı Barajı çevresinde yerel olta kullanımı belgeli olsa da HES ve aktif kafes yetiştiriciliği vardır. Genel kıyı yaklaşımı dışında tesis yolu, kafes alanı veya özel parsel kamusal kabul edilmez.",
    risk:"Aktif HES/kafes yetiştiriciliği, su seviyesi değişimi ve işletme güvenlik alanları vardır. Kafeslerden kaçan yetiştiricilik balıkları doğal stok kanıtı sayılmaz; kafes ve ağlara yaklaşılmamalıdır."
  },
  {
    slug:"ulusal-aksaray-ciftevi-baraj-golu",
    name:"Çiftevi Göleti",
    district:"Ortaköy",
    waterType:"Gölet",
    fish:["Sazan"],
    sources:[
      {label:"Aksaray Valiliği - Coğrafi",url:"https://www.aksaray.gov.tr/cografi",note:"Su varlığını Ortaköy-Çiftevi Göleti adıyla resmî olarak listeler; gölet kimliği ve ilçe bağlamını doğrular."},
      {label:"Aksaray İl Tarım - Çiftevi balıklandırması",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=5aa77b9a-c07f-4a3e-83c4-12b8f22f036c&TermSetId=701411f4-ada6-4455-9418-9c4daefc1e6a&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde bildiren resmî balıklandırma kaydıdır; güncel av garantisi değildir."},
      {label:"OGM - Aksaray 2026 orman giriş kısıtları",url:"https://www.ogm.gov.tr/konyaobm/haberler/aksarayda-bazi-ormanlik-alanlara-girislerin-yasaklanmasi",note:"Çiftevi çevresinde 1 Haziran-31 Ekim 2026 arasında kontrolsüz girişin yasak olduğunu açıklar; erişim planında güncel resmî kısıt olarak üstündür."},regulation
    ],
    note:"Çiftevi'nin Ortaköy göleti kimliği, rota-özel sazan balıklandırması ve 2026 güncel erişim kısıtı resmî bağımsız kayıtlarla doğrulandı.",
    access:"Çiftevi çevresi için 1 Haziran-31 Ekim 2026 döneminde kontrolsüz giriş resmî olarak yasaktır. Bu tarihlerde açık/izinli alan teyit edilmeden rota erişilebilir gösterilmemelidir; dönem sonrasında da mikro kıyı girişi yeniden doğrulanmalıdır.",
    risk:"2026 yangın sezonu giriş kısıtı birincil risktir. Sulama işletmesi, tarım parselleri, zayıf kıyı zemini ve yangın tedbirleri nedeniyle tabela ve görevli talimatı her zaman önceliklidir."
  }
];

export const applyDailyQualityStage2Extra_20260831=(routeMap:Map<string,EnrichedMera>)=>{
  for(const item of promotions20260831Stage2Extra){
    const previous=routeMap.get(item.slug);
    if(!previous)throw new Error(`31 Ağustos Stage 2 ek hedefi aktif veri kümesinde yok: ${item.slug}`);
    if(previous.confidence!=="D")throw new Error(`31 Ağustos ek kotasına D olmayan kayıt giremez: ${item.slug} (${previous.confidence})`);
    routeMap.set(item.slug,{
      ...previous,
      ...(item.name?{name:item.name}:{}),
      ...(item.district?{district:item.district}:{}),
      ...(item.waterType?{waterType:item.waterType}:{}),
      fish:item.fish,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      updatedAt:"2026-08-31",
      verification:`31.08.2026 rota-özel çapraz doğrulama: ${item.note} Güven C; saha teyidi yoktur.`,
      summary:`${item.name||previous.name}, rota kimliği, genel kullanım/erişim bağlamı, mevzuat ve tür olasılığı bağımsız kaynak aileleriyle çaprazlanan Güven C planlama dosyasıdır; mikro kıyı erişimi ayrıca doğrulanmalıdır.`,
      navigationNote:`Konum yalnız ${previous.province} genel yaklaşımını temsil eder. ${item.access}`,
      transport:`${item.access} Kesin park, özel mülkiyet, bariyer ve son kıyı geçişi çevrimiçi kaynaktan garanti edilmez.`,
      cautions:[...new Set([...(previous.cautions||[]),item.risk,"Güncel 6/2 Tebliğ, il/ilçe kurum kararları ve saha tabelaları av öncesinde yeniden kontrol edilmelidir."])],
      planningNotes:[...new Set([...(previous.planningNotes||[]),item.access,"Tür kaydı veya geçmiş balıklandırma günlük av başarısı ve avlanma izni anlamına gelmez."])],
      sources:uniq([...(previous.sources||[]),...item.sources]),
      confidenceProfile:{
        model:"evidence-v1",overall:"C",
        identity:{level:"strong",label:"Rota kimliği çapraz doğrulandı",note:"Su varlığı ile il/ilçe veya kıyı bağlamı resmî/kurumsal kaynakla eşleşti."},
        legal:{level:"partial",label:"Mevzuat ve kullanım bağlamı",note:"Güncel amatör av mevzuatı ve rota/il özelindeki kamu kararları birlikte kullanıldı; mikro kıyının sürekli açık olduğu varsayılmaz."},
        access:{level:"partial",label:"Genel kullanım/erişim bağlamı",note:"Kamusal rekreasyon, yerleşim veya açık/kısıtlı kullanım durumu kaynaklıdır; mikro giriş, park ve mülkiyet saha teyitli değildir."},
        species:{level:"strong",label:"Tür olasılığı rota/havza düzeyinde kaynaklı",note:"Yayımlanan tür listesi yalnız resmî stok/balıklandırma veya akademik/rota-özel kayıtlarla desteklenen türlere daraltılmıştır; av garantisi değildir."},
        field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, su kotu, işletme faaliyeti, tabela ve kıyı güvenliği hareket günü kontrol edilmelidir."},
        reviewedAt:"2026-08-31"
      }
    } as EnrichedMera);
  }
  return routeMap;
};
