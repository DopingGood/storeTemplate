app.directive('newArrivals', function () {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
	templateUrl: 'js/angular/directives/newArrivals.html'
	};
});