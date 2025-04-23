// --- START OF FILE script.js ---

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
                // Check if the menu is active (relevant for mobile view)
                if (window.innerWidth <= 767 && navMenu.classList.contains('active')) {
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
            // Find the closest parent product card
            const productCard = e.target.closest('.product-card');
            if (!productCard) return; // Exit if somehow not found

            const productNameElement = productCard.querySelector('h3');
            const productPriceElement = productCard.querySelector('.product-price');

            // Check if elements exist before accessing textContent
            const productName = productNameElement ? productNameElement.textContent : 'Unknown Product';
            const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

            // Example 1: Open Mailto Link
            const subject = `Quotation Request: ${productName}`;
            // **IMPORTANT:** Replace 'info@thecraftynaari.com' with the actual email address from the contact section
            const recipientEmail = 'thecraftynaari@gmail.com';
            const body = `Hello The Crafty Naari,\n\nI would like to request a quotation/more information for the following product:\n\nProduct: ${productName}\nPrice Listed: ${productPrice}\n\nPlease provide details on availability, shipping, etc.\n\nMy contact details are:\n[Your Name]\n[Your Email/Phone]\n\nThank you!`;
            window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Example 2: Alert (Replace with modal pop-up later)
            // alert(`To inquire about "${productName}", please use the contact form or email us.`);

            console.log(`Quotation requested for: ${productName} (${productPrice})`);
        });
    });

    // --- Generic Slideshow Logic ---
    // Select all slideshow containers directly, regardless of their parent element
    document.querySelectorAll('.slideshow-container').forEach(slideshowContainer => {
        // Select elements *within the current* slideshowContainer
        const slides = slideshowContainer.querySelectorAll('.mySlides');
        const prevButton = slideshowContainer.querySelector('.slideshow-prev');
        const nextButton = slideshowContainer.querySelector('.slideshow-next');

        // Only proceed if there are slides and buttons in this container
        if (slides.length > 0 && prevButton && nextButton) {
            let currentSlideIndex = 0; // Index specific to this container's slideshow

            // Function to show a specific slide for THIS container
            function showSlide(index) {
                // Ensure index is within bounds (wrap around)
                if (index >= slides.length) {
                    currentSlideIndex = 0;
                } else if (index < 0) {
                    currentSlideIndex = slides.length - 1;
                } else {
                    currentSlideIndex = index;
                }

                // Hide all slides in this container
                slides.forEach(slide => {
                    slide.style.display = 'none';
                });

                // Show the target slide in this container
                // Add a check to ensure the slide exists at the calculated index
                if (slides[currentSlideIndex]) {
                     slides[currentSlideIndex].style.display = 'block';
                } else if (slides.length > 0) {
                    // Fallback: If index is somehow invalid, show the first slide
                    slides[0].style.display = 'block';
                    currentSlideIndex = 0;
                }
            }

            // Add event listeners for THIS container's buttons
            prevButton.addEventListener('click', () => {
                showSlide(currentSlideIndex - 1);
            });

            nextButton.addEventListener('click', () => {
                showSlide(currentSlideIndex + 1);
            });

            // Initialize: Show the first slide for this container
            showSlide(currentSlideIndex);

             // Hide buttons if there's only one slide
            if (slides.length <= 1) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                 // Ensure buttons are visible if they were previously hidden (e.g., if slides were dynamically added)
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
            }

        } else {
            // Optional: Handle cases where a container might lack slides/buttons
            // console.warn("Slideshow container found without enough slides or buttons:", slideshowContainer);
            // Hide buttons if they exist but slides don't, or vice versa
            if (prevButton) prevButton.style.display = 'none';
            if (nextButton) nextButton.style.display = 'none';
        }
    });


    // --- Add more JS for features like: ---
    // - Active link highlighting in nav based on scroll position
    // - Image slider/carousel for the hero banner
    // - Product filtering logic
    // - Instagram feed loading (if not using a simple embed)

}); // End of the main DOMContentLoaded listener