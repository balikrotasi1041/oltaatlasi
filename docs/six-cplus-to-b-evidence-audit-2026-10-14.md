# Altı C+ avlak için B sınıfı araştırma denetimi (14.10.2026)

Durum: **Araştırma devam ediyor; B terfisi onaylanmadı.** Bu dosya saha doğrulaması yerine geçmez. Altı rota `indexing=hold` kalmalıdır. Kaynaklar rotaya özel olmalı; genel bölge tür bilgisi izinli mikro kıyı erişimini ispatlamaz.

## Ortak hukuk kontrolü
Tarım ve Orman Bakanlığı, 6/2 amatör avcılık tebliğinin **2026/26** sayılı değişikliğinin 16.09.2026'da yayımlandığını doğruluyor: https://www.tarimorman.gov.tr/HHGM/Haber/267/ . 2024/21 ana tebliğ ve değişiklikler ile güncel il kararları birlikte incelenmeli. İçme suyu su alma noktalarına 300 m mesafe kuralı özellikle Sapanca için kritik: https://www.lexpera.com.tr/resmi-gazete/metin/6-2-numarali-amator-amacli-su-urunleri-avciliginin-duzenlenmesi-hakkinda-teblig-no-2024-21-32629 .

| Rota | Yeni/çapraz kanıt | B'ye engel olan doğrulama | Karar |
| --- | --- | --- | --- |
| istanbul-asiyan-onu-balik-tutma-iskeleleri | İBB tür rehberi + İBB 2018 sahil düzenleme raporu (mevcut dosyada) | Güncel iskele kullanım sınırı, vapur yanaşma ve kıyı av izni | C+/HOLD |
| istanbul-kefelikoy-sahil-parki | İBB yer-özel tür rehberi + Sarıyer Belediyesi park kimliği (mevcut dosyada) | Parkın güncel balık avına açık kesimi ve yerinde levha/işletme sınırları | C+/HOLD |
| kocaeli-esme-sapanca-golu-kamusal-kiyi | İl Tarım sportif sazan yarışması + Büyükşehir yürüyüş yolu (mevcut dosyada); Arifiye Kaymakamlığı göl kimliğini ve genel balıkçılığı teyit ediyor: https://www.arifiye.gov.tr/sapanca-golu | Eşme'de güncel yasal mikro av noktası; içme suyu havzası ve su alma tesisi koruma mesafesi; yarışma sürekli izin değildir | C+/HOLD |
| kocaeli-babali-acik-karadeniz-kiyisi | Kocaeli Büyükşehir sahil/tür ve Kandıra Belediyesi sahil kimliği (mevcut dosyada) | Türün tam Babalı atış noktasına özgü kanıtı; sit/koruma ve yüzme/spor sınırlarının güncel haritası | C+/HOLD |
| sakarya-kucukbogaz-golu-karasu | İl Kültür ve Turizm Müdürlüğü gölün olta balıkçılığına açık olduğunu ve üç türü açıkça belirtiyor: https://sakarya.ktb.gov.tr/TR-340488/kucukbogaz-golu.html ; Karasu Belediyesi bağımsız kurum olarak göl kimliği, türler ve erişimi teyit ediyor: https://karasu.bel.tr/kucukbogaz-golu | Güncel 2026 yerel kısıtlar, korunan sazlık/özel parsel dışındaki kesin kamusal av noktası | C+/HOLD, B için öncelikli |
| sakarya-buyuk-akgol-golkent | Sakarya Valiliği gölün türlerini, Gölkent yaklaşımını ve kıyıların çoğunun sazlık/bataklık olduğunu belirtiyor: https://www.sakarya.gov.tr/buyuk-akgol | Sulak alan koruma zonları, istihsal/kiralama hakları, ziyaret yolu ile olta atılabilecek kıyı ayrımı; yürüyüş yolu av izni değildir | C+/HOLD |

## İşlem kuralı
Her kayıt için **iki bağımsız güçlü kanıt ailesi**, rota-özel tür, 2026 mevzuat kontrolü, güncel güvenli kamusal mikro erişim ve çözümlenmiş riskler sağlanınca B değerlendirmesi yapılabilir. `confidence`, `qualityGrade` veya `indexing` alanlarını yalnızca kaynak eklenmesine dayanarak yükseltmeyin. Terfi sonrası CI, PR, merge ve canlı indeks denetimi gereklidir.
