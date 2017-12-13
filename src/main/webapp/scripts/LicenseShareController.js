var app = angular.module('licenseSharingApp');
app.controller("LicenseShareController", ['$scope', '$rootScope', '$http', function(sc, rs, hp) {
    sc.isLogin = "";
	sc.login = function () {

    	hp.get("http://jbossews-hybridteam.rhcloud.com/login?"+"username=" + sc.EmailAddress + "&password=" + sc.Password )
        .success(function (response) {
          sc.isLogin = response.IsAuthenicated;

      	  if (sc.isLogin == "true") {
      	    window.location.replace("/public/applicationMasterPage.html#/hybridteam");
          } else {
          	alert ("Re-enter User Name and Pass-Word.")
          }

        });

    };
}]);