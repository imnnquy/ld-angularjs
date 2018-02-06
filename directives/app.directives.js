'use strict';
(function () {

    let ldApp = angular.module('ldApp.directives', [])

    ldApp.directive("toolbar", function () {
        return {
            restrict: "A",
            templateUrl: "directives/toolbar.directive.html"
        };
    });
})();