'use strict';

(function () {

  const greetingsWrap = document.querySelector(`.greetings__background-wrap`);

  function greetingsBackgroundAnimate() {
    greetingsWrap.classList.add('onload');
  }

  window.addEventListener(`load`, greetingsBackgroundAnimate);

})();
