import { auth, createUserWithEmailAndPassword, doc, setDoc, db  } from "./firebase.js";

const register = () => {
    const reg_email = document.getElementById("reg_email");
    const reg_password = document.getElementById("reg_password");
  
    createUserWithEmailAndPassword(auth, reg_email.value, reg_password.value)
      .then(async(userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user==>", user);
         // Add a new document in collection "cities"
      const res = await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        picture: user.photoURL,
      });
      console.log("res-->", res)
      location.href = "profile.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage==>", errorMessage);
        if(errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
          document.getElementById("checkPass").innerHTML = `* Weak Password [should be at least 6 characters]`
        }else if (errorMessage === "Firebase: Error (auth/email-already-in-use)."){
        alert(reg_email.value  + " is already registerd login now")
        }
      });
  };
  document.getElementById("regBtn").addEventListener("click", register);