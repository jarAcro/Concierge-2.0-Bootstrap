// This function is used to display the seating chart for the user to select their seats.
function showSectionImage(sectionId) {
    // This object maps section IDs to the paths of their corresponding images.
    const sectionImageMap = {
        "section101": "/images/seating-images/section101.png",
        "section102": "/images/seating-images/section102.png",
        "section103": "/images/seating-images/section103.png",
        "section104": "/images/seating-images/section104.png",
        "section105": "/images/seating-images/section105.png",
        "section106": "/images/seating-images/section106.png",
        "section-200": "/images/seating-images/section200.png",
        "section-201": "/images/seating-images/section201.png",
        "section-202": "/images/seating-images/section202.png",
        "section-203": "/images/seating-images/section203.png",
        "section-204": "/images/seating-images/section204.png",
        "section-205": "/images/seating-images/section205.png",
        "section-206": "/images/seating-images/section206.png",
    };

    // Get the image path for the given section ID.
    const sectionImage = sectionImageMap[sectionId];
    if (sectionImage) {
        // Open a new popup window.
        const popupWindow = window.open("", "Section Image", "width=2000,height=1000,channelmode=yes,fullscreen=yes,scrollbars=no");

        // Write the image and script to the popup window's document.
        popupWindow.document.write(`
            <div style="text-align:center;">
                <img src="${sectionImage}" alt="Section Image" style="max-width:100%; height:auto;">
                <p style="font-size:30px; font-weight:bold; color:#333; margin-top:10px;">Click anywhere on the screen to close this window.</p>
            </div>
            <script>
                // Add an event listener to the document that closes the window when the document is clicked.
                document.addEventListener('click', function() {
                    window.close();
                });
            </script>
        `);
    }
}