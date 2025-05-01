const KodePos = require('./KodePos');
const DoorMachine = require('./DoorMachine');

const kodePos = new KodePos();

const kecamatan = "Purwokerto Utara";
const hasil = kodePos.getKodePos(kecamatan);

console.log("\n=== Simulasi DoorMachine ===");
const pintu = new DoorMachine();          
pintu.ubahState("Terbuka");             
pintu.ubahState("Terkunci"); 

console.log(`Kode pos untuk ${kecamatan} adalah: ${hasil}`);
console.log("Kode pos tidak ditemukan");
console.log("Pintu tidak terkunci"); 
