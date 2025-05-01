<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL V**  
**GENERICS**

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

MENAMBAHKAN METHOD DENGAN GENERIC
Tanpa membuat file baru (gunakan file yang dibuat saat membuat project):
A. Buatlah sebuah class bernama “Penjumlahan”.
B. Pada class tersebut, tambahkan sebuah method dengan nama “JumlahTigaAngka” yang
memiliki tiga parameter generic yang sama yaitu “T”
C. Method tersebut dapat melakukan penjumalahan dari tiga input/argument yang diberikan pada
method tersebut.
D. Hint: gunakan variable sementara dengan tipe data dynamic untuk memungkinkan operasi
matematis misalnya penjumlahan.
E. Panggil method tersebut pada fungsi/method utama dengan tiga input angka yaitu 2-digit dari
NIM. Misalnya NIM 12345678, maka tiga input angka yaitu “12”, “34” dan “56” dengan tipe data
sebagai berikut:
i. NIM berakhiran 1 atau 2: tipe data input float
ii. NIM berakhiran 3, 4 atau 5: tipe data input double
iii. NIM berakhiran 6, 7 atau 8: tipe data input int
iv. NIM berakhiran 9 atau 0: tipe data input long

**Input**

- penjumlahan

```js
class Penjumlahan {
  static JumlahTigaAngka(a, b, c) {
    let temp = a + b + c;
    return temp;
  }
}

function main() {
  const nim = 2211104073;

  const nimStr = nim.toString();
  const angka1 = parseInt(nimStr.slice(0, 2)); 
  const angka2 = parseInt(nimStr.slice(2, 4)); 
  const angka3 = parseInt(nimStr.slice(4, 6)); 

  const lastDigit = nim % 10;
  let result;
  let tipe = "";

  if (lastDigit === 1 || lastDigit === 2) {
    result = Penjumlahan.JumlahTigaAngka(
      parseFloat(angka1),
      parseFloat(angka2),
      parseFloat(angka3)
    );
    tipe = "float";
  } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    result = Penjumlahan.JumlahTigaAngka(
      parseFloat(angka1),
      parseFloat(angka2),
      parseFloat(angka3)
    );
    result = result.toFixed(2);
    tipe = "double";
  } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    result = Penjumlahan.JumlahTigaAngka(
      parseInt(angka1),
      parseInt(angka2),
      parseInt(angka3)
    );
    tipe = "int";
  } else if (lastDigit === 9 || lastDigit === 0) {
    result = Penjumlahan.JumlahTigaAngka(
      Number(angka1),
      Number(angka2),
      Number(angka3)
    );
    tipe = "long";
  }

  console.log(`Tipe data yang digunakan: ${tipe}`);
  console.log(`Angka yang dijumlahkan: ${angka1}, ${angka2}, ${angka3}`);
  console.log(`Hasil penjumlahan: ${result}`);
}

main();

  ```

## A. Soal Nomor 2

MENAMBAHKAN METHOD DENGAN GENERIC
Tanpa membuat file baru (gunakan file yang dibuat saat membuat project dan pastikan branch
aktif adalah pada branch implementasi-generic-class):
A. Buatlah sebuah class bernama “SimpleDataBase” dengan mengikuti class model yang
ditunjukkan pada gambar/tabel di bawah ini.
SimpleDataBase

(-) storedData: List (T)
(-) inputDates: List (Date)

(+) SimpleDataBase()
(+) AddNewData(T)
(+) PrintAllData(): void

B. Class tersebut memiliki dua property yaitu:
i. Property “storedData” yang merupakan suatu List (struktur data bawaan/default) yang
berisi data bertipe generic “T”.
ii. Property “inputDates” yang bertipe List<Date> (atau tipe data List<DateTime> di C#) yang
akan list dari waktu input.
C. Class tersebut juga memiliki beberapa method yaitu:
i. Konstruktor SimpleDataBase() yang akan membuat property “storedData” berisi List
kosong.
ii. Method AddNewData(T) yang akan menambahkan data baru bertipe T ke dalam list
“storedData” dan waktu saat itu (Now) ke dalam list “inputDates”.
iii. Method PrintAllData() yang akan memberikan output console berupa teks yang
menampilkan seluruh data yang tersimpan pada “storedData” dan “inputDates”, contohnya:
• Data 1 berisi: 12, yang disimpan pada waktu UTC: 3/10/2022 5:32:01 AM
• Data 2 berisi: 34, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
• Data 2 berisi: 56, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
D. Panggil method PrintAllData() pada fungsi/method utama setelah menambahkan

**Input**

- simpleDatabase

```js
class SimpleDataBase {
  constructor() {
    this.storedData = [];  
    this.inputDates = [];  
  }

  AddNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date());
  }

  PrintAllData() {
    for (let i = 0; i < this.storedData.length; i++) {
      console.log(
        `Data ${i + 1} berisi: ${this.storedData[i]}, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()}`
      );
    }
  }
}

function main() {
  const db = new SimpleDataBase();

  db.AddNewData(22);
  db.AddNewData(11);
  db.AddNewData(40);

  db.PrintAllData();
}

main();
  ```
