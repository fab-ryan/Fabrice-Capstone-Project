const dropdown_menu = () => {
  const dropdown_toggle = document.getElementById("dropdown-menu1");
  dropdown_toggle.classList.add("show");
};
const firebaseConfig = {
  apiKey: "AIzaSyBvQqfAlXssffV1ywtxgdYS67i3tB0WuyA",
  authDomain: "fab-web-site.firebaseapp.com",
  projectId: "fab-web-site",
  storageBucket: "fab-web-site.appspot.com",
  messagingSenderId: "283650575875",
  appId: "1:283650575875:web:2bd8aed1b6f44ef32f8836",
};

const app = firebase.initializeApp(firebaseConfig);
function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location = "../index.html";
    })
    .catch((error) => {
      // An error happened.
    });
}



