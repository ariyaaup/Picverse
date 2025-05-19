// document.addEventListener("DOMContentLoaded", function () {
//   let currentSlide = 0;
//   const slides = document.querySelectorAll(".slider img");
//   const totalSlides = slides.length;
//   const navLinks = document.querySelectorAll(".slider-nav a");

//   function moveToNextSlide() {
//     slides[currentSlide].style.opacity = 0;
//     navLinks[currentSlide].classList.remove("active");

//     let newSlides = (currentSlide + 1) % totalSlides;

//     slides[newSlides].style.opacity = 1;
//     navLinks[newSlides].classList.add("active");

//     slides[newSlides].style.opacity = 1;
//     navLinks[newSlides].classList.add("active");
//   }

//   setInterval(moveToNextSlide, 3000);
// });

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider img");
  const dots = document.querySelectorAll(".slider-nav a");
  let currentIndex = 0;

  // Fungsi untuk menampilkan slide
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.opacity = "0";
      slide.style.display = "none";
    });

    slides[index].style.display = "block";
    slides[index].style.opacity = "1";

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
  }

  // Fungsi untuk slide berikutnya
  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  // Interval otomatis.,
  let slideInterval = setInterval(nextSlide, 3000);

  showSlide(0);

  slides.forEach((slide) => {
    slide.style.transition = "opacity 0.6s ease";
    slide.style.willChange = "opacity";
    slide.style.position = "absolute"; // Ensure proper stacking
    slide.style.width = "100%"; // Maintain full width
    slide.style.height = "100%"; // Maintain full height
  });
});
