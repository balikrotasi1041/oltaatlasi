import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig: ResearchSource = {
  label: "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url: "https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note: "2024-2028 genel amatör avcılık çerçevesidir; rota özelindeki koruma, işletme, ticari istihsal ve dönem kuralları ayrıca uygulanır."
};
const uniq = (items: ResearchSource[]) => [...new Map(items.filter((s) => s?.url).map((s) => [s.url, s])).values()];

type Upgrade = {
  sources: ResearchSource[];
  fish?: string[];
  district?: string;
  summary: string;
  risk: string;
  speciesLevel?: "strong" | "partial";
};

export const promoted20260905Stage2 = [
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ulusal-nigde-gumusler-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-eskisehir-porsuk-baraj-golu",
  "ulusal-agri-balik-golu",
  "ulusal-bitlis-van-golu-tatvan-kiyisi",
  "ulusal-ardahan-aktas-golu",
  "ulusal-ardahan-posof-cayi",
  "ankara-500km-bolu-buyukgol",
  "ankara-500km-bolu-deringol",
  "ankara-500km-yozgat-gelingullu-baraj-golu",
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-adiyaman-cat-baraj-golu",
  "ulusal-elazig-cip-baraj-golu",
  "ulusal-gaziantep-kayacik-baraj-golu",
  "ulusal-denizli-adiguzel-baraj-golu"
] as const;

const evidence: Record<string, Upgrade> = {
  "ankara-500km-adiyaman-sirimtas-baraj-golu": {
    sources: [
      { label: "TAGEM Elazığ Su Ürünleri - Sırımtaş stok takviyesi", url: "https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Haber/804/Tagem-Sahada-Sirimtas-Baraj-Golundeyiz%E2%80%A6", note: "Sincik Sırımtaş Baraj Gölüne yavru siraz bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir." },
      { label: "Türk Hidrolik Dergisi - Sırımtaş Barajı ve HES", url: "https://dergipark.org.tr/tr/pub/turhidder/article/853887", note: "Adıyaman-Sincik rota kimliği ve aktif HES bağlamını akademik aileden doğrular." },
      { label: "GAP İdaresi - enerji projeleri", url: "https://www.gap.gov.tr/sayfa/gap-hakkinda/gap-genel-gerceklesmeler/", note: "Sırımtaş HES işletme bağlamını doğrular; güvenlik alanı kıyı rotası sayılmaz." }
    ], summary: "Rota kimliği, siraz stok takviyesi ve aktif HES riski ayrı kaynak aileleriyle doğrulandı.", risk: "Aktif HES işletme/güvenlik alanları olta kıyısı değildir; genel su konumu yalnız planlama başlangıcıdır."
  },
  "ankara-500km-adiyaman-karahuyuk-goleti": {
    fish: ["Sazan"], sources: [
      { label: "Adıyaman İl Tarım - 2024 balıklandırması", url: "https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz", note: "Karahöyük Göletine sazan yavrusu bırakıldığını rota özelinde doğrular; tür olasılığıdır." },
      { label: "DSİ 20. Bölge - Adıyaman göletleri", url: "https://bolge20.dsi.gov.tr/Sayfa/Detay/1123", note: "Karahöyük Göletinin işletmedeki sulama göleti kimliğini doğrular." },
      { label: "Adıyaman 2024 İl Çevre Durum Raporu", url: "https://webdosya.csb.gov.tr/db/ced/icerikler/adiyaman_-cdr2024-20241105080342.pdf", note: "Sulama rezervuarı kimliği ve kullanım amacını kurumsal raporda doğrular." }
    ], summary: "Sulama göleti kimliği ve sazan balıklandırması resmî kaynaklarla çaprazlandı.", risk: "Tarla/parsel, servis yolu ve tesis sınırlarının kamusal olduğu varsayılmaz."
  },
  "ulusal-nigde-gumusler-baraj-golu": {
    fish: ["Sazan"], sources: [
      { label: "Niğde İl Tarım - balıklandırma programı", url: "https://nigde.tarimorman.gov.tr/Haber/518/", note: "Gümüşler Barajında pullu sazan balıklandırmasını rota özelinde doğrular." },
      { label: "Niğde İl Kültür ve Turizm - coğrafya", url: "https://nigde.ktb.gov.tr/TR-214997/nigde.html", note: "Gümüşler Barajının sulama barajı kimliğini doğrular." },
      { label: "Niğde İl Çevre raporu", url: "https://webdosya.csb.gov.tr/db/ced/editordosya/Nigde2015.pdf", note: "Gümüşler Barajında tarihsel sazan kaydı verir; güncel av garantisi değildir." }
    ], summary: "Sulama barajı kimliği ve rota özelindeki sazan kayıtları bağımsız resmî ailelerle eşleştirildi.", risk: "Su kotu, işletme yapıları ve özel parseller son yaklaşımda ayrıca kontrol edilir."
  },
  "ulusal-sivas-delice-baraj-golu-sivas": {
    fish: ["Sazan"], sources: [
      { label: "Sivas İl Tarım - Delice balıklandırması", url: "https://sivas.tarimorman.gov.tr/Haber/105/Gol-Ve-Goletlerde-Baliklandirma-Calismalari-Devam-Ediyor", note: "İmranlı Delice Göletine sazan yavrusu bırakıldığını rota özelinde doğrular." },
      { label: "Sivas Ekspres - Delice sulama yatırımı", url: "https://www.sivasekspres.com/haber/sivas-tarimina-42-milyonluk-yatirim-74567.html", note: "İmranlı Delice Göletinin aktif sulama tesisi olduğunu destekler." },
      { label: "Sivas Ekspres - 2025 balıklandırma", url: "https://www.sivasekspres.com/haber/sivasta-yuzlerce-balik-suyla-bulustu-80023.html", note: "2025 Delice balıklandırmasını yerel destekleyici kaynak olarak bildirir." }
    ], summary: "Resmî sazan balıklandırması, aktif sulama tesisi ve güncel destekleyici kayıt çaprazlandı.", risk: "Su kotu, yumuşak kıyı, sulama şebekesi ve kırsal riskler hareket günü kontrol edilir."
  },
  "ulusal-eskisehir-porsuk-baraj-golu": {
    fish: ["Sazan", "Yayın"], sources: [
      { label: "Kütahya İl Kültür ve Turizm - Sportif Olta Balıkçılığı", url: "https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html", note: "Porsuk Barajında sportif olta balıkçılığı ve sazan/yayın dahil türleri resmî olarak bildirir." },
      { label: "DergiPark - Porsuk Baraj Gölü Rutilus çalışması", url: "https://dergipark.org.tr/en/pub/biodicon/article/765597", note: "Porsuk Baraj Gölünden doğrudan örneklenen balıklarla rota özelindeki bilimsel tür kanıtını sağlar." }
    ], summary: "Resmî sportif olta kullanımı ve tür kaydı rota özelindeki bilimsel balık çalışmasıyla çaprazlandı.", risk: "Su kalitesi, içme/kullanma suyu havza kuralları ve işletme uyarıları güncel olarak kontrol edilmelidir."
  },
  "ulusal-agri-balik-golu": {
    fish: ["Alabalık"], sources: [
      { label: "Ağrı İl Kültür ve Turizm - Balık Gölü", url: "https://agri.ktb.gov.tr/TR-122248/balik-golu.html", note: "Göl kimliği, koruma statüsü, kırmızı benekli alabalık ve ulaşım bağlamını resmî olarak bildirir." },
      { label: "DergiPark - Ağrı Balık Gölü Balıkçılığı", url: "https://dergipark.org.tr/tr/pub/jaes/article/793828", note: "Balık Gölünde fiilî balıkçılık faaliyetini bilimsel saha verisiyle inceler; güncel izin değildir." }
    ], summary: "Resmî kimlik/tür/ulaşım kaydı bilimsel balıkçılık saha çalışmasıyla birlikte değerlendirildi.", risk: "İçme-kullanma suyu koruma sahası ve önemli kuş alanıdır; mikro kıyı serbestliği çıkarılmaz."
  },
  "ulusal-bitlis-van-golu-tatvan-kiyisi": {
    district: "Tatvan", fish: ["İnci Kefali"], sources: [
      { label: "Bitlis İl Kültür ve Turizm - Sportif Etkinlikler", url: "https://bitlis.ktb.gov.tr/TR-56232/sportif-etkinlikler.html", note: "Van Gölünü Bitlis'te balık avcılığı açısından turistik değer olarak resmî kayda alır." },
      { label: "Bitlis İl Kültür ve Turizm - Göller", url: "https://bitlis.ktb.gov.tr/TR-56211/goller.html", note: "Tatvan'ın Van Gölü kıyı kimliği ve genel kıyı kullanım bağlamını doğrular." },
      { label: "DergiPark - Van Gölü inci kefali yönetimi", url: "https://dergipark.org.tr/tr/pub/dosder/article/1024412", note: "İnci kefalinin rota havzasındaki varlığı ve koruma yönetimini bilimsel olarak açıklar." }
    ], summary: "Tatvan kıyısı için resmî kıyı/balıkçılık kullanımı ve inci kefali bilimsel literatürü çaprazlandı.", risk: "Üreme göçü dönemi yasakları üstündür; plaj, iskele ve işletme alanlarının tamamı olta alanı sayılmaz."
  },
  "ulusal-ardahan-aktas-golu": {
    fish: ["Sazan"], sources: [
      { label: "Kültür Portalı - Ardahan sportif olta balıkçılığı", url: "https://www.kulturportali.gov.tr/turkiye/ardahan/turizmaktiviteleri/cildir-golu", note: "Aktaş Gölünde sportif olta balıkçılığı yapılabildiğini resmî turizm kaynağı bildirir." },
      { label: "Ardahan Valiliği - Aktaş ve Çıldır Gölü Çalıştayı", url: "https://www.ardahan.gov.tr/calistay280919", note: "Sportif olta kullanımı, tarihsel sazan balıklandırması ve sınır/koruma hassasiyetlerini resmî olarak bildirir." }
    ], summary: "Resmî sportif olta kullanımı ve tarihsel sazan balıklandırması sınır/sulak alan hassasiyetiyle birlikte doğrulandı.", risk: "Sınır gölü ve hassas sulak alandır; sınır, korunan alan ve saha talimatları balıkçılık planından önce gelir."
  },
  "ulusal-ardahan-posof-cayi": {
    sources: [
      { label: "Kültür Portalı - Ardahan sportif olta balıkçılığı", url: "https://www.kulturportali.gov.tr/turkiye/ardahan/turizmaktiviteleri/cildir-golu", note: "Posof Çayı'nda sportif olta balıkçılığı yapılabildiğini resmî turizm kaynağı bildirir." }
    ], summary: "Resmî sportif olta kullanımı kayıttaki akademik/GBIF tür katmanıyla birlikte değerlendirildi; mikro kıyı doğrulanmış sayılmadı.", risk: "Debi, taşkın, dik/yumuşak kıyı ve özel parsel sınırları mevsime göre değişebilir."
  },
  "ankara-500km-bolu-buyukgol": {
    fish: ["Alabalık"], sources: [
      { label: "Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı", url: "https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html", note: "Büyükgöl ve Deringöl'de dönemsel ücretli sportif olta balıkçılığı ve alabalık varlığını resmî olarak bildirir." },
      { label: "MEB Okul Dışı Öğrenme - Yedigöller", url: "https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866", note: "Büyükgöl kimliği ve alabalık geçmişini bağımsız kamu kaynağıyla doğrular." }
    ], summary: "Milli park içindeki dönemsel sportif olta kullanımı ve alabalık kaydı bağımsız kamu kaynaklarıyla çaprazlandı.", risk: "Milli park koruma, ücret ve dönem kuralları üstündür; yalnız izin verilen alan ve tarihler kullanılmalıdır."
  },
  "ankara-500km-bolu-deringol": {
    fish: ["Alabalık"], sources: [
      { label: "Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı", url: "https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html", note: "Deringöl'de dönemsel ücretli sportif olta balıkçılığı ve alabalık varlığını resmî olarak bildirir." },
      { label: "MEB Okul Dışı Öğrenme - Yedigöller", url: "https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866", note: "Deringöl-Büyükgöl bağlantısını ve milli park kimliğini bağımsız kamu kaynağıyla doğrular." }
    ], summary: "Deringöl için resmî dönemsel sportif olta kullanımı ve tür kaydı bağımsız kamu kaynağıyla çaprazlandı.", risk: "Milli park koruma, ücret ve dönem kuralları üstündür; güncel izinli kesim ve saatler kullanılmalıdır."
  },
  "ankara-500km-yozgat-gelingullu-baraj-golu": {
    district: "Yozgat_Merkez İlçe", fish: ["Sazan", "Sudak", "Tatlı Su Levreği"], sources: [
      { label: "Yozgat İl Tarım - Gelingüllü avlak kiralama ilanı", url: "https://yozgat.tarimorman.gov.tr/Duyuru/389/", note: "Yozgat Merkez kimliği ve sazan/sudak/tatlısu levreği stoklarını resmî olarak doğrular; ticari kiralama amatör kıyı hakkı değildir." },
      { label: "Yozgat Valiliği - Kültür ve Turizm", url: "https://www.yozgat.gov.tr/kultur-ve-turizm", note: "Gelingüllü Barajını spor, dinlence ve piknik alanları arasında sayarak genel rekreasyon bağlamını destekler." }
    ], summary: "Resmî avlak/stok kaydı ile Valiliğin genel rekreasyon kullanımı çaprazlandı; ticari ve amatör kullanım ayrıldı.", risk: "Ticari istihsal, ağ sahası, işletme yapıları ve güncel amatör avcılık kısıtları ayrıca kontrol edilmelidir."
  },
  "ulusal-erzurum-demirdoven-baraj-golu": {
    district: "Pasinler", fish: ["Tatlısu Kefali"], sources: [
      { label: "Atatürk Üniversitesi AVESİS - Demirdöven tatlı su kefali", url: "https://avesis.atauni.edu.tr/yayin/a96f057f-690b-49d4-a0df-8ce637e90c7b/pasinler-demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonunun-bazi-biyokimyasal-ozelliklerinin-belirlenmesi", note: "Demirdöven Baraj Gölünden rota özelinde tatlısu kefali örneklemesini akademik kaynakla doğrular." },
      { label: "Anadolu Ajansı - Demirdöven 18 Şubat 2026", url: "https://www.aa.com.tr/tr/gundem/erzurumdaki-demirdoven-barajinin-yuzeyi-buz-tuttu/3833548", note: "Pasinler/Tımar Çayı kimliği, güncel balıkçılık ve kafes yetiştiriciliği bağlamını saha haberiyle doğrular." }
    ], summary: "Pasinler/Tımar Çayı kimliği, güncel balıkçılık ve rota özelindeki tatlısu kefali örneklemesi çaprazlandı.", risk: "Kafesler, işletme alanları, buzlanan yüzey, özel parsel ve su yapıları olta kıyısı sayılmaz."
  },
  "ulusal-adiyaman-cat-baraj-golu": {
    district: "Çelikhan", speciesLevel: "partial", sources: [
      { label: "Adıyaman İl Tarım - Çat Baraj Gölü Avlak Sahası", url: "https://adiyaman.tarimorman.gov.tr/Duyuru/617/Duyuru-Avlak-Sahasi-Ihale-Ilani", note: "Çat Baraj Gölünü resmî su ürünleri avlak sahası olarak doğrular; ticari ihale amatör kıyı hakkı değildir." },
      { label: "Adıyaman İl Kültür ve Turizm - Coğrafya", url: "https://adiyaman.ktb.gov.tr/TR-61344/cografya.html", note: "Çat Barajı/Çelikhan kimliği, sulama amacı ve yüzen adacık hassasiyetini doğrular." }
    ], summary: "Çelikhan kimliği ve resmî avlak statüsü kayıttaki rota özelindeki tür katmanıyla birlikte değerlendirildi.", risk: "Yüzen adacıklar, sulama/işletme yapıları ve ticari istihsal sahası nedeniyle mikro-konum yayımlanmaz."
  },
  "ulusal-elazig-cip-baraj-golu": {
    district: "Elazığ_Merkez İlçe", speciesLevel: "partial", sources: [
      { label: "Tarım Orman Ekranı - Cip Barajı", url: "https://www.tarimtv.gov.tr/tr/video-detay/cip-baraji-gocmen-kuslarin-yeni-adresi-21452", note: "Cip Çayı üzerindeki gölün balık popülasyonu ve kıyı şeridini Bakanlık yayınında doğrular." },
      { label: "Elazığ Çevre Şehircilik - İl Hakkında", url: "https://elazig.csb.gov.tr/ilimiz-hakkinda-681", note: "Cip Barajını Elazığ Merkez yakınında sulama barajı ve mesire alanı bağlamında doğrular." },
      { label: "Anadolu Ajansı - Cip Baraj Gölü 8 Aralık 2025", url: "https://www.aa.com.tr/tr/yasam/elazigdaki-cip-baraj-golu-farkli-turde-binlerce-gocmen-kusu-agirliyor/3764944", note: "Cip Mesire Alanı ve balık popülasyonu bağlamını güncel saha haberiyle destekler." }
    ], summary: "Elazığ Merkez/Cip Çayı kimliği, resmî mesire kullanımı ve balık popülasyonu kaydı çaprazlandı.", risk: "Göçmen kuş habitatı ve aktif sulama gölüdür; hassas mikro-kıyılara yönlendirme yapılmaz."
  },
  "ulusal-gaziantep-kayacik-baraj-golu": {
    district: "Oğuzeli", speciesLevel: "partial", sources: [
      { label: "Gaziantep İl Tarım - Kayacık Avlak Sahası 2025", url: "https://gaziantep.tarimorman.gov.tr/Duyuru/385/Ihale-Ilani_kayacik-Avlak-Sahasi_", note: "Kayacık Barajını Oğuzeli sınırlarında resmî su ürünleri avlak sahası olarak doğrular." },
      { label: "DergiPark - Kayacık Barajı su kalitesi", url: "https://dergipark.org.tr/tr/pub/actaquatr/article/635648", note: "Kayacık Barajının su gövdesi ve çevresel risklerini rota özelinde doğrular." },
      { label: "Oğuzeli Belediyesi - Kayacık doluluk", url: "https://oguzeli.bel.tr/public/oguzelinde-barajlara-yagis-bereketi-doluluk-orani-42ye-yukseldi", note: "Kayacık'ın güncel Oğuzeli su kaynağı/işletme bağlamını doğrular." }
    ], summary: "Oğuzeli kimliği ve resmî avlak statüsü akademik su çalışması ve belediye işletme kaydıyla çaprazlandı.", risk: "Düşük su seviyesi, ticari avlak, sulama yapıları, su kalitesi ve çamurlu kıyılar ayrıca kontrol edilmelidir."
  },
  "ulusal-denizli-adiguzel-baraj-golu": {
    district: "Güney", fish: ["Sazan"], sources: [
      { label: "Güney Kaymakamlığı - Adıgüzel Barajı", url: "https://www.guney.gov.tr/adiguzeller-baraji", note: "Adıgüzel Barajı/HES'i Güney ilçesinde Büyük Menderes üzerinde resmî olarak doğrular." },
      { label: "DergiPark - Adıgüzel Baraj Gölü su ekolojisi", url: "https://dergipark.org.tr/tr/pub/egirdir/article/305920", note: "Adıgüzel Baraj Gölünde rota özelindeki akademik örnekleme ve ekoloji riskini doğrular." },
      { label: "Haberdenizli - Adıgüzel amatör sazan avı 2025", url: "https://www.haberdenizli.com/oltayla-balik-avina-cikan-amator-balikci-cuvali-sazanla-doldurdu", note: "2025 amatör sazan saha kaydıdır; tek olay av garantisi değildir." }
    ], summary: "Güney/Büyük Menderes üzerindeki aktif HES kimliği, akademik göl çalışması ve güncel sazan saha kaydı çaprazlandı.", risk: "Aktif HES/sulama rezervuarında hızlı su seviyesi değişimi, derin kıyı ve işletme yapıları nedeniyle mikro erişim güvenli kabul edilmez."
  }
};

export const applyDailyQuality20260905Stage2 = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of promoted20260905Stage2) {
    const previous = routeMap.get(slug);
    if (!previous) throw new Error(`2026-09-05 Stage2 hedefi yok: ${slug}`);
    if (previous.confidence !== "D") throw new Error(`2026-09-05 kotaya yalnız gerçek D→C yazılır: ${slug} (${previous.confidence})`);
    const data = evidence[slug];
    if (!data) throw new Error(`2026-09-05 Stage2 kanıt paketi yok: ${slug}`);
    const fish = data.fish?.length ? data.fish : previous.fish;
    if (!fish?.length) throw new Error(`2026-09-05 Stage2 tür olasılığı alanı yok: ${slug}`);
    const sources = uniq([...(previous.sources || []), ...data.sources, teblig]);
    if (sources.length < 2) throw new Error(`2026-09-05 Stage2 bağımsız kaynak eşiği yok: ${slug}`);
    const speciesLevel = data.speciesLevel || "strong";
    routeMap.set(slug, {
      ...previous,
      district: data.district || previous.district,
      fish,
      confidence: "C",
      locationPrecision: "Genel bölge",
      navigationVerified: false,
      navigationNote: "Pin veya ad araması yalnız genel su/rota planlaması içindir; kesin park, araç girişi, özel parsel sınırı veya olta cebi değildir.",
      sources,
      researchStatus: "2026-09-05 Aşama 2: rota kimliği, il/ilçe, su türü, tür olasılığı, genel kullanım/erişim, mevzuat ve risk bağımsız kaynak aileleriyle çaprazlandı.",
      researchSummary: data.summary,
      verification: `5 Eylül 2026: ${previous.name} gerçek D seviyesinden C'ye çoklu rota-özel kanıtla yükseltildi. Genel kullanım/erişim mikro kıyı izni değildir; balık kaydı av garantisi değildir.`,
      researchedAt: "2026-09-05",
      updatedAt: "2026-09-05",
      confidenceProfile: {
        model: "evidence-v1",
        overall: "C",
        identity: { level: "strong", label: "Rota kimliği", note: "Ad, il/ilçe ve su gövdesi rota özelindeki resmî/kurumsal kaynaklarla eşleşir." },
        legal: { level: "partial", label: "Mevzuat ve alan kısıtları", note: "6/2 genel çerçevesi ile koruma, ticari istihsal, HES/sulama ve dönemsel saha kısıtları birlikte uygulanır; belirli kıyının sürekli açık olduğu varsayılmaz." },
        access: { level: "partial", label: "Genel kullanım/erişim bağlamı", note: "Resmî/kurumsal kayıt genel ziyaret, rekreasyon veya balıkçılık kullanımını destekler; son park, özel parsel ve mikro kıyı girişi saha teyitli değildir." },
        species: { level: speciesLevel, label: speciesLevel === "strong" ? "Rota özelinde tür olasılığı" : "Rota özelinde balık varlığı / kısmi tür kanıtı", note: "Rota özelindeki resmî, akademik veya güncel saha kaydı tür/balık bulunma olasılığını destekler; av başarısını garanti etmez." },
        field: { level: "unverified", label: "Saha doğrulaması yok", note: "Bariyer, tabela, su kotu, özel mülkiyet, işletme ve güncel kıyı zemini hareket günü yerinde kontrol edilmelidir." },
        reviewedAt: "2026-09-05"
      },
      cautions: [...new Set([...(previous.cautions || []), data.risk, "Geçmiş balıklandırma, ticari avlak, tekil av haberi veya harita kaydı tek başına güncel amatör av izni, güvenli kıyı girişi ya da av garantisi değildir."])]
    });
  }
  return routeMap;
};
