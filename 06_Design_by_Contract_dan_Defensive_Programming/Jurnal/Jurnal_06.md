<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VI**  
**DESIGN BY CONTRACT & DEFENSIVE PROGRAMING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**NAIFAL AFLAKH WIJAYANTO (2211104073)**  
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

MENAMBAHKAN KODE AWAL SAYATUBEVIDEO
Buatlah dua file class baru yang berisi detail sebagai berikut:
A. Class bernama “SayaTubeUser” dan “SayaTubeVideo”.
B. Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:
C. Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video. Pada saat
objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit (bisa coba gunakan class
Random bawaan bahasa pemrograman yang digunakan) dan nilai “playCount” akan diisi dengan 0.
D. Pada class “SayaTubeVideo”, tambahkan sebuah method dengan nama “IncreasePlayCount” yang
menerima jumlah angka yang akan ditambahkan ke “playCount”.
E. Class “SayaTubeVideo” juga mempunyai method “PrintVideoDetails” yang melakukan print baik
dari id, title dan playCount dengan format bebas.
F. Konstruktor kelas “SayaTubeUser” mirip dengan kelas “SayaTubeVideo”, bedanya adalah property
Username dan list kosong dari uploadedVideos.
G. Pada kelas “SayaTubeUser”, terdapat method GetTotalVideoPlayCount() yang mengembalikan
jumlah playCount dari semua video yang ada di list uploadedVideos. Selain itu, juga terdapat
method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos.
H. Method terakhir di kelas tersebut adalah PrintAllVideoPlaycount() yang melakukan print terhadap
semua judul video yang ditambahkan dengan format:
“User: <username>”
“Video 1 judul: <judul_video1>”
“Video 2 judul: <judul_video2>”
dst.
I. Panggil semua method yang dibuat dari kedua kelas pada fungsi/method utama dengan membuat.
Gunakan nama panggilan praktikan untuk username dan judul video dengan format “Review Film
<judul_film> oleh <nama_praktikan>”. Tambahkan minimal 10 judul film yang menurut praktikan
bagus untuk ditonton.

**Input**

- sayaTubeVideo

 ```js
class SayaTubeVideo {
  #id;
  #title;
  #playCount;

  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter.");
    }

    this.#id = Math.floor(10000 + Math.random() * 90000); 
    this.#title = title;
    this.#playCount = 0;
  }

  increasePlayCount(count) {
    if (count < 0 || count > 10000000) {
      throw new Error("Penambahan play count maksimal 10.000.000 per kali.");
    }

    this.#playCount += count;
  }

  printVideoDetails() {
    console.log("ID:", this.#id);
    console.log("Title:", this.#title);
    console.log("Play Count:", this.#playCount);
  }

  getTitle() {
    return this.#title;
  }

  getPlayCount() {
    return this.#playCount;
  }
}

export default SayaTubeVideo;


```

- sayaTubeUser

```js
class SayaTubeUser {
  #username;
  #uploadedVideos;

  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
    }

    this.#username = username;
    this.#uploadedVideos = [];
  }

  addVideo(video) {
    if (!video || typeof video.getTitle !== "function") {
      throw new Error("Video harus valid dan memiliki method getTitle.");
    }

    this.#uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.#uploadedVideos.reduce((total, video) => total + video.getPlayCount(), 0);
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.#username}`);
    this.#uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.getTitle()}`);
    });
  }

  getVideos() {
    return this.#uploadedVideos;
  }
}

export default SayaTubeUser;

```

- index

```js
import SayaTubeVideo from './SayaTubeVideo.js';
import SayaTubeUser from './SayaTubeUser.js';

function main() {
  const user = new SayaTubeUser("Naufal Aflakh Wijayanto");

  const daftarJudul = [
    "Masa Lalu Tetap Pemenangnya", "Interstellar", "Inception", "Parasite",
    "The Social Network", "The Dark Knight", "Whiplash", "Your Name",
    "Everything Everywhere All At Once", "The Secret Life of Walter Mitty"
  ];

  for (let i = 0; i < daftarJudul.length; i++) {
    const video = new SayaTubeVideo(`Review Film ${daftarJudul[i]} oleh Naufal`);
    video.increasePlayCount(Math.floor(Math.random() * 100000));
    user.addVideo(video);
  }

  console.log("=== Detail Video ===");
  user.getVideos().forEach((video) => {
    video.printVideoDetails();
    console.log("---------------------------");
  });

  console.log("\n=== Statistik User ===");
  user.printAllVideoPlaycount();
  console.log("Total Play Count:", user.getTotalVideoPlayCount());
}

main();

```

**Output**

```
=== Detail Video ===
ID: 43245
Title: Review Film Masa Lalu Tetap Pemenangnya oleh Naufal
Play Count: 36836
---------------------------
ID: 17936
Title: Review Film Interstellar oleh Naufal
Play Count: 92556
---------------------------
ID: 39929
Title: Review Film Inception oleh Naufal
Play Count: 96057
---------------------------
ID: 57655
Title: Review Film Parasite oleh Naufal
Play Count: 32640
---------------------------
ID: 15104
Title: Review Film The Social Network oleh Naufal
Play Count: 37665
---------------------------
ID: 33177
Title: Review Film The Dark Knight oleh Naufal
Play Count: 99560
---------------------------
ID: 51393
Title: Review Film Whiplash oleh Naufal
Play Count: 99653
---------------------------
ID: 77297
Title: Review Film Your Name oleh Naufal
Play Count: 68246
---------------------------
ID: 96093
Title: Review Film Everything Everywhere All At Once oleh Naufal
Play Count: 23761
---------------------------
ID: 33876
Title: Review Film The Secret Life of Walter Mitty oleh Naufal
Play Count: 88243
---------------------------

=== Statistik User ===
User: Naufal Aflakh Wijayanto
Video 1 judul: Review Film Masa Lalu Tetap Pemenangnya oleh Naufal
Video 2 judul: Review Film Interstellar oleh Naufal
Video 3 judul: Review Film Inception oleh Naufal
Video 4 judul: Review Film Parasite oleh Naufal
Video 5 judul: Review Film The Social Network oleh Naufal
Video 6 judul: Review Film The Dark Knight oleh Naufal
Video 7 judul: Review Film Whiplash oleh Naufal
Video 8 judul: Review Film Your Name oleh Naufal
Video 9 judul: Review Film Everything Everywhere All At Once oleh Naufal
Video 10 judul: Review Film The Secret Life of Walter Mitty oleh Naufal
Total Play Count: 675217
```

## A. Soal Nomor 2

MENAMBAHKAN IMPLEMENTASI DESIGN BY CONTRACT
Pada class yang dibuat sebelumnya tambahkan implementasi design by contract dengan:
A. Precondition sebagai berikut ini:
i. Judul video memiliki panjang maksimal 200 karakter.
ii. Judul video tidak berupa null.
iii. Input penambahan play count maksimal 25.000.000 per panggilan method-nya
iv. Input play count tidak berupa bilangan negatif.
v. Nama username memiliki panjang maksimal 100 karakter.
vi. Nama username tidak berupa null.
vii. Video yang ditambahkan tidak berupa null.
viii. Video yang ditambahkan punya playCount yang kurang dari bilangan integer maksimum.
B. Exception (tambahkan juga blok try-catch sehingga program tidak berhenti):
i. Dengan menggunakan “checked” keyword pada C# atau operator sepadan pada bahasa
pemrograman lain, pastikan jumlah penambahan play count tidak melebihi batas tertinggi
integer (overflow).
C. Postcondition sebagai berikut:
i. Jumlah video maksimal yang di-print adalah 8 pada method PrintAllVideoPlaycount()
D. Panggil object dari class SayaTubeVideo dan SayaTubeUser yang menguji prekondisi, exception
dan postcondition. (Catatan: untuk exception boleh digunakan for loop sehingga proses overflow
dapat dipercepat).

**Input**

- sayaTubeVideo

```js
class SayaTubeVideo {
  #id;
  #title;
  #playCount;

  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter");
    }

    this.#id = Math.floor(Math.random() * 90000) + 10000; 
    this.#title = title;
    this.#playCount = 0;
  }

  increasePlayCount(count) {
    if (count < 0 || count > 10000000) {
      throw new Error("Play count harus antara 0 dan 10.000.000");
    }

    const maxInt = Number.MAX_SAFE_INTEGER;
    if (this.#playCount + count > maxInt) {
      throw new Error("Play count melebihi batas maksimum integer!");
    }

    this.#playCount += count;
  }

  printVideoDetails() {
    console.log("ID Video     :", this.#id);
    console.log("Judul Video  :", this.#title);
    console.log("Play Count   :", this.#playCount);
  }

  getTitle() {
    return this.#title;
  }

  getPlayCount() {
    return this.#playCount;
  }
}

export default SayaTubeVideo;


  ```

- sayaTubeUser

```js
class SayaTubeUser {
  #username;
  #uploadedVideos;

  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username tidak boleh kosong dan maksimal 100 karakter");
    }

    this.#username = username;
    this.#uploadedVideos = [];
  }

  addVideo(video) {
    if (!video || typeof video.getTitle !== "function") {
      throw new Error("Parameter harus berupa instance dari SayaTubeVideo");
    }

    this.#uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.#uploadedVideos.reduce((total, video) => total + video.getPlayCount(), 0);
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.#username}`);
    this.#uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.getTitle()}`);
    });
  }
}

export default SayaTubeUser;
```

- index

```js
import SayaTubeVideo from './SayaTubeVideo.js';
import SayaTubeUser from './SayaTubeUser.js';

function main() {
  const user = new SayaTubeUser("Naufal Aflakh");
  const video = new SayaTubeVideo("Tutorial Design By Contract – [Naufal_Praktikan]");

  const judulFilm = [
    "Inception", "Interstellar", "The Dark Knight", "Avengers: Endgame", "Whiplash",
    "Everything Everywhere All At Once", "Coco", "Parasite", "Oppenheimer", "La La Land"
  ];

  for (const judul of judulFilm) {
    const video = new SayaTubeVideo(`Review Film ${judul} oleh Naufal`);
    video.increasePlayCount(Math.floor(Math.random() * 1000000)); // playCount acak
    user.addVideo(video);
  }

  user.printAllVideoPlaycount();
  console.log("\nTotal Play Count:", user.getTotalVideoPlayCount());
}

main();

```

**Output**

```
User: Naufal Aflakh Wijayanto
Video 3 judul: Review Film Interstellar oleh Naufal Aflakh Wijayanto
Video 4 judul: Review Film The Dark Knight oleh Naufal Aflakh Wijayanto
Video 5 judul: Review Film Avengers: Endgame oleh Naufal Aflakh Wijayanto
Video 6 judul: Review Film Parasite oleh Naufal Aflakh Wijayanto
Video 7 judul: Review Film Whiplash oleh Naufal Aflakh Wijayanto
Video 8 judul: Review Film The Matrix oleh Naufal Aflakh Wijayanto
Video 9 judul: Review Film Coco oleh Naufal Aflakh Wijayanto
Video 10 judul: Review Film The Social Network oleh Naufal Aflakh Wijayanto
Video 11 judul: Review Film Everything Everywhere All At Once oleh Naufal Aflakh Wijayanto

Total Play Count: 4293
```

---
