




const register = () => {
  const reg_email = document.getElementById("reg_email");
  const reg_password = document.getElementById("reg_password");

  createUserWithEmailAndPassword(auth, reg_email.value, reg_password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user==>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage==>", errorMessage);
    });
};
document.getElementById("regBtn").addEventListener("click", register);
