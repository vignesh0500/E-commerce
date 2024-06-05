
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
      480: {
          slidesPerView: 3,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 0,
      },
      980: {
          slidesPerView: 6,
          spaceBetween: 0,
      },
      1280: {
          slidesPerView: 6,
          spaceBetween: 10,
      }
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  var swiper = new Swiper(".arrival-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
      480: {
          slidesPerView: 2,
          spaceBetween: 0,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 0,
      },
      980: {
          slidesPerView: 4,
          spaceBetween: 0,
      },
      1280: {
          slidesPerView: 4,
          spaceBetween: 10,
      }
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
      480: {
          slidesPerView: 10,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      980: {
          slidesPerView: 5,
          spaceBetween: 10,
      },
      1280: {
          slidesPerView: 5,
          spaceBetween: 10,
      }
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });