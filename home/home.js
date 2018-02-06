'use strict';
(function () {

  angular.module('ldApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      });
    }])

    .controller('homeCtrl', ['$rootScope', 'commonService', '$scope', function ($rootScope, commonService, $scope) {
      $rootScope.isHome = true;
      $rootScope.navigationTitle = "Home";
      commonService.getAllUsers().then(values => {
        $scope.listUsers = values.map(item => item.data);
      })
    }])
})();