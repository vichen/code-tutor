
angular.module('codellama.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
  $scope.dummyData = ['hi', 'I am', 'Fred'];

  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.codellama', token);
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

});


