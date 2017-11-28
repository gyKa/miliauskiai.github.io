/* Stellar Parallax */
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
