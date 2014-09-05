/**
 * Created by huangfeng on 2014/9/5.
 */
"use strict";

define(["services/module"], function(app) {
    return app.factory('UserAgentUtil', ['$http',
        function($http) {
            var isMobileAgent = function() {
                var isMobileAgent = navigator.userAgent.match(/.*Mobile.*/);
                if (isMobileAgent) {
                    return true;
                } else {
                    return false;
                }
            };

            return {
                isMobileAgent : function() {
                    return isMobileAgent();
                }
            }
        }
    ]);
});