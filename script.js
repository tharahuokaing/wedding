/**
 * Opens the wedding reception venue location marker inside a new browser tab.
 */
function openMap() {
    const locationUrl = "https://tharahuokaing.github.io/restaurant1/";
    window.open(locationUrl, '_blank');
}

/**
 * Toggles the visibility of the Khmer wedding program timeline list container.
 * Also syncs with English timeline if available.
 */
function toggleProgramKh() {
    const timelineKh = document.getElementById("weddingTimelineKh");
    const timelineEn = document.getElementById("weddingTimelineEn");

    if (timelineKh) {
        timelineKh.classList.toggle("collapsed");
    }
    
    // Keeps both columns in sync when Khmer button is clicked
    if (timelineEn && timelineKh) {
        if (timelineKh.classList.contains("collapsed")) {
            timelineEn.classList.add("collapsed");
        } else {
            timelineEn.classList.remove("collapsed");
        }
    }
}

/**
 * Toggles the visibility of the English wedding program timeline list container.
 * Also syncs with Khmer timeline if available.
 */
function toggleProgramEn() {
    const timelineEn = document.getElementById("weddingTimelineEn");
    const timelineKh = document.getElementById("weddingTimelineKh");

    if (timelineEn) {
        timelineEn.classList.toggle("collapsed");
    }

    // Keeps both columns in sync when English button is clicked
    if (timelineKh && timelineEn) {
        if (timelineEn.classList.contains("collapsed")) {
            timelineKh.classList.add("collapsed");
        } else {
            timelineKh.classList.remove("collapsed");
        }
    }
}

/**
 * Legacy/Unified toggle function to expand/collapse all timeline containers simultaneously.
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
 * Monitors scroll position to display or hide the floating back-to-top button dynamically.
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
