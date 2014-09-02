/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("fitVids", [function() {
        return function(scope, element, attrs) {
            $(element).fitVids();
        };
    }]);
});