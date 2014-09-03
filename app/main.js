/**
 * Created by huangfeng on 2014/8/28.
 */
"use strict";

require.config({

        baseUrl: "app",

        paths: {
            "text": "../assets/plugins/requirejs/text",
            "domReady": "../assets/plugins/requirejs/domReady",
            "jquery": "../assets/plugins/jquery/jquery-1.11.1",
            "angular": "../assets/plugins/angular/angular",
            "uiRouter": "../assets/plugins/angular-ui/angular-ui-router",
            "jqueryStellar": "../assets/plugins/jquery-stellar/jquery.stellar.min",
            "jqueryVideoBG": "../assets/plugins/jquery-videoBG/jquery.videoBG",
            "jqueryNiceScroll": "../assets/plugins/nicescroll/jquery.nicescroll.min",
            "jqueryFitVids": "../assets/plugins/jquery-fitvids/jquery.fitvids.min",
            "jqueryEasing": "../assets/plugins/jquery-easing/jquery.easing.min",
            "jqueryScrollTo": "../assets/plugins/jquery-scrollto/jquery.scrollTo.min",
            "jqueryOnePageNav": "../assets/plugins/jquery-onepage-nav/jquery.nav",
            "jqueryAppear": "../assets/plugins/jquery-appear/jquery.appear",
            "jqueryCountTo": "../assets/plugins/jquery-countTo/jquery.countTo",
            "jqueryOwlCarousel": "../assets/plugins/jquery-owl-carousel/owl.carousel.min",
            "library": "../assets/plugin"
        },

        shim: {
            "jquery": {
                exports: "jquery"
            },
            "angular": {
                exports: "angular"
            },
            "uiRouter": {
                deps: ["angular"],
                exports: "uiRouter"
            },
            "jqueryStellar":{
                deps: ["jquery"]
            },
            "jqueryVideoBG": {
                deps: ["jquery"]
            },
            "jqueryNiceScroll": {
                deps: ["jquery"]
            },
            "jqueryFitVids": {
                deps: ["jquery"]
            },
            "jqueryEasing": {
                deps: ["jquery"]
            },
            "jqueryScrollTo": {
                deps: ["jquery"]
            },
            "jqueryOnePageNav": {
                deps: ["jquery"]
            },
            "jqueryAppear": {
                deps: ["jquery"]
            },
            "jqueryCountTo": {
                deps: ["jquery"]
            },
            "jqueryOwlCarousel": {
                deps: ["jquery"]
            }

        },

        priority: [
            "angular"
        ],

        deps: ["./boots"]

    }
);