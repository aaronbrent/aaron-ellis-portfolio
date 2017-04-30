var app = angular.module("AdventureApp", ["ngRoute", "AdventureApp.Auth", "ngDragDrop"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html"
        })
        .when("/outings", {
            templateUrl: "components/outings/outing.html",
            controller: "OutingController"
        })
        .when("/profile", {
            templateUrl: "components/profile/profile.html",
            controller: "ProfileController"
        })
        .when("/forgot", {
            templateUrl: "components/auth/forgot/forgot.html",
            controller: "ForgotPasswordController"
        })
        .when("/addGear", {
            templateUrl: "components/gear/addGear.html",
            controller: "ProductController"
        })
});


