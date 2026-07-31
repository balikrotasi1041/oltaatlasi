# Olta Atlası Dashboard v2 kurulumu

Dashboard yolu: `/admin/dashboard/`

## 1. Yönetim kimlik bilgileri

Cloudflare Worker sırlarına aşağıdaki iki değeri ekleyin:

```bash
npx wrangler secret put ADMIN_USERNAME
npx wrangler secret put ADMIN_PASSWORD
```

Sırlar tanımlı değilse `/admin/*` yolları güvenli biçimde `503` döndürür. Tanımlandıktan sonra tarayıcı HTTP Basic Auth penceresi gösterir.

## 2. Önerilen Search Console bağlantısı: OAuth

Servis hesabı anahtarı üretimi organizasyon politikasıyla engelleniyorsa politika gevşetilmeden OAuth yenileme belirteci kullanılabilir.

### Google Cloud

1. Search Console API'yi etkinleştirin.
2. Google Auth Platform / OAuth consent screen bölümünde uygulamayı yapılandırın.
3. Kendi Google hesabınızı test kullanıcısı olarak ekleyin.
4. OAuth Client ID oluşturun; uygulama türü `Web application` olsun.
5. Authorized redirect URI alanına `https://developers.google.com/oauthplayground` ekleyin.

### OAuth Playground

1. `https://developers.google.com/oauthplayground` adresini açın.
2. Sağ üstteki ayarlardan `Use your own OAuth credentials` seçeneğini açın.
3. OAuth Client ID ve Client Secret değerlerini girin.
4. Şu kapsamı yetkilendirin:

```text
https://www.googleapis.com/auth/webmasters.readonly
```

5. Yetkilendirme kodunu tokenlarla değiştirin ve `refresh_token` değerini kopyalayın.

### Cloudflare sırları

Aşağıdaki üç değeri Worker secrets olarak ekleyin:

```bash
npx wrangler secret put GSC_OAUTH_CLIENT_ID
npx wrangler secret put GSC_OAUTH_CLIENT_SECRET
npx wrangler secret put GSC_OAUTH_REFRESH_TOKEN
```

Cloudflare paneli kullanılıyorsa Workers & Pages > balik-rotasi > Settings > Variables and Secrets bölümünde her birini `Secret` türünde ayrı ayrı ekleyin.

OAuth uygulaması `External` ve `Testing` durumunda kalırsa Search Console kapsamıyla alınan refresh token yedi gün sonra sona erebilir. Kalıcı kullanım için uygulama yayın durumunu uygun şekilde production'a taşıyın veya Workspace organizasyonunda internal uygulama kullanın.

## 3. Alternatif: servis hesabı

Organizasyon politikası izin veriyorsa servis hesabının `client_email` adresini Search Console mülküne okuma yetkisiyle ekleyin ve JSON anahtarının tamamını secret olarak tanımlayın:

```bash
npx wrangler secret put GSC_SERVICE_ACCOUNT_JSON
```

Servis hesabı yöntemi zorunlu değildir; Worker önce OAuth sırlarını, bunlar yoksa servis hesabını kullanır.

## 4. Search Console mülkü

URL-prefix yerine domain property kullanılıyorsa aşağıdaki değişkeni de tanımlayın:

```bash
npx wrangler secret put GSC_SITE_URL
```

Örnek değerler:

- URL-prefix mülk: `https://oltaatlasi.com/`
- Domain mülk: `sc-domain:oltaatlasi.com`

`GSC_SITE_URL` tanımlanmazsa sistem `https://oltaatlasi.com/` değerini kullanır.

## 5. Test ve dağıtım

Sırlar tanımlandıktan sonra yeniden deploy edin:

```bash
npm ci
npm run build
npm run deploy:dry
npm run deploy
```

Dashboard üzerinde 7, 28 ve 90 günlük tıklama, gösterim, CTR, ortalama konum, en çok gösterilen sorgular ve sayfalar görüntülenir.

## Güvenlik notu

- OAuth client secret ve refresh token değerlerini GitHub'a commit etmeyin.
- Servis hesabı JSON anahtarını GitHub'a commit etmeyin.
- Yönetim parolasını kaynak dosyalarına yazmayın.
- `/admin/*` yanıtları `private, no-store` olarak işaretlenir.
- Dashboard `noindex` olarak kalır.
