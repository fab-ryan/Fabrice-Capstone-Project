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
const api = "https://my-brand-api-fabrice.herokuapp.com/api/v1/";
let response;
const login_button = document.getElementById("nav_login");
const logout_button = document.getElementById("nav_logout");


logout_button.style.display = "none";

const token = localStorage.getItem("token");
if (token) {
  login_button.style.display = "none";
  logout_button.style.display = "block";
  document.getElementById("admin_link").style.display = "none";
  username = document.getElementById("username");
  username.textContent = localStorage.getItem("username");
}
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     var uid = user.uid;

//     db1
//       .collection("users")
//       .doc(uid)
//       .get()
//       .then((docRef) => {
//         const Datas = docRef.data();
//         if (Datas.UserType == "user") {
//           login_button.style.display = "none";
//           logout_button.style.display = "block";
//           document.getElementById("admin_link").style.display = "none";
//           username = document.getElementById("username");
//           username.textContent = Datas.UserName;
//         } else {
//           login_button.style.display = "none";
//           logout_button.style.display = "block";
//           const br = document.createElement("br");

//           document
//             .getElementById("admin_link")
//             .appendChild(br).style.marginBottom = "9px";

//           username = document.getElementById("username");

//           username.textContent = Datas.UserName;
//         }
//       });
//   } else {
//     logout_button.style.display = "none";
//     // User is signed out
//     // ...
//   }
// });
function logout() {
  swal({
    title: "Log out",
    text: "Are you sure?",
    icon: "warning",
    buttons: true,

    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");

        location.reload();
      }
    })
    .then(() => {
      logout_button.style.display = "block";
      username = document.getElementById("username");
      username.textContent = localStorage.getItem("username");
    });
}
