var ThangProApp =  angular.module("ThangProApp", [])
         .controller("ViduController", function($scope,$http) {
            $http({
  				method: 'POST',
  				url: 'https://thangapi.herokuapp.com',
		    		headers:{'Access-Control-Allow-Origin':'*'},
		    		data :{}
				}).then(function successCallback(response) {
    				console.log("ok");
		    		console.log(response.a);
  				}, function errorCallback(response) {
    				console.log("no ok");
  				});
         	});
