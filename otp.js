import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

let confirmation;
let submitOTP = document.getElementById("submitOTP");
let registerWithPhone = document.getElementById("registerWithPhone");

const registerd = ()=>{
    const phoneNumber = document.getElementById("phone");
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    const appVerifier = window.recaptchaVerifier;
    console.log("phoneNumber-->", phoneNumber.value)

    
    signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier)
        .then((confirmationResult) => {
            confirmation = confirmationResult
            console.log("sms sent", confirmation)
     
        }).catch((error) => {
            console.log("sms not sent")
          
        });
}

const phoneVerify = ()=>{
    let otp = document.getElementById("otp");
    confirmation.confirm(otp.value).then((result) => {
        const user = result.user;
        console.log("user registered -->", user)
 
      }).catch((error) => {
       console.log("user not registered-->", error);
      });
}
if(submitOTP){
    submitOTP.addEventListener("click", phoneVerify)
}
if(registerWithPhone){
    registerWithPhone.addEventListener("click", registerd)
}