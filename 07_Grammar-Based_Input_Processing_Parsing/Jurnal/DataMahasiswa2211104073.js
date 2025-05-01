import fs from 'fs';

class DataMahasiswa2211104073_NaufalAflakh {
  readJSON() {
    try {
      const data = fs.readFileSync('./jurnal7_1_2211104073.json', 'utf-8');
      const obj = JSON.parse(data);

      console.log("=== DATA MAHASISWA ===");
      console.log(`Nama: ${obj.nama}`);
      console.log(`NIM: ${obj.nim}`);
      console.log(`Kelas: ${obj.kelas}`);
      console.log("Hobi:");
      obj.hobi.forEach((h, i) => console.log(`  ${i + 1}. ${h}`));
    } catch (err) {
      console.error("Gagal membaca atau mem-parsing JSON:", err.message);
    }
  }
}

export default DataMahasiswa2211104073_NaufalAflakh;
