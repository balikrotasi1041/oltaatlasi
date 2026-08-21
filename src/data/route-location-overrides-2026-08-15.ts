export type RouteLocationOverride = {
  lat: number;
  lng: number;
  precision: "Yaklaşık" | "Genel bölge" | "Tam";
  label: string;
  note: string;
  sources: { label: string; url: string; note: string }[];
};

export const routeLocationOverrides20260815: Record<string, RouteLocationOverride> = {
  "ulusal-tunceli-munzur-nehri": {
    lat: 39.10132,
    lng: 39.55386,
    precision: "Genel bölge",
    label: "Munzur Çayı · Tunceli merkez yakınındaki nehir kesimi",
    note: "Koordinat Munzur Çayı'nın Tunceli merkez yakınındaki genel su koridorunu gösterir. Belirli bir kıyı girişi, park alanı veya avlanma noktası değildir; Munzur Vadisi ve koruma alanı kuralları hareket günü ayrıca kontrol edilmelidir.",
    sources: [
      {
        label: "Tunceli İl Kültür ve Turizm Müdürlüğü – Munzur Suyu Vadisi",
        url: "https://tunceli.ktb.gov.tr/TR-57336/munzur-suyu-vadisi.html",
        note: "Munzur Suyu'nun Ovacık'tan Tunceli merkeze uzanan akışını ve Pülümür Çayı ile birleşimini açıklayan resmî kaynak."
      },
      {
        label: "GeoNames tabanlı Munzur Çayı konum kaydı",
        url: "https://mapcarta.com/12953974",
        note: "Munzur Çayı için 39.10132, 39.55386 genel su koordinatını veren açık coğrafi kayıt."
      },
      {
        label: "OpenStreetMap tabanlı Munzur Çayı su yolu kaydı",
        url: "https://waterwaymap.org/river/Munzur%20%C3%87ay%C4%B1%20000307507985/",
        note: "Munzur Çayı ve Pülümür Çayı birleşim kesimini açık harita verisiyle doğrulayan su yolu kaydı."
      }
    ]
  },
  "ulusal-tunceli-pulumur-cayi": {
    lat: 39.10041,
    lng: 39.55595,
    precision: "Genel bölge",
    label: "Pülümür Çayı · Tunceli merkez yakınındaki nehir kesimi",
    note: "Koordinat Pülümür Çayı'nın Tunceli merkez yakınındaki genel su koridorunu gösterir. Son kıyı yaklaşımı, yol güvenliği ve güncel avlanma koşulları ayrıca kontrol edilmelidir.",
    sources: [
      {
        label: "GeoNames tabanlı Pülümür Çayı konum kaydı",
        url: "https://mapcarta.com/12950614",
        note: "Pülümür Çayı için 39.10041, 39.55595 genel su koordinatını veren açık coğrafi kayıt."
      },
      {
        label: "OpenStreetMap tabanlı Munzur–Pülümür birleşim kaydı",
        url: "https://waterwaymap.org/river/Munzur%20%C3%87ay%C4%B1%20000307507985/",
        note: "Pülümür Çayı'nın Munzur Çayı ile Tunceli merkez yakınındaki birleşimini açık harita verisiyle gösterir."
      }
    ]
  },
  "ulusal-adana-nergizlik-baraj-golu": {
    lat: 37.3065541,
    lng: 35.0456375,
    precision: "Genel bölge",
    label: "Nergizlik Barajı · Karaisalı, Adana",
    note: "Pin Nergizlik Barajı su kütlesinin genel konumunu gösterir; doğrudan kıyı girişi, park noktası veya av cebi değildir. Barajın sulama tesisi olarak işletildiği resmî kaynaklarla doğrulanmıştır. Son yaklaşımda işletme alanı, yol durumu, tabela ve kamusal geçiş ayrıca kontrol edilmelidir.",
    sources: [
      {
        label: "Tarım ve Orman Bakanlığı – Seyhan Havzası Kuraklık Yönetim Planı",
        url: "https://www.tarimorman.gov.tr/SYGM/Belgeler/Kurakl%C4%B1k%20Y%C3%B6netim%20Planlar%C4%B1/Seyhan%20Havzas%C4%B1%20Kurakl%C4%B1k%20Y%C3%B6netim%20Plan%C4%B1%20Cilt%201.pdf",
        note: "Nergizlik Barajı Karaisalı Sulamasını işletmedeki DSİ sulama tesisi olarak doğrular."
      },
      {
        label: "OpenStreetMap – Nergizlik Baraj Gölü",
        url: "https://www.openstreetmap.org/way/82082871",
        note: "Genel su kütlesi koordinatı için açık harita kaydı; mikro erişim veya av izni değildir."
      }
    ]
  },
  "ulusal-adana-kozan-baraj-golu": {
    lat: 37.5201309,
    lng: 35.8454972,
    precision: "Genel bölge",
    label: "Kozan Barajı · Kozan, Adana",
    note: "Pin Kozan Barajı rezervuarının genel su konumudur. Hassas su kütlesi kaydı ve rezervuar kimliği doğrulanmıştır; doğrudan kıyı girişi veya park noktası değildir. Son kilometrede işletme güvenliği, özel parsel, yol ve tabela koşulları ayrıca kontrol edilmelidir.",
    sources: [
      {
        label: "Tarım ve Orman Bakanlığı – hassas su kütleleri listesi",
        url: "https://www.tarimorman.gov.tr/SYGM/Belgeler/mevzuatlar%202024/Y%C3%96NETMEL%C4%B0KLER/HASSAS%20SU%20K%C3%9CTLELER%C4%B0%20%C4%B0LE%20BU%20K%C3%9CTLELER%C4%B0%20ETK%C4%B0LEYEN%20ALANLARIN%20BEL%C4%B0RLENMES%C4%B0%20VE%20SU%20KAL%C4%B0TES%C4%B0N%C4%B0N%20%C4%B0Y%C4%B0LE%C5%9ET%C4%B0R%C4%B0LMES%C4%B0%20HAKKINDA%20Y%C3%96NETMEL%C4%B0K.pdf",
        note: "Kozan Barajını Ceyhan Havzasında Adana'daki resmî su kütlesi olarak listeler."
      },
      {
        label: "OpenStreetMap – Kozan Baraj Gölü",
        url: "https://www.openstreetmap.org/relation/2624072",
        note: "Genel rezervuar koordinatı için açık harita kaydı; mikro kıyı erişimi değildir."
      }
    ]
  },
  "ulusal-malatya-kapikaya-baraj-golu-malatya": {
    lat: 38.3466074,
    lng: 38.6360973,
    precision: "Genel bölge",
    label: "Kapıkaya Turgut Özal Barajı · Malatya",
    note: "Pin Kapıkaya Turgut Özal Barajı su kütlesinin genel merkezini gösterir. Resmî Malatya brifingi barajın su ürünleri üretiminde kullanıldığını doğrular; bu durum kıyının tamamının amatör avcılığa veya kamusal geçişe açık olduğu anlamına gelmez. Son kıyı yaklaşımı ve işletme alanları ayrıca kontrol edilmelidir.",
    sources: [
      {
        label: "Malatya İl Tarım ve Orman Müdürlüğü – 2024 Brifingi",
        url: "https://malatya.tarimorman.gov.tr/Belgeler/%C4%B0l%20M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC%20Brifing/Brifing_2024.pdf",
        note: "Kapıkaya Turgut Özal Barajının 2024 yılında su ürünleri yetiştiricilik üretimine dahil edildiğini doğrular."
      },
      {
        label: "OpenStreetMap – Kapıkaya Baraj Gölü",
        url: "https://www.openstreetmap.org/relation/9513200",
        note: "Genel su kütlesi koordinatı için açık harita kaydı; doğrudan rota pini değildir."
      }
    ]
  }
};