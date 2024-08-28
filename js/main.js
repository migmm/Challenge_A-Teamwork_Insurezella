// Select all anchor elements within the navbar menu
const menuLinks = document.querySelectorAll('#navbar-menu ul a');
// Select the menu toggle checkbox element
const menuToggle = document.getElementById('menuToggle');

// Add a click event listener to each menu link
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Uncheck the menu toggle checkbox to close the navigation menu
        menuToggle.checked = false;
    });
});


// Initial slide index
let slideIndex = 1;
showSlides(slideIndex);

/**
 * Advances or reverses the slide index by a specified amount and updates the slides.
 * @param {number} n - The number of steps to move the slides. Multiplied by 2 for adjusting the slide index.
 */
function plusSlides(n) {
    showSlides(slideIndex += n * 2);
}

/**
 * Sets the slide index to a specific slide and updates the slides.
 * @param {number} n - The slide number to display. Adjusted for the zero-based index by multiplying by 2 and subtracting 1.
 */
function currentSlide(n) {
    showSlides(slideIndex = (n * 2) - 1);
}

/**
 * Displays slides based on the current slide index, updates the slide position, and manages the navigation dots.
 * @param {number} n - The slide index to display. Adjusts the offset based on the index.
 */
function showSlides(n) {
    let slides = document.getElementsByClassName("card"); // Get all slide elements
    let dots = document.getElementsByClassName("dot"); // Get all dot elements

    // Wrap around the slide index if it goes out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length - 1; }
    
    // Dimensions and offsets for sliding calculation
    let cardWidth = 302; // Width of each card
    let gap = 52; // Gap between cards
    let totalWidth = cardWidth + gap; // Total width of one card plus gap

    let initialOffset = 530; // Starting offset for the slides

    // Calculate the offset for the current slide
    let offset = initialOffset - ((slideIndex - 1) * totalWidth);

    // If the window width is greater than 1080 pixels, disable sliding
    if (window.innerWidth > 1080) {
        offset = 0;
    }

    // Apply the calculated offset to each slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${offset}px)`;
    }

    // Remove 'active' class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Add 'active' class to the current dot
    dots[Math.floor((slideIndex - 1) / 2)].className += " active";
}

// Show the initial set of slides when the page loads
window.onload = function() {
    showSlides(slideIndex);
}

// Update slides when the window is resized
window.addEventListener('resize', function() {
    showSlides(slideIndex);
});
