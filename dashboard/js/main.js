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
const db1 = app.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;

    db1
      .collection("users")
      .doc(uid)
      .get()
      .then((docRef) => {
        const data=docRef.data();
        document.getElementById('username').innerHTML=data.UserName;
      });
  }
});
function logout() {
  swal({
    title: "Log out",
    text: "Are you sure?",
    icon: "warning",
    buttons: true,

    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          login_button.style.display = "block";
          location.href = "../index.html";
        })
        .catch((error) => {
          location.reload();
        });
    }
  });
}
