import type { Mera, SourceLink } from "./meralar";

const teblig:SourceLink={label:"Tarım ve Orman Bakanlığı — 6/2 Amatör Avcılık ve 2025/12 değişikliği",url:"https://istanbul.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=381",note:"Boy, adet, yöntem, yer ve dönem sınırlamaları için güncel resmî çerçeve; saha tabelası ve geçici kararlar ayrıca kontrol edilir."};
const bosphorusFish:SourceLink={label:"İstanbul Boğazı balık kayıtları — İstanbul Üniversitesi",url:"https://nek.istanbul.edu.tr/ekos/TEZ/61077.pdf",note:"Boğaz ağ dalyanlarında istavrit, lüfer, kefal, zargana ve diğer türleri raporlayan akademik çalışma; kıyıdan av garantisi değildir."};

export const gun2Meralar20260807:Mera[]=[
  {
    slug:"kandilli-sahili",name:"Kandilli Sahili",district:"Üsküdar",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
    summary:"Aktif Şehir Hatları iskelesi ile dar Boğaz kıyısının yan yana bulunduğu; yalnız iskele operasyonundan ayrılmış genel kamusal kıyı ceplerinin değerlendirildiği Kandilli rotası.",
    fish:["İstavrit","Lüfer","Kefal","Zargana"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek"],
    camping:"Uygun değil",vehicleAccess:"Orta",amenities:["Şehir Hatları ve otobüs erişimi","Mahalle içinde temel ihtiyaç noktaları","Kamusal sahil yürüyüş cepleri"],
    cautions:["Aktif Kandilli İskelesi ve yanaşma hattında avlanma","Dar kıyıda yaya arkasına savurma atış yapma","Boğaz akıntısında misina sürüklenmesini sürekli izle"],
    lat:41.0749,lng:29.0586,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok",updatedAt:"2026-08-07",publishedAt:"2026-08-07",confidence:"C",
    image:"/images/meralar/kandilli-sahili.svg",socialImage:"/images/meralar/kandilli-sahili.svg",
    navigationNote:"Koordinat Kandilli'deki genel kamusal kıyı bağlamını gösterir; aktif Şehir Hatları iskelesi, yanaşma platformu ve tekne manevra hattı rota dışıdır.",
    shoreProfile:"Kandilli kıyısı Boğaz'ın dar ve akıntılı bölümünde, yalı/mahalle dokusu ile aktif Şehir Hatları iskelesinin aynı kısa sahil çizgisinde birleştiği bir alandır. Resmî iskele kaydı yanaşma yerini 21 m, sudan yüksekliği 1,3 m ve ön derinliği 9,6 m olarak verir; bu operasyon alanı av noktası değildir.",
    transport:"Üsküdar–Beykoz sahil yolu otobüsleri ve Şehir Hatları Kandilli'ye erişim sağlar. Araç parkı sınırlı olabileceğinden toplu taşıma daha öngörülebilir seçenektir; son yaya yaklaşımında iskele yolcu akışı ve özel kıyı sınırları yerinde ayrılmalıdır.",
    crowdNote:"Vapur geliş-gidiş saatlerinde ve hafta sonu mahalle sahil kullanımında dar kıyı hızla yoğunlaşabilir. Güvenli arka atış koridoru yoksa takım açılmamalıdır.",
    longIntro:["Kandilli Sahili, İstanbul Boğazı'nın Anadolu yakasında aktif deniz ulaşımıyla mahalle kıyısının iç içe geçtiği dar bir rotadır. Şehir Hatları'nın resmî kaydı Kandilli İskelesi'nin 21 metrelik yanaşma yeri ve 9,6 metre ön derinliğini doğrular; bu nedenle iskele çevresi yalnız güvenlik/operasyon sınırı olarak ele alınır.","İstanbul Boğazı akademik kayıtlarında istavrit, lüfer, kefal ve zargana gibi türler bulunur. Bunlar Boğaz ölçeğinde bölgesel kanıttır; Kandilli'de kıyıdan günlük av garantisi değildir. Saha teyidi bulunmadığından güven seviyesi C'dir."],
    planningNotes:["İlk ziyaret gündüz yapılmalı; iskele, özel yalı önü ve tekne yanaşma alanları net biçimde dışarıda bırakılmalıdır.","Kamp kent içi kıyıda uygun değildir; gecelik kalış için Üsküdar veya Beykoz ilçe merkezlerindeki ruhsatlı seçenekler güncel olarak ayrıca kontrol edilmelidir.","Akıntı misinayı iskele hattına veya komşu kullanıcıların önüne taşıyorsa ağırlığı artırmak yerine av cebi değiştirilmelidir."],
    seasonalNotes:["İstavrit, lüfer, kefal ve zargana İstanbul Boğazı ölçeğinde raporlanmıştır; kıyıya yaklaşım göç dönemi, yüzey akıntısı ve yem balığına bağlıdır.","6/2 Tebliğdeki tür, boy, adet ve yöntem sınırlamaları ile aktif iskele kuralları av öncesi birlikte kontrol edilmelidir."],
    sources:[{label:"Şehir Hatları — Kandilli İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/kandilli-149",note:"Aktif iskelenin ölçü ve ön derinlik bilgilerini doğrular; operasyon alanı rota dışında tutulur."},bosphorusFish,teblig]
  },
  {
    slug:"anadolu-hisari-sahili",name:"Anadolu Hisarı Sahili",district:"Beykoz",province:"İstanbul",zone:"Anadolu Yakası",waterType:"Deniz",region:"Marmara",
    summary:"Boğazın en dar kesimlerinden birinde, aktif Anadolu Hisarı İskelesi ile tarihî kıyı dokusunun yan yana bulunduğu; yalnız genel kamusal sahil ceplerini kapsayan rota.",
    fish:["İstavrit","Lüfer","Kefal","Zargana"],methods:["Çapari","Şamandıra","Hafif dip oltası"],baits:["Suni çapari","Karides","Ekmek"],
    camping:"Uygun değil",vehicleAccess:"Orta",amenities:["Şehir Hatları ve otobüs erişimi","Anadolu Hisarı mahalle hizmetleri","Kamusal kıyı ve meydan cepleri"],
    cautions:["Aktif iskele ve yanaşma hattında avlanma","Boğazın dar kesimindeki güçlü akıntıya dikkat et","Tarihî/dar kıyıda yaya güvenliğini atıştan önce kontrol et"],
    lat:41.0824,lng:29.0664,locationPrecision:"Genel bölge",verification:"Masa başı doğrulama; saha teyidi yok",updatedAt:"2026-08-07",publishedAt:"2026-08-07",confidence:"C",
    image:"/images/meralar/anadolu-hisari-sahili.svg",socialImage:"/images/meralar/anadolu-hisari-sahili.svg",
    navigationNote:"Koordinat Anadolu Hisarı'nın genel kamusal sahiline yönlendirir; aktif Şehir Hatları iskelesi ve tekne yanaşma/manzara alanları av noktası değildir.",
    shoreProfile:"Anadolu Hisarı, Rumeli Hisarı karşısındaki dar Boğaz kesiminde güçlü akıntı, aktif Şehir Hatları iskelesi ve tarihî kıyı dokusunu birlikte taşır. Resmî kayıtta iskele ön derinliği 4,3–7,1 m aralığındadır; iskele operasyonu ve dar yolcu alanı rota dışıdır.",
    transport:"Beykoz sahil yolu otobüsleri ve Şehir Hatları ile erişilebilir. Mahalle dokusu dar olduğundan araç parkı sınırlı olabilir; son yaklaşımda iskele yolcu alanı, özel mülk ve tarihî yapı sınırları yerinde ayrıca ayrılmalıdır.",
    crowdNote:"Vapur saatleri, hafta sonu tarihî alan ziyareti ve kıyı yürüyüşü aynı dar bölgede yoğunluk yaratabilir; arka atış koridoru açık değilse olta kullanılmamalıdır.",
    longIntro:["Anadolu Hisarı Sahili Boğaz'ın en dar ve akıntılı bölümlerinden birinde yer alır. Şehir Hatları'nın resmî kaydı iskelenin 21 metrelik yanaşma alanını ve 4,3–7,1 metre ön derinliğini doğrular; bu bölüm aktif ulaşım alanı olarak av rotasından çıkarılmıştır.","İstanbul Boğazı akademik kayıtlarında istavrit, lüfer, kefal ve zargana dahil birçok tür raporlanmıştır. Tür listesi bölgesel kanıttır ve kıyıdan günlük av garantisi değildir; saha teyidi olmadığı için kayıt güven seviyesi C'dir."],
    planningNotes:["İlk keşifte iskele ve özel kıyı sınırlarını net ayır; yalnız kamusal, arka koridoru boş kıyı ceplerini değerlendir.","Kamp uygun değildir; gecelik kalış için Beykoz/Üsküdar çevresindeki ruhsatlı konaklama seçenekleri ayrıca güncel olarak kontrol edilmelidir.","Boğazın dar kesimindeki güçlü akıntıda misina hızla yana sürüklenebilir; iskele veya tekne hattına yaklaşan takım hemen toplanmalıdır."],
    seasonalNotes:["İstavrit, lüfer, kefal ve zargana Boğaz ölçeğinde raporlanmıştır; göç ve akıntı koşulları Anadolu Hisarı kıyısındaki görünürlüğü değiştirir.","6/2 Tebliğdeki boy/adet/yöntem kuralları, aktif iskele güvenliği ve yerel tabela birlikte dikkate alınmalıdır."],
    sources:[{label:"Şehir Hatları — Anadolu Hisarı İskelesi",url:"https://sehirhatlari.istanbul/tr/iskeleler/anadolu-hisari-22",note:"Aktif iskele, yanaşma ölçüleri ve 4,3–7,1 m ön derinliği doğrular; operasyon alanı rota dışıdır."},bosphorusFish,teblig]
  }
];
