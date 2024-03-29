/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["../module"], function(controllers) {

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

            $(".nicescroll").niceScroll({
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
        }
    ]);
});