/**
 * Created by huangfeng on 2014/9/3.
 */
"use strict";

define(["directives/module"], function(app) {
    return app.directive("stellar", [function() {
        return function(scope, element, attrs) {
            $.stellar("refresh");
        };
    }]);
});