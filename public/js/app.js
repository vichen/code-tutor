
(function() {

'use strict';

// Declare app level module which depends on filters, and services

  angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'search/search.html',
        controller: 'SearchController'
      })
      .otherwise({
        redirectTo: '/',
      })


    $locationProvider.html5Mode(true);
  });

})();
