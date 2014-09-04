/**
 * Created by huangfeng on 2014/8/28.
 */
"use strict";

define(
    [
        "angular",
        "uiRouter",
        "uiBootstrap",
        "controllers/index",
//        "services/index",
        "directives/index"
    ]
    ,function(ng) {

        return ng.module("app", [
            "app.controllers",
//            "app.services",
            "app.directives",
            "ui.router",
            "ui.bootstrap"

        ]);

    }
);
