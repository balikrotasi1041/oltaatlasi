import { spawnSync } from "node:child_process";

const steps=[
  ["validate:data",["run","validate:data"]],
  ["validate:research",["run","validate:research"]],
  ["generate:robots",["run","generate:robots"]],
  ["astro check",["exec","astro","check"]],
  ["astro build",["exec","astro","build"]],
  ["generate:image-sitemap",["run","generate:image-sitemap"]],
  ["validate:index-policy",["run","validate:index-policy"]],
];
const esc=(s)=>String(s).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A");
for(const [name,args] of steps){
  const command=args[0]==="exec"?"npx":"npm";
  const commandArgs=args[0]==="exec"?args.slice(1):args;
  const result=spawnSync(command,commandArgs,{encoding:"utf8",stdio:["ignore","pipe","pipe"],env:process.env});
  process.stdout.write(result.stdout||"");
  process.stderr.write(result.stderr||"");
  if(result.status!==0){
    const detail=((result.stderr||"")+"\n"+(result.stdout||"")).slice(-3500);
    console.error(`::error file=package.json,line=1,title=Build diagnostic (${esc(name)})::${esc(detail)}`);
    process.exit(result.status||1);
  }
}
