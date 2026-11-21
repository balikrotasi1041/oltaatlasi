# 19 Kasım 2026 — yeni avlak ve kalite

Başlangıç main ve canlı sürüm: `1472cfe4bee40dd12a16ba34b42854732656f806`. Europe/Istanbul günü, perşembe ortak indeks sınırı 4. Temiz main üzerinden tek başlangıç snapshotı alındı.

## Yeni sayfalar

- Fıstıklı Açık Sahil, Yalova/Armutlu: C+, İstanbul merkezine 58,552 km. Armutlu Kaymakamlığı ve Belediyesi kıyı kimliği/ziyaret bağlamı, 2 Kasım 2007 tarihli birinci el kıyı avı istavrit kanıtı, OpenStreetMap kıyı geometrisi. Liman, iskele ve özel işletmeler kapsam dışında.
- Çayağzı Açık Deniz Kıyısı, Düzce/Akçakoca: C+, 187,282 km. Düzce Kültür ve Turizm Müdürlüğü kıyı kimliği, Aleyna Şentürk'ün 10 Haziran 2026 tarihli doğrudan kıyı avı istavrit kaydı, Kaymakamlık suya giriş kararları. Yalnız kuru kıyı; cankurtaran bulunmaması, çeken akıntı ve dalga riski açıkça yazıldı. Akçakoca merkez sahiliyle aynı rota değildir. Benzer adlı doğudaki farklı harita işaretleri kullanılmadı.

Tarihsel av anlatımları güncel bolluk veya bilimsel stok ölçümü olarak sunulmaz. Kaynaklar, konumlar ve kararlar günlük ledger ve sayfalarda bağlantılıdır. İstanbul'da kanıt bekleyen adaylar korunur; İstanbul tamamen tükendi iddiası yoktur. Mevcut 250 km tarama kapsamı korunmuştur.

## Gerçek terfiler

- Güzelyalı Mudanya Sahili: C → C+. 5 Eylül 2006 tarihli doğrudan kıyı mırmır kaydı, belediyenin kamusal sahil düzenlemesi ve 2026 Mudanya yerel yüzme alanı kısıtları birlikte işlendi. Kapsamı belirsiz genel tür listesi mırmır kanıtıyla daraltıldı. Zaten indekslenebilir olduğundan yeni indeks salımı değildir.
- Demirtaş Baraj Gölü: D → C, HOLD. 29 Haziran 2021 resmî su ürünleri ihale tablosunda suya özgü sazan kaydı var. Tarihsel ticari kiralama güncel amatör av veya kıyı giriş izni değildir.
- Hasanağa Baraj Gölü: D → C, HOLD. DSİ 2021 bülteni Ek Çizelge 17-10, basılı 710/PDF 731 sayfasında 120.000 pullu sazan kaydı okundu. Arama özeti değil tablonun kendisi esas alındı. Güncel erişim/yerel av uygunluğu açık kaldığı için C+ verilmedi.

## İndeks sırasından salım

Narlı ve Kumsaz'ın tarihli kıyı avı kanıtları ile belediye kıyı kullanımı/risk kayıtları tekrar okundu. İkisi de C+ seviyesini korur; HOLD → index değişimi bakım/salım olarak sayılır, terfi veya yeni sayfa değildir. İki yeni sayfayla birlikte ortak indeks kullanımı 4/4 olacaktır.

## Açık geçmiş işler

15 Kasım: 3 terfi. 17 ve 18 Kasım: her gün 2 yeni sayfa ve 3 terfi için main üzerinde doğrulanmış teslim kaydı yok. Bugünkü iki yeni sayfa ve üç terfi geçmiş günlere tekrar yazılmaz. Bilinen açık toplam 4 yeni sayfa ve 9 terfidir; daha eski dönemlerin tamamen kapandığı iddia edilmez.

## Kontroller ve yayın

Tam build, şema, mükerrerlik, içerik, kalite, günlük sayaç, canonical/robots/sitemap kontrolleri ve deploy provası geçti. Beklenen toplam 1509 avlak; 342 teknik indekslenebilir, 1167 noindex (1087 D, 80 C ve üzeri HOLD). Bu 80 kaydın tamamı sırf kota bekliyor diye sınıflandırılmaz.

Bu rapor PR öncesi hazırlık kaydıdır. Canlı doğrulama tamamlanana kadar günlük başarı sayaçları sıfırdır. PR, production SHA ve sayfa kanıtları doğrulama sonrasında publication alanına eklenecektir.

Mudanya 18 Ağustos 2026 tarihli 2026/01 kararının yedi sayfalık taraması görsel olarak okundu: sayfa 1 Güzelyalı/Burgaz yüzme bölgeleri; sayfa 3 madde 13 yüzme alanlarında av ve takım bulundurma yasağı. 2026/26 değişikliğinin 2. sayfası görsel olarak okundu; istavrit (karagöz) 13 cm → 12 cm değişikliği doğrulandı.

## Canlı teslim ve gecikmiş kayıt

PR [#221](https://github.com/balikrotasi1041/oltaatlasi/pull/221), başarılı Quality check #44580279924 sonrası squash birleştirildi. Production #44580596645, 19 Kasım 17:47:57 UTC tarihinde başarılı oldu. Canlı ve main SHA `46d7bc69d4ec9e0733fb0789f976296662140ab6`.

21 Kasım tarihli canlı kontrolde yedi sayfa HTTP 200 ve doğru canonical ile doğrulandı. Fıstıklı, Çayağzı, Güzelyalı, Narlı ve Kumsaz index,follow ve sitemap içinde; Demirtaş ve Hasanağa noindex,follow ve sitemap dışında. robots.txt taramayı engellemiyor. Bu geç doğrulama 21 Kasım yeni sayfa veya yeni indeks salımı olarak sayılmaz.

19 Kasım teslimi: 2 yeni C+ sayfa, 3 gerçek terfi, 2 mevcut HOLD salımı ve 4/4 ortak indeks kullanımı. Google'ın gerçekten indekslemesi iddia edilmez. 20–21 Kasım için henüz main üzerinde yeni içerik teslimi bulunmuyor; önceki açık günler korunuyor.
