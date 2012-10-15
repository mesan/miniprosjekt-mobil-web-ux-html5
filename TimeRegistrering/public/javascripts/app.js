angular.module('timereg', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/timereg', 			{templateUrl : '/assets/partials/timereg-liste.html', 		controller : TimeregListeCtrl})
			.when('/timereg/new', 		{templateUrl : '/assets/partials/timereg-ny.html', 			controller : TimeregNyCtrl})
			.when('/timereg/:id/edit', 	{templateUrl : '/assets/partials/timereg-endre.html', 		controller : TimeregEndreCtrl})
			.when('/timereg/:id', 		{templateUrl : '/assets/partials/timereg-detaljer.html', 	controller : TimeregDetaljeCtrl})
			.otherwise({redirectTo : '/timereg'});
		} 
	]);