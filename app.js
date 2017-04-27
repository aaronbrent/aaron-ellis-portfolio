var app = angular.module("portfolioApp", ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
        .when("/projects", {
            templateUrl: "projects/projects.html",
            controller: "projectsCtrl"
        })
        .when("/skills", {
            templateUrl: "skills/skills.html",
            controller: "skillsCtrl"
        })
        .when("/contact", {
            templateUrl: "contact/contact.html",
            controller: "contactCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);