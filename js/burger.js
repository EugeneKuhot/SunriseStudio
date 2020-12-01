'use strict';

(function () {
  const burgerBtn = document.querySelector(`.burger-btn`);
  const burgerIcon = burgerBtn.querySelector(`svg`);

  function changeIcon() {
    burgerIcon.classList.toggle('active');
  }

  burgerBtn.addEventListener(`click`, changeIcon)

})();
