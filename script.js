document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link'); // Get all nav links

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active'); // For hamburger animation
        });
    }

    // --- Close Mobile Menu When a Link is Clicked ---
    if (navLinks.length > 0 && navMenu && navToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // --- Update Copyright Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Form Submission Alert (Replace with actual handling) ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Prevent actual submission for this example
            // In a real scenario, you might let it submit to your ACTION_URL
            // or handle it with fetch() API
            // e.preventDefault(); // Uncomment this to stop default submission

            // Optional: Provide user feedback (replace with better UX later)
            // alert('Thank you for your message! (Form submission needs backend setup)');
        });
    }


    // --- Placeholder for "Ask for Quotation" Button Logic ---
    const quoteButtons = document.querySelectorAll('.btn-quote');
    quoteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            // Example 1: Open Mailto Link
            const subject = `Quotation Request: ${productName}`;
            const body = `Hello The Crafty Naari,\n\nI would like to request a quotation/more information for the following product:\n\nProduct: ${productName}\nPrice Listed: ${productPrice}\n\nPlease provide details on availability, shipping, etc.\n\nMy contact details are:\n[Your Name]\n[Your Email/Phone]\n\nThank you!`;
            window.location.href = `mailto:info@thecraftynaari.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Example 2: Alert (Replace with modal pop-up later)
            // alert(`To inquire about "${productName}", please use the contact form or email us.`);

            console.log(`Quotation requested for: ${productName} (${productPrice})`);
        });
    });


    // --- Add more JS for features like: ---
    // - Active link highlighting in nav based on scroll position
    // - Image slider/carousel for the hero banner
    // - Product filtering logic
    // - Instagram feed loading (if not using a simple embed)

});