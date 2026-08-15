export type ProvinceEvidenceKind="stocking"|"official-amateur-use"|"public-notice"|"organization"|"fishery-support"|"species-stock";
export type ProvinceEvidenceScope="province"|"route";
export type ProvinceEvidenceLegalEffect="amateur-use"|"closed"|"context-only";
export type ProvinceFisheriesEvidence={
  kind:ProvinceEvidenceKind;
  scope:ProvinceEvidenceScope;
  label:string;
  url:string;
  date?:string;
  species?:string[];
  routeSlugs?:string[];
  officialAmateurUse?:boolean;
  legalEffect?:ProvinceEvidenceLegalEffect;
  note:string;
};

export const provinceEvidenceReviewMeta={
  reviewedAt:"2026-08-15",
  reviewedCategories:["doğaya balık salımı / balıklandırma","amatör-sportif balıkçılık faaliyeti ve organizasyonu","il müdürlüğü ve diğer kamu kurumu duyuruları","güncel 6/2 mevzuat ve yerel alan kısıtları"],
  methodology:"İl düzeyindeki stoklama, tür, organizasyon veya destek kaydı yalnız bağlamsal kanıttır; tek başına belirli bir kıyının amatör ava açık olduğunu kanıtlamaz ve genel güven seviyesini yükseltmez. Güven B yalnız rota/su adı açıkça eşleşen resmî amatör kullanım kanıtıyla, Güven A ise buna ek saha doğrulamasıyla mümkündür. Yıl boyu ava kapalı olduğu güncel resmî kaynakta açıkça belirtilen rota yayımdan çıkarılır."
} as const;

export const reviewedProvinces20260815=[
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Iğdır","Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kırıkkale","Kırklareli","Kırşehir","Kilis","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Şanlıurfa","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"
] as const;

const e=(kind:ProvinceEvidenceKind,scope:ProvinceEvidenceScope,label:string,url:string,note:string,extra:Partial<ProvinceFisheriesEvidence>={}):ProvinceFisheriesEvidence=>({kind,scope,label,url,note,...extra});

export const provinceFisheriesEvidence20260815:Record<string,ProvinceFisheriesEvidence[]>={
  "Adana":[
    e("stocking","province","Adana İl Tarım ve Orman – 2025 balıklandırma","https://adana.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1215","İl içsularındaki balıklandırma faaliyetini destekler; belirli kıyıda av izni değildir.",{species:["Sazan"]}),
    e("stocking","route","Adana İl Tarım ve Orman – Seyhan Barajı sazan salımı","https://adana.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1130","Seyhan Baraj Gölüne rota özelinde sazan bırakıldığını kaydeder; av garantisi değildir.",{species:["Sazan"],routeSlugs:["ulusal-adana-seyhan-baraj-golu"]})
  ],
  "Adıyaman":[
    e("stocking","route","Adıyaman İl Tarım ve Orman – Çamgazi balıklandırması","https://adiyaman.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=889","Çamgazi Baraj Gölüne sazan salımını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-adiyaman-camgazi-baraj-golu"]}),
    e("public-notice","province","Adıyaman İl Tarım ve Orman – 2025 içsu av yasağı","https://adiyaman.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=686","İl düzeyindeki dönemsel içsu kısıtlarını doğrular.")
  ],
  "Afyonkarahisar":[e("stocking","province","Afyonkarahisar İl Tarım ve Orman – göl ve gölet balıklandırması","https://afyonkarahisar.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=fe5d7364-7b04-4114-abc4-cd5f01fa5f48&TermSetId=39987675-b175-4a4e-ae6f-6fa811c2801e&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=170%2FGol-Ve-Goletlerimiz-Baliklandirildi","İl düzeyinde balıklandırma ve amatör kullanım bağlamı sağlar; güncel rota izni sayılmaz.",{species:["Sazan"]})],
  "Ağrı":[e("public-notice","province","Ağrı İl Tarım ve Orman – içsu avcılığı duyurusu","https://agri.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=408","İl bazındaki dönemsel avcılık hükümlerini destekler.")],
  "Aksaray":[e("public-notice","province","Aksaray İl Tarım ve Orman – 2026 su ürünleri avlanma yasakları","https://aksaray.tarimorman.gov.tr/Duyuru/548/2026-Yili-Su-Urunleri-Avlanma-Yasaklari-Basladi","2026 il bazlı dönem ve kısıt kontrolü için resmî kaynaktır.")],
  "Amasya":[e("stocking","province","Amasya İl Tarım ve Orman – Sazlık Göleti sazan salımı","https://amasya.tarimorman.gov.tr/Sayfalar/AlbumDetay.aspx?OgeId=3674","İlde rota özelindeki bir balıklandırma faaliyetini gösterir; başka Amasya rotalarına tür kanıtı olarak taşınmaz.",{species:["Sazan"]})],
  "Ankara":[
    e("official-amateur-use","province","Ankara İl Tarım ve Orman – amatör balıkçılık alanları","https://ankara.tarimorman.gov.tr/Duyuru/372/Amator-Balikcilik-Alanlari","İl Müdürlüğü amatör balıkçılık alanlarını ve ek haritaları yayımlar; rota sınırı eşleşmeden genel B kanıtı sayılmaz."),
    e("stocking","province","Ankara İl Tarım ve Orman – göletlere sazan balıklandırması","https://ankara.tarimorman.gov.tr/Haber/462/Ankara-Goletleri-Milyonlarca-Yavru-Sazanla-Bereketleniyor","İl genelindeki sazan balıklandırma çalışmalarını destekler.",{species:["Sazan"]})
  ],
  "Antalya":[e("stocking","route","Antalya İl Tarım ve Orman – Oymapınar Barajına sazan salımı","https://antalya.tarimorman.gov.tr/Haber/736/50-Bin-Yavru-Sazan-Oymapinar-Barajina-Salindi","Oymapınar Barajına sazan salımını ve sportif balıkçılık amacını tarihsel olarak destekler; güncel kıyı erişim izni değildir.",{species:["Sazan"],routeSlugs:["ulusal-antalya-oymapinar-baraj-golu"]})],
  "Ardahan":[e("public-notice","province","Ardahan İl Tarım ve Orman – 2026 su ürünleri avcılığı yasak dönemi","https://ardahan.tarimorman.gov.tr/Haber/1532/Su-Urunleri-Avciligi-Yasak-Donemi","2026 dönemsel içsu kurallarını destekler.")],
  "Artvin":[e("public-notice","province","Artvin İl Tarım ve Orman – 2026 iç sularda av yasağı","https://artvin.tarimorman.gov.tr/Haber/798/Ic-Sularda-Av-Yasagi-Basladi","İl düzeyinde güncel dönemsel kısıt bağlamıdır.")],
  "Aydın":[e("organization","province","Aydın İl Tarım ve Orman – TSSF zıpkınla balık avı Türkiye Şampiyonası","https://aydin.tarimorman.gov.tr/Haber/1347/Turkiye-Sualti-Sporlari-Federasyonu-Baskanligi-Tarafindan-Zipkinla-Balik-Avi-Kluplerarasi-Ve-Bireysel-Turkiye-Sampiyonasi-Yapildi","Kamu kurumunca desteklenen sportif balıkçılık organizasyonu bağlamıdır; belirli kıyıdan olta avı izni değildir.")],
  "Balıkesir":[
    e("stocking","route","Balıkesir İl Tarım ve Orman – İkizcetepeler balıklandırması","https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290%2F%E2%80%8Bbaraj-Ve-Goletlerimize-1-Milyon-324-Bin-Yavru-Sazan-Baligi-Birakiyoruz","İkizcetepeler Barajına sazan salımını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-balikesir-ikizcetepeler-baraj-golu"]}),
    e("stocking","route","Balıkesir İl Tarım ve Orman – Çaygören balıklandırması","https://balikesir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f7a29156-478a-418e-9de7-76b55bec8937&TermSetId=84520646-651b-43db-b791-d9fdc230a613&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1290%2F%E2%80%8Bbaraj-Ve-Goletlerimize-1-Milyon-324-Bin-Yavru-Sazan-Baligi-Birakiyoruz","Çaygören Barajına sazan salımını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-balikesir-caygoren-baraj-golu"]})
  ],
  "Bartın":[
    e("stocking","province","Bartın İl Tarım ve Orman – sazan balıklandırması","https://bartin.tarimorman.gov.tr/Haber/595/Balikcilik-Av-Sezonu-Acilisi-Yapildi","İlde yüz binlerce sazan salımı yapıldığını bildirir; su adı eşleşmeden rota tür kanıtı değildir.",{species:["Sazan"]}),
    e("fishery-support","province","Bartın İl Tarım ve Orman – küçük ölçekli balıkçılık desteği bağlamı","https://bartin.tarimorman.gov.tr/Haber/595/Balikcilik-Av-Sezonu-Acilisi-Yapildi","Küçük ölçekli balıkçılığa kamu desteğini aktarır; amatör kıyı izni değildir.")
  ],
  "Batman":[e("stocking","route","Batman İl Tarım ve Orman – Batman Baraj Gölüne balık salımı","https://batman.tarimorman.gov.tr/Haber/698/Iki-Milyon-Balik-Yavrusu-Batman-Baraj-Golune-Birakildi","Batman Baraj Gölüne sazan ve şabut bırakıldığını rota özelinde kaydeder.",{species:["Sazan","Şabut"],routeSlugs:["ulusal-batman-batman-baraj-golu"]})],
  "Bayburt":[e("public-notice","province","Bayburt İl Tarım ve Orman – amatör balıkçı bilgilendirmesi","https://bayburt.tarimorman.gov.tr/Haber/124/Amator-Balikcilarin-Dikkatine","Amatör balıkçılık kurallarına ilişkin tarihsel kamu bilgilendirmesidir; güncel rota izni değildir.")],
  "Bilecik":[
    e("official-amateur-use","route","Bilecik İl Tarım ve Orman – Pelitözü 2026 amatör balıkçı denetimi","https://bilecik.tarimorman.gov.tr/Haber/1421/Pelitozu-Goletinde-Su-Urunleri-Denetimi-Gerceklestirildi","Pelitözü Göletinde amatör olta avı yapan kişilerin 2026'da rota özelinde denetlendiğini kaydeder; güncel kurallara uyum şartıyla güçlü amatör kullanım kanıtıdır.",{routeSlugs:["bilecik-pelitozu-goleti"],officialAmateurUse:true,legalEffect:"amateur-use"}),
    e("stocking","route","Bilecik İl Tarım ve Orman – Pelitözü anaç sazan salımı","https://bilecik.tarimorman.gov.tr/Haber/1367/Pelitozu-Goletinde-Anac-Sazan-Baligi-Salimi-Gerceklestirildi","Pelitözü'ne rota özelinde anaç sazan bırakıldığını kaydeder.",{species:["Sazan"],routeSlugs:["bilecik-pelitozu-goleti"]}),
    e("public-notice","province","Bilecik İl Tarım ve Orman – 2026 içsu av yasağının sona ermesi","https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=bfedb6a9-3737-4630-9ded-fdd8dea63bb7&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=681","İl genelindeki 2026 dönemsel çerçeveyi destekler.")
  ],
  "Bingöl":[e("stocking","province","Bingöl İl Tarım ve Orman – 2025 balıklandırma","https://bingol.tarimorman.gov.tr/Haber/578/Il-Mudurlugumuz-Baliklandirma-Calismalari-Devam-Ediyor","İl içsularına sazan bırakıldığını ve sportif balıkçılık hedefini bildirir; rota adı eşleşmeden av izni değildir.",{species:["Sazan"]})],
  "Bitlis":[
    e("stocking","route","Bitlis İl Tarım ve Orman – Nazik Gölü balıklandırması","https://bitlis.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=445","Nazik Gölüne sazan bırakıldığını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-bitlis-nazik-golu"]}),
    e("stocking","route","Bitlis İl Tarım ve Orman – Aygır Gölü balıklandırması","https://bitlis.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=445","Aygır Gölüne sazan bırakıldığını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-bitlis-aygir-golu-bitlis"]})
  ],
  "Bolu":[
    e("stocking","province","Bolu İl Tarım ve Orman – 2025 balıklandırma programı","https://bolu.tarimorman.gov.tr/Haber/1640/Golkoy-Su-Urunleri-Uretim-Istasyonunda-Baliklandirma-Programi-Sona-Erdi","Bölgedeki çok sayıda suya sazan bırakıldığını gösterir; rota adı eşleşmeden tür kanıtı değildir.",{species:["Sazan"]}),
    e("species-stock","route","Bolu İl Tarım ve Orman – Seben Taşlıyayla Göleti denetimi","https://bolu.tarimorman.gov.tr/Haber/1628/Bolu-Seben-Tasliyayla-Goletinde-Yasadisi-Su-Urunleri-Avciligiyla-Ilgili-Denetimler-Araliksiz-Devam-Ediyor","Taşlıyayla Göletinde canlı sazanların suya iade edildiği rota özelindeki denetim kaydıdır; yasal av dönemi ayrıca kontrol edilir.",{species:["Sazan"],routeSlugs:["bolu-seben-tasliyayla-goleti"]}),
    e("public-notice","province","Bolu İl Tarım ve Orman – 2026 av yasağı","https://bolu.tarimorman.gov.tr/Duyuru/668/Su-Urunlerinde-Av-Yasagi-Basladi","İl bazındaki güncel dönemsel kısıt kontrolüdür.")
  ],
  "Burdur":[e("stocking","province","Burdur İl Tarım ve Orman – içsu balıklandırması","https://burdur.tarimorman.gov.tr/Haber/309/125-000-Adet-Sazan-Yavrusu-Birakarak-Balikcimizi-Ve-Kaynaklarimizi-Destekliyoruz","İl içsularında sazan balıklandırmasını destekler; rota adı eşleşmeden güven seviyesi yükseltmez.",{species:["Sazan"]})],
  "Bursa":[e("stocking","province","Bursa İl Tarım ve Orman – 2025 su kaynakları balıklandırması","https://bursa.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=2060","Doğal göl ve göletlere sazan bırakıldığını ve sportif balıkçılık hedefini bildirir; belirli rota izni değildir.",{species:["Sazan"]})],
  "Çanakkale":[e("stocking","province","Çanakkale İl Tarım ve Orman – 2025 baraj ve gölet balıklandırması","https://canakkale.tarimorman.gov.tr/Haber/834/Canakkale-Ilimizde-Baraj-Ve-Gollerimiz-Baliklandirildi","Çok sayıda suya aynalı sazan bırakıldığını ve bazı suların amatör kullanım amaçlı olduğunu bildirir; isim/sınır eşleşmeden rota B kanıtı değildir.",{species:["Sazan"]})],
  "Çankırı":[
    e("public-notice","route","Çankırı İl Tarım ve Orman – Akhasan Göleti tamamen kapalı","https://cankiri.tarimorman.gov.tr/Haber/1251/Cankirida-Su-Urunleri-Avlanma-Yasagi-Sona-Eriyor","6/2 çerçevesinde Akhasan Göletinde avlanmanın tamamen yasak olduğunu açıkça bildirir.",{routeSlugs:["ulusal-cankiri-akhasan-baraj-golu"],legalEffect:"closed"}),
    e("stocking","province","Çankırı İl Tarım ve Orman – 2025 içsu balıklandırması","https://cankiri.tarimorman.gov.tr/Haber/1260/Cankiri-Ili-Icsulari-Baliklandirildi","İl göletlerine sazan salımı bağlamıdır; kapalı suların hukuk durumunu değiştirmez.",{species:["Sazan"]})
  ],
  "Çorum":[e("official-amateur-use","province","Çorum İl Tarım ve Orman – Obruk Baraj Gölü amatör alan duyurusu","https://corum.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d2f2bbc7-508b-4380-936e-eb9a38b6c84f&TermSetId=0c07ab92-b15f-48c9-9c1e-cb7500db0939&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=374%2FObruk-Baraj-Golu-Amator-Avcilik-Yapilabilecek-Yerler-Ilan-Edilmistir","Tarihsel olarak belirli bir su için amatör alan ilanını gösterir; mevcut rota setindeki farklı sulara taşınmaz.")],
  "Denizli":[e("stocking","province","Denizli İl Tarım ve Orman – 2025 sazan balıklandırması","https://denizli.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1151","İl içsularına sazan bırakıldığını bildirir; rota bazında isim eşleşmesi olmadıkça bağlamsaldır.",{species:["Sazan"]})],
  "Diyarbakır":[e("species-stock","route","Diyarbakır İl Tarım ve Orman – Atatürk Baraj Gölü denetimi","https://diyarbakir.tarimorman.gov.tr/Haber/946/Su-Urunleri-Kontrol-Ve-Denetimleri-Devam-Ediyor","Atatürk Baraj Gölü denetiminde canlı sazan, Fırat turnası ve sirazın suya iade edildiğini bildirir; Diyarbakır kıyısı kaydı olmadığı için yalnız il bağlamında tutulur.",{species:["Sazan","Fırat turnası","Siraz"]})],
  "Düzce":[e("public-notice","province","Düzce için il düzeyindeki kamu balıkçılık kaynakları incelendi","https://duzce.tarimorman.gov.tr/","Yeni yayımlanan Düzce rotaları rota özelindeki resmî turizm, balıklandırma ve denetim kaynaklarıyla zaten desteklendi; il düzeyi ek kanıt güveni yükseltmek için kullanılmadı.")],
  "Edirne":[e("stocking","province","Edirne İl Tarım ve Orman – 2025 sazan balıklandırması","https://edirne.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=549","Çok sayıda gölete sazan bırakıldığını ve amatör olta balıkçılığını geliştirme hedefini bildirir; rota özelinde kanıt değildir.",{species:["Sazan"]})],
  "Elazığ":[
    e("stocking","province","Elazığ İl Tarım ve Orman – 2025 sazan balıklandırması","https://elazig.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1683","İl ve çevre sularına sazan bırakılmasını destekler; rota adı eşleşmeden güven yükseltmez.",{species:["Sazan"]}),
    e("species-stock","province","Elazığ İl Tarım ve Orman – Keban av sezonu","https://elazig.tarimorman.gov.tr/Haber/1651/Keban-Barajinda-2025-Yili-Av-Sezonu-Acildi","Ticari balıkçılık bağlamıdır; tür/stok ve işletme riski için destekleyici olup amatör kıyı izni değildir.")
  ],
  "Erzincan":[],
  "Erzurum":[],
  "Eskişehir":[
    e("stocking","province","Eskişehir İl Tarım ve Orman – 2025 sazan balıklandırması","https://eskisehir.tarimorman.gov.tr/Haber/1566/","İl içsularındaki geniş ölçekli sazan balıklandırmasını destekler; belirli kıyı erişim izni değildir.",{species:["Sazan"]}),
    e("public-notice","province","Eskişehir İl Tarım ve Orman – 2026 sazangiller duyurusu","https://eskisehir.tarimorman.gov.tr/Duyuru/849/Eskisehir-Icsularinda-Sazangillerde-Satis-Yasagi-Basladi","2026 dönemsel mevzuat bağlamını destekler.")
  ],
  "Gaziantep":[e("public-notice","province","Gaziantep İl Tarım ve Orman – sazangiller av yasağı","https://gaziantep.tarimorman.gov.tr/Duyuru/395/Ilimizde-Sazangiller-Av-Yasagi-Basladi","İl bazlı dönemsel kısıtları doğrular.")],
  "Giresun":[
    e("public-notice","province","Giresun İl Tarım ve Orman – 2025 balıkçılık sezonu kuralları","https://giresun.tarimorman.gov.tr/Haber/897/Denizlerde-Avlanma-Sezonu-1-Eylulde-Basliyor","İl balıkçılık mevzuatı ve denetim bağlamıdır."),
    e("public-notice","province","Giresun İl Tarım ve Orman – 2025 su ürünleri kontrol değerlendirmesi","https://giresun.tarimorman.gov.tr/Haber/919/Giresunda-2025-Yili-Su-Urunleri-Kontrol-Calismalari-Degerlendirme-Toplantisi-Yapildi","Kamu denetim faaliyetini destekler; rota erişim kanıtı değildir.")
  ],
  "Gümüşhane":[],
  "Hakkari":[e("public-notice","province","Hakkari İl Tarım ve Orman – Balıkçılık ve Su Ürünleri birimi","https://hakkari.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=14","İldeki resmî sorumlu birimi doğrular; rota veya tür kanıtı sağlamadığı için güven artırmaz.")],
  "Hatay":[e("public-notice","province","Hatay İl Tarım ve Orman – Balıkçılık ve Su Ürünleri Şubesi","https://hatay.tarimorman.gov.tr/Menu/70/Balikcilik-Ve-Su-Urunleri-Subesi","Kurumsal başvuru kaynağıdır; rota güveni artıran spesifik kanıt bulunmadı.")],
  "Iğdır":[e("public-notice","province","Iğdır İl Tarım ve Orman – su ürünleri birimi","https://igdir.tarimorman.gov.tr/Menu/15/Hayvan-Sagligi-Yetistiriciligi-Ve-Su-Urunleri-Sube-Mudurlugu","Kurumsal başvuru kaynağıdır; belirli rota için tür/erişim kanıtı değildir.")],
  "Isparta":[
    e("stocking","province","Isparta İl Tarım ve Orman – Kasımlar Barajı balık salımı","https://isparta.tarimorman.gov.tr/Haber/990/Ilimizde-Bulunan-Kasimlar-Baraj-Golune-Balik-Salimi-Gerceklestirildi","İlde sportif balıkçılık amaçlı sazan salımı yapıldığını gösterir; Kasımlar mevcut rota setinde olmadığı için bağlam olarak tutulur.",{species:["Sazan"]}),
    e("public-notice","province","Isparta İl Tarım ve Orman – 2026-2027 su ürünleri sezonu","https://isparta.tarimorman.gov.tr/Haber/1046/Ispartada-2026-2027-Su-Urunleri-Av-Sezonu-Acildi","Güncel il balıkçılık yönetimi bağlamını destekler.")
  ],
  "İstanbul":[
    e("stocking","province","İstanbul İl Tarım ve Orman – 2025 içsu balıklandırması","https://istanbul.tarimorman.gov.tr/Haber/2965/Istanbulda-3-Milyon-696-Bin-Balik-Yavrusu-Dogaya-Salindi","İldeki çok sayıda suya sazan bırakıldığını bildirir; rota adı eşleşmeden tür kanıtı değildir.",{species:["Sazan"]}),
    e("official-amateur-use","route","İstanbul İl Tarım ve Orman – Galata Köprüsü 2026 amatör balıkçı denetimi","https://istanbul.tarimorman.gov.tr/Haber/3125/Galata-Ve-Unkapani-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim-Gerceklestirildi","Galata Köprüsünde amatör balıkçıların 6/2 kapsamında denetlendiğini güncel ve rota özelinde doğrular.",{routeSlugs:["galata-koprusu"],officialAmateurUse:true,legalEffect:"amateur-use"})
  ],
  "İzmir":[e("public-notice","province","İzmir İl Tarım ve Orman – dalma yöntemiyle amatör avcılık belgesi","https://izmir.tarimorman.gov.tr/Duyuru/757/Dalma-Yontemiyle-Avcilik-Yapildigini-Gosterir-Amator-Balikci-Belgesi-Zorunlulugu-1-Ocak-2026da-Basliyor","2026 amatör avcılık mevzuatı bağlamıdır; kıyıdan olta rotası izni değildir.")],
  "Kahramanmaraş":[
    e("stocking","province","Kahramanmaraş İl Tarım ve Orman – balıklandırma projeleri","https://kahramanmaras.tarimorman.gov.tr/Menu/151/","Menzelet, Adatepe, Sır, Kartalkaya ve diğer sular için balıklandırma bağlamı sağlar; rota türü tek tek çıkarılmadan güven yükseltmez."),
    e("species-stock","route","Kahramanmaraş İl Tarım ve Orman – Menzelet istihsal ilanı","https://kahramanmaras.tarimorman.gov.tr/Duyuru/347/Menzelet-Baraj-Golunun-Su-Urunleri-Avciligi-Yoluyla-Istihsal-Hakkinin-Kiraya-Verme-Ihalesi","Menzelet su ürünleri stok/ticari faaliyet bağlamıdır; amatör kıyı izni değildir.",{routeSlugs:["ulusal-kahramanmaras-menzelet-baraj-golu"]})
  ],
  "Karabük":[e("public-notice","province","Karabük il kamu kaynakları taraması","https://karabuk.tarimorman.gov.tr/","Rota güvenini değiştirecek güncel il-geneli stok/amatör kullanım kanıtı bulunmadı; Ovacık Karagöl kaydı rota özelindeki kaynaklarıyla ayrıca değerlendirilmiştir.")],
  "Karaman":[
    e("stocking","province","Karaman İl Tarım ve Orman – Akın Göleti sazan salımı","https://karaman.tarimorman.gov.tr/Haber/379/Akin-Goletine-30-Bin-Adet-Sazan-Baligi-Yavrusu-Birakildi","İl düzeyinde balıklandırma faaliyeti bağlamıdır; mevcut rota adlarıyla eşleşmez.",{species:["Sazan"]}),
    e("public-notice","province","Karaman İl Tarım ve Orman – amatör balıkçı işlemleri","https://karaman.tarimorman.gov.tr/Menu/43/Surecler","Amatör balıkçı belgesi/işlem sürecinin kurumsal bağlamını destekler; rota izni değildir.")
  ],
  "Kars":[
    e("public-notice","province","Kars İl Tarım ve Orman – 2026 su ürünleri av yasağı","https://kars.tarimorman.gov.tr/Duyuru/432/Su-Urunleri-Av-Yasagina-Iliskin-Duyuru","İl bazında güncel av dönemi kontrolüdür."),
    e("stocking","province","Kars İl Tarım ve Orman – sazan balıklandırması","https://kars.tarimorman.gov.tr/Haber/318/Kars-Yavru-Sazanlar-Ile-Bulustu","Tarihsel il balıklandırma bağlamıdır.",{species:["Sazan"]})
  ],
  "Kastamonu":[e("public-notice","province","Kastamonu İl Tarım ve Orman – 2025 su ürünleri denetimleri","https://kastamonu.tarimorman.gov.tr/Haber/1853/Su-Urunleri-Denetimleri-Tum-Hiziyla-Devam-Ediyor","İldeki güncel denetim faaliyetlerini destekler; tek başına rota güveni artırmaz.")],
  "Kayseri":[
    e("official-amateur-use","route","Kayseri İl Tarım ve Orman – amatör balıkçılara 6/2 duyurusu","https://kayseri.tarimorman.gov.tr/Duyuru/599/Amator-Balikcilarimizin-Dikkatine","Yamula, Bahçelik, Bayramhacılı, Sarımsaklı ve Gümüşören barajlarında 6/2 kurallarına göre amatör olta kullanımının serbest olduğunu su adı vererek açıkça belirtir; işletme/ticari alan ve güncel saha kısıtları ayrıca geçerlidir.",{routeSlugs:["yamula-baraji-resmi-amator-balikcilik-alani","bahcelik-baraji-resmi-amator-balikcilik-alani","bayramhacili-baraji-amator-balikcilik-alani","sarimsakli-baraji-genel-amator-kiyi","gumusoren-baraji-genel-amator-kiyi"],officialAmateurUse:true,legalEffect:"amateur-use"}),
    e("official-amateur-use","route","Kayseri İl Tarım ve Orman – amatör balıkçılık alan haritaları","https://kayseri.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d6008e47-6393-4d8a-a2c9-78dc26edd1e7&TermSetId=2fcd0a6e-29e6-4155-91b3-67f2140f7189&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=104%2FBalikcilik-Ve-Su-Urunleri-Sube-Mudurlugu","Bahçelik, Bayramhacı ve Yamula için resmî amatör balıkçılık haritalarını listeler; harita sınırları hareket günü esas alınmalıdır.",{routeSlugs:["yamula-baraji-resmi-amator-balikcilik-alani","bahcelik-baraji-resmi-amator-balikcilik-alani","bayramhacili-baraji-amator-balikcilik-alani"],officialAmateurUse:true,legalEffect:"amateur-use"})
  ],
  "Kırıkkale":[
    e("stocking","route","Kırıkkale İl Tarım ve Orman – Kapulukaya Barajına sazan salımı","https://kirikkale.tarimorman.gov.tr/Haber/924/Kapulukaya-Barajina-Yavru-Balik-Salimi","Kapulukaya Barajına sazan bırakıldığını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-kirikkale-kapulukaya-baraj-golu"]}),
    e("public-notice","province","Kırıkkale İl Tarım ve Orman – içsu av yasağı","https://kirikkale.tarimorman.gov.tr/Duyuru/619/Balik-Av-Yasagi-Basliyor","İl bazındaki dönemsel kuralları destekler.")
  ],
  "Kırklareli":[],
  "Kırşehir":[
    e("public-notice","province","Kırşehir İl Tarım ve Orman – içsu av yasakları","https://kirsehir.tarimorman.gov.tr/Haber/647/Su-Urunleri-Av-Yasaklari-Basliyor","Hirfanlı dahil il içsularındaki dönemsel kısıtları destekler."),
    e("stocking","province","Kırşehir İl Tarım ve Orman – balıklandırma çalışmaları","https://kirsehir.tarimorman.gov.tr/Haber/215/Baliklandirma-Calismalarimiz-Devam-Ediyor","İl düzeyinde sazan balıklandırması bağlamıdır.",{species:["Sazan"]})
  ],
  "Kilis":[],
  "Kocaeli":[
    e("stocking","province","Kocaeli İl Tarım ve Orman – 2025 sazan balıklandırması","https://kocaeli.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=600","İldeki su kaynaklarına sazan bırakıldığını ve amatör balıkçılık hedefini bildirir; belirli rota izni değildir.",{species:["Sazan"]}),
    e("stocking","province","Kocaeli İl Tarım ve Orman – 2024 balıklandırma programı","https://kocaeli.tarimorman.gov.tr/Haber/568/2024-Yilinda-Su-Kaynaklarinin-Baliklandirilmasi-Projesi","Çok sayıda gölete sazan bırakılmasını ve sportif kullanım bağlamını destekler.",{species:["Sazan"]})
  ],
  "Konya":[
    e("public-notice","province","Konya İl Tarım ve Orman – 2026 su ürünleri av yasağı","https://konya.tarimorman.gov.tr/Haber/1180/Su-Urunleri-Av-Yasagi-Basliyor","2026 il bazlı dönemsel kuralları doğrular."),
    e("stocking","province","Konya İl Tarım ve Orman – 2025 sazan balıklandırması","https://konya.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1149","Çok sayıda içsuya sazan bırakıldığını bildirir; rota adı eşleşmeden güven yükseltmez.",{species:["Sazan"]}),
    e("organization","province","Konya İl Tarım ve Orman – geleneksel balıkçılık etkinliği","https://konya.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f3406001-c8b2-4b80-9897-25b2576926e6&TermSetId=317d0ab5-aeb7-4b91-96d8-641d30c9b97c&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=951%2FUluslararasi-Geleneksel-Balikcilik-Ve-Su-Urunleri-Yetistiriciligi-Yili-Etkinligimiz-Tamamlandi","Kamu destekli balıkçılık organizasyonu ve il tür bağlamıdır; rota izni değildir.")
  ],
  "Kütahya":[e("stocking","province","Kütahya İl Tarım ve Orman – 2025 sazan ve Avrupa yayın balığı salımı","https://kutahya.tarimorman.gov.tr/Haber/553/Su-Kaynaklarinin-Baliklandirilmasi-Projesi-Kapsaminda-Ilimizdeki-Su-Kaynaklarimiza-Avrupa-Yayin-Baligi-Ve-Pullu-Sazan-Baligi-Birakildi","İl genelindeki pullu sazan ve Avrupa yayın balığı balıklandırmasını destekler; mevcut rota B kanıtlarının yerine geçmez.",{species:["Sazan","Yayın"]})],
  "Malatya":[e("public-notice","province","Malatya İl Tarım ve Orman – 2026 su ürünleri avcılık sezonu","https://malatya.tarimorman.gov.tr/Duyuru/632/Su-Urunleri-Avcilik-Sezonu-Basladi","Güncel il balıkçılık sezonu ve doğal tür bağlamını destekler.")],
  "Manisa":[],
  "Mardin":[e("public-notice","province","Mardin İl Tarım ve Orman – amatör balıkçılık kuralları arşivi","https://mardin.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=279","Tarihsel amatör balıkçılık bilgilendirmesidir; güncel rota izni olarak kullanılmaz.")],
  "Mersin":[e("stocking","province","Mersin İl Tarım ve Orman – 2025 sazan balıklandırması","https://mersin.tarimorman.gov.tr/Haber/2179/%F0%9F%90%9F-Mersinde-362-000-Sazan-Yavrusu-Dogaya-Kazandirildi","İlde çok sayıda suya sazan bırakılmasını ve yeni amatör kullanım alanları hedefini bildirir; rota/sınır eşleşmeden B kanıtı değildir.",{species:["Sazan"]})],
  "Muğla":[
    e("stocking","province","Muğla İl Tarım ve Orman – 2025 sazan balıklandırması","https://mugla.tarimorman.gov.tr/Haber/1240/205-Bin-Sazan-Yavrusu-Su-Kaynaklariyla-Bulusturuldu","Adı verilen bazı su kaynaklarına sazan bırakıldığını bildirir; mevcut rota adlarıyla eşleşmeyen kayıtlar genelleştirilmez.",{species:["Sazan"]}),
    e("organization","province","Muğla İl Tarım ve Orman – balıklandırma etkinliği","https://mugla.tarimorman.gov.tr/Haber/1248/Milas-Bogazicinde-Baliklandirma-Etkinligi-Gerceklestirildi","Kamu destekli balıklandırma etkinliği bağlamıdır."),
    e("public-notice","province","Muğla İl Tarım ve Orman – dalma yöntemiyle amatör avcılık belgesi","https://mugla.tarimorman.gov.tr/Haber/1257/Dalma-Yontemiyle-Amator-Avcilik-Belgesi-Verilmeye-Baslandi","2026 amatör avcılık mevzuatı bağlamıdır; kıyıdan olta rotası izni değildir.")
  ],
  "Muş":[
    e("stocking","route","Muş İl Tarım ve Orman – Alparslan I-II sazan balıklandırması","https://mus.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=619ef230-d936-44be-b2e2-cd941e826431&TermSetId=42c93d46-d2ce-435f-8d81-7cf73984af03&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1146%2FMusta-Su-Kaynaklarina-1-Milyon-Sazan-Yavrusu-Birakildi","Alparslan 1 ve 2 baraj göllerine aynalı/pullu sazan bırakıldığını rota özelinde destekler.",{species:["Sazan"],routeSlugs:["ulusal-mus-alparslan-1-baraj-golu","ulusal-mus-alparslan-2-baraj-golu"]}),
    e("public-notice","province","Muş İl Tarım ve Orman – içsu av yasağı","https://mus.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=337","İldeki dönemsel ve alan bazlı kısıt kontrolünü destekler.")
  ],
  "Nevşehir":[
    e("public-notice","route","Nevşehir İl Tarım ve Orman – Tatlarin Barajı yıl boyu kapalı","https://nevsehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=627","19 Haziran 2026 tarihli güncel duyuru Tatlarin Barajında avlanmanın yıl boyunca yasak olduğunu açıkça bildirir.",{routeSlugs:["ulusal-nevsehir-tatlarin-baraj-golu"],legalEffect:"closed"}),
    e("public-notice","route","Nevşehir İl Tarım ve Orman – Ayhanlar Barajı yıl boyu kapalı","https://nevsehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=627","19 Haziran 2026 tarihli güncel duyuru Ayhanlar Barajında avlanmanın yıl boyunca yasak olduğunu açıkça bildirir.",{routeSlugs:["ulusal-nevsehir-ayhanlar-baraj-golu"],legalEffect:"closed"})
  ],
  "Niğde":[],
  "Ordu":[
    e("stocking","route","Ordu İl Tarım ve Orman – Perşembe Yaylası ve Topçam balıklandırması","https://ordu.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1531","Perşembe Yaylası Göleti ve Topçam Barajına sazan bırakıldığını, sportif/turizm kullanım hedefini rota adıyla destekler; güncel kıyı izni değildir.",{species:["Sazan"],routeSlugs:["ulusal-ordu-persembe-yaylasi-goleti","ulusal-ordu-topcam-baraj-golu-ordu"]}),
    e("public-notice","province","Ordu İl Tarım ve Orman – 2025 sazangiller av yasağı","https://ordu.tarimorman.gov.tr/Haber/1510/Sazangiller-Av-Yasagi-1-Nisanda-Basliyor","İl düzeyindeki dönemsel içsu kurallarını destekler.")
  ],
  "Osmaniye":[
    e("public-notice","province","Osmaniye İl Tarım ve Orman – 2026 su ürünleri av yasağı","https://osmaniye.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=39ce372e-ec9b-4f7e-9649-585e3bfb3a0c&TermSetId=e48fb4fc-ae81-492b-89ba-3557951d8b73&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=359%2FSu-Urunleri-Av-Yasagi-Basladi","Güncel il dönemsel kurallarını destekler."),
    e("organization","province","Osmaniye İl Tarım ve Orman – amatör balıkçılık organizasyonu albümü","https://osmaniye.tarimorman.gov.tr/Sayfalar/AlbumDetay.aspx?OgeId=2452","Kamu destekli amatör balıkçılık organizasyonu bağlamıdır; rota izni değildir.")
  ],
  "Rize":[
    e("public-notice","province","Rize İl Tarım ve Orman – 2026 balıkçılık sezonu","https://rize.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=d395cfc6-0d7e-4562-b5fa-60bed9fd3ace&TermSetId=2106e0a8-2178-4fd7-8bbd-75e4f2e54a9d&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=342","Güncel balıkçılık sezonu ve kıyı kullanımı bağlamıdır."),
    e("public-notice","province","Rize İl Tarım ve Orman – 6/2 değişikliği","https://rize.tarimorman.gov.tr/Duyuru/311/","2025/12 değişikliğinin il düzeyindeki resmî duyurusudur.")
  ],
  "Sakarya":[e("public-notice","province","Sakarya İl Tarım ve Orman – 2026 içsu av yasağı","https://sakarya.tarimorman.gov.tr/Haber/326/Ic-Sularda-Av-Yasagi-Basliyor-_15-Mart-15-Haziran-2026_","2026 içsu dönemsel kısıtlarını doğrular.")],
  "Samsun":[
    e("stocking","route","Samsun İl Tarım ve Orman – Altınkaya ve Derbent balıklandırması","https://samsun.tarimorman.gov.tr/Haber/1595/Ilimizde-2-Milyon-341-Bin-Yavru-Sazan-Baligi-Su-Kaynaklarina-Birakildi","Altınkaya ve Derbent barajlarına sazan bırakıldığını rota adıyla destekler; av izni değildir.",{species:["Sazan"],routeSlugs:["ulusal-samsun-altinkaya-baraj-golu","ulusal-samsun-derbent-baraj-golu"]})
  ],
  "Siirt":[e("public-notice","province","Siirt İl Tarım ve Orman – 2025 su ürünleri av yasağı","https://siirt.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=70c1dd79-098d-49e4-98c4-8587bcea7dab&TermSetId=1b98d16a-f277-4284-9cac-e8ffaf11b3df&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=932%2FSu-Urunlerinde-Av-Yasagi-1-Nisan-Itibariyla-Basliyor","İl bazındaki dönemsel içsu kurallarını destekler.")],
  "Sinop":[e("stocking","province","Sinop İl Tarım ve Orman – 2025 sazan balıklandırması","https://sinop.tarimorman.gov.tr/Haber/841/Sinopta-Baraj-Ve-Goletlere-1-Milyon-468-Bin-Yavru-Balik-Birakildi","Adı verilen çok sayıda suya sazan salındığını bildirir; eşleşen rotalarda bile bu kayıt tek başına amatör av izni değildir.",{species:["Sazan"]})],
  "Sivas":[
    e("public-notice","province","Sivas İl Tarım ve Orman – 6/2 kapsamında tamamen kapalı sular ve 2025 yasağı","https://sivas.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=48296b13-8b1d-4f30-845a-3595517d3533&TermSetId=89292937-f879-4e50-a5f5-df61e80161de&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=802%2FAv-Yasagi-1-Nisanda-Basliyor","Gökpınar ve diğer tamamen kapalı suları listeler. Aktif Sivas ulusal rota adlarıyla doğrudan eşleşen kapalı su bulunmadığından kayıtlar yalnız hukuk kontrolünden geçti."),
    e("stocking","province","Sivas İl Tarım ve Orman – 2025 içsu balıklandırması","https://sivas.tarimorman.gov.tr/Haber/832/Gol-Ve-Goletlerde-Baliklandirma-Calismalarimiz-Devam-Ediyor","İl içsularına sazan bırakıldığını destekler; rota adı eşleşmeden tür kanıtı değildir.",{species:["Sazan"]})
  ],
  "Şanlıurfa":[
    e("public-notice","province","Şanlıurfa İl Tarım ve Orman – 6/2 Tebliğ 2025/12 değişikliği","https://sanliurfa.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=572","Güncel 6/2 değişikliğini resmî olarak yayımlar."),
    e("public-notice","province","Şanlıurfa İl Tarım ve Orman – 6/2 Tebliğ metni","https://sanliurfa.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=518","Amatör avcılık kuralları için resmî il kopyasıdır.")
  ],
  "Şırnak":[e("public-notice","province","Şırnak İl Tarım ve Orman – 6/2 değişikliği","https://sirnak.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=589","Güncel amatör avcılık mevzuatı bağlamıdır.")],
  "Tekirdağ":[],
  "Tokat":[e("public-notice","route","Tokat İl Tarım ve Orman – Akbelen Göleti tamamen kapalı","https://tokat.tarimorman.gov.tr/Duyuru/634/Su-Urunleri-Av-Yasagi-Basliyor","6/2 Tebliğ Ek-4 kapsamında Akbelen Göletinde avlanmanın tamamen yasak olduğunu açıkça bildirir.",{routeSlugs:["ulusal-tokat-akbelen-baraj-golu"],legalEffect:"closed"})],
  "Trabzon":[
    e("organization","province","Trabzon İl Tarım ve Orman – amatör balıkçı eğitimi","https://trabzon.tarimorman.gov.tr/Haber/1092/Amator-Balikcilara-Vakfikebir-Balikci-Barinaginda-Amator-Balikcilik-Kurallari-Hakkinda-Bilgilendirme-Yapildi","Kamu kurumunun amatör balıkçılara yönelik eğitim faaliyeti bağlamıdır; balıkçı barınağı rota olarak yayımlanmaz."),
    e("public-notice","province","Trabzon İl Tarım ve Orman – 2025 su ürünleri denetimleri","https://trabzon.tarimorman.gov.tr/Haber/1032/2025-Yilinda-Trabzonda-Su-Urunleri-Kontrol-Ve-Denetim-Faaliyetleri","İl denetim faaliyeti bağlamıdır.")
  ],
  "Tunceli":[
    e("official-amateur-use","province","Tunceli İl Tarım ve Orman – amatör avcılık yerlerinin belirlenmesi","https://tunceli.tarimorman.gov.tr/Duyuru/304/Amator-Avcilik-Yerlerinin-Belirlenmesi","İl düzeyinde amatör av alanı belirleme çalışmasını gösterir; ek sınırlar eşleşmeden rota B kanıtı sayılmaz."),
    e("public-notice","province","Tunceli İl Tarım ve Orman – içsu av yasağı","https://tunceli.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=325","İl bazındaki dönemsel kuralları destekler.")
  ],
  "Uşak":[e("public-notice","province","Uşak İl Tarım ve Orman – su ürünleri avcılığı ve satış yasakları","https://usak.tarimorman.gov.tr/Duyuru/462/Ilimizde-Su-Urunleri-Avciligi-Ve-Satis-Yasaklari","İl bazındaki avcılık kısıtlarını destekler.")],
  "Van":[e("species-stock","province","Van İl Tarım ve Orman – Erçek Gölü stok izleme","https://van.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=905","İnci kefali stok/izleme bağlamıdır; mevcut farklı Van baraj rotalarına tür kanıtı olarak taşınmaz.",{species:["İnci kefali"]})],
  "Yalova":[
    e("stocking","province","Yalova İl Tarım ve Orman – 2025 sazan balıklandırması","https://yalova.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1042","Adı verilen göletlere sazan bırakıldığını destekler; mevcut rota adlarıyla eşleşmeyen salımlar genelleştirilmez.",{species:["Sazan"]}),
    e("organization","province","Yalova İl Tarım ve Orman – amatör balıkçı bilgilendirme toplantısı","https://yalova.tarimorman.gov.tr/Haber/1028/Amator-Balikcilarimiza-Bilgilendirme-Toplantisi-Duzenlendi","Kamu kurumunun amatör balıkçılara yönelik bilgilendirme faaliyeti bağlamıdır."),
    e("public-notice","province","Yalova İl Tarım ve Orman – 6/2 Tebliğ","https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_","Güncel amatör avcılık mevzuatı için resmî başvuru kaynağıdır.")
  ],
  "Yozgat":[e("stocking","province","Yozgat İl Tarım ve Orman – 2025 içsu balıklandırması","https://yozgat.tarimorman.gov.tr/Haber/725/2025-Yili-Yozgat-Ili-Icsu-Baliklandirma-Faaliyeti","İldeki çok sayıda suya sazan salımını destekler; rota özelinde eşleşmeyen kayıtlar güven artırmaz.",{species:["Sazan"]})],
  "Zonguldak":[
    e("public-notice","province","Zonguldak İl Tarım ve Orman – 2025-2026 balıkçılık sezonu","https://zonguldak.tarimorman.gov.tr/Haber/768/2025-2026-Balikcilik-Av-Sezonu-Acilisi-Yapildi","İl balıkçılık sezonu ve kamu yönetimi bağlamıdır."),
    e("fishery-support","province","Zonguldak İl Tarım ve Orman – küçük ölçekli balıkçılık desteği","https://zonguldak.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=edd75ef0-b97e-4cfd-9f3b-a68682703132&TermSetId=38ea6842-46ad-4a9b-970e-e4914dd965d6&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=422%2FKucuk-Olcekli-Balikciligin-Desteklenmesi-2025-Yili-Takvimi-Belli-Oldu","Kamu destekli balıkçılık faaliyeti bağlamıdır; amatör kıyı avı izni değildir.")
  ]
};

export const retiredRouteEvidence20260815=[
  {slug:"ulusal-nevsehir-ayhanlar-baraj-golu",province:"Nevşehir",reason:"19 Haziran 2026 tarihli Nevşehir İl Tarım ve Orman duyurusunda Ayhanlar Barajında avlanmanın yıl boyunca yasak olduğu açıkça belirtiliyor.",sourceUrl:"https://nevsehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=627"},
  {slug:"ulusal-nevsehir-tatlarin-baraj-golu",province:"Nevşehir",reason:"19 Haziran 2026 tarihli Nevşehir İl Tarım ve Orman duyurusunda Tatlarin Barajında avlanmanın yıl boyunca yasak olduğu açıkça belirtiliyor.",sourceUrl:"https://nevsehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=627"},
  {slug:"ulusal-cankiri-akhasan-baraj-golu",province:"Çankırı",reason:"Çankırı İl Tarım ve Orman Müdürlüğü Akhasan Göletini avlanmanın tamamen yasak olduğu içsular arasında listeliyor.",sourceUrl:"https://cankiri.tarimorman.gov.tr/Haber/1251/Cankirida-Su-Urunleri-Avlanma-Yasagi-Sona-Eriyor"},
  {slug:"ulusal-tokat-akbelen-baraj-golu",province:"Tokat",reason:"Tokat İl Tarım ve Orman Müdürlüğü Akbelen Göletini 6/2 Tebliğ Ek-4 kapsamında avlanmanın tamamen yasak olduğu alan olarak listeliyor.",sourceUrl:"https://tokat.tarimorman.gov.tr/Duyuru/634/Su-Urunleri-Av-Yasagi-Basliyor"}
] as const;
