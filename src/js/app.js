'use strict';

angular.module('anowPong', ['ui.router', 'anowPong.controllers', 'anowPong.services'])

.config(function($stateProvider) {
  $stateProvider
    .state('scores', { // State for showing all scores.
      url: '/scores',
      views: {
        'main': { templateUrl: '/tpl/scores.html', controller: 'ScoresListCtrl' },
        'scores-nav': { templateUrl: '/tpl/scores-nav.html', controller: 'ScoresListCtrl' }
      }
  }).state('addScore', { // State for adding a new score.
    url: '/scores/new',
    views: {
        'main': { templateUrl: '/tpl/score-add.html', controller: 'ScoreCreateCtrl' },
        'scores-nav': { templateUrl: '/tpl/scores-nav.html', controller: 'ScoresListCtrl' }
      }
  }).state('editScore', { // State for updating a score.
    url: '/scores/:id/edit',
    views: {
      'main': { templateUrl: '/tpl/score-edit.html', controller: 'ScoreEditCtrl' },
      'scores-nav': { templateUrl: '/tpl/scores-nav.html', controller: 'ScoresListCtrl' }
    }
  });
}).run(function($state) {
  $state.go('scores'); // Make a transition to 'scores' state when app starts.
});