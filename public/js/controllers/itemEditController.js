'use strict';

/**
 * itemEditController is a controller for
 * the editing view (modal)
 *
 * @namespace inventoryApp
 * @class itemEditController
 * @constructor
 * @param $scope An Angular scope
 * @param $routeParams A service for retrieving the current set of route parameters
 * @param Item Our own defined service for interfacing with http requests.
 */
angular.module('inventoryApp')
.controller('itemEditController', function($scope,$rootScope,$route, $routeParams, Item) {
  $scope.itemData = {};

  $scope.updateItem = function() {
    if (!$routeParams.itemId)
      return;
    Item.update($routeParams.itemId, $scope.itemData).success(function(response) {
      if (response.errors) {
        alert('update failed');
      } else {
        console.log('Update successful', response);
        $scope.itemData = {};
        $route.reload();
        Item.all().success(function(data) {
          $rootScope.items = data;
        });
      }
    });
  };
});
