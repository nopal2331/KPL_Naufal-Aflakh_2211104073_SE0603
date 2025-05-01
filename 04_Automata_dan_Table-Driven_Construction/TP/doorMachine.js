class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    this.updateStateMessage();
  }

  ubahState(stateBaru) {
    if (stateBaru !== this.state) {
      this.state = stateBaru;
      this.updateStateMessage();
    }
  }

  updateStateMessage() {
    if (this.state === "Terkunci") {
      console.log("Pintu terkunci");
    } else if (this.state === "Terbuka") {
      console.log("Pintu tidak terkunci");
    } else {
      console.log(`Status pintu tidak dikenal: ${this.state}`);
    }
  }
}

module.exports = DoorMachine;
