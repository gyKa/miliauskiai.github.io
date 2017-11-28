"use strict";
$(document).ready(function() {
    /* 1. Stellar Parallax */
    var stellarActivated = false;

    react_to_window();

    $(window).on("resize", function() {
        react_to_window();
    });

    // only activate stellar for window widths above or equal to 1024
    function react_to_window() {
        if ($(window).width() <= 1024) {
            if (stellarActivated === true) {
                $(window).data('plugin_stellar').destroy();
                stellarActivated = false;
            }
        } else {
            if (stellarActivated === false) {
                $.stellar({
                    horizontalScrolling: false,
                    responsive: true,
            });
                
                $(window).data('plugin_stellar').init();
                
                stellarActivated = true;
            }
        }
    }

    /* 2. TimeCircles Countdown */
	$(".countdown").TimeCircles({
		fg_width: 0.02,
		bg_width: 0.3,
		circle_bg_color: '#7b7571',
		time: {
			Days: { color: '#f9667e', text: 'Dienos' },
			Hours: { color: '#f9667e', text: 'Valandos' },
			Minutes: { color: '#f9667e', text: 'Minučių' },
			Seconds: { color: '#f9667e', text: 'Sekundžių' }
		},
		count_past_zero: false
    });
    
	$(window).on("resize", function(){
	    $(".countdown").TimeCircles().rebuild();
	});
});
