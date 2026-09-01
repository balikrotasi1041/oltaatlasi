import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",note:"1 Eylül 2024-31 Ağustos 2028 dönemindeki genel amatör avcılık hükümleri; yerel ve suya özel kısıtlar ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const promoted20260901Stage2=[
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-artvin-borcka-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-van-zernek-baraj-golu",
  "ankara-500km-adiyaman-ataturk-baraj-golu",
] as const;

const evidenceBySlug:Record<string,ResearchSource[]>={
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu":[
    {label:"Devrekâni Kaymakamlığı - Çiğdem Göleti",url:"https://www.devrekani.gov.tr/igdem-goleti",note:"Göletin DSİ tarafından Örenbaşı/Çatak Deresi çevresinde kurulduğunu; in balığı ve tatlısu kefali tespit edildiğini, sonradan pullu ve aynalı sazan ekimi yapıldığını rota özelinde bildirir."},
    {label:"Kastamonu İl Tarım - Çiğdem Göleti balıklandırması",url:"https://kastamonu.tarimorman.gov.tr/Haber/1053/Ilimizde-Goletler-Baliklandirildi",note:"Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını doğrular."},
  ],
  "ulusal-erzincan-karasu-nehri-erzincan-hatti":[
    {label:"Atatürk Üniversitesi - Karasu Nehri (Erzincan) balık ve fitoplankton kompozisyonu",url:"https://avesis.atauni.edu.tr/yayin/06d8728a-148f-4465-9fd3-b39885d4a202/karasu-nehri-erzincan-balik-ve-fitoplankton-kompozisyonunun-belirlenmesi",note:"Erzincan Karasu Nehri'ni doğrudan konu alan üniversite çalışması; rota özelinde balık kompozisyonu araştırmasını doğrular."},
    {label:"EBYÜ Yukarı Fırat Havzası hedefleri",url:"https://ebyu.edu.tr/hedefler/",note:"Karasu Nehri su kalitesi ve balık türleri biyoekolojik çalışmalarını üniversite araştırma hedefi olarak kaydeder; havza bağlamını destekler."},
  ],
  "ulusal-ardahan-kura-nehri-ardahan-hatti":[
    {label:"Ardahan Üniversitesi - Ardahan İli İhtiyofaunası",url:"https://www.ardahan.edu.tr/dosyalar/v_ders_icerigi/ardahan_calistayi/assets/ad/Ardahan%20Co%C4%9Frafya%20ve%20Turizmi/Cilt%203%20-%20B%C3%B6l%C3%BCm%2018-%20Ardahan%20%C4%B0li%20%C4%B0htiyofaunas%C4%B1.pdf",note:"Kura Nehri ana kolu ve bağlı istasyonlarda balık türlerini doğrudan örnekleyen üniversite çalışmasıdır."},
    {label:"Tarım ve Orman Bakanlığı - Türkiye Su Atlası",url:"https://www.tarimorman.gov.tr/SYGM/Belgeler/T%C3%BCrkiye%20Su%20Atlas%C4%B1/Turkiye-Su-Atlasi.pdf",note:"Kura-Aras havzası ve yüzey suyu kimliği için resmî havza bağlamı sağlar; mikro kıyı erişimi değildir."},
  ],
  "ulusal-artvin-borcka-baraj-golu":[
    {label:"Borçka Baraj Gölü Squalius orientalis üreme çalışması",url:"https://doi.org/10.12714/egejfas.2018.35.2.10",note:"Borçka Baraj Gölü'nü doğrudan örnekleme sahası olarak ele alan hakemli tür çalışmasıdır."},
    {label:"RTEÜ AVESİS - Borçka Baraj Gölü kültür balıkçılığı çevresel etkileşimi",url:"https://avesis.erdogan.edu.tr/yonetilen-tez/82df76f2-a8bc-4906-9f3e-5eece8f65f05/artvin-bolgesi-kultur-balikciligi-cevresel-etkilesimi-uzerine-bir-calisma-borcka-baraj-golu-ornegi",note:"2023-2024 arasında yedi örnekleme noktalı üniversite tez çalışması; göl kimliği, saha kullanımı ve sucul üretim baskısını doğrular."},
  ],
  "ulusal-aksaray-ciftevi-baraj-golu":[
    {label:"Aksaray İl Tarım - Çiftevi Göleti balıklandırması",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."},
    {label:"Tarım ve Orman - amatör avcılık mevzuatı",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"Güncel amatör avcılık mevzuatı ve uygulama çerçevesi için resmî başvuru kaynağıdır."},
  ],
  "ulusal-bolu-caykoy-baraj-golu-bolu":[
    {label:"Bolu Valiliği - Çayköy Göleti",url:"https://www.bolu.gov.tr/aykoy-goleti",note:"Göynük ilçesinin yaklaşık 20 km güneyindeki Çayköy Göleti'nde sportif olta balıkçılığı ve piknik yapılabildiğini doğrudan bildirir."},
    {label:"Bolu Valiliği - Spor Turizmi",url:"https://www.bolu.gov.tr/spor-turizmi",note:"Çayköy Göleti'ni Bolu'da sportif balıkçılık yapılan su varlıkları arasında sayar; mikro kıyı ve güncel tabela kontrolü yine gerekir."},
  ],
  "ulusal-van-zernek-baraj-golu":[
    {label:"Van İl Tarım - Zernek Barajında stok tespit çalışmaları",url:"https://van.tarimorman.gov.tr/Haber/667/Zernek-Barajinda-Stok-Tespit-Calismalari",note:"Zernek Barajı'nda balık stoku için boy/ağırlık ölçümlü resmî saha çalışması yapıldığını doğrular; stok kiralama bağlamı nedeniyle güncel kullanım hakkı ayrıca kontrol edilir."},
    {label:"Van İl Kültür ve Turizm - Gürpınar",url:"https://van.ktb.gov.tr/TR-437248/gurpinar.html",note:"Zernek Barajı'nın Gürpınar/Zernek Boğazı kimliğini ve genel coğrafi bağlamını resmî olarak doğrular."},
  ],
  "ankara-500km-adiyaman-ataturk-baraj-golu":[
    {label:"Adıyaman İl Tarım - Atatürk Barajı Gölüne 7 milyon yavru",url:"https://adiyaman.tarimorman.gov.tr/Haber/780/Ataturk-Baraji-Golune-7-Milyon-Balik-Yavrusu-Birakildi",note:"2024'te 2,55 milyon şabut ve daha önce 4,5 milyon sazan yavrusunun Atatürk Barajı Gölü'ne bırakıldığını rota özelinde doğrular."},
    {label:"Şanlıurfa İl Tarım - Atatürk Barajı 5. Avlak stok ilanı",url:"https://sanliurfa.tarimorman.gov.tr/Duyuru/512/Sanliurfa-Ili-Hilvan-Ilcesi-Ataturk-Baraj-Golu-5-Avlak-Sahasinin-Kiralanmasi-Ihale-Ilani",note:"Atatürk Barajı avlak sahasında Mezopotamya yayını, inci kefali, sazan, şabut, bizir ve siraz için resmî stok miktarları yayımlar; belirli Adıyaman kıyısının kiralama statüsünü tek başına belirlemez."},
  ],
};

export const applyDailyQuality20260901Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260901Stage2){
    const r=routeMap.get(slug);
    if(!r)throw new Error(`2026-09-01 Stage2 hedefi yok: ${slug}`);
    if(r.confidence!=="D")throw new Error(`2026-09-01 Stage2 gerçek D→C koşulu sağlanmıyor: ${slug} (${r.confidence})`);
    const extra=evidenceBySlug[slug]||[];
    routeMap.set(slug,{
      ...r,
      sources:uniq([...(r.sources||[]),...extra,teblig]),
      confidence:"C",
      locationPrecision:r.locationPrecision||"Genel bölge",
      navigationVerified:false,
      navigationNote:r.navigationNote||"Yayımlanan konum genel planlama içindir; son kıyı girişi, park, özel mülkiyet, işletme/güvenlik sınırı ve saha tabelası yerinde kontrol edilmelidir.",
      verification:`1 Eylül 2026 masa başı kalite yükseltmesi: rota kimliği ve tür olasılığı en az iki bağımsız kaynak ailesiyle yeniden değerlendirildi. ${extra.map((s)=>s.label).join("; ")}. Mikro kıyı erişimi ve güncel saha durumu doğrulanmış sayılmaz; geçmiş balıklandırma veya stok kaydı av garantisi değildir.`,
      researchedAt:"2026-09-01",
      updatedAt:"2026-09-01",
      confidenceProfile:{
        model:"evidence-v1",
        overall:"C",
        identity:{level:"strong",label:"Rota kimliği kaynaklı",note:"Su varlığı ve genel konum resmî/kurumsal veya rota-özel akademik kanıtla desteklenir; mikro kıyı kesinleştirilmez."},
        legal:{level:"partial",label:"Güncel mevzuat kontrolü",note:"6/2 Tebliğ çerçevesi kontrol edilmiştir; kiralama, işletme, koruma veya yerel kararlar belirli kıyıda ayrıca geçerli olabilir."},
        access:{level:"partial",label:"Genel kamusal erişim bağlamı",note:"Genel yaklaşım ve rota kimliği kaynaklıdır; park, son patika, özel mülkiyet ve bariyer saha teyitli değildir."},
        species:{level:"strong",label:"Rota özelinde güçlü tür olasılığı",note:"Rota özelindeki resmî balıklandırma/stok kaydı, doğrudan akademik örnekleme veya resmî sportif balıkçılık kaydı tür varlığı/olasılığını destekler; av başarısı garantisi değildir."},
        field:{level:"unverified",label:"Saha doğrulaması yok",note:"Su kotu, kıyı zemini, tabela, güvenlik/işletme sınırı ve geçici kapatma hareket günü kontrol edilmelidir."},
        reviewedAt:"2026-09-01",
      },
      cautions:[...new Set([...(r.cautions||[]),"Genel konum veya su varlığı kaydı güvenli mikro kıyı girişi anlamına gelmez; park, yol, özel mülkiyet, işletme/güvenlik sınırı ve güncel saha tabelaları hareket günü kontrol edilmelidir."])],
    });
  }
  return routeMap;
};
