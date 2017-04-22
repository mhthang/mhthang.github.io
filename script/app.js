var ThangProApp =  angular.module("ThangProApp", [])
         .controller("ViduController", function($scope,$http) {
            $http({
  				method: 'GET',
  				url: 'https://thangproapitest.herokuapp.com/'
				}).then(function successCallback(response) {
    				console.log("ok");
  				}, function errorCallback(response) {
    				console.log("no ok");
  				});
         	});
