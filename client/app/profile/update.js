//inject angular file upload directives and services.
var app = angular.module('codellama.fileUpload', ['ngFileUpload', 'checklist-model']);

app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
  $scope.roles = [
    'javascript', 
    'c', 
    'python', 
    'ruby'
  ];
  $scope.user = {
    roles: []
  };

  $scope.uploadPic = function(file) {
    if (!file) { var file = {}; }
    
    file.upload = Upload.upload({
      url: 'api/users/profile',
      data: {name: $scope.name, email: $scope.email, bio: $scope.bio, file: file, isTutor: $scope.isTutor, languages: $scope.user.roles}
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0) {
        $scope.errorMsg = response.status + ': ' + response.data;
      }
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
  };
}]);