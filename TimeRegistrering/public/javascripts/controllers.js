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
     
    $scope.slettArbeid = function(id) {
    	$http({
    		method: 'DELETE',
    		url: '/timereg/' + id    		
    	})
    	.success(function(data, status, headers, config) {    		    		    		
    		for (var i = 0; i < $scope.timeregistreringer.length; i++) {
    			var timereg = $scope.timeregistreringer[i];
    			
    			if (timereg.id == id) {
    				$scope.timeregistreringer.splice(i, 1);
    				break;
    			}
    		}
    		
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
		url: '/timereg/' + $routeParams.id
	})
	.success(function(data, status, headers, config) {
		$scope.arbeid = data;
	})
	.error(function(data, status, headers, config) {
		alert("Feil ved innehenting av arbeid med id " + $routeParams.id);
	});
	
	$scope.slettArbeid = function(id) {
    	$http({
    		method: 'DELETE',
    		url: '/timereg/' + id    		
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
		url: '/timereg/' + $routeParams.id + '/edit'
	})
	.success(function(data, status, headers, config) {
		$scope.arbeid = data;
	})
	.error(function(data, status, headers, config) {
		alert("Feil ved innehenting av arbeid med id " + $routeParams.id);
	});
	
	$scope.oppdaterArbeid = function() {
		$http({
			method: 'PUT',
			url: '/timereg/' + $routeParams.id,
			data: $scope.arbeid
		})
		.success(function(data, status, headers, config) {
			window.location.hash = '#/timereg/' + $routeParams.id;
		})
		.error(function(data, status, headers, config) {
			alert("Feil ved oppdatering av arbeid med id " + $routeParams.id);
		});
	}
}