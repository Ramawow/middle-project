$('.page-scroll').on('click', function(){
	var tujaun = $(this).attr('href');
	var elemenTujuan = $(tujaun)
	$('html, body').animate({
		scrollTop : elemenTujuan.offset().top - 50
	}, 1000 ,'swing');
});