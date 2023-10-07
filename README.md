# YouTube Speed Controller

YouTube Speed Controller is a userscript for Tampermonkey that allows controlling the playback speed of YouTube videos with a keyboard shortcut. It displays an overlay with the current speed when the speed is changed.

## Usage

### Installation

1. **Install Tampermonkey Extension:**
   - If you haven't already, install the Tampermonkey extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (for Chrome) or [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) (for Firefox).

2. **Add the Userscript:**
   - Click on the Tampermonkey icon and go to Dashboard.
   - Under Utilities, click on "Add new script."
   - Paste the following code into the editor:

   ```javascript
   // ==UserScript==
   // @name         Speed up video with Overlay
   // @namespace    http://tampermonkey.net/
   // @version      0.1
   // @description  Display video speed as overlay on YouTube player using the YouTubeSpeedControllerLibrary.
   // @author       rohithgoud30
   // @match        https://www.youtube.com/watch?*
   // @grant        none
   // @require      https://raw.githubusercontent.com/rohithgoud30/YoutubeSpeedControllerLibary/main/youtubeSpeedController.js
   // ==/UserScript==

   // The YouTubeSpeedControllerLibrary is a self-invoking function. You don't need to call it manually.
   // It automatically runs once the script is loaded due to the @require directive above.

   // Your additional userscript code can go here if needed.
   // For example, if you want to customize the behavior further, add your code below this comment.

   // Note: Ensure that any customization you add does not conflict with the functionality provided by the YouTubeSpeedControllerLibrary.
   // The library handles the speed control and overlay display automatically.

