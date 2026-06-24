function toggleProgram() {
    const timeline = document.getElementById("weddingTimeline");

    // Toggle collapsed/expanded state
    timeline.classList.toggle("collapsed");

    // If expanded, scroll smoothly into view
    if (!timeline.classList.contains("collapsed")) {
        timeline.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
