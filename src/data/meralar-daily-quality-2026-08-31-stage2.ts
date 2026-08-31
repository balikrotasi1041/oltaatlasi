import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const regulation:ResearchSource={label:"Tarım ve Orman Bakanlığı - amatör su ürünleri avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Güncel 6/2 Tebliğ ve değişiklikleri için resmî mevzuat girişidir; tek başına rota erişim kanıtı değildir."};
const uniq=(sources:ResearchSource[])=>[...new Map(sources.map((s)=>[s.url,s])).values()];

type Promotion={slug:string;sources:ResearchSource[];note:string;access:string;risk:string;fish?:string[];};

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
    note:"Mevcut slug adı Tokat ön eki taşısa da su varlığı kaynaklarda Ayvacık/Samsun olarak doğrulanıyor; confidence rota kanıtı için C'ye çıkarılır, il etiketi veri bütünlüğü kontrolüne alınmalıdır.",
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
    risk:"Kafes yetiştiriciliği yapılan bölümlere, işletme şamandıralarına ve tesis güvenlik alanlarına yaklaşma; akıntı, dik şev ve su kotu hareket günü kontrol edilmelidir."
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
    note:"Kayıt adındaki 'baraj' ifadesine rağmen resmî kaynak suyu Çiğdem Göleti olarak doğruluyor; tür ve su kimliği rota özelinde destekli, mikro kıyı erişimi saha teyitsiz.",
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
  },
  {
    slug:"ulusal-erzincan-tercan-baraj-golu",
    fish:["Sazan"],
    sources:[
      {label:"Tercan Kaymakamlığı - Tercan Barajı",url:"https://www.tercan.gov.tr/tercan-baraji",note:"Tercan Barajı'nı Tuzla Çayı üzerinde, Tercan'ın yaklaşık 5 km güneydoğusunda bulunan sulama ve enerji amaçlı rezervuar olarak resmî biçimde tanımlar."},
      {label:"Erzincan Üniversitesi - Tercan Baraj Gölü sazan çalışması",url:"https://dergipark.org.tr/en/pub/erzifbed/article/698577",note:"Mayıs-Ekim 2017'de Tercan Baraj Gölü'nden örneklenen 190 Cyprinus carpio üzerinde yürütülen rota-özel akademik çalışmadır."},regulation
    ],
    note:"Tercan/Tuzla Çayı baraj kimliği ve genel konumu resmî kaynaktan, sazan varlığı ise 190 örnekli rota-özel akademik çalışmadan doğrulandı.",
    access:"Kaymakamlık barajı Tercan'ın yaklaşık 5 km güneydoğusunda tanımlar. Bu yalnız genel yaklaşım bağlamıdır; son kıyı yolu, park ve tarla geçişi kamusal kabul edilmez.",
    risk:"Sulama/HES işletmesi, su kotu değişimi ve olası kafes/işletme faaliyeti nedeniyle tesis sınırlarından uzak durulmalı; bariyer ve tabelalar önceliklidir."
  },
  {
    slug:"ulusal-artvin-borcka-baraj-golu",
    fish:["Yayın"],
    sources:[
      {label:"Artvin Valiliği - Çoruh baraj gölleri",url:"https://www.artvin.gov.tr/orman-ve-su-isleri-bakani-eroglu-artvinde",note:"Borçka Barajı dahil Çoruh üzerindeki baraj göllerinde balıkçılık ve su sporları potansiyelini resmî kamu bağlamında belirtir; mikro kıyı izni değildir."},
      {label:"YÖK Açık Bilim - Borçka Baraj Gölü yayın balığı",url:"https://acikbilim.yok.gov.tr/handle/20.500.12812/103957",note:"Şubat 2016-Kasım 2017 arasında Borçka Baraj Gölü'nden yakalanan 156 Silurus glanis bireyine dayanan lisansüstü çalışmadır."},
      {label:"RTEÜ AVESIS - Borçka kültür balıkçılığı çevresel etkileşimi",url:"https://avesis.erdogan.edu.tr/yonetilen-tez/82df76f2-a8bc-4906-9f3e-5eece8f65f05/artvin-bolgesi-kultur-balikciligi-cevresel-etkilesimi-uzerine-bir-calisma-borcka-baraj-golu-ornegi",note:"Borçka Baraj Gölü'ndeki kafes yetiştiriciliğini ve ekolojik taşıma kapasitesi riskini inceler; işletme sahaları amatör erişim değildir."},regulation
    ],
    note:"Borçka/Çoruh baraj kimliği ve genel balıkçılık kullanım bağlamı resmî kaynaktan, yayın varlığı 156 bireylik rota-özel tezden doğrulandı; desteklenmeyen eski tür adayları yayımlanmadı.",
    access:"Baraj gölü yalnız Borçka genel yaklaşımıyla planlanmalıdır. Kafes işletmeleri, enerji tesisi ve özel/işletme yolları kamusal kıyı girişi kabul edilmez.",
    risk:"Aktif kafes yetiştiriciliği, dik kıyılar ve enerji işletmesi nedeniyle şamandıra, ağ, kafes ve tesis güvenlik sınırlarından uzak durulmalıdır."
  },
  {
    slug:"ulusal-erzurum-demirdoven-baraj-golu",
    fish:["Tatlısu Kefali"],
    sources:[
      {label:"Anadolu Ajansı - Demirdöven Barajı 2026",url:"https://www.aa.com.tr/tr/gundem/erzurumdaki-demirdoven-barajinin-yuzeyi-buz-tuttu/3833548",note:"Demirdöven Barajı'nı Pasinler'e yaklaşık 10 km uzaklıkta, Tımar Çayı üzerinde ve balıkçılık/kafes faaliyeti bulunan rezervuar olarak güncel biçimde tanımlar."},
      {label:"Atatürk Üniversitesi AVESIS/TR Dizin - Demirdöven tatlı su kefali",url:"https://avesis.atauni.edu.tr/yayin/0368149b-e97c-4cbf-86d5-7e7fd4ed7175/demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonu-hematolojik-parametrelerinin-belirlenmesi",note:"Demirdöven Baraj Gölü tatlı su kefali popülasyonuna ait rota-özel akademik kayıttır."},
      {label:"Anadolu Ajansı - DSİ Demirdöven sulama bağlamı",url:"https://www.aa.com.tr/tr/gundem/demirdoven-baraji-100-bin-donum-araziyi-sulu-tarima-kavusturacak/2610022",note:"DSİ işletmesi ve Pasinler/Köprüköy sulama bağlamıyla baraj kimliğini destekler."},regulation
    ],
    note:"Pasinler/Tımar Çayı baraj kimliği, güncel genel kullanım bağlamı ve Demirdöven'e özgü tatlısu kefali akademik kaydı çaprazlandı.",
    access:"Baraj Pasinler çevresinde genel bölge olarak gösterilmelidir; belirli kıyı cebinin, park alanının veya işletme yolunun kamusal olduğu varsayılmaz.",
    risk:"Kafes yetiştiriciliği, sulama işletmesi ve kışın buzlanma vardır. Buz üstüne çıkış güvenli kabul edilmez; tesis ve kafes sahalarından uzak durulmalıdır."
  },
  {
    slug:"ulusal-van-zernek-baraj-golu",
    fish:["Sazan","Siraz"],
    sources:[
      {label:"Van İl Tarım - Zernek Baraj Gölü istihsal hakkı",url:"https://van.tarimorman.gov.tr/Duyuru/144/Zernek-Baraj-Golunun-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi",note:"Gürpınar sınırlarındaki 516 hektarlık Zernek Baraj Gölü için resmî stokta sazan ve siraz miktarlarını yayımlar; ticari kiralama amatör kıyı izni değildir."},
      {label:"Anadolu Ajansı - Zernek Barajı 2025",url:"https://www.aa.com.tr/tr/yasam/vandaki-zernek-baraji-buz-tuttu/3493513",note:"Zernek Barajı'nın Van/Gürpınar kimliğini, kışın buzlanmayı ve göldeki aktif alabalık kafes işletmelerini güncel olarak doğrular; kafes alabalığı doğal tür kanıtı sayılmaz."},
      {label:"BIBAD - Zernek Baraj Gölü zooplankton faunası",url:"https://bibad.gen.tr/index.php/bibad/article/view/164",note:"2007-2008 örneklemelerine dayanan rota-özel akademik ekosistem çalışmasıdır."},regulation
    ],
    note:"Gürpınar/Zernek rota kimliği, resmî sazan-siraz stok verisi ve akademik ekosistem çalışması çaprazlandı; kafes alabalığı doğal av türü olarak listeye eklenmedi.",
    access:"Gürpınar/Zernek yalnız genel rezervuar yaklaşımı olarak kullanılmalıdır. Ticari istihsal hakkı, kafes işletmesi veya işletme yolu kamusal amatör kıyı erişimi anlamına gelmez.",
    risk:"Aktif kafesler, ticari istihsal ekipmanı, su kotu ve kış buzlanması önemlidir. Buz üstüne çıkılmamalı; ağ, kafes ve işletme sahalarından uzak durulmalıdır."
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
      ...(item.fish?.length?{fish:item.fish}:{}),
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
