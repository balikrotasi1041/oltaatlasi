export type RegulationSourceKind = "national-teblig" | "amendment" | "province-notice" | "commission-decision" | "waterbody-decision";
export type RegulationSource = {
  label:string;
  url:string;
  kind:RegulationSourceKind;
  publishedAt?:string;
  note:string;
};
export type ClosedPeriod = {
  start:string; // MM-DD
  end:string;   // MM-DD
  label:string;
  source:RegulationSource;
  note?:string;
};
export type SpeciesRegulationBase = {
  species:string;
  scientificName?:string;
  waterContext:"İç su"|"Deniz"|"Her ikisi";
  minLengthCm:number|null;
  retentionLimit:string|null;
  nationalClosedPeriods?:ClosedPeriod[];
  source:RegulationSource;
  checkedAt:string;
  validThrough:string;
  note?:string;
};
export type RouteRegulationContext={province?:string;waterType?:string;routeSlug?:string};
export type ResolvedSpeciesRegulation={
  species:string;
  minLengthCm:number|null;
  retentionLimit:string|null;
  closedPeriods:ClosedPeriod[];
  statusMode:"computed"|"verify"|"unknown"|"prohibited";
  statusNote:string;
  sources:RegulationSource[];
  checkedAt:string|null;
  validThrough:string|null;
};

export const nationalAmateurSource:RegulationSource={
  label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığının Düzenlenmesi Hakkında Tebliğ (2024/21)",
  url:"https://www.resmigazete.gov.tr/eskiler/2024/08/20240811-4.htm",
  kind:"national-teblig",
  publishedAt:"2024-08-11",
  note:"1 Eylül 2024 - 31 Ağustos 2028 dönemindeki amatör avcılık için ulusal ana düzenleme.",
};
export const nationalAmateurAmendment2025:RegulationSource={
  label:"6/2 Tebliğ Değişikliği (2025/12)",
  url:"https://www.resmigazete.gov.tr/eskiler/2025/04/20250416-4.htm",
  kind:"amendment",
  publishedAt:"2025-04-16",
  note:"6/2 Tebliğinde 2025 yılında yapılan değişiklik; güncel değerlendirmede ana Tebliğ ile birlikte kontrol edilir.",
};
const currentInnerTableSource:RegulationSource={
  label:"Çankırı İl Tarım ve Orman Müdürlüğü — 6/2 Çizelge 5 özeti",
  url:"https://cankiri.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1251",
  kind:"province-notice",
  publishedAt:"2025-06-14",
  note:"6/2 Tebliğinin içsu türleri için asgari boy ve alıkonulabilir miktar çizelgesini resmî il müdürlüğü sayfasında yayımlar.",
};

const CHECKED_AT="2026-08-25";
const VALID_THROUGH="2028-08-31";
const inner=(species:string,scientificName:string,minLengthCm:number|null,retentionLimit:string,nationalClosedPeriods:ClosedPeriod[]=[]):SpeciesRegulationBase=>({
  species,scientificName,waterContext:"İç su",minLengthCm,retentionLimit,nationalClosedPeriods,source:currentInnerTableSource,checkedAt:CHECKED_AT,validThrough:VALID_THROUGH,
});

const bilecik2026:RegulationSource={label:"Bilecik İl Tarım ve Orman Müdürlüğü — 2026 içsu av yasağı",url:"https://bilecik.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=672",kind:"province-notice",publishedAt:"2026-03-17",note:"Bilecik iç sularında 2026 kapalı dönemlerini duyurur."};
const sakarya2026:RegulationSource={label:"Sakarya İl Tarım ve Orman Müdürlüğü — 2026 içsu av yasağı",url:"https://sakarya.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=87de6dba-6535-4c1c-8fea-201fc94f0f9c&TermSetId=437a85f2-916d-4e39-bda8-0e8eeefefa7b&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=326",kind:"province-notice",publishedAt:"2026-03-15",note:"Sakarya iç sularında 2026 kapalı dönemlerini duyurur."};
const ordu2026:RegulationSource={label:"Ordu İl Tarım ve Orman Müdürlüğü — 2026 sazangiller av yasağı",url:"https://ordu.tarimorman.gov.tr/Sayfalar/GormeEngellilerDetay.aspx?Liste=Haber&OgeId=1571",kind:"province-notice",publishedAt:"2026-03-26",note:"Ordu iç sularındaki 2026 kapalı dönemini ve amatör av aracı esaslarını duyurur."};
const erzincan2026:RegulationSource={label:"Erzincan İl Tarım ve Orman Müdürlüğü — 2026 su ürünleri av yasağı",url:"https://erzincan.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=648",kind:"province-notice",publishedAt:"2026-04-01",note:"Erzincan iç sularındaki 2026 kapalı dönemini duyurur."};
const konya2026:RegulationSource={label:"Konya İl Tarım ve Orman Müdürlüğü — 2026 su ürünleri av yasağı",url:"https://konya.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=f3406001-c8b2-4b80-9897-25b2576926e6&TermSetId=317d0ab5-aeb7-4b91-96d8-641d30c9b97c&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=1180%2FSu-Urunleri-Av-Yasagi-Basliyor",kind:"province-notice",publishedAt:"2026-03-19",note:"Konya iç sularındaki 2026 genel kapalı dönemi duyurur."};
const malatya2026:RegulationSource={label:"Malatya İl Tarım ve Orman Müdürlüğü — 2026 av sezonu duyurusu",url:"https://malatya.tarimorman.gov.tr/Sayfalar/Detay.aspx?Liste=Duyuru&OgeId=632",kind:"province-notice",publishedAt:"2026-07-01",note:"Malatya iç sularında 1 Nisan-30 Haziran kapalı döneminin sona erdiğini açıklar."};
const usak2025:RegulationSource={label:"Uşak İl Tarım ve Orman Müdürlüğü — tür bazlı içsu yasakları",url:"https://usak.tarimorman.gov.tr/Duyuru/462/Ilimizde-Su-Urunleri-Avciligi-Ve-Satis-Yasaklari",kind:"province-notice",publishedAt:"2025-03-10",note:"6/2 Tebliği kapsamında sudak, tatlısu levreği ve turna dâhil tür bazlı kapalı dönemleri açıklar."};

const globalClosed={
  Turna:[{start:"12-15",end:"03-31",label:"15 Aralık - 31 Mart",source:bilecik2026,note:"6/2 kapsamında tür bazlı kapalı dönem."}],
  Sudak:[{start:"03-15",end:"04-30",label:"15 Mart - 30 Nisan",source:usak2025,note:"6/2 kapsamında tür bazlı kapalı dönem."}],
  "Tatlısu Levreği":[{start:"03-15",end:"04-30",label:"15 Mart - 30 Nisan",source:usak2025,note:"6/2 kapsamında tür bazlı kapalı dönem."}],
} satisfies Record<string,ClosedPeriod[]>;

export const speciesRegulations:Record<string,SpeciesRegulationBase>={
  "Doğal Alabalık":inner("Doğal Alabalık","Salmonidae",25,"3 adet"),
  "Gökkuşağı Alabalığı":inner("Gökkuşağı Alabalığı","Oncorhynchus mykiss",null,"10 adet"),
  "Sazan":inner("Sazan","Cyprinus carpio",40,"5 adet"),
  "Kadife":inner("Kadife","Tinca tinca",26,"10 adet"),
  "Sudak":inner("Sudak","Sander lucioperca",26,"10 adet",globalClosed.Sudak),
  "Tatlısu Levreği":inner("Tatlısu Levreği","Perca fluviatilis",18,"kg esaslı; toplam kg kuralı uygulanır",globalClosed["Tatlısu Levreği"]),
  "Tatlısu Kefali":inner("Tatlısu Kefali","Leuciscus cephalus",20,"kg esaslı; toplam kg kuralı uygulanır"),
  "Siraz":inner("Siraz","Capoeta tinca",20,"kg esaslı; toplam kg kuralı uygulanır"),
  "Turna":inner("Turna","Esox lucius",40,"5 adet",globalClosed.Turna),
  "Yayın":inner("Yayın","Silurus glanis",90,"1 adet"),
};

const seasonalSpecies=new Set(["Sazan","Kadife","Siraz","Yayın","Tatlısu Kefali"]);
type ProvinceSeasonRule={province:string;start:string;end:string;label:string;source:RegulationSource;excludeAkarsuFor?:string[]};
export const provinceSeasonRules:ProvinceSeasonRule[]=[
  {province:"Bilecik",start:"03-15",end:"06-15",label:"15 Mart - 15 Haziran",source:bilecik2026},
  {province:"Sakarya",start:"03-15",end:"06-15",label:"15 Mart - 15 Haziran",source:sakarya2026},
  {province:"Konya",start:"03-15",end:"06-15",label:"15 Mart - 15 Haziran",source:konya2026},
  {province:"Ordu",start:"04-01",end:"06-30",label:"1 Nisan - 30 Haziran",source:ordu2026,excludeAkarsuFor:["Tatlısu Kefali"]},
  {province:"Erzincan",start:"04-01",end:"06-30",label:"1 Nisan - 30 Haziran",source:erzincan2026,excludeAkarsuFor:["Tatlısu Kefali"]},
  {province:"Malatya",start:"04-01",end:"06-30",label:"1 Nisan - 30 Haziran",source:malatya2026},
];

const uniqSources=(items:RegulationSource[])=>[...new Map(items.map((item)=>[item.url,item])).values()];
export const resolveSpeciesRegulation=(species:string,context:RouteRegulationContext={}):ResolvedSpeciesRegulation=>{
  const base=speciesRegulations[species];
  if(!base){
    return {species,minLengthCm:null,retentionLimit:null,closedPeriods:[],statusMode:"unknown",statusNote:"Bu tür için güncel boy/dönem kaydı henüz veri katmanında doğrulanmadı. Av öncesinde 6/2 Tebliği ve ilgili il müdürlüğü duyurusu kontrol edilmelidir.",sources:[nationalAmateurSource,nationalAmateurAmendment2025],checkedAt:null,validThrough:null};
  }
  const closed=[...(base.nationalClosedPeriods||[])];
  let statusMode:ResolvedSpeciesRegulation["statusMode"]="computed";
  let statusNote="Ulusal tür kuralı veri katmanında doğrulandı; yer/alan yasakları ayrıca kontrol edilmelidir.";
  if(seasonalSpecies.has(species)&&context.waterType!=="Deniz"){
    const provinceRule=provinceSeasonRules.find((rule)=>rule.province===context.province);
    if(provinceRule){
      const excluded=context.waterType==="Akarsu"&&provinceRule.excludeAkarsuFor?.includes(species);
      if(!excluded)closed.push({start:provinceRule.start,end:provinceRule.end,label:provinceRule.label,source:provinceRule.source,note:`${context.province} için yayımlanmış resmî dönem duyurusu.`});
      statusNote=excluded?`${context.province} duyurusunda ${species} için akarsu istisnası bulunduğundan bu rota için dönem yasağı otomatik uygulanmadı; saha/ilçe teyidi gereklidir.`:`${context.province} için güncel resmî dönem duyurusu uygulandı; yer/alan yasakları ayrıca kontrol edilmelidir.`;
      if(excluded)statusMode="verify";
    }else{
      statusMode="verify";
      statusNote=`${context.province||"Bu il"} için güncel il bazlı kapalı dönem bu veri paketinde henüz doğrulanmadı. Boy ve miktar limiti gösterilebilir; "bugün serbest" sonucu verilmez.`;
    }
  }
  return {species,minLengthCm:base.minLengthCm,retentionLimit:base.retentionLimit,closedPeriods:closed,statusMode,statusNote,sources:uniqSources([base.source,nationalAmateurSource,nationalAmateurAmendment2025,...closed.map((period)=>period.source)]),checkedAt:base.checkedAt,validThrough:base.validThrough};
};

export const regulationCoverage=(speciesNames:string[])=>{
  const unique=[...new Set(speciesNames)];
  const covered=unique.filter((name)=>Boolean(speciesRegulations[name]));
  return {total:unique.length,covered:covered.length,missing:unique.filter((name)=>!speciesRegulations[name])};
};
