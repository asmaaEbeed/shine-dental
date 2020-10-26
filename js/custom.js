(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets  
      //$(".vid").css("width", "50%");
      document.getElementById('vid').play();

      
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

   });

       /*pop-up*/
       $('#show_popup').click(function () {
        //$($(this).data('popup')).fadeIn();
        //alert("kk");
        $('.popup').css("display", "block");
        //document.body.style.position = 'fixed';
        //document.body.style.top = `-${window.scrollY}px`;
        //$('.popup').style.overflow = 'auto';
    });
    $('.popup').click(function () {
        $(this).fadeOut();
        
    });
    $('.popup .inner-popup').click(function (e) {
        e.stopPropagation();    //prevent inner-pop close when click on it
    });
    $('.popup .close-popup').click(function () {
        //e.preventDefault();
        //$(this).parentsUntil('.popup').parent().fadeOut();
        //$('.popup').css("display", "none");
        $('.popup').fadeOut();
    });
    $('.popup .redirect-to-page').click(function(){
      $('.popup').fadeOut();
      window.location.href = "https://en.wikipedia.org/wiki/Policy";
    });
    //when press esc btn in keyboard close popup
    $(document).keydown(function() {
        if (e.keyCode == 27) {
            $('.popup').fadeOut();
            
        }
    });

})(jQuery);




