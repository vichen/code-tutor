angular.module('codellama.nav', ['codellama.services'])

.controller('NavController', function($scope, Auth) {
  $scope.data = 3;
  $scope.loggedIn = function() {
    var x = Auth.isAuth();
    console.log(x);
    return x;
  };
});