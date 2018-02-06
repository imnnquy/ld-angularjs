'use strict';
(function () {

  angular.module('ldApp.detail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/detail/:id', {
        templateUrl: 'detail/detail.html',
        controller: 'detailCtrl'
      });
    }])

    .controller('detailCtrl', ['$scope', '$rootScope', '$routeParams', 'commonService', function ($scope, $rootScope, $routeParams, commonService) {
      $rootScope.isHome = false;
      $rootScope.navigationTitle = $routeParams.id;
      commonService.getUser($routeParams.id).then((response => {
        $scope.currentUser = response.data;
      }));
    }])
})();