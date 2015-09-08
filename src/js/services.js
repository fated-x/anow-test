'use strict';

var pongServices = angular.module('anowPong.services', ['ngResource'])

.factory('Scores', ['$resource', function($resource) {
  return $resource('http://localhost:3000/scores/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}])
.service('popupService', function($window) {
  this.showPopup = function(message) {
    return $window.confirm(message);
  }
});