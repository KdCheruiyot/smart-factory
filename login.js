// scripts.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder login function (validation can be added later)
    if (username && password) {
        alert("Login successful!");
        // Redirect to a different page (e.g., dashboard) after successful login
        window.location.href = "dashboard.html";  // Change this to your dashboard page
    } else {
        alert("Please fill out both fields.");
    }
}
// scripts.js
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Simple validation (you'll replace with backend auth later)
    if (username && password.length >= 6) {
      // Store login status in session (clears on tab close)
      sessionStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html'; // redirect to home
    } else {
      alert('Invalid credentials');
    }
  }
  