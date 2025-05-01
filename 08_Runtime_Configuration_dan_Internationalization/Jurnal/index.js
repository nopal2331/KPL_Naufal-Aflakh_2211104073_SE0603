const readline = require("readline-sync");
const BankTransferConfig = require("./BankTransferConfig");

const config = new BankTransferConfig();
const lang = config.getLang();

const promptText = lang === "id"
  ? "Masukkan jumlah uang yang akan di-transfer:"
  : "Please insert the amount of money to transfer:";

const amount = parseInt(readline.question(`${promptText} `));
const fee = amount <= config.getThreshold() ? config.getLowFee() : config.getHighFee();
const total = amount + fee;

if (lang === "id") {
  console.log(`Biaya transfer = ${fee}`);
  console.log(`Total biaya = ${total}`);
  console.log("Pilih metode transfer:");
} else {
  console.log(`Transfer fee = ${fee}`);
  console.log(`Total amount = ${total}`);
  console.log("Select transfer method:");
}

config.getMethods().forEach((method, i) => {
  console.log(`${i + 1}. ${method}`);
});

const confirmText = config.getConfirmation(lang);
const confirmPrompt = lang === "id"
  ? `Ketik "${confirmText}" untuk mengkonfirmasi transaksi: `
  : `Please type "${confirmText}" to confirm the transaction: `;

const confirmation = readline.question(confirmPrompt);

if (confirmation.toLowerCase() === confirmText.toLowerCase()) {
  console.log(lang === "id" ? "Proses transfer berhasil" : "The transfer is completed");
} else {
  console.log(lang === "id" ? "Transfer dibatalkan" : "Transfer is cancelled");
}