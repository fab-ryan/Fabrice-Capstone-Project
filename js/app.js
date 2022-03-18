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
  appId: "1:283650575875:web:2bd8aed1b6f44ef32f8836",
};
const api = "https://my-brand-api-fabrice.herokuapp.com/api/v1/";
let response;
const login_button = document.getElementById("nav_login");
const logout_button = document.getElementById("nav_logout");
const app = firebase.initializeApp(firebaseConfig);

logout_button.style.display = "none";
const db1 = app.firestore();
const token = localStorage.getItem("token");
if (token) {
  login_button.style.display = "none";
  logout_button.style.display = "block";
  document.getElementById("admin_link").style.display = "none";
  username = document.getElementById("username");
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

        location.reload();
      }
    })
    .then(() => {
      login_button.style.display = "block";
    });
}
