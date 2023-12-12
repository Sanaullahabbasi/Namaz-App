import { getAuth, auth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, provider  } from "./firebase.js";

let regWGoogle = document.getElementById("regWGoogle");

const registerwithGoogle = ()=>{

    signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("google access", credential, token, user);
    location.href = "profile.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
   console.log("error-->", errorMessage);
  });

//   signInWithRedirect(auth, provider);
}

if(regWGoogle){
    regWGoogle.addEventListener("click", registerwithGoogle)
}