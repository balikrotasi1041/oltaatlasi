# 27 Eylül 2026 kalite, kontrollü salım ve bakım

Başlangıç main: `97d005f111678e93524e440e99d850f0b88c618a` (Sevişler, PR #139).
Bu çalışma günlük hedefin **kısmi** sonucudur. Önceki Sevişler yükseltmesi ve salımı yeniden üretilmedi. Bu çalışmada 1 gerçek D→C yükseltme, 0 yeni salım, 1 hold, 0 yeni slug vardır. Günlük kümülatif: 2/17 yükseltme, 1 salım. Eksik 15 yükseltme ve Ege/Marmara yeni B+ hedefleri tamamlanmış sayılmaz.

## Kullanılan kullanıcı verileri

Referans sohbetin gerçek ekleri okundu: Cloudflare ziyaret ve sayfa görüntüleme PDF'leri, GSC Performance/Coverage ve altı Drilldown ZIP'i. Aynı alternatif canonical 100 kaydını içeren iki ZIP iki kez sayılmadı. GSC: discovered 219 + crawled-not-indexed 24 = 243; 404 6, redirect 1, alternatif canonical 100. Cloudflare: 672 ziyaret/575 mobil, 1432 görüntüleme/1216 mobil. Performans CSV'sinde Enne 41 tıklama/864 gösterim, Erzurum 39/630, Eskişehir 37/860; bunlar toplu title değişikliği gerekçesi yapılmadı.

GSC sayıları rapor anına aittir; yayımdan sonra kuyruğun azaldığı iddia edilmez. Kişisel ekler ve ham sorgu dökümleri repoya alınmadı.

## Kalite ve salım ayrımı

`dailyPolicy` gerçek veri farkını tarihli baseline ile karşılaştırır. Sert tavan 5, bugünkü operasyonel tavan 3; repo/GSC daha düşükse minimumu uygulanır. Önceki aynı gün salımları toplamdan düşülmez. Hedef altındaki sonuç `done=false` kalır. Kalite hedefine ulaşmak için confidence artırılmaz. C+ fakat salınmayan kayıt `indexing=hold`, Worker `noindex,follow`, sitemap dışında kalır. Yeni kayıt en az B, aynı özgün SVG image/socialImage ve insan tarafından incelenmiş bağımsız kaynak aileleri gerektirir; otomatik kontrol kaynakların gerçek bağımsızlığını tek başına ispatlamaz.

- **Sevişler Baraj Gölü:** önceki main'de B/index; bu çalışmada tekrar yükseltilmedi veya salınmadı.
- **Karaçepiş Göleti, İvrindi/Balıkesir:** D→C/hold. İsim/il/ilçe/gölet kimliği ve tür [İl Tarımın tarihli sazan balıklandırması](https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=115), amatör kullanım ve belediye mülkiyeti [bağımsız belediye kaydı](https://balikesir.bel.tr/haberler/akindan-amator-balikcilara-mujde-karacepis-goleti-ozel-avlak-sahasi-oluyor), genel konum [OSM su varlığı](https://www.openstreetmap.org/way/113609712) ile eşleştirildi. `locationPrecision=Genel bölge`; pin/kıyı mikro-konumu değiştirilmedi. Habitat tahmini kefal/siraz çıkarıldı; yalnız kanıtlı sazan kaldı. 2025 proje duyurusundaki yürüyüş yolu ve 12 ay hizmet mevcut tesis sayılmadı. Son giriş, işletme şartları, su kotu/çamur/şev ve teknik tesis riskleri açıklandı. Mevzuatta [16.09.2026 değişikliği](https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf) esas alındı; ana tebliğ ve yerel kararların yerine yalnız değişiklik metni geçirilmedi. Güncel saha erişimi doğrulanmadığı için B/index yapılmadı.

## Yeni bölgesel adaylar ve elenenler

| Aday | Araştırma / karar |
|---|---|
| Ege – Aliağa Ağapark | [Belediye turnuvası](https://www.aliaga.bel.tr/haber/balik-avi-tutkunlari-aliaga-da-yaristi/1370) ve 2026 şartnamesi amatör kullanımı destekliyor. Şartnamedeki tür listesi gerçekleşmiş yakalama kanıtı değil. Bağımsız rota-özel tür kanıtı tamamlanmadı; yayımlanmadı. |
| Marmara bölgesi – Kandıra Uzunkum | [2025 belediye yarışması](https://www.kocaeli.bel.tr/haber/olta-ustalarinin-nefes-kesen-yarisi-49464.html) minekop yakalamasını kaydediyor. [Kum zambağı/tabiat parkı kaydı](https://www.kocaeli.bel.tr/haber/uzunkum-sahilinde-ikinci-kiyi-temizligi-yapildi-43683.html) nedeniyle hassas alan dışında güvenli genel yaklaşım sınırı kesinleştirilemedi; yayımlanmadı. |
| Topçam/Aydın | [Doğrudan bilimsel siraz kaydı](https://dergipark.org.tr/tr/download/article-file/57417) var; genel kamu erişimi/kooperatif kullanım ayrımı yeterince doğrulanmadı. D korundu. |
| Altınyazı/Edirne | [Rota özelinde bilimsel tür ve ağır metal çalışması](https://dergipark.org.tr/en/pub/ase/article/254137) var; güncel erişim ve güvenli kullanım kanıtı eksik. Tarihli kirletici bulgusu yok sayılmadı, D korundu. |
| Kureyşler/Kütahya | [Kaymakamlığın balıklandırma kaydı](https://www.aslanapa.gov.tr/kaymakamimiz-ilce-protokolu-ile-birlikte-su-urunleri-stoklarinin-artirilmasi-amaciyla-yapilan-baliklandirma-calismalarina-katildi) var; kamusal kıyı erişimi ve arkeolojik alan sınırı yeterli değil. D korundu. |
| Kula, Osmanlı | Mevcut B kayıtlar; yeni slug ile çoğaltılmadı. |
| Sevişler, Akköprü | Mevcut katalog kayıtları; yeni kayıt olarak sayılmadı. |
| Gördes/Sazlıdere; Durusu Park | İçme suyu koruma / özel işletme erişim belirsizliği nedeniyle yeni yayın yapılmadı. |
| Kozağaç/Akçadere, Bağyolu/Güneşli | Balıklandırma ya da kullanım kaydı tek başına tüm kanıt boyutlarını karşılamıyor; yayın eşiği tamamlanmadı. |

Yeni slug olmadığı için gereksiz SVG üretilmedi. Özel parseller, çalışma limanı/marina/tersane/barınakları, çiftlik mikro-konumları, kapalı/korunan ve hassas mikro alanlar yayın hedefi yapılmadı.

## İletişim crawl kaynağı ve mobil görünüm

Kaynaklar: rota navigasyon hata bağlantısı, dünya balıkçılığı telif bağlantıları, gizlilik bağlantısı ve FeedbackButtons tıklama akışının query üretimi. Formun varsayılan GET davranışı da kaldırıldı. Bütün taranabilir href'ler `/iletisim/`; kullanıcı tıklamasındaki konu/sayfa/url bağlamı sunucuya gönderilmeyen fragment ile taşınır. Eski query bağlantılarının form ön doldurması korunur. JavaScript yoksa doğrudan e-posta bağlantısı sunulur; form GET ile URL çoğaltmaz. Canonical/slug değişmedi. Regresyon kontrolü D/noindex sayfalar dahil bütün derlenmiş iç bağlantıları tarar.

Rota adının hemen altındaki kompakt özet su türü, muhtemel balık, erişim, güncel mevzuat ve genel haritayı getirir. D kayıtlarda tür tahmini kesin bilgi gibi sunulmaz. Uzun sorumluluk metni açılır ayrıntıda korunur. Toplu başlık şablonu uygulanmadı.

## Ayrı bakım sonucu

[URL bazlı denetim](olta-maintenance-2026-09-27.json): 24 CNI URL bugün 200. 6 parametreli iletişim canonical'ı temiz iletişime gidiyor; kaynak üretimi düzeltildi. 12 URL mevcut politika gereği noindex; sırf GSC'den çıksın diye salınmadı. Kalan 6 indekslenebilir sayfa kendine canonical, derleme/sitemap ve iç link kontrolüne dahil; Google'ın indeks seçimi garanti edilmez. Bu inceleme içerik yükseltmesi sayılmadı.

6 adet 404 canlıda gerçek 404 ve derlenmiş iç bağlantı sayıları sıfır. Üç dünya haberi için eşdeğer güncel içerik yok; Akhasan/Akbelen kaldırma kayıtlarında av yasağı, Kırıkkale/Hirfanlı kaydında eski kimlik sorunu mevcut. Sırf hata sayısını azaltmak için alakasız yönlendirme yapılmadı. Akhasan adını taşıyan başka kayıt aynı yasal su varlığı kabul edilerek yönlendirilmedi; ayrı kimlik/yasak incelemesi gerekir. Maltepe eski slug'ı mevcut doğru kıyı sayfasına tek 301 veriyor; korunuyor.

## Doğrulama

`npm ci`, `validate:data` (Ankara genişleme, duplicate, confidence, maintenance, admin-data-flow, security, guides), `validate:research`, `npm run build` (Astro check/build, sitemap, index-policy), yeni günlük politika ve regresyonları, `npm run deploy:dry` çalıştırılır. Yerel build ilk turda tarihli yükseltme kaydı Ankara auditine eklenmediği için durdu; tarihli gerçek yükseltme listesine bağlanarak düzeltildi, kontrol gevşetilmedi. PR/merge/production sonucu commit sonrası harici raporda belirtilir; bu belge gelecekteki deploy başarısını önceden iddia etmez.

Yerel sonuç: tüm yukarıdaki kapılar geçti; Astro 0 hata/0 uyarı (11 mevcut hint). 390×844 gerçek Chromium kontrolünde yatay taşma yok; rota adı ve karar kartı ilk görünümde. İletişim konu/sayfa ön doldurma, eski query uyumu, temiz sunucu isteği ve POST fallback doğrulandı. Küçük yatay taşma `min-width:0`, özet kartı kontrastı açık metin renkleriyle düzeltildi.
