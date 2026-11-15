# 16 Kasım 2026 — yeni avlak ve kalite teslimi

Başlangıç main: `3f306302d74d0ef684610b8b8450d6541d5c7d86`. 15 Kasım snapshot’ı korunmuştur; o gün araştırma tamamlanmadığı için geriye dönük yayın başarısı yazılmamıştır.

## Hazırlanan yeni sayfalar

| Avlak | İlçe | Sınıf | Planlanan indeks durumu |
|---|---|---|---|
| Kumla Açık Sahil | Bursa/Gemlik | C+ | index |
| Eğerce Açık Kıyısı | Bursa/Mudanya | C+ | index |
| Gemlik Narlı Açık Kıyısı | Bursa/Gemlik | C+ | noindex — günlük kota |
| Kumsaz Açık Sahil | Bursa/Gemlik | C+ | noindex — günlük kota |

Dört sayfa da ayrı yerleşim/kıyı kapsamıdır. Balık kanıtları tarihli, yerel birinci el av paylaşımlarıdır; resmî stok araştırması veya güncel bolluk garantisi olarak sunulmamıştır. Belediye kayıtları rota-özel kamusal kıyı kullanımını destekler. Limanlar, özel işletmeler ve işaretli yüzme alanları genel kıyı izni varsayımına dahil edilmemiştir. İstavrit dışında kaynaklardan kapsamı belirsiz türler aktarılmamıştır. Tüm kaynaklar, konumlar ve karar gerekçeleri günlük karar dosyasında ve sayfa kaynakçalarında kayıtlıdır.

## Mevcut kayıtlar

Sarıbeyler, Bayramiç ve Gökçeada baraj gölleri DSİ 2015 balıklandırma tablosu ve su kimliği kayıtlarıyla D→C yükseltilmiştir. Bu üç kayıt güncel kamusal erişim ve yerel av uygunluğu eksikleri nedeniyle HOLD/noindex kalır; C+ veya indeks salımı sayılmaz. Tarihsel sazan balıklandırması güncel stok/av izni olarak yorumlanmaz.

## Sayaçlar ve açık işler

Canlı doğrulama öncesi başarı sayaçları sıfırdır. Doğrulama sonrası gerçek teslim tarihi 16 Kasım olacak; dört yeni sayfanın ikisi 15 Kasım yeni sayfa açığına, ikisi 16 Kasım hedeflerine ayrılacaktır. Aynı sayfa iki günün başarısı olarak tekrar sayılmaz. 15 Kasım’ın üç terfi açığı açık kalır; bugünkü üç terfi yalnız 16 Kasım’a aittir. Diğer tarihsel eksiklerin kapandığı iddia edilmez.

Yeni kıyı araştırması İstanbul sabit merkezine 59–78 km aralığındadır; önceki 250 km tarama kaydı korunur. Mevcut baraj araştırması 280 km’ye uzanır. İstanbul’da kanıt bekleyen adayların varlığı korunur; İstanbul’un tamamen tükendiği iddia edilmez.

## Doğrulama

Tam build; veri şeması, mükerrerlik, içerik, indeks/sitemap/canonical politikaları ve günlük program regresyonlarını içererek geçti. Canlı noindex yeni sayfaların günlük yeni sayfa sayacında sayılabilmesi için HTTP 200, doğru canonical, noindex, sitemap dışında olma ve aynı yayın SHA’sı zorunlu kılındı. Bu kayıtlar indeks salımı sayacına dahil edilmez. Eksik veya çelişkili canlı kanıtı reddeden testler eklendi.

Yayın sonucu günlük ledger’ın `publication` alanında sonradan kaydedilecektir. PR öncesi bu rapor bir canlı teslim kanıtı değildir.
