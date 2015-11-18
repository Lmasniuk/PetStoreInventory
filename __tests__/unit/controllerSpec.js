'use strict';

describe('inventory app controllers', function(){
  beforeEach(module('inventoryApp'));
  // beforeEach(module('itemService'));

  describe('itemListController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/items/').
        respond([{name: 'a'}, {name: 'b'}]);

      scope = $rootScope.$new();
      ctrl = $controller('itemListController', {$scope: scope});
    }));


    it('should create "items" model with 2 items fetched from xhr', function() {
      expect(scope.items).toEqual(undefined);
      $httpBackend.flush();
      expect(scope.items).toEqual([{name: 'a'}, {name: 'b'}]);
    });

    it('should update selectedItemId', function() {
      scope.selectItem({_id: 5});
      expect(scope.selectedItemId).toBe(5);
    });


    it('should have no item selected at the initial state', function() {
      expect(scope.selectedItemId).toBe(-1);
    });

  });


  describe('itemDetailController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/items/').
        respond({name: 'a'});

      scope = $rootScope.$new();
      ctrl = $controller('itemListController', {$scope: scope});
    }));


    it('should create "items" model with 1 item fetched from xhr', function() {
      expect(scope.items).toEqual(undefined);
      $httpBackend.flush();
      expect(scope.items).toEqual({name: 'a'});
    });

  });


  xdescribe('itemEditController', function(){
  });

});
