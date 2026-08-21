# SEO stabilizasyon kohortu · 21 Ağustos 2026

Bu kohortun amacı yeni URL üretimini yavaşlatıp mevcut arama görünürlüğünü konum/yol tarifi niyetinde daha iyi kullanıcı cevabına dönüştürmektir. Bugün yeni mera yayımlanmadı; çalışma bütçesi mevcut sayfalara ayrıldı.

## İlk 8 Search Console fırsatı

Son bilinen 20 Ağustos exportu (veri 18 Ağustos'a kadar) kullanıldı. Canlı Search Console API erişimi olmadığı için günlük seçimde bu export fallback olarak kabul edildi.

| Rota | Sorgu/niyet | Gösterim | Tıklama | CTR | Ort. sıra |
|---|---|---:|---:|---:|---:|
| `sarimsakli-baraji-genel-amator-kiyi` | sarımsaklı barajı yol tarifi | 544 | 1 | %0,18 | 8,67 |
| `yamula-baraji-resmi-amator-balikcilik-alani` | yamula barajı yol tarifi | 126 | 0 | %0 | 7,22 |
| `gumusoren-baraji-genel-amator-kiyi` | Gümüşören Barajı / konum-yol tarifi niyeti | 56 | 0 | %0 | 5,39 |
| `seyhli-goleti-genel-amator-kiyi` | şeyhli göleti yol tarifi | 10 | 0 | %0 | 5,40 |
| `ulusal-adana-nergizlik-baraj-golu` | nergizlik barajı yol tarifi | 14 | 0 | %0 | 6,93 |
| `ulusal-malatya-kapikaya-baraj-golu-malatya` | kapıkaya barajı yol tarifi | 10 | 0 | %0 | 5,90 |
| `ulusal-adana-kozan-baraj-golu` | Kozan Baraj Gölü / konum niyeti | 75 | 0 | %0 | 6,29 |
| `sariyar-baraji-softabogazi-amator-alani` | sarıyar barajı yol tarifi | 19 | 0 | %0 | 8,68 |

Sarımsaklı, Yamula, Gümüşören ve Şeyhli için mevcut route-specific SEO override'ları ve ilk ekran harita/konum yapısı zaten sorgu niyetine cevap verdiği için yeniden yazılmadı. Sarıyar kaydında resmî amatör balıkçılık alanı koordinatları zaten kaynaklı olduğundan URL/canonical veya mikro rota mantığına dokunulmadı.

Nergizlik, Kozan ve Malatya Kapıkaya için kullanıcıya gösterilen konum katmanı güçlendirildi: resmî su/işletme kimliği ile açık harita su geometrisi çaprazlandı; koordinatlar `Genel bölge` olarak tutuldu ve doğrudan directions bağlantısı yerine nokta/arama yaklaşımı korundu.

## 9 Güven D kalite hedefi

1. `ulusal-erzurum-demirdoven-baraj-golu`
2. `ulusal-erzurum-kuzgun-baraj-golu`
3. `ulusal-erzurum-kapikaya-baraj-golu-erzurum`
4. `ulusal-erzurum-koycegiz-baraj-golu-erzurum`
5. `ulusal-erzurum-olur-baraj-golu`
6. `ulusal-hakkari-zap-suyu-hakkari-hatti`
7. `ulusal-bayburt-lori-deresi`
8. `ulusal-sivas-delice-baraj-golu-sivas`
9. `ulusal-bolu-caykoy-baraj-golu-bolu`

Resmî Erzurum Çevre Durum Raporundaki DSİ 8. Bölge su varlığı listesi, Demirdöven'in baraj; Kapıkaya ve Köyceğiz'in ise gölet olduğunu doğruladı. Demirdöven'in rota kimliği kaynağı güçlendirildi. Kapıkaya ve Köyceğiz kayıtlarındaki yanlış `baraj gölü` sınıflandırması `gölet` olarak düzeltildi. Bu üç kayıtta da mikro kıyı erişimi ve güncel amatör kullanım kanıtı yeterli olmadığı için Güven D korundu.

Kuzgun, Olur, Zap Suyu, Lori Deresi, Delice ve Çayköy için bu turda güven seviyesini veya kullanıcıya dönük iddiaları değiştirecek kadar güçlü yeni rota-özel erişim/hukuk kanıtı bulunmadı. Kota doldurmak için metin veya confidence şişirilmedi.

## Kaynak notları

- Kayseri İl Tarım ve Orman: Yamula'da 2022'de 1,5 milyon sazan balıklandırması; Yamula'da sazan/sudak/gümüş balığı ve sportif olta etkinliği kayıtları.
- Kayseri İl Tarım ve Orman: Gümüşören'de 2018 turna yakalama yarışması ve resmî gözlemci/denetçi katılımı.
- Ankara İl Tarım ve Orman: Sarıyar Hasan Polatkan Barajı için koordinatla tanımlanmış amatör balıkçılık alanları.
- Tarım ve Orman Bakanlığı Seyhan Havzası planı: Nergizlik Barajı/Karaisalı Sulaması işletmedeki DSİ tesisi.
- Tarım ve Orman Bakanlığı hassas su kütleleri listesi: Kozan Barajı resmî Ceyhan havzası su kütlesi.
- Malatya İl Tarım ve Orman 2024 brifingi: Kapıkaya Turgut Özal Barajı su ürünleri üretim kullanımına dahil.
- Erzurum Çevre Durum Raporu / DSİ 8. Bölge: Demirdöven Barajı, Kapıkaya Göleti ve Köyceğiz Göleti tesis sınıfları.

## Ölçüm

Bu 8 Search Console fırsat sayfası 21 Ağustos kohortu olarak saklanır. İlk anlamlı kontrol 28 Ağustos'ta 7 günlük dönem / önceki 7 günlük dönem şeklinde yapılmalıdır. Ölçülecek değerler: gösterim, tıklama, CTR, ortalama pozisyon; ayrıca `yol tarifi`, `nerede`, `konum`, `harita` sorgu kümesi ayrı tutulmalıdır. 24 saatlik dalgalanmaya göre toplu title, slug veya canonical değişikliği yapılmamalıdır.
