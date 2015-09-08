'use strict';

var pongControllers = angular.module('anowPong.controllers', [])

.controller('ScoresListCtrl', function($rootScope, $scope, $state, popupService, $window, Scores) {
  $('li').removeClass('active').siblings('#nav-home').addClass('active');
  
  // Adding sample data for $rootScope. 
  // I know there is a better way to do this, but I ran out of time.
  $rootScope.orderProp = '-date';
  $rootScope.scores =[{
    "id": 1,
    "date": "2015-09-02",
    "p1Name": "Krista",
    "p1Score": 10,
    "p2Name": "Sarah",
    "p2Score": 1
  },
  {
    "id": 2,
    "date": "2015-09-05",
    "p1Name": "Jim",
    "p1Score": 5,
    "p2Name": "Jones",
    "p2Score": 6
  },
  {
    "id": 3,
    "date": "2015-09-04",
    "p1Name": "Adrian",
    "p1Score": 9,
    "p2Name": "Grayson",
    "p2Score": 2
  },
  {
    "id": 4,
    "date": "2015-08-19",
    "p1Name": "Stephen",
    "p1Score": 10,
    "p2Name": "Britnee",
    "p2Score": 1
  }];
  
  // Get all scores ordered by date descending. Add the calculated field 'winner' to the model. Issues a GET to /scores
  $scope.scores = Scores.query(function() {
    $scope.scores.forEach(function(score) {
      score.winner = score.p1Score > score.p2Score ? score.p1Name : score.p2Name;
    });
  });
  $scope.orderProp = '-date';
  
  $scope.deleteScore = function(score) { // Delete a score. Issues a DELETE to /scores/:id
    if (popupService.showPopup('Are you sure you want to delete this score?')) {
      score.$delete(function() {
        $window.location.href = '/' // On success, go back to home ('scores' state).
      });
    }
  };
})
.controller('ScoreCreateCtrl', function($scope, $state, $stateParams, Scores) {
  $('li').removeClass('active').siblings('#nav-add').addClass('active');
  
  $scope.score = new Scores();  // Create new 'score' instance. Properties will be set via ng-model on UI.

  $scope.addScore = function() { // Create a new score. Issues a POST to /scores/
    $scope.score.$save(function() {
      $state.go('scores'); // On success, go back to home ('scores' state).
    });
  };
})
.controller('ScoreEditCtrl', function($scope, $state, $stateParams, Scores) {
  $('li').removeClass('active').siblings('#nav-edit').addClass('active');
  
  $scope.updateScore = function() { // Update the edited score. Issues a PUT to /scores/:id
    $scope.score.$update(function() {
      $state.go('scores'); // On success, go back to home ('scores' state).
    });
  };

  $scope.loadScore = function() { // Issues a GET request to /scores/:id to get a score to update.
    $scope.score = Scores.get({ id: $stateParams.id });
  };

  $scope.loadScore(); // Load a score which can be edited in the UI.
});