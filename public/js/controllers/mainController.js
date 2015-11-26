angular.module('inventoryApp')
	.controller('mainController', function($scope,$routeParams,$rootScope,Item){
		$scope.selectedItemId = -1;
		// $scope.item;
		Item.all().success(function(data) {
    		$rootScope.items = data;
		});
	});