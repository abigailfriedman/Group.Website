$(document).ready(function(){
      $('.content-slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              swipe: true,
              swipeToSlide: true
            }
          }
        ]
  });
});
