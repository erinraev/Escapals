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

   .state('profile', {
    url: '/my-profile',
    templateUrl: 'views/profile.html',
    controller: 'mainCtrl'
  })

  .state('search', {
   url: '/find-escapes',
   templateUrl: 'views/findescape.html',
   controller: 'mainCtrl'
 })

 .state('eventinfo', {
  url: '/escape-info',
  templateUrl: 'views/eventinfo.html',
  controller: 'mainCtrl'
})

 .state('test', {
  url: '/test',
  templateUrl: 'views/test.html',
  controller: 'mainCtrl'
})

     $urlRouterProvider
       .otherwise('/')

  });
