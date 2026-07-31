import type { Mera } from "./meralar";

const teblig={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024-31 Ağustos 2028 dönemi boy, adet, araç ve alan kuralları; yürürlükteki değişikliklerle birlikte kontrol edilmelidir."};
const sehirHatlari={label:"Şehir Hatları – İskeleler",url:"https://sehirhatlari.istanbul/tr/iskeleler",note:"İskele konumu ve toplu taşıma bağlamı için resmî kaynak; operasyon alanında olta açılmaz."};

export const beykozMeralar:Mera[]=[
{
slug:"pasabahce-sahili",name:"Paşabahçe Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Paşabahçe koyunun nispeten korunaklı suyu ile uzun kamusal dinlenme sahilini birleştiren, iskele ve bağlama alanlarından ayrılarak değerlendirilmesi gereken Boğaz rotası.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası","Hafif spin"],baits:["Suni çapari","Karides","Ekmek","Midye","Küçük kaşık"],camping:"Uygun değil",vehicleAccess:"Kolay",
amenities:["Uzun sahil yürüyüş hattı","Yeme-içme işletmeleri","Otobüs bağlantısı","Yakın market ve temel ihtiyaçlar"],
cautions:["Paşabahçe İskelesi ve tekne bağlama alanında avlanmama","Hafta sonu yoğun yaya kullanımı","Koy dışına doğru artan Boğaz akıntısı","Cam bariyer ve yüksek kıyı kesimlerinde güvenli atış alanı kontrolü"],
lat:41.1177,lng:29.0942,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi semt ve sahil bilgisi, Şehir Hatları ulaşım kaydı ve güncel amatör av mevzuatıyla masa başı doğrulama; saha kontrolü yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-29",confidence:"C",image:"/images/meralar/pasabahce-sahili.svg",socialImage:"/images/meralar/pasabahce-sahili.svg",
navigationNote:"Pin Paşabahçe’nin kamusal sahil bandını gösterir; vapur iskelesi, bağlama halatları, işletme önü ve kapalı bölümler av noktası değildir.",
shoreProfile:"Boğaz’ın Anadolu yakasındaki belirgin girintilerden biri olan Paşabahçe koyunda su, açık akıntı hattına göre daha sakin olabilir. Kıyı; düzenlenmiş park, sert zemin, yer yer korkuluk ve iskele yaklaşımı arasında değişir.",
transport:"Üsküdar-Beykoz sahil otobüsleri ve uygun seferlerde deniz ulaşımıyla erişim sağlanabilir. Araçla gelişte sahil çevresindeki güncel park düzeni kontrol edilmelidir. Gecelik konaklama için Beykoz merkez ve Kavacık’taki belgeli tesisler ayrıca araştırılmalı; sahil kamp alanı değildir.",
crowdNote:"Paşabahçe hafta sonları, gün batımında ve yaz akşamlarında yoğunlaşır. Arka atış koridoru yayalarla kesişiyorsa takım açılmamalıdır.",
longIntro:["Paşabahçe Sahili, eski sanayi dokusunun izleri, geniş koy yapısı ve kıyıdaki dinlenme alanlarıyla Beykoz’un diğer Boğaz ceplerinden ayrılır. Belediye kaynağı semtin koy çevresindeki dinlenme alanları ve restoranlarıyla yoğun kullanıldığını belirtir.","Balık türleri İstanbul Boğazı kıyılarında bölgesel olarak raporlanan muhtemel türlerdir; belirli gün veya noktada av garantisi değildir. İskele operasyonu ve özel bağlama alanlarından mutlaka uzak durulmalıdır."],
planningNotes:["Koy içi ile açık akıntı hattı arasında kurşun ihtiyacı değişebilir; önce kısa keşif ve dip yapısı kontrolü yapılmalıdır.","Sahil kamp ve çadır alanı değildir. Günübirlik plan yapılmalı; konaklama gerekiyorsa Beykoz merkez veya Kavacık seçenekleri resmî kayıt ve güncel yorumlarla kontrol edilmelidir.","Yerel tabela, belediye çalışması, etkinlik veya geçici kapanma varsa av planı iptal edilmelidir."],
seasonalNotes:["İstavrit ve çinekop geçişleri yem balığı ve Boğaz akıntısına; kefal ve zargana kıyı sakinliği ile yüzey hareketine bağlıdır.","Boy, adet ve alıkoyma limitleri 6/2 Tebliğ’den kontrol edilmeli; küçük bireyler derhal suya bırakılmalıdır."],
sources:[{label:"Beykoz Belediyesi – Paşabahçe",url:"https://www.beykoz.bel.tr/tesisler/detay/pasabahce",note:"Paşabahçe koyu, kıyı dinlenme alanları ve yerel kullanım bağlamı."},sehirHatlari,teblig]
},
{
slug:"kanlica-sahili",name:"Kanlıca Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Bülbül Deresi ağzındaki küçük koy, tarihî meydan ve güçlü Boğaz akıntısının dar bir kıyıda birleştiği; yalnızca güvenli kamusal ceplerde değerlendirilebilecek rota.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek","Midye"],camping:"Uygun değil",vehicleAccess:"Orta",
amenities:["Vapur iskelesi bağlantısı","Otobüs durağı","Meydan çevresinde yeme-içme","Yakın market"],
cautions:["Kanlıca İskelesi operasyon alanında avlanmama","Dar kaldırım ve yoğun yaya trafiği","Bülbül Deresi ağzında yağış sonrası sürüküntü","Sert yanal akıntı ve misina sürüklenmesi"],
lat:41.1006,lng:29.0655,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi Kanlıca semt kaydı, Şehir Hatları erişim bilgisi ve mevzuatla masa başı doğrulama; saha doğrulaması yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-29",confidence:"C",image:"/images/meralar/kanlica-sahili.svg",socialImage:"/images/meralar/kanlica-sahili.svg",
navigationNote:"Pin Kanlıca meydanı çevresindeki genel sahili gösterir. İskele, tekne manevrası, yalı önü ve özel mülk sınırları av alanı değildir.",
shoreProfile:"Kanlıca’da Bülbül Deresi ağzındaki küçük koy ile açık Boğaz akıntısı çok kısa mesafede farklılaşır. Kıyı çoğunlukla dar, sert zeminli ve meydan kullanımıyla iç içedir.",
transport:"Kanlıca’ya sahil otobüsleri ve uygun Şehir Hatları seferleriyle erişilebilir. Otopark sınırlı olabilir. Gecelik konaklama için Kanlıca’da sınırlı seçenekler yerine Beykoz merkez veya Kavacık’taki belgeli tesisler kontrol edilmelidir; kıyıda kamp uygun değildir.",
crowdNote:"Yoğurt işletmeleri, iskele ve meydan nedeniyle özellikle hafta sonu gündüz saatleri kalabalıktır. Güvenli atış boşluğu yoksa av yapılmamalıdır.",
longIntro:["Kanlıca, Mihrabad Korusu, yalı hattı ve Bülbül Deresi’nin oluşturduğu küçük koyla tanınır. Bu yerel özellikler su hareketini ve kıyı kullanımını Paşabahçe’den belirgin biçimde ayırır.","Dar meydan nedeniyle rota deneyimli ve çevre güvenliğine dikkat eden kullanıcılar için planlanmalıdır; kalabalıkta ağır kurşun veya uzun takım savrulmamalıdır."],
planningNotes:["İlk tercih iskele dışında kalan, arka atış koridoru açık kamusal sert zemin olmalıdır.","Konaklama gereksiniminde günlük ulaşım avantajı nedeniyle merkezi ilçelerde kalıp toplu taşımayla gelmek daha pratiktir.","Yağıştan sonra dere ağzına yaklaşmadan su rengi, yüzer çöp ve kayganlık kontrol edilmelidir."],
seasonalNotes:["Boğaz geçiş balıkları akıntı yönü ve yem balığına bağlı olarak kısa süreli görünür; tür listesi garantili av anlamına gelmez.","Güncel boy ve adet limitleri ile yasak alanlar 6/2 Tebliğ ve sahadaki işaretlerden kontrol edilmelidir."],
sources:[{label:"Beykoz Belediyesi – Kanlıca",url:"https://www.beykoz.bel.tr/tesisler/detay/kanlica",note:"Kanlıca’nın Boğaz kıyısı, Bülbül Deresi ağzındaki koy ve yerel semt özellikleri."},sehirHatlari,teblig]
},
{
slug:"kucuksu-sahili",name:"Küçüksu Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Göksu ve Küçüksu derelerinin Boğaz’a yakınlaştığı, tarihî kasır ve mesire çevresinde park, gezi teknesi ve akıntı etkilerinin birlikte değerlendirileceği kamusal kıyı rotası.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek","Midye"],camping:"Uygun değil",vehicleAccess:"Kolay",
amenities:["Park ve mesire çevresi","Otobüs bağlantısı","Yakın yeme-içme","Tarihî ziyaret alanları"],
cautions:["Gezi teknesi ve bağlama halatları","Dere ağzında yağış sonrası hızlı akış ve sürüküntü","Küçüksu Kasrı ve korunan tarihî alan sınırları","Piknik ve yaya yoğunluğu"],
lat:41.0794,lng:29.0645,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi Anadolu Hisarı/Küçüksu bilgisi, kamusal ulaşım ve güncel mevzuatla masa başı doğrulama; saha doğrulaması yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-29",confidence:"C",image:"/images/meralar/kucuksu-sahili.svg",socialImage:"/images/meralar/kucuksu-sahili.svg",
navigationNote:"Pin Küçüksu-Göksu çevresindeki genel kamusal erişimi gösterir; kasır sınırı, tekne bağlama bölgesi ve dere içi av noktası değildir.",
shoreProfile:"Tatlı su girişlerinin etkilediği bulanıklık ve Boğaz’ın yanal akıntısı aynı alanda görülebilir. Kıyı; park zemini, dere kenarı, sert tahkimat ve tekne kullanılan cepler arasında değişir.",
transport:"Üsküdar-Beykoz sahil otobüsleriyle ulaşım mümkündür. Otopark etkinlik ve hafta sonlarında sınırlanabilir. Konaklama için Beykoz-Kavacık veya Üsküdar’daki belgeli seçenekler ayrıca kontrol edilmeli; mesire alanı geceleme izni anlamına gelmez.",
crowdNote:"Küçüksu Kasrı, mesire ve tekne hareketi nedeniyle hafta sonları belirgin yoğunluk olur. Çocukların ve piknikçilerin bulunduğu alanda olta açılmamalıdır.",
longIntro:["Küçüksu rotasının ayırt edici yanı, Göksu ve Küçüksu su sistemlerinin Boğaz kıyısıyla birleşmesi ve tarihî mesire-kasır dokusudur. Bu nedenle kıyı kullanımı yalnızca balıkçılara ait değildir.","Dere ağızları potansiyel balık hareketi kadar sürüküntü, kirli akış ve tekne trafiği de getirir. Koordinat hassas bir mikro noktayı değil genel planlama bölgesini gösterir."],
planningNotes:["Yağıştan sonraki ilk saatlerde dere ağzı ve kaygan taşlardan uzak durulmalıdır.","Gezi teknelerinin rota ve bağlama halatları gözlenmeden takım suya indirilmemelidir.","Gecelik kalış planı mesireye değil resmî konaklama tesislerine dayanmalıdır."],
seasonalNotes:["Kefal ve zargana yüzey hareketlerinde; istavrit ve çinekop geçiş dönemlerinde raporlanabilir. Sonuç su sıcaklığı, akıntı ve yem balığına bağlıdır.","Mevzuat ve sahadaki koruma/ziyaret alanı kuralları birlikte kontrol edilmelidir."],
sources:[{label:"Beykoz Belediyesi – Anadolu Hisarı",url:"https://www.beykoz.bel.tr/tesisler/detay/anadolu-hisari",note:"Göksu-Küçüksu dereleri, Küçüksu Mesiresi ve tarihî çevre bağlamı."},teblig]
},
{
slug:"beykoz-merkez-sahili",name:"Beykoz Merkez Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Beykoz Korusu ile merkez arasında uzanan düzenlenmiş yürüyüş ve yeşil alanlarıyla erişimi kolay; cam bariyer, yoğun yaya kullanımı ve iskele sınırları nedeniyle seçici davranılması gereken rota.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek","Midye"],camping:"Uygun değil",vehicleAccess:"Kolay",
amenities:["Düzenlenmiş yürüyüş alanı","Yeşil alan ve çocuk parkları","Aydınlatma","Yeme-içme ve merkez hizmetleri","Otobüs bağlantısı"],
cautions:["Cam bariyer bulunan kesimlerde olta erişimi olmaması","Çocuk parkı ve yoğun yürüyüş hattında atış yapmama","İskele ve tekne operasyon alanlarından uzak durma","Boğaz akıntısı"],
lat:41.1342,lng:29.0904,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi sahil düzenleme verileri ve güncel amatör av mevzuatıyla masa başı doğrulama; saha doğrulaması yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-31",confidence:"C",image:"/images/meralar/beykoz-merkez-sahili.svg",socialImage:"/images/meralar/beykoz-merkez-sahili.svg",
navigationNote:"Pin Beykoz merkezdeki kamusal sahil bandını gösterir. Cam bariyerli, çocuk parkına komşu, iskele veya işletme kullanımlı kesimler av noktası değildir.",
shoreProfile:"Belediye verilerine göre sahil bandında geniş yürüyüş ve yeşil alan düzenlemesi, aydınlatma, çocuk parkları ve deniz kenarında cam bariyerler bulunur. Bu yapı erişimi kolaylaştırırken olta açılabilir kesimleri sınırlar.",
transport:"Beykoz merkez sahil otobüsleriyle erişilebilir; deniz ulaşımı seferleri ayrıca kontrol edilmelidir. Merkezde temel hizmetler vardır. Gecelik konaklama için Beykoz merkez ve Kavacık’taki belgeli tesisler araştırılmalı; parkta kamp yapılmamalıdır.",
crowdNote:"Aile, spor ve yürüyüş kullanımı çok yüksektir. Güvenli ve yasal açık kıyı cebi bulunamazsa bu rota yalnızca keşif noktası olarak bırakılmalıdır.",
longIntro:["Beykoz Merkez Sahili, belediyenin 9.600 m² yürüyüş ve 6.830 m² yeşil alan düzenlemesiyle tanımladığı kent içi sahil bandıdır. Çocuk parkları ve cam bariyerler, burayı klasik açık taş kıyıdan farklılaştırır.","Bu sayfa merkez sahilin tamamını avlak ilan etmez. Yalnızca tabela, bariyer ve yaya güvenliği açısından uygun kamusal bir kesim yerinde bulunursa amatör olta değerlendirmesi yapılmalıdır."],
planningNotes:["Cam bariyerin üzerinden veya çocuk parkı yakınında takım savrulmamalıdır.","İlk ziyaret gündüz yapılmalı ve yalnızca açık kıyı erişimi olan kesimler gözlenmelidir.","Merkez hizmetleri günübirlik kullanımı kolaylaştırır; geceleme için resmî tesis kaydı kontrol edilmelidir."],
seasonalNotes:["Boğaz geçiş türleri için akıntı ve yem balığı hareketi belirleyicidir; tür listesi olasılık bilgisidir.","6/2 Tebliğ ile yerel geçici kapanma ve sahil kullanım talimatları birlikte uygulanır."],
sources:[{label:"Beykoz Belediyesi – Beykoz Sahili Yeni Çehresine Kavuşuyor",url:"https://milletkiraathanesi.beykoz.bel.tr/haber/beykoz-sahili-yeni-cehresine-kavusuyor",note:"Yürüyüş alanı, yeşil alan, çocuk parkları, aydınlatma ve cam bariyer bilgileri."},teblig]
},
{
slug:"cubuklu-sahili",name:"Çubuklu Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Poyraza dönük geniş sahil kordonu, Hidiv Korusu bağlantısı ve yer yer işletme/tekne kullanımının bir arada bulunduğu Boğaz kıyısı.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası","Hafif spin"],baits:["Suni çapari","Karides","Ekmek","Midye","Küçük kaşık"],camping:"Uygun değil",vehicleAccess:"Kolay",
amenities:["Geniş sahil kordonu","Otobüs bağlantısı","Restoran ve temel ihtiyaçlar","Hidiv Korusu yakınlığı"],
cautions:["Poyrazda dalga sıçraması ve soğuk rüzgâr","İşletme önü ve özel kullanım alanlarından uzak durma","Tekne bağlama ve iskele yaklaşımı","Yoğun yürüyüş kullanımı"],
lat:41.1085,lng:29.0805,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi Çubuklu semt kaydı, ulaşım kaynakları ve mevzuatla masa başı doğrulama; saha doğrulaması yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-31",confidence:"C",image:"/images/meralar/cubuklu-sahili.svg",socialImage:"/images/meralar/cubuklu-sahili.svg",
navigationNote:"Pin Çubuklu’nun genel sahil kordonunu gösterir; iskele, tekne bağlama, restoran kullanım alanı ve özel yalı önü av noktası değildir.",
shoreProfile:"Çubuklu poyraza açık yüzü ve uzun sahil kordonuyla Kanlıca’nın dar meydan kıyısından ayrılır. Sert zemin ve açık akıntı etkisi, küçük korunaklı ceplerle yer değiştirebilir.",
transport:"Sahil otobüsleriyle Beykoz ve Üsküdar yönünden ulaşım mümkündür. Araç parkı yoğun saatlerde zorlaşabilir. Konaklama için Beykoz merkez veya Kavacık’taki belgeli tesisler kontrol edilmeli; kıyı kamp alanı değildir.",
crowdNote:"Yürüyüş ve restoran kullanımı özellikle akşamları artar. Atış koridoru yayalar veya masa alanıyla kesişiyorsa av yapılmamalıdır.",
longIntro:["Beykoz Belediyesi Çubuklu’yu geniş sahil kordonu, Boğaz kıyısındaki restoranları ve Hidiv Korusu bağlantısıyla tanımlar; ayrıca semtin poyraza dönük sert havasına dikkat çeker.","Bu özellikler kıyı avında rüzgâr, dalga ve kamusal kullanım kontrolünü zorunlu kılar. Açık deniz etkisi arttığında hafif takım güvenli olmayabilir."],
planningNotes:["Poyraz tahmini yüksekse rota ertelenmeli veya daha korunaklı bir sahil seçilmelidir.","İşletme ve yalı sınırları kamusal kıyı kabul edilmemeli, tabela ve bariyerlere uyulmalıdır.","Günübirlik erişim kolaydır; geceleme gerekiyorsa merkezdeki resmî seçenekler kullanılmalıdır."],
seasonalNotes:["Geçiş balıkları açık akıntı hattında, kefal ve zargana daha sakin yüzey ceplerinde görülebilir; kesinlik yoktur.","Yasal boy ve adet limitleri her av öncesi güncel Tebliğ’den kontrol edilmelidir."],
sources:[{label:"Beykoz Belediyesi – Çubuklu",url:"https://www.beykoz.bel.tr/tesisler/detay/cubuklu",note:"Geniş sahil kordonu, poyraz etkisi, restoranlar ve Hidiv Korusu bağlamı."},teblig]
},
{
slug:"anadolu-hisari-sahili",name:"Anadolu Hisarı Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
summary:"Anadolu Hisarı Kalesi ve Göksu ağzının oluşturduğu tarihî, dar ve tekne hareketli kıyı dokusunda yalnızca açık kamusal ceplerin değerlendirilebileceği rota.",
fish:["İstavrit","Kefal","Zargana","İzmarit","Çinekop"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek","Midye"],camping:"Uygun değil",vehicleAccess:"Orta",
amenities:["Otobüs bağlantısı","Tarihî çevre","Yakın yeme-içme","Göksu kıyısı yürüyüş bağlantıları"],
cautions:["Kale ve korunan tarihî yapı sınırları","Göksu ağzında gezi teknesi ve bağlama halatları","Dar yol ve yaya yoğunluğu","Yağış sonrası dere akışı"],
lat:41.0834,lng:29.0667,locationPrecision:"Genel bölge",verification:"Beykoz Belediyesi Anadolu Hisarı ve kale kayıtları ile güncel mevzuat üzerinden masa başı doğrulama; saha doğrulaması yoktur.",updatedAt:"2026-07-31",publishedAt:"2026-07-31",confidence:"C",image:"/images/meralar/anadolu-hisari-sahili.svg",socialImage:"/images/meralar/anadolu-hisari-sahili.svg",
navigationNote:"Pin Anadolu Hisarı-Göksu çevresindeki genel kamusal kıyıyı gösterir. Kale çevresi, özel yalı önü, iskele ve tekne bağlama alanı av noktası değildir.",
shoreProfile:"Kale, Göksu Deresi ağzı ve Boğaz kıyısı yedi dönümlük tarihî bir çevrede birleşir. Kıyı dar sert zemin, dere kenarı ve tekne kullanılan ceplerden oluşur; geniş güvenli atış alanı her yerde yoktur.",
transport:"Üsküdar-Beykoz sahil otobüsleriyle ulaşılabilir; dar yol ve sınırlı park nedeniyle toplu taşıma daha uygundur. Konaklama için Kavacık, Beykoz merkez veya Üsküdar’daki belgeli tesisler araştırılmalı; tarihî çevrede kamp yapılmamalıdır.",
crowdNote:"Turistik ziyaret, restoran ve tekne kullanımı yazın artar. Güvenli açık kıyı cebi bulunamazsa olta açılmadan rota sonlandırılmalıdır.",
longIntro:["Anadolu Hisarı’nın ayırt edici unsurları 1395 tarihli kale ile hemen yanındaki Göksu Deresi ağzıdır. Bu tarihî ve dar çevre, kıyı avından önce koruma sınırları ve kamusal erişimin dikkatle ayrılmasını gerektirir.","Göksu’daki tekne hareketi ve bağlama halatları misina güvenliği açısından temel risktir. Sayfa kesin av noktası değil, genel keşif bölgesi sunar."],
planningNotes:["Kale ve tescilli yapı çevresindeki talimatlar önceliklidir; bariyerli bölgeye girilmemelidir.","Tekne hareketi başlamadan erken saat keşfi yapılabilir ancak yerel yasak ve güvenlik işaretleri her zaman belirleyicidir.","Konaklama kıyıda değil, toplu taşımayla erişilebilen belgeli şehir tesislerinde planlanmalıdır."],
seasonalNotes:["Dere etkisi kefal hareketini, Boğaz akıntısı ise istavrit ve çinekop geçişini etkileyebilir; av garantisi yoktur.","Yağış sonrası bulanıklık, sürüküntü ve akış yükselmesi nedeniyle dere ağzından uzak durulmalıdır."],
sources:[{label:"Beykoz Belediyesi – Anadolu Hisarı",url:"https://www.beykoz.bel.tr/tesisler/detay/anadolu-hisari",note:"Göksu-Küçüksu sistemi, tarihî çevre ve semt kullanım bilgileri."},{label:"Beykoz Belediyesi – Anadolu Hisarı Kalesi",url:"https://beykoz.bel.tr/tesisler/detay/anadolu-hisari-kalesi",note:"Kalenin Göksu’nun Boğaz’a karıştığı tarihî alandaki konumu."},teblig]
}
];
