> **4 Ekim 2026 bağlayıcı güncelleme:** Günlük toplam yeni indeks salımı sabit en fazla **2**. Repo, hukuk veya operasyon daha sıkıysa 0/1 uygulanır. Eski 3/5 tavanları tarihsel metindir ve artık uygulanmaz. Önceki aynı gün salımları dahildir. `confidence=C` tek başına C+ değildir. Yeni salım için yapılandırılmış `qualityGrade` ve `expanded-v2` kanıt değerlendirmesi zorunludur. Ayrıntı: [genişletilmiş standart](expanded-quality-standard.md).

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
- 151-250: throttle, günlük en fazla 2 yeni C+ index salımı
- 251+: strong-throttle, günlük en fazla 2 yeni C+ index salımı; gerekirse daha düşük

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

## 27 Eylül 2026 uygulama eki

Kalite ve salım ayrı günlük sayaçlardır: en az 17 kanıtlı kalite yükseltmesi hedeflenir; hedef bir confidence kotası değildir. Günlük D/noindex → C+/index tavanı sabit 2dir; eski 219 discovered / 24 crawled-not-indexed verisi yeni ölçüm diye sunulmaz. Operasyonel hedef 0–2dir. Repo/GSC daha düşük sınır belirlerse en küçüğü geçerlidir. Önceki aynı gün salımları dahil edilir. Daha yüksek kaliteye ulaşmış ancak salınmayan kayıt `indexing=hold` ve `noindex,follow` kalır. Günlük başlangıç snapshot'ı değiştirilmeden gerçek veri farkı kontrol edilir; yeni gün için yeni tarihli snapshot ve ledger açılır. Kanıt ailelerinin bağımsızlığı editoryal inceleme gerektirir; URL adedi yeterli değildir. Hedef eksikliği `done=false` ve açık eksik sayı ile raporlanır. Yeni Ege/Marmara kayıtları ancak B/A ve güvenli genel kullanım kanıtıyla açılır.
