angular.module('escapalsApp').controller('mainCtrl', function($scope, $state, mainService) {

  $scope.$state = $state;
  $scope.activityTypes = mainService.getActivities();

  $scope.newEvent = {};
  $scope.newEvent.activityTypes = [];
  // $scope.toggleActivityType = function (activityTypeId) {
  //   var index = $scope.activityTypes.indexOf(activityTypeId);
  //   if (index === -1) {
  //     $scope.activityTypes.push(activityTypeId);
  //   } else {
  //     $scope.activityTypes.splice(index, 1);
  //   }


});
