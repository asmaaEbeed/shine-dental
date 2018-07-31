(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
//    $('.navbar-collapse a').on('click',function(){
//      $(".navbar-collapse").collapse('hide');
//    });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();
    
    
    //active navbar
   $('.collapse ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
   $('.slider .circle-image') .load(function(){
       $(this).animate({top: "100px"});
   })

})(jQuery);




