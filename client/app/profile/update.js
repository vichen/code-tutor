//inject angular file upload directives and services.
var app = angular.module('codellama.fileUpload', ['ngFileUpload', 'checklist-model']);

app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
  $scope.data = {};
  $scope.data.subjects = [];
  $scope.data.location = {};

  $scope.subjects = [
    'javascript', 
    'c', 
    'python', 
    'ruby',
    'angular',
    'react',
    'backbone'
  ];

  $scope.cities = [
    'San Francisco',
    'San Jose',
    'San Mateo',
    'Cupertino',
    'Mountain View',
    'Sunnyvale',
    'Berkeley',
    'Oakland'
  ];

  $scope.uploadPic = function(file) {
    if (!file) { var file = {}; }
    
    file.upload = Upload.upload({
      url: 'api/users/profile',
      data: $scope.data
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