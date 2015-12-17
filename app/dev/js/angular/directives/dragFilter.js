app.directive('smallFilter', function() {
	return {
		restrict: 'A',
		scope: {
		},
		link: function(scope, element, attrs) {
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
			function parseNum(number) {
				var PrsdNum = parseInt(number);
				return PrsdNum == null || isNaN(PrsdNum) ? 0 : PrsdNum;
			};
			var filterSmBtn = document.getElementsByClassName('smf-btn')[0];
			var ddMenuSm = document.getElementsByClassName('smf-drop-menu')[0], filterBtnCar = document.getElementsByClassName('filter-caret')[0], filterModal = document.getElementsByClassName('sm-filter-modal')[0],
			smFilUl = ddMenuSm.getElementsByClassName('smf-ul'), smFilterLinks = ddMenuSm.querySelectorAll('.smf-ul a'), startMs = 0, ElOffset = 0, dragedEl, clickedEl;
			for (var i = 0; i < smFilUl.length; i++) {
				smFilUl[i].addEventListener('mousedown', OnDown);
				smFilUl[i].addEventListener('mousedown', function () {
					return false;
				});
			}
			function OnDown(e) {
				var clickedEl = e.target || e.srcElement;
				if (e.button == 1 || e.button == 0 && clickedEl.classList.contains('smf-ul') == true) {
					// расположение мыши
					startMs = e.clientX;
					// рассположение элементы
					ElOffset = parseNum(clickedEl.style.left);
					// перетаскиваемый элемент
					dragedEl = clickedEl;
					// alert(console.log(ElOffset, clickedEl, clickedEl.style.left, dragedEl.style.left));
					// активируем перемещение при движении мыши
					ddMenuSm.onmousemove = OnMove;
					// Предотвращаем выделение
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
				// var DElcoord = dragedEl.style.left;
				// if (ElOff)
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
					setTimeout(function () {
						filterModal.classList.add('opacity-05');
					}, 50);
				}
				else {
					this.classList.remove('smFilterActive');
					filterBtnCar.classList.add('car-cl');
					ddMenuSm.classList.remove('el-visible');
					filterModal.classList.remove('opacity-05');
					setTimeout(function () {
						filterModal.classList.remove('el-visible');
					}, 300);
				}
			};
			for (var i = 0; i < smFilterLinks.length; i++) {
				smFilterLinks[i].addEventListener('click', prevDef);
				smFilterLinks[i].addEventListener('click', function () {
					var smSlctdLi = this.parentElement, smSlctRaw = this.closest('ul'), notSctdLi = smSlctRaw.getElementsByClassName("f-nSelectLi")[0];
					if (this.classList.contains('f-nSelect') == true) {
						// var notSctdLi = this.parentElement;
						if (notSctdLi.classList.contains("naughtS") == false) {
							var slctdLi1 = smSlctRaw.getElementsByClassName('flSelected');
							if (slctdLi1.length > 0) {
								for (; slctdLi1.length > 0;) {
									slctdLi1[0].removeAttribute('data-filter');
									slctdLi1[0].classList.remove('flSelected');
								};
							}
							notSctdLi.classList.add("naughtS");
						}
						else {
							return false;
						}
					}
					else {
						var fashionUl = ddMenuSm.getElementsByClassName('smf-fashion')[0], typeUl = ddMenuSm.getElementsByClassName('smf-type')[0], colorUl = ddMenuSm.getElementsByClassName('smf-color')[0], brandUl = ddMenuSm.getElementsByClassName('smf-brand')[0], sizeUl = ddMenuSm.getElementsByClassName('smf-size')[0], priceUl = ddMenuSm.getElementsByClassName('smf-price')[0];
						if (smSlctdLi.getAttribute('data-filter') == null) {
							smSlctdLi.classList.add('flSelected');
							smSlctdLi.setAttribute('data-filter', 'selected');
							var notSctdLi = smSlctRaw.getElementsByClassName("f-nSelectLi")[0];
							if (notSctdLi.classList.contains('naughtS') == true) {
								notSctdLi.classList.remove('naughtS');
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
					switch (this.getAttribute("data-filter-select")) {
						case "fashion":
							postSender('FFashion', fashionUl);
							break;
						case "type":
							postSender('FFtype', typeUl);
							break;
						case "color":
							postSender('FFcolor', colorUl);
							break;
						case "brand":
							postSender('FFbrand', brandUl);
							break;
						case "size":
							postSender('FFsize', sizeUl);
							break;
						case "price":
							postSender('FFprice', priceUl);
							break;
						case "not":
							var FValueJson = JSON.stringify(filterValue);
							var xhr = new XMLHttpRequest();
							xhr.open('POST', '/womenCatalog.html', true);
							xhr.setRequestHeader("filter", "application/json");
							xhr.send(FValueJson);
							break;
					};
				});
			};
		}
	}
});