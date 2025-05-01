import DataMahasiswa from './DataMahasiswa2211104073.js';
import KuliahMahasiswa from './KuliahMahasiswa2211104073.js';

const data = new DataMahasiswa();
data.readJSON();

console.log('\n---------------------\n');

const kuliah = new KuliahMahasiswa();
kuliah.readJSON();
