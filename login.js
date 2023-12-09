import { auth, signInWithEmailAndPassword } from "./firebase.js";

// promise for set url 
const delayRedirect = (url) => {
  return new Promise((resolve) => resolve(url));
};

const login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    signInWithEmailAndPassword (auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>", user);
        window.location.href = "profile.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage==>", errorMessage);
        if(errorMessage === "Firebase: Error (auth/invalid-credential)."){
          Swal.fire({
            title: "Register Now",
            text: "Do you want to Register Now?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Register",
            denyButtonText: `Don't Register`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Thank you!", "", "success");
              // using promise 
              delayRedirect("Register.html")
              .then((url) => {
              window.location.href = url;
            });
            
         
                        
            } else if (result.isDenied) {
              Swal.fire("Not registered", "", "Register to explore more");
            }
          });
        }
      });
  };
  document.getElementById("loginBtn").addEventListener("click", login);