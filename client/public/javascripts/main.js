 var app = angular.module('pirates',['ngRoute'])

 app.config(function ($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
         templateUrl: '../views/pirates.html',
         controller: function ($scope,$log,$http) {
           $scope.view = {}
           $http.get('/api/v1').then(function (allPirates) {
             $log.info('all Pirates',allPirates)
             $scope.view.pirates = allPirates.data
           })

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
