/**
 * Opens the wedding reception venue location marker inside a new browser tab.
 */
function openMap() {
    const locationUrl = "https://tharahuokaing.github.io/restaurant1/";
    window.open(locationUrl, '_blank');
}

/**
 * Toggles the visibility of the traditional wedding program timeline list container.
 */
function toggleProgram() {
    const timeline = document.getElementById("weddingTimeline");
    
    if (timeline) {
        // ពិនិត្យមើលថាតើវាមាន class 'collapsed' ឬអត់
        if (timeline.classList.contains("collapsed")) {
            // បើមាន គឺយកចេញដើម្បីឱ្យវាបង្ហាញ
            timeline.classList.remove("collapsed");
            timeline.style.display = "block"; // បង្ហាញ
        } else {
            // បើអត់មាន គឺបន្ថែមចូលដើម្បីលាក់វា
            timeline.classList.add("collapsed");
            timeline.style.display = "none"; // លាក់
        }
    }
}

/**
 * Scroll to top functionality
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
