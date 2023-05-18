const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".navigation");
const heroSection = document.querySelector(".hero");
openMenu.addEventListener("click", (e) => {
  //   closeMenu.classList.add("active");
  //   navMenu.classList.add("active");

  closeMenu.style.display = "block";
  navMenu.style.display = "block";
  openMenu.style.display = "none";
  heroSection.style.opacity = ".2";
  navMenu.style.opacity = "1";
});

closeMenu.addEventListener("click", (e) => {
  closeMenu.style.display = "none";
  navMenu.style.display = "none";
  openMenu.style.display = "block";
  heroSection.style.opacity = "1";
});
