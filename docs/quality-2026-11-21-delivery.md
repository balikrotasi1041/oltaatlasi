# 21 Kasım 2026 — yeni avlak ve kalite

Başlangıç main SHA: `2c8493cfeec7dc8a8a4b35a219bcd9eae491d0ab`. Cumartesi ortak indeks sınırı 2'dir. Temiz main üzerinden tek baseline alınmıştır.

## Yeni C+ sayfalar

- Gemsaz Açık Halk Plajı, Bursa/Gemlik — C+, İstanbul merkezine 66,545 km. 23 Ağustos 2010 tarihli doğrudan kıyı mırmır kaydı; Gemlik Belediyesi kamusal sahil denetimi; 2025 akademik yüzme suyu tablosunda kesin kimlik/koordinat; 2026 Büyükşehir kıyı bakımı. Yüzme alanı, iskele, kayıkhane ve özel alanlar kapsam dışıdır.
- Altıntaş Açık Halk Plajı, Bursa/Mudanya — C+, 72,462 km. 12 Eylül 2008 tarihli doğrudan kıyı mırmır kaydı; 2026 Büyükşehir kamusal plaj bakımı; 2025 akademik tabloda kesin koordinat; Mudanya 2026 yerel yüzme alanı kararı. Yüzme alanı, eski iskele/kayıkhane ve özel alanlar kapsam dışıdır.

Tarihsel kişisel av anlatımları güncel bolluk veya stok ölçümü olarak sunulmaz. İki yeni rota mevcut ad, slug, koordinat ve kıyı kapsamına göre mükerrer değildir. İstanbul'daki kanıt bekleyen adaylar korunur; İstanbul tamamen tükendi iddia edilmez. 250 km kalıcı araştırma yarıçapı sürer.

## Gerçek terfiler

- Çınarcık Sahili: C → C+. 11 Haziran 2010 rota-özel istavrit anlatımı, belediyenin kamusal sahil/turizm kaydı ve 5 km yürüyüş hattı birlikte işlendi. Zaten indekslenebilir olduğundan yeni indeks salımı değildir.
- Uluabat Gölü: D → C, HOLD. 2021 hakemli çalışma gölden örneklenen sazanı doğrular. Ramsar/işletme sınırları, kamusal kıyı girişi, yerel amatör av uygunluğu ve güncel tüketim güvenliği açık kaldı.
- Mustafakemalpaşa Çayı: D → C, HOLD. 2006 hakemli çalışma akarsudan örneklenen inci balığını doğrular. Mikro kıyı, kamusal geçiş, güncel kirlilik ve yerel amatör av uygunluğu açık kaldı.

## İndeks kotası

İki yeni C+ sayfa index,follow olarak hazırlanmıştır. Cumartesi ortak kota 2/2 olacaktır. Çınarcık zaten indekslenebilirdir; iki C/HOLD terfi noindex kalır. Google'ın gerçekten indekslemesi iddia edilmez.

## Yayın durumu

PR #223 kalite kontrolünden geçti ve squash merge edildi. Production workflow `44935029409` başarılıdır; canlı `/__deploy/version.txt` işareti `3570c50a9042fa1ca27ee84ebdd7ebc237eef332` olarak exact main SHA ile eşleşmiştir. İki yeni sayfa HTTP 200, doğru canonical, `index,follow` ve sitemap üyeliğiyle; Çınarcık mevcut indeks durumunu koruyarak; Uluabat ve Mustafakemalpaşa Çayı ise HTTP 200, doğru canonical, `noindex,follow` ve sitemap dışında canlı doğrulanmıştır.

Günlük teslim: 2 yeni C+, 3 gerçek güven terfisi, 2/2 ortak indeks salımı. Google'ın gerçekten indekslemesi iddia edilmez; yalnız teknik indekslenebilirlik doğrulanmıştır.
