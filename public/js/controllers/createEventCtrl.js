angular.module('escapalsApp').controller('createEventCtrl', function($scope, $state, $stateParams, mainService) {

  $scope.newEvent = {};
  
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

});
