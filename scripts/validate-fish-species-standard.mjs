import { baliklar } from "../src/data/content-katalogu.ts";
import { balikTurDetaylari } from "../src/data/balik-tur-detaylari.ts";

const errors=[];
const expectedFields=["identity","diet","feeding","teeth","tackle","handling","bones"];
const slugs=new Set(baliklar.map((fish)=>fish.slug));
if(slugs.size!==baliklar.length)errors.push("Tür slug'ları tekil değil.");
for(const fish of baliklar){
  const detail=balikTurDetaylari[fish.slug];
  if(!detail){errors.push(`${fish.slug}: ayrıntı profili eksik.`);continue;}
  for(const field of expectedFields)if(typeof detail[field]!=="string"||detail[field].trim().length<30)errors.push(`${fish.slug}: ${field} kısa veya eksik.`);
  if(!Array.isArray(detail.dishes))errors.push(`${fish.slug}: yemek listesi dizi olmalı.`);
  if(!detail.biologySource?.url?.startsWith("https://")||!detail.biologySource?.label||!detail.biologySource?.note)errors.push(`${fish.slug}: kapsamı açıklanmış HTTPS tür kaynağı eksik.`);
  if(!fish.habitat||!fish.methods?.length||!fish.baits?.length)errors.push(`${fish.slug}: temel habitat/yöntem/yem eksik.`);
}
for(const slug of Object.keys(balikTurDetaylari))if(!slugs.has(slug))errors.push(`${slug}: sayfası olmayan profil.`);
for(const group of ["istavrit","kefal","alabalik"])if(!/birden fazla|tek tür adı değildir/.test(balikTurDetaylari[group]?.identity||""))errors.push(`${group}: ortak ad uyarısı eksik.`);
if(errors.length){console.error(errors.join("\n"));process.exitCode=1;}
else console.log(`[fish-species-standard] OK: ${baliklar.length} tür sayfasında kimlik, beslenme, diş, takım, güvenlik, kılçık, yemek ve kaynak kapsamı mevcut.`);
