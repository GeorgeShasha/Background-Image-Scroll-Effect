const backgroundImageEl = document.getElementById("background-image");

const updateImage = () => {
  backgroundImageEl.style.opacity = 1 - window.pageYOffset / 700;
  backgroundImageEl.style.backgroundSize = 100 + window.pageYOffset / 10 + "%";
};

window.addEventListener("scroll", () => {
  updateImage();
});
