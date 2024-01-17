$(function () {

  $('.select-style').styler({
    locale: 'uk',
    fileBrowse: 'Вибрати',
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "₴",
    onStart: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    },
    
    onChange: function (data) {
      $('.filter-price__from').text(data.from); 
      $('.filter-price__to').text(data.to); 
    },
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
  });

  $(".reviews-slider__inner").slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--prev"><svg class="reviews-slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="reviews-slider__arrow reviews-slider__arrow--next"><svg class="reviews-slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    responsive: [{
      breakpoint: 560,
      settings: {
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
      }
    }, ]
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 576) {
      $('.top-restaurants__list:not(.slick-initialized)').slick({
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        arrows: false,
        fade: true,
        autoplay: true,
      });
    } else {
      $(".top-restaurants__list.slick-initialized").slick("unslick");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-burger');
  const bodyLock = document.querySelector('body');
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