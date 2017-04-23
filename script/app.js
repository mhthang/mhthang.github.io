var ThangProApp =  angular.module("ThangProApp", [])
         .controller("ViduController", function($scope,$http) {
            $http({
  				method: 'POST',
  				url: 'https://thangapi.herokuapp.com',
		    		headers:{'Content-Type': 'application/json;charset=utf-8'},
		    		data :{}
				}).then(function successCallback(response) {
    				console.log("ok");
		    		console.log(response.a);
  				}, function errorCallback(response) {
    				console.log("no ok");
  				});
         	});
