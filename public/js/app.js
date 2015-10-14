'use strict';

angular.module('inventoryApp', [ 'ngRoute', 'mainCtrl', 'itemService' ])

.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
          $routeProvider.

            when('/', {
            // templateUrl: 'views/item-list.html',
            // controller: 'itemListController'
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
