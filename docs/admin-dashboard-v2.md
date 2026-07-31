# Olta Atlası Dashboard v2 kurulumu

Dashboard yolu: `/admin/dashboard/`

## 1. Yönetim kimlik bilgileri

Cloudflare Worker sırlarına aşağıdaki iki değeri ekleyin:

```bash
npx wrangler secret put ADMIN_USERNAME
npx wrangler secret put ADMIN_PASSWORD
```

Sırlar tanımlı değilse `/admin/*` yolları güvenli biçimde `503` döndürür. Tanımlandıktan sonra tarayıcı HTTP Basic Auth penceresi gösterir.

## 2. Search Console servis hesabı

Google Cloud Console'da Search Console API etkinleştirilmiş bir servis hesabı oluşturun ve JSON anahtarını indirin. Servis hesabının `client_email` adresini Search Console'da `https://oltaatlasi.com/` mülküne okuma yetkisiyle kullanıcı olarak ekleyin.

JSON dosyasının tamamını tek secret olarak tanımlayın:

```bash
npx wrangler secret put GSC_SERVICE_ACCOUNT_JSON
```

Komut değer istediğinde JSON dosyasının tam içeriğini yapıştırın.

URL-prefix yerine domain property kullanılıyorsa aşağıdaki değişkeni de tanımlayın:

```bash
npx wrangler secret put GSC_SITE_URL
```

Örnek değerler:

- URL-prefix mülk: `https://oltaatlasi.com/`
- Domain mülk: `sc-domain:oltaatlasi.com`

`GSC_SITE_URL` tanımlanmazsa sistem `https://oltaatlasi.com/` değerini kullanır.

## 3. Test

Sırlar tanımlandıktan sonra yeniden deploy edin:

```bash
npm ci
npm run build
npm run deploy:dry
npm run deploy
```

Dashboard üzerinde 7, 28 ve 90 günlük tıklama, gösterim, CTR, ortalama konum, en çok gösterilen sorgular ve sayfalar görüntülenir.

## Güvenlik notu

- Servis hesabı JSON anahtarını GitHub'a commit etmeyin.
- Yönetim parolasını kaynak dosyalarına yazmayın.
- `/admin/*` yanıtları `private, no-store` olarak işaretlenir.
- Dashboard `noindex` olarak kalır.
