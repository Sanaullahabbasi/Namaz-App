import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU7Z91x1Myxa60RfA0XN9oOH6NFWgwaOc",
  authDomain: "namaz-app-e0a9e.firebaseapp.com",
  projectId: "namaz-app-e0a9e",
  storageBucket: "namaz-app-e0a9e.appspot.com",
  messagingSenderId: "950791269720",
  appId: "1:950791269720:web:3a0bba21fc33f342a4492d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
