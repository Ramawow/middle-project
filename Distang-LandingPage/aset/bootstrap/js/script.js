$(".img-title").on("hover",function(){
	$(".img-title").addClass("img-title-muncul")
})


$(".page-scroll").on("click", function(){
	var tujuan = $(this).attr("href");
	var elemenTujuan = $(tujuan);

	$("html, body").animate({
		scrollTop : elemenTujuan.offset().top - 70
	}, 2100, "easeInOutCirc");

});




$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	if (scroll > $("#jumb").offset().top - 200) {
		$(".navbar").addClass("navbar-ungu");
	}
	if (scroll < $("#tentang").offset().top - 200) {
		$(".navbar").removeClass("navbar-ungu");
	}

	if (scroll > $("#tentang").offset().top - 100) {
		$('.ttng-show').addClass('ttng-muncul');
	}

	if (scroll > $("#tentang").offset().top - -300) {
		$('.ttng-show1').addClass('ttng-show1-muncul');
		$('.ttng-show1').addClass('ttng-show1-muncul');
	}

	if (scroll > $("#galeri").offset().top - 100) {
		$(".glr-show").each(function(i){
			setTimeout(function(){
				$(".glr-show").eq(i).addClass("glr-show-muncul");
			}, 300 * i)
		})
	}

	if (scroll > $("#kesenian").offset().top - 200) {
		$(".img-kesenian").each(function(i){
			setTimeout(function(){
				$(".img-kesenian").eq(i).addClass("img-kesenian-muncul")
			}, 300 * i)
		})
	}

	if (scroll > $("#kesenian").offset().top) {
		$(".content-kesenian").each(function(i){
			setTimeout(function(){
				$(".content-kesenian").eq(i).addClass("konten-kesenian-muncul")
			}, 300*i)
		})
	}

	if (scroll > $("#kuliner").offset().top - 100) {
		$(".kuliner-show").addClass("kuliner-show-muncul");
		$(".img-kuliner3").addClass("img-kuliner3-muncul");
	}
	if (scroll > $("#kuliner").offset().top ) {
		$(".kuliner-show").addClass("kuliner-show-muncul");
	}

	if (scroll > $("#kuliner").offset().top - -100) {
		$(".kuliner-show2").each(function(i){
			setTimeout(function(){
				$(".kuliner-show2").eq(i).addClass("kuliner-show2-muncul");
			}, 300*i)
		})
	}


})