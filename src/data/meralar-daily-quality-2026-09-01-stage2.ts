import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024-31 Ağustos 2028 dönemindeki genel amatör avcılık hükümleri; yerel, kiralama, koruma ve suya özel kısıtlar ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

type UpgradeNote={district?:string;researchSummary:string;verification:string;caution:string;navigationNote?:string};

export const promoted20260901Stage2=[
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-artvin-borcka-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-van-zernek-baraj-golu",
  "ankara-500km-adiyaman-ataturk-baraj-golu",
  "ulusal-erzincan-tercan-baraj-golu",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti",
  "ulusal-eskisehir-catoren-baraj-golu",
  "ulusal-eskisehir-gokcekaya-baraj-golu",
  "ankara-500km-ankara-mogan-golu",
  "ulusal-malatya-boztepe-baraj-golu-malatya",
  "ulusal-malatya-kapikaya-baraj-golu-malatya",
  "ankara-500km-eskisehir-yayikli-goleti",
  "ankara-500km-eskisehir-ozdenk-goleti",
] as const;

const evidenceBySlug:Record<string,ResearchSource[]>={
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu":[
    {label:"Devrekâni Kaymakamlığı - Çiğdem Göleti",url:"https://www.devrekani.gov.tr/igdem-goleti",note:"Göletin DSİ tarafından Örenbaşı/Çatak Deresi çevresinde kurulduğunu; in balığı ve tatlısu kefali tespit edildiğini, sonradan pullu ve aynalı sazan ekimi yapıldığını rota özelinde bildirir."},
    {label:"Kastamonu İl Tarım - Çiğdem Göleti balıklandırması",url:"https://kastamonu.tarimorman.gov.tr/Haber/1053/Ilimizde-Goletler-Baliklandirildi",note:"Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını doğrular."},
  ],
  "ulusal-erzincan-karasu-nehri-erzincan-hatti":[
    {label:"Atatürk Üniversitesi - Karasu Nehri (Erzincan) balık ve fitoplankton kompozisyonu",url:"https://avesis.atauni.edu.tr/yayin/06d8728a-148f-4465-9fd3-b39885d4a202/karasu-nehri-erzincan-balik-ve-fitoplankton-kompozisyonunun-belirlenmesi",note:"Erzincan Karasu Nehri'ni doğrudan konu alan üniversite çalışması; rota özelinde balık kompozisyonu araştırmasını doğrular."},
    {label:"EBYÜ Yukarı Fırat Havzası hedefleri",url:"https://ebyu.edu.tr/hedefler/",note:"Karasu Nehri su kalitesi ve balık türleri biyoekolojik çalışmalarını üniversite araştırma hedefi olarak kaydeder; havza bağlamını destekler."},
  ],
  "ulusal-ardahan-kura-nehri-ardahan-hatti":[
    {label:"Ardahan Üniversitesi - Ardahan İli İhtiyofaunası",url:"https://www.ardahan.edu.tr/dosyalar/v_ders_icerigi/ardahan_calistayi/assets/ad/Ardahan%20Co%C4%9Frafya%20ve%20Turizmi/Cilt%203%20-%20B%C3%B6l%C3%BCm%2018-%20Ardahan%20%C4%B0li%20%C4%B0htiyofaunas%C4%B1.pdf",note:"Kura Nehri ana kolu ve bağlı istasyonlarda balık türlerini doğrudan örnekleyen üniversite çalışmasıdır."},
    {label:"Tarım ve Orman Bakanlığı - Türkiye Su Atlası",url:"https://www.tarimorman.gov.tr/SYGM/Belgeler/T%C3%BCrkiye%20Su%20Atlas%C4%B1/Turkiye-Su-Atlasi.pdf",note:"Kura-Aras havzası ve yüzey suyu kimliği için resmî havza bağlamı sağlar; mikro kıyı erişimi değildir."},
  ],
  "ulusal-artvin-borcka-baraj-golu":[
    {label:"Borçka Baraj Gölü Squalius orientalis üreme çalışması",url:"https://doi.org/10.12714/egejfas.2018.35.2.10",note:"Borçka Baraj Gölü'nü doğrudan örnekleme sahası olarak ele alan hakemli tür çalışmasıdır."},
    {label:"RTEÜ AVESİS - Borçka Baraj Gölü kültür balıkçılığı çevresel etkileşimi",url:"https://avesis.erdogan.edu.tr/yonetilen-tez/82df76f2-a8bc-4906-9f3e-5eece8f65f05/artvin-bolgesi-kultur-balikciligi-cevresel-etkilesimi-uzerine-bir-calisma-borcka-baraj-golu-ornegi",note:"2023-2024 arasında yedi örnekleme noktalı üniversite tez çalışması; göl kimliği, saha kullanımı ve sucul üretim baskısını doğrular."},
  ],
  "ulusal-aksaray-ciftevi-baraj-golu":[
    {label:"Aksaray İl Tarım - Çiftevi Göleti balıklandırması",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."},
    {label:"Tarım ve Orman - amatör avcılık mevzuatı",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"Güncel amatör avcılık mevzuatı ve uygulama çerçevesi için resmî başvuru kaynağıdır."},
  ],
  "ulusal-bolu-caykoy-baraj-golu-bolu":[
    {label:"Bolu Valiliği - Çayköy Göleti",url:"https://www.bolu.gov.tr/aykoy-goleti",note:"Göynük ilçesinin yaklaşık 20 km güneyindeki Çayköy Göleti'nde sportif olta balıkçılığı ve piknik yapılabildiğini doğrudan bildirir."},
    {label:"Bolu Valiliği - Spor Turizmi",url:"https://www.bolu.gov.tr/spor-turizmi",note:"Çayköy Göleti'ni Bolu'da sportif balıkçılık yapılan su varlıkları arasında sayar; mikro kıyı ve güncel tabela kontrolü yine gerekir."},
  ],
  "ulusal-van-zernek-baraj-golu":[
    {label:"Van İl Tarım - Zernek Barajında stok tespit çalışmaları",url:"https://van.tarimorman.gov.tr/Haber/667/Zernek-Barajinda-Stok-Tespit-Calismalari",note:"Zernek Barajı'nda balık stoku için boy/ağırlık ölçümlü resmî saha çalışması yapıldığını doğrular; stok kiralama bağlamı nedeniyle güncel kullanım hakkı ayrıca kontrol edilir."},
    {label:"Van İl Kültür ve Turizm - Gürpınar",url:"https://van.ktb.gov.tr/TR-437248/gurpinar.html",note:"Zernek Barajı'nın Gürpınar/Zernek Boğazı kimliğini ve genel coğrafi bağlamını resmî olarak doğrular."},
  ],
  "ankara-500km-adiyaman-ataturk-baraj-golu":[
    {label:"Adıyaman İl Tarım - Atatürk Barajı Gölüne 7 milyon yavru",url:"https://adiyaman.tarimorman.gov.tr/Haber/780/Ataturk-Baraji-Golune-7-Milyon-Balik-Yavrusu-Birakildi",note:"2024'te 2,55 milyon şabut ve daha önce 4,5 milyon sazan yavrusunun Atatürk Barajı Gölü'ne bırakıldığını rota özelinde doğrular."},
    {label:"Şanlıurfa İl Tarım - Atatürk Barajı 5. Avlak stok ilanı",url:"https://sanliurfa.tarimorman.gov.tr/Duyuru/512/Sanliurfa-Ili-Hilvan-Ilcesi-Ataturk-Baraj-Golu-5-Avlak-Sahasinin-Kiralanmasi-Ihale-Ilani",note:"Atatürk Barajı avlak sahasında Mezopotamya yayını, inci kefali, sazan, şabut, bizir ve siraz için resmî stok miktarları yayımlar; belirli Adıyaman kıyısının kiralama statüsünü tek başına belirlemez."},
  ],
  "ulusal-erzincan-tercan-baraj-golu":[
    {label:"Tercan Kaymakamlığı - Tercan Barajı",url:"https://www.tercan.gov.tr/tercan-baraji",note:"Tercan Barajının Tuzla Çayı üzerinde, Tercan'ın yaklaşık 5 km güneydoğusunda bulunduğunu ve resmî su yapısı kimliğini doğrular; kıyı girişi değildir."},
    {label:"Erzincan Üniversitesi Fen Bilimleri Dergisi - Tercan Baraj Gölü sazan çalışması",url:"https://dergipark.org.tr/en/pub/erzifbed/article/698577",note:"Mayıs-Ekim 2017 arasında Tercan Baraj Gölünden 190 Cyprinus carpio örneğiyle yürütülen rota-özel akademik çalışma; sazan varlığını güçlü biçimde destekler."},
  ],
  "ulusal-erzincan-firat-nehri-kemaliye-hatti":[
    {label:"Kemaliye Belediyesi - Coğrafi Yapı",url:"https://kemaliye.bel.tr/sayfa/cografi-yapisi",note:"Karasu/Fırat'ın Kemaliye koridorundaki genel güzergâhını ve Keban'a bağlanan su hattını yerel resmî kaynak olarak doğrular; mikro kıyı erişimi değildir."},
    {label:"Fırat Üniversitesi Fen Bilimleri Dergisi - Keban Baraj Gölü Kemaliye Bölgesi balıkları",url:"https://dergipark.org.tr/tr/pub/fufbd/article/400681",note:"Kemaliye bölgesinde avlanan balıklar ve verimliliklerini inceleyen rota-özel akademik çalışma; yedi balık türüne ilişkin doğrudan saha/veri kanıtı sağlar."},
  ],
  "ulusal-eskisehir-catoren-baraj-golu":[
    {label:"Eskişehir Valiliği - Çatören Baraj Gölü avlak stok ilanı",url:"https://www.eskisehir.gov.tr/catoren-baraj-golu-avlak-bolgesi-su-urunleri-istihsal-hakki-kiralanacaktir",note:"Seyitgazi Çatören Baraj Gölünün 404 ha avlak alanında sazan ve havuz balığı için resmî yıllık stok miktarlarını yayımlar; ticari kiralama amatör kıyı hakkı anlamına gelmez."},
    {label:"Eskişehir İl Tarım - 2022 sazan balıklandırması",url:"https://eskisehir.tarimorman.gov.tr/Haber/1045/",note:"Çatören Baraj Gölünü 2022 pullu sazan balıklandırma programında rota özelinde sayar; programın amatör balıkçıların yararlanabileceği yetiştiriciliğe açılmamış sularda yürütüldüğünü açıklar."},
    {label:"ESOGÜ AVESİS - Çatören Baraj Gölü biyotik/abiyotik element çalışması",url:"https://avesis.ogu.edu.tr/yayin/c634a00b-17e2-4066-8cb0-6b068d62bf2a/catoren-baraj-golu-biyotik-ve-abiyotik-ogelerinde-makro-ve-mikro-element-akumulasyonlari",note:"Çatören'i doğrudan çalışma alanı olarak kullanan üniversite çalışması, akademik sucul ekosistem kanıtı sağlar."},
  ],
  "ulusal-eskisehir-gokcekaya-baraj-golu":[
    {label:"Eskişehir İl Tarım - Gökçekaya Baraj Gölü avlak stok ilanı",url:"https://eskisehir.tarimorman.gov.tr/Duyuru/627/Gokcekaya-Baraj-Golu-Avlak-Bolgesi-Su-Urunleri-Istihsal-Hakki-Kiralanmasi",note:"Mihalıççık-Alpu koridorundaki Gökçekaya Baraj Gölünde sazan, tatlısu kefali ve havuz balığı için resmî stok miktarları yayımlar; kiralama amatör kullanım izni değildir."},
    {label:"Gazi Üniversitesi AVESİS - Gökçekaya Baraj Gölü sediman çalışması",url:"https://avesis.gazi.edu.tr/yonetilen-tez/51085b2f-f6dd-4041-9ed1-6e0976c4a5bd/gokcekaya-baraj-golu-dip-sedimaninin-nutrient-duzeylerinin-belirlenmesi",note:"Gökçekaya Baraj Gölünde beş istasyonda mevsimsel örneklemeye dayalı üniversite tez çalışması; rota kimliği ve sucul ortamı bağımsız akademik aileyle destekler."},
  ],
  "ankara-500km-ankara-mogan-golu":[
    {label:"Ankara Büyükşehir Belediyesi - Mogan Park",url:"https://www.ankara.bel.tr/tr/haberler/baskentte-deniz-ozlemini-mogan-park-gideriyor-5915",note:"Mogan kıyısındaki kamusal park kullanımını ve balık tutmayı rekreasyon faaliyetleri arasında açıkça sayar; gölün tüm kıyısını serbest ilan etmez."},
    {label:"Balıkesir Üniversitesi Fen Bilimleri Dergisi - Mogan Gölü balık faunası",url:"https://dergipark.org.tr/tr/pub/baunfbed/article/321040",note:"Mogan Gölünün balık faunasını doğrudan inceleyen hakemli/TR Dizin akademik çalışma; rota özelinde çoklu tür kanıtı sağlar."},
    {label:"Eğirdir Su Ürünleri Fakültesi Dergisi - Mogan Gölü sazan çalışması",url:"https://dergipark.org.tr/en/pub/egirdir/article/292000",note:"Mogan Gölündeki Cyprinus carpio üzerine rota-özel akademik çalışma, sazan varlığını ayrıca destekler."},
  ],
  "ulusal-malatya-boztepe-baraj-golu-malatya":[
    {label:"Malatya İl Tarım - 2023 sazan balıklandırması",url:"https://malatya.tarimorman.gov.tr/Haber/838/",note:"Hekimhan Boztepe Baraj Gölünü 2023 yavru sazan balıklandırma programında açıkça sayar; geçmiş balıklandırma tür olasılığıdır, av garantisi değildir."},
    {label:"Turkish Journal of Agricultural and Natural Sciences - Boztepe Recai Kutan su kalitesi",url:"https://dergipark.org.tr/en/pub/turkjans/article/285846",note:"Boztepe Recai Kutan Baraj Gölünde üç istasyonda aylık örneklemeye dayalı akademik çalışma; su gövdesi kimliği ve sucul kullanım bağlamını destekler."},
    {label:"Malatya Valiliği - sulama tesislerinde can ve mal güvenliği",url:"https://www.malatya.gov.tr/sulama-tesislerinde-can-ve-mal-guvenligi-icin-alinan-tedbirler-ve-uyarilar",note:"Boztepe dahil baraj/göletlerde suya girilmemesi, bariyer ve uyarı levhalarına uyulması gerektiğini resmî güvenlik bağlamında hatırlatır."},
  ],
  "ulusal-malatya-kapikaya-baraj-golu-malatya":[
    {label:"Malatya İl Tarım - Kapıkaya rekreasyonel kiralama ilanı",url:"https://malatya.tarimorman.gov.tr/Duyuru/602/Su-Urunleri-Projeye-Dayali-Olarak-Rekreasyonel-Amacli-Kiralama-Ihalesi-Ilani",note:"Battalgazi Kapıkaya Baraj Gölünü rekreasyon amaçlı su ürünleri kiralama alanı olarak resmî kayda geçirir; belirli mikro kıyının bugün açık olduğu varsayılmaz."},
    {label:"Malatya İl Tarım - 2023 sazan balıklandırması",url:"https://malatya.tarimorman.gov.tr/Haber/838/",note:"Battalgazi Kapıkaya Baraj Gölünü yavru sazan bırakılan sular arasında rota özelinde sayar."},
    {label:"Malatya Valiliği - 2026 DSİ boğulma önleme duyurusu",url:"https://www.malatya.gov.tr/dsi-92-sube-mudurlugunun-baraj-golet-ve-sulama-tesislerinde-bogulma-olaylarinin-onlenmesi-hakkinda-duyurusu",note:"Kapıkaya dahil su yapılarında suya girilmemesi ve güvenlik tabela/bariyerlerine uyulması gerektiğini güncel resmî risk kaynağı olarak belirtir."},
  ],
  "ankara-500km-eskisehir-yayikli-goleti":[
    {label:"Eskişehir İl Tarım - 2022 sazan balıklandırması",url:"https://eskisehir.tarimorman.gov.tr/Haber/1045/",note:"Alpu'daki Koşmat Göletini pullu sazan bırakılan sular arasında sayar; İl Müdürlüğü programın amatör balıkçıların yararlanabileceği yetiştiriciliğe açılmamış kaynaklarda yürütüldüğünü açıklar."},
    {label:"Eskişehir İl Tarım - 2018 il brifingi",url:"https://eskisehir.tarimorman.gov.tr/Belgeler/2018_Faaliyet_Raporu/2018_Yili_Brifing.pdf",note:"Alpu su yapıları listesinde 'Yayıklı (Koşmat) Göleti' ad eşleşmesini resmî olarak verir; 2022 Koşmat balıklandırma kaydını mevcut Yayıklı slugıyla ilişkilendirir."},
  ],
  "ankara-500km-eskisehir-ozdenk-goleti":[
    {label:"Eskişehir İl Tarım - 2022 sazan balıklandırması",url:"https://eskisehir.tarimorman.gov.tr/Haber/1045/",note:"Alpu Özdenk Göletini pullu sazan bırakılan sular arasında doğrudan sayar; geçmiş balıklandırma güncel bulunurluk için olasılık kanıtıdır."},
    {label:"Eskişehir İl Tarım - 2018 il brifingi",url:"https://eskisehir.tarimorman.gov.tr/Belgeler/2018_Faaliyet_Raporu/2018_Yili_Brifing.pdf",note:"Özdenk Göletini Alpu ilçesindeki resmî su yapıları listesinde doğrular; mikro kıyı girişi veya park noktası değildir."},
  ],
};

const notesBySlug:Record<string,UpgradeNote>={
  "ulusal-erzincan-tercan-baraj-golu":{district:"Tercan",researchSummary:"Tercan Barajının ilçe ve su yapısı kimliği Kaymakamlık kaydıyla; sazan olasılığı ise Tercan Baraj Gölünden doğrudan örneklenen akademik çalışmayla doğrulanır. Kıyının hangi cebinin kamusal/açık olduğu doğrulanmış sayılmaz.",verification:"1 Eylül 2026: Tercan Kaymakamlığı barajın Tercan'ın yaklaşık 5 km güneydoğusundaki konumunu doğruladı; hakemli çalışma 2017 örneklemesinde 190 sazan kaydetti. Genel 6/2 mevzuatı kontrol edildi; mikro erişim ve saha tabelası teyitsizdir.",caution:"Baraj gövdesi ve işletme yapıları rota dışıdır; su kotu, dik/gevşek şev, güncel kiralama/işletme sınırı ve tabela hareket günü kontrol edilmelidir."},
  "ulusal-erzincan-firat-nehri-kemaliye-hatti":{district:"Kemaliye",researchSummary:"Kemaliye Karasu/Fırat koridoru yerel resmî coğrafya kaydıyla, balık varlığı ise Keban Baraj Gölünün Kemaliye bölgesindeki doğrudan akademik av/verim çalışmasıyla desteklenir. Nehir kıyısında tek bir kesin giriş noktası ilan edilmez.",verification:"1 Eylül 2026: Kemaliye Belediyesi Karasu/Fırat koridorunu doğruladı; Fırat Üniversitesi çalışması Kemaliye bölgesinde yedi balık türüne dayalı doğrudan saha verisi sundu. Genel konum C seviyesine yükseltildi; taşkın, kıyı erişimi ve mikro hukuki durum saha teyitlidir denemez.",caution:"Karasu/Fırat hattında akım, ani su seviyesi değişimi, dik kaya/şev ve HES/baraj işletme etkisi olabilir; suya girilmeden ve tabela/yerel kısıtlar kontrol edilerek plan yapılmalıdır."},
  "ulusal-eskisehir-catoren-baraj-golu":{district:"Seyitgazi",researchSummary:"Çatören'in Seyitgazi'deki baraj/avlak kimliği güncel resmî stok ilanıyla, sazan olasılığı resmî balıklandırmayla ve sucul ekosistem bağlamı ESOGÜ çalışmasıyla üç bağımsız kanıt katmanında desteklenir. Ticari istihsal hakkı amatör kullanım izni değildir.",verification:"1 Eylül 2026: Valilik ve İl Tarım rota-özel Çatören stok/balıklandırma kayıtları, ESOGÜ akademik çalışması ve 6/2 mevzuatı birlikte değerlendirildi. Mikro park/kıyı girişi doğrulanmadığından genel bölge hassasiyeti korunur.",caution:"Ticari avlak/kiralama sınırları ile baraj işletme alanları amatör kıyı hakkı sayılmaz; geçmiş balık ölümü kayıtları da dikkate alınarak güncel su kalitesi, tabela ve erişim hareket günü kontrol edilmelidir."},
  "ulusal-eskisehir-gokcekaya-baraj-golu":{district:"Mihalıççık / Alpu",researchSummary:"Gökçekaya Baraj Gölü resmî avlak ilanında Mihalıççık-Alpu koridorunda tanımlanır; sazan, tatlısu kefali ve havuz balığı stokları doğrudan yayımlanmıştır. Gazi Üniversitesi tez örneklemesi su gövdesini bağımsız akademik aileyle destekler.",verification:"1 Eylül 2026: İl Tarım stok ilanı ve Gazi Üniversitesi rota-özel çalışması çaprazlandı. Su gövdesi iki ilçeye yayıldığından ilçe alanı 'Mihalıççık / Alpu' olarak belirtilir; belirli kıyı cebinin kamusal olduğu veya kiralama sınırı dışında kaldığı varsayılmaz.",caution:"Gökçekaya'da dik rezervuar kıyısı, su kotu değişimi, baraj/HES işletme alanları ve ticari istihsal sınırları vardır; mikro kıyı ve park için saha tabelası esas alınmalıdır."},
  "ankara-500km-ankara-mogan-golu":{district:"Gölbaşı",researchSummary:"Mogan Gölü balık faunası akademik olarak doğrudan örneklenmiştir; Ankara Büyükşehir Belediyesi Mogan Park kıyısında balık tutmayı rekreasyon faaliyeti olarak açıkça sayar. Bu kanıt yalnız kamusal park/genel kıyı bağlamıdır, sulak alanın hassas mikro bölgelerine yönlendirme yapılmaz.",verification:"1 Eylül 2026: ABB Mogan Park kamusal kullanım kaydı ve iki rota-özel akademik balık çalışması birlikte değerlendirildi. Gölbaşı kimliği ve genel erişim bağlamı güçlendi; koruma/tabela ve mikro kıyı sınırlamaları hareket günü ayrıca kontrol edilmelidir.",caution:"Mogan hassas sulak alan ekosistemidir; sazlık/üreme alanlarına girilmemeli, yalnız açık kamusal kıyı/park bölümleri ve güncel koruma-avcılık kuralları esas alınmalıdır."},
  "ulusal-malatya-boztepe-baraj-golu-malatya":{district:"Hekimhan",researchSummary:"Boztepe/Recai Kutan Baraj Gölü Hekimhan'da resmî balıklandırmayla sazan olasılığı, akademik su kalitesi örneklemesiyle su gövdesi bağlamı ve Valilik güvenlik duyurusuyla saha riski açısından desteklenir.",verification:"1 Eylül 2026: Malatya İl Tarım balıklandırması, rota-özel akademik örnekleme ve Valilik güvenlik kaydı çaprazlandı. Genel konum ve tür olasılığı C seviyesini karşılar; kıyıya araç/park ve güncel kullanım sınırı saha teyitli değildir.",caution:"Baraj ve sulama tesislerinde suya girilmemeli; bariyer/levhalar, dik veya çamurlu kıyı, su kotu ve işletme sınırları hareket günü kontrol edilmelidir."},
  "ulusal-malatya-kapikaya-baraj-golu-malatya":{district:"Battalgazi",researchSummary:"Kapıkaya Baraj Gölü Battalgazi'de resmî rekreasyonel kiralama ve sazan balıklandırma kayıtlarıyla güçlüdür; 2026 Valilik/DSİ duyurusu güncel boğulma-güvenlik riskini ayrıca tanımlar. Kiralama ilanı belirli mikro kıyının bugün engelsiz olduğu anlamına gelmez.",verification:"1 Eylül 2026: İl Tarımın rekreasyonel kiralama ve balıklandırma kayıtları ile 2026 Valilik güvenlik duyurusu ve 6/2 mevzuatı birlikte değerlendirildi. Genel amatör planlama bağlamı C; mikro kıyı/işletmeci sınırı teyitsizdir.",caution:"Kapıkaya'da suya girmek yasak/tehlikeli kabul edilmeli; DSİ güvenlik levhaları, işletme/kiralama sınırı, baraj yapıları ve değişken su seviyesi önceliklidir."},
  "ankara-500km-eskisehir-yayikli-goleti":{district:"Alpu",researchSummary:"Yayıklı ile Koşmat ad eşleşmesi resmî il brifingiyle kurulmuştur; 2022 İl Tarım kaydı Koşmat Göletini Alpu'da sazan balıklandırılan ve program bağlamında amatör balıkçıların yararlanabileceği kaynaklar arasında sayar. Genel rota dışında mikro giriş doğrulanmaz.",verification:"1 Eylül 2026: 2018 resmî 'Yayıklı (Koşmat) Göleti' ad eşleşmesi ile 2022 Koşmat sazan balıklandırması çaprazlandı. Alpu/Eskişehir kimliği ve sazan olasılığı güçlendi; park, kıyı yolu, mülkiyet ve tabela saha teyitli değildir.",caution:"Küçük sulama göletinde yumuşak çamur, ani kıyı kırılması ve tarımsal araç trafiği olabilir; suya girilmemeli ve son yaklaşımda kamusal yol sürekliliği kontrol edilmelidir."},
  "ankara-500km-eskisehir-ozdenk-goleti":{district:"Alpu",researchSummary:"Özdenk Göleti Alpu resmî su yapısı kayıtlarında doğrulanır; 2022 İl Tarım balıklandırması pullu sazanı rota özelinde destekler ve programın amatör balıkçıların yararlanabileceği yetiştiriciliğe açılmamış kaynaklara yönelik olduğunu belirtir.",verification:"1 Eylül 2026: Eskişehir İl Tarımın 2018 il brifingi ile 2022 Özdenk sazan balıklandırma kaydı çaprazlandı. Genel bölge C seviyesine çıkarıldı; mikro kıyı, park, tarla geçişi ve güncel saha tabelası doğrulanmış sayılmaz.",caution:"Sulama göletinde su seviyesinin hızla değişmesi, çamurlu kıyı ve tarımsal mülkiyet/geçiş riski vardır; araçla doğrudan su kenarına yönlendirme yapılmaz."},
};

const confidenceProfile=(slug:string)=>({
  model:"evidence-v1" as const,
  overall:"C" as const,
  identity:{level:"strong" as const,label:"Rota kimliği kaynaklı",note:"Su varlığı, il/ilçe veya genel koridor resmî/kurumsal ya da rota-özel akademik kanıtla desteklenir; mikro kıyı kesinleştirilmez."},
  legal:{level:"partial" as const,label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ çerçevesi kontrol edilmiştir; kiralama, işletme, koruma veya yerel kararlar belirli kıyıda ayrıca geçerli olabilir."},
  access:{level:"partial" as const,label:"Genel kamusal erişim bağlamı",note:slug==="ankara-500km-ankara-mogan-golu"?"Mogan Park kamusal kullanım kaydı vardır; bu, gölün tüm kıyısını açık alan yapmaz.":"Genel yaklaşım ve rota kimliği kaynaklıdır; park, son patika, özel mülkiyet ve bariyer saha teyitli değildir."},
  species:{level:"strong" as const,label:"Rota özelinde güçlü tür olasılığı",note:"Rota özelindeki resmî balıklandırma/stok kaydı, doğrudan akademik örnekleme veya resmî sportif/rekreasyon kullanımı tür varlığı/olasılığını destekler; av başarısı garantisi değildir."},
  field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Su kotu, kıyı zemini, tabela, güvenlik/işletme sınırı ve geçici kapatma hareket günü kontrol edilmelidir."},
  reviewedAt:"2026-09-01",
});

export const applyDailyQuality20260901Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260901Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-01 Stage2 hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-01 Stage2 gerçek D→C koşulu sağlanmıyor: ${slug} (${previous.confidence})`);
    const additions=evidenceBySlug[slug]||[];
    const note=notesBySlug[slug];
    routeMap.set(slug,{
      ...previous,
      district:note?.district||previous.district,
      sources:uniq([...(previous.sources||[]),...additions,teblig]),
      confidence:"C",
      locationPrecision:previous.locationPrecision||"Genel bölge",
      navigationVerified:false,
      navigationNote:note?.navigationNote||previous.navigationNote||"Gösterilen konum genel planlama içindir; kesin park/kıyı girişi değildir. Son yaklaşımda kamusal yol, özel mülkiyet, işletme/güvenlik sınırı ve saha tabelaları kontrol edilmelidir.",
      researchStatus:"1 Eylül 2026 masa başı kalite yükseltmesi tamamlandı; confidence yalnız rota-özel kanıt eşiğini geçen kayıtlarda D'den C'ye çıkarıldı.",
      researchSummary:note?.researchSummary||previous.researchSummary||"Rota kimliği ve tür olasılığı en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi; mikro kıyı saha teyitli değildir.",
      verification:note?.verification||`1 Eylül 2026 masa başı kalite yükseltmesi: rota kimliği ve tür olasılığı en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi. ${additions.map((s)=>s.label).join("; ")}. Mikro kıyı erişimi ve güncel saha durumu doğrulanmış sayılmaz; geçmiş balıklandırma veya stok kaydı av garantisi değildir.`,
      researchedAt:"2026-09-01",
      updatedAt:"2026-09-01",
      confidenceProfile:confidenceProfile(slug),
      cautions:[...new Set([...(previous.cautions||[]),note?.caution||"Genel konum veya su varlığı kaydı güvenli mikro kıyı girişi anlamına gelmez; park, yol, özel mülkiyet, işletme/güvenlik sınırı ve güncel saha tabelaları hareket günü kontrol edilmelidir."])],
    });
  }
  return routeMap;
};
