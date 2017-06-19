(function (angular) {
	'use strict';
	 var app = angular.module("myApp",["ngRoute","myModule"]);
	 app.config(["$routeProvider",function($routeProvider){
	 	$routeProvider.when("/",{
	 		controller:"myCtrl",
	 		templateUrl:"./js/template.html"
	 	})
	 	.when("/active",{
	 		controller:"myCtrl",
	 		templateUrl:"./js/template.html"
	 	})
	 	.when("/completed",{
	 		controller:"myCtrl",
	 		templateUrl:"./js/template.html"
	 	})
	 	.otherwise({
	 		redirectTo:"/"
	 	});
	 }]);
	 app.controller("myCtrl",["$scope","myService","$routeParams","$location",function($scope,myService,$routeParams,$location){
	 	$scope.items = myService.pullData();
	 	$scope.text = "";
	 	$scope.index = $location.hash();
	 	console.log($scope.index);
	 	console.log($location.path());
	 	switch($scope.index)
	 	{
	 		case "/":
	 		$scope.scan = {completed:undefined};
	 		break;
	 		case "/active":
	 		$scope.scan = {completed:false};
	 		break;
	 		case "/completed":
	 		$scope.scan = {completed:true};
	 		break;
	 		default:
	 		return;
	 	}
	 	$scope.add = function(){
	 		if($scope.text=="")
	 		{
	 			return;
	 		}
	 		myService.addOne($scope.text);
	 		$scope.text = "";
	 	}
	 	$scope.destroy = function(id){
	 		myService.delete(id);
	 	}
	 	$scope.clear = function(){
	 		myService.clearAll();
	 		$scope.items = myService.pullData();
	 	}
	 }]);

})(angular);
