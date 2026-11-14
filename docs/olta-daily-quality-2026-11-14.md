# 14 Kasım 2026 — günlük avlak çalışması

Başlangıç main: `335310a311d74f7ca42eabdb4866211876152ced`. Baseline 1501 kayıt. Cumartesi ortak indeks üst sınırı 2. Günün yayın ve terfi başarıları yalnız canlı doğrulama sonrası günlük JSON defterine işlenir.

## Yeni sayfalar

- İğneada Merkez Deniz Kıyısı, Kırklareli/Demirköy, C+: İstanbul merkezine 127,152 km.
- Beğendik Açık Deniz Kıyısı, Kırklareli/Demirköy, C+: İstanbul merkezine 133,277 km.

Tür kaynağı Kırklareli İl Kültür Müdürlüğünün adı açıkça verilen kıyı yerleşimleri ve istavrit kaydıdır. Mikro atış noktasında yakalama veya güncel stok kanıtı değildir. Genel ziyaretçi sahili Kültür Portalında tanımlıdır. İğneada gölleri/longozları, Beğendik sınır ve askerî bariyeri, Rezve ağzı, barınaklar ve işaretli yüzme alanları kapsam dışında bırakıldı. 6/2 ve 2026/26 incelendi; istavritte güncel asgari boy 12 cm. Her sayfada iddia ile kaynak bağlantısı ayrı tutuldu.

Mevcut İğneada Mert Gölü ve Rezve kayıtlarıyla su kütlesi, ad ve koordinat karşılaştırıldı; yeni sayfalar ayrı deniz kıyılarıdır. Yeni tarama 134 km; geçmiş 250 km kapsam kaydı korunur. İstanbul tamamen tükenmiş sayılmadı. Çakıl, Dilburnu ve Türknil erişim/koruma eksikleriyle kuyrukta; Selvi Burnu askerî alan; Lapseki ve Akçay kaynak kapsamı belirli kıyı oltasını doğrulamadığı için oluşturulmadı.

## Mevcut kayıtların gerçek kanıt artışı

| Kayıt | Başlangıç → sonuç | Kanıt ve açık konu |
|---|---|---|
| Bakacak Baraj Gölü | D → C, HOLD | İl Tarım teknik şartnamesi sazan kaydı. Ticari istihsal amatör av izni sayılmadı. |
| Atikhisar Baraj Gölü | D → C, HOLD | İl Tarım 26 Ağustos 2026, 348.000 yavru sazan. Su koruma ve kamusal giriş incelemesi açık. |
| Aşağıokçular Göleti | D → C, HOLD | İl Tarım 2014, 6.000 yavru sazan. Tarihsel kayıt güncel stok değildir; kamusal erişim açık. |

Bu üç kayıt indeks sırasına hazır değildir. Önceki kanıtsız tür listeleri yalnız doğrudan su adıyla doğrulanan sazanla değiştirildi. C+ verilmedi. İlk yayın tarihleri korundu; eski araştırma kaynak dosyaları ve tarihsel defterler değiştirilmedi.

## Denetim ayrımı

Eski Ankara toplu kayıt denetimi, bütün C terfilerinde erişimin en az kısmen doğrulanmasını, Google Maps ve konaklama içeriğini istiyordu. C/HOLD araştırma ilerlemesi ile indeks salımı ayrıldı. Dar istisna güçlü su/tür kanıtı, bağlı kaynaklar, açık erişim eksikliği ve HOLD gerektirir; index/C+/D veya kaynak kaybı durumları regresyon testinde reddedilir. Yayın eşiği ve ortak indeks kotası değiştirilmedi.

Kaynaklar, kararlar, mesafeler ve canlı teslim sonucu `.github/automation-state/olta-avlak-kalite-daily-2026-11-14.json` içinde tutulur.

## Canlı teslim

PR #216 squash merge edildi. Quality check #43608814202 ve production #43611205090 başarılı. Canlı sürüm `3f1b40ea8441a6db72bbc1db366e79cace6e9658` ile birebir doğrulandı. İki yeni sayfa HTTP 200, self canonical, index/follow ve sitemap içinde; üç terfi HTTP 200, self canonical, noindex/follow ve sitemap dışında. Günlük teslim: 2 yeni sayfa, 3 gerçek D→C terfisi, 2/2 ortak indeks salımı. Bu teknik indekslenebilirlik doğrulamasıdır; Google indeksleme sonucu değildir.

Toplam veri: 1503 avlak; 336 teknik indekslenebilir, 75 C veya üstü HOLD, 1092 D/noindex. 75 HOLD kaydın tamamı indeks eşiğini geçmiş değildir. Bugün yükselen üç C kayıt erişim ve yerel uygunluk incelemesi bekler.
