/**
 * Created by huangfeng on 2014/9/2.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("owlCarousel", [function() {
        return function(scope, element, attrs) {
            var options = {
                slideSpeed: 		300,
                paginationSpeed: 	400
            };

            var navigation = attrs.dataNavigation;
            if (navigation) {
                navigation = (navigation == 'true') ? true : false,
                options.navigation = navigation;
            }
            var singleItem 	= attrs.dataSingleitem;
            if (singleItem) {
                singleItem = (singleItem == 'true') ? true : false,
                options.singleItem = singleItem;
            }
            var autoPlay 	= attrs.dataAutoplay;
            if (autoPlay) {
                autoPlay 	= (autoPlay == 'true') ? true : false;
                options.autoPlay = autoPlay;
            }
            var items = attrs.items;
            if (items) {
                options.items = parseInt(items);
            }

            $(element).owlCarousel(options);
        };
    }]);
});