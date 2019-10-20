// page= index section= slider-carousel
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    speed: 1200,
    dots: false,
    arrows: true,
  });
// page= index section= services
  $('.slider-center').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    asNavFor: '.slider-control'
  });
  $('.slider-control').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-center',
    speed: 1200,
    dots: false,
    arrows: true,
  });
// page= index section= portfolio
  $('.slider-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    asNavFor: '.slider-control-bottom'
  });
  $('.slider-control-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-bottom',
    speed: 1200,
    dots: false,
    arrows: true,
  });
// page= index section= information class= news
  $('.slider-news').slick({
    dots: true,
    arrows: false,
  });
// page= index section= information class= review
  $('.slider-review').slick({
    dots: true,
    arrows: false,
  });
// page= our-services section= services
  $('.slider-posts').slick({
    dots: true,
    arrows: false,
  });
// page= post-page section= slider-post-page
$('.slick-slider-post-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 100,
  asNavFor: '.control-slider-post-page'
});
$('.control-slider-post-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slick-slider-post-page',
  speed: 120,
  dots: false,
  arrows: true,
});
// page= post-page section= slider-post-page
$('.slides-section-contentpostpage').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 100,
  asNavFor: '.controls-slider-left-right-post-page'
});
$('.controls-slider-left-right-post-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slides-section-contentpostpage',
  speed: 120,
  dots: false,
  arrows: true,
});
// page= news-events section= content-news-events
$('.slides-news-events').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 100,
  asNavFor: '.slider-control-news-events'
});
$('.slider-control-news-events').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slides-news-events',
  speed: 120,
  dots: false,
  arrows: true,
});
// burger-menu
$(".button").click(function(){
  $(this).closest("body").toggleClass("active");
 });