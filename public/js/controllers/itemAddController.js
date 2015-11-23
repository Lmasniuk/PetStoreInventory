'use strict';

/**
 * itemAddController is a controller for
 * the editing view (modal)
 *
 * @namespace inventoryApp
 * @class itemAddController
 * @constructor
 * @param $scope An Angular scope
 * @param Item Our own defined service for interfacing with http requests.
 */
angular.module('inventoryApp')
.controller('itemAddController', function($scope, Item) {
  $scope.itemData = {};

  $scope.updateItem = function() {
    Item.create($scope.itemData).success(function(response) {
      console.log(response);
      if (response.errors) {
        alert('create failed');
      } else {
        console.log('Create successful', response);
        $scope.itemData = {};
      }
    });
  };

});

