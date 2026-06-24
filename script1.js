<script>
    function scrollUp() {
        const timeline = document.getElementById("weddingTimeline");
        timeline.scrollBy({
            top: -200, // scroll up by 200px
            behavior: "smooth"
        });
    }

    function scrollDown() {
        const timeline = document.getElementById("weddingTimeline");
        timeline.scrollBy({
            top: 200, // scroll down by 200px
            behavior: "smooth"
        });
    }
</script>
