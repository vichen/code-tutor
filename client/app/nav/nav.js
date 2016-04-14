angular.module('codellama.nav', ['Auth'])

.controller('NavController', function($scope, Auth) {
  $scope.data = 3;
  $scope.loggedIn = function() {
    return Auth.isAuth();
  };
});