'use strict';

angular.module('inventoryApp')

.controller('itemListController', function($scope, $location, Item) {
  $scope.orderProp = 'date_added';
  $scope.selectedItemId = -1;

  $scope.selectItem = function(item) {
    $scope.selectedItemId = item._id;
  }

  $scope.isLoading = true;

  // grab all the items at page load
  Item.all().success(function(data) {
    $scope.isLoading = false;
    $scope.items = data;
  });

  // function to add an item
  $scope.addItem = function() {
  };

  // function to delete a item
  $scope.deleteItem = function() {
    if ($location.path() === '/') {
      return false;
    }

    $scope.isLoading = true;
    var _id = $location.path().slice(1);

    Item.delete(_id).success(function(data) {
      // get all items to update the table
      Item.all().success(function(data) {
        $location.path('/');
        $scope.isLoading = false;
        $scope.items = data;
        $scope.selectedItemId = -1;
      });
    });
  };

});
