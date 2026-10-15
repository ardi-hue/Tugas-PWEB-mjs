console.info("- Jadwal Mapel Hari Selasa ");

import {mapelHariSelasa} from  './config.mjs';
const mapel = mapelHariSelasa();

console.log("Jam 1 :", mapelHariSelasa().jam1());
console.log("Jam 2 :", mapelHariSelasa().jam2());
console.log("Jam 3 :", mapelHariSelasa().jam3());
console.log("Jam 4 :", mapelHariSelasa().jam4());
console.log("Jam 5 :", mapelHariSelasa().jam5());

console.info("- Rumus Bangun Datar");

import {rumusBangunDatar} from './config.mjs';
const rumus = rumusBangunDatar();

console.log("Luas Persegi = ", rumus[0](8));
console.log("Luas Persegi Panjang = ", rumus[1](8, 4) );
console.log("Luas Segitiga = ", rumus[2](12, 7) );
console.log("Luas Lingkaran = ", rumus[3](14) );
console.log("Luas Jajar Genjang = ", rumus[4](9,6) );
