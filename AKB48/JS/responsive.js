const tombolBar = document.querySelector('.fa-bars');
const menu = document.querySelector('.responsive-menu');



const menuEnabled = () => {
    menu.classList.toggle('rsv-mn-in');

}


tombolBar.addEventListener('click', show);

function show(){
    menuEnabled();
    tombolBar.classList.toggle('fa-times');
}
