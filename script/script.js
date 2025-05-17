// hamburger menu script
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  console.log("Hamburger clicked");
  navMenu.classList.toggle("active");
});
// ------------------------
