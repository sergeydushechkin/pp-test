var HEADER_CLOSED_CLASS = 'info__header--closed';
var LIST_CLOSED_CLASS = 'info__list--closed';

var NAV_CLOSED_CLASS = 'navigation__button--closed';
var NAV_CONT_CLOSED_CLASS = 'navigation__container--closed';

var STUFF_LIST_CLASS = 'stuff__list--transformed';

Array.prototype.slice.call(document.querySelectorAll('.info')).forEach(function (element) {
  var header = element.querySelector('.info__header');
  var list = element.querySelector('.info__list');

  header.classList.add(HEADER_CLOSED_CLASS);
  list.classList.add(LIST_CLOSED_CLASS);

  header.addEventListener('click', function () {
    if (header.classList.contains(HEADER_CLOSED_CLASS)) {
      header.classList.remove(HEADER_CLOSED_CLASS);
      list.classList.remove(LIST_CLOSED_CLASS);
    } else {
      header.classList.add(HEADER_CLOSED_CLASS);
      list.classList.add(LIST_CLOSED_CLASS);
    }
  });
});

var navButton = document.querySelector('.navigation__button');
var navContainer = document.querySelector('.navigation__container');

navButton.classList.add(NAV_CLOSED_CLASS);
navContainer.classList.add(NAV_CONT_CLOSED_CLASS);

navButton.addEventListener('click', function () {
  if (navButton.classList.contains(NAV_CLOSED_CLASS)) {
    navButton.classList.remove(NAV_CLOSED_CLASS);
    navContainer.classList.remove(NAV_CONT_CLOSED_CLASS);
  } else {
    navButton.classList.add(NAV_CLOSED_CLASS);
    navContainer.classList.add(NAV_CONT_CLOSED_CLASS);
  }
});

Array.prototype.slice.call(document.querySelectorAll('.stuff')).forEach(function (element) {
  var stuffList = element.querySelector('.stuff__list');

  function func() {
    if (stuffList.classList.contains(STUFF_LIST_CLASS)) {
      stuffList.classList.remove(STUFF_LIST_CLASS);
    } else {
      stuffList.classList.add(STUFF_LIST_CLASS);
    }
  }

  element.querySelector('.controls__button--left').addEventListener('click', func);
  element.querySelector('.controls__button--right').addEventListener('click', func);
});
