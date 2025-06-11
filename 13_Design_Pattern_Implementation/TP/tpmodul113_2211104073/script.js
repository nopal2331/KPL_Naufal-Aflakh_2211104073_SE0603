// Subject (yang mempublikasikan perubahan)
class Subject {
  constructor() {
    this.observers = []; // Daftar observer yang terdaftar
  }

  // Method untuk mendaftar observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method untuk memberitahu observer jika ada perubahan
  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

// Observer (yang menerima notifikasi dari Subject)
class Observer {
  constructor(name) {
    this.name = name;
  }

  // Method yang dipanggil oleh Subject untuk mengirim notifikasi
  update(message) {
    console.log(`${this.name} menerima pesan: ${message}`);
    document.getElementById('output').innerHTML += `${this.name} menerima pesan: ${message}<br>`;
  }
}

// Inisialisasi Subject dan Observer
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// Menambahkan observer ke subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Fungsi untuk menambahkan observer baru
function addObserver() {
  const observer3 = new Observer("Observer 3");
  subject.addObserver(observer3);
  document.getElementById('output').innerHTML += "Observer 3 ditambahkan.<br>";
}

// Fungsi untuk memberitahu semua observer
function notifyObservers() {
  subject.notifyObservers("Update terbaru telah tersedia!");
}
