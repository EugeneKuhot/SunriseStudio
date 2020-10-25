'use strict';

(function () {

  const polandBtn = document.querySelector(`.js-poland-btn`);
  const ukraineBtn = document.querySelector(`.js-ukraine-btn`);
  const polandPhone = document.querySelector(`.js-poland-phone`);
  const ukrainePhone = document.querySelector(`.js-ukraine-phone`);

  function getPolishPhone() {
    polandBtn.classList.add(`active`);
    ukraineBtn.classList.remove(`active`);

    polandPhone.style = `display: block;`;
    ukrainePhone.style = `display: none;`;
  }

  function getUkrPhone() {
    polandBtn.classList.remove(`active`);
    ukraineBtn.classList.add(`active`);

    polandPhone.style = `display: none;`;
    ukrainePhone.style = `display: block;`;
  }

  polandBtn.addEventListener(`click`, getPolishPhone);
  ukraineBtn.addEventListener(`click`, getUkrPhone);
})();
