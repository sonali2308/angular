/*angular.module("myApp").controller("studentsController",["$scope","studentService",
                                                         function($scope,studentService){
	function init()
	{
		getStu();
	}

	
	function getStu(){
		$scope.st=studentService.getStudent();
	  console.log("heelllo");
	}
	
	
	
	init();
	
}]);*/


angular.module("myApp").controller("studentsController",["studentService",
                                                         function(studentService){
	function init()
	{
		getStu();
	}

	
	function getStu(){
		this.st=studentService.getStudent();
	  console.log("heelllo");
	}
	
	
	
	init();
	
}]);


