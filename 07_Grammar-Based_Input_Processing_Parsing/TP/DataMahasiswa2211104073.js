import fs from 'fs';

class DataMahasiswa2211104073 {
  readJSON() {
    try {
      const data = fs.readFileSync('./tp7_1_2211104073.json', 'utf-8');
      const obj = JSON.parse(data);

      console.log(`Nama ${obj.nama} dengan nim ${obj.nim} dari fakultas ${obj.fakultas}`);
    } catch (err) {
      console.error("Gagal membaca JSON mahasiswa:", err.message);
    }
  }
}

export default DataMahasiswa2211104073;
