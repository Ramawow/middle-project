<?
ini_set('session.cookie_domain', 'halamanku.web.id' );
session_start();
include "pengunjung.php";

$base = ["halamanku.web.id","www.halamanku.web.id"];

if(in_array($_SERVER["HTTP_HOST"],$base) == false){
	include "nyasar.php";
}else{

	$hai = "";
	if(isset($_SESSION['user_id'])){
		$button = "<a href='template'><button class='btn btn-lg' style='color:#fff; background-color:#2c89a0'>Buat Sekarang</button></a>";
		$hai = "<h3><b style='font-family: Nunito; font-size: 1.75rem;'>Hai @$_SESSION[username]</b></h3>";
	}else{
		$button = "<a href='twitter_login'><button class='btn btn-lg' style='color:#fff; background-color:#2c89a0'>Login Dengan Twitter</button></a>";
	}

	?>

	<html>
	<head>
		<title>Halamanku Web Page Builder</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
		</script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js">
		</script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">
		</script>

		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

		<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js">
		</script>

		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://haizim.one/cloudme.fonts.googleapis.com/css2?family=Fredoka+One&family=Press+Start+2P&family=Comfortaa&family=Nunito&family=Monoton&display=swap" rel="stylesheet">

		<link href="style.css" rel="stylesheet">
		
		<link rel="shortcut icon" href="ico.png">

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<!-- Primary Meta Tags -->
		<meta name="title" content="Halamanku Web Page Builder ">
		<meta name="description" content="Buat Halaman Webmu Sendiri GRATIS! ">

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:title" content="Halamanku Web Page Builder ">
		<meta property="og:description" content="Buat Halaman Webmu Sendiri GRATIS! ">
		<meta property="og:image" content="https://halamanku.web.id/favicon.png">

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:title" content="Halamanku Web Page Builder ">
		<meta property="twitter:description" content="Buat Halaman Webmu Sendiri GRATIS! ">
		<meta property="twitter:image" content="https://halamanku.web.id/favicon.png">


		<script type="text/javascript">
			let futa = document.createElement("div");
			window.onload = function(){};
			$(document).ready(function(){
				
			});
		</script>



	</head>
	<body style="overflow: hidden;">
		<div class="js-scroll-counter scroll-counter" style="display: none;">
		</div>

		<div id="all">
			<div id="r15" class="row baris" style="">
				<div id="c15-2" class="col-sm kolom">
					<center>
					</center>
					<div id="i15-2-1" class="item" data-aos="fade-up">
						<div class="konten">
							<br>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>
			<div id="r1" class="row baris" style="background: url(&quot;https://haizim.one/media/halamanku-bg.svg&quot;) 0% 0% / cover scroll; padding: 0px 10%; min-height: 100vh;" https:="" haizim.one="" media="" halamanku-bg.svg")="" 0%="" cover="" scroll;="" padding:="" 0px="" 10%;="" min-height:="" 100vh;"="">
				<div id="c1-1" class="col-sm kolom">
					<center>
					</center>
					<div id="i1-1-1" class="item" data-aos="fade-up">
						<div class="konten">
							<img src="https://haizim.one/iseng/gdrive/?id=1Swb3VFP1uJI0cKvXVnGKm4Gk559D6cjq">
						</div>
						<center>
						</center>
					</div>
				</div>
				<div id="c1-2" class="col-sm kolom">
					<center>
					</center>
					<div id="i1-2-5" class="item" data-aos="fade-up" style="">
						<div class="konten">
						</div>
						<center>
						</center>
					</div>
					<div id="i1-2-4" class="item" data-aos="fade-up" style="">
						<div class="konten">
							<img src="https://haizim.one/iseng/gdrive/?id=1HtBajyDPnd3nffK5a0mogtInA1cgRgM9" style="width: 100%;">
						</div>
						<center>
						</center>
					</div>
					<div id="i1-2-1" class="item" data-aos="fade-up" style="">
						<div class="konten">
							<h3>
								<span style="background-color: transparent;">
									<font color="#2C89A0">
										<span style="font-family: Nunito;">
											<b>Aku Mau Bikin&nbsp;</b>
										</span>
										<b style="font-family: Nunito; font-size: 1.75rem;">Halaman Webku&nbsp;</b>
										<b style="font-family: Nunito; font-size: 1.75rem;">Sendiri Aah!</b>
									</font>
								</span>
							</h3>
						</div>
						<center>
						</center>
					</div>
					<div id="i1-2-3" class="item" data-aos="fade-up" style="">
						<div class="konten">
							<? echo $button; ?>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>
			<div id="r3" class="row baris" style="">
				<div id="c3-1" class="col-sm kolom">
					<center>
					</center>
					<div id="i3-1-1" class="item" data-aos="fade-up">
						<div class="konten">
							<h2 style="text-align: center; ">
								<font color="#37ABC8">
									<span style="background-color: transparent;">
										<span style="font-family: Nunito;">
											<span style="background-color: transparent;">
												<font color="#2C89A0">Apasih Halaman</font>
												<font color="#FFD70F">ku?</font>
											</span>
										</span>
									</span>
								</font>
							</h2>
						</div>
						<center>
						</center>
					</div>
					<div id="i3-1-2" class="item" data-aos="fade-up">
						<div class="konten">
							<h4>
								<div style="text-align: center;">
									<span style="background-color: transparent;">
										<font color="#2C89A0">
											<span style="font-family: Nunito; font-size: 1.5rem;">"Sebuah aplikasi web yang dapat kamu gunakan untuk membuat halaman web milik kamu sendiri tanpa perlu ribet-ribet coding"</span>
										</font>
									</span>
								</div>
								<span style="background-color: transparent;">
									<font color="#2C89A0">
										<span style="font-family: Nunito;">
											<div style="text-align: center;">
												<span style="font-size: 1.5rem;">Tentunya gratis dongs</span>
											</div>
											<div style="text-align: center;">
												<span style="font-size: 1.5rem;">
													<br>
												</span>
											</div>
											<div style="text-align: center;">
												<span style="font-size: 1.5rem;">
													<br>
												</span>
											</div>
											<div style="text-align: center;">
												<span style="font-size: 1.5rem;">
													<br>
												</span>
											</div>
										</span>
									</font>
								</span>
							</h4>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>
			<div id="r4" class="row baris" style="">
				<div id="c4-1" class="col-sm kolom">
					<center>
					</center>
					<div id="i4-1-1" class="item" data-aos="fade-up">
						<div class="konten">
							<h2 style="text-align: center; ">
								<span style="background-color: transparent;">
									<font color="#37ABC8">
										<span style="font-family: Nunito;">
											<span style="background-color: transparent;">
												<font color="#2C89A0">Emang Apa Kelebihan</font>
											</span>
											<font color="#FFD70F">
												<span style="background-color: transparent;">nya?</span>
											</font>
										</span>
									</font>
								</span>
							</h2>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>
			<div id="r2" class="row baris" style="">
				<div id="c2-1" class="col-sm kolom">
					<center>
					</center>
					<div id="i2-1-1" class="item" data-aos="fade-up">
						<div class="konten">
							<p style="text-align: center; color: #2c89a0">
								<i class="fa fa-donate fa-5x">
								</i>
							</p>
						</div>
						<center>
						</center>
					</div>
					<div id="i2-1-3" class="item" data-aos="fade-up">
						<div class="konten">
							<h3 style="text-align: center; ">
								<span style="background-color: transparent;">
									<font color="#2C89A0">
										<span style="font-family: Nunito;">
											<b>Gratis</b>
										</span>
									</font>
								</span>
							</h3>
						</div>
						<center>
						</center>
					</div>
				</div>
				<div id="c2-2" class="col-sm kolom">
					<center>
					</center>
					<div id="i2-2-1" class="item" data-aos="fade-up">
						<div class="konten">
							<p style="text-align: center;  color: #2c89a0"> . <i class="fa fa-code fa-5x">
							</i> .</p> </div>
							<center>
							</center>
						</div>
						<div id="i2-2-3" class="item" data-aos="fade-up">
							<div class="konten">
								<h3 style="text-align: center; ">
									<span style="background-color: transparent;">
										<font color="#2C89A0">
											<span style="font-family: Nunito;">Gak Perlu Coding</span>
										</font>
									</span>
								</h3>
							</div>
							<center>
							</center>
						</div>
					</div>
					<div id="c2-3" class="col-sm kolom">
						<center>
						</center>
						<div id="i2-3-1" class="item" data-aos="fade-up">
							<div class="konten">
								<p style="text-align: center;  color: #2c89a0"> . <i class="fa fa-magic fa-5x">
								</i> .</p> </div>
								<center>
								</center>
							</div>
							<div id="i2-3-3" class="item" data-aos="fade-up">
								<div class="konten">
									<h3 style="text-align: center; ">
										<span style="background-color: transparent;">
											<font color="#2C89A0">
												<span style="font-family: Nunito;">Desain Sesukamu</span>
											</font>
										</span>
									</h3>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r7" class="row baris" style="">
						<div id="c7-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i7-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<p>
										<br>
									</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r6" class="row baris" style="">
						<div id="c6-2" class="col-sm kolom" style="">
							<center>
							</center>
							<div id="i6-2-1" class="item" data-aos="fade-up">
								<div class="konten">
									<img src="https://haizim.one/iseng/gdrive/?id=1R68h3LZspj0Tv73LLs30nL133WY6l-_K">
								</div>
								<center>
								</center>
							</div>
						</div>
						<div id="c6-1" class="col-sm kolom" style="">
							<center>
							</center>
							<div id="i6-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<h2>
										<span style="font-family: Nunito;">
											<span style="background-color: transparent;">
												<font color="#2C89A0">5 Langkah</font>
											</span> <span style="background-color: transparent;">
												<font color="#FFD70F">Mudah</font>
											</span>
										</span>
									</h2>
								</div>
								<center>
								</center>
							</div>
							<div id="i6-1-2" class="item" data-aos="fade-up">
								<div class="konten">
									<font color="#2c89a0">
										<ul>
											<li style="line-height: 1.8;">
												<b>
													<span style="font-family: Nunito; font-size: 24px;">Login dengan Twitter</span>
												</b>
											</li>
											<li style="line-height: 1.8;">
												<b>
													<span style="font-family: Nunito; font-size: 24px;">Pilih template</span>
												</b>
											</li>
											<li style="line-height: 1.8;">
												<font face="Nunito">
													<span style="font-size: 24px;">
														<b>Sesuaikan dengan kebutuhanmu</b>
													</span>
												</font>
											</li>
											<li style="line-height: 1.8;">
												<font face="Nunito">
													<span style="font-size: 24px;">
														<b>Terbitkan halamanmu</b>
													</span>
												</font>
											</li>
											<li style="line-height: 1.8;">
												<font face="Nunito">
													<font face="Nunito">
														<font face="Nunito">
															<span style="font-size: 24px;">
																<b>Bagikan ke teman-temanmu</b>
															</span>
														</font>
													</font>
												</font>
											</li>
										</ul>
									</font>
								</div>
								<center>
								</center>
							</div>
							<div id="i6-1-3" class="item" data-aos="fade-up">
								<div class="konten">
									<? echo $button; ?>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r8" class="row baris" style="">
						<div id="c8-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i8-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<p>
										<br>
									</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					
					<div id="r19" class="row baris" style="background-color: rgb(44, 137, 160); background-attachment: scroll; padding: 0px 10%;">
						<div id="c19-1" class="kolom col-sm" style="">
							<center>
							</center>
							<div id="i19-1-6" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<p>
									&nbsp;</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
							<div id="i19-1-2" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<h2 align="center">
										<span style="background-color: transparent;">
											<font color="#FFFFFF">
												<span style="font-family: &quot;Nunito&quot;;">
													Berbagai template siap <font color="#FFD70F">
														<span style="background-color: transparent;">
														kamu</span>
													</font>
												gunakan</span>
											</font>
										</span>
									</h2>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>


					<div id="r20" class="row baris" style="background-color: rgb(44, 137, 160); background-attachment: scroll; padding: 0px 10%;">
						<div id="c20-1" class="kolom col-sm" style="border-radius: 0px; border: 0px solid rgb(0, 0, 0);">
							<center>
							</center>
							<div id="i20-1-2" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<br>
									<img src="https://haizim.one/media/ss1.png" alt="template 1" act="" more="">
								</div>
								<center>
								</center>
							</div>
							<div id="i20-1-undefined" class="item aos-init" data-aos="fade-up">
								<div class="konten">
									<div align="center">
										<center>
											<a href="https://halamanku.web.id/preview-template?id=2">
												<button class="btn " style="color: rgb(44, 137, 160); background-color: rgb(255, 255, 255);">
												Preview</button>
											</a>
										</center>
									</div>
									<br>

								</div>
								<center>
								</center>
							</div>
						</div>
						<div id="c20-7" class="kolom col-sm" style="border-radius: 0px; border: 0px solid rgb(0, 0, 0);">
							<center>
							</center>
							<div id="i20-7-2" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<br>
									<img src="https://haizim.one/media/ss2.png" alt="template 1" act="" more="">
								</div>
								<center>
								</center>
							</div>
							<div id="i20-7-undefined" class="item aos-init" data-aos="fade-up">
								<div class="konten">
									<div align="center">
										<center>
											<a href="https://halamanku.web.id/preview-template?id=9">
												<button class="btn " style="color: rgb(44, 137, 160); background-color: rgb(255, 255, 255);">
												Preview</button>
											</a>
										</center>
									</div>
									<br>
								</div>
								<center>
								</center>
							</div>
						</div>
						<div id="c20-8" class="kolom col-sm" style="border-radius: 0px; border: 0px solid rgb(0, 0, 0);">
							<center>
							</center>
							<div id="i20-8-2" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<br>
									<img src="https://haizim.one/media/ss3.png" alt="template 1" act="" more="">
								</div>
								<center>
								</center>
							</div>
							<div id="i20-8-undefined" class="item aos-init" data-aos="fade-up">
								<div class="konten">
									<div align="center">
										<center>
											<a href="https://halamanku.web.id/preview-template?id=10">
												<button class="btn " style="color: rgb(44, 137, 160); background-color: rgb(255, 255, 255);">
												Preview</button>
											</a>
										</center>
									</div>
									<br>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>


					<div id="r22" class="row baris" style="background-color: rgb(44, 137, 160); background-attachment: scroll; padding: 0px 10%;">
						<div id="c22-1" class="kolom col-sm" style="">
							<center>
							</center>
							<div id="i22-1-2" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<h2 align="center">
										<span style="background-color: transparent;">
											<font color="#FFFFFF">
												<span style="font-family: &quot;Nunito&quot;;">
													Kamu juga bisa bikin template<font color="#FFD70F">
														<span style="background-color: transparent;">
														mu</span>
													</font>
												sendiri looh!!</span>
											</font>
										</span>
									</h2>
								</div>
								<center>
								</center>
							</div>
							<div id="i22-1-6" class="item aos-init aos-animate" data-aos="fade-up" style="">
								<div class="konten">
									<p>&nbsp;</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>

					
					<div id="r10" class="row baris" style="">
						<div id="c10-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i10-1-3" class="item" data-aos="fade-up" style="">
								<div class="konten">
									<p>
										<br>
									</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
							<div id="i10-1-1" class="item" data-aos="fade-up" style="">
								<div class="konten">
									<h2 style="text-align: center; ">
										<span style="background-color: transparent;">
											<font color="#37ABC8">
												<span style="font-family: Nunito;">
													<b>
														<span style="background-color: transparent;">
															<font color="#2C89A0">Syarat &amp;</font>
														</span> <font color="#FFD70F">Ketentuan</font>
													</b>
												</span>
											</font>
										</span>
									</h2>
								</div>
								<center>
								</center>
							</div>
							<div id="i10-1-2" class="item" data-aos="fade-up" style="">
								<div class="konten">
									<h4 style="color: #2c89a0;">
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Seluruh isi koten merupakan tanggung jawab pembuat halaman&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Dilarang memuat konten yang melanggar hukum&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Dilarang memuat konten yang menyinggung SARA&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Dilarang memuat konten yang mengandung ajakan untuk melakukan hal-hal diatas&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Jika melakukan pelanggaran, maka halaman akan dinonaktifkan&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Dengan membuat halaman disini maka dianggap menyetujui syarat &amp; ketentuan yang berlaku&nbsp;</span>
												</b>
											</li>
										</ul>
										<ul>
											<li>
												<b>
													<span style="font-family: Nunito;">Hal-hal yang belum diatur disini dapat ditambahkan di kemudian hari&nbsp;</span>
												</b>
											</li>
										</ul>
									</h4>
								</div>
								<center>
								</center>
							</div>
							<div id="i10-1-4" class="item" data-aos="fade-up">
								<div class="konten">
									<p style="text-align: center; ">
										<span style="background-color: transparent;">
											<font color="#2C89A0">
												<font face="Nunito">
													<span style="font-size: 28px;">
														<b>
															<i>"Tenang aja, aku percaya kamu gak bakalan melanggar kok"</i>
														</b>
													</span>
												</font>
											</font>
										</span>
									</p>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r16" class="row baris" style="">
						<div id="c16-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i16-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<center>
										<? echo $button; ?>
									</center>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r12" class="row baris" style="">
						<div id="c12-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i12-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<p>
										<br>
									</p>
									<p>
										<br>
									</p>
								</div>
								<center>
								</center>
							</div>
						</div>
					</div>
					<div id="r11" class="row baris" style="background-color: rgb(255, 215, 15); background-attachment: scroll; padding: 0px 10%; min-height: auto;">
						<div id="c11-1" class="col-sm kolom">
							<center>
							</center>
							<div id="i11-1-1" class="item" data-aos="fade-up">
								<div class="konten">
									<h2 style="text-align: center; ">
										<span style="background-color: transparent;">
											<font color="#fff">
												<span style="font-family: Nunito;">Donasi</span>
											</font>
										</span>
									</h2>
								</div>
								<center>
								</center>
							</div>
							<div id="i11-1-2" class="item" data-aos="fade-up">
								<div class="konten">
									<div style="text-align: center;">
										<font color="#fff">
											<b style="font-size: 1rem;">
												<span style="font-family: Nunito; font-size: 24px;">Kamu merasa mendapat manfaat dengan adanya web ini dan ada rezeki yang lebih?</span>
											</b>
										</font>
									</div>
								</div>
								<center>
								</center>
							</div>
							<div id="i11-1-3" class="item" data-aos="fade-up">
								<div class="konten"> <center>
									<a href="donasi" target="_blank">
										<button class="btn btn-lg" style="color:#FFD70F; background-color:#fff">Donasi Sekarang</button>
									</a>
								</center>
							</div>
							<center>
							</center>
						</div>
					</div>
				</div>
				<div id="r14" class="row baris" style="background-color: rgb(44, 137, 160); background-attachment: scroll; padding: 0px 10%; min-height: auto;">
					<div id="c14-1" class="col-sm kolom">
						<center>
						</center>
						<div id="i14-1-1" class="item" data-aos="fade-up">
							<div class="konten">
								<h2 style="text-align: center; ">
									<span style="font-family: Nunito; color:#fff;">Bantuan</span>
								</h2>
							</div>
							<center>
							</center>
						</div>
						<div id="i14-1-2" class="item" data-aos="fade-up">
							<div class="konten">
								<div style="text-align: center;">
									<font color="#fff">
										<b style="font-size: 1rem;">
											<span style="font-family: Nunito; font-size: 24px;">Kamu ada hal yang ingin disampaikan atau ditanyakan?</span>
										</b>
									</font>
								</div>
							</div>
							<center>
							</center>
						</div>
						<div id="i14-1-3" class="item" data-aos="fade-up">
							<div class="konten"> <center>
								<a href="https://haizim.one/#call" target="_blank">
									<button class="btn btn-lg" style="color:#37abc8; background-color:#fff">Sampaikan Disini</button>
								</a>
							</center>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>
			<div id="r13" class="row baris" style="background-color: rgb(44, 137, 160); background-attachment: scroll; padding: 0px 10%; min-height: auto;">
				<div id="c13-1" class="col-sm kolom">
					<center>
					</center>
					<div id="i13-1-1" class="item" data-aos="fade-up">
						<div class="konten">
							<p>
								<br>
							</p>
							<p>
								<br>
							</p>
						</div>
						<center>
						</center>
					</div>
				</div>
			</div>


		</div>
		
		<div class="modal fade" id="modal-detail-img" role="dialog">
	<div class="modal-dialog modal-lg">
    
		<!-- Modal content-->
		<div class="modal-content">

			<div class="modal-body" style="overflow-wrap: anywhere;">
			    <button type="button" class="close" data-dismiss="modal">&times;</button>
			    <!--div class="row">
			        <div class="col-sm-6" style="padding:.5em;text-align: center;">
			            <img src="" id="img-img">
			        </div>
			        <div class="col-sm-6">
			            
			            <h4 id="detail-img-head"></h4>
			            <hr/>
			            <p id="p-img"></p>
			        </div>
			    </div-->
			    <center>
			        <img src="" id="img-img">
			    </center>
			    <hr/>
			    <h4 id="detail-img-head"></h4>
			    <hr/>
                <p id="p-img"></p>
			    
                
			</div>
			<div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>

		</div>
      
	</div>
</div>

<script src="https://halamanku.web.id/script-hal.js"></script>

 		<script type="text/javascript">

// 			let items = document.getElementsByClassName("item");
// 	//[...items].forEach(e => addAos(e));

// 	window.onload = function(){};


// 	function addAos(itm) {
// 		let aosattr = document.createAttribute("data-aos");
// 		aosattr.value = "fade-up";
// 		itm.setAttributeNode(aosattr);
// 	}

// 	document.querySelector('html').classList.remove('no-js');
// 	if (!window.Cypress) {
// 		const scrollCounter = document.querySelector('.js-scroll-counter');

// 		AOS.init({
// 			mirror: true
// 		});

// 		document.addEventListener('aos:in', function(e) {
// 			console.log('in!', e.detail);
// 		});

// 		window.addEventListener('scroll', function() {
// 			scrollCounter.innerHTML = window.pageYOffset;
// 		});
// 	}

	$(document).ready(function(){

		let tinggi = "";
		if(document.getElementById("all").offsetHeight < document.body.offsetHeight){ tinggi="position:absolute;" }
		futa = document.createElement("div");
		futa.style.cssText = "width:100vw; background-color: #252525; color:#fff; padding: 1em; bottom : 0; "+tinggi;
		futa.innerHTML = "<center>Hasil Keisengan <a href='https://haizim.one/'>Haizim</a></center>";

		document.body.append(futa);
	});
// </script>



<script src="resession.js"></script>
</body>
</html>
<?
}
?>