angular.module('codellama.tutor', [])

  .service('TutorService', function($http) {
    this.tutorData = null;

    this.getTutorProfile = function(username) {
      return $http({
        method: 'GET',
        url: '/api/tutor/' + username
      })
      .then(function (resp) {
        return resp.data;
      });
    };

    this.likeTutor = function(current) {
      var data = current++;
      return $http({
        method: 'PUT',
        data: data,
        url: '/api/tutor/addLike'
      });
    };
  })

  .controller('TutorController', function ($scope, TutorService, $routeParams) {
    TutorService.getTutorProfile($routeParams.username)
    .then(function(data) {
      TutorService.tutorData = data;
    });

    $scope.likeTutor = TutorService.likeTutor;

    $scope.$watch(
      function() { return TutorService.tutorData; },

      function(newVal) {
        $scope.tutor = newVal;
      }
    );
  });


