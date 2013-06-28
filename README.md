# jquery.stepscroll.js

Lightweight (1.1KB) jQuery plugin to handle mousewheel scrolling by steps, handling many wheel types (click, inertia, etc.).

Especially useful if you want to manually implement a lightweight slider (ie. not want to use the dozens of already available jQuery sliders that do everything, take ages to configure correctly and bloat your site).

Bottomline is: StepScroll.js + CSS (3D) Transforms = very fast, lightweight, simple & powefull slider!

## About it.

Sometimes you need to handle mousewheel events to scroll between elements using steps for each mousewheel finger actions, such as (but not limited to):

- Fullscreen website layouts with page scrolling, to enable each mousewheel action to change pages
- Picture galleries, to navigate precisely and responsively between pictures using the mousewheel

However, there are many technical difficulties implementing that due to the many mousewheel types that exist :

- "Click" wheels, that trigger a mouse event for every "click" made, and stops as soon as your finger stopps moving.
- "Inertia" wheels (and others magic trackpads), that gets energy along the finger movement, and may continue to scroll as long as this inertia energy is not depleted (while the finger is away), triggering scroll events constantly along the way.
- Also, there are wheels that are a someway inbetween, such as "soft" click wheels, and inertia-less trackpad zones...

### What the problem is:

Handling these many wheel types is not trivial, as solutions for some wheel types may cause issues with others:
- You may set a minimum delay between mousescroll events (trigger), or inbetween events (debouncing). This will work for click types, given you set a high enough delay between events.
- However, that will not work with inertia wheels, as the scroll events continues to get triggered after the finger movement, preventing the debouncing to occur and/or getting undesired scrolls to be triggered...
- Also, it causes usability issues if you move the wheel slowly, causing misfires or desired scrolls that are not registered...

### This is causes frustration to the user, and needs to be fixed!

Thank god, the jQuery.StepScroll.js plugin exists, and takes care of the problem.

It uses a combination of debounced (heading and trailing) and undebounced (with flags) mousewheel events, to account for most scrolling scenarii and trigger events accordingly.

## Usage


### Requirements

- The [jquery.mousewheel](https://github.com/brandonaaron/jquery-mousewheel/) plugin by Brandon Aaron (latest version with deltaX and deltaY values).
- A jQuery debouncing function, either via [underscore.js](http://underscorejs.org/) (or [Lo-dash](http://lodash.com/)), or Ben Alman's [debounce/throttle](http://benalman.com/projects/jquery-throttle-debounce-plugin/) plugin.

### How to use

Simple use, with default options: 

````
  $(target).stepscroll({
    scrollCallback: yourFunction // callback to your function to call at each step scrolled
  });
````
You can also configure additional internal values, here is the list of complete parameters:
````
    scrollDuration: 2000, // Absolute min delay between two scroll triggered (callback calls),
    scrollCallback: null, //callback for scroll event
    //Internal values tweaked for best support for all wheel types,
    // tweak to your preference if you don't like default values
    startDebounceDelay: 300, //delay for heading debounced event
    endDebounceDelay: 150 //delay for trailing debounced event
````

## See it in action

Using the github example page:

//TODO

## Known issues

This has been only tested by me so far, using the hardware at hand and my use cases. So if you are experiencing issues, feel free report the bugs (or even better, contribute), as it only makes this more robust for everyone.

## Licence


This is licenced using the MIT Licence.

Copyright (c) 2013 Arnaud Mondit

