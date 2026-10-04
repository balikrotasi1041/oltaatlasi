# İkinci 25 mevcut kayıt stres testi — 4 Ekim 2026

Başlangıç main: `574aebb81d33f2c9e9f7d3e87c58f20ecb71c0f6`. Kullanıcının sabit listesi kullanıldı; önceki 25 tekrar edilmedi ve ikame aday eklenmedi. Örneklem Marmara/Batı Karadenizle sınırlıdır; ulusal başarı oranı diye yorumlanamaz.

Sonuç: **12 C/HOLD, 11 D/HOLD, 2 adet 301; A/B/C+ = 0/0/0.** 23 seçilmiş aktif sayfa güncellendi, 2 seçilmiş legacy kayıt kaldırıldı; ayrıca Dodurga kanıtı mevcut Darıdere kanoniğine aktarıldı. Böylece 24 aktif sayfanın içeriği değişti, toplam 26 mevcut slug etkilendi. Darıdere 26. aday değildir. Gerçek confidence yükseltmesi 12 seçilmiş + 1 kanonik = 13; günlük 17 hedefi tamamlanmadı.

**İndeks salımı 0/2.** 13 yükseltilmiş aktif kayıt hold kuyruğundadır. C+/B/A kalitesine ulaşıp yalnız günlük kota nedeniyle bekleyen kayıt yoktur. Diğer 11 D sayfa da hold kalır. C+, hukuk ve erişim eşikleri çözülmeden verilmedi.

İşe yarama ölçüleri: test adaylarında kanıtlı confidence artışı **12/25 = %48**; indeks eşiğine ulaşma **0/25 = %0**; duplicate yakalama **2/25 = %8**. Bunlar doğruluk/recall ölçümü değildir: saha doğrulaması ve dış altın standart yoktur. Her aday için somut karar ve eksik kanıt kaydedilmiştir; bunu %100 doğruluk diye adlandırmıyoruz.

| # | Mevcut slug | Önce → sonra | Ana kanıt aileleri | Öncelikli eksik / karar |
|---|---|---|---|---|
| 1 | `ulusal-bilecik-borcak-baraj-golu` | D → C / HOLD | DSİ, İl Tarım | Güncel izinli ve güvenli genel kıyı erişimi |
| 2 | `ulusal-bilecik-dodurga-baraj-golu-bilecik` | D → 301 | DSİ, İl Tarım | Yükseltme yerine Darıdere/Dodurga konsolidasyonu |
| 3 | `ulusal-bilecik-gunyurdu-baraj-golu` | D → C / HOLD | DSİ, Kültür ve Turizm | Güncel yer yasağı ve işletme erişim koşullarının rota düzeyinde teyidi |
| 4 | `ulusal-bilecik-sakarya-nehri-bilecik-hatti` | D → D / HOLD | Üniversite, DSİ | Bilecik kesimine ait istasyonlu tür kaydı |
| 5 | `ulusal-bolu-hasanlar-baraj-golu-bolu` | D → 301 | Kültür ve Turizm, Üniversite / ulusal biyolojik çeşitlilik saha projesi | Yükseltme uygulanmaz; tek kanonik rota |
| 6 | `ulusal-bolu-golcuk-golu-bolu` | D → D / HOLD | DKMP, Valilik / turizm derlemesi | Bolu Gölcüke özgü birincil tür envanteri |
| 7 | `ulusal-bursa-akalan-baraj-golu` | D → D / HOLD | DSİ | Akalan/Orhaneliye özgü balıklandırma veya örnekleme |
| 8 | `ulusal-bursa-babasultan-baraj-golu` | D → C / HOLD | DSİ, İl Tarım | İl Tarımın güncel amatör kıyı alanı ve erişim kaydı |
| 9 | `ulusal-bursa-bogazkoy-baraj-golu` | D → C / HOLD | DSİ, İl Tarım denetimi | İzinli ve güvenli genel kıyı yaklaşımı |
| 10 | `ulusal-bursa-burcun-baraj-golu` | D → D / HOLD | DSİ | Burcun su varlığına özgü tür örneklemesi |
| 11 | `ulusal-bursa-buyukorhan-baraj-golu` | D → C / HOLD | DSİ, İl Tarım | 2026 kiralama durumu ve amatöre ayrılmış kıyı alanı |
| 12 | `ulusal-duzce-kucuk-melen-cayi` | D → C / HOLD | Üniversite / ulusal biyolojik çeşitlilik saha projesi, Çevre envanteri | Örnekleme kesimiyle eşleşen güvenli kamusal kıyı yaklaşımı |
| 13 | `ulusal-duzce-akcakoca-sahili` | D → D / HOLD | GSB, Üniversite, Mülki idare / güvenlik | Kıyıya özgü tür ve konum içeren gözlem/yarışma tutanağı |
| 14 | `ulusal-kocaeli-bayraktar-baraj-golu` | D → C / HOLD | DSİ, İl Tarım | Güvenli ve izinli genel kıyı erişimi |
| 15 | `ulusal-kocaeli-bickidere-baraj-golu` | D → D / HOLD | DSİ, Çevre envanteri / DSİ girdisi | Bıçkıdere adına özgü balıklandırma/örnekleme |
| 16 | `ulusal-kocaeli-kirazdere-yuvacik-baraj-golu` | D → D / HOLD | Su idaresi / havza koruma, DSİ | İSU tarafından açılmış olta cebinin güncel konum ve izin kaydı |
| 17 | `ulusal-kocaeli-kurtdere-baraj-golu` | D → D / HOLD | DSİ, Çevre envanteri / DSİ girdisi | Kurtdere adına eşleşen doğrudan tür kaydı |
| 18 | `ulusal-kocaeli-sahinler-baraj-golu` | D → C / HOLD | DSİ, İl Tarım | Güvenli ve izinli genel kıyı erişimi |
| 19 | `ulusal-sakarya-sakarya-nehri-sakarya-hatti` | D → C / HOLD | Üniversite / coğrafya, Üniversite | Tür kaydıyla örtüşen kamusal ve güvenli kıyı kesimi |
| 20 | `ulusal-sakarya-cark-deresi` | D → C / HOLD | Üniversite / coğrafya, Çevresel değerlendirme | Yazlık kesiminde güncel güvenli ve izinli kıyı alanı |
| 21 | `ulusal-sakarya-melen-cayi-sakarya-hatti` | D → D / HOLD | Üniversite / coğrafya, İl Tarım denetimi | Sakarya/Kocaali Melen kesimine özgü tür kaydı |
| 22 | `ulusal-tekirdag-bayramsah-baraj-golu` | D → C / HOLD | Resmî risk planı, Çevre planı / İl Tarım girdisi, İl Tarım | Projeli yetiştiricilik statüsünün güncel resmî açıklaması |
| 23 | `ulusal-tekirdag-biyikali-baraj-golu` | D → C / HOLD | Resmî risk planı, Çevre planı / İl Tarım girdisi | Güncel kira/işletme durumu ve izinli genel kıyı erişimi |
| 24 | `ulusal-tekirdag-turkmenli-baraj-golu` | D → D / HOLD | Resmî risk planı | TESKİ içme suyu koruma sınırı ve izinli kıyı kararı |
| 25 | `ulusal-yalova-esenkoy-sahili` | D → D / HOLD | Belediye | Esenköy kıyısına özgü tür gözlemi |

## Kanıt ve sınırlar

Her adayın kaynak URLleri, gerekçesi ve diğer eksikleri [makine okunur raporda](quality-stress-2026-10-04.json) bulunur. Bir ana eksik sütunu, diğer eksiklerin olmadığı anlamına gelmez. Tüm kayıtlar saha teyitsizdir. Ana 6/2 metin, 2025/12 değişikliğinin resmî metni ve 2026/26 PDF incelendi; ana metin aynasının Ek-4/Ek-5 tam paketini içermemesi nedeniyle tüm su-özel hukuki eşleşmeler tamamlanmış sayılmadı. Bu sınırlama indeks kararına yansıtıldı.

Kaynak katmanları için fiilen elde edilen sonuçlar:

- DSİ/İl Tarım: tesis, sazan salımı, ticari stok/ihale ve yaptırım kayıtları. Valilikte yeniden yayımlanan aynı salım ikinci bağımsız aile sayılmadı.
- DKMP/EkoTaban: Bolu Gölcük park ve olta altyapısı okundu. Aynı park metninin iki URLsi iki aile değildir. Nuh’un Gemisi il toplamları rota tür listesi değildir; Düzce ulusal biyolojik çeşitlilik projesinden yayımlanmış istasyon tablosu kullanıldı.
- TAGEM/SAREM: Bilecik fauna projesi ve 2017 yayın kaydı bulundu; istasyon tam verisine erişilemeyen başlıklar tür kanıtına çevrilmedi. AKSAM üretim haberleri alıcı su adı eşleşmeden kullanılmadı. SUMAE havza/kirlilik kayıtları kıyı türü sayılmadı. Elazığ kurumu için bu sabit adaylara ait kullanılabilir doğrudan belge elde edilmedi.
- Üniversite/DergiPark/ÇED: Küçük Melen istasyon haritası + tür tablosu, Aşağı Sakarya av çalışması, Çark proje alanı tür listesi ve resmî çevre raporları. İstasyon kapsamı korunur; korunan/endemiğe hassas türler av hedefi olarak eklenmedi.
- Belediye/erişim: Günyurdu, Gölcük, Bıyıkali ve Esenköy kullanım bağlamları. TKGM parsel mülkiyetinden geçiş hakkı türetilmedi; mikro parsel/irtifak doğrulaması tamamlanmadı.
- Kooperatif/hal: Akçakoca fiyat/satış çalışmasının yakalama yeri olmadığı görüldü. İstihsal ihaleleri tür için kullanıldı; amatör kullanım için değil. SÜRKOOP genel metinlerinden rota izni çıkarılmadı.
- Denetim/güvenlik: Boğazköy yayın yaptırımı, Kocaali–Akçakoca Melen denetimi ve Akçakoca boğulma önleme kararı. SHOD/MGM/Kıyı Emniyeti verisi tarihli sefer güvenliği içindir; tür veya sürekli açık kıyı kanıtı yapılmadı. Canlı deniz hava/saha uygunluğu teyidi yapılmış değildir.
- OBF/ASOF/TÜDAV, GBIF/iNaturalist ve sosyal aramalarından bu kararları yükselten yeni rota-özel doğrulanmış kıyı kaydı elde edilmedi. FishBase dağılımı yerel gözlem değildir. Bu ifade bu sistemlerin bütün verilerinin tarandığı iddiası değildir.
- Ramsar/sulak alan ve koruma belgelerinde komşu Efteni/Uluabat/Sapanca kanıtları yeni adaylara aktarılmadı. Güncel koruma sınırı ve suya özgü yasak eşleşmesi çözülemeyen kayıt hold kaldı.

Bu test tüm kurumsal arşivlerin eksiksiz taraması değildir. Ulaşılamayan enstitü tabloları, güncel kira kararları, 6/2 ekleri ve son kıyı erişimleri açık araştırma borcudur. Kalite standardı bu eksikleri puanla örtmek yerine yayını durdurmuştur.

## Teknik doğrulama

`npm ci`, `validate:data` (rota/duplicate/maintenance/confidence/redirect/admin/security/guides/stress), `validate:research`, `validate:index-policy`, `build` ve `deploy:dry` çalıştırıldı. Son PR/merge/production sonucu ayrı yayın kanıtı olarak kaydedilecektir; bu dosya production gerçekleşmeden başarı iddia etmez.

Kalıcı kurallar ve kısıtlar [genişletilmiş standartta](expanded-quality-standard.md).
