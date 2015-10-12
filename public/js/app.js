'use strict';

angular.module('inventoryApp', [ 'ngRoute', 'mainCtrl', 'itemService' ])

.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
          $routeProvider.

            when('/items', {
            templateUrl: 'views/item-list.html',
            controller: 'itemListController'
          }).

            when('/items/:itemId', {
            templateUrl: 'views/item-detail.html',
            controller: 'itemDetailController'
          }).

            otherwise({
            redirectTo: '/items'
          });

          $locationProvider.html5Mode(true);
        }]);
