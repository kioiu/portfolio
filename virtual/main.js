const images = ["img01", "img02", "img03", "img04", "img05"];

function getCurrentIndex() {
  const id = location.hash.replace("#", "");
  return images.indexOf(id);
}

function openImage(index) {
  location.hash = images[index];
}

function closeImage() {
  history.pushState("", document.title, location.pathname + location.search);
}

// ESCで閉じる
document.addEventListener("keydown", (e) => {
  const currentIndex = getCurrentIndex();

  if (e.key === "Escape" && currentIndex !== -1) {
    closeImage();
  }

  if (e.key === "ArrowRight" && currentIndex !== -1) {
    openImage((currentIndex + 1) % images.length);
  }

  if (e.key === "ArrowLeft" && currentIndex !== -1) {
    openImage((currentIndex - 1 + images.length) % images.length);
  }
});

// ホイールで次/前画像
document.addEventListener("wheel", (e) => {
  const currentIndex = getCurrentIndex();

  if (currentIndex === -1) return;

  e.preventDefault();

  if (e.deltaY > 0) {
    openImage((currentIndex + 1) % images.length);
  } else {
    openImage((currentIndex - 1 + images.length) % images.length);
  }
}, { passive: false });