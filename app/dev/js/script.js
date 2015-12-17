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


/// <reference path="tsDefinitions/jquery.d.ts" />
/// <reference path="tsDefinitions/bootstrap.d.ts" />
$('.carousel').carousel({
    interval: 0
});
function prevDef(e) {
    e.preventDefault();
}
;
var ShowBtn = document.getElementsByClassName('arrival-button')[0];
if (ShowBtn) {
    ShowBtn.addEventListener('click', prevDef);
}
;
//		Filters
document.addEventListener('DOMContentLoaded', function () {
    //		Events that customize buttons
    var filterValue = {}; //объект с датой фильтра
    //		Attempt to post
    function postSender(array, div) {
        filterValue[array] = [];
        var liList = div.querySelectorAll("li[data-filter='selected'] a");
        for (i = 0; i < liList.length; i++) {
            var FChoiceValue = liList[i].textContent;
            filterValue[array].push(FChoiceValue);
        }
        ;
        var FValueJson = JSON.stringify(filterValue);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/womenCatalog.html', true);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(FValueJson);
        // fetch('/womenCatalog.html', {
        // 	method: 'post',
        // 	headers: {'Accept': 'application/json',
        // 			'Content-Type': 'application/json'
        // 	},
        // 	body: JSON.stringify({
        // 		FValueJson
        // 	})
        // });
    }
    ;
    var filterButton = document.querySelectorAll('.filter div.filter-select button');
    function filterButtonClick() {
        var slctedSlct = this.parentElement, filterList = slctedSlct.querySelectorAll('li'), slctBtn = this; // filter button
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
                    }
                    ;
                }
                ;
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
                }
                ;
                //		**************
            });
        }
        ;
    }
    ;
    for (var i = 0; i < filterButton.length; i++) {
        filterButton[i].addEventListener('click', filterButtonClick);
    }
    ;
    // filterSmBtn.onblur = function() {
    // 	ddMenuSm.classList.remove('el-visible');
    // };
    function parseNum(number) {
        var PrsdNum = parseInt(number);
        return PrsdNum == null || isNaN(PrsdNum) ? 0 : PrsdNum;
    }
    ;
    //	Filter sm-xs
    var filterSmBtn = document.getElementsByClassName('smf-btn')[0];
    var ddMenuSm = document.getElementsByClassName('smf-drop-menu')[0], filterBtnCar = document.getElementsByClassName('filter-caret')[0], filterModal = document.getElementsByClassName('sm-filter-modal')[0], 
    //	Drag variable
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
    }
    ;
    function OnMove(e) {
        if (e == null) {
            e = window.event;
        }
        dragedEl.style.left = (ElOffset + e.clientX - startMs) + 'px';
        // var DElcoord = dragedEl.style.left;
        // if (ElOff)
    }
    ;
    function OnUp(e) {
        if (dragedEl != null && e.button == 1 || e.button == 0) {
            ddMenuSm.onmousemove = null;
            document.onselectstart = null;
            document.onmousedown = null;
            dragedEl.ondragstart = null;
            dragedEl = null;
            document.removeEventListener('mouseup', OnUp);
        }
    }
    ;
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
                        }
                        ;
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
                }
                ;
            }
            ;
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
            }
            ;
        });
    }
    ;
});
//	Extra small menu animation
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
}
;
