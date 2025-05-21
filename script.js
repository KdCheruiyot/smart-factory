// Function to handle the click event on the "Back" button
  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
      return false; // prevent default link
    }
}
function goForward() {
    window.location.href = 'jobs.html';  // Navigate to jobs.html
  }
  // JavaScript to handle adding funds
document.getElementById('add-funds').addEventListener('click', function() {
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    let amountToAdd = prompt("Enter the amount you want to add:");
    
    if (amountToAdd && !isNaN(amountToAdd)) {
      currentBalance += parseFloat(amountToAdd);
      document.getElementById('balance').innerText = currentBalance.toFixed(2);
      alert(`You have successfully added $${amountToAdd}.`);
    } else {
      alert("Please enter a valid amount.");
    }
  });
  
