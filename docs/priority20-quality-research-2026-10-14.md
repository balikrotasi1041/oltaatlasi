# 14 Ekim 2026: en olası 20 mevcut avlak yükseltme denemesi

Başlangıç: 14 Ekim araştırması sırasında main HEAD üzerindeki 12 Ekim baseline ve mevcut `src/data/meralar-tumu.ts` bileşimi. Yeni rota yaratılmadı. Önceden C+/B/A kaliteye yükseltilmiş hiçbir kayıt hedef seçilmedi. Eski 6 C+/HOLD kayıt bu 20 adayın **dışındadır**.

## Ölçülebilir sonuç

- Seçilen mevcut kayıt: **20** (17 C, 3 D).
- Resmî kaynakla genişletilen kayıt: **20**; kaynak eklenmesi yükseltme demek değildir.
- **Gerçek kalite terfisi: 1** (`ulusal-eskisehir-musaozu-baraj-golu`: C → C+). Önceden C olan rota C+ doğrulama eşiğini geçti; **mevcut indeksleme durumu korunmuştur**.
- Kanıt bakımına rağmen aynı sınıfta kalan: **19**. Zorla terfi yok, 17 terfi hedefi gerçekleşmiş sayılmıyor.
- Yeni rota: **0**; indekse salım: **0**; 301: **0**.
- Bu dosya kaynak değerlendirmesi ve önerilen patch kaydıdır; CI, merge veya production onayı değildir.

## Sıralı adaylar ve karşılanmayan eşikler

| Öncelik | Depodaki mevcut slug | Sınıf | Ek kanıt | Eksik |
|---:|---|---|---|---|
| 1 | `ulusal-eskisehir-musaozu-baraj-golu` | C → **C+** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [musaPark](https://ekotaban.tarimorman.gov.tr/alan/376), [musaTournament](https://eskisehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=c32a3e27-a550-4938-81fb-8261f1786260&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=429), [musaYayin](https://eskisehir.tarimorman.gov.tr/Haber/1731/Eskisehirde-Su-Kaynaklarina-2-500-Yayin-Baligi-Yavrusu) | İşletmenin güncel kullanım sınırı ve levhası yerinde kontrol edilmeli; geçişte HOLD korunur. |
| 2 | `ankara-500km-eskisehir-kanlipinar-goleti` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Tabiat parkı kullanım bölgesi ve güncel kıyı erişimi teyitsiz. |
| 3 | `ankara-500km-eskisehir-kaymaz-goleti` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Güncel kamusal kıyı, işletme sınırı ve park yeri teyitsiz. |
| 4 | `ankara-500km-eskisehir-ozdenk-goleti` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Güncel güvenli amatör kıyı ve sulama statüsü teyitsiz. |
| 5 | `keskin-75-yil-baraj-golu` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Keskin Göleti ile barajın ad/konum eşleşmesi ve güvenli kıyı doğrulanmalı. |
| 6 | `oglakci-goleti-sivrihisar` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Güncel kamusal kıyı ve suya özgü yasak teyitsiz. |
| 7 | `ankara-500km-eskisehir-kuzfindik-baraj-golu` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Aşağı/Yukarı Kuzfındık ad eşleşmesi ve açık kıyı teyitsiz. |
| 8 | `eskisehir-gokpinar-baraj-golu-amator` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Baraj işletmesi dışında güvenli ve izinli genel kıyı teyitsiz. |
| 9 | `eskisehir-mihaliccik-ahurkoy-goleti` | C → **C** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Mihalıççık ilçe ve güncel erişim/işletme koşulları kontrol edilmeli. |
| 10 | `ankara-500km-eskisehir-dereyalak-goleti` | D → **D** | [s2026](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi) | Sadece balıklandırma var; güvenli kamusal kıyı ve hassas konum eksik. |
| 11 | `cukurhisar-goleti-eskisehir` | C → **C** | [s2018](https://eskisehir.tarimorman.gov.tr/Haber/529/Ic-Sularimiza-100-000-Adet-Yavru-Sazan-Baligi-Birakildi), [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | 2026 güncel erişim ve balıkçılık kullanımı ayrıca doğrulanmalı. |
| 12 | `ankara-500km-eskisehir-karaoren-goleti` | C → **C** | [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | 2026 su durumu, sulama/özel parsel sınırı ve genel kıyı teyitsiz. |
| 13 | `ankara-500km-eskisehir-yukarikartal-baraj-golu` | C → **C** | [s2022](https://eskisehir.tarimorman.gov.tr/Haber/1045/) | Yukarı Kartal isim/yer eşleşmesi, işletme ve güvenli erişim teyitsiz. |
| 14 | `bilecik-bozcaarmut-baraj-goleti` | C → **C** | [boz](https://www.kulturportali.gov.tr/turkiye/bilecik/gezilecekyer/bozcaarmut-golet), [b2018](https://bilecik.tarimorman.gov.tr/Haber/677/) | Kültür kaydı eski; 2026 kıyı giriş ve güncel yer yasakları hâlâ teyitsiz. |
| 15 | `ulusal-bilecik-borcak-baraj-golu` | C → **C** | [b2018](https://bilecik.tarimorman.gov.tr/Haber/677/), [b2019](https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=2b419d1d-daf6-47f8-ad4a-2f2672877cd9&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=812%2FIlimizdeki-10-Golete-Eszamanli-Olarak-64-Bin-Adet-Balik-Birakildi) | Adlandırma ve kamusal/güvenli kıyı ile güncel 6/2 yer yasağı teyitsiz. |
| 16 | `bilecik-kurtkoy-baraj-goleti` | C → **C** | [b2019](https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=2b419d1d-daf6-47f8-ad4a-2f2672877cd9&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=812%2FIlimizdeki-10-Golete-Eszamanli-Olarak-64-Bin-Adet-Balik-Birakildi) | Güncel amatör kullanım, ulaşım ve işletme kıyısı teyitsiz. |
| 17 | `bilecik-yenipazar-baraj-goleti` | C → **C** | [b2019](https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=2b419d1d-daf6-47f8-ad4a-2f2672877cd9&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=812%2FIlimizdeki-10-Golete-Eszamanli-Olarak-64-Bin-Adet-Balik-Birakildi) | Orman/köy yolu sonrası kamusal kıyı ve 2026 kısıtları teyitsiz. |
| 18 | `bolu-yenicaga-golu` | C → **C** | [yenicaga](https://bolu.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=85d441d8-1b52-4085-b7ab-dcd2175585f0&UrlSuffix=1254%2FUreten-Boludan-4-Milyon-Yavru-Sazan), [bolu](https://bolu.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=78) | Sulak alan hassas zonları, kooperatif/ticari istihsal ve amatör kıyı kesimi teyitsiz. |
| 19 | `ulusal-duzce-efteni-golu` | D → **D** | [efteni](https://ekotaban.tarimorman.gov.tr/alan/505) | Koruma zonu ve türün rota özelinde ikinci bağımsız kanıtı çözümlenmedi. |
| 20 | `ulusal-bolu-golcuk-golu-bolu` | D → **D** | [bolu](https://bolu.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=78) | Bolu Gölcük'e özgü birincil tür envanteri, DKMP sınırlamaları ve açık kıyı teyitsiz. |

## Karar gerekçesi

**Musaözü C+**: DKMP [Musaözü Tabiat Parkı](https://ekotaban.tarimorman.gov.tr/alan/376) parkın içinde sportif olta balıkçılığına yer veriyor, düzenlenmiş kullanım alanı ve iskele bildiriyor. İl Tarım [5-6 Ağustos 2017 sazan yakalama etkinliği](https://eskisehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=c32a3e27-a550-4938-81fb-8261f1786260&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=429) ile sazanı doğrudan belgeliyor; [27 Temmuz 2026'da 2.500 yayın yavrusu](https://eskisehir.tarimorman.gov.tr/Haber/1731/Eskisehirde-Su-Kaynaklarina-2-500-Yayin-Baligi-Yavrusu) ve [30 Eylül 2026 sazan salımı](https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi) ayrı tarihli stok geçmişini teyit ediyor. Kaynak aileleri işlevsel olarak DKMP alan yönetimi ve İl Tarım su ürünleri saha kayıtlarıdır. 2017 yarışması bugün izin hakkı vermez; 2026 stok salımı yayın avını garanti etmez. C+ eşiğinde genel erişim ve park olta kullanımı kaynağı vardır, belirli mikro nokta hâlâ yerinde teyide tabidir. Bu çalışma indeks durumunu değiştirmedi; eski C kaydının mevcut indekslenebilirliği korunmuştur, yeni indeks salımı 0'dır.

**Diğer 19**: Birkaç gölette yeniden balıklandırma doğrudan kanıt olsa da sulama/işletme, güncel suya özgü av yasağı, kıyının kamuya açık olması veya net yer sınırları aynı kesinlikle kanıtlanamadı. Efteni ve Bolu Gölcük'te turizm/park kullanım bilgisi, kesin rota türü ve güncel yasalar yerine kullanılmadı. 30 Eylül 2026 tek haberde listelenen göletler birden fazla bağımsız kaynak ailesi olarak sayılmadı.

## Yeniden test / yayın kararı

Tam CI'nin geçmesi gerekir; dosya içindeki sayılar CI testi yerine geçmez. Halihazırdaki günlük state 12 Ekim tarihli olduğundan, yeni çalışmanın 14 Ekim baseline ve durum dosyaları ayrıca doğru biçimde oluşturulmalıdır. Tarihsel state üstüne 17 gerçek terfi yazılarak sahte geçiş yapılmamalı. Günlük indeks salım tavanı en fazla iki ve güncel durumdaki release sayısı burada sıfırdır.

16 Eylül [6/2 2026/26 değişikliği](https://www.tarimorman.gov.tr/HHGM/Haber/267/) 2024/21 ana metin ve diğer değişikliklerle beraber uygulanmalıdır.
