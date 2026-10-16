# Olta Atlası günlük kalite çalışması — 16 Ekim 2026

Bu dosya **yayın öncesi çalışma kaydıdır**. Günlük baseline, doğrulayıcı düzeltmesi ana dala alındıktan sonra gerçek `main` SHA'sı `df7572619341e4d6768b2c4cc9da9ce4b3187db7` ve 1458 rota üzerinden oluşturuldu. Üretim yayını ve canlı sayfa doğrulaması tamamlanmadan aşağıdaki iki salım gerçekleşmiş sayılmaz.

| Sayaç | Taslak |
|---|---:|
| Başlangıç D/C uygun aday incelemesi | 0 |
| Gerçek confidence terfisi | 0 / 17 |
| Başlangıç C+/HOLD bakım incelemesi | 2 |
| Bu güne ait yeni rota | 0 |
| Başlangıç HOLD → index salımı | 2 / 2 |
| Tek seferlik 20 yeni indekslenebilir rota hedefi | Yayın doğrulanırsa 4 / 20 |

## İki mevcut C+/HOLD kaydı

- `istanbul-kefelikoy-sahil-parki`: [İBB'nin 2017 olta rehberi](https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf), Kefeli Köy genelinde istavrit, mezgit ve sardalya kaydeder; bu tarihsel kayıt parkın belirli kıyı cebinde günlük av garantisi değildir. [Sarıyer Belediyesi'nin 2024 Yaşam Rehberi](https://sariyer.bel.tr/ckuploads/ckfiles/SARIYER%20YASAM%20REHBERI-09.05.2024.pdf?time=1715233947652) PDF s. 138, Kefeliköy altında Meral Okay Senaristler Parkı'nı listeler; PDF'nin sunucu değiştirilme tarihi 9 Mayıs 2024'tür. [Belediyenin park duyurusu](https://sariyer.bel.tr/haberler/sariyerin-parklari-sizleri-bekliyor) parkı açıkça “Sahil Parkı” olarak adlandırır. Bunlar parkın genel kamusal niteliğini destekler, özel yalı/işletme sınırlarında veya levhalı yasaklı bir mikro noktada izin vermez.
- `istanbul-uskudar-semsipasa-cami-kiyisi`: Aynı [İBB 2017 rehberi](https://tarim.ibb.istanbul/img/1015194102017__5808679461a.pdf) Şemsi Paşa Camii kıyısını olta yeri olarak ayrıca adlandırır ve yazın sardalya/istavrit, ekimden sonra kefal belirtir. [Üsküdar Belediyesi](https://www.uskudar.bel.tr/tr/main/pages/semsi-pasa-camii/40) caminin kıyı konumunu doğrular. [İBB'nin 14 Eylül 2026 duyurusu](https://istanbulseninhaber.ibb.istanbul/haber-detay/istanbulun-kiyilari-yenileniyor) komşu Salacak kıyı düzenlemesinin tamamlandığını söyler; Şemsi Paşa'daki belirli atış cebine izin kanıtı değildir. Cami avlusu/hazire, iskele işletmesi ve yoğun yaya geçişi av alanı sayılmaz.

Her iki rota için [6/2 ana tebliği](https://www.lexpera.com.tr/resmi-gazete/metin/6-2-numarali-amator-amacli-su-urunleri-avciliginin-duzenlenmesi-hakkinda-teblig-no-2024-21-32629) ve [16 Eylül 2026 tarihli 2026/26 değişikliği](https://rize.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/20260916-5.pdf) birlikte incelendi. Şamandıralı yüzme alanında 1 Nisan–15 Kasım yasağı, Boğaz trafik ayırım şeridi yasağı, istavritin 12 cm asgari boyu ve genel boy/adet kuralları uygulanır. Yeni bir rota özelinde kamusal kıyıyı bütünüyle kapatan resmî karar saptanmadı. Belirli kıyı cebi, güncel tabela, işletme sınırı, rıhtım güvenliği ve güvenli atış açıklığı sahada doğrulanmış değildir; yasak levhası veya güvenli alan yoksa olta atılmaz. 15–16 Ekim yağışı geçici saha güvenliği uyarısıdır; kalıcı indeks yasağı olarak değerlendirilmez.

Bu iki kayıt başlangıçta C+/HOLD olduğu için D/C aday veya gerçek confidence terfisi olarak sayılmamıştır. 5 Ekim yanlış aday düzeltmesi korunur. Günlük iki salım tavanı dolduğundan, başka kayıt bu gün indeks salımına eklenmez. PR, test, squash merge, production deploy ve canlı `main` SHA doğrulaması tamamlandığında sayaçlar kesinleştirilmelidir.
