angular.module('escapalsApp').controller('navCtrl', function($scope, $state, $stateParams, mainService) {
  $scope.showLogin = true;
  console.log("nav ctrl")
  $scope.checkMainUser = function() {
    console.log("mainService.mainuser", mainService.mainUser)
    if (mainService.mainUser) {
      console.log('if')
      $scope.showLogin = false;
    } else {
      console.log('else')
      $scope.showLogin = true;
    }
  }

  $scope.checkMainUser();
});
