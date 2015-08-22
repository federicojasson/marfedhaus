(function() {
  'use strict';

  angular.module('marfedhaus').config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    config
  ]);

  function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'marfedhaus/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'marfedhaus/about.html'
      })
      .state('dogs', {
        url: '/dogs',
        templateUrl: 'marfedhaus/dogs.html',
        controller: 'DogsCtrl',
        controllerAs: 'vm',
        resolve: {
          dogs: [
            'Dogs',
            function(Dogs) {
              return Dogs.getAll();
            }
          ]
        }
      })
      .state('dog', {
        url: '/dogs/{id}',
        templateUrl: 'marfedhaus/dog.html',
        controller: 'DogCtrl',
        controllerAs: 'vm',
        resolve: {
          dog: [
            '$stateParams',
            'Dogs',
            function($stateParams, Dogs) {
              return Dogs.get($stateParams.id);
            }
          ]
        }
      })
      .state('news', {
        url: '/news',
        templateUrl: 'marfedhaus/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
