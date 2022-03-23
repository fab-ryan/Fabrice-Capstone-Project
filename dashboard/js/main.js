const dropdown_menu = () => {
  const dropdown_toggle = document.getElementById("dropdown-menu1");
  dropdown_toggle.classList.add("show");
};
function display_sidbar(x) {
  const nav_toggle = document.getElementById("nav-toggle");
  const out_toggle = document.getElementById("out-toggle");
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
  nav_toggle.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.style.display = "block";
    sidebar.style.transition = "all 2s";
    sidebar.style.zIndex = 1;
    out_toggle.style.display = "inline-block";
  });

  out_toggle.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.style.display = "none";
    sidebar.style.zIndex = 0;
    out_toggle.style.display = "none";
  });
}
let token = localStorage.getItem("token");
const api = "https://my-brand-api-fabrice.herokuapp.com/api/v1/";
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
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
        location.href = "../index.html";
      }
    })
    .then(() => {
      login_button.style.display = "block";
    });
}

if (!token) {
  history.back();
}
let username = "";
let role = "";
username = localStorage.getItem("username");
role = localStorage.getItem("role");
document.getElementById("username").innerHTML = username;
if (role == "") {
  history.back(-1);
} else if (role == "user") {
  history.back(-1);
} else {
  console.log("welcome Admin");
}
