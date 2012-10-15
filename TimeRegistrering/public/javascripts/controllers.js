/*
 * Index action. 
 * 
 * GET: /timereg
 */
function TimeregListeCtrl($scope, $http) {
	
    $http({method: 'GET', url: '/timereg'}).
    success(function(data, status, headers, config) {
    	$scope.registrerteTimer = data;
    }).
    error(function(data, status, headers, config) {
    	alert("Feil i index.");
    });
};


/*
 * New action.
 * 
 * POST: /timereg
 */
function TimeregNyCtrl($scope, $http) {
			
	$scope.nyttArbeid = function() {
		var arbeid = {
			ansattNr: $scope.ansattNr,
			dato: $scope.dato,
			arbeid: $scope.arbeid,
			timer: $scope.timer,
			overtid: $scope.overtid,
			kommentar: $scope.kommentar
		};
		
		$http.post('/timereg', arbeid).
		success(function(data, status, headers, config) {
			window.location = '#/timereg';
		}). 
		error(function(data, status, headers, config) {
			alert("Feil i new.");
		});
	}
};


/*
 * Show action.
 * 
 * GET: /timereg/:id
 */
function TimeregDetaljeCtrl($scope, $http, $routeParams) {
	$http.get('/timereg/' + $routeParams.id)
	.success(function(data, status, headers, config) {
		$scope.ansattNr = data.ansattNr;
		$scope.dato = data.dato;
		$scope.arbeid = data.arbeid;
		$scope.timer = data.timer;
		$scope.overtid = data.overtid;
		$scope.kommentar = data.kommentar;
	})
	.error(function(data, status, headers, config) {
		alert("Feil i delete");
	});
}


/*
 * Edit action.
 * 
 * GET: /timereg/:id/edit
 */
function TimeregEndreCtrl($scope, $http, $routeParams) {
	$http.get('/timereg/' + $routeParams.id + '/edit')
	.success(function(data, status, headers, config) {
		$scope.ansattNr = data.ansattNr;
		$scope.dato = data.dato;
		$scope.arbeid = data.arbeid;
		$scope.timer = data.timer;
		$scope.overtid = data.overtid;
		$scope.kommentar = data.kommentar;
	})
	.error(function(data, status, headers, config) {
		console.log(data);
		alert("Feil i edit");
	});
	
	$scope.oppdaterArbeid = function() {
		var arbeid = {
				ansattNr: $scope.ansattNr,
				dato: $scope.dato,
				arbeid: $scope.arbeid,
				timer: $scope.timer,
				overtid: $scope.overtid,
				kommentar: $scope.kommentar
			};
			
			$http.put('/timereg/' + $routeParams.id, arbeid).
			success(function(data, status, headers, config) {
				window.location = '#/timereg/' + $routeParams.id;
 			}). 
			error(function(data, status, headers, config) {
				alert("Feil");
			});
	}
}