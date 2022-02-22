const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close"),
  Main = document.getElementById("main");
 

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  Main.classList.toggle("blure");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
  Main.classList.remove("blure");
});
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navMenu.classList.remove("show");
  Main.classList.remove("blure");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));



// firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyBvQqfAlXssffV1ywtxgdYS67i3tB0WuyA",
  authDomain: "fab-web-site.firebaseapp.com",
  projectId: "fab-web-site",
  storageBucket: "fab-web-site.appspot.com",
  messagingSenderId: "283650575875",
  appId: "1:283650575875:web:2bd8aed1b6f44ef32f8836"
};
 

 
