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

// End of Nav bar
document.addEventListener("DOMContentLoaded", function () {
  let footerheight = document.querySelector("footer").offsetHeight;
  document.querySelector("body").style.paddingBottom = footerheight;
});
// end of footer looder

const api = "https://my-brand-api-fabrice.herokuapp.com/api/v1/";
let response;
const login_button = document.getElementById("nav_login");
const logout_button = document.getElementById("nav_logout");

logout_button.style.display = "none";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
if (token) {
  if (role == "user") {
    login_button.style.display = "none";
    logout_button.style.display = "block";
    document.getElementById("admin_link").style.display = "none";
    username = document.getElementById("username");
    const br = document.createElement("br");
    document.getElementById("profile_link").appendChild(br).style.marginBottom =
      "9px";
  } else {
    login_button.style.display = "none";
    logout_button.style.display = "block";
    const br = document.createElement("br");

    document.getElementById("admin_link").appendChild(br).style.marginBottom =
      "9px";
    document.getElementById("profile_link").style.display = "none";
    username = document.getElementById("username");
  }

  username.textContent = localStorage.getItem("username");
}

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

        location.reload();
      }
    })
    .then(() => {
      logout_button.style.display = "block";
      username = document.getElementById("username");
      username.textContent = localStorage.getItem("username");
    });
}

const subscribeform = document.querySelector("#subscription-form");
subscribeform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = subscribeform.email.value;
  if (subscribeform.email.value == "" || subscribeform.email.value == null) {
    subscribeform.email.classList.add("is-invalid");
    subscribeform.email.focus();

    return false;
  } else {
    subscribeform.email.classList.add("is-valid");
  }
  var emailID = subscribeform.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    subscribeform.email.classList.add("is-invalid");
    subscribeform.email.focus();
    return false;
  } else {
    subscribeform.email.classList.remove("is-invalid");
  }
  try {
    response = await fetch(api + "subscriber", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const subSuccess = await response.json();
    if (response.status == 201) {
      swal(
        "Hello",
        "You have Subscribe to my brand you will recieve every new article on your email",
        "success"
      ).then(() => {
        subscribeform.email.value = "";
        subscribeform.email.classList.remove("is-valid");
      });
    } else {
      swal("error", subSuccess.error, "error").then(() => {
        subscribeform.email.value = "";
        subscribeform.email.classList.remove("is-valid");
      });
    }
  } catch (error) {
    console.log(error);
  }
});
