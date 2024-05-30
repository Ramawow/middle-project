$(document).ready(function(){
	$(".mobile-nav").hide();
	$(window).scroll(function(){
		const scroll = $(this).scrollTop();

		if (scroll > 300 ) {
			$(".navbar").addClass("navbar-rise");
			$(".nav-item").css("color", "black");

		}else if(scroll < 300){
			$(".navbar").removeClass("navbar-rise");
			$(".nav-item").css("color", "white");
		}

	})

	$(".nav-item").on("click", function(){
		$(".mobile-nav").slideUp();
		var to = $(this).attr("href");
		var get = $(to);

		$("html , body").animate({
			scrollTop : get.offset().top
		}, 2100, "swing");

	})

	$(".nav-collapse").on("click", function(e){
		e.preventDefault();
		$(".mobile-nav").slideToggle();
	})

	var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

})