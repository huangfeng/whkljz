/**
 * Created by huangfeng on 2014/8/29.
 */
"use strict";

define(["controllers/module"], function(controllers) {

    return controllers.controller("NavController", ["$scope", "$state",
        function ($scope, $state) {
            var parent_bj;
            $scope.isOnTop 	= true;
            $scope._continue 	= false;
            $scope.isHome 		= false;
            $scope.homeHeight  = 0;
            if (!$("#header").hasClass("navbar-fix-top")) {

                if($("#home").length > 0) {
                    // @Home
                    $scope.isHome 		= true;
                    $scope._continue 	= true;
                    parent_bj 			= $("#home");
                } else {
                    // @NOT HOME
                    var parent_section 	= $("#header").parent().find('section').attr('class');
                    parent_bj		    = $("#header").parent().find('section');

                    if(parent_section == 'pace-running' || parent_section == undefined || parent_section == '') {} else {
                        $scope._continue 	= true;
                        $scope.isHome 	= false;
                    }

                }

                if ($scope._continue) {
                    if (parent_bj.length > 0) {
                        $scope.homeHeight = parent_bj.height();
                        $(window).resize(function() {
                            $scope.homeHeight = parent_bj.height();
                        });
                    }
                } else {
                    $scope.homeHeight = 0;
                }

                // Padding correction
                if($scope.isHome === false && $scope.homeHeight > 0) {
                    $scope.homeHeight = parent_bj.height() + 140;
                }

                /*
                 window.isOnTop = avoid bad actions on each scroll
                 Benefits: no unseen jquery actions, faster rendering
                 */
                $(window).scroll(function() {
                    if($(document).scrollTop() > $scope.homeHeight) {
                        if($scope.isOnTop === true) {
                            $("#header").addClass("navbar-fixed-top");
                            $scope.isOnTop = false;
                        }
                    } else {
                        if($scope.isOnTop === false) {
                            $("#header").removeClass("navbar-fixed-top");
                            $scope.isOnTop = true;
                        }
                    }
                });
            }

            var scrollToHome = $("#scollToHome");
            if (scrollToHome) {
                scrollToHome.click(function(e) {
                    e.preventDefault();

                    var href = $(this).attr('href');

                    if(href != '#') {
                        $.scrollTo(href, 1500, {easing:'easeInOutExpo'});
                    }
                });
            }
        }
    ]);
});