import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"6/2 Numaralı Tebliğ ve güncel değişiklikler için resmî başvuru noktasıdır; rota özelindeki koruma, HES, işletme, mülkiyet ve saha kısıtları ayrıca uygulanır."
};

const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const promoted20260913Stage2=[
  "ulusal-bingol-murat-nehri-bingol-hatti",
  "ulusal-bingol-kigi-baraj-golu",
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ankara-500km-ankara-kizilca-goleti",
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
] as const;

const evidence:Record<string,{district:string;summary:string;verification:string;risk:string;sources:ResearchSource[]}>= {
  "ulusal-bingol-murat-nehri-bingol-hatti":{
    district:"Genç",
    summary:"Murat Nehri'nin Bingöl-Genç hattındaki su kimliği, rota özelindeki akademik balık örneklemeleri ve kamu coğrafya kaydıyla çaprazlandı. Mikro kıyı girişi doğrulanmış sayılmaz.",
    verification:"Bingöl İl Kültür ve Turizm Müdürlüğü Murat Nehri'ni ilin ana akarsularından biri olarak ve il içindeki uzunluğunu yaklaşık 96 km olarak tanımlar. Hakemli çalışmada Bingöl-Genç/Soğukpınar istasyonundan Murat Nehri balıkları doğrudan örneklenmiştir. Üniversite projesi ayrıca Murat Nehri balık ve zooplankton faunasını Bingöl özelinde araştırmıştır. Bu kanıtlar rota kimliği ve tür olasılığını C düzeyinde destekler; harita pini yalnız genel planlama bölgesidir.",
    risk:"Genç hattında akım, derin çukur, kum/çakıl ocağı etkisi, ani kıyı kırılması ve boğulma riski ciddidir. Suya giriş hedeflenmemeli; yalnız gündüz, açık ve kamusal olduğu yerinde görülen kıyı kesimleri değerlendirilmelidir.",
    sources:[
      {label:"Bingöl İl Kültür ve Turizm Müdürlüğü - Bingöl coğrafyası",url:"https://bingol.ktb.gov.tr/TR-181781/bingol.html",note:"Murat Nehri'ni Bingöl'ün en önemli akarsularından biri olarak tanımlar ve il içindeki yaklaşık uzunluğunu verir; mikro kıyı erişimi değildir."},
      {label:"DergiPark - Murat Nehri (Genç-Bingöl) Capoeta capoeta umbla çalışması",url:"https://dergipark.org.tr/en/pub/jist/article/104365",note:"Genç ilçesi Soğukpınar istasyonundan Murat Nehri'nde yakalanan balıkları doğrudan örnekler; türün rota hattındaki varlığı için akademik kanıttır."},
      {label:"Bilecik Şeyh Edebali Üniversitesi AVESİS - Murat Nehri balık ve zooplankton faunası projesi",url:"https://avesis.bilecik.edu.tr/proje/774c747a-3979-4df5-ae7f-3da433308225/murat-nehri-balik-ve-zooplankton-faunasinin-arastirilmasi-bingol",note:"Bingöl'deki Murat Nehri balık ve zooplankton faunasını doğrudan konu alan üniversite projesidir."}
    ]
  },
  "ulusal-bingol-kigi-baraj-golu":{
    district:"Kiğı",
    summary:"Kiğı Baraj Gölü'nün Kiğı/Peri Suyu üzerindeki resmî-kurumsal kimliği, akademik göl çalışması ve Perisuyu balık literatürüyle çaprazlandı; aktif HES nedeniyle yalnız genel bölge düzeyinde yayımlanır.",
    verification:"Bingöl İl Kültür ve Turizm Müdürlüğü Kiğı ilçesi sayfasında Kiğı Barajı'nı rota özelinde gösterir. Akademik çalışma Kiğı Baraj Gölü'nü doğrudan örnekleme alanı olarak doğrular. Perisuyu Çayı üzerindeki HES ve balık türleri çalışması Kiğı Barajı'nı zincir barajlar arasında sayarak balık topluluğu/habitat bağlamını destekler. C seviyesi yalnız masa başı doğrulamadır; HES gövdesi, enerji tesisi, servis yolları ve kapalı alanlar rota değildir.",
    risk:"Kiğı Barajı aktif HES sistemidir. Baraj gövdesi, enerji tesisi, derivasyon/servis yolları ve güvenlik alanlarına girilmez. Dik vadi, taş düşmesi, su kotu değişimi ve zayıf telefon kapsaması hareket günü ayrıca kontrol edilmelidir.",
    sources:[
      {label:"Bingöl İl Kültür ve Turizm Müdürlüğü - Kiğı İlçesi",url:"https://bingol.ktb.gov.tr/TR-286272/kigi-ilcesi.html",note:"Kiğı Barajı'nı ilçe içinde rota özelinde resmî görsel/coğrafi bağlamla doğrular; belirli kıyı cebine giriş izni değildir."},
      {label:"DergiPark - Kiğı Baraj Gölü zooplankton faunası",url:"https://dergipark.org.tr/tr/pub/egirdir/article/329124",note:"Kiğı Baraj Gölü'nü 2012-2013 döneminde doğrudan örnekleyen akademik çalışma; göl kimliği ve sucul ekosistem kanıtıdır."},
      {label:"DergiPark - Perisuyu Çayı HES'leri ve etkilenmesi muhtemel balık türleri",url:"https://dergipark.org.tr/tr/pub/dustad/article/1225091",note:"Kiğı Barajı'nı Perisuyu üzerindeki zincir barajlar arasında sayar ve barajların etkileyebileceği balık türlerini akademik olarak değerlendirir; av garantisi değildir."}
    ]
  },
  "ulusal-erzurum-demirdoven-baraj-golu":{
    district:"Pasinler",
    summary:"Demirdöven Barajı'nın Pasinler/Tımar Çayı üzerindeki resmî su yapısı kimliği, 2026 tarihli güncel saha haberi ve balıkçılık kullanım kaydıyla çaprazlandı. Pin yalnız genel su alanını temsil eder.",
    verification:"Erzurum resmî çevre raporundaki DSİ su varlığı kaydı Demirdöven'i baraj olarak doğrular. DSİ 8. Bölge Müdürünün açıklamasını aktaran Anadolu Ajansı barajın Pasinler Ovası sulamasındaki işlevini ve işletme bağlamını doğrular. 18 Şubat 2026 tarihli AA kaynaklı saha haberi barajın Pasinler'e yaklaşık 10 km uzaklıkta, Tımar Çayı üzerinde olduğunu ve barajda balıkçılık yapıldığını bildirir. Bu, güncel kullanım/tür bulunurluğu için destekleyici kanıttır; belirli kıyı cebinin av izni değildir.",
    risk:"Baraj işletme yapıları ve sulama tesisleri rota dışıdır. Kışın yoğun buzlanma ve göl yüzeyinin donması belgelenmiştir; buz üzerine çıkılmamalı, su kotu ve kıyı zemini hareket günü kontrol edilmelidir.",
    sources:[
      {label:"Erzurum 2023 Çevre Durum Raporu - DSİ su varlıkları",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/erzurum_-cdr2023-20240918101359.pdf",note:"Demirdöven Barajı'nı resmî su varlığı listesinde doğrular; mikro kıyı erişimi değildir."},
      {label:"Anadolu Ajansı - Demirdöven Barajı sulama işletmesi",url:"https://www.aa.com.tr/tr/gundem/demirdoven-baraji-100-bin-donum-araziyi-sulu-tarima-kavusturacak/2610022",note:"DSİ 8. Bölge açıklamasıyla Demirdöven Barajı'nın Pasinler Ovası sulama ve işletme bağlamını doğrular."},
      {label:"TRT Haber / AA - Demirdöven Barajı 2026 saha kaydı",url:"https://www.trthaber.com/foto-galeri/erzurumdaki-demirdoven-barajinin-yuzeyi-buz-tuttu/75766.html",note:"Pasinler'e yaklaşık 10 km, Tımar Çayı üzerindeki baraj kimliğini ve barajda balıkçılık yapıldığını 18 Şubat 2026 tarihli AA saha kaydıyla destekler."}
    ]
  },
  "ulusal-ardahan-kura-nehri-ardahan-hatti":{
    district:"Merkez",
    summary:"Kura Nehri'nin Ardahan hattındaki kimliği resmî il coğrafyasıyla, balık faunası ise Ardahan Üniversitesi çalışmasındaki doğrudan Kura örneklemeleriyle desteklenir. Mikro kıyı girişi yayımlanmaz.",
    verification:"Ardahan İl Kültür ve Turizm Müdürlüğü Kura'nın il içindeki güzergâhını ve Türkeşen Boğazı üzerinden Ardahan ovasına geçişini tanımlar. Ardahan Üniversitesi ihtiyofauna çalışması Kura Nehri ana kolunda ve bağlı istasyonlarda çok sayıda balık türünü doğrudan örnekler. Böylece su kimliği ve tür olasılığı iki bağımsız kaynak ailesiyle rota düzeyinde desteklenir. Genel nehir koridoru kamusal planlama bağlamıdır; özel parseller veya kapalı kıyılar açık kabul edilmez.",
    risk:"Kura'da akım hızı, soğuk su, dik/gevşek kıyı ve mevsimsel debi değişimi başlıca risklerdir. Suya girilmemeli; köprü, tarım parseli ve özel geçişler kamusal erişim sayılmamalıdır.",
    sources:[
      {label:"Ardahan İl Kültür ve Turizm Müdürlüğü - Kura Nehri",url:"https://ardahan.ktb.gov.tr/TR-55765/nehirler.html",note:"Kura Nehri'nin Ardahan ilindeki ana güzergâhını ve coğrafi bağlamını resmî olarak açıklar."},
      {label:"Ardahan Üniversitesi - Ardahan İli İhtiyofaunası",url:"https://www.ardahan.edu.tr/dosyalar/v_ders_icerigi/ardahan_calistayi/assets/ad/Ardahan%20Co%C4%9Frafya%20ve%20Turizmi/Cilt%203%20-%20B%C3%B6l%C3%BCm%2018-%20Ardahan%20%C4%B0li%20%C4%B0htiyofaunas%C4%B1.pdf",note:"Kura Nehri ana kolu ve kollarında doğrudan örneklenmiş balık türlerini akademik olarak raporlar; av garantisi değildir."},
      {label:"Ardahan 2024 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/ardahan_-cdr-2024-20250917092626.pdf",note:"Kura havzasının resmî çevresel ve su kaynağı bağlamını destekler; mikro erişim kanıtı değildir."}
    ]
  },
  "ankara-500km-ankara-kizilca-goleti":{
    district:"Çubuk",
    summary:"Kızılca Göleti'nin Çubuk/Kızılca'daki kimliği ve 2026'daki restorasyon sonrası yeniden su tutma durumu Ankara Büyükşehir Belediyesi kaydıyla; balık varlığı ise 2025'teki toplu balık ölümü saha kaydıyla doğrulanır.",
    verification:"Ankara Büyükşehir Belediyesi 13 Nisan 2026 tarihli açıklamasında Kızılca Göleti'nin Çubuk ilçesi Kızılca Mahallesi'nde bulunduğunu, 1967'de DSİ tarafından yapıldığını, Azman Deresi'nden yeniden su aldığını ve su seviyesinin yüzde 80'e ulaştığını bildirir. DHA'nın 1 Ağustos 2025 tarihli saha haberi aynı gölette su çekilmesi sonucu balık ölümlerini doğrudan kaydeder. Bu iki kaynak gölet kimliği, güncel su durumu ve balık bulunurluğu olasılığını destekler; güncel stok yoğunluğu veya av başarısı garanti edilmez.",
    risk:"Gölet 2025'te ciddi kuruma ve balık ölümü yaşamış, 2026'da yeniden su tutmuştur. Su seviyesi yeniden değişebilir; çamurlu taban, ani kıyı kırılması ve ekosistem hassasiyeti nedeniyle suya girilmemeli ve son kıyı durumu hareket günü kontrol edilmelidir.",
    sources:[
      {label:"Ankara Büyükşehir Belediyesi - Kızılca Göleti 2026 restorasyonu",url:"https://www.ankara.bel.tr/haberler/kuruma-riski-altindaki-kizilca-goleti-yeniden-suya-kavustu-18207",note:"Çubuk/Kızılca konumunu, DSİ geçmişini, restorasyonu ve 2026'da su seviyesinin yüzde 80'e ulaştığını resmî olarak bildirir."},
      {label:"DHA - Kızılca Göleti 2025 balık ölümleri",url:"https://www.dha.com.tr/yerel-haberler/ankara/kizilca-goletinin-suyu-cekildi-olen-baliklar-2691532",note:"1 Ağustos 2025'te göletteki su çekilmesi ve balık ölümlerini yerinde haberleştirir; balık varlığı için destekleyici saha kanıtıdır."}
    ]
  },
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu":{
    district:"Devrekâni",
    summary:"Çiğdem Göleti'nin Devrekâni/Örenbaşı-Çatak Deresi çevresindeki kimliği, balık türleri ve geçmiş sazan balıklandırması resmî ilçe kaydıyla; güncel ekosistem kırılganlığı ise bağımsız saha haberiyle desteklenir.",
    verification:"Devrekâni Kaymakamlığı Çiğdem Göleti'nin DSİ tarafından 1979'da Örenbaşı köyü civarında Çatak Deresi üzerinde kurulduğunu, in balığı ve tatlısu kefali tespit edildiğini ve sonradan pullu/aynalı sazan ekildiğini bildirir. Kastamonu İl Tarım kaydı 2018'de 20 bin aynalı/pullu sazan yavrusu bırakıldığını rota özelinde doğrular. Anadolu Ajansı 2020 kuraklığında göletteki on binlerce balığın su taşınarak kurtarıldığını bildirir. Bu üçlü paket kimlik, tür olasılığı ve risk bağlamını C düzeyinde destekler; mikro kıyı erişimi yine saha teyitli değildir.",
    risk:"Gölette geçmişte ağır kuraklık ve su seviyesi düşüşü belgelenmiştir. Yumuşak çamur, ani kıyı kırılması ve düşük su dönemleri dikkate alınmalı; suya giriş ve dipte yürüyüş hedeflenmemelidir.",
    sources:[
      {label:"Devrekâni Kaymakamlığı - Çiğdem Göleti",url:"https://www.devrekani.gov.tr/igdem-goleti",note:"Göletin DSİ yapımı, Örenbaşı/Çatak Deresi konumu ve tespit edilen balık türleri ile sonradan sazan ekimini resmî ilçe kaydıyla açıklar."},
      {label:"Kastamonu İl Tarım ve Orman Müdürlüğü - Çiğdem Göleti balıklandırması",url:"https://kastamonu.tarimorman.gov.tr/",note:"Mevcut rota kaynak paketinde 2018'de Çiğdem Göleti'ne 20.000 aynalı/pullu sazan bırakıldığını rota özelinde doğrulayan il müdürlüğü kaydı bulunur; ana kurum bağlantısı yedek başvuru noktasıdır."},
      {label:"Anadolu Ajansı - Çiğdem Göleti kuraklık ve balık kurtarma",url:"https://www.aa.com.tr/tr/turkiye/kuraklik-nedeniyle-su-seviyesi-dusen-goletteki-baliklar-tasima-suyla-kurtarildi/2089334",note:"2020'de Devrekâni Örenbaşı Çiğdem Göleti'nde su seviyesi düşüşü ve on binlerce balığın kurtarılmasını saha haberiyle doğrular."}
    ]
  }
};

const profile=(slug:string):EnrichedMera["confidenceProfile"]=>({
  model:"evidence-v1",
  overall:"C",
  identity:{level:"strong",label:"Rota özelinde kimlik kanıtı",note:"Ad, il/ilçe ve su gövdesi rota özelindeki kamu/akademik kaynaklarla eşleşir."},
  legal:{level:"partial",label:"Güncel mevzuat + saha kısıtları",note:"6/2 Tebliğ genel çerçevesi uygulanır; HES, işletme, koruma, mülkiyet ve yerel saha kuralları ayrıca kontrol edilir."},
  access:{level:"partial",label:"Genel erişim bağlamı",note:"Genel yerleşim/su koridoru planlama için doğrulanmıştır; son park, yol ve mikro kıyı girişinin kamusal olduğu varsayılmaz."},
  species:{level:"partial",label:"Rota özelinde tür/habitat olasılığı",note:"Rota özelindeki balıklandırma, örnekleme veya saha kayıtları balık bulunma olasılığını destekler; güncel av başarısı veya yasal av boyu garantisi değildir."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel riskler hareket günü yerinde kontrol edilmelidir."},
  reviewedAt:"2026-09-13",
});

export const applyDailyQuality20260913Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260913Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`13 Eylül Stage 2 hedefi bulunamadı: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`13 Eylül Stage 2 yalnız gerçek D→C yükseliş sayar: ${slug} (${previous.confidence})`);
    const note=evidence[slug];
    if(!note)throw new Error(`13 Eylül Stage 2 kanıt paketi eksik: ${slug}`);
    routeMap.set(slug,{
      ...previous,
      district:note.district,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      updatedAt:"2026-09-13",
      summary:note.summary,
      verification:note.verification,
      navigationNote:"Gösterilen konum yalnız genel planlama bölgesidir. Son araç/yaya yaklaşımı, kamusal geçiş, bariyer, özel mülkiyet, işletme/güvenlik sınırı ve saha tabelaları hareket günü doğrulanmalıdır.",
      transport:"İlçe/yerleşim merkezinden genel su koridoruna kamusal yol ağı üzerinden yaklaşım planlanabilir; son park veya kıyı yolu uzaktan kesinleştirilmiş sayılmaz.",
      cautions:[...new Set([...(previous.cautions||[]),note.risk,"Tür olasılığı av garantisi değildir; 6/2 Tebliğ, il bazlı kararlar ve daha sıkı saha kuralları üstündür."])],
      sources:uniq([...(previous.sources||[]),...note.sources,teblig]),
      confidenceProfile:profile(slug),
      researchStatus:"completed",
      researchSummary:note.summary,
    });
  }
  return routeMap;
};
