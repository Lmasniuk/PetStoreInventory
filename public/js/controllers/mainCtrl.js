'use strict';

angular.module('mainCtrl', ['itemService'])

.controller('itemListController', function($scope, $http, Item) {
  $scope.orderProp = 'date_added';

	$scope.isLoading = true;

	// grab all the items at page load
	Item.all().success(function(data) {
		$scope.isLoading = false;
		$scope.items = data;
	});

	// function to delete a item
	$scope.deleteItem = function(id) {
		$scope.isLoading = true;

		Item.delete(id).success(function(data) {
			// get all items to update the table
			Item.all().success(function(data) {
				$scope.isLoading = false;
				$scope.items = data;
			});

		});
	};

})

.controller('itemDetailController', function($scope, $routeParams, $http) {
	Item.get($routeParams.item_id).success(function(data) {
		$scope.item = data;
	});

});
