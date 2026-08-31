import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const regulation:ResearchSource={label:"Tarım ve Orman Bakanlığı - amatör su ürünleri avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Güncel 6/2 Tebliğ ve değişiklikleri için resmî mevzuat girişidir; tek başına rota erişim kanıtı değildir."};
const uniq=(sources:ResearchSource[])=>[...new Map(sources.map((s)=>[s.url,s])).values()];

type Promotion={slug:string;sources:ResearchSource[];note:string;access:string;risk:string;};

export const promotions20260831Stage2:Promotion[]=[
  {
    slug:"ankara-500km-samsun-suat-ugurlu-baraj-golu",
    sources:[
      {label:"DOKAP - Suat Uğurlu sahil gezinti yolu",url:"https://www.dokap.gov.tr/haberler/samsun-ayvacik-suat-ugurlu-baraj-golu-sahil-gezinti-yolu-projesi-protokol-imza-toreni-gerceklestirildi/201/Detay",note:"Ayvacık'ta baraj kıyısında kamusal sosyal donatı, yürüyüş ve balık tutma iskeleleri planını resmî olarak kaydeder; belirli iskelenin bugün açık olduğu varsayılmaz."},
      {label:"DergiPark - Suat Uğurlu Baraj Gölü balıkları",url:"https://dergipark.org.tr/tr/pub/egirdir/article/246546",note:"2003-2004 örneklemesinde baraj ve kollarında 7 tür ve 1 alttür kaydeder; güncel av garantisi değildir."},
      {label:"Samsun İl Tarım - içsu av yasağı",url:"https://samsun.tarimorman.gov.tr/Haber/1415/Ic-Sularda-Av-Yasagi-Basliyor",note:"Suat ve Hasan Uğurlu barajlarını il içsu denetimi ve dönemsel av yasağı bağlamında açıkça sayar."},regulation
    ],
    note:"Ayvacık/Samsun rota kimliği, kamusal kıyı kullanım bağlamı ve rota-özel ihtiyofauna birbirinden bağımsız kaynak aileleriyle eşleşti.",
    access:"DOKAP kaydı baraj kıyısında kamusal rekreasyon ve balık tutma altyapısı planını doğrular. Navigasyon yalnız Ayvacık genel kıyı yaklaşımına kullanılmalı; son park, iskele ve kıyı açıklığı hareket günü kontrol edilmelidir.",
    risk:"HES/baraj işletme sınırları, su kotu ve akıntı değişimleri nedeniyle tesis ve kapalı işletme alanlarından uzak dur; saha tabelası ve güncel dönem yasağı önceliklidir."
  },
  {
    slug:"ankara-500km-tokat-hasan-ugurlu-baraj-golu",
    sources:[
      {label:"Samsun İl Kültür ve Turizm - baraj gölleri",url:"https://samsun.ktb.gov.tr/TR-216790/baraj-gollleri-ve-su-sporlari.html",note:"Hasan ve Suat Uğurlu barajlarını Ayvacık'taki kamusal turizm/su sporları bağlamında tanımlar."},
      {label:"YÖK Açık Bilim - Suat ve Hasan Uğurlu besin ağı",url:"https://acikbilim.yok.gov.tr/handle/20.500.12812/618354",note:"Hasan/Suat Uğurlu sistemlerinde balık ve besin ağı örneklemelerine dayanan akademik çalışmadır."},
      {label:"Samsun İl Tarım - içsu av yasağı",url:"https://samsun.tarimorman.gov.tr/Haber/1415/Ic-Sularda-Av-Yasagi-Basliyor",note:"Hasan Uğurlu Baraj Gölü'nü dönemsel içsu av yasağı ve denetim kapsamındaki su olarak açıkça sayar."},regulation
    ],
    note:"Mevcut slug adı Tokat ön eki taşısa da su varlığı kaynaklarda Ayvacık/Samsun olarak doğrulanıyor; bu tur confidence yalnız rota kanıtı için C'ye çıkarılır, il etiketi Aşama 4'te veri bütünlüğü kontrolüne alınmalıdır.",
    access:"Ayvacık çevresindeki baraj kıyıları turizm ve su sporları bağlamında kamusal kullanıma konu olsa da enerji tesisi güvenlik sınırları ve belirli kıyı geçişleri ayrıca kontrol edilmelidir.",
    risk:"Baraj işletme sahası, dik kıyı, ani su seviyesi değişimi ve tekne trafiği olasıdır; enerji tesisi çevresine ve kapalı alanlara yaklaşılmamalıdır."
  },
  {
    slug:"ulusal-tunceli-uzuncayir-baraj-golu",
    sources:[
      {label:"Kültür Portalı - Tunceli baraj gölleri",url:"https://www.kulturportali.gov.tr/turkiye/tunceli/turizmaktiviteleri/baraj-golleri",note:"Uzunçayır kıyılarında kamp/piknik ve sportif olta potansiyelini Tunceli İl Kültür ve Turizm Müdürlüğü kaynağıyla verir."},
      {label:"Aquaculture Studies - Uzunçayır balık faunası",url:"https://dergipark.org.tr/tr/pub/yunusae/article/235421",note:"2011-2012 örneklemesinde Uzunçayır Baraj Gölü ve kollarında 12 takson belirler."},regulation
    ],
    note:"Tunceli merkez-Mazgirt Köprüsü arasındaki göl kimliği, kamusal rekreasyon/olta bağlamı ve rota-özel 12 taksonlu akademik fauna birlikte doğrulandı.",
    access:"Resmî turizm kaynağı göl kıyılarını rekreasyon ve sportif olta bağlamında tanımlar; bu kayıt belirli bir mikro kıyının sürekli açık olduğu anlamına gelmez.",
    risk:"2026'da kafes yetiştiriciliği başlayan bölümlere, işletme şamandıralarına ve tesis güvenlik alanlarına yaklaşma; akıntı, dik şev ve su kotu hareket günü kontrol edilmelidir."
  },
  {
    slug:"ulusal-kars-cildir-golu-kars-kiyisi",
    sources:[
      {label:"Çıldır Kaymakamlığı - Çıldır Gölü",url:"https://www.cildir.gov.tr/cildir-golu",note:"Gölün Ardahan-Kars sınırları içindeki kimliğini, balıkçılık faaliyetini ve sazan varlığını resmî olarak kaydeder."},
      {label:"DergiPark - Çıldır Gölü balıklarının güncel değerlendirmesi",url:"https://dergipark.org.tr/tr/pub/jaes/article/1521913",note:"Mayıs 2024 örneklemesi ve literatür taramasıyla gölde 17 tür bildirir."},
      {label:"Kültür Portalı - Çıldır sportif olta",url:"https://www.kulturportali.gov.tr/turkiye/ardahan/turizmaktiviteleri/cildir-golu",note:"Sportif olta balıkçılığını resmî turizm aktivitesi olarak açıkça belirtir; hassas kıyı mikro-konumu vermez."},regulation
    ],
    note:"Kars-Ardahan ortak göl kimliği, sportif olta kullanımı ve 2024 rota-özel fauna örneklemesi güçlü biçimde çaprazlandı.",
    access:"Göl çevresi genel bölge olarak planlanmalıdır; mera/özel kullanım, sulak alan hassasiyeti ve buz güvenliği nedeniyle mikro erişim noktası yayımlanmaz.",
    risk:"Kışın buz kalınlığı yerel ve günlük değişebilir; buz üstüne çıkış güvenli kabul edilmez. Sazlık, sulak çayır ve hassas habitatlarda kıyı baskısı yaratılmamalıdır."
  },
  {
    slug:"ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
    sources:[
      {label:"Devrekani Kaymakamlığı - Çiğdem Göleti",url:"https://www.devrekani.gov.tr/igdem-goleti",note:"Su varlığını Devrekani/Örenbaşı-Çatak Deresi üzerinde gölet olarak tanımlar; in balığı, tatlısu kefali ile sazan aşılamasını kaydeder."},
      {label:"Türk Tarım-Gıda Bilim ve Teknoloji Dergisi - Çiğdem Göleti su kalitesi",url:"https://agrifoodscience.com/index.php/TURJAF/article/view/942",note:"2015-2016 döneminde Çiğdem Göleti'nde üç istasyonlu akademik su kalitesi çalışmasıdır."},regulation
    ],
    note:"Kayıt adındaki 'baraj' ifadesine rağmen resmî kaynak suyu Çiğdem Göleti olarak doğruluyor; tür ve su kimliği rota özelinde destekli, mikro kıyı erişimi ise saha teyitsiz.",
    access:"Örenbaşı/Devrekani genel yaklaşımı kullanılmalı; sulama işletmesi, tarla geçişleri ve son kıyı yolu kamusal kabul edilmemelidir.",
    risk:"Gölette geçmişte ciddi kuraklık ve su seviyesi düşüşü yaşandı. Çamurlu taban, sulama faaliyeti ve zayıf kıyı zemini hareket günü kontrol edilmelidir."
  },
  {
    slug:"ankara-500km-elazig-karakaya-baraj-golu",
    sources:[
      {label:"Elazığ İl Tarım - Karakaya 8. avlak sahası 2026",url:"https://elazig.tarimorman.gov.tr/Duyuru/677/Baskil-Ilcesi-Karakaya-Baraj-Golu-8-Avlak-Sahasinin-Kiralanmasina-Iliskin-Ihale-Ilani",note:"Baskil/Karakaya 8. avlak sahasında kerevit, in balığı, tatlısu kefali, bıyıklı balık ve sazan için 2026 stok tablosu yayımlar; ticari kiralama amatör kıyı izni değildir."},
      {label:"DergiPark - Karakaya Baraj Gölü planktonik/epipelik algleri",url:"https://dergipark.org.tr/en/pub/limnofish/article/873166",note:"Elazığ Karakaya Baraj Gölü'nde beş istasyonlu akademik çalışma su varlığı ve ekolojik bağlamı doğrular."},
      {label:"Fırat Kalkınma Ajansı - Elazığ çevre",url:"https://fka.gov.tr/cevre-detayi-100",note:"Karakaya Baraj Gölü'nün Elazığ'ın batı sınırındaki coğrafi konumunu kurumsal olarak doğrular."},regulation
    ],
    note:"Baskil/Elazığ rota kimliği, 2026 avlak-stok verisi ve akademik ekoloji çalışması çaprazlandı. Ticari istihsal alanı amatör erişim hakkı olarak yorumlanmıyor.",
    access:"Baskil kıyısı yalnız genel bölge olarak gösterilmeli; kiralanmış istihsal alanı, özel tarla yolu ve işletme erişimi kamusal kıyı girişi sayılmaz.",
    risk:"Ticari ağ/istihsal faaliyeti, dik şev ve özel tarım parselleri görülebilir. Kiralama sınırları ve saha tabelaları hareket günü önceliklidir."
  },
  {
    slug:"ankara-500km-adiyaman-ataturk-baraj-golu",
    sources:[
      {label:"Adıyaman İl Tarım - Atatürk Barajı balıklandırması",url:"https://adiyaman.tarimorman.gov.tr/Haber/624/Ataturk-Baraji-Golune-1-596-000-Yavru-Balik-Birakildi",note:"Kahta ve Samsat ilçelerindeki 13-16. su ürünleri avlak sahalarına 2021'de 1.596.000 pullu sazan yavrusu bırakıldığını resmî olarak doğrular."},
      {label:"Samsat Belediyesi - Baraj Park",url:"https://www.samsat.bel.tr/baraj-park-samsat/",note:"Atatürk Barajı kıyısında ücretsiz girişli kamusal rekreasyon alanı ve temel tesisleri tanımlar; burası otomatik olarak olta noktası sayılmaz."},
      {label:"Ege Journal - Kahta Çayı/Atatürk Baraj Gölü su kalitesi",url:"https://www.egejfas.org/en/pub/article/551081",note:"Atatürk Baraj Gölü'ne dökülen Kahta Çayı üzerinde 2012-2013 akademik su kalitesi çalışmasıdır ve havza bağlantısını destekler."},regulation
    ],
    note:"Adıyaman Kahta/Samsat kıyı kimliği, resmî pullu sazan balıklandırması, kurumsal kamusal kıyı rekreasyonu ve akademik havza çalışması birlikte değerlendirildi.",
    access:"Samsat'ta kamusal Baraj Park kıyı erişim bağlamı sağlar; olta için uygun bölüm, işletme sınırı ve yerel tabela ayrıca kontrol edilmelidir.",
    risk:"Geniş rezervuarda rüzgâr ve su kotu hızlı değişebilir. Tekne/tesis alanlarından, istihsal ekipmanından ve kapalı güvenlik bölgelerinden uzak durulmalıdır."
  }
];

export const applyDailyQualityStage2_20260831=(routeMap:Map<string,EnrichedMera>)=>{
  for(const item of promotions20260831Stage2){
    const previous=routeMap.get(item.slug);
    if(!previous)throw new Error(`31 Ağustos Stage 2 hedefi aktif veri kümesinde yok: ${item.slug}`);
    if(previous.confidence!=="D")throw new Error(`31 Ağustos kotasına D olmayan kayıt giremez: ${item.slug} (${previous.confidence})`);
    const sources=uniq([...(previous.sources||[]),...item.sources]);
    routeMap.set(item.slug,{
      ...previous,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      updatedAt:"2026-08-31",
      verification:`31.08.2026 rota-özel çapraz doğrulama: ${item.note} Güven C; saha teyidi yoktur.`,
      summary:`${previous.name}, resmî/kurumsal rota kimliği ve kullanım bağlamı ile akademik veya rota-özel tür/ekoloji kanıtı çaprazlanan Güven C planlama dosyasıdır; mikro kıyı erişimi hareket günü doğrulanmalıdır.`,
      navigationNote:`Konum yalnız ${previous.province} / ${previous.district} genel yaklaşımını temsil eder. ${item.access}`,
      transport:`${item.access} Kesin park, özel mülkiyet, bariyer ve son kıyı geçişi çevrimiçi kaynaktan garanti edilmez.`,
      cautions:[...new Set([...(previous.cautions||[]),item.risk,"Güncel 6/2 Tebliğ, il müdürlüğü kararları ve saha tabelaları av öncesinde yeniden kontrol edilmelidir."])],
      planningNotes:[...new Set([...(previous.planningNotes||[]),item.access,"Geçmiş balıklandırma veya akademik tür kaydı güncel av garantisi değildir; tür varlığı olasılık kanıtı olarak kullanılır."])],
      sources,
      confidenceProfile:{
        model:"evidence-v1",
        overall:"C",
        identity:{level:"strong",label:"Rota kimliği çapraz doğrulandı",note:"Su varlığı ile il/ilçe veya kıyı bağlamı resmî/kurumsal kaynakla eşleşti."},
        legal:{level:"partial",label:"Mevzuat ve kullanım bağlamı",note:"Güncel amatör av mevzuatı ile rota-özel kamu kayıtları birlikte kullanıldı; belirli kıyı cebinin sürekli açık olduğu varsayılmaz."},
        access:{level:"partial",label:"Genel kamusal erişim bağlamı",note:"Yerleşim/rekreasyon veya kamu kullanım bağlamı kaynaklıdır; mikro giriş, park ve mülkiyet saha teyitli değildir."},
        species:{level:"partial",label:"Rota/havza tür olasılığı kanıtlı",note:"Resmî balıklandırma, stok veya akademik örnekleme kanıtı bulunur; günlük av başarısı anlamına gelmez."},
        field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, su kotu, işletme faaliyeti, tabela ve kıyı güvenliği hareket günü kontrol edilmelidir."},
        reviewedAt:"2026-08-31"
      }
    });
  }
  return routeMap;
};
