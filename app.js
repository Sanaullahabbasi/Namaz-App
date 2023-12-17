import { auth, signOut, onAuthStateChanged, getDoc, db, doc, } from "./firebase.js";

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("logout Succesfully ");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(" singout error -->", error);
    });
};

let logutBtn = document.getElementById("logutBtn");
if (logutBtn) {
  logutBtn.addEventListener("click", logout);
}

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let loader = document.getElementById("loader");
let main = document.getElementById("main");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    console.log("doc", docSnap.data())
    if(docSnap.data()){
      console.log("user login", user);
      loader.style.display = "none";
      main.style.display = "flex"
      name.innerHTML = `<h2 class=" mt-5">${user.email.slice(0,user.email.indexOf("@"))}</h2>`;
      email.innerHTML = `<h2 class="mt-5">${user.email}</h2>`;
      if (location.pathname !== "/profile.html") {
        window.location.href = "profile.html";
      }
      console.log("mil gaya");
    }
  } else {
    console.log("user logout");
    if (location.pathname === "/profile.html") {
      location.href = "index.html";
    }
  }
});
