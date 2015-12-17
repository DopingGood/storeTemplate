app.directive('smallFilter', function() {
	return {
		restrict: 'A',
		// scope: {},
		link: function(scope, element, attrs) {
			var filterValue = {}; //object with filter's data
			// Funtion for sending filter's data
			function postSender(array, div, span) {
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
				// Change tittle on click
				if (filterValue[array].length > 0) {
					var sBtnT = span.textContent,
						FVA = filterValue[array];
					// console.log('text : ' + sBtnT + ',', 'object property : ', FVA, ',' , 'array item: ' + FVA[0]);
					span.textContent = '';
					for (i = 0; FVA.length > i; i++) {
						span.textContent += FVA[i] + ',' + ' ';
					};
				}
				else {
					span.textContent = span.getAttribute('data-filter-txt');
				}
			};
			var prevDef = function(e) {
				e.preventDefault();
			};
			// Drag of filter's rows
			function parseNum(number) {
				var PrsdNum = parseInt(number);
				return PrsdNum == null || isNaN(PrsdNum) ? 0 : PrsdNum;
			};
			var filterSmBtn = document.getElementsByClassName('smf-btn')[0],
				filterSmDiv = document.getElementsByClassName('smf-bar')[0],
				ddMenuSm = document.getElementsByClassName('smf-drop-menu')[0], 
				filterBtnCar = document.getElementsByClassName('filter-caret')[0], 
				filterModal = document.getElementsByClassName('modal-back')[0],
				smFilUl = ddMenuSm.getElementsByClassName('smf-ul'), 
				smFilterLinks = ddMenuSm.querySelectorAll('.smf-ul a'), 
				startMs = 0, 
				ElOffset = 0, 
				dragedEl, 
				clickedEl;
			for (var i = 0; i < smFilUl.length; i++) {
				smFilUl[i].addEventListener('mousedown', OnDown);
				smFilUl[i].addEventListener('mousedown', function () {
					return false;
				});
			}
			function OnDown(e) {
				var clickedEl = e.target || e.srcElement;
				if (e.button == 1 || e.button == 0 && clickedEl.classList.contains('smf-ul') == true) {
					// mouse position
					startMs = e.clientX;
					// element position
					ElOffset = parseNum(clickedEl.style.left);
					// drag element
					dragedEl = clickedEl;
					// start drag on mouse move
					ddMenuSm.onmousemove = OnMove;
					// prevent hightlighting
					document.onselectstart = function () { return false; };
					dragedEl.ondragstart = function () { return false; };
					document.onmousedown = function () { return false; };
					document.addEventListener('mouseup', OnUp);
				}
			};
			function OnMove(e) {
				if (e == null) {
					e = window.event;
				}
				dragedEl.style.left = (ElOffset + e.clientX - startMs) + 'px';
			};
			function OnUp(e) {
				if (dragedEl != null && e.button == 1 || e.button == 0) {
					ddMenuSm.onmousemove = null;
					document.onselectstart = null;
					document.onmousedown = null;
					dragedEl.ondragstart = null;
					dragedEl = null;
					document.removeEventListener('mouseup', OnUp);
				}
			};
			filterSmBtn.onclick = function () {
				if (filterSmBtn.classList.contains('smFilterActive') == false) {
					this.classList.add('smFilterActive');
					filterBtnCar.classList.remove('car-cl');
					ddMenuSm.classList.add('el-visible');
					filterModal.classList.add('el-visible');
					filterSmDiv.classList.add('zindex-1100');
					setTimeout(function () {
						filterModal.classList.add('opacity-05');
					}, 50);
				}
				else {
					this.classList.remove('smFilterActive');
					filterBtnCar.classList.add('car-cl');
					ddMenuSm.classList.remove('el-visible');
					filterModal.classList.remove('opacity-05');
					filterSmDiv.classList.remove('zindex-1100');
					setTimeout(function () {
						filterModal.classList.remove('el-visible');
					}, 300);
				}
			};
			// Select and unselect
			for (var i = 0; i < smFilterLinks.length; i++) {
				smFilterLinks[i].addEventListener('click', prevDef);
				smFilterLinks[i].addEventListener('click', function () {
					var smSlctdLi = this.parentElement,
						thisUl = this,
						smSlctRaw;
					do {
						thisUl = thisUl.parentElement;
						if (thisUl.tagName == 'UL') {
							smSlctRaw = thisUl;
							console.log(smSlctRaw);
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
			};
			ddMenuSm.addEventListener('load', function() {
				console.log('work', smFilterLinks);
			});
		}
	}
});