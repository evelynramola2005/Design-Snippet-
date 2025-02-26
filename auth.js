// auth.js

// Function to handle signup
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const username = document.getElementById("signup-username").value;

    if (email === "" || password === "" || username === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Firebase Authentication - Create User
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signup Successful!");

            // Store user details in Firestore
            return db.collection("users").doc(user.uid).set({
                username: username,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("User data stored in Firestore successfully!");
            window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
            alert(error.message);
        });
}
