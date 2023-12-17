import {
  getAuth,
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  provider,
  doc,
  setDoc,
  db,
} from "./firebase.js";

let regWGoogle = document.getElementById("regWGoogle");

let addDataToFirestore = async(user)=>{
 // Add a new document in collection "cities"
 const res = await setDoc(doc(db, "user", user.uid), {
  name: user.displayName,
  email: user.email,
  emailVerified: user.emailVerified,
  picture: user.photoURL,
  uid: user.uid
});
console.log("res-->", res)
}

const registerwithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // console.log("google access", credential, token, user);
      console.log("google access", user);

      // // Add a new document in collection "cities"
      // await setDoc(doc(db, "user", user.uid), {
      //   name: user.displayName,
      //   email: user.email,
      //   emailVerified: user.emailVerified,
      //   picture: user.photoURL,
      // });
      addDataToFirestore(user);
      // location.href = "profile.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error-->", errorMessage);
    });

  //   signInWithRedirect(auth, provider);
};

if (regWGoogle) {
  regWGoogle.addEventListener("click", registerwithGoogle);
}
