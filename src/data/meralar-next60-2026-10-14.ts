import type { EnrichedMera, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

const reviewedAt="2026-10-14";
// This is a documented editorial triage, not a bulk automatic C+ assignment.
export const next60Research20261014=[
  {
    "slug": "ankara-500km-duzce-kurugol",
    "before": "C",
    "after": "C+",
    "group": "2026-09-14 multi-source",
    "evidence": "İl Tarım Kurugöl'ü tekrarlanan balıklandırma ve sportif balıkçılık hedefi içindeki su olarak kaydeder; orman/kırsal son yaklaşım ve park noktası ayrıca teyit edilmelidir.",
    "missing": "Orman yolu, hava, çamur, yangın dönemi kısıtları ve kıyı zemin koşulları değişebilir; araçla son yaklaşım garanti edilmez.",
    "sources": [
      {
        "label": "Düzce İl Tarım - 35 bin yavru sazan",
        "url": "https://duzce.tarimorman.gov.tr/Haber/1019/Ilimizde-35-Bin-Yavru-Sazan-Gol_goletle-Bulustu",
        "note": "Çamlıpınar Göleti ve Kurugöl'e ayrı ayrı 5.000 sazan yavrusu bırakıldığını ve yer/boy/zaman yasaklarına uyulmasını kaydeder."
      },
      {
        "label": "Düzce İl Tarım - 2022 balıklandırması",
        "url": "https://duzce.tarimorman.gov.tr/Haber/960/",
        "note": "Çamlıpınar Göleti ve Kurugöl dahil dört suya pullu sazan bırakıldığını doğrular; stok destekleme kaydı av garantisi değildir."
      },
      {
        "label": "Düzce İl Kültür ve Turizm – Kurugöl sportif olta",
        "url": "https://www.kulturportali.gov.tr/turkiye/duzce/turizmaktiviteleri/kurugol",
        "note": "Kurugöl Tabiat Parkı için sportif olta faaliyetini açıkça tanımlar; yerel işletme ve tabelalar kontrol edilmelidir."
      }
    ]
  },
  {
    "slug": "akkoy-baraji-genel-amator-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Akköy'de amatör ve sportif balıkçılık faaliyetinin denetlendiğini doğrular. Akköy'e sazan yavrusu bırakıldığını resmî olarak doğrular.",
    "missing": "Denetlenen faaliyetin dışında güvenli ve kamusal genel kıyı sınırı",
    "sources": [
      {
        "label": "Kayseri İl Tarım - Drone ile su ürünleri denetimi",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",
        "note": "Akköy'de amatör ve sportif balıkçılık faaliyetinin denetlendiğini doğrular."
      },
      {
        "label": "Kayseri İl Tarım - 2015 sazan balıklandırması",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/551/265-Bin-Sazan-Baligi-Yavrusu-Goletlerimize-Birakildi",
        "note": "Akköy'e sazan yavrusu bırakıldığını resmî olarak doğrular."
      },
      {
        "label": "Kayseri İl Kültür ve Turizm - Av Turizmi ve Balıkçılık",
        "url": "https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",
        "note": "Akköy Barajında sarı ve pullu sazan balıkçılığını destekler."
      }
    ]
  },
  {
    "slug": "kovali-baraji-genel-amator-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Kovalı'da amatör ve sportif balıkçılık faaliyetini doğrular. Kovalı'ya sazan bırakıldığını doğrular.",
    "missing": "Denetim alanı ile izinli kamusal kıyının güncel eşleştirmesi",
    "sources": [
      {
        "label": "Kayseri İl Tarım - Drone ile denetim",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",
        "note": "Kovalı'da amatör ve sportif balıkçılık faaliyetini doğrular."
      },
      {
        "label": "Kayseri İl Tarım - 2015 sazan balıklandırması",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/551/265-Bin-Sazan-Baligi-Yavrusu-Goletlerimize-Birakildi",
        "note": "Kovalı'ya sazan bırakıldığını doğrular."
      },
      {
        "label": "Kayseri İl Kültür ve Turizm - Balıkçılık",
        "url": "https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",
        "note": "Kovalı için sarı sazan ve turna türlerini belirtir."
      }
    ]
  },
  {
    "slug": "agcasar-baraji-genel-amator-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Ağcaşar'da amatör/sportif faaliyet bulunduğunu doğrular. Ağcaşar için pullu sazan ve turna türlerini belirtir.",
    "missing": "Aktif sulama işletmesinden ayrılmış güncel kamusal kıyı",
    "sources": [
      {
        "label": "Kayseri İl Tarım - Drone denetimi",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/1617/Ilimizde-Drone-Ile-Su-Urunleri-Denetimleri-Yapilmaya-Baslandi",
        "note": "Ağcaşar'da amatör/sportif faaliyet bulunduğunu doğrular."
      },
      {
        "label": "Kayseri İl Kültür ve Turizm - Balıkçılık",
        "url": "https://kayseri.ktb.gov.tr/TR-55138/av-turizmi-ve-balikcilik.html",
        "note": "Ağcaşar için pullu sazan ve turna türlerini belirtir."
      },
      {
        "label": "Ağcaşar Sulama Birliği",
        "url": "https://www.agcasarsulama.gov.tr/",
        "note": "Barajın Yahyalı merkezli aktif sulama işletme bağlamını doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-bolu-buyukgol",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Milli park içindeki dönemsel sportif olta kullanımı ve alabalık kaydı bağımsız kamu kaynaklarıyla çaprazlandı.",
    "missing": "Milli park koruma, ücret ve dönem kuralları üstündür; yalnız izin verilen alan ve tarihler kullanılmalıdır.",
    "sources": [
      {
        "label": "Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı",
        "url": "https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html",
        "note": "Büyükgöl ve Deringöl'de dönemsel ücretli sportif olta balıkçılığı ve alabalık varlığını resmî olarak bildirir."
      },
      {
        "label": "MEB Okul Dışı Öğrenme - Yedigöller",
        "url": "https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866",
        "note": "Büyükgöl kimliği ve alabalık geçmişini bağımsız kamu kaynağıyla doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-bolu-deringol",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Deringöl için resmî dönemsel sportif olta kullanımı ve tür kaydı bağımsız kamu kaynağıyla çaprazlandı.",
    "missing": "Milli park koruma, ücret ve dönem kuralları üstündür; güncel izinli kesim ve saatler kullanılmalıdır.",
    "sources": [
      {
        "label": "Bolu İl Kültür ve Turizm - Yedigöller Milli Parkı",
        "url": "https://bolu.ktb.gov.tr/TR-354569/yedigoller-milli-parki.html",
        "note": "Deringöl'de dönemsel ücretli sportif olta balıkçılığı ve alabalık varlığını resmî olarak bildirir."
      },
      {
        "label": "MEB Okul Dışı Öğrenme - Yedigöller",
        "url": "https://okuldisiogrenme.eba.gov.tr/mekan-detay/bolu-yedigoller-milli-parki-866",
        "note": "Deringöl-Büyükgöl bağlantısını ve milli park kimliğini bağımsız kamu kaynağıyla doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-canakkale-tasoluk-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "DSİ su yapısı kimliği ve Biga genel yol ağı planlama bağlamı sağlar; akademik tür kaydı kamusal kıyı izni vermez ve mikro giriş doğrulanmış değildir.",
    "missing": "Sulama amaçlı işletilen barajda gövde, vana/iletim yapıları, servis yolu ve çalışma alanları dışlanmalı; sulama sezonu ve su kotu nedeniyle kıyı koşulları değişebilir.",
    "sources": [
      {
        "label": "Afyon Kocatepe Üniversitesi - Taşoluk Baraj Gölü tatlısu kefali çalışması",
        "url": "https://dergipark.org.tr/en/pub/akufemubid/article/237463",
        "note": "Nisan 2010-Mayıs 2011 arasında Taşoluk Baraj Gölünden 150 Squalius cephalus örneğini doğrudan inceleyen hakemli rota-özel çalışmadır."
      },
      {
        "label": "DSİ 25. Bölge - Taşoluk Barajı",
        "url": "https://bolge25.dsi.gov.tr/Sayfa/Detay/1035",
        "note": "Biga/Taşoluk Barajının resmî su yapısı kimliği ve işletme bağlamı için kullanılır; gövde ve işletme sahaları kamusal olta erişimi değildir."
      }
    ]
  },
  {
    "slug": "ankara-500km-denizli-esen-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Denizli İl Kültür ve Turizm kaynaklı Kültür Portalı sportif olta balıkçılığını ve Beyağaç üzerinden genel ulaşımı açıkça tarif eder.",
    "missing": "Orman içi dinlenme alanında yangın dönemi, rekreasyon yoğunluğu, toprak yol ve su seviyesi şartları değişebilir; tesis bulunmadığı için hazırlık ilçe merkezinde yapılmalıdır.",
    "sources": [
      {
        "label": "Kültür Portalı / Denizli İl Kültür ve Turizm - Eşen Göleti",
        "url": "https://www.kulturportali.gov.tr/turkiye/denizli/gezilecekyer/esen-goleti-beyagac",
        "note": "Beyağaç Eşen Göletinde sportif olta balıkçılığı yapıldığını, aynalı sazan üretildiğini ve genel ulaşım tarifini resmî turizm kaynağı olarak verir."
      },
      {
        "label": "Beyağaç Kaymakamlığı – Eşen Göleti",
        "url": "https://www.beyagac.gov.tr/beyagac-turizm-yerleri",
        "note": "Kültür Portalıyla aynı tarihsel metni tekrarlar; bağımsız ikinci saha kanıtı sayılmamalıdır."
      }
    ]
  },
  {
    "slug": "ankara-500km-nevsehir-karaburna-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Valilik/İl Tarım sazan balıklandırmaları ile İl Özel İdaresinin sulama göleti kimliği çaprazlanır; köy/gölet genel yaklaşımı dışında mikro kıyı iddiası yapılmaz.",
    "missing": "Aktif sulama altyapısıdır. Kanal, vana, işletme bölümü ve tarımsal çalışma sahaları dışlanmalı; kıyı zemini, özel parseller ve güncel tabela kontrol edilmelidir.",
    "sources": [
      {
        "label": "Nevşehir Valiliği - baraj ve göletlere yavru balık",
        "url": "https://www.nevsehir.gov.tr/baraj-ve-goletlere-yavru-balik-birakildi",
        "note": "2023'te Ayhanlar Barajına 101 bin, Karaburna Göletine 16 bin sazan bırakıldığını resmî olarak doğrular."
      },
      {
        "label": "Nevşehir İl Tarım - 2022 gölet balıklandırması",
        "url": "https://nevsehir.tarimorman.gov.tr/Haber/905/Nevsehirde-Goletlere-Yavru-Balik-Birakildi",
        "note": "Karaburna Göletine sazan bırakıldığını rota özelinde tekrar doğrular; geçmiş balıklandırma av garantisi değildir."
      },
      {
        "label": "Nevşehir İl Özel İdaresi - Karaburna Göleti yenileme",
        "url": "https://www.nevsehirozelidare.gov.tr/karaburna-goleti-yenileniyor",
        "note": "Hacıbektaş Karaburna Göletinin sulama yapısı kimliğini ve işletme bağlamını resmî olarak doğrular; sulama tesisleri olta erişim alanı değildir."
      }
    ]
  },
  {
    "slug": "ulusal-bilecik-gunyurdu-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Pazaryeri Günyurdu (Mustafa Eldemir) için DSİ balıklandırması ile Kültür Portalı mesire/olta kaydı birlikte bulunuyor. Eski ticari yasak metni bugünün 6/2 hükmü sayılmadı; güncel ekler ve yerel kullanım kesinleştirilmedi.",
    "missing": "Güncel yer yasağı ve işletme erişim koşullarının rota düzeyinde teyidi",
    "sources": [
      {
        "label": "DSİ 3. Bölge tesis envanteri",
        "url": "https://bolge03.dsi.gov.tr/Sayfa/Detay/898",
        "note": "Resmî su yapısı kimliği; kıyı giriş izni değildir."
      },
      {
        "label": "DSİ 2013 istatistik bülteni, Ek Çizelge 19-10 sıra 43",
        "url": "https://cdniys.tarimorman.gov.tr/api/File/GetFile/425/KonuIcerik/769/1117/DosyaGaleri/2013-yili-hib-kitabi.pdf",
        "note": "PDF s.646: Günyurdu/Bilecik, 10.000 pullu sazan; güncel stok sayısı değildir."
      },
      {
        "label": "Kültür Portalı, Günyurdu Göleti",
        "url": "https://www.kulturportali.gov.tr/turkiye/bilecik/gezilecekyer/gunyurdu-golet",
        "note": "2021 güncellemeli mesire ve olta kullanımı; bugün bütün kıyılara açık giriş garantisi değildir."
      }
    ]
  },
  {
    "slug": "burdur-karamanli-karamanli-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Barajın Değirmen Deresi üzerinde sulama amacıyla kurulduğunu, göl alanı ve kapasitesini resmî ilçe kaynağıyla doğrular. 28 Haziran 2024 tarihli resmî çalışma Karamanlı Baraj Gölünde stok tespiti yapıldığını ve avcılık programının kaynak koruma yaklaşımıyla düzenleneceğini kaydeder.",
    "missing": "Stok tespiti ve olası istihsal programıyla uyumlu güncel amatör kıyı sınırı",
    "sources": [
      {
        "label": "Karamanlı Kaymakamlığı - Karamanlı Barajı",
        "url": "https://www.karamanli.gov.tr/baraj",
        "note": "Barajın Değirmen Deresi üzerinde sulama amacıyla kurulduğunu, göl alanı ve kapasitesini resmî ilçe kaynağıyla doğrular."
      },
      {
        "label": "Burdur İl Tarım ve Orman Müdürlüğü - Karamanlı Baraj Gölü stok tespiti",
        "url": "https://burdur.tarimorman.gov.tr/Haber/500/Karamanli-Baraj-Golu-Stok-Tespit-Calismasi",
        "note": "28 Haziran 2024 tarihli resmî çalışma Karamanlı Baraj Gölünde stok tespiti yapıldığını ve avcılık programının kaynak koruma yaklaşımıyla düzenleneceğini kaydeder."
      },
      {
        "label": "Burdur İl Tarım ve Orman Müdürlüğü - 2026 balıklandırma faaliyeti",
        "url": "https://burdur.tarimorman.gov.tr/Haber/567/2026-Yili-Baliklandirma-Faaliyetimiz-Gerceklestirildi",
        "note": "4 Ağustos 2026 tarihli resmî kayıt Tefenni Çaylı Göleti ile Karamanlı Baraj Gölünün yavru sazanla balıklandırıldığını ve sürdürülebilir amatör balıkçılığın desteklendiğini açıkça kaydeder."
      }
    ]
  },
  {
    "slug": "cakirli-iznik-golu-piknik-sahili",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "İznik Gölü sahilindeki kamusal piknik alanını doğrular. Çakırlı kıyısındaki bakım ve rekreasyon kullanımını destekler.",
    "missing": "Ticari 3 No'lu avlakla çakışmadığı doğrulanmış amatör kıyı bölümü",
    "sources": [
      {
        "label": "Orhangazi Belediyesi – Çakırlı Piknik Alanı",
        "url": "https://orhangazi.bel.tr/haberler/cakirli-piknik-alaninda-duzenlemeler-tamamlandi",
        "note": "İznik Gölü sahilindeki kamusal piknik alanını doğrular."
      },
      {
        "label": "Bursa Büyükşehir – İznik Gölü kıyı bakımı",
        "url": "https://www.bursa.bel.tr/haber/iznik-golu-kiyisina-kis-bakimi-25409",
        "note": "Çakırlı kıyısındaki bakım ve rekreasyon kullanımını destekler."
      },
      {
        "label": "Bursa İl Tarım ve Orman – İznik Gölü sazan balıklandırması",
        "url": "https://bursa.tarimorman.gov.tr/Haber/450/500-Bin-Yavru-Sazan-Iznik-Golu-Ile-Bulustu",
        "note": "Sazan varlığını stok desteği üzerinden doğrular."
      }
    ]
  },
  {
    "slug": "darili-goleti-genel-amator-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Darılı Göletini Felahiye sulama kaynakları arasında doğrular. Darılı Göletini Kayseri işletme tesisleri arasında listeler.",
    "missing": "Gölet çevresindeki güncel kamusal kıyı girişi",
    "sources": [
      {
        "label": "Kayseri Valiliği - Felahiye",
        "url": "https://www.kayseri.gov.tr/felahiye",
        "note": "Darılı Göletini Felahiye sulama kaynakları arasında doğrular."
      },
      {
        "label": "DSİ 12. Bölge - tesisler",
        "url": "https://bolge12.dsi.gov.tr/Sayfa/Detay/1141",
        "note": "Darılı Göletini Kayseri işletme tesisleri arasında listeler."
      },
      {
        "label": "Kayseri çevre raporu",
        "url": "https://webdosya.csb.gov.tr/db/kayseri/menu/kayseri-cdr-2016_20180205015334.pdf",
        "note": "Darılı Göleti yüzeysel su koordinatını verir."
      }
    ]
  },
  {
    "slug": "ketenciler-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "7 Eylül 2022 tarihli resmî kayıtta Ketenciler Göleti için 40.000 sazan yavrusu balıklandırması yer alır; bu kayıt kıyıdan günlük av garantisi değildir. 2025 balıklandırılan su kaynakları tablosunda Ketenciler Göleti 40.000 adet ile yeniden listelenir; idari tabloda İzmit altında gösterilir.",
    "missing": "Toplu taşıma durağından sonra izinli ve güvenli genel kıyı erişimi",
    "sources": [
      {
        "label": "Kocaeli İl Tarım ve Orman Müdürlüğü – Ketenciler Göleti balıklandırması",
        "url": "https://kocaeli.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=454",
        "note": "7 Eylül 2022 tarihli resmî kayıtta Ketenciler Göleti için 40.000 sazan yavrusu balıklandırması yer alır; bu kayıt kıyıdan günlük av garantisi değildir."
      },
      {
        "label": "Kocaeli İl Tarım ve Orman Müdürlüğü – 2025 Faaliyet Raporu",
        "url": "https://kocaeli.tarimorman.gov.tr/Belgeler/pdf_dosyalar_/Kocaeli%20%C4%B0l%20Tar%C4%B1m%20ve%20Orman%20M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC%202025%20Y%C4%B1l%C4%B1%20Faaliyet%20Raporu.pdf",
        "note": "2025 balıklandırılan su kaynakları tablosunda Ketenciler Göleti 40.000 adet ile yeniden listelenir; idari tabloda İzmit altında gösterilir."
      },
      {
        "label": "Kocaeli Büyükşehir Belediyesi – Kartepe / Ketenciler",
        "url": "https://www.kocaeli.bel.tr/kartepe.html",
        "note": "Ketenciler yerleşimini Kartepe ilçesine bağlı köyler arasında ve il merkezine yaklaşık 20 km mesafede doğrular."
      }
    ]
  },
  {
    "slug": "pasali-goleti-genel-amator-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Gölet ve aktif sulama şebekesini doğrular. Paşalı'ya sazan yavrusu bırakıldığını doğrular.",
    "missing": "Aktif sulama tesisi dışında izinli ve güvenli kamusal kıyı",
    "sources": [
      {
        "label": "DSİ 12. Bölge - Paşalı Göleti incelemesi",
        "url": "https://bolge12.dsi.gov.tr/Haber/Detay/10060",
        "note": "Gölet ve aktif sulama şebekesini doğrular."
      },
      {
        "label": "Kayseri İl Tarım - sazan balıklandırması",
        "url": "https://kayseri.tarimorman.gov.tr/Haber/551/265-Bin-Sazan-Baligi-Yavrusu-Goletlerimize-Birakildi",
        "note": "Paşalı'ya sazan yavrusu bırakıldığını doğrular."
      },
      {
        "label": "Kayseri 2018 Çevre Durum Raporu",
        "url": "https://webdosya.csb.gov.tr/db/ced/icerikler/kayser-_cdr_2018_son-20191028091140.pdf",
        "note": "Paşalı Göleti yüzeysel su izleme koordinatını verir."
      }
    ]
  },
  {
    "slug": "ulusal-bursa-babasultan-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Kestel Babasultan sazan stok tahmini ticari ihale bağlamındadır. Yakındaki kafes işletmesi yabani kıyı stok kanıtı sayılmadı.",
    "missing": "İl Tarımın güncel amatör kıyı alanı ve erişim kaydı",
    "sources": [
      {
        "label": "DSİ 1. Bölge tesis envanteri",
        "url": "https://bolge01.dsi.gov.tr/Sayfa/Detay/879",
        "note": "Resmî tesis kimliği; balık ve serbest erişim kanıtı değildir."
      },
      {
        "label": "Bursa İl Tarım, Babasultan istihsal ihalesi",
        "url": "https://bursa.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=1bcf954e-b36a-404b-bf17-6d58f011ccb4&TermSetId=fd637a8b-77fd-4102-823a-4a88a7156368&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=254%2FBabasultan-Baraj-Golu-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi",
        "note": "2017 Kestel Babasultan sazan stok tablosu; kiralama kıyıdan amatör av izni değildir."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ulusal-bursa-bogazkoy-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "İnegöl Boğazköyde 2024 yayın yakalaması resmî ceza açıklamasında belgeli. Olay av serbestliği değil, tür kaydı ve dönem yasağı uyarısıdır.",
    "missing": "İzinli ve güvenli genel kıyı yaklaşımı",
    "sources": [
      {
        "label": "DSİ 1. Bölge tesis envanteri",
        "url": "https://bolge01.dsi.gov.tr/Sayfa/Detay/879",
        "note": "Resmî tesis kimliği; balık ve serbest erişim kanıtı değildir."
      },
      {
        "label": "Bursa İl Tarım, 06.06.2024 denetim açıklaması",
        "url": "https://bursa.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1900",
        "note": "İnegöl Boğazköyde 01.06.2024 yayın avı ve ceza: türün varlığını destekler, av iznini desteklemez. Haberin 5/2 hukuku güncel kabul edilmedi."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ulusal-duzce-kucuk-melen-cayi",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "2016 örneklemesinin Şekil 1 ve Tablo 1inde Küçük Melen 21/24/25 istasyonlarında Squalius pursakensis kaydı vardır. Büyük Melen/Kocaali hattına taşınmaz; çalışma güncel stok ölçümü değildir.",
    "missing": "Örnekleme kesimiyle eşleşen güvenli kamusal kıyı yaklaşımı",
    "sources": [
      {
        "label": "Güçlü 2020, Düzce ihtiyofaunası",
        "url": "https://dergipark.org.tr/tr/download/article-file/1121775",
        "note": "2016 örneklemesi; Şekil 1 ve Tablo 1 birlikte okundu. Küçük Melen 21/24/25 istasyonları; Efteni türleri aktarılmadı."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      },
      {
        "label": "Düzce 2011 İl Çevre Durum Raporu",
        "url": "https://webdosya.csb.gov.tr/db/ced/editordosya/duzce_icdr2011.pdf",
        "note": "Küçük Melen su kimliği ve tarihsel kullanım bağlamı. Güncel güvenli kıyı izni değildir."
      }
    ]
  },
  {
    "slug": "ulusal-kocaeli-bayraktar-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Bayraktar için 2022 İl Tarım kaydı 20.000 sazan yavrusu salımı bildirir. Kıyı girişine ilişkin yetkili kullanım belgesi bulunmadı.",
    "missing": "Güvenli ve izinli genel kıyı erişimi",
    "sources": [
      {
        "label": "DSİ 1. Bölge tesis envanteri",
        "url": "https://bolge01.dsi.gov.tr/Sayfa/Detay/879",
        "note": "Resmî tesis kimliği; balık ve serbest erişim kanıtı değildir."
      },
      {
        "label": "Kocaeli İl Tarım, 2022 balıklandırması",
        "url": "https://kocaeli.tarimorman.gov.tr/Haber/454/318-250-Adet-Sazan-Baligi-Yavrusu-Sularimiza-Birakildi",
        "note": "Bayraktar 20.000, Şahinler 28.000 sazan yavrusu. Çayırköy kaydı Bıçkıdere ile birleştirilmedi."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      },
      {
        "label": "Kocaeli İl Tarım – Bayraktar Göleti 20.000 sazan",
        "url": "https://kocaeli.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=154debf3-554e-4e3f-9423-a61f9c705505&TermSetId=afcc0898-2008-4a7d-8bab-da116bbdb985&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=454%2F318-250-Adet-Sazan-Baligi-Yavrusu-Sularimiza-Birakildi",
        "note": "2022 balıklandırma tablosunda İzmit/Bayraktar 20.000 sazan yavrusu açıkça listelenir."
      }
    ]
  },
  {
    "slug": "ulusal-kocaeli-sahinler-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Şahinler için 2022 İl Tarım kaydı 28.000 sazan yavrusu salımı bildirir. Gölet çevresindeki parsellerin serbest geçiş verdiği doğrulanmadı.",
    "missing": "Güvenli ve izinli genel kıyı erişimi",
    "sources": [
      {
        "label": "DSİ 1. Bölge tesis envanteri",
        "url": "https://bolge01.dsi.gov.tr/Sayfa/Detay/879",
        "note": "Resmî tesis kimliği; balık ve serbest erişim kanıtı değildir."
      },
      {
        "label": "Kocaeli İl Tarım, 2022 balıklandırması",
        "url": "https://kocaeli.tarimorman.gov.tr/Haber/454/318-250-Adet-Sazan-Baligi-Yavrusu-Sularimiza-Birakildi",
        "note": "Bayraktar 20.000, Şahinler 28.000 sazan yavrusu. Çayırköy kaydı Bıçkıdere ile birleştirilmedi."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      },
      {
        "label": "Kocaeli İl Tarım – Şahinler Göleti 28.000 sazan",
        "url": "https://kocaeli.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=154debf3-554e-4e3f-9423-a61f9c705505&TermSetId=afcc0898-2008-4a7d-8bab-da116bbdb985&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=454%2F318-250-Adet-Sazan-Baligi-Yavrusu-Sularimiza-Birakildi",
        "note": "2022 balıklandırma tablosunda İzmit/Şahinler 28.000 sazan yavrusu açıkça listelenir."
      }
    ]
  },
  {
    "slug": "ulusal-sakarya-cark-deresi",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Yazlık Kavşak çevresel planında Çark Deresine özgü türler bulunur. Şantiye, dere ıslahı ve su kalitesi dikkate alınmadan bütün dere avlak olarak sunulamaz.",
    "missing": "Yazlık kesiminde güncel güvenli ve izinli kıyı alanı",
    "sources": [
      {
        "label": "Sakarya Üniversitesi Şehir Hafızası, Hidrografya",
        "url": "https://sehirhafizasi.sakarya.edu.tr/hidrografya/",
        "note": "Sakarya, Çark ve Melen coğrafi kimliği; tek başına tür veya erişim kanıtı değildir."
      },
      {
        "label": "İLBANK, Yazlık Kavşak çevresel sosyal yönetim planı",
        "url": "https://www.ilbank.gov.tr/storage/uploads/uidb/iads_sakarya_buyuksehir_belediyesi_yazlik_kavsak_projesi_csyp_final_cc_1761927987.pdf",
        "note": "PDF s.34 / basılı s.18, Çark Deresine özgü sazan, turna ve yayın dahil tür listesi; proje çevresi, bütün dere boyunca av izni değil."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ulusal-sakarya-sakarya-nehri-sakarya-hatti",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "2020 Aşağı Sakarya çalışması yayın ve turna yakalamalarını belgeler. Ticari paraketa çalışması amatör yöntem veya kıyı izni değildir; tek pin bütün Sakarya Nehrini temsil etmez.",
    "missing": "Tür kaydıyla örtüşen kamusal ve güvenli kıyı kesimi",
    "sources": [
      {
        "label": "Sakarya Üniversitesi Şehir Hafızası, Hidrografya",
        "url": "https://sehirhafizasi.sakarya.edu.tr/hidrografya/",
        "note": "Sakarya, Çark ve Melen coğrafi kimliği; tek başına tür veya erişim kanıtı değildir."
      },
      {
        "label": "Reis ve Cerim 2020, Aşağı Sakarya balıkçılığı",
        "url": "https://dergipark.org.tr/tr/pub/limnofish/article/635248",
        "note": "Yayın ve turna yakalamaları bildirilir. Ticari paraketa amatör yöntem önerisi değildir; Bilecik hattına genellenmedi."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ulusal-tekirdag-bayramsah-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Hayrabolu Bayramşah (Sinekli) için sazan yetiştiriciliği ve 2014 başlangıçlı on beş yıllık kiralama kaydı var. 6/2 13/12-c nedeniyle serbest amatör av varsayılmadı.",
    "missing": "Projeli yetiştiricilik statüsünün güncel resmî açıklaması",
    "sources": [
      {
        "label": "Tekirdağ İl Risk Azaltma Planı",
        "url": "https://tekirdag.tarimorman.gov.tr/BelgelerArsiv/Duyuru/%C4%B0RAP.pdf",
        "note": "Bayramşah ve Bıyıkali sulama, Türkmenli sulama/içme suyu işlevi; mülkiyet ve kıyı izni yerine geçmez."
      },
      {
        "label": "Tekirdağ kıyı yapıları uzman değerlendirme raporu",
        "url": "https://webdosya.csb.gov.tr/db/mpgm/icerikler/kiyi-yapilari-uzman-degerlendirme-raporu-20230329102326.pdf",
        "note": "Bayramşah ve Bıyıkali sazan üretim bağlamı; üretim sahasının serbest amatör avlak olduğu sonucu çıkarılamaz."
      },
      {
        "label": "Tekirdağ İl Tarım 2018 raporu",
        "url": "https://tekirdag.tarimorman.gov.tr/Belgeler/TarimRaporlari/GTHB59_2018.pdf",
        "note": "Bayramşah 2014 başlangıçlı 15 yıllık yarı entansif sazan yetiştiriciliği kaydı; fesih/değişiklik teyidi olmadan serbest erişim kurulamaz."
      }
    ]
  },
  {
    "slug": "zincidere-goleti-mesire-genel-kiyi",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Göletin kamusal mesire/rekreasyon düzenlemesini doğrular. Gölet, DSİ işbirliği ve tesis bakım bağlamını doğrular.",
    "missing": "Mesire alanında balıkçılığa ayrılmış güncel güvenli kıyı",
    "sources": [
      {
        "label": "Talas Belediyesi - Zincidere Göleti",
        "url": "https://www.talas.bel.tr/haber/zincidere-goletinde-calismalar-hizlandi",
        "note": "Göletin kamusal mesire/rekreasyon düzenlemesini doğrular."
      },
      {
        "label": "Talas Belediyesi - maksimum su seviyesi",
        "url": "https://www.talas.bel.tr/haber/zincidere-goleti-maksimum-seviyede-su-tuttu",
        "note": "Gölet, DSİ işbirliği ve tesis bakım bağlamını doğrular."
      },
      {
        "label": "DSİ 12. Bölge - tesis listesi",
        "url": "https://bolge12.dsi.gov.tr/Sayfa/Detay/1141",
        "note": "Zincidere Göletini Kayseri göletleri arasında listeler."
      }
    ]
  },
  {
    "slug": "ulusal-bolu-caykoy-baraj-golu-bolu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Bolu Valiliği - Çayköy Göleti",
        "url": "https://www.bolu.gov.tr/aykoy-goleti",
        "note": "Göynük ilçesinin yaklaşık 20 km güneyindeki Çayköy Göleti'nde sportif olta balıkçılığı ve piknik yapılabildiğini doğrudan bildirir."
      },
      {
        "label": "Bolu Valiliği - Spor Turizmi",
        "url": "https://www.bolu.gov.tr/spor-turizmi",
        "note": "Çayköy Göleti'ni Bolu'da sportif balıkçılık yapılan su varlıkları arasında sayar; mikro kıyı ve güncel tabela kontrolü yine gerekir."
      }
    ]
  },
  {
    "slug": "ulusal-eskisehir-porsuk-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Resmî sportif olta kullanımı ve tür kaydı rota özelindeki bilimsel balık çalışmasıyla çaprazlandı.",
    "missing": "Su kalitesi, içme/kullanma suyu havza kuralları ve işletme uyarıları güncel olarak kontrol edilmelidir.",
    "sources": [
      {
        "label": "Kütahya İl Kültür ve Turizm - Sportif Olta Balıkçılığı",
        "url": "https://kutahya.ktb.gov.tr/TR-69435/sportif-olta-balikciligi.html",
        "note": "Porsuk Barajında sportif olta balıkçılığı ve sazan/yayın dahil türleri resmî olarak bildirir."
      },
      {
        "label": "DergiPark - Porsuk Baraj Gölü Rutilus çalışması",
        "url": "https://dergipark.org.tr/en/pub/biodicon/article/765597",
        "note": "Porsuk Baraj Gölünden doğrudan örneklenen balıklarla rota özelindeki bilimsel tür kanıtını sağlar."
      }
    ]
  },
  {
    "slug": "ankara-500km-adiyaman-karahuyuk-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Sulama göleti kimliği ve sazan balıklandırması resmî kaynaklarla çaprazlandı.",
    "missing": "Tarla/parsel, servis yolu ve tesis sınırlarının kamusal olduğu varsayılmaz.",
    "sources": [
      {
        "label": "Adıyaman İl Tarım - 2024 balıklandırması",
        "url": "https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz",
        "note": "Karahöyük Göletine sazan yavrusu bırakıldığını rota özelinde doğrular; tür olasılığıdır."
      },
      {
        "label": "DSİ 20. Bölge - Adıyaman göletleri",
        "url": "https://bolge20.dsi.gov.tr/Sayfa/Detay/1123",
        "note": "Karahöyük Göletinin işletmedeki sulama göleti kimliğini doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-duzce-camlipinar",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "İl Tarım Çamlıpınar Göletini tekrarlanan sazan balıklandırması yapılan kaynak olarak doğrular; genel bölge yaklaşımı mikro kıyı erişimi değildir.",
    "missing": "Kaynaşlı kırsalında orman/sulama yolu, çamur, tarımsal faaliyet ve dönemsel erişim değişebilir; bariyer ve tabela önceliklidir.",
    "sources": [
      {
        "label": "Düzce İl Tarım - 35 bin yavru sazan",
        "url": "https://duzce.tarimorman.gov.tr/Haber/1019/Ilimizde-35-Bin-Yavru-Sazan-Gol_goletle-Bulustu",
        "note": "Çamlıpınar Göleti ve Kurugöl'e ayrı ayrı 5.000 sazan yavrusu bırakıldığını ve yer/boy/zaman yasaklarına uyulmasını kaydeder."
      },
      {
        "label": "Düzce İl Tarım - 2022 balıklandırması",
        "url": "https://duzce.tarimorman.gov.tr/Haber/960/",
        "note": "Çamlıpınar Göleti ve Kurugöl dahil dört suya pullu sazan bırakıldığını doğrular; stok destekleme kaydı av garantisi değildir."
      }
    ]
  },
  {
    "slug": "balikesir-altieylul-bayat-sehit-aydin-nazillioglu-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Bayat Göleti'ne 2024 yılında 67 bin sazan yavrusu bırakıldığını rota özelinde doğrular. Altıeylül/Balıkesir'deki Bayat Şehit Aydın Nazillioğlu tesisini 2017'den beri işletmedeki su yapısı olarak bağımsız resmî aileden doğrular.",
    "missing": "Sulama işletmesinden ayrılmış güncel ve güvenli amatör kıyı bölümü",
    "sources": [
      {
        "label": "Balıkesir İl Tarım ve Orman Müdürlüğü - 2024 balıklandırması",
        "url": "https://balikesir.tarimorman.gov.tr/Haber/1290/%E2%80%8Bbaraj-Ve-Goletlerimize-1-Milyon-324-Bin-Yavru-Sazan-Baligi-Birakiyoruz",
        "note": "Bayat Göleti'ne 2024 yılında 67 bin sazan yavrusu bırakıldığını rota özelinde doğrular."
      },
      {
        "label": "DSİ 25. Bölge Müdürlüğü - işletmedeki göletler",
        "url": "https://bolge25.dsi.gov.tr/Sayfa/Detay/943",
        "note": "Altıeylül/Balıkesir'deki Bayat Şehit Aydın Nazillioğlu tesisini 2017'den beri işletmedeki su yapısı olarak bağımsız resmî aileden doğrular."
      },
      {
        "label": "Balıkesir İl Tarım ve Orman Müdürlüğü - balıklandırma amacı",
        "url": "https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=954%2F%E2%80%8Bbalikesirde-Tum-Zamanlarin-Baliklandirma-Rekoru-Kirildi",
        "note": "Balıkesir'deki içsu balıklandırma çalışmalarının amatör balıkçıları destekleme ve göletlerde sürdürülebilir balık popülasyonu oluşturma amacı taşıdığını açıklar."
      }
    ]
  },
  {
    "slug": "burdur-tefenni-cayli-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "4 Ağustos 2026 tarihli resmî kayıt Tefenni Çaylı Göleti ile Karamanlı Baraj Gölünün yavru sazanla balıklandırıldığını ve sürdürülebilir amatör balıkçılığın desteklendiğini açıkça kaydeder. Bakanlık yayını Tefenni Çaylı Göleti ve Sulaması yatırımını rota adıyla kaydeder; göletin sulama yapısı kimliğini destekler.",
    "missing": "Çaylı yerleşiminden sonra güncel ve izinli kamusal kıyı girişi",
    "sources": [
      {
        "label": "Burdur İl Tarım ve Orman Müdürlüğü - 2026 balıklandırma faaliyeti",
        "url": "https://burdur.tarimorman.gov.tr/Haber/567/2026-Yili-Baliklandirma-Faaliyetimiz-Gerceklestirildi",
        "note": "4 Ağustos 2026 tarihli resmî kayıt Tefenni Çaylı Göleti ile Karamanlı Baraj Gölünün yavru sazanla balıklandırıldığını ve sürdürülebilir amatör balıkçılığın desteklendiğini açıkça kaydeder."
      },
      {
        "label": "Tarım ve Orman Bakanlığı Su Dünyası - Tefenni Çaylı Göleti ve Sulaması",
        "url": "https://cdniys.tarimorman.gov.tr/api/File/GetGaleriFile/425/DosyaGaleri/1010/106.pdf",
        "note": "Bakanlık yayını Tefenni Çaylı Göleti ve Sulaması yatırımını rota adıyla kaydeder; göletin sulama yapısı kimliğini destekler."
      },
      {
        "label": "Çaylı Köyü açık harita konumu",
        "url": "https://www.haritatr.com/cayli-koyu-haritasi-m26cd",
        "note": "Çaylı yerleşiminin genel koordinatını verir. Bu kaynak yalnız yaklaşık planlama bölgesi içindir; gölet kıyısı veya park noktası değildir."
      }
    ]
  },
  {
    "slug": "ulusal-aydin-topcam-baraj-golu-aydin",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Tür, boy, adet, dönem, takım ve suya özel yasaklar için güncel resmî kaynak. Genel pin çevresinde 12 km yarıçaplı GBIF biyolojik kayıt taraması. Biyolojik oluş kaydı av başarısı, stok yoğunluğu veya hukuki uygunluk anlamına gelmez.",
    "missing": "Güncel, izinli ve güvenli kamusal kıyı girişinin rota düzeyinde doğrulanması",
    "sources": [
      {
        "label": "Tarım ve Orman Bakanlığı – Amatör su ürünleri avcılığı kuralları",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Tür, boy, adet, dönem, takım ve suya özel yasaklar için güncel resmî kaynak."
      },
      {
        "label": "GBIF balık oluş kayıtları taraması – Topçam Baraj Gölü Aydın",
        "url": "https://api.gbif.org/v1/occurrence/search?taxonKey=204&geoDistance=37.7091624%2C28.01669%2C12km&country=TR&hasCoordinate=true&hasGeospatialIssue=false&occurrenceStatus=PRESENT&limit=300",
        "note": "Genel pin çevresinde 12 km yarıçaplı GBIF biyolojik kayıt taraması. Biyolojik oluş kaydı av başarısı, stok yoğunluğu veya hukuki uygunluk anlamına gelmez."
      },
      {
        "label": "Topçam Baraj Gölü’ndeki (Aydın) Tatlısu Kefalinin (Leuciscus cephalus L., 1758) Yaş, Büyüme ve Cinsiyet Oranları",
        "url": "https://dergipark.org.tr/tr/pub/egejfas/issue/5022/68269",
        "note": "Yayın başlığı veya özeti rota adıyla ve tür adıyla eşleşmiştir. Tam metindeki örnekleme alanı ve tarih kullanıcı tarafından ayrıca kontrol edilmelidir."
      }
    ]
  },
  {
    "slug": "ulusal-bursa-buyukorhan-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Büyükorhan (Cuma) 2020 stok tablosu üç balığı destekler. Beş yıllık ihale süresinden 2026da serbest giriş sonucu çıkarılamaz.",
    "missing": "2026 kiralama durumu ve amatöre ayrılmış kıyı alanı",
    "sources": [
      {
        "label": "DSİ 1. Bölge tesis envanteri",
        "url": "https://bolge01.dsi.gov.tr/Sayfa/Detay/879",
        "note": "Resmî tesis kimliği; balık ve serbest erişim kanıtı değildir."
      },
      {
        "label": "Bursa İl Tarım, 09.09.2020 Büyükorhan Cuma ihalesi",
        "url": "https://bursa.tarimorman.gov.tr/Duyuru/456/Buyukorhan-_-Cuma_-Baraj-Golu-Su-Urunleri-Istihsal-Hakkinin-Kiraya-Verilmesi-Hakkinda-Duyuru",
        "note": "Sazan, tatlısu kefali, kızılkanat stokları; beş yıllık ihale duyurusu 2026 kira statüsü değildir."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ulusal-elazig-cip-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Elazığ Merkez/Cip Çayı kimliği, resmî mesire kullanımı ve balık popülasyonu kaydı çaprazlandı.",
    "missing": "Göçmen kuş habitatı ve aktif sulama gölüdür; hassas mikro-kıyılara yönlendirme yapılmaz.",
    "sources": [
      {
        "label": "Tarım Orman Ekranı - Cip Barajı",
        "url": "https://www.tarimtv.gov.tr/tr/video-detay/cip-baraji-gocmen-kuslarin-yeni-adresi-21452",
        "note": "Cip Çayı üzerindeki gölün balık popülasyonu ve kıyı şeridini Bakanlık yayınında doğrular."
      },
      {
        "label": "Elazığ Çevre Şehircilik - İl Hakkında",
        "url": "https://elazig.csb.gov.tr/ilimiz-hakkinda-681",
        "note": "Cip Barajını Elazığ Merkez yakınında sulama barajı ve mesire alanı bağlamında doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-gaziantep-kayacik-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Oğuzeli kimliği ve resmî avlak statüsü akademik su çalışması ve belediye işletme kaydıyla çaprazlandı.",
    "missing": "Düşük su seviyesi, ticari avlak, sulama yapıları, su kalitesi ve çamurlu kıyılar ayrıca kontrol edilmelidir.",
    "sources": [
      {
        "label": "Gaziantep İl Tarım - Kayacık Avlak Sahası 2025",
        "url": "https://gaziantep.tarimorman.gov.tr/Duyuru/385/Ihale-Ilani_kayacik-Avlak-Sahasi_",
        "note": "Kayacık Barajını Oğuzeli sınırlarında resmî su ürünleri avlak sahası olarak doğrular."
      },
      {
        "label": "DergiPark - Kayacık Barajı su kalitesi",
        "url": "https://dergipark.org.tr/tr/pub/actaquatr/article/635648",
        "note": "Kayacık Barajının su gövdesi ve çevresel risklerini rota özelinde doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-tekirdag-biyikali-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-04 stress",
    "evidence": "Süleymanpaşa Bıyıkali için sazan üretim geçmişi bulunur. Kiralama geçmişi veya sürenin bitmesi kamusal av erişimi kanıtı değildir.",
    "missing": "Güncel kira/işletme durumu ve izinli genel kıyı erişimi",
    "sources": [
      {
        "label": "Tekirdağ İl Risk Azaltma Planı",
        "url": "https://tekirdag.tarimorman.gov.tr/BelgelerArsiv/Duyuru/%C4%B0RAP.pdf",
        "note": "Bayramşah ve Bıyıkali sulama, Türkmenli sulama/içme suyu işlevi; mülkiyet ve kıyı izni yerine geçmez."
      },
      {
        "label": "Tekirdağ kıyı yapıları uzman değerlendirme raporu",
        "url": "https://webdosya.csb.gov.tr/db/mpgm/icerikler/kiyi-yapilari-uzman-degerlendirme-raporu-20230329102326.pdf",
        "note": "Bayramşah ve Bıyıkali sazan üretim bağlamı; üretim sahasının serbest amatör avlak olduğu sonucu çıkarılamaz."
      },
      {
        "label": "BSGM, 16.04.2025 değişiklik duyurusu (2025/12)",
        "url": "https://www.tarimorman.gov.tr/BSGM/Haber/332/",
        "note": "Amatör değişiklik ticari 6/1 değişikliğiyle karıştırılmaz; sualtı tüfeği belgesi 01.01.2026 itibarıyla."
      }
    ]
  },
  {
    "slug": "ankara-500km-eskisehir-mamuca-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Sarısungur (Mamuca) Göletinde belediye destekli ulusal sportif sazan yarışması yapılmış olması genel kıyı kullanımını destekler; belirli park/olta cebi sürekli açık kabul edilmez.",
    "missing": "Kano ve diğer su sporları, organizasyonlar ve yoğun rekreasyon güvenli atış koridorunu etkileyebilir; etkinlik takvimi ve saha düzeni kontrol edilmelidir.",
    "sources": [
      {
        "label": "Sarısungur Carp Race of Master 2025",
        "url": "https://ulusalajans.com.tr/esabder-sarisungur-carp-race-of-master-2025-sona-erdi-141-balik-yakalandi",
        "note": "18-23 Ağustos 2025'te Sarısungur (Mamuca) Göleti'nde 141 sazanın yakalanıp geri bırakıldığı sportif yarışmayı ve belediye desteğini kaydeder."
      }
    ]
  },
  {
    "slug": "ulusal-kutahya-beskaris-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Kütahya Valiliğinin Beşkarış Barajında kıyıdan ve bottan turna yakalama yarışması duyurusu rota-özel amatör kullanım bağlamını doğrular; etkinlik kaydı sürekli ve sınırsız erişim anlamına gelmez.",
    "missing": "Baraj işletme/gövde alanları, tekne güvenliği, su kotu ve güncel yerel kararlar kontrol edilmeli; yarışma geçmişi güncel av izni yerine kullanılmamalıdır.",
    "sources": [
      {
        "label": "Kütahya Valiliği - Beşkarış Turna Balığı Yakalama Yarışması",
        "url": "https://www.kutahya.gov.tr/buyuk-zaferin-100-yilinda-turna-baligi-yakalama-yarismasi",
        "note": "Beşkarış Barajında kıyıdan ve bottan turna balığı yakalama yarışmasını resmî olarak duyurur; rota kimliği, amatör kullanım ve turna türünü birlikte destekler."
      }
    ]
  },
  {
    "slug": "ulusal-kutahya-cavdarhisar-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "DKMP Çavdarhisar Barajı Tabiat Parkını resmî olarak doğrular; rota-özel sazan balıklandırma kaydı amatör olta bağlamını destekler. Korunan alanın her bölümü av sahası değildir.",
    "missing": "Tabiat parkı ve sulama barajı kuralları birlikte uygulanır; gövde/işletme alanları, ziyaretçi güvenliği, aktivite kısıtları ve saha tabelaları önceliklidir.",
    "sources": [
      {
        "label": "Tarım ve Orman DKMP - Tabiat Parkları",
        "url": "https://www.tarimorman.gov.tr/DKMP/Menu/28/Tabiat-Parklari",
        "note": "Çavdarhisar Barajı Tabiat Parkını Kütahya/Çavdarhisar'da resmî korunan alan listesinde doğrular; korunan alan statüsü serbest av izni değildir."
      },
      {
        "label": "Çavdarhisar Barajı sazan balıklandırma kaydı",
        "url": "https://www.kutahyahaber.com.tr/cavdarhisar-barajina-15-bin-sazan-yavrusu-birakildi",
        "note": "İlçe Tarım açıklamasını aktaran rota-özel kayıtta Çavdarhisar Barajına 15 bin pullu sazan bırakıldığı ve amatör oltacıların kurallara uyması gerektiği belirtilir."
      }
    ]
  },
  {
    "slug": "ankara-500km-adiyaman-sirimtas-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Rota kimliği, siraz stok takviyesi ve aktif HES riski ayrı kaynak aileleriyle doğrulandı.",
    "missing": "Aktif HES işletme/güvenlik alanları olta kıyısı değildir; genel su konumu yalnız planlama başlangıcıdır.",
    "sources": [
      {
        "label": "TAGEM Elazığ Su Ürünleri - Sırımtaş stok takviyesi",
        "url": "https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Haber/804/Tagem-Sahada-Sirimtas-Baraj-Golundeyiz%E2%80%A6",
        "note": "Sincik Sırımtaş Baraj Gölüne yavru siraz bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."
      },
      {
        "label": "Türk Hidrolik Dergisi - Sırımtaş Barajı ve HES",
        "url": "https://dergipark.org.tr/tr/pub/turhidder/article/853887",
        "note": "Adıyaman-Sincik rota kimliği ve aktif HES bağlamını akademik aileden doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-eskisehir-yayikli-goleti",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Eskişehir İl Tarım - 2022 sazan balıklandırması",
        "url": "https://eskisehir.tarimorman.gov.tr/Haber/1045/",
        "note": "Alpu'daki Koşmat Göletini pullu sazan bırakılan sular arasında sayar; İl Müdürlüğü programın amatör balıkçıların yararlanabileceği yetiştiriciliğe açılmamış kaynaklarda yürütüldüğünü açıklar."
      },
      {
        "label": "Eskişehir İl Tarım - 2018 il brifingi",
        "url": "https://eskisehir.tarimorman.gov.tr/Belgeler/2018_Faaliyet_Raporu/2018_Yili_Brifing.pdf",
        "note": "Alpu su yapıları listesinde 'Yayıklı (Koşmat) Göleti' ad eşleşmesini resmî olarak verir; 2022 Koşmat balıklandırma kaydını mevcut Yayıklı slugıyla ilişkilendirir."
      }
    ]
  },
  {
    "slug": "ankara-500km-yozgat-gelingullu-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Resmî avlak/stok kaydı ile Valiliğin genel rekreasyon kullanımı çaprazlandı; ticari ve amatör kullanım ayrıldı.",
    "missing": "Ticari istihsal, ağ sahası, işletme yapıları ve güncel amatör avcılık kısıtları ayrıca kontrol edilmelidir.",
    "sources": [
      {
        "label": "Yozgat İl Tarım - Gelingüllü avlak kiralama ilanı",
        "url": "https://yozgat.tarimorman.gov.tr/Duyuru/389/",
        "note": "Yozgat Merkez kimliği ve sazan/sudak/tatlısu levreği stoklarını resmî olarak doğrular; ticari kiralama amatör kıyı hakkı değildir."
      },
      {
        "label": "Yozgat Valiliği - Kültür ve Turizm",
        "url": "https://www.yozgat.gov.tr/kultur-ve-turizm",
        "note": "Gelingüllü Barajını spor, dinlence ve piknik alanları arasında sayarak genel rekreasyon bağlamını destekler."
      }
    ]
  },
  {
    "slug": "ulusal-adiyaman-cat-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Çelikhan kimliği ve resmî avlak statüsü kayıttaki rota özelindeki tür katmanıyla birlikte değerlendirildi.",
    "missing": "Yüzen adacıklar, sulama/işletme yapıları ve ticari istihsal sahası nedeniyle mikro-konum yayımlanmaz.",
    "sources": [
      {
        "label": "Adıyaman İl Tarım - Çat Baraj Gölü Avlak Sahası",
        "url": "https://adiyaman.tarimorman.gov.tr/Duyuru/617/Duyuru-Avlak-Sahasi-Ihale-Ilani",
        "note": "Çat Baraj Gölünü resmî su ürünleri avlak sahası olarak doğrular; ticari ihale amatör kıyı hakkı değildir."
      },
      {
        "label": "Adıyaman İl Kültür ve Turizm - Coğrafya",
        "url": "https://adiyaman.ktb.gov.tr/TR-61344/cografya.html",
        "note": "Çat Barajı/Çelikhan kimliği, sulama amacı ve yüzen adacık hassasiyetini doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-aksaray-ciftevi-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Aksaray İl Tarım - Çiftevi Göleti balıklandırması",
        "url": "https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",
        "note": "Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."
      },
      {
        "label": "Tarım ve Orman - amatör avcılık mevzuatı",
        "url": "https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
        "note": "Güncel amatör avcılık mevzuatı ve uygulama çerçevesi için resmî başvuru kaynağıdır."
      }
    ]
  },
  {
    "slug": "ulusal-bingol-ozluce-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-10-05 review",
    "evidence": "Tür, boy, adet, dönem, takım ve suya özel yasaklar için güncel resmî kaynak. Genel pin çevresinde 12 km yarıçaplı GBIF biyolojik kayıt taraması. Biyolojik oluş kaydı av başarısı, stok yoğunluğu veya hukuki uygunluk anlamına gelmez.",
    "missing": "Güncel, izinli ve güvenli kamusal kıyı girişinin rota düzeyinde doğrulanması",
    "sources": [
      {
        "label": "Tarım ve Orman Bakanlığı – Amatör su ürünleri avcılığı kuralları",
        "url": "https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
        "note": "Tür, boy, adet, dönem, takım ve suya özel yasaklar için güncel resmî kaynak."
      },
      {
        "label": "GBIF balık oluş kayıtları taraması – Özlüce Baraj Gölü",
        "url": "https://api.gbif.org/v1/occurrence/search?taxonKey=204&geoDistance=39.1967295%2C40.255407%2C12km&country=TR&hasCoordinate=true&hasGeospatialIssue=false&occurrenceStatus=PRESENT&limit=300",
        "note": "Genel pin çevresinde 12 km yarıçaplı GBIF biyolojik kayıt taraması. Biyolojik oluş kaydı av başarısı, stok yoğunluğu veya hukuki uygunluk anlamına gelmez."
      },
      {
        "label": "ÖZLÜCE BARAJ GÖLÜ (ELAZIĞ-BİNGÖL) SAZAN POPULASYONUNUN (Cyprinus carpio) MORFOMETRİK VE MERİSTİK ÖZELLİKLERİ",
        "url": "https://doi.org/10.12739/nwsa.2021.16.3.5a0154",
        "note": "Yayın başlığı veya özeti rota adıyla ve tür adıyla eşleşmiştir. Tam metindeki örnekleme alanı ve tarih kullanıcı tarafından ayrıca kontrol edilmelidir."
      }
    ]
  },
  {
    "slug": "ulusal-denizli-adiguzel-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Güney/Büyük Menderes üzerindeki aktif HES kimliği, akademik göl çalışması ve güncel sazan saha kaydı çaprazlandı.",
    "missing": "Aktif HES/sulama rezervuarında hızlı su seviyesi değişimi, derin kıyı ve işletme yapıları nedeniyle mikro erişim güvenli kabul edilmez.",
    "sources": [
      {
        "label": "Güney Kaymakamlığı - Adıgüzel Barajı",
        "url": "https://www.guney.gov.tr/adiguzeller-baraji",
        "note": "Adıgüzel Barajı/HES'i Güney ilçesinde Büyük Menderes üzerinde resmî olarak doğrular."
      },
      {
        "label": "DergiPark - Adıgüzel Baraj Gölü su ekolojisi",
        "url": "https://dergipark.org.tr/tr/pub/egirdir/article/305920",
        "note": "Adıgüzel Baraj Gölünde rota özelindeki akademik örnekleme ve ekoloji riskini doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-erzincan-karasu-nehri-erzincan-hatti",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Atatürk Üniversitesi - Karasu Nehri (Erzincan) balık ve fitoplankton kompozisyonu",
        "url": "https://avesis.atauni.edu.tr/yayin/06d8728a-148f-4465-9fd3-b39885d4a202/karasu-nehri-erzincan-balik-ve-fitoplankton-kompozisyonunun-belirlenmesi",
        "note": "Erzincan Karasu Nehri'ni doğrudan konu alan üniversite çalışması; rota özelinde balık kompozisyonu araştırmasını doğrular."
      },
      {
        "label": "EBYÜ Yukarı Fırat Havzası hedefleri",
        "url": "https://ebyu.edu.tr/hedefler/",
        "note": "Karasu Nehri su kalitesi ve balık türleri biyoekolojik çalışmalarını üniversite araştırma hedefi olarak kaydeder; havza bağlamını destekler."
      }
    ]
  },
  {
    "slug": "ulusal-erzincan-tercan-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Tercan Kaymakamlığı - Tercan Barajı",
        "url": "https://www.tercan.gov.tr/tercan-baraji",
        "note": "Tercan Barajının Tuzla Çayı üzerinde, Tercan'ın yaklaşık 5 km güneydoğusunda bulunduğunu ve resmî su yapısı kimliğini doğrular; kıyı girişi değildir."
      },
      {
        "label": "Erzincan Üniversitesi Fen Bilimleri Dergisi - Tercan Baraj Gölü sazan çalışması",
        "url": "https://dergipark.org.tr/en/pub/erzifbed/article/698577",
        "note": "Mayıs-Ekim 2017 arasında Tercan Baraj Gölünden 190 Cyprinus carpio örneğiyle yürütülen rota-özel akademik çalışma; sazan varlığını güçlü biçimde destekler."
      }
    ]
  },
  {
    "slug": "ulusal-eskisehir-catoren-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Eskişehir Valiliği - Çatören Baraj Gölü avlak stok ilanı",
        "url": "https://www.eskisehir.gov.tr/catoren-baraj-golu-avlak-bolgesi-su-urunleri-istihsal-hakki-kiralanacaktir",
        "note": "Seyitgazi Çatören Baraj Gölünün 404 ha avlak alanında sazan ve havuz balığı için resmî yıllık stok miktarlarını yayımlar; ticari kiralama amatör kıyı hakkı anlamına gelmez."
      },
      {
        "label": "Eskişehir İl Tarım - 2022 sazan balıklandırması",
        "url": "https://eskisehir.tarimorman.gov.tr/Haber/1045/",
        "note": "Çatören Baraj Gölünü 2022 pullu sazan balıklandırma programında rota özelinde sayar; programın amatör balıkçıların yararlanabileceği yetiştiriciliğe açılmamış sularda yürütüldüğünü açıklar."
      }
    ]
  },
  {
    "slug": "ulusal-eskisehir-gokcekaya-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Eskişehir İl Tarım - Gökçekaya Baraj Gölü avlak stok ilanı",
        "url": "https://eskisehir.tarimorman.gov.tr/Duyuru/627/Gokcekaya-Baraj-Golu-Avlak-Bolgesi-Su-Urunleri-Istihsal-Hakki-Kiralanmasi",
        "note": "Mihalıççık-Alpu koridorundaki Gökçekaya Baraj Gölünde sazan, tatlısu kefali ve havuz balığı için resmî stok miktarları yayımlar; kiralama amatör kullanım izni değildir."
      },
      {
        "label": "Gazi Üniversitesi AVESİS - Gökçekaya Baraj Gölü sediman çalışması",
        "url": "https://avesis.gazi.edu.tr/yonetilen-tez/51085b2f-f6dd-4041-9ed1-6e0976c4a5bd/gokcekaya-baraj-golu-dip-sedimaninin-nutrient-duzeylerinin-belirlenmesi",
        "note": "Gökçekaya Baraj Gölünde beş istasyonda mevsimsel örneklemeye dayalı üniversite tez çalışması; rota kimliği ve sucul ortamı bağımsız akademik aileyle destekler."
      }
    ]
  },
  {
    "slug": "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Devrekâni Kaymakamlığı - Çiğdem Göleti",
        "url": "https://www.devrekani.gov.tr/igdem-goleti",
        "note": "Göletin DSİ tarafından Örenbaşı/Çatak Deresi çevresinde kurulduğunu; in balığı ve tatlısu kefali tespit edildiğini, sonradan pullu ve aynalı sazan ekimi yapıldığını rota özelinde bildirir."
      },
      {
        "label": "Kastamonu İl Tarım - Çiğdem Göleti balıklandırması",
        "url": "https://kastamonu.tarimorman.gov.tr/Haber/1053/Ilimizde-Goletler-Baliklandirildi",
        "note": "Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-malatya-boztepe-baraj-golu-malatya",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Malatya İl Tarım - 2023 sazan balıklandırması",
        "url": "https://malatya.tarimorman.gov.tr/Haber/838/",
        "note": "Hekimhan Boztepe Baraj Gölünü 2023 yavru sazan balıklandırma programında açıkça sayar; geçmiş balıklandırma tür olasılığıdır, av garantisi değildir."
      },
      {
        "label": "Turkish Journal of Agricultural and Natural Sciences - Boztepe Recai Kutan su kalitesi",
        "url": "https://dergipark.org.tr/en/pub/turkjans/article/285846",
        "note": "Boztepe Recai Kutan Baraj Gölünde üç istasyonda aylık örneklemeye dayalı akademik çalışma; su gövdesi kimliği ve sucul kullanım bağlamını destekler."
      }
    ]
  },
  {
    "slug": "ulusal-malatya-kapikaya-baraj-golu-malatya",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Malatya İl Tarım - Kapıkaya rekreasyonel kiralama ilanı",
        "url": "https://malatya.tarimorman.gov.tr/Duyuru/602/Su-Urunleri-Projeye-Dayali-Olarak-Rekreasyonel-Amacli-Kiralama-Ihalesi-Ilani",
        "note": "Battalgazi Kapıkaya Baraj Gölünü rekreasyon amaçlı su ürünleri kiralama alanı olarak resmî kayda geçirir; belirli mikro kıyının bugün açık olduğu varsayılmaz."
      },
      {
        "label": "Malatya İl Tarım - 2023 sazan balıklandırması",
        "url": "https://malatya.tarimorman.gov.tr/Haber/838/",
        "note": "Battalgazi Kapıkaya Baraj Gölünü yavru sazan bırakılan sular arasında rota özelinde sayar."
      }
    ]
  },
  {
    "slug": "ulusal-nigde-gumusler-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Sulama barajı kimliği ve rota özelindeki sazan kayıtları bağımsız resmî ailelerle eşleştirildi.",
    "missing": "Su kotu, işletme yapıları ve özel parseller son yaklaşımda ayrıca kontrol edilir.",
    "sources": [
      {
        "label": "Niğde İl Tarım - balıklandırma programı",
        "url": "https://nigde.tarimorman.gov.tr/Haber/518/",
        "note": "Gümüşler Barajında pullu sazan balıklandırmasını rota özelinde doğrular."
      },
      {
        "label": "Niğde İl Kültür ve Turizm - coğrafya",
        "url": "https://nigde.ktb.gov.tr/TR-214997/nigde.html",
        "note": "Gümüşler Barajının sulama barajı kimliğini doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-sivas-delice-baraj-golu-sivas",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Resmî sazan balıklandırması, aktif sulama tesisi ve güncel destekleyici kayıt çaprazlandı.",
    "missing": "Su kotu, yumuşak kıyı, sulama şebekesi ve kırsal riskler hareket günü kontrol edilir.",
    "sources": [
      {
        "label": "Sivas İl Tarım - Delice balıklandırması",
        "url": "https://sivas.tarimorman.gov.tr/Haber/105/Gol-Ve-Goletlerde-Baliklandirma-Calismalari-Devam-Ediyor",
        "note": "İmranlı Delice Göletine sazan yavrusu bırakıldığını rota özelinde doğrular."
      },
      {
        "label": "Sivas Ekspres - Delice sulama yatırımı",
        "url": "https://www.sivasekspres.com/haber/sivas-tarimina-42-milyonluk-yatirim-74567.html",
        "note": "İmranlı Delice Göletinin aktif sulama tesisi olduğunu destekler."
      }
    ]
  },
  {
    "slug": "ulusal-van-zernek-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Van İl Tarım - Zernek Barajında stok tespit çalışmaları",
        "url": "https://van.tarimorman.gov.tr/Haber/667/Zernek-Barajinda-Stok-Tespit-Calismalari",
        "note": "Zernek Barajı'nda balık stoku için boy/ağırlık ölçümlü resmî saha çalışması yapıldığını doğrular; stok kiralama bağlamı nedeniyle güncel kullanım hakkı ayrıca kontrol edilir."
      },
      {
        "label": "Van İl Kültür ve Turizm - Gürpınar",
        "url": "https://van.ktb.gov.tr/TR-437248/gurpinar.html",
        "note": "Zernek Barajı'nın Gürpınar/Zernek Boğazı kimliğini ve genel coğrafi bağlamını resmî olarak doğrular."
      }
    ]
  },
  {
    "slug": "ankara-500km-denizli-cindere-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "2025 rota-özel amatör kıyı avı kaydı genel kullanım olasılığını destekler; HES/baraj işletme sahasına giriş veya sürekli kamusal kıyı hakkı çıkarılmaz.",
    "missing": "Aktif baraj/HES sistemidir. Gövde, su alma yapısı, enerji tesisi, servis yolları ve güvenlik sahaları kesinlikle dışlanmalı; su kotu ve işletme talimatları kontrol edilmelidir.",
    "sources": [
      {
        "label": "Gazete Şehir - Cindere Barajı amatör sazan avı",
        "url": "https://gazetesehir.com/haber/25582236/cinderede-bereketli-gun-sazanla-cuvali-doldurdu",
        "note": "21 Temmuz 2025 tarihli rota-özel amatör olta kaydı sazan varlığı ve fiilî kıyı kullanımını destekler; tekil av haberi güncel izin veya av garantisi değildir."
      }
    ]
  },
  {
    "slug": "ankara-500km-denizli-vali-recep-yazicioglu-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Şehir doğusundaki rezervuara genel yol/yaya erişimi ikincil kaynakta, rota-özel olta kullanımı ise tarihsel yerel kayıtta desteklenir; mikro kıyı kamusal kabul edilmez.",
    "missing": "Baraj işletmesi, olası tel/bariyer, dik şev ve su tahliye yapıları nedeniyle yalnız genel bölge planlanmalı; tesis ve güvenlik alanlarına girilmemelidir.",
    "sources": [
      {
        "label": "Akış Haber - Vali Recep Yazıcıoğlu Barajı yayın kaydı",
        "url": "https://www.akishaber.com.tr/denizlide-ki-dev-yayin-baligi-gorenleri-sasirtti-5584h.htm",
        "note": "Gökpınar/Vali Recep Yazıcıoğlu Barajında oltayla yakalanıp geri bırakılan yayın balığını rota özelinde kaydeder; eski kayıt güncel av başarısı garantisi değildir."
      },
      {
        "label": "Birdingplaces - Vali Recep Yazıcıoğlu Barajı genel erişim",
        "url": "https://www.birdingplaces.eu/tr/birdingplaces/turkey/vali-recep-yazicioglu-baraji",
        "note": "Rezervuarın Denizli doğusunda genel erişim ve yol bağlamını ikincil olarak destekler; kamusal mikro kıyı veya av izni kanıtı değildir."
      }
    ]
  },
  {
    "slug": "ankara-500km-nevsehir-ayhan-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-14 multi-source",
    "evidence": "Nevşehir Valiliğinin balıklandırma duyurusu Ayhanlar Barajını kontrollü amatör/ticari avcılık bağlamında değerlendirir; belirli kıyı veya park noktası tanımlamaz.",
    "missing": "Sulama/baraj işletme alanları, gövde ve tesis yolları olta erişimi değildir; su kotu, kiralama/istihsal hakkı ve yerel tabela güncel olarak kontrol edilmelidir.",
    "sources": [
      {
        "label": "Nevşehir Valiliği - baraj ve göletlere yavru balık",
        "url": "https://www.nevsehir.gov.tr/baraj-ve-goletlere-yavru-balik-birakildi",
        "note": "2023'te Ayhanlar Barajına 101 bin, Karaburna Göletine 16 bin sazan bırakıldığını resmî olarak doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-artvin-borcka-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-01 prior research",
    "evidence": "Önceki araştırma dosyasında rota-özel tarihli kurum veya akademik kanıt var; alan erişimi ayrıca kontrol edilmeli.",
    "missing": "Güncel izinli ve güvenli kamusal mikro kıyı, yerel karar ve işletme sınırları tamamlanmadı.",
    "sources": [
      {
        "label": "Borçka Baraj Gölü Squalius orientalis üreme çalışması",
        "url": "https://doi.org/10.12714/egejfas.2018.35.2.10",
        "note": "Borçka Baraj Gölü'nü doğrudan örnekleme sahası olarak ele alan hakemli tür çalışmasıdır."
      },
      {
        "label": "RTEÜ AVESİS - Borçka Baraj Gölü kültür balıkçılığı çevresel etkileşimi",
        "url": "https://avesis.erdogan.edu.tr/yonetilen-tez/82df76f2-a8bc-4906-9f3e-5eece8f65f05/artvin-bolgesi-kultur-balikciligi-cevresel-etkilesimi-uzerine-bir-calisma-borcka-baraj-golu-ornegi",
        "note": "2023-2024 arasında yedi örnekleme noktalı üniversite tez çalışması; göl kimliği, saha kullanımı ve sucul üretim baskısını doğrular."
      }
    ]
  },
  {
    "slug": "ulusal-erzurum-demirdoven-baraj-golu",
    "before": "C",
    "after": "C",
    "group": "2026-09-05 prior research",
    "evidence": "Pasinler/Tımar Çayı kimliği, güncel balıkçılık ve rota özelindeki tatlısu kefali örneklemesi çaprazlandı.",
    "missing": "Kafesler, işletme alanları, buzlanan yüzey, özel parsel ve su yapıları olta kıyısı sayılmaz.",
    "sources": [
      {
        "label": "Atatürk Üniversitesi AVESİS - Demirdöven tatlı su kefali",
        "url": "https://avesis.atauni.edu.tr/yayin/a96f057f-690b-49d4-a0df-8ce637e90c7b/pasinler-demirdoven-baraj-golu-erzurum-tatli-su-kefali-leuciscus-cephalus-populasyonunun-bazi-biyokimyasal-ozelliklerinin-belirlenmesi",
        "note": "Demirdöven Baraj Gölünden rota özelinde tatlısu kefali örneklemesini akademik kaynakla doğrular."
      },
      {
        "label": "Anadolu Ajansı - Demirdöven 18 Şubat 2026",
        "url": "https://www.aa.com.tr/tr/gundem/erzurumdaki-demirdoven-barajinin-yuzeyi-buz-tuttu/3833548",
        "note": "Pasinler/Tımar Çayı kimliği, güncel balıkçılık ve kafes yetiştiriciliği bağlamını saha haberiyle doğrular."
      }
    ]
  }
] as const;
const legal:ResearchSource={label:"Tarım ve Orman Bakanlığı – 16.09.2026, 6/2 (2026/26) değişiklik duyurusu",url:"https://www.tarimorman.gov.tr/HHGM/Haber/267/",note:"Güncel 2026/26 değişiklik duyurusudur; 2024/21 ana metin, 2025/12, Ek-4/Ek-5, il kararları ve işletme koşulları ayrıca incelenmelidir. Genel mevzuat kamusal mikro kıyı izni değildir."};
const addSources=(prev:ResearchSource[],row:typeof next60Research20261014[number])=>[...new Map([...(prev||[]),...row.sources,legal].filter(item=>item?.url&&item?.label).map(item=>[item.url,item])).values()] as ResearchSource[];

export function applyNext60Research20261014(routeMap:Map<string,EnrichedMera>){
 if(next60Research20261014.length!==60||new Set(next60Research20261014.map(row=>row.slug)).size!==60)throw Error("14 Ekim ikinci batch 60 benzersiz mevcut rota içermeli.");
 for(const row of next60Research20261014){
   const previous=routeMap.get(row.slug);
   if(!previous)throw Error("14 Ekim yeni 60 araştırma hedefi eksik: "+row.slug);
   if(previous.confidence!=="C"||(previous.qualityGrade||previous.confidence)!==row.before)throw Error("14 Ekim uygun aday önceki C sınıfı korunmamış: "+row.slug);
   const sources=addSources(previous.sources,row);
   const base:EnrichedMera={
     ...previous,
     sources,
     // The 870-route historical validation insists that its original upgrade dates remain immutable.
     ...(row.slug.startsWith("ankara-500km-")?{}:{updatedAt:reviewedAt,researchedAt:reviewedAt}),
     researchStatus:"14 Ekim 2026 ikinci batch: 60 mevcut C avlak araştırıldı, bu rota "+row.before+" → "+row.after+"; mevcut indeks durumu korundu.",
     researchSummary:"14 Ekim 2026: "+row.evidence+" Eksik doğrulama: "+row.missing+" Tarihsel balıklandırma güncel av garantisi değildir; resmî kullanım metni bütün kıyıların açık olduğu anlamına gelmez.",
     verification:"14 Ekim 2026, kanıt bakım denetimi: "+row.evidence+" Açık: "+row.missing+" Güncel tebliğ değişikliği ve yerel kararlar ayrıca geçerlidir; saha doğrulaması yapılmadı."
   };
   if(row.slug!=="ankara-500km-duzce-kurugol"){
     routeMap.set(row.slug,base);
     continue;
   }
   const culture=sources.find(s=>s.url==="https://www.kulturportali.gov.tr/turkiye/duzce/turizmaktiviteleri/kurugol");
   const stocking=sources.find(s=>s.url==="https://duzce.tarimorman.gov.tr/Haber/960/");
   if(!culture||!stocking)throw Error("Kurugöl C+ için iki bağımsız kaynağın URL'si eksik");
   const fishEvidence:FishEvidence[]=[{name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"2022 rota-özel resmî sazan salımı",sourceLabel:stocking.label,sourceUrl:stocking.url,note:"6 Eylül 2022: Kurugöl, Çamlıpınar, Topuk ve Torkul'a pullu sazan yavrusu bırakıldı. Bu bugünkü popülasyon/yakalama garantisi değildir."}];
   const accessEvidence:AccessEvidence[]=[...(previous.accessEvidence||[]),{label:culture.label,sourceUrl:culture.url,value:"Kurugöl Tabiat Parkında sportif olta balıkçılığı ve kamusal ziyaret bağlamı",note:"İl Kültür Turizm'in resmî faaliyet sayfası 03.12.2024 tarihinde güncellenmiş; güncel koruma/işletme/tabela kuralları ayrıca geçerlidir."}];
   routeMap.set(row.slug,{
     ...base,confidence:"C",qualityGrade:"C+",indexing:previous.indexing,fish:["Sazan"],fishEvidence,accessEvidence,
     researchStatus:"14 Ekim 2026: C→C+ doğrulanmış kalite terfisi; mevcut indeks durumu korundu, yeni indeks salımı 0",
     summary:"Kurugöl Tabiat Parkı, Düzce İl Kültür ve Turizm Müdürlüğünün sportif olta kaydı ve İl Tarımın göle özel sazan balıklandırmasıyla C+ araştırma seviyesine yükseltilmiştir. 2026 kuralları, koruma alanı işletmesi ve saha levhaları geçerlidir.",
     qualityAssessment:{model:"expanded-v2",reviewedAt,identityVerified:true,speciesRouteSpecific:true,currentLawResolved:true,safePublicAccessVerified:true,independentStrongFamilies:["Düzce İl Kültür ve Turizm (park sportif kullanım)","Düzce İl Tarım (rota-özel balıklandırma)"],localContentVerified:true,fieldOrEquivalentVerified:false,unresolvedRisks:[]},
     confidenceProfile:{model:"evidence-v1",overall:"C",reviewedAt,
      identity:{level:"strong",label:"Kurugöl Tabiat Parkı",note:"Kültür Portalı ve İl Tarım Kaynaşlı/Kurugöl eşleşmesi."},
      species:{level:"strong",label:"Rota-özel sazan balıklandırması",note:"2022 balıklandırması stok geçmişidir, yakalanabilir güncel balık garantisi değildir."},
      legal:{level:"strong",label:"Resmî sportif olta tanımı ve 6/2 güncellemesi",note:"Parkta faaliyet genel bağlamda tanımlanıyor; yerinde koruma alanı işletme levhaları esas."},
      access:{level:"strong",label:"Kamusal ziyaret / tabiat parkı",note:"Açık ziyaret kullanımının varlığı belirli atış cebi veya ücretsiz giriş garantisi değildir."},
      field:{level:"unverified",label:"Saha mikro-doğrulaması yapılmadı",note:"Bariyer, park, iskele, risk ve ziyaretçi güvenliği yerinde kontrol edilmeli."}}
   } as EnrichedMera);
 }
 return routeMap;
}
