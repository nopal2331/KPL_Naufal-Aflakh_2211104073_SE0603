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
