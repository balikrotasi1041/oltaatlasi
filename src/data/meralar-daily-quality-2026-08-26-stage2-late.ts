import type { EnrichedMera, ResearchSource, FishEvidence } from "./meralar-tumu-core";

export const promotedSlugs20260826Stage2Late = [
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-van-zernek-baraj-golu",
  "ulusal-bayburt-coruh-nehri-bayburt-hatti",
  "ulusal-balikesir-ikizcetepeler-baraj-golu",
  "ulusal-balikesir-saribeyler-baraj-golu",
  "ulusal-aydin-topcam-baraj-golu-aydin",
  "ulusal-aydin-kemer-baraj-golu",
] as const;

const source=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const fish=(name:string,scientificName:string|null,label:string,url:string,note:string):FishEvidence=>({name,scientificName,evidenceLevel:"Güçlü olasılık · rota özelinde bilimsel örnekleme/resmî stok kaydı",sourceLabel:label,sourceUrl:url,note,recordCount:null,distanceKm:null});
const osm=(q:string)=>`https://www.openstreetmap.org/search?query=${encodeURIComponent(q)}`;
const uniqueSources=(items:ResearchSource[])=>[...new Map(items.filter((x)=>x?.url).map((x)=>[x.url,x])).values()];
const uniqueFish=(items:FishEvidence[])=>[...new Map(items.filter((x)=>x?.name&&x?.sourceUrl).map((x)=>[`${x.name}|${x.sourceUrl}`,x])).values()];

const patches:Record<string,{sources:ResearchSource[];fishEvidence:FishEvidence[];status:string;summary:string}>={
  "ulusal-erzurum-demirdoven-baraj-golu":{
    sources:[
      source("DSİ 8. Bölge · Demirdöven Barajı","https://bolge08.dsi.gov.tr/Sayfa/Detay/854","Demirdöven Barajını Erzurum'da işletmedeki su yapısı olarak doğrular; kıyı giriş izni değildir."),
      source("Atatürk Üniversitesi · Demirdöven tatlısu kefali çalışması","https://avesis.atauni.edu.tr/yayin/a96f057f-690b-49d4-a0df-8ce637e90c7b/pasinler-demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonunun-bazi-biyokimyasal-ozelliklerinin-belirlenmesi","TR Dizin makalesi Demirdöven Baraj Gölü tatlısu kefali populasyonunu rota özelinde inceler."),
      source("OpenStreetMap · Demirdöven genel bölge",osm("Demirdöven Baraj Gölü Erzurum"),"Yalnız genel planlama konumudur; son yol, park ve kamusal kıyı geçişi değildir."),
    ],
    fishEvidence:[fish("Tatlısu Kefali","Squalius cephalus","Atatürk Üniversitesi Demirdöven çalışması","https://avesis.atauni.edu.tr/yayin/a96f057f-690b-49d4-a0df-8ce637e90c7b/pasinler-demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonunun-bazi-biyokimyasal-ozelliklerinin-belirlenmesi","Demirdöven Baraj Gölü populasyonu doğrudan bilimsel çalışmada incelenmiştir; güncel av garantisi değildir.")],
    status:"DSİ su kimliği ile rota özelindeki akademik tatlısu kefali kaydı çaprazlandı.",
    summary:"Demirdöven'de su kimliği ve tatlısu kefali olasılığı C eşiğini geçer. Baraj işletme alanı, son kıyı yolu ve giriş noktası saha teyitli değildir."
  },
  "ulusal-van-zernek-baraj-golu":{
    sources:[
      source("DergiPark · Van baraj göllerinde avlanabilir stok","https://dergipark.org.tr/tr/pub/iutbd/article/1218445","2019 saha avcılığında Zernek Baraj Gölünde sazan ve siraz stoklarını doğrudan hesaplar."),
      source("Tarım ve Orman Bakanlığı · hassas su kütleleri mevzuat eki","https://www.tarimorman.gov.tr/SYGM/Belgeler/mevzuatlar%202024/Y%C3%96NETMEL%C4%B0KLER/HASSAS%20SU%20K%C3%9CTLELER%C4%B0%20%C4%B0LE%20BU%20K%C3%9CTLELER%C4%B0%20ETK%C4%B0LEYEN%20ALANLARIN%20BEL%C4%B0RLENMES%C4%B0%20VE%20SU%20KAL%C4%B0TES%C4%B0N%C4%B0N%20%C4%B0Y%C4%B0LE%C5%9ET%C4%B0R%C4%B0LMES%C4%B0%20HAKKINDA%20Y%C3%96NETMEL%C4%B0K.pdf","Su yönetimi/havza mevzuatı bağlamı için resmî kaynak; amatör kıyı izni değildir."),
      source("OpenStreetMap · Zernek genel bölge",osm("Zernek Baraj Gölü Gürpınar Van"),"Genel konum destek katmanıdır; mikro erişim iddiası değildir."),
    ],
    fishEvidence:[
      fish("Sazan","Cyprinus carpio","DergiPark 2023 Zernek stok çalışması","https://dergipark.org.tr/tr/pub/iutbd/article/1218445","Haziran-Eylül 2019 saha operasyonlarında Zernek için sazan avlanabilir stoku hesaplanmıştır."),
      fish("Siraz","Capoeta capoeta","DergiPark 2023 Zernek stok çalışması","https://dergipark.org.tr/tr/pub/iutbd/article/1218445","Haziran-Eylül 2019 saha operasyonlarında Zernek için siraz avlanabilir stoku hesaplanmıştır."),
    ],
    status:"Zernek için rota özelindeki 2019 saha stok çalışması, resmî havza/su yönetimi katmanı ve genel konum birlikte değerlendirildi.",
    summary:"Sazan ve siraz doğrudan saha verisiyle desteklidir. Genel koordinat, baraj/HES işletme sınırı veya son kıyı girişi için izin anlamına gelmez."
  },
  "ulusal-bayburt-coruh-nehri-bayburt-hatti":{
    sources:[
      source("Tarım ve Orman/DKMP · Çoruh ve Aras balık tür zenginliği","https://www.tarimorman.gov.tr/DKMP/Belgeler/dkmp%20resmi%20istatistik/kutuphane/81.pdf","Üniversite araştırmacılarının Çoruh ana kolundaki istasyonlu balık çalışmasını resmî sempozyum kitabında yayımlar; Bayburt istasyonu içerir."),
      source("OpenStreetMap · Çoruh Bayburt şehir hattı",osm("Çoruh Nehri Bayburt"),"Nehir ile Bayburt yerleşim hattının genel konum ilişkisini destekler; belirli kıyının av izni değildir."),
    ],
    fishEvidence:[fish("Sazan","Cyprinus carpio","DKMP Biyolojik Çeşitlilik Sempozyumu · Çoruh çalışması","https://www.tarimorman.gov.tr/DKMP/Belgeler/dkmp%20resmi%20istatistik/kutuphane/81.pdf","Çoruh ana kolu çalışmasında Bayburt istasyonu balık örneklemeleri içinde sazan kaydı bildirilmiştir; tüm şehir kıyısında bulunma/av garantisi değildir.")],
    status:"Bayburt Çoruh hattı için resmî yayımlı akademik istasyon kaydı ve genel şehir-nehir konumu birlikte doğrulandı.",
    summary:"Tür kanıtı Bayburt istasyonu ölçeğindedir. Akarsu boyunca her kıyı, köprü altı veya taşkın tahkimatı kamusal/uygun av noktası sayılmaz."
  },
  "ulusal-balikesir-ikizcetepeler-baraj-golu":{
    sources:[
      source("Balıkesir İl Tarım · 2024 sazan balıklandırması","https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290","İkizcetepeler Baraj Gölüne 300.000 yavru sazan bırakıldığını rota özelinde bildirir."),
      source("DergiPark · İkizcetepeler balık faunası","https://dergipark.org.tr/en/pub/jabs/article/386869","2000 saha çalışmasında 156 örnek üzerinden 11 balık taksonu belirlenmiştir."),
      source("Balıkesir İl Tarım · İkizcetepeler istihsal şartnamesi","https://balikesir.tarimorman.gov.tr/Lists/Duyuru/Attachments/289/2%2BTeknik%2BSartname%2B%28Ikizcetepeler%29.pdf","Sazan, inci balığı/akbalık, gümüşi havuz balığı ve bıyıklı balık için avlanabilir stok verir; kiralama ve su alma yapısı çevresi kısıtlarını da gösterir."),
    ],
    fishEvidence:[
      fish("Sazan","Cyprinus carpio","Balıkesir İl Tarım 2024 balıklandırma","https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290","2024 resmî stok takviyesi tür olasılığını güçlendirir; amatör av garantisi değildir."),
      fish("Gümüşi Havuz Balığı","Carassius gibelio","Balıkesir İl Tarım İkizcetepeler teknik şartnamesi","https://balikesir.tarimorman.gov.tr/Lists/Duyuru/Attachments/289/2%2BTeknik%2BSartname%2B%28Ikizcetepeler%29.pdf","Resmî avlanabilir stok tablosunda tür rota özelinde yer alır."),
    ],
    status:"Güncel resmî balıklandırma ve istihsal verisi, bağımsız akademik fauna çalışmasıyla çaprazlandı.",
    summary:"Tür kanıtı güçlüdür; ticari istihsal kiralaması ve su alma yapısı çevresi kısıtları nedeniyle hiçbir mikro kıyı otomatik olarak amatör av alanı sayılmaz."
  },
  "ulusal-balikesir-saribeyler-baraj-golu":{
    sources:[
      source("Balıkesir İl Tarım · Sarıbeyler istihsal kiralaması","https://balikesir.tarimorman.gov.tr/Lists/Duyuru/Attachments/196/4.ilan-duyuru.pdf","Savaştepe Sarıbeyler Baraj Gölünün resmî istihsal/avlanma sahası kimliğini doğrular; amatör hakları ayrıca mevzuata tabidir."),
      source("Uluslararası Sosyal ve Ekonomik Bilimler Dergisi · Sarıbeyler çalışması","https://www.ijses.org/index.php/ijses/article/download/196/202","İl Tarım 2012 çalışma raporuna dayanarak Sarıbeyler avlak sahasında aynalı sazan bulunduğunu ve olta balıkçılığı rekreasyon potansiyelini aktarır."),
      source("OpenStreetMap · Sarıbeyler genel bölge",osm("Sarıbeyler Baraj Gölü Savaştepe Balıkesir"),"Yalnız genel planlama konumudur; kiralama sınırı veya kıyı geçişi değildir."),
    ],
    fishEvidence:[fish("Sazan","Cyprinus carpio","Sarıbeyler yöresel akademik çalışma / İl Tarım 2012 raporu aktarımı","https://www.ijses.org/index.php/ijses/article/download/196/202","Çalışma Sarıbeyler Baraj Gölü avlak sahasında aynalı sazan varlığını bildirir; güncel stok yoğunluğu ve amatör av izni ayrıca kontrol edilmelidir.")],
    status:"Resmî istihsal sahası kimliği, akademik/yerel kalkınma çalışmasındaki aynalı sazan kaydıyla çaprazlandı.",
    summary:"Sarıbeyler'de tür ve su kimliği yeterlidir; ticari istihsal hakkı amatör kıyı erişimiyle karıştırılmaz ve son saha durumu kontrol edilir."
  },
  "ulusal-aydin-topcam-baraj-golu-aydin":{
    sources:[
      source("EKAP/DSİ 21. Bölge · Topçam Barajı dipsavak onarımı","https://ekap.kik.gov.tr/EKAP/Ortak/BirBakistaIhale.aspx?IdareId=3aa832679fe7cafcbcdd0ab5a2e2525f7acf621ab7d56db81ca12f7747891610&IhaleId=d2d6d758e0ca8dfbb270fb3d8cbf40333ff6f24520d2c62d5824dbb138f7b5ef","2024 DSİ ihalesi Aydın Topçam Barajı su yapısı kimliğini güncel kurumsal kayıtta doğrular."),
      source("Ege JFAS · Topçam tatlısu kefali populasyonu","https://www.egejfas.org/tr/pub/article/68269","Haziran 1999-Haziran 2000 arasında Topçam Baraj Gölünden yakalanan 332 tatlısu kefalini inceler."),
      source("Aydın Valiliği · orman yangını tedbirleri","https://www.aydin.gov.tr/orman-yanginlarini-onleyici-tedbirler-20251","Topçam Barajı çevresindeki orman alanı ve dönemsel erişim/yangın tedbiri bağlamını gösterir; kıyı av izni değildir."),
    ],
    fishEvidence:[fish("Tatlısu Kefali","Squalius cephalus","Ege JFAS Topçam populasyon çalışması","https://www.egejfas.org/tr/pub/article/68269","Topçam Baraj Gölünden 332 bireylik doğrudan örnekleme vardır; tarihsel bilimsel kayıt güncel yakalama garantisi değildir.")],
    status:"Güncel DSİ su yapısı kaydı, rota özelindeki akademik tatlısu kefali örneklemesi ve orman/erişim risk bağlamıyla birleştirildi.",
    summary:"Topçam'da tür kanıtı güçlüdür. Orman yangını tedbirleri, işletme sınırları ve son kıyı yolu hareket günü kontrol edilmelidir."
  },
  "ulusal-aydin-kemer-baraj-golu":{
    sources:[
      source("Tarım ve Orman · hassas su kütleleri listesi","https://www.tarimorman.gov.tr/SYGM/Belgeler/mevzuatlar%202024/Y%C3%96NETMEL%C4%B0KLER/HASSAS%20SU%20K%C3%9CTLELER%C4%B0%20%C4%B0LE%20BU%20K%C3%9CTLELER%C4%B0%20ETK%C4%B0LEYEN%20ALANLARIN%20BEL%C4%B0RLENMES%C4%B0%20VE%20SU%20KAL%C4%B0TES%C4%B0N%C4%B0N%20%C4%B0Y%C4%B0LE%C5%9ET%C4%B0R%C4%B0LMES%C4%B0%20HAKKINDA%20Y%C3%96NETMEL%C4%B0K.pdf","Büyük Menderes havzasında Kemer Barajını Aydın su kütlesi olarak resmî listede tanımlar."),
      source("MKÜ AVESİS · Kemer rezervuarı ihtiyofaunası","https://avesis.mku.edu.tr/yayin/1ce2e959-85ca-4453-b329-ab9725a3590d/a-study-on-freshwater-ichthyofauna-of-kemer-reservoir-and-akcay-stream-of-the-aegean-region-turkey","2004-2006 örneklemelerinde Kemer rezervuarı/Akçay havzasında 15 balık türü tespit edildiğini bildirir."),
      source("AKÜ açık arşiv · Kemer balık ağır metal çalışması","https://acikerisim.aku.edu.tr/items/603eac3d-92d2-49b8-b6fc-482fbbeebf50","2007-2008 Kemer Baraj Gölü örneklerinde yayın ve Avrupa yılan balığını doğrudan kullanır."),
    ],
    fishEvidence:[
      fish("Yayın","Silurus glanis","AKÜ Kemer Baraj Gölü örnekleme çalışması","https://acikerisim.aku.edu.tr/items/603eac3d-92d2-49b8-b6fc-482fbbeebf50","Kemer Baraj Gölünden 2007-2008 arasında Silurus glanis örnekleri alınmıştır."),
      fish("Avrupa Yılan Balığı","Anguilla anguilla","AKÜ Kemer Baraj Gölü örnekleme çalışması","https://acikerisim.aku.edu.tr/items/603eac3d-92d2-49b8-b6fc-482fbbeebf50","Kemer Baraj Gölünden Anguilla anguilla örnekleri doğrudan çalışmada kullanılmıştır; koruma/mevzuat durumu ayrıca kontrol edilmelidir."),
    ],
    status:"Resmî su kütlesi kimliği iki bağımsız akademik rota/havza örneklemesiyle çaprazlandı.",
    summary:"Kemer'de balık varlığı bilimsel örneklemeyle güçlüdür. HES/işletme, kafes yetiştiriciliği ve koruma/mevzuat kısıtları mikro erişimden önce kontrol edilmelidir."
  },
};

export const applyDailyQualityStage2Late20260826=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promotedSlugs20260826Stage2Late){
    const route=routeMap.get(slug);
    if(!route)throw new Error(`26 Ağustos geç Aşama 2 hedefi bulunamadı: ${slug}`);
    if(route.confidence!=="D")throw new Error(`26 Ağustos geç Aşama 2 yalnız gerçek D→C+ sayar: ${slug} (${route.confidence})`);
    const patch=patches[slug];
    const sources=uniqueSources([...(route.sources||[]),...patch.sources]);
    const fishEvidence=uniqueFish([...(route.fishEvidence||[]),...patch.fishEvidence]);
    const hosts=new Set(sources.map((s)=>{try{return new URL(s.url).hostname.replace(/^www\./,"")}catch{return ""}}).filter(Boolean));
    if(hosts.size<2)throw new Error(`26 Ağustos geç Aşama 2 kaynak ailesi yetersiz: ${slug}`);
    if(!fishEvidence.length)throw new Error(`26 Ağustos geç Aşama 2 rota-özel tür kanıtı eksik: ${slug}`);
    routeMap.set(slug,{
      ...route,
      sources,
      fishEvidence,
      confidence:"C",
      locationPrecision:route.locationPrecision||"Genel bölge",
      navigationVerified:false,
      navigationNote:route.navigationNote||"Harita konumu yalnız genel planlama bölgesidir; kesin park, patika, kıyı cebi veya giriş izni değildir.",
      transport:route.transport||"Yalnız kamusal yol ağıyla genel su/nehir bölgesine yaklaşım planlanır; son yol, bariyer, mülkiyet, işletme ve kıyı güvenliği gündüz saha kontrolüyle doğrulanmalıdır.",
      researchStatus:patch.status,
      researchSummary:patch.summary,
      researchedAt:"2026-08-26",
      updatedAt:"2026-08-26",
      cautions:[...new Set([...(route.cautions||[]),"Genel konum ve tür kanıtı, belirli kıyının güncel amatör avcılığa açık veya güvenli olduğu anlamına gelmez; işletme/kiralama/koruma sınırları, saha tabelası ve 6/2 Tebliğ hareket günü kontrol edilmelidir."])],
      verification:`${route.verification||""}${route.verification?"\n\n":""}26 Ağustos 2026 kalite turu: su kimliği, genel konum, erişim/risk bağlamı ve rota özelindeki tür olasılığı en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi. Mikro erişim kesinleştirilmedi.`,
      confidenceProfile:{
        ...(route.confidenceProfile||{model:"evidence-v1" as const,identity:{level:"partial" as const,label:"Çok kaynaklı rota kimliği",note:"Su/nehir kimliği ve genel bölge kaynaklarla eşleşir."},legal:{level:"partial" as const,label:"Mevzuat kontrolü",note:"Genel 6/2 çerçevesi ve rota kısıtları ayrıca uygulanır."},access:{level:"partial" as const,label:"Genel erişim bağlamı",note:"Mikro kıyı erişimi saha teyitli değildir."},species:{level:"partial" as const,label:"Rota özelinde tür kanıtı",note:"Bilimsel/resmî kayıt tür olasılığıdır; av garantisi değildir."},field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Güncel bariyer, tabela, su seviyesi ve zemin yerinde kontrol edilir."},reviewedAt:"2026-08-26"}),
        overall:"C",
        species:{level:"partial",label:"Rota özelinde tür olasılığı kanıtlı",note:"Doğrudan bilimsel örnekleme veya resmî stok/istihsal kaydı vardır; av garantisi değildir."},
        reviewedAt:"2026-08-26",
      },
    });
  }
  return routeMap;
};
