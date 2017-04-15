angular.module('escapalsApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'navCtrl',
          resolve: {
            mainUser: function () {
              console.log('test')
              return 'something'
            // return mainService.getMainUser(userLogin);
            }
          }
      })

      .state('signup', {
       url: '/join-escapals',
       templateUrl: 'views/signup.html',
       controller: 'createUserCtrl'
     })

     .state('login', {
      url: '/log-in',
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    })

    .state('create', {
     url: '/create-an-escape',
     templateUrl: 'views/create.html',
     controller: 'createEventCtrl'
   })

   .state('profile', {
    url: '/my-profile',
    templateUrl: 'views/profile.html',
    controller: 'mainCtrl'
  })

  .state('search', {
   url: '/find-escapes',
   templateUrl: 'views/findescape.html',
   controller: 'eventsCtrl'
 })

 .state('eventinfo', {
  url: '/escape-info',
  templateUrl: 'views/eventinfo.html',
  controller: 'mainCtrl'
})

     $urlRouterProvider
       .otherwise('/')

  });
