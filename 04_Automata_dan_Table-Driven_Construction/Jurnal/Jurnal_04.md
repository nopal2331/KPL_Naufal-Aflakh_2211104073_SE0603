<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL IV**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

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
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

MENAMBAHKAN KODE DENGAN TEKNIK TABLE-DRIVEN
Dari project yang sudah dibuat sebelumnya:
Dari project yang sudah dibuat sebelumnya:
A. Buatlah sebuah class bernama “KodeBuah”.
B. Pada class tersebut, tambahkan sebuah method dengan nama “getKodeBuah” yang mengembalikan kode buah dari tabel yang diberikan di bawah ini.
C. Setelah method ditambahkan, panggil method tersebut pada class utama/main.

**Input**

- kodeBuah

```js
class KodeBuah {
  constructor() {
    this.tabelKode = {
      "Apel": "A00",
      "Aprikot": "B00",
      "Alpukat": "C00",
      "Pisang": "D00",
      "Paprika": "E00",
      "Blackberry": "F00",
      "Ceri": "H00",
      "Kelapa": "I00",
      "Jagung": "J00",
      "Kurma": "K00",
      "Durian": "L00",
      "Anggur": "M00",
      "Melon": "N00",
      "Semangka": "O00"
    };
  }

  getKodeBuah(namaBuah) {
    return this.tabelKode[namaBuah] || "Kode tidak ditemukan";
  }
}

module.exports = KodeBuah;
```

- index

```js
const KodeBuah = require('./KodeBuah');

const kodeBuah = new KodeBuah();

const buah = "Pisang";
console.log(`Kode buah untuk ${buah} adalah: ${kodeBuah.getKodeBuah(buah)}`);
```

## A. Soal Nomor 2

  MENAMBAHKAN KODE DENGAN TEKNIK STATE-BASED CONSTRUCTION
  Pada folder project yang sama:
  A. Buatlah sebuah class bernama “PosisiKarakterGame”
  B. Tambahkan implementasi yang menerapkan kasus di bawah ini menggunakan teknik state-based construction (asumsikan state awal adalah berdiri):
  C. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM
  D. Berikan implementasi tambahkan berdasarkan hasil mod dari NIM

  1. NIM % 3 == 0:

  - Pada saat TombolS ditekan, maka akan ada output “tombol arah bawah ditekan”
  - Pada saat TombolW ditekan, maka akan ada output “tombola rah atas ditekan”

  2. NIM % 3 == 1:

  - Pada saat state berubah ke “Berdiri”, akan ada output “posisi standby”
  - Pada saat state berubah ke “Tengkurap”, akan ada output “posisi istirahat”

  3. NIM % 3 == 2:

  - Pada saat state berubah dari “Terbang” ke “Jongkok”, ada output “posisi landing”
  - Pada saat state berubah dari “Berdiri” ke “Terbang”, ada output “posisi take off”

  E. Tambahkan kode implementasi yang memanggil/mensimulasi perubahan state di class utama atau
  method main:

  1. Pastikan semua perubahan state disimulasikan
  2. Pastikan semua ouput yang ada di bagian C dapat dihasilkan pada saat run

**Input**

- posisiKarakterGame

```js
class PosisiKarakterGame {
  constructor(nim) {
    this.state = "Berdiri";
    this.nim = nim;
    this.mod = nim % 3;
  }

  tekanTombol(tombol) {
    if (this.mod === 0) {
      if (tombol === 'S') {
        console.log("tombol arah bawah ditekan");
      } else if (tombol === 'W') {
        console.log("tombola rah atas ditekan");
      }
    }
  }

  ubahPosisi(posisiBaru) {
    const posisiLama = this.state;
    this.state = posisiBaru;

    if (this.mod === 1) {
      if (posisiBaru === "Berdiri") {
        console.log("posisi standby");
      } else if (posisiBaru === "Tengkurap") {
        console.log("posisi istirahat");
      }
    }

    if (this.mod === 2) {
      if (posisiLama === "Terbang" && posisiBaru === "Jongkok") {
        console.log("posisi landing");
      } else if (posisiLama === "Berdiri" && posisiBaru === "Terbang") {
        console.log("posisi take off");
      }
    }
  }
}

module.exports = PosisiKarakterGame;
```

- index

```js
const PosisiKarakterGame = require('./posisiKarakterGame');

const nim = 2211104073;
const karakter = new PosisiKarakterGame(nim);

console.log(`NIM: ${nim}, NIM % 3 = ${nim % 3}`);


if (nim % 3 === 0) {
  karakter.tekanTombol('S'); 
  karakter.tekanTombol('W');

} else if (nim % 3 === 1) {
  karakter.ubahPosisi("Tengkurap");
  karakter.ubahPosisi("Berdiri");   

} else if (nim % 3 === 2) {
  karakter.ubahPosisi("Terbang"); 
  karakter.ubahPosisi("Jongkok"); 
  karakter.ubahPosisi("Berdiri");  
  karakter.ubahPosisi("Terbang");  
}
```

**Output**

NIM: 2211104073, NIM % 3 = 0
tombol arah bawah ditekan
tombola rah atas ditekan

---
