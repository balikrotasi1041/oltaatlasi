# Genişletilmiş kalite standardı — 4 Ekim 2026

Eski confidence alanı korunur. Yeni incelemelerde `qualityGrade=C+` ile `confidence=C` birlikte kullanılır. C+ için doğru su ve avlak kimliği, rota-özel tür kanıtı, güncel 6/2 ve ilgili yerel kısıtlar, genel kamusal kıyı yaklaşımı, anlamlı risk bilgisi ve bir güçlü rota-özel kaynak ailesi gerekir. Belirli mikro atış noktası veya her saat açık erişim doğrulanmadığında sayfa bunu belirtir ve kesin atış navigasyonu vermez. B için ikinci güçlü bağımsız kaynak ailesi ve özgün yerel içerik, A için ayrıca saha veya eşdeğer olağanüstü kanıt gerekir.

**Güncel günlük program.** İstanbul merkezinden kuş uçuşu uzaklığa göre araştırmayı genişlet. Günlük teslim en az iki yeni C+ veya üstü avlak sayfasıdır. Kanıtı eksik adayı araştırma kuyruğuna yaz ve aynı koşuda başka bir adayı incele. Mevcut kayıtlarda üç gerçek kalite terfisi hedefle. Terfi için yeni kanıt gerekir. Yeni sayfa, gerçek terfi ve teknik indeks salımını ayrı say. İndeks için önce iki yeni sayfaya yer ayır. Ortak günlük üst sınır çarşamba ve perşembe 4, diğer günler 2'dir. Kota önceden dolduysa doğrulanmış yeni C+ veya üstü sayfa HOLD/noindex yayımlanabilir. Mevcut C kaydı, kendi çekirdek yayın kanıtını sağladığında uygun kotada indekslenebilir. D noindex kalır. 16 Ekim kuralları tarihsel denetimlerde ve arşivde korunur.

Günlük büyüme baselineı temiz ve güncel `origin/main` üzerinden `node --import tsx scripts/create-growth-baseline.mjs YYYY-MM-DD` komutuyla günde bir kez oluşturulur. Dosya aynı gün yeniden yazılmaz. Her PR, baseline'a göre yeni slug, mevcut kalite sınıfı artışı ve ilk indeks açılışı farklarını doğrular. Canlı yayın ve teslim sayaçları exact main SHA doğrulamasından sonra kaydedilir. 5 Ekim yanlış aday düzeltmesi tarihsel denetimde korunur.

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

## C araştırma düzeyi ile indeks salımının ayrımı

Mevcut D kaydında su kimliği ve suya özgü tür kanıtı doğrulandığında, genel mevzuat incelenmiş olsa da kamusal erişim veya yerel uygunluk eksik kalabilir. Böyle bir gerçek kanıt artışı C/HOLD olarak kaydedilir; açık eksikler yazılır ve noindex korunur. Bu kayıt C+ ya da indeks salımına hazır sayılmaz. Toplu kayıt denetimi bu dar durumda erişimi doğrulanmış göstermeyi, ilgisiz Google Maps bağlantısı veya konaklama metni eklemeyi zorunlu tutmaz. Kaynaklı tür, güçlü kimlik/tür profili, açık risk kaydı ve HOLD koşulları birlikte test edilir; indeks salımının çekirdek kontrolleri aynen sürer.
