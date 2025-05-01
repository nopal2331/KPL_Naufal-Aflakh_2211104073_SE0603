<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**GRAMMAS BASED INPUT PROCESSING PARSING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**NAUFAL AFLAKH WIJAYANTO (2211104073)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN JSON DESERIALIZATION 1
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_1_2211104075.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ganti isi dari file json tersebut dengan detail yang benar dari praktikan.
C. Buatlah sebuah file class baru dengan nama “DataMahasiswa<2211104075_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format bebas asalkan semua nilai ditampilkan di console/output.

## A. Soal Nomor 2

MENAMBAHKAN JSON DESERIALIZATION 2
Buatlah branch baru dengan nama branch “irpan” dan checkout kesana.
A. Download file “jurnal7_2_2211104075.json” dan rename file tersebut dengan mengganti “nim”
dengan NIM praktikan kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ubah isi dari file json tersebut dengan daftar anggota kelompok (untuk tubes).
C. Buatlah sebuah file class baru dengan nama “TeamMembers<2211104075_PRAKTIKAN>”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format:
“Team member list:”
“<2211104075> <Naufal + Aflakh + Wijayanto> (<22> <L>) ”
“<2211104088> <Irfan + Muria> (<22> <L>) ”
dst.

**Input**

- jurnal7_1_2211104073

```json
{
  "nama": "Naufal Aflakh Wijayanto",
  "nim": "2211104073",
  "kelas": "SE-22",
  "hobi": ["Membaca", "Ngoding", "Bersepeda"]
}
```

- DataMahasiswa2211104073

```js
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
```

- jurnal7_2_2211104073

```json
[
  {
    "nim": "2211104073",
    "nama": "Naufal Aflakh Wijayanto",
    "angkatan": "22",
    "jenis_kelamin": "L"
  },
  {
    "nim": "2211104075",
    "nama": "Irfan Muria",
    "angkatan": "22",
    "jenis_kelamin": "L"
  }
]
```

- TeamMembers2211104073

```js
import fs from 'fs';

class TeamMembers2211104073_NaufalAflakh {
  readJSON() {
    try {
      const data = fs.readFileSync('./jurnal7_2_2211104073.json', 'utf-8');
      const team = JSON.parse(data);

      console.log("Team member list:");
      team.forEach(member => {
        console.log(`${member.nim} ${member.nama} (${member.angkatan} ${member.jenis_kelamin})`);
      });
    } catch (err) {
      console.error("Gagal membaca atau mem-parsing JSON:", err.message);
    }
  }
}

export default TeamMembers2211104073_NaufalAflakh;
```

- index

```js
import DataMahasiswa from './DataMahasiswa2211104073.js';
import TeamMembers from './TeamMembers2211104073.js';

const mahasiswa = new DataMahasiswa();
mahasiswa.readJSON();

console.log("\n---------------------------\n");

const team = new TeamMembers();
team.readJSON();
```

**Output**

=== DATA MAHASISWA ===
Nama: Naufal Aflakh Wijayanto
NIM: 2211104073
Kelas: SE-22
Hobi:
  1. Membaca
  2. Ngoding
  3. Bersepeda

---------------------------

Team member list:
2211104073 Naufal Aflakh Wijayanto (22 L)
2211104075 Irfan Muria (22 L)

---
