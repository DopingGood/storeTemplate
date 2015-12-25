app.directive('countrySelect', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(document).ready(function() {
				$('.country').selectpicker({
					dropupAuto: false
				});
				// function selects(className, title) {
				// 	$(className).selectpicker({
				// 		dropupAuto: false,
				// 		title: title
				// 	});
				// }
				// selects('.fashion-filter', 'Fashion');
				// selects('.type-filter', 'Product Type');
				// selects('.color-filter', 'Color');
				// selects('.brand-filter', 'Brand');
				// selects('.size-filter', 'Size');
				// selects('.price-filter', 'Price Range');
			});
		}
	}
})