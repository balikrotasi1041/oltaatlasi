# Dashboard v4: Cloudflare Analytics kurulumu

Dashboard yolu: `/admin/dashboard/`

Yeni API yolu: `/admin/api/cloudflare?days=7`

## Gerekli Worker değişkenleri

Cloudflare Worker `balik-rotasi` için iki değer tanımlayın:

- `CLOUDFLARE_ZONE_ID`: `oltaatlasi.com` alan adının Zone ID değeri
- `CLOUDFLARE_ANALYTICS_TOKEN`: yalnızca Analytics okuma yetkili API tokenı

Tokenı Secret olarak, Zone ID değerini Secret veya normal değişken olarak ekleyebilirsiniz.

## API token oluşturma

Cloudflare profilinde **API Tokens → Create Token → Create Custom Token** yolunu açın.

Önerilen izin:

- Account → Account Analytics → Read

Kaynak kapsamını yalnızca Olta Atlası hesabı ve `oltaatlasi.com` zone'u ile sınırlayın. Düzenleme yetkisi vermeyin.

## Zone ID bulma

Cloudflare ana sayfasında `oltaatlasi.com` alan adını açın. Overview sayfasındaki API bölümünde **Zone ID** değerini kopyalayın.

## Test

Değişkenleri kaydedip deploy ettikten sonra şu adresi açın:

`https://oltaatlasi.com/admin/api/cloudflare?days=7`

Başarılı yanıt `"connected": true` ile başlar. Dashboard; HTTP istekleri, ziyaretler, veri aktarımı, cache hit oranı, 4xx/5xx sayıları, cache durumları, ülkeler ve en yoğun yolları gösterir.

## Güvenlik

- API tokenını GitHub'a yazmayın.
- Tokena Edit yetkisi vermeyin.
- Tokenı yalnızca gerekli hesap/zone ile sınırlayın.
- `/admin/*` yolları mevcut Basic Auth koruması ve `private, no-store` başlıkları altında kalır.
