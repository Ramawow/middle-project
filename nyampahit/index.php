

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Buang aja disini">

  <title>buang emosi negatifmu disini | nyampahi twitter</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
   <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
   <style>
      html, body{
          background-color:hsl(157,8.5%,95%);
          width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        scroll-behavior: smooth;
        color : hsl(98,5%,25%);
      }
      h1, h2, h3, h4, h5, h6, h7, h8, h9{
          font-weight:bold;
      }
      .kontener{
          padding: 5% 15%;
          
      }
      .tw{
          color:#2c89a1;
      }
      hr{
          border : 1px solid hsl(98,5%,25%);
      }
      .kotak{
          /*height:85%;*/
          background-color : hsl(98,5%,58%);
          color:hsl(157,8.5%,85%);
          border: 3px solid hsl(98,5%,25%);
          box-shadow: 11px 11px hsl(98,5%,25%);
          border-radius : 5px;
          padding: 20%;
          margin: 10px 0px;
          width:100%;
      }
      .kotak:hover{
          box-shadow: 3px 3px hsl(98,5%,25%);
      }
      .bagi{
          padding: 0px 20%;
      }
      .ktk{
          padding: 15px 5%;
      }
      .tmb{
          background-color : hsl(98,5%,58%);
          color:hsl(157,8.5%,85%);
          border: 3px solid hsl(98,5%,25%);
          box-shadow: 8px 8px hsl(98,5%,25%);
          border-radius : 5px;
          font-weight : bold;
          
      }
      .tmb:hover{
          box-shadow: 3px 3px hsl(98,5%,25%);
      }
      .foot{
          background-color : hsl(157,5%,25%);
          color:hsl(157,8.5%,85%);
          padding:5px;
      }
      #cnt{
          background-color : hsl(98,5%,25%);
          color : hsl(98,5%,58%);
          margin : 10px;
          padding: 5px;
          border-radius : 5px;
          font-size : large;
          font-weight:bold;
      }
      .logont{
          height:3rem;
      }
      .hdr{
          font-size: 2.5rem;
          font-weight:bold;
      }
      .ic{
          background-color:hsl(157,8.5%,95%);
          color : hsl(157,25%,58%);
          padding: 0px 5px;
          position:absolute;
          margin-top: -1.2em;
          font-size: 1.5em;
          left:50%;
      }
      @media screen and (max-width: 800px) {
        .kontener{
          padding: 10%;
          
      }   
      .hdr{
          font-size: 2rem;
      }
      }
    </style>
    
    <script>
        function cnt(){
            jml=$("#sampah").val().length;
            $("#cnt").html(263-jml)
            $("#konf").html("")
        }
        function buang(){
            sampah = $("#sampah").val();
            
            if(sampah != ""){
            $.ajax({
                    type:"POST", url:"prs.php", data: "sampah="+sampah, success:function(data){
                        $("#konf").html(data);
                        
                        document.getElementById("sampah").value = "";
                    }
                });
            }else{
                $("#konf").html("kok kosong?");
            }
        }
    </script>
</head>
<body>
<a href="https://haizim.one/"><div style="position:fixed;top:0;padding: .5em;border-radius: 0 0 0 1em;background-color: #434c5e;color:#fbd405;right: 0;z-index: 258;font-size: 1.25em;font-weight: bold;">Haizim</div></a>    <center>
    <div class="kontener">
        <p class="hdr">nyampahi&nbsp;<img src="logont.png" class="logont"/><span class="tw">&nbsp;twitter</span></p>
        <hr/>
        <i class="fas fa-heartbeat ic"></i>
        <h4 style="font-weight:500;"><i>
            banyak dari kita memiliki hal-hal yang tak dapat kita bagi dengan siapapun<br/>
            meski begitu, terkadang kita tersiksa dengan menyimpannya <br/>
            disinilah kamu bisa membagikannya sesukamu<br/>
            tanpa peduli dengan identitasmu
            
        </i></h4>
        <br/>
        <div class="row bagi">
            <div class="col-sm-4 ktk">
                <div class="btn kotak">
                    <img src="1nt.png" style="height:5rem;">
                </div>
                <h5>buang sampahmu disini</h5>
            </div>
            <div class="col-sm-4 ktk">
                <div class="btn kotak">
                    <img src="2nt.png" style="height:5rem;">
                </div>
                <h5>aku bawa sampahmu</h5>
            </div>
            <div class="col-sm-4 ktk">
                <div class="btn kotak">
                    <img src="3nt.png" style="height:5rem;">
                </div>
                <h5>dibuang sebagai <a href="http://twitter.com/nyampahit" target="_blank">@nyampahit</a></h5>
            </div>
            
        </div>
        <hr/>
        <i class="fas fa-trash-alt ic"></i>
        <h5 id="konf"></h5>
        <textarea class="form-control input-lg" id="sampah" rows="5" onkeyup="cnt()" style="z-index:58; border: 3px solid hsl(98,5%,25%); font-size:large; margin: 15px 5%; width:90%" maxlength="263"></textarea>
        <span id="cnt">263</span> <button class="btn btn-lg tmb" onclick="buang();">BUANGG!!</button>
        <br/><br/>
        
        <hr/>
        <i class="fas fa-heart ic"></i>
        <a href="http://twitter.com/nyampahit/" target="_blank">
        <button class="btn tmb">
        <i class="fab fa-twitter">@nyampahit</i>
        </button>
        </a>
        
    </div>
    
    <div class="foot">
        2020. dibuat tanpa kebencian oleh <a href="http://haizim.one/">haizim.one</a> 
    </div>
    </center>
</body>
</html>
