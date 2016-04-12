
  angular.module('codellama', [
    'codellama.tutor',
    'codellama.search',
    'ngRoute'])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/homepage/home.html',
        controller: 'SearchController'
      })
      .when('/search', {
        templateUrl: 'app/search/searchResults.html'
      })
      ;
      // .when('/signup', {
      //   templateUrl: '',
      //   controller: ''
      // })
      // .when('/login', {
      //   templateUrl: '',
      //   controller: ''
      // })
      // .when('/view1', {
      //   templateUrl: 'partials/partial1',
      //   controller: 'MyCtrl1'
      // })
      // .when('/view2', {
      //   templateUrl: 'partials/partial2',
      //   controller: 'MyCtrl2'
      // })
      // .otherwise({
      //   redirectTo: '/view1'
      // });

  });
