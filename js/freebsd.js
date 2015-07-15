// FreeBSD website.

// Sticky Header
(function () {
  'use strict';
  var lastScrollTop = $(window).scrollTop()

  $(window).scroll(function(event){
    var n = $(this).scrollTop();
    if (n > lastScrollTop){
       // downscroll
      $('#header').removeClass("sticky");
    } else {
      // upscroll
      $('#header').addClass("sticky");
    }
    lastScrollTop = n;
    });

})();

