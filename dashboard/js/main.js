const dropdown_menu = () => {
  const dropdown_toggle = document.getElementById("dropdown-menu1");
  dropdown_toggle.classList.add("show");
};

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
username = localStorage.getItem("username");

document.getElementById("username").innerHTML = username;
async function UserInformation() {
  const userInfos = await fetch(api + "userInfo", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const userInfo = await userInfos.json();
  if (userInfos.status == 400) {
    history.back();
  } else if (userInfo.data.role == "user") {
    history.back(-1);
    location.href = "../index.html";
  } else {
    console.log("Welcame Admin ");
  }
}
