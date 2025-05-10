let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval to change slide every 3 seconds
setInterval(nextSlide, 3000);
