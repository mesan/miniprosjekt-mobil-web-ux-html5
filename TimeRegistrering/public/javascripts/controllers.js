function ListTimeRegCtrl($scope) {
	$scope.registrerteTimer = [
			{"id" : "1",
			"ansattnr" : "123",
			"dato" : "asd",
			"arbeid" : "arbeid 1",
			"timer" : "7,5",
			"overtid" : "false"},
			{"id" : "2",
				"ansattnr" : "123",
				"dato" : "asd",
				"arbeid" : "arbeid 2",
				"timer" : "3,5",
				"overtid" : "true"},
			{"id" : "3",
				"ansattnr" : "123",
				"dato" : "asd",
				"arbeid" : "arbeid 3",
				"timer" : "7,5",
				"overtid" : "false"}
	];
		
	$scope.test = "Hello world!";
	$scope.test2 = "asdasd";
};


function RegistrerTimerCtrl($scope) {
	$scope.ansattnr = "";
	$scope.dato = "";
	$scope.arbeid = "";
	$scope.timer = "";
	$scope.overtid = "";
	$scope.kommentar = "";
	
	$scope.setAnsattnr = function(new_ansattnr) {
		this.ansattnr = new_ansattnr;
    }
	
	$scope.printstatus = function() {
		alert("Ansatt: " + this.ansattnr + " Dato: " + this.dato + " Arbeid: " + this.arbeid + " Timer: " + this.timer + " Overtid: " + this.overtid + " Kommentar: " + this.kommentar);
	}
};