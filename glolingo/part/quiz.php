

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
    
    <div class="cont-orange">
        <div class="row">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-4">
                        <div class="profile-big"></div>
                    </div>
                    <div class="col-8">
                        <h4>Level 1</h4>
                        <h5 class="t-sec">Trial Learner</h5>
                    </div>
                </div>
        <button class="btn btn-block btn-neg">Upgrade ke Premium</button>
            </div>
            <div class="col-sm-6">
                <center>
                <div class="row poin">
                    <div class="col" style="border-right: 2px solid #ffe1ce">
                        <h2>Poin</h2>
                        <h3 class="t-sec">58</h3>
                    </div>
                    <div class="col">
                        <h2>Skor</h2>
                        <h3 class="t-sec">85</h3>
                    </div>
                </div>
                </center>
            </div>
    </div>
</div>

<hr/>
    
    <div class="cont-white">
        <center>
            <h2 class="lesson-title">Lesson 1</h2>
            </center>
            <div class="row">
                            <div class="col-sm-3 col-6">
                    <form action='test.php' method='post'><button type='submit' name='no' value='1' class='lesson-img shrink' style='background-image: url()'></button><h5>Chapter 1</h5></form>                </div>    
                            <div class="col-sm-3 col-6">
                    <form action='test.php' method='post'><button type='submit' name='no' value='2' class='lesson-img shrink' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/5/50/Msh_04_sazabi_ver_ka_by_hes6789_da1imbx-fullview.png/revision/latest/scale-to-width-down/310?cb)'></button><h5>Chapter 2</h5></form>                </div>    
                            <div class="col-sm-3 col-6">
                    <form action='test.php' method='post'><button type='submit' name='no' value='3' class='lesson-img shrink' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/b/b0/GN-001_-_Gundam_Exia_-_Front_View.jpg/revision/latest/scale-to-width-down/243?cb=20110215031218)'></button><h5>Chapter 3</h5></form>                </div>    
                            <div class="col-sm-3 col-6">
                    <form action='test.php' method='post'><button type='submit' name='no' value='4' class='lesson-img shrink' style='background-image: url()'></button><h5>Chapter 4</h5></form>                </div>    
                        </div>
        </center>
    </div>
    <div class="cont-white">
        <center>
            <h2 class="lesson-title">Lesson 2</h2>
            </center>
            <div class="row">
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/a/a1/MSN-06S_Sinanju_Stein_Front.png/revision/latest/scale-to-width-down/310?cb=20190427231354)'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 5</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url()'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 6</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url()'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 7</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/e/e6/Rx_93_nu_gundam_ver_ka_by_hes6789_da1ilzq-fullview.png/revision/latest/scale-to-width-down/310?)'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 8</h5>                </div>    
                        </div>
        </center>
    </div>
    <div class="cont-white">
        <center>
            <h2 class="lesson-title">Lesson 3</h2>
            </center>
            <div class="row">
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url()'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 9</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/6/60/Axis_Shock_Gundam_Unicorn.png/revision/latest/scale-to-width-down/310?cb=20121107045632)'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 10</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url()'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 11</h5>                </div>    
                            <div class="col-sm-3 col-6">
                    <button class='lesson-img' style='background-image: url(https://vignette.wikia.nocookie.net/gundam/images/d/d5/Core_Gundam_II_%28Core_Shield%29_%28Front%29.png/revision/latest/scale-to-width-down/310?cb=202)'><span class='lock'><i class='fas fa-lock'></i></span></button><h5>Chapter 12</h5>                </div>    
                        </div>
        </center>
    </div>
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