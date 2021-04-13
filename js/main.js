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

    function fadeOut() {

       TweenMax.to(".myBtn", 1, {
            y: -100,
            opacity: 0
       });

       TweenMax.to(".screen", 2, {
            y: -400,
            opacity: 0,
            ease: Power2.easeInOut,
            delay: 2
       });

       TweenMax.from(".overlay", 2, {
            ease: Power2.easeInOut
       });

       TweenMax.to(".overlay", 2, {
            delay: 2.6,
            top: "-110%",
            ease: Expo.easeInOut
       });

       TweenMax.to(".overlay-2", 2, {
            delay: 3,
            top: "-110%",
            ease: Expo.easeInOut
       });

       TweenMax.from(".content", 2, {
            delay: 3.2,
            opacity: 0,
            ease: Power2.easeInOut
       });

       TweenMax.to(".content", 2, {
            opacity: 1,
            y: -300,
            delay: 3.2,
            ease: Power2.easeInOut
       });

       }
