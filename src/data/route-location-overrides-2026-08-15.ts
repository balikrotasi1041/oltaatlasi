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
  }
};
