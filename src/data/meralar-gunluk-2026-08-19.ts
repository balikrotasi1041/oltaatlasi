import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

export const gunlukBakimTarihi20260819="2026-08-19";
export const gunlukBakimHedefleri20260819=[
  "ulusal-amasya-destek-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-zonguldak-filyos-nehri-zonguldak-hatti",
  "ulusal-erzurum-kapikaya-baraj-golu-erzurum",
  "ulusal-cankiri-karadere-baraj-golu-cankiri",
  "ulusal-erzincan-firat-nehri-kemaliye-hatti",
  "ulusal-bolu-caykoy-baraj-golu-bolu",
  "ulusal-sivas-delice-baraj-golu-sivas",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-bayburt-lori-deresi",
  "ankara-500km-adiyaman-ataturk-baraj-golu",
  "ankara-500km-adiyaman-karahuyuk-goleti",
  "ankara-500km-adiyaman-sirimtas-baraj-golu",
  "ankara-500km-adiyaman-cataltepe-goleti",
] as const;

export const gunlukBakimIlk5Gerekce20260819=[
  {slug:"ulusal-amasya-destek-baraj-golu",basis:"18 Ağustos son bilinen Search Console fırsat listesinde 0 tıklama / 6 gösterim / 7,17 ortalama pozisyon; D kalite borcu sürüyor."},
  {slug:"ulusal-aksaray-ciftevi-baraj-golu",basis:"18 Ağustos son bilinen Search Console fırsat listesinde 0 tıklama / 6 gösterim / 8,00 ortalama pozisyon; rota özelinde tür kanıtı bulundu."},
  {slug:"ulusal-erzincan-karasu-nehri-erzincan-hatti",basis:"Güncel Search Console satırı bulunamadığı için fallback: D kalite borcu ve büyük akarsu kimliği önceliği."},
  {slug:"ulusal-ardahan-kura-nehri-ardahan-hatti",basis:"Güncel Search Console satırı bulunamadığı için fallback: D kalite borcu, ulusal ölçekte tanınan akarsu ve erişim/hukuk doğrulama ihtiyacı."},
  {slug:"ulusal-kastamonu-cigdem-baraj-golu-kastamonu",basis:"Fallback kalite borcu; resmî balıklandırma kaydı bulunması nedeniyle kategori yükseltme potansiyeli yüksek."},
] as const;

const teblig:ResearchSource={label:"Tarım ve Orman Bakanlığı - 6/2 Amatör Amaçlı Su Ürünleri Avcılığı",url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",note:"Güncel dönem, tür, boy, adet, takım ve alan hükümleri için ana resmî çerçevedir; rota özelinde sürekli kıyı izni oluşturmaz."};
const aksaray:ResearchSource={label:"Aksaray İl Tarım - Çiftevi Göleti balıklandırması",url:"https://aksaray.tarimorman.gov.tr/Sayfalar/Detay.aspx?TermId=047eafe4-6858-4411-ba41-7573a582c389&TermSetId=105e597d-1fa9-4cfe-9c75-ca8d0ec3b992&TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&UrlSuffix=419%2FAksarayin-",note:"Çiftevi Göleti'ne 10.000 sazan yavrusu bırakıldığını rota özelinde kaydeder. Sayfadaki tarihsel boy tavsiyesi güncel mevzuat yerine kullanılmaz."};
const kastamonu:ResearchSource={label:"Kastamonu İl Tarım - Devrekâni Çiğdem Göleti balıklandırması",url:"https://kastamonu.tarimorman.gov.tr/Haber/1053/Ilimizde-Goletler-Baliklandirildi",note:"2018 programında Devrekâni Çiğdem Göleti'ne 20.000 aynalı/pullu sazan yavrusu bırakıldığını rota özelinde kaydeder."};
const unique=<T extends {url:string}>(items:T[])=>[...new Map(items.map((x)=>[x.url,x])).values()];

const upgradeToC=(route:EnrichedMera,source:ResearchSource,fishName="Sazan"):EnrichedMera=>({
  ...route,
  confidence:"C",
  updatedAt:gunlukBakimTarihi20260819,
  researchedAt:gunlukBakimTarihi20260819,
  sources:unique([...(route.sources||[]),source,teblig]),
  researchStatus:"19 Ağustos 2026 rota özelinde resmî tür/balıklandırma kanıtı ile yeniden incelendi",
  researchSummary:`${route.name} için su kimliğine ek olarak rota özelinde ${fishName} balıklandırma kaydı bulundu. Bu, türün günümüzde bulunabileceğine dair güçlü olasılık kanıtıdır; mikro kıyı erişimi ve sürekli amatör av izni saha teyitli değildir.`,
  verification:`Rota kimliği ile resmî ${fishName} balıklandırma kaydı çaprazlandı; saha teyidi yok. Güven C.`,
  fish:[...new Set([...(route.fish||[]),fishName])],
  fishEvidence:[...(route.fishEvidence||[]),{name:fishName,scientificName:fishName==="Sazan"?"Cyprinus carpio":null,evidenceLevel:"Güçlü olasılık · rota özelinde resmî balıklandırma",sourceLabel:source.label,sourceUrl:source.url,note:"Geçmiş resmî balıklandırma kaydı güncel stok yoğunluğu veya av başarısı garantisi değildir.",recordCount:null,distanceKm:null}],
  confidenceProfile:{...(route.confidenceProfile||{model:"evidence-v1",overall:"C",identity:{level:"partial",label:"Rota kimliği",note:"Su varlığı eşleştirildi."},legal:{level:"unverified",label:"Hukuk teyidi gerekli",note:"Mikro kıyı ayrıca kontrol edilmelidir."},access:{level:"unverified",label:"Erişim teyidi gerekli",note:"Son kıyı saha teyitli değildir."},species:{level:"strong",label:"Tür kanıtı",note:"Resmî balıklandırma kaydı vardır."},field:{level:"unverified",label:"Saha doğrulaması yok",note:"Yerinde kontrol gereklidir."},reviewedAt:gunlukBakimTarihi20260819}),overall:"C",species:{level:"strong",label:"Rota özelinde tür kanıtı",note:"Resmî balıklandırma kaydı türün bulunabileceğine dair güçlü olasılık sağlar; güncel stok garantisi değildir."},reviewedAt:gunlukBakimTarihi20260819},
});

export const applyGunlukBakim20260819=(routeMap:Map<string,EnrichedMera>)=>{
  const missing=gunlukBakimHedefleri20260819.filter((slug)=>!routeMap.has(slug));
  if(missing.length)throw new Error(`19 Ağustos bakım hedefi aktif veri kümesinde yok: ${missing.join(", ")}`);
  const notD=gunlukBakimHedefleri20260819.filter((slug)=>routeMap.get(slug)?.confidence!=="D");
  if(notD.length)throw new Error(`19 Ağustos bakım hedefleri seçim anında Güven D olmalı: ${notD.map((s)=>`${s}:${routeMap.get(s)?.confidence}`).join(", ")}`);

  routeMap.set("ulusal-aksaray-ciftevi-baraj-golu",upgradeToC(routeMap.get("ulusal-aksaray-ciftevi-baraj-golu")!,aksaray));
  routeMap.set("ulusal-kastamonu-cigdem-baraj-golu-kastamonu",upgradeToC(routeMap.get("ulusal-kastamonu-cigdem-baraj-golu-kastamonu")!,kastamonu));

  const raisedSlugs=["ulusal-aksaray-ciftevi-baraj-golu","ulusal-kastamonu-cigdem-baraj-golu-kastamonu"] as const;
  return {reviewed:17,strengthened:2,raised:2,unchanged:15,raisedSlugs,unchangedSlugs:gunlukBakimHedefleri20260819.filter((slug)=>!raisedSlugs.includes(slug as typeof raisedSlugs[number]))};
};
