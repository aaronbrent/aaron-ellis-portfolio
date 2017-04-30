var app = angular.module("AdventureApp");

app.service("OutingService", ["$http", function ($http) {

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

    this.getProducts = function (){
        return $http.get('/api/user').then(function (response){
            
            return response.data;
        }, function (response) {
                alert("Error " + response.status + ": " + response.statusText);
            });
    }
}]);

app.controller("OutingController", ["$scope", "$http", "OutingService", function ($scope, $http, OutingService) {
    $scope.outing = {};
    $scope.outings = [];

    (function getProducts() {
        OutingService.getProducts().then(function (products) {
            console.log(products)
            $scope.products = products;

        });
    })();

    (function getOutings() {
        OutingService.getOutings().then(function (outings) {

            $scope.outings = outings;

        });
    })();
    
    $scope.list1 = {title: 'AngularJS - Drag Me'};
    $scope.list2 = {};

    $scope.saveOuting = function (outing) {
        console.log("click")
        console.log(outing)
        OutingService.saveOuting(outing);
    }
}]);
