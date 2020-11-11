'use strict';

(function () {

  const formFile = document.querySelector(`.contact-form__wrap #file`);
  const contactFormFile = document.querySelector(`#contact-file`);
  const fileLabel = document.querySelector(`.contact-form__wrap .contact-form__file-label span`);
  const contactFileLabel = document.querySelector(`.contact .contact-form__file-label span`);

  function fileChangeHandler(input, label) {

    label.textContent = input.value.replace(`C:\\fakepath\\`, '');
  }

  formFile.addEventListener(`change`, function() {
    fileChangeHandler(formFile, fileLabel);
  });

  contactFormFile.addEventListener(`change`, function() {
    fileChangeHandler(contactFormFile, contactFileLabel);
  });

})();
