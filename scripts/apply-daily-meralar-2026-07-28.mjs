import fs from 'node:fs';
import path from 'node:path';

const dataPath = path.resolve('src/data/meralar.ts');
let source = fs.readFileSync(dataPath, 'utf8');
const date = '2026-07-28';

const records = [
  {
    slug: 'sarkoy-merkez-sahili', name: 'Şarköy Merkez Sahili', district: 'Şarköy', province: 'Tekirdağ', zone: 'Tekirdağ', waterType: 'Deniz', region: 'Marmara',
    summary: 'Uzun açık kıyı şeridi, rüzgâr etkisi ve yazın yoğunlaşan plaj kullanımı nedeniyle saat ve kıyı cebi seçimi isteyen Marmara rotası.',
    fish: ['İstavrit','Kefal','Levrek','Mezgit','Lüfer','Palamut'], methods: ['Çapari','Şamandıra','Hafif dip oltası','At-çek'], baits: ['Karides','Midye','Ekmek','Suni çapari','Kaşık'],
    camping: 'Uygun değil', vehicleAccess: 'Kolay', amenities: ['Sahil yolu','Yakın market ve kafe','Toplu taşıma','Mevsimsel plaj hizmetleri'],
    cautions: ['Kuvvetli rüzgâr ve yanal akıntı','Yazın yüzme alanları ve sörf kullanıcıları','Balıkçı barınağı operasyon sahasına girmeme','Islak taş ve beton yüzeyler'],
    lat: 40.614, lng: 27.113, locationPrecision: 'Genel bölge', verification: 'Resmî kıyı, tür ve mevzuat kaynaklarıyla masa başı doğrulama', updatedAt: date, publishedAt: date, confidence: 'C',
    image: '/images/meralar/sarkoy-merkez-sahili.svg', socialImage: '/images/meralar/sarkoy-merkez-sahili.svg',
    navigationNote: 'Navigasyon Şarköy merkezindeki kamusal sahil bandına yönlendirir. Balıkçı barınağının giriş-çıkış hattı, yüzme alanları ve sörf parkurları dışında güvenli bir kıyı cebi yerinde seçilmelidir.',
    shoreProfile: 'Şarköy’ün uzun kıyısında kumlu plaj, düzenlenmiş sahil bandı ve yer yer taş-beton kıyı cepleri görülür. İlçenin rüzgâr sörfüyle anılması, özellikle öğleden sonra rüzgâr ve yanal sürüklenme riskinin ciddiye alınmasını gerektirir.',
    transport: 'Tekirdağ ve çevre ilçelerden karayoluyla erişilir. Merkez sahilinde yürüyüş mesafesinde hizmet noktaları bulunur; yaz trafiği ve park yoğunluğu hesaba katılmalıdır.',
    crowdNote: 'Yaz günleri, hafta sonları ve gün batımı saatlerinde plaj ve yürüyüş yolu yoğunlaşır. Atış alanı boş değilse olta kurulmamalıdır.',
    longIntro: ['Şarköy Merkez Sahili, 60 kilometrelik ilçe kıyısının kent merkezine denk gelen kamusal bölümünü ele alır. Resmî kaynaklar ilçede merkez, Mürefte ve Hoşköy’de faal balıkçı barınakları bulunduğunu; kıyı boyunca istavrit, kefal, levrek, mezgit, lüfer ve palamut gibi türlerin avcılığının yapıldığını bildirir.', 'Bu kayıt aktif barınak veya tekne operasyon alanını avlak olarak göstermemektedir. Koordinat yalnızca merkez sahil bandını işaret eder; av yapılabilecek bölüm yüzme, sörf, etkinlik ve güvenlik sınırları yerinde görülerek seçilmelidir.'],
    planningNotes: ['Rüzgâr tahmini yalnız hız değil yön bakımından da kontrol edilmelidir; kıyıya paralel kuvvetli rüzgâr hafif takımı hızla sürükleyebilir.','Yazın yüzme sınır şamandıraları ve plaj kullanıcıları varken uzun mesafeli atış yapılmamalıdır.','Barınak ağzı, bağlama halatları ve tekne manevra koridoru tamamen boş bırakılmalıdır.'],
    seasonalNotes: ['İstavrit ve palamut gibi gezici türlerin kıyıya gelişi yem balığı ve su hareketine bağlıdır; resmî tür listesi günlük av garantisi değildir.','Soğuk ve rüzgârlı dönemlerde dalga beton kıyıya vurabilir; ilk keşif gündüz yapılmalıdır.'],
    sources: [
      {label:'Tekirdağ Valiliği – Deniz Turizmi',url:'https://www.tekirdag.gov.tr/deniz-turizmi',note:'Şarköy kıyısının uzunluğu, plaj karakteri ve Hoşköy balıkçılık bağlamı için resmî kaynak.'},
      {label:'Şarköy Kaymakamlığı – Su ürünleri ve rüzgâr sörfü bilgileri',url:'https://www.sarkoy.gov.tr/ruzgar-sorfu',note:'İlçedeki faal barınaklar, kooperatifler ve raporlanan türler ile rüzgâr kullanımının yerel önemini açıklar.'},
      {label:'6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği',url:'https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir',note:'1 Eylül 2024–31 Ağustos 2028 dönemi boy, adet, araç ve yer kuralları.'}
    ]
  },
  {
    slug: 'hoskoy-kamusal-kiyi', name: 'Hoşköy Kamusal Kıyısı', district: 'Şarköy', province: 'Tekirdağ', zone: 'Tekirdağ', waterType: 'Deniz', region: 'Marmara',
    summary: 'Balıkçı barınağıyla iç içe bir yerleşimde, operasyon alanından uzak kamusal kıyı ceplerinin değerlendirildiği rüzgâra açık rota.',
    fish: ['İstavrit','Kefal','Levrek','Mezgit','Lüfer','Uskumru'], methods: ['Çapari','Şamandıra','Hafif dip oltası','At-çek'], baits: ['Karides','Midye','Ekmek','Suni yem'],
    camping: 'Uygun değil', vehicleAccess: 'Orta', amenities: ['Yerleşim içi market','Kıyı yolu','Yakın yeme-içme noktaları'],
    cautions: ['Aktif balıkçı barınağı ve tekne manevrası','Bağlama halatları ve ağ donanımı','Rüzgâr ve ani dalga','Dar kıyı ceplerinde kullanıcı çatışması'],
    lat: 40.748, lng: 27.283, locationPrecision: 'Genel bölge', verification: 'Resmî barınak, turizm ve ilçe tür kaynaklarıyla masa başı doğrulama', updatedAt: date, publishedAt: date, confidence: 'C',
    image: '/images/meralar/hoskoy-kamusal-kiyi.svg', socialImage: '/images/meralar/hoskoy-kamusal-kiyi.svg',
    navigationNote: 'Koordinat Hoşköy yerleşiminin genel kamusal kıyısını gösterir. Balıkçı barınağının mendirek, rıhtım, tekne giriş-çıkış ve kooperatif çalışma alanları av noktası değildir.',
    shoreProfile: 'Yerleşim kıyısında küçük plaj ve taşlı cepler, düzenlenmiş bölümler ve barınak yapıları kısa mesafede birbirini izler. Güvenli alan seçimi kıyı genişliği ve tekne faaliyetine bağlıdır.',
    transport: 'Şarköy–Mürefte kıyı yolu üzerinden ulaşılır. Yerleşim içinde son yaklaşım yürüyerek yapılmalı; işletme ve kooperatif alanlarına araç bırakılmamalıdır.',
    crowdNote: 'Yazın turistik hareketlilik, diğer dönemlerde ise balıkçı barınağı faaliyeti belirleyicidir. Küçük kıyı cebinde başka kullanıcı varsa atış yapılmamalıdır.',
    longIntro: ['Hoşköy, Tekirdağ Valiliğinin tanımında balık ve zeytinyağıyla bilinen, bölgenin büyük balıkçı barınaklarından birine sahip kıyı yerleşimidir. İlçe kaynakları Şarköy kıyılarında istavrit, kefal, levrek, mezgit, lüfer, uskumru ve palamut gibi türlerin avcılığını bildirir.', 'Bu sayfa barınağın kendisini değil, barınak operasyonundan ayrılan kamusal kıyı bölümlerini planlama düzeyinde anlatır. Saha doğrulaması yapılmadığından güven seviyesi C’dir; tekne faaliyeti, yerel tabela ve kıyı erişimi her ziyarette yeniden kontrol edilmelidir.'],
    planningNotes: ['Mendirek ve rıhtım üzerinde izin varsayımı yapılmamalı; kooperatif veya görevli uyarısı tartışmasız uygulanmalıdır.','Kıyıda ağ, kasa, halat veya tekne ekipmanı varsa alan çalışma sahası kabul edilip uzaklaşılmalıdır.','Rüzgâr yönü dönüş yolunu ve kaygan taş riskini artırabileceğinden kısa gündüz keşfiyle başlanmalıdır.'],
    seasonalNotes: ['Göçmen türlerin raporlanması, her gün kıyıda bulunacakları anlamına gelmez; su berraklığı ve yem hareketi izlenmelidir.','Yazın yüzme ve gezi kullanımı arttığında av için sabah erken saatler dahi yerinde güvenlik kontrolü gerektirir.'],
    sources: [
      {label:'Tekirdağ Valiliği – Deniz Turizmi / Hoşköy',url:'https://www.tekirdag.gov.tr/deniz-turizmi',note:'Hoşköy’ün kıyı yerleşimi, balıkçılık kimliği ve büyük balıkçı barınağına ilişkin resmî tanım.'},
      {label:'Tekirdağ İl Tarım ve Orman Müdürlüğü – Hoşköy Balıkçı Barınağı',url:'https://tekirdag.tarimorman.gov.tr/Duyuru/348/Tekirdag-Sarkoy-Hoskoy-Balikci-Barinagi-Kiralama-Ilanidir',note:'Barınağın resmî statüsünü ve kooperatif işletme çerçevesini doğrular; operasyon alanından uzak durma gereğinin dayanağıdır.'},
      {label:'Şarköy Kaymakamlığı – Su ürünleri bilgileri',url:'https://www.sarkoy.gov.tr/ruzgar-sorfu',note:'Şarköy kıyılarında raporlanan türleri ve Hoşköy’deki kooperatif/barınak varlığını listeler.'},
      {label:'6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği',url:'https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir',note:'Güncel amatör avcılık sınırlamaları.'}
    ]
  },
  {
    slug: 'akcakoca-cuhalli-sahili', name: 'Akçakoca Çuhallı Sahili', district: 'Akçakoca', province: 'Düzce', zone: 'Düzce', waterType: 'Deniz', region: 'Batı Karadeniz',
    summary: 'Siyah kumlu geniş plaj, güçlü Karadeniz dalgası ve yazın yoğun yüzme kullanımı nedeniyle av saatinin dikkatle seçilmesi gereken kent kıyısı.',
    fish: ['İstavrit','Kefal','Mezgit','Barbun','Çinakop','Palamut','Tirsi'], methods: ['Çapari','Hafif dip oltası','Şamandıra','At-çek'], baits: ['Karides','Hamsi parçası','Ekmek','Suni çapari','Kaşık'],
    camping: 'Uygun değil', vehicleAccess: 'Kolay', amenities: ['Yeme-içme ve sosyal tesisler','Kent içi ulaşım','Mevsimsel plaj hizmetleri','Yakın market'],
    cautions: ['Karadeniz rip akıntısı ve ani dalga','Yüzme alanında olta atmama','Yazın yoğun plaj kullanımı','Kumda ekipman ve kurşun bırakmama'],
    lat: 41.092, lng: 31.108, locationPrecision: 'Genel bölge', verification: 'Resmî plaj, ilçe balıkçılık ve akademik çalışma kaynaklarıyla masa başı doğrulama', updatedAt: date, publishedAt: date, confidence: 'C',
    image: '/images/meralar/akcakoca-cuhalli-sahili.svg', socialImage: '/images/meralar/akcakoca-cuhalli-sahili.svg',
    navigationNote: 'Navigasyon Çuhallı’nın genel sahil bandına yönlendirir. Cankurtaranlı yüzme bölgesi, su sporları alanı ve kalabalık plaj saatlerinde olta kullanılmamalıdır.',
    shoreProfile: 'Çuhallı, yaklaşık bir kilometrelik yüzme alanı ve Akçakoca’ya özgü koyu renkli ince kumuyla kent içindeki en hareketli plajlardan biridir. Kumlu taban açık Karadeniz dalgasına doğrudan maruz kalır.',
    transport: 'Akçakoca ilçe merkezinde bulunur; Düzce’den yaklaşık 38 kilometrelik bölünmüş yol bağlantısı vardır. Kent içi hizmetlere yakın olmakla birlikte yazın park yoğunluğu yüksektir.',
    crowdNote: 'Yaz sezonunda plaj, su sporları ve yürüyüş kullanımı baskındır. Güvenli av penceresi ancak yüzme alanı boşken ve yerel kurallar izin verirken oluşur.',
    longIntro: ['Çuhallı Plajı, Düzce İl Kültür ve Turizm Müdürlüğüne göre Akçakoca merkezindeki en hareketli plajdır; çevresinde sosyal tesisler bulunur ve kıyı siyah inci olarak tanımlanan koyu kum yapısıyla ayrılır. İlçe komisyonu Çuhallı’yı 1000 metrelik, altyapılı ve cankurtaran hizmetli yüzme alanı olarak sınıflandırmıştır.', 'Akçakoca Valilik kaynağı ilçe denizinde hamsi, mezgit, barbun, çinakop, istavrit, kalkan, palamut, tirsi ve kefalin görüldüğünü bildirir. Bu bölgesel liste kıyıdan günlük av garantisi değildir. Aktif yüzme alanı ile amatör olta kullanımı aynı anda güvenli değildir; koordinat yalnızca genel kıyı erişimini gösterir.'],
    planningNotes: ['Denize girme sezonunda cankurtaran ve yüzme sınırı uygulamalarına uyulmalı; plaj kullanımı sürerken olta kurulmamalıdır.','Dalga küçük görünse bile geri çekilen su kum zeminde dengeyi bozabilir; ekipman su çizgisinden geride kurulmalıdır.','Kıyıda kurşun, iğne veya misina parçası bırakılmamalı; özellikle çıplak ayakla kullanılan plajda son alan taraması yapılmalıdır.'],
    seasonalNotes: ['Palamut ve çinakop gibi göçmen türler dönemsel olarak raporlanır; tür beyanları mevsim ve sürü hareketine bağlıdır.','Fırtına sonrası bulanıklık ve kıyı kırılması artabilir; dalga tahmini uygun değilse av ertelenmelidir.'],
    sources: [
      {label:'Düzce İl Kültür ve Turizm Müdürlüğü – Çuhallı Plajı',url:'https://duzce.ktb.gov.tr/TR-236588/cuhalli-plaji.html',note:'Plajın kent içi konumu, sosyal tesisleri ve ayırt edici siyah kum özelliği.'},
      {label:'Akçakoca Kaymakamlığı – Suda boğulmayı önleme komisyon kararı',url:'https://www.akcakoca.gov.tr/ilce-suda-bogulma-olaylarini-onleme-komisyonu-karari',note:'Çuhallı’nın 1000 metrelik yüzme alanı ve kıyı güvenliği sınıflaması.'},
      {label:'Düzce Valiliği – Akçakoca',url:'https://www.duzce.gov.tr/akcakoca',note:'İlçe ulaşımı, balıkçılık ölçeği ve bölgede en çok görülen balık türleri.'},
      {label:'Düzce Üniversitesi – Akçakoca balıkçılığı araştırması',url:'https://dergipark.org.tr/tr/pub/duzceod/issue/4820/289188',note:'Akçakoca’da olta balıkçılığı kullanımı ve yerel balıkçılık yapısına ilişkin destekleyici akademik çalışma.'},
      {label:'6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği',url:'https://www.tarimorman.gov.tr/HHGM/Haber/69/Ticari-Amacli-Su-Urunleri-Ve-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Yayimlanmistir',note:'Güncel boy, adet, araç ve yer sınırlamaları.'}
    ]
  }
];

const missing = records.filter((record) => !source.includes(`"slug": "${record.slug}"`) && !source.includes(`slug: '${record.slug}'`));
if (!missing.length) {
  console.log('No new records to insert.');
  process.exit(0);
}
const marker = '\n];\n\nexport const provinces';
if (!source.includes(marker)) throw new Error('Could not locate meralar array closing marker.');
const payload = missing.map((record) => `  ${JSON.stringify(record, null, 2).replaceAll('\n', '\n  ')}`).join(',\n');
source = source.replace(marker, `,\n${payload}\n];\n\nexport const provinces`);
fs.writeFileSync(dataPath, source);

const svgDir = path.resolve('public/images/meralar');
fs.mkdirSync(svgDir, { recursive: true });
for (const record of missing) {
  const subtitle = `${record.district} · ${record.province} · Genel kamusal erişim bölgesi`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc"><title id="title">${record.name} rota görseli</title><desc id="desc">${subtitle}</desc><defs><linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071f27"/><stop offset="1" stop-color="#16758a"/></linearGradient></defs><rect width="1200" height="675" rx="36" fill="url(#sea)"/><path d="M0 455C180 390 320 500 500 430s330-45 700-120v365H0z" fill="#e8d7a7"/><path d="M0 430C180 365 320 475 500 405s330-45 700-120" fill="none" stroke="#d9f2ee" stroke-width="18" opacity=".8"/><g transform="translate(820 185)"><circle r="82" fill="#f6b44a" opacity=".95"/><path d="M-38 0h76M0-38v76" stroke="#0b2630" stroke-width="10" stroke-linecap="round"/></g><path d="M210 405c115-110 220-90 290-15 62 66 118 34 190-58" fill="none" stroke="#f6b44a" stroke-width="18" stroke-linecap="round" stroke-dasharray="8 28"/><circle cx="210" cy="405" r="23" fill="#f6b44a"/><circle cx="690" cy="332" r="23" fill="#f6b44a"/><text x="80" y="115" fill="#fff" font-family="system-ui,sans-serif" font-size="62" font-weight="850">${record.name}</text><text x="84" y="170" fill="#d9ece8" font-family="system-ui,sans-serif" font-size="28">${subtitle}</text><rect x="80" y="535" width="330" height="58" rx="29" fill="#f6b44a"/><text x="245" y="574" text-anchor="middle" fill="#0b2630" font-family="system-ui,sans-serif" font-size="24" font-weight="850">OLTA ATLASI · GÜVEN C</text></svg>`;
  fs.writeFileSync(path.join(svgDir, `${record.slug}.svg`), svg);
}
console.log(`Inserted ${missing.length} verified routes.`);
