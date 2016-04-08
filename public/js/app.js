(function() { 

  // <script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>
  // <script src="../node_modules/angular/angular.min.js"></script>
  // <script src="../node_modules/angular/angular-route.min.js"></script>
  // <script src="js/app.js"></script>
  // <script src="js/search/search.service.js"></script>
  // <script src="js/search/search.controller.js"></script>



'use strict';

// Since we're using a webpack, we have to require dependencies
// in each module. Webpacks make each file its own module
require('jquery');
require('angular');
require('angular-route');

// Declare app level module which depends on filters, and services

  angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        // The difference between templateUrl and template
        // is that templateUrl requires a path, whereas template
        // requires a string. By requiring the file, we are essentially
        // piping the entire file as a string to angular's template method
        // We need a string, because this webpack cannot load files. It loads
        // reads everything as a string, then it bundles everything as a string.
        template: require('./search/search.html'),
        controller: 'SearchController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });

  // Load modules here. This must come after the configuration
  require('./search');
})();
