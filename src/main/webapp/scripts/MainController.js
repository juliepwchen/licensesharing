var app = angular.module('licenseSharingApp');
app.controller('MainContoller', function ($scope, $location) {
    $scope.ChangeView = function () {
        $location.url('/licenseshare');
    }
});
