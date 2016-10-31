 var app = angular.module('pirates',['ngRoute'])

 app.config(function ($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
         templateUrl: '../views/pirates.html',
         controller: function ($scope) {
           $scope.msg = 'hello world'
         }
       })
       .when('/login', {
         templateUrl: 'login',
         controller: 'LoginCtrl'
       })
       .otherwise({
         redirectTo: '/'
       });

    //  $locationProvider.html5Mode(true);
   });
