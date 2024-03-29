document.getElementById("actionButton").addEventListener("click", function() {
    
    var paragraph = document.getElementById("description");
    if (paragraph.style.display === "none") {
        // If the paragraph is hidden, show it
        paragraph.style.display = "block";
    } else {
        // If the paragraph is visible, hide it
        paragraph.style.display = "none";
    }
});
