// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYkWP6ecF2EB5cCtEnnXz08QS0KDKAqD8",
    authDomain: "gym-management-system-ea0a7.firebaseapp.com",
    projectId: "gym-management-system-ea0a7",
    storageBucket: "gym-management-system-ea0a7.appspot.com",
    messagingSenderId: "158630785550",
    appId: "1:158630785550:web:5d45e2c17b8c57c660425f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logging in...");
            window.location.href = "grand.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
});
