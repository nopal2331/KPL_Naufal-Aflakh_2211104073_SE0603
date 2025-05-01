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
