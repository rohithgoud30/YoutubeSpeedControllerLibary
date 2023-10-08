// @name         YouTube Speed Controller
// @version      0.1
// @description  Display video speed as overlay on YouTube player
// @author       rohithgoud30
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/rohithgoud30/YoutubeSpeedControllerLibary/main/youtubeSpeedController.js

// Immediately Invoked Function Expression (IIFE) to encapsulate the code and avoid polluting the global scope
(function() {
    // Initial speed set to 1x
    var speed = 1;

    // Maximum speed limit set to 8x
    var maxSpeed = 8;

    // Create a div element for the overlay
    var overlay = document.createElement('div');
    // Styling for the overlay
    overlay.style.position = 'fixed'; // Fixed position for the overlay
    overlay.style.bottom = '10px'; // Distance from the bottom of the screen
    overlay.style.right = '10px'; // Distance from the right side of the screen
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Background color with opacity
    overlay.style.color = '#000'; // Text color
    overlay.style.fontWeight = 'bold'; // Bold text
    overlay.style.fontSize = '18px'; // Font size for the overlay content
    overlay.style.padding = '10px'; // Padding inside the overlay
    overlay.style.zIndex = '9999'; // Z-index to ensure the overlay is above other elements
    overlay.style.transition = 'visibility 1s ease'; // Transition effect for visibility changes
    overlay.style.visibility = 'hidden'; // Initially hidden
    document.body.appendChild(overlay); // Add the overlay to the document body

    // Function to update the speed and display the overlay
    function updateSpeed() {
        var speedText = 'Speed: <span style="color: #fdb515; font-size: 18px;">' + speed.toFixed(2) + '</span>';
        var authorTag = '<span style="font-size: 14px;">Script by @rohithgoud30</span>';
        overlay.innerHTML = '<div style="text-align: center;">' + speedText + '</div>' + authorTag;

        // Show warning if speed exceeds the maximum limit
        if (speed > maxSpeed) {
            alert('Maximum speed limit (8x) reached!');
        }

        // Make the overlay visible
        overlay.style.visibility = 'visible';
        // Hide the overlay after 1 second
        setTimeout(function() {
            overlay.style.visibility = 'hidden';
        }, 1000);
    }

    // Event listener for keyboard input
    document.addEventListener('keydown', function(e) {
        // Check if the Ctrl key (or Command key on Mac) and period (.) or comma (,) key is pressed
        if ((e.ctrlKey || e.metaKey) && (e.key === '.' || e.key === ',')) {
            // Increase speed by 0.25x when period (.) key is pressed
            if (e.key === '.') {
                speed += 0.25;
            }
            // Decrease speed by 0.25x when comma (,) key is pressed
            else if (e.key === ',') {
                speed -= 0.25;
            }

            // Ensure the speed is within the valid range (minimum: 0.25x, maximum: 8x)
            speed = Math.min(Math.max(speed, 0.25), maxSpeed);

            // Set the video playback speed
            document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;
            // Call the function to update the overlay
            updateSpeed();
        }
    });
})();
