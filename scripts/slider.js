const photos = [
  "assets/images/image-product-1.jpg",
  "assets/images/image-product-2.jpg",
  "assets/images/image-product-3.jpg",
  "assets/images/image-product-4.jpg"
];

let currentIndex = 0;
const mainPhoto = document.getElementById("mainPhoto");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (mainPhoto && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    mainPhoto.src = photos[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    mainPhoto.src = photos[currentIndex];
  });
}