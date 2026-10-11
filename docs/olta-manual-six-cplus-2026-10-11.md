# Olta Atlası: 11 Ekim 2026 manuel altı C+ avlak paketi

## Talep ve yayın sınırı
İstanbul, Ankara, İzmir illerine **ikişer yeni** avlak; alt sınır C+.
İşlemler ayrı bir kullanıcı talebidir ve günlük gerçek confidence yükseltmeleriyle **karıştırılamaz**. Önceden var olan C+ kayıtlar yeni kayıt diye sayılmadı. Başlangıç main: `395500b1335bceeedf419626af589d663c1f6b70`. Önceki 11 Ekim Küçükelmalı indeks salımı 1/2 olduğundan yalnız Kuzguncuk'a yeni indeks verildi; kalan beş rota `indexing=hold` (noindex,follow). Yeni otomasyon rotaları için B asgari kuralı değişmedi, yalnız bu açık kullanıcı talebindeki manuel kayıtlar için C+ istisnası ayrı sayaçla izlendi.

## İller ve yeni rotalar
| İl | Yeni kayıt (slug) | Sınıf | İndeks |
|---|---|---|---|
| İstanbul | `istanbul-uskudar-kuzguncuk-kiyi-kesimi` | C+ | index (bugünkü ikinci ve son salım) |
| İstanbul | `istanbul-uskudar-semsipasa-cami-kiyisi` | C+ | hold |
| Ankara | `ankara-gudul-sorgun-goleti-tabiat-parki-kiyisi` | C+ | hold |
| Ankara | `ankara-etimesgut-goksu-parki-susuz-goleti-kiyisi` | C+ | hold |
| İzmir | `izmir-karaburun-mordogan-merkez-kiyi-yolu` | C+ | hold |
| İzmir | `izmir-karaburun-merkez-iskele-sahil-yuruyus` | C+ | hold |

## Temel kanıtlar
- İstanbul: [İBB olta rehberi](https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf) Kuzguncuk ve Şemsi Paşa adlarını ve ilgili balık türlerini ayrı kıyı başlıklarında verir. **2017 tarihsel kayıt**, güncel av izni veya av garantisi değildir.
- Ankara/Sorgun: [Güdül Kaymakamlığı Sorgun Göleti](https://www.gudul.gov.tr/sorgun-goleti) su kimliği ve kamusal rekreasyon alanını; [ABB 2018 balıklandırma planı](https://www.ankara.bel.tr/haberler/baskent-golleri-balik-uretecek-11563) Sorgun'u ismen doğrular. Plan miktarı fiili uygulama garantisi değildir; tabiat parkı işletmesi ile olta kullanımı teyit edilmelidir.
- Ankara/Göksu: [ABB 2019 tamamlanan balıklandırma](https://www.ankara.bel.tr/haberler/baskent-te-baliklar-artsin-bereket-cogalsin-12264) ve [ABB Susuz Göleti/Göksu Parkı sosyal yaşam belgesi](https://www.ankara.bel.tr/files/6715/1323/4013/sosyal-yasam.pdf). Göletin parka açık olması her park kıyısında balık tutma izni değildir; **güncel park işletmesi yer ve saat kuralları doğrulanmadan sahada olta kullanılmamalı**.
- İzmir/Mordoğan: [Karaburun Belediyesi iskeleler](https://www.karaburun.bel.tr/tr/gezidetay/iskeleler/80), [Ege Üniversitesi Mordoğan kıyısı istasyonlu bilimsel örnekleme](https://dergipark.org.tr/tr/download/article-file/57800), [İzmir Büyükşehir sahil/olta bağlamı](https://www.izmir.bel.tr/tr/MekanDetay/72/230), [Karaburun Belediyesi balıklar](https://www.karaburun.bel.tr/tr/gezidetay/karaburun-baliklari/881). Bilimsel örneklem tarihsel olup noktasal av garantisi değildir.
- İzmir/Karaburun İskele: [Karaburun Belediyesi iskeleler](https://www.karaburun.bel.tr/tr/gezidetay/iskeleler/80), [Karaburun Belediyesi balıklar](https://www.karaburun.bel.tr/tr/gezidetay/karaburun-baliklari/881), [İzmir Büyükşehir kıyı bağlamı](https://www.izmir.bel.tr/tr/MekanDetay/72/230). Tür kanıtı Karaburun kıyıları yerel düzeyindedir, tek bir iskele noktasında güncel yakalama kanıtı değildir.
- Genel: [2026/26 sayılı 6/2 Tebliğ değişikliği](https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf), ana tebliğ ve 2025/12 değişikliği birlikte ele alınır.

## Hukuk/erişim ihtiyatları
Söz konusu kıyı rehberleri özgün ve **yaklaşık** pin taşır; hiçbiri özel iskele, marina, su çekme tesisi, liman operasyon bölgesi, koruma alanı veya parkın güncel yasak ilan ettiği kıyıyı kullanma izni değildir. Balık türüyle ilgili tarihsel veya havza düzeyindeki kayıtlar kesin av bulunurluğu göstermez. Aktif tabiat parkı işletme hükümleri, ücretsiz giriş varsayımı, güvenli atış hattı, sezon yasakları ve saha levhaları kullanımdan önce teyit edilir. Onaylanmamış mikro konumlar index dışı bekleme listesinde bırakılmıştır.

## Sayımlar
- Yeni avlak: **6** (İstanbul 2, Ankara 2, İzmir 2).
- Manuel yeni C+ kayıtlar: **6**. Yeni mevcut-kayıt yükseltmesi: **0**.
- 11 Ekim toplam gerçek eski-kayıt confidence yükseltmesi: **1/17** (Küçükelmalı, ayrı çalışma).
- Önceden 1 + bu pakette 1 = **2/2 günlük indeks salımı**. Yeni pakette 5 HOLD.
- Veri/test/PR/merge/üretim sonucu, kesin doğrulanana kadar **pending**.

Not: Bunlar kaynaklı masa başı rehberlerdir; saha ziyaret kaydı değildir. Kaynak kapsamı dışında kesin mikro kıyı avlanma izni beyan edilmez.
