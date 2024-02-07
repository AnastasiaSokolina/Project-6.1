window.addEventListener("DOMContentLoaded", () => {
    const resizableSwiper = (
      breakpoint,
      swiperClass,
      swiperSettings,
      callback
    ) => {
      let swiper;

      breakpoint = window.matchMedia(breakpoint);

      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);

        if (callback) {
          callback(swiper);
        }
      };

      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };

      breakpoint.addEventListener("change", checker);
      checker();
    };

    resizableSwiper("(max-width: 767px)", ".slider-1", {
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 16,
      slidesPerView: 1.3,
      pagination: {
        el: ".part2__swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        340: {
          slidesPerView: 1.3,
        },
        360: {
           slidesPerView: 1.5
          },
        450:{ slidesPerView: 2,},
        550:{ slidesPerView: 2.3,},
        570:{ slidesPerView: 2 },
        650:{ slidesPerView: 2.8,},
        700:{ slidesPerView: 4,}
      },
    });

  resizableSwiper("(max-width: 767px)", ".slider-2", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: ".part3__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3,
      },
      360: {
        slidesPerView: 1.5,
      },
      450: { slidesPerView: 2 },
      550: { slidesPerView: 2.3 },
      570: { slidesPerView: 2 },
      650: { slidesPerView: 2.8 },
      700: { slidesPerView: 4 },
    },
  });

  resizableSwiper("(max-width: 767px)", ".slider-3", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: ".part4__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      340: {
        slidesPerView: 1.3,
      },
      360: {
        slidesPerView: 1.5,
      },
      450: { slidesPerView: 2 },
      550: { slidesPerView: 2.3 },
      570: { slidesPerView: 2 },
      650: { slidesPerView: 2.8 },
      700: { slidesPerView: 4 },
    },
  });

});

let btnP2 = document.querySelector('.part2__button');
let fullSwiperP2 = document.querySelector('.part2__swiper');
let txtBtnP2 = document.querySelector('.part2__button__text');
let expandP2 = document.querySelector('.part2__expand');
let isHidenTextP2 = true;

let openP2 = () => {
    fullSwiperP2.classList.add('swiper2--hidden');
    txtBtnP2.textContent = 'Скрыть';
    expandP2.classList.add('expand-close');
    isHidenTextP2 = false;
}
let closeP2 = () => {
    fullSwiperP2.classList.remove('swiper2--hidden');
    txtBtnP2.textContent = 'Показать всё';
    expandP2.classList.remove('expand-close');
    isHidenTextP2 = true;
}

btnP2.addEventListener('click', () => {
    if (isHidenTextP2) {
      openP2 ();
    } else {
      closeP2 ();
    }
})

let btn3 = document.querySelector('.part3__button');
let swip3 = document.querySelector('.part3__swiper');
let txt3 = document.querySelector('.part3__button__text');
let ex3 = document.querySelector('.part3__expand');
let isHiden3 = true;

let open3 = () => {
  swip3.classList.add('swiper3--hidden');
  txt3.textContent = 'Скрыть';
  ex3.classList.add('expand-close');
  isHiden3 = false;
}

let close3 = () => {
  swip3.classList.remove('swiper3--hidden');
  txt3.textContent = 'Показать всё';
  ex3.classList.remove('expand-close');
  isHiden3 = true;
}

btn3.addEventListener('click', () => {
  if (isHiden3) {
    open3 ();
  } else {
    close3 ();
  }
})
