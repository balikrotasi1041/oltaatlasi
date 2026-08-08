import type { Mera } from "./meralar";
import { gun1EkMeralar20260804 } from "./meralar-gun1-ek-2026-08-04";
import { gun2Meralar20260805 } from "./meralar-gun2-2026-08-05";
import { gun3Meralar20260806 } from "./meralar-gun3-2026-08-06";
import { gun3Meralar20260808 } from "./meralar-gun3-2026-08-08";

export const gun1Meralar20260804: Mera[] = [
  {
    slug: "hirfanli-baraji-kale-mevki-bala",
    name: "Hirfanlı Barajı Kale Mevki Amatör Balıkçılık Alanı",
    district: "Bala",
    province: "Ankara",
    zone: "İç Anadolu",
    waterType: "Baraj",
    region: "İç Anadolu",
    summary: "Ankara İl Tarım ve Orman Müdürlüğünün amatör balıkçılık için koordinatla ayırdığı Hirfanlı Barajı I. Bölge içindeki Kale Mevki kıyı kesimi; kiralanmış istihsal sahasında rastgele kıyı seçmek yerine resmî sınırların esas alınması gereken bir içsu rotasıdır.",
    fish: ["Sazan", "Sudak", "Gümüş balığı", "Gümüşi havuz balığı"],
    methods: ["Dip oltası", "Şamandıralı olta", "Spin"],
    baits: ["Mısır", "Solucan", "Hamur", "Yapay yem"],
    camping: "Kontrol edilmeli",
    vehicleAccess: "Orta",
    amenities: ["Bala ilçe merkezi üzerinden kırsal erişim", "Kıyıda tesis garantisi yok", "Günübirlik kullanım için hazırlıklı gelinmeli"],
    cautions: [
      "İl Müdürlüğünün yayımladığı amatör balıkçılık sınırlarının dışına çıkılmamalı",
      "Baraj gövdesi, işletme, kafes/yetiştiricilik ve ticari çalışma sahalarından uzak durulmalı",
      "Su seviyesi değişimi, çamurlu kıyı ve açık arazide rüzgâr nedeniyle ilk ziyaret gündüz yapılmalı"
    ],
    lat: 39.2547,
    lng: 33.5165,
    locationPrecision: "Genel bölge",
    verification: "Ankara İl Tarım ve Orman Müdürlüğünün 2025 tarihli amatör balıkçılık alanı ilanı ve sınır koordinatlarıyla masa başı doğrulandı; saha teyidi yok.",
    updatedAt: "2026-08-04",
    publishedAt: "2026-08-04",
    confidence: "B",
    image: "/images/meralar/hirfanli-baraji-kale-mevki-bala.svg",
    socialImage: "/images/meralar/hirfanli-baraji-kale-mevki-bala.svg",
    navigationNote: "Pin, İl Müdürlüğünün Kale Mevki için yayımladığı iki sınır koordinatının yaklaşık orta noktasını gösterir. Navigasyon hedefi tek başına av izni değildir; kıyıda resmî sınır, tabela ve güncel erişim koşulları esas alınmalıdır.",
    shoreProfile: "Kale Mevki, Hirfanlı Barajı'nın Bala tarafındaki açık kırsal rezervuar kıyısıdır. İl Müdürlüğü bu kesimi iki sınır koordinatıyla amatör balıkçılığa ayrılmış alan olarak göstermiştir; su kotuna bağlı olarak toprak, çakıl ve çamurlu kıyı şeridinin genişliği değişebilir.",
    transport: "Ankara yönünden Bala ilçe merkezi ve kırsal yol ağı üzerinden yaklaşım planlanmalıdır. Son bölümde toplu taşıma garantisi bulunmadığından özel araç ve gündüz keşfi daha gerçekçidir; yağış sonrası stabilize/toprak bağlantıların durumu ayrıca kontrol edilmelidir.",
    crowdNote: "Şehir içi bir sahil değildir; hafta sonu amatör balıkçı yoğunluğu görülebilir ancak kıyı boyunca hizmet ve aydınlatma beklenmemelidir. Başka ekiplerin bulunduğu dar kıyı cebinde çapraz atış yapılmamalıdır.",
    longIntro: [
      "Hirfanlı Barajı Kale Mevki kaydı, genel bir 'Hirfanlı Barajı' pini değildir. Ankara İl Tarım ve Orman Müdürlüğünün kiralanmış istihsal sahalarında amatör balıkçılık yapılabilecek bölümler için yayımladığı 2025 tablosunda, Bala'daki I. Bölge içinde Kale Mevki iki sınır koordinatıyla açıkça tanımlanmıştır.",
      "Aynı resmî kaynak, kiraya verilmiş baraj göllerinde amatör balıkçılık alanlarının İl Müdürlüğünce ve DSİ görüşü alınarak belirlendiğini hatırlatır. Bu nedenle barajın başka bir kıyısının görünürde erişilebilir olması, oranın otomatik olarak avlanabilir olduğu anlamına gelmez."
    ],
    planningNotes: [
      "Ava çıkmadan önce Ankara İl Tarım ve Orman Müdürlüğünün güncel amatör balıkçılık alanı haritasını yeniden kontrol et; 2025'te yayımlanan koordinatlar bugün için temel masa başı referansıdır.",
      "Hirfanlı Barajı I. Bölge ticari istihsal sahası niteliği de taşıdığından tekne, ağ, kafes, çalışma ve yükleme boşaltma faaliyeti görülen bölümlere yaklaşma.",
      "Kıyıda konaklama tesisi varmış gibi plan yapma. Günübirlik kullanım daha güvenli varsayımdır; gecelik kalış gerekiyorsa Bala veya güzergâhtaki yerleşim seçenekleri ayrıca güncel olarak kontrol edilmelidir."
    ],
    seasonalNotes: [
      "İl Müdürlüğünün Hirfanlı Barajı stok/kiralama kayıtlarında sazan, sudak, gümüş balığı ve gümüşi havuz balığı raporlanır; bu liste kıyıdan belirli bir günde yakalama garantisi değildir.",
      "İçsu avında tür bazlı kapalı dönem, boy ve adet limitleri 6/2 Tebliğ ve 16 Nisan 2025 değişikliği üzerinden av günü tekrar kontrol edilmelidir; yerel veya geçici bir yasak duyurusu varsa genel tebliğden önce uygulanır."
    ],
    sources: [
      {
        label: "Ankara İl Tarım ve Orman Müdürlüğü - Amatör Balıkçılık Alanları (2025)",
        url: "https://ankara.tarimorman.gov.tr/Duyuru/361/",
        note: "Kiralanmış istihsal sahalarında amatör balıkçılık alanlarının belirlendiğini ve ek koordinat/haritaların yayımlandığını doğrular."
      },
      {
        label: "Ankara İl Tarım ve Orman Müdürlüğü - Amatör Balıkçılık Alanı Sınır Koordinatları",
        url: "https://ankara.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/Amat%C3%B6r%20Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k%20Alanlar%C4%B1.pdf",
        note: "Hirfanlı Barajı I. Bölge (Bala) Kale Mevki için 39°15.358'K 33°31.110'D ile 39°15.203'K 33°30.866'D sınır noktalarını verir."
      },
      {
        label: "Ankara İl Tarım ve Orman Müdürlüğü - 2025 Yıl Sonu Çalışma Raporu",
        url: "https://ankara.tarimorman.gov.tr/Belgeler/2025%20Y%C4%B1l%20Sonu%20%C3%87al%C4%B1%C5%9Fma%20Raporu.pdf",
        note: "Hirfanlı Barajı I. Bölgenin Bala ilçesinde kiralanmış su rezervi olduğunu ve barajdaki su ürünleri üretim/avcılık bağlamını doğrular."
      },
      {
        label: "Tarım ve Orman Bakanlığı - 6/2 Tebliğ 2025 değişikliği",
        url: "https://www.tarimorman.gov.tr/HHGM/Haber/142/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-Degisiklik-Yapilmasina-Dair-Teblig-Yayimlanmistir",
        note: "16 Nisan 2025'te yürürlüğe giren 2025/12 değişikliğinin güncel mevzuat kontrolüne dahil edilmesi için resmî kaynak."
      }
    ]
  },
  ...gun1EkMeralar20260804,
  ...gun2Meralar20260805,
  ...gun3Meralar20260806,
  ...gun3Meralar20260808
];
