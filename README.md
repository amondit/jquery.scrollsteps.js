# jquery.scrollsteps.js

Lightweight (&lt;1KB) jQuery plugin to handle mousewheel scrolling by steps, handling many wheel types (click, inertia, etc.).

## About

Mouse scrolling triggers a lot of scrolling events, especially with the new "magic" trackpads and mice that create a lot of inertia in the wheel.

So, if you are trying to setup a page design where the user should be able to scroll through elements "one at a time", this can cause a lot of problems, especially frustration as this easily can render the scrolling not so fluid.

This jQuery plugin solves this problem, and provides callbacks for each scrolling "step" in all directions ([demo](http://amondit.github.io/jquery.scrollsteps.js/jquery.scrollsteps.js.demo.html)).


## Usage

Simple use, with default options: 

````javascript
  $(target).scrollsteps({
    up: yourUpFunction // callback for the UP step scroll event, all the events are of course optional
    down: yourUpFunction // callback for the DOWN step scroll event
    left: yourUpFunction // callback for the LEFT step scroll event
    right: yourUpFunction // callback for the RIGHT step scroll event
  });
````
You can also configure additional internal values if these don't match your scenario, here is the list of complete parameters:
````javascript
    transitionDuration: 2000, // Duration of the main transition event, for example page transitions in a fullPage scroller. 
    quietPeriodBetweenTwoScrollEvents: 400, // Increases responsiveness, minimum delay between two quiet periods (no scroll events) to force the transition event if the transitionDuration is not completed.
````

### Requirements

- [jQuery](http://jquery.com), obviously
- The [jquery.mousewheel](https://github.com/brandonaaron/jquery-mousewheel/) plugin by Brandon Aaron (latest version with deltaX and deltaY values embedded in the event object).

Please note, the jquery.mousewheel.js plugin is included in the Full version!

## See it in action

[Using the github example page](http://amondit.github.io/jquery.scrollsteps.js/jquery.scrollsteps.js.demo.html).

## Known issues

This has been only tested by me so far, using the hardware at hand and my use cases. So if you are experiencing issues, feel free report the bugs (or even better, contribute), as it only makes this more robust for everyone.

## Licence


This is licenced using the MIT Licence.

Copyright (c) 2014 Arnaud Mondit

