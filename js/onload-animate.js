'use strict';

(function () {

  const greetingsWrap = document.querySelector(`.greetings__background-wrap`);
  const greetingsText = document.querySelector(`.greetings__text`);
  const greetingsTitle = document.querySelector(`.greetings__title`);
  const greetingsStartBtn = document.querySelector(`.greetings__start-btn`);
  const greetingsTextBlock = document.querySelector(`.greetings__desc-block`);
  const header = document.querySelector(`.header`);

  function headerOnloadAnimation() {
    header.classList.add('onload');
  }
  function greetingsBackgroundAnimate() {
    greetingsWrap.classList.add('onload');
  }
  function greetingsTextBlockAnimate() {
    greetingsText.classList.add('onload');
    greetingsTextBlock.classList.add('onload');

    setTimeout(function() {
      greetingsTitle.classList.add('onload');
    }, 300);

    setTimeout(function() {
      greetingsStartBtn.classList.add('onload');
    }, 600);
  }

  function onloadAnimation() {
    headerOnloadAnimation();
    greetingsBackgroundAnimate();
    setTimeout(greetingsTextBlockAnimate, 1200);
  }

  window.addEventListener(`load`, onloadAnimation);

})();
