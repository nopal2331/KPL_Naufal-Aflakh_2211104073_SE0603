import SayaTubeVideo from './SayaTubeVideo.js';
import SayaTubeUser from './SayaTubeUser.js';

function main() {
  const user = new SayaTubeUser("Naufal Aflakh");
  const video = new SayaTubeVideo("Tutorial Design By Contract – [Naufal_Praktikan]");

  const judulFilm = [
    "Inception", "Interstellar", "The Dark Knight", "Avengers: Endgame", "Whiplash",
    "Everything Everywhere All At Once", "Coco", "Parasite", "Oppenheimer", "La La Land"
  ];

  for (const judul of judulFilm) {
    const video = new SayaTubeVideo(`Review Film ${judul} oleh Naufal`);
    video.increasePlayCount(Math.floor(Math.random() * 1000000)); // playCount acak
    user.addVideo(video);
  }

  user.printAllVideoPlaycount();
  console.log("\nTotal Play Count:", user.getTotalVideoPlayCount());
}

main();
