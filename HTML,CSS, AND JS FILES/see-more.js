document.addEventListener("DOMContentLoaded", function() {
    const seeMoreBtn = document.getElementById("see-more-btn");
    const lyricsLong = document.getElementById("lyrics-long");
    const lyricsShort = document.getElementById("lyrics-short");

    seeMoreBtn.addEventListener("click", function() {
        // Toggle visibility of the long lyrics
        if (lyricsLong.style.display === "none") {
            lyricsLong.style.display = "block"; // Show the full lyrics
            lyricsShort.style.display = "none"; // Hide the short version
            seeMoreBtn.textContent = "See Less"; // Change button text to "Back to Default"
        } else {
            lyricsLong.style.display = "none"; // Hide the full lyrics
            lyricsShort.style.display = "block"; // Show the short version
            seeMoreBtn.textContent = "See More"; // Change button text to "See More"
        }
    });
});