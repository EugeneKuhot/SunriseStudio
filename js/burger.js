'use strict';

(function () {
  const burgerBtn = document.querySelector(`.burger-btn`);
  const burgerIcon = burgerBtn.querySelector(`svg`);
  const burgerMenu = document.querySelector(`.header__burger-wrap`);

  function changeIcon() {
    burgerIcon.classList.toggle('active');
  }

  function toggleMenu() {
    burgerMenu.classList.toggle('slide-in-left');
    burgerMenu.classList.toggle('slide-out-left');
  }

  function toggleBurger() {
    changeIcon();
    toggleMenu();
  }

  burgerBtn.addEventListener(`click`, toggleBurger)

})();
