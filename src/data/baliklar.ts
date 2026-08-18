export type { Balik } from "./baliklar-base";
import { baliklar as baseBaliklar } from "./baliklar-base";

export const balikContentUpdatedAt = "2026-08-18";

const realImageBySlug: Record<string, string> = {
  istavrit: "/images/baliklar/real/istavrit.webp",
  sazan: "/images/baliklar/real/sazan.webp",
  kefal: "/images/baliklar/real/kefal.webp",
  levrek: "/images/baliklar/real/levrek.webp",
  turna: "/images/baliklar/real/turna.webp",
  izmarit: "/images/baliklar/real/izmarit.webp",
  zargana: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Garfish.jpg",
  mezgit: "/images/baliklar/real/mezgit.webp",
  kizilkanat: "https://upload.wikimedia.org/wikipedia/commons/4/41/Scardinius_erythropthalmus_2009_G1.jpg",
  cipura: "/images/baliklar/real/cipura.webp",
  lufer: "/images/baliklar/real/lufer.webp",
  palamut: "/images/baliklar/real/palamut.webp",
  karagoz: "/images/baliklar/real/karagoz.webp",
  eskina: "/images/baliklar/real/eskina.webp",
  yayin: "/images/baliklar/real/yayin.webp",
  sudak: "https://upload.wikimedia.org/wikipedia/commons/6/63/Sander_lucioperca_1.jpg",
  "tatli-su-levregi": "https://upload.wikimedia.org/wikipedia/commons/0/06/Perch_fish.jpg",
  alabalik: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Salmo_trutta.jpg",
  barbun: "/images/baliklar/real/barbun.webp",
  kolyoz: "/images/baliklar/real/kolyoz.webp",
};

export const baliklar = baseBaliklar.map((balik) => ({
  ...balik,
  image: realImageBySlug[balik.slug] ?? balik.image,
}));
