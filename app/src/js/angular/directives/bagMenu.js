app.directive('bagMenu', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attrs) {
			var bagBtn = document.getElementsByClassName('bag-link')[0],
				bagMenu = document.getElementsByClassName('bag-mn')[0],
				backModal = document.getElementsByClassName('modal-back')[0],
				contModal = document.getElementsByClassName('modal-content')[0];
			function windClick (e) {
				var el = e.target || e.srcElement,
					bagBlock = '';
				for (var clEl = el; clEl; clEl = clEl.parentElement) {
					if (clEl.classList.contains('bag-mn') == true) {
						bagBlock = '1';
					}
				};
				if (bagBlock != '1') {
					backModal.classList.remove('el-visible', 'opacity-05');
					bagBtn.classList.remove('bagActive');
					bagMenu.classList.add('hide');
					contModal.classList.remove('zindex-1100');
					document.removeEventListener('click', windClick);
				}
			};
			bagBtn.addEventListener('click', function(e) {
				backModal.classList.add('el-visible');
				backModal.classList.add('opacity-05');
				bagBtn.classList.add('bagActive');
				bagMenu.classList.remove('hide');
				contModal.classList.add('zindex-1100');
				e.stopPropagation();
				document.addEventListener('click', windClick);
			});
		}
	}
})