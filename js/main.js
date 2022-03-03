jQuery(document).ready(function(){

	"use strict"
		$('.slider').ripples({
	 	dropRadius: 13,
	 	 perturbance: 0.01,
	 	
});

/*
		$(".text").typed({

			strings:["First sentenece.","Second sentence."],
			typespeed:0,
			loop:true

		});
*/

	var typed = new Typed(".text", {
  strings: ["This is a <strong class='primary'>JavaScript</strong> library", "This is an <strong class='primary'>ES6 module</strong>"],
  typeSpeed:50,
  backSpeed:50,
  loop:true,


});


	$(window).scroll(function(){
		var top = $(window).scrollTop();
			if(top>=60){
				$("nav").addClass('secondary');

				}

			else
				if($("nav").hasClass('secondary')){
					$("nav").removeClass('secondary');
				}
	});


	$('.work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  delegate: 'a',
  	  gallery: {
      enabled: true
    }
});



  $("#team-members").owlCarousel({
  	item:3,
  	autoplay:true,
  	smartSpeed:700,
  	loop:true,
  	autoplayHoverPause:true,
  		responsive:{
  		0:{
  			items:1
  	},

  		480:{
  			items:2
  	},


  		768:{
  			items:3
  	}
  }


  });

     $('.counter').counterUp({
                delay: 10,
                time: 3000
            });

     $('a.smooth-scroll').smoothScroll();

});
