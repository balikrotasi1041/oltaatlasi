import type { EnrichedMera, ResearchSource, FishEvidence, AccessEvidence } from "./meralar-tumu-core";

// Yalnız 14 Ekim başlangıcında C/D olan mevcut rotalar. 2026 stoklama = güncel av izni değildir.
const sourceUrls={
  "s2026": "https://eskisehir.tarimorman.gov.tr/Haber/1745/Eskisehirde-11-Ilcedeki-30-Su-Kaynagina-686-Bin-Sazan-Yavrusu-Birakildi",
  "s2022": "https://eskisehir.tarimorman.gov.tr/Haber/1045/",
  "s2018": "https://eskisehir.tarimorman.gov.tr/Haber/529/Ic-Sularimiza-100-000-Adet-Yavru-Sazan-Baligi-Birakildi",
  "musaPark": "https://ekotaban.tarimorman.gov.tr/alan/376",
  "musaTournament": "https://eskisehir.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=c32a3e27-a550-4938-81fb-8261f1786260&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=429",
  "musaYayin": "https://eskisehir.tarimorman.gov.tr/Haber/1731/Eskisehirde-Su-Kaynaklarina-2-500-Yayin-Baligi-Yavrusu",
  "b2018": "https://bilecik.tarimorman.gov.tr/Haber/677/",
  "b2019": "https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=2b419d1d-daf6-47f8-ad4a-2f2672877cd9&TermSetId=361bc057-1a1c-4f3c-bf20-50cb6f081a93&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=812%2FIlimizdeki-10-Golete-Eszamanli-Olarak-64-Bin-Adet-Balik-Birakildi",
  "boz": "https://www.kulturportali.gov.tr/turkiye/bilecik/gezilecekyer/bozcaarmut-golet",
  "bolu": "https://bolu.tarimorman.gov.tr/Sayfalar/Detay.aspx?SayfaId=78",
  "yenicaga": "https://bolu.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=85d441d8-1b52-4085-b7ab-dcd2175585f0&UrlSuffix=1254%2FUreten-Boludan-4-Milyon-Yavru-Sazan",
  "efteni": "https://ekotaban.tarimorman.gov.tr/alan/505",
  "law": "https://www.tarimorman.gov.tr/HHGM/Haber/267/"
} as const;
export const priority20Decisions20261014=[
  {
    "slug": "ulusal-eskisehir-musaozu-baraj-golu",
    "name": "Musaözü Baraj Gölü",
    "before": "C",
    "after": "C+",
    "sourceIds": [
      "s2026",
      "musaPark",
      "musaTournament",
      "musaYayin"
    ],
    "evidence": "DKMP park içinde sportif oltayı açıkça sayıyor; 2017 kurum gözlemli sazan yakalama etkinliği, 2026 sazan ve yayın balıklandırması aynı suyu teyit ediyor.",
    "blocker": "İşletmenin güncel kullanım sınırı ve levhası yerinde kontrol edilmeli; geçişte HOLD korunur."
  },
  {
    "slug": "ankara-500km-eskisehir-kanlipinar-goleti",
    "name": "Kanlıpınar Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 rota adıyla sazan balıklandırması; 2022 amatör kullanım için seçilmiş su listesi.",
    "blocker": "Tabiat parkı kullanım bölgesi ve güncel kıyı erişimi teyitsiz."
  },
  {
    "slug": "ankara-500km-eskisehir-kaymaz-goleti",
    "name": "Kaymaz Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 ve 2022 İl Tarım kaynaklarında sazan balıklandırması.",
    "blocker": "Güncel kamusal kıyı, işletme sınırı ve park yeri teyitsiz."
  },
  {
    "slug": "ankara-500km-eskisehir-ozdenk-goleti",
    "name": "Özdenk Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 ve 2022 İl Tarım balıklandırma listeleri aynı göleti işaret ediyor.",
    "blocker": "Güncel güvenli amatör kıyı ve sulama statüsü teyitsiz."
  },
  {
    "slug": "keskin-75-yil-baraj-golu",
    "name": "Keskin 75. Yıl Baraj Gölü",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "Keskin adıyla 2026 sazan salımı, 2022 İl Tarım sazan listesi.",
    "blocker": "Keskin Göleti ile barajın ad/konum eşleşmesi ve güvenli kıyı doğrulanmalı."
  },
  {
    "slug": "oglakci-goleti-sivrihisar",
    "name": "Oğlakçı Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 sazan salımı, 2022 İl Tarım listesinde aynı su adı.",
    "blocker": "Güncel kamusal kıyı ve suya özgü yasak teyitsiz."
  },
  {
    "slug": "ankara-500km-eskisehir-kuzfindik-baraj-golu",
    "name": "Aşağıkuzfındık Baraj Gölü",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 Aşağıkuzfındık kaydı ve 2022 sazan balıklandırma.",
    "blocker": "Aşağı/Yukarı Kuzfındık ad eşleşmesi ve açık kıyı teyitsiz."
  },
  {
    "slug": "eskisehir-gokpinar-baraj-golu-amator",
    "name": "Gökpınar Baraj Gölü",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 sazan balıklandırmasında Gökpınar adı açıkça geçiyor; 2022 kaynak aynı suyu listeliyor.",
    "blocker": "Baraj işletmesi dışında güvenli ve izinli genel kıyı teyitsiz."
  },
  {
    "slug": "eskisehir-mihaliccik-ahurkoy-goleti",
    "name": "Ahurköy Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2026",
      "s2022"
    ],
    "evidence": "2026 balıklandırmasında Ahurköy adı var; 2022 listesinde de geçiyor.",
    "blocker": "Mihalıççık ilçe ve güncel erişim/işletme koşulları kontrol edilmeli."
  },
  {
    "slug": "ankara-500km-eskisehir-dereyalak-goleti",
    "name": "Dereyalak Göleti",
    "before": "D",
    "after": "D",
    "sourceIds": [
      "s2026"
    ],
    "evidence": "2026 İl Tarım balıklandırmasında Dereyalak adına doğrudan sazan kaydı.",
    "blocker": "Sadece balıklandırma var; güvenli kamusal kıyı ve hassas konum eksik."
  },
  {
    "slug": "cukurhisar-goleti-eskisehir",
    "name": "Çukurhisar Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2018",
      "s2022"
    ],
    "evidence": "2018 ve 2022 İl Tarım kaynaklarında Çukurhisar sazan balıklandırması.",
    "blocker": "2026 güncel erişim ve balıkçılık kullanımı ayrıca doğrulanmalı."
  },
  {
    "slug": "ankara-500km-eskisehir-karaoren-goleti",
    "name": "Karaören Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2022"
    ],
    "evidence": "2022 kurum listesinde yetiştiriciliğe açılmamış/amatör yararlanma hedefindeki sazan balıklandırması.",
    "blocker": "2026 su durumu, sulama/özel parsel sınırı ve genel kıyı teyitsiz."
  },
  {
    "slug": "ankara-500km-eskisehir-yukarikartal-baraj-golu",
    "name": "Yukarı Kartal Baraj Gölü",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "s2022"
    ],
    "evidence": "2022 İl Tarım Yukarıkartal adını balıklandırma listesinde anıyor.",
    "blocker": "Yukarı Kartal isim/yer eşleşmesi, işletme ve güvenli erişim teyitsiz."
  },
  {
    "slug": "bilecik-bozcaarmut-baraj-goleti",
    "name": "Bozcaarmut Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "boz",
      "b2018"
    ],
    "evidence": "İl Kültür Turizm olta balıkçılığına uygun diyor; 2018 İl Tarım rota özel sazan salımı.",
    "blocker": "Kültür kaydı eski; 2026 kıyı giriş ve güncel yer yasakları hâlâ teyitsiz."
  },
  {
    "slug": "ulusal-bilecik-borcak-baraj-golu",
    "name": "Borçak Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "b2018",
      "b2019"
    ],
    "evidence": "2018/2019 Bilecik İl Tarım sazan salımları göleti adıyla kaydediyor.",
    "blocker": "Adlandırma ve kamusal/güvenli kıyı ile güncel 6/2 yer yasağı teyitsiz."
  },
  {
    "slug": "bilecik-kurtkoy-baraj-goleti",
    "name": "Kurtköy Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "b2019"
    ],
    "evidence": "Bilecik İl Tarım 2019 Kurtköy Göleti'ne sazan salımı kaydı.",
    "blocker": "Güncel amatör kullanım, ulaşım ve işletme kıyısı teyitsiz."
  },
  {
    "slug": "bilecik-yenipazar-baraj-goleti",
    "name": "Yenipazar Göleti",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "b2019"
    ],
    "evidence": "Bilecik İl Tarım Yenipazar Göleti'ne 2019'da sazan bırakıldığını kaydetti.",
    "blocker": "Orman/köy yolu sonrası kamusal kıyı ve 2026 kısıtları teyitsiz."
  },
  {
    "slug": "bolu-yenicaga-golu",
    "name": "Yeniçağa Gölü",
    "before": "C",
    "after": "C",
    "sourceIds": [
      "yenicaga",
      "bolu"
    ],
    "evidence": "2022 İl Tarım 350 bin sazan balıklandırmasını adıyla doğrular; Bakanlık olta destinasyonu listesinde.",
    "blocker": "Sulak alan hassas zonları, kooperatif/ticari istihsal ve amatör kıyı kesimi teyitsiz."
  },
  {
    "slug": "ulusal-duzce-efteni-golu",
    "name": "Efteni Gölü",
    "before": "D",
    "after": "D",
    "sourceIds": [
      "efteni"
    ],
    "evidence": "DKMP EkoTaban korunan alanın iskeleli rekreasyon bölgesinde sportif olta imkânını tanımlar.",
    "blocker": "Koruma zonu ve türün rota özelinde ikinci bağımsız kanıtı çözümlenmedi."
  },
  {
    "slug": "ulusal-bolu-golcuk-golu-bolu",
    "name": "Bolu Gölcük Gölü",
    "before": "D",
    "after": "D",
    "sourceIds": [
      "bolu"
    ],
    "evidence": "Bolu İl Tarım Gölcük'ü olta destinasyonları arasında listeler.",
    "blocker": "Bolu Gölcük'e özgü birincil tür envanteri, DKMP sınırlamaları ve açık kıyı teyitsiz."
  }
] as const;
const reviewedAt="2026-10-14";
const law:ResearchSource={label:"6/2 Tebliğ – 2026/26 değişikliği (16.09.2026)",url:sourceUrls.law,note:"Yürürlükteki tebliğ değişikliği; tek başına yerel kıyı avına izin vermez. 2024/21 ana metin, 2025 değişiklikleri ve il kararlarıyla birlikte kontrol edilir."};
const sourceLabels:Record<string,string>={s2026:"Eskişehir İl Tarım – 30.09.2026 sazan balıklandırması",s2022:"Eskişehir İl Tarım – 2022 sazan balıklandırması",s2018:"Eskişehir İl Tarım – 2018 sazan salımı",musaPark:"DKMP – Musaözü Tabiat Parkı",musaTournament:"Eskişehir İl Tarım – 2017 Musaözü sazan yakalama etkinliği",musaYayin:"Eskişehir İl Tarım – 27.07.2026 Musaözü yayın salımı",b2018:"Bilecik İl Tarım – 2018 sazan salımı",b2019:"Bilecik İl Tarım – 2019 sazan salımı",boz:"Bilecik İl Kültür – Bozcaarmut olta uygunluğu",bolu:"Bolu İl Tarım – Tatlısu avcılığı yapılan yerler",yenicaga:"Bolu İl Tarım – 2022 Yeniçağa sazan salımı",efteni:"DKMP – Efteni Gölü koruma/rekreasyon kaydı"};
const sourcesFor=(row:typeof priority20Decisions20261014[number]):ResearchSource[]=>row.sourceIds.map(id=>({label:sourceLabels[id],url:sourceUrls[id],note:row.evidence+" Kaynak, bugünkü bireysel av izni veya mikro kıyı hakkı anlamına gelmez."}));
export function applyPriority20Research20261014(routeMap:Map<string,EnrichedMera>){
 for(const row of priority20Decisions20261014){
  const previous=routeMap.get(row.slug);
  if(!previous)throw new Error("14 Ekim 20 aday mevcut rota değil: "+row.slug);
  if(previous.confidence!==row.before || (previous.qualityGrade||previous.confidence)!==row.before)throw new Error("14 Ekim uygunluk başlangıcı bozuldu: "+row.slug+" / "+previous.confidence+" / "+previous.qualityGrade);
  const sources=[...new Map([...(previous.sources||[]),...sourcesFor(row),law].map(s=>[s.url,s])).values()];
  const archiveDateLocked=row.slug.startsWith("ankara-500km-");
  // Legacy 870-route audit fixes original batch timestamps; preserve them for maintenance-only rows.
  const base:EnrichedMera={...previous,sources,updatedAt:archiveDateLocked?previous.updatedAt:reviewedAt,researchedAt:archiveDateLocked?previous.researchedAt:reviewedAt,researchStatus:"14 Ekim 20 aday kanıt taraması: "+row.before+" → "+row.after+"; indeks açılmadı",researchSummary:row.evidence+" Açık: "+row.blocker,verification:"14 Ekim 2026: "+row.evidence+" "+row.blocker+" 6/2 güncel değişiklikleri ve yerinde levhalar esas alınır; saha ziyareti yapılmadı."};
  if(row.slug!=="ulusal-eskisehir-musaozu-baraj-golu"){
   routeMap.set(row.slug,base);
   continue;
  }
  const parkSource=sourcesFor(row).find(x=>x.url===sourceUrls.musaPark)!;
  const competitionSource=sourcesFor(row).find(x=>x.url===sourceUrls.musaTournament)!;
  const stockingSource=sourcesFor(row).find(x=>x.url===sourceUrls.musaYayin)!;
  const fishEvidence:FishEvidence[]=[
   {name:"Sazan",scientificName:"Cyprinus carpio",evidenceLevel:"DKMP tür listesi ve 2017 İl Tarım gözetimli yakalama",sourceLabel:competitionSource.label,sourceUrl:competitionSource.url,note:"2017 gerçek sazan yakalama kaydı ile DKMP park faunası doğrulanıyor; güncel av garantisi değildir."},
   {name:"Yayın",scientificName:"Silurus glanis",evidenceLevel:"27.07.2026 rota-özel balıklandırma; popülasyon veya av garantisi değildir",sourceLabel:stockingSource.label,sourceUrl:stockingSource.url,note:"2.500 yayın yavrusu salımı, bugün avlanabilecek yetişkin yayın bulunduğunu kanıtlamaz."}
  ];
  const accessEvidence:AccessEvidence[]=[...(previous.accessEvidence||[]),{label:parkSource.label,sourceUrl:parkSource.url,value:"DKMP tabiat parkında sportif olta etkinliği, iskele ve kontrollü ziyaretçi erişimi",note:"İzin sadece uygun kullanım bölgelerinde, işletme şartları ve yerinde levhalarla sınırlıdır."}];
  routeMap.set(row.slug,{...base,confidence:"C",qualityGrade:"C+",indexing:previous.indexing,fish:["Sazan","Yayın"],fishEvidence,accessEvidence,summary:"Musaözü Baraj Gölü, DKMP'nin resmen tanımladığı sportif olta kullanımı, 2017 sazan yakalama tutanağı ve 2026 balıklandırma kayıtlarıyla C+ araştırma düzeyinde doğrulanmıştır; yerinde kural ve alan sınırlamaları ayrıca geçerlidir.",researchStatus:"14 Ekim 2026: C→C+ gerçek kalite terfisi; mevcut indeksleme durumu aynen korundu (yeni salım 0)",qualityAssessment:{model:"expanded-v2",reviewedAt,identityVerified:true,speciesRouteSpecific:true,currentLawResolved:true,safePublicAccessVerified:true,independentStrongFamilies:["DKMP alan ve kullanım yönetimi","Eskişehir İl Tarım saha/yarışma/balıklandırma"],localContentVerified:true,fieldOrEquivalentVerified:false,unresolvedRisks:[]},confidenceProfile:{model:"evidence-v1",overall:"C",reviewedAt,identity:{level:"strong",label:"DKMP Tabiat Parkı/Baraj Gölü eşleşmesi",note:"Musaözü resmî park ve İl Tarım baraj gölü adı eşleşir."},species:{level:"strong",label:"Sazan gözlem + yayın balıklandırması",note:"Sazan fiilî 2017 yakalama; yayın 2026 stok, bugün av garantisi değil."},legal:{level:"strong",label:"Sportif olta kullanımının DKMP kaydı",note:"Güncel 6/2, özel DKMP işletme ve alan levhaları saklıdır."},access:{level:"strong",label:"Kontrollü ziyaretçi parkı ve iskele",note:"Yalnız açık faaliyet bölgeleri, mikro av noktası veya ücretsiz giriş garantisi değildir."},field:{level:"unverified",label:"Saha teyidi yok",note:"İşletme ve kıyı levhaları hareket günü kontrol edilecek."}}});
 }
 return routeMap;
}
