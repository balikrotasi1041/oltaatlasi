import type { CPlusReview } from "./meralar-d-to-cplus-2026-11-11";

export const dailyCPlusReviews20261112: CPlusReview[] = [
  {
    slug: "ankara-500km-usak-yelegen-goleti",
    district: "Eşme",
    fish: {
      label: "Gölete özgü resmî sazan salımı",
      source: { label: "Eşme Kaymakamlığı – İlçe Tarım Müdürlüğü", url: "https://esme.gov.tr/ilce-tarim-mudurlugu", note: "İlçe Tarım 2016 yılında Yeleğen Göleti'ne 20 bin sazan bırakıldığını kaydediyor." },
      basis: "Tarihsel salım kaydıdır. Yetişkin stok ve av verimi ölçülmedi."
    },
    access: { label: "Zafer Kalkınma Ajansı – Uşak'ta sportif olta", url: "https://depo.zafer.gov.tr/depo/documents/Zafer_Dergi/68b1d177-3c3b-4577-aea4-aec0f1bf1c60.pdf", note: "Ajansın sportif olta çalışması Eşme Yeleğen Göleti'ni adıyla listeler." },
    additionalSources: [{ label: "Zafer Kalkınma Ajansı – Yeleğen saha formu", url: "https://dokuman.zafer.gov.tr/uiassets/filemanagement/B%C4%B0LG%C4%B0BANKASI/usak/usak-afyon-su-urunleri-kapasitesinin-belirlenmesi.pdf", note: "Eşme'deki Yeleğen sulama göletinin konumunu doğrular." }],
    localRule: "Yalnız açık ve kamusal kıyı yaklaşımını kullanın. Sulama yapıları, levhalı alanlar ve özel tarım parselleri dışarıda kalır.",
    safety: "Su çekilmişse çamurlu zemine inmeyin ve su alma yapısının yakınında durmayın."
  },
  {
    slug: "ankara-500km-cankiri-gumerdigin-goleti",
    district: "Şabanözü",
    fish: {
      label: "Gölete özgü resmî sazan salımı",
      source: { label: "Çankırı İl Tarım – Gümerdiğin balıklandırması", url: "https://cankiri.tarimorman.gov.tr/Haber/474/Gol-Ve-Goletlere-102-000-Adet-Yavru-Balik-Birakildi", note: "İl Tarım 2018 sazan yavrusu salımı yapılan sular arasında Gümerdiğin Göleti'ni sayıyor." },
      basis: "Duyurudaki toplam birden fazla göleti kapsar. Bugünkü av miktarı hakkında tahmin vermez."
    },
    access: { label: "Çankırı İl Tarım – 2014 çalışma raporu", url: "https://cankiri.tarimorman.gov.tr/Belgeler/KutuMenu/2014y%C4%B1l%C4%B1%C3%A7al%C4%B1%C5%9Fmakitab%C4%B1.pdf", note: "Rapor Gümerdiğin'i, Şabanözü'nde amatör olta ve mesire için de kullanılan sulama göletlerinden biri olarak gösterir." },
    additionalSources: [
      { label: "Şabanözü Belediyesi – Çamlık Mesire Alanı", url: "https://sabanozu.bel.tr/2024-yili-faaliyet-raporu/", note: "Gümerdiğin'de gölet manzaralı kamusal mesire yaklaşımı ve bakımı kaydedilir." },
      { label: "Şabanözü Belediyesi – Gümerdiğin su beslemesi", url: "https://sabanozu.bel.tr/2025-yili-faaliyet-raporu/", note: "Göleti dolduran kanal çalışmasını kaydeder." }
    ],
    localRule: "Açık kuru kıyıya izinli yollardan yaklaşın. Dolum kanalı, sulama gövdesi ve bakım sahasına girmeyin.",
    safety: "Göletin su seviyesi ve çamur hattı değişebilir. Çamlık mesire yolu bir genel yaklaşım referansıdır."
  },
  {
    slug: "ulusal-nevsehir-kumtepe-baraj-golu-nevsehir",
    name: "Kumtepe Göleti",
    district: "Hacıbektaş",
    waterType: "Gölet",
    coordinates: [38.929122585613, 34.629527778124],
    fish: {
      label: "Gölete özgü resmî balıklandırma",
      source: { label: "Nevşehir İl Tarım – Kumtepe sazan salımı", url: "https://nevsehir.tarimorman.gov.tr/Haber/947/Nevsehirde-Baraj-Ve-Goletlere-Yavru-Balik-Birakildi", note: "İl Tarım 2023 yılında Hacıbektaş Kumtepe Göleti'ne üç bin sazan yavrusu bırakıldığını kaydediyor." },
      basis: "Salım türü bu suya bağlar. Yetişkin stok veya bugünkü av verimi ölçümü değildir."
    },
    access: { label: "Nevşehir'de açık hava rekreasyonu saha araştırması", url: "https://dergipark.org.tr/tr/download/article-file/1429062", note: "Saha araştırması Kumtepe Göleti'ni sportif olta kullanılan sular arasında kaydeder." },
    additionalSources: [
      { label: "Hacıbektaş Belediyesi – Kumtepe çevre bakımı", url: "https://www.hacibektas.bel.tr/web/her-sey-sevmek-ve-inanmakla-baslar-126/", note: "Belediye gölet çevresinde temizlik çalışması kaydeder." },
      { label: "Nevşehir 2023 çevre durum raporu", url: "https://webdosya.csb.gov.tr/db/ced/icerikler/nevseh-r_-cdr2023-20241107090826.pdf", note: "Hıdırlar Kumtepe izleme istasyonu göletin genel konumunu doğrular." }
    ],
    localRule: "Yalnızca açık ve kamusal kıyıda olta kullanın. Sulama yapıları ve özel tarla girişlerine ilişkin levhalara uyun.",
    safety: "Düşük su seviyesinde kıyı çamuruna inmeyin. Gövde, su alma yapısı ve dolusavaktan uzak durun."
  }
];
