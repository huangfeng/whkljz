/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("onePageNav", [function() {

        return function(scope, element, attrs) {
            $(element).onePageNav({
                currentClass: 'active',
                easing: 		'easeInOutExpo',
                scrollSpeed:	1500,
                begin: function() {
                    //Hack so you can click other menu items after the initial click
                    $('body').append('<div id="iOSHack" style="height: 1px;"></div>');
                },
                end: function() {
                    $('#iOSHack').remove();
                },
                scrollOffset: 60,
                changeHash: false,
                filter: ':not(.external)'
            });
        };
    }]);
});