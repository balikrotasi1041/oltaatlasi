# Balık türü sayfası içerik standardı

Her tür dosyası şu sorulara açık başlıklarla yanıt verir: tür/ortak ad kimliği ve tanımı; yaşadığı su ve ilişkili kaynaklı avlaklar; doğal beslenme ile olta yemi arasındaki fark; dip/şamandıra/sahte yem yöntemleri; yemi alma biçimi; diş ve iğne çıkarma güvenliği; takım üzerindeki yük; avcıya yönelik doğrulanmış tehlike; besin öğeleri; kılçık; yemek/hazırlama seçenekleri. Mevsim ve güncel amatör avcılık kuralları ayrıca görünür kalır.

## Kanıt kuralları

- Ortak ad birden fazla türü kapsıyorsa tek bilimsel tür, diş yapısı veya besin tablosu bütün gruba uygulanmaz. Avlaklardaki ad eşleşmesi biyolojik tür doğrulaması veya günlük av garantisi değildir.
- Doğal besin, oltaya takılan yem ve balığın yemi alma hareketi ayrı alanlardır. “Emerek/ısırarak” ikiliği kaynakla doğrulanamıyorsa kesin sınıflama yazılmaz.
- Diş ve takım riski ayrı değerlendirilir. Diş, diken, kanca, iri balığın gücü ve zemine sürtünme birbirine karıştırılmaz. İnsana saldırı kaydı bulunmaması, risk yoktur iddiası değildir.
- Kılçık için “az/çok” derecesi, tür ve boyu destekleyen kaynak olmadan verilmez. Bütün balığın ayıklanması gerektiği söylenir. Yemek listesi bir tarif veya güvenli tüketim garantisi değil, mutfak başlangıç önerisidir.
- Vitamin, omega-3, protein miktarı ve kalori ancak bilimsel tür, yenilebilir kısım, çiğ/pişmiş hâli ve veri kullanım koşulları eşleşmiş bir gıda kompozisyon kaynağıyla sayısal yayımlanır. TürKomp verisini kullanım izni netleşmeden sitede kopyalamak yerine ilgili veri tabanına bağlantı verilir. Veri yoksa alan dürüstçe “doğrulanmadı” der.
- Bilimsel/tür kaynakları doğal yaşam ve morfoloji içindir; pratik yem, takım ve mutfak önerisi kaynak metninin birebir talimatı olarak gösterilmez. Kaynak başlığı ve kapsam notu sayfada bulunur. Avlak kanıtı rota dosyasında; tür biyolojisi kanıtı tür dosyasında tutulur.
- Yeni tür sayfası, `src/data/balik-tur-detaylari.ts` içinde bütün zorunlu alanları ve çalışan bir tür kaynağını almadan yayımlanmaz. `scripts/validate-fish-species-standard.mjs` kapsamı denetler.

## Mevcut dosyalara uygulama

25 sayfanın tamamında ortak yapı vardır. `Kefal`, `İstavrit` ve `Alabalık` gibi ortak adlarda kapsam uyarısı bulunur. TürKomp'ta ürüne eşleşmiş besin verisi sayfa içinde sayısal kopyalanmadı; bu alanlar doğrulanmış lisans ve tür eşleşmesi geldiğinde geliştirilecektir. Mevcut avlak bağlantılarında yalnızca ad/boşluk normalizasyonu ve doğrulanmış eş adlar kullanılır; farklı biyolojik türler sırf ad benzerliğiyle birleştirilmez.
