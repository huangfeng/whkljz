/**
 * Created by huangfeng on 2014/8/28.
 */
define([
    "require",
    "angular",
    "jquery",
    "twBootstrap",
    "jqueryStellar",
    "jqueryVideoBG",
    "jqueryNiceScroll",
    "jqueryFitVids",
    "jqueryEasing",
    "jqueryScrollTo",
    "jqueryOnePageNav",
    "jqueryAppear",
    "jqueryCountTo",
    "jqueryOwlCarousel",
    "baiduMap",
    "baiduMapSearchInfoWindow",
    "baiduMapTrafficControl",
    "app",
    "routers"
], function (require, ng) {
    "use strict";

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(["domReady!"], function (document) {
        ng.bootstrap(document, ["app"]);
    });
});