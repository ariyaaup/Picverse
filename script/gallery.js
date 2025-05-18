const galleryItems = {
  "top-rated": [
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
  ],
  "ash-blue": [
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
  ],
  "violet-sky": [
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
  ],
  milkyway: [
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
    "../assets/Picverse24.jpeg",
  ],
};

//fungsi gallery nih
function loadGallery(category) {
  const galleryContainer = document.getElementById("gallery-page");
  galleryContainer.innerHTML = "";

  galleryItems[category].forEach((image) => {
    const imgElement = document.createElement("div");
    imgElement.classList.add("gallery-page-item");
    imgElement.innerHTML = `<img src="${image}" alt="${category} image" />`;
    galleryContainer.appendChild(imgElement);
  });
}

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    loadGallery(category);
  });
});

loadGallery("top-rated");
