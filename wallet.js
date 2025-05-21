// JavaScript for handling Add Funds and Withdraw Funds functionality
document.getElementById('add-funds').addEventListener('click', function() {
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    let amountToAdd = prompt("Enter the amount you want to add in KSH:");
  
    if (amountToAdd && !isNaN(amountToAdd)) {
      currentBalance += parseFloat(amountToAdd);
      document.getElementById('balance').innerText = currentBalance.toFixed(2);
      alert(`You have successfully added KSH ${amountToAdd}.`);
    } else {
      alert("Please enter a valid amount.");
    }
  });
  
  // JavaScript to handle withdrawing funds
  document.getElementById('withdraw-funds').addEventListener('click', function() {
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    let amountToWithdraw = prompt("Enter the amount you want to withdraw in KSH:");
  
    if (amountToWithdraw && !isNaN(amountToWithdraw)) {
      if (parseFloat(amountToWithdraw) <= currentBalance) {
        currentBalance -= parseFloat(amountToWithdraw);
        document.getElementById('balance').innerText = currentBalance.toFixed(2);
        alert(`You have successfully withdrawn KSH ${amountToWithdraw}.`);
      } else {
        alert("Insufficient funds. Please enter a smaller amount.");
      }
    } else {
      alert("Please enter a valid amount.");
    }
  });
  
  // JavaScript for View Transactions button
  document.getElementById('view-transactions').addEventListener('click', function() {
    const transactions = document.querySelectorAll('.transaction, .withdrawal');
    transactions.forEach(function(transaction) {
      transaction.style.display = transaction.style.display === 'none' ? 'block' : 'none';
    });
  });
// Simulate admin access with a simple prompt (for demo purposes)
const isAdmin = prompt("Enter admin key:") === "your_secret_key";

if (isAdmin) {
  const addFundsBtn = document.getElementById("add-funds");
  addFundsBtn.disabled = false;
  addFundsBtn.title = "Click to add funds";
  addFundsBtn.addEventListener("click", () => {
    alert("Funds added successfully (simulated)");
    // You can update the balance here in real use
  });
}
  