# Olta Atlası SEO ve indeks salım standardı v1

Tarih: 18 Eylül 2026

Bu belge, içerik kalitesini düşürmeden Google'ın tarama ve indeksleme kapasitesine göre yayın hızını yönetmek için kalıcı çalışma standardıdır.

## 1. Temel ilke

Olta Atlası'nın kalite motoru ile indeks motoru ayrıdır.

- Günlük 17 gerçek D→C+ kalite yükseltmesi hedefi korunabilir.
- Bir kaydın C/B/A güven seviyesine çıkması, aynı gün Google indeksine açılması gerektiği anlamına gelmez.
- Yeni kayıt ve kalite yükseltmelerinde kanıt standardı kota uğruna düşürülemez.
- URL, slug ve canonical yalnız zorunlu migrasyon durumunda değiştirilir.

## 2. İndeks salım freni

18 Eylül 2026 Search Console snapshot'ında 211 adet "Keşfedildi - şu anda dizine eklenmiş değil" ve 5 adet "Tarandı - şu anda dizine eklenmiş değil" URL vardır. İşlenebilir kuyruk 216 URL'dir.

Kuyruk bandı:

- 0-75: normal
- 76-150: dikkatli
- 151-250: throttle, günlük en fazla 5 yeni C+ index salımı
- 251+: strong-throttle, günlük en fazla 3 yeni C+ index salımı

C+ olup bekletilecek rota `indexing: "hold"` ile yayımlanır. Bu rota kullanıcıya açık kalır fakat normal ve görsel sitemap dışında tutulur ve Worker üzerinden `noindex,follow` alır. Salım günü `indexing: "index"` yapılır veya hold alanı kaldırılır.

## 3. Eski noindex URL'ler

Arama performansı olan noindex URL'ler körlemesine kapatılmaz veya topluca indexe açılmaz.

Karar ağacı:

1. Semantik olarak eşdeğer yeni URL varsa 301.
2. Eşdeğer yoksa ve kayıt C+ kalite standardını karşılıyorsa index.
3. Kalite standardı karşılanmıyorsa noindex,follow devam.
4. Trafik alan URL yalnız noindex ile "öldürülmez".

`/iller/{province}/il-geneli/` biçimindeki eski il-geneli hub'lar il sayfasına 301 edilir.

## 4. CTR standardı

Toplu title/meta şablonu yasaktır. Search Console'da yüksek gösterim, düşük CTR ve ortalama pozisyon 3-15 bandındaki sayfalar kontrollü kohortlarla ele alınır. Haftada 3-5 sayfa yeterlidir; sonuç en az 14 gün gözlenir.

## 5. Crawl hijyeni

`/iletisim/` tek crawlable iletişim URL'sidir. Sayfa ve kaynak bağlamı HTML'de query-string href olarak yayımlanmaz; yalnız gerçek kullanıcı tıklamasında istemci tarafında eklenir. Böylece canonical doğru kalırken Google'a yüzlerce parametre varyantı gösterilmez.

## 6. Mobil kalite

Mobil birincil yüzeydir. 390, 393, 414 ve 430 px genişlikleri ile iOS/Safari yayın kontrolüne dahildir. Harita, yol tarifi, konum hassasiyeti ve hava paneli ilk mobil kullanım akışında kırılmamalıdır.

## 7. Hava verisi

`/api/weather` noindex ve hata toleranslı kalır. Cache kullanılır; upstream sorununda stale/fallback tercih edilir. MGM resmî uyarısı türetilmiş saha puanından üstündür. Hava verisi nedeniyle tüm mera sayfalarının `updatedAt` veya sitemap `lastmod` değerleri topluca değiştirilmez.

## 8. Ölçüm

Davranış kalitesini izlemek için öncelikli GA4 olayları:

- `map_location_click`
- `directions_click`
- `route_open`
- `feedback_positive`

GA4 tarafında Key Event işaretlemesi hesap/yönetim düzeyinde ayrıca yapılmalıdır.
