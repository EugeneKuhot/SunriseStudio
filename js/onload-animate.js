'use strict';

(function () {

  const greetingsText = document.querySelector(`.greetings__text`);
  const greetingsTitle = document.querySelector(`.greetings__title`);
  const greetingsStartBtn = document.querySelector(`.greetings__start-btn`);
  const greetingsTextBlock = document.querySelector(`.greetings__desc-block`);
  const header = document.querySelector(`.header`);
  const mobileGreetingsList = document.querySelector(`.greetings__mobile-list`);

  function headerOnloadAnimation() {
    header.classList.add('onload');
  }
  function greetingsTextBlockAnimate() {
    greetingsText.classList.add('onload');
    greetingsTextBlock.classList.add('onload');

    setTimeout(function() {
      greetingsTitle.classList.add('onload');
    }, 300);

    setTimeout(function() {
      mobileGreetingsList.classList.add('onload');
    }, 450);

    setTimeout(function() {
      greetingsStartBtn.classList.add('onload');
    }, 600);
  }

  function onloadAnimation() {
    headerOnloadAnimation();
    setTimeout(greetingsTextBlockAnimate, 500);
  }

  window.addEventListener(`load`, onloadAnimation);
})();
