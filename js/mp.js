	$(window).load(function() {
		$('#brandsignature').hide();
		if ($(window).width() < 768 && $(window).width() > 175) {
			$('#topsignature').css({display:"none"});
			$('#brandsignature').show();
		} else if ($(window).width() >=768) {
			$('#topsignature').css({display:"block"});
			$('#brandsignature').hide();
		} else if( $(window).width() <=175)
		{
			$('#brandsignature').hide();
		}
	});

	$(window).resize(function() {
		if ($(window).width() < 768 && $(window).width() > 175) {
			$('#topsignature').css({display:"none"});
			$('#brandsignature').show();
			$('#navibar').addClass('navbar-fixed-top');
		} else if ($(window).width() >=768) {
			$('#topsignature').css({display:"block"});
			$('#brandsignature').hide();
			$('#navibar').removeClass('navbar-fixed-top');
		} else if( $(window).width() <=175)
		{
			$('#brandsignature').hide();
		}
	});

    // Stick the #nav to the top of the window
    $(window).scroll(function() {
    	if ($(window).width() >=768) {
	    	if ($(window).scrollTop() > 40) {
	    		$('#navibar').addClass('navbar-fixed-top');
	    	}
	    	if ($(window).scrollTop() <= 40) {
	    		$('#navibar').removeClass('navbar-fixed-top');
	    	}
	    }

    });

   
    $(".timeline-panel").click(function(){
    	$(this).children(".timeline-body").toggle("slow");
    	if($(this).children(".glyphicon-chevron-up").is(":hidden")) {
    		$(this).children(".glyphicon-chevron-down").hide();
    		$(this).children(".glyphicon-chevron-up").show();
    	} else
    	{
    		$(this).children(".glyphicon-chevron-down").show();
    		$(this).children(".glyphicon-chevron-up").hide();
    	}


    });

    $(document).ready(function(){
    	$(".timeline-body").toggle(false);
    	$(".glyphicon-chevron-up").hide();
    });

    $('#carousel').on('slid.bs.carousel', function () {
	 	if($("#qaSlide").hasClass("active")) {
	 		$("#qablock").addClass("blockactived");
	 	} else {
	 		$("#qablock").removeClass("blockactived");
	 	}
	 	if($("#devSlide").hasClass("active")) {
	 		$("#devblock").addClass("blockactived");
	 	} else {
	 		$("#devblock").removeClass("blockactived");
	 	}
	 	if($("#lifeSlide").hasClass("active")) {
	 		$("#teamblock").addClass("blockactived");
	 	} else {
	 		$("#teamblock").removeClass("blockactived");
	 	}
	});

$(function() {
  $('#navibar a[href*="#"]:not([href="#media"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});