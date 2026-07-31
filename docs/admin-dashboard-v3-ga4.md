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

Mevcut Search Console bağlantısını bozmamak için OAuth Playground'dan ayrı bir GA4 refresh token üretmek önerilir.

OAuth Playground kapsamı:

```text
https://www.googleapis.com/auth/analytics.readonly
```

Aynı OAuth Client ID ve Client Secret kullanılabilir. Üretilen refresh token Cloudflare Worker sırlarına şu adla eklenir:

```text
GA4_OAUTH_REFRESH_TOKEN
```

Worker şu mevcut değerleri kullanmaya devam eder:

```text
GSC_OAUTH_CLIENT_ID
GSC_OAUTH_CLIENT_SECRET
```

`GA4_OAUTH_REFRESH_TOKEN` tanımlanmazsa sistem mevcut `GSC_OAUTH_REFRESH_TOKEN` değerini dener. Bu durumda o tokenın hem Search Console hem Analytics kapsamlarını içermesi gerekir.

## 4. Deploy ve test

Değişkenler kaydedilip Worker yeniden deploy edildikten sonra şu korumalı adres test edilir:

```text
/admin/api/ga4?days=28
```

Başarılı yanıtta `connected: true` görülür.

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
