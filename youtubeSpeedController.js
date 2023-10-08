// @name         Speed up video with Overlay
// @version      0.1
// @description  Display video speed as overlay on YouTube player
// @author       rohithgoud30
// @match        https://www.youtube.com/*
// @grant        none
// @require      https://raw.githubusercontent.com/rohithgoud30/YoutubeSpeedControllerLibary/main/youtubeSpeedController.js

(function() {
    var speed = 1;
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.bottom = '10px';
    overlay.style.right = '10px';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    overlay.style.color = '#000';
    overlay.style.fontWeight = 'bold';
    overlay.style.fontSize = '18px';
    overlay.style.padding = '10px';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'visibility 1s ease';
    overlay.style.visibility = 'hidden';
    document.body.appendChild(overlay);

    function updateSpeed() {
        var newSpeed = prompt("Speed?");
        if (newSpeed !== null) {
            speed = parseFloat(newSpeed);
            document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;
            
            var speedText = 'Speed: ' + speed.toFixed(2);
            var highlightedSpeedText = speedText.replace(/(\d+\.\d+)/, '<span style="color: #fdb515;">$1</span>');
            overlay.innerHTML = highlightedSpeedText;
            
            var authorTag = document.createElement('div');
            authorTag.textContent = 'Script by @rohithgoud30';
            authorTag.style.fontSize = 'small';
            overlay.appendChild(authorTag);

            overlay.style.visibility = 'visible';
            setTimeout(function() {
                overlay.style.visibility = 'hidden';
                overlay.removeChild(authorTag);
            }, 1000);
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 's') {
            updateSpeed();
        }
    });
})();
