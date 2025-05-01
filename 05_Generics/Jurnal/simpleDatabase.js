class SimpleDataBase {
  constructor() {
    this.storedData = [];  
    this.inputDates = [];  
  }

  AddNewData(data) {
    this.storedData.push(data);
    this.inputDates.push(new Date());
  }

  PrintAllData() {
    for (let i = 0; i < this.storedData.length; i++) {
      console.log(
        `Data ${i + 1} berisi: ${this.storedData[i]}, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()}`
      );
    }
  }
}

function main() {
  const db = new SimpleDataBase();

  db.AddNewData(22);
  db.AddNewData(11);
  db.AddNewData(40);

  db.PrintAllData();
}

main();
