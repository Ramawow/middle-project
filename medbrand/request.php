

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sebuah Platform Pergerakan Digital">

  <title>Request Susyi</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
   <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>

 </head> 
 <body style="background-color:rgb(221,175,252); padding: 10%;">
<a href="https://haizim.one/"><div style="position:fixed;top:0;padding: .5em;border-radius: 0 0 0 1em;background-color: #434c5e;color:#fbd405;right: 0;z-index: 258;font-size: 1.25em;font-weight: bold;">Haizim</div></a>     <div class="btn-group btn-group-lg fixed-bottom" style="padding:10px; z-index:99; left:10%; right:10%; margin-bottom:-10px;">
          
  <a href="index.php" class="btn" style="border-radius: 15px 0 0 0; box-shadow: 0px 0px 5px #111111; color:rgb(3,175,221); background-color:rgb(34,80,3);"><i class='fas fa-home' style='font-size:36px'></i></a>
  
  
  <a href="ngapain.php" class="btn" style=" box-shadow: 0px 0px 5px #111111; z-index:10; color:rgb(3,175,221); background-color:rgb(34,80,3);"><i class='fas fa-calendar-alt' style='font-size:36px'></i></a>
  
  
  <a href="request.php" class="btn" style="border-radius: 0 15px 0 0; box-shadow: 0px 0px 5px #111111; color:rgb(3,175,221); background-color:rgb(34,80,3);"><i class='fas fa-align-left' style='font-size:36px'></i></a>
  
</div> 
     
     <center>
     <h1 style="color:rgb(34,80,3); font-weight: 700;">Request Susyi</h1><br/>
     </center>
     
     <div class="row">
         <div class="col-sm-3"></div>
     
     <div class="col-sm-6" style="background-color:#f1f1f1; border-radius: 10px; box-shadow: 0px 0px 5px #111111; padding: 25px;">
  <form action="input.php" class="needs-validation" method="POST" novalidate>
  
    <div class="form-group">
      <label for="judul">Judul:</label>
      <input type="text" class="form-control" id="judul" placeholder="Judulnya apa kak?" name="judul" required>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Judulnya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
    <label for="uname">Bidang:</label>
    	<select name="bidang" class="custom-select" id="bidang" required>
    		<option value="medbrand">Medbrand</option>
            <option value="sekjend">SekJend</option>
            <option value="bendum">BendUm</option>
            <option value="pergerakan">Pergerakan</option>
            <option value="sosma">SosMa</option>
    		<option value="kaderisasi">Kaderisasi</option>
    		<option value="perempuan">Perempuan</option>
  		</select>
    </div>	
    
    <div class="form-group">
      <label for="cp">CP:</label>
      <input type="tel" class="form-control" id="cp" placeholder="Kakak bisa dihubungi lewat mana?" name="cp" required>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">CPnya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
      <label for="pakai">Tanggal Pakai:</label>
      <input type="date" class="form-control" id="pakai" placeholder="Ini mau dipake kapan nih kak?" name="pakai" required>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Tanggal pakainya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
      <label for="pakai">Tipe Pesanan :</label><br/>
      
      <div class="btn-group btn-group-toggle" data-toggle="buttons" name="jenis" >
  <label class="btn" style="background-color:rgb(221,175,252);">
    <input type="radio" name="tipe" id="option1" autocomplete="off" value="gambar">Gambar
  </label>
  <label class="btn" style="background-color:rgb(221,175,252);">
    <input type="radio" name="tipe" id="option2" autocomplete="off" value="video">Video
  </label>
</div>
      
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Jenisnya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
      <label for="ukuran">Ukuran:</label>
      <input type="text" class="form-control" id="ukuran" placeholder="Ukurannya seberapa kak?" name="ukuran" required>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Ukurannya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
      <label for="konten">Konten:</label>
      <textarea class="form-control" id="konten" placeholder="Kontennya apa kak?" name="konten" rows="7" required></textarea>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Kontennya kok gak diisi.</div>
    </div>
    
    <div class="form-group">
      <label for="krisar">Kritik dan Saran Buat Medbrand:</label>
      <textarea class="form-control" id="krisar" placeholder="Minta kritik dan sarannya dong kak" name="krisar" rows="3" required></textarea>
      <div class="valid-feedback"></div>
      <div class="invalid-feedback">Kritik dan saran kakak berarti bagi kami.</div>
    </div>
    
    <button type="submit" class="btn" style="background-color:rgb(34,80,3); font-weight:550; color:#fff;">Submit</button>
  </form>
</div>
<br>
<br>
<div class="col-sm-3"></div>

</div>

<script>
// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>

 </body>
 </html>
