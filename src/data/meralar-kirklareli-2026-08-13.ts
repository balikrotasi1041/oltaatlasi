import type { Mera } from "./meralar";

const sportif={label:"Kırklareli İl Kültür ve Turizm Müdürlüğü - Sportif Olta Balıkçılığı",url:"https://kirklareli.ktb.gov.tr/TR-64308/sportif-olta-balikciligi.html",note:"Kırklareli Barajı, Kayalı Barajı, Armağan Barajı, Üsküp Göleti, Sofuhalil Göleti ve Sarıcaali Göleti dahil olmak üzere ilde sportif olta balıkçılığı yapılabilecek suları açıkça listeler."};
const baliklandirma={label:"Kırklareli İl Tarım ve Orman Müdürlüğü - Balıklandırma Faaliyetleri",url:"https://kirklareli.tarimorman.gov.tr/Haber/2168/Baliklandirma-Faaliyetleri-Basladi",note:"Kırklareli Baraj Gölü, Armağan Baraj Gölü, Kayalı Baraj Gölü, Üsküp Göleti, Sarıcaali Göleti ve Sofuhalil Göleti için rota özelinde sazan yavrusu bırakıldığını kayıt altına alır."};
const teblig={label:"Tarım ve Orman Bakanlığı - 6/2 Amatör Amaçlı Su Ürünleri Avcılığı",url:"https://www.tarimorman.gov.tr/BSGM/Haber/332/Su-Urunleri-Avciligini-Duzenleyen-Ticari-Ve-Amator-Tebliglerde-Yapilan-Onemli-Degisiklikler-Resmi-Gazetede-Yayimlanarak-Yururluge-Girdi",note:"2024/21 sayılı 6/2 Tebliğ ile 16 Nisan 2025 tarihli 2025/12 değişikliğinin birlikte uygulanması gerektiğini duyurur."};
const kayaliDenetim={label:"Kırklareli İl Tarım ve Orman Müdürlüğü - Kayalı Barajı denetimi",url:"https://kirklareli.tarimorman.gov.tr/Haber/1435/Kayali-Barajinda-Su-Urunleri-Denetimlerimiz-Devam-Ediyor",note:"Kayalı Barajı'nda su ürünleri denetimleri ve sazan varlığını rota özelinde doğrular; yasak ağ avcılığına karşı denetim yapıldığını gösterir."};

const ortak=(slug:string,publishedAt="2026-08-13")=>({zone:"Kırklareli",region:"Meriç-Ergene Havzası",fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Solucan","Hamur"],camping:"Kontrol edilmeli" as const,locationPrecision:"Genel bölge" as const,verification:"Resmî sportif olta kullanımı kaydı, rota özelinde sazan balıklandırma kaydı, güncel 6/2 mevzuat taraması ve genel konum eşleşmesiyle masa başı doğrulama; saha teyidi yok.",updatedAt:"2026-08-13",publishedAt,confidence:"B" as const,image:`/images/meralar/${slug}.svg`,socialImage:`/images/meralar/${slug}.svg`});

export const kirklareliYeni20260813:Mera[]=[
{
 ...ortak("kirklareli-baraji"),slug:"kirklareli-baraji",name:"Kırklareli Barajı",district:"Merkez",province:"Kırklareli",waterType:"Baraj",lat:41.7389,lng:27.2792,vehicleAccess:"Orta",
 summary:"Kırklareli merkezin hemen kuzeydoğusunda, resmî sportif olta kaydı ve rota özelinde sazan balıklandırma verisi bulunan; baraj işletme sahasından uzak genel kırsal kıyı yaklaşımı.",
 amenities:["Kırklareli merkez yaklaşık birkaç kilometre mesafede","Şehir merkezinde market, sağlık ve yeme-içme hizmetleri","Gecelik kalış için Kırklareli merkezde ruhsatlı seçenekler ayrıca kontrol edilebilir"],
 cautions:["Baraj gövdesi, savak ve teknik işletme tesisleri rota dışıdır","Su kotu çekildiğinde balçık ve dik kıyı kırıkları oluşabilir","Tarla sınırları, araç geçişi ve kıyıya son iniş saha tabelalarına göre seçilmelidir"],
 navigationNote:"Pin barajın genel su alanını ve Kırklareli merkez tarafındaki planlama çevresini gösterir; baraj gövdesine, savak tesisine veya özel arazi içindeki mikro kıyıya yönlendirme değildir.",
 shoreProfile:"Kırklareli kent merkezine yakın olmasına rağmen rezervuar kıyısı şehir parkı niteliğinde sürekli düzenlenmiş değildir. Açık tarım arazileri, kısa toprak yol bağlantıları ve su kotuna göre yer değiştiren çamurlu kıyı şeridi barajın ayırt edici saha karakteridir.",
 transport:"Kırklareli merkezden kuzeydoğu yönünde baraj çevresine ulaşılır; pin yalnız genel planlama konumudur. Son yaklaşımda baraj işletme yolu, kapalı servis yolu, özel tarla girişi ve park edilebilir alan hareket günü ayrılmalıdır.",
 crowdNote:"Merkeze yakınlık hafta sonu günübirlik kullanımını artırabilir; buna karşılık kırsal kıyının bazı cepleri yalnız tarımsal erişim taşır. Güvenli atış koridoru bulunmayan ortak kullanım bölümünde takım açılmamalıdır.",
 longIntro:["Kırklareli Barajı, İl Kültür ve Turizm Müdürlüğünün sportif olta balıkçılığı yapılabilecek sular arasında açıkça saydığı, İl Tarım ve Orman Müdürlüğünün de sazan balıklandırma programına dahil ettiği rota özelinde resmî kanıtlı bir içsu alanıdır.","Kayıt baraj gövdesi veya teknik tesisleri hedeflemez. Kırklareli merkez yakınlığı yalnız lojistik kolaylık sağlar; güncel kıyı erişimi, su kotu, özel mülkiyet ve saha tabelaları hareket günü ayrıca kontrol edilmelidir."],
 planningNotes:["6/2 Tebliğ ve 2025/12 değişikliğinde hedef türün dönem, boy, adet ve takım sınırlamalarını hareket günü kontrol et.","Baraj çevresinde geceleme varsayma; konaklama gerekiyorsa Kırklareli merkezde ruhsatlı seçenekleri ayrıca doğrula.","İlk ziyarette gündüz keşfi yap; gövde, savak, ölçüm tesisi ve servis yollarından uzak genel kıyı seç."],
 seasonalNotes:["İl Tarım ve Orman Müdürlüğünün balıklandırma kaydı Kırklareli Baraj Gölü'ne sazan yavrusu bırakıldığını doğrular; bu veri güncel stok yoğunluğu veya yakalama garantisi değildir.","İç sularda sazangiller için kapalı dönem ve tür bazlı limitler 6/2 Tebliğden kontrol edilmeli; yaz sonu düşük su kotunda balçık riski ayrıca hesaba katılmalıdır."],
 sources:[sportif,baliklandirma,teblig]
},
{
 ...ortak("kirklareli-kayali-baraji"),slug:"kirklareli-kayali-baraji",name:"Kayalı Barajı (Kayalıköy Barajı)",district:"Merkez",province:"Kırklareli",waterType:"Baraj",lat:41.7886,lng:27.1356,vehicleAccess:"Orta",
 summary:"Kayalı/Kayalıköy çevresinde, resmî sportif olta kaydı, rota özelinde sazan balıklandırması ve düzenli su ürünleri denetimi bulunan geniş rezervuar rotası.",
 amenities:["Kayalı köyü genel yaklaşım referansı","Kırklareli merkezde temel hizmetler","Gecelik plan için Kırklareli merkezde ruhsatlı konaklama seçenekleri"],
 cautions:["Yasadışı ağ avcılığına karşı resmî denetim yapılan bir su olduğundan ağ ve ticari çalışma izine yaklaşılmamalı","Baraj gövdesi ve teknik tesisler rota dışıdır","Geniş rezervuarda rüzgâr ve su kotu kıyı erişimini hızla değiştirebilir"],
 navigationNote:"Koordinat Kayalıköy Baraj Gölünün genel su alanını gösterir. Kayalı köyü tarafı yalnız yaklaşım referansıdır; pin belirli bir park cebi, tekne alanı veya kıyı girişinin kamusal olduğunu garanti etmez.",
 shoreProfile:"Kayalı Barajı, Kırklareli'nin daha geniş rezervuarlarından biridir; uzun girintili kıyı çizgisi, tarım arazileri ve açık rüzgâra maruz ceplerle karakter kazanır. Kıyı malzemesi su kotuna göre sert toprak, çakıl ve balçık arasında değişebilir.",
 transport:"Kırklareli merkezden Kayalı köyü yönü genel ulaşım referansıdır. Son kırsal yolun açık, kamuya ait ve araç için uygun olduğu varsayılmamalı; bariyer, tarla sınırı ve baraj servis yolları yerinde kontrol edilmelidir.",
 crowdNote:"Rezervuarın genişliği kullanıcıları farklı ceplere dağıtabilir; fakat denetim kayıtları ağla kaçak avcılık vakalarını gösterdiği için görülen ağ, şamandıra veya tekne çalışma hattından uzak durulmalıdır.",
 longIntro:["Kayalı Barajı, resmî turizm kaynağında sportif olta balıkçılığı yapılabilecek yerler arasında sayılır. İl Tarım ve Orman Müdürlüğü baraja sazan yavrusu bırakıldığını ve farklı yıllarda yasadışı ağ avcılığına karşı denetim yapıldığını ayrıca kaydeder.","Bu güçlü masa başı kanıtı her kıyı cebinin sürekli amatör kullanıma açık olduğu anlamına gelmez. Geniş rezervuarda ticari/denetim faaliyeti, özel arazi, baraj güvenliği ve su kotu ayrı değişkenlerdir."],
 planningNotes:["Kayalı Barajı için resmî denetim geçmişi nedeniyle ağ, tekne veya istihsal faaliyeti görülen bölümü doğrudan pas geç.","Kırklareli merkez lojistik yedektir; kıyıda tesis veya serbest kamp alanı varsayma.","Rüzgâr yönü ve su kotunu kontrol et; çamurlu geri çekilme şeridinde aracı kıyıya indirme."],
 seasonalNotes:["Resmî kayıtlar Kayalı Barajı'nda sazanın bulunduğunu ve sazan yavrusu takviyesi yapıldığını doğrular; tarihsel stok verileri günlük av başarısı değildir.","Sazangillerin kapalı dönemi ve güncel boy/adet kuralları 6/2 Tebliğden kontrol edilmeli; yasak ağ araçları amatör takım için emsal değildir."],
 sources:[sportif,baliklandirma,kayaliDenetim,teblig]
},
{
 ...ortak("kirklareli-armagan-baraji"),slug:"kirklareli-armagan-baraji",name:"Armağan Barajı",district:"Merkez",province:"Kırklareli",waterType:"Baraj",lat:41.8978,lng:27.4008,vehicleAccess:"Orta",
 summary:"Kocadere havzasında, resmî sportif olta kullanım kaydı ve rota özelinde sazan balıklandırma verisi bulunan; orman-tarım geçişindeki kırsal baraj rotası.",
 amenities:["Armağan ve çevre köyler genel yerleşim referansı","Kırklareli merkezde temel hizmetler","Gecelik kalış için merkez veya ruhsatlı kırsal seçenekler ayrıca doğrulanmalı"],
 cautions:["Baraj gövdesi, savak ve işletme sahasına yaklaşılmamalı","Orman-tarım geçişinde özel mülkiyet ve yangın riski hareket günü kontrol edilmeli","Kırsal yollarda yağış sonrası çamur ve düşük görüş riski olabilir"],
 navigationNote:"Pin Armağan Baraj Gölünün genel su alanını gösterir; gövde/savak tesisine veya hassas kıyı mikro-konumuna yönlendirme değildir. Son erişim köy yolu, bariyer ve mülkiyet durumuna göre yerinde seçilmelidir.",
 shoreProfile:"Armağan Barajı Kocadere üzerinde, Kırklareli'nin kuzeyindeki daha ormanlık topoğrafyaya yaklaşan bir rezervuardır. Tarım açıklıkları ile ağaçlık yamaçların ardışık gelmesi, kıyı eğimini ve araçtan suya son yaya yaklaşımını cepten cebe değiştirir.",
 transport:"Kırklareli merkezden Armağan/Dereköy yönündeki kırsal yol ağı genel referanstır. Son kıyı yaklaşımında orman yolu, tarla yolu ve baraj servis yolunu birbirinden ayırmak gerekir; pin araçla kıyıya kadar gidilebileceği anlamına gelmez.",
 crowdNote:"Kent merkezine göre daha kırsal karakterlidir; sakin görünüm güvenli erişim garantisi değildir. Tek başına uzak kıyıya inmek yerine gündüz keşfi ve geri dönüş yolunun önceden kontrolü tercih edilmelidir.",
 longIntro:["Armağan Barajı, Kırklareli İl Kültür ve Turizm Müdürlüğünün sportif olta balıkçılığı yapılabilecek sular arasında saydığı ve İl Tarım ve Orman Müdürlüğünün sazan balıklandırması yaptığı rota özelinde resmî kanıtlı bir rezervuardır.","Kırsal ve daha ağaçlık çevre, Kırklareli Barajı'ndan farklı bir erişim profili yaratır. Bu nedenle sayfa yalnız genel planlama noktası verir; orman girişleri, özel tarla sınırları ve teknik baraj sahası hareket günü ayrılmalıdır."],
 planningNotes:["İlk ziyaret gündüz yapılmalı; kırsal yolun geri dönüş koşulu yağıştan sonra yeniden değerlendirilmelidir.","Orman yangını tedbirleri, araç giriş kısıtları ve yerel tabela kamp/ateş planından önce gelir.","6/2 Tebliğde sazangiller için dönem, boy ve adet kurallarını kontrol et; balıklandırma kaydını av garantisi sayma."],
 seasonalNotes:["Armağan Baraj Gölü resmî 2022 balıklandırma listesinde sazan yavrusu bırakılan rezervuarlar arasındadır.","Yazın yangın ve düşük su kotu, kış/ilkbaharda ise çamurlu yol ve yükselen su kıyı planını değiştirebilir; mevsimsel saha koşulu hareket günü yeniden okunmalıdır."],
 sources:[sportif,baliklandirma,teblig]
},
{
 ...ortak("kirklareli-uskup-goleti"),slug:"kirklareli-uskup-goleti",name:"Üsküp Göleti",district:"Merkez",province:"Kırklareli",waterType:"Gölet",lat:41.7609,lng:27.4372,vehicleAccess:"Orta",
 summary:"Üsküp beldesi yakınında, resmî sportif olta listesinde yer alan ve sazan balıklandırması yapılan küçük sulama göleti; dolusavak ve tarımsal işletme alanlarından uzak planlanmalı.",
 amenities:["Üsküp beldesinde temel günlük ihtiyaçlar","Kırklareli merkez kısa sürüş mesafesinde","Gecelik kalış için Kırklareli merkezde ruhsatlı seçenekler"],
 cautions:["Dolusavak, tahliye kanalı ve sulama işletme yapıları rota dışıdır","Yüksek doluluk döneminde tahliye çevresinde akış ve kaygan zemin riski artar","Tarım arazisi ve sulama yolu sınırları kamusal kıyı olarak varsayılmamalı"],
 navigationNote:"Koordinat Üsküp Sulama Göletinin genel su alanını gösterir. Dolusavak, tahliye kanalı ve işletme tesisleri av noktası değildir; son kıyı cebi belde yolu ve saha tabelalarına göre seçilmelidir.",
 shoreProfile:"Üsküp, büyük barajlardan farklı olarak yerleşime yakın küçük bir sulama göletidir. Kısa kıyı hattı ve tarım arazileri, su seviyesi yükseldiğinde kullanılabilir atış ceplerini daraltabilir; dolusavak tarafı özellikle dışarıda tutulmalıdır.",
 transport:"Üsküp beldesi genel erişim referansıdır. Yerleşimden gölete yaklaşım kısa olsa da sulama servis yolu veya tarla içi yol kamusal araç geçişi sayılmaz; park ve son yaya hattı yerinde seçilmelidir.",
 crowdNote:"Küçük su alanında birkaç kullanıcı bile kıyı kapasitesini doldurabilir. Tarımsal çalışma, piknik veya yaya kullanımıyla çakışma varsa başka zamana bırakmak güvenli seçenektir.",
 longIntro:["Üsküp Göleti, Kırklareli resmî turizm sayfasında sportif olta balıkçılığı yapılabilecek köy/belde göletleri arasında açıkça sayılır. İl Tarım ve Orman Müdürlüğü de gölete sazan yavrusu bırakıldığını rota özelinde kaydetmiştir.","Gölet sulama işlevi taşıdığı için sportif kullanım işletme güvenliğinin önüne geçmez. Dolusavak, tahliye yapısı, sulama ekipmanı ve tarla sınırları sayfanın önerdiği alanın dışındadır."],
 planningNotes:["Dolusavak veya tahliye akışı aktifse o kıyı kesimini tamamen dışarıda bırak.","Küçük gölette tarımsal çalışma ve diğer kullanıcılarla güvenli mesafe yoksa olta açma.","Kampı varsayma; günübirlik planı Üsküp beldesi ve Kırklareli merkez hizmetleri üzerine kur."],
 seasonalNotes:["Resmî balıklandırma programı Üsküp Göletine sazan yavrusu bırakıldığını doğrular; stok takviyesi güncel yoğunluk göstergesi değildir.","Yağışlı dönemlerde gölet doluluğu ve dolusavak çalışması erişimi değiştirebilir; kurak dönemde ise geri çekilen kıyı balçıklaşabilir."],
 sources:[sportif,baliklandirma,teblig]
},
{
 ...ortak("kirklareli-saricaali-goleti"),slug:"kirklareli-saricaali-goleti",name:"Sarıcaali Göleti",district:"Lüleburgaz",province:"Kırklareli",waterType:"Gölet",lat:41.3841,lng:27.2284,vehicleAccess:"Orta",
 summary:"Sarıcaali köyü çevresindeki tarımsal peyzajda, resmî sportif olta listesinde yer alan ve sazan balıklandırması yapılan küçük gölet rotası.",
 amenities:["Sarıcaali köyü yakın yerleşim referansı","Lüleburgaz ilçe merkezinde kapsamlı günlük hizmetler","Gecelik kalış için Lüleburgaz'da ruhsatlı seçenekler"],
 cautions:["Gölet çevresindeki tarla ve üretim yolları kamusal park alanı sayılmaz","Sulama yapıları ve teknik ekipman çevresinde olta kurulmaz","Küçük su alanında hayvan sulama veya tarımsal faaliyetle çakışma olabilir"],
 navigationNote:"Pin Sarıcaali Göletinin genel su alanını gösterir. Köy ve tarım yolu yalnız yaklaşım bağlamıdır; özel tarla içinden kıyıya kestirme veya teknik sulama yapısına yönlendirme değildir.",
 shoreProfile:"Sarıcaali Göleti, Lüleburgaz ovasının açık tarım peyzajındaki küçük rezervuarlardan biridir. Ağaç gölgesinin sınırlı olduğu açık kıyılar rüzgâra maruz kalabilir; tarla parselleri ve sulama altyapısı nedeniyle kıyı erişimi kesintili olabilir.",
 transport:"Lüleburgaz'dan Sarıcaali köyüne ulaşım genel planlama eksenidir. Köyden sonraki tarla yollarının araçla kullanılabilirliği ve mülkiyet durumu varsayılmamalı; güvenli park köy/ana yol bağlamında seçilmelidir.",
 crowdNote:"Büyük rekreasyon tesisli bir gölet değildir; yerel tarımsal kullanım önceliklidir. Traktör, hayvan veya sulama çalışması bulunan kesimde sportif kullanım ertelenmelidir.",
 longIntro:["Sarıcaali Göleti, Kırklareli İl Kültür ve Turizm Müdürlüğünün sportif olta balıkçılığı yapılabilecek göletler listesinde yer alır; İl Tarım ve Orman Müdürlüğü de 2022 programında gölete sazan yavrusu bırakıldığını kaydeder.","Rota Lüleburgaz ovasındaki tarımsal işlevi nedeniyle kıyıyı rekreasyon alanı gibi sunmaz. Yerel üretim, özel parsel ve sulama altyapısı her zaman sportif kullanımdan önce değerlendirilmelidir."],
 planningNotes:["Lüleburgaz ilçe merkezini lojistik ve konaklama yedeği olarak kullan; kıyıda tesis bekleme.","Tarla yoluna araç sokmadan önce geçiş hakkı ve zemin durumunu yerinde kontrol et.","Sazan için güncel dönem, boy ve adet sınırlarını 6/2 Tebliğden kontrol et."],
 seasonalNotes:["Sarıcaali Göletine sazan yavrusu bırakıldığı resmî balıklandırma listesinde rota özelinde yer alır.","Açık ova rüzgârı ve tarımsal sulama sezonu su seviyesini etkileyebilir; kıyı kullanılabilirliği takvimden çok güncel su kotuna bağlıdır."],
 sources:[sportif,baliklandirma,teblig]
},
{
 ...ortak("kirklareli-sofuhalil-goleti"),slug:"kirklareli-sofuhalil-goleti",name:"Sofuhalil Göleti",district:"Babaeski",province:"Kırklareli",waterType:"Gölet",lat:41.4797,lng:27.1971,vehicleAccess:"Orta",
 summary:"Babaeski kırsalında, resmî sportif olta listesinde adı geçen ve sazan balıklandırması yapılan küçük gölet; köy-tarla erişimi ile sulama işlevi birlikte değerlendirilmelidir.",
 amenities:["Sofuhalil ve Müsellim köyleri yakın yerleşim bağlamı","Babaeski ilçe merkezinde temel hizmetler","Gecelik kalış için Babaeski veya çevre ilçelerde ruhsatlı seçenekler ayrıca kontrol edilmeli"],
 cautions:["Köy ve tarla yollarında özel mülkiyet sınırı gözetilmeli","Sulama/teknik yapı ve hayvan kullanım noktaları rota dışıdır","Yağış sonrası düşük standartlı yolda çamur ve araç saplanması riski olabilir"],
 navigationNote:"Koordinat Sofuhalil Göletinin genel su alanını gösterir; Müsellim-Sofuhalil kırsalındaki her yol kamusal kıyı erişimi değildir. Teknik yapı, tarla içi yol ve özel girişler kullanılmamalıdır.",
 shoreProfile:"Sofuhalil Göleti açık tarım arazileri arasındaki küçük su yüzeyidir. Kıyı eğimi büyük barajlara göre daha kısa olsa da ekili parseller ve sulama/hayvan kullanım noktaları olta kurulabilecek cepleri sınırlar; su çekilmesinde yumuşak zemin oluşabilir.",
 transport:"Babaeski'den köy yolları üzerinden genel bölgeye yaklaşılır. Son kilometrede tarla yolu ile kamusal köy yolunu ayırmak, aracı ekili alana veya sulama tesisine sokmamak ve dönüş zemini kontrol etmek gerekir.",
 crowdNote:"Turistik kalabalıktan çok yerel tarımsal kullanım belirleyicidir. Köylülerin sulama, hayvan veya arazi geçişiyle çakışan kıyı cepleri kullanılmamalıdır.",
 longIntro:["Sofuhalil Göleti, Kırklareli resmî turizm sayfasında sportif olta balıkçılığı yapılabilecek köy göletleri arasında sayılır. İl Tarım ve Orman Müdürlüğünün balıklandırma listesi gölete sazan yavrusu bırakıldığını ayrıca doğrular.","Bu iki resmî kanıt amatör kullanım ve tür bağlamını güçlendirir; ancak tarımsal mülkiyet, teknik sulama alanı veya güncel kıyı erişimi için saha teyidi yerine geçmez."],
 planningNotes:["Babaeski merkezden günübirlik plan yap; kıyıda konaklama veya hizmet altyapısı varsayma.","Tarla sınırları net değilse kıyıya kestirme yapma ve farklı kamusal yaklaşım ara.","İçsu kurallarını, özellikle sazangiller dönemi ile boy/adet limitlerini 6/2 Tebliğden kontrol et."],
 seasonalNotes:["Resmî program Sofuhalil Göletine sazan yavrusu bırakıldığını kaydeder; balıklandırma tarihi güncel av verimini garanti etmez.","İlkbahar yağışında toprak yol ve kıyı yumuşayabilir; yaz sulama döneminde su kotu düşebilir ve erişilebilir şerit değişebilir."],
 sources:[sportif,baliklandirma,teblig]
}
];
