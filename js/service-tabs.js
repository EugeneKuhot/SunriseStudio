'use strict';

(function () {
  let tabsBlock = document.querySelector('.services');
  let tabItems = tabsBlock.querySelectorAll('.services__tabs-item button');

  let webPagesWrap = document.querySelector('.services__webpages-wrap');
  let webMarketingWrap = document.querySelector('.services__webmarketing-wrap');
  let designWrap = document.querySelector('.services__design-wrap');
  let copywriteWrap = document.querySelector('.services__copywrite-wrap');

  let wraps = [webPagesWrap, webMarketingWrap, designWrap, copywriteWrap];

  function getActiveTabItem (item) {
    tabItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  function getActiveAdsList () {
    for (let i = 0; i < wraps.length; i++) {
      if (tabItems[i].classList.contains('active')) {
        wraps.forEach(el => el.classList.remove('active'));
        wraps.forEach(el => el.classList.add('hidden'));
        wraps[i].classList.add('active');
        wraps[i].classList.remove('hidden');
        wraps[i].querySelectorAll('button').forEach(el => el.classList.remove('active'));
        wraps[i].querySelector('button').classList.add('active');
      }
    }
  }

  tabItems.forEach(el => el.addEventListener('click', function () {
    getActiveTabItem(el);
    getActiveAdsList();
  }));


  let allServiceBtns = tabsBlock.querySelectorAll('.services__service-list button');


  function getActiveServiceBtn (item) {
    allServiceBtns.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  allServiceBtns.forEach(el => el.addEventListener('click', function () {
    getActiveServiceBtn(el);
  }))

})();
