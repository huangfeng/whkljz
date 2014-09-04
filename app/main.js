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
            "uiBootstrap": "../assets/plugins/angular-ui/ui-bootstrap",
            "uiBootstrapTpls": "../assets/plugins/angular-ui/ui-bootstrap-tpls",
            "twBootstrap": "../assets/plugins/bootstrap/js/bootstrap",
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
            "baiduMap": "../assets/plugins/baidumap/baiduMap",
            "baiduMapSearchInfoWindow": "../assets/plugins/baidumap/SearchInfoWindow",
            "baiduMapTrafficControl": "../assets/plugins/baidumap/TrafficControl",
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
            "uiBootstrap": {
                deps: ["angular", "jquery"],
                exports: "uiBootstrap"
            },
            "uiBootstrapTpls": {
                deps: ["angular", "jquery", "uiBootstrap"]
            },
            "twBootstrap": {
                deps: ["jquery"]
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
            },
            "baiduMap": {
                exports: "baiduMap"
            },
            "baiduMapSearchInfoWindow": {
                deps: ["baiduMap"]
            },
            "baiduMapTrafficControl": {
                deps: ["baiduMap"]
            }
        },

        priority: [
            "angular"
        ],

        deps: ["./boots"]

    }
);