$(function () {
  $(".slider__inner").slick({
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><svg class="slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><svg class="slider__arrow-icon"><use xlink:href="images/sprite.svg#icon-arrow"></use></svg></button>'
  });
})
var mixer = mixitup('.category__content');