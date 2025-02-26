// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTrDlAirTgRWoa5i-EgUCMQI4JI0v-MrQ",
    authDomain: "login-6ea2a.firebaseapp.com",
    projectId: "login-6ea2a",
    storageBucket: "login-6ea2a.firebasestorage.app",
    messagingSenderId: "114048763668",
    appId: "1:114048763668:web:05adcb9989c446ee842401",
    measurementId: "G-TSS44YYG3V"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Handle login form submission
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = "dashboard.html"; // Redirect to the dashboard or home page
        })
        .catch((error) => {
            // Handle errors here
            errorMessage.textContent = error.message;
        });
});