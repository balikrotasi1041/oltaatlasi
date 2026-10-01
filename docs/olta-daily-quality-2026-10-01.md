# 1 Ekim 2026 günlük kalite ve kontrollü büyüme raporu

Başlangıç main: `495e26f315d7f95c1f0cdb8369066bf29e1536aa`.

## Sonuç

- Gerçek kalite yükseltmesi: **1/17**. Hedef eksik olduğu için çalışma tamamlanmış sayılmaz.
- İndekse salım: **0/3 operasyonel, 0/5 sert tavan**.
- Hold: **1** — `ankara-500km-balikesir-karacepis-goleti`.
- Yeni Ege B+: **0/1**; yeni Marmara B+: **0/1**.
- Kota için confidence artırılmadı; önceki Sevişler yükseltmesi ve 29 Eylül yedi yeni rota tekrar sayılmadı.

## Karaçepiş Göleti

Karaçepiş Göleti D→C yükseltildi ve `indexing=hold` bırakıldı. İl/ilçe/su kimliği ile sazan olasılığı [Balıkesir İl Tarımın rota-özel balıklandırma kaydına](https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=115), amatör kullanım ve belediye yönetim bağlamı [Balıkesir Büyükşehir Belediyesinin yarışma/proje kaydına](https://balikesir.bel.tr/haberler/akindan-amator-balikcilara-mujde-karacepis-goleti-ozel-avlak-sahasi-oluyor) dayanıyor. Genel konum OSM ile çaprazlandı; `locationPrecision=Genel bölge` korundu. Güncel mikro giriş, işletme ve saha güvenliği doğrulanmadığı için B/index yapılmadı. Mevzuat kontrolünde [16 Eylül 2026 tarihli 6/2 değişikliği](https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf) ana tebliğ ve yerel kararlarla birlikte ele alındı.

## Yayımlanmayan adaylar

| Bölge / aday | Karar |
|---|---|
| Ege / Aliağa Ağapark | Belediye etkinliği var; şartnamedeki tür listesi gerçekleşmiş rota-özel tür kaydı değil. |
| Ege / Gevenlik Barajı | DSİ kimliği, avcılık levhası ve sazan balıklandırması var; bağımsız güvenli kamusal kıyı yaklaşımı eksik. |
| Ege / Topçam | Bilimsel tür kaydı var; kamusal erişim ile kooperatif/işletme sınırı net değil. |
| Marmara / Kandıra Uzunkum | Yarışma tür kaydı var; hassas kumul/tabiat parkı sınırı dışında güvenli yaklaşım doğrulanmadı. |
| Marmara / İpsala Karaağaç | DSİ kimliği ve resmî sazan balıklandırması var; güncel kamusal kıyı girişi bağımsız doğrulanmadı. |
| Marmara / Altınyazı | Bilimsel tür ve ağır metal çalışması var; güncel erişim/güvenli kullanım yetersiz. |
| Kureyşler | Resmî balıklandırma var; kamusal erişim ve arkeolojik sınır yetersiz. |

Kula ve Osmanlı mevcut B kayıtlar; Sevişler ve Akköprü mevcut slug'lardır. Duplicate üretilmedi. Gördes, Sazlıdere ve Durusu Park koruma/işletme erişim belirsizliği; Kozağaç, Akçadere, Bağyolu ve Güneşli eksik bağımsız kanıt nedeniyle yayımlanmadı. Yeni slug olmadığı için SVG oluşturulmadı.

## Bakım ve doğrulama

`/iletisim/?...` üretiminin iç kaynakları temiz canonical bağlantıya çevrildi; bağlam yalnız istemci tarafı fragment ile taşınıyor. Form GET ile query URL üretemiyor. Canonical, slug ve toplu title şablonları değiştirilmedi. Mobil rota ilk ekranına su, tür, erişim, mevzuat ve harita karar özeti eklendi.

Yerel kapılar geçti: `npm ci`, `validate:data`, `validate:research`, `validate:index-policy`, güvenlik, duplicate, maintenance, `npm run build` ve `npm run deploy:dry`. Son veri özeti: 1.448 rota; A/B/C/D = 0/64/232/1152; 295 C+ index, 1 C+ hold, 1.152 D noindex; duplicate blokajı 0; build 1.959 sayfa.

PR, squash merge ve exact production SHA doğrulaması bu raporun sonraki yayın adımlarıdır; doğrulanmadan tamamlandı denmez.
