'use strict';

describe('ScoresListCtrl', function() {
  var $rootScope, $scope, $controller;
  
  beforeEach(module('anowPong'));
  
  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;

    $controller('ScoresListCtrl', {'$rootScope' : $rootScope, '$scope': $scope});
  }));

  it('should have 4 scores', function() {
    expect($rootScope.scores.length).to.equal(4);
  });
  
  it('should set the default value of orderProp', function() {
    expect($rootScope.orderProp).to.equal('-date');
  });
});