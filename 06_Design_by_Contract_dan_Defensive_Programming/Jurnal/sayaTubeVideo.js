class SayaTubeVideo {
  #id;
  #title;
  #playCount;

  constructor(title) {
    if (!title || typeof title !== "string" || title.length > 100) {
      throw new Error("Judul tidak boleh kosong dan maksimal 100 karakter");
    }

    this.#id = Math.floor(Math.random() * 90000) + 10000; 
    this.#title = title;
    this.#playCount = 0;
  }

  increasePlayCount(count) {
    if (count < 0 || count > 10000000) {
      throw new Error("Play count harus antara 0 dan 10.000.000");
    }

    const maxInt = Number.MAX_SAFE_INTEGER;
    if (this.#playCount + count > maxInt) {
      throw new Error("Play count melebihi batas maksimum integer!");
    }

    this.#playCount += count;
  }

  printVideoDetails() {
    console.log("ID Video     :", this.#id);
    console.log("Judul Video  :", this.#title);
    console.log("Play Count   :", this.#playCount);
  }

  getTitle() {
    return this.#title;
  }

  getPlayCount() {
    return this.#playCount;
  }
}

export default SayaTubeVideo;
