'use strict';

(function () {

  const formFile = document.querySelector(`#file`);
  const fileLabel = document.querySelector(`.contact-form__file-label`);

  function fileChangeHandler() {
    fileLabel.textContent = formFile.value;
  }

  formFile.addEventListener(`change`, fileChangeHandler);

})();
