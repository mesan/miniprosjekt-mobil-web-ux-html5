'use strict';

/* Controllers */

function TimeregListeCtrl($scope, $http) {
    
    $http({
        method: 'GET',
        url: '/timereg'
    })
    .success(function(data, status, headers, config) {
        $scope.timeregistreringer = data;
    })
    .error(function(data, status, headers, config) {
        alert("Feil ved innhenting av timeregistreringer.")
    });
     
    $scope.slettArbeid = function(ansattNr) {
    	$http({
    		method: 'DELETE',
    		url: '/timereg/' + ansattNr    		
    	})
    	.success(function(data, status, headers, config) {
    		window.location.hash = '#/timereg';
    	})
    	.error(function(data, status, headers, config) {
    		alert("Feil ved sletting av timeregistrering.");
    	});
    }
    
    $scope.order = 'dato';
}

function TimeregDetaljCtrl($scope, $http, $routeParams) {
	$http({
		method: 'GET',
		url: '/timereg/' + $routeParams.ansattNr
	})
	.success(function(data, status, headers, config) {
		$scope.arbeid = data;
	})
	.error(function(data, status, headers, config) {
		alert("Feil ved innehenting av arbeid med id " + $routeParams.ansattNr);
	});
	
	$scope.slettArbeid = function(ansattNr) {
    	$http({
    		method: 'DELETE',
    		url: '/timereg/' + ansattNr    		
    	})
    	.success(function(data, status, headers, config) {
    		window.location.hash = '#/timereg';
    	})
    	.error(function(data, status, headers, config) {
    		alert("Feil ved sletting av timeregistrering.");
    	});
    }
}

function TimeregNyCtrl($scope, $http) {
	$scope.arbeid = {};
	
	$scope.registrerArbeid = function() {
		$http({
			method: 'POST',
			url: '/timereg', 
			data: $scope.arbeid
		})
		.success(function(data, status, headers, config) {
			window.location.hash = '#/timereg';
		})
		.error(function(data, status, headers, config) {
			alert("Feil ved opprettelse timeregistrering.");
		});
	}
}

function TimeregEndreCtrl($scope, $http, $routeParams) {
	$http({
		method: 'GET',
		url: '/timereg/' + $routeParams.ansattNr + '/edit'
	})
	.success(function(data, status, headers, config) {
		$scope.arbeid = data;
	})
	.error(function(data, status, headers, config) {
		alert("Feil ved innehenting av arbeid med id " + $routeParams.ansattNr);
	});
	
	$scope.oppdaterArbeid = function() {
		$http({
			method: 'PUT',
			url: '/timereg/' + $routeParams.ansattNr,
			data: $scope.arbeid
		})
		.success(function(data, status, headers, config) {
			window.location.hash = '#/timereg/' + $routeParams.ansattNr;
		})
		.error(function(data, status, headers, config) {
			alert("Feil ved oppdatering av arbeid med id " + $routeParams.ansattNr);
		});
	}
}