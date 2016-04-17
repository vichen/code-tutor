
angular.module('codellama.auth', [])

.controller('AuthController', function($scope, $rootScope, $window, $location, Auth) {

  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {

        $rootScope.loggedIn = true;

        $window.localStorage.setItem('com.codellama', token);

        // check if user is a tutor and
        // keep track of that in local storage as well
        // not yet tested on (real) users that are tutors
        if ($scope.user.isTutor === true) {
          $window.localStorage.setItem('isTutor', true);
          $rootScope.loggedInAndTutor = true;
          $rootScope.loggedInNotTutor = false;
        } else {
          $window.localStorage.setItem('isTutor', false);
          $rootScope.loggedInAndTutor = false;
          $rootScope.loggedInNotTutor = true;
        }

        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.codellama', token);
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

})

.controller('LogoutController', function($location, localStorageService) {
  return localStorageService.remove('com.codellama');
  $location.path('/');
});







