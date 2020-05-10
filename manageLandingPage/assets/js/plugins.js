$(document).ready(function(){
  'use strict';
  $('.navbar li span').click(function(){
      var sec_id = $(this).data('value');
      //console.log(sec_id);
      $('html,body').animate({
          scrollTop: $(sec_id).offset().top
      },1000);
    })
  $('.navbar .navbar-toggler').click(function(){
    $(this).toggleClass('active');
    $('.navbar .navbar-toggler .icon-bars').toggleClass('active');
    $('.navbar .navbar-collapse').toggleClass('active');
    $('.home-page').toggleClass('active');
  })
  $('.to-top').click(function(){
    $('html,body').animate({
      scrollTop: $('#home').offset().top
    },1000)
  });
  $(window).scroll(function(){
      var winScroll = $(this).scrollTop();
      if(winScroll > 900){
        $('.to-top').fadeIn();
      }else{
        $('.to-top').fadeOut();
      }
  });
  ///// auto_Customers_Slider_to_change_Style
  (function autoSlider(){
    $('#customers #slider .active').each(function(){
        if(!$(this).is(':last-child')){
            $(this).delay('3000').fadeIn(1000, function(){
            $(this).removeClass('active').next().addClass('active').css({opacity:1});
            autoSlider();
            })
        }else{
          $(this).delay('3000').fadeIn(1000, function(){
            $(this).removeClass('active');
            $("#customers #slider .item-first").addClass('active').css({opacity:1});;
            autoSlider();
          })
        }
    });
}());
});
