document.getElementById("apply-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("fullname").value;
    const job = document.getElementById("job").value;
  
    if (!name || !job) {
      document.getElementById("response-message").textContent = "Please fill out all required fields.";
      document.getElementById("response-message").style.color = "red";
      return;
    }
  
    // Simulate a submission
    document.getElementById("response-message").textContent = `Thank you, ${name}. Your application for "${job}" has been submitted successfully.`;
    document.getElementById("response-message").style.color = "green";
  
    // Reset form
    this.reset();
  });

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  