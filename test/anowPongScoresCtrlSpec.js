describe('check initial scope', function() {
  beforeEach(module('anowPong'));
  var scope;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('PongScoresCtrl', {$scope: scope});
  }));

  it('should have 4 seed items', function() {
    expect(scope.scores.length).to.equal(4);
  });

});