const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const targetSection = document.querySelector(link.getAttribute('href'));

        // Hide all sections
        sections.forEach((section) => {
            section.classList.remove('visible');
        });

        // Show the clicked section
        targetSection.classList.add('visible');
    });
});