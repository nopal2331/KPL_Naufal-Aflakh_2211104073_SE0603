const fs = require("fs");

class BankTransferConfig {
  constructor() {
    this.configPath = "./bank_transfer_config.json";
    this.defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configPath)) {
      const data = fs.readFileSync(this.configPath, "utf-8");
      return JSON.parse(data);
    } else {
      fs.writeFileSync(this.configPath, JSON.stringify(this.defaultConfig, null, 2));
      return this.defaultConfig;
    }
  }

  getLang() {
    return this.config.lang;
  }

  getThreshold() {
    return this.config.transfer.threshold;
  }

  getLowFee() {
    return this.config.transfer.low_fee;
  }

  getHighFee() {
    return this.config.transfer.high_fee;
  }

  getMethods() {
    return this.config.methods;
  }

  getConfirmation(lang) {
    return this.config.confirmation[lang];
  }
}

module.exports = BankTransferConfig;
