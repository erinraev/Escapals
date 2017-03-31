angular.module('escapalsApp').service('mainService', function($http){

  var mainUser = {};

  var events = [];

  var userJoinedEvents = [];

  var userCreatedEvents = [];

  this.getActivities = function() {
    return $http({
      method: 'GET',
      url: './activities'
    });
  }

});
