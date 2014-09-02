/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("niceScroll", [function() {
        return function(scope, element, attrs) {

            $(element).niceScroll({
                // background:"#ccc",
                scrollspeed:60,
                mousescrollstep:35,
                cursorborder:0,
                cursorcolor:"rgba(0,0,0,.6)",
                horizrailenabled:false,
                zindex:99999,
                autohidemode:false,
                cursorwidth:8
            });

        };
    }]);
});