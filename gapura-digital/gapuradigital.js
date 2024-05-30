function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12){
        hrs = 'PM';
    }
    else{
        hrs = 'AM';
    }
    document.getElementById('clock-o').innerHTML =
    h + ":" + m + " " +hrs;
    var t = setTimeout(startTime, 500);
    
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();



