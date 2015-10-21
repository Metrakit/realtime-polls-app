var app = angular.module('polls', ['ngRoute', 'ngResource'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/list', {
			templateUrl: 'partials/list.html',
			controller: 'PollListController'
		})
		.when('/view/:id', {
			templateUrl: 'partials/view.html',
			controller: 'PollViewController'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'PollCreateController'
		})
		.otherwise({redirectTo: '/list'});
	}]
);