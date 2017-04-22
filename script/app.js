var ThangProApp =  angular.module("ThangProApp", [])
         .controller("ViduController", function($scope,$http) {
            $http({
  				method: 'GET',
  				url: 'http://localhost:3201/test'
				}).then(function successCallback(response) {
    				console.log("ok");
  				}, function errorCallback(response) {
    				console.log("no ok");
  				});
         	});