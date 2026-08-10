const rulesSource={
  label:"Tarım ve Orman Bakanlığı – 6/2 amatör su ürünleri avcılığı kuralları",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"2024-2028 amatör av döneminin genel çerçevesidir; il, tür, dönem, kiralama, koruma alanı ve saha tabelası ayrıca uygulanır."
};
const amendmentSource={
  label:"Tarım ve Orman Bakanlığı – 6/2 Tebliğ değişikliği",
  url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",
  note:"6/2 Tebliğde yapılan değişiklikler için resmî başvuru kaynağıdır; hareket günü daha yeni düzenleme olup olmadığı yeniden kontrol edilmelidir."
};
const genericMethods=["Mevzuata uygun kıyı oltası"];
const carpBaits=["Mısır","Hamur","Solucan"];
const make=(data)=>({
  researchedAt:"2026-08-10",
  researchStatus:data.researchStatus||"Rota özelinde resmî ve bilimsel kaynaklarla derinleştirilmiş masa başı doğrulama",
  researchSummary:data.researchSummary,
  fish:data.fish,
  fishEvidence:data.fishEvidence,
  methods:data.methods||genericMethods,
  baits:data.baits||carpBaits,
  camping:data.camping||"Kontrol edilmeli",
  vehicleAccess:data.vehicleAccess||"Orta",
  amenities:data.amenities,
  cautions:data.cautions,
  accommodationOptions:data.accommodationOptions,
  accessEvidence:data.accessEvidence,
  seasonalNotes:data.seasonalNotes,
  planningNotes:data.planningNotes,
  transport:data.transport,
  crowdNote:data.crowdNote,
  sources:[...data.sources,rulesSource,amendmentSource],
  fieldVerification:false,
  strongOfficialSource:true,
  officialAmateurFishingUseEvidence:Boolean(data.officialAmateurFishingUseEvidence),
  legalAccessUnclear:false,
  navigationVerified:false,
  replaceAutomaticFish:true,
  replaceAutomaticSources:true
});

export const ulusalGuvenIyilestirmeleri20260810Batch2={
  "ulusal-bolu-golkoy-baraj-golu":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Gölköy Baraj Gölü için Bolu Valiliği güncel rota sayfası şehir merkezine yaklaşık 10 km mesafeyi, ulaşım kolaylığını ve gölün olta ile balık avlamak isteyenlerce yoğun kullanıldığını kaydeder. Bolu İl Tarım ve Orman Müdürlüğünün 2018 ve 2019 sportif sazan yarışması kayıtları Gölköy'de rota-özel amatör/sportif olta kullanımını ve sazan yakalanmasını doğrudan doğrular. 2026 il av yasağı ile Gölköy'ün içme suyu kaynağı oluşuna ilişkin Su Yönetimi Genel Müdürlüğü kaydı birlikte değerlendirildi. Bu kanıt paketi resmî amatör kullanım eşiğini karşılar; saha teyidi olmadığı için A değildir ve her kıyının açık olduğu sonucu çıkarılmaz.",
    fish:["Sazan"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî sportif av kaydı",sourceLabel:"Bolu İl Tarım – Gölköy 2018 sportif sazan yarışması",sourceUrl:"https://bolu.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=779",note:"Gölköy Baraj Gölü'nde 45 pullu/aynalı sazanın olta ile yakalanıp ölçüm sonrası geri bırakıldığını bildirir; güncel av başarısı garantisi değildir."}
    ],
    vehicleAccess:"Kolay",
    amenities:["Bolu şehir merkezine yakınlık","Günübirlik piknik kullanımı","Yakın kent hizmetleri"],
    cautions:["Gölköy Bolu'nun içme suyu kaynaklarından biridir; su alma ve işletme alanlarına girilmemelidir.","2023 su kalitesi eylem planı ve geçmiş balık ölümü kaydı, su görünümü ve tüketim konusunda temkinli olmayı gerektirir.","Baraj gövdesi, DSİ tesisleri, tabela ve bariyerlerle sınırlandırılmış alanlar rota dışıdır.","2026 Bolu kapalı dönem kuralları ve daha yeni il duyuruları hareket günü kontrol edilmelidir."],
    accommodationOptions:[{name:"Bolu şehir merkezi",type:"Kent merkezi / konaklama araştırma tabanı",distanceKm:10,sourceUrl:"https://www.bolu.gov.tr/golkoy-baraj-golu",note:"Valilik Gölköy'ü Bolu'nun yaklaşık 10 km batısında tanımlar; tesis seçimi ve güncel uygunluk ayrıca araştırılmalıdır."}],
    accessEvidence:[
      {label:"Bolu Valiliği – Gölköy rota erişim bağlamı",value:"Bolu'nun yaklaşık 10 km batısında ve şehir merkezine yakın, ulaşımı kolay bir baraj gölüdür.",sourceUrl:"https://www.bolu.gov.tr/golkoy-baraj-golu",note:"Valilik aynı sayfada piknik ve olta amaçlı yoğun kullanımı kaydeder; bu bilgi belirli bir kıyı cebine giriş garantisi değildir."},
      {label:"Bolu İl Tarım – resmî sportif kullanım",value:"Gölköy'de Bakanlık personeli gözleminde sportif sazan yarışması yapılmıştır.",sourceUrl:"https://bolu.tarimorman.gov.tr/Haber/922/Golkoy-Sportif-Sazan-Baligi-Yakalama-Yarismasina-Ev-Sahipligi-Yapti",note:"Etkinlik rota düzeyinde sportif olta kullanımını doğrular; güncel yerel bariyer ve koruma tedbirleri ayrıca geçerlidir."}
    ],
    seasonalNotes:["Bolu İl Tarımın 30 Mart 2026 duyurusunda sazan, kadife, siraz, yayın ve tatlısu kefali için 15 Mart-15 Haziran 2026 zaman yasağı bildirilmiştir; sonraki yıllarda güncel il duyurusu esas alınmalıdır.","Sazan rota-özel resmî yarışma kaydıyla doğrulanmıştır; geçmiş yarışma verisi güncel kıyı yoğunluğu veya av garantisi değildir."],
    planningNotes:["İlk planlama noktası olarak barajın genel çevresini kullan; içme suyu tesisleri, DSİ servis alanları ve kapalı cepleri hedefleme.","Kıyı su seviyesi sulama ve yağışla değişebileceğinden çamur, ani derinleşme ve kaygan şev riski yerinde kontrol edilmelidir.","Tüketim düşünülüyorsa güncel su kalitesi ve kurum uyarıları ayrıca kontrol edilmelidir."],
    transport:"Bolu Valiliği Gölköy'ü kent merkezinin yaklaşık 10 km batısında ve ulaşımı kolay bir rekreasyon suyu olarak tanımlar. Buna rağmen yayımlanan pin yalnız genel baraj konumudur; son araç yaklaşımı, park, bariyer ve kamusal kıyı girişi saha tabelalarıyla doğrulanmalıdır.",
    crowdNote:"Valilik yaz aylarında piknik ve olta amaçlı yoğun kullanımı özellikle belirtir. Kalabalık saatlerde güvenli atış koridoru yoksa daha sakin ve açık kullanıma izin verilen başka kıyı bölümüne geçilmelidir.",
    sources:[
      {label:"Bolu Valiliği – Gölköy Baraj Gölü",url:"https://www.bolu.gov.tr/golkoy-baraj-golu",note:"Konum, ulaşım kolaylığı ve olta/piknik kullanımını rota düzeyinde kaydeder."},
      {label:"Bolu İl Tarım – 2018 Sportif Sazan Yarışması",url:"https://bolu.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=779",note:"Gölköy'de Bakanlık gözleminde sportif sazan avını ve yakalanan sazanları doğrular."},
      {label:"Bolu İl Tarım – 2026 su ürünleri av yasağı",url:"https://bolu.tarimorman.gov.tr/Duyuru/668/Su-Urunlerinde-Av-Yasagi-Basladi",note:"2026 Bolu içsularında ilgili türlerin kapalı dönemini açıklar."},
      {label:"Su Yönetimi Genel Müdürlüğü – Gölköy içme suyu ve eylem planı",url:"https://www.tarimorman.gov.tr/SYGM/Haber/1106/",note:"Gölköy'ün içme suyu kaynağı olduğunu ve su kalitesi eylem planını doğrular."}
    ]
  }),

  "ulusal-bayburt-demirozu-baraj-golu":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Demirözü Barajı için Bayburt İl Tarım ve Orman Müdürlüğünün rota-özel kayıtları baraja 110 bin yavru sazan bırakıldığını ve balıklandırılan baraj/göletlerin amatör olta balıkçılığına açılmasının kırsal turizm hedefiyle birlikte yürütüldüğünü bildirir. DSİ 22. Bölge Müdürlüğü barajın 2024 sulama işletmesini ve 109 bin 160 dekar sulama alanını doğrular; Demirözü Kaymakamlığı ise baraj çevresindeki sosyal tesis ve kamp kullanımını güncel rota bağlamı olarak verir. Resmî amatör kullanım kanıtı güçlüdür; ancak kafes balıkçılığı, sulama işletmesi ve değişken su kotu nedeniyle belirli kıyı cebinin sürekli açık olduğu varsayılmaz.",
    fish:["Sazan"],
    fishEvidence:[{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî balıklandırma kaydı",sourceLabel:"Bayburt İl Tarım – Demirözü Barajı'na 110 bin yavru sazan",sourceUrl:"https://bayburt.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=44a6d414-e690-4c0e-9c5d-843ec78446de&TermSetId=7fce0b17-1e0f-4770-a1e6-da11ab4a635d&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=154%2FBayburtta-Balikcilik-Gelisiyor",note:"İl Müdürlüğü Demirözü Barajı'na 110 bin yavru sazan bırakıldığını açıkça kaydeder; güncel stok yoğunluğu ve kıyıdan av başarısı anlamına gelmez."}],
    amenities:["Demirözü sosyal tesisleri","Kamp alanı bağlamı","İlçe merkezi hizmetleri"],
    cautions:["Baraj aktif sulama tesisidir; su kotu ve kıyı çizgisi işletmeye göre değişebilir.","Kafes balıkçılığı/üretim alanları ile tekne çalışma sahalarına yaklaşılmamalıdır.","Kışın donan su yüzeyi güvenli yürüyüş veya av platformu kabul edilmemelidir.","Baraj gövdesi, savak, su alma yapısı ve servis yolları rota dışında tutulmalıdır."],
    accommodationOptions:[{name:"Demirözü ilçe merkezi ve baraj sosyal tesis çevresi",type:"İlçe merkezi / tesis bağlamı",distanceKm:null,sourceUrl:"https://www.demirozu.gov.tr/demirozu-baraji",note:"Kaymakamlık baraj çevresinde sosyal tesis ve kamp alanı bulunduğunu bildirir; güncel işletme, rezervasyon ve kamp izni ayrıca doğrulanmalıdır."}],
    accessEvidence:[
      {label:"Demirözü Kaymakamlığı – baraj ve sosyal tesis",value:"Baraj çevresinde sosyal tesis ve turizm amaçlı kullanım bulunmaktadır.",sourceUrl:"https://www.demirozu.gov.tr/demirozu-baraji",note:"Genel ziyaret bağlamını doğrular; balık avı için her kıyının kamusal ve açık olduğu anlamına gelmez."},
      {label:"Bayburt İl Tarım – amatör olta hedefi",value:"Demirözü dahil balıklandırılan baraj ve göletlerin olta balıkçılığına açılması özellikle amatör olta ve kırsal turizm açısından hedeflenmiştir.",sourceUrl:"https://bayburt.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=44a6d414-e690-4c0e-9c5d-843ec78446de&TermSetId=7fce0b17-1e0f-4770-a1e6-da11ab4a635d&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=215%2FBayburtta-5-Golet-Daha-Baliklandirildi",note:"Kurumsal kullanım kanıtıdır; hareket günü dönem ve alan kısıtı ayrıca kontrol edilmelidir."}
    ],
    seasonalNotes:["Bayburt için sazangillerin kapalı dönemi güncel 6/2 hükümlerinden kontrol edilmelidir; resmî Bayburt bilgilendirmelerinde 15 Mayıs-15 Ağustos dönemi esas alınmıştır.","Sazan varlığı rota-özel 110 bin yavru balıklandırma kaydıyla desteklenir; balıklandırma av garantisi değildir."],
    planningNotes:["Sosyal tesis çevresinin ziyaretçi erişimi ile olta atılabilecek güvenli kıyı aynı şey değildir; son kıyı yaklaşımı tabela ve işletme sınırlarıyla kontrol edilmelidir.","Kafes, tekne, şamandıra, ağ veya ticari faaliyet görülen alanlarda amatör olta hattı kurulmalıdır diye varsayma; çalışma alanlarından uzak dur.","Sulama sezonu ve kuraklık kıyı profilini ciddi biçimde değiştirebilir; eski uydu görüntüsüne göre yaklaşım planlama."],
    transport:"Demirözü Kaymakamlığı baraj çevresindeki sosyal tesis ve turizm kullanımını, DSİ ise aktif sulama işletmesini doğrular. İlçe üzerinden genel baraj çevresine erişim araştırılabilir; son araç yolu, park ve kıyı girişi işletme, kafes ve DSİ güvenlik alanlarından ayrıştırılarak yerinde kontrol edilmelidir.",
    crowdNote:"Sosyal tesis, kamp ve tekne turu dönemlerinde ziyaretçi yoğunluğu artabilir. Olta atışı yalnız yaya ve tekne hattından ayrılmış, açık ve güvenli kıyı kesiminde düşünülmelidir.",
    sources:[
      {label:"Bayburt İl Tarım – Bayburt'ta Balıkçılık Gelişiyor",url:"https://bayburt.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=44a6d414-e690-4c0e-9c5d-843ec78446de&TermSetId=7fce0b17-1e0f-4770-a1e6-da11ab4a635d&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=154%2FBayburtta-Balikcilik-Gelisiyor",note:"Demirözü Barajı'na 110 bin yavru sazan bırakıldığını ve amatör balıkçılık eğitimlerini bildirir."},
      {label:"Bayburt İl Tarım – 5 gölet daha balıklandırıldı",url:"https://bayburt.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=44a6d414-e690-4c0e-9c5d-843ec78446de&TermSetId=7fce0b17-1e0f-4770-a1e6-da11ab4a635d&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=215%2FBayburtta-5-Golet-Daha-Baliklandirildi",note:"Demirözü Barajı dahil balıklandırılan suların amatör olta balıkçılığına açılması hedefini kaydeder."},
      {label:"DSİ 22. Bölge – Demirözü 2024 sulama sezonu",url:"https://bolge22.dsi.gov.tr/Haber/Detay/13182",note:"Barajın aktif sulama işletmesini ve hizmet alanını doğrular."},
      {label:"Demirözü Kaymakamlığı – Demirözü Barajı",url:"https://www.demirozu.gov.tr/demirozu-baraji",note:"Baraj kimliği, sulama amacı, sosyal tesis ve kamp/turizm bağlamını verir."}
    ]
  }),

  "ulusal-balikesir-caygoren-baraj-golu":make({
    officialAmateurFishingUseEvidence:false,
    researchSummary:"Çaygören Baraj Gölü için Balıkesir İl Tarım ve Orman Müdürlüğünün 26 Ağustos 2024 tarihli kaydı göle 300 bin yavru sazan bırakıldığını doğrudan doğrular. Balıkesir Valiliğinin Sındırgı sayfası Çaygören'i ilçenin sulama amaçlı, gezi ve piknik kullanılan barajı olarak tanımlar ve ilçede su sporları kapsamında olta balıkçılığının yapıldığını belirtir. Ancak bu ifade belirli Çaygören kıyı cebini resmen amatör av sahası ilan eden bir sınırlandırma haritası değildir; bu nedenle güçlü rota-özel masa başı kanıtı ile Güven C uygundur, B için daha açık güncel amatör kullanım/alan belgesi beklenir.",
    fish:["Sazan"],
    fishEvidence:[{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde 2024 resmî balıklandırma kaydı",sourceLabel:"Balıkesir İl Tarım – Çaygören'e 300 bin yavru sazan",sourceUrl:"https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290%2F%E2%80%8Bbaraj-Ve-Goletlerimize-1-Milyon-324-Bin-Yavru-Sazan-Baligi-Birakiyoruz",note:"Çaygören Baraj Gölü'ne 300.000 yavru sazan bırakıldığını bildirir; balıklandırma güncel yoğunluk veya av başarısı garantisi değildir."}],
    amenities:["Sındırgı ilçe merkezi bağlamı","Piknik/gezi kullanımı","Çaygören Mahallesi çevresi"],
    cautions:["Çaygören aktif sulama barajıdır; su seviyesi mevsim ve sulama programıyla önemli ölçüde değişebilir.","2024'te su ürünleri istihsal hakkı için kiralama ihalesi duyurulmuştur; ticari faaliyet amatör erişim hakkı değildir.","Baraj gövdesi, enerji/sulama yapıları ve işletme yollarından uzak durulmalıdır.","Piknik yoğunluğu olan kıyılarda güvenli atış koridoru yoksa olta açılmamalıdır."],
    accommodationOptions:[{name:"Sındırgı ilçe merkezi",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://www.balikesir.gov.tr/sindirgi",note:"Valilik Çaygören'i Sındırgı'nın başlıca gezi ve piknik noktalarından biri olarak tanımlar; tesis ve oda uygunluğu ayrıca araştırılmalıdır."}],
    accessEvidence:[{label:"Balıkesir Valiliği – Sındırgı/Çaygören kullanım bağlamı",value:"Çaygören sulama barajı ilçenin gezi ve piknik uğraklarındandır; Sındırgı'da su sporları kapsamında olta balıkçılığı yapılmaktadır.",sourceUrl:"https://www.balikesir.gov.tr/sindirgi",note:"Genel rota bağlamıdır; belirli kıyı girişini veya tüm baraj çevresinde amatör av iznini kanıtlamaz."}],
    seasonalNotes:["Sazan için güncel 6/2 Tebliğdeki Balıkesir kapalı dönem, boy ve günlük alıkoyma sınırları hareket günü kontrol edilmelidir.","2024'te 300 bin sazan yavrusu bırakılmıştır; balıklandırma kaydı belirli kıyıda güncel av verimi anlamına gelmez."],
    planningNotes:["Ticari istihsal/kiralama faaliyeti görülen ağ, tekne ve çalışma alanlarını amatör rota dışında tut.","Çaygören'de su seviyesi kuraklık dönemlerinde ciddi düşüş gösterebildiğinden eski kıyı çizgisine göre araç yaklaşımı planlama.","Çaygören Mahallesi veya piknik kullanılan bölümler yalnız planlama başlangıcıdır; son kıyı kamusallığı saha tabelasıyla kontrol edilmelidir."],
    transport:"Balıkesir Valiliği Çaygören'i Sındırgı'nın gezi ve piknik amaçlı kullanılan sulama barajı olarak tanımlar. İlçe ve Çaygören Mahallesi üzerinden genel çevre araştırılabilir; ancak son park, kıyı girişi, ticari av sahası ve işletme sınırı doğrulanmadan harita pini doğrudan av noktası sayılmamalıdır.",
    crowdNote:"Piknik ve gezi kullanımı nedeniyle özellikle uygun havalarda kıyı yoğunluğu artabilir. Olta yalnız insan trafiğinden, teknelerden ve ticari ağlardan ayrılmış güvenli bir bölümde kullanılmalıdır.",
    sources:[
      {label:"Balıkesir İl Tarım – 2024 balıklandırma",url:"https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290%2F%E2%80%8Bbaraj-Ve-Goletlerimize-1-Milyon-324-Bin-Yavru-Sazan-Baligi-Birakiyoruz",note:"Çaygören'e 300 bin yavru sazan bırakıldığını doğrular."},
      {label:"Balıkesir Valiliği – Sındırgı",url:"https://www.balikesir.gov.tr/sindirgi",note:"Çaygören'in sulama, gezi/piknik ve Sındırgı'daki olta balıkçılığı bağlamını verir."},
      {label:"Balıkesir İl Tarım – Çaygören istihsal hakkı kiralama",url:"https://balikesir.tarimorman.gov.tr/Duyuru/343/Caygoren-Baraj-Golu-Istihsal-Hakki-Kiralama-Ihalesi",note:"2024 ticari istihsal hakkı ihalesini doğrular; amatör erişim hakkı değildir."}
    ]
  }),

  "ulusal-manisa-demirkopru-baraj-golu":make({
    officialAmateurFishingUseEvidence:false,
    researchSummary:"Demirköprü Baraj Gölü için 2025 Manisa İl Tarım ihalesi rota kimliğini, kıyı yerleşimlerini ve yıllık avlanabilir sazan/yayın/havuz balığı stoklarını güncel resmî kayıtta verir. 2019 resmî balıklandırma etkinliği Demirköprü'de sportif olta ve amatör balıkçılık kurallarını doğrudan ele alır; 19 Aralık 2024 tarihli İl Tarım farkındalık çalışması da Demirköprü'yü yoğun avcılık yapılan ve amatör balıkçılar için uyarı tabelası yerleştirilen barajlardan biri olarak gösterir. Buna rağmen 2025 ticari kiralama ile amatör kıyı erişiminin mikro sınırları ayrıştırılmadığından, resmî kullanım sinyali güçlü olsa da bu turda muhafazakâr biçimde Güven C uygulanır.",
    fish:["Sazan","Yayın"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"2025 rota özelinde resmî avlanabilir stok",sourceLabel:"Manisa İl Tarım – Demirköprü 2025 kiralama",sourceUrl:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=091918e4-012d-4a49-b689-c744715a91c4&UrlSuffix=397%2FManisa-Ili-Koprubasi-Ve-Salihli-Ilceleri-Arasinda-Bulunan-Demirkopru-Baraj-Golunun-Su-Urunleri-Avcilik-Hakkinin-Ihale-Usuluyle-Kiraya-Verilmesi",note:"Yıllık 25.000 kg sazan avlanabilir stok üzerinden kiralama ilanı verir; bu ticari stok kaydı kıyıdan amatör av garantisi değildir."},
      {name:"Yayın",scientificName:"Silurus glanis",evidenceLevel:"2025 rota özelinde resmî avlanabilir stok ve 2019 resmî balıklandırma",sourceLabel:"Manisa İl Tarım – Demirköprü 2025 kiralama",sourceUrl:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=091918e4-012d-4a49-b689-c744715a91c4&UrlSuffix=397%2FManisa-Ili-Koprubasi-Ve-Salihli-Ilceleri-Arasinda-Bulunan-Demirkopru-Baraj-Golunun-Su-Urunleri-Avcilik-Hakkinin-Ihale-Usuluyle-Kiraya-Verilmesi",note:"Yıllık 10.000 kg yayın avlanabilir stok bildirir; ayrıca Bakanlık 2019'da Demirköprü'ye yayın yavrusu bırakılacağını kaydetmiştir."}
    ],
    amenities:["Kıyı yerleşimleri","Köprübaşı/Salihli hizmet bağlamı","Resmî uyarı tabelaları"],
    cautions:["2025 itibarıyla barajın su ürünleri avcılık hakkı ticari kiralamaya konu edilmiştir; ağ, tekne ve kooperatif çalışma alanlarına girilmemelidir.","Manisa İl Tarım 2024 bilgilendirme levhalarında 1 Mart-31 Mayıs kapalı dönemini ve amatör takım sınırlarını hatırlatmıştır; güncel 6/2 ve yeni il kararları esas alınmalıdır.","Geçmiş resmî kayıtlarda su kalitesi/kirlilik riski vurgulanmıştır; tüketim kararı güncel bilgiyle verilmelidir.","Baraj çok geniştir; tek bir merkez pini kıyıya güvenli veya yasal giriş noktası değildir."],
    accommodationOptions:[{name:"Köprübaşı ve Salihli ilçe merkezleri",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=091918e4-012d-4a49-b689-c744715a91c4&UrlSuffix=397%2FManisa-Ili-Koprubasi-Ve-Salihli-Ilceleri-Arasinda-Bulunan-Demirkopru-Baraj-Golunun-Su-Urunleri-Avcilik-Hakkinin-Ihale-Usuluyle-Kiraya-Verilmesi",note:"Resmî ilan barajı Köprübaşı-Salihli sınırları arasında ve çok sayıda kıyı mahallesiyle tanımlar; konaklama tesisi ayrıca seçilmelidir."}],
    accessEvidence:[
      {label:"Manisa İl Tarım – 2024 amatör bilgilendirme tabelaları",value:"Demirköprü yoğun avcılık yapılan barajlardan biri olarak seçilmiş ve amatör balıkçılar için mevzuat tabelaları yerleştirilmiştir.",sourceUrl:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d59be594-0585-4d66-8a17-00217dd913d6&TermSetId=51c21c3c-cdd9-4e02-8fb2-bd268f69bdcc&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=898%2FSu-Urunleri-Avciliginda-Farkindalik-Calismasi",note:"Amatör kullanım bağlamını güçlendirir; ticari kiralama sınırları nedeniyle belirli kıyı cebinin serbest olduğunu tek başına kanıtlamaz."},
      {label:"Manisa İl Tarım – 2025 kıyı yerleşimleri",value:"Resmî kiralama ilanı baraj kıyısındaki Sindel, Cicikli, Akyar, Oraklar, Borlu, Tepeköy, Çarıklar, Gerencik, Tokmaklı, Mamatlı, Delibaşlı ve Karyağdı mahallelerini sayar.",sourceUrl:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=091918e4-012d-4a49-b689-c744715a91c4&UrlSuffix=397%2FManisa-Ili-Koprubasi-Ve-Salihli-Ilceleri-Arasinda-Bulunan-Demirkopru-Baraj-Golunun-Su-Urunleri-Avcilik-Hakkinin-Ihale-Usuluyle-Kiraya-Verilmesi",note:"Yerleşim bağlamı navigasyon araştırmasını daraltır; özel parsel veya kıyı erişim hakkı oluşturmaz."}
    ],
    seasonalNotes:["Manisa İl Tarımın 19 Aralık 2024 bilgilendirmesi 6/2 kapsamında 1 Mart-31 Mayıs döneminde içsu avcılık yasağını hatırlatır; hareket günü yürürlükteki son metin kontrol edilmelidir.","Sazan ve yayın 2025 resmî avlanabilir stok kaydıyla doğrulanır; stok miktarı amatör kıyı verimi anlamına gelmez."],
    planningNotes:["Ticari kiralama nedeniyle ağ, tekne, çekek ve kooperatif operasyonlarını amatör kıyı rotasından ayır.","Çok geniş rezervuarda tek merkez pin yerine açık yol ve kamusal kıyı işareti bulunan genel planlama cebini sahada teyit et.","Derin şev, su kotu değişimi ve yaz sıcaklarında açık kıyı riski için ilk ziyaret gündüz yapılmalıdır."],
    transport:"2025 İl Tarım ilanı Demirköprü'nün Köprübaşı-Salihli arasında geniş bir rezervuar olduğunu ve kıyı mahallelerini resmen listeler. Bu yerleşimler yaklaşım araştırması için kullanılabilir; hangi yolun kamusal olduğu, kıyıdaki ticari faaliyet ve son park alanı ayrı doğrulanmalıdır.",
    crowdNote:"Amatör balıkçılar yanında aktif ticari balıkçılık da bulunduğundan yoğunluk yalnız ziyaretçi sayısıyla ölçülmemelidir. Ağ, tekne ve çalışma hattı bulunan kesimlerde olta açılmamalıdır.",
    sources:[
      {label:"Manisa İl Tarım – Demirköprü 2025 istihsal hakkı",url:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=091918e4-012d-4a49-b689-c744715a91c4&UrlSuffix=397%2FManisa-Ili-Koprubasi-Ve-Salihli-Ilceleri-Arasinda-Bulunan-Demirkopru-Baraj-Golunun-Su-Urunleri-Avcilik-Hakkinin-Ihale-Usuluyle-Kiraya-Verilmesi",note:"Güncel rota kimliği, kıyı mahalleleri ve sazan/yayın stoklarını verir."},
      {label:"Manisa İl Tarım – 2019 Demirköprü balıklandırması",url:"https://manisa.tarimorman.gov.tr/Haber/587/Manisadaki-Baraj-Golu-Ve-Goletlere-100-000-Balik-Birakildi",note:"Demirköprü'deki balıklandırma etkinliğini ve amatör/sportif olta kurallarını kaydeder."},
      {label:"Manisa İl Tarım – 2024 su ürünleri farkındalık çalışması",url:"https://manisa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d59be594-0585-4d66-8a17-00217dd913d6&TermSetId=51c21c3c-cdd9-4e02-8fb2-bd268f69bdcc&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=898%2FSu-Urunleri-Avciliginda-Farkindalik-Calismasi",note:"Demirköprü'ye amatör mevzuat tabelaları yerleştirildiğini ve güncel 6/2 çerçevesini bildirir."},
      {label:"Tarım ve Orman Bakanlığı – 2019 yayın balığı balıklandırması",url:"https://www.tarimorman.gov.tr/BSGM/Haber/170/Icsu-Kaynaklarimiza-Yayin-Baligi-Birakildi",note:"Demirköprü dahil seçili içsulara yayın balığı bırakılmasını kaydeder."}
    ]
  }),

  "ulusal-kayseri-agcasar-baraj-golu":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Ağcaşar Baraj Gölü için Kayseri İl Tarım ve Orman Müdürlüğünün 27 Temmuz 2020 tarihli drone denetimi, Ağçaşar'da amatör ve sportif amaçlı balıkçılık faaliyetlerinin denetlendiğini ve uygunsuzluk görülmediğini doğrudan kaydeder. Kayseri İl Kültür ve Turizm Müdürlüğü baraj gölü balıkçılığında Ağcaşar için pullu sazan ve turnayı rota düzeyinde belirtir. Böylece hem resmî amatör kullanım hem rota-özel tür kanıtı vardır; saha doğrulaması bulunmadığından Güven B üst sınırdır.",
    fish:["Sazan","Turna"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî turizm/balıkçılık kaydı",sourceLabel:"Kayseri İl Kültür ve Turizm – Ağcaşar balıkçılığı",sourceUrl:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Ağcaşar Barajı'nda pullu sazan balıkçılığını kaydeder; güncel kıyı bulunurluğu garanti değildir."},
      {name:"Turna",scientificName:"Esox lucius",evidenceLevel:"Rota özelinde resmî turizm/balıkçılık kaydı",sourceLabel:"Kayseri İl Kültür ve Turizm – Ağcaşar balıkçılığı",sourceUrl:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Ağcaşar Barajı'nda turna balıkçılığını kaydeder; 6/2 dönem ve boy kuralları ayrıca uygulanır."}
    ],
    methods:["Mevzuata uygun kıyı oltası","At-çek"],
    baits:["Mısır","Hamur","Mevzuata uygun yapay yem"],
    amenities:["Yahyalı-Develi karayolu bağlamı","Yahyalı ilçe merkezi hizmetleri","Mesire kullanımı bağlamı"],
    cautions:["2020 denetimi araçların ulaşamadığı koylar bulunduğunu özellikle belirtir; her kıyıya araçla erişim varsayılmamalıdır.","Baraj sulama amaçlıdır; su seviyesi ve çamurlu kıyı çizgisi değişebilir.","Turna ve sazanın kapalı dönemleri aynı olmayabilir; tür bazında 6/2 kontrolü yapılmalıdır.","Özel parsel, tarım yolu ve işletme alanlarından izinsiz geçilmemelidir."],
    accommodationOptions:[{name:"Yahyalı ilçe merkezi",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Rota Yahyalı ilçesi balıkçılık bağlamında resmî kaynakta yer alır; konaklama tesisi ayrıca doğrulanmalıdır."}],
    accessEvidence:[{label:"Kayseri İl Tarım – Ağçaşar drone denetimi",value:"Ağçaşar'da amatör ve sportif balıkçılık faaliyetleri resmî ekiplerce denetlenmiş ve uygunsuzluk gözlenmemiştir.",sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",note:"Rota-özel amatör kullanım kanıtıdır; araç ulaşmayan koylar bulunduğu için mikro erişim doğrulaması değildir."}],
    seasonalNotes:["Ağcaşar'da sazan ve turna rota-özel resmî kaynakta kayıtlıdır; her iki tür için güncel 6/2 kapalı dönem, boy ve adet sınırları ayrı kontrol edilmelidir.","2020 denetim kaydı faaliyet uygunluğunu o gün için gösterir; 2026 ve sonrası yerel tabela/kararlar daha önceliklidir."],
    planningNotes:["İlk ziyaret için araçla erişilemeyen koyları hedefleme; açık ve kamusal yol bağlantısı görülen genel kıyı çevresini gündüz teyit et.","Turna hedeflenecekse sazlık/bitkili kıyıda takılma ve kaygan zemin riskini ayrıca değerlendir.","Tarım arazileri ve özel mülkiyet sınırları ile baraj işletme bölümlerini rota dışında tut."],
    transport:"Kayseri İl Tarımın 2020 drone denetimi Ağçaşar çevresinde araçların ulaşamadığı koylar bulunduğunu açıkça belirtir. Bu nedenle genel baraj konumu navigasyon başlangıcıdır; son yaklaşım yalnız açık yol, kamusal geçiş ve saha tabelası doğrulandıktan sonra kullanılmalıdır.",
    crowdNote:"Amatör kullanım resmî denetimle doğrulanmıştır ancak kıyı cepleri dardır ve erişim eşit değildir. Başka balıkçıların bulunduğu dar koylarda çapraz misina hattı oluşuyorsa yer değiştirilmelidir.",
    sources:[
      {label:"Kayseri İl Tarım – Ağçaşar amatör/sportif drone denetimi",url:"https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",note:"Ağçaşar'da amatör ve sportif balıkçılık faaliyetlerinin denetlendiğini doğrular."},
      {label:"Kayseri İl Kültür ve Turizm – Av Turizmi ve Balıkçılık",url:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Ağcaşar için pullu sazan ve turna balıkçılığı kaydı verir."},
      {label:"Kayseri İl Tarım – amatör amaçlı su ürünleri avcılığı",url:"https://kayseri.tarimorman.gov.tr/Menu/221/Amator-Amacli-Su-Urunleri-Avciligi",note:"İlin güncel amatör balıkçılık bilgilendirme sayfasıdır."}
    ]
  }),

  "ulusal-kayseri-akkoy-baraj-golu-kayseri":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Akköy Baraj Gölü için Kayseri İl Tarım ve Orman Müdürlüğünün 2020 drone denetimi Akköy'de amatör ve sportif balıkçılık faaliyeti denetlendiğini ve uygunsuzluk görülmediğini doğrudan kaydeder. 2015 resmî balıklandırma programı Akköy'e Cyprinus carpio yavrusu bırakıldığını ve projenin sportif balıkçılığı geliştirme amacını belirtir; Kayseri İl Kültür ve Turizm sayfası da Akköy'de sarı ve pullu sazan balıkçılığını rota düzeyinde bildirir. Bu kombinasyon Güven B eşiğini karşılar, fakat saha doğrulaması olmadığı için A değildir.",
    fish:["Sazan"],
    fishEvidence:[{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde resmî balıklandırma ve turizm kaydı",sourceLabel:"Kayseri İl Tarım – Akköy 2015 sazan balıklandırması",sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/551/265-Bin-Sazan-Baligi-Yavrusu-Goletlerimize-Birakildi",note:"Akköy'ün Cyprinus carpio yavrusu bırakılan sular arasında olduğunu doğrular; güncel stok yoğunluğunu garanti etmez."}],
    amenities:["Yeşilhisar ilçe merkezi bağlamı","Kırsal yol erişimi","Yakın yerleşim hizmetleri"],
    cautions:["2020 resmî denetimi bazı baraj koylarında araç erişiminin zor olduğunu gösterir; kıyıya araçla iniş varsayılmamalıdır.","Sazan için güncel kapalı dönem, boy ve adet sınırları uygulanmalıdır.","Kırsal yol, özel parsel ve tarla geçişleri kamusal kabul edilmemelidir.","Baraj işletme yapıları ve güvenlik cepleri rota dışıdır."],
    accommodationOptions:[{name:"Yeşilhisar ilçe merkezi",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",note:"Resmî denetim Akköy'ü Yeşilhisar ilçe sınırlarında tanımlar; tesis seçimi ayrıca doğrulanmalıdır."}],
    accessEvidence:[{label:"Kayseri İl Tarım – Akköy drone denetimi",value:"Akköy'de amatör ve sportif balıkçılık faaliyetleri resmî olarak denetlenmiş ve uygunsuzluk gözlenmemiştir.",sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",note:"Rota özelinde amatör kullanım kanıtıdır; belirli bir park veya kıyı geçişini doğrulamaz."}],
    seasonalNotes:["Sazan varlığı Akköy'e ait resmî balıklandırma kaydıyla desteklenir; güncel 6/2 Kayseri dönem ve boy kuralları hareket günü kontrol edilmelidir.","2015 balıklandırması geçmiş stok desteğidir; güncel yakalama oranı çıkarılamaz."],
    planningNotes:["Yeşilhisar üzerinden genel çevre araştırması yap; son kıyı yolunun özel tarla yolu olup olmadığını yerinde kontrol et.","Araçla ulaşılmayan koylarda yol açmaya veya tarım arazisine girmeye çalışma.","İlk ziyaret gündüz yapılmalı; kıyı şevi ve çamur durumu su kotuna göre yeniden değerlendirilmelidir."],
    transport:"Resmî 2020 denetimi Akköy'ü Yeşilhisar ilçe sınırlarında ve amatör/sportif faaliyet görülen bir baraj olarak tanımlar. Genel konuma ilçe yollarından yaklaşılabilir; son yolun kamusallığı, park alanı ve kıyı güvenliği ayrıca saha teyidi gerektirir.",
    crowdNote:"Amatör kullanım kanıtlı olsa da baraj kıyısında düzenlenmiş sürekli bir olta platformu doğrulanmamıştır. Dar kıyı cebinde güvenli atış alanı yoksa başka bir açık kesime geçilmelidir.",
    sources:[
      {label:"Kayseri İl Tarım – Akköy amatör/sportif denetimi",url:"https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",note:"Akköy'deki amatör/sportif faaliyeti rota düzeyinde doğrular."},
      {label:"Kayseri İl Tarım – 2015 Akköy sazan balıklandırması",url:"https://kayseri.tarimorman.gov.tr/Haber/551/265-Bin-Sazan-Baligi-Yavrusu-Goletlerimize-Birakildi",note:"Akköy'e sazan yavrusu bırakıldığını ve sportif balıkçılık amacını bildirir."},
      {label:"Kayseri İl Kültür ve Turizm – baraj gölü balıkçılığı",url:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Akköy'de sarı ve pullu sazan balıkçılığını kaydeder."}
    ]
  }),

  "ulusal-kayseri-bahcelik-baraj-golu":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Bahçelik Baraj Gölü için Kayseri İl Tarım ve Orman Müdürlüğü güncel birim sayfasında doğrudan 'Bahçelik Baraj Gölü Amatör Balıkçılık Alanları Haritası' yayımlar. 2 Ekim 2024 tarihli resmî duyuru, avcılık istihsal hakkı kiralanmış Bahçelik dahil barajlarda 6/2 Tebliğ kapsamında kişi başına en fazla dört olta takımıyla amatör avcılığın serbest olduğunu açıkça belirtir. Tür tarafında 2018 İl Tarım kaydı Atherina boyeri varlığını doğrudan Bahçelik'e bağlar; ayrıca 2016 hakemli çalışma barajın farklı noktalarından doğal olarak yakalanan gökkuşağı alabalığını bilimsel olarak inceler. Resmî amatör alan belgesi nedeniyle Güven B uygundur; haritadaki sınırlar ve kafes/kooperatif alanları mutlaka korunmalıdır.",
    fish:["Gümüş Balığı","Gökkuşağı Alabalığı"],
    fishEvidence:[
      {name:"Gümüş Balığı",scientificName:"Atherina boyeri",evidenceLevel:"Rota özelinde resmî avcılık kaydı",sourceLabel:"Kayseri İl Tarım – Bahçelik Gümüş Balığı",sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/1180/Pinarbasi-Bahcelik-Baraj-Golunde-Gumus-Baligi-Ihracati-Basladi",note:"Bahçelik'te Atherina boyeri avcılığını doğrudan kaydeder; ticari av kaydı kıyıdan amatör av verimi anlamına gelmez."},
      {name:"Gökkuşağı Alabalığı",scientificName:"Oncorhynchus mykiss",evidenceLevel:"Rota özelinde hakemli saha çalışması",sourceLabel:"Erciyes Üniversitesi Veteriner Fakültesi Dergisi – Bahçelik alabalıkları",sourceUrl:"https://dergipark.org.tr/tr/pub/ercivet/article/272983",note:"Bahçelik Barajı'nın beş farklı noktasından doğal olarak yakalanan ve yetiştirilen Oncorhynchus mykiss örneklerini inceler; kafes üretimi ile doğal yakalama ayrımı korunmalıdır."}
    ],
    methods:["Resmî amatör alan sınırlarında mevzuata uygun kıyı oltası"],
    baits:["Hedef türe uygun ve mevzuata uygun doğal/suni yem"],
    amenities:["Pınarbaşı ilçe hizmetleri","Resmî amatör alan haritası","Su ürünleri faaliyetleri"],
    cautions:["Bahçelik'te ticari kooperatif, ağ ve kafes balıkçılığı faaliyetleri bulunabilir; çalışma alanlarına girilmemelidir.","Amatör av yalnız güncel resmî harita ve 6/2 kurallarıyla uyumlu alanda planlanmalıdır.","Tür listesinde yer alan gökkuşağı alabalığının bir bölümü yetiştiricilik bağlamındadır; kafes balığı amatör hedef olarak yorumlanmamalıdır.","Baraj içme suyu, sulama, taşkın kontrolü ve enerji işlevleri de gördüğünden işletme yapılarından uzak durulmalıdır."],
    accommodationOptions:[{name:"Pınarbaşı ilçe merkezi",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://kayseri.tarimorman.gov.tr/Haber/1180/Pinarbasi-Bahcelik-Baraj-Golunde-Gumus-Baligi-Ihracati-Basladi",note:"Resmî kaynak Bahçelik'i Pınarbaşı ilçesinde tanımlar; konaklama tesisi ve güncel uygunluk ayrıca seçilmelidir."}],
    accessEvidence:[
      {label:"Kayseri İl Tarım – Bahçelik amatör alan haritası",value:"İl Müdürlüğü Bahçelik Baraj Gölü için ayrı bir Amatör Balıkçılık Alanları Haritası yayımlar.",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d6008e47-6393-4d8a-a2c9-78dc26edd1e7&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=104%2FBalikcilik-Ve-Su-Urunleri-Sube-Mudurlugu",note:"Rota özelindeki en güçlü amatör alan kanıtıdır; yayımlanan genel site pini harita sınırının yerine geçmez."},
      {label:"Kayseri İl Tarım – 2024 amatör av duyurusu",value:"Bahçelik dahil kiralanmış barajlarda 6/2 kapsamında en fazla dört olta takımı ile amatör avcılığın serbest olduğu bildirilmiştir.",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=29edea52-6e3d-4ddd-8bf0-2b9c3938b32c&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=599%2FAmator-Balikcilarimizin-Dikkatine",note:"Genel izin çerçevesidir; haritada kapalı veya işletme alanı varsa bu sınır önceliklidir."}
    ],
    seasonalNotes:["Bahçelik'te amatör avın serbest olduğuna ilişkin 2024 resmî duyuru güncel 6/2 dönemi içinde yayımlanmıştır; daha yeni il kararı ve alan haritası hareket günü tekrar kontrol edilmelidir.","Gümüş balığı ve gökkuşağı alabalığı rota-özel kaynaklarla doğrulanır; ticari/kafes üretim kayıtları kıyıdan av garantisi değildir."],
    planningNotes:["Önce İl Tarımın Bahçelik amatör alan haritasını kontrol et; genel rezervuar merkez pinini doğrudan av noktası olarak kullanma.","Kooperatif tekneleri, ağlar ve kafes yetiştiricilik şamandıraları bulunan bölümlerden uzak dur.","Barajın çok amaçlı işletme yapıları ve su alma alanları çevresinde tabela ve görevli talimatı önceliklidir."],
    transport:"Bahçelik için Kayseri İl Tarım tarafından ayrı amatör balıkçılık alan haritası yayımlanmış olması erişim planlamasını diğer genel baraj kayıtlarından daha güçlü kılar. Yine de sitedeki genel pin yerine resmî haritadaki izinli kıyı bölümü esas alınmalı; park ve son yaya yaklaşımı sahada kontrol edilmelidir.",
    crowdNote:"Amatör av ile kooperatif/ticari ve yetiştiricilik faaliyetleri aynı rezervuarda bulunabilir. Güvenli olta alanı seçerken tekne, ağ, kafes ve diğer kullanıcıların çalışma hattı mutlaka boş bırakılmalıdır.",
    sources:[
      {label:"Kayseri İl Tarım – Bahçelik Amatör Balıkçılık Alanları Haritası",url:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d6008e47-6393-4d8a-a2c9-78dc26edd1e7&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=104%2FBalikcilik-Ve-Su-Urunleri-Sube-Mudurlugu",note:"Rota özelinde resmî amatör alan haritasını yayımlar."},
      {label:"Kayseri İl Tarım – 2024 amatör balıkçılar duyurusu",url:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=29edea52-6e3d-4ddd-8bf0-2b9c3938b32c&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=599%2FAmator-Balikcilarimizin-Dikkatine",note:"Bahçelik dahil kiralanmış barajlarda 6/2 kapsamında amatör olta çerçevesini açıklar."},
      {label:"Kayseri İl Tarım – Bahçelik Gümüş Balığı",url:"https://kayseri.tarimorman.gov.tr/Haber/1180/Pinarbasi-Bahcelik-Baraj-Golunde-Gumus-Baligi-Ihracati-Basladi",note:"Atherina boyeri varlığını rota düzeyinde doğrular."},
      {label:"Erciyes Üniversitesi Veteriner Fakültesi Dergisi – Bahçelik alabalığı",url:"https://dergipark.org.tr/tr/pub/ercivet/article/272983",note:"Bahçelik'in beş noktasından yakalanan Oncorhynchus mykiss örneklerine dayalı hakemli çalışmadır."}
    ]
  }),

  "ulusal-kayseri-sarimsakli-baraj-golu":make({
    officialAmateurFishingUseEvidence:true,
    researchSummary:"Sarımsaklı Baraj Gölü için Kayseri İl Tarım ve Orman Müdürlüğünün 2 Ekim 2024 tarihli duyurusu, avcılık istihsal hakkı kiralanmış Sarımsaklı dahil barajlarda 6/2 kapsamında kişi başına en fazla dört olta takımıyla amatör avcılığın serbest olduğunu açıkça bildirir. 18 Ağustos 2025 tarihli resmî ihale ilanı ise Sarımsaklı'nın 280 hektarlık avlak sahasında yıllık 10 ton pullu sazan, 5,5 ton tatlısu levreği ve 7,2 ton Carassius spp. avlanabilir stok kaydı verir. Güncel resmî amatör kullanım ve tür/stok kanıtı birlikte Güven B eşiğini karşılar; ticari kiralama sınırları ve saha koşulları nedeniyle A değildir.",
    fish:["Sazan","Tatlı Su Levreği","Gümüşi Havuz Balığı"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"2025 rota özelinde resmî stok kaydı",sourceLabel:"Kayseri İl Tarım – Sarımsaklı 2025 ihalesi",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Ihaleler&OgeId=643",note:"10.000 kg/yıl pullu sazan avlanabilir stok kaydı verir; ticari stok amatör kıyı verimi değildir."},
      {name:"Tatlı Su Levreği",scientificName:"Perca fluviatilis",evidenceLevel:"2025 rota özelinde resmî stok kaydı",sourceLabel:"Kayseri İl Tarım – Sarımsaklı 2025 ihalesi",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Ihaleler&OgeId=643",note:"5.500 kg/yıl tatlısu levreği avlanabilir stok kaydı verir."},
      {name:"Gümüşi Havuz Balığı",scientificName:"Carassius spp.",evidenceLevel:"2025 rota özelinde resmî stok kaydı",sourceLabel:"Kayseri İl Tarım – Sarımsaklı 2025 ihalesi",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Ihaleler&OgeId=643",note:"İhale kaydında 7.200 kg/yıl Carassius spp. stoku verilir; veri türü cins düzeyinde ifade ettiği için sayfada bilimsel kesinlik aşılmamalıdır."}
    ],
    methods:["Mevzuata uygun kıyı oltası","At-çek"],
    baits:["Mısır","Hamur","Mevzuata uygun yapay yem"],
    amenities:["Melikgazi/Kayseri kent hizmetleri","Resmî avlak kaydı","Yakın yerleşim bağlamı"],
    cautions:["2025 itibarıyla Sarımsaklı su ürünleri istihsal hakkı kiralamaya konu edilmiştir; ticari ağ ve çalışma alanlarından uzak durulmalıdır.","Sazan ile tatlısu levreğinin kapalı dönem ve boy kuralları farklı olabilir; tür bazında 6/2 kontrolü gerekir.","Carassius kaydı cins düzeyindedir; sahada tür teşhisi yapılmadan kesin takson iddiasında bulunulmamalıdır.","Baraj işletme ve güvenlik alanları genel amatör serbestlik ifadesinin dışında değerlendirilmelidir."],
    accommodationOptions:[{name:"Kayseri / Melikgazi yerleşim alanı",type:"Kent merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Ihaleler&OgeId=643",note:"Resmî ilan barajı Melikgazi ilçesinde tanımlar; konaklama tesisi ve kıyıya mesafe ayrıca doğrulanmalıdır."}],
    accessEvidence:[{label:"Kayseri İl Tarım – Sarımsaklı amatör av çerçevesi",value:"Sarımsaklı dahil kiralanmış barajlarda 6/2 kapsamında kişi başına en fazla dört olta takımıyla amatör avcılığın serbest olduğu duyurulmuştur.",sourceUrl:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=29edea52-6e3d-4ddd-8bf0-2b9c3938b32c&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=599%2FAmator-Balikcilarimizin-Dikkatine",note:"Güçlü resmî amatör kullanım kanıtıdır; belirli kıyı cebinin park ve kamusal giriş koşulları ayrıca doğrulanmalıdır."}],
    seasonalNotes:["2024 Kayseri İl Tarım duyurusu Sarımsaklı'da 6/2 kapsamında amatör olta kullanımını açıkça serbest çerçevede tanımlar; güncel dönem, tür, boy ve adet sınırları her av öncesi kontrol edilmelidir.","2025 resmî stok verisi sazan, tatlısu levreği ve Carassius spp. varlığını rota düzeyinde destekler; stok rakamları amatör av garantisi değildir."],
    planningNotes:["Ticari kiralama nedeniyle ağ ve tekne çalışma alanlarını amatör av ceplerinden ayır.","Genel baraj pini yerine kamusal yol ve tabela ile doğrulanan kıyı bölümünü kullan; özel arazi geçişinden kaçın.","Tatlısu levreği ve sazan için hedef türü seçmeden önce o gün geçerli dönem ve boy sınırını ayrı ayrı kontrol et."],
    transport:"Sarımsaklı için ilçe ve avlak kimliği 2025 resmî ihale kaydında nettir; fakat kıyı erişim noktası yayımlanmış resmî amatör haritayla eşleştirilmiş değildir. Genel konuma yaklaşım sonrası park, özel parsel, ticari çalışma alanı ve son yaya hattı yerinde doğrulanmalıdır.",
    crowdNote:"Amatör olta ile ticari istihsal aynı rezervuarda birlikte yürüyebilir. Ağ, tekne, işaret şamandırası ve diğer kullanıcılarla emniyet mesafesi bırakılamıyorsa kıyı değiştirilmelidir.",
    sources:[
      {label:"Kayseri İl Tarım – 2024 Amatör Balıkçılarımızın Dikkatine",url:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=29edea52-6e3d-4ddd-8bf0-2b9c3938b32c&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=599%2FAmator-Balikcilarimizin-Dikkatine",note:"Sarımsaklı dahil kiralanmış barajlarda 6/2 kapsamında amatör olta serbestliğini açıklar."},
      {label:"Kayseri İl Tarım – Sarımsaklı 2025 istihsal hakkı",url:"https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Ihaleler&OgeId=643",note:"Sarımsaklı'nın alanını ve sazan, tatlısu levreği, Carassius spp. stoklarını güncel resmî kayıtta verir."},
      {label:"Kayseri İl Kültür ve Turizm – baraj gölü balıkçılığı",url:"https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",note:"Sarımsaklı Barajı için pullu/sarı sazan ve levrek balıkçılığına ilişkin destekleyici resmî kayıt sağlar."}
    ]
  }),

  "ulusal-kirsehir-cogun-baraj-golu":make({
    officialAmateurFishingUseEvidence:false,
    researchSummary:"Çoğun/Çuğun Baraj Gölü için 2023 hakemli rota-özel fauna çalışması 2019 saha örneklemesinde Cyprinus carpio, Capoeta sieboldii ve Atherina boyeri olmak üzere üç tür tespit etmiştir. Kırşehir İl Kültür ve Turizm Müdürlüğü Çuğun'u Kırşehir'e yaklaşık 20 km mesafede, piknik/mesire kullanılan ve balık avı için elverişli bir baraj olarak tanımlar. Kırşehir İl Tarım ve Orman Müdürlüğünün 12 Mart 2026 duyurusu ise 15 Mart-15 Haziran 2026 arasında ildeki tüm avlak sahalarında amatör avın yasak olduğunu açıkça belirtir. Tür, ziyaret ve güncel hukuk kanıtı Güven C için güçlüdür; 'balık avına elverişli' ifadesi belirli bir güncel amatör kıyı izni haritası olmadığından B sayılmaz.",
    fish:["Sazan","Gümüş Balığı"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Rota özelinde hakemli fauna çalışması",sourceLabel:"Kırşehir Ahi Evran Üniversitesi – Çoğun balık faunası",sourceUrl:"https://dergipark.org.tr/tr/pub/kujinas/article/1353712",note:"2019 örneklemesinde Çoğun Baraj Gölü'nde Cyprinus carpio tespit edilmiştir."},
      {name:"Gümüş Balığı",scientificName:"Atherina boyeri",evidenceLevel:"Rota özelinde hakemli fauna çalışması",sourceLabel:"Kırşehir Ahi Evran Üniversitesi – Çoğun balık faunası",sourceUrl:"https://dergipark.org.tr/tr/pub/kujinas/article/1353712",note:"2019 örneklemesinde Atherina boyeri doğrudan Çoğun Baraj Gölü'nde kaydedilmiştir; kıyıdan av garantisi değildir."}
    ],
    amenities:["Kırşehir'e yaklaşık 20 km","Piknik ve mesire kullanımı","Yakın kent hizmetleri"],
    cautions:["Kırşehir İl Tarım 2026'da 15 Mart-15 Haziran arasında ildeki tüm avlaklarda amatör avı yasaklamıştır; yıllık güncel duyuru kontrol edilmelidir.","Kışın göl tamamen donabilir; buz yüzeyi güvenli erişim veya av platformu değildir.","Mesire/piknik yoğunluğunda atış güvenliği önceliklidir.","Baraj işletme yapıları ve özel/parsel sınırları balık avına elverişli genel tanımdan ayrı değerlendirilmelidir."],
    accommodationOptions:[{name:"Kırşehir şehir merkezi",type:"Kent merkezi / konaklama araştırma tabanı",distanceKm:20,sourceUrl:"https://kirsehir.ktb.gov.tr/TR-196434/cugun-baraj.html",note:"İl Kültür ve Turizm Müdürlüğü Çuğun Barajı'nı Kırşehir'e 20 km mesafede tanımlar; tesis seçimi ayrıca doğrulanmalıdır."}],
    accessEvidence:[{label:"Kırşehir İl Kültür ve Turizm – Çuğun rekreasyon bağlamı",value:"Çuğun Barajı piknik ve mesire için tercih edilen, balık avı için elverişli olarak tanımlanan bir göldür.",sourceUrl:"https://kirsehir.ktb.gov.tr/TR-196434/cugun-baraj.html",note:"Resmî ziyaret ve balıkçılık bağlamıdır; belirli kıyının güncel amatör av izni veya özel mülkiyet durumunu tek başına doğrulamaz."}],
    seasonalNotes:["Kırşehir İl Tarımın 12 Mart 2026 duyurusuna göre 15 Mart-15 Haziran 2026 arasında ildeki tüm avlak sahalarında amatör su ürünleri avcılığı yasaktır; sonraki yıllarda güncel duyuru esas alınmalıdır.","Sazan ve Atherina boyeri 2023 yayımlı rota-özel akademik fauna çalışmasıyla desteklenir."],
    planningNotes:["Barajın mesire işlevi, olta atılabilecek her kıyının açık olduğu anlamına gelmez; insan yoğunluğundan ayrılmış güvenli bölüm seçilmelidir.","Kışın buz tutan yüzeye çıkılmamalı; çözülme döneminde çamur ve kıyı kopması riski dikkate alınmalıdır.","Kırşehir İl Tarımın yıllık av yasağı duyurusu, genel 6/2 metniyle birlikte hareket günü kontrol edilmelidir."],
    transport:"Kırşehir İl Kültür ve Turizm Müdürlüğü Çuğun Barajı'nı kent merkezine yaklaşık 20 km mesafede, piknik ve mesire kullanılan bir alan olarak tanımlar. Bu, genel ulaşım bağlamını güçlendirir; son park, özel parsel ve olta atılabilecek kıyı cebinin kamusallığı sahada ayrıca doğrulanmalıdır.",
    crowdNote:"Mesire ve piknik kullanımı nedeniyle iyi havalarda yoğunluk artabilir. Güvenli atış koridoru bulunmayan kıyı bölümünde olta açılmamalıdır.",
    sources:[
      {label:"Kırşehir Ahi Evran Üniversitesi – Çoğun Baraj Gölü balık faunası",url:"https://dergipark.org.tr/tr/pub/kujinas/article/1353712",note:"2019 saha örneklemesine dayanan, 2023 yayımlı rota-özel hakemli fauna çalışmasıdır."},
      {label:"Kırşehir İl Kültür ve Turizm – Çuğun Baraj",url:"https://kirsehir.ktb.gov.tr/TR-196434/cugun-baraj.html",note:"Konum, mesire kullanımı ve balık avına elverişlilik bağlamını resmî olarak verir."},
      {label:"Kırşehir İl Tarım – 2026 su ürünleri av yasakları",url:"https://kirsehir.tarimorman.gov.tr/Haber/690/%E2%80%8Bsu-Urunleri-Av-Yasaklari-Basliyor",note:"15 Mart-15 Haziran 2026 arasında ildeki tüm avlaklarda amatör av yasağını açıklar."}
    ]
  }),

  "ulusal-yozgat-sureyyabey-baraj-golu":make({
    officialAmateurFishingUseEvidence:false,
    researchSummary:"Süreyyabey Barajı için Yozgat İl Tarım ve Orman Müdürlüğünün 14 Mart 2025 tarihli rota-özel kararı, 18 Nisan 2024'te beş yıllığına kiralanan barajda DSİ görüşüyle hazırlanmış yasak alan haritasını yayımlar: kırmızı bölge her türlü avcılık, yetiştiricilik ve sportif oltaya; mavi kıyı şeritleri ise her türlü amatör oltaya kapalıdır. 30 Nisan 2026 resmî denetim kaydı Süreyyabey'de güncel ticari/amatör kontrol faaliyetlerinin sürdüğünü, 8 Mayıs 2025 kaydı ise Atherina boyeri varlığını rota özelinde doğrular. Hukuki belirsizlik önemli ölçüde azalırken açık mikro kıyı noktası yayımlamadığımız için Güven C uygundur; yasak haritası dışındaki alanların otomatik olarak serbest olduğu varsayılmaz.",
    fish:["Gümüş Balığı"],
    fishEvidence:[{name:"Gümüş Balığı",scientificName:"Atherina boyeri",evidenceLevel:"2025 rota özelinde resmî avcılık kaydı",sourceLabel:"Yozgat İl Tarım – Süreyyabey Gümüş Balığı",sourceUrl:"https://yozgat.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=0c1c527c-9f6b-4cd7-87b9-7be94c242ed6&TermSetId=8be41da4-d74a-4ca9-ae72-12adf6ae6879&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=699%2FGumus-Baligi-_atherina-Boyeri-_-Avciligi",note:"Süreyyabey Barajı'nda Atherina boyeri ticari avcılığını 2025'te doğrudan kaydeder; bu kayıt amatör kıyı avının serbest veya verimli olduğunu göstermez."}],
    methods:["Yalnız yasak alan haritası ve 6/2 ile uyumlu kıyıda mevzuata uygun olta"],
    baits:["Hedef türe ve 6/2 kurallarına uygun yem/suni"],
    amenities:["Çekerek ilçe hizmetleri","Resmî yasak alan haritası","Aktif su ürünleri denetimi"],
    cautions:["2025 resmî haritada kırmızı bölge her türlü avcılık ve sportif oltaya tamamen kapalıdır.","Aynı haritadaki mavi kıyı şeritlerinde her türlü amatör olta balıkçılığı yasaktır.","Barajın ticari istihsal hakkı 2024'ten itibaren beş yıllığına kiralanmıştır; ağ, tekne ve kooperatif çalışma alanlarından uzak durulmalıdır.","Genel merkez pini yasak alan sınırını göstermez; harita kontrol edilmeden navigasyon hedefi olarak kullanılmamalıdır."],
    accommodationOptions:[{name:"Çekerek ilçe merkezi",type:"İlçe merkezi / konaklama araştırma tabanı",distanceKm:null,sourceUrl:"https://yozgat.tarimorman.gov.tr/Duyuru/475/Sureyyabey-Barajinda-Balik-Avciligina-Yasaklanan-Alanlar",note:"Resmî karar barajı Çekerek ilçesinde tanımlar; konaklama tesisi ve güncel uygunluk ayrıca araştırılmalıdır."}],
    accessEvidence:[
      {label:"Yozgat İl Tarım – Süreyyabey yasak alan haritası",value:"Kırmızı bölge her türlü av ve sportif oltaya, mavi kıyı şeritleri her türlü amatör oltaya kapalıdır.",sourceUrl:"https://yozgat.tarimorman.gov.tr/Duyuru/475/Sureyyabey-Barajinda-Balik-Avciligina-Yasaklanan-Alanlar",note:"Bu kayıt erişim planlamasında bir 'negatif kanıt'tır: yasak cepleri kesin olarak dışlar; harita dışında kalan her alanı otomatik olarak serbest ilan etmez."},
      {label:"Yozgat İl Tarım – 2026 denetimleri",value:"Süreyyabey'de Nisan 2026 itibarıyla ticari ve amatör su ürünleri denetimleri sürmektedir.",sourceUrl:"https://yozgat.tarimorman.gov.tr/Haber/794/Su-Urunleri-Kontrol-Ve-Denetimleri",note:"Güncel denetim faaliyetini doğrular; belirli bir amatör kıyı izni oluşturmaz."}
    ],
    seasonalNotes:["Süreyyabey için önce 2025 yasak alan haritası, ardından güncel 6/2 tür/dönem kuralları ve yeni Yozgat duyuruları birlikte kontrol edilmelidir.","Atherina boyeri 2025 rota-özel resmî kayıtta doğrulanmıştır; ticari kıyı sürütme ağı faaliyeti amatör yöntem tavsiyesi değildir."],
    planningNotes:["Yasak alan haritasını açmadan genel pin üzerinden kıyı rotası üretme; kırmızı ve mavi alanları kesin biçimde rota dışında tut.","Harita dışında kalan bir kıyı için dahi kamusal giriş, tabela, kooperatif çalışma alanı ve DSİ güvenlik sınırı ayrı doğrulanmalıdır.","Ticari ağ veya tekne faaliyeti görülen bölümde amatör olta kullanma; güvenli mesafe bırak."],
    transport:"Süreyyabey'de erişim bilgisinin en önemli parçası yol değil, resmî yasak alan haritasıdır. Çekerek üzerinden genel baraj çevresine yaklaşmadan önce 2025 İl Tarım haritasındaki kırmızı ve mavi kıyılar dışlanmalı; kalan bölgelerde de son yol ve kamusal giriş yerinde kontrol edilmelidir.",
    crowdNote:"Kooperatif ve ticari av faaliyeti ile amatör kullanım potansiyeli aynı rezervuarda çakışabilir. Yasak haritası dışındaki bir bölümde dahi tekne/ağ hattı veya kalabalık varsa olta açılmamalıdır.",
    sources:[
      {label:"Yozgat İl Tarım – Süreyyabey yasak alanlar",url:"https://yozgat.tarimorman.gov.tr/Duyuru/475/Sureyyabey-Barajinda-Balik-Avciligina-Yasaklanan-Alanlar",note:"2025 tarihli rota-özel yasak haritasını, ticari kiralamayı ve amatör/sportif olta kapalı kıyılarını tanımlar."},
      {label:"Yozgat İl Tarım – 2026 kontrol ve denetimler",url:"https://yozgat.tarimorman.gov.tr/Haber/794/Su-Urunleri-Kontrol-Ve-Denetimleri",note:"Süreyyabey'de 2026 itibarıyla aktif denetim ve yaptırım faaliyetlerini doğrular."},
      {label:"Yozgat İl Tarım – Süreyyabey Gümüş Balığı",url:"https://yozgat.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=0c1c527c-9f6b-4cd7-87b9-7be94c242ed6&TermSetId=8be41da4-d74a-4ca9-ae72-12adf6ae6879&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=699%2FGumus-Baligi-_atherina-Boyeri-_-Avciligi",note:"Atherina boyeri varlığını 2025'te rota özelinde doğrular."}
    ]
  })
};

export const ulusalGuvenIyilestirmeBatch2Meta20260810={
  targetSlugs:Object.keys(ulusalGuvenIyilestirmeleri20260810Batch2),
  targetCount:10,
  minimumConfidence:"C",
  reviewedAt:"2026-08-10"
};
