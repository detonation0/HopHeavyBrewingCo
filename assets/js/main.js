/*
    Solid State by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    "use strict";

    skel.breakpoints({
        xlarge:	'(max-width: 1680px)',
        large:	'(max-width: 1280px)',
        medium:	'(max-width: 980px)',
        small:	'(max-width: 736px)',
        xsmall:	'(max-width: 480px)'
    });

    $(function() {

        var	$window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner'),
            $intro = $('#intro');

        // Disable animations/transitions until the page has loaded.
            // $body.addClass('is-loading');

            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-loading');
                }, 100);
            });

        // Fix: Placeholder polyfill.
            $('form').placeholder();

        // Prioritize "important" elements on medium.
            skel.on('+medium -medium', function() {
                $.prioritize(
                    '.important\\28 medium\\29',
                    skel.breakpoint('medium').active
                );
            });

        // Header.
            if (skel.vars.IEVersion < 9)
                $header.removeClass('alt');

            if ($banner.length > 0
            &&	$header.hasClass('alt')) {

                $window.on('resize', function() { $window.trigger('scroll'); });

                $intro.scrollex({
                    bottom:		$header.outerHeight() + $intro.outerHeight() * 0.6,
                    terminate:	function() { $header.removeClass('alt'); },
                    enter:		function() { $header.addClass('alt'); },
                    leave:		function() { $header.removeClass('alt'); }
                });

            }

        // Menu.
            var $menu = $('#menu');

            $menu._locked = false;

            $menu._lock = function() {

                if ($menu._locked)
                    return false;

                $menu._locked = true;

                window.setTimeout(function() {
                    $menu._locked = false;
                }, 350);

                return true;

            };

            $menu._show = function() {

                if ($menu._lock())
                    $body.addClass('is-menu-visible');

            };

            $menu._hide = function() {

                if ($menu._lock())
                    $body.removeClass('is-menu-visible');

            };

            $menu._toggle = function() {

                if ($menu._lock())
                    $body.toggleClass('is-menu-visible');

            };

            $menu
                .appendTo($body)
                .on('click', function(event) {

                    event.stopPropagation();

                    // Hide.
                        $menu._hide();

                })
                .find('.inner')
                    .on('click', '.close', function(event) {

                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();

                        // Hide.
                            $menu._hide();

                    })
                    .on('click', function(event) {
                        event.stopPropagation();
                    })
                    .on('click', 'a', function(event) {

                        var href = $(this).attr('href');

                        event.preventDefault();
                        event.stopPropagation();

                        // Hide.
                            $menu._hide();

                        // Redirect.
                            window.setTimeout(function() {
                                window.location.href = href;
                            }, 350);

                    });

            $body
                .on('click', 'a[href="#menu"]', function(event) {

                    event.stopPropagation();
                    event.preventDefault();

                    // Toggle.
                        $menu._toggle();

                })
                .on('keydown', function(event) {

                    // Hide on escape.
                        if (event.keyCode == 27)
                            $menu._hide();

                });


        // Age Menu
            var $ageMenu = $('#ageMenu');

            // iPad fix
                if (navigator.userAgent.match(/iPad/i)) {
                    $ageMenu.css('position', 'absolute');
                }

            $ageMenu._locked = false;

            $ageMenu._lock = function() {

                if ($ageMenu._locked)
                    return false;

                $ageMenu._locked = true;

                window.setTimeout(function() {
                    $ageMenu._locked = false;
                }, 350);

                return true;

            };

            $ageMenu._show = function() {

                if ($ageMenu._lock())
                    $body.addClass('is-age-menu-visible');

            };

            $ageMenu._hide = function() {

                if ($ageMenu._lock())
                    $body.removeClass('is-age-menu-visible');

            };

            $ageMenu._toggle = function() {

                if ($ageMenu._lock())
                    $body.toggleClass('is-age-menu-visible');

            };

            $ageMenu
                .appendTo($body)
                .on('click', function(event) {

                    event.stopPropagation();

                    // Hide.
                        // $ageMenu._hide();

                })
                .find('.inner')
                    .on('click', '.close', function(event) {

                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();

                        // Hide.
                            // $ageMenu._hide();

                    })
                    .on('click', function(event) {
                        event.stopPropagation();
                    })
                    .on('click', 'a', function(event) {

                        var href = $(this).attr('href');

                        event.preventDefault();
                        event.stopPropagation();

                        // Hide.
                            // $ageMenu._hide();

                        // Redirect.
                            window.setTimeout(function() {
                                window.location.href = href;
                            }, 350);

                    });

    });

})(jQuery);
