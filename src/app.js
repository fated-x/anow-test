angular.module('anowPong', [])
.controller('PongScoresCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.scores = [{
    winner: 'Krista',
    loser: 'Sarah',
    date: '2015-08-27T15:00'
  },
  {
    winner: 'Dan',
    loser: 'Jim',
    date: '2015-08-26T14:10'
  },
  {
    winner: 'Sarah',
    loser: 'Dan',
    date: '2015-07-15T10:00'
  },
  {
    winner: 'Krista',
    loser: 'Dan',
    date: '2015-07-13T12:00'
  }];
}])
.directive('pongScores', [function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: '/tpl/scores.html',
    controller: 'PongScoresCtrl',
    link: function(scope, element, attrs) {
    }
  };
}]);