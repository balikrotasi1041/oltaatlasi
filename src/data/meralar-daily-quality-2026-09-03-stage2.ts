import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 amatör avcılık çerçevesi; il/ilçe, tesis, kiralama, koruma ve saha kısıtları ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

type Upgrade={
  sources:ResearchSource[];
  fish?:string[];
  district?:string;
  summary:string;
  risk:string;
};

export const promoted20260903Stage2=[
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ulusal-nigde-gumusler-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-eskisehir-porsuk-baraj-golu",
  "ulusal-agri-balik-golu",
  "ulusal-bitlis-van-golu-tatvan-kiyisi",
  "ulusal-ardahan-aktas-golu",
  "ulusal-ardahan-posof-cayi",
  "ankara-500km-bolu-buyukgol",
  "ankara-500km-bolu-deringol",
  "ankara-500km-yozgat-gelingullu-baraj-golu",
] as const;

const evidence:Record<string,Upgrade>={
  "ankara-500km-adiyaman-sirimtas-baraj-golu":{
    sources:[
      {label:"TAGEM Elazığ Su Ürünleri - Sırımtaş stok takviyesi",url:"https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Haber/804/Tagem-Sahada-Sirimtas-Baraj-Golundeyiz%E2%80%A6",note:"Sincik ilçesindeki Sırımtaş Baraj Gölüne yavru siraz bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."},
      {label:"Türk Hidrolik Dergisi - Sırımtaş Barajı ve HES",url:"https://dergipark.org.tr/tr/pub/turhidder/article/853887",note:"Sırımtaş Barajı/HES'in Adıyaman-Sincik kimliğini ve aktif enerji tesisi bağlamını akademik aileden doğrular."},
      {label:"GAP İdaresi - enerji projeleri",url:"https://www.gap.gov.tr/sayfa/gap-hakkinda/gap-genel-gerceklesmeler/",note:"Sırımtaş HES'in işletmede olduğunu kurumsal olarak doğrular; tesis güvenlik sınırları nedeniyle mikro kıyı girişi varsayılmaz."},
    ],
    summary:"Sırımtaş için rota kimliği, siraz stok takviyesi ve aktif HES riski ayrı kaynak aileleriyle doğrulandı.",
    risk:"Sırımtaş aktif HES olduğundan baraj işletme/güvenlik alanları kıyı rotası sayılmaz; genel su konumu yalnız planlama başlangıcıdır."
  },
  "ankara-500km-adiyaman-karahuyuk-goleti":{
    sources:[
      {label:"Adıyaman İl Tarım - 2024 balıklandırması",url:"https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz",note:"Karahöyük Göletine sazan yavrusu bırakıldığını rota özelinde doğrular; tür olasılığı kanıtıdır, av garantisi değildir."},
      {label:"DSİ 20. Bölge - Adıyaman göletleri",url:"https://bolge20.dsi.gov.tr/Sayfa/Detay/1123",note:"Karahöyük Göletinin 1997'de işletmeye alınmış sulama göleti kimliğini doğrular."},
      {label:"Adıyaman 2024 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/adiyaman_-cdr2024-20241105080342.pdf",note:"DSİ 2024 verisiyle Karahöyük Göletinin sulama rezervuarı kimliğini, hacmini ve kullanım amacını bağımsız kurumsal raporda tekrar doğrular."},
    ],
    fish:["Sazan"],
    summary:"Karahöyük için sulama göleti kimliği ve sazan balıklandırması resmî kaynaklarla çaprazlandı; mikro parsel ve servis yolu açıklığı varsayılmadı.",
    risk:"Karahöyük aktif sulama göletidir; tarla/parsel, servis yolu ve tesis sınırlarının kamusal olduğu varsayılmaz."
  },
  "ulusal-nigde-gumusler-baraj-golu":{
    sources:[
      {label:"Niğde İl Tarım - 2022 balıklandırma programı",url:"https://nigde.tarimorman.gov.tr/Haber/518/",note:"Gümüşler Barajında pullu sazan balıklandırmasını ve kurallı/sürdürülebilir avcılık bağlamını rota özelinde doğrular."},
      {label:"Niğde İl Kültür ve Turizm - Niğde coğrafyası",url:"https://nigde.ktb.gov.tr/TR-214997/nigde.html",note:"Gümüşler Barajının Gümüşler çevresini sulamak için kurulmuş baraj kimliğini yerel kurumsal kaynaktan doğrular."},
      {label:"Niğde çevre raporu - Gümüşler tür kaydı",url:"https://webdosya.csb.gov.tr/db/ced/editordosya/Nigde2015.pdf",note:"Gümüşler Barajında aynalı sazan bulunduğunu il çevre raporunda kaydeder; tarihsel kayıt güncel av garantisi değildir."},
    ],
    fish:["Sazan"],
    summary:"Gümüşler için sulama barajı kimliği ve rota özelindeki sazan kayıtları resmî kaynak aileleriyle eşleştirildi.",
    risk:"Gümüşler aktif sulama barajıdır; su kotu, derivasyon/işletme yapıları ve özel parseller son yaklaşımda ayrıca kontrol edilir."
  },
  "ulusal-sivas-delice-baraj-golu-sivas":{
    sources:[
      {label:"Sivas İl Tarım - 2015 balıklandırma",url:"https://sivas.tarimorman.gov.tr/Haber/105/Gol-Ve-Goletlerde-Baliklandirma-Calismalari-Devam-Ediyor",note:"İmranlı Delice Göletine 3.000 yavru sazan bırakıldığını rota özelinde doğrular ve balıklandırmanın yöre halkının iç sulardan istifadesi amacı taşıdığını belirtir."},
      {label:"Sivas Ekspres - İmranlı Delice Göleti sulama yatırımı",url:"https://www.sivasekspres.com/haber/sivas-tarimina-42-milyonluk-yatirim-74567.html",note:"2025'te İmranlı Delice Göletinin aktif sulama tesisi olduğunu ve 281 hektarlık şebekenin yenilendiğini yerel destekleyici kaynak olarak doğrular."},
      {label:"Sivas Ekspres - 2025 Delice balıklandırması",url:"https://www.sivasekspres.com/haber/sivasta-yuzlerce-balik-suyla-bulustu-80023.html",note:"2025'te Delice Göleti ve Kızılırmak Barajına yavru sazan bırakıldığını bildirir; yerel destekleyici kanıttır."},
    ],
    fish:["Sazan"],
    summary:"Delice için resmî sazan balıklandırması, aktif sulama tesisi ve 2025 destekleyici balıklandırma kaydı çaprazlandı.",
    risk:"Delice aktif sulama göletidir; kırsal yaban hayatı, su kotu, yumuşak kıyı ve işletme şebekesi riskleri hareket günü ayrıca kontrol edilir."
  },
  "ulusal-eskisehir-porsuk-baraj-golu":{
    sources:[
      {label:"Kütahya İl Kültür ve Turizm - Sportif Olta Balıkçılığı",url:"https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",note:"Porsuk Barajında sportif amaçlı olta balıkçılığı yapıldığını; sazan, aynalı sazan, kızılkanat, sargın ve yayının en çok avlanan balıklar arasında olduğunu resmî olarak bildirir."},
      {label:"DergiPark - Porsuk Baraj Gölü Rutilus rutilus çalışması",url:"https://dergipark.org.tr/en/pub/biodicon/article/765597",note:"Porsuk Baraj Gölünden 2011'de doğrudan örneklenen Rutilus rutilus ile rota özelindeki balık varlığını ve tarihsel kirlilik riskini bilimsel olarak doğrular."},
    ],
    fish:["Sazan","Yayın"],
    summary:"Porsuk için resmî sportif olta kullanımı ve tür kaydı, rota özelindeki bilimsel balık çalışmasıyla çaprazlandı; kirlilik ve su kullanım riskleri ayrıca korunur.",
    risk:"Porsuk Barajında su kalitesi ve farklı su kullanım amaçları dönemsel önem taşır; görünür kirlilik, su seviyesi ve işletme uyarıları hareket günü kontrol edilmelidir."
  },
  "ulusal-agri-balik-golu":{
    sources:[
      {label:"Ağrı İl Kültür ve Turizm - Balık Gölü",url:"https://agri.ktb.gov.tr/TR-122248/balik-golu.html",note:"Balık Gölünün Taşlıçay ve Doğubayazıt sınırlarındaki kimliğini, içme/kullanma suyu koruma statüsünü, kırmızı benekli alabalık varlığını ve çevre ulaşım bağlamını resmî olarak bildirir."},
      {label:"DergiPark - Ağrı Balık Gölü Balıkçılığının Genel Durumu",url:"https://dergipark.org.tr/tr/pub/jaes/article/793828",note:"2019 saha verisine dayalı çalışma Balık Gölünde fiilî balıkçılık faaliyetini doğrudan inceler; güncel amatör av izni anlamına gelmez."},
    ],
    fish:["Alabalık"],
    summary:"Balık Gölü için resmî kimlik, ulaşım ve kırmızı benekli alabalık kaydı bilimsel saha-balıklılık çalışmasıyla birlikte değerlendirildi; koruma statüsü nedeniyle mikro kıyı serbestliği çıkarılmadı.",
    risk:"Balık Gölü içme ve kullanma suyu koruma sahasıdır ve önemli kuş alanıdır; yalnız resmî olarak açık kalan genel kullanım bağlamı esas alınmalı, koruma ve kıyı kısıtları hareket günü teyit edilmelidir."
  },
  "ulusal-bitlis-van-golu-tatvan-kiyisi":{
    sources:[
      {label:"Bitlis İl Kültür ve Turizm - Sportif Etkinlikler",url:"https://bitlis.ktb.gov.tr/TR-56232/sportif-etkinlikler.html",note:"Van Gölünü Bitlis'te balık avcılığı açısından öne çıkan turistik değerlerden biri olarak resmî kayda alır."},
      {label:"Bitlis İl Kültür ve Turizm - Göller",url:"https://bitlis.ktb.gov.tr/TR-56211/goller.html",note:"Tatvan'ın Van Gölü kıyısında kurulu olduğunu ve kıyılarda plaj, konaklama ve yeme-içme tesisleri bulunduğunu genel kamusal erişim bağlamı için doğrular; belirli olta cebini garanti etmez."},
      {label:"DergiPark - Van Gölü inci kefali balıkçılık yönetimi",url:"https://dergipark.org.tr/tr/pub/dosder/article/1024412",note:"Van Gölündeki inci kefalinin göle özgü varlığını, üreme göçünü ve koruma/balıkçılık yönetimi bağlamını bilimsel olarak açıklar."},
    ],
    fish:["İnci Kefali"],
    district:"Tatvan",
    summary:"Tatvan Van Gölü kıyısı için resmî kıyı/erişim bağlamı ve balıkçılık kullanımı, Van Gölü inci kefali bilimsel literatürüyle çaprazlandı.",
    risk:"İnci kefalinin üreme göçü dönemindeki koruma hükümleri ve güncel av yasakları üstündür; Tatvan kıyısındaki plaj, iskele ve işletme alanlarının tamamı olta alanı sayılmaz."
  },
  "ulusal-ardahan-aktas-golu":{
    sources:[
      {label:"Kültür Portalı - Ardahan sportif olta balıkçılığı",url:"https://www.kulturportali.gov.tr/turkiye/ardahan/turizmaktiviteleri/cildir-golu",note:"Aktaş Gölünde sportif olta balıkçılığı yapılabildiğini resmî turizm kaynağı açıkça belirtir."},
      {label:"Ardahan Valiliği - Aktaş ve Çıldır Gölü Çalıştayı",url:"https://www.ardahan.gov.tr/calistay280919",note:"Aktaş Gölünde sportif olta balıkçılığı yapıldığını, 1985'te sazan yavrusu bırakıldığını ve sınır/koruma/kaçak avcılık hassasiyetlerini resmî olarak bildirir."},
    ],
    fish:["Sazan"],
    summary:"Aktaş için resmî sportif olta kullanımı ve tarihsel sazan balıklandırması doğrulandı; mevcut bilimsel/GBIF tür katmanı ile birlikte sınır ve sulak alan hassasiyeti korunarak C eşiği karşılandı.",
    risk:"Aktaş sınır gölü ve hassas sulak alandır; devlet sınırı, korunan alan ve kara avcılığı kısıtları ile güncel saha talimatları balıkçılık planından önce gelir."
  },
  "ulusal-ardahan-posof-cayi":{
    sources:[
      {label:"Kültür Portalı - Ardahan sportif olta balıkçılığı",url:"https://www.kulturportali.gov.tr/turkiye/ardahan/turizmaktiviteleri/cildir-golu",note:"Posof Çayı'nda sportif olta balıkçılığı yapılabildiğini resmî turizm kaynağı açıkça belirtir."},
    ],
    summary:"Posof Çayı için resmî sportif olta kullanımı, kayıtta zaten bulunan akademik/GBIF tür katmanı ve genel akarsu kimliğiyle birlikte değerlendirildi; mikro kıyı ve özel parsel erişimi doğrulanmış sayılmadı.",
    risk:"Posof Çayı akarsu koridorunda debi, taşkın, dik/yumuşak kıyı ve özel parsel sınırları mevsime göre değişebilir; son yaklaşım gündüz ve saha tabelalarıyla doğrulanmalıdır."
  },
  "ankara-500km-bolu-buyukgol":{
    sources:[
      {label:"Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı",url:"https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html",note:"Büyükgöl ve Deringöl'de mayıs-eylül döneminde ücret karşılığı sportif olta balıkçılığı yapılabildiğini, göllerde göl alası ve gökkuşağı alabalığı bulunduğunu resmî olarak bildirir."},
      {label:"MEB Okul Dışı Öğrenme - Yedigöller Milli Parkı",url:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866",note:"Yedigöller'in Bolu Merkez kimliğini, Büyükgöl'ün konumunu ve alabalık yetiştiriciliği geçmişini bağımsız kamu kaynağıyla doğrular."},
      {label:"Bolu Federasyonu - Yedigöller Milli Parkı",url:"https://www.bolufederasyonu.org.tr/Yedig%C3%B6llerMilliPark%C4%B1/tabid/20065/crc32",note:"Göllerin birbiriyle ilişkisini ve Büyükgöl alabalık geçmişini yerel destekleyici kaynak olarak tekrarlar."},
    ],
    fish:["Alabalık"],
    summary:"Büyükgöl için milli park içindeki resmî dönemsel sportif olta kullanımı, alabalık tür kaydı ve yerel/kurumsal kimlik çaprazlandı.",
    risk:"Yedigöller Milli Parkı koruma ve ücret/dönem kuralları üstündür; yalnız izin verilen dönem ve alanlarda, güncel park talimatlarıyla hareket edilmelidir."
  },
  "ankara-500km-bolu-deringol":{
    sources:[
      {label:"Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı",url:"https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html",note:"Büyükgöl ve Deringöl'de mayıs-eylül döneminde ücret karşılığı sportif olta balıkçılığı yapılabildiğini, göllerde göl alası ve gökkuşağı alabalığı bulunduğunu resmî olarak bildirir."},
      {label:"MEB Okul Dışı Öğrenme - Yedigöller Milli Parkı",url:"https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866",note:"Yedigöller'in Bolu Merkez kimliğini ve Deringöl-Büyükgöl bağlantısını kurumsal kaynakla doğrular."},
      {label:"Bolu Federasyonu - Yedigöller Milli Parkı",url:"https://www.bolufederasyonu.org.tr/Yedig%C3%B6llerMilliPark%C4%B1/tabid/20065/crc32",note:"Deringöl ile Büyükgöl'ün fiziksel ilişkisini yerel destekleyici kaynak olarak doğrular."},
    ],
    fish:["Alabalık"],
    summary:"Deringöl için milli park içindeki resmî dönemsel sportif olta kullanımı ve alabalık kaydı, bağımsız kurumsal/yerel park bilgisiyle çaprazlandı.",
    risk:"Yedigöller Milli Parkı koruma ve ücret/dönem kuralları üstündür; Deringöl kıyısında yalnız güncel olarak izin verilen kesim ve saatler kullanılmalıdır."
  },
  "ankara-500km-yozgat-gelingullu-baraj-golu":{
    sources:[
      {label:"Yozgat İl Tarım - Gelingüllü ticari avlak kiralama ilanı",url:"https://yozgat.tarimorman.gov.tr/Duyuru/389/",note:"Gelingüllü Baraj Gölünün Yozgat Merkez sınırlarında olduğunu ve sazan, sudak, tatlısu levreği için resmî stok miktarlarını doğrular; ticari kiralama amatör kıyı hakkı değildir."},
      {label:"Yozgat Valiliği - Kültür ve Turizm",url:"https://www.yozgat.gov.tr/kultur-ve-turizm",note:"Gelingüllü Barajını Yozgat'ın spor, dinlence ve piknik alanları arasında sayarak genel rekreasyon erişim bağlamını destekler; belirli kıyı cebini garanti etmez."},
    ],
    fish:["Sazan","Sudak","Tatlı Su Levreği"],
    district:"Yozgat_Merkez İlçe",
    summary:"Gelingüllü için resmî avlak/stok kaydı ile Valiliğin genel rekreasyon kullanımı çaprazlandı; ticari kiralama ile amatör kıyı erişimi birbirine karıştırılmadı ve ilçe bilgisi resmî ilana göre Yozgat Merkez olarak düzeltildi.",
    risk:"Gelingüllü ticari istihsal hakkı kiralanan bir avlak sahasıdır; ticari faaliyet, ağ sahası, işletme/tesis alanı ve güncel amatör avcılık kısıtları hareket günü ayrıca kontrol edilmelidir."
  },
};

const profile=(note:string)=>({
  model:"evidence-v1" as const,overall:"C" as const,
  identity:{level:"strong" as const,label:"Rota kimliği",note:"Su varlığı, il/ilçe veya genel rota kimliği rota özelindeki resmî/kurumsal kaynaklarla eşleşir."},
  legal:{level:"partial" as const,label:"Güncel mevzuat ve alan kısıtları",note:"6/2 genel çerçevesi ile rota özelindeki koruma, işletme veya kullanım kayıtları birlikte değerlendirilir; belirli kıyının sürekli açık olduğu varsayılmaz."},
  access:{level:"partial" as const,label:"Genel kamusal/rekreasyon erişim bağlamı",note:"Resmî veya kurumsal kaynak genel ziyaret, rekreasyon ya da balıkçılık kullanımını destekler; son park, özel parsel ve mikro kıyı girişi saha teyitli değildir."},
  species:{level:"strong" as const,label:"Rota özelinde tür olasılığı",note:"Rota özelindeki resmî balıklandırma, stok, avcılık veya bilimsel tür kaydı tür bulunma olasılığını destekler; av başarısını garanti etmez."},
  field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Su kotu, kıyı zemini, bariyer, tabela ve güvenlik durumu hareket günü yerinde kontrol edilmelidir."},
  reviewedAt:"2026-09-03",
});

export const applyDailyQuality20260903Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260903Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-03 Stage2 hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-03 günlük kotaya yalnız gerçek D→C yazılır: ${slug} (${previous.confidence})`);
    const data=evidence[slug];
    if(!data||data.sources.length<1)throw new Error(`2026-09-03 Stage2 kanıt paketi eksik: ${slug}`);
    const sources=uniq([...(previous.sources||[]),...data.sources,teblig]);
    const fish=data.fish?.length?data.fish:previous.fish;
    if(!fish?.length)throw new Error(`2026-09-03 Stage2 tür kanıtı yok: ${slug}`);
    routeMap.set(slug,{
      ...previous,
      district:data.district||previous.district,
      fish,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:"Harita pini veya ad araması genel su/rota planlama konumudur; kesin araç girişi, park, özel parsel sınırı veya olta cebi değildir.",
      sources,
      researchStatus:"2026-09-03 Aşama 2: rota kimliği, tür olasılığı, genel kullanım/erişim bağlamı, mevzuat ve riskler çoklu kaynak aileleriyle yeniden değerlendirildi.",
      researchSummary:data.summary,
      verification:`3 Eylül 2026: ${previous.name} D seviyesinden C'ye yalnız rota kimliği, tür olasılığı ve genel kullanım/erişim bağlamı kaynaklarla yeterince güçlendiği için yükseltildi. Mikro kıyı, park ve özel parsel erişimi saha teyitli değildir.`,
      researchedAt:"2026-09-03",
      updatedAt:"2026-09-03",
      confidenceProfile:profile(data.risk),
      cautions:[...new Set([...(previous.cautions||[]),data.risk,"Harita, geçmiş balıklandırma veya stok kaydı tek başına güncel av izni, güvenli kıyı girişi ya da av garantisi değildir."])],
    });
  }
  return routeMap;
};
