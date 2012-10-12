var timereg = angular.module('timereg', []);

timereg.controller('TimeregCtrl', function TimeregCtrl($scope, timeregStorage) {
var registrerteTimer = $scope.registrerteTimer = timeregStorage.get();
	$scope.leggTilTimereg = function(user) {
		timeregStorage.put(user);
	};
});

timereg.factory('timeregStorage', function() {
	return {
		get: function() {
			return [
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
		},
		put: function(user) {
			alert("save" + user.ansattnr);
		}
	};
});