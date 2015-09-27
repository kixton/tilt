'use strict';

/**
 * @ngdoc function
 * @name tiltApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tiltApp
 */
angular.module('tiltApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
