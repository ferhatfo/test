$(window).on('load', function() {
 

$('.product-slider').slick({
   accessibility: true,
   adaptiveHeight: false,
   arrows: true,
   asNavFor: null,
   nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="images/svg/arrow-right.svg"></i></button>',
   autoplay: false,
   autoplaySpeed: 5000,
   centerMode: true,
   centerPadding: '0',
   cssEase: 'ease',
   customPaging: function(slider, i) {
       return $('').text(i + 1);
   },
   dots: false,
   dotsClass: 'slick-dots',
   draggable: true,
   easing: 'linear',
   edgeFriction: 0.35,
   fade: false,
   focusOnSelect: false,
   focusOnChange: false,
   infinite: true,
   initialSlide: 0,
   lazyLoad: 'ondemand',
   mobileFirst: false,
   pauseOnHover: true,
   pauseOnFocus: true,
   pauseOnDotsHover: false,
   respondTo: 'window',
   responsive: null,
   rows: 1,
   rtl: false,
   slide: '',
   slidesPerRow: 1,
   slidesToShow: 2,
   slidesToScroll: 1,
   speed: 500,
   swipe: true,
   swipeToSlide: false,
   touchMove: true,
   touchThreshold: 165,
   useCSS: true,
   useTransform: true,
   variableWidth: false,
   vertical: false,
   verticalSwiping: false,
   waitForAnimate: true,
   zIndex: 20,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerPadding: '0',
          arrows:false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
 });



});



   