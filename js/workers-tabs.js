'use strict';

(function () {

  let tabsBlock = document.querySelector('.workers');
  let tabItems = tabsBlock.querySelectorAll('.workers__tabs-item button');

  function getActiveTabItem (item) {
    tabItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  const projectBlock = document.querySelector('.js-project-wrap');
  const developingBlock = document.querySelector('.js-developing-wrap');
  const supportBlock = document.querySelector('.js-support-wrap');
  const wraps = [projectBlock, developingBlock, supportBlock];

  function getWorker () {
    tabItems.forEach(el => el.setAttribute('disabled', 'true'));
    window.removeEventListener('scroll', window.animation.scrollAnimation);

    for (let i = 0; i < wraps.length; i++) {
      if (tabItems[i].classList.contains('active')) {
        wraps.forEach(function (el) {
          if (el.classList.contains('add-worker')) {
            el.classList.remove('add-worker');
            el.classList.add('remove-worker');
          }
          if (el.classList.contains('remove-worker')) {
            el.classList.remove('remove-worker');
          }
        });

        setTimeout(function() {
          wraps[i].classList.add('add-worker');
          tabItems.forEach(el => el.removeAttribute('disabled', 'true'));
          window.addEventListener('scroll', window.animation.scrollAnimation);
        }, 600)
      }
    }
  }


  tabItems.forEach(el => el.addEventListener('click', function () {
    getActiveTabItem(el);
    getWorker();
  }));

})();
