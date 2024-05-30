let items = document.getElementsByClassName("item");
//[...items].forEach(e => addAos(e));

window.onload = function(){};

document.getElementById("img-img").addEventListener("load", function() {
	gbr = document.getElementById("img-img");
 	if(gbr.width>=gbr.height){
 		gbr.style.width = "75%";
 		gbr.style.maxHeight = "unset";
 	}else{
 		gbr.style.width = "unset";
 		gbr.style.maxHeight = "85vh";
 	}
})

function addAos(itm) {
	let aosattr = document.createAttribute("data-aos");
	aosattr.value = "fade-up";
	itm.setAttributeNode(aosattr);
}
	
function setKImg(){
    let kImg = document.getElementsByTagName("img");
    [...kImg].forEach(i => {
    	i.addEventListener('click', function(){klikImg(this)},false)
    });
}

function klikImg(imgk){
    act = imgk.getAttribute("act");
    more = imgk.getAttribute("more");
    
    console.log(act+" >> "+more);
    
    switch (act) {
    	case "link":
    		pindah(more);
    		window.location = more;
    		break;
    	case "detail":
    		document.getElementById("detail-img-head").innerText = imgk.alt;
    		document.getElementById("img-img").src = imgk.src;
    		document.getElementById("p-img").innerHTML = more
    		pindah("gambar : "+imgk.alt)
    		$('#modal-detail-img').modal('show');
    		break;
    }
}

ep = {};


const sini = window.location.toString();
const tetep = [sini, sini+"#",sini+"/",sini+"/#"];

const alink = document.getElementsByTagName("a");
[...alink].forEach(i => {
    i.addEventListener('click', function(event){
        //event.preventDefault();
        // console.log("event : "+event);
        tuju = cariLink(event.target);
        tujuan = tuju.href;
        //console.log("tujuan : "+tujuan);
        wind = tuju.target;
        ep = event;
        if(tetep.includes(tujuan) === false){
            pindah(tujuan);
        }else{
            event.preventDefault();
        }
    },false)
});

function cariLink(elemen){
    let elm = elemen;
    let lanjut = "ya";
    while(lanjut=="ya"){
        if(typeof(elm.href) !== "undefined"){
            lanjut="gak";
            return elm;
        }else{
            elm = elm.parentElement;
            lanjut = "ya";
        }
    }
    
}


function pindah(tujuan) {
	const disini = window.location.pathname.replace("/","");
// 	console.log("tujuan : "+tujuan);
	let datas = "act=pindah&satu="+disini+"&dua="+tujuan;
    
    
 	    $.ajax({type:"POST", url:"ajax.php", data: datas, success:function(data){
 		    
     	}});
    
}

document.querySelector('html').classList.remove('no-js');

  if (!window.Cypress) {
    const scrollCounter = document.querySelector('.js-scroll-counter');

    AOS.init({
      mirror: true
    });

    document.addEventListener('aos:in', function(e) {
      console.log('in!', e.detail);
    });

    window.addEventListener('scroll', function() {
      scrollCounter.innerHTML = window.pageYOffset;
    });
  }
  
