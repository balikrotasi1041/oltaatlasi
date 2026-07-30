import { slugifyTr } from "../utils/slug";

export const NATIONAL_ROUTE_PROVINCE_COUNT=81;
export const NATIONAL_ROUTE_COUNT_PER_PROVINCE=5;
export const NATIONAL_ROUTE_EXPECTED_COUNT=405;

const rawRoutes=String.raw`Adana|Akdeniz|Berke Baraj Gölü;Çatalan Baraj Gölü;Kozan Baraj Gölü;Nergizlik Baraj Gölü;Seyhan Baraj Gölü
Adıyaman|Güneydoğu Anadolu|Çamgazi Baraj Gölü;Çat Baraj Gölü;Gözebaşı Baraj Gölü;Hasancık Baraj Gölü;İncesu Baraj Gölü
Afyonkarahisar|Ege|Akdeğirmen Baraj Gölü;Bayat Baraj Gölü;Erkmen Baraj Gölü;Karacaören Baraj Gölü;Kayabelen Baraj Gölü
Ağrı|Doğu Anadolu|Patnos Baraj Gölü;Yazıcı Baraj Gölü;Başköy Baraj Gölü;Balık Gölü;Murat Nehri Ağrı Hattı
Aksaray|İç Anadolu|Balcı Baraj Gölü;Bozkır Baraj Gölü;Çiftevi Baraj Gölü;Eşmekaya Baraj Gölü;Güzelyurt Baraj Gölü
Amasya|Karadeniz|Ayvalı Baraj Gölü;Bayırlı Baraj Gölü;Çitli Baraj Gölü;Destek Baraj Gölü;Doğantepe Baraj Gölü
Ankara|İç Anadolu|Akyar Baraj Gölü;Asartepe Baraj Gölü;Çamlıdere Baraj Gölü;Hirfanlı Baraj Gölü Ankara Kıyısı;Kesikköprü Baraj Gölü
Antalya|Akdeniz|Alakır Baraj Gölü;Çayboğazı Baraj Gölü;Dim Baraj Gölü;Oymapınar Baraj Gölü;Korkuteli Baraj Gölü
Ardahan|Doğu Anadolu|Beyler Baraj Gölü;Çıldır Gölü Ardahan Kıyısı;Aktaş Gölü;Kura Nehri Ardahan Hattı;Posof Çayı
Artvin|Karadeniz|Borçka Baraj Gölü;Deriner Baraj Gölü;Muratlı Baraj Gölü;Yusufeli Baraj Gölü;Çoruh Nehri Artvin Hattı
Aydın|Ege|Kemer Baraj Gölü;Yaylakavak Baraj Gölü;Akçaova Baraj Gölü;Çatak Baraj Gölü;Topçam Baraj Gölü Aydın
Balıkesir|Marmara|Çamköy Baraj Gölü;Çaygören Baraj Gölü;İkizcetepeler Baraj Gölü;Madra Baraj Gölü;Sarıbeyler Baraj Gölü
Bartın|Karadeniz|Kirazlıköprü Baraj Gölü;Bartın Irmağı;Ulus Çayı;Kurucaşile Sahili;Amasra Sahili
Batman|Güneydoğu Anadolu|Ceffan Baraj Gölü;Kırkat Baraj Gölü;Batman Baraj Gölü;Ilısu Baraj Gölü Batman Kıyısı;Batman Çayı
Bayburt|Karadeniz|Demirözü Baraj Gölü;Çoruh Nehri Bayburt Hattı;Masat Çayı;Lori Deresi;Kop Deresi
Bilecik|Marmara|Borçak Baraj Gölü;Dodurga Baraj Gölü Bilecik;Günyurdu Baraj Gölü;Kızıldamlar Baraj Gölü;Sakarya Nehri Bilecik Hattı
Bingöl|Doğu Anadolu|Gayt Baraj Gölü;Özlüce Baraj Gölü;Gülbahar Baraj Gölü;Kiğı Baraj Gölü;Murat Nehri Bingöl Hattı
Bitlis|Doğu Anadolu|Nemrut Krater Gölü;Nazik Gölü;Aygır Gölü Bitlis;Arin Gölü;Van Gölü Tatvan Kıyısı
Bolu|Karadeniz|Çayköy Baraj Gölü Bolu;Gölköy Baraj Gölü;Hasanlar Baraj Gölü Bolu;Abant Gölü;Gölcük Gölü Bolu
Burdur|Akdeniz|Bademli Baraj Gölü;Belenli Baraj Gölü;Belkaya Baraj Gölü;Çavdar Baraj Gölü;Karacaören 1 Baraj Gölü
Bursa|Marmara|Akalan Baraj Gölü;Babasultan Baraj Gölü;Boğazköy Baraj Gölü;Burcun Baraj Gölü;Büyükorhan Baraj Gölü
Çanakkale|Marmara|Atikhisar Baraj Gölü;Bakacak Baraj Gölü;Bayramiç Baraj Gölü;Gökçeada Baraj Gölü;Gönen Baraj Gölü Çanakkale
Çankırı|İç Anadolu|Akhasan Baraj Gölü;Demirciören Baraj Gölü;Dumanlı Baraj Gölü;Gürgenlik Baraj Gölü;Karadere Baraj Gölü Çankırı
Çorum|Karadeniz|Aksu Baraj Gölü Çorum;Bozdoğan Baraj Gölü;Ecvi Yenikışla Baraj Gölü;Geven Baraj Gölü;Geykoca Baraj Gölü
Denizli|Ege|Adıgüzel Baraj Gölü;Buldan Baraj Gölü;Gökpınar Baraj Gölü;Tavas Baraj Gölü;Işıklı Gölü
Diyarbakır|Güneydoğu Anadolu|Batman Baraj Gölü Diyarbakır Kıyısı;Devegeçidi Baraj Gölü;Dicle Baraj Gölü;Göksu Baraj Gölü Diyarbakır;Karakaya Baraj Gölü Diyarbakır Kıyısı
Düzce|Karadeniz|Hasanlar Baraj Gölü Düzce;Efteni Gölü;Büyük Melen Çayı;Küçük Melen Çayı;Akçakoca Sahili
Edirne|Marmara|Altınyazı Baraj Gölü;Başağıl Baraj Gölü;Beykonak Baraj Gölü;Bülbüldere Baraj Gölü;Çavuşköy Baraj Gölü Edirne
Elazığ|Doğu Anadolu|Cip Baraj Gölü;Kalecik Baraj Gölü Elazığ;Keban Baraj Gölü Elazığ Kıyısı;Işıktepe Baraj Gölü;Tadım Baraj Gölü
Erzincan|Doğu Anadolu|Erzincan Baraj Gölü;Tercan Baraj Gölü;Karasu Nehri Erzincan Hattı;Fırat Nehri Kemaliye Hattı;Mercan Deresi
Erzurum|Doğu Anadolu|Demirdöven Baraj Gölü;Kapıkaya Baraj Gölü Erzurum;Köyceğiz Baraj Gölü Erzurum;Kuzgun Baraj Gölü;Olur Baraj Gölü
Eskişehir|İç Anadolu|Çatören Baraj Gölü;Gökçekaya Baraj Gölü;Kunduzlar Baraj Gölü;Musaözü Baraj Gölü;Porsuk Baraj Gölü
Gaziantep|Güneydoğu Anadolu|Birecik Baraj Gölü Gaziantep Kıyısı;Dumluca Baraj Gölü Gaziantep;Hancağız Baraj Gölü;Kayacık Baraj Gölü;Tahtaköprü Baraj Gölü Gaziantep
Giresun|Karadeniz|İngölü Baraj Gölü;Toplukonak Baraj Gölü;Aksu Deresi Giresun;Harşit Çayı;Giresun Sahili
Gümüşhane|Karadeniz|Koruluk Baraj Gölü;Kürtün Baraj Gölü;Kızlarkalesi Baraj Gölü;Köse Baraj Gölü;Torul Baraj Gölü
Hakkari|Doğu Anadolu|Dilimli Baraj Gölü;Zap Suyu Hakkari Hattı;Şemdinli Deresi;Nehil Çayı;Sat Gölleri
Hatay|Akdeniz|Yarseli Baraj Gölü;Yayladağ Baraj Gölü;Karamanlı Baraj Gölü Hatay;Asi Nehri Hatay Hattı;Arsuz Sahili
Iğdır|Doğu Anadolu|Aras Nehri Tuzluca Hattı;Aras Nehri Karakoyunlu Hattı;Aras Nehri Aralık Hattı;Karasu Çayı Iğdır;Bulakbaşı Sulak Alanı
Isparta|Akdeniz|Atabey Baraj Gölü;Bağarası Baraj Gölü;Barla Baraj Gölü;Dedeçam Baraj Gölü;Hisarardı Baraj Gölü
İstanbul|Marmara|Alibey Baraj Gölü;Büyükçekmece Gölü;Darlık Baraj Gölü;Ömerli Baraj Gölü;Sazlıdere Baraj Gölü
İzmir|Ege|Alaçatı Baraj Gölü;Balçova Baraj Gölü;Güzelhisar Baraj Gölü;Kestel Baraj Gölü İzmir;Seferihisar Baraj Gölü
Kahramanmaraş|Akdeniz|Kartalkaya Baraj Gölü;Menzelet Baraj Gölü;Sır Baraj Gölü;Adatepe Baraj Gölü;Kılavuzlu Baraj Gölü
Karabük|Karadeniz|Kadıköy Baraj Gölü Karabük;Bostancılar Baraj Gölü;Ortakçılar Baraj Gölü;Filyos Çayı Karabük Hattı;Araç Çayı
Karaman|İç Anadolu|Ayrancı Baraj Gölü;Deliçay Baraj Gölü;Dokuzyol Baraj Gölü;Gödet Baraj Gölü;İbrala Baraj Gölü
Kars|Doğu Anadolu|Arpaçay Baraj Gölü;Bayburt Baraj Gölü Kars;Çıldır Gölü Kars Kıyısı;Kars Çayı;Aras Nehri Kağızman Hattı
Kastamonu|Karadeniz|Bezirgan Baraj Gölü;Çiğdem Baraj Gölü Kastamonu;Germeçtepe Baraj Gölü;Kabalar Baraj Gölü;Karaçomak Baraj Gölü
Kayseri|İç Anadolu|Ağcaşar Baraj Gölü;Akköy Baraj Gölü Kayseri;Bahçelik Baraj Gölü;Sarımsaklı Baraj Gölü;Sarıoğlan Baraj Gölü
Kırıkkale|İç Anadolu|Kapulukaya Baraj Gölü;Ahılı Baraj Gölü;Danacı Baraj Gölü;Hirfanlı Baraj Gölü Kırıkkale Kıyısı;Kızılırmak Yahşihan Hattı
Kırklareli|Marmara|Armağan Baraj Gölü;Kayalı Baraj Gölü;Ahmetbey Baraj Gölü;Sarıcaali Baraj Gölü;Sofuhalil Baraj Gölü
Kırşehir|İç Anadolu|Çoğun Baraj Gölü;Karaova Baraj Gölü;Kültepe Baraj Gölü;Sıddıklı Baraj Gölü;Hirfanlı Baraj Gölü Kırşehir Kıyısı
Kilis|Güneydoğu Anadolu|Balıklı Baraj Gölü Kilis;Seve Baraj Gölü;Afrin Çayı Kilis Hattı;Sabun Suyu;Sinnep Suyu
Kocaeli|Marmara|Bayraktar Baraj Gölü;Bıçkıdere Baraj Gölü;Kirazdere Yuvacık Baraj Gölü;Kurtdere Baraj Gölü;Şahinler Baraj Gölü
Konya|İç Anadolu|Akören Baraj Gölü;Altınapa Baraj Gölü;Apa Baraj Gölü;Aydoğmuş Baraj Gölü;Bulcuk Baraj Gölü
Kütahya|Ege|Çavdarhisar Baraj Gölü;Enne Baraj Gölü;Kayaboğazı Baraj Gölü;Beşkarış Baraj Gölü;Çerte Baraj Gölü
Malatya|Doğu Anadolu|Boztepe Baraj Gölü Malatya;Güzelyurt Baraj Gölü Malatya;Kapıkaya Baraj Gölü Malatya;Medik Baraj Gölü;Polat Baraj Gölü
Manisa|Ege|Afşar Baraj Gölü;Demirköprü Baraj Gölü;Gördes Baraj Gölü;Sevişler Baraj Gölü;Gediz Nehri Manisa Hattı
Mardin|Güneydoğu Anadolu|Şerifbaba Baraj Gölü;Ilısu Baraj Gölü Dargeçit Kıyısı;Çağ Çağ Deresi;Beyazsu Deresi;Savur Çayı
Mersin|Akdeniz|Berdan Baraj Gölü;Gezende Baraj Gölü;Pamukluk Baraj Gölü;Göksu Nehri Silifke Hattı;Aydıncık Sahili
Muğla|Ege|Geyik Baraj Gölü;Mumcular Baraj Gölü;Kazan Baraj Gölü Muğla;Köyceğiz Gölü;Bafa Gölü Muğla Kıyısı
Muş|Doğu Anadolu|Alparslan 1 Baraj Gölü;Alparslan 2 Baraj Gölü;Murat Nehri Muş Hattı;Haçlı Gölü;Akdoğan Gölü
Nevşehir|İç Anadolu|Ayhanlar Baraj Gölü;Damsa Baraj Gölü;Tatlarin Baraj Gölü;Doyduk Baraj Gölü;Kumtepe Baraj Gölü Nevşehir
Niğde|İç Anadolu|Akkaya Baraj Gölü;Altınhisar Baraj Gölü;Gebere Baraj Gölü;Gümüşler Baraj Gölü;Kovalı Baraj Gölü
Ordu|Karadeniz|Perşembe Yaylası Göleti;Topçam Baraj Gölü Ordu;Melet Irmağı;Bolaman Irmağı;Ordu Sahili
Osmaniye|Akdeniz|Arıklıkaş Baraj Gölü;Aslantaş Baraj Gölü;Kalecik Baraj Gölü Osmaniye;Kesiksuyu Baraj Gölü;Berke Baraj Gölü Osmaniye Kıyısı
Rize|Karadeniz|Fırtına Deresi;İyidere;Büyükdere Rize;Salarha Deresi;Rize Sahili
Sakarya|Marmara|Sapanca Gölü Sakarya Kıyısı;Sakarya Nehri Sakarya Hattı;Çark Deresi;Poyrazlar Gölü;Melen Çayı Sakarya Hattı
Samsun|Karadeniz|Altınkaya Baraj Gölü;Çakmak Baraj Gölü;Derbent Baraj Gölü;Dereköy Baraj Gölü Samsun;Derinöz Baraj Gölü
Siirt|Güneydoğu Anadolu|Ilısu Baraj Gölü Siirt Kıyısı;Botan Çayı;Başur Çayı;Kezer Çayı;Garzan Çayı
Sinop|Karadeniz|Cemallettin Baraj Gölü;Dodurga Baraj Gölü Sinop;Durağan Baraj Gölü;Edil Baraj Gölü;Erfelek Baraj Gölü
Sivas|İç Anadolu|Avcıpınar Baraj Gölü;Boğazdere Baraj Gölü;Çamlıgöze Baraj Gölü;Delice Baraj Gölü Sivas;Deliilyas Baraj Gölü
Şanlıurfa|Güneydoğu Anadolu|Atatürk Baraj Gölü Şanlıurfa Kıyısı;Hacıhıdır Baraj Gölü;Karkamış Baraj Gölü Şanlıurfa Kıyısı;Birecik Baraj Gölü Şanlıurfa Kıyısı;Fırat Nehri Halfeti Hattı
Şırnak|Güneydoğu Anadolu|Şırnak Baraj Gölü;Silopi Baraj Gölü;Dicle Nehri Cizre Hattı;Hezil Çayı;Nerdüş Çayı
Tekirdağ|Marmara|Karaidemir Baraj Gölü;Bayramşah Baraj Gölü;Bıyıkali Baraj Gölü;İnanlı Baraj Gölü;Türkmenli Baraj Gölü
Tokat|Karadeniz|Akbelen Baraj Gölü;Almus Baraj Gölü;Alpu Baraj Gölü;Artova Baraj Gölü;Ataköy Baraj Gölü
Trabzon|Karadeniz|Atasu Baraj Gölü;Uzungöl;Sera Gölü;Solaklı Deresi;Değirmendere Trabzon
Tunceli|Doğu Anadolu|Uzunçayır Baraj Gölü;Keban Baraj Gölü Tunceli Kıyısı;Munzur Nehri;Pülümür Çayı;Keban Baraj Gölü Pertek Kıyısı
Uşak|Ege|Küçükler Baraj Gölü;Ahmetler Baraj Gölü;Altıntaş Mesudiye Baraj Gölü;Güneyköy Baraj Gölü;Karaağaç Baraj Gölü Uşak
Van|Doğu Anadolu|Emek Baraj Gölü;Koçköprü Baraj Gölü;Morgedik Baraj Gölü;Sarımehmet Baraj Gölü;Zernek Baraj Gölü
Yalova|Marmara|Armutlu Baraj Gölü;Gökçe Baraj Gölü;Esenköy Sahili;Teşvikiye Sahili;Çiftlikköy Sahili
Yozgat|İç Anadolu|Fehimli Baraj Gölü;Gelingülü Baraj Gölü;Kanlıdere Baraj Gölü;Süreyyabey Baraj Gölü;Uzunlu Baraj Gölü
Zonguldak|Karadeniz|Dereköy Baraj Gölü Zonguldak;Gülüç Baraj Gölü;Kızılcapınar Baraj Gölü;Kozlu Baraj Gölü;Filyos Nehri Zonguldak Hattı`;

const waterTypeFor=(name)=>{const n=name.toLocaleLowerCase("tr-TR");if(n.includes("sahili"))return"Deniz";if(n.includes("baraj"))return"Baraj";if(n.includes("gölet"))return"Gölet";if(/(nehri|çayı|deresi|ırmağı|suyu|iyidere|büyükdere|değirmendere)/.test(n))return"Akarsu";return"Göl";};
const seeds=rawRoutes.trim().split("\n").flatMap((line)=>{const[province,zone,names]=line.split("|");if(!province||!zone||!names)throw new Error(`Ulusal rota satırı okunamadı: ${line}`);return names.split(";").map((name)=>{const waterType=waterTypeFor(name);return{slug:`ulusal-${slugifyTr(province)}-${slugifyTr(name)}`,name,district:"İl geneli",province,zone,waterType,inventory:waterType==="Baraj"};});});
if(seeds.length!==NATIONAL_ROUTE_EXPECTED_COUNT)throw new Error(`Ulusal rota sayısı 405 yerine ${seeds.length}.`);

const dsi={label:"Devlet Su İşleri – Resmî su kaynakları istatistikleri",url:"https://dsi.gov.tr/Sayfa/Detay/2186",note:"Türkiye su yapıları için resmî başvuru kaynağıdır; kıyı erişimi veya av izni verdiği anlamına gelmez."};
const inventory={label:"Türkiye Baraj Envanteri – DSİ tabanlı açık veri derlemesi",url:"https://turkiyebarajlar.com/envanter",note:"Baraj adı ve il gruplaması için kullanılmıştır; bağlayıcı teyit DSİ ve yerel kurumlardan yapılmalıdır."};
const atlas={label:"Tarım ve Orman Bakanlığı – Türkiye Su Atlası",url:"https://www.tarimorman.gov.tr/SYGM/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1349",note:"Yerüstü su kaynaklarını havza, coğrafya ve yönetim boyutlarıyla ele alan resmî başvuru kaynağıdır."};
const teblig={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024–31 Ağustos 2028 genel kurallarıdır; yerel ve suya özel yasaklar ayrıca kontrol edilmelidir."};
const degisiklik={label:"6/2 Tebliğ değişikliği – Tarım ve Orman Bakanlığı",url:"https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",note:"2025 değişikliklerini gösterir; güncel resmî metin av öncesinde yeniden kontrol edilmelidir."};

const profile=(s)=>s.waterType==="Deniz"?"Deniz kıyısı; plaj, liman, yüzme alanı ve özel kullanım sınırları kısa mesafede değişebilir.":s.waterType==="Akarsu"?"Akarsu koridoru; debi, taşkın, kıyı eğimi, mülkiyet ve erişim koşulları mevsime göre değişebilir.":s.waterType==="Baraj"?"Baraj gölü çevresi; işletme, içme suyu, enerji, sulama, güvenlik ve koruma statüleri kıyı kullanımını sınırlayabilir.":s.waterType==="Gölet"?"Gölet çevresi; su seviyesi, işletme amacı, kıyı zemini ve yerel kararlar ayrıca araştırılmalıdır.":"Göl çevresi; koruma statüsü, sulak alan sınırı, kıyı erişimi ve yerel kullanım kuralları ayrıca araştırılmalıdır.";

/** @returns {import("./meralar").Mera} */
const makeRoute=(s)=>{
 const mapUrl=`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${s.name}, ${s.province}, Türkiye`)}`;
 const mapSource={label:`OpenStreetMap ad ve konum araması – ${s.name}`,url:mapUrl,note:"Genel ad ve konum araştırması içindir; yol tarifi, kamusal erişim veya av izni değildir."};
 return{
  slug:s.slug,name:s.name,district:s.district,province:s.province,zone:s.zone,waterType:s.waterType,region:s.zone,
  summary:`${s.name}, ${s.province} için açık kaynaklarda su varlığı olarak eşleştirilmiş ön değerlendirme rotasıdır; kamusal erişim ve avlanma uygunluğu ayrıca doğrulanmalıdır.`,
  fish:[],methods:[],baits:[],camping:"Kontrol edilmeli",vehicleAccess:"Zor",amenities:[],
  cautions:["Kesin kamusal kıyı erişim noktası yayımlanmamıştır.","Özel mülkiyet, içme suyu, koruma, güvenlik veya işletme sınırı bulunabilir.","Av yasağı, dönem, tür, boy ve adet kuralları resmî kaynaklardan kontrol edilmelidir.","Hava, su seviyesi, akıntı, debi, zemin ve yol koşulları yerinde değerlendirilmelidir."],
  lat:Number.NaN,lng:Number.NaN,locationPrecision:"Genel bölge",
  verification:s.inventory?"Adı ve il ilişkisi DSİ tabanlı açık baraj envanteri, resmî su kaynakları sayfaları ve açık harita aramasıyla kayıt düzeyinde kontrol edildi; kıyı erişimi ve av izni doğrulanmadı.":"Adı ve il ilişkisi resmî su atlası/DSİ başvuru kaynakları ile açık harita araması üzerinden kayıt düzeyinde kontrol edildi; kıyı erişimi ve av izni doğrulanmadı.",
  updatedAt:"2026-07-30",publishedAt:"2026-07-30",confidence:"D",
  image:`/images/meralar/ulusal/${s.slug}.svg`,socialImage:`/images/meralar/ulusal/${s.slug}.svg`,
  navigationNote:"Yanlış hassasiyet ve izinsiz erişim riski oluşturmamak için kesin rota noktası verilmemiştir. Açık harita araması yalnızca genel çevre araştırması içindir.",
  shoreProfile:profile(s),
  transport:"Yol, park, son yaya yaklaşımı ve kamusal kıyı erişimi doğrulanmış değildir. Yerel yönetim, DSİ, su idaresi, milli park veya alan işletmesinden güncel bilgi alınmalıdır.",
  crowdNote:"Kullanım yoğunluğu, tesis faaliyetleri, yüzme sezonu ve yerel etkinliklerle değişebilir; güvenli atış koridoru yoksa olta açılmamalıdır.",
  longIntro:[`${s.name}, ${s.province} ili için ulusal toplu tarama kapsamında oluşturulmuş bir ön değerlendirme rota dosyasıdır. Su varlığının adı ve il eşleşmesi açık kaynak kayıtlarında kontrol edilmiş, belirli bir kıyının amatör balıkçılığa açık olduğu sonucu çıkarılmamıştır.`,"Bu kaydın güven seviyesi D'dir. Fiziki erişim, coğrafi kısıt, özel mülkiyet, koruma veya güvenlik statüsü, su seviyesi ve hukuki uygunluk resmî kaynaklardan ve yerinde ayrıca doğrulanmalıdır."],
  planningNotes:["Yola çıkmadan önce ilgili kurum, il/ilçe tarım müdürlüğü ve yerel yönetim duyuruları araştırılmalıdır.","İçme suyu havzası, baraj güvenlik bölgesi, milli park, sulak alan, tesis, sınır veya güvenlik alanı ihtimali kontrol edilmelidir.","Tabela, bariyer, görevli talimatı ve yerel kararlar bu açık kaynak özetinden üstündür; belirsizlik varsa alana girilmemelidir."],
  seasonalNotes:["Bu ön değerlendirme kaydında rota bazında doğrulanmış balık türü listesi yayımlanmamıştır; bölgesel tür bilgisinden belirli noktada av sonucu çıkarılmamalıdır.","Tür, dönem, boy, adet, takım ve alıkoyma kuralları güncel 6/2 Tebliğ, değişiklikleri ve yerel kararlarla birlikte kontrol edilmelidir."],
  sources:[mapSource,s.inventory?inventory:atlas,dsi,teblig,degisiklik]
 };
};
/** @type {import("./meralar").Mera[]} */
export const ulusalMeralar=seeds.map(makeRoute);
