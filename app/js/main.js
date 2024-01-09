$(function () {
  $(".reviews-slider__inner").slick({
    dots: true,
    infinite: false,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--prev"><svg class="reviews-slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--next"><svg class="reviews-slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>'
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu-burger'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const burgerClose = document.querySelector(".menu-burger__close");
    burger.addEventListener("click", () => {
    mobileMenu.classList.add("menu-burger--active");
    if (mobileMenu.classList.contains("menu-burger--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("menu-burger--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("menu-burger--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});
});

var mixer = mixitup('.category__content');


