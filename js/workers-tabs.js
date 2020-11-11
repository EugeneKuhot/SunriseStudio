'use strict';

(function () {

  const tabsBlock = document.querySelector('.workers');
  const tabItems = tabsBlock.querySelectorAll('.workers__tabs-item button');

  function getActiveTabItem(item) {
    tabItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  }

  const projectBlock = document.querySelector('.js-project-wrap');
  const developingBlock = document.querySelector('.js-developing-wrap');
  const supportBlock = document.querySelector('.js-support-wrap');
  const wraps = [projectBlock, developingBlock, supportBlock];

  function getWorker() {
    tabItems.forEach(el => el.setAttribute('disabled', 'true'));

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

        wraps[i].classList.add('add-worker');
        tabItems.forEach(el => el.removeAttribute('disabled', 'true'));
      }
    }
  }

  tabItems.forEach(el => el.addEventListener('click', function () {
    getActiveTabItem(el);
    getWorker();
  }));

  const webDesignBtn = tabsBlock.querySelector('.js-webdesigner-btn');
  const graphDesignBtn = tabsBlock.querySelector('.js-graphdesigner-btn');
  const webDesignWrap = tabsBlock.querySelector('.js-webdesign');
  const graphDesignWrap = tabsBlock.querySelector('.js-graphdesign');

  function getDesigner(wrap, btn) {
    webDesignWrap.classList.add('hidden');
    graphDesignWrap.classList.add('hidden');
    webDesignBtn.classList.remove('active');
    graphDesignBtn.classList.remove('active');

    wrap.classList.remove('hidden');
    btn.classList.add('active');
  }

  webDesignBtn.addEventListener('click', function () {
    getDesigner(webDesignWrap, webDesignBtn);
  });
  graphDesignBtn.addEventListener('click', function () {
    getDesigner(graphDesignWrap, graphDesignBtn);
  });

})();
