# Dashboard v4: Cloudflare Analytics kurulumu

Dashboard yolu: `/admin/dashboard/`

API yolu: `/admin/api/cloudflare?days=7`

## Gerekli Worker değişkenleri

Cloudflare Worker `balik-rotasi` için iki değer tanımlayın:

- `CLOUDFLARE_ZONE_ID`: `oltaatlasi.com` alan adının Zone ID değeri
- `CLOUDFLARE_ANALYTICS_TOKEN`: yalnızca Analytics okuma yetkili API tokenı

Tokenı Secret olarak, Zone ID değerini Secret veya normal değişken olarak ekleyebilirsiniz.

## API token oluşturma

Cloudflare profilinde **API Tokens → Create Token → Create Custom Token** yolunu açın.

Gerekli izin:

- Zone → Analytics → Read

Zone kaynak kapsamı:

- Include → Specific zone → `oltaatlasi.com`

Düzenleme yetkisi vermeyin.

## Zone ID bulma

Cloudflare ana sayfasında `oltaatlasi.com` alan adını açın. Overview sayfasındaki API bölümünde **Zone ID** değerini kopyalayın.

## Plan sınırı ve günlük parçalama

Cloudflare GraphQL Analytics veri kümelerinin sorgu süresi plan ve zone ayarına göre değişebilir. Bu zone tek sorguda en fazla 1 günlük süre kabul ettiği için Worker, 7 ve 28 günlük raporları 24 saatlik parçalara böler ve sonuçları birleştirir. Sonuçlar API kotasını korumak için 5 dakika önbelleğe alınır.

## Test

Değişkenleri kaydedip deploy ettikten sonra şu adresi açın:

`https://oltaatlasi.com/admin/api/cloudflare?days=7`

Başarılı yanıt `"connected": true` ile başlar. Dashboard; HTTP istekleri, ziyaretler, veri aktarımı, cache hit oranı, 4xx/5xx sayıları, cache durumları, ülkeler ve en yoğun yolları gösterir.

## Güvenlik

- API tokenını GitHub'a yazmayın.
- Tokena Edit yetkisi vermeyin.
- Tokenı yalnızca gerekli zone ile sınırlayın.
- `/admin/*` yolları mevcut Basic Auth koruması ve `private, no-store` başlıkları altında kalır.
