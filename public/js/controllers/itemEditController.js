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
.controller('itemEditController', function($scope, $routeParams, Item) {
  // TODO
  $scope.createItem = function(newItem) {
    Item.create().success(function(response) {
    });
  };
});
