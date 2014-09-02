/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("videoBg", [function() {
        return function(scope, element, attrs) {
            var videoBg = {
                ogv:'assets/images/preview/video/ink.ogv',
                webm:'assets/images/preview/video/ink.webm',
                poster:'assets/images/preview/video/ink.jpg',
                scale:true,
                zIndex:0,
                position:"absolute",
                opacity:1,
                fullscreen:true
            };
            $(element).videoBG(videoBg);
        };
    }]);
});