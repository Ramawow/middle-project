// target box
const boxFace = document.querySelectorAll('.face-box');

// nama members
const members = document.querySelectorAll('.member');
const hyewon = document.querySelector('.hyewon');
const yena = document.querySelector('.yena');
const yujin = document.querySelector('.yujin');
const wony = document.querySelector('.wonyoung');
const chaey = document.querySelector('.chaeyeon');
const sakura = document.querySelector('.sakura');
const chaewon = document.querySelector('.chaewon');
const yuri = document.querySelector('.yuri');
const minju = document.querySelector('.minju');
const hitomi = document.querySelector('.hitomi');
const nako = document.querySelector('.nako');
const eunbi = document.querySelector('.eunbi');
const hvrMe = document.querySelector('.hvr');
const jumbotron = document.querySelector('.jumbotron');

// ini berhasil
for(let i = 0; i < boxFace.length; i++){
    boxFace[0].addEventListener('mouseover', function(){
        hyewon.style.visibility = 'visible';
    })
    boxFace[1].addEventListener('mouseover', function(){
        yena.style.visibility = 'visible';
    })
    boxFace[2].addEventListener('mouseover', function(){
        yujin.style.visibility = 'visible';
    })
    boxFace[3].addEventListener('mouseover', function(){
        wony.style.visibility = 'visible';
    })
    boxFace[4].addEventListener('mouseover', function(){
        chaey.style.visibility = 'visible';
    })
    boxFace[5].addEventListener('mouseover', function(){
        sakura.style.visibility = 'visible';
    })
    boxFace[6].addEventListener('mouseover', function(){
        chaewon.style.visibility = 'visible';
    })
    boxFace[7].addEventListener('mouseover', function(){
        yuri.style.visibility = 'visible';
    })
    boxFace[8].addEventListener('mouseover', function(){
        minju.style.visibility = 'visible';
    })
    boxFace[9].addEventListener('mouseover', function(){
        hitomi.style.visibility = 'visible';
    })
    boxFace[10].addEventListener('mouseover', function(){
        nako.style.visibility = 'visible';
    })
    boxFace[11].addEventListener('mouseover', function(){
        eunbi.style.visibility = 'visible';
    })

}



boxFace.forEach(function(e){
    e.addEventListener('mouseleave', function(){
        members.forEach(function (d){
            d.style.visibility = 'collapse';
        })
    })

});

const hov = () => {
    hvrMe.classList.add('hvr-remove');
}
const hov2 = () =>{
    hvrMe.classList.remove('hvr-remove');
}
jumbotron.addEventListener('mouseover', () =>{
    hov();
})
jumbotron.addEventListener('mouseleave', () =>{
    hov2();
})
