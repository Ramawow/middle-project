$(document).ready( function(){

    let alamat = document.URL;
    
    if(alamat.includes("#") === true ){
        document.getElementById('bar').scrollIntoView();
        let almt = alamat.split("#");
        let bagian = almt[1];
        
        let lebar = document.getElementById(bagian).offsetWidth;
        document.getElementById(bagian).style.left= "calc((100vw - "+(lebar)+"px) / 2)";
        document.getElementById(bagian).style.top = "2em";
        bersih();
        tampil(bagian);
    }

    waktu();
    setInterval(waktu,1000);
 
  //dragable element
  /*dragElement(document.getElementById("about"));
  dragElement(document.getElementById("experiment"));
  dragElement(document.getElementById("call"));
  dragElement(document.getElementById("skill"));
  dragElement(document.getElementById("real"));
  dragElement(document.getElementById("blog"));
  dragElement(document.getElementById("post"));
  dragElement(document.getElementById("404"));*/
  
    let bingkai = document.getElementsByClassName("window");
    for(i = 0; i < bingkai.length; i++) {
        dragElement(bingkai[i]);
        //console.log(jendela[i].id+" hilang");
    }
  
  ganti(document.getElementById("tema").value);
  //posisi();
  
}); 


window.addEventListener('hashchange', function (event) {
  let adres = document.URL;
  document.getElementById('bar').scrollIntoView();
  let adrs = adres.split("#");
  //let bag = window.location.hash;
  let bag = adrs[1];

  let lebar = document.getElementById(bag).offsetWidth;
  document.getElementById(bag).style.left= "calc((100vw - "+(lebar)+"px) / 2)";
  document.getElementById(bag).style.top = "2em";

  tampil(bag);
  console.log("alamat : "+adres);
  console.log(bag);
});

function waktu(){
  var d = new Date(); // for now
  var jam = d.getHours(); 
  var menit = d.getMinutes();
  var dtk = d.getSeconds();
  var detik = ("0" + dtk).slice(-2);
  var tgl = d.getDate();
  var bln = d.getMonth()+1;
  var thn = d.getFullYear();

  document.getElementById("waktu").innerText = tgl+"/"+bln+"/"+thn+" "+jam+":"+menit+":"+detik;
}


///////////////////dragable element start///////////////////
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    bar = document.getElementById("bar").offsetHeight;
    scrw = screen.width - elmnt.offsetWidth;
    // set the element's new position:
    ntop = (elmnt.offsetTop - pos2);
    nleft= (elmnt.offsetLeft - pos1);
    if(ntop<=bar){
      ntop=bar;
    }
    elmnt.style.top = ntop + "px";
    elmnt.style.left = nleft + "px";
    zin++;
    elmnt.style.zIndex=zin;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
///////////////////dragable element end///////////////////

///////////////////to top start///////////////////
zin=8;
function atas(eid){
  zin++;
  document.getElementById(eid).style.zIndex=zin;
  
  //console.log("atas-zin : "+zin);
  console.log(eid+".zin : "+zin);
}
///////////////////to top end///////////////////

//////////////////bawah start//////////////////
function bawah(id){

  document.getElementById(id).style.zIndex=document.getElementById(id).style.zIndex-5;
  //console.log("bawah-zin : "+zin);
  //console.log(id+".zin : "+zin);
}

///////////////////sembunyi start///////////////////
function sembunyi(e){
  document.getElementById(e).style.display = "none";
}
///////////////////sembunyi end///////////////////


///////////////////tampil start///////////////////
function tampil(e){
  if(document.getElementById("tema").value=="glass"){
    //document.getElementById(e).style.opacity = "0";
    document.getElementById(e).style.filter = "blur(5px)"; 
    
    /*for(i = 0; i <= 10; i++){
        setTimeout(() => {document.getElementById(e).style.opacity = (i*10)+"%";},200);
        console.log(e+" opacity : "+(i*10));
    }*/
  }
  document.getElementById(e).style.display = "unset";
  atas(e);
  history.pushState({id:e}, e,"https://haizim.one/#"+e);
  console.log("tampil : "+e);
  setTimeout(() => {document.getElementById(e).style.filter = "unset";},500);
}

function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (25+o.scrollHeight)+"px";
}

///////////postingan start/////////////////
function postingan(id,judul){
  //console.log("id : "+id+" // judul : "+judul);
  tampil("post");
  $("#postheader").html("Memuat..");
  $("#body-post").html("<h6>Memuat..</h6>");
  $.ajax({type:"POST", url:"/ajax.php", data:"cmd=post&one="+id, success:function(data){
    //console.log("----------------------");
    //console.log(data);
    $("#postheader").html(id+".pdf");
    //document.getElementById("post").style.width = (document.getElementById("body-post").offsetWidth+5)+"px";
    $("#body-post").html(data+"<br>");
    //document.getElementById("post").style.width = "unset";
    }
    });
  tampil("post");
  history.pushState({id:"post"}, judul,"https://haizim.one/blog/"+id);
  //bawah("blog");
}
////////postingan end//////////////////

///////////halaman start/////////////////
function halaman(id,judul){
  //console.log("id : "+id+" // judul : "+judul);
  tampil("post");
  $("#postheader").html("Memuat..");
  $("#body-post").html("<h6>Memuat..</h6>");
  $.ajax({type:"POST", url:"/ajax.php", data:"cmd=post&one="+id, success:function(data){
    //console.log("----------------------");
    //console.log(data);
    $("#postheader").html(id+".txt");
    //document.getElementById("post").style.width = (document.getElementById("body-post").offsetWidth+5)+"px";
    $("#body-post").html(data+"<br>");
    //document.getElementById("post").style.width = "unset";
    }
    });
  tampil("post");
  history.pushState({id:"post"}, judul,"https://haizim.one/p/"+id);
  //bawah("blog");
}
////////halaman end//////////////////

////////rsz start///////////////
function rsz(from){
  var t = from.split("-");
  var to = t[1];
  //console.log("from : "+from+" // to : "+to);
  document.getElementById(to).style.width = (document.getElementById(from).offsetWidth+5)+"px";
  console.log("rsz-width : "+document.getElementById(from).offsetWidth);
  document.getElementById(to).style.height = (document.getElementById(from).offsetHeight+10)+"px";
  console.log("rsz-height : "+document.getElementById(from).offsetHeight);
}
///////rsz end///////////////


//////expShow start//////////
function expShow(n){
  var judul = ["Telegram Chatbot Management System"
,"Game Pairs"
,"Cek Typo Bahasa Indonesia"
,"Twitter Analytics"
,"Trending Topic's Category Mining"
,"Simple Page Builder"
,"Query Visualizer"]; 
  var isi = ["Aplikasi ini berguna untuk memudahkan pembuatan chatbot Telegram tanpa harus mengerti bahasa pemrograman. Cukup dengan mengikuti alur yang ada. Maka Chatbot akan dibuat.<br><br><a href='https://haizim.one/iseng/bms/' target='_blank'><button class='btn-me'>Lihat</button></a> atau <a href='https://haizim.one/iseng/kantan/sho.php?id=semhas' target='_blank'><button class='btn-me'>Penjelasan Selengkapnya</button></a>",

"Game ini meminta pemain untuk mencocokkan dua buah kartu yang tertutup agar sama.<br> Game ini dibuat menggunakan bahasa Javascript sebagai bahasa utamanya dan PHP sebagai pendukungnya.<br><br><a href='https://haizim.one/iseng/pairs' target='_blank'><button class='btn-me'>Lihat</button></a>",

"Aplikasi ini berguna untuk mengecek apakah dalam tulisan yang dimasukkan mengandung typo ataukah tidak.<br>Jika ditemukan, maka pengguna diberi pilihan kata yang mendekatinya atau dapat menggantinya sendiri.<br><br><!--a href='' target='_blank'><button class='btn-me'>Penjelasan Selengkapnya</button></a> atau--> <a href='https://haizim.one/iseng/cek-typo' target='_blank'><button class='btn-me'>Lihat</button></a> atau <a href='https://haizim.one/blog/typo-indonesia/'><button class='btn-me'>Penjelasan Selengkapnya</button></a>",

"Terdiri dari dua jenis, yaitu <b>Trending Analytics</b> dan <b>Tweet Analytics</b>.<br><b>Trending Analytics :</b> berguna untuk melihat posisi dari suatu trending topic Twitter pada rentang waktu tertentu<br><b>Tweet Analytics :</b> ini memiliki fungsi yang mirip seperti <i>Drone Emprit</i> namun dengan beberapa fitur yang dikurangi<br><br>Keduanya saya buat menggunakan bahasa PHP.<br><br><a href='https://haizim.one/iseng/trend-history/analytics' target='_blank'><button class='btn-me'>Lihat</button></a>",

"Untuk melengkapi data kategori dari trending topic yang ada pada Trending Analytics diatas, maka saya membuat sebuah web crawler yang berfungsi untuk mengambil kategori dari trending topic yang ada.<br>Bahasa yang saya gunakan ialah python dengan selenium sebagai crawlernya.<br><br><a href='https://github.com/haizim/trending-category-crawl' target='_blank'><button class='btn-me'>Lihat</button></a>",
"Sebuah page builder sederhana, dimana kita dapat me-layout tampilan, menambah dan mengurangi item.<br>Kemudian, tampilan yang telah dibuat dapat langsung di-download hasilnya.<br>Dibuat dengan :<br><ul><li>HTML</li><li>CSS</li><li>Vanilla Js (90%an)</li><li>Bootstrap</li><li>Jquery dikit2</li><li>Summernote (big thanks to it) </li><li>FontAwesome</li></ul><a href='https://haizim.one/iseng/page-builder' target='_blank'><button class='btn-me'>Lihat</button></a>",
"Sebuah sistem yang saya buat karena di server hosting pribadi saya tidak mampu untuk menginstall Metabase. Sehingga saya memutuskan untuk mencoba membuatnya sendiri dengan bahasa PHP. Memiliki fitu untuk menambah koneksi database, membuat query, menyusun dashboard visualisasi dari query.<br/>Tools : PHP, Laravel(Laravolt), Livewire, SemanticUI, JQuery, PostgreSQL<br/><b>Demo</b><br/>Email : demo@haizim.one<br/>Password : Qwarty1234<br><br><a href='https://viz.haizim.one' target='_blank'><button class='btn-me'>Lihat</button></a><a href='https://github.com/haizim/viz' target='_blank'><button class='btn-me'>Github</button></a>"
];

  
  document.getElementById("exp-cont").innerHTML = isi[n];
  document.getElementById("exp-title").innerText = judul[n];
}
///////expShow end///////////////

//////expShowData start//////////
function expShowData(n){
  var judul = ["Mengukur Fanatisme Fandom Kpop Di Indonesia Dengan #MAMAVOTE2021"
,"Dashboard Tableau MAMAVOTE2021"
,"Cek Typo Bahasa Indonesia"
,"Twitter Analytics"
,"Trending Topic's Category Mining"
,"Visitor Monitoring"
,"Lexicon Sentiment Analytics"]; 
  var isi = ["Dengan mengambil data melalui twitter api, saya mengolah data tweet yang didapat untuk mengetahui seberapa fanatik fans grup/musisi Kpop yang berada di Indonesia.<br><br>Tools:<ul><li>PHP</li><li>Twitter API</li><li>MySQL(menampung)</li><li>CronJob</li><li>PostgreSQL(mengolah & analisis)</li><li>Metabase</li></ul><br><a href='https://l.haizim.one/mama2021' target='_blank'><button class='btn-me'>Lihat</button></a>",

"Masih dengan data yang sama, saya membuat dashboardnya di Tableau.<br><br><a href='https://public.tableau.com/app/profile/wahid8221/viz/MAMAVOTE2021/Dashboard1' target='_blank'><button class='btn-me'>Lihat</button></a>",

"Aplikasi ini berguna untuk mengecek apakah dalam tulisan yang dimasukkan mengandung typo ataukah tidak.<br>Jika ditemukan, maka pengguna diberi pilihan kata yang mendekatinya atau dapat menggantinya sendiri.<br><br><!--a href='' target='_blank'><button class='btn-me'>Penjelasan Selengkapnya</button></a> atau--> <a href='https://haizim.one/iseng/cek-typo' target='_blank'><button class='btn-me'>Lihat</button></a> atau <a href='https://haizim.one/blog/typo-indonesia/'><button class='btn-me'>Penjelasan Selengkapnya</button></a>",

"Terdiri dari dua jenis, yaitu <b>Trending Analytics</b> dan <b>Tweet Analytics</b>.<br><b>Trending Analytics :</b> berguna untuk melihat posisi dari suatu trending topic Twitter pada rentang waktu tertentu<br><b>Tweet Analytics :</b> ini memiliki fungsi yang mirip seperti <i>Drone Emprit</i> namun dengan beberapa fitur yang dikurangi<br><br>Keduanya saya buat menggunakan bahasa PHP.<br><br><a href='https://haizim.one/iseng/trend-history/analytics' target='_blank'><button class='btn-me'>Lihat</button></a>",

"Untuk melengkapi data kategori dari trending topic yang ada pada Trending Analytics diatas, maka saya membuat sebuah web crawler yang berfungsi untuk mengambil kategori dari trending topic yang ada.<br>Bahasa yang saya gunakan ialah python dengan selenium sebagai crawlernya.<br><br><a href='https://github.com/haizim/trending-category-crawl' target='_blank'><button class='btn-me'>Lihat</button></a>",
"Karena website saya tidak menggunakan CMS dan berisi berbagai project saya, maka saya membuat pencatat pengunjung sendiri. Dan halaman ini merupakan dashboard yang memungkinkan saya memonitor pengunjung.<br><br/>Tools:<ul><li>HTML</li><li>CSS</li><li>PHP</li><li>MySQL</li><li>Bootstrap</li><li>Chart.js</li></ul><br/><a href='https://haizim.one/visitor' target='_blank'><button class='btn-me'>Lihat</button></a>",
"Salah satu metode analisis sentimen yang paling sederhana ialah lexicon. Maka saya mencoba untuk membuatnya dengan bahasa Javascript. Namun, algoritma lexicon yang saya terapkan di sini sudah saya modifikasi.<br/><br/>Tools:<ul><li></li>HTML</li><li>Javascript</li><li>CSS</li><li>JQuery</li><li>AJAX</li><li>Bootstrap</ul><br><a href='https://haizim.one/iseng/sentijs' target='_blank'><button class='btn-me'>Lihat</button></a>"
];

  
  document.getElementById("exp-cont").innerHTML = isi[n];
  document.getElementById("exp-title").innerText = judul[n];
}
///////expShow end///////////////

//////sampaikan start//////////
function sampaikan(){
  var nama = document.getElementById("call-nama").value;
  var email = document.getElementById("call-email").value;
  var pesan = document.getElementById("call-pesan").value;
  $.ajax({type:"POST", url:"/ajax.php", data:"cmd=sampaikan&one="+nama+"&two="+email+"&three="+pesan, success:function(data){
    document.getElementById("call-cont").innerHTML = data;
  }
  });
}
//////sampaikan end//////////


//////sampaikanlagi start//////////
function sampaikanlagi(){
    document.getElementById("call-cont").innerHTML = "<input type='text' id='call-nama' class='form-in' placeholder='Nama'><br><br><input type='text' id='call-email' class='form-in' placeholder='Email'><br><br><textarea type='text' id='call-pesan' class='form-in' placeholder='Pesan' onkeyup='textAreaAdjust(this)'></textarea><br><br><center><button class='btn-me' onclick='sampaikan()'>Sampaikan</button></center>";
}
//////sampaikanlagi end//////////


////////// bersih mulai////////////////
function bersih(){
    var jendela = document.getElementsByClassName("window");
    for(i = 0; i < jendela.length; i++) {
      jendela[i].style.display = "none";
      //console.log(jendela[i].id+" hilang");
    }
}
//////////bersih selesai//////////////



//////////nyasar mulai/////////////////
function nyasar(pesan){
    document.getElementById("body-404").innerHTML = pesan;
    let lebar = document.getElementById('404').offsetWidth;
    document.getElementById('404').style.left= 'calc((100vw - '+(lebar)+'px) / 2)';
    bersih();
    tampil('404');
}
/////////nyasar selesai//////////////

function ganti(stl){
  console.log("----------------------");
  console.log("style : "+stl);   
  $.ajax({type:"POST", url:"/ajax.php", data:"cmd=style&one="+stl, success:function(data){
    
    //console.log(data);
    document.getElementById("setail").innerHTML = data;
    posisi();
    }
  });
}

function tema(){
  document.getElementById("body").style.filter = "blur(5px)";
  var tm = document.getElementById("tema").value;
  ganti(tm);
  /*var explist = document.getElementById("exp-list");
  if(explist){
    if(tm=="retro"){
        explist.style.backgroundColor = "#ffbb0c";
    }else if(tm=="glass"){
        explist.style.backgroundColor = "hsla(43,100%,92%,.85)";
    }
  }*/
  setTimeout(() => {document.getElementById("body").style.filter = "unset";},250);
}

function posisi(){
  var layar = window.screen.orientation.type;
  console.log("orientation : "+layar);
    if(layar.includes("landscape") === true){
        var wm = document.getElementById('menu').offsetWidth;
      document.getElementById('menu').style.left= "calc((100vw - "+(wm)+"px) / 2)";
    }

    if(layar.includes("portrait") === true){
        var hm = document.getElementById('menu').offsetHeight;
        var hb = document.getElementById('bar').offsetHeight;

        var wnd = document.getElementsByClassName('window');
        for(i = 0; i < wnd.length; i++) {
            wnd[i].style.top = hb+"px";
        }

        var wb = document.getElementsByClassName('win-body');
        for(j = 0; j < wb.length; j++) {
            wb[j].style.height = "calc(90vh - "+hm+"px) !important";
        }    

        //$(".win-body").css("height","calc(90vh - "+hm+"px) !important");
        //console.log("calc(90vh - "+hm+"px) !important");
        //console.log("hm : "+hm);
        //console.log("hb : "+hb);
    }
    console.log("posisi");
}