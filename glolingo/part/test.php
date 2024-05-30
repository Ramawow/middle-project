

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Belajar Bahasa Inggris di Glolingo yuks!">
  
	<title>Quiz - Glolingo</title>
	
	<!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
   <link rel='stylesheet' href='part/style.css'>
   <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
   
   <script src="chartjs/dist/Chart.js"></script>
   <script>
    function textAreaAdjust(o) {
        o.style.height = "1px";
        o.style.height = (25+o.scrollHeight)+"px";
    }
    
   </script>
</head>
<body>

<nav class="navbar navbar-expand justify-content-end fixed-top">
  <!-- Brand/logo -->
  <a class="navbar-brand" href="#">
    <img src="logo.png" alt="logo" style="height:2.5rem;">
  </a>
  
  <!-- Links -->
  <ul class="navbar-nav nav-pills menug">
    <li class="nav-item">
      <a class="nav-link " href="dashboard.php"><i class="fas fa-address-card"></i> Dashboard</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="lesson.php"><i class="fas fa-chalkboard-teacher"></i> Lesson</a>
    </li>
    <li class="nav-item">
      <a class="nav-link  active" href="quiz.php"><i class="fas fa-pencil-ruler"></i> Quiz</a>
    </li>
    <!--li class="nav-item">
      <a class="nav-link  " href="discussion.php"><i class="fas fa-comments"></i> Discussion</a>
    </li-->
  </ul>
  
  <ul class="navbar-nav text-right ml-auto mr-1 ">
      <!--li class="nav-item separator">
          
          </li-->
      <li class="nav-item">
          <a class="nav-link" href="#"><div class="profile"></div></a>
          </li>
      <li class="nav-item">
          <a class="nav-link" href="#">01</a>
        </li>
      <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i></a>
        </li>
  </ul>
</nav>

<a href="#atas"><div class="fixed-bottom go-up" align="right"><i class="fas fa-arrow-up"></i></div></a>

<div class="btn-group btn-group-lg fixed-bottom menub">
          
  <a href="dashboard.php" class="btn " style="border-radius: 15px 0 0 0;"><i class="fas fa-address-card"></i></a>
  
  <a href="lesson.php" class="btn " style="border-right: 1px solid #ffe1ce; border-left: 1px solid #ffe1ce;"><i class='fas fa-chalkboard-teacher'></i></a>
  
  <a href="quiz.php" class="btn active" style="border-right: 1px solid #ffe1ce; border-left: 1px solid #ffe1ce;"><i class='fas fa-pencil-ruler'></i></a>
  
  <a href="#atas" class="btn" style="border-radius: 0 15px 0 0;"><i class="fas fa-arrow-up"></i></a>
  <!--a href="discussion.php" class="btn " ><i class='fas fa-comments'></i></a-->
  
</div> 

<div class="atas" id="atas"></div>

<div class="container">
<div class="cont-white">
<div id="soal" class="carousel slide" data-ride="" data-interval="false"> 
<div class="carousel-inner">
<form action="jawab.php" method="post">
    <div class="item carousel-item active">
        <div class="row lesson question">
        <div class="col-sm-2 hide-mobile">
            <div class="lesson-img" style="background-image: url();"></div>        
        </div>
        <div class="col-sm-10">
            <b>Lesson 1</b>
            <h2 class='judul'>Chapter 1</h2>
            <span class="t-sec">James Cooper</span>          
        </div>
    </div>
    <hr/>
    <center><h3 class="judul">Perhatian!!</h3></center>
    <p>Dilarang melakukan klik kanan/long press!</p>
    <p>Dilarang membuka/berpindah tab!</p>
    <p>Jika melakukan pelanggaran, maka jawaban kamu akan terhapus dan harus mengulangi dari awal kembali!</p>
    <hr/>
    <center>
        <h3>Tapi aku percaya kamu bakal jujur kok</h3>
        <h2 class="judul">Selamat mengerjakan ya!</h2>
        
    </center>
    </div>
        <div class="item carousel-item">
        <div class="number">
            <center>
            <h4>
            <b>1</b>/3            </h4>
            <hr/>
            </center>
        </div>
        
        <div class="question">
            <p>Magna fringilla urna porttitor rhoncus dolor purus non. Egestas maecenas pharetra convallis posuere.</p><textarea name='jwb[]' class='essay' onkeyup='textAreaAdjust(this)' style='overflow:hidden'></textarea> 
            
        </div>
        
        
    </div>
        <div class="item carousel-item">
        <div class="number">
            <center>
            <h4>
            <b>2</b>/3            </h4>
            <hr/>
            </center>
        </div>
        
        <div class="question">
            <p>Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Egestas integer eget aliquet nibh praesent tristique magna <input class='fill' type='text' name='jwb[]'> Aliquam faucibus purus</p> 
            
        </div>
        
        
    </div>
        <div class="item carousel-item">
        <div class="number">
            <center>
            <h4>
            <b>3</b>/3            </h4>
            <hr/>
            </center>
        </div>
        
        <div class="question">
            <p>Proin sagittis nisl rhoncus mattis rhoncus urna neque. Ut ornare lectus sit amet est placerat in.</p><div class='radio-toolbar'><input type='radio' name='jwb[]' id='jwb3-1' value='1'><label for='jwb3-1'>Maecenas sed enim ut sem.</label><br/><input type='radio' name='jwb[]' id='jwb3-2' value='2'><label for='jwb3-2'>Nibh nisl condimentum id venenatis a.</label><br/><input type='radio' name='jwb[]' id='jwb3-3' value='3'><label for='jwb3-3'>Quis viverra nibh cras pulvinar.</label><br/><input type='radio' name='jwb[]' id='jwb3-4' value='4'><label for='jwb3-4'>Non odio euismod lacinia at quis.</label><br/></div> 
            
        </div>
        
        
    </div>
        <div class="item carousel-item send">
        
        <div class="question">
            <center>
            <h2 class="judul">Selamat,</h2>
            <h4>kamu telah menyelesaikan quiz Chapter 1.</h4>
            <h3>Sekarang tinggal kamu kirim jawabannya.</h3>
            <br/>
            <button type="submit" class="btn btn-lg btn-glo">Kirim Jawaban</button></center> 
        </div>
    </div>
    <a class="carousel-control right carousel-control-next" href="#soal" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
    
</form>
</div>

</div>
</div>
<script>
    $(document).ready(function(){
  // Activate the Carousel, but pause it from the start
  $("#soal").carousel("pause");
    });
</script>

</div>
<footer>
        <div class="row">
        <div class="col-sm col-foot">
        <h4>FUTA ITU MAKSUDNYA CARA BACA FOOTER TAPI PAKE CARA NGOMONGNYA SOK JEJEPANGAN</h4>
        </div>
        <div class="col-sm col-foot mid">
        <h2>FOOTER >> FUTER >> FUTA</h2>
        </div>
        <div class="col-sm col-foot">
        <h2>GITUUU...</h2>
        </div>
    </div>
    <div class="bawah"></div>
</footer>

</body>
</html>