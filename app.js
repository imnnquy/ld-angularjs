'use strict';

// Declare app level module which depends on views, and components
angular.module('ldApp', [
  'ngRoute',
  'ldApp.detail',
  'ldApp.home',
  'ldApp.directives',
  'ldApp.services'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}]);