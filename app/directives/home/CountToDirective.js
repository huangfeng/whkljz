/**
 * Created by huangfeng on 2014/9/1.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("countTo", [function() {
        return function(scope, element, attrs) {
            $(element).appear(function() {
                $(this).each(function() {
                    var $to = parseInt($(this).html());
                    $(this).countTo({
                        from: 				0,
                        to: 				$to,
                        speed: 				4000,
                        refreshInterval: 	40
                    });
                });
            });
        };
    }]);
});