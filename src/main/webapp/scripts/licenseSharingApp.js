angular.module('licenseSharingApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/licenseshare',
            {
                templateUrl: 'html/LicenseShare.html',
                controllerUrl: 'LicenseShareController'
            }).
            otherwise({ redirectTo: '/' });

}]);
