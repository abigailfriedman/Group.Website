var granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    states : {
        "default-state": {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
            ],
            transitionSpeed: 2000
        }
    }
});

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
