/**
 * Opens the wedding reception venue location marker inside a new browser tab.
 */
function openMap() {
    const locationUrl = "https://tharahuokaing.github.io/restaurant1/";
    window.open(locationUrl, '_blank');
}

/**
 * Toggles the visibility of the traditional wedding program timeline list container.
 * Fully shows all list items instantly on screen layout when triggered.
 */
function toggleProgram() {
    const timeline = document.getElementById("weddingTimeline");
    
    if (timeline) {
        // Toggles the class to instantly show or hide the absolute structural container height
        timeline.classList.toggle("collapsed");
    }
}

/**
 * Scroll to top functionality
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Monitor scrolling to display or hide the back-to-top button dynamically
 */
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
});
