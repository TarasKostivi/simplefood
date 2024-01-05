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
var mixer = mixitup('.category__content');