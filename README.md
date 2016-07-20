# Misc staff for Firefox

This repo contains some (very) minor tools for Firefox.


## Presets for _Responsive Design View_

[presets.json](presets.json) contains set of popular screen resolutions for Firefox _Responsive Design View_.

To collect CSS resolutions of all those devices I've used [this](http://mydevice.io/devices/) website.

To use it go to `about:config` and edit (create new with string value if not present) value of `devtools.responsiveUI.presets` key. Paste content of [presets.json](presets.json) into value field and voilà - your _Responsive Design View_ has ready-to-work presets.

To learn more about Firefox _Responsive Design View_ please visit [this](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_View) website.


## YouTube bookmarklet

[yt-popup.js](yt-popup.js) bookmarklet opens an YouTube video in a pop-up with the  video as the only content. To use
it, create a bookmark and fill _Location_ (where an URL usually goes) with a content of [yt-popup.js](yt-popup.js)
file. Once you click it, while being on some video's YouTube page, it will create a pop-up for you.

By default a pop-up will take a quarter of your screen.
