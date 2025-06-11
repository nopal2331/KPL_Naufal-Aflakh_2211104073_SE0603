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
