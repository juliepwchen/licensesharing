angular.module('licenseSharingApp', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/licenseshare',
            {
                templateUrl: '/html/LicenseShare.html',
                controllerUrl: 'LicenseShareController'
            }).
            otherwise({ redirectTo: '/' });

}]);
