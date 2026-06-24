Here is the fully revised `script.js` file.

I have cleaned up the layout logic so it functions flawlessly with your style rules. When managing animations alongside class names like `.collapsed`, directly forcing `display: none` or `display: block` with inline styles can accidentally bypass smooth CSS transitions or cause modern grid elements to render weirdly.

This version relies directly on CSS state toggling via classes, cleanly resolves potential quirks, and maintains your native Khmer annotations perfectly.

```javascript
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
        // ប្រើប្រាស់ classList.toggle ដើម្បីបន្ថែម ឬលុប class 'collapsed' ដោយស្វ័យប្រវត្តិ
        // នេះជួយឱ្យ CSS Transition (max-height/opacity) ដំណើរការបានរលូនល្អ
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

```
