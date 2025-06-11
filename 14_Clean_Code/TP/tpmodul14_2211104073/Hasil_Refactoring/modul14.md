# Refactoring Kode: Implementasi Clean Code
## Pendahuluan
Pada tugas ini, saya melakukan **refactoring** terhadap kode JavaScript yang sebelumnya tidak rapi, untuk mengikuti standar penulisan kode yang lebih baik. Refactoring bertujuan untuk meningkatkan **keterbacaan** kode, mengikuti **penamaan konvensi** yang konsisten, serta memperbaiki **indentasi** dan **struktur kode**. Kode yang dipilih berasal dari tugas sebelumnya yang melibatkan penyapaan user.

### Kode Asli yang Tidak Rapi
Kode asli yang digunakan sebagai referensi adalah sebagai berikut:
```javascript
class HaloGeneric{
SapaUser(user){console.log(`Halo user ${user}`);}
}

function main(){const halo = new HaloGeneric();const namaPanggilan="Naufal";halo.SapaUser(namaPanggilan);}

main();
```

# Refactoring Kode JavaScript

## Masalah dalam Kode Asli

Berikut adalah beberapa masalah yang ditemukan pada kode asli yang membuatnya kurang terstruktur dan sulit dibaca:

### 1. Penamaan Tidak Konsisten
Nama method `SapaUser` tidak mengikuti konvensi **camelCase** yang umumnya digunakan dalam penamaan method di JavaScript. Sesuai konvensi, method seharusnya dinamakan dengan huruf pertama kecil, yaitu `sapaUser`.

### 2. Indentasi yang Tidak Teratur
Kode tidak memiliki indentasi yang jelas antara deklarasi kelas dan method. Tidak ada pemisahan yang baik antara bagian-bagian kode, yang membuatnya lebih sulit untuk dibaca dan dipahami.

### 3. Kurangnya Spasi
Penulisan kode terlalu rapat tanpa adanya **spasi** yang memadai. Spasi yang kurang dapat mengurangi keterbacaan kode, membuat pengembang lain sulit untuk memahaminya dengan cepat.

### 4. Tidak Ada Komentar
Kode tidak memiliki **komentar** untuk menjelaskan fungsionalitas bagian-bagian kode. Komentar penting untuk memberikan konteks dan menjelaskan apa yang dilakukan oleh bagian-bagian tertentu dari kode.

---

## Tujuan Refactoring

Refactoring dilakukan untuk memperbaiki masalah-masalah di atas dan untuk menjadikan kode lebih terstruktur, konsisten, dan mudah dipahami. Berikut adalah tujuan dari refactoring yang dilakukan:

### 1. Menggunakan **camelCase** untuk Penamaan Method dan Variabel
Mengikuti standar penamaan **camelCase** untuk konsistensi dan keterbacaan yang lebih baik.

### 2. Menambahkan Indentasi yang Benar
Memastikan indentasi yang benar untuk setiap blok kode agar kode lebih terstruktur dan mudah dibaca.

### 3. Menambahkan Komentar
Menambahkan komentar untuk menjelaskan tujuan dari masing-masing bagian kode, agar pengembang lain dapat memahami kode dengan cepat dan jelas.

### 4. Menggunakan Struktur yang Lebih Rapi dan Pemisahan Logika
Memisahkan logika menjadi bagian-bagian yang lebih terorganisir untuk menjaga kode tetap modular dan mudah dikembangkan di masa depan.

---

## Hasil Refactoring

Berikut adalah kode yang telah **refactor** untuk mengikuti standar kode yang lebih baik:

```javascript
// Class untuk menyapa user
class HaloGeneric {
  /**
   * Method untuk menyapa user berdasarkan nama yang diberikan
   * @param {string} user - Nama user yang akan disapa
   */
  sapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

// Fungsi utama untuk menjalankan aplikasi
function main() {
  // Mendeklarasikan nama panggilan user
  const namaPanggilan = "Naufal";
  
  // Membuat instance dari HaloGeneric
  const halo = new HaloGeneric();

  // Menyapa user
  halo.sapaUser(namaPanggilan);
}

// Menjalankan fungsi utama
main();
```
---

# Penjelasan Perubahan pada Refactoring Kode

## 1. Penamaan Method

- Nama method `SapaUser` diubah menjadi `sapaUser` untuk mengikuti **camelCase**.
- Perubahan ini dilakukan untuk memastikan kode mengikuti **standar penamaan di JavaScript**, yang umumnya menggunakan **camelCase** untuk penamaan method atau fungsi.

## 2. Indentasi

- Kode sekarang menggunakan **indentasi dengan 2 spasi** untuk memastikan struktur kode yang jelas dan rapi.
- Indentasi yang baik membuat kode lebih mudah dibaca dan dipahami, terutama saat bekerja dengan struktur kode yang lebih kompleks.

## 3. Komentar

- Ditambahkan **komentar satu baris** dan **JSDoc** untuk menjelaskan apa yang dilakukan oleh setiap bagian kode.
- Komentar pada method `sapaUser()` memberikan penjelasan tentang parameter yang diterima dan fungsionalitas dari method tersebut, memudahkan orang lain untuk memahami kode dengan cepat.

## 4. Pemecahan Logika

- Variabel `namaPanggilan` dideklarasikan dengan jelas dan terpisah dari pemanggilan method `halo.sapaUser()`.
- Pemisahan logika ini memastikan kode lebih **modular** dan memudahkan pembaca untuk memahami langkah-langkah dalam kode.

---

# Output
![Image](https://github.com/user-attachments/assets/a30d0cd2-ba1e-4798-ac49-f6c4ef52d9c7)

Kode menghasilkan pesan yang benar, yaitu **"Halo user Naufal"**, yang menunjukkan bahwa refactoring tidak mempengaruhi fungsionalitas kode, hanya memperbaiki struktur dan keterbacaan kode.

# Kesimpulan

Melalui **refactoring** kode ini, kita telah memperbaiki beberapa masalah penting dalam penulisan kode JavaScript:

- Kode kini lebih **terstruktur** dan **konsisten**.
- **Indentasi yang tepat** dan **penamaan yang konsisten** memudahkan pembacaan dan pemeliharaan kode.
- Penambahan **komentar yang jelas** membuat kode lebih mudah dipahami oleh pengembang lain yang bekerja dengan kode tersebut.
- Dengan menggunakan **struktur yang lebih modular**, kode sekarang lebih siap untuk dikembangkan lebih lanjut.

Refactoring ini menjadikan kode lebih **bersih**, **terorganisir**, dan **siap untuk pengembangan lebih lanjut**.

