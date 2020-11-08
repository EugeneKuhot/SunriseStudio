'use strict';

(function () {

  const greetingsBlock = document.querySelector('.greetings');
  const aboutUsBlock = document.querySelector('.about-us');
  const aboutUsDesc = document.querySelector('.about-us__desc');
  const aboutUsCite = document.querySelector('.about-us__cite');
  const workersBlock = document.querySelector('.workers');
  const servicesBlock = document.querySelector('.services');

  const greetingsBlockHeight = greetingsBlock.clientHeight;
  const aboutUsBlockHeight = aboutUsBlock.clientHeight;
  const workersBlockHeight = workersBlock.clientHeight;
  const servicesBlockHeight = servicesBlock.clientHeight;


  function aboutUsAnimation() {
    let scrolled = window.pageYOffset;
    let coords = greetingsBlockHeight - (greetingsBlockHeight / 1.5);

    if (scrolled >= coords) {
      aboutUsDesc.classList.add('bounce-in-left');
      aboutUsCite.classList.add('bounce-in-right');
    }
  }

  function serviceAnimation() {
    let scrolled = window.pageYOffset;
    let coords = greetingsBlockHeight + aboutUsBlockHeight + workersBlockHeight - ((greetingsBlockHeight + aboutUsBlockHeight + workersBlockHeight) / 2.5);

    if (scrolled >= coords) {
      servicesBlock.classList.add('bounce-top');
    }
  }

  window.addEventListener('scroll', function () {
    aboutUsAnimation();
    serviceAnimation();
  });

  window.addEventListener('load', function () {
    aboutUsAnimation();
    serviceAnimation();
  });


})();
