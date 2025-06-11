// Fungsi untuk menentukan tanda bilangan
function CariTandaBilangan(a) {
  if (a < 0) {
    return "Negatif";
  } else if (a > 0) {
    return "Positif";
  } else {
    return "Nol";
  }
}

module.exports = { CariTandaBilangan };

// Fungsi untuk menampilkan hasil berdasarkan input
function showResult() {
  let input = document.getElementById("inputNumber").value;
  let resultLabel = document.getElementById("resultLabel");

  if (input === "") {
    resultLabel.textContent = "Masukkan angka terlebih dahulu!";
  } else {
    let result = CariTandaBilangan(parseInt(input));
    resultLabel.textContent = "Hasil: " + result;
  }
}
