class PusatDataSingleton {
  // Atribut untuk menyimpan data
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance; // Mengembalikan instance yang sudah ada
    }
    this.DataTersimpan = []; // List untuk menyimpan data
    PusatDataSingleton._instance = this; // Menyimpan instance tunggal
  }

  // Method untuk mendapatkan instance tunggal
  static GetDataSingleton() {
    if (!PusatDataSingleton._instance) {
      new PusatDataSingleton(); // Membuat instance pertama jika belum ada
    }
    return PusatDataSingleton._instance; // Mengembalikan instance tunggal
  }

  // Method untuk mengambil semua data
  GetSemuaData() {
    return this.DataTersimpan;
  }

  // Method untuk menambahkan data baru
  AddSebuahData(input) {
    this.DataTersimpan.push(input);
  }

  // Method untuk menghapus data berdasarkan index
  HapusSebuahData(index) {
    this.DataTersimpan.splice(index, 1);
  }

  // Method untuk mencetak semua data
  PrintSemuaData() {
    return this.DataTersimpan.join('<br>'); // Menggunakan <br> agar data dipisahkan baris baru
  }
}

// Implementasi Program Utama

// Fungsi untuk menambah data
function tambahData() {
  const data1 = PusatDataSingleton.GetDataSingleton();
  data1.AddSebuahData("Anggota 1");
  data1.AddSebuahData("Anggota 2");
  data1.AddSebuahData("Asisten Praktikum");

  // Menambahkan data ke data2 dan menampilkan semua data
  const data2 = PusatDataSingleton.GetDataSingleton();
  tampilkanData();  // Menampilkan data yang sudah ditambahkan
}

// Fungsi untuk menampilkan semua data
function tampilkanData() {
  const data2 = PusatDataSingleton.GetDataSingleton();
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = ''; // Menghapus data sebelumnya

  // Menampilkan semua data di halaman web
  const data = data2.PrintSemuaData();
  dataContainer.innerHTML = data; // Memasukkan data ke dalam elemen dataContainer
}

// Fungsi untuk menghapus data
function hapusData() {
  const data2 = PusatDataSingleton.GetDataSingleton();
  data2.HapusSebuahData(2); // Menghapus "Asisten Praktikum"
  tampilkanData(); // Menampilkan data setelah penghapusan
}
