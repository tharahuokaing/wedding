/**
 * Opens the wedding reception venue location marker inside a new browser tab.
 */
function openMap() {
    const locationUrl = "https://tharahuokaing.github.io/restaurant1/";
    window.open(locationUrl, '_blank');
}

/**
 * Toggles the visibility of the Khmer wedding program timeline list container.
 */
function toggleProgramKh() {
    const timelineKh = document.getElementById("weddingTimelineKh");
    if (timelineKh) {
        timelineKh.classList.toggle("collapsed");
    }
}

/**
 * Toggles the visibility of the English wedding program timeline list container.
 */
function toggleProgramEn() {
    const timelineEn = document.getElementById("weddingTimelineEn");
    if (timelineEn) {
        timelineEn.classList.toggle("collapsed");
    }
}

/**
 * Legacy toggle function (toggles both timelines if present, or single element ID).
 */
function toggleProgram() {
    const timelineKh = document.getElementById("weddingTimelineKh");
    const timelineEn = document.getElementById("weddingTimelineEn");
    const timelineLegacy = document.getElementById("weddingTimeline");

    if (timelineKh) timelineKh.classList.toggle("collapsed");
    if (timelineEn) timelineEn.classList.toggle("collapsed");
    if (timelineLegacy) timelineLegacy.classList.toggle("collapsed");
}

/**
 * Smoothly scrolls the window view back to the top of the page.
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Monitors scroll position to display or hide the floating back-to-top button.
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
