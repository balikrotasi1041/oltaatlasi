import { ulusalManuelArastirma } from "./meralar-ulusal-manuel-arastirma";

const rulesSource={
  label:"Tarım ve Orman Bakanlığı – 6/2 amatör su ürünleri avcılığı kuralları",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"2024-2028 amatör av dönemi genel çerçevesidir; il ve suya özel kararlar ayrıca uygulanır."
};

const asartepeBase=ulusalManuelArastirma["ulusal-ankara-asartepe-baraj-golu"];
const nazikBase=ulusalManuelArastirma["ulusal-bitlis-nazik-golu"];
const camgaziBase=ulusalManuelArastirma["ulusal-adiyaman-camgazi-baraj-golu"];
const kozanBase=ulusalManuelArastirma["ulusal-adana-kozan-baraj-golu"];
const catalanBase=ulusalManuelArastirma["ulusal-adana-catalan-baraj-golu"];
const karkamisBase=ulusalManuelArastirma["ulusal-sanliurfa-karkamis-baraj-golu-sanliurfa-kiyisi"];
const agriBase=ulusalManuelArastirma["ulusal-agri-balik-golu"];

export const ulusalGuvenIyilestirmeleri20260809={
  "ulusal-ankara-asartepe-baraj-golu":{
    ...asartepeBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde güçlü resmî, akademik ve saha-sinyali doğrulaması",
    researchSummary:"Asartepe (Çanıllı) Barajı için Ankara İl Tarım ve Orman Müdürlüğünün 2022 balıklandırma kaydı doğrudan Asartepe'de amatör balıkçılarla görüşüldüğünü ve rekreasyon alanlarında sportif olta balıkçılığının devamlılığının hedeflendiğini bildirir. ASOF'un Ankara İl Tarım ve Ayaş İlçe Tarım katılımlı sürdürülebilir amatör/sportif olta projesi barajı pilot alan olarak kaydeder. Rota özelindeki hakemli fauna çalışması tür listesini ayrıca destekler. Bu kanıtlar Güven B eşiğini karşılar; saha teyidi olmadığı için A değildir ve barajın her kıyısının serbest/kamusal olduğu sonucu çıkarılmaz.",
    fish:["Sazan","Turna","Tatlı Su Levreği","Gümüşi Havuz Balığı"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Resmî balıklandırma ve hakemli rota kaydı",sourceLabel:"Ankara İl Tarım ve Orman Müdürlüğü – Asartepe balıklandırması",sourceUrl:"https://ankara.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=431",note:"2022'de Asartepe'ye 300 bin yavru sazan bırakıldığını ve amatör/sportif olta balıkçılığının desteklendiğini bildirir; av garantisi değildir."},
      {name:"Turna",scientificName:"Esox lucius",evidenceLevel:"Rota özelinde hakemli fauna çalışması",sourceLabel:"Journal of Limnology and Freshwater Fisheries Research – Asartepe balık faunası",sourceUrl:"https://dergipark.org.tr/tr/pub/limnofish/article/426094",note:"2015-2016 örneklemesinde Asartepe Baraj Gölü'nde Esox lucius tespit edilmiştir; güncel kıyı bulunurluğu veya av başarısı garanti değildir."},
      {name:"Tatlı Su Levreği",scientificName:"Perca fluviatilis",evidenceLevel:"Rota özelinde hakemli fauna çalışması",sourceLabel:"Journal of Limnology and Freshwater Fisheries Research – Asartepe balık faunası",sourceUrl:"https://dergipark.org.tr/tr/pub/limnofish/article/426094",note:"2015-2016 örneklemesinde Perca fluviatilis doğrudan Asartepe'de kaydedilmiştir."},
      {name:"Gümüşi Havuz Balığı",scientificName:"Carassius gibelio",evidenceLevel:"Rota özelinde hakemli fauna/popülasyon kaydı",sourceLabel:"Journal of Limnology and Freshwater Fisheries Research – Asartepe balık faunası",sourceUrl:"https://dergipark.org.tr/tr/pub/limnofish/article/426094",note:"Carassius gibelio Asartepe'nin bilimsel fauna kaydında yer alır; istilacı tür kaydı hedef av tavsiyesi değildir."}
    ],
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    seasonalNotes:[
      "Sazan, turna, tatlı su levreği ve gümüşi havuz balığı rota-özel resmî veya hakemli kaynaklarla desteklenir; aynı kıyıda ve aynı tarihte bulunacakları varsayılmaz.",
      "Ankara İl Tarım ve Orman Müdürlüğünün 2022 Asartepe balıklandırma kaydı amatör balıkçılığı ve rekreasyonel sportif olta kullanımını açıkça destekler. Bu kayıt baraj gövdesi, işletme sahası, özel parsel veya tabelayla kapatılmış bir kıyıya giriş hakkı vermez.",
      "6/2 Tebliğ ile Ankara İl Tarım ve Orman Müdürlüğünün güncel dönem ve suya özel kararları hareket günü birlikte kontrol edilmelidir."
    ],
    planningNotes:[
      "Asartepe'nin amatör/sportif olta kullanımına ilişkin rota-özel resmî kanıtı vardır; buna rağmen son kıyı girişi, bariyer ve özel mülkiyet sınırı saha teyitli değildir.",
      "Baraj gövdesi, su alma yapısı, regülatör, servis yolu ve işletme alanlarını rota dışında tut.",
      "ASOF'un bilgilendirme tabelası tür/dönem/miktar kurallarını görünür kılmak için yerleştirilmiştir; sahadaki daha yeni tabela ve görevli talimatı önceliklidir."
    ],
    sources:[
      {label:"Ankara İl Tarım ve Orman Müdürlüğü – Asartepe'de 300 bin sazan ve amatör balıkçılık",url:"https://ankara.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=431",note:"Asartepe (Çanıllı) Barajı'na 300 bin sazan bırakıldığını, baraj çevresindeki amatör balıkçılarla görüşüldüğünü ve sportif olta balıkçılığının devamlılığının hedeflendiğini bildirir."},
      {label:"ASOF – Asartepe sürdürülebilir amatör ve sportif olta projesi",url:"https://www.asofed.org.tr/38-proje-etkinlikleri.html",note:"Asartepe'nin pilot alan olduğunu ve Ankara İl Tarım, Balıkçılık ve Su Ürünleri Şube ile Ayaş İlçe Tarım katılımıyla kıyıya av kuralları tabelası yerleştirildiğini kaydeder."},
      {label:"ASOF – Asartepe (Çanıllı) Barajı proje sayfası",url:"https://www.asofed.org.tr/34-asartepe-canilli-baraji.html",note:"Barajı sürdürülebilir amatör/sportif olta projesinin pilot alanı olarak tanımlar; tek başına güncel mikro erişim garantisi değildir."},
      {label:"Asartepe Baraj Gölü balık faunası – hakemli makale",url:"https://dergipark.org.tr/tr/pub/limnofish/article/426094",note:"2015-2016 saha örneklemesinde Asartepe'de 14 balık türü tespit edilmiştir."},
      {label:"Asartepe Baraj Gölü sazan popülasyonu – hakemli makale",url:"https://dergipark.org.tr/tr/pub/nevbiltek/article/337304",note:"Asartepe'den yakalanan Cyprinus carpio örnekleriyle rota-özel popülasyon çalışmasıdır."},
      ...(asartepeBase?.sources||[]),
      rulesSource
    ]
  },

  "ulusal-bitlis-nazik-golu":{
    ...nazikBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde güçlü resmî amatör kullanım, mevzuat ve tür doğrulaması",
    researchSummary:"Nazik Gölü için Bitlis Valiliği göl kıyılarını amatör balık avcılığına elverişli bölgeler arasında açıkça sayar; Bitlis İl Kültür ve Turizm Müdürlüğü de Nazik'i olta balıkçılığında öne çıkan turistik değer olarak gösterir. Bitlis İl Tarım ve Orman Müdürlüğünün rota-özel tür/stok kaydı ve 2026 av yasakları bu kullanımın güncel mevzuat çerçevesini tamamlar. Bu nedenle genel rota Güven B'ye yükselir; kesin korunacak hassas alan, sulak alan yönetim kararları, ticari istihsal sahaları ve tabela ile sınırlandırılmış mikro kıyılar bu değerlendirmeye dahil değildir.",
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:true,
    legalAccessUnclear:false,
    navigationVerified:false,
    seasonalNotes:[
      "Bitlis Valiliği Nazik Gölü'nü amatör balık avcılığına elverişli göller arasında sayar; bu genel kıyı kullanımı kanıtı koruma zonlarının veya her parselin açık olduğu anlamına gelmez.",
      "Bitlis İl Tarım ve Orman Müdürlüğünün 9 Nisan 2026 duyurusuna göre Van Gölü havzası ve İnci Kefali bulunan sularda 15 Nisan-15 Temmuz, Bitlis iç sularında Sazangiller için 15 Mayıs-15 Ağustos dönemleri av yasağı kapsamındadır; yeni duyuru çıkarsa en güncel karar uygulanmalıdır.",
      "İnci kefali, sazan, siraz ve havuz balığı rota-özel İl Tarım kayıtlarıyla desteklenir; havuz balığı kaydı hedef av önerisi değildir."
    ],
    planningNotes:[
      "Kesin korunacak hassas alan, sulak alan yönetim zonu ve sahada tabelayla kapatılmış bölümlerde amatör olta kullanımını varsayma.",
      "Ticari istihsal/ağ faaliyeti görülen bölümlere ve çalışma teknelerine yaklaşma; ticari kiralama amatör erişim hakkı değildir.",
      "Kışın donmuş göl yüzeyini yol veya güvenli av platformu kabul etme; genel rota Güven B olsa da saha doğrulaması bulunmadığı için A değildir."
    ],
    sources:[
      {label:"Bitlis Valiliği – amatör balık avcılığı alanları",url:"https://www.bitlis.gov.tr/bitlis-tarihcesi-ve-genel-bakis",note:"Nazik Gölü'nü balık avcılığı için uygun bölgeler arasında sayar ve göl kıyılarının amatör balık avcılığına elverişli olduğunu belirtir."},
      {label:"Bitlis İl Kültür ve Turizm Müdürlüğü – olta balıkçılığı",url:"https://bitlis.ktb.gov.tr/TR-56232/sportif-etkinlikler.html",note:"Nazik Gölü'nü balık avcılığı bakımından öne çıkan turistik değerler arasında gösterir."},
      {label:"Bitlis İl Tarım ve Orman Müdürlüğü – 2026 balık av yasakları",url:"https://bitlis.tarimorman.gov.tr/Duyuru/453/Ilimiz-Balik-Av-Yasaklari-Basliyor",note:"2026 için İnci Kefali ve Sazangillerin ildeki kapalı dönemlerini açıklar; hareket günü daha yeni duyuru kontrol edilmelidir."},
      ...(nazikBase?.sources||[]),
      rulesSource
    ]
  },

  "ulusal-adiyaman-camgazi-baraj-golu":{
    ...camgaziBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde güncel resmî tür ve il mevzuatı doğrulaması",
    researchSummary:"Çamgazi Baraj Gölü'nde sazan varlığı 2024 ve 2025 İl Tarım balıklandırma kayıtlarıyla güçlü biçimde doğrulanır. Adıyaman İl Tarım ve Orman Müdürlüğünün 12 Mart 2026 duyurusu ildeki bütün baraj, göl, gölet ve akarsularda 1 Nisan-30 Haziran 2026 arasında avlanmayı yasaklayarak güncel hukuki çerçeveyi açıklar. Belirli kıyı cebinin kamusal ve amatör kullanıma tahsisli olduğuna dair rota-özel resmî erişim kanıtı bulunmadığından B değildir; ancak kritik genel hukuk belirsizliği giderildiği için Güven C düzeyine çıkar.",
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:false,
    legalAccessUnclear:false,
    navigationVerified:false,
    seasonalNotes:[
      "Sazan Çamgazi'ye ait 2024 ve 2025 resmî balıklandırma kayıtlarıyla desteklenir; bırakılan yavru sayısı güncel stok yoğunluğu veya av başarısı anlamına gelmez.",
      "Adıyaman İl Tarım ve Orman Müdürlüğünün 2026 duyurusuna göre 1 Nisan-30 Haziran arasında ildeki baraj, göl, gölet ve akarsularda su ürünleri avcılığı yasaktır. Sonraki yıllarda veya yeni kararlarda güncel duyuru esas alınmalıdır.",
      "Genel mevzuatın bilinmesi, belirli kıyı parselinin kamuya açık olduğunu göstermez; son yaklaşım ve mülkiyet saha kontrolü gerektirir."
    ],
    sources:[
      {label:"Adıyaman İl Tarım ve Orman Müdürlüğü – Çamgazi'ye 1.075.000 sazan",url:"https://adiyaman.tarimorman.gov.tr/Haber/889/Camgazi-Baraji-Golune-1-075-000-Sazan-Baligi-Yavrusu-Birakildi",note:"2 Eylül 2025'te Çamgazi Baraj Gölü'ne 1.075.000 sazan yavrusu bırakıldığını bildirir."},
      {label:"Adıyaman İl Tarım ve Orman Müdürlüğü – 2026 su ürünleri av yasağı",url:"https://adiyaman.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=714",note:"1 Nisan-30 Haziran 2026 arasında Adıyaman'daki bütün iç sularda avlanma yasağını bildirir."},
      ...(camgaziBase?.sources||[]),
      rulesSource
    ]
  },

  "ulusal-adana-kozan-baraj-golu":{
    ...kozanBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde resmî kimlik, akademik ekoloji ve çoklu hobi-saha doğrulaması",
    researchSummary:"Kozan Barajı'nın Kilgen Çayı üzerindeki kimliği ve sulama işlevi Kaymakamlık tarafından doğrulanır; hakemli limnoloji çalışmaları doğrudan Kozan Baraj Gölü'nü inceler. 2020-2025 arasındaki bağımsız hobi/saha içeriklerinde Kozan Barajı'nda sazan avı tekrar eden biçimde kaydedilir. Bu saha sinyalleri resmî av izni yerine kullanılmaz; 6/2 genel çerçevesi ile güncel Adana kararları ve son kıyı erişimi ayrıca kontrol edilmelidir. Kritik rota kimliği/tür boşluğu kapandığı için kayıt Güven C'ye yükselir, rota-özel resmî amatör alan kanıtı olmadığı için B olmaz.",
    fish:["Sazan"],
    fishEvidence:[
      {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"Çoklu hobi/saha av kaydı",sourceLabel:"KozanBilgi – Kozan Barajı sazan avı saha içerikleri",sourceUrl:"https://kozanbilgi.net/2025/02/kozan-baraji-balik-avi-ziller-hic-susmadi-kis-gunu-cok-balik-yakaladik/",note:"9 Şubat 2025'te Kozan Barajı'nda yapılan amatör avı kaydeder; ayrıca farklı yıllardaki bağımsız video/saha içerikleri sazan avını tekrarlar. Bu kanıt tür/saha sinyalidir, hukuki izin değildir."}
    ],
    strongOfficialSource:true,
    officialAmateurFishingUseEvidence:false,
    legalAccessUnclear:false,
    navigationVerified:false,
    seasonalNotes:[
      "Sazan için Kozan Barajı'nda farklı yıllara yayılan hobi/saha av kayıtları vardır; tür kanıtı resmî stok sayımı değildir ve av garantisi vermez.",
      "2025'te barajda çok düşük su seviyesi ve kuraklık raporlanmıştır; su seviyesi kıyı güvenliği, çamur ve balık habitatını hızlı biçimde değiştirebilir. Hareket günü güncel DSİ/sulama işletmesi bilgisi kontrol edilmelidir.",
      "6/2 Tebliğ ve Adana İl Tarım ve Orman Müdürlüğünün güncel içsu kararları esas alınır; rota-özel resmî amatör alan tahsisi bulunmadığından kayıt B değildir."
    ],
    planningNotes:[
      "Kozan Kaymakamlığının kaydı barajın Kilgen Çayı üzerindeki resmî kimliğini doğrular; DSİ/işletme sahası ve servis yollarını kamusal kıyı gibi değerlendirme.",
      "Hobi videoları ve yerel paylaşımlar kıyıda fiilî balıkçılık sinyali sağlar ancak özel mülkiyet, bariyer veya güncel yasakları geçersiz kılmaz.",
      "Su seviyesi çok düştüğünde eski göl tabanına araçla girme; çamur, ani kot farkı ve geri dönüş riski vardır."
    ],
    sources:[
      {label:"Kozan Kaymakamlığı – Kozan Barajı ve Kilgen Çayı",url:"https://kozan.gov.tr/genel-cografya-ve-yeryuzu-sekilleri",note:"Kozan Barajı'nın Kilgen Çayı üzerinde bulunduğunu ve sulama işlevini doğrular."},
      {label:"Kozan Baraj Gölü zooplankton ve su kalitesi – hakemli çalışma",url:"https://dergipark.org.tr/tr/pub/limnofish/article/538344",note:"Doğrudan Kozan Baraj Gölü'nde örnekleme yapılmış rota-özel akademik çalışmadır; amatör av izni değildir."},
      {label:"KozanBilgi – 2025 Kozan Barajı amatör av saha kaydı",url:"https://kozanbilgi.net/2025/02/kozan-baraji-balik-avi-ziller-hic-susmadi-kis-gunu-cok-balik-yakaladik/",note:"2025 tarihli yerel/hobi kaydı barajda fiilî amatör balıkçılık yapıldığını gösterir; hukuki izin yerine kullanılamaz."},
      {label:"YouTube – Kozan Barajı sazan avı saha kaydı",url:"https://www.youtube.com/watch?v=czRUd02Y3gw",note:"2020 tarihli amatör av videosunda Kozan Barajı'nda sazan yakalandığı raporlanır; tür için destekleyici saha sinyalidir."},
      {label:"Kozan Sulama Birliği – 2025 düşük su seviyesi",url:"https://kozansulamabirligi.gov.tr/haberler/adana-da-kozan-baraji-kuruma-noktasina-geldi/",note:"2025'te su seviyesinin kritik ölçüde düştüğünü bildirir; güncel durum hareket günü yeniden kontrol edilmelidir."},
      ...(kozanBase?.sources||[]),
      rulesSource
    ]
  },

  "ulusal-adana-catalan-baraj-golu":{
    ...catalanBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde koruma/hukuk riski yeniden araştırıldı; kritik boşluk sürüyor",
    researchSummary:"Çatalan Baraj Gölü için resmî içme suyu ve koruma işlevi ile akademik balık topluluğu araştırmaları doğrulanmıştır. Açık kaynak hobi paylaşımlarında balıkçılık sinyali bulunsa da bunlar içme suyu koruma zonu, kamusal son kıyı girişi veya güncel amatör av iznini kanıtlamaz. Özellikle üniversite proje kaydının Çatalan'ı koruma/içme suyu bağlamında Seyhan'dan ayırması nedeniyle güven harfi yükseltilmedi; Güven D korunur.",
    legalAccessUnclear:true,
    officialAmateurFishingUseEvidence:false,
    navigationVerified:false,
    planningNotes:[
      "Sosyal/hobi içeriklerinde görülen olta kullanımı güncel izin veya koruma zonu doğrulaması değildir; bu nedenle mikro kıyı konumu yayımlanmaz.",
      ...(catalanBase?.planningNotes||[])
    ]
  },

  "ulusal-sanliurfa-karkamis-baraj-golu-sanliurfa-kiyisi":{
    ...karkamisBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde akademik işletme ve güvenlik taraması yenilendi; kritik erişim boşluğu sürüyor",
    researchSummary:"Karkamış Baraj Gölü hakkında akademik çalışmalar barajda yoğun kafes alabalık yetiştiriciliği ve işletme alanlarını doğrular. Bu kanıtlar amatör kıyı avcılığını değil ticari/yetiştiricilik kullanımını gösterir. Şanlıurfa kıyısında güvenli, kamusal ve rota-özel amatör erişim kanıtı bulunamadığı; baraj işletmesi, su ürünleri tesisleri ve güvenlik hassasiyeti sürdüğü için kayıt Güven D'de bırakılır.",
    legalAccessUnclear:true,
    officialAmateurFishingUseEvidence:false,
    navigationVerified:false,
    sources:[
      {label:"Aquaculture Studies – Karkamış Baraj Gölü alabalık işletmeleri",url:"https://dergipark.org.tr/en/pub/yunusae/article/235765",note:"Karkamış'ta 10 kafes işletmesini inceleyen rota-özel akademik çalışma; ticari/yetiştiricilik kullanımının yoğunluğunu gösterir, amatör av kanıtı değildir."},
      ...(karkamisBase?.sources||[]),
      rulesSource
    ]
  },

  "ulusal-agri-balik-golu":{
    ...agriBase,
    researchedAt:"2026-08-09",
    researchStatus:"Rota özelinde akademik balıkçılık ve koruma taraması yenilendi; amatör hukuk boşluğu sürüyor",
    researchSummary:"Ağrı Balık Gölü'nde ticari balıkçılığın varlığı 2019 saha verilerine dayanan hakemli çalışmayla güçlü biçimde doğrulanır; resmî turizm kaynakları da göl kimliğini, alabalık/sazan varlığını, ziyaretçi kullanımını ve içme-kullanma suyu koruma bağlamını destekler. Buna rağmen güncel rota-özel amatör olta izni ve koruma zonlarıyla uyumlu kamusal kıyı cebi kanıtlanamadığından ticari balıkçılık kaydı amatör hakka çevrilmez ve Güven D korunur.",
    legalAccessUnclear:true,
    officialAmateurFishingUseEvidence:false,
    navigationVerified:false,
    sources:[
      {label:"Ağrı Balık Gölü balıkçılığının genel durumu – hakemli çalışma",url:"https://dergipark.org.tr/tr/pub/jaes/article/793828",note:"2019'da 28 balıkçıyla yapılan saha araştırması gölde ticari balıkçılığın varlığını belgeler; amatör av izni veya kamusal kıyı erişimi değildir."},
      {label:"Ağrı Balık Gölü doğa ve kamp turizmi – akademik çalışma",url:"https://dergipark.org.tr/tr/pub/aicusbed/article/774566",note:"Gölün turizm ve ziyaret bağlamını akademik olarak inceler; koruma ve amatör av izinlerinin yerine geçmez."},
      ...(agriBase?.sources||[]),
      rulesSource
    ]
  }
};
