(function() {
  
  'use strict';

  /* Controllers */ 

  angular.module('myApp') 

  .controller('SearchController', function ($scope, SearchService) {

    // initialize empty tutor data array that will hold search results
    $scope.tutorData = [];
<<<<<<< bfea58b112448ce32665b81f8a864aa68436cc9b

    // define search on scope
    $scope.search = function(query) {

      // call function from SearchService
      SearchService.getTutors(query)

        // upon success, assign returned tutors data to scope's tutorData
        .then(function(tutors) {
          $scope.tutorData = tutors;
        })

        // on error, console log error
        .catch(function(error) {
          console.log('There was an error retrieving tutor data: ', error);
        })
    }
     

  });
})();
=======

    // define search on scope
    $scope.search = function(query) {

      // call function from SearchService
      SearchService.getTutors(query)

        // upon success, assign returned tutors data to scope's tutorData
        .then(function(tutors) {
          $scope.tutorData = tutors;
        })

        // on error, console log error
        .catch(function(error) {
          console.log('There was an error retrieving tutor data: ', error);
        })
    }
     

  });
})();

>>>>>>> modify search controller, service, and html
