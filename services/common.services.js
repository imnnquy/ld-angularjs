'use strict';
(function () {

    let ldApp = angular.module('ldApp.services', []);

    ldApp.service("commonService", ['$http', '$q', function ($http, $q) {
        let self = this;
        self.listUsers = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];
        self.baseURL = 'https://api.github.com/users/';
        self.getAllUsers = function () {
            const requests = self.listUsers.map(user => $http.get(self.baseURL + user, {
                cache: true
            }));
            return $q.all(requests);
        }
        self.getUser = function (user) {
            return $http.get(self.baseURL + user, {
                cache: true
            });
        }
    }]);
})();