'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/Contact', {
    templateUrl: 'views/Contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', [function() {

}]);