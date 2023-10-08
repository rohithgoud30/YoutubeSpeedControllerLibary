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
   // @name         YouTube Speed Controller
   // @namespace    http://tampermonkey.net/
   // @version      0.1
   // @description  Display video speed as overlay on YouTube player using the YouTubeSpeedControllerLibrary.
   // @author       rohithgoud30
   // @match        https://www.youtube.com/*
   // @grant        none
   // @require      https://raw.githubusercontent.com/rohithgoud30/YoutubeSpeedControllerLibary/main/youtubeSpeedController.js
   // ==/UserScript==

   // The YouTubeSpeedControllerLibrary is a self-invoking function. You don't need to call it manually.
   // It automatically runs once the script is loaded due to the @require directive above.

   // Your additional userscript code can go here if needed.
   // For example, if you want to customize the behavior further, add your code below this comment.

   // Note: Ensure that any customization you add does not conflict with the functionality provided by the YouTubeSpeedControllerLibrary.
   // The library handles the speed control and overlay display automatically.

3. **Save and Enable the Script:**
   - Save the script using - <kbd>Ctrl</kbd> + <kbd>S</kbd> (Cmd + S on Mac).
   - Ensure the script is enabled. There should be a switch next to the script name in the Tampermonkey dashboard.

4. **Visit YouTube:**
   - Visit any YouTube video page. The script will automatically run, controlling the video speed and displaying the overlay as per your requirements.

### Keyboard Shortcuts

- `Ctrl + ,` - Decrease speed by 0.25x
- <kbd>Ctrl</kbd> + <kbd>.</kbd> - Increase speed by 0.25x

Pressing the shortcuts will change the video playback speed and display an overlay with the current speed for 1 second.

The minimum speed is 0.25x.

### Customization

The overlay style and text can be customized by editing the userscript code:

```javascript
// Overlay style  
overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';

// Overlay text
var speedText = 'Speed: ' + speed.toFixed(2);
```

### Credits

Userscript by [@rohithgoud30](https://github.com/rohithgoud30)

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

### License

This project is licensed under the MIT License. See [LICENSE](https://github.com/rohithgoud30/YoutubeSpeedControllerLibary/blob/main/LICENSE) for details.

In this README:

- **Usage:** Explains how to install Tampermonkey, add the userscript, and enable it.
- **Contributing:** Invites others to contribute to your project.
- **License:** States the license under which your project is distributed.
