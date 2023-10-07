# YouTube Speed Controller

YouTube Speed Controller is a userscript for Tampermonkey that allows controlling the playback speed of YouTube videos with a keyboard shortcut. It displays an overlay with the current speed when the speed is changed.

## Usage

### Installation

1. **Install the Tampermonkey Browser Extension:**
   - Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
  
2. **Add the Userscript:**
   - Click on the Tampermonkey icon and go to Dashboard.
   - Under Utilities, click on "Add new script."
   - Paste the userscript code into the editor.
   - Click File > Save to save the script.
   - Ensure the script is enabled by clicking on the switch next to the script name.

### Keyboard Shortcuts

- <kbd>Ctrl</kbd> + <kbd>,</kbd> - Decrease speed by 0.25x
- <kbd>Ctrl</kbd> + <kbd>.</kbd> - Increase speed by 0.25x

Pressing the shortcuts will change the video playback speed and display an overlay with the current speed for 1 second. The minimum speed is 0.25x, and the maximum is 4x.

### Customization

The overlay style and text can be customized by editing the userscript code:

```javascript
// Overlay style  
overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';

// Overlay text
var speedText = 'Speed: ' + speed.toFixed(2);
