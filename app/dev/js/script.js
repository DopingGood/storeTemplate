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
});

/// <reference path="tsDefinitions/jquery.d.ts" />
/// <reference path="tsDefinitions/bootstrap.d.ts" />
$('.carousel').carousel({
    interval: 0
});
document.addEventListener('DOMContentLoaded', function () {
    var filterButton = document.querySelectorAll('.filter div.filter-select button');
    function filterButtonClick() {
        var slctedSlct = this.parentElement, filterList = slctedSlct.querySelectorAll('li'), slctBtn = this;
        for (var i = 0; i < filterList.length; i++) {
            filterList[i].addEventListener('click', function () {
                var clctedLi = this;
                if (clctedLi.className != 'selected' && slctedSlct.classList.contains('selectedFilter') == false) {
                    slctedSlct.className += ' selectedFilter';
                }
                else if (clctedLi.className == 'selected') {
                    var lengthOfli = slctedSlct.querySelectorAll('li.selected').length;
                    if (lengthOfli == 1) {
                        slctedSlct.classList.remove('selectedFilter');
                    }
                    ;
                }
                ;
            });
        }
        ;
    }
    ;
    for (var i = 0; i < filterButton.length; i++) {
        filterButton[i].addEventListener('click', filterButtonClick);
    }
    ;
});
var menuButton = document.getElementsByClassName('navbar-toggle')[0];
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
