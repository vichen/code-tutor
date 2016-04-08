<<<<<<< bfea58b112448ce32665b81f8a864aa68436cc9b
<<<<<<< 0a5e91da556cdff90d3704475a93189c44aabc55
=======
>>>>>>> modify search controller, service, and html
(function() {
  
  'use strict';

  /* Services */

  angular.module('myApp')
<<<<<<< bfea58b112448ce32665b81f8a864aa68436cc9b

  .service('SearchService', function($http) {

    // TODO: figure out which query to search by
    this.getTutors = function(query) {

      // TODO: make sure to get api url from server side
      // make GET request to api (db) to get tutor data array
      return $http.get(url)
        .then(function(res) {
          return res.data.tutors;
        })
    }
  });
})();

=======
'use strict';
=======
>>>>>>> modify search controller, service, and html

  .service('SearchService', function($http) {

    // TODO: figure out which query to search by
    this.getTutors = function(query) {

      // TODO: make sure to get api url from server side
      // make GET request to api (db) to get tutor data array
      return $http.get(url)
        .then(function(res) {
          return res.data.tutors;
        })
    }
  });
})();

  
>>>>>>> add search controller and service
