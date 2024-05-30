'use strict';
$(function () {
  $.validator.setDefaults({
    submitHandler: function () {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbx9fOltRWqPmac5WZiQ-3ADLgWTrvM-idrqRPRrETVKm7yxUn_loo-Uv8YabfdH1zEV/exec';
      const form = document.forms['casecontact'];

      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const Alert = document.querySelector('.alert');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');

        fetch(scriptURL, {method: 'POST', body: new FormData(form)})
          .then((response) => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            Alert.classList.toggle('d-none');

            form.reset();

            console.log('Success!', response);
          })
          .catch((error) => console.error('Error!', error.message));
      });
    },
  });

  $('#signupForm1').validate({
    rules: {
      nama: 'required',
      pesan: 'required',
      nama: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      agree1: 'required',
    },
    messages: {
      nama: 'Please enter your username',
      pesan: 'Please enter your messages',
      nama: {
        required: 'Please enter a username',
      },
      email: 'Please enter a valid email address',
    },
    errorElement: 'em',
    errorPlacement: function (error, element) {
      // Add the `help-block` class to the error element
      error.addClass('help-block');

      // Add `has-feedback` class to the parent div.form-group
      // in order to add icons to inputs
      element.parents('.col-span-6').addClass('has-feedback');

      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent('label'));
      } else {
        error.insertAfter(element);
      }

      // Add the span element, if doesn't exists, and apply the icon classes to it.
      if (!element.next('span')[0]) {
        $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
      }
    },
    success: function (label, element) {
      // Add the span element, if doesn't exists, and apply the icon classes to it.
      if (!$(element).next('span')[0]) {
        $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).parents('.col-span-6').addClass('has-error').removeClass('has-success');
      $(element).next('span').addClass('glyphicon-remove').removeClass('glyphicon-ok');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).parents('.col-span-6').addClass('has-success').removeClass('has-error');
      $(element).next('span').addClass('glyphicon-ok').removeClass('glyphicon-remove');
    },
  });

  $('#myDiv').venomButton({
    phone: '+62 852 7013 6884',
    message: 'Saya mau pesan case 3d...',
    chatMessage: 'Hi there 👋<br><br>Hallo mau pesan Case Custom handpone..',
    avatar: './assets/avatar.png',
    showPopup: true,
    position: 'right',
    linkButton: false,
    showOnIE: false,
    nameClient: 'Huta Muara',
    headerTitle: 'Admin',
  });

  $('.nav_menu').click(function () {
    $('.nav_menu').removeClass('active');
    $(this).addClass('active');
  });

  $('.icon').click(function () {
    $('.icon').removeClass('active');
    $(this).addClass('active');
  });

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /*[ Fixed Header ]
    ===========================================================*/
  var header = $('.header');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 25) {
      $(header).addClass('header-fixed');
    } else {
      $(header).removeClass('header-fixed');
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  /*--------------------------
        Banner Slider
    ----------------------------*/
  $('.banner__slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });
})(jQuery);
