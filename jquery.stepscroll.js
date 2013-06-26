(function ($) {
    $.fn.stepscroll = function (options) {

        var defauts = {
            scrollDuration: 2000, // Absolute min delay between two scroll triggered (callback calls),
            scrollCallback: null, //callback for scroll event
            //Below, internal values tweaked for best support for all wheel types, tweak to your preference if you don't like default values
            startDebounceDelay: 300, //delay for heading debounced event
            endDebounceDelay: 150 //delay for trailing debounced event
        };

        $.extend(defauts, options);

        var scrollInProgress = false;
        var transitionInProgress = false;

        function startMouseScroll(e, delta, deltaX, deltaY) {
            scrollInProgress = false;
            performMouseScroll(e, delta, deltaX, deltaY);
        }

        function constantMouseScroll(e, delta, deltaX, deltaY) {
            if (scrollInProgress && !transitionInProgress) {
                performMouseScroll(e, delta, deltaX, deltaY);
                scrollInProgress = false;
            }
        }

        function endMouseScroll(e, delta, deltaX, deltaY) {
            if (!transitionInProgress) {
                scrollInProgress = true;
            }
        }

        function performMouseScroll(e, delta, deltaX, deltaY) {
            transitionInProgress = true;
            setTimeout(function () {
                transitionInProgress = false;
            }, defauts["scrollDuration"]);
            if (defauts["scrollCallback"]) {
                defauts["scrollCallback"](e, delta, deltaX, deltaY);
            }
        }

        return this.each(function () {
            var _startMouseScroll = undefined;
            var _endMouseScroll = undefined;

            //using underscore (or Lo-dash), alternate syntax
            if (typeof _ != "undefined" && _.debounce) {
                _startMouseScroll = _.debounce(startMouseScroll, defauts["startDebounceDelay"], true);
                _endMouseScroll = _.debounce(endMouseScroll, defauts["endDebounceDelay"], false);
            } else {
                //using debounce plugin
                if ($.debounce) {
                    _startMouseScroll = $.debounce(defauts["startDebounceDelay"], true, startMouseScroll);
                    _endMouseScroll = $.debounce(defauts["endDebounceDelay"], false, endMouseScroll);
                } else {
                    console.error("jQuery.StepScroll.js: Missing debounce function !");
                    return false;
                }
            }

            $(this).on("mousewheel", _startMouseScroll);
            $(this).on("mousewheel", constantMouseScroll);
            $(this).on("mousewheel", _endMouseScroll);
        });
    };
})(jQuery);
