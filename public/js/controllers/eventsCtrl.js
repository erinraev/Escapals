angular.module('escapalsApp').controller('eventsCtrl', function($scope, $state, $stateParams, mainService) {

  $scope.viewEvent = function (id) {
    mainService.getEvent(id).then(function(response) {
      console.log(response)
        //  $scope.event = response.data;
        $state.go('eventinfo')
       });
   }

});
