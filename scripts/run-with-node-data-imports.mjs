import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const target=process.argv[2];
if(!target)throw new Error("Çalıştırılacak .mjs dosyası belirtilmedi.");

const nationalFile=path.resolve("src/data/meralar-ulusal.js");
const original=await readFile(nationalFile,"utf8");
const compatible=original.replace(
  'from "../utils/slug";',
  'from "../utils/slug.js";'
);
if(compatible===original)throw new Error("meralar-ulusal.js içindeki slug importu bulunamadı.");

await writeFile(nationalFile,compatible,"utf8");
try{
  await import(`${pathToFileURL(path.resolve(target)).href}?run=${Date.now()}`);
}finally{
  await writeFile(nationalFile,original,"utf8");
}
