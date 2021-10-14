const swiper = new Swiper(".swiper-one", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed:4000,
    autoplay:
    {
      delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  // If we need pagination
  pagination: {
    el: ".page",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".scrollbar",
  },
});

const swiperTwo = new Swiper('.swiper-two', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:4000,
  autoplay:
  {
    delay: 4000,
  },
  slidesPerView: 3,
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
    },
  
    960: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1250: {
      slidesPerView: 3,
    }
  }
});

const swiperThree = new Swiper('.swiper-three', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.next-three',
    prevEl: '.prev-three',
  },
});
