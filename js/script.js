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

    $(".our-history-slider").slick({
      slidesToShow: 1,
      variableWidth: true,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".our-history .top .slider-navigation .slick-prev"),
        nextArrow: $(".our-history .top .slider-navigation .slick-next"),
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

                autoplay: true,
                speed: 800,
              }
            },
          ]
      });

      $(".tour-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".tour-slider-wrap .slider-navigation .slick-prev"),
        nextArrow: $(".tour-slider-wrap .slider-navigation .slick-next"),
        responsive: [
            {
              breakpoint: 1501,
              settings: {
                slidesToShow: 2,
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
        fade: true, 
        speed: 800, 
        cssEase: "ease-in-out" 
    });

    $(".phone-number-input").inputmask({
      "mask": "+7 (999)-999-999-9",
    });

    $(".send-message-form").validate({
        errorPlacement: function (error, element) {}
    });

    $(".certificate-form").validate({
      errorPlacement: function (error, element) {}
  });

    $(".payment-form").validate({
      errorPlacement: function (error, element) {}
  });

    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      if (window.scrollY > 1) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });

    $(".header .search-btn").on("click", function(){
      $(".search-form-wrap").addClass("show");
    })

    $(".drop-mob-item").on("click", function(){
      $(this).closest("li").find(".sub-menu-mob").toggleClass("open");
      $(this).find("img").toggleClass("rotate");
    })

    $(".filter-drop-btn2").on("click", function(){
      $(".filter-wrap").addClass("open");
      $("body, html").addClass("overflow");
    })

    $(".filter-top .close").on("click", function(){
      $(".filter-wrap").removeClass("open");
      $("body, html").removeClass("overflow");
    })

    $(".tag-item").on("click", function(){
      $(this).toggleClass("active");
    })

    $(".search-form .close-form").on("click", function(){
      $(".search-form-wrap").removeClass("show");
    })

    $(".drop-wrap-mobile .top").on("click", function(){
      $(".hide-drop-menu").addClass("show");
    })

    $(".hide-drop-menu .close-mob").on("click", function(){
      $(".hide-drop-menu").removeClass("show");
    })

    $(document).on("click", function() {
      $(".drop-wrap .bottom").removeClass("show");
      $(".drop-wrap .top .arr").removeClass("rotate");
    });
    
    $(".drop-wrap .top").on("click", function(e) {
      e.stopPropagation(); // не даём событию подняться к document
      $(this).closest(".drop-wrap").find(".bottom").toggleClass("show");
      $(this).find(".arr").toggleClass("rotate");
    });
    
    $(".drop-wrap").on("click", function(e) {
      e.stopPropagation(); // если кликнули внутри drop-wrap, тоже не закрываем
    });

    $(".drop-menu").click(function () {
      $(this).toggleClass("is-active");
      $(".mobile-menu-wrap").toggleClass("open");
      $(".header").toggleClass("no-radius");
      $(".hide-drop-menu").removeClass("show");
      $("body, html").toggleClass("overflow");
  });

  var slickInitialized = false;

function initSlickIfMobile() {
  if (window.innerWidth < 768) {
    if (!slickInitialized) {
      $('.our-team-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        infinite: false,
      });
      slickInitialized = true;
    }
  } else {
    if (slickInitialized) {
      $('.our-team-slider').slick('unslick');
      slickInitialized = false;
    }
  }
}

// при загрузке страницы
$(document).ready(function () {
  initSlickIfMobile();
});

// при ресайзе окна
$(window).on('resize', function () {
  initSlickIfMobile();
});

document.addEventListener('DOMContentLoaded', () => {
  const regions = document.querySelectorAll('[data-region]');

  // Только на мобильных
  if (window.innerWidth <= 768) {
    regions.forEach(region => {
      const btn = region.querySelector('.region-header');
      btn.addEventListener('click', () => {
        region.classList.toggle('open');
      });
    });
  }
});

$(".region-item .top").on("click", function() {
  $(this).closest(".region-item").find(".bottom").toggleClass("open");
  $(this).find(".icon").toggleClass("rotate");
});

$(".favorite").on("click", function() {
  $(this).toggleClass("add");
});

$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + ' by Marsel Van Oosten';
    }
  }
});

const buttons = document.querySelectorAll('.tab-buttons button');
const panels = document.querySelectorAll('.tab-panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Активная кнопка
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Показ панели
    const target = btn.dataset.tab;
    panels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === target) {
        panel.classList.add('active');
      }
    });
  });
});

$('.select-wrap select').select2({
  minimumResultsForSearch: -1,
});

$(".questions__item").first().addClass("opened active");
$(".questions__item")
  .first()
  .find(".questions__item-body")
  .addClass("active")
  .slideDown();
$(".questions__item").first().find(".icon").addClass("rotate");

$(".questions__item .questions__item-heading").on("click", function (e) {
  e.preventDefault();

  // Проверяем, открыт ли уже этот вопрос
  const currentItem = $(this).closest(".questions__item");
  const isAlreadyOpen = currentItem.hasClass("opened");

  // Закрываем все вопросы
  $(".questions__item").removeClass("opened active");
  $(".questions__item-body").removeClass("active").slideUp();
  $(".questions__item .icon").removeClass("rotate");

  // Если текущий вопрос не был открыт, открываем его
  if (!isAlreadyOpen) {
    currentItem.addClass("opened active");
    currentItem.find(".questions__item-body").addClass("active").slideDown();
    $(this).find(".icon").addClass("rotate");
  }
});

$(".beer-slider").each(function (index, el) {
  $(el).BeerSlider({
      start: $(el).data("start")
  })
});
$(function () {
  $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [20, 480],
      slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
});

$(function () {
  $("#duration-slider").slider({
    range: true,
    min: 1,
    max: 30,
    values: [1, 30],
    slide: function (event, ui) {
      $("#duration-from").val(ui.values[0]);
      $("#duration-to").val(ui.values[1]);
    }
  });

  // Установка начальных значений
  $("#duration-from").val($("#duration-slider").slider("values", 0));
  $("#duration-to").val($("#duration-slider").slider("values", 1));
});

});
