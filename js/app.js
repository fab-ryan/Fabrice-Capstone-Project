const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-items");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
 
});
