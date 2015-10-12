'use strict';

/* Controllers */

var inventoryControllers = angular.module('inventoryControllers', []);

inventoryControllers.controller('ItemListCtrl', function($scope, $http) {
  $http.get('data/items.json').success(function(data) {
    $scope.items = data;
  });

  $scope.orderProp = 'date_added';

  });

inventoryControllers.controller('ItemDetailCtrl', function($scope, $routeParams, $http) {
  // TODO: shouldn't be fetching everything. set up an api endpoint to GET a single item
  $http.get('data/items.json').success(function(data) {
    var id = +($routeParams.itemId) - 1;
    $scope.item = data[id];
  });

  });
