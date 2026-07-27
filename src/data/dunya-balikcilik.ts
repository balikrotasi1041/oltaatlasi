export type XSourceKind = "angler" | "charter" | "publisher" | "institution";

export type DunyaBalikcilikYazisi = {
  slug: string;
  title: string;
  country: string;
  location: string;
  species: string;
  angler: string;
  summary: string;
  publishedAt: string;
  observedAt: string;
  sourceCheckedAt: string;
  sourcePlatform: "X" | "YouTube" | "Blog" | string;
  sourceUrl: string;
  sourceLabel: string;
  sourceAuthor: string;
  sourceKind: XSourceKind;
  sourceKindLabel: string;
  isDirectCatch: boolean;
  verificationScore: number;
  verificationNotes: string[];
  cover: string;
  body: string[];
  tags: string[];
  mediaMode: "original-illustration" | "licensed-image" | "youtube-embed" | "source-link-only" | "x-embed";
  xPostId?: string;
  embedUrl?: string;
  licenseName?: string;
  licenseUrl?: string;
  licenseCredit?: string;
  licenseChanges?: string;
};

/**
 * Telif ve doğrulama varsayılanı:
 * - Üçüncü taraf fotoğrafı, videosu veya ekran görüntüsü indirilmez ve yeniden barındırılmaz.
 * - X medyası yalnızca ziyaretçinin açık eylemi sonrasında resmî X widget'ıyla yüklenir.
 * - Kaynak metin uzun biçimde kopyalanmaz; Olta Atlası yalnızca özgün özet ve doğrulama notu yazar.
 * - “Doğrudan av kaydı” ile yayıncı/kurum tarafından aktarılan kayıt birbirinden açıkça ayrılır.
 */

const launchDate = "2026-07-27";
const worldCover = "/images/site/dunyada-balikcilik.svg";

export const dunyaBalikcilikYazilari: DunyaBalikcilikYazisi[] = [
  {
    slug: "texas-rig-ile-buyuk-bas",
    title: "Zor öğlen koşullarında Texas rig ile büyük bas",
    country: "ABD",
    location: "Konum gönderide açıklanmıyor",
    species: "Largemouth bass (gönderi beyanı)",
    angler: "@MattWalshBlog ailesi",
    summary: "Bir balıkçının kızının sıcak, açık ve parlak bir öğleden sonra Texas rig ile şimdiye kadarki en büyük basını yakaladığını anlattığı doğrudan av kaydı.",
    publishedAt: launchDate,
    observedAt: "2025-08-03",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/MattWalshBlog/status/1952049476232683793",
    sourceLabel: "Texas rig ile yakalanan büyük bas gönderisi",
    sourceAuthor: "Matt Walsh (@MattWalshBlog)",
    sourceKind: "angler",
    sourceKindLabel: "Doğrudan balıkçı kaydı",
    isDirectCatch: true,
    verificationScore: 8,
    verificationNotes: ["Gönderi avı birinci kişi/aile anlatımıyla aktarıyor.", "Yöntem Texas rig olarak açıkça belirtiliyor.", "Kesin konum paylaşılmadığı için yer bilgisi genelleştirilmedi."],
    cover: worldCover,
    body: ["Kaynak gönderide balıkçının kızının parlak, sıcak ve açık bir öğleden sonra Texas rig kullanarak kendi en büyük basını yakaladığı belirtiliyor. Olta Atlası, fotoğrafı veya gönderi metnini kopyalamadan yalnızca yöntem ve koşul bilgisini özetliyor.", "Bu kayıt bir tür teşhis raporu değildir. Balık adı ve av koşulları gönderi sahibinin kendi beyanına dayanır; hassas konum bilgisi bulunmadığı için ayrıca tahmin yürütülmemiştir."],
    tags: ["bas", "Texas rig", "aile balıkçılığı", "ABD"],
    mediaMode: "x-embed",
    xPostId: "1952049476232683793"
  },
  {
    slug: "tambor-konger-yilan-baligi",
    title: "Tambor açıklarında konger yılan balığı",
    country: "Kosta Rika",
    location: "Tambor",
    species: "Konger yılan balığı (gönderi beyanı)",
    angler: "Kaptan Tavo Núñez",
    summary: "Kosta Rika'daki bir charter hesabının Tambor bölgesinde Kaptan Tavo Núñez tarafından yakalandığını bildirdiği konger yılan balığı kaydı.",
    publishedAt: launchDate,
    observedAt: "2022-01-14",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/costaricafishin/status/1481998362626908161",
    sourceLabel: "Tambor konger avı gönderisi",
    sourceAuthor: "Costa Rica Fishing (@costaricafishin)",
    sourceKind: "charter",
    sourceKindLabel: "Charter / tekne kaydı",
    isDirectCatch: true,
    verificationScore: 8,
    verificationNotes: ["Avcı ve genel bölge kaynak gönderide adlandırılıyor.", "Gönderi doğrudan balıkçılık hizmeti hesabından yayımlanmış.", "Hassas koordinat paylaşılmıyor."],
    cover: worldCover,
    body: ["Charter hesabı, Tambor çevresindeki avda Kaptan Tavo Núñez'in bir konger yılan balığı yakaladığını bildiriyor. Kayıt, bölgenin kesin av noktasını değil yalnızca genel yer adını taşıyor.", "Olta Atlası bu paylaşımı av garantisi veya tür teşhisi olarak sunmaz. Gönderideki medya X üzerinde kalır; görüntü ancak ziyaretçi açmayı seçerse resmî gömme yöntemiyle yüklenir."],
    tags: ["Kosta Rika", "Tambor", "konger", "tekne avı"],
    mediaMode: "x-embed",
    xPostId: "1481998362626908161"
  },
  {
    slug: "biwa-alabaligi-moja",
    title: "Biwa Gölü'nden Biwa alabalığı kaydı",
    country: "Japonya",
    location: "Biwa Gölü genel bölgesi",
    species: "Biwa alabalığı (gönderi beyanı)",
    angler: "moja (@moja99758134)",
    summary: "Kendisini balıkçılık blog yazarı olarak tanıtan bir kullanıcının kendi Biwa alabalığı avına yönlendirdiği X paylaşımı.",
    publishedAt: launchDate,
    observedAt: "2026-03-19",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/moja99758134/status/2034848605702640013",
    sourceLabel: "Biwa alabalığı avı alıntı gönderisi",
    sourceAuthor: "moja (@moja99758134)",
    sourceKind: "angler",
    sourceKindLabel: "Doğrudan balıkçı kaydı",
    isDirectCatch: true,
    verificationScore: 7,
    verificationNotes: ["Hesap kendisini balıkçılık blog yazarı olarak tanımlıyor.", "Gönderi aynı hesaba ait Biwa alabalığı avı paylaşımını alıntılıyor.", "Kesin av noktası yayımlanmıyor."],
    cover: worldCover,
    body: ["Kaynak, aynı kullanıcının Biwa alabalığı yakaladığını belirttiği kendi paylaşımını alıntılayan bir gönderidir. Bu nedenle kayıt doğrudan balıkçı anlatımı olarak sınıflandırılmış, ancak tür ve konum ayrıntıları kaynak beyanının ötesine taşınmamıştır.", "Biwa Gölü gibi hassas ve düzenlemeye tabi sularda güncel yerel kurallar ayrıca kontrol edilmelidir. Bu sayfa av izni veya mevzuat özeti yerine yalnızca kaynaklı bir dünya av günlüğü kaydıdır."],
    tags: ["Japonya", "Biwa Gölü", "alabalık", "göl avı"],
    mediaMode: "x-embed",
    xPostId: "2034848605702640013"
  },
  {
    slug: "miura-kromutsu-kinmedai",
    title: "Miura Yarımadası seferinde iki derin su türü",
    country: "Japonya",
    location: "Miura Yarımadası genel bölgesi",
    species: "Kromutsu ve kinmedai (gönderi beyanı)",
    angler: "@Assetzen",
    summary: "Miura Yarımadası çevresindeki bir balıkçılık seferinde büyük bir kromutsu ile kinmedai yakalandığını belirten doğrudan kullanıcı kaydı.",
    publishedAt: launchDate,
    observedAt: "2026-02-22",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/Assetzen/status/2025562183380471836",
    sourceLabel: "Miura balıkçılık seferi gönderisi",
    sourceAuthor: "@Assetzen",
    sourceKind: "angler",
    sourceKindLabel: "Doğrudan balıkçı kaydı",
    isDirectCatch: true,
    verificationScore: 8,
    verificationNotes: ["Gönderi seferi birinci kişi anlatımıyla aktarıyor.", "Genel bölge ile iki balık adı kaynakta belirtiliyor.", "Olta Atlası kesin koordinat veya derinlik tahmini eklemiyor."],
    cover: worldCover,
    body: ["Gönderi sahibi Miura Yarımadası çevresindeki seferde büyük bir kromutsu ve kinmedai yakalandığını aktarıyor. Türkçe ortak adlar bölgeden bölgeye değişebildiği için Japonca tür adları kaynak bağlamıyla korunmuştur.", "Kayıt yöntem, takım veya kesin av yeri konusunda kaynakta bulunmayan ayrıntılar üretmez. Görsel ve gönderi metni X sunucularında kalır."],
    tags: ["Japonya", "Miura", "kromutsu", "kinmedai", "tekne avı"],
    mediaMode: "x-embed",
    xPostId: "2025562183380471836"
  },
  {
    slug: "koh-lipe-yelken-baligi",
    title: "Koh Lipe çevresinden yelken balığı paylaşımı",
    country: "Tayland",
    location: "Satun · Koh Lipe genel bölgesi",
    species: "Yelken balığı (gönderi bağlamı)",
    angler: "Kaynakta avcı kimliği kesinleştirilemiyor",
    summary: "Satun ve Koh Lipe çevresindeki sportif balıkçılık bağlamında yelken balığına yer veren, ancak avcı kimliği bağımsız biçimde doğrulanamayan X kaydı.",
    publishedAt: launchDate,
    observedAt: "2026-03-05",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/a9090851100/status/2029515339990815168",
    sourceLabel: "Koh Lipe sportif balıkçılık gönderisi",
    sourceAuthor: "@a9090851100",
    sourceKind: "publisher",
    sourceKindLabel: "Kaynak paylaşımı · avcı doğrulanmadı",
    isDirectCatch: false,
    verificationScore: 6,
    verificationNotes: ["Gönderi bölge ve sportif balıkçılık bağlamı sağlıyor.", "Avı gerçekleştiren kişinin kimliği açık biçimde doğrulanamadı.", "Kayıt doğrudan av anlatımı olarak etiketlenmedi."],
    cover: worldCover,
    body: ["Bu paylaşım Satun ve Koh Lipe çevresindeki sportif balıkçılık bağlamında yelken balığına yer veriyor. Ancak gönderiden avı yapan kişinin kimliği yeterince açık çıkarılamadığı için doğrudan balıkçı kaydı olarak sınıflandırılmadı.", "Olta Atlası'nın doğrulama etiketi, gönderinin varlığı ile avın tüm ayrıntılarının bağımsız doğrulanması arasındaki farkı görünür tutar."],
    tags: ["Tayland", "Koh Lipe", "yelken balığı", "kaynak kaydı"],
    mediaMode: "x-embed",
    xPostId: "2029515339990815168"
  },
  {
    slug: "colorado-rekor-ot-sazani",
    title: "Colorado'da 37 inçlik rekor ot sazanı",
    country: "ABD",
    location: "Greeley, Colorado",
    species: "Ot sazanı",
    angler: "Daniel Geiger",
    summary: "Denver Post'un on yaşındaki Daniel Geiger'in bir park göletinde yakaladığı 37 inçlik ot sazanını eyalet rekoru olarak aktardığı haber gönderisi.",
    publishedAt: launchDate,
    observedAt: "2024-06-12",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/denverpost/status/1841536700058652925",
    sourceLabel: "Colorado rekor balık haberi",
    sourceAuthor: "The Denver Post (@denverpost)",
    sourceKind: "publisher",
    sourceKindLabel: "Güvenilir yayıncı kaydı",
    isDirectCatch: false,
    verificationScore: 9,
    verificationNotes: ["Avcı, ölçü ve genel yer yayıncı tarafından açıkça belirtiliyor.", "Gönderi doğrudan avcı hesabından değil haber yayıncısından geliyor.", "Çocuk hakkında kaynakta bulunmayan kişisel bilgi eklenmedi."],
    cover: worldCover,
    body: ["Denver Post paylaşımı, Daniel Geiger'in Greeley'deki bir park göletinde 37 inçlik ot sazanı yakaladığını ve kaydın eyalet rekoru olarak kabul edildiğini aktarıyor. Olta Atlası çocukla ilgili yalnızca haber kaynağında açıkça verilen adı ve av bilgisini kullanır.", "Bu içerik yayıncı tarafından aktarılan bir av kaydıdır; balıkçının kendi sosyal medya paylaşımı değildir. Karttaki kaynak türü bu ayrımı özellikle gösterir."],
    tags: ["Colorado", "ot sazanı", "rekor balık", "genç balıkçı"],
    mediaMode: "x-embed",
    xPostId: "1841536700058652925"
  },
  {
    slug: "deveron-61-lb-somon",
    title: "Deveron Nehri'nin 61 librelik tarihî somonu",
    country: "İskoçya",
    location: "Deveron Nehri",
    species: "Atlantik somonu",
    angler: "Tiny Morison",
    summary: "Deveron Bogie & Isla Rivers Charitable Trust'ın 1924 yılında Brown Wing Killer sineğiyle yakalandığını aktardığı 61 librelik tarihî somon kaydı.",
    publishedAt: launchDate,
    observedAt: "1924-01-01",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/DBIRCT/status/1485637916240007168",
    sourceLabel: "Deveron tarihî somon kaydı",
    sourceAuthor: "Deveron Bogie & Isla Rivers Charitable Trust (@DBIRCT)",
    sourceKind: "institution",
    sourceKindLabel: "Kurumsal tarih kaydı",
    isDirectCatch: false,
    verificationScore: 9,
    verificationNotes: ["Kayıt nehir odaklı koruma kuruluşu tarafından yayımlanmış.", "Avcı, ağırlık, yıl ve sinek adı kaynakta belirtiliyor.", "Tarih gün/ay kesinliği taşımadığı için yalnızca yıl bilgisi esas alındı."],
    cover: worldCover,
    body: ["Nehir odaklı yardım kuruluşunun paylaşımı Tiny Morison'ın 1924'te 61 librelik Atlantik somonu Brown Wing Killer adlı sinekle yakaladığını aktarıyor. Bu kayıt güncel av önerisi değil, nehrin balıkçılık tarihinden bir arşiv notudur.", "Tarihî kayıtların günümüz stok durumu veya av kuralları hakkında doğrudan kanıt oluşturmadığı özellikle unutulmamalıdır."],
    tags: ["İskoçya", "Atlantik somonu", "tarihî av", "sinek avı"],
    mediaMode: "x-embed",
    xPostId: "1485637916240007168"
  },
  {
    slug: "murekkep-baligi-kamuflaj-av",
    title: "Mürekkep balığının av sırasında hareketli kamuflajı",
    country: "Uluslararası",
    location: "Denizel araştırma bağlamı",
    species: "Mürekkep balığı",
    angler: "Avcı insan değil · doğal av davranışı",
    summary: "India Today'in bir mürekkep balığının av sırasında kullandığı sıra dışı hareketli kamuflaj davranışını tanıttığı bilim haberi gönderisi.",
    publishedAt: launchDate,
    observedAt: "2026-03-31",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/IndiaToday/status/2038924674000994557",
    sourceLabel: "Mürekkep balığı av davranışı haberi",
    sourceAuthor: "India Today (@IndiaToday)",
    sourceKind: "publisher",
    sourceKindLabel: "Bilim ve tür bağlamı",
    isDirectCatch: false,
    verificationScore: 7,
    verificationNotes: ["Bu kayıt insan balıkçılığı değil doğal av davranışıdır.", "Kaynak bir yayıncı hesabıdır.", "Dünya günlüğünde bağlam içeriği olarak ayrıca etiketlenmiştir."],
    cover: worldCover,
    body: ["Bu gönderi bir balıkçının avını değil, mürekkep balığının kendi avlanma davranışını ele alıyor. İlk koleksiyonda dünya balıkçılığına eşlik eden tür gözlemi ve deniz biyolojisi bağlamı olarak tutulmuştur.", "Olta Atlası kaynak haberde bulunmayan bilimsel sonuçlar eklemez ve görseli yeniden barındırmaz."],
    tags: ["mürekkep balığı", "kamuflaj", "av davranışı", "bilim"],
    mediaMode: "x-embed",
    xPostId: "2038924674000994557"
  },
  {
    slug: "antarktika-krill-avciligi",
    title: "Antarktika'da hızlanan krill avcılığı tartışması",
    country: "Antarktika",
    location: "Güney Okyanusu",
    species: "Antarktika krili",
    angler: "Ticari av filosu",
    summary: "ABC'nin Antarktika krili avındaki artışı ve ekosistem tartışmasını aktardığı, sportif avdan farklı bir ticari balıkçılık bağlamı kaydı.",
    publishedAt: launchDate,
    observedAt: "2025-07-29",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/ABC/status/1950107637233721420",
    sourceLabel: "Antarktika krill avcılığı haberi",
    sourceAuthor: "ABC (@ABC)",
    sourceKind: "publisher",
    sourceKindLabel: "Ticari balıkçılık bağlamı",
    isDirectCatch: false,
    verificationScore: 8,
    verificationNotes: ["Kayıt bireysel amatör av değil ticari avcılık haberidir.", "Kaynak kurumsal yayıncı hesabıdır.", "Sportif av kartlarıyla karışmaması için ayrı etiketlenmiştir."],
    cover: worldCover,
    body: ["ABC paylaşımı Güney Okyanusu'ndaki krill avcılığının hızlanmasına ilişkin haber bağlamı sunuyor. Bu içerik bireysel bir balıkçının yakaladığı balığı sergilemez; dünya balıkçılığının ticari ve ekolojik yüzünü göstermek amacıyla açıkça ayrı etiketlenmiştir.", "Kaynakta yer alan tartışma Olta Atlası tarafından kesin hükme dönüştürülmez. Ziyaretçi özgün yayını açarak haberin tamamını kaynağında inceleyebilir."],
    tags: ["Antarktika", "krill", "ticari balıkçılık", "ekosistem"],
    mediaMode: "x-embed",
    xPostId: "1950107637233721420"
  },
  {
    slug: "japon-baligi-dogaya-salinmaz",
    title: "Evcil Japon balığını doğal suya bırakmama uyarısı",
    country: "ABD",
    location: "Genel koruma uyarısı",
    species: "Japon balığı",
    angler: "Av kaydı değil · koruma notu",
    summary: "ABD Balık ve Yaban Hayatı Servisinin evcil Japon balıklarının doğal sulara bırakılmaması gerektiğini anlattığı istilacı tür farkındalık gönderisi.",
    publishedAt: launchDate,
    observedAt: "2024-02-27",
    sourceCheckedAt: launchDate,
    sourcePlatform: "X",
    sourceUrl: "https://x.com/USFWS/status/1762598547399057701",
    sourceLabel: "Japon balığı ve doğal sular uyarısı",
    sourceAuthor: "U.S. Fish and Wildlife Service (@USFWS)",
    sourceKind: "institution",
    sourceKindLabel: "Koruma ve etik notu",
    isDirectCatch: false,
    verificationScore: 8,
    verificationNotes: ["Bu kayıt bir av paylaşımı değildir.", "Kaynak resmî koruma kurumudur.", "İlk koleksiyonda etik ve istilacı tür farkındalığı için ayrıca etiketlenmiştir."],
    cover: worldCover,
    body: ["ABD Balık ve Yaban Hayatı Servisi paylaşımı, evcil Japon balıklarının doğal sulara bırakılmasının ekolojik sorunlara yol açabileceği konusunda uyarıyor. Bu içerik av vitrini değil, balıkçılık etiği ve sucul ekosistem sorumluluğu notudur.", "Dünya günlüğünde doğrudan av kayıtlarıyla karıştırılmaması için 'Koruma ve etik notu' etiketi taşır."],
    tags: ["Japon balığı", "istilacı tür", "koruma", "etik"],
    mediaMode: "x-embed",
    xPostId: "1762598547399057701"
  }
];
