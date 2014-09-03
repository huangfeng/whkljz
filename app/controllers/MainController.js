/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["controllers/module"], function(controllers) {

    return controllers.controller("MainController", ["$rootScope",
        function ($rootScope) {
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 0
            });
            // responsive
            $(window).resize(function() {
                $.stellar('refresh');
                if($("#header nav").hasClass('in')) {
                    $("#mobileMenu").trigger("click");
                }
            });
        }
    ]);
});