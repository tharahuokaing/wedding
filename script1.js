// script1.js

function toggleProgram() {
    const timeline = document.getElementById("weddingTimeline");
    const scrollBtn = document.getElementById("scrollTopBtn");

    // Toggle collapsed/expanded state
    timeline.classList.toggle("collapsed");

    // If expanded, scroll smoothly into view and show scroll button
    if (!timeline.classList.contains("collapsed")) {
        timeline.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Scroll back to top when button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Optional: hide button when user scrolls near the top
window.addEventListener("scroll", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
