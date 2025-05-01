class SayaTubeVideo {
  #id;
  #title;
  #playCount;

  constructor(title) {
    try {
      if (typeof title !== "string" || title.length === 0 || title.length > 100) {
        throw new Error("Judul harus berupa string dan maksimal 100 karakter!");
      }

      this.#id = Math.floor(Math.random() * 90000) + 10000;
      this.#title = title;
      this.#playCount = 0;
    } catch (err) {
      console.error("Error pada judul:", err.message);
    }
  }

  increasePlayCount(count) {
    try {
      if (typeof count !== "number" || count < 1 || count > 10000000) {
        throw new Error("Jumlah play count harus antara 1 hingga 10.000.000!");
      }

      const maxInt = Number.MAX_SAFE_INTEGER;
      if (this.#playCount + count > maxInt) {
        throw new Error("Terjadi overflow! Play count melebihi batas maksimal integer.");
      }

      this.#playCount += count;
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  printVideoDetails() {
    console.log(`Video ID    : ${this.#id}`);
    console.log(`Judul       : ${this.#title}`);
    console.log(`Play Count  : ${this.#playCount}`);
  }
}

function main() {
  const video = new SayaTubeVideo("Tutorial Design By Contract – [Naufal_Praktikan]");
  video.increasePlayCount(5000000);
  video.printVideoDetails();

  video.increasePlayCount(15000000); 
  video.printVideoDetails();

  for (let i = 0; i < 20; i++) {
    video.increasePlayCount(10000000); 
  }
  video.printVideoDetails();

  const videoInvalid = new SayaTubeVideo("");
}

main();
