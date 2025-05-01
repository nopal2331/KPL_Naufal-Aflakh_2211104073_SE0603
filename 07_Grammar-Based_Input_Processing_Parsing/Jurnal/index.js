import DataMahasiswa from './DataMahasiswa2211104073.js';
import TeamMembers from './TeamMembers2211104073.js';

const mahasiswa = new DataMahasiswa();
mahasiswa.readJSON();

console.log("\n---------------------------\n");

const team = new TeamMembers();
team.readJSON();
