import fs from 'fs';

class KuliahMahasiswa2211104073 {
  readJSON() {
    try {
      const data = fs.readFileSync('./tp7_2_2211104073.json', 'utf-8');
      const mataKuliah = JSON.parse(data);

      console.log("Daftar mata kuliah yang diambil:");
      mataKuliah.forEach((mk, index) => {
        console.log(`MK ${index + 1} ${mk.nama} - ${mk.nama}`);
      });
    } catch (err) {
      console.error("Gagal membaca JSON mata kuliah:", err.message);
    }
  }
}

export default KuliahMahasiswa2211104073;
