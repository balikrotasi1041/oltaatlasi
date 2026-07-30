import { writeFile } from "node:fs/promises";
import path from "node:path";
import { ulusalMeralar } from "../src/data/meralar-ulusal.js";
import { ulusalKoordinatlar, ulusalKoordinatMeta } from "../src/data/meralar-ulusal-koordinatlar.js";

const outputFile=path.resolve("src/data/meralar-ulusal-otomatik-arastirma.js");
const generatedAt=new Date().toISOString();
const researchedAt=generatedAt.slice(0,10);
const contact=process.env.RESEARCH_CONTACT||"balikrotasi1041@gmail.com";
const userAgent=process.env.RESEARCH_USER_AGENT||`OltaAtlasi/1.0 (+https://oltaatlasi.com/sorumluluk-ve-kullanim/; ${contact})`;
const coordinateIndex=ulusalKoordinatlar;
const provinceBounds=ulusalKoordinatMeta.provinceBounds||{};

const fishProfiles=[
  {name:"Sazan",latin:["Cyprinus carpio"],methods:["Dip oltası","Şamandıra"],baits:["Mısır","Hamur","Solucan"],water:"İç su"},
  {name:"Sudak",latin:["Sander lucioperca","Stizostedion lucioperca"],methods:["Spin","Jig"],baits:["Silikon","Minnow","Jig başı"],water:"İç su"},
  {name:"Tatlı Su Levreği",latin:["Perca fluviatilis"],methods:["Spin","Şamandıra"],baits:["Küçük silikon","Döner kaşık","Solucan"],water:"İç su"},
  {name:"Yayın",latin:["Silurus glanis"],methods:["Güçlü dip oltası"],baits:["Solucan demeti","Balık parçası","Kokulu yem"],water:"İç su"},
  {name:"Turna",latin:["Esox lucius"],methods:["Spin","Sahte yem"],baits:["Silikon","Kaşık","Minnow"],water:"İç su"},
  {name:"Kadife",latin:["Tinca tinca"],methods:["Şamandıra","Hafif dip oltası"],baits:["Solucan","Mısır","Hamur"],water:"İç su"},
  {name:"Gümüşi Havuz Balığı",latin:["Carassius gibelio","Carassius auratus"],methods:["Şamandıra","Hafif dip oltası"],baits:["Solucan","Ekmek","Mısır"],water:"İç su"},
  {name:"Havuz Balığı",latin:["Carassius carassius"],methods:["Şamandıra","Hafif dip oltası"],baits:["Solucan","Ekmek","Mısır"],water:"İç su"},
  {name:"Gümüş Balığı",latin:["Atherina boyeri"],methods:["Hafif çapari","Şamandıra"],baits:["Küçük suni yem","Karides"],water:"İç su/acı su"},
  {name:"Siraz",latin:["Capoeta sieboldii","Capoeta tinca","Capoeta baliki","Capoeta pestai","Capoeta antalyensis"],methods:["Dip oltası","Şamandıra"],baits:["Solucan","Hamur","Mısır"],water:"İç su"},
  {name:"Tatlısu Kefali",latin:["Squalius cephalus","Leuciscus cephalus"],methods:["Şamandıra","Hafif spin"],baits:["Solucan","Ekmek","Küçük kaşık"],water:"İç su"},
  {name:"Kızılkanat",latin:["Scardinius erythrophthalmus"],methods:["Şamandıra","Hafif dip oltası"],baits:["Solucan","Ekmek","Mısır"],water:"İç su"},
  {name:"Kızılgöz",latin:["Rutilus rutilus"],methods:["Şamandıra","Hafif dip oltası"],baits:["Solucan","Ekmek","Mısır"],water:"İç su"},
  {name:"İnci Balığı",latin:["Alburnus alburnus","Alburnus chalcoides","Alburnus escherichii"],methods:["Şamandıra","Hafif çapari"],baits:["Kurt","Ekmek","Küçük suni"],water:"İç su"},
  {name:"Alabalık",latin:["Salmo trutta","Salmo labrax","Salmo coruhensis","Salmo rizeensis","Oncorhynchus mykiss"],methods:["Spin","Sinek avı"],baits:["Küçük kaşık","Suni sinek","Küçük silikon"],water:"İç su"},
  {name:"Yılan Balığı",latin:["Anguilla anguilla"],methods:["Dip oltası"],baits:["Solucan","Balık parçası"],water:"İç su/acı su"},
  {name:"Kefal",latin:["Mugil cephalus","Chelon auratus","Chelon ramada","Chelon saliens","Liza aurata","Liza ramada","Liza saliens"],methods:["Şamandıra","Yüzey takımı"],baits:["Ekmek","Hamur","Kurt"],water:"Deniz/acı su"},
  {name:"Levrek",latin:["Dicentrarchus labrax"],methods:["Spin","Sahte yem"],baits:["Silikon","Minnow","Kaşık"],water:"Deniz/acı su"},
  {name:"İstavrit",latin:["Trachurus mediterraneus","Trachurus trachurus"],methods:["Çapari","Hafif spin"],baits:["Suni çapari","Küçük silikon","Karides"],water:"Deniz"},
  {name:"Zargana",latin:["Belone belone"],methods:["Şamandıra","Hafif spin","Zargana topu"],baits:["İnce balık şeridi","Karides","Küçük suni yem"],water:"Deniz"},
  {name:"İzmarit",latin:["Spicara maena","Spicara smaris","Centracanthus cirrus"],methods:["Şamandıra","Hafif dip oltası"],baits:["Karides","Midye","Kurt"],water:"Deniz"},
  {name:"Mezgit",latin:["Merlangius merlangus"],methods:["Dip oltası","Tekne takımı"],baits:["Karides","Balık parçası","Boru kurdu"],water:"Deniz"},
  {name:"Çipura",latin:["Sparus aurata"],methods:["Dip oltası","Surf casting"],baits:["Karides","Midye","Mamun"],water:"Deniz"},
  {name:"Lüfer",latin:["Pomatomus saltatrix"],methods:["Spin","Yemli takım"],baits:["Minnow","Kaşık","Yaprak yem"],water:"Deniz"},
  {name:"Palamut",latin:["Sarda sarda"],methods:["Çapari","Kaşık"],baits:["Suni çapari","Kaşık","Yem balığı taklidi"],water:"Deniz"},
  {name:"Karagöz",latin:["Diplodus sargus","Diplodus vulgaris"],methods:["Dip oltası","Şamandıra"],baits:["Karides","Midye","Boru kurdu"],water:"Deniz"},
  {name:"Eşkina",latin:["Sciaena umbra"],methods:["Dip oltası","Yemli takım"],baits:["Karides","Mamun","Boru kurdu"],water:"Deniz"},
  {name:"Barbun",latin:["Mullus barbatus","Mullus surmuletus"],methods:["Dip oltası","Tekne takımı"],baits:["Karides","Kurt","Küçük yem parçaları"],water:"Deniz"},
  {name:"Kolyoz",latin:["Scomber colias","Scomber japonicus"],methods:["Çapari","Hafif spin"],baits:["Suni çapari","Kaşık","Küçük jig"],water:"Deniz"}
];

const profileByName=new Map(fishProfiles.map((profile)=>[profile.name,profile]));
const normalize=(value="")=>String(value)
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i")
  .replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();
const normalizeLatin=(value="")=>String(value).toLowerCase().replace(/[^a-z ]+/g," ").replace(/\s+/g," ").trim();
const sleep=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));
const unique=(values)=>[...new Set(values.filter(Boolean))];
const round=(value,digits=1)=>Number(Number(value).toFixed(digits));
const haversineKm=(a,b)=>{
  const radius=6371;
  const toRad=(value)=>value*Math.PI/180;
  const dLat=toRad(b.lat-a.lat),dLng=toRad(b.lng-a.lng);
  const lat1=toRad(a.lat),lat2=toRad(b.lat);
  const h=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return radius*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
};
const osmUrl=(element)=>{
  const type={node:"node",way:"way",relation:"relation"}[element.type];
  return type?`https://www.openstreetmap.org/${type}/${element.id}`:"https://www.openstreetmap.org/";
};
const elementPoint=(element)=>{
  const lat=Number(element.lat??element.center?.lat);
  const lng=Number(element.lon??element.center?.lon);
  return Number.isFinite(lat)&&Number.isFinite(lng)?{lat,lng}:null;
};
const provinceCenter=(province)=>{
  const bounds=provinceBounds[province];
  if(!bounds)return null;
  return {lat:(Number(bounds.south)+Number(bounds.north))/2,lng:(Number(bounds.west)+Number(bounds.east))/2};
};
const routePoint=(route)=>{
  const coordinate=coordinateIndex[route.slug];
  if(coordinate)return{lat:coordinate.lat,lng:coordinate.lng,scope:"route",sourceUrl:coordinate.sourceUrl};
  const center=provinceCenter(route.province);
  return center?{...center,scope:"province",sourceUrl:`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${route.province}, Türkiye`)}`}:null;
};

let lastGbif=0,lastOpenAlex=0,lastOverpass=0;
const throttle=async(kind,gap)=>{
  const value=kind==="gbif"?lastGbif:kind==="openalex"?lastOpenAlex:lastOverpass;
  const wait=gap-(Date.now()-value);
  if(wait>0)await sleep(wait);
  if(kind==="gbif")lastGbif=Date.now();
  else if(kind==="openalex")lastOpenAlex=Date.now();
  else lastOverpass=Date.now();
};
const fetchJson=async(url,options={},policy={kind:"gbif",gap:350,attempts:3})=>{
  for(let attempt=1;attempt<=policy.attempts;attempt+=1){
    await throttle(policy.kind,policy.gap);
    const response=await fetch(url,{...options,headers:{"User-Agent":userAgent,"Accept":"application/json",...(options.headers||{})}});
    if(response.ok)return response.json();
    if(![429,500,502,503,504].includes(response.status))throw new Error(`${response.status} ${url}: ${await response.text()}`);
    await sleep(attempt*1800);
  }
  return null;
};

const fishFromScientific=(scientific)=>{
  const name=normalizeLatin(scientific).split(" ").slice(0,2).join(" ");
  return fishProfiles.find((profile)=>profile.latin.some((latin)=>name===normalizeLatin(latin)||normalizeLatin(scientific).startsWith(`${normalizeLatin(latin)} `)));
};
const fishFromText=(text)=>{
  const latinText=normalizeLatin(text);
  const trText=normalize(text);
  return fishProfiles.filter((profile)=>
    profile.latin.some((latin)=>latinText.includes(normalizeLatin(latin)))||
    trText.includes(normalize(profile.name))
  );
};

const fallbackNames=(route)=>{
  if(route.waterType==="Deniz"){
    if(route.zone==="Karadeniz")return["İstavrit","Mezgit","Kefal","Levrek","Zargana"];
    if(route.zone==="Marmara")return["İstavrit","Kefal","Zargana","Levrek","Lüfer"];
    return["Levrek","Çipura","Kefal","Karagöz","İstavrit"];
  }
  if(route.waterType==="Akarsu"){
    if(["Karadeniz","Doğu Anadolu"].includes(route.zone))return["Alabalık","Tatlısu Kefali","Sazan","Yayın"];
    return["Tatlısu Kefali","Sazan","Yayın","Siraz"];
  }
  if(["Doğu Anadolu","Karadeniz"].includes(route.zone))return["Sazan","Alabalık","Tatlısu Kefali","Yayın","Kadife"];
  if(route.zone==="İç Anadolu")return["Sazan","Sudak","Tatlı Su Levreği","Yayın","Kadife"];
  return["Sazan","Yayın","Tatlı Su Levreği","Kadife","Gümüşi Havuz Balığı"];
};

const classMatch=await fetchJson("https://api.gbif.org/v1/species/match?name=Actinopterygii",{}, {
  kind:"gbif",gap:350,attempts:3
});
const fishClassKey=classMatch?.usageKey||classMatch?.classKey||204;

const gbifResearch=async(route)=>{
  const point=routePoint(route);
  if(!point)return{evidence:[],searchUrl:null,scope:"Konum çözülemedi"};
  const radius=point.scope==="route"?(route.waterType==="Deniz"?20:12):90;
  const url=new URL("https://api.gbif.org/v1/occurrence/search");
  url.searchParams.set("taxon_key",String(fishClassKey));
  url.searchParams.set("geo_distance",`${radius}km,${point.lat},${point.lng}`);
  url.searchParams.set("country","TR");
  url.searchParams.set("has_coordinate","true");
  url.searchParams.set("has_geospatial_issue","false");
  url.searchParams.set("occurrence_status","PRESENT");
  url.searchParams.set("limit","300");
  let data=await fetchJson(url,{}, {kind:"gbif",gap:300,attempts:3});
  if(!data?.results){
    const delta=radius/111;
    const west=point.lng-delta,east=point.lng+delta,south=point.lat-delta,north=point.lat+delta;
    url.searchParams.delete("geo_distance");
    url.searchParams.set("geometry",`POLYGON((${west} ${south},${east} ${south},${east} ${north},${west} ${north},${west} ${south}))`);
    data=await fetchJson(url,{}, {kind:"gbif",gap:300,attempts:2});
  }
  const counts=new Map();
  const records=new Map();
  for(const occurrence of data?.results||[]){
    const profile=fishFromScientific(occurrence.species||occurrence.scientificName||"");
    if(!profile)continue;
    counts.set(profile.name,(counts.get(profile.name)||0)+1);
    if(!records.has(profile.name)&&occurrence.key)records.set(profile.name,`https://www.gbif.org/occurrence/${occurrence.key}`);
  }
  const scope=point.scope==="route"
    ? `Genel pin çevresinde ${radius} km yarıçaplı GBIF biyolojik kayıt taraması`
    : `${route.province} ili merkezi çevresinde ${radius} km yarıçaplı bölgesel GBIF taraması`;
  const evidence=[...counts.entries()]
    .sort((a,b)=>b[1]-a[1])
    .slice(0,7)
    .map(([name,count])=>{
      const profile=profileByName.get(name);
      return{
        name,
        scientificName:profile?.latin[0]||null,
        evidenceLevel:point.scope==="route"?"Yakın çevre biyolojik oluş kaydı":"İl ölçeğinde biyolojik oluş kaydı",
        sourceLabel:`GBIF – ${name} oluş kayıtları`,
        sourceUrl:records.get(name)||url.toString(),
        note:`${scope} içinde ${count} eşleşen kayıt bulundu. Kayıt, türün bu kıyıda avlanabildiğini veya güncel popülasyon yoğunluğunu garanti etmez.`,
        recordCount:count,
        distanceKm:radius
      };
    });
  return{evidence,searchUrl:url.toString(),scope};
};

const reconstructAbstract=(inverted)=>{
  if(!inverted||typeof inverted!=="object")return"";
  const positions=[];
  for(const[word,indexes]of Object.entries(inverted))for(const index of indexes)positions[index]=word;
  return positions.filter(Boolean).join(" ");
};
const meaningfulRouteTokens=(route)=>normalize(route.name)
  .split(" ")
  .filter((token)=>token.length>3&&!["baraj","golu","goleti","nehri","cayi","deresi","irmagi","sahili","kiyisi","hatti"].includes(token));
const openAlexResearch=async(route)=>{
  const query=`"${route.name}" balık fish Turkey`;
  const url=new URL("https://api.openalex.org/works");
  url.searchParams.set("search",query);
  url.searchParams.set("per-page","8");
  url.searchParams.set("mailto",contact);
  const data=await fetchJson(url,{}, {kind:"openalex",gap:220,attempts:3});
  const tokens=meaningfulRouteTokens(route);
  const evidence=[];
  for(const work of data?.results||[]){
    const title=work.display_name||work.title||"";
    const abstract=reconstructAbstract(work.abstract_inverted_index);
    const text=`${title} ${abstract}`;
    const normalized=normalize(text);
    const tokenHits=tokens.filter((token)=>normalized.includes(token)).length;
    const required=tokens.length<=1?1:Math.min(2,tokens.length);
    if(tokenHits<required)continue;
    const profiles=fishFromText(text);
    const landing=work.primary_location?.landing_page_url||work.doi||work.id;
    for(const profile of profiles){
      if(evidence.some((item)=>item.name===profile.name))continue;
      evidence.push({
        name:profile.name,
        scientificName:profile.latin[0],
        evidenceLevel:"Rota adıyla eşleşen akademik yayın",
        sourceLabel:title,
        sourceUrl:landing,
        note:"Yayın başlığı veya özeti rota adıyla ve tür adıyla eşleşmiştir. Tam metindeki örnekleme alanı ve tarih kullanıcı tarafından ayrıca kontrol edilmelidir.",
        recordCount:null,
        distanceKm:null
      });
    }
  }
  return{evidence:evidence.slice(0,6),searchUrl:url.toString()};
};

const overpassEndpoints=[
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter"
];
const buildOverpassQuery=(routes)=>{
  const blocks=[];
  for(const route of routes){
    const point=routePoint(route);
    if(!point)continue;
    blocks.push(
      `nwr(around:15000,${point.lat},${point.lng})["tourism"~"hotel|guest_house|hostel|motel|apartment|camp_site|caravan_site"];`,
      `nwr(around:8000,${point.lat},${point.lng})["amenity"~"parking|fuel|toilets|drinking_water|restaurant|cafe|marketplace|bus_station"];`,
      `nwr(around:8000,${point.lat},${point.lng})["shop"~"supermarket|convenience"];`,
      `nwr(around:5000,${point.lat},${point.lng})["public_transport"];`,
      `way(around:3500,${point.lat},${point.lng})["highway"~"trunk|primary|secondary|tertiary|unclassified|residential|service|track"];`
    );
  }
  return`[out:json][timeout:120];(${blocks.join("")});out center tags;`;
};
const queryOverpass=async(query)=>{
  for(const endpoint of overpassEndpoints){
    try{
      const data=await fetchJson(endpoint,{
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`data=${encodeURIComponent(query)}`
      },{kind:"overpass",gap:1700,attempts:2});
      if(data?.elements)return data.elements;
    }catch(error){
      console.warn(`Overpass endpoint başarısız: ${endpoint} – ${error.message}`);
    }
  }
  return[];
};

const tourismTypes=new Set(["hotel","guest_house","hostel","motel","apartment","camp_site","caravan_site"]);
const placeKind=(element)=>{
  const tags=element.tags||{};
  if(tourismTypes.has(tags.tourism))return tags.tourism;
  if(tags.amenity)return tags.amenity;
  if(tags.shop)return tags.shop;
  if(tags.public_transport)return"public_transport";
  if(tags.highway)return"road";
  return"other";
};
const typeLabel=(kind)=>({
  hotel:"Otel",guest_house:"Pansiyon/konukevi",hostel:"Hostel",motel:"Motel",apartment:"Apart",
  camp_site:"Kamp alanı",caravan_site:"Karavan alanı",parking:"Otopark",fuel:"Akaryakıt",
  toilets:"Tuvalet",drinking_water:"İçme suyu",restaurant:"Restoran",cafe:"Kafe",
  marketplace:"Pazar",bus_station:"Otogar",supermarket:"Market",convenience:"Bakkal/market",
  public_transport:"Toplu taşıma durağı",road:"Yol"
}[kind]||kind);
const analyzeNearby=(route,elements)=>{
  const point=routePoint(route);
  if(!point)return{
    vehicleAccess:"Zor",camping:"Kontrol edilmeli",amenities:[],
    accommodationOptions:[],accessEvidence:[{
      label:"Konum ve erişim araştırması bekliyor",
      value:"Rota koordinatı çözülemediği için kıyıya yakın yol, park ve tesis taraması yapılamadı.",
      sourceUrl:`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${route.name}, ${route.province}, Türkiye`)}`,
      note:"Ad ve il eşleşmesi manuel olarak doğrulanmalıdır."
    }]
  };
  const nearby=elements.map((element)=>{
    const location=elementPoint(element);
    if(!location)return null;
    const distanceKm=haversineKm(point,location);
    return{element,location,distanceKm,kind:placeKind(element)};
  }).filter(Boolean);
  const local=nearby.filter((item)=>item.distanceKm<=16).sort((a,b)=>a.distanceKm-b.distanceKm);
  const roads=local.filter((item)=>item.kind==="road"&&item.distanceKm<=4);
  const stays=local.filter((item)=>tourismTypes.has(item.kind)&&item.distanceKm<=15);
  const parking=local.find((item)=>item.kind==="parking"&&item.distanceKm<=8);
  const publicTransport=local.find((item)=>["public_transport","bus_station"].includes(item.kind)&&item.distanceKm<=10);
  const serviceKinds=["fuel","toilets","drinking_water","restaurant","cafe","marketplace","supermarket","convenience"];
  const services=local.filter((item)=>serviceKinds.includes(item.kind)&&item.distanceKm<=10);
  const nearestRoad=roads[0];
  const vehicleAccess=point.scope!=="route"?"Zor":!nearestRoad?"Zor":nearestRoad.distanceKm<=0.8?"Kolay":nearestRoad.distanceKm<=2?"Orta":"Zor";
  const camping=stays.some((item)=>["camp_site","caravan_site"].includes(item.kind))?"Sınırlı":"Kontrol edilmeli";
  const accommodationOptions=stays.slice(0,4).map((item)=>({
    name:item.element.tags?.name||typeLabel(item.kind),
    type:typeLabel(item.kind),
    distanceKm:round(item.distanceKm),
    sourceUrl:osmUrl(item.element),
    note:`OpenStreetMap kaydında genel ${typeLabel(item.kind).toLocaleLowerCase("tr-TR")} noktasıdır; açık olma, ücret, rezervasyon ve kıyıya erişim ayrıca doğrulanmalıdır.`
  }));
  if(!accommodationOptions.length){
    accommodationOptions.push({
      name:point.scope==="route"?`${route.province} çevresinde konaklama araştırması`:`${route.province} merkezinde konaklama araştırması`,
      type:"Konaklama araştırma bağlantısı",
      distanceKm:null,
      sourceUrl:`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${route.province} hotel Türkiye`)}`,
      note:point.scope==="route"
        ?"15 km çevrede adlandırılmış OSM konaklama kaydı bulunamadı; bu, tesis olmadığı anlamına gelmez. İlçe veya il merkezindeki güncel işletmeler ayrıca araştırılmalıdır."
        :"Rota koordinatı çözülemediği için yalnızca il merkezi ölçeğinde araştırma bağlantısı verilir."
    });
  }
  const amenityLabels=[];
  for(const item of services){
    const label=`${typeLabel(item.kind)}${item.element.tags?.name?`: ${item.element.tags.name}`:""} (yaklaşık ${round(item.distanceKm)} km)`;
    if(!amenityLabels.some((value)=>value.startsWith(typeLabel(item.kind))))amenityLabels.push(label);
    if(amenityLabels.length>=6)break;
  }
  if(parking)amenityLabels.unshift(`Otopark kaydı: ${parking.element.tags?.name||"adsız"} (yaklaşık ${round(parking.distanceKm)} km)`);
  if(publicTransport)amenityLabels.push(`Toplu taşıma kaydı: ${publicTransport.element.tags?.name||typeLabel(publicTransport.kind)} (yaklaşık ${round(publicTransport.distanceKm)} km)`);
  const accessEvidence=[];
  if(nearestRoad){
    accessEvidence.push({
      label:`Yakındaki yol kaydı: ${nearestRoad.element.tags?.name||nearestRoad.element.tags?.ref||nearestRoad.element.tags?.highway||"adsız yol"}`,
      value:`Genel pin ile yol nesnesinin merkez noktası arasında yaklaşık ${round(nearestRoad.distanceKm)} km vardır.`,
      sourceUrl:osmUrl(nearestRoad.element),
      note:"OSM yol nesnesinin merkezine göre hesaplanan yaklaşık mesafedir; kıyıya bağlanan son yolun açık, araçla geçilebilir veya kamuya ait olduğunu kanıtlamaz."
    });
  }else{
    accessEvidence.push({
      label:point.scope==="route"?"Yakın yol kaydı bulunamadı":"İl merkezi ölçeğinde erişim araştırması",
      value:point.scope==="route"
        ?"Genel pinin 4 km çevresinde sınıflandırılmış yol nesnesi eşleşmedi."
        :"Rota koordinatı çözülemediği için erişim sınıflaması il merkezi noktasına dayanmaz ve 'zor' olarak tutulur.",
      sourceUrl:point.sourceUrl,
      note:"OSM eksikliği fiziksel yol olmadığı anlamına gelmez; yerel harita ve kurum bilgisi gerekir."
    });
  }
  if(parking)accessEvidence.push({
    label:`Otopark: ${parking.element.tags?.name||"adsız kayıt"}`,
    value:`Genel pine yaklaşık ${round(parking.distanceKm)} km uzaklıkta OSM otopark kaydı vardır.`,
    sourceUrl:osmUrl(parking.element),
    note:"Otoparkın halka açık, ücretli, sürekli açık veya kıyıya uygun olduğu doğrulanmamıştır."
  });
  const transport=point.scope==="route"
    ? nearestRoad
      ? `${nearestRoad.element.tags?.name||nearestRoad.element.tags?.ref||"Yakındaki yol"} genel su pinine en yakın açık harita yol kayıtlarından biridir. Pin kıyı girişi değildir; son yaklaşım, yol yüzeyi, bariyer, park ve mülkiyet sahada doğrulanmalıdır.`
      :"Genel su pini çevresinde yapılandırılmış yakın yol kaydı bulunamadı. İlçe merkezinden sonra kullanılacak güzergâh yerel kaynaklardan ve güncel uydu görüntüsünden araştırılmalıdır."
    :`Rota koordinatı henüz çözülemediği için ${route.province} il merkezi ölçeğindeki açık veri taraması yalnızca planlama başlangıcıdır; kıyı yolu ve park bilgisi olarak kullanılamaz.`;
  return{
    vehicleAccess,camping,
    amenities:amenityLabels.length?amenityLabels:["Yakın hizmetler açık harita kayıtlarında sınırlı; temel ihtiyaçlar ilçe merkezinden tamamlanmalıdır."],
    accommodationOptions,accessEvidence,transport,
    crowdNote:services.length||stays.length
      ?"Yakındaki rekreasyon ve hizmet kayıtları dönemsel yoğunluk oluşturabilir. Güvenli atış koridoru yoksa daha sakin bir kıyı seçilmelidir."
      :"Hizmet kaydı az olan kırsal kıyılarda yalnız çalışma, gece varış ve iletişim kesintisi riski dikkate alınmalıdır."
  };
};

const groups=new Map();
for(const route of ulusalMeralar){
  if(!groups.has(route.province))groups.set(route.province,[]);
  groups.get(route.province).push(route);
}
const nearbyIndex={};
let provinceCounter=0;
for(const[province,routes]of groups){
  provinceCounter+=1;
  const query=buildOverpassQuery(routes);
  const elements=await queryOverpass(query);
  for(const route of routes)nearbyIndex[route.slug]=analyzeNearby(route,elements);
  console.log(`OSM çevre taraması ${provinceCounter}/${groups.size}: ${province} – ${elements.length} nesne`);
}

const officialRules={
  label:"Tarım ve Orman Bakanlığı – Amatör su ürünleri avcılığı kuralları",
  url:"https://www.tarimorman.gov.tr/Konular/Su-Urunleri/Su-Urunleri-Avciligi",
  note:"Tür, boy, adet, dönem, takım ve suya özel yasaklar için güncel resmî kaynak."
};
const baselineSource={
  label:"6/2 Numaralı Amatör Amaçlı Su Ürünleri Avcılığı Tebliği",
  url:"https://yalova.tarimorman.gov.tr/Duyuru/513/6_2-Numarali-Amator-Amacli-Su-Urunleri-Avciliginin-Duzenlenmesi-Hakkinda-Teblig-_no-2024_21_",
  note:"Bölgesel olasılık listeleri yalnızca araştırma başlangıcıdır; suya özel tür varlığını kanıtlamaz."
};

const research={};
let processed=0,fishEvidenceRouteCount=0,accessEvidenceRouteCount=0,coordinateRouteCount=0;
for(const route of ulusalMeralar){
  const point=routePoint(route);
  if(point?.scope==="route")coordinateRouteCount+=1;
  const [gbif,openAlex]=await Promise.all([gbifResearch(route),openAlexResearch(route)]);
  const evidenceByName=new Map();
  for(const item of [...openAlex.evidence,...gbif.evidence])if(!evidenceByName.has(item.name))evidenceByName.set(item.name,item);
  let fishEvidence=[...evidenceByName.values()].slice(0,8);
  const fallback=fallbackNames(route);
  for(const name of fallback){
    if(fishEvidence.length>=5)break;
    if(evidenceByName.has(name))continue;
    const profile=profileByName.get(name);
    fishEvidence.push({
      name,
      scientificName:profile?.latin[0]||null,
      evidenceLevel:"Su türü ve bölgeye göre araştırma adayı",
      sourceLabel:"Bölgesel tür olasılığı – resmî amatör avcılık kurallarıyla birlikte değerlendirme",
      sourceUrl:baselineSource.url,
      note:"Rota bazında doğrudan oluş kaydı bulunmadığında su türü ve bölgeye göre araştırılması gereken aday tür olarak eklenmiştir; bu su varlığında bulunduğu veya avlanabildiği iddiası değildir.",
      recordCount:null,
      distanceKm:null
    });
  }
  const fish=unique(fishEvidence.map((item)=>item.name)).slice(0,8);
  const profiles=fish.map((name)=>profileByName.get(name)).filter(Boolean);
  const methods=unique(profiles.flatMap((profile)=>profile.methods)).slice(0,6);
  const baits=unique(profiles.flatMap((profile)=>profile.baits)).slice(0,8);
  const nearby=nearbyIndex[route.slug]||analyzeNearby(route,[]);
  if(fishEvidence.some((item)=>!item.evidenceLevel.startsWith("Su türü")))fishEvidenceRouteCount+=1;
  if(nearby.accessEvidence?.length)accessEvidenceRouteCount+=1;
  const exactFishCount=fishEvidence.filter((item)=>["Rota adıyla eşleşen akademik yayın","Yakın çevre biyolojik oluş kaydı"].includes(item.evidenceLevel)).length;
  const scopeLabel=point?.scope==="route"?"genel su pini çevresinde":"il ölçeğinde";
  const researchStatus=exactFishCount>0&&point?.scope==="route"
    ?"Açık kaynaklarla rota çevresi araştırıldı"
    :point?.scope==="route"
      ?"Açık verilerle kısmi araştırıldı"
      :"İl ölçeğinde ön araştırma yapıldı";
  const sources=[
    officialRules,
    baselineSource,
    ...(gbif.searchUrl?[{
      label:`GBIF balık oluş kayıtları taraması – ${route.name}`,
      url:gbif.searchUrl,
      note:`${gbif.scope}. Biyolojik oluş kaydı av başarısı, stok yoğunluğu veya hukuki uygunluk anlamına gelmez.`
    }]:[]),
    ...(openAlex.evidence.slice(0,3).map((item)=>({label:item.sourceLabel,url:item.sourceUrl,note:item.note}))),
    ...(nearby.accessEvidence||[]).slice(0,2).map((item)=>({label:item.label,url:item.sourceUrl,note:`${item.value} ${item.note}`})),
    ...(nearby.accommodationOptions||[]).slice(0,2).map((item)=>({label:item.name,url:item.sourceUrl,note:`${item.type}. ${item.note}`})),
  ];
  const sourceMap=new Map(sources.filter((source)=>source?.url).map((source)=>[source.url,source]));
  research[route.slug]={
    researchedAt,
    researchStatus,
    researchSummary:`${route.name} için çevrimiçi araştırma; balık türlerinde akademik yayın ve GBIF oluş kayıtlarını, pratik planlamada OpenStreetMap yol, konaklama ve hizmet kayıtlarını tarar. ${scopeLabel} bulunan veriler kıyı girişi veya av garantisi sayılmaz.`,
    fish,
    fishEvidence,
    methods,
    baits,
    camping:nearby.camping,
    vehicleAccess:nearby.vehicleAccess,
    amenities:nearby.amenities,
    accommodationOptions:nearby.accommodationOptions,
    accessEvidence:nearby.accessEvidence,
    transport:nearby.transport,
    crowdNote:nearby.crowdNote,
    seasonalNotes:[
      `${fish.join(", ")} bu rota için çevrimiçi araştırmada bulunan veya araştırılması gereken türlerdir. Her türün kanıt düzeyi yukarıdaki kaynaklı listede ayrı gösterilir.`,
      "Türlerin aynı kıyıda ve aynı dönemde bulunacağı varsayılmamalıdır. Güncel yasak dönemi, tür-boy-adet kuralları, su seviyesi ve yerel kararlar av öncesinde kontrol edilmelidir."
    ],
    planningNotes:[
      nearby.transport,
      nearby.accommodationOptions?.length
        ?"Konaklama kayıtlarının açık olma, rezervasyon, ücret ve kıyıya mesafe bilgisi doğrudan işletmeden doğrulanmalıdır."
        :"Kıyıya yakın doğrulanmış konaklama kaydı bulunmadığından ilçe veya il merkezi alternatifi planlanmalıdır.",
      "Harita verisi özel mülkiyet, baraj güvenlik bölgesi, içme suyu koruma alanı, milli park, sulak alan veya geçici kapatmayı gösteremeyebilir; tabela ve görevli talimatı üstündür."
    ],
    cautions:[
      "Genel su pini güvenli kıyı girişi veya araç park noktası değildir.",
      "Balık türü kanıtı av garantisi değildir; kayıt tarihi ve örnekleme alanı farklı olabilir.",
      "Kamp, ateş ve geceleme için yerel izin ve yangın kuralları ayrıca kontrol edilmelidir.",
      "Hava, su seviyesi, akıntı, zemin ve telefon kapsaması yolculuktan önce araştırılmalıdır."
    ],
    sources:[...sourceMap.values()].slice(0,10)
  };
  processed+=1;
  if(processed%10===0)console.log(`Araştırma ${processed}/${ulusalMeralar.length}: ${route.province} – ${route.name}`);
}

const meta={
  generatedAt,
  routeCount:Object.keys(research).length,
  coordinateRouteCount,
  fishEvidenceRouteCount,
  accessEvidenceRouteCount,
  providerNotes:[
    "Balık türleri için GBIF oluş kayıtları ve OpenAlex akademik yayın araması kullanıldı.",
    "Konaklama, yol, park ve hizmetler için OpenStreetMap/Overpass açık verisi kullanıldı.",
    "Doğrudan kanıt bulunmayan türler açıkça bölgesel araştırma adayı olarak işaretlendi.",
    "Hiçbir harita veya tesis kaydı kamusal erişim, izin, açıklık ya da av başarısı garantisi değildir."
  ]
};
if(meta.routeCount!==405)throw new Error(`405 araştırma kaydı beklenirken ${meta.routeCount} üretildi.`);
const output=`export const ulusalOtomatikArastirmaMeta = ${JSON.stringify(meta,null,2)};\n\nexport const ulusalOtomatikArastirma = ${JSON.stringify(research,null,2)};\n`;
await writeFile(outputFile,output,"utf8");
console.log(`Ulusal rota araştırması tamamlandı: ${meta.routeCount} rota, ${meta.fishEvidenceRouteCount} doğrudan/yakın tür kanıtı, ${meta.accessEvidenceRouteCount} erişim kaydı.`);
