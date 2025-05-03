const body = document.getElementById("pageBody");
const button = document.getElementById("toggleButton");

// Apply theme from localStorage on page load
let isDarkMode = localStorage.getItem("theme") === "dark";
applyTheme();

function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

function applyTheme() {
  if (isDarkMode) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.textContent = "Light Mode 🌙";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.textContent = "Dark Mode 🌞";
  }
}
