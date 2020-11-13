'use strict';

(function () {
  const modalForm = window.openForm.formWrap;
  const contactForm = document.querySelector('.contact-form');
  /*const modalFormCheck = modalForm.querySelector('#policy');
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
  })*/













  const username = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const contactFormSubmit = contactForm.querySelector('button');


  username.addEventListener('input', function () {
    showSuccess(username);
  });


  email.addEventListener('input', function () {
    checkEmail(email);
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

//checkRequired fields
  function checkRequired(inputArr) {
    inputArr.forEach(function(input){
      if(input.value.trim() === ''){
        showError(input)
      }else {
        showSuccess(input);
      }
    });
  }


//Event Listeners
  contactForm.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username, email, phone]);
    checkEmail(email);

    if ([username, email, phone].classList.contains('valid')) {
      contactForm.submit();
    }
  });
})();
