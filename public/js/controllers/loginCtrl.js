angular.module('escapalsApp').controller('loginCtrl', function($scope, $state, $stateParams, mainService) {

  $scope.getMainUser = function(user) {
    mainService.getMainUser(user).then(function(response){
      if (typeof response !== "undefined") {
        $scope.mainUser = response;
        $state.go('home');
      } else {
        console.log('user not found')
        $scope.wrongLoginCheck = function(mainUser) {
          if (typeof $scope.mainUser == "undefined") {
            return true;
          }
        }
      }
    });
  }
  
});
