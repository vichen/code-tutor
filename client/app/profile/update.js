//inject angular file upload directives and services.
var app = angular.module('codellama.fileUpload', ['ngFileUpload', 'checklist-model']);

app.controller('uploadCtrl', ['$scope', 'Upload', '$timeout', '$location', '$rootScope', function ($scope, Upload, $timeout, $location, $rootScope) {
  $scope.data = {};
  $scope.data.subjects = [];
  $scope.data.location = {};

  $scope.subjects = [
    'Javascript',
    'C',
    'Python',
    'Ruby',
    'Angular',
    'React',
    'Backbone',
    'HTML',
    'CSS'
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

  $scope.uploadPic = function(file) { //uploads pic and/or new profile information
    if (!file) { var file = {}; } else { $scope.data.file = file; }

    file.upload = Upload.upload({
      url: 'api/users/profile',
      data: $scope.data
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
      // reset become tutor option, if a pic was uploaded
      if (file) { // NOT WORKING
        $rootScope.isTutor = true;
      }
      // redirect to home
      $location.path('/');

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