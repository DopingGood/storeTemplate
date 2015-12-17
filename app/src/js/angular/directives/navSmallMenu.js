app.directive('navSmallMenu', function() {
    return {
        restrict: 'A',
        scope: {
        },
        link: function(scope, element, attrs) {
            var menuButton = document.getElementsByClassName('navbar-toggle')[0];
            if (menuButton) {
                menuButton.addEventListener('click', function () {
                    var navMenu = document.querySelectorAll('div.header-navmenu')[0], navNavMenu = document.querySelectorAll('nav.navbar.default-navbar')[0], headerRow = document.querySelectorAll('.header-row')[0];
                    if (this.classList.contains('collapsed') == true) {
                        navMenu.classList.remove('hidden-xs', 'margin-0');
                        navNavMenu.classList.remove('navdrop-menu');
                        headerRow.classList.add('header-row-border');
                    }
                    else {
                        navNavMenu.classList.add('navdrop-menu');
                        navMenu.classList.add('margin-0');
                        setTimeout(function () {
                            headerRow.classList.remove('header-row-border');
                            navMenu.classList.add('hidden-xs');
                        }, 300);
                    }
                });
            };
        }
    }
});