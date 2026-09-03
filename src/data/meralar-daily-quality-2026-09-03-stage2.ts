import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",note:"2024-2028 amatör avcılık çerçevesi; il/ilçe, tesis, kiralama, koruma ve saha kısıtları ayrıca kontrol edilir."};
const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const promoted20260903Stage2=[
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ulusal-nigde-gumusler-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
] as const;

const evidence:Record<string,ResearchSource[]>={
  "ankara-500km-adiyaman-sirimtas-baraj-golu":[
    {label:"TAGEM Elazığ Su Ürünleri - Sırımtaş stok takviyesi",url:"https://arastirma.tarimorman.gov.tr/elazigsuurunleri/Haber/804/Tagem-Sahada-Sirimtas-Baraj-Golundeyiz%E2%80%A6",note:"Sincik ilçesindeki Sırımtaş Baraj Gölüne yavru siraz bırakıldığını rota özelinde doğrular; geçmiş balıklandırma av garantisi değildir."},
    {label:"Türk Hidrolik Dergisi - Sırımtaş Barajı ve HES",url:"https://dergipark.org.tr/tr/pub/turhidder/article/853887",note:"Sırımtaş Barajı/HES'in Adıyaman-Sincik kimliğini ve aktif enerji tesisi bağlamını akademik aileden doğrular."},
    {label:"GAP İdaresi - enerji projeleri",url:"https://www.gap.gov.tr/sayfa/gap-hakkinda/gap-genel-gerceklesmeler/",note:"Sırımtaş HES'in işletmede olduğunu kurumsal olarak doğrular; tesis güvenlik sınırları nedeniyle mikro kıyı girişi varsayılmaz."},
  ],
  "ankara-500km-adiyaman-karahuyuk-goleti":[
    {label:"Adıyaman İl Tarım - 2024 balıklandırması",url:"https://adiyaman.tarimorman.gov.tr/Haber/773/Gol-Ve-Goletlerimizdeki-Balik-Populasyonunu-Arttiriyoruz",note:"Karahöyük Göletine sazan yavrusu bırakıldığını rota özelinde doğrular; tür olasılığı kanıtıdır, av garantisi değildir."},
    {label:"DSİ 20. Bölge - Adıyaman göletleri",url:"https://bolge20.dsi.gov.tr/Sayfa/Detay/1123",note:"Karahöyük Göletinin 1997'de işletmeye alınmış sulama göleti kimliğini doğrular."},
    {label:"Adıyaman 2024 İl Çevre Durum Raporu",url:"https://webdosya.csb.gov.tr/db/ced/icerikler/adiyaman_-cdr2024-20241105080342.pdf",note:"DSİ 2024 verisiyle Karahöyük Göletinin sulama rezervuarı kimliğini, hacmini ve kullanım amacını bağımsız kurumsal raporda tekrar doğrular."},
  ],
  "ulusal-nigde-gumusler-baraj-golu":[
    {label:"Niğde İl Tarım - 2022 balıklandırma programı",url:"https://nigde.tarimorman.gov.tr/Haber/518/",note:"Gümüşler Barajında pullu sazan balıklandırmasını ve kurallı/sürdürülebilir avcılık bağlamını rota özelinde doğrular."},
    {label:"Niğde İl Kültür ve Turizm - Niğde coğrafyası",url:"https://nigde.ktb.gov.tr/TR-214997/nigde.html",note:"Gümüşler Barajının Gümüşler çevresini sulamak için kurulmuş baraj kimliğini yerel kurumsal kaynaktan doğrular."},
    {label:"Niğde çevre raporu - Gümüşler tür kaydı",url:"https://webdosya.csb.gov.tr/db/ced/editordosya/Nigde2015.pdf",note:"Gümüşler Barajında aynalı sazan bulunduğunu il çevre raporunda kaydeder; tarihsel kayıt güncel av garantisi değildir."},
  ],
  "ulusal-sivas-delice-baraj-golu-sivas":[
    {label:"Sivas İl Tarım - 2015 balıklandırma",url:"https://sivas.tarimorman.gov.tr/Haber/105/Gol-Ve-Goletlerde-Baliklandirma-Calismalari-Devam-Ediyor",note:"İmranlı Delice Göletine 3.000 yavru sazan bırakıldığını rota özelinde doğrular ve balıklandırmanın yöre halkının iç sulardan istifadesi amacı taşıdığını belirtir."},
    {label:"Sivas Ekspres - İmranlı Delice Göleti sulama yatırımı",url:"https://www.sivasekspres.com/haber/sivas-tarimina-42-milyonluk-yatirim-74567.html",note:"2025'te İmranlı Delice Göletinin aktif sulama tesisi olduğunu ve 281 hektarlık şebekenin yenilendiğini yerel destekleyici kaynak olarak doğrular."},
    {label:"Sivas Ekspres - 2025 Delice balıklandırması",url:"https://www.sivasekspres.com/haber/sivasta-yuzlerce-balik-suyla-bulustu-80023.html",note:"2025'te Delice Göleti ve Kızılırmak Barajına yavru sazan bırakıldığını, etkinliğe İmranlı Kaymakamının katıldığını bildirir; yerel destekleyici kanıttır."},
  ],
};

const profile=(note:string)=>({
  model:"evidence-v1" as const,overall:"C" as const,
  identity:{level:"strong" as const,label:"Rota kimliği",note},
  legal:{level:"partial" as const,label:"Güncel mevzuat kontrolü",note:"6/2 genel çerçevesi uygulanır; tesis, kiralama, koruma ve dönem kısıtları ayrıca kontrol edilmelidir."},
  access:{level:"partial" as const,label:"Genel erişim bağlamı",note:"Yerleşim/sulama/rekreasyon bağlamı bilinir; son park, özel parsel, işletme sınırı ve mikro kıyı girişi saha teyitli değildir."},
  species:{level:"strong" as const,label:"Rota özelinde tür olasılığı",note:"Rota özelindeki resmî balıklandırma veya kurumsal tür kaydı tür bulunma olasılığını destekler; av başarısını garanti etmez."},
  field:{level:"unverified" as const,label:"Saha doğrulaması yok",note:"Su kotu, kıyı zemini, bariyer, tabela ve güvenlik durumu hareket günü yerinde kontrol edilmelidir."},
  reviewedAt:"2026-09-03",
});

export const applyDailyQuality20260903Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260903Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`2026-09-03 Stage2 hedefi yok: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`2026-09-03 günlük kotaya yalnız gerçek D→C yazılır: ${slug} (${previous.confidence})`);
    const sources=uniq([...(previous.sources||[]),...(evidence[slug]||[]),teblig]);
    const routeNote=slug.includes("sirimtas")
      ? "Sırımtaş aktif HES olduğundan baraj işletme/güvenlik alanları kıyı rotası sayılmaz; genel su konumu yalnız planlama başlangıcıdır."
      : slug.includes("karahuyuk")
      ? "Karahöyük aktif sulama göletidir; tarla/parsel, servis yolu ve tesis sınırlarının kamusal olduğu varsayılmaz."
      : slug.includes("gumusler")
      ? "Gümüşler aktif sulama barajıdır; su kotu, derivasyon/işletme yapıları ve özel parseller son yaklaşımda ayrıca kontrol edilir."
      : "Delice aktif sulama göletidir; kırsal yaban hayatı, su kotu, yumuşak kıyı ve işletme şebekesi riskleri hareket günü ayrıca kontrol edilir.";
    routeMap.set(slug,{
      ...previous,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      navigationNote:previous.navigationNote||"Harita pini genel su/rota planlama konumudur; kesin araç girişi, park veya olta cebi değildir.",
      sources,
      researchStatus:"2026-09-03 Aşama 2: rota kimliği, tür olasılığı, genel kullanım/erişim bağlamı ve riskler çoklu kaynak aileleriyle yeniden değerlendirildi.",
      researchSummary:`${previous.name} için rota özelinde resmî/kurumsal kanıt, bağımsız akademik/yerel destekleyici kaynak ve güncel amatör avcılık çerçevesi birlikte değerlendirildi. Mikro kıyı girişi ve güncel av uygunluğu kesinleştirilmedi.`,
      verification:`3 Eylül 2026: ${previous.name} D seviyesinden C'ye yalnız rota kimliği ile tür olasılığı güçlüleştiği ve genel kullanım bağlamı desteklendiği için yükseltildi. Geçmiş balıklandırma av garantisi değildir; mikro erişim saha teyitli değildir.`,
      researchedAt:"2026-09-03",
      updatedAt:"2026-09-03",
      confidenceProfile:profile(routeNote),
      cautions:[...new Set([...(previous.cautions||[]),routeNote,"Harita veya geçmiş balıklandırma kaydı tek başına güncel av izni, güvenli kıyı girişi ya da av garantisi değildir."])],
    });
  }
  return routeMap;
};
