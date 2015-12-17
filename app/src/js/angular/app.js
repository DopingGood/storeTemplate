var app = angular.module("storeHomeApp", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'js/angular/views/first.html'
		})
		.state('womenCatalog', {
			url: '/womenCatalog',
			templateUrl: 'js/angular/views/womenCatalog.html'
		});
	$urlRouterProvider.otherwise('/');
});