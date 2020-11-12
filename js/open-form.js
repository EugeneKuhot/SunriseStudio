'use strict';

(function () {

  const formWrap = document.querySelector(`.contact-form__wrap`);
  const headerStartBtn = document.querySelector(`.header__start-btn`);
  const greetingsStartBtn = document.querySelector(`.greetings__start-btn`);
  const formCloseBtn = formWrap.querySelector(`.close-btn`);

  function getFormPopup() {
    formWrap.classList.add(`opened-form`);
  }
  function removeFormPopup() {
    formWrap.classList.remove(`opened-form`);
  }

  headerStartBtn.addEventListener(`click`, getFormPopup);
  greetingsStartBtn.addEventListener(`click`, getFormPopup);
  formCloseBtn.addEventListener(`click`, removeFormPopup);

  window.openForm = {
    getFormPopup,
    formWrap
  }
})();
