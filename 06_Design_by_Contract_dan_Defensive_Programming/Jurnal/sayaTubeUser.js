class SayaTubeUser {
  #username;
  #uploadedVideos;

  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username tidak boleh kosong dan maksimal 100 karakter");
    }

    this.#username = username;
    this.#uploadedVideos = [];
  }

  addVideo(video) {
    if (!video || typeof video.getTitle !== "function") {
      throw new Error("Parameter harus berupa instance dari SayaTubeVideo");
    }

    this.#uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.#uploadedVideos.reduce((total, video) => total + video.getPlayCount(), 0);
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.#username}`);
    this.#uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.getTitle()}`);
    });
  }
}

export default SayaTubeUser;