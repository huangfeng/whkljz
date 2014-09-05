/**
 * Created by huangfeng on 2014/9/5.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("prettyPhoto", [function() {
        return function(scope, element, attrs) {
            $(element).prettyPhoto({
                deeplinking:				false,
                slideshow: 				5000,
                autoplay_slideshow: 		false,
                animationSpeed: 			'fast', 			/* fast/slow/normal */
                padding: 					40, 				/* padding for each side of the picture */
                opacity: 					0.75, 				/* Value betwee 0 and 1 */
                showTitle: 				true, 				/* true/false */
                allowresize: 				true, 				/* true/false */
                counter_separator_label:	'/', 				/* The separator for the gallery counter 1 "of" 2 */
                // theme: 					'default', 			/* default / facebook / light_rounded / dark_rounded / light_square / dark_square */
                hideflash: 				false, 				/* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
                modal: 						false, 				/* If set to true, only the close button will close the window */
                changepicturecallback: 		function(){}, 		/* Called everytime an item is shown/changed */
                callback: 					function(){}, 		/* Called when prettyPhoto is closed */
                social_tools:              ''
            });
        };
    }]);
});