angular.module('llama.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {

        // TODO: understand what this line of code is doing
        $window.localStorage.setItem('com.llama', token);

        //once the user signs in, we want them to be able to view their own home page
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {

        $window.localStorage.setItem('com.llama', token);

        //once the user signs in, we want them to be able to view their own home page
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
