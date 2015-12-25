app.directive('smFilterMenu', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {
			// var filterValue = {}, //object with filter's data
			// Funtion for sending filter's data
			function postSender(array, div, span) {
				scope.filterValue[array] = [];
				var liList = div.querySelectorAll("li[data-filter='selected'] a");
				for (i = 0; i < liList.length; i++) {
					var FChoiceValue = liList[i].textContent;
					scope.filterValue[array].push(FChoiceValue);
				};
				var FValueJson = JSON.stringify(scope.filterValue);
				var xhr = new XMLHttpRequest();
				xhr.open('POST', '/womenCatalog.html', true);
				xhr.setRequestHeader("content-type", "application/json");
				xhr.send(FValueJson);
				// Change tittle on click
				if (scope.filterValue[array].length > 0) {
					var	FVA = scope.filterValue[array];
					span.textContent = '';
					for (i = 0; FVA.length > i; i++) {
						span.textContent += FVA[i] + ',' + ' ';
					};
				}
				else {
					span.textContent = span.getAttribute('data-filter-txt');
				}
			};
			// Select and unselect
			element.bind("click", function(e) {
				e.preventDefault();
				var filterSmBtn = document.getElementsByClassName('smf-btn')[0],
					ddMenuSm = document.getElementsByClassName('smf-drop-menu')[0],
					smSlctdLi = this.parentElement,
					thisUl = this,
					smSlctRaw;
				do {
					thisUl = thisUl.parentElement;
					if (thisUl.tagName == 'UL') {
						smSlctRaw = thisUl;
					}
				}
				while(thisUl.tagName != 'UL');
				var notSctdLi = smSlctRaw.getElementsByClassName("f-nSelectLi")[0];
				if (this.classList.contains('f-nSelect') == true) {
					if (notSctdLi.classList.contains("naughtS") == false) {
						var slctdLi1 = smSlctRaw.getElementsByClassName('flSelected');
						if (slctdLi1.length > 0) {
							for (; slctdLi1.length > 0;) {
								slctdLi1[0].removeAttribute('data-filter');
								slctdLi1[0].classList.remove('flSelected');
							};
						}
						notSctdLi.classList.add("naughtS");// указывает, что в строке ничего не выбрано
					}
					else {
						return false;
					}
				}
				else {
					if (smSlctdLi.getAttribute('data-filter') == null) {
						smSlctdLi.classList.add('flSelected');
						smSlctdLi.setAttribute('data-filter', 'selected');
						// var notSctdLi = smSlctRaw.getElementsByClassName("f-nSelectLi")[0];
						if (notSctdLi.classList.contains('naughtS') == true) {
							notSctdLi.classList.remove('naughtS'); // указывает, что в строке что-то выбрано
						}
					}
					else {
						var slctdLi1 = smSlctRaw.getElementsByClassName('flSelected');
						if (slctdLi1.length == 1) {
							notSctdLi.classList.add('naughtS');
						}
						smSlctdLi.classList.remove('flSelected');
						smSlctdLi.removeAttribute('data-filter');
					};
				};
				var fashionUl = ddMenuSm.getElementsByClassName('smf-fashion')[0],
					fashionP =  filterSmBtn.getElementsByClassName('fashion-p')[0],
					typeUl = ddMenuSm.getElementsByClassName('smf-type')[0],
					typeP = filterSmBtn.getElementsByClassName('type-p')[0],
					colorUl = ddMenuSm.getElementsByClassName('smf-color')[0],
					colorP = filterSmBtn.getElementsByClassName('color-p')[0],
					brandUl = ddMenuSm.getElementsByClassName('smf-brand')[0],
					brandP = filterSmBtn.getElementsByClassName('brand-p')[0],
					sizeUl = ddMenuSm.getElementsByClassName('smf-size')[0],
					sizeP = filterSmBtn.getElementsByClassName('size-p')[0],
					priceUl = ddMenuSm.getElementsByClassName('smf-price')[0],
					priceP = filterSmBtn.getElementsByClassName('price-p')[0];
				switch (this.getAttribute("data-filter-select")) {
					case "fashion":
						postSender('FFashion', fashionUl, fashionP);
						break;
					case "type":
						postSender('FFtype', typeUl, typeP);
						break;
					case "color":
						postSender('FFcolor', colorUl, colorP);
						break;
					case "brand":
						postSender('FFbrand', brandUl, brandP);
						break;
					case "size":
						postSender('FFsize', sizeUl, sizeP);
						break;
					case "price":
						postSender('FFprice', priceUl, priceP);
						break;
				};
			});
		}
	}
})