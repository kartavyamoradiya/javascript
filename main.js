$(document).ready(function() {
   $(".navbar-toggler").click(function() {
      if($(this).hasClass("open")) {
         $(this).addClass("close").removeClass("open");
         $("body").removeClass("opened");
      } else {
         $(this).removeClass("close");
         $(this).addClass("open");
         $("body").addClass("opened");
      }
   });

   $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('.navbar').addClass("sticky-nav");
        } else {
            $('.navbar').removeClass("sticky-nav");
        }
    });

});


