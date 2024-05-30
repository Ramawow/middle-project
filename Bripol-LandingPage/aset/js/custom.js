 jQuery(document).ready(function($) {
            $("[data-toggle='counter-up']").counterUp({
                delay: 10,
                time: 2000
            });
        });
$(document).ready(function(){
	// $('.bd-example-modal-lg').modal('show')

	$("[type='checkbox']").on("change", function(){
		$("#tentang").addClass("bg-dark")
		$("#tentang").addClass("text-light")
	})
	$("[type='checkbox']").on("change", function(){
		$("#tentang").addClass("bg-light")
		$("#tentang").addClass("text-dark")
	})

	$(".page-scroll").on("click", function(){
		$(".navbar-collapse").collapse("hide");
		var tujuan = $(this).attr("href");
		var elemenTujuan = $(tujuan);

		$("html, body").animate({
			scrollTop : elemenTujuan.offset().top - 50
		}, 2100, "easeInOutExpo");

	});



	

	$(".card-home").each(function(i){
		setTimeout(function(){
			$(".card-home").eq(i).addClass("muncul");
		}, 300 * i)
	});

	$(".jumbotron-text").addClass("muncul");
	$(".botol").addClass("muncul");

	$(window).on("scroll", function(){
		var ar = $(this).scrollTop();

		if (ar < 400) {
			$(".top-btn").removeClass("top-btn-muncul");
		}
		if (ar > 400) {
			$(".text-kiri").addClass("muncul");
			$(".text-bawah").addClass("muncul");
			$(".gambar-atas").addClass("muncul");
			$(".gambar-kanan").addClass("muncul");

			$(".top-btn").addClass("top-btn-muncul");
		}

		if (ar > 1300) {
			$(".img-sambutan").addClass("muncul");
			$(".text-sambutan-atas").addClass("muncul");

		}

		if (ar > 1500) {
			$(".card-sambutan").each(function(i){
				setTimeout(function(){
					$(".card-sambutan").eq(i).addClass("muncul");
				}, 300 * i)
			});
		}

			

		if (ar > 2700) {
			$(".galleri").each(function(i){
				setTimeout(function(){
					$(".galleri").eq(i).addClass("muncul");
				}, 300 * i)
			});
		}

		if (ar > 3500) {
				$(".text-testi").addClass("muncul");
				$(".text-testi-kiri").addClass("muncul");
		}

	})
});