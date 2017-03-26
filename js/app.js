angular.module('escapalsApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'mainCtrl'
      })

      .state('signup', {
       url: '/join-escapals',
       templateUrl: 'views/signup.html',
       controller: 'mainCtrl'
     })

     .state('login', {
      url: '/log-in',
      templateUrl: 'views/login.html',
      controller: 'mainCtrl'
    })

    .state('create', {
     url: '/create-an-escape',
     templateUrl: 'views/create.html',
     controller: 'mainCtrl'
   })

     $urlRouterProvider
       .otherwise('/')

  });
