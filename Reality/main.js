const images = [
  "img01", "img02", "img03", "img04", "img05", "img06",
  "img07", "img08", "img09", "img10", "img11", "img12",
  "img13", "img14", "img15", "img16", "img17", "img18"
];

let currentIndex = -1;

function openImage(index) {
  closeImage();

  currentIndex = index;

  const lightbox = document.getElementById(images[currentIndex]);
  lightbox.classList.add("is-open");

  document.body.classList.add("no-scroll");
}

function closeImage() {
  document.querySelectorAll(".lightbox").forEach((lightbox) => {
    lightbox.classList.remove("is-open");
  });

  document.body.classList.remove("no-scroll");
  currentIndex = -1;
}

document.querySelectorAll(".square-photo").forEach((photo) => {
  photo.addEventListener("click", (e) => {
    e.preventDefault();

    const id = photo.dataset.target;
    const index = images.indexOf(id);

    if (index !== -1) {
      openImage(index);
    }
  });
});

document.querySelectorAll(".lightbox-close").forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeImage();
  });
});

document.addEventListener("keydown", (e) => {
  if (currentIndex === -1) return;

  if (e.key === "Escape") {
    closeImage();
  }

  if (e.key === "ArrowRight") {
    openImage((currentIndex + 1) % images.length);
  }

  if (e.key === "ArrowLeft") {
    openImage((currentIndex - 1 + images.length) % images.length);
  }
});

document.addEventListener("wheel", (e) => {
  if (currentIndex === -1) return;

  e.preventDefault();

  if (e.deltaY > 0) {
    openImage((currentIndex + 1) % images.length);
  } else {
    openImage((currentIndex - 1 + images.length) % images.length);
  }
}, { passive: false });

let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  if (currentIndex === -1) return;

  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) < 50) return;

  if (diff < 0) {
    openImage((currentIndex + 1) % images.length);
  } else {
    openImage((currentIndex - 1 + images.length) % images.length);
  }
});