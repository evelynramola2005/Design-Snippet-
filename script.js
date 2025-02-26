let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden"); // Hide navbar when scrolling down
    } else {
        header.classList.remove("hidden"); // Show navbar when scrolling up
    }
    lastScrollY = window.scrollY;
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
        event.preventDefault();

        // Smoothly scroll to the About section
        document.querySelector('#about-container').scrollIntoView({ behavior: 'smooth' });

        // Add the slow bounce effect to the container
        let aboutContainer = document.querySelector('#about-container');
        aboutContainer.classList.add('slow-bounce');

        // Remove bounce effect after animation ends (1s)
        setTimeout(() => {
            aboutContainer.classList.remove('slow-bounce');
        }, 1000);
    });
});

