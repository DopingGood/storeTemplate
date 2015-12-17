app.directive('slickCarousel', function() {
	return {
		restrict: "A",
		scope: {
		},
		link: function(scope, element, attrs) {
			$('.carousel').carousel({
    			interval: 0
			});
		}
	};
});