export type Balik = { slug:string; name:string; water:string; habitat:string; seasonNote:string; methods:string[]; baits:string[]; caution:string; image:string; };

export const baliklar: Balik[] = [
  {
    "slug": "istavrit",
    "name": "İstavrit",
    "water": "Deniz",
    "habitat": "Marmara ve Karadeniz kıyılarında sürü hâlinde hareket eden, çapari avcılığının temel türlerinden biri.",
    "seasonNote": "Akıntı, yem balığı ve günün saati kıyıya yaklaşmasını belirgin biçimde etkiler.",
    "methods": [
      "Çapari",
      "Hafif spin",
      "Şamandıra"
    ],
    "baits": [
      "Suni çapari",
      "Küçük silikon",
      "Karides"
    ],
    "caution": "Güncel boy, adet ve dönem kurallarını av öncesi resmî kaynaklardan kontrol et.",
    "image": "/images/baliklar/istavrit.svg"
  },
  {
    "slug": "sazan",
    "name": "Sazan",
    "water": "İç su",
    "habitat": "Gölet, göl ve yavaş akan iç sularda dip ve kıyı hattını kullanan dayanıklı bir tür.",
    "seasonNote": "Su sıcaklığı, üreme dönemi ve yemleme baskısı davranışı değiştirir.",
    "methods": [
      "Dip oltası",
      "Şamandıra"
    ],
    "baits": [
      "Mısır",
      "Hamur",
      "Solucan"
    ],
    "caution": "İç sularda il ve su havzasına özgü yasak dönemler bulunabilir.",
    "image": "/images/baliklar/sazan.svg"
  },
  {
    "slug": "kefal",
    "name": "Kefal",
    "water": "Deniz / acı su",
    "habitat": "Kıyı, liman çevresi ve tatlı su girişlerinin bulunduğu bölgelerde görülebilen temkinli bir tür.",
    "seasonNote": "Sakin hava, su berraklığı ve kıyıdaki insan hareketi av verimini etkiler.",
    "methods": [
      "Şamandıra",
      "Yüzey takımı"
    ],
    "baits": [
      "Ekmek",
      "Hamur",
      "Kurt"
    ],
    "caution": "Liman, yüzme alanı ve özel güvenlik bölgelerinde yerel kurallara uy.",
    "image": "/images/baliklar/kefal.svg"
  },
  {
    "slug": "levrek",
    "name": "Levrek",
    "water": "Deniz",
    "habitat": "Dalgalı kıyı, dere ağzı ve yem balığının toplandığı geçiş alanlarını kullanan avcı tür.",
    "seasonNote": "Rüzgâr, dalga ve su berraklığı davranışı güçlü biçimde etkiler.",
    "methods": [
      "Spin",
      "Sahte yem"
    ],
    "baits": [
      "Silikon",
      "Minnow",
      "Kaşık"
    ],
    "caution": "Kayalık kıyılarda can yeleği ve kaymaz ayakkabı kullan.",
    "image": "/images/baliklar/levrek.svg"
  },
  {
    "slug": "turna",
    "name": "Turna",
    "water": "İç su",
    "habitat": "Sazlık, otluk ve saklanma alanı bulunan iç sularda pusu kuran güçlü avcı.",
    "seasonNote": "Üreme dönemi, su sıcaklığı ve bitki yoğunluğu aktivitesini değiştirir.",
    "methods": [
      "Spin",
      "Sahte yem"
    ],
    "baits": [
      "Silikon",
      "Kaşık",
      "Minnow"
    ],
    "caution": "Keskin dişler nedeniyle uzun pens ve uygun lider kullan; yasağı mutlaka kontrol et.",
    "image": "/images/baliklar/turna.svg"
  },
  {
    "slug": "izmarit",
    "name": "İzmarit",
    "water": "Deniz",
    "habitat": "Taşlık kıyı, iskele ve liman çevresi gibi alanlarda sürü hâlinde görülebilen küçük kıyı balığı.",
    "seasonNote": "Sürü hareketi, su berraklığı ve kıyıdaki yem yoğunluğu sonucu etkiler.",
    "methods": [
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Kurt"
    ],
    "caution": "Kıyı yapısı ve yerel kullanım kurallarını av öncesinde kontrol et.",
    "image": "/images/baliklar/izmarit.svg"
  },
  {
    "slug": "zargana",
    "name": "Zargana",
    "water": "Deniz",
    "habitat": "Yüzeye yakın gezen, uzun ve ince gövdeli, kıyıya dönemsel olarak yaklaşan tür.",
    "seasonNote": "Yem balığı hareketi ve sakin deniz koşulları kıyıya yaklaşmasını etkileyebilir.",
    "methods": [
      "Şamandıra",
      "Hafif spin",
      "Zargana topu"
    ],
    "baits": [
      "İnce balık şeridi",
      "Karides",
      "Küçük suni yem"
    ],
    "caution": "İnce ve uzun ağız yapısı nedeniyle iğne çıkarırken pens kullan.",
    "image": "/images/baliklar/zargana.svg"
  },
  {
    "slug": "mezgit",
    "name": "Mezgit",
    "water": "Deniz",
    "habitat": "Karadeniz ve Marmara’da çoğunlukla dip yapısına yakın bölgelerde yaşayan tür.",
    "seasonNote": "Derinlik, dip yapısı, su sıcaklığı ve sürü hareketi belirleyicidir.",
    "methods": [
      "Dip oltası",
      "Tekne takımı"
    ],
    "baits": [
      "Karides",
      "Balık parçası",
      "Boru kurdu"
    ],
    "caution": "Kıyıdan erişim her bölgede mümkün değildir; deniz durumunu kontrol et.",
    "image": "/images/baliklar/mezgit.svg"
  },
  {
    "slug": "kizilkanat",
    "name": "Kızılkanat",
    "water": "İç su",
    "habitat": "Sazlık, bitkili ve sakin iç sularda kıyıya yakın bölgeleri kullanan küçük tür.",
    "seasonNote": "Ilık dönemde kıyı bitkileri ve yemlenme alanları çevresinde hareketlenebilir.",
    "methods": [
      "Şamandıra",
      "Hafif dip oltası"
    ],
    "baits": [
      "Solucan",
      "Ekmek",
      "Mısır"
    ],
    "caution": "Tür teşhisini fotoğrafla destekle; benzer türlerle karıştırılabilir.",
    "image": "/images/baliklar/kizilkanat.svg"
  },
  {
    "slug": "cipura",
    "name": "Çipura",
    "water": "Deniz",
    "habitat": "Kumluk, taşlık ve midyelik kıyı yapılarında dipten beslenen güçlü çeneli deniz balığı.",
    "seasonNote": "Su sıcaklığı, kabuklu yoğunluğu ve kıyı basıncı hareketini etkiler.",
    "methods": [
      "Dip oltası",
      "Surf casting"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Mamun"
    ],
    "caution": "Kabuklu yem kullanırken iğne ve takım dayanımını kontrol et.",
    "image": "/images/baliklar/cipura.svg"
  },
  {
    "slug": "lufer",
    "name": "Lüfer",
    "water": "Deniz",
    "habitat": "Yem balığı sürülerini izleyen hızlı ve keskin dişli göçmen avcı.",
    "seasonNote": "Göç, akıntı ve yem balığı yoğunluğu kıyı verimini belirler.",
    "methods": [
      "Spin",
      "Yemli takım"
    ],
    "baits": [
      "Minnow",
      "Kaşık",
      "Yaprak yem"
    ],
    "caution": "Dişlere karşı lider ve uzun pens kullan; güncel boy kurallarını doğrula.",
    "image": "/images/baliklar/lufer.svg"
  },
  {
    "slug": "palamut",
    "name": "Palamut",
    "water": "Deniz",
    "habitat": "Açık su ve kıyıya yakın yem balığı sürülerini takip eden hızlı pelajik tür.",
    "seasonNote": "Göç zamanı, su sıcaklığı ve akıntı yönü belirleyicidir.",
    "methods": [
      "Çapari",
      "Kaşık",
      "Tekne sırtısı"
    ],
    "baits": [
      "Suni çapari",
      "Kaşık",
      "Yem balığı taklidi"
    ],
    "caution": "Kıyıdan avda çevrendeki diğer oltacıların misina hatlarını gözet.",
    "image": "/images/baliklar/palamut.svg"
  },
  {
    "slug": "karagoz",
    "name": "Karagöz",
    "water": "Deniz",
    "habitat": "Taşlık, kayalık ve midyelik diplerde beslenen dikkatli kıyı balığı.",
    "seasonNote": "Su berraklığı, dip yapısı ve gece-gündüz döngüsü davranışı değiştirir.",
    "methods": [
      "Dip oltası",
      "Şamandıra"
    ],
    "baits": [
      "Karides",
      "Midye",
      "Boru kurdu"
    ],
    "caution": "Kayalık zeminde takım kaybına karşı daha kontrollü kurşun kullan.",
    "image": "/images/baliklar/karagoz.svg"
  },
  {
    "slug": "eskina",
    "name": "Eşkina",
    "water": "Deniz",
    "habitat": "Kayalık oyuklar ve sert dip çevresinde yaşayan, çoğunlukla gece hareketlenen tür.",
    "seasonNote": "Karanlık saatler, dalga ve dip yapısı etkinliği etkiler.",
    "methods": [
      "Dip oltası",
      "Yemli takım"
    ],
    "baits": [
      "Karides",
      "Mamun",
      "Boru kurdu"
    ],
    "caution": "Kayalık gece avında tek başına çalışma ve suya yakın kaygan yüzeyden kaçın.",
    "image": "/images/baliklar/eskina.svg"
  },
  {
    "slug": "yayin",
    "name": "Yayın",
    "water": "İç su",
    "habitat": "Büyük nehir, baraj ve göllerde dip hattını kullanan iri avcı balık.",
    "seasonNote": "Su sıcaklığı, gece aktivitesi ve akıntı seviyesi davranışı etkiler.",
    "methods": [
      "Dip oltası",
      "Canlı/yemli takım"
    ],
    "baits": [
      "Solucan demeti",
      "Balık parçası",
      "Kokulu yem"
    ],
    "caution": "İri balık ihtimaline karşı kepçe, güçlü takım ve güvenli kıyı planı gerekir.",
    "image": "/images/baliklar/yayin.svg"
  },
  {
    "slug": "sudak",
    "name": "Sudak",
    "water": "İç su",
    "habitat": "Baraj, göl ve büyük akarsularda derinlik geçişlerini kullanan görsel avcı.",
    "seasonNote": "Düşük ışık, su berraklığı ve yem balığı konumu önemlidir.",
    "methods": [
      "Spin",
      "Jig"
    ],
    "baits": [
      "Silikon",
      "Minnow",
      "Jig başı"
    ],
    "caution": "Keskin solungaç kapağı ve sırt dikenleri için eldiven veya pens kullan.",
    "image": "/images/baliklar/sudak.svg"
  },
  {
    "slug": "tatli-su-levregi",
    "name": "Tatlı Su Levreği",
    "water": "İç su",
    "habitat": "Bitkili kıyı, taşlık geçiş ve küçük balıkların toplandığı alanlarda dolaşan avcı.",
    "seasonNote": "Mevsimsel su sıcaklığı ve bitki örtüsü aktiviteyi belirler.",
    "methods": [
      "Spin",
      "Şamandıra"
    ],
    "baits": [
      "Küçük silikon",
      "Döner kaşık",
      "Solucan"
    ],
    "caution": "Sırt dikenlerine karşı balığı kontrollü kavra.",
    "image": "/images/baliklar/tatli-su-levregi.svg"
  },
  {
    "slug": "alabalik",
    "name": "Alabalık",
    "water": "İç su",
    "habitat": "Serin, oksijeni yüksek akarsu ve göllerde yaşayan hassas bir tür grubu.",
    "seasonNote": "Su sıcaklığı, debi ve böcek çıkışları beslenmeyi etkiler.",
    "methods": [
      "Spin",
      "Sinek avı"
    ],
    "baits": [
      "Küçük kaşık",
      "Suni sinek",
      "Küçük silikon"
    ],
    "caution": "Koruma alanı, tür ve suya özel av kuralları sıkı olabilir; mutlaka doğrula.",
    "image": "/images/baliklar/alabalik.svg"
  },
  {
    "slug": "barbun",
    "name": "Barbun",
    "water": "Deniz",
    "habitat": "Kumlu ve çamurlu diplerde bıyıklarıyla yem arayan dip balığı.",
    "seasonNote": "Dip yapısı, derinlik ve su sıcaklığı dağılımı belirler.",
    "methods": [
      "Dip oltası",
      "Tekne takımı"
    ],
    "baits": [
      "Karides",
      "Kurt",
      "Küçük yem parçaları"
    ],
    "caution": "Kıyıdan hedeflenmesi her bölgede mümkün değildir; dip yapısını araştır.",
    "image": "/images/baliklar/barbun.svg"
  },
  {
    "slug": "kolyoz",
    "name": "Kolyoz",
    "water": "Deniz",
    "habitat": "Açık su ve kıyıya yaklaşan sürülerde hızlı hareket eden uskumrugillerden tür.",
    "seasonNote": "Yem balığı sürüsü, akıntı ve su sıcaklığı hareketini etkiler.",
    "methods": [
      "Çapari",
      "Hafif spin"
    ],
    "baits": [
      "Suni çapari",
      "Kaşık",
      "Küçük jig"
    ],
    "caution": "Sürü avında iğneli çapariyi çıkarırken el ve göz güvenliğine dikkat et.",
    "image": "/images/baliklar/kolyoz.svg"
  }
];
