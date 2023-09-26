// Your existing JavaScript

// Function to toggle between dark and light mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode'); // Toggle the dark-mode class
}

// Event listener for the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleDarkMode);

// Your existing JavaScript continued...
