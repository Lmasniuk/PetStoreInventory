'use strict';

angular.module('inventoryApp')

.controller('itemDetailController', function($scope, $routeParams, Item) {
  Item.get($routeParams.itemId).success(function(data) {
    $scope.item = data;
  })
});
