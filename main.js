const images = [
  "images/dolphin.JPG",

  "images/night.jpg",

  "images/sunset.JPG",

  "images/blueworld.JPG",

  "images/hotaru.jpg",

  "images/sigma.png",

  "images/sunset2.jpg",

  "images/tokei.jpg",

  "images/summer.JPG",
  
    "images/hotaru_v.JPG",

      "images/room.JPG"
];

const heroBg = document.querySelector(".hero-bg");

let currentIndex = 0;

function changeHeroImage() {

  heroBg.style.opacity = 0;

  setTimeout(() => {

    heroBg.style.backgroundImage =
      `url(${images[currentIndex]})`;

    heroBg.style.opacity = 0.35;

    currentIndex++;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

  }, 1000);
}

changeHeroImage();

setInterval(changeHeroImage, 5000);