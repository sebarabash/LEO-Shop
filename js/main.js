$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.list__active,.menu__active").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// ==================================== SLIDER =======================================
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
// ================================== SIDE__SLIDER ===================================
$(document).ready(function () {
  $(".side__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });
});
// ================================== SPOILER ==============================================

$(document).ready(function () {
  $(".spoilers__title").click(function (event) {
    if ($(".spoilers").hasClass("one")) {
      $(".spoilers__title").not($(this)).removeClass("active");
      $(".spoilers__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
