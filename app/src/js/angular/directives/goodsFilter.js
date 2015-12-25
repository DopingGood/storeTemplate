app.directive('goodsFilter', function(){
	return {
		restrict: 'A',
		scope: {
		},
		link: function(scope, element, attrs) {
			$(document).ready(function() {
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

				var prevDef = function(e) {
					e.preventDefault();
				};
				//		Events that customize buttons
				var filterValue = {}; //объект с датой фильтра
				//		Attempt to post
				function postSender(array, div) {
					filterValue[array] = [];
					var liList = div.querySelectorAll("li[data-filter='selected'] a");
					for (i = 0; i < liList.length; i++) {
						var FChoiceValue = liList[i].textContent;
						filterValue[array].push(FChoiceValue);
					};
					var FValueJson = JSON.stringify(filterValue);
					var xhr = new XMLHttpRequest();
					xhr.open('POST', '/womenCatalog.html', true);
					xhr.setRequestHeader("content-type", "application/json");
					xhr.send(FValueJson);
				};
				var filterButton = document.querySelectorAll('.filter div.filter-select button');
				function filterButtonClick() {
					var slctedSlct = this.parentElement, 
					filterList = slctedSlct.querySelectorAll('li'), 
					slctBtn = this; // filter button
					for (var i = 0; i < filterList.length; i++) {
						filterList[i].addEventListener('click', function () {
							var slctedLi = this;
							if (slctedLi.className != 'selected') {
								slctedLi.setAttribute('data-filter', 'selected');
								if (slctedSlct.classList.contains('selectedFilter') == false) {
									slctedSlct.classList.add('selectedFilter');
								}
							}
							else if (slctedLi.className == 'selected') {
								var lengthOfli = slctedSlct.querySelectorAll('li.selected').length;
								slctedLi.removeAttribute('data-filter');
								if (lengthOfli == 1) {
									slctedSlct.classList.remove('selectedFilter');
								};
							};
							if (slctedSlct.classList.contains('fashion-filter') == true) {
								postSender('FFashion', slctedSlct);
							}
							else if (slctedSlct.classList.contains('type-filter') == true) {
								postSender('FType', slctedSlct);
							}
							else if (slctedSlct.classList.contains('color-filter') == true) {
								postSender('FColor', slctedSlct);
							}
							else if (slctedSlct.classList.contains('brand-filter') == true) {
								postSender('FBrand', slctedSlct);
							}
							else if (slctedSlct.classList.contains('size-filter') == true) {
								postSender('FSize', slctedSlct);
							}
							else if (slctedSlct.classList.contains('price-filter') == true) {
								postSender('FPrice', slctedSlct);
							};
							//		**************
						});
					};
				};
				for (var i = 0; i < filterButton.length; i++) {
					filterButton[i].addEventListener('click', filterButtonClick);
				};
				// filterSmBtn.onblur = function() {
				// 	ddMenuSm.classList.remove('el-visible');
				// };
			});
		}
	}
});