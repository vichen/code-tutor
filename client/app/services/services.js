
angular.module('codellama.services', [])

.factory('Auth', function ($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin/',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup/',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  /* Update logged-in and is-tutor status with these functions*/

  var isLoggedIn = function () {
    return !!$window.localStorage.getItem('com.codellama');
  };

  var isLoggedInAndTutor = function() {
    return isLoggedIn() && $window.localStorage.getItem('isTutor') !== 'false';
  };

  var isLoggedInButNotTutor = function() {
    return isLoggedIn() && $window.localStorage.getItem('isTutor') !== 'true';
  };

  var signout = function () {
    $window.localStorage.removeItem('com.codellama');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isLoggedIn: isLoggedIn,
    isLoggedInAndTutor: isLoggedInAndTutor,
    isLoggedInButNotTutor: isLoggedInButNotTutor,
    signout: signout
  };

});