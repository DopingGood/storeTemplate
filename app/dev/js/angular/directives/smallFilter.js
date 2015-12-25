app.directive('smallFilter', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// Drag of filter's rows
			function parseNum(number) {
				var PrsdNum = parseInt(number);
				return PrsdNum == null || isNaN(PrsdNum) ? 0 : PrsdNum;
			};
			var filterSmBtn = document.getElementsByClassName('smf-btn')[0],
				filterSmDiv = document.getElementsByClassName('smf-bar')[0],
				ddMenuSm = document.getElementsByClassName('smf-drop-menu')[0], 
				filterBtnCar = document.getElementsByClassName('filter-caret')[0], //Filter caret
				filterModal = document.getElementsByClassName('modal-back')[0],
				smFilUl = ddMenuSm.getElementsByClassName('smf-ul'), 
				// smFilterLinks = ddMenuSm.querySelectorAll('.smf-ul a'), 
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
		}
	}
});