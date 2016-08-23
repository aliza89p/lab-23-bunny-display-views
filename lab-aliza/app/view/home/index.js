'use strict';

const angular = require('angular');
const hackersApp = angular.module('hackersApp');

hackersApp.controller('HomeController', ['$rootScope', function($rootScope) {
  this.images = $rootScope.imageData;
}]);
