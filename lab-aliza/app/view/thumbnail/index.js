'use strict';

const angular = require('angular');
const hackersApp = angular.module('hackersApp');

hackersApp.controller('ThumbnailController', ['$rootScope', function($rootScope){
  this.images = $rootScope.imageData;
}]);
