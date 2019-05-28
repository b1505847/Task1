
jQuery(document).ready(function($) {

    var visible = false;
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (!visible && scrollTop > 200) {
        $(".scrollToTop").fadeIn();
        visible = true;
        $('nav').addClass('sticky');
      } else if (visible && scrollTop <= 200) {
        $(".scrollToTop").fadeOut();
        visible = false;
        $('nav').removeClass('sticky');
      }
    });
  
    //Click event to scroll to top
    $(".scrollToTop").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      //return true;
    });
  
  });
  
  $('a[href^="#"]').on('click',function (e) {
    // e.preventDefault();
    var target = this.hash,
    $target = $(target);
   $('html, body').stop().animate({
     'scrollTop': $target.offset().top-110
    }, 900, 'swing', function () {
     window.location.hash = target;
    });
});