class KodePos {
  constructor() {
    this.tabelKodePos = {
      "Purwokerto Utara": "53122",
      "Purwokerto Selatan": "53144",
      "Purwokerto Timur": "53141",
      "Purwokerto Barat": "53131",
      "Sokaraja": "53181",
      "Banyumas": "53192",
      "Cilongok": "53162"
    };
  }

  getKodePos(kecamatan) {
    return this.tabelKodePos[kecamatan] || "Kode pos tidak ditemukan";
  }
}

module.exports = KodePos;
