# Olta Atlası Dashboard v3 — GA4 kurulumu

Dashboard yolu: `/admin/dashboard/`

## 1. Google Analytics Data API

Google Cloud projesinde **Google Analytics Data API** etkinleştirilmelidir.

## 2. GA4 mülk kimliği

Google Analytics içinde **Yönetici → Mülk ayarları** bölümündeki sayısal **Mülk Kimliği** kopyalanır.

Cloudflare Worker değişkenlerine eklenir:

- Ad: `GA4_PROPERTY_ID`
- Değer: yalnızca sayısal mülk kimliği; `properties/` öneki gerekmez
- Tür: Secret veya Text

## 3. OAuth refresh token

Mevcut Search Console bağlantısını bozmamak için OAuth Playground'dan ayrı bir GA4 refresh token üretilmelidir.

OAuth Playground kapsamı:

```text
https://www.googleapis.com/auth/analytics.readonly
```

GA4 istemcisi Search Console istemcisinden ayrılabiliyorsa aşağıdaki üç Worker sırrı birlikte tanımlanır:

```text
GA4_OAUTH_CLIENT_ID
GA4_OAUTH_CLIENT_SECRET
GA4_OAUTH_REFRESH_TOKEN
```

Bu ayrım bir servisin OAuth sırrı döndürüldüğünde diğer veri akışının kesilmesini önler. `GA4_OAUTH_CLIENT_ID` veya `GA4_OAUTH_CLIENT_SECRET` değerlerinden biri tanımlanırsa üç GA4 değerinin de eksiksiz olması zorunludur.

Ayrı GA4 istemcisi tanımlanmazsa Worker geriye dönük uyumluluk için şu Search Console istemci değerlerini kullanır:

```text
GSC_OAUTH_CLIENT_ID
GSC_OAUTH_CLIENT_SECRET
```

`GA4_OAUTH_REFRESH_TOKEN` da tanımlanmazsa sistem mevcut `GSC_OAUTH_REFRESH_TOKEN` değerini dener. Bu durumda aynı tokenın hem Search Console hem Analytics kapsamlarını içermesi gerekir.

## 4. Deploy ve test

Değişkenler kaydedilip Worker yeniden deploy edildikten sonra şu korumalı adres test edilir:

```text
/admin/api/ga4?days=28
```

Başarılı yanıtta `connected: true` görülür.

Search Console ve GA4 için her başarılı yanıt yedi günlük dahili son-başarılı-veri yedeğini yeniler. Google bağlantısı geçici olarak kesilirse yönetim ekranı tamamen boşalmak yerine `stale: true` ve `warning` alanlarıyla bu yedeği gösterir. Bu davranış kimlik bilgisi sorununu gizlemez; `staleReason` yalnızca Basic Auth arkasındaki yönetim API'sinde döner.

Dashboard şu verileri gösterir:

- aktif kullanıcı
- oturum
- sayfa görüntüleme
- etkileşim oranı
- organik oturum ve organik pay
- son 30 dakikadaki aktif kullanıcı
- trafik kanalları
- cihaz kategorileri
- şehirler
- en çok görüntülenen sayfalar

## Güvenlik

OAuth refresh token, client secret veya Analytics kimlik bilgileri GitHub'a yazılmamalıdır. `/admin/*` yanıtları Basic Auth arkasında ve `private, no-store` olarak kalır.
