'use strict';

(function () {
  const modalForm = window.openForm.formWrap;
  const contactForm = document.querySelector('.contact-form');
  const modalFormCheck = modalForm.querySelector('#policy');
  const contactFormCheck = contactForm.querySelector('#contact-policy');
  const modalFormSubmit = modalForm.querySelector('button');
  const contactFormSubmit = contactForm.querySelector('button');

  function isPolicyChecked(form, checkbox, evt) {
    evt.preventDefault();

    if (checkbox.checked) {
      form.submit();
    }
  }

  modalFormSubmit.addEventListener('click', function (evt) {
    isPolicyChecked(modalForm, modalFormCheck, evt);
  })

  contactFormSubmit.addEventListener('click', function (evt) {
    isPolicyChecked(contactForm, contactFormCheck, evt);
  })
})();
