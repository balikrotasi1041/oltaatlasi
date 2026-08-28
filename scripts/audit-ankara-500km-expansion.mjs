import { readFileSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";
import { ankara500KmCandidates, ankara500KmExpansionMeta, yeniMeralarAnkara500Km20260817 } from "../src/data/meralar-ankara-500km-2026-08-17.ts";

const errors=[];
const prefix="ankara-500km-";
const activeRoutes=meralar.filter((route)=>route.slug.startsWith(prefix));
const olderRoutes=meralar.filter((route)=>!route.slug.startsWith(prefix));
const baselineRoutes=yeniMeralarAnkara500Km20260817;
const expectedProvinces=ankara500KmExpansionMeta.includedProvinces.map((item)=>item.name);
const normalize=(value="")=>String(value).toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i").replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
const generic=new Set("baraj baraji cayi dere deresi gol golu golet goleti irmak nehri su suyu kiyisi kuzey guney dogu bati genel".split(" "));
const identity=(route)=>normalize(route.name).split(/\s+/).filter((token)=>token.length>2&&!generic.has(token)).sort().join("|");
const duplicate=(values)=>[...new Set(values.filter((value,index)=>values.indexOf(value)!==index))];
const banned=/ön değerlendirme|\btaslak\b|pilot veri/i;

if(expectedProvinces.length!==58)errors.push(`Kapsam il sayısı 58 yerine ${expectedProvinces.length}.`);
if(new Set(expectedProvinces).size!==expectedProvinces.length)errors.push("Kapsam listesinde yinelenen il var.");
if(ankara500KmCandidates.length!==870)errors.push(`Ham aday sayısı 870 yerine ${ankara500KmCandidates.length}.`);
if(baselineRoutes.length!==870)errors.push(`17 Ağustos temel paket rota sayısı 870 yerine ${baselineRoutes.length}.`);
if(activeRoutes.length!==870)errors.push(`Aktif veri kümesindeki Ankara-500 km rota sayısı 870 yerine ${activeRoutes.length}.`);
if(duplicate(activeRoutes.map((route)=>route.slug)).length)errors.push("Aktif Ankara-500 km kayıtlarında yinelenen slug var.");
if(duplicate(activeRoutes.map((route)=>`${route.province}|${normalize(route.name)}`)).length)errors.push("Aktif Ankara-500 km kayıtlarında aynı ilde yinelenen su/rota adı var.");

for(const item of ankara500KmExpansionMeta.includedProvinces){
  if(item.minBoundaryDistanceKm>500)errors.push(`${item.name}: il sınırı mesafesi 500 km dışında (${item.minBoundaryDistanceKm}).`);
  const count=activeRoutes.filter((route)=>route.province===item.name).length;
  if(count!==15)errors.push(`${item.name}: ${count}/15 aktif rota.`);
}
for(const item of ankara500KmExpansionMeta.excludedNearest)if(item.minBoundaryDistanceKm<=500)errors.push(`${item.name}: kapsam dışı olduğu hâlde sınır mesafesi ${item.minBoundaryDistanceKm} km.`);

// 17 Ağustos paketinin tarihsel bütünlüğünü kaynak dizisinde denetle. Daha sonraki günlük kalite yamaları
// aktif rota üzerinde confidence ve araştırma tarihini yükseltebilir; audit bunları geriye D'ye zorlamamalıdır.
for(const route of baselineRoutes){
  if(route.publishedAt!=="2026-08-17"||route.updatedAt!=="2026-08-17"||route.researchedAt!=="2026-08-17")errors.push(`${route.slug}: temel paket tarih alanları 17 Ağustos ile uyuşmuyor.`);
  if(route.confidence!=="D"||route.confidenceProfile?.overall!=="D")errors.push(`${route.slug}: temel paket Güven D değil.`);
  if(route.confidenceProfile?.legal.level!=="unverified"||route.confidenceProfile?.access.level!=="unverified"||route.confidenceProfile?.species.level!=="unverified"||route.confidenceProfile?.field.level!=="unverified")errors.push(`${route.slug}: temel paket kanıt boyutları ihtiyatlı sınıflandırılmamış.`);
  if(route.locationPrecision!=="Genel bölge")errors.push(`${route.slug}: temel paket konum hassasiyeti Genel bölge değil.`);
}

const olderExact=new Set(olderRoutes.map((route)=>`${route.province}|${normalize(route.name)}`));
const olderIdentity=new Set(olderRoutes.map((route)=>`${route.province}|${identity(route)}`).filter((value)=>!value.endsWith("|")));
for(const route of activeRoutes){
  const text=JSON.stringify(route);
  if(olderExact.has(`${route.province}|${normalize(route.name)}`))errors.push(`${route.slug}: mevcut rota adıyla birebir çakışıyor.`);
  if(olderIdentity.has(`${route.province}|${identity(route)}`))errors.push(`${route.slug}: mevcut su kimliğiyle olası tekrar.`);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route.slug))errors.push(`${route.slug}: canonical slug biçimi geçersiz.`);
  if(!["A","B","C","D"].includes(route.confidence)||route.confidenceProfile?.overall!==route.confidence)errors.push(`${route.slug}: aktif confidence/profile uyumsuz.`);
  if(route.locationPrecision!=="Genel bölge")errors.push(`${route.slug}: konum hassasiyeti Genel bölge değil.`);
  const hasCoordinates=Number.isFinite(route.lat)&&Number.isFinite(route.lng);
  if(hasCoordinates&&(route.lat<34.5||route.lat>43.5||route.lng<24.5||route.lng>46.5))errors.push(`${route.slug}: koordinat Türkiye sınır kutusu dışında.`);
  if(!hasCoordinates&&!/koordinat üretilmedi|tek nokta bulunmadığından/i.test(`${route.navigationNote} ${route.transport}`))errors.push(`${route.slug}: belirsiz koordinat açıklaması eksik.`);
  if((route.sources?.length||0)<4||new Set(route.sources.map((source)=>source.url)).size<4)errors.push(`${route.slug}: en az dört bağımsız kaynak/araştırma kanalı yok.`);
  const maps=route.sources.find((source)=>/google maps/i.test(source.label));
  if(!maps||!/ikincil|resmî gerçek/i.test(maps.note))errors.push(`${route.slug}: Maps/kullanıcı içeriği ikincil kanıt olarak açıklanmamış.`);
  if(!route.sources.some((source)=>/tarimorman\.gov\.tr|cbs1\.tarimorman\.gov\.tr/i.test(source.url)))errors.push(`${route.slug}: resmî Tarım ve Orman kaynağı yok.`);
  if(!route.sources.some((source)=>/openstreetmap\.org|\.gov\.tr|\.bel\.tr/i.test(source.url)))errors.push(`${route.slug}: su kimliği için birincil/açık harita kaynağı yok.`);
  if(route.fish.length<1||route.methods.length<1||route.baits.length<1)errors.push(`${route.slug}: tür/yöntem/yem bağlamı eksik.`);
  if(route.fishEvidence.length!==route.fish.length)errors.push(`${route.slug}: tür kanıtı sayısı tür listesiyle uyuşmuyor.`);
  if(route.confidence==="D"&&route.fishEvidence.some((item)=>!/olasılık/i.test(`${item.evidenceLevel} ${item.note}`)))errors.push(`${route.slug}: Güven D tür olasılık kanıtı açık sınıflandırılmamış.`);
  if(route.transport.length<90||route.shoreProfile.length<100||route.cautions.length<3)errors.push(`${route.slug}: ulaşım/kıyı/risk içeriği kalite eşiğini karşılamıyor.`);
  if(!route.accessEvidence?.length||!route.accommodationOptions?.length)errors.push(`${route.slug}: erişim veya konaklama bağlamı eksik.`);
  if(banned.test(text))errors.push(`${route.slug}: kullanıcı yüzünde kullanılmaması gereken ifade içeriyor.`);
  if(route.image!==`/images/meralar/ulusal/${route.slug}.svg`||route.socialImage!==route.image)errors.push(`${route.slug}: üretilen görsel/canonical kimliği uyuşmuyor.`);
}

for(const candidate of ankara500KmCandidates){
  if(!["osm","official"].includes(candidate.origin))errors.push(`${candidate.province}/${candidate.name}: kaynak sınıfı geçersiz.`);
  if(candidate.origin==="osm"&&!/topluluk haritası|kamusal kıyı/i.test(candidate.sourceNote))errors.push(`${candidate.province}/${candidate.name}: OSM kanıt sınırı açıklanmamış.`);
  if(candidate.origin==="official"&&!/resmî|DSİ|Valili|Müdürlüğü|Bakanlığı/i.test(`${candidate.sourceLabel} ${candidate.sourceNote}`))errors.push(`${candidate.province}/${candidate.name}: resmî kaynak etiketi belirsiz.`);
  if(candidate.officialWaterMatch){
    const route=activeRoutes.find((item)=>item.province===candidate.province&&item.name===candidate.name);
    if(!/^https:\/\/cbs1\.tarimorman\.gov\.tr\/server\/rest\/services\/TATUS\/MapServer\/(6|7|8)$/.test(candidate.officialWaterMatch.sourceUrl))errors.push(`${candidate.province}/${candidate.name}: resmî su katmanı URL'si geçersiz.`);
    if(!route?.sources.some((source)=>source.url===candidate.officialWaterMatch.sourceUrl&&/TATUS/.test(source.label)))errors.push(`${candidate.province}/${candidate.name}: resmî su katmanı rota kaynaklarına taşınmamış.`);
  }
}

const auditDoc=readFileSync("docs/ankara-500km-avlak-audit-2026-08-17.md","utf8");
for(const province of expectedProvinces)if(!auditDoc.includes(`| ${province} |`))errors.push(`${province}: audit tablosunda yok.`);
for(const phrase of ["58 il × 15 kayıt = 870","Toplam: **870/870**","İl merkezi veya il centroidi tek başına ölçüt alınmadı"])if(!auditDoc.includes(phrase))errors.push(`Audit belgesinde beklenen açıklama yok: ${phrase}`);

const officialIdentity=ankara500KmCandidates.filter((candidate)=>candidate.origin==="official").length;
const osmIdentity=ankara500KmCandidates.length-officialIdentity;
const officialWaterLayerMatches=ankara500KmCandidates.filter((candidate)=>candidate.officialWaterMatch).length;
const unresolved=activeRoutes.filter((route)=>!Number.isFinite(route.lat)||!Number.isFinite(route.lng)).length;
const upgraded=activeRoutes.filter((route)=>route.confidence!=="D").length;
console.log(`Ankara 500 km genişleme auditi: temel paket 870/870 ve Güven D tarihsel olarak korundu; aktif veri 58/58 il, 870/870 rota; ${upgraded} rota sonraki kanıtlarla C+; kimlik kaynakları ${officialIdentity} doğrudan resmî + ${osmIdentity} OSM, ayrıca ${officialWaterLayerMatches} TATUS su katmanı eşleşmesi; ${unresolved} koordinatsız Genel bölge kaydı; ${errors.length} hata.`);
for(const error of errors.slice(0,250))console.error(`HATA: ${error}`);
if(errors.length>250)console.error(`HATA: ${errors.length-250} ek hata daha var.`);
if(errors.length)process.exit(1);