'use strict';

(function () {

  /*  const greetingsBlock = document.querySelector('.greetings');

    const aboutUsBlock = document.querySelector('.about-us');
    const aboutUsDesc = document.querySelector('.about-us__desc');
    const aboutUsCite = document.querySelector('.about-us__cite');

    const workersBlock = document.querySelector('.workers');

    const projectBlock = document.querySelector('.js-project-wrap');
    const developingBlock = document.querySelector('.js-developing-wrap');
    const supportBlock = document.querySelector('.js-support-wrap');
    const wraps = [projectBlock, developingBlock, supportBlock];

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

    function workersAnimation() {
      let scrolled = window.pageYOffset;
      let coords = greetingsBlockHeight + aboutUsBlockHeight - ((greetingsBlockHeight + aboutUsBlockHeight) / 5);

      if (scrolled >= coords) {
        let isWorkerAdded = wraps.some(el => el.classList.contains('add-worker'));
        if (!isWorkerAdded) {
          projectBlock.classList.add('add-worker');
        }
      }
    }

    function serviceAnimation() {
      let scrolled = window.pageYOffset;
      let coords = greetingsBlockHeight + aboutUsBlockHeight + workersBlockHeight - ((greetingsBlockHeight + aboutUsBlockHeight + workersBlockHeight) / 2.5);

      if (scrolled >= coords) {
        servicesBlock.classList.add('scale-in-center');
      }
    }

    function scrollAnimation (){
      aboutUsAnimation();
      workersAnimation();
      serviceAnimation();
    }

    window.addEventListener('scroll', scrollAnimation);

    window.addEventListener('load', function () {
      aboutUsAnimation();
      workersAnimation();
      serviceAnimation();
    });


    window.animation = {
      scrollAnimation
    };*/


  const aboutUsBlock = document.querySelector('.about-us');
  const workersBlock = document.querySelector('.workers');
  const servicesBlock = document.querySelector('.services');
  const portfolioBlock = document.querySelector('.portfolio');

  const allBlocksForAnimation = [aboutUsBlock, workersBlock, servicesBlock, portfolioBlock];

  let options = {
    threshold: .4
  };

  function aboutUsAnimation(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('animated');
      }
    });
  }

  const observer = new IntersectionObserver(aboutUsAnimation, options);

  allBlocksForAnimation.forEach(block => observer.observe(block));



})();
