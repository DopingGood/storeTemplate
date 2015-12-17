app.directive('preventDef', function(){
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attrs) {
			var prevDef = function(e) {
				e.preventDefault();
			}
				ShowBtn = document.getElementsByClassName('arrival-button')[0];
			if (ShowBtn) {
				ShowBtn.addEventListener('click', prevDef);
			};
		}
	}
})