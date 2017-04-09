angular.module('escapalsApp').service('mainService', function($http){

  var mainUser = {};

  var events = [];

  var userJoinedEvents = [];

  var userCreatedEvents = [];

  this.getActivities = function() {
    return $http({
      method: 'GET',
      url: '/api/activities'
    });
  }

  this.getEvents = function() {
    return $http({
      method: 'GET',
      url: '/api/events'
    });
  }

  this.getEvent = function(id) {
    return $http({
      method: 'GET',
      url: '/api/events/' + id
    }).then(response => {
      this.event = response.data
    });
  }

  this.createEvent = function(event) {
    return $http({
      method: 'POST',
      url: '/api/events/',
      data: event
    })
  }

  this.createUser = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/',
      data: user
    })
  }

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/api/users'
    });
  }

  this.getUser = function(user) {
    return $http({
      method: 'GET',
      url: '/api/users/' + id
    }).then(response => {
      this.user = response.data
    });
  }

  this.getMainUser = function(userLogin) {
    var ourService = this;
    return $http({
      method: 'GET',
      url: '/api/users/'
    }).then(response => {

      var mainUser = response.data.filter(function(user) {
        return user.email === userLogin.email && user.password === userLogin.password;
      })[0];

      ourService.mainUser = mainUser;
      return mainUser;
      // var users = response.data;
      // users.forEach(function (user) {
      //   if (userLogin.email == user.email && userLogin.password == user.password) {
      //     this.mainUser = user;
      //     console.log("mainUser", this.mainUser)
      //     return this.mainUser;
      //   } else {
      //     console.log('user not found')
      //   }
      // });

    });
  }


});
