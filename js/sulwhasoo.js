$(function() {
   /* header 영역 */
   $('header').on('mouseover', function() {
      $(this).addClass('on')
   })
   $('.bg_gnb').on('mouseleave', function() {
      $('header').removeClass('on')
   })

   $('header').on('mouseover', function() {
      $(this).addClass('on');    
      $('.logo img').attr({
              src: "img/main_logo_orange.png"
      })
  }).on('mouseleave', function() {
      $(this).removeClass('on');
      $('.logo img').attr({
          src: "img/main_logo_whilte.png"
  })
  })

  $('header').on('mouseover', function() {
   $(this).addClass('on');    
   $('.langGroup img').attr({
           src: "img/v_black.png"
   })
}).on('mouseleave', function() {
   $(this).removeClass('on');
   $('.langGroup img').attr({
       src: "img/v_white.png"
})
})

$('header').on('mouseover', function() {
   $(this).addClass('on');    
   $('.miscLink img').attr({
           src: "img/ico_search_black.png"
   })
}).on('mouseleave', function() {
   $(this).removeClass('on');
   $('.miscLink img').attr({
       src: "img/ico_search_whilt.png"
})
})


   $('.gnb').on('mouseover focusin', function() {
      $(this).siblings().children('ul').stop().fadeOut(300);
      $(this).children('li').children('ul').stop().fadeIn(300);
   });
   $('.bg_gnb').on('mouseleave', function() {
    $('.gnb > li').children('ul').stop().fadeOut(300);
   });

   $('.gnb > li').on('mouseover focusin', function() {
    $('.bg_gnb').stop().fadeIn(300);
   });
   $('.bg_gnb').on('mouseleave', function() {
    $(this).stop().fadeOut(300);
   });
});



$(function() {
 $('.menu_area').on('click', function() {
     $('.langGroup, .gnb').slideToggle()
     $('.menu_area > img').attr({
      src: "img/menu_b.png"
     })

     
 });
 
});