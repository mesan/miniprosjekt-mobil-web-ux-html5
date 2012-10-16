'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/timereg', {templateUrl: 'assets/partials/liste.html', controller: TimeregListeCtrl});
    $routeProvider.when('/timereg/ny', {templateUrl: 'assets/partials/ny.html', controller: TimeregNyCtrl});
    $routeProvider.when('/timereg/:ansattNr', {templateUrl: 'assets/partials/detalj.html', controller: TimeregDetaljCtrl});
    $routeProvider.when('/timereg/:ansattNr/endre', {templateUrl: 'assets/partials/endre.html', controller: TimeregEndreCtrl});
    $routeProvider.otherwise({redirectTo: '/timereg'});
  }]);