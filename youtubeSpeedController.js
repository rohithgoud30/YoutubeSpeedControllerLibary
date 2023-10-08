// @name         Speed up video with Overlay
// @version      0.1
// @description  Display video speed as overlay on YouTube player
// @author       rohithgoud30
// @match        https://www.youtube.com/watch?*
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
        var speedText = 'Speed: ' + speed.toFixed(2);
        var authorTag = 'Script by @rohithgoud30';
        var overlayContent = `${speedText} <span style="color: #fdb515;">${authorTag}</span>`;
        overlay.innerHTML = overlayContent;

        overlay.style.visibility = 'visible';
        setTimeout(function() {
            overlay.style.visibility = 'hidden';
        }, 1000);
    }

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === '.') {
            speed += 0.25;
        } else if (e.ctrlKey && e.key === ',') {
            speed -= 0.25;
        }

        if (speed < 0.25) {
            speed = 0.25;
        }

        document.getElementsByClassName('html5-main-video')[0].playbackRate = speed;
        updateSpeed();
    });
})();
