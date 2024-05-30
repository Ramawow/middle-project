new TypeIt("#element", {
    strings: "",
    speed: 60,
    loop: false
  }).go();


  $(document).ready(function(){
    $(".btn-aff").mouseenter(function(){
      $('.carousel').css('boxShadow','0 0 15px 0 black');
      $('.carousel').css('transform','scale(.75)');
    });

    $(".btn-aff").mouseleave(function(){
        $('.carousel').css('boxShadow','none');
        $('.carousel').css('transform','scale(.7)');
      });





    $(window).scroll(function(){
        if($(window).scrollTop() > 80) {
            $('nav').addClass('');
            $('nav').removeClass('bg-transparent');
            
        } else {
            $('nav').removeClass('bg-white');
            $('nav').addClass('bg-transparent');
            
        }
    })


    

    $(window).scroll(function(){
        if($(window).scrollTop() < 400) {
          $('.button-up').css('opacity','0');  
            
        } else {
            $('.button-up').css('opacity','1');  
        }
    })
    
  });

