# Günlük araştırma otomasyonu

6 Ekim 2026 düzeltmesi: OpenAlex eşleşmesi başlık ve özet üzerinden yapılırken özet önbellekte kayboluyordu. `sourceExcerpt` artık gerçek sağlayıcı özetini saklar; doğrulayıcı aynı metni kullanır. Abant örneği ve yanlış eşleşmeler regresyon testiyle korunur. Bu eşleşme tam metin/saha doğrulaması değildir.

`Research national routes` her gün 06:17 Europe/Istanbul (03:17 UTC) için zamanlanmıştır. GitHub başlatmayı geciktirebilir. İlgili main değişiklikleri ve workflow_dispatch de çalıştırır; PR olayları ağ araştırmasını çalıştırmaz.

Akış 405 kayıt için OpenAlex, GBIF ve OSM keşif önbelleğini yeniler. Bu, genişletilmiş resmî kaynak zincirinin yerini alan veya otomatik kalite terfisi yapan bir ajan değildir. Confidence/indexing, manuel katmanlar, 25’lik denetim ve günlük en fazla 2 indeks salımı kuralı değiştirilmez. Daha güçlü kanıt olmadan C+/B/A terfisi veya indeks salımı yapılmaz.

Önbellek; araştırma doğrulaması, veri/duplicate/security/maintenance kontrolleri, build/indeks politikası ve dry deploy başarılı olmadan commit edilmez. Main ilerlediyse test edilmemiş rebase yapılmaz: çalışma başarısız olur, sonraki tetiklemede güncel main tekrar doğrulanır. Bot commit sonrası GitHub push akışları kendiliğinden çalışmayabileceği için tam SHA kontrolü yapan Deploy production açıkça tetiklenir. Araştırma başarısı ve production başarısı ayrı sonuçlardır.

Günlük işin adım özeti sonucu gösterir. Sağlayıcı geçici hataları araştırma çıktısında belirtilir; araştırma işinin yeşil olması her kurumsal arşivin tarandığı veya yeni rota kanıtlandığı anlamına gelmez.
