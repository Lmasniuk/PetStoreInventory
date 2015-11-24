angular.module('inventoryApp')
	.controller('mainController', function($scope,$routeParams,Item){
		$scope.selectedItemId = -1;
		// $scope.item;
		Item.all().success(function(data) {
    		$scope.items = data;
		});
	});