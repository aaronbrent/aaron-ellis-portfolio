var app = angular.module("AdventureApp");

app.service("homeService", ["$http", function ($http) {

    this.getOutings = function () {
        return $http.get("/api/outing").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.saveOuting = function (outing) {
        return $http.post("/api/outing", outing).then(function (response) {
            
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.getProducts = function () {
        return $http.get('/api/user').then(function (response) {

            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    }
}]);

app.controller("homeController", ["$scope", "UserService", function ($scope, UserService) {  
    $scope.userService = UserService;
    $scope.test = "it's connected"
}]);