'use strict';

angular.module('inventoryApp')

.controller('itemEditController', function($scope, $routeParams, Item) {
  // TODO
  $scope.createItem = function(newItem) {
    Item.create().success(function(response) {
    });
  };
});
