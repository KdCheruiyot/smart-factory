function goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "index.html"; // fallback to homepage
    }
  }
 

  // JavaScript (scripts.js)
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
  }
  // Toggle Sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  function goBack() {
    window.history.back();
  }
  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
  }
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  // Sidebar dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const menu = toggle.nextElementSibling;
      const isVisible = menu.style.display === 'block';
      menu.style.display = isVisible ? 'none' : 'block';

      // Toggle arrow direction
      toggle.innerHTML = toggle.innerHTML.replace(
        isVisible ? '▲' : '▼',
        isVisible ? '▼' : '▲'
      );
    });
  });
});

  
  
  