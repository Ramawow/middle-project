const hdBlur = document.querySelector('header');
window.addEventListener('scroll', () => {
    hdBlur.classList.toggle('hdr-blur', window.scrollY > 0);
})
