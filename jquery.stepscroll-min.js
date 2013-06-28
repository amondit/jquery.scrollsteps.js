/*! Copyright (c) 2013 Arnaud Mondit (http://naebula.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.0
 *
 * Requires: jQuery 1.2.2+, jquery.mousescroll.js, debounce function (jquery plugin or underscore/lodash)
 */
 (function(e){e.fn.stepscroll=function(t){function s(e,t,n,i){r=false;a(e,t,n,i)}function o(e,t,n,s){if(r&&!i){a(e,t,n,s);r=false}}function u(e,t,n,s){if(!i){r=true}}function a(e,t,r,s){i=true;setTimeout(function(){i=false},n["scrollDuration"]);if(n["scrollCallback"]){n["scrollCallback"](e,t,r,s)}}var n={scrollDuration:2e3,scrollCallback:null,startDebounceDelay:300,endDebounceDelay:150};e.extend(n,t);var r=false;var i=false;return this.each(function(){var t=undefined;var r=undefined;if(typeof _!="undefined"&&_.debounce){t=_.debounce(s,n["startDebounceDelay"],true);r=_.debounce(u,n["endDebounceDelay"],false)}else{if(e.debounce){t=e.debounce(n["startDebounceDelay"],true,s);r=e.debounce(n["endDebounceDelay"],false,u)}else{console.error("jQuery.StepScroll.js: Missing debounce function !");return false}}e(this).on("mousewheel",t);e(this).on("mousewheel",o);e(this).on("mousewheel",r)})}})(jQuery)
