'use strict';

/**
 * @ngdoc overview
 * @name pratoApp
 * @description
 * # pratoApp
 *
 * Main module of the application.
 */
angular
  .module('pratoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/song', {
        templateUrl: 'views/song.html',
        controller: 'SongCtrl',
        controllerAs: 'song'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
