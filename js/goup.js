'use strict';

(function () {
  const goTopBtn = document.querySelector('.backToTop');

  function trackScroll () {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('backToTop-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('backToTop-show');
    }
  }

  function backToTop () {
    window.scrollTo(0, 0);
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
