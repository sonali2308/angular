angular.module("myApp").config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
	$routeProvider.caseInsensitiveMatch=true;
	
	//$locationProvider.html5Mode(true);                         
	$routeProvider
	
	.when("/Home",{
		templateUrl:"app/views/home.html",
		//template:"<h1>dsifsdofsfs</h1>",
		controller:"homeController",
		controllerAs:"homeCtrl"
		
	})
	
	.when("/students",{
		templateUrl:"app/views/students.html",
		controller:"studentsController",
		controllerAs:"studentsCtrl"
		
	})
	
	.when("/courses",{
		templateUrl:"app/views/courses.html",
		controller:"coursesController",
		controllerAs:"coursesCtrl"
		
	})
	
	.otherwise({
		redirectTo:"/home"
	});
	
	
	/* $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
   });
	*/
}]);

