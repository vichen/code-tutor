
angular.module('codellama.auth', [])

.controller('AuthController', function($scope, $window, $location, $http) {
  $scope.dummyData = ['hi', 'I am', 'Fred'];
  // we want form submit to ... connect to backend ... with email & password
  //
  $scope.user = {};
  var user = $scope.user;

  $scope.signin = function() {
    return $http({
      method: 'POST',
      url: '/api/users/signin/',
      data: $scope.user
    })
    .then(function (res) {
      $window.localStorage.setItem('com.codeLlama', res.data.token);
      console.dir($window.localStorage);
      $location.path('/'); // do we want it to redirect to home?
    })
    .catch(function (error) {
      console.error(error);
    });


  };


});