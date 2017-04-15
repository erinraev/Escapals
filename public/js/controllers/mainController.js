angular.module('escapalsApp').controller('mainCtrl', function($scope, $state, $stateParams, mainService, mainUser) {

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

  $scope.mainUser = {};

  // Users

  $scope.getUsers = function() {
      mainService.getUsers().then(function(response) {
        $scope.users = response.data;
      });
    }
  $scope.getUsers();
// console.log(333333, mainUser)
  // $scope.mainUser = mainUser;


  // $scope.mainUser = mainService.mainUser;
  // console.log('1111main user', $scope.mainUser)

  $scope.mainUserActivities = mainService.mainUserActivities
  // console.log('main user activities', $scope.mainUserActivities)

  //
  // $scope.checkMainUser = function() {
  //   console.log("222checkMainUser", $scope.mainUser)
  //   if (!$scope.mainUser) {
  //     console.log('if')
  //     $scope.hideLogin = true;
  //   } else {
  //     console.log('if')
  //     $scope.hideLogin = false;
  //   }
  // }
  //
  // $scope.checkMainUser();


});
