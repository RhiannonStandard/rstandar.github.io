// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
  
    const toggleButton = document.getElementById('mode-toggle');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  
  