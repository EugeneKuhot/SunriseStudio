'use strict';

(function () {
  let tabsBlock = document.querySelector('.services');
  let tabItems = tabsBlock.querySelectorAll('.services__tabs-item button');

  let webPagesWrap = document.querySelector('.services__webpages-wrap');
  let designWrap = document.querySelector('.services__design-wrap');
  let copywriteWrap = document.querySelector('.services__copywrite-wrap');

  let wraps = [webPagesWrap, designWrap, copywriteWrap];

  function getActiveTabItem (item) {
    tabItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  function getActiveServiceList () {
    for (let i = 0; i < wraps.length; i++) {
      if (tabItems[i].classList.contains('active')) {
        wraps.forEach(el => el.classList.remove('active'));
        wraps.forEach(el => el.classList.remove('slide-in-blurred-bottom'));
        wraps[i].classList.add('active');
        wraps[i].classList.add('slide-in-blurred-bottom');
        wraps[i].querySelectorAll('button').forEach(el => el.classList.remove('active'));
        wraps[i].querySelector('button').classList.add('active');
      }
    }
  }

  tabItems.forEach(el => el.addEventListener('click', function () {
    getActiveTabItem(el);
    getActiveServiceList();
  }));

  let allServiceBtns = tabsBlock.querySelectorAll('.services__service-list button');

  function getActiveServiceBtn (item) {
    allServiceBtns.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  function getServiceDescription(el) {
    if (!el.classList.contains('active')) {
      let allDescriptions = el.parentElement.parentElement.parentElement.querySelectorAll('.services__tab-desc');
      allDescriptions.forEach(desc => desc.classList.add('hidden'));
      allDescriptions.forEach(desc => desc.classList.remove('slide-in-blurred-bottom'));
      let descWrapClass = el.classList + '-block';
      let descWrap = tabsBlock.querySelector(`.${descWrapClass}`);
      descWrap.classList.remove('hidden');
      descWrap.classList.add('slide-in-blurred-bottom');
    }
  }

  allServiceBtns.forEach(el => el.addEventListener('click', function () {
    getServiceDescription(el);
    getActiveServiceBtn(el);
  }));

})();
