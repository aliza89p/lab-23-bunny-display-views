'use strict';

require('./error.scss');

const angular = require('angular');
const hackersApp = angular.module('hackersApp');

hackersApp.controller('ErrorController', ['$rootScope', function($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}]);
