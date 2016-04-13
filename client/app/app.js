
  angular.module('codellama', [
    'codellama.tutor',
    'codellama.search',
    'codellama.auth',
    'ngRoute'])

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'app/homepage/home.html',
      })
      .when('/search', {
        templateUrl: 'app/search/searchResults.html'
      })

      .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'app/auth/signin.html',
        controller: 'AuthController'
      })

      .otherwise({
        redirectTo: '/'
      });
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
