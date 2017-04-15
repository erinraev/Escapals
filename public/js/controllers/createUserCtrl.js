angular.module('escapalsApp').controller('createUserCtrl', function($scope, $state, $stateParams, mainService) {

  $scope.newUser = {};

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

  $scope.createUser = function (user) {
    mainService.createUser(user);
  }


});
