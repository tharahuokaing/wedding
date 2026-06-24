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
    const timeline = document.getElementById('weddingTimeline');
    if (timeline) {
        timeline.classList.toggle('collapsed');
    }
}

function toggleProgram() {
    // រកទីតាំង element របស់ timeline
    var timeline = document.getElementById("weddingTimeline");
    
    // ពិនិត្យមើលថាតើវាត្រូវបានបិទ (collapsed) ឬអត់
    if (timeline.classList.contains("collapsed")) {
        // បើបិទ ត្រូវដក class collapsed ចេញ ដើម្បីឱ្យវាបង្ហាញ
        timeline.classList.remove("collapsed");
        // បន្ថែម style បង្ហាញ (ក្នុងករណី css របស់អ្នកលាក់ដោយប្រើ display: none)
        timeline.style.display = "block";
    } else {
        // បើវាបង្ហាញរួចហើយ គឺបិទវាវិញ
        timeline.classList.add("collapsed");
        timeline.style.display = "none";
    }
}
