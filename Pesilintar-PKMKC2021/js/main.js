$(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
    });
});

var dt = new Date();
document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("tanggalwaktu2").innerHTML = dt.toLocaleDateString();

var dt = new Date();
document.getElementById("tanggalwaktu3").innerHTML = dt.toLocaleDateString();


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll == 0) {
            $(".nav-1").css("background", "rgba(0, 0, 0, 0.090)");
            $(".nav-4").css("background", "transparent");
            $(".nav-3").css("background", "transparent");
            $(".nav-2").css("background", "transparent");
        } else if (scroll > 300 && scroll < 900) {
            $(".nav-2").css("background", "rgba(0, 0, 0, 0.090)");
            $(".nav-4").css("background", "transparent");
            $(".nav-3").css("background", "transparent");
            $(".nav-1").css("background", "transparent");
        } else if (scroll > 900 && scroll < 1700) {
            $(".nav-3").css("background", "rgba(0, 0, 0, 0.090)");
            $(".nav-4").css("background", "transparent");
            $(".nav-2").css("background", "transparent");
            $(".nav-1").css("background", "transparent");
        } else if (scroll > 1700 && scroll < 2700) {
            $(".nav-4").css("background", "rgba(0, 0, 0, 0.090)");
            $(".nav-3").css("background", "transparent");
            $(".nav-2").css("background", "transparent");
            $(".nav-1").css("background", "transparent");
        } else {}
    })
})
