(function () {

'use strict';

/**
 * @ngdoc overview
 * @name kinetixApp
 * @description
 * # kinetixApp
 *
 * Main module of the application.
 */
angular
  .module('kinetixApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'angularGrid',
    'videosharing-embed'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $httpProvider.defaults.cache = true;

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      $stateProvider
        // home
        .state('app', {
          url:'/',
          views: {
            'header': {
              templateUrl: 'views/header.html'
            },
            'primarycontent': {
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl',
              controllerAs: 'home',
              data: {position: [1,1]}
            }
          }
        })
        .state('app.about', {
          url:'about',
          views: {
            'primarycontent@': {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl',
              controllerAs: 'about',
              data: {position: [1,0]}
            }
          }
        })

          // .state('app.about.details', {
          //   url: '/details',
          //   views: {
          //     'details@app.about':{
          //       templateUrl:'views/about-details.html',
          //     }
          //   }
          // })

        .state('app.culture', {
          url:'culture',
          views: {
            'primarycontent@': {
              templateUrl: 'views/culture.html',
              controller: 'CultureCtrl',
              controllerAs: 'culture',
              data: {position: [0,2]}
            }
          }
        })

        .state('app.contact', {
          url:'contact',
          views: {
            'primarycontent@': {
              templateUrl: 'views/contact.html',
              controller: 'ContactCtrl',
              controllerAs: 'contact',
              data: {position: [2,1]}
            }
          }
        })

        .state('app.showreel', {
          url:'showreel',
          views: {
            'primarycontent@': {
              templateUrl: 'views/showreel.html',
            }
          }
        })


        .state('app.projects', {
            url:'our-work',
            views: {
              'primarycontent@': {
                templateUrl:'views/projects.html',
                controller: 'ProjectsCtrl'
              }
            },
        })
                .state('app.projects.detail', {
                  url: '/:id',
                  views: {
                    'detail@app.projects':{
                      templateUrl:'views/project-details.html',
                      controller: 'ProjectsDetailCtrl'
                    }
                  },
                  resolve: {
                    delay: function($q, $timeout) {
                      var delay = $q.defer();
                      $timeout(delay.resolve, 1200);
                      return delay.promise;
                    }
                  }
                });

      }])


    .run(function($rootScope, $location, AnalyticsService) {
        $rootScope.$on('$stateChangeSuccess', function() {
          AnalyticsService.recordPageview($location.url());
       });
    });



})();
