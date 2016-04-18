angular.module('codellama.nav', [])

.controller('NavController', function($scope, $rootScope, Auth, $location) {

  // adds bootstrap active class if path matches href value
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

});