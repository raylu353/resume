(function() {
  var linkify;

  linkify = function(text) {
    var exp;
    exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
  };

  $(function() {
    var mySlideshow, triggerHeight, win;
    $('nav a').each(function() {
      var match;
      match = false;
      if (window.location.pathname === $(this).attr('href')) {
        match = true;
      } else if ($(this).attr('href') !== '/') {
        match = window.location.pathname.match($(this).attr('href'));
      }
      return $(this).addClass(match ? 'on' : 'off');
    });
    $('.alt').each(function() {
      return $(this).append('<div><img src = "/images/about/dots.jpg"/></div>');
    });
    $('.small-thumb').each(function() {
      return $(this).append('<div class = "grey-overlay"></div>');
    });
    $(".small-thumb").hover((function() {
      return $(this).find('.grey-overlay').fadeIn(50, function() {
        return $(this).show();
      });
    }), (function() {
      return $(this).find('.grey-overlay').fadeOut(50, function() {
        return $(this).hide();
      });
    }));
    mySlideshow = function(currentSlide) {
      var nextSlide, prevSlide;
      prevSlide = currentSlide - 1;
      nextSlide = currentSlide + 1;
      if (prevSlide === 0) {
        prevSlide = 19;
      }
      if (nextSlide === 20) {
        nextSlide = 1;
      }
      $(".slide" + currentSlide).fadeIn(500);
      $(".slide" + prevSlide).fadeOut(500);
      return setTimeout((function() {
        return mySlideshow(nextSlide);
      }), 6000);
    };
    mySlideshow(1);
    $('figure div').hover(function() {
      return $(this).siblings('label').addClass('on');
    }, function() {
      return $(this).siblings('label').removeClass('on');
    });
    $('figure label').hover(function() {
      return $(this).siblings('div').addClass('on');
    }, function() {
      return $(this).siblings('div').removeClass('on');
    });
    $('#next').click(function() {
      $('.slide_tiles_container').animate({
        left: '-=208'
      }, 500, function() {
        $('.next_container').fadeOut("300");
        return $('.prev_container').fadeIn("300");
      });
      return false;
    });
    $('#previous').click(function() {
      $('.slide_tiles_container').animate({
        left: '+=208'
      }, 500, function() {
        $('.prev_container').fadeOut("300");
        return $('.next_container').fadeIn("300");
      });
      return false;
    });
    triggerHeight = 100;
    win = $(window).height();
    $(window).on("scroll resize", function() {
      var diff, resized, top;
      top = $(window).scrollTop();
      resized = $(window).height();
      diff = 0;
      if (top > triggerHeight) {
        return $(".scroll").fadeIn("slow");
      } else {
        return $(".scroll").hide();
      }
    });
    return $(".scroll").on("click", function() {
      return $(document).find("html,body").animate({
        "scrollTop": "0"
      }, "slow");
    });
  });

}).call(this);
