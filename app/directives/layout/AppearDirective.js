/**
 * Created by huangfeng on 2014/9/1.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("appear", [function() {
        return function(scope, element, attrs) {
            var $animationName = attrs.dataAnimation;
            if ($animationName) {
                $(element).appear(function() {
                    $(this).addClass('animated').addClass($animationName);
                });
            }

            var $animationDirection = attrs.dataAnimationDirection;
            if ($animationDirection) {
                if ($animationDirection === "animate_from_top") {
                    $(element).appear(function() {
                        $(this).delay(150).animate({opacity:1,top:"0px"},1000);
                    });
                } else if ($animationDirection === "animate_from_bottom") {
                    $(element).appear(function() {
                        $(this).delay(150).animate({opacity:1,bottom:"0px"},1000);
                    });
                } else if ($animationDirection === "animate_from_left") {
                    $(element).appear(function() {
                        $(this).delay(150).animate({opacity:1,left:"0px"},1000);
                    });
                } else {
                    $(element).appear(function() {
                        $(this).delay(150).animate({opacity:1,right:"0px"},1000);
                    });
                }
            }
        };
    }]);
});