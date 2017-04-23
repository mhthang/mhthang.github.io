var ThangProApp =  angular.module("ThangProApp", [])
         .controller("ViduController", function($scope,$http) {
            $http({
  				method: 'POST',
  				url: 'https://thangapi.herokuapp.com/post',
		    		headers:{'Content-Type': 'application/json;charset=utf-8'}
				}).then(function successCallback(response) {
    				console.log("ok");
		    		console.log(response.data.a);
  				}, function errorCallback(response) {
    				console.log("no ok");
  				});
         	});
