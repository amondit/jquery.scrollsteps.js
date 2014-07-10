/*! Copyright (c) 2014 Arnaud Mondit (http://brindillesnomades.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 2.0.4
*
* Requires: jQuery 1.2.2+, jquery.mousescroll.js
*/
(function(e){e.fn.scrollsteps=function(t){function s(e){var t=e.deltaY;var s=e.deltaX;if(s==undefined||t==undefined){console.log("Could not identify delta of scrolling, is the jQuery Mousescroll plugin present?");return}var o=(new Date).getTime();if(o-n<i["transitionDuration"]){if(o-r<i["quietPeriodBetweenTwoScrollEvents"]){e.preventDefault();r=o;return}}r=o;e.preventDefault();if(t!=0){var u=t>0?"up":"down";if(u=="up"){i["up"](e)}else{i["down"](e)}}if(s!=0){var a=s<0?"left":"right";if(a=="left"){i["left"](e)}else{i["right"](e)}}n=o}var n=0;var r=0;var i={transitionDuration:2e3,up:null,down:null,left:null,right:null,quietPeriodBetweenTwoScrollEvents:400};e.extend(i,t);return this.each(function(){e(this).on("mousewheel",s)})}})(jQuery)
