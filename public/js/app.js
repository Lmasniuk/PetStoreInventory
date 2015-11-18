'use strict';

/**
 * Top level module of the inventory app.
 * 
 * @module inventoryApp
 * @requires ngRoute, itemService
 */
angular.module('inventoryApp', [
  'ngRoute',
  // 'mainCtrl',
  'itemService'
])

.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
          $routeProvider.

            when('/', {
          }).

            when('/:itemId', {
            templateUrl: 'views/item-detail.html',
            controller: 'itemDetailController'
          }).

            otherwise({
            redirectTo: '/'
          });

          $locationProvider.html5Mode(true);
        }]);
