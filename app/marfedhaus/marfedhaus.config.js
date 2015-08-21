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
        templateUrl: 'views/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('dogs', {
        url: '/dogs',
        templateUrl: 'views/dogs.html',
        controller: 'DogsCtrl',
        controllerAs: 'vm'
      })
      .state('dog', {
        url: '/dogs/{id}',
        templateUrl: 'views/dog.html',
        controller: 'DogCtrl',
        controllerAs: 'vm'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
