const GENERIC_ROUTE_TOKENS=new Set([
  "balik","baraj","golu","goleti","nehri","cayi","deresi","irmagi","sahili","kiyisi","hatti",
]);

export const normalizeResearchText=(value="")=>String(value)
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i")
  .replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();

export const meaningfulRouteTokens=(route)=>normalizeResearchText(route?.name)
  .split(" ")
  .filter((token)=>token.length>3&&!GENERIC_ROUTE_TOKENS.has(token));

export const academicEvidenceMatchesRoute=(route,evidence)=>{
  if(!/rota adıyla eşleşen akademik yayın/i.test(evidence?.evidenceLevel||""))return true;
  const tokens=meaningfulRouteTokens(route);
  if(!tokens.length)return false;
  const haystack=normalizeResearchText(`${evidence?.sourceLabel||""} ${evidence?.note||""}`);
  const required=tokens.length<=1?1:Math.min(2,tokens.length);
  return tokens.filter((token)=>haystack.includes(token)).length>=required;
};
