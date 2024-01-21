document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu-burger');
  const bodyLock = document.body;
  const burgerClose = document.querySelector('.menu-burger__close');

  function openMenu() {
    mobileMenu.classList.add('menu-burger--active');
    bodyLock.classList.add('lock');
    document.addEventListener('click', outsideMenuClickHandler);
  }

  function closeMenu() {
    mobileMenu.classList.remove('menu-burger--active');
    bodyLock.classList.remove('lock');
    document.removeEventListener('click', outsideMenuClickHandler);
  }

  function outsideMenuClickHandler(e) {
    if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  }

  burger.addEventListener('click', openMenu);
  burgerClose.addEventListener('click', closeMenu);

  const btnFilter = document.querySelector('.btn-filter');
  const catalogFilters = document.querySelector('.filter');
  const filtersClose = document.querySelector('.filter-close');

  function openFilter() {
    catalogFilters.classList.add('filter--active');
    bodyLock.classList.add('lock-filter');
    document.addEventListener('click', outsideFilterClickHandler);
  }

  function closeFilter() {
    catalogFilters.classList.remove('filter--active');
    bodyLock.classList.remove('lock-filter');
    document.removeEventListener('click', outsideFilterClickHandler);
  }

  function outsideFilterClickHandler(e) {
    if (!btnFilter.contains(e.target) && !catalogFilters.contains(e.target)) {
      closeFilter();
    }
  }

  btnFilter.addEventListener('click', openFilter);
  filtersClose.addEventListener('click', closeFilter);

  catalogFilters.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

$(function () {
  $('.select-style').styler({
    locale: 'uk',
    fileBrowse: 'Вибрати',
  });

  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('header--fixed');
    } else {
      $('.header').removeClass('header--fixed');
    }
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
        centerMode: true,
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

var mixer = mixitup('.category__content');