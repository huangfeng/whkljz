/**
 * Created by huangfeng on 2014/8/28.
 */
define(
    [
        "./app"
    ]
    ,function(app) {
        return app.config(["$stateProvider", "$urlRouterProvider",
            function($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("/main/home");

                $stateProvider.state("main", {
                    abstract: true,
                    url: "/main",
                    templateUrl: "app/views/layout/main.html",
                    controller: "MainController"
                }).state("main.home", {
                    url: "/home",
                    views: {
                        "title": {
                            templateUrl: "app/views/home/title.html",
                            controller: "TitleController"
                        },

                        "nav": {
                            templateUrl: "app/views/layout/nav.html",
                            controller: "NavController"
                        },

                        "about": {
                            templateUrl: "app/views/home/about.html",
                            controller: "AboutController"
                        },

                        "services": {
                            templateUrl: "app/views/home/services.html",
                            controller: "ServicesController"
                        },

                        "guide": {
                            templateUrl: "app/views/home/guide.html",
                            controller: "GuideController"
                        },

                        "team": {
                            templateUrl: "app/views/home/team.html",
                            controller: "TeamController"
                        },

                        "contact": {
                            templateUrl: "app/views/home/contact.html",
                            controller: "ContactController"
                        },

                        "footer": {
                            templateUrl: "app/views/layout/footer.html",
                            controller: "FooterController"
                        }

                    }

                });
            }
        ]);
    }
);
