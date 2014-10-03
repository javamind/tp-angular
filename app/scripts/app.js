'use strict';

angular.module('myconfs', ['ngResource', 'ngRoute', 'myconfsControllers', 'myconfsFilters', 'myconfsServices']);

angular.module('myconfs').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/liste.html',
            controller: 'ConfCtrl'
        })
        .when('/conference/:confId', {
            templateUrl: 'views/detail.html',
            controller: 'ConfDetailCtrl'
        })
        .when('/editconference/:confId', {
            templateUrl: 'views/formulaire.html',
            controller: 'ConfDetailCtrl'
        })
        .otherwise({redirectTo: '/'});
});
