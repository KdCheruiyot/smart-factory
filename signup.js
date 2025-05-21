// signup.js

function validateSignup() {
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    // Simulate success (no backend)
    alert("Account created successfully!");
    window.location.href = "login.html"; // Redirect to login page
    return false;
  }
  