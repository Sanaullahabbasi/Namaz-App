import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
let submitOTP = document.getElementById("submitOTP");

const phoneVerify = ()=>{
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = document.getElementById("phone");
    console.log(phoneNumber)


    
    signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier)
        .then((confirmationResult) => {
            console.log("sms sent")

          window.confirmationResult = confirmationResult;
     
        }).catch((error) => {
            console.log("sms not sent")
          
        });
}
if(submitOTP){
    submitOTP.addEventListener("click", phoneVerify)
}