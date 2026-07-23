# Olta Atlası

`oltaatlasi.com` için hazırlanmış, Astro ile üretilen ve Cloudflare Workers Static Assets üzerinde yayımlanan bağımsız balıkçılık bilgi sitesidir.

## İçerik kapsamı

- İstanbul ve Kocaeli mera dosyaları
- Balık türü rehberleri
- Takım, yem, yöntem ve saha hazırlığı yazıları
- İl ve ilçe merkez sayfaları
- Navigasyon bağlantıları, kaynak notları ve güven seviyeleri
- Görsel site haritası ve standart XML site haritaları
- Google Analytics 4: `G-K3ZLC335GP`

## Yerel geliştirme

```bash
npm ci
npm run dev
```

## Kalite ve üretim derlemesi

```bash
npm run build
npm run deploy:dry
```

## Cloudflare Workers Builds

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Build variable: `PUBLIC_SITE_URL=https://oltaatlasi.com`

Wrangler içindeki teknik Worker adı mevcut Cloudflare projesiyle uyum için `balik-rotasi` olarak korunmuştur. Ziyaretçiye görünen marka ve bütün canonical URL'ler `Olta Atlası` ve `https://oltaatlasi.com` değerlerini kullanır.

## Alan adı geçişi

Worker kodu aşağıdaki adresleri yol yapısını koruyarak kalıcı olarak `https://oltaatlasi.com` alan adına yönlendirir:

- `https://www.oltaatlasi.com/*`
- `https://balik-rotasi.balikrotasi1041.workers.dev/*`

`www` yönlendirmesinin çalışması için `www.oltaatlasi.com` alan adının da aynı Worker'a Custom Domain olarak eklenmesi gerekir.

## Search Console

Yeni Domain property: `oltaatlasi.com`

Gönderilecek site haritaları:

- `https://oltaatlasi.com/sitemap-index.xml`
- `https://oltaatlasi.com/sitemap-images.xml`

Eski Search Console mülkü taşıma süresince silinmemelidir.
