$(document).ready(function() {
	$('.country').selectpicker({
		dropupAuto: false
	});

	function selects(className, title) {
		$(className).selectpicker({
			dropupAuto: false,
			title: title
		});
	}
	selects('.fashion-filter', 'Fashion');
	selects('.type-filter', 'Product Type');
	selects('.color-filter', 'Color');
	selects('.brand-filter', 'Brand');
	selects('.size-filter', 'Size');
	selects('.price-filter', 'Price Range');
	// for (var i = 0; i < filterList.length; i++) {
	// 	filterList[i].addEventListener('click', function() {
	// 		filterStrings = []; // Обнуляем массив
	// 		function createFilterArray () {
	// 			var slctedLiCol = document.querySelectorAll('li[data-filter="selected"]'); // массив выбранных li
	// 			for (i = 0; i < slctedLiCol.length; i++) { // для каждого выбраного Li
	// 				var filterLiText = slctedLiCol[i].textContent;
	// 				filterStrings.push(filterLiText); //  выбраного Li 
	// 			}
	// 			return filterStrings;
	// 		}
			// alert(console.log(filterStrings));
			// var data = new FormData();
			// data.append('array', filterStrings);

			// fetch('/womenCatalog', {
			// 	method: 'post',
			// 	body: data
			// });
	// 	});
	// };
});

