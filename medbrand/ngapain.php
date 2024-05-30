


<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sebuah Platform Pergerakan Digital">

  <title>Mau Ngapain di Bulan  Pekan </title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
  
  <style>
      h1, h2, h3, h4, h5, h6, h7{
          color:rgb(79,73,91);
          font-weight: 650;
      }
      a{
          color:rgb(176,182,164);
      }
      a:hover{
          color:rgb(79,73,91);
      }
  </style>

 </head> 
 
 <body style="background-color:rgb(176,182,164); padding: 10%; color:rgb(79,73,91);">
<a href="https://haizim.one/"><div style="position:fixed;top:0;padding: .5em;border-radius: 0 0 0 1em;background-color: #434c5e;color:#fbd405;right: 0;z-index: 258;font-size: 1.25em;font-weight: bold;">Haizim</div></a>     
      <div class="btn-group btn-group-lg fixed-bottom" style="padding:10px; z-index:99; left:10%; right:10%; margin-bottom:-10px;">
          
  <a href="index.php" class="btn" style="border-radius: 15px 0 0 0; box-shadow: 0px 0px 5px #111111; color:rgb(91,182,176); background-color:rgb(79,73,91);"><i class='fas fa-home' style='font-size:36px'></i></a>
  
  
  <a href="ngapain.php" class="btn" style=" box-shadow: 0px 0px 5px #111111; z-index:10; color:rgb(91,182,176); background-color:rgb(79,73,91);"><i class='fas fa-calendar-alt' style='font-size:36px'></i></a>
  
  
  <a href="request.php" class="btn" style="border-radius: 0 15px 0 0; box-shadow: 0px 0px 5px #111111; color:rgb(91,182,176); background-color:rgb(79,73,91);"><i class='fas fa-align-left' style='font-size:36px'></i></a>
  
</div> 
      <center>
                <div class="container" style="background-color:#f1f1f1; border-radius: 10px; box-shadow: 0px 0px 5px #111111; padding: 15px; margin-top:25px;">
         <center><h5 style="font-weight:550;">Aku pengen liat agenda medbrand pas</h5></center>
         <!--div class="row"-->
             <form action="ngapain.php" class="row" method="GET" novalidate>
         <div class="col-sm-6">
             <select name="bulan" class="custom-select mb-2">
      <option selected value="">Bulan</option>
      <option value="januari">Januari</option>
      <option value="februari">Februari</option>
      <option value="maret">Maret</option>
      <option value="april">April</option>
      <option value="mei">Mei</option>
      <option value="juni">Juni</option>
      <option value="juli">Juli</option>
      <option value="agustus">Agustus</option>
      <option value="september">September</option>
      <option value="oktober">Oktober</option>
      <option value="november">November</option>
      <option value="desember">Desember</option>
    </select>
         </div>
         <div class="col-sm-3">
             <select name="pekan" class="custom-select mb-2">
      <option selected value="">Pekan</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
         </div>
         <div class="col-sm-3">
             <button type="submit" class="btn btn-block" style="background-color:rgb(164,182,176); box-shadow: 0px 0px 5px #111111;"> Mau Ngapain</button>
         </div>
         </form>
     </div>
     </body>

<!--footer style="padding:20% 20% 0 20%;">
    <div class="container" style="background-color:#f1f1f1; border-radius: 10px; box-shadow: 0px 0px 5px #111111; padding: 25px;">
         <center><h3>ini footer</h3></center>
     </div>
</footer-->
</html>
