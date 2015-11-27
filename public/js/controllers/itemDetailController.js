'use strict';

/**
 * itemDetailController is a controller for
 * the views of individual items
 *
 * @namespace inventoryApp
 * @class itemDetailController
 * @constructor
 * @param $scope An Angular scope
 * @param $routeParams A service for retrieving the current set of route parameters
 * @param Item Our own defined service for interfacing with http requests.
 */
angular.module('inventoryApp')

.controller('itemDetailController', function($scope,$rootScope, $routeParams, Item) {
  Item.get($routeParams.itemId).success(function(data) {
  	$rootScope.item = data;
  })
});
