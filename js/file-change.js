'use strict';

(function () {

  const popupForm = document.querySelector(`#popup-form`);
  const contactForm = document.querySelector(`#contact-form`);

  const formFile = popupForm.querySelector(`#modal-contact-file`);
  const fileLabel = popupForm.querySelector(`.contact-form__file-label span`);
  const contactFormFile = contactForm.querySelector(`#contact-file`);
  const contactFileLabel = contactForm.querySelector(`.contact-form__file-label span`);


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
