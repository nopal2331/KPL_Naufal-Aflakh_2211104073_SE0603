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
