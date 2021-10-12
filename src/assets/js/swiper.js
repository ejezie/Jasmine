const swiper = new Swiper(".swiper-one", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed:4000,
    autoplay:
    {
      delay: 4000,
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
