# Genişletilmiş kalite standardı — 4 Ekim 2026

C, C+ değildir. Eski confidence enumu korunur; yeni incelemelerde `qualityGrade=C+` yalnız `confidence=C` ile birlikte kullanılır. D/C araştırma sayfaları dürüst belirsizlik açıklamasıyla `indexing=hold` yayımlanabilir. C+ için doğru su kimliği, rota-özel tür, güncel 6/2 ve ilgili yerel kısıtların kontrolü, genel kamusal kıyı yaklaşımı ve bilinen açık yasağın bulunmaması birlikte gerekir. Belirli mikro atış noktası veya her saat açık erişim kanıtlanmadıysa sayfa bunu açıklar ve kesin navigasyon vermez. C+ bir güçlü rota-özel kaynak ailesiyle mümkün olabilir; B ayrıca ikinci güçlü bağımsız aile ve özgün yerel içerik, A saha veya eşdeğer olağanüstü kanıt gerektirir.

**16 Ekim 2026 sonrası günlük program:** İstanbul merkezinden erişim sırasıyla araştırma yap; her gün en az iki birbirinden ayrı yeni İstanbul C+/B/A sayfası ve mevcut baseline C/C+/B/A HOLD/noindex sayfalarından en az bir kanıtlı salım hedefle. Yeni sayfa yeterli kanıtı varsa ilk yayında indekslenebilir olabilir. Mevcut C kaydı da rota/tür, güncel hukuk ve genel kamusal erişim çekirdek kanıtı tamamlandığında C olarak indekslenebilir; D noindex kalır. Sayısal hedef için kimlik, tür, yasak veya erişim iddiası uydurulmaz; eksik varsa nedenini kaydet. Eski 17 terfi hedefi, yeni sayfanın ilk gün HOLD zorunluluğu ve iki salım tavanı tarihsel 16 Ekim denetimine aittir; önceki politika `../.github/automation-state/archive/olta-quality-policy-through-2026-10-16.json` içinde korunur. Kalite terfisi ile yeni sayfa ve noindex→index salımı ayrı sayaçlardır.

Yeni büyüme baselineı temiz ve güncel `origin/main` üzerinden `node --import tsx scripts/create-growth-baseline.mjs YYYY-MM-DD` komutuyla günde bir kez oluşturulur. Dosya aynı gün yeniden yazılmaz. Her batch, sabah baselineına göre gerçek yeni slug ve mevcut HOLD→index farkını ayrı doğrular. Tarihsel günlük kalite baselineı ile 5 Ekim yanlış aday düzeltmesi kendi dondurulmuş denetiminde korunur.

Kaynak havuzu: 6/2 ana metin/değişiklik/ekler; BSGM, İl/İlçe Tarım, DSİ, SYGM, DKMP; TUCBS/USBS; e-Plan, kıyı kenar çizgisi, belediye CBS ve TKGM; DSİ işletme kayıtları; TAGEM ve araştırma enstitüleri; resmî biyoçeşitlilik; Ramsar/sulak alan planları; üniversite/YÖK Tez Merkezi/DergiPark/ÇED; kooperatif ve denetim kayıtları; MGM/Kıyı Emniyeti/Liman Başkanlıkları; yarışmalar; GBIF/FishBase/iNaturalist Research Grade; tarihli uydu ve saha gözlemleri. Her adayda bu kaynakların tümü aranmaz. Su kimliği için DSİ/TUCBS, koruma ihtimali için DKMP, erişim belirsizliği için e-Plan/belediye/TKGM, tür için resmî veya akademik kayıt gibi iddiaya uygun kaynak seçilir. Ulaşılamayan veya incelenmeyen kaynak incelenmiş gibi işaretlenmez.

URL sayısı bağımsızlık değildir. Aynı olayı aktaran valilik, belediye, haber ajansı veya enstitü tek olay ailesidir. Resmî rapordaki aktarılan İl Tarım tablosu ikinci bağımsız tür ailesi sayılmaz. Mevzuat, tür kanıtına ikinci bağımsız aile eklemez. Kaynağın asıl veri üreticisi ve örnekleme tarihi yazılır; taranma/güncellenme tarihi saha gözlemi yerine konmaz.

İkinci testten kalıcı kurallar:

- Yayıncı belediyenin adı etkinlik yeri değildir: Esenköy haberindeki Kapaklı olayı Esenköy tür kanıtı olamaz.
- Bir ilin göl listesi + toplu balık listesi her göle dağıtılamaz. Bolu Gölcük, Isparta/Ödemiş Gölcükten ayrılır.
- Nehir kanıtı istasyon/kesimle sınırlıdır: Aşağı Sakarya Bilecik hattına; Küçük Melen Büyük Melen/Kocaaliye taşınmaz.
- Açık deniz trolü veya hal satışının türü kıyı oltası kaydı değildir. Av aracı ve derinlik korunur.
- Denetimde yasadışı yakalanmış balık tür varlığı kanıtıdır; izin kanıtı değildir. Eski tebliğle verilen cezanın tarihi güncel av takvimi yapılmaz.
- Stocking yalnız olasılıktır. Kiralama, ticari istihsal, kamu mülkiyeti, hidroloji ve sıcaklık serbest amatör av anlamına gelmez.
- Koruma planında tasarlanan olta cebi, faaliyete geçmiş giriş değildir. Süresi biten kira, otomatik serbest erişim değildir.
- Önce resmî tesis kimliği: Çayırköy selkapanı ile Bıçkıdere aynı sanılamaz. Yanlış il/legacy Hasanlar yükseltilmez; aktif listeden kaldırılır ve tek adım 301 yapılır.
- Bir ana eksik karar önceliğini gösterir; başka eksikler varsa ayrı yazılır. Tek eksik varmış izlenimi yaratılmaz.

`expanded-quality-policy.mjs` yeni salımlarda eksik değerlendirmeyi reddeder. Bu, mevcut tüm eski C sayfalarının geriye dönük C+ olarak onaylandığı anlamına gelmez; eski kayıtlar ayrıca denetlenmelidir. Kaynak doğruluğu ve bağımsızlığı editoryal sorumluluktur; boolean alanlar tek başına kanıt üretmez.
