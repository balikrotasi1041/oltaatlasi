# Admin Dashboard v5 — indekslenme hunisi

Dashboard `/admin/dashboard/` üzerinde yayınlanan avlakların Google görünürlüğü için iki veri kaynağı birlikte kullanılır:

- **Google URL Inspection API:** Son yayımlanan 15 avlak için gerçek indeks verdict'i, kapsam durumu ve son tarama zamanı.
- **Search Console Search Analytics:** Son 90 günde `/meralar/` sayfalarının gösterim ve tıklama sinyalleri.

Huni `Yayındaki avlak → GSC'de görülen → İndeksli (kontrol grubu) → Gösterim aldı → Tıklama aldı` olarak gösterilir.

`İndeksli` metriği yalnız URL Inspection API `PASS` sonucudur. Gösterim olmaması tek başına indeks dışı anlamına gelmez. API kotasını korumak için tek kontrolde en fazla 15 URL incelenir. Endpoint mevcut `/admin/` Basic Auth korumasını ve tanımlı Search Console OAuth/servis hesabı kimlik bilgilerini yeniden kullanır.
