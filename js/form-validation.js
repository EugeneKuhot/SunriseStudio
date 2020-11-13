'use strict';

(function () {
  const modalForm = window.openForm.formWrap.querySelector('.contact-form');
  const modalFormCheck = modalForm.querySelector('#modal-contact-policy');
  const modalUserName = modalForm.querySelector('#modal-name');
  const modalEmail = modalForm.querySelector('#modal-email');
  const modalPhone = modalForm.querySelector('#modal-phone');

  const contactForm = document.querySelector('.contact-form');
  const contactFormCheck = contactForm.querySelector('#contact-policy');
  const username = contactForm.querySelector('#name');
  const email = contactForm.querySelector('#email');
  const phone = contactForm.querySelector('#phone');

  username.addEventListener('change', function () {
    showSuccess(username);
  });
  email.addEventListener('change', function () {
    checkEmail(email);
  });
  phone.addEventListener('change', function () {
    showSuccess(phone);
  });

  modalUserName.addEventListener('change', function () {
    showSuccess(modalUserName);
  });
  modalEmail.addEventListener('change', function () {
    checkEmail(modalEmail);
  });
  modalPhone.addEventListener('change', function () {
    checkEmail(modalPhone);
  });

  function showError(input) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
  function showSuccess(input) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
      showSuccess(input)
    }else {
      showError(input);
    }
  }
  function checkRequired(inputArr) {
    inputArr.forEach(function(input){
      if(input.value.trim() === ''){
        showError(input)
      }else {
        showSuccess(input);
      }
    });
  }

  function checkValidityForm([username, email, phone]) {
    return [username, email, phone].every( el => el.classList.contains('valid'));
  }

  contactForm.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username, email, phone]);
    checkEmail(email);

    if (contactFormCheck.checked) {
      if (checkValidityForm([username, email, phone])) {
        contactForm.submit();
      }
    } else {
      let checkLabel = contactForm.querySelector('.contact-form__label');
      checkLabel.classList.add('invalid');
    }

  });

  modalForm.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([modalUserName, modalEmail, modalPhone]);
    checkEmail(modalEmail);

    if (modalFormCheck.checked) {
      if (checkValidityForm([modalUserName, modalEmail, modalPhone])) {
        modalForm.submit();
      }
    } else {
      let modalCheckLabel = modalForm.querySelector('.contact-form__label');
      modalCheckLabel.classList.add('invalid');
    }

  });
})();
