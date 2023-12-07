import { auth, signOut } from "./firebase.js";

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("logout Succesfully ");
      window.location.href = "index.html"
    })
    .catch((error) => {
      console.log(" singout error -->", error);
    });
};

let logutBtn = document.getElementById("logutBtn");
if(logutBtn){
    logutBtn.addEventListener("click", logout);
}

