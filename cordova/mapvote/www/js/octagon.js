var equitiesApp = angular.module('octagon', ['mobile-angular-ui', 'ngRoute', 'octagonControllers']);
/*
 * 
equitiesApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl'
                }).
                when('/top', {
                    templateUrl: 'top.html',
                    controller: 'TopCtrl'
                })
    }]); 
 */
var equitiesControllers = angular.module('octagonControllers', []);
equitiesControllers.controller('HomeCtrl', ['$scope', '$sce', '$routeParams', '$http', function($scope, $sce, $routeParams, $http) {
        $scope.isLoading = true;
        $http.get("http://treehacks.cloudapp.net/cheese/god.php?action=setsquares&sun_long=123&sun_lat=32.08")
                .success(function(data, status, headers, config) {
                    $scope.faker=data;
                })
                .error(function(data, status, headers, config) {
                    $scope.error = "Connection error";
                    $scope.isLoading = false;
                });
    }
]);
