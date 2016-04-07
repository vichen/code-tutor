'use strict';

/* Controllers */

angular.module('myApp')

.controller('SearchController', function ($scope, SearchService) {
  $scope.tutorData;

  $scope.search = function(query) {
    SearchService.getTutors(query)
      .then(function(tutors) {
        $scope.tutorData = tutors;
      })
  }
   

});
