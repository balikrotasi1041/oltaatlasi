import { meralar as temelMeralar } from "./meralar";
import { gunlukMeralar } from "./meralar-gunluk";
import { meralar20260730 } from "./meralar-2026-07-30";

export const meralar = [...temelMeralar, ...gunlukMeralar, ...meralar20260730];
export const provinces = [...new Set(meralar.map((mera) => mera.province))].sort((a,b)=>a.localeCompare(b,"tr"));
export const districtsByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.district))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const fishOptions = [...new Set(meralar.flatMap((mera) => mera.fish))].sort((a,b)=>a.localeCompare(b,"tr"));
export const zonesByProvince = Object.fromEntries(provinces.map((province) => [province, [...new Set(meralar.filter((m)=>m.province===province).map((m)=>m.zone))].sort((a,b)=>a.localeCompare(b,"tr"))]));
export const districtRouteCounts = Object.fromEntries(
  provinces.flatMap((province) => (districtsByProvince[province] || []).map((district: string) => [
    `${province}|${district}`,
    meralar.filter((m) => m.province === province && m.district === district).length,
  ]))
);
