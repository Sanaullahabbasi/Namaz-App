const login = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    signInWithEmailAndPassword (auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage==>", errorMessage);
      });
  };
  document.getElementById("loginBtn").addEventListener("click", login);