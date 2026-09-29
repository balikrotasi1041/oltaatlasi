import type { EnrichedMera, ConfidenceProfile, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

const date="2026-09-29";
const s=(label:string,url:string,note:string):ResearchSource=>({label,url,note});
const fe=(name:string,scientificName:string|null,source:ResearchSource,evidenceLevel:string,note:string):FishEvidence=>({
  name,scientificName,evidenceLevel,sourceLabel:source.label,sourceUrl:source.url,note,recordCount:null,distanceKm:null
});
const ae=(label:string,value:string,source:ResearchSource,note:string):AccessEvidence=>({label,value,sourceUrl:source.url,note});

const teblig=s(
  "6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği (2024/21)",
  "https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",
  "2024-2028 genel amatör avcılık çerçevesidir; il/ilçe kararları, saha tabelaları ve özel yasaklar ayrıca uygulanır."
);

const balatFishing=s(
  "Fatih Belediyesi - Sağlığa Olta etkinliği, Balat Şair Nedim Parkı",
  "https://www.fatih.bel.tr/tr/main/news/kadin-ve-aile-birimimizin-sagliga-olta-etkinl/7831",
  "14 Temmuz 2025'te Balat Şair Nedim Parkı'nda belediyece düzenlenen olta etkinliğini ve katılımcıların sahada balık tuttuğunu rota özelinde doğrular."
);
const balatShore=s(
  "Fatih Belediyesi - Balat Sahil",
  "https://www.fatih.bel.tr/tr/main/fotograflarlafatih/balat-sahil/10",
  "Balat sahilinin belediyece tanımlanan kamusal kıyı kimliğini destekler."
);
const haskoyPublic=s(
  "Beyoğlu Belediyesi - Hasköy Sahil Parkı Çevre Festivali",
  "https://beyoglu.bel.tr/cevre-festivali/",
  "Hasköy Sahil Parkı'nı belediye etkinlikleri için kullanılan kamusal kıyı parkı olarak doğrular."
);
const haskoy2026=s(
  "Beyoğlu Belediyesi - Hasköy Sahilde 2026 kamusal etkinlik",
  "https://beyoglu.bel.tr/ana-kategori/yuzlerce-kisi-ilk-iftarini-haskoy-sahilde-hep-birlikte-yapti/",
  "2026'da Hasköy Parkı/Hasköy Sahili'nin aktif kamusal kullanımını güncel olarak doğrular."
);
const halicAcademic=s(
  "KSÜ Tarım ve Doğa Dergisi - Haliç/Galata amatör olta balıkçılığı derlemesi",
  "https://dergipark.org.tr/en/download/article-file/480632",
  "Haliç ve Galata-Unkapanı hattında kefal, levrek, istavrit, mezgit ve başka türlerin olta avcılığı kayıtlarını literatür üzerinden aktarır; noktasal yakalama garantisi değildir."
);
const avcilarPark=s(
  "İBB - Avcılar Sahil Parkı Yenilendi",
  "https://istanbulseninhaber.ibb.istanbul/haber-detay/avcilar-sahil-parki-yenilendi",
  "Avcılar Sahil Parkı'nın 2025 sonunda yenilenerek güvenli ve kamusal kullanıma açıldığını doğrular."
);
const ibbBeaches=s(
  "İBB Destek Hizmetleri - İstanbul plajları",
  "https://destekhizmetleri.ibb.istanbul/hizmetler/plajlar/",
  "Avcılar Denizköşkler dahil İBB'nin hizmet verdiği kamusal kıyı/plaj alanlarını listeler; yüzme alanı olta alanı değildir."
);
const istFish=s(
  "İstanbul İl Tarım ve Orman Müdürlüğü - İstanbul su ürünleri denetimleri",
  "https://istanbul.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=2493",
  "İstanbul deniz avcılığında istavrit, lüfer, mezgit ve kefal dahil türleri resmî denetim kayıtlarında doğrular; kıyı noktası bazında av garantisi değildir."
);

const koyunAreas=s(
  "Ankara İl Tarım ve Orman Müdürlüğü - Koyunbaba amatör balıkçılık alanı sınır koordinatları",
  "https://ankara.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/Amat%C3%B6r%20Bal%C4%B1k%C3%A7%C4%B1l%C4%B1k%20Alanlar%C4%B1.pdf",
  "Koyunbaba Barajı'nda Koyunbaba Mahallesi, Karahacı ve Karamusa dahil beş ayrı amatör balıkçılık alanını sınır koordinatlarıyla tanımlar."
);
const koyunMap=s(
  "Ankara İl Tarım ve Orman Müdürlüğü - Koyunbaba amatör alan haritası",
  "https://ankara.tarimorman.gov.tr/Lists/Duyuru/Attachments/361/Amat%C3%B6r%20Yer%20Haritalar%C4%B1.pdf",
  "Koyunbaba Barajı'ndaki beş resmî amatör kıyı segmentini harita üzerinde ayrı alanlar olarak gösterir."
);
const koyunLease=s(
  "Ankara İl Tarım ve Orman Müdürlüğü - Koyunbaba Baraj Gölü kiralama duyurusu",
  "https://ankara.tarimorman.gov.tr/Duyuru/356/Koyunbaba-Baraj-Golunun-Su-Urunleri-Istihsal-Hakkinin-Kiralanmasi",
  "Koyunbaba Barajı için sazan, gümüş balığı ve kerevit stoklarını ve Çubuk/Kalecik idari bağlamını rota özelinde doğrular."
);
const koyunAbb=s(
  "Ankara Büyükşehir Belediyesi - Ankara'nın Göllerindeki Doğal Hazine",
  "https://s.ankara.bel.tr/files/2024/02/22/856f8c1a4b9ea4e6531331103fc36d08.pdf",
  "Kalecik Koyunbaba Barajı'nda aynalı/pullu sazan ve havuz balığı tespitini bağımsız belediye laboratuvar çalışmasıyla destekler."
);
const koyunDsi=s(
  "DSİ - Koyunbaba Barajı Sulama Projesi",
  "https://dsi.gov.tr/Haber/Detay/9482",
  "Koyunbaba Barajı'nın su yapısı kimliğini ve Kalecik/Çankırı sulama bağlamını DSİ kaynağıyla doğrular."
);

const narlidereShore=s(
  "İzmir Büyükşehir Belediyesi - Narlıdere Sahilevleri Kıyı Projesi",
  "https://www.izmir.bel.tr/tr/Haberler/simdi-bir-baska-guzel/31070/156",
  "Narlıdere-Sahilevleri kıyı bandında kesintisiz yaya alanı ve dört balıkçı iskelesi oluşturulduğunu rota özelinde doğrular."
);
const izmirFish=s(
  "İzmir İl Tarım ve Orman Müdürlüğü - İzmir Körfezi denetimleri",
  "https://izmir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=66557d0a-a706-443a-86f8-701027aa9f73&TermSetId=25d14cd9-640b-46c5-9d06-cc4271f11cbb&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=764",
  "İzmir Körfezi'nde çipura ve kefal dahil balıkların resmî denetim kayıtlarını verir; Narlıdere kıyısında günlük yakalama garantisi değildir."
);
const izmirAmateur=s(
  "Journal of Anatolian Environmental and Animal Sciences - İzmir Körfezi amatör balıkçılık bağlamı",
  "https://dergipark.org.tr/en/download/article-file/886896",
  "İzmir Körfezi'ni Türkiye'deki önemli amatör balıkçılık alanlarından biri olarak literatür bağlamında değerlendirir."
);

const cProfile=(identity:string,legal:string,access:string,species:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"C",
  identity:{level:"strong",label:"Rota kimliği güçlü",note:identity},
  legal:{level:"partial",label:"Mevzuat ve kullanım bağlamı",note:legal},
  access:{level:"partial",label:"Genel kamusal erişim bağlamı",note:access},
  species:{level:"partial",label:"Bölgesel/rota destekli tür olasılığı",note:species},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Mikro kıyı, park, bariyer, çalışma alanı ve güncel tabela koşulları hareket günü yerinde doğrulanmalıdır."},
  reviewedAt:date
});
const bProfile=(name:string):ConfidenceProfile=>({
  model:"evidence-v1",overall:"B",
  identity:{level:"strong",label:"Resmî rota kimliği",note:`${name}, Ankara İl Tarım tarafından Koyunbaba Barajı içinde ayrı amatör balıkçılık alanı olarak koordinat ve haritayla tanımlanmıştır.`},
  legal:{level:"strong",label:"Resmî amatör kullanım kanıtı",note:"Alan sınırı doğrudan resmî amatör balıkçılık ekiyle belirlenmiştir; güncel 6/2 Tebliğ, ticari istihsal ve saha güvenliği hükümleri ayrıca uygulanır."},
  access:{level:"partial",label:"Alan sınırı doğrulandı",note:"Resmî kıyı segmenti bilinir; son yol, park ve özel parsel geçişi saha teyitli değildir."},
  species:{level:"strong",label:"Rota su kütlesinde güçlü tür kanıtı",note:"Koyunbaba Barajı resmî stok kaydı ve ABB laboratuvar çalışması sazan varlığını destekler; av garantisi değildir."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, ticari ekipman, teknik tesis ve son kıyı zemini hareket günü kontrol edilmelidir."},
  reviewedAt:date
});

export const yeniIstanbulAnkaraIzmir20260929:EnrichedMera[]=[
{
  slug:"istanbul-fatih-balat-sair-nedim-parki-sahili",name:"Balat Şair Nedim Parkı Sahili",district:"Fatih",province:"İstanbul",zone:"Balat Şair Nedim Parkı kamusal Haliç kıyısı",waterType:"Deniz",region:"Marmara",
  summary:"Balat Şair Nedim Parkı Sahili, Fatih Belediyesi'nin rota özelindeki olta etkinliğiyle amatör kullanımın doğrudan doğrulandığı, Haliç tür kayıtlarıyla desteklenen Güven C kıyı rotasıdır.",
  fish:["Kefal","İstavrit"],methods:["Şamandıralı olta","Hafif dip oltası","Çapari"],baits:["Ekmek","Karides","Solucan","Suni çapari"],camping:"Uygun değil",vehicleAccess:"Orta",
  amenities:["Şair Nedim Parkı","Balat/Fener yaya sahili","Fatih ilçesindeki toplu taşıma ve temel ihtiyaç seçenekleri"],
  cautions:["Park ve yaya kullanımında güvenli atış koridoru yoksa olta atma.","Tekne/deniz trafiğine ve kıyı tesislerine misina sarkıtma.","Haliç su kalitesi ve yerel uyarılar hareket günü kontrol edilmelidir.","Türler bölgesel/akademik olasılıktır, av garantisi değildir."],
  lat:41.0329,lng:28.9466,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: Fatih Belediyesi Şair Nedim Parkı'nda rota özelinde olta etkinliği + Balat kamusal sahil kaydı + Haliç akademik olta/tür literatürü + güncel genel mevzuat. Mikro atış cebi saha teyitli değil. Güven C.",
  updatedAt:date,publishedAt:date,confidence:"C",indexing:"index",
  image:"/images/meralar/ulusal/istanbul-fatih-balat-sair-nedim-parki-sahili.svg",socialImage:"/images/meralar/ulusal/istanbul-fatih-balat-sair-nedim-parki-sahili.svg",
  navigationNote:"Pin Şair Nedim Parkı'nın genel Haliç kıyısını gösterir; kıyıdaki her korkuluk/cep otomatik olta alanı değildir. Yaya yoğunluğu ve belediye düzenlemeleri yerinde kontrol edilmelidir.",
  shoreProfile:"Balat Şair Nedim Parkı, Haliç'in güney kıyısındaki yoğun kamusal yaya alanlarından biridir. Park kullanımını kesmeden, korkuluk ve deniz trafiği riskini artırmadan yalnız yeterli açıklık bulunan bölümde kısa takım tercih edilmelidir.",
  transport:"Fatih-Balat toplu taşıma ve yaya ağı üzerinden ulaşım mümkündür. Belediye etkinliği parkın kamusal kullanımını doğrular; araç parkı ve son atış noktası yoğunluğa göre yerinde seçilmelidir. Konaklama için Fatih'teki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
  crowdNote:"Hafta sonu ve gün batımında yaya yoğunluğu belirgin artabilir. Güvenli atış alanı oluşmadığında av yapılmamalı, park kullanıcılarının geçişi kesinlikle engellenmemelidir.",
  longIntro:["Balat Şair Nedim Parkı'nın Olta Atlası'na alınmasının ana kanıtı, Fatih Belediyesi'nin 2025'te aynı parkta düzenlediği 'Sağlığa Olta' etkinliğinde katılımcıların doğrudan olta ile balık tutmasıdır.","Haliç literatüründe kefal ve istavrit dahil çok sayıda türün olta avcılığı kaydı vardır. Bu tarihsel/bölgesel kayıt günlük yakalama garantisi değildir; güncel mevzuat ve saha koşulları önceliklidir."],
  planningNotes:["Yoğun saatler yerine gündüz erken saatlerde keşif yap.","Uzun ve ağır kurşunlu atışları yaya alanında kullanma.","6/2 Tebliğ ile güncel İstanbul kıyı kararlarını hareket günü kontrol et.","Konaklama gerekiyorsa Fatih'teki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["Haliç'te tür hareketi su sıcaklığı, akıntı ve Marmara-Boğaz göçleriyle değişebilir.","Yağış sonrası su rengi ve yüzey akıntısı belirgin değişebileceğinden kısa keşif yapılmalıdır."],
  sources:[balatFishing,balatShore,halicAcademic,teblig],researchedAt:date,researchStatus:"Rota özelinde belediye olta etkinliği + kamusal sahil + Haliç akademik tür/olta kaydı çaprazlandı; mikro atış cebi saha teyitli değil.",
  researchSummary:"Balat Şair Nedim Parkı'nda kamusal erişim ve fiilî amatör olta kullanımı belediyece doğrulanmış, tür olasılığı Haliç literatürüyle desteklenmiştir.",
  fishEvidence:[fe("Kefal","Mugil cephalus",halicAcademic,"Destekleyici olasılık · Haliç akademik olta kaydı","Haliç olta balıkçılığı literatüründe kefal grubu raporlanmıştır."),fe("İstavrit","Trachurus sp.",halicAcademic,"Destekleyici olasılık · Haliç akademik olta kaydı","Haliç ve Galata-Unkapanı hattındaki olta kayıtlarında istavrit raporlanmıştır.")],
  accommodationOptions:[],accessEvidence:[ae("Rota özelinde amatör kullanım","Fatih Belediyesi Şair Nedim Parkı'nda olta etkinliği düzenledi.",balatFishing,"Etkinlik alanın her gün ve her bölümde engelsiz olduğu anlamına gelmez.")],navigationVerified:false,
  confidenceProfile:cProfile("Fatih Belediyesi park ve Balat sahil kimliğini doğrular.","Belediye aynı parkta amatör olta etkinliği düzenlemiştir; 6/2 ve saha kuralları ayrıca geçerlidir.","Kamusal park/sahil erişimi doğrulanmıştır; mikro atış noktası saha teyitli değildir.","Haliç akademik kaynakları kefal ve istavrit olasılığını destekler.")
},
{
  slug:"istanbul-beyoglu-haskoy-sahil-parki",name:"Hasköy Sahil Parkı",district:"Beyoğlu",province:"İstanbul",zone:"Hasköy kamusal Haliç kıyısı",waterType:"Deniz",region:"Marmara",
  summary:"Hasköy Sahil Parkı, 2025-2026 belediye etkinlikleriyle güncel kamusal kıyı kullanımı doğrulanan ve Haliç olta literatürüyle desteklenen Güven C şehir içi kıyı rotasıdır.",
  fish:["Kefal","İstavrit"],methods:["Şamandıralı olta","Hafif dip oltası","Çapari"],baits:["Ekmek","Karides","Solucan","Suni çapari"],camping:"Uygun değil",vehicleAccess:"Orta",
  amenities:["Hasköy Sahil Parkı","Beyoğlu toplu taşıma seçenekleri","Yakın şehir içi temel ihtiyaçlar"],
  cautions:["Hasköy/Tersane İstanbul çalışma veya özel işletme sınırlarına yaklaşma.","Yaya ve etkinlik yoğunluğunda olta atma.","İskele/tekne operasyon alanlarını rota dışında bırak.","Türler Haliç bölgesel kayıtlarıdır, noktasal av garantisi değildir."],
  lat:41.0431,lng:28.9494,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: Beyoğlu Belediyesi Hasköy Sahil Parkı kamusal etkinlikleri + 2026 güncel sahil kullanımı + Haliç akademik olta/tür literatürü + genel mevzuat. Tersane/özel çalışma alanları dışlandı. Güven C.",
  updatedAt:date,publishedAt:date,confidence:"C",indexing:"index",
  image:"/images/meralar/ulusal/istanbul-beyoglu-haskoy-sahil-parki.svg",socialImage:"/images/meralar/ulusal/istanbul-beyoglu-haskoy-sahil-parki.svg",
  navigationNote:"Pin Hasköy Sahil Parkı'nın kamusal genel bölgesini gösterir. Tersane/işletme alanı, iskele ve kapalı çalışma sahaları rota dışıdır; yalnız açık kamusal park kıyısı değerlendirilmelidir.",
  shoreProfile:"Hasköy Sahil Parkı Haliç'in kuzey kıyısında yoğun kent kullanımı olan bir park hattıdır. Yakındaki iskele ve dönüşüm/işletme alanları nedeniyle av planı yalnız açık, kamusal ve yaya güvenliğini bozmayacak kıyı parçasıyla sınırlandırılmalıdır.",
  transport:"Hasköy'e Beyoğlu toplu taşıma ağıyla ulaşılır. Belediye 2025 ve 2026 etkinlikleri parkın aktif kamusal kullanımını doğrular; park/otopark durumu etkinlik günlerine göre değişebilir. Konaklama için Beyoğlu'ndaki ruhsatlı seçenekler ayrıca doğrulanmalıdır.",
  crowdNote:"Festival, konser ve hafta sonlarında kıyı yoğunluğu yüksek olabilir. Park kullanıcılarıyla güvenli mesafe kurulamadığında olta açılmamalı ve başka zaman seçilmelidir.",
  longIntro:["Hasköy Sahil Parkı, Beyoğlu Belediyesi'nin 2025 Çevre Festivali ile 2026 kamusal etkinliklerini doğrudan sahilde gerçekleştirdiği aktif bir kent kıyısıdır.","Balık türleri için Haliç olta literatürü yalnız bölgesel destek sağlar. Sayfa aktif tersane/özel işletme alanlarını özellikle dışlar ve park kıyısının her bölümünü av alanı saymaz."],
  planningNotes:["Tersane/özel işletme ve iskele cephelerine girme.","Etkinlik veya kalabalık varsa avı ertele.","6/2 Tebliğ ve güncel kıyı düzenlemelerini kontrol et.","Konaklama gerekiyorsa Beyoğlu'ndaki ruhsatlı seçenekleri ayrıca kontrol et."],
  seasonalNotes:["Haliç akıntısı ve su kalitesi yağış, rüzgâr ve Boğaz değişimiyle hızlı değişebilir.","Kefal/istavrit kaydı bölgesel olasılıktır; güncel saha av verisi bulunmamaktadır."],
  sources:[haskoyPublic,haskoy2026,halicAcademic,teblig],researchedAt:date,researchStatus:"Güncel belediye kamusal sahil kullanımı + Haliç akademik tür/olta kaydı çaprazlandı; tersane/işletme alanları dışlandı, mikro atış cebi saha teyitli değil.",
  researchSummary:"Hasköy Sahil Parkı'nın kamusal erişim bağlamı güncel belediye kaynaklarıyla; tür olasılığı Haliç akademik kayıtlarıyla desteklenmiştir.",
  fishEvidence:[fe("Kefal","Mugil cephalus",halicAcademic,"Destekleyici olasılık · Haliç akademik olta kaydı","Haliç olta literatüründe kefal türleri raporlanmıştır."),fe("İstavrit","Trachurus sp.",halicAcademic,"Destekleyici olasılık · Haliç akademik olta kaydı","Haliç/Galata hattı olta kayıtlarında istavrit raporlanmıştır.")],
  accommodationOptions:[],accessEvidence:[ae("Kamusal park kıyısı","Hasköy Sahil Parkı belediye etkinliklerine açık aktif kamusal alandır.",haskoy2026,"Etkinlik/işletme veya geçici kapanışlar av günü ayrıca kontrol edilmelidir.")],navigationVerified:false,
  confidenceProfile:cProfile("Beyoğlu Belediyesi Hasköy Sahil Parkı'nı güncel kamusal etkinlik alanı olarak doğrular.","Genel 6/2 çerçevesi geçerlidir; tersane/özel işletme ve iskele alanları hariç tutulmuştur.","Kamusal park erişimi güçlüdür; mikro atış cebi saha teyitli değildir.","Haliç akademik kayıtları kefal ve istavrit olasılığını destekler.")
},
{
  slug:"istanbul-avcilar-avcilar-sahil-parki",name:"Avcılar Sahil Parkı",district:"Avcılar",province:"İstanbul",zone:"Avcılar merkez kamusal Marmara kıyısı",waterType:"Deniz",region:"Marmara",
  summary:"Avcılar Sahil Parkı, İBB'nin 2025 yenilemesiyle kamusal ve güvenli kıyı kimliği güncellenen, İstanbul-Marmara resmî tür kayıtlarıyla desteklenen Güven C kıyı rotasıdır.",
  fish:["İstavrit","Lüfer","Kefal"],methods:["Çapari","Kıyıdan spin","Şamandıralı olta"],baits:["Suni çapari","Küçük kaşık","Karides","Ekmek"],camping:"Uygun değil",vehicleAccess:"Kolay",
  amenities:["Yürüyüş ve spor alanları","Avcılar merkez toplu taşıma seçenekleri","Yakın temel ihtiyaçlar"],
  cautions:["Denizköşkler yüzme/plaj alanının içinde olta atma.","Yaya ve bisiklet yoğunluğunda güvenli atış yoksa av yapma.","İskele veya çalışma alanlarına yaklaşma.","Tür listesi İstanbul Marmara bölgesel resmî kayıtlarıdır."],
  lat:40.9708,lng:28.7167,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: İBB Avcılar Sahil Parkı 2025 yenileme ve kamusal kullanım kaydı + İBB Denizköşkler plaj hizmeti + İstanbul İl Tarım deniz tür kayıtları + genel mevzuat. Yüzme alanı rota dışında. Güven C.",
  updatedAt:date,publishedAt:date,confidence:"C",indexing:"index",
  image:"/images/meralar/ulusal/istanbul-avcilar-avcilar-sahil-parki.svg",socialImage:"/images/meralar/ulusal/istanbul-avcilar-avcilar-sahil-parki.svg",
  navigationNote:"Pin Avcılar Sahil Parkı genel kamusal kıyısını gösterir. Denizköşkler yüzme alanı, iskele ve yoğun etkinlik cepleri olta noktası değildir; açık bölüm hareket günü yerinde seçilmelidir.",
  shoreProfile:"Avcılar Sahil Parkı düzenlenmiş Marmara kent kıyısıdır. Yüzme alanı ve yoğun yaya aksları dışlanarak yalnız açık, kamusal ve atış güvenliği sağlanabilen kıyı kesimleri planlamaya alınmalıdır.",
  transport:"Avcılar merkezden sahil parkına toplu taşıma ve yaya bağlantıları bulunur. İBB yenileme kaydı kamusal erişimi doğrular; park ve araç yoğunluğu hafta sonu değişebilir. Konaklama için Avcılar/Bakırköy hattındaki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
  crowdNote:"Akşam ve hafta sonu yoğunluğu yükselebilir. Yüzücüler, bisikletliler veya yürüyüş kullanıcıları varken olta atışı yapılmamalı; güvenli açıklık yoksa av ertelenmelidir.",
  longIntro:["Avcılar Sahil Parkı 2025 sonunda İBB tarafından yenilenmiş ve yaklaşık 15 bin metrekarelik kamusal kıyı alanı kullanıma açılmıştır.","İstanbul İl Tarım kayıtları Marmara kıyı avcılığında istavrit, lüfer ve kefal türlerini doğrular. Bu veri Avcılar için bölgesel tür olasılığıdır; belirli gün ve noktada av garantisi değildir."],
  planningNotes:["Denizköşkler yüzme alanını olta rotasından tamamen ayır.","Kalabalık saatlerde uzun atış yapma.","6/2 Tebliğ ve güncel İstanbul kıyı kararlarını kontrol et.","Konaklama gerekiyorsa Avcılar çevresindeki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["Marmara'da göçmen balık hareketleri mevsime göre değişir; istavrit/lüfer varlığı sabit değildir.","Poyraz/lodos yüzey akıntısını ve kıyı güvenliğini hızla değiştirebilir."],
  sources:[avcilarPark,ibbBeaches,istFish,teblig],researchedAt:date,researchStatus:"İBB güncel kamusal sahil parkı + plaj sınırı + İstanbul resmî tür kayıtları çaprazlandı; yüzme alanı ve mikro olta cebi ayrımı saha teyitli değil.",
  researchSummary:"Avcılar Sahil Parkı'nın kamusal kıyı kimliği İBB tarafından, tür olasılığı İstanbul İl Tarım kayıtlarıyla desteklenmiştir.",
  fishEvidence:[fe("İstavrit","Trachurus sp.",istFish,"Destekleyici olasılık · İstanbul resmî denetim kaydı","İstanbul deniz avcılığında resmî olarak kaydedilir."),fe("Lüfer","Pomatomus saltatrix",istFish,"Destekleyici olasılık · İstanbul resmî denetim kaydı","İstanbul deniz avcılığında resmî olarak kaydedilir."),fe("Kefal","Mugil cephalus",istFish,"Destekleyici olasılık · İstanbul resmî denetim kaydı","İstanbul deniz avcılığında resmî olarak kaydedilir.")],
  accommodationOptions:[],accessEvidence:[ae("Kamusal kıyı parkı","Avcılar Sahil Parkı İBB tarafından yenilenip halk kullanımına açılmıştır.",avcilarPark,"Yüzme alanı ve etkinlik cepleri olta noktası değildir.")],navigationVerified:false,
  confidenceProfile:cProfile("İBB Avcılar Sahil Parkı'nı güncel kamusal kıyı alanı olarak doğrular.","6/2 çerçevesi geçerlidir; Denizköşkler yüzme alanı rota dışında tutulur.","Kamusal park erişimi güçlüdür; mikro atış cebi saha teyitli değildir.","İstanbul İl Tarım kayıtları istavrit, lüfer ve kefal olasılığını bölgesel olarak destekler.")
},
{
  slug:"ankara-kalecik-koyunbaba-mahallesi-amator-alani",name:"Koyunbaba Barajı Koyunbaba Mahallesi Amatör Balıkçılık Alanı",district:"Kalecik",province:"Ankara",zone:"Koyunbaba Mahallesi resmî amatör kıyı segmenti",waterType:"Baraj",region:"İç Anadolu",
  summary:"Koyunbaba Barajı Koyunbaba Mahallesi alanı, Ankara İl Tarımın koordinatla tanımladığı resmî amatör balıkçılık segmentlerinden biridir ve Güven B seviyesindedir.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Koyunbaba Mahallesi genel yaklaşım referansı","Kalecik ilçe merkezi temel ihtiyaçları"],
  cautions:["Yalnız resmî amatör alan sınırı içinde kal.","Ticari istihsal ağları/ekipmanı ve teknik su yapılarından uzak dur.","Koyunbaba Barajı'ndaki yeni su iletim/sulama çalışmaları varsa çalışma sahasına girme.","Sazan stok kaydı av garantisi değildir."],
  lat:40.323142,lng:33.304042,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: Ankara İl Tarım koordinat eki + resmî amatör alan haritası + Koyunbaba stok/kiralama duyurusu + ABB bağımsız tür laboratuvarı + DSİ su yapısı kaydı. Güven B.",
  updatedAt:date,publishedAt:date,confidence:"B",indexing:"index",
  image:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-mahallesi-amator-alani.svg",socialImage:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-mahallesi-amator-alani.svg",
  navigationNote:"Pin 40°19.618'K 33°18.384'D ile 40°19.159'K 33°18.101'D resmî sınır çiftinin yaklaşık orta noktasını temsil eder. Son yol ve park koşulu yerinde doğrulanmalıdır.",
  shoreProfile:"Bu kayıt Koyunbaba Barajı'nın tamamını değil, İl Tarımın Koyunbaba Mahallesi adıyla sınırlandırdığı belirli amatör balıkçılık kıyı segmentini temsil eder. Değişken su kotu, teknik işletme ve ticari av ekipmanı nedeniyle sınır dışına taşılmamalıdır.",
  transport:"Kalecik-Koyunbaba kırsal yol ağı üzerinden genel yaklaşım planlanır. Resmî koordinat kıyı segmentini doğrular ancak son yolun araçla açık veya park için uygun olduğunu garanti etmez. Konaklama için Kalecik'teki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
  crowdNote:"Resmî amatör alan olması hafta sonu oltacı yoğunluğu oluşturabilir. Ticari ağ veya tekne faaliyeti görülen kıyıda güvenli mesafe bırakılmalı ve çalışma kesimi kullanılmamalıdır.",
  longIntro:["Koyunbaba Mahallesi, Ankara İl Tarımın Koyunbaba Barajı için yayımladığı beş ayrı amatör balıkçılık alanından biridir ve iki sınır koordinatıyla resmen tanımlanmıştır.","Koyunbaba Barajı kiralama kayıtları ile ABB laboratuvar çalışması sazan varlığını destekler. Güven B, kıyının her an engelsiz olduğu veya av başarısının yüksek olacağı anlamına gelmez."],
  planningNotes:["Resmî koordinat segmentinin dışına çıkma.","Ticari av ekipmanı, pompa, gövde ve çalışma alanlarından uzak dur.","6/2 Tebliğ ve Ankara İl Tarımın güncel yerel kararlarını kontrol et.","Konaklama gerekiyorsa Kalecik ilçe merkezindeki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["Sazan için kapalı dönem ve boy/adet limitleri güncel mevzuattan kontrol edilmelidir.","Su kotu ve kıyı zemini sulama/kuraklık döneminde değişebilir."],
  sources:[koyunAreas,koyunMap,koyunLease,koyunAbb,koyunDsi,teblig],researchedAt:date,researchStatus:"Resmî amatör alan sınırı + resmî stok kaydı + bağımsız ABB tür tespiti + DSİ su yapısı kimliği çaprazlandı; mikro yol/park saha teyitli değil.",
  researchSummary:"Koyunbaba Mahallesi kıyı segmenti doğrudan resmî amatör balıkçılık alanıdır; sazan varlığı bağımsız kurumsal kaynaklarla da desteklenir.",
  fishEvidence:[fe("Sazan","Cyprinus carpio",koyunLease,"Güçlü olasılık · rota su kütlesinde resmî stok kaydı","Koyunbaba Barajı için resmî avlanabilir sazan stoku kaydedilmiştir."),fe("Sazan","Cyprinus carpio",koyunAbb,"Güçlü olasılık · bağımsız belediye laboratuvar kaydı","ABB çalışması Koyunbaba Barajı'nda aynalı ve pullu sazan tespitini verir.")],
  accommodationOptions:[],accessEvidence:[ae("Resmî amatör alan","Koyunbaba Mahallesi Mevki iki sınır koordinatıyla amatör balıkçılığa ayrılmıştır.",koyunAreas,"Son araç yolu ve park saha teyidi gerektirir.")],navigationVerified:false,
  confidenceProfile:bProfile("Koyunbaba Mahallesi Amatör Balıkçılık Alanı")
},
{
  slug:"ankara-kalecik-koyunbaba-karahaci-amator-alani",name:"Koyunbaba Barajı Karahacı Amatör Balıkçılık Alanı",district:"Kalecik",province:"Ankara",zone:"Karahacı resmî amatör kıyı segmenti",waterType:"Baraj",region:"İç Anadolu",
  summary:"Karahacı, Koyunbaba Barajı'nda Ankara İl Tarımın koordinat ve haritayla ayrı tanımladığı resmî amatör balıkçılık alanıdır; tür ve su kimliği bağımsız kaynaklarla desteklenir.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Kalecik kırsal yol ağı","Kalecik ilçe merkezi temel ihtiyaçları"],
  cautions:["Yalnız resmî Karahacı sınır segmentinde kal.","Ticari ağ/kerevit ekipmanı ve teknik tesislere yaklaşma.","Tarım/özel parsel geçişini kamusal yol varsayma.","Sazan stok verisi av garantisi değildir."],
  lat:40.338017,lng:33.290617,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: Ankara İl Tarım Karahacı koordinat sınırları + resmî harita + Koyunbaba tür/kiralama kaydı + ABB laboratuvar tür tespiti + DSİ su yapısı kaydı. Güven B.",
  updatedAt:date,publishedAt:date,confidence:"B",indexing:"index",
  image:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-karahaci-amator-alani.svg",socialImage:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-karahaci-amator-alani.svg",
  navigationNote:"Pin 40°20.115'K 33°17.265'D ile 40°20.447'K 33°17.609'D sınırlarının yaklaşık orta noktasıdır. Kıyıya son yaklaşım ve mülkiyet sınırı hareket günü kontrol edilmelidir.",
  shoreProfile:"Karahacı kaydı Koyunbaba Barajı'nın resmî haritada ayrı çizilmiş amatör kıyı segmentidir. Açık bozkır rüzgârı, değişken su kotu ve ticari istihsal faaliyeti nedeniyle yalnız tanımlı segment içinde güvenli kıyı kullanılmalıdır.",
  transport:"Kalecik kırsal yol ağı üzerinden yaklaşılır; resmî alan koordinatları kıyı segmentini doğrular fakat son yol yüzeyi ve park kamusallığını doğrulamaz. Konaklama için Kalecik'teki ruhsatlı seçenekler ayrıca araştırılmalıdır.",
  crowdNote:"Belirlenmiş amatör kıyı hafta sonu yoğunlaşabilir. Ticari tekne veya av ekipmanı görüldüğünde yaklaşılmamalı, diğer oltacıların atış hatları kesilmemelidir.",
  longIntro:["Karahacı Mevki, Koyunbaba Barajı'nda resmî koordinat ekinde dördüncü amatör balıkçılık alanı olarak tanımlanır. Demirci-Oyumiğde, Eşmedere ve Koyunbaba Mahallesi segmentlerinden farklı bir kıyı cebidir.","Barajdaki sazan varlığı İl Tarım stok kaydı ve ABB laboratuvar raporuyla desteklenmektedir. Saha koşulları ve son yol erişimi masa başından kesinleştirilemez."],
  planningNotes:["Yalnız Karahacı için verilen iki sınır koordinatı arasında kal.","Ticari istihsal veya teknik çalışma gördüğün kıyıyı kullanma.","6/2 Tebliğ ile Ankara İl Tarımın güncel kararlarını kontrol et.","Konaklama gerekiyorsa Kalecik merkezindeki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["İçsu kapalı dönem ve sazan boy/adet limitleri geçerlidir.","Kuraklık ve sulama kıyı eğimini/çamur riskini değiştirebilir."],
  sources:[koyunAreas,koyunMap,koyunLease,koyunAbb,koyunDsi,teblig],researchedAt:date,researchStatus:"Karahacı resmî amatör alan sınırı + stok/tür + ABB laboratuvar + DSİ kimliği çaprazlandı; mikro yol/park saha teyitli değil.",
  researchSummary:"Karahacı bağımsız resmî amatör kıyı segmentidir; su kimliği ve sazan kanıtı birden çok kurum kaynağıyla desteklenmiştir.",
  fishEvidence:[fe("Sazan","Cyprinus carpio",koyunLease,"Güçlü olasılık · rota su kütlesinde resmî stok kaydı","Koyunbaba Barajı için resmî sazan stoku kaydedilmiştir."),fe("Sazan","Cyprinus carpio",koyunAbb,"Güçlü olasılık · bağımsız belediye laboratuvar kaydı","ABB Koyunbaba örneklemesinde aynalı/pullu sazan tespit etmiştir.")],
  accommodationOptions:[],accessEvidence:[ae("Resmî amatör alan","Karahacı Mevki iki sınır koordinatıyla amatör balıkçılığa ayrılmıştır.",koyunAreas,"Son yol/park ayrıca saha kontrolü gerektirir.")],navigationVerified:false,
  confidenceProfile:bProfile("Karahacı Amatör Balıkçılık Alanı")
},
{
  slug:"ankara-kalecik-koyunbaba-karamusa-amator-alani",name:"Koyunbaba Barajı Karamusa Amatör Balıkçılık Alanı",district:"Kalecik",province:"Ankara",zone:"Karamusa resmî amatör kıyı segmenti",waterType:"Baraj",region:"İç Anadolu",
  summary:"Karamusa, Koyunbaba Barajı'nda Ankara İl Tarımın beşinci resmî amatör balıkçılık segmenti olarak koordinatla tanımladığı, Güven B seviyesinde ayrı bir kıyı rotasıdır.",
  fish:["Sazan"],methods:["Dip oltası","Şamandıralı olta"],baits:["Mısır","Hamur","Solucan"],camping:"Kontrol edilmeli",vehicleAccess:"Kontrol edilmeli",
  amenities:["Karamusa/Kalecik kırsal yaklaşım ağı","Kalecik ilçe merkezi temel ihtiyaçları"],
  cautions:["Yalnız resmî Karamusa sınır segmentinde kal.","Ticari istihsal ekipmanına ve teknik su yapılarına yaklaşma.","Özel/tarımsal yollara izinsiz girme.","Sazan kaydı av garantisi değildir."],
  lat:40.332517,lng:33.266392,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: Ankara İl Tarım Karamusa koordinatları + resmî harita + Koyunbaba tür/kiralama kaydı + ABB laboratuvar tespiti + DSİ su yapısı kimliği. Güven B.",
  updatedAt:date,publishedAt:date,confidence:"B",indexing:"index",
  image:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-karamusa-amator-alani.svg",socialImage:"/images/meralar/ulusal/ankara-kalecik-koyunbaba-karamusa-amator-alani.svg",
  navigationNote:"Pin 40°20.025'K 33°15.642'D ile 40°19.877'K 33°16.325'D sınır çiftinin yaklaşık orta noktasıdır. Karamusa yönündeki son yol ve park kamusallığı yerinde kontrol edilmelidir.",
  shoreProfile:"Karamusa segmenti Koyunbaba Barajı'ndaki diğer resmî amatör kıyılardan ayrı sınır çiftine sahiptir. Değişken su kotu ve kırsal/tarımsal çevre nedeniyle yalnız resmî sınır içinde, stabil ve özel mülkiyete girmeyen kıyılar kullanılmalıdır.",
  transport:"Kalecik-Karamusa kırsal yaklaşım hattı planlama başlangıcıdır. Resmî koordinat kıyı segmentini doğrular ancak son yol ve park durumunu garanti etmez. Konaklama gerekiyorsa Kalecik'teki ruhsatlı seçenekler ayrıca kontrol edilmelidir.",
  crowdNote:"Resmî amatör alanlarda uygun hava günlerinde oltacı yoğunluğu olabilir. Ticari ağ veya tekne çalışma kesimlerinden güvenli mesafe bırakılmalıdır.",
  longIntro:["Karamusa Mevki, Ankara İl Tarımın Koyunbaba Barajı için yayımladığı beş resmî amatör balıkçılık alanından sonuncusudur ve iki koordinatla ayrı kıyı segmenti olarak gösterilir.","Koyunbaba Barajı'nda sazan varlığı resmî stok duyurusu ve ABB laboratuvar çalışmasıyla desteklenir. Bu kaynaklar günlük av başarısını veya kıyıya araçla erişimi garanti etmez."],
  planningNotes:["Resmî Karamusa sınırını hareket günü tekrar kontrol et.","Ticari/teknik faaliyet görülen kesimi kullanma.","6/2 Tebliğ ve Ankara İl Tarım güncel ilanlarını kontrol et.","Konaklama için Kalecik merkezindeki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["Sazan kapalı dönem ve boy/adet kuralları güncel mevzuata göre uygulanır.","Kıyı çamuru ve su kotu mevsimsel olarak değişebilir."],
  sources:[koyunAreas,koyunMap,koyunLease,koyunAbb,koyunDsi,teblig],researchedAt:date,researchStatus:"Karamusa resmî amatör alan sınırı + stok/tür + bağımsız ABB laboratuvar + DSİ kimliği çaprazlandı; mikro yol/park saha teyitli değil.",
  researchSummary:"Karamusa bağımsız resmî amatör kıyı segmentidir; sazan ve su yapısı kanıtları ayrı kurum kaynaklarıyla desteklenmiştir.",
  fishEvidence:[fe("Sazan","Cyprinus carpio",koyunLease,"Güçlü olasılık · rota su kütlesinde resmî stok kaydı","Koyunbaba Barajı için resmî sazan stoku kaydedilmiştir."),fe("Sazan","Cyprinus carpio",koyunAbb,"Güçlü olasılık · bağımsız belediye laboratuvar kaydı","ABB Koyunbaba Barajı örneklemesinde sazan tespitini raporlar.")],
  accommodationOptions:[],accessEvidence:[ae("Resmî amatör alan","Karamusa Mevki iki sınır koordinatıyla amatör balıkçılığa ayrılmıştır.",koyunAreas,"Son yol/park saha teyidi gerektirir.")],navigationVerified:false,
  confidenceProfile:bProfile("Karamusa Amatör Balıkçılık Alanı")
},
{
  slug:"izmir-narlidere-sahilevleri-kiyi-bandi",name:"Narlıdere Sahilevleri Kıyı Bandı",district:"Narlıdere",province:"İzmir",zone:"Sahilevleri kamusal kıyı ve balıkçı iskeleleri genel bölgesi",waterType:"Deniz",region:"Ege",
  summary:"Narlıdere Sahilevleri Kıyı Bandı, İzmir Büyükşehir'in dört balıkçı iskelesi içeren kamusal kıyı projesiyle doğrulanan ve İzmir Körfezi tür kayıtlarıyla desteklenen Güven C Ege rotasıdır.",
  fish:["Kefal","Çipura"],methods:["Şamandıralı olta","Hafif dip oltası","Kıyıdan spin"],baits:["Ekmek","Karides","Mamun mevzuata uygun temin edildiğinde","Küçük suni yem"],camping:"Uygun değil",vehicleAccess:"Kolay",
  amenities:["Kesintisiz yaya kıyı bandı","Balıkçı iskeleleri","Bisiklet yolu ve oturma alanları","Narlıdere/Güzelbahçe temel ihtiyaç seçenekleri"],
  cautions:["İskelelerde yaya güvenliği sağlanmadan olta atma.","Yüzme, tekne veya bakım faaliyeti bulunan bölümü kullanma.","İzmir Körfezi'nde güncel yerel yasak ve su kalitesi duyurularını kontrol et.","Türler Körfez bölgesel kayıtlarıdır; noktasal av garantisi değildir."],
  lat:38.3928,lng:27.0046,locationPrecision:"Genel bölge",
  verification:"2026-09-29 masa başı doğrulaması: İzmir Büyükşehir Narlıdere-Sahilevleri kıyı projesi rota özelinde dört balıkçı iskelesi ve kamusal yaya bandını doğruluyor; İzmir İl Tarım Körfez tür kayıtları + akademik amatör balıkçılık bağlamı + 6/2 mevzuat çaprazlandı. Güven C.",
  updatedAt:date,publishedAt:date,confidence:"C",indexing:"index",
  image:"/images/meralar/ulusal/izmir-narlidere-sahilevleri-kiyi-bandi.svg",socialImage:"/images/meralar/ulusal/izmir-narlidere-sahilevleri-kiyi-bandi.svg",
  navigationNote:"Pin Narlıdere Sahilevleri kıyı bandının genel merkezini gösterir. Dört balıkçı iskelesinden güncel olarak açık ve yaya güvenliği uygun olanı yerinde seçilmeli; bakım/tekne kullanımındaki iskeleye girilmemelidir.",
  shoreProfile:"Narlıdere Sahilevleri yaklaşık 2,6-2,7 km düzenlenmiş kent kıyısıdır ve projede dört balıkçı iskelesi bulunmaktadır. İskelelerin durumu değişebileceğinden yalnız açık, kamusal ve yaya güvenliğini bozmayan bölüm kullanılmalıdır.",
  transport:"Narlıdere-Sahilevleri kent içi yol ve toplu taşıma ağıyla erişilebilen düzenlenmiş kıyı bandıdır. Belediye projesi kamusal erişimi ve balıkçı iskelelerini doğrular; park yoğunluğu akşam ve hafta sonu artabilir. Konaklama için Narlıdere/Güzelbahçe ruhsatlı seçenekleri ayrıca kontrol edilmelidir.",
  crowdNote:"Gün batımı ve hafta sonlarında yürüyüş/bisiklet yoğunluğu artar. İskelede güvenli atış koridoru oluşmuyorsa av yapılmamalı ve kıyı kullanıcısının geçişi engellenmemelidir.",
  longIntro:["Narlıdere Sahilevleri Kıyı Projesi, İzmir Büyükşehir Belediyesi tarafından tamamlanan düzenlemede denize yaklaşımı güçlendiren kamusal yaya bandı ve dört ayrı balıkçı iskelesi oluşturulduğunu açıkça kaydeder.","İzmir İl Tarımın Körfez denetimlerinde çipura ve kefal kayıtları bulunur; akademik çalışmalar da İzmir Körfezi'ndeki amatör balıkçılık etkinliğini destekler. Bunlar belirli iskelede günlük av garantisi değildir."],
  planningNotes:["Açık ve bakımsız olmayan balıkçı iskelesini yerinde seç.","Bisiklet/yaya trafiğinde uzun atış yapma.","6/2 Tebliğ ile İzmir İl Tarımın güncel yerel kararlarını kontrol et.","Konaklama gerekiyorsa Narlıdere/Güzelbahçe'deki ruhsatlı seçenekleri ayrıca doğrula."],
  seasonalNotes:["İzmir Körfezi tür hareketleri mevsim ve su sıcaklığına göre değişebilir.","Rüzgâr ve kıyı akıntısı hafif takım kullanımını etkileyebilir; güncel hava/deniz koşulu kontrol edilmelidir."],
  sources:[narlidereShore,izmirFish,izmirAmateur,teblig],researchedAt:date,researchStatus:"Rota özelinde belediye balıkçı iskeleleri + kamusal kıyı + İzmir Körfezi resmî tür kayıtları + akademik amatör balıkçılık bağlamı çaprazlandı; mikro iskele durumu saha teyitli değil.",
  researchSummary:"Narlıdere Sahilevleri kamusal kıyı ve balıkçı iskeleleri belediyece doğrulanmış; tür olasılığı İl Tarım ve akademik Körfez kaynaklarıyla desteklenmiştir.",
  fishEvidence:[fe("Kefal","Mugil cephalus",izmirFish,"Destekleyici olasılık · İzmir Körfezi resmî kayıt","İzmir Körfezi denetimlerinde kefal kaydı bulunur."),fe("Çipura","Sparus aurata",izmirFish,"Destekleyici olasılık · İzmir Körfezi resmî kayıt","İzmir Körfezi denetimlerinde çipura kaydı bulunur.")],
  accommodationOptions:[],accessEvidence:[ae("Rota özelinde balıkçı iskeleleri","İzmir Büyükşehir Narlıdere Sahilevleri projesinde dört balıkçı iskelesi oluşturmuştur.",narlidereShore,"İskelelerin güncel açıklığı ve bakım durumu hareket günü kontrol edilmelidir.")],navigationVerified:false,
  confidenceProfile:cProfile("İzmir Büyükşehir Narlıdere-Sahilevleri kıyı bandını ve dört balıkçı iskelesini rota özelinde doğrular.","Balıkçı iskelesi doğrudan kullanım bağlamı sağlar; 6/2 ve yerel kararlar ayrıca geçerlidir.","Kamusal yaya kıyısı doğrulanmıştır; hangi iskelenin güncel açık olduğu saha teyitli değildir.","İzmir İl Tarım kayıtları kefal ve çipura olasılığını Körfez düzeyinde destekler.")
}
];

export const istanbulAnkaraIzmirStats20260929={
  total:yeniIstanbulAnkaraIzmir20260929.length,
  istanbul:yeniIstanbulAnkaraIzmir20260929.filter(r=>r.province==="İstanbul").length,
  ankara:yeniIstanbulAnkaraIzmir20260929.filter(r=>r.province==="Ankara").length,
  izmir:yeniIstanbulAnkaraIzmir20260929.filter(r=>r.province==="İzmir").length,
  indexable:yeniIstanbulAnkaraIzmir20260929.filter(r=>r.indexing==="index"&&r.confidence!=="D").length,
  slugs:yeniIstanbulAnkaraIzmir20260929.map(r=>r.slug)
};
if(istanbulAnkaraIzmirStats20260929.total!==7||istanbulAnkaraIzmirStats20260929.istanbul!==3||istanbulAnkaraIzmirStats20260929.ankara!==3||istanbulAnkaraIzmirStats20260929.izmir!==1)throw new Error("29 Eylül manuel batch hedefi 3 İstanbul + 3 Ankara + 1 İzmir olmalı.");
if(yeniIstanbulAnkaraIzmir20260929.some(r=>r.confidence==="D"||r.indexing!=="index"))throw new Error("29 Eylül manuel batch rotalarının tamamı C+ ve index olmalı.");
if(yeniIstanbulAnkaraIzmir20260929.some(r=>r.sources.length<3))throw new Error("29 Eylül manuel batch rotalarında en az üç kaynak bulunmalı.");
