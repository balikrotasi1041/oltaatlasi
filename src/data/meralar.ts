export type SourceLink = { label:string; url:string; note:string; };
export type Mera = {
  slug: string; name: string; district: string; province: string; zone: string;
  waterType: "Deniz" | "Gölet" | "Göl" | "Akarsu" | "Baraj";
  region: string; summary: string; fish: string[]; methods: string[]; baits: string[];
  camping: "Uygun" | "Sınırlı" | "Uygun değil" | "Kontrol edilmeli";
  vehicleAccess: "Kolay" | "Orta" | "Zor"; amenities: string[]; cautions: string[];
  lat: number; lng: number; locationPrecision: "Yaklaşık" | "Genel bölge" | "Tam";
  verification: string; updatedAt: string; publishedAt: string; confidence: "A" | "B" | "C" | "D";
  image: string; socialImage: string; navigationNote: string; shoreProfile:string;
  transport:string; crowdNote:string; longIntro:string[]; planningNotes:string[]; seasonalNotes:string[];
  sources: SourceLink[];
};

export const meralar: Mera[] = [
  {
    "slug": "izmit-korfezi-sahil-bandi",
    "name": "İzmit Körfezi Sahil Bandı",
    "district": "İzmit",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Kent merkezine yakın, kısa süreli kıyı avı ve ekipman denemeleri için erişimi kolay genel sahil rotası.",
    "fish": [
      "İstavrit",
      "Kefal",
      "İzmarit",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Midye",
      "Karides",
      "Ekmek",
      "Suni çapari"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Yürüyüş yolu",
      "Aydınlatma",
      "Yakın market",
      "Toplu taşıma"
    ],
    "cautions": [
      "Yoğun yaya trafiği",
      "Olta atışında çevre kontrolü",
      "Liman ve yasaklı bölgelere yaklaşmama"
    ],
    "lat": 40.759,
    "lng": 29.925,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "C",
    "navigationNote": "Bağlantılar İzmit sahil bandındaki genel erişim noktasına yönlendirir; kıyıdaki yasak ve güvenlik işaretlerini yerinde kontrol et.",
    "image": "/images/meralar/izmit-korfezi-sahil-bandi.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "İzmit Körfezi Sahil Bandı, Kocaeli ili İzmit ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi C olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi kolay olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Uygun değil' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada İstavrit, Kefal, İzmarit ve Zargana raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/izmit-korfezi-sahil-bandi.webp"
  },
  {
    "slug": "karamursel-sahili",
    "name": "Karamürsel Sahili",
    "district": "Karamürsel",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Sahil boyunca farklı kıyı cepleri bulunan, günübirlik av ve kıyı gözlemi yapmak için değerlendirilebilecek genel bölge.",
    "fish": [
      "İstavrit",
      "Kefal",
      "İzmarit",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Dip oltası"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Ekmek",
      "Suni yem"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Sahil düzenlemesi",
      "Yakın market",
      "Kafe",
      "Otopark seçenekleri"
    ],
    "cautions": [
      "Rüzgâr ve dalga",
      "Kaygan taşlar",
      "Kalabalık saatler"
    ],
    "lat": 40.691,
    "lng": 29.616,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "C",
    "navigationNote": "Navigasyon sahil merkezine gider. Olta atılabilecek bölüm, yaya yoğunluğu ve yerel kısıtlara göre yerinde seçilmelidir.",
    "image": "/images/meralar/karamursel-sahili.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "Karamürsel Sahili, Kocaeli ili Karamürsel ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi C olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi kolay olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Uygun değil' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada İstavrit, Kefal, İzmarit ve Zargana raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/karamursel-sahili.webp"
  },
  {
    "slug": "eskihisar-sahili",
    "name": "Eskihisar Sahili",
    "district": "Gebze",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Feribot ve tekne trafiği nedeniyle dikkat isteyen, kıyı avı açısından sık ziyaret edilen genel sahil bölgesi.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Şamandıra"
    ],
    "baits": [
      "Ekmek",
      "Karides",
      "Suni çapari"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Yakın market",
      "Kafe",
      "Otopark"
    ],
    "cautions": [
      "Feribot ve tekne trafiği",
      "Akıntı",
      "Kalabalık iskele çevresi"
    ],
    "lat": 40.769,
    "lng": 29.425,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "C",
    "navigationNote": "Bağlantı sahil merkezine gider; feribot operasyon alanları ve güvenlik sınırları dışında kal.",
    "image": "/images/meralar/eskihisar-sahili.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "Eskihisar Sahili, Kocaeli ili Gebze ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi C olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi kolay olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Uygun değil' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada İstavrit, Kefal ve Zargana raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/eskihisar-sahili.webp"
  },
  {
    "slug": "bayramoglu-sahili",
    "name": "Bayramoğlu Sahili",
    "district": "Darıca",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Kıyı erişimi kolay, kısa av seansları ve başlangıç seviyesi takım denemeleri için değerlendirilebilecek sahil hattı.",
    "fish": [
      "Kefal",
      "İstavrit",
      "Zargana"
    ],
    "methods": [
      "Şamandıra",
      "Çapari",
      "Hafif spin"
    ],
    "baits": [
      "Ekmek",
      "Karides",
      "Suni yem"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Sahil yolu",
      "Yakın market",
      "Otopark seçenekleri"
    ],
    "cautions": [
      "Yüzme alanları",
      "Yoğun kullanım",
      "Kıyıdaki engeller"
    ],
    "lat": 40.791,
    "lng": 29.353,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "D",
    "navigationNote": "Konum genel sahil erişimini gösterir. Yüzme alanlarında ve kalabalık bölümlerde olta atma.",
    "image": "/images/meralar/bayramoglu-sahili.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "Bayramoğlu Sahili, Kocaeli ili Darıca ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi D olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi kolay olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Uygun değil' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada Kefal, İstavrit ve Zargana raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/bayramoglu-sahili.webp"
  },
  {
    "slug": "kerpe-kiyilari",
    "name": "Kerpe Kıyıları",
    "district": "Kandıra",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Karadeniz",
    "summary": "Kayalık ve kumsal kıyı yapısının birlikte görüldüğü, hava ve deniz durumunun dikkatle izlenmesi gereken Karadeniz rotası.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Levrek",
      "Mezgit"
    ],
    "methods": [
      "Spin",
      "Çapari",
      "Dip oltası"
    ],
    "baits": [
      "Silikon yem",
      "Kaşık",
      "Karides",
      "Suni çapari"
    ],
    "camping": "Kontrol edilmeli",
    "vehicleAccess": "Orta",
    "amenities": [
      "Yerleşim içinde market",
      "Yeme içme",
      "Mevsimsel tesisler"
    ],
    "cautions": [
      "Kayalık zemin",
      "Ani dalga",
      "Kuvvetli rüzgâr",
      "Yaz kalabalığı"
    ],
    "lat": 41.169,
    "lng": 30.193,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "C",
    "navigationNote": "Rota Kerpe yerleşim merkezine yönlendirir. Kayalık av noktası seçimini hava, dalga ve güvenli erişime göre yap.",
    "image": "/images/meralar/kerpe-kiyilari.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "Kerpe Kıyıları, Kocaeli ili Kandıra ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi C olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi orta olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Kontrol edilmeli' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada İstavrit, Kefal, Levrek ve Mezgit raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/kerpe-kiyilari.webp"
  },
  {
    "slug": "kefken-cebeci-kiyilari",
    "name": "Kefken–Cebeci Kıyıları",
    "district": "Kandıra",
    "province": "Kocaeli",
    "waterType": "Deniz",
    "region": "Karadeniz",
    "summary": "Geniş sahil hattı, değişken zemin ve mevsimsel yoğunluğuyla planlama gerektiren bir kıyı avı bölgesi.",
    "fish": [
      "İstavrit",
      "Mezgit",
      "Kefal",
      "Levrek"
    ],
    "methods": [
      "Dip oltası",
      "Spin",
      "Çapari"
    ],
    "baits": [
      "Karides",
      "Boru kurdu",
      "Silikon yem",
      "Suni çapari"
    ],
    "camping": "Kontrol edilmeli",
    "vehicleAccess": "Orta",
    "amenities": [
      "Yerleşim yakınında market",
      "Plaj olanakları",
      "Mevsimsel tesisler"
    ],
    "cautions": [
      "Yüzme alanlarında avlanmama",
      "Dalga ve rip akıntısı",
      "Kamp ve ateş kurallarını kontrol etme"
    ],
    "lat": 41.174,
    "lng": 30.236,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "C",
    "navigationNote": "Bağlantı Cebeci genel sahil erişimine gider. Plaj kullanım saatleri ve cankurtaran uyarılarına uy.",
    "image": "/images/meralar/kefken-cebeci-kiyilari.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı hattı şehir içi ve düzenlenmiş bölümler ile yerel engellerin bir arada görülebildiği bir yapıya sahiptir.",
    "longIntro": [
      "Kefken–Cebeci Kıyıları, Kocaeli ili Kandıra ilçesinde yer alan deniz karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi C olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi orta olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Kontrol edilmeli' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada İstavrit, Mezgit, Kefal ve Levrek raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/kefken-cebeci-kiyilari.webp"
  },
  {
    "slug": "ketenciler-goleti",
    "name": "Ketenciler Göleti",
    "district": "Kartepe",
    "province": "Kocaeli",
    "waterType": "Gölet",
    "region": "İç su",
    "summary": "Sakin su avı, şamandıralı takım ve kısa doğa molası için değerlendirilebilecek iç su pilot kaydı.",
    "fish": [
      "Sazan",
      "Kızılkanat"
    ],
    "methods": [
      "Şamandıra",
      "Dip oltası"
    ],
    "baits": [
      "Mısır",
      "Solucan",
      "Hamur"
    ],
    "camping": "Sınırlı",
    "vehicleAccess": "Orta",
    "amenities": [
      "Doğal kıyı",
      "Sınırlı tesis",
      "Yakın yerleşim kontrol edilmeli"
    ],
    "cautions": [
      "Çamurlu kıyı",
      "Su seviyesi değişimi",
      "Ateş yakmama",
      "Kıyıya yaklaşırken kaygan ve yumuşak zemini kontrol etme"
    ],
    "lat": 40.695,
    "lng": 30.155,
    "locationPrecision": "Yaklaşık",
    "verification": "Editör gözlemi",
    "updatedAt": "2026-06-18",
    "confidence": "B",
    "navigationNote": "Hassas alan nedeniyle bağlantı yaklaşık bölgeye gider. Özel mülkiyet, yol ve kıyı erişimini yerinde doğrula.",
    "image": "/images/meralar/ketenciler-goleti.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı çizgisi su seviyesine göre değişebilen doğal, yer yer çamurlu veya sazlık bir iç su yapısı gösterir.",
    "longIntro": [
      "Ketenciler Göleti, Kocaeli ili Kartepe ilçesinde yer alan gölet karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda editör gözlemi düzeyindedir ve güven seviyesi B olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi orta olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Sınırlı' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada Sazan ve Kızılkanat raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/ketenciler-goleti.webp"
  },
  {
    "slug": "kandira-akgol",
    "name": "Kandıra Akgöl",
    "district": "Kandıra",
    "province": "Kocaeli",
    "waterType": "Göl",
    "region": "İç su",
    "summary": "Doğal çevresi nedeniyle hassas yaklaşılması gereken, kesin mera noktaları yerine genel bölge bilgisi verilen iç su rotası.",
    "fish": [
      "Sazan",
      "Turna",
      "Kızılkanat"
    ],
    "methods": [
      "Şamandıra",
      "Dip oltası",
      "Spin"
    ],
    "baits": [
      "Mısır",
      "Solucan",
      "Silikon yem"
    ],
    "camping": "Kontrol edilmeli",
    "vehicleAccess": "Zor",
    "amenities": [
      "Doğal alan",
      "Tesis bilgisi doğrulanmalı"
    ],
    "cautions": [
      "Sazlık ve bataklık zemin",
      "Yaban hayatı",
      "Ateş ve kamp kısıtları",
      "Mevzuatı ve erişim durumunu yerinde doğrulama"
    ],
    "lat": 41.094,
    "lng": 30.104,
    "locationPrecision": "Genel bölge",
    "verification": "Pilot veri",
    "updatedAt": "2026-07-18",
    "confidence": "D",
    "navigationNote": "Doğal alanı korumak için yalnızca genel bölge gösterilir. Erişim, koruma statüsü ve av iznini güncel resmî kaynaklardan doğrula.",
    "image": "/images/meralar/kandira-akgol.svg",
    "zone": "Kocaeli",
    "publishedAt": "2026-07-18",
    "shoreProfile": "Kıyı çizgisi su seviyesine göre değişebilen doğal, yer yer çamurlu veya sazlık bir iç su yapısı gösterir.",
    "longIntro": [
      "Kandıra Akgöl, Kocaeli ili Kandıra ilçesinde yer alan göl karakterli bir rota dosyasıdır. Bu sayfa, tek bir noktada balık çıkacağı iddiasını değil; kıyıya erişim, raporlanan türler, kullanılabilecek temel yöntemler ve sahada kontrol edilmesi gereken değişkenleri birlikte sunar.",
      "Kayıt şu anda pilot veri düzeyindedir ve güven seviyesi D olarak gösterilir. Hava, su seviyesi, akıntı, mevsim, kıyı düzenlemesi ve yerel yasaklar kısa sürede değişebildiği için navigasyon bağlantısı yalnızca planlama başlangıcı olarak kullanılmalıdır."
    ],
    "planningNotes": [
      "Araç erişimi zor olarak sınıflandırılmıştır; son yaklaşımda tabela, bariyer ve özel mülkiyet sınırları yerinde kontrol edilmelidir.",
      "Kamp durumu 'Kontrol edilmeli' olarak işaretlenmiştir. Bu ifade izin anlamına gelmez; yangın, konaklama ve alan kullanım kuralları ayrıca doğrulanmalıdır.",
      "Kalabalık kıyılarda atış alanını boşaltmadan kurşun veya çapari savrulmamalı; yaya, tekne ve diğer oltacıların misina hattı izlenmelidir."
    ],
    "seasonalNotes": [
      "Bu dosyada Sazan, Turna ve Kızılkanat raporlanmıştır; türlerin kıyıya yaklaşması su sıcaklığı, yem balığı ve günün saatine göre değişebilir.",
      "Ava çıkmadan önce rüzgâr, yağış, dalga veya su seviyesi tahminleri kontrol edilmeli; ilk ziyaret mümkünse gündüz ve kısa keşif şeklinde yapılmalıdır."
    ],
    "transport": "Navigasyon bağlantısı genel erişim bölgesine gider. Toplu taşıma ve son yaya yaklaşımı için güncel harita uygulaması kullanılmalıdır.",
    "crowdNote": "Yoğunluk hafta sonu, gün batımı ve iyi hava koşullarında artabilir. Atış güvenliği sağlanmıyorsa başka bir kıyı cebine geçilmelidir.",
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ],
    "socialImage": "/images/social/meralar/kandira-akgol.webp"
  },
  {
    "slug": "galata-koprusu",
    "name": "Galata Köprüsü",
    "district": "Beyoğlu",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Haliç ile Boğaz geçişinde, toplu taşımayla kolay ulaşılan fakat çok yoğun ve akıntılı şehir içi köprü rotası.",
    "fish": [
      "İstavrit",
      "İzmarit",
      "Kefal",
      "Lüfer"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Yemli takım"
    ],
    "baits": [
      "Suni çapari",
      "Karides",
      "Ekmek",
      "Yaprak yem"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Tramvay ve vapur bağlantıları",
      "Yakın yeme içme",
      "Tuvalet seçenekleri çevrede",
      "Gece aydınlatması"
    ],
    "cautions": [
      "Kalabalıkta kurşun savurma riski",
      "Köprü altı tekne trafiği",
      "Misina kesişmesi",
      "Islak ve kaygan zemin"
    ],
    "lat": 41.021912,
    "lng": 28.974689,
    "locationPrecision": "Genel bölge",
    "verification": "Resmî kullanım doğrulaması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "B",
    "image": "/images/meralar/galata-koprusu.svg",
    "socialImage": "/images/social/meralar/galata-koprusu.webp",
    "navigationNote": "Bağlantılar Galata Köprüsü çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Köprü üstü avında akıntı, yüksek korkuluk, diğer oltacıların misinaları ve aşağıdaki tekne trafiği birlikte değerlendirilmelidir.",
    "transport": "Eminönü tramvay, vapur ve otobüs durakları ile Karaköy tramvay ve deniz ulaşımı iki yakadan erişim sağlar. Araçla gelişte otopark ve yoğun trafik ayrı planlanmalıdır.",
    "crowdNote": "Günün büyük bölümünde yoğun olabilir. Gece ve sabah erken saatleri de balıkçı yoğunluğunun tamamen bittiği zamanlar değildir.",
    "longIntro": [
      "Galata Köprüsü, İstanbul’un Beyoğlu ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Kısa kamış ve kontrollü atış, kalabalıkta daha yönetilebilir olabilir.",
      "İğne sayısı, balık boyu ve alıkoyma miktarı güncel tebliğe göre kontrol edilmelidir.",
      "Köprünün işletme ve güvenlik talimatı, çevrimiçi rota bilgisinden üstündür."
    ],
    "seasonalNotes": [
      "İstavrit sürüleri ve mevsimsel lüfer hareketi kıyıdaki balıkçı yoğunluğunu hızla artırabilir.",
      "Akıntı arttığında kurşun ihtiyacı değişir; kamış atar değerinin dışına çıkılmamalıdır."
    ],
    "sources": [
      {
        "label": "İstanbul İl Tarım ve Orman Müdürlüğü, 17 Haziran 2026 denetimi",
        "url": "https://istanbul.tarimorman.gov.tr/Haber/3125/Galata-Ve-Unkapani-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim-Gerceklestirildi",
        "note": "Galata ve Unkapanı köprülerinde amatör balıkçılık faaliyetinin ve mevzuat denetiminin resmî kaydı."
      },
      {
        "label": "İstanbul İl Tarım ve Orman Müdürlüğü, 20 Şubat 2026 denetimi",
        "url": "https://istanbul.tarimorman.gov.tr/Haber/3078/Galata-Ve-Ataturk-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim",
        "note": "Galata ve Atatürk köprülerinde iğne, boy ve miktar limitlerinin denetlendiği resmî duyuru."
      },
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      }
    ]
  },
  {
    "slug": "ataturk-unkapani-koprusu",
    "name": "Atatürk (Unkapanı) Köprüsü",
    "district": "Fatih",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Haliç üzerinde, yaya ve araç trafiğiyle birlikte kullanılan; resmî denetimlere konu olmuş şehir içi köprü merası.",
    "fish": [
      "İstavrit",
      "Kefal",
      "İzmarit"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Karides",
      "Ekmek"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Toplu taşıma bağlantıları",
      "Yakın market ve büfe",
      "Şehir içi aydınlatma"
    ],
    "cautions": [
      "Araç trafiğine yakınlık",
      "Köprü açılma/bakım işlemleri",
      "Kalabalıkta iğne güvenliği",
      "Haliç yüzey akıntısı"
    ],
    "lat": 41.022995,
    "lng": 28.962433,
    "locationPrecision": "Genel bölge",
    "verification": "Resmî kullanım doğrulaması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "B",
    "image": "/images/meralar/ataturk-unkapani-koprusu.svg",
    "socialImage": "/images/social/meralar/ataturk-unkapani-koprusu.webp",
    "navigationNote": "Bağlantılar Atatürk (Unkapanı) Köprüsü çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Köprü üstünde kıyıdan farklı olarak aşağıya dik av yapılır; korkuluk, araç trafiği ve açılır köprü işletmesi dikkate alınmalıdır.",
    "transport": "Unkapanı ve Haliç çevresindeki otobüs bağlantıları ile metro ve tramvay aktarmaları kullanılabilir. Son yaklaşım yaya trafiği içindedir.",
    "crowdNote": "İş çıkışı, hafta sonu ve uygun hava koşullarında yoğunlaşabilir. Köprü bakım veya açılma saatleri erişimi geçici olarak etkileyebilir.",
    "longIntro": [
      "Atatürk (Unkapanı) Köprüsü, İstanbul’un Fatih ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Köprü üzerinde ekipman çantası yaya akışını daraltmayacak biçimde tutulmalıdır.",
      "Gece avında görünürlük sağlayan küçük bir kafa lambası kullanılabilir fakat sürücülerin görüşünü etkileyecek güçlü ışık yöneltilmemelidir.",
      "Yerel görevli talimatı ve geçici kapatma duyuruları takip edilmelidir."
    ],
    "seasonalNotes": [
      "Haliç içindeki sürü hareketi kısa sürede değişebilir; aynı noktada uzun süre sonuç alınmaması farklı derinliği denemeyi gerektirebilir.",
      "Yağış sonrası su rengi ve yüzey akışı değiştiğinde takım seçimi yeniden değerlendirilmelidir."
    ],
    "sources": [
      {
        "label": "İstanbul İl Tarım ve Orman Müdürlüğü, 17 Haziran 2026 denetimi",
        "url": "https://istanbul.tarimorman.gov.tr/Haber/3125/Galata-Ve-Unkapani-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim-Gerceklestirildi",
        "note": "Galata ve Unkapanı köprülerinde amatör balıkçılık faaliyetinin ve mevzuat denetiminin resmî kaydı."
      },
      {
        "label": "İstanbul İl Tarım ve Orman Müdürlüğü, 20 Şubat 2026 denetimi",
        "url": "https://istanbul.tarimorman.gov.tr/Haber/3078/Galata-Ve-Ataturk-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim",
        "note": "Galata ve Atatürk köprülerinde iğne, boy ve miktar limitlerinin denetlendiği resmî duyuru."
      },
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "İBB Atatürk Köprüsü işletme bilgisi",
        "url": "https://cevre.ibb.istanbul/deniz-hizmetleri-sube-mudurlugu/ataturk-unkapani-koprusu/",
        "note": "Köprünün deniz trafiğine açıldığı saatlere ilişkin kurumsal bilgi."
      }
    ]
  },
  {
    "slug": "sarayburnu-sahili",
    "name": "Sarayburnu Sahili",
    "district": "Fatih",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Boğaz, Haliç ve Marmara geçişinin hissedildiği; güçlü akıntı ve tarihî yarımada yoğunluğu taşıyan kıyı rotası.",
    "fish": [
      "İstavrit",
      "Lüfer",
      "Zargana",
      "Palamut"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Şamandıra"
    ],
    "baits": [
      "Suni çapari",
      "Minnow",
      "Kaşık",
      "Balık şeridi"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Zor",
    "amenities": [
      "Marmaray ve tramvay erişimi",
      "Yakın yeme içme",
      "Park ve yürüyüş alanları"
    ],
    "cautions": [
      "Güçlü akıntı",
      "Turistik yaya yoğunluğu",
      "Kaygan taş ve korkuluk boşlukları",
      "Deniz taşıtı trafiği"
    ],
    "lat": 41.01627,
    "lng": 28.98554,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/sarayburnu-sahili.svg",
    "socialImage": "/images/social/meralar/sarayburnu-sahili.webp",
    "navigationNote": "Bağlantılar Sarayburnu Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Açık akıntıya bakan taş veya düzenlenmiş kıyı bölümlerinde zemin ve korkuluk yapısı değişebilir.",
    "transport": "Marmaray, tramvay, otobüs ve Sirkeci çevresi yaya bağlantıları kullanılabilir. Kıyıya son yaklaşımda turistik yoğunluk hesaba katılmalıdır.",
    "crowdNote": "Gün batımı, hafta sonu ve turizm sezonunda yaya yoğunluğu belirgin şekilde artar.",
    "longIntro": [
      "Sarayburnu Sahili, İstanbul’un Fatih ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Spin atışı için arkada yeterli boşluk yoksa av yapılmamalıdır.",
      "Akıntı yönü ve misinanın deniz trafiğine uzanma ihtimali izlenmelidir.",
      "Kıyı düzenlemesi veya etkinlik nedeniyle kapanan bölümlere girilmemelidir."
    ],
    "seasonalNotes": [
      "Boğaz geçişindeki yem balığı hareketleri lüfer ve palamut gibi göçmen türlerin dönemsel görünümünü etkiler.",
      "Zargana için yüzey hareketi, istavrit için farklı su katmanları gözlenebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "yenikapi-sahili",
    "name": "Yenikapı Sahili",
    "district": "Fatih",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Geniş dolgu ve sahil alanları bulunan, Marmara’ya açık rüzgâr ve yaya hareketinin birlikte değerlendirildiği kent kıyısı.",
    "fish": [
      "İstavrit",
      "Kefal",
      "İzmarit",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Kurt"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Metro ve Marmaray",
      "Geniş yaya alanı",
      "Yakın market seçenekleri",
      "Etkinlik alanları"
    ],
    "cautions": [
      "Açık deniz rüzgârı",
      "Bisiklet ve yaya trafiği",
      "Etkinlik kaynaklı geçici kapatma",
      "Kaygan kıyı taşları"
    ],
    "lat": 41.00475,
    "lng": 28.95256,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/yenikapi-sahili.svg",
    "socialImage": "/images/social/meralar/yenikapi-sahili.webp",
    "navigationNote": "Bağlantılar Yenikapı Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Uzun sahil hattında kıyı yüksekliği, korkuluk ve taşlık zemin bölümden bölüme değişir.",
    "transport": "Marmaray, metro ve otobüs bağlantıları güçlüdür. Büyük etkinlik günlerinde yaya güzergâhları ve girişler değişebilir.",
    "crowdNote": "Etkinlik, hafta sonu ve iyi hava günlerinde kıyı çok kalabalık olabilir; sakin bölüm aramak gerekebilir.",
    "longIntro": [
      "Yenikapı Sahili, İstanbul’un Fatih ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Atış yapılacak bölüm, bisiklet ve koşu hattından ayrılmalıdır.",
      "Rüzgâr yükseldiğinde ince takım kontrolü zorlaşabilir.",
      "Etkinlik alanı bariyerleri ve güvenlik görevlisi talimatlarına uyulmalıdır."
    ],
    "seasonalNotes": [
      "Marmara kıyısında istavrit ve zargana hareketi dönemsel olabilir.",
      "Kefal avında kıyı gürültüsü ve su berraklığı sonucu etkileyebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "bakirkoy-sahili",
    "name": "Bakırköy Sahili",
    "district": "Bakırköy",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Uzun yürüyüş hattı, marina ve iskele çevreleriyle bölünen; ulaşımı kolay fakat kullanım baskısı yüksek Marmara kıyısı.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "Lüfer"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Spin"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Minnow"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Marmaray erişimi",
      "Kafe ve market",
      "Tuvalet seçenekleri",
      "Yürüyüş ve bisiklet yolu"
    ],
    "cautions": [
      "Marina ve iskele güvenlik alanları",
      "Bisiklet yolu",
      "Kıyı rüzgârı",
      "Kalabalıkta atış riski"
    ],
    "lat": 40.9704,
    "lng": 28.8742,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/bakirkoy-sahili.svg",
    "socialImage": "/images/social/meralar/bakirkoy-sahili.webp",
    "navigationNote": "Bağlantılar Bakırköy Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Düzenlenmiş sahil, taş tahkimat ve marina çevresi gibi farklı kıyı tipleri bulunur; işletme alanları dışında kalınmalıdır.",
    "transport": "Marmaray, otobüs, minibüs ve deniz ulaşımı seçenekleri vardır. Araçla gelişte hafta sonu otopark yoğunluğu görülür.",
    "crowdNote": "Sabah spor saatleri, gün batımı ve hafta sonları belirgin biçimde kalabalıktır.",
    "longIntro": [
      "Bakırköy Sahili, İstanbul’un Bakırköy ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Marina girişleri, iskele operasyonu ve yüzme alanlarından uzak durulmalıdır.",
      "Atış yönü yürüyüş yoluna dönük olmamalıdır.",
      "Kıyı boyunca yer değiştirirken takımlar kapalı ve iğneler sabitlenmiş taşınmalıdır."
    ],
    "seasonalNotes": [
      "İstavrit sürüleri kıyıda kısa süre kalabilir; çapari derinliği değiştirilebilir.",
      "Lüfer hareketi yem balığına bağlıdır ve her dönemde kıyıdan erişilebilir değildir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "buyukcekmece-sahili",
    "name": "Büyükçekmece Sahili",
    "district": "Büyükçekmece",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Körfez ve açık Marmara etkisinin bir arada görüldüğü, uzun kıyı hattında farklı zeminler barındıran batı İstanbul rotası.",
    "fish": [
      "Kefal",
      "İstavrit",
      "Levrek",
      "Zargana"
    ],
    "methods": [
      "Şamandıra",
      "Spin",
      "Dip oltası"
    ],
    "baits": [
      "Ekmek",
      "Karides",
      "Silikon yem",
      "Kurt"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Sahil tesisleri",
      "Market ve yeme içme",
      "Yürüyüş alanı",
      "Bazı bölümlerde otopark"
    ],
    "cautions": [
      "Yüzme alanları",
      "Kıyı boyunca değişen zemin",
      "Rüzgâr ve dalga",
      "Dere ağzı su kalitesi değişimi"
    ],
    "lat": 41.018,
    "lng": 28.582,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/buyukcekmece-sahili.svg",
    "socialImage": "/images/social/meralar/buyukcekmece-sahili.webp",
    "navigationNote": "Bağlantılar Büyükçekmece Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Kumsal, taş tahkimat ve düzenlenmiş sahil bölümleri bulunabilir; dere ağızları ve köprü çevreleri ayrıca değerlendirilmelidir.",
    "transport": "Metrobüs ve otobüs bağlantılarından sonra kıyıya yaya veya yerel ulaşım gerekebilir. Araç erişimi merkez dışındaki bölümlerde kolaylaşabilir.",
    "crowdNote": "Yaz ayları, gün batımı ve hafta sonlarında sahil kullanımı belirgin şekilde artar.",
    "longIntro": [
      "Büyükçekmece Sahili, İstanbul’un Büyükçekmece ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Yüzme sezonunda olta atılabilecek sakin ve izinli bölüm önceden keşfedilmelidir.",
      "Dere ağzına yakın avda yağış sonrası su koşulu gözlenmelidir.",
      "Uzun sahil hattında tek bir koordinata bağlı kalmadan güvenli kıyı cepleri değerlendirilmelidir."
    ],
    "seasonalNotes": [
      "Levrek ihtimali dere ağzı, dalga ve yem balığı varlığıyla ilişkilidir; garanti değildir.",
      "Kefal ve zargana için yüzey davranışı ve kıyıdaki besin hareketi izlenebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "silivri-sahili",
    "name": "Silivri Sahili",
    "district": "Silivri",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "İstanbul’un batısında daha açık Marmara koşullarına maruz kalan, liman ve şehir sahili çevresinde planlama gerektiren rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Levrek",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Silikon yem",
      "Karides",
      "Ekmek"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Orta",
    "amenities": [
      "Merkezde market ve yeme içme",
      "Otopark seçenekleri",
      "Sahil yürüyüş alanı"
    ],
    "cautions": [
      "Açık Marmara rüzgârı",
      "Liman güvenlik sınırları",
      "Mendirekte kaygan taş",
      "Gece dönüş ulaşımı"
    ],
    "lat": 41.0736,
    "lng": 28.246,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/silivri-sahili.svg",
    "socialImage": "/images/social/meralar/silivri-sahili.webp",
    "navigationNote": "Bağlantılar Silivri Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Liman, mendirek ve şehir sahili etrafında taşlık ve düzenlenmiş kıyı bölümleri görülür; liman işletme alanlarına girilmemelidir.",
    "transport": "İstanbul merkezden bölgesel otobüs veya özel araçla ulaşım daha pratiktir. Dönüş saati toplu taşıma kullananlar için önceden kontrol edilmelidir.",
    "crowdNote": "Yaz akşamları ve hafta sonlarında merkez sahil yoğunlaşabilir; kışın rüzgâr ve soğuk daha belirleyicidir.",
    "longIntro": [
      "Silivri Sahili, İstanbul’un Silivri ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Mendirek veya taşlık alana tek başına ve dalgalı havada girilmemelidir.",
      "Liman giriş-çıkış hattına misina uzatılmamalıdır.",
      "Uzun yol planında yedek kıyafet ve dönüş saati hesaba katılmalıdır."
    ],
    "seasonalNotes": [
      "Rüzgâr yönü ve dalga kıyı avını güçlü biçimde etkileyebilir.",
      "İstavrit ve zargana hareketi mevsime göre; levrek ihtimali ise kıyı yapısı ve dalgaya göre değişir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "tarabya-sahili",
    "name": "Tarabya Sahili",
    "district": "Sarıyer",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Boğaz’ın üst bölümünde koy etkisi, güçlü akıntı ve yoğun sahil kullanımıyla dikkat isteyen klasik kıyı rotası.",
    "fish": [
      "İstavrit",
      "Lüfer",
      "Palamut",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Şamandıra"
    ],
    "baits": [
      "Suni çapari",
      "Minnow",
      "Kaşık",
      "Balık şeridi"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Otobüs erişimi",
      "Yakın kafe ve market",
      "Aydınlatılmış sahil"
    ],
    "cautions": [
      "Boğaz akıntısı",
      "Tekne ve yat trafiği",
      "Dar yaya alanı",
      "Bağlama halatları"
    ],
    "lat": 41.1382,
    "lng": 29.0506,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/tarabya-sahili.svg",
    "socialImage": "/images/social/meralar/tarabya-sahili.webp",
    "navigationNote": "Bağlantılar Tarabya Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Koy içi ve Boğaz’a açık kıyı bölümlerinde akıntı karakteri farklılaşır; iskele ve bağlama alanları dışında kalınmalıdır.",
    "transport": "Otobüs hatları ana erişim seçeneğidir. Sahil boyunca duraklar olsa da yoğun saatlerde yol süresi uzayabilir.",
    "crowdNote": "Hafta sonu, gün batımı ve restoran yoğunluğu olan saatlerde kıyı kalabalıklaşır.",
    "longIntro": [
      "Tarabya Sahili, İstanbul’un Sarıyer ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Kıyıdaki tekne bağlama alanlarında olta açılmamalıdır.",
      "Spin atışı için arkadaki yaya akışı sürekli kontrol edilmelidir.",
      "Akıntıda takımın komşu misinalara sürüklenmesi engellenmelidir."
    ],
    "seasonalNotes": [
      "Göçmen türlerin hareketi Boğaz’daki yem balığı ve akıntıya bağlıdır.",
      "Koy içindeki daha sakin su ile açık Boğaz hattı aynı takım ağırlığını gerektirmeyebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "istinye-sahili",
    "name": "İstinye Sahili",
    "district": "Sarıyer",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Koy, marina ve Boğaz geçişinin bir arada olduğu; işletme sınırlarına dikkat edilmesi gereken ulaşılabilir kıyı bölgesi.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Lüfer",
      "Zargana"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Spin"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Minnow"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Otobüs ve deniz ulaşımı",
      "Yakın market ve yeme içme",
      "Aydınlatma"
    ],
    "cautions": [
      "Marina güvenlik bölgesi",
      "Vapur ve tekne hareketi",
      "Dar kıyı bölümleri",
      "Koy içi su kalitesi değişimi"
    ],
    "lat": 41.1137,
    "lng": 29.0614,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/istinye-sahili.svg",
    "socialImage": "/images/social/meralar/istinye-sahili.webp",
    "navigationNote": "Bağlantılar İstinye Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "İstinye Koyu içinde daha sakin, Boğaz’a yakın bölümlerde daha akıntılı su görülebilir. Marina ve iskele alanları özel kurallara tabidir.",
    "transport": "Otobüs, minibüs ve İstinye deniz ulaşımı seçenekleri vardır; iskele alanında personel talimatlarına uyulmalıdır.",
    "crowdNote": "Hafta içi iş çıkışı, hafta sonu ve alışveriş yoğunluğu saatlerinde çevre trafiği artar.",
    "longIntro": [
      "İstinye Sahili, İstanbul’un Sarıyer ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "İskele operasyon alanında av yapılmamalıdır.",
      "Koy içindeki bağlama halatları ve su altı engelleri takım kaybına yol açabilir.",
      "Kıyı kullanımının yoğun olduğu saatlerde av yerine keşif yapılması daha güvenlidir."
    ],
    "seasonalNotes": [
      "Kefal koy içindeki sakin bölümlerde; istavrit ve göçmen türler akıntıya açık hatta raporlanabilir.",
      "Yağış sonrası koy içi su rengi ve yüzey birikimi değişebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "rumeli-kavagi",
    "name": "Rumeli Kavağı Kıyıları",
    "district": "Sarıyer",
    "province": "İstanbul",
    "zone": "Avrupa Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Boğaz’ın Karadeniz’e açılan üst kesiminde, güçlü akıntı ve değişken hava koşullarıyla daha dikkatli hazırlık isteyen rota.",
    "fish": [
      "İstavrit",
      "Lüfer",
      "Palamut",
      "Mezgit"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Kaşık",
      "Minnow",
      "Karides"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Orta",
    "amenities": [
      "Yerleşim içinde market ve yeme içme",
      "Otobüs bağlantısı",
      "Bazı deniz seferleri"
    ],
    "cautions": [
      "Güçlü akıntı",
      "Ani hava değişimi",
      "Kayalık ve kaygan zemin",
      "Dönüş ulaşımının seyrekleşmesi"
    ],
    "lat": 41.1818,
    "lng": 29.0746,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/rumeli-kavagi.svg",
    "socialImage": "/images/social/meralar/rumeli-kavagi.webp",
    "navigationNote": "Bağlantılar Rumeli Kavağı Kıyıları çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "İskele, liman ve kayalık kıyı cepleri bulunur; Boğaz çıkışına yakınlık nedeniyle akıntı ve dalga daha sert hissedilebilir.",
    "transport": "Otobüs ve sınırlı deniz ulaşımı seçenekleri vardır. Dönüş seferi ve son otobüs saati önceden kontrol edilmelidir.",
    "crowdNote": "Yaz hafta sonları ve balık hareketi duyulduğunda küçük kıyı alanları hızla dolabilir.",
    "longIntro": [
      "Rumeli Kavağı Kıyıları, İstanbul’un Sarıyer ilçesinde avrupa yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Hava tahmini yalnızca İstanbul merkez için değil Boğaz kuzeyi için kontrol edilmelidir.",
      "Kayalık bölümlerde kaymaz ayakkabı ve uygun aydınlatma kullanılmalıdır.",
      "İskele ve balıkçı barınağı işletme alanlarına girilmemelidir."
    ],
    "seasonalNotes": [
      "Boğaz göçü dönemlerinde palamut ve lüfer beklentisi artabilir fakat kıyı erişimi sürekli değildir.",
      "Dip türleri için zemin ve akıntı takım kaybını artırabilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "uskudar-salacak-sahili",
    "name": "Üsküdar–Salacak Sahili",
    "district": "Üsküdar",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Kız Kulesi manzarası, Boğaz akıntısı ve çok yoğun yaya kullanımıyla güvenli atış alanı seçiminin kritik olduğu şehir içi kıyı.",
    "fish": [
      "İstavrit",
      "Lüfer",
      "Zargana",
      "Kefal"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Şamandıra"
    ],
    "baits": [
      "Suni çapari",
      "Minnow",
      "Balık şeridi",
      "Ekmek"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Zor",
    "amenities": [
      "Metro ve Marmaray",
      "Vapur bağlantıları",
      "Yakın market ve yeme içme",
      "Aydınlatma"
    ],
    "cautions": [
      "Çok yoğun yaya trafiği",
      "Boğaz akıntısı",
      "Vapur ve tekne hattı",
      "Kıyı duvarı yüksekliği"
    ],
    "lat": 41.0108,
    "lng": 29.015,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/uskudar-salacak-sahili.svg",
    "socialImage": "/images/social/meralar/uskudar-salacak-sahili.webp",
    "navigationNote": "Bağlantılar Üsküdar–Salacak Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Düzenlenmiş taş kıyı ve korkuluklu bölümler bulunur; kıyı yüksekliği ve yaya hattı bölümden bölüme değişir.",
    "transport": "Marmaray, metro, vapur, otobüs ve minibüs seçenekleriyle İstanbul’un en kolay erişilen kıyılarındandır.",
    "crowdNote": "Turistik saatler, gün batımı ve hafta sonlarında atış için güvenli boşluk bulmak zorlaşabilir.",
    "longIntro": [
      "Üsküdar–Salacak Sahili, İstanbul’un Üsküdar ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Kalabalıkta spin veya savurma atışı yapılmamalıdır.",
      "Vapur yaklaşım hattına ve iskele sınırlarına misina uzatılmamalıdır.",
      "Kıyı duvarından balık almak için uygun kepçe gereksinimi önceden düşünülmelidir."
    ],
    "seasonalNotes": [
      "İstavrit sürüleri farklı derinliklerde gezebilir.",
      "Lüfer ve zargana hareketi yem balığına, akıntıya ve mevsime bağlıdır."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "kadikoy-moda-sahili",
    "name": "Kadıköy–Moda Sahili",
    "district": "Kadıköy",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Uzun yürüyüş ve park hattı içinde farklı kıyı cepleri bulunan, erişimi kolay fakat sosyal kullanım baskısı yüksek rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "Lüfer"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Spin"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Minnow"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Zor",
    "amenities": [
      "Metro ve vapur",
      "Kafe ve market",
      "Park ve aydınlatma",
      "Tuvalet seçenekleri çevrede"
    ],
    "cautions": [
      "Piknik ve yaya yoğunluğu",
      "Bisiklet ve koşu hattı",
      "İskele güvenlik sınırları",
      "Kıyı taşlarında kayma"
    ],
    "lat": 40.981,
    "lng": 29.025,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/kadikoy-moda-sahili.svg",
    "socialImage": "/images/social/meralar/kadikoy-moda-sahili.webp",
    "navigationNote": "Bağlantılar Kadıköy–Moda Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Taş tahkimat, park kıyısı ve iskele çevresi gibi farklı zeminler vardır; iskele ve yüzme kullanılan bölümler ayrılmalıdır.",
    "transport": "Metro, vapur, otobüs ve tramvay bağlantılarıyla Kadıköy merkezden; Moda’ya tramvay veya yürüyüşle ulaşılabilir.",
    "crowdNote": "Gün boyu yoğun, akşam ve hafta sonu çok yoğun olabilir. Piknik ve spor alanları atış koridorunu daraltır.",
    "longIntro": [
      "Kadıköy–Moda Sahili, İstanbul’un Kadıköy ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Atış yapılacak bölüm açıkça güvenli değilse takım açılmamalıdır.",
      "Kıyı boyunca yürürken iğne ve kurşun sabitlenmelidir.",
      "Gece yoğunluğunda misina görünürlüğü azalacağı için çevre kontrolü sıklaştırılmalıdır."
    ],
    "seasonalNotes": [
      "Marmara kıyısında kefal ve zargana yüzeye yakın; istavrit farklı katmanlarda görülebilir.",
      "Lüfer beklentisi göç ve yem balığı koşullarına bağlıdır."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "bostanci-sahili",
    "name": "Bostancı Sahili",
    "district": "Kadıköy",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "İskele ve uzun sahil parkı çevresinde, ulaşımı güçlü ancak deniz ulaşımı ve yaya yoğunluğu nedeniyle bölge seçimi gerektiren rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "İzmarit"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Kurt"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Marmaray ve deniz ulaşımı",
      "Market ve kafe",
      "Park ve yürüyüş yolu",
      "Aydınlatma"
    ],
    "cautions": [
      "İskele ve vapur trafiği",
      "Kalabalık park alanı",
      "Bisiklet yolu",
      "Kıyı rüzgârı"
    ],
    "lat": 40.953,
    "lng": 29.094,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/bostanci-sahili.svg",
    "socialImage": "/images/social/meralar/bostanci-sahili.webp",
    "navigationNote": "Bağlantılar Bostancı Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "İskele çevresi, taş tahkimat ve park kıyısı farklı kullanım kurallarına sahiptir; vapur operasyon alanından uzak durulmalıdır.",
    "transport": "Marmaray, metro bağlantılı otobüsler, minibüsler ve deniz ulaşımı kullanılabilir.",
    "crowdNote": "İskele sefer saatleri, hafta sonu ve park kullanımı sırasında yoğunluk artar.",
    "longIntro": [
      "Bostancı Sahili, İstanbul’un Kadıköy ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "İskele giriş çıkışına yakın bölümlerde olta açılmamalıdır.",
      "Şamandıra veya hafif takım akıntı ve rüzgâra göre ayarlanmalıdır.",
      "Yolcu yoğunluğu artınca kıyıdaki daha sakin bölüme geçilmelidir."
    ],
    "seasonalNotes": [
      "İstavrit ve izmarit için kıyıdaki derinlik; kefal ve zargana için yüzey hareketi önemlidir.",
      "Rüzgârlı havada hafif takımlar kontrolünü kaybedebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "maltepe-sahili",
    "name": "Maltepe Sahili",
    "district": "Maltepe",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Geniş dolgu parkı ve uzun kıyı hattıyla erişimi rahat, fakat etkinlik ve rekreasyon yoğunluğuna göre alan seçimi gerektiren rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "İzmarit"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Kurt"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Marmaray erişimi",
      "Geniş park alanı",
      "Yeme içme ve tuvalet seçenekleri",
      "Bisiklet yolu"
    ],
    "cautions": [
      "Etkinlik kaynaklı kapanma",
      "Uzun taş tahkimat",
      "Bisiklet ve yaya trafiği",
      "Açık Marmara rüzgârı"
    ],
    "lat": 40.9338,
    "lng": 29.1293,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/maltepe-sahili.svg",
    "socialImage": "/images/social/meralar/maltepe-sahili.webp",
    "navigationNote": "Bağlantılar Maltepe Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Geniş dolgu alanının denize bakan taş tahkimatında kıyı yüksekliği ve zemin düzeni değişebilir.",
    "transport": "Marmaray ve otobüslerden sonra sahile yürüyüş veya yerel ulaşım gerekir. Araç parkı etkinlik günlerinde zorlaşabilir.",
    "crowdNote": "Büyük etkinlikler, hafta sonları ve akşam saatlerinde dolgu alanı çok yoğun olabilir.",
    "longIntro": [
      "Maltepe Sahili, İstanbul’un Maltepe ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Etkinlik takvimi ve geçici bariyerler kontrol edilmelidir.",
      "Taş tahkimatta balık almak için kepçe ve güvenli ayakkabı gerekebilir.",
      "Bisiklet yolunun üzerinden takım taşınırken iğneler kapatılmalıdır."
    ],
    "seasonalNotes": [
      "İstavrit hareketi kıyıdan kıyıya değişebilir; uzun hat farklı derinlikleri deneme olanağı verir.",
      "Kefal ve zargana için sakin hava ve yüzey hareketi izlenebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "kartal-sahili",
    "name": "Kartal Sahili",
    "district": "Kartal",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Adalar manzaralı uzun Marmara kıyısında, taş tahkimat ve park kullanımının birlikte değerlendirildiği şehir içi rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "Mezgit"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Boru kurdu"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Marmaray ve metro bağlantısı",
      "Park ve yürüyüş yolu",
      "Market ve kafe",
      "Aydınlatma"
    ],
    "cautions": [
      "Kıyı yüksekliği",
      "Bisiklet yolu",
      "Açık rüzgâr",
      "Yaya yoğunluğu"
    ],
    "lat": 40.8928,
    "lng": 29.1875,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/kartal-sahili.svg",
    "socialImage": "/images/social/meralar/kartal-sahili.webp",
    "navigationNote": "Bağlantılar Kartal Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Park kıyısı ve taş tahkimat geniş bir hatta uzanır; bazı bölümlerde kıyı yüksekliği balığı alma aşamasını zorlaştırabilir.",
    "transport": "Marmaray, metro, otobüs ve minibüs bağlantıları vardır. Sahile son yaklaşım seçilen bölüme göre yürüyüş gerektirir.",
    "crowdNote": "Hafta sonu, gün batımı ve iyi hava koşullarında park alanları yoğunlaşır.",
    "longIntro": [
      "Kartal Sahili, İstanbul’un Kartal ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Kepçe uzunluğu kıyı yüksekliğine göre seçilmelidir.",
      "Dip takımında taş ve yosun ihtimali hesaba katılmalıdır.",
      "Kalabalıkta uzun savurma atışından kaçınılmalıdır."
    ],
    "seasonalNotes": [
      "Mezgit ve diğer dip türleri için kıyı derinliği ve zemin belirleyicidir.",
      "İstavrit sürüleri kısa süreli yaklaşabilir; farklı su katmanları denenebilir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "pendik-sahili",
    "name": "Pendik Sahili",
    "district": "Pendik",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Marina, iskele ve uzun sahil hattının bir arada bulunduğu; işletme sınırları ile açık kıyı bölümlerinin ayrılması gereken rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Zargana",
      "Mezgit"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Ekmek",
      "Karides",
      "Boru kurdu"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Marmaray ve deniz ulaşımı",
      "Market ve yeme içme",
      "Park ve aydınlatma"
    ],
    "cautions": [
      "Marina ve iskele güvenliği",
      "Tekne trafiği",
      "Yaya ve bisiklet yolu",
      "Taşlık kıyı"
    ],
    "lat": 40.8752,
    "lng": 29.2322,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/pendik-sahili.svg",
    "socialImage": "/images/social/meralar/pendik-sahili.webp",
    "navigationNote": "Bağlantılar Pendik Sahili çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "Marina ve iskele çevresinde özel işletme alanları; açık sahilde taş tahkimat ve park kıyısı bulunur.",
    "transport": "Marmaray, otobüs, minibüs ve deniz ulaşımı seçenekleri vardır. Marina çevresinde araç trafiği yoğunlaşabilir.",
    "crowdNote": "İskele seferleri, marina etkinlikleri ve hafta sonu sahil kullanımı yoğunluğu artırır.",
    "longIntro": [
      "Pendik Sahili, İstanbul’un Pendik ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Marina ve iskele operasyon alanına girilmemelidir.",
      "Tekne rotasına uzanan misina derhal toplanmalıdır.",
      "Açık sahil bölümlerinde dahi yerel tabela ve yasaklar kontrol edilmelidir."
    ],
    "seasonalNotes": [
      "İstavrit ve zargana dönemsel; kefal kıyı içlerinde raporlanabilir.",
      "Dip avında zemin ve derinlik bölümden bölüme değişir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "anadolu-kavagi",
    "name": "Anadolu Kavağı Kıyıları",
    "district": "Beykoz",
    "province": "İstanbul",
    "zone": "Anadolu Yakası",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Boğaz’ın Karadeniz çıkışına yakın, güçlü akıntı ve ulaşım saatleri nedeniyle gün planı isteyen kuzey kıyı rotası.",
    "fish": [
      "İstavrit",
      "Lüfer",
      "Palamut",
      "Mezgit"
    ],
    "methods": [
      "Çapari",
      "Spin",
      "Dip oltası"
    ],
    "baits": [
      "Suni çapari",
      "Kaşık",
      "Minnow",
      "Karides"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Orta",
    "amenities": [
      "Vapur ve otobüs erişimi",
      "Yerleşim içinde yeme içme",
      "Market seçenekleri"
    ],
    "cautions": [
      "Güçlü akıntı",
      "Kayalık zemin",
      "İskele ve barınak sınırları",
      "Seyrek dönüş seferleri"
    ],
    "lat": 41.1744,
    "lng": 29.088,
    "locationPrecision": "Genel bölge",
    "verification": "Editör araştırması",
    "updatedAt": "2026-07-18",
    "publishedAt": "2026-07-18",
    "confidence": "C",
    "image": "/images/meralar/anadolu-kavagi.svg",
    "socialImage": "/images/social/meralar/anadolu-kavagi.webp",
    "navigationNote": "Bağlantılar Anadolu Kavağı Kıyıları çevresindeki genel kamusal erişim bölgesine yönlendirir. İskele, liman, güvenlik veya etkinlik alanı sınırları yerinde kontrol edilmelidir.",
    "shoreProfile": "İskele, balıkçı barınağı ve kayalık kıyı cepleri bulunur; işletme alanları ve kaygan zemin dikkatle ayrılmalıdır.",
    "transport": "Otobüs ve Şehir Hatları seferleri kullanılabilir. Dönüş seferinin kaçırılması ciddi zaman kaybı yaratabileceğinden saatler önceden kontrol edilmelidir.",
    "crowdNote": "Yaz hafta sonları ve turistik saatlerde küçük yerleşim hızlı biçimde kalabalıklaşır.",
    "longIntro": [
      "Anadolu Kavağı Kıyıları, İstanbul’un Beykoz ilçesinde anadolu yakası kıyı balıkçılığı için araştırılan rotalardan biridir. Bu dosya, kıyının genel karakterini, ulaşım seçeneklerini, raporlanan balık türlerini ve av öncesi kontrol edilmesi gereken güvenlik başlıklarını tek sayfada toplar.",
      "İstanbul kıyılarında sonuç; Boğaz akıntısı, Marmara’daki su hareketi, yem balığı sürüleri, rüzgâr yönü ve kıyı yoğunluğu nedeniyle saatler içinde değişebilir. Bu nedenle sayfadaki tür ve yöntem listesi av garantisi değil, hazırlık çerçevesidir."
    ],
    "planningNotes": [
      "Son dönüş vapuru veya otobüsü önceden not edilmelidir.",
      "Balıkçı barınağı faaliyet alanı ve bağlama halatlarından uzak durulmalıdır.",
      "Karadeniz çıkışındaki hava değişimi için yedek kuru kıyafet bulundurulmalıdır."
    ],
    "seasonalNotes": [
      "Göç döneminde lüfer ve palamut beklentisi artabilir; duyumla hareket edilmemeli, saha koşulu doğrulanmalıdır.",
      "Dip türleri için güçlü akıntıya dayanıklı fakat kamış sınırını aşmayan takım seçilmelidir."
    ],
    "sources": [
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Boy, adet, yöntem ve yer sınırlamaları için güncel resmî kaynak."
      },
      {
        "label": "Şehir Hatları iskele ve yolculuk bilgileri",
        "url": "https://sehirhatlari.istanbul/tr/iskeleler",
        "note": "İskele erişimi ve toplu taşıma planı için kurumsal ulaşım kaynağı; iskele işletme alanında personel talimatı geçerlidir."
      }
    ]
  },
  {
    "slug": "sarkoy-merkez-sahili",
    "name": "Şarköy Merkez Sahili",
    "district": "Şarköy",
    "province": "Tekirdağ",
    "zone": "Tekirdağ",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Uzun açık kıyı şeridi, rüzgâr etkisi ve yazın yoğunlaşan plaj kullanımı nedeniyle saat ve kıyı cebi seçimi isteyen Marmara rotası.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Levrek",
      "Mezgit",
      "Lüfer",
      "Palamut"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası",
      "At-çek"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Ekmek",
      "Suni çapari",
      "Kaşık"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Sahil yolu",
      "Yakın market ve kafe",
      "Toplu taşıma",
      "Mevsimsel plaj hizmetleri"
    ],
    "cautions": [
      "Kuvvetli rüzgâr ve yanal akıntı",
      "Yazın yüzme alanları ve sörf kullanıcıları",
      "Balıkçı barınağı operasyon sahasına girmeme",
      "Islak taş ve beton yüzeyler"
    ],
    "lat": 40.614,
    "lng": 27.113,
    "locationPrecision": "Genel bölge",
    "verification": "Resmî kıyı, tür ve mevzuat kaynaklarıyla masa başı doğrulama",
    "updatedAt": "2026-07-28",
    "publishedAt": "2026-07-28",
    "confidence": "C",
    "image": "/images/meralar/sarkoy-merkez-sahili.svg",
    "socialImage": "/images/meralar/sarkoy-merkez-sahili.svg",
    "navigationNote": "Navigasyon Şarköy merkezindeki kamusal sahil bandına yönlendirir. Balıkçı barınağının giriş-çıkış hattı, yüzme alanları ve sörf parkurları dışında güvenli bir kıyı cebi yerinde seçilmelidir.",
    "shoreProfile": "Şarköy’ün uzun kıyısında kumlu plaj, düzenlenmiş sahil bandı ve yer yer taş-beton kıyı cepleri görülür. İlçenin rüzgâr sörfüyle anılması, özellikle öğleden sonra rüzgâr ve yanal sürüklenme riskinin ciddiye alınmasını gerektirir.",
    "transport": "Tekirdağ ve çevre ilçelerden karayoluyla erişilir. Merkez sahilinde yürüyüş mesafesinde hizmet noktaları bulunur; yaz trafiği ve park yoğunluğu hesaba katılmalıdır.",
    "crowdNote": "Yaz günleri, hafta sonları ve gün batımı saatlerinde plaj ve yürüyüş yolu yoğunlaşır. Atış alanı boş değilse olta kurulmamalıdır.",
    "longIntro": [
      "Şarköy Merkez Sahili, 60 kilometrelik ilçe kıyısının kent merkezine denk gelen kamusal bölümünü ele alır. Resmî kaynaklar ilçede merkez, Mürefte ve Hoşköy’de faal balıkçı barınakları bulunduğunu; kıyı boyunca istavrit, kefal, levrek, mezgit, lüfer ve palamut gibi türlerin avcılığının yapıldığını bildirir.",
      "Bu kayıt aktif barınak veya tekne operasyon alanını avlak olarak göstermemektedir. Koordinat yalnızca merkez sahil bandını işaret eder; av yapılabilecek bölüm yüzme, sörf, etkinlik ve güvenlik sınırları yerinde görülerek seçilmelidir."
    ],
    "planningNotes": [
      "Rüzgâr tahmini yalnız hız değil yön bakımından da kontrol edilmelidir; kıyıya paralel kuvvetli rüzgâr hafif takımı hızla sürükleyebilir.",
      "Yazın yüzme sınır şamandıraları ve plaj kullanıcıları varken uzun mesafeli atış yapılmamalıdır.",
      "Barınak ağzı, bağlama halatları ve tekne manevra koridoru tamamen boş bırakılmalıdır."
    ],
    "seasonalNotes": [
      "İstavrit ve palamut gibi gezici türlerin kıyıya gelişi yem balığı ve su hareketine bağlıdır; resmî tür listesi günlük av garantisi değildir.",
      "Soğuk ve rüzgârlı dönemlerde dalga beton kıyıya vurabilir; ilk keşif gündüz yapılmalıdır."
    ],
    "sources": [
      {
        "label": "Tekirdağ Valiliği – Deniz Turizmi",
        "url": "https://www.tekirdag.gov.tr/deniz-turizmi",
        "note": "Şarköy kıyısının uzunluğu, plaj karakteri ve Hoşköy balıkçılık bağlamı için resmî kaynak."
      },
      {
        "label": "Şarköy Kaymakamlığı – Su ürünleri ve rüzgâr sörfü bilgileri",
        "url": "https://www.sarkoy.gov.tr/ruzgar-sorfu",
        "note": "İlçedeki faal barınaklar, kooperatifler ve raporlanan türler ile rüzgâr kullanımının yerel önemini açıklar."
      },
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir",
        "note": "1 Eylül 2024–31 Ağustos 2028 dönemi boy, adet, araç ve yer kuralları."
      }
    ]
  },
  {
    "slug": "hoskoy-kamusal-kiyi",
    "name": "Hoşköy Kamusal Kıyısı",
    "district": "Şarköy",
    "province": "Tekirdağ",
    "zone": "Tekirdağ",
    "waterType": "Deniz",
    "region": "Marmara",
    "summary": "Balıkçı barınağıyla iç içe bir yerleşimde, operasyon alanından uzak kamusal kıyı ceplerinin değerlendirildiği rüzgâra açık rota.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Levrek",
      "Mezgit",
      "Lüfer",
      "Uskumru"
    ],
    "methods": [
      "Çapari",
      "Şamandıra",
      "Hafif dip oltası",
      "At-çek"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Ekmek",
      "Suni yem"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Orta",
    "amenities": [
      "Yerleşim içi market",
      "Kıyı yolu",
      "Yakın yeme-içme noktaları"
    ],
    "cautions": [
      "Aktif balıkçı barınağı ve tekne manevrası",
      "Bağlama halatları ve ağ donanımı",
      "Rüzgâr ve ani dalga",
      "Dar kıyı ceplerinde kullanıcı çatışması"
    ],
    "lat": 40.748,
    "lng": 27.283,
    "locationPrecision": "Genel bölge",
    "verification": "Resmî barınak, turizm ve ilçe tür kaynaklarıyla masa başı doğrulama",
    "updatedAt": "2026-07-28",
    "publishedAt": "2026-07-28",
    "confidence": "C",
    "image": "/images/meralar/hoskoy-kamusal-kiyi.svg",
    "socialImage": "/images/meralar/hoskoy-kamusal-kiyi.svg",
    "navigationNote": "Koordinat Hoşköy yerleşiminin genel kamusal kıyısını gösterir. Balıkçı barınağının mendirek, rıhtım, tekne giriş-çıkış ve kooperatif çalışma alanları av noktası değildir.",
    "shoreProfile": "Yerleşim kıyısında küçük plaj ve taşlı cepler, düzenlenmiş bölümler ve barınak yapıları kısa mesafede birbirini izler. Güvenli alan seçimi kıyı genişliği ve tekne faaliyetine bağlıdır.",
    "transport": "Şarköy–Mürefte kıyı yolu üzerinden ulaşılır. Yerleşim içinde son yaklaşım yürüyerek yapılmalı; işletme ve kooperatif alanlarına araç bırakılmamalıdır.",
    "crowdNote": "Yazın turistik hareketlilik, diğer dönemlerde ise balıkçı barınağı faaliyeti belirleyicidir. Küçük kıyı cebinde başka kullanıcı varsa atış yapılmamalıdır.",
    "longIntro": [
      "Hoşköy, Tekirdağ Valiliğinin tanımında balık ve zeytinyağıyla bilinen, bölgenin büyük balıkçı barınaklarından birine sahip kıyı yerleşimidir. İlçe kaynakları Şarköy kıyılarında istavrit, kefal, levrek, mezgit, lüfer, uskumru ve palamut gibi türlerin avcılığını bildirir.",
      "Bu sayfa barınağın kendisini değil, barınak operasyonundan ayrılan kamusal kıyı bölümlerini planlama düzeyinde anlatır. Saha doğrulaması yapılmadığından güven seviyesi C’dir; tekne faaliyeti, yerel tabela ve kıyı erişimi her ziyarette yeniden kontrol edilmelidir."
    ],
    "planningNotes": [
      "Mendirek ve rıhtım üzerinde izin varsayımı yapılmamalı; kooperatif veya görevli uyarısı tartışmasız uygulanmalıdır.",
      "Kıyıda ağ, kasa, halat veya tekne ekipmanı varsa alan çalışma sahası kabul edilip uzaklaşılmalıdır.",
      "Rüzgâr yönü dönüş yolunu ve kaygan taş riskini artırabileceğinden kısa gündüz keşfiyle başlanmalıdır."
    ],
    "seasonalNotes": [
      "Göçmen türlerin raporlanması, her gün kıyıda bulunacakları anlamına gelmez; su berraklığı ve yem hareketi izlenmelidir.",
      "Yazın yüzme ve gezi kullanımı arttığında av için sabah erken saatler dahi yerinde güvenlik kontrolü gerektirir."
    ],
    "sources": [
      {
        "label": "Tekirdağ Valiliği – Deniz Turizmi / Hoşköy",
        "url": "https://www.tekirdag.gov.tr/deniz-turizmi",
        "note": "Hoşköy’ün kıyı yerleşimi, balıkçılık kimliği ve büyük balıkçı barınağına ilişkin resmî tanım."
      },
      {
        "label": "Tekirdağ İl Tarım ve Orman Müdürlüğü – Hoşköy Balıkçı Barınağı",
        "url": "https://tekirdag.tarimorman.gov.tr/Duyuru/348/Tekirdag-Sarkoy-Hoskoy-Balikci-Barinagi-Kiralama-Ilanidir",
        "note": "Barınağın resmî statüsünü ve kooperatif işletme çerçevesini doğrular; operasyon alanından uzak durma gereğinin dayanağıdır."
      },
      {
        "label": "Şarköy Kaymakamlığı – Su ürünleri bilgileri",
        "url": "https://www.sarkoy.gov.tr/ruzgar-sorfu",
        "note": "Şarköy kıyılarında raporlanan türleri ve Hoşköy’deki kooperatif/barınak varlığını listeler."
      },
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir",
        "note": "Güncel amatör avcılık sınırlamaları."
      }
    ]
  },
  {
    "slug": "akcakoca-cuhalli-sahili",
    "name": "Akçakoca Çuhallı Sahili",
    "district": "Akçakoca",
    "province": "Düzce",
    "zone": "Düzce",
    "waterType": "Deniz",
    "region": "Batı Karadeniz",
    "summary": "Siyah kumlu geniş plaj, güçlü Karadeniz dalgası ve yazın yoğun yüzme kullanımı nedeniyle av saatinin dikkatle seçilmesi gereken kent kıyısı.",
    "fish": [
      "İstavrit",
      "Kefal",
      "Mezgit",
      "Barbun",
      "Çinakop",
      "Palamut",
      "Tirsi"
    ],
    "methods": [
      "Çapari",
      "Hafif dip oltası",
      "Şamandıra",
      "At-çek"
    ],
    "baits": [
      "Karides",
      "Hamsi parçası",
      "Ekmek",
      "Suni çapari",
      "Kaşık"
    ],
    "camping": "Uygun değil",
    "vehicleAccess": "Kolay",
    "amenities": [
      "Yeme-içme ve sosyal tesisler",
      "Kent içi ulaşım",
      "Mevsimsel plaj hizmetleri",
      "Yakın market"
    ],
    "cautions": [
      "Karadeniz rip akıntısı ve ani dalga",
      "Yüzme alanında olta atmama",
      "Yazın yoğun plaj kullanımı",
      "Kumda ekipman ve kurşun bırakmama"
    ],
    "lat": 41.092,
    "lng": 31.108,
    "locationPrecision": "Genel bölge",
    "verification": "Resmî plaj, ilçe balıkçılık ve akademik çalışma kaynaklarıyla masa başı doğrulama",
    "updatedAt": "2026-07-28",
    "publishedAt": "2026-07-28",
    "confidence": "C",
    "image": "/images/meralar/akcakoca-cuhalli-sahili.svg",
    "socialImage": "/images/meralar/akcakoca-cuhalli-sahili.svg",
    "navigationNote": "Navigasyon Çuhallı’nın genel sahil bandına yönlendirir. Cankurtaranlı yüzme bölgesi, su sporları alanı ve kalabalık plaj saatlerinde olta kullanılmamalıdır.",
    "shoreProfile": "Çuhallı, yaklaşık bir kilometrelik yüzme alanı ve Akçakoca’ya özgü koyu renkli ince kumuyla kent içindeki en hareketli plajlardan biridir. Kumlu taban açık Karadeniz dalgasına doğrudan maruz kalır.",
    "transport": "Akçakoca ilçe merkezinde bulunur; Düzce’den yaklaşık 38 kilometrelik bölünmüş yol bağlantısı vardır. Kent içi hizmetlere yakın olmakla birlikte yazın park yoğunluğu yüksektir.",
    "crowdNote": "Yaz sezonunda plaj, su sporları ve yürüyüş kullanımı baskındır. Güvenli av penceresi ancak yüzme alanı boşken ve yerel kurallar izin verirken oluşur.",
    "longIntro": [
      "Çuhallı Plajı, Düzce İl Kültür ve Turizm Müdürlüğüne göre Akçakoca merkezindeki en hareketli plajdır; çevresinde sosyal tesisler bulunur ve kıyı siyah inci olarak tanımlanan koyu kum yapısıyla ayrılır. İlçe komisyonu Çuhallı’yı 1000 metrelik, altyapılı ve cankurtaran hizmetli yüzme alanı olarak sınıflandırmıştır.",
      "Akçakoca Valilik kaynağı ilçe denizinde hamsi, mezgit, barbun, çinakop, istavrit, kalkan, palamut, tirsi ve kefalin görüldüğünü bildirir. Bu bölgesel liste kıyıdan günlük av garantisi değildir. Aktif yüzme alanı ile amatör olta kullanımı aynı anda güvenli değildir; koordinat yalnızca genel kıyı erişimini gösterir."
    ],
    "planningNotes": [
      "Denize girme sezonunda cankurtaran ve yüzme sınırı uygulamalarına uyulmalı; plaj kullanımı sürerken olta kurulmamalıdır.",
      "Dalga küçük görünse bile geri çekilen su kum zeminde dengeyi bozabilir; ekipman su çizgisinden geride kurulmalıdır.",
      "Kıyıda kurşun, iğne veya misina parçası bırakılmamalı; özellikle çıplak ayakla kullanılan plajda son alan taraması yapılmalıdır."
    ],
    "seasonalNotes": [
      "Palamut ve çinakop gibi göçmen türler dönemsel olarak raporlanır; tür beyanları mevsim ve sürü hareketine bağlıdır.",
      "Fırtına sonrası bulanıklık ve kıyı kırılması artabilir; dalga tahmini uygun değilse av ertelenmelidir."
    ],
    "sources": [
      {
        "label": "Düzce İl Kültür ve Turizm Müdürlüğü – Çuhallı Plajı",
        "url": "https://duzce.ktb.gov.tr/TR-236588/cuhalli-plaji.html",
        "note": "Plajın kent içi konumu, sosyal tesisleri ve ayırt edici siyah kum özelliği."
      },
      {
        "label": "Akçakoca Kaymakamlığı – Suda boğulmayı önleme komisyon kararı",
        "url": "https://www.akcakoca.gov.tr/ilce-suda-bogulma-olaylarini-onleme-komisyonu-karari",
        "note": "Çuhallı’nın 1000 metrelik yüzme alanı ve kıyı güvenliği sınıflaması."
      },
      {
        "label": "Düzce Valiliği – Akçakoca",
        "url": "https://www.duzce.gov.tr/akcakoca",
        "note": "İlçe ulaşımı, balıkçılık ölçeği ve bölgede en çok görülen balık türleri."
      },
      {
        "label": "Düzce Üniversitesi – Akçakoca balıkçılığı araştırması",
        "url": "https://dergipark.org.tr/tr/pub/duzceod/issue/4820/289188",
        "note": "Akçakoca’da olta balıkçılığı kullanımı ve yerel balıkçılık yapısına ilişkin destekleyici akademik çalışma."
      },
      {
        "label": "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
        "url": "https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir",
        "note": "Güncel boy, adet, araç ve yer sınırlamaları."
      }
    ]
  }
];

export const provinces = [...new Set(meralar.map((mera) => mera.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions = [...new Set(meralar.flatMap((mera) => mera.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const zonesByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts = Object.fromEntries(
  provinces.flatMap((province) => (districtsByProvince[province] || []).map((district: string) => [
    `${province}|${district}`,
    meralar.filter((m) => m.province === province && m.district === district).length,
  ]))
);
