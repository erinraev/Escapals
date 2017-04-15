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
      var users = response.data;
      function findUser(user) {
        return user.email === userLogin.email && user.password === userLogin.password;
      };
      var mainUser = users.find(findUser);
      ourService.mainUser = mainUser;
      ourService.mainUserActivities = mainUser.activityTypes;
      return mainUser;
    });
  }



});
