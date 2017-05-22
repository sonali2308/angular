angular.module("myApp").service("studentService", function() {

	var service = {
		getStudent : getStudent
	};
	return service;

	function getStudent() {
		var students = [ {
			name : "sonali",
			subject : "sql"
		}, {
			name : "shreya",
			subject : "commerce"
		}, {
			name : "gagan",
			subject : "pl/sql"
		}, {
			name : "amey",
			subject : "java"
		}

		];
		return students;

	}
	;

});
