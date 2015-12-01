'use strict';

/**
 * itemListController is a controller for the the list of items
 * in the main view.
 *
 * @namespace inventoryApp
 * @class itemListController
 * @constructor
 * @param $scope An Angular scope
 * @param $location 
 * @param Item Our own defined service for interfacing with http requests.
 */
angular.module('inventoryApp')
.controller('itemListController', function($scope, $location, Item) {
  $scope.orderProp = '-date_added';
  $scope.filterProp = '';

  $scope.selectItem = function(item) {
    $scope.selectedItemId = item._id;
  }

  // function to delete a item
  $scope.deleteItem = function() {
    if ($location.path() === '/') {
      return false;
    }

    var _id = $location.path().slice(1);

    Item.delete(_id).success(function(data) {
      // get all items to update the table
      Item.all().success(function(data) {
        $location.path('/');
        $scope.items = data;
        $scope.selectedItemId = -1;
      });
    });
  };

});
