import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"6/2 Numaralı Tebliğ ve güncel değişiklikler için resmî başvuru noktasıdır; rota özelindeki koruma, HES, işletme, mülkiyet ve saha kısıtları ayrıca uygulanır."
};

const uniq=(items:ResearchSource[])=>[...new Map(items.filter((s)=>s?.url).map((s)=>[s.url,s])).values()];

export const promoted20260913Stage2=[
  "ulusal-bingol-murat-nehri-bingol-hatti",
  "ulusal-bingol-kigi-baraj-golu",
] as const;

const evidence:Record<string,{district:string;summary:string;verification:string;risk:string;sources:ResearchSource[]}>= {
  "ulusal-bingol-murat-nehri-bingol-hatti":{
    district:"Genç",
    summary:"Murat Nehri'nin Bingöl-Genç hattındaki su kimliği, rota özelindeki akademik balık örneklemeleri ve kamu coğrafya kaydıyla çaprazlandı. Mikro kıyı girişi doğrulanmış sayılmaz.",
    verification:"Bingöl İl Kültür ve Turizm Müdürlüğü Murat Nehri'ni ilin ana akarsularından biri olarak ve il içindeki uzunluğunu yaklaşık 96 km olarak tanımlar. Hakemli çalışmada Bingöl-Genç/Soğukpınar istasyonundan Murat Nehri balıkları doğrudan örneklenmiştir. Üniversite projesi ayrıca Murat Nehri balık ve zooplankton faunasını Bingöl özelinde araştırmıştır. Bu kanıtlar rota kimliği ve tür olasılığını C düzeyinde destekler; harita pini yalnız genel planlama bölgesidir.",
    risk:"Genç hattında akım, derin çukur, kum/çakıl ocağı etkisi, ani kıyı kırılması ve boğulma riski ciddidir. Suya giriş hedeflenmemeli; yalnız gündüz, açık ve kamusal olduğu yerinde görülen kıyı kesimleri değerlendirilmelidir.",
    sources:[
      {label:"Bingöl İl Kültür ve Turizm Müdürlüğü - Bingöl coğrafyası",url:"https://bingol.ktb.gov.tr/TR-181781/bingol.html",note:"Murat Nehri'ni Bingöl'ün en önemli akarsularından biri olarak tanımlar ve il içindeki yaklaşık uzunluğunu verir; mikro kıyı erişimi değildir."},
      {label:"DergiPark - Murat Nehri (Genç-Bingöl) Capoeta capoeta umbla çalışması",url:"https://dergipark.org.tr/en/pub/jist/article/104365",note:"Genç ilçesi Soğukpınar istasyonundan Murat Nehri'nde yakalanan balıkları doğrudan örnekler; türün rota hattındaki varlığı için akademik kanıttır."},
      {label:"Bilecik Şeyh Edebali Üniversitesi AVESİS - Murat Nehri balık ve zooplankton faunası projesi",url:"https://avesis.bilecik.edu.tr/proje/774c747a-3979-4df5-ae7f-3da433308225/murat-nehri-balik-ve-zooplankton-faunasinin-arastirilmasi-bingol",note:"Bingöl'deki Murat Nehri balık ve zooplankton faunasını doğrudan konu alan üniversite projesidir."}
    ]
  },
  "ulusal-bingol-kigi-baraj-golu":{
    district:"Kiğı",
    summary:"Kiğı Baraj Gölü'nün Kiğı/Peri Suyu üzerindeki resmî-kurumsal kimliği, akademik göl çalışması ve Perisuyu balık literatürüyle çaprazlandı; aktif HES nedeniyle yalnız genel bölge düzeyinde yayımlanır.",
    verification:"Bingöl İl Kültür ve Turizm Müdürlüğü Kiğı ilçesi sayfasında Kiğı Barajı'nı rota özelinde gösterir. Akademik çalışma Kiğı Baraj Gölü'nü doğrudan örnekleme alanı olarak doğrular. Perisuyu Çayı üzerindeki HES ve balık türleri çalışması Kiğı Barajı'nı zincir barajlar arasında sayarak balık topluluğu/habitat bağlamını destekler. C seviyesi yalnız masa başı doğrulamadır; HES gövdesi, enerji tesisi, servis yolları ve kapalı alanlar rota değildir.",
    risk:"Kiğı Barajı aktif HES sistemidir. Baraj gövdesi, enerji tesisi, derivasyon/servis yolları ve güvenlik alanlarına girilmez. Dik vadi, taş düşmesi, su kotu değişimi ve zayıf telefon kapsaması hareket günü ayrıca kontrol edilmelidir.",
    sources:[
      {label:"Bingöl İl Kültür ve Turizm Müdürlüğü - Kiğı İlçesi",url:"https://bingol.ktb.gov.tr/TR-286272/kigi-ilcesi.html",note:"Kiğı Barajı'nı ilçe içinde rota özelinde resmî görsel/coğrafi bağlamla doğrular; belirli kıyı cebine giriş izni değildir."},
      {label:"DergiPark - Kiğı Baraj Gölü zooplankton faunası",url:"https://dergipark.org.tr/tr/pub/egirdir/article/329124",note:"Kiğı Baraj Gölü'nü 2012-2013 döneminde doğrudan örnekleyen akademik çalışma; göl kimliği ve sucul ekosistem kanıtıdır."},
      {label:"DergiPark - Perisuyu Çayı HES'leri ve etkilenmesi muhtemel balık türleri",url:"https://dergipark.org.tr/tr/pub/dustad/article/1225091",note:"Kiğı Barajı'nı Perisuyu üzerindeki zincir barajlar arasında sayar ve barajların etkileyebileceği balık türlerini akademik olarak değerlendirir; av garantisi değildir."}
    ]
  }
};

const profile=(slug:string):EnrichedMera["confidenceProfile"]=>({
  model:"evidence-v1",
  overall:"C",
  identity:{level:"strong",label:"Rota özelinde kimlik kanıtı",note:"Ad, il/ilçe ve su gövdesi rota özelindeki kamu/akademik kaynaklarla eşleşir."},
  legal:{level:"partial",label:"Güncel mevzuat + saha kısıtları",note:"6/2 Tebliğ genel çerçevesi uygulanır; HES, işletme, koruma, mülkiyet ve yerel saha kuralları ayrıca kontrol edilir."},
  access:{level:"partial",label:"Genel erişim bağlamı",note:"Genel yerleşim/su koridoru planlama için doğrulanmıştır; son park, yol ve mikro kıyı girişinin kamusal olduğu varsayılmaz."},
  species:{level:"partial",label:"Rota özelinde tür/habitat olasılığı",note:"Akademik rota/havza çalışmaları balık bulunma olasılığını destekler; güncel av başarısı veya yasal av boyu garantisi değildir."},
  field:{level:"unverified",label:"Saha doğrulaması yok",note:"Bariyer, tabela, su kotu, özel mülkiyet ve güncel riskler hareket günü yerinde kontrol edilmelidir."},
  reviewedAt:"2026-09-13",
});

export const applyDailyQuality20260913Stage2=(routeMap:Map<string,EnrichedMera>)=>{
  for(const slug of promoted20260913Stage2){
    const previous=routeMap.get(slug);
    if(!previous)throw new Error(`13 Eylül Stage 2 hedefi bulunamadı: ${slug}`);
    if(previous.confidence!=="D")throw new Error(`13 Eylül Stage 2 yalnız gerçek D→C yükseliş sayar: ${slug} (${previous.confidence})`);
    const note=evidence[slug];
    if(!note)throw new Error(`13 Eylül Stage 2 kanıt paketi eksik: ${slug}`);
    routeMap.set(slug,{
      ...previous,
      district:note.district,
      confidence:"C",
      locationPrecision:"Genel bölge",
      navigationVerified:false,
      updatedAt:"2026-09-13",
      summary:note.summary,
      verification:note.verification,
      navigationNote:"Gösterilen konum yalnız genel planlama bölgesidir. Son araç/yaya yaklaşımı, kamusal geçiş, bariyer, özel mülkiyet, işletme/güvenlik sınırı ve saha tabelaları hareket günü doğrulanmalıdır.",
      transport:"İlçe/yerleşim merkezinden genel su koridoruna kamusal yol ağı üzerinden yaklaşım planlanabilir; son park veya kıyı yolu uzaktan kesinleştirilmiş sayılmaz.",
      cautions:[...new Set([...(previous.cautions||[]),note.risk,"Tür olasılığı av garantisi değildir; 6/2 Tebliğ, il bazlı kararlar ve daha sıkı saha kuralları üstündür."])],
      sources:uniq([...(previous.sources||[]),...note.sources,teblig]),
      confidenceProfile:profile(slug),
      researchStatus:"completed",
      researchSummary:note.summary,
    });
  }
  return routeMap;
};
