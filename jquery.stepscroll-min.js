/*! Copyright (c) 2014 Arnaud Mondit (http://brindillesnomades.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 2.0.2
*
* Requires: jQuery 1.2.2+, jquery.mousescroll.js
*/
(function(e){e.fn.stepscroll=function(t){function r(e){var t=e.deltaY;var r=e.deltaX;if(r==undefined||t==undefined){console.log("Could not identify delta of scrolling, is the jQuery Mousescroll plugin present?");return}var i=(new Date).getTime();if(i-lastTransitionTime<n["transitionDuration"]){if(i-lastScrollEventTime<n["quietPeriodBetweenTwoScrollEvents"]){e.preventDefault();lastScrollEventTime=i;return}}lastScrollEventTime=i;e.preventDefault();if(t!=0){var s=t>0?"up":"down";if(s=="up"){n["up"](e)}else{n["down"](e)}}if(r!=0){var o=r<0?"left":"right";if(o=="left"){n["left"](e)}else{n["right"](e)}}lastTransitionTime=i}var n={transitionDuration:2e3,up:null,down:null,left:null,right:null,quietPeriodBetweenTwoScrollEvents:400};e.extend(n,t);return this.each(function(){e(this).on("mousewheel",r)})}})(jQuery)
