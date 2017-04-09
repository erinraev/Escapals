angular.module('escapalsApp').controller('mainCtrl', function($scope, $state, $stateParams, mainService) {

$scope.$state = $state;
var id = $stateParams.id;
var event = $scope.event = mainService.event;

$scope.getActivities = function() {
    mainService.getActivities().then(function(response) {
      $scope.activityTypes = response.data;
    });
  }
  $scope.getActivities();

  $scope.getEvents = function() {
      mainService.getEvents().then(function(response) {
        $scope.events = response.data;
      });
    }
  $scope.getEvents();

  var events = $scope.events;

  $scope.viewEvent = function (id) {
    mainService.getEvent(id).then(function(response) {
      console.log(response)
        //  $scope.event = response.data;
        $state.go('eventinfo')
       });
   }

  $scope.newEvent = {};
  $scope.newUser = {};
  $scope.mainUser = {};


  var activityIds = $scope.newEvent.activityTypes = [];

  $scope.toggleActivityType = function (activityTypeId) {
    var index = activityIds.indexOf(activityTypeId);
    if (index === -1) {
        activityIds.push(activityTypeId);
      } else {
        activityIds.splice(index, 1);
      }
      console.log(activityIds)
  };

  $scope.createEvent = function (event) {
    mainService.createEvent(event);
  }

  var userActivityIds = $scope.newUser.activityTypes = [];

  $scope.toggleUserActivityType = function (activityTypeId) {
    var index = activityIds.indexOf(activityTypeId);
    if (index === -1) {
        userActivityIds.push(activityTypeId);
      } else {
        userActivityIds.splice(index, 1);
      }
      console.log(userActivityIds)
  };

  // Users

  $scope.createUser = function (user) {
    mainService.createUser(user);
  }

  $scope.getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.users = response.data;
      });
    }
  $scope.getUsers();


  $scope.getMainUser = function(user) {
    mainService.getMainUser(user).then(function(response){
      $scope.mainUser = response
      console.log('response on controller', response)
      $state.go('home');
    });

    }

  $scope.mainUser = mainService.mainUser;
  console.log('main user', $scope.mainUser)

  $scope.hideButton = function() {
    if ($scope.mainUser !== {}) {
      console.log($scope.mainUser)
      return true;
    }
  }

});
