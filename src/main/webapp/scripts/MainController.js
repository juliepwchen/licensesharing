var app = angular.module('licenseSharingApp');
app.controller("LicenseShareController", ['$scope', '$rootScope', '$http', function(sc, rs, hp) {
    $scope.ChangeView = function () {
        $location.url('/licenseshare');
    }
}]);
