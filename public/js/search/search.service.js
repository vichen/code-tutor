<<<<<<< 0a5e91da556cdff90d3704475a93189c44aabc55
(function() {
  
  'use strict';

  /* Services */

  angular.module('myApp')

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

/* Services */

angular.module('myApp')

.service('SearchService', function($http) {

  // TODO: figure out which query to search by
  this.getTutors = function(query) {
    // TODO: make sure to get api url from server side
    return $http.get(url)
      .then(function(res) {
        return res.data.tutors;
      })
  }
});
  
>>>>>>> add search controller and service
