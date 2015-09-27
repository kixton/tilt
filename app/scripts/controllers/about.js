'use strict';

/**
 * @ngdoc function
 * @name tiltApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tiltApp
 */
angular.module('tiltApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
