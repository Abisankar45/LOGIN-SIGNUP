//display the login and signup page while clicking the login and signup 
function signup(){
    document.getElementById("loginForm").style.display="none";
    document.getElementById("signupForm").style.display="block";

}
   
function login(){
    document.getElementById("signupForm").style.display="none";
    document.getElementById("loginForm").style.display="block";
}

//create an alert message after succesfully created an account & login an account
function signupalert(){
    alert("Succesfully Created a new account...!")
} 

function loginalert(){
    alert("Succesfully Login your account...!")
}

// login password toggle
var loginPass = document.getElementById("loginPassword");
var loginToggle = document.getElementById("toggleLoginPassword");

loginToggle.onclick = () => {
    if (loginPass.type === "password") {
        loginPass.type = "text";
        loginToggle.textContent = "🔓";
    } else {
        loginPass.type = "password";
        loginToggle.textContent = "🔒";
    }
}

// signup password toggle
var signupPass = document.getElementById("signupPassword");
var signupToggle = document.getElementById("toggleSignupPassword");

signupToggle.onclick = () => {
    if (signupPass.type === "password") {
        signupPass.type = "text";
        signupToggle.textContent = "🔓";
    } else {
        signupPass.type = "password";
        signupToggle.textContent = "🔒";
    }
}
