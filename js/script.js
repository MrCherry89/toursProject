$(document).ready(function () {
    $(".travel-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".travel-ideas .top .slider-navigation .slick-prev"),
        nextArrow: $(".travel-ideas .top .slider-navigation .slick-next"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
                autoplay: true,
                speed: 800,
              }
            },
          ]
      });

      $(".banner-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".banner-slider-wrap .slider-navigation .slick-prev"),
        nextArrow: $(".banner-slider-wrap .slider-navigation .slick-next"),
        fade: true, // Добавляет эффект плавного появления и исчезновения
        speed: 800, // Задает скорость смены слайдов (в миллисекундах)
        cssEase: "ease-in-out" // Дает более плавную анимацию
    });
});
