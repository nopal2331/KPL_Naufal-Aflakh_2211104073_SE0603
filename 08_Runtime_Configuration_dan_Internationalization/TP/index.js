const readline = require('readline-sync');
const CovidConfig = require('./CovidConfig');

const configInstance = new CovidConfig();
const config = configInstance.getConfig();

console.log(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}`);
const suhu = parseFloat(readline.question('> '));

console.log('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman?');
const hari = parseInt(readline.question('> '));

let suhuNormal = false;

if (config.satuan_suhu === "celcius") {
  suhuNormal = suhu >= 36.5 && suhu <= 37.5;
} else if (config.satuan_suhu === "fahrenheit") {
  suhuNormal = suhu >= 97.7 && suhu <= 99.5;
}

const demamAman = hari < config.batas_hari_deman;

if (suhuNormal && demamAman) {
  console.log(config.pesan_diterima);
} else {
  console.log(config.pesan_ditolak);
}

configInstance.ubahSatuan();
console.log(`Satuan suhu diubah menjadi: ${configInstance.getConfig().satuan_suhu}`);
