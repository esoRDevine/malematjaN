document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Select all links inside the navigation
    const navLinks = document.querySelectorAll('.nav-links li a'); // Select the <a> tags inside the <li>

    // Loop through the links and add a click event to each
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the mobile menu after clicking a link
            const navMenu = document.querySelector('.nav-links');
            navMenu.classList.remove('show');
        });
    });
});

// Toggle the menu visibility on mobile
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
}