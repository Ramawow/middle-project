const icon = document.querySelectorAll('.footer a');
icon.forEach(function(e){
    e.addEventListener('mouseleave', function(){
        e.classList.toggle('a-icon');
    })

})
