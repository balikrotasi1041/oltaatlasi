import { promises as fs } from "node:fs";
import path from "node:path";

const distDir=path.resolve("dist");
const outputPath=path.join(distDir,"sitemap-images.xml");
const escapeXml=(value="")=>value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");

async function walk(directory){
  const entries=await fs.readdir(directory,{withFileTypes:true});
  const files=[];
  for(const entry of entries){
    const fullPath=path.join(directory,entry.name);
    if(entry.isDirectory())files.push(...await walk(fullPath));
    else if(entry.isFile()&&entry.name.endsWith(".html"))files.push(fullPath);
  }
  return files;
}

const readMeta=(html,property)=>{
  const patterns=[
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["'][^>]*>`,"i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["'][^>]*>`,"i")
  ];
  for(const pattern of patterns){const match=html.match(pattern);if(match)return match[1];}
  return "";
};
const readCanonical=html=>{
  const patterns=[
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i
  ];
  for(const pattern of patterns){const match=html.match(pattern);if(match)return match[1];}
  return "";
};
const isNoindex=(html)=>/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)
  || /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(html);

let files=[];
try{files=await walk(distDir);}catch(error){console.error("dist klasörü bulunamadı. Önce astro build çalıştırılmalı.");process.exit(1);}
const records=[];
for(const file of files){
  const html=await fs.readFile(file,"utf8");
  if(isNoindex(html))continue;
  const loc=readCanonical(html);
  const image=readMeta(html,"og:image");
  if(!loc||!image||!loc.startsWith("https://oltaatlasi.com/"))continue;
  records.push({loc,image,title:readMeta(html,"og:title"),caption:readMeta(html,"og:description")});
}
const unique=[...new Map(records.map(record=>[`${record.loc}|${record.image}`,record])).values()].sort((a,b)=>a.loc.localeCompare(b.loc,"tr"));
const body=unique.map(record=>`  <url>\n    <loc>${escapeXml(record.loc)}</loc>\n    <image:image>\n      <image:loc>${escapeXml(record.image)}</image:loc>${record.title?`\n      <image:title>${escapeXml(record.title)}</image:title>`:""}${record.caption?`\n      <image:caption>${escapeXml(record.caption)}</image:caption>`:""}\n    </image:image>\n  </url>`).join("\n");
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`;
await fs.writeFile(outputPath,xml,"utf8");
console.log(`${unique.length} görsel sitemap kaydı üretildi: ${outputPath}`);
