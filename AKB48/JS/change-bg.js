const bd = document.querySelector('body');
const dark = document.querySelector('.dark');
let darkMode = localStorage.getItem('darkMode');
const i = document.querySelector('.cg-mode .dark i');
const cards = document.querySelectorAll('.mmb');
const cards2 = document.querySelectorAll('.card');
const cardShadow = 'mmb-tgl';
const boxesDark = document.querySelectorAll('.box');

const ubahIcon = () => {
    i.classList.add('fa-sun');
}
const ubahIcon2 = () => {
    i.classList.remove('fa-sun');
}

const ubahBayang = () => {
    cards.forEach(function(card){
        card.classList.add(cardShadow);
    })
}

const hilangBayang = () => {
    cards.forEach(function(card){
        card.classList.remove(cardShadow);
    })
}
// --------------
const ubahBayang2 = () => {
    cards2.forEach(function(card2){
        card2.classList.add('cardt');
    })
}

const hilangBayang2 = () => {
    cards2.forEach(function(card2){
        card2.classList.remove('cardt');
    })
}
// -------------------
const ubahBayang3 = () => {
    boxesDark.forEach(function(box){
        box.classList.add('box-dark');
    })
}

const hilangBayang3 = () => {
    boxesDark.forEach(function(box){
        box.classList.remove('box-dark');
    })
}




const enabledDark = () => {
    bd.classList.add('body-two');
    localStorage.setItem('darkMode', 'enabled');
}
const disabledDark = () => {
    bd.classList.remove('body-two');
    localStorage.setItem('darkMode', 'null');
}
if (darkMode === 'enabled'){
    enabledDark();
    ubahIcon();
    ubahBayang();
    ubahBayang2();
    ubahBayang3();
}



dark.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled'){
        enabledDark();
        ubahIcon();
        ubahBayang();
        ubahBayang2();
        ubahBayang3();
    }else{
        disabledDark();
        ubahIcon2();
        hilangBayang();
        hilangBayang2();
        hilangBayang3();
    }
})
// dark.addEventListener('click', () => {
//     disabledDark();
// })
